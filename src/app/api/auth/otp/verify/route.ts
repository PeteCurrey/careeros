import { NextResponse, type NextRequest } from 'next/server';
import crypto from 'crypto';
import { createClient, createAdminClient } from '@/lib/supabase/server';
import { evaluateAgeBracket, validateAndFormatDOB } from '@/lib/auth/age-gating';
import { recordUserSecurityEvent } from '@/lib/auth/passkeys';
import { generateCorrelationId, hashEmailForLog, logAuthEvent } from '@/lib/auth/auth-logger';
import { ROUTES } from '@/lib/routes';

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  const correlationId = generateCorrelationId();

  try {
    const body = await request.json().catch(() => ({}));
    const { email, token, dateOfBirth, guardianEmail } = body;

    const emailHash = hashEmailForLog(email);

    logAuthEvent({
      correlationId,
      timestamp: new Date().toISOString(),
      operation: 'otp_verify',
      stage: 'request_received',
      success: true,
      emailHash,
      metadata: { hasToken: !!token, hasDob: !!dateOfBirth },
    });

    // 1. Validation
    if (!email || !token || typeof token !== 'string') {
      return NextResponse.json(
        { error: 'Email and 6-digit verification code are required.' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanToken = token.trim();

    if (cleanToken.length !== 6 || !/^\d{6}$/.test(cleanToken)) {
      return NextResponse.json(
        { error: 'Enter a valid 6-digit numeric verification code.' },
        { status: 400 }
      );
    }

    // 2. Validate / Format DOB if provided
    let canonicalDob: string | null = null;
    if (dateOfBirth) {
      const dobVal = validateAndFormatDOB(dateOfBirth);
      if (dobVal.isValid && dobVal.isoDate) {
        canonicalDob = dobVal.isoDate;
      }
    }

    // 3. Supabase Client Check
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    let authUserId: string = '';
    let sessionData: unknown = null;

    if (!supabaseUrl || !serviceRoleKey) {
      logAuthEvent({
        correlationId,
        timestamp: new Date().toISOString(),
        operation: 'otp_verify',
        stage: 'auth_provider_call',
        success: false,
        supabaseErrorCode: 'SUPABASE_CONFIG_MISSING',
        safeMessage: 'Supabase credentials missing; handling gracefully for dev environment.',
      });

      const isDev = process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_APP_ENV === 'development';
      if (isDev) {
        authUserId = `dev_usr_${crypto.randomBytes(8).toString('hex')}`;
        sessionData = { user: { id: authUserId, email: cleanEmail } };
      } else {
        return NextResponse.json(
          { error: 'We couldn’t complete verification right now. Please try again.' },
          { status: 500 }
        );
      }
    } else {
      // Use SSR client with cookies to establish authenticated session in browser
      const supabase = await createClient();

      const { data: authData, error: verifyError } = await supabase.auth.verifyOtp({
        email: cleanEmail,
        token: cleanToken,
        type: 'email',
      });

      if (verifyError || !authData?.user) {
        logAuthEvent({
          correlationId,
          timestamp: new Date().toISOString(),
          operation: 'otp_verify',
          stage: 'auth_provider_call',
          success: false,
          supabaseErrorCode: verifyError?.name || 'VERIFY_FAILED',
          safeMessage: verifyError?.message || 'Invalid or expired OTP',
        });

        const isExpired = verifyError?.message?.toLowerCase().includes('expired');
        return NextResponse.json(
          {
            error: isExpired
              ? 'That code has expired. Request a new one.'
              : 'That code isn’t correct. Try again.',
          },
          { status: 400 }
        );
      }

      authUserId = authData.user.id;
      sessionData = authData.session;
    }

    logAuthEvent({
      correlationId,
      timestamp: new Date().toISOString(),
      operation: 'otp_verify',
      stage: 'session_establishment',
      success: true,
      authUserId,
      emailHash,
    });

    // 4. Idempotent Profile & Consent Management (via Admin client if available)
    let profileId: string = '';
    let isNewAccount = false;
    let currentAssurance = 'EMAIL_VERIFIED';

    if (supabaseUrl && serviceRoleKey) {
      const adminDb = createAdminClient();

      // Check existing profile
      const { data: existingProfile } = await adminDb
        .from('profiles')
        .select('*')
        .eq('auth_user_id', authUserId)
        .maybeSingle();

      if (existingProfile) {
        profileId = existingProfile.id;
        currentAssurance = existingProfile.security_assurance || 'EMAIL_VERIFIED';

        // Reconcile missing DOB if newly provided
        if (!existingProfile.date_of_birth && canonicalDob) {
          const ageEval = evaluateAgeBracket(canonicalDob);
          await adminDb
            .from('profiles')
            .update({
              date_of_birth: canonicalDob,
              age_bracket: ageEval.ageBracket,
              updated_at: new Date().toISOString(),
            })
            .eq('id', profileId);
        }

        logAuthEvent({
          correlationId,
          timestamp: new Date().toISOString(),
          operation: 'profile_reconcile',
          stage: 'database_profile',
          success: true,
          profileId,
          authUserId,
        });
      } else {
        isNewAccount = true;
        const ageEval = canonicalDob
          ? evaluateAgeBracket(canonicalDob)
          : { ageBracket: 'ADULT_18_PLUS' as const, requiresGuardianConsent: false };

        const status = ageEval.requiresGuardianConsent ? 'PENDING_GUARDIAN_CONSENT' : 'ACTIVE';
        const consentState = ageEval.requiresGuardianConsent ? 'PENDING' : 'NOT_REQUIRED';

        const { data: newProfile, error: profileInsertError } = await adminDb
          .from('profiles')
          .insert({
            auth_user_id: authUserId,
            status,
            date_of_birth: canonicalDob || null,
            age_bracket: ageEval.ageBracket || 'ADULT_18_PLUS',
            guardian_email: guardianEmail || null,
            consent_state: consentState,
            security_assurance: 'EMAIL_VERIFIED',
          })
          .select()
          .single();

        if (profileInsertError) {
          logAuthEvent({
            correlationId,
            timestamp: new Date().toISOString(),
            operation: 'profile_create',
            stage: 'database_profile',
            success: false,
            databaseErrorCode: profileInsertError.code,
            safeMessage: profileInsertError.message,
          });

          return NextResponse.json(
            { error: 'Account created but failed to initialize profile. Please contact support.' },
            { status: 500 }
          );
        }

        profileId = newProfile.id;

        // Idempotently create identities record
        await adminDb.from('identities').upsert(
          {
            profile_id: profileId,
            provider: 'email',
            provider_user_id: authUserId,
            email: cleanEmail,
            verified_at: new Date().toISOString(),
          },
          { onConflict: 'provider,provider_user_id' }
        );

        // Record Consent Ledger
        const ipHash = request.headers.get('x-forwarded-for')
          ? crypto.createHash('sha256').update(request.headers.get('x-forwarded-for')!).digest('hex').substring(0, 16)
          : null;
        const uaHash = request.headers.get('user-agent')
          ? crypto.createHash('sha256').update(request.headers.get('user-agent')!).digest('hex').substring(0, 16)
          : null;

        // Ensure policy documents & versions exist or insert safely
        try {
          // Record in consent_audit_log
          await adminDb.from('consent_audit_log').insert({
            profile_id: profileId,
            age_bracket: ageEval.ageBracket || 'ADULT_18_PLUS',
            consent_state: consentState,
            verification_method: 'EMAIL_OTP',
            verification_metadata: {
              terms_version: '2026.08.1',
              privacy_version: '2026.08.1',
              verified_email: cleanEmail,
            },
            ip_address_hash: ipHash,
            user_agent_hash: uaHash,
            notes: 'Explicit clickthrough consent during signup verified via OTP.',
          });

          // Record in consents table
          await adminDb.from('consents').upsert(
            [
              {
                consent_type: 'TERMS_OF_SERVICE',
                subject_user_id: profileId,
                granted_by_user_id: profileId,
                relationship_type: 'SELF',
                purpose: 'Career OS General Terms of Service acceptance',
                legal_or_policy_basis: 'Contractual agreement (version 2026.08.1)',
                granted_at: new Date().toISOString(),
              },
              {
                consent_type: 'PRIVACY_POLICY',
                subject_user_id: profileId,
                granted_by_user_id: profileId,
                relationship_type: 'SELF',
                purpose: 'Career OS Privacy Policy acceptance and data processing consent',
                legal_or_policy_basis: 'Informed consent (version 2026.08.1)',
                granted_at: new Date().toISOString(),
              },
            ],
            { onConflict: 'subject_user_id,consent_type,organisation_id' }
          );

          logAuthEvent({
            correlationId,
            timestamp: new Date().toISOString(),
            operation: 'consent_record',
            stage: 'database_consent',
            success: true,
            profileId,
          });
        } catch (consentErr) {
          console.warn('Non-blocking consent record warning:', consentErr);
        }
      }

      // Record security audit event
      await recordUserSecurityEvent({
        profileId,
        eventType: isNewAccount ? 'account_created' : 'login_success',
        success: true,
        metadata: {
          authStage: 'email_otp_verified',
          isNewAccount,
        },
      });
    } else {
      profileId = `prof_${authUserId}`;
    }

    logAuthEvent({
      correlationId,
      timestamp: new Date().toISOString(),
      operation: 'otp_verify',
      stage: 'response_dispatched',
      success: true,
      profileId,
      authUserId,
      emailHash,
      durationMs: Date.now() - startTime,
    });

    return NextResponse.json({
      success: true,
      profileId,
      securityAssurance: currentAssurance,
      isNewAccount,
      redirectTo: ROUTES.APP_ONBOARDING,
      session: sessionData,
    });
  } catch (error: unknown) {
    logAuthEvent({
      correlationId,
      timestamp: new Date().toISOString(),
      operation: 'otp_verify',
      stage: 'error_caught',
      success: false,
      safeMessage: (error as Error).message || 'Unhandled exception in otp_verify',
      durationMs: Date.now() - startTime,
    });

    return NextResponse.json(
      { error: 'Verification failed. Please check your code and try again.' },
      { status: 500 }
    );
  }
}
