import { NextResponse, type NextRequest } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server';
import { evaluateAgeBracket, validateAndFormatDOB } from '@/lib/auth/age-gating';
import { generateCorrelationId, hashEmailForLog, logAuthEvent } from '@/lib/auth/auth-logger';

// In-memory rate limiting store (per email hash & IP)
interface RateLimitEntry {
  count: number;
  firstRequestTime: number;
  lastRequestTime: number;
}
const rateLimitMap = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;
const MIN_COOLDOWN_MS = 25 * 1000; // 25s minimum between sends

function checkRateLimit(key: string): { allowed: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry) {
    rateLimitMap.set(key, { count: 1, firstRequestTime: now, lastRequestTime: now });
    return { allowed: true };
  }

  // Check window expiry
  if (now - entry.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(key, { count: 1, firstRequestTime: now, lastRequestTime: now });
    return { allowed: true };
  }

  // Check rapid fire cooldown
  if (now - entry.lastRequestTime < MIN_COOLDOWN_MS) {
    const retryAfter = Math.ceil((MIN_COOLDOWN_MS - (now - entry.lastRequestTime)) / 1000);
    return { allowed: false, retryAfterSeconds: retryAfter };
  }

  // Check max attempts
  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.ceil((RATE_LIMIT_WINDOW_MS - (now - entry.firstRequestTime)) / 1000);
    return { allowed: false, retryAfterSeconds: retryAfter };
  }

  entry.count++;
  entry.lastRequestTime = now;
  return { allowed: true };
}

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  const correlationId = generateCorrelationId();

  try {
    const body = await request.json().catch(() => ({}));
    const { email, dateOfBirth, guardianEmail, agreedToTerms } = body;

    const emailHash = hashEmailForLog(email);

    logAuthEvent({
      correlationId,
      timestamp: new Date().toISOString(),
      operation: 'otp_send',
      stage: 'request_received',
      success: true,
      emailHash,
      metadata: { hasDob: !!dateOfBirth, agreedToTerms: !!agreedToTerms },
    });

    // 1. Validate Email
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      logAuthEvent({
        correlationId,
        timestamp: new Date().toISOString(),
        operation: 'otp_send',
        stage: 'validation',
        success: false,
        emailHash,
        safeMessage: 'Invalid email address provided.',
      });
      return NextResponse.json(
        { error: 'Enter a valid email address.' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    // 2. Validate Terms Consent
    if (!agreedToTerms) {
      logAuthEvent({
        correlationId,
        timestamp: new Date().toISOString(),
        operation: 'otp_send',
        stage: 'validation',
        success: false,
        emailHash,
        safeMessage: 'Terms agreement not accepted.',
      });
      return NextResponse.json(
        { error: 'Please agree to the Terms of Service and Privacy Policy to continue.' },
        { status: 400 }
      );
    }

    // 3. Validate Date of Birth (Presentation -> Canonical YYYY-MM-DD)
    const dobValidation = validateAndFormatDOB(dateOfBirth);
    if (!dobValidation.isValid || !dobValidation.isoDate) {
      logAuthEvent({
        correlationId,
        timestamp: new Date().toISOString(),
        operation: 'otp_send',
        stage: 'validation',
        success: false,
        emailHash,
        safeMessage: dobValidation.error || 'Invalid date of birth.',
      });
      return NextResponse.json(
        { error: dobValidation.error || 'Enter your date of birth in MM/DD/YYYY format.' },
        { status: 400 }
      );
    }

    const canonicalDob = dobValidation.isoDate;

    // 4. Server-Side Age Policy Evaluation
    const ageEval = evaluateAgeBracket(canonicalDob);

    logAuthEvent({
      correlationId,
      timestamp: new Date().toISOString(),
      operation: 'otp_send',
      stage: 'age_policy_evaluated',
      success: true,
      emailHash,
      metadata: {
        age: ageEval.age,
        ageBracket: ageEval.ageBracket,
        isHardBlocked: ageEval.isHardBlocked,
        requiresGuardianConsent: ageEval.requiresGuardianConsent,
      },
    });

    // Hard block under-13 direct consumer registration
    if (ageEval.isHardBlocked) {
      logAuthEvent({
        correlationId,
        timestamp: new Date().toISOString(),
        operation: 'otp_send',
        stage: 'age_policy_evaluated',
        success: false,
        emailHash,
        safeMessage: 'Under-13 consumer registration blocked.',
      });
      return NextResponse.json(
        {
          error: 'Career OS does not offer direct consumer registration for users under 13. Please contact your school for an institutional invitation.',
          isHardBlocked: true,
        },
        { status: 403 }
      );
    }

    // Ages 13–15 require guardian email
    if (ageEval.requiresGuardianConsent) {
      if (!guardianEmail || typeof guardianEmail !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(guardianEmail.trim())) {
        logAuthEvent({
          correlationId,
          timestamp: new Date().toISOString(),
          operation: 'otp_send',
          stage: 'validation',
          success: false,
          emailHash,
          safeMessage: 'Guardian email required for age 13–15.',
        });
        return NextResponse.json(
          { error: 'Parent or guardian email is required for users ages 13–15.' },
          { status: 400 }
        );
      }
    }

    // 5. Server Rate Limiting
    const rateLimitKey = `${cleanEmail}_${request.headers.get('x-forwarded-for') || 'local'}`;
    const rateLimitResult = checkRateLimit(rateLimitKey);

    if (!rateLimitResult.allowed) {
      logAuthEvent({
        correlationId,
        timestamp: new Date().toISOString(),
        operation: 'otp_send',
        stage: 'rate_limit_checked',
        success: false,
        emailHash,
        safeMessage: `Rate limit exceeded. Retry after ${rateLimitResult.retryAfterSeconds}s`,
      });
      return NextResponse.json(
        {
          error: `Too many attempts. Please wait ${rateLimitResult.retryAfterSeconds || 30} seconds before requesting a new code.`,
          retryAfterSeconds: rateLimitResult.retryAfterSeconds,
        },
        { status: 429 }
      );
    }

    // 6. Supabase Environment Check & OTP Dispatch
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      logAuthEvent({
        correlationId,
        timestamp: new Date().toISOString(),
        operation: 'otp_send',
        stage: 'auth_provider_call',
        success: false,
        supabaseErrorCode: 'SUPABASE_CONFIG_MISSING',
        safeMessage: 'Supabase credentials unconfigured in environment.',
      });

      // If running in development / test without full Supabase cloud credentials
      const isDev = process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_APP_ENV === 'development';
      if (isDev) {
        return NextResponse.json({
          success: true,
          message: 'Verification code simulated for local environment.',
          ageBracket: ageEval.ageBracket,
          requiresGuardianConsent: ageEval.requiresGuardianConsent,
          canonicalDob,
        });
      }

      return NextResponse.json(
        { error: 'We couldn’t create your account right now. Please try again.' },
        { status: 500 }
      );
    }

    const adminDb = createAdminClient();

    const { error: otpError } = await adminDb.auth.signInWithOtp({
      email: cleanEmail,
      options: {
        shouldCreateUser: true,
        data: {
          date_of_birth: canonicalDob,
          age_bracket: ageEval.ageBracket,
          guardian_email: guardianEmail?.trim() || null,
        },
      },
    });

    if (otpError) {
      logAuthEvent({
        correlationId,
        timestamp: new Date().toISOString(),
        operation: 'otp_send',
        stage: 'auth_provider_call',
        success: false,
        supabaseErrorCode: otpError.name || 'OTP_ERROR',
        safeMessage: otpError.message,
      });

      if (otpError.message.toLowerCase().includes('rate') || otpError.message.toLowerCase().includes('limit')) {
        return NextResponse.json(
          { error: 'Too many requests. Please wait a moment before trying again.' },
          { status: 429 }
        );
      }
    }

    logAuthEvent({
      correlationId,
      timestamp: new Date().toISOString(),
      operation: 'otp_send',
      stage: 'response_dispatched',
      success: true,
      emailHash,
      durationMs: Date.now() - startTime,
    });

    // Uniform enumeration-safe response
    return NextResponse.json({
      success: true,
      message: 'If the email address is valid, a 6-digit verification code has been sent.',
      ageBracket: ageEval.ageBracket,
      requiresGuardianConsent: ageEval.requiresGuardianConsent,
      canonicalDob,
    });
  } catch (error: unknown) {
    logAuthEvent({
      correlationId,
      timestamp: new Date().toISOString(),
      operation: 'otp_send',
      stage: 'error_caught',
      success: false,
      safeMessage: (error as Error).message || 'Unhandled exception in otp_send',
      durationMs: Date.now() - startTime,
    });

    return NextResponse.json(
      { error: 'We couldn’t create your account right now. Please try again.' },
      { status: 500 }
    );
  }
}
