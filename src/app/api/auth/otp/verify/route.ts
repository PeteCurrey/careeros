import { NextResponse, type NextRequest } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server';
import { evaluateAgeBracket } from '@/lib/auth/age-gating';
import { recordUserSecurityEvent } from '@/lib/auth/passkeys';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, token, dateOfBirth, guardianEmail } = body;

    if (!email || !token) {
      return NextResponse.json(
        { error: 'Email and 6-digit verification code are required.' },
        { status: 400 }
      );
    }

    const adminDb = createAdminClient();

    // Verify OTP with Supabase Auth
    const { data: authData, error: verifyError } = await adminDb.auth.verifyOtp({
      email,
      token,
      type: 'email',
    });

    if (verifyError || !authData.user) {
      return NextResponse.json(
        { error: 'Invalid or expired verification code. Please check your code and try again.' },
        { status: 400 }
      );
    }

    const authUserId = authData.user.id;

    // Check if application profile exists
    const { data: existingProfile } = await adminDb
      .from('profiles')
      .select('*')
      .eq('auth_user_id', authUserId)
      .single();

    let profileId = existingProfile?.id;

    if (!existingProfile) {
      const ageEval = dateOfBirth ? evaluateAgeBracket(dateOfBirth) : null;
      const status = ageEval?.requiresGuardianConsent ? 'PENDING_GUARDIAN_CONSENT' : 'ACTIVE';
      const consentState = ageEval?.requiresGuardianConsent ? 'PENDING' : 'NOT_REQUIRED';

      const { data: newProfile, error: profileInsertError } = await adminDb
        .from('profiles')
        .insert({
          auth_user_id: authUserId,
          status,
          date_of_birth: dateOfBirth || null,
          age_bracket: ageEval?.ageBracket || 'ADULT_18_PLUS',
          guardian_email: guardianEmail || null,
          consent_state: consentState,
          security_assurance: 'EMAIL_VERIFIED', // Initial assurance
        })
        .select()
        .single();

      if (profileInsertError) {
        console.error('Error creating user profile:', profileInsertError);
        return NextResponse.json(
          { error: 'Account created but failed to initialize profile.' },
          { status: 500 }
        );
      }

      profileId = newProfile.id;

      // Link identity
      await adminDb.from('identities').insert({
        profile_id: profileId,
        provider: 'email',
        provider_user_id: authUserId,
        email,
        verified_at: new Date().toISOString(),
      });

      // Record security event
      await recordUserSecurityEvent({
        profileId,
        eventType: 'account_created',
        success: true,
      });
    } else {
      // Record login event
      await recordUserSecurityEvent({
        profileId,
        eventType: 'login_success',
        success: true,
      });
    }

    return NextResponse.json({
      success: true,
      profileId,
      assurance: existingProfile?.security_assurance || 'EMAIL_VERIFIED',
      session: authData.session,
    });
  } catch (error) {
    console.error('Error in /api/auth/otp/verify:', error);
    return NextResponse.json(
      { error: 'Verification failed. Please try again.' },
      { status: 500 }
    );
  }
}
