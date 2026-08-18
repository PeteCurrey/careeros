import { NextResponse, type NextRequest } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server';
import { evaluateAgeBracket } from '@/lib/auth/age-gating';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, dateOfBirth, guardianEmail, agreedToTerms } = body;

    if (!email || !dateOfBirth || !agreedToTerms) {
      return NextResponse.json(
        { error: 'Email, date of birth, and terms agreement are required.' },
        { status: 400 }
      );
    }

    // Evaluate Age Policy
    const ageEval = evaluateAgeBracket(dateOfBirth);

    // Hard block under-13
    if (ageEval.isHardBlocked) {
      return NextResponse.json(
        { error: 'Direct registration is not available for users under 13.' },
        { status: 403 }
      );
    }

    // Require guardian email for 13-15
    if (ageEval.requiresGuardianConsent && !guardianEmail) {
      return NextResponse.json(
        { error: 'Parent or guardian email is required for ages 13–15.' },
        { status: 400 }
      );
    }

    const adminDb = createAdminClient();

    // Trigger Supabase Auth OTP send
    const { error: otpError } = await adminDb.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
        data: {
          date_of_birth: dateOfBirth,
          age_bracket: ageEval.ageBracket,
          guardian_email: guardianEmail || null,
        },
      },
    });

    if (otpError) {
      // Generic error response to prevent user enumeration
      console.error('OTP Send error:', otpError);
    }

    return NextResponse.json({
      success: true,
      message: 'If the email address is valid, a 6-digit verification code has been sent.',
      ageBracket: ageEval.ageBracket,
      requiresGuardianConsent: ageEval.requiresGuardianConsent,
    });
  } catch (error) {
    console.error('Error in /api/auth/otp/send:', error);
    return NextResponse.json(
      { error: 'Unable to process verification request. Please try again.' },
      { status: 500 }
    );
  }
}
