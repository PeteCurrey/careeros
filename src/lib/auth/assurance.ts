import { createClient, createAdminClient } from '@/lib/supabase/server';
import { Profile, SecurityAssuranceLevel, DataClassificationLevel } from '@/types/platform/identity';
import { isAssuranceSufficientForDataClass } from './data-classification';

export interface SecurityGateEvaluation {
  allowed: boolean;
  reason?: string;
  requiredAction?: 'SIGNUP_REQUIRED' | 'VERIFICATION_REQUIRED' | 'SECURITY_SETUP_REQUIRED' | 'STEP_UP_REQUIRED' | 'GUARDIAN_CONSENT_REQUIRED' | 'UNDER_13_RESTRICTED';
  profile?: Profile;
}

/**
 * Server-side evaluation of the CareerOS Security Gate.
 * 
 * Enforces the core principle:
 * Authentication alone does NOT grant access to sensitive CareerOS personal data.
 * The session must have appropriate security assurance, age compliance, and status.
 */
export async function evaluateSecurityGate(
  requiredDataClass: DataClassificationLevel = 'CLASS_1_BASIC'
): Promise<SecurityGateEvaluation> {
  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    return {
      allowed: false,
      reason: 'Authentication required.',
      requiredAction: 'SIGNUP_REQUIRED',
    };
  }

  // Fetch application profile linked to auth user
  const adminDb = createAdminClient();
  const { data: profile, error: profileError } = await adminDb
    .from('profiles')
    .select('*')
    .eq('auth_user_id', user.id)
    .single();

  if (profileError || !profile) {
    // If auth user exists but profile is pending initialization
    return {
      allowed: false,
      reason: 'Profile setup required.',
      requiredAction: 'VERIFICATION_REQUIRED',
    };
  }

  // Check age-policy hard block
  if (profile.age_bracket === 'UNDER_13') {
    return {
      allowed: false,
      reason: 'Direct consumer registration restricted for users under 13.',
      requiredAction: 'UNDER_13_RESTRICTED',
      profile,
    };
  }

  // Check 13–15 guardian consent status
  if (profile.status === 'PENDING_GUARDIAN_CONSENT' && profile.consent_state !== 'GRANTED') {
    return {
      allowed: false,
      reason: 'Parent/Guardian consent verification pending.',
      requiredAction: 'GUARDIAN_CONSENT_REQUIRED',
      profile,
    };
  }

  // Check Data Classification Assurance Requirement
  const assurance: SecurityAssuranceLevel = profile.security_assurance || 'EMAIL_VERIFIED';
  const isSufficient = isAssuranceSufficientForDataClass(assurance, requiredDataClass);

  if (!isSufficient) {
    return {
      allowed: false,
      reason: `Account must be secured with Passkey or Password before accessing ${requiredDataClass}.`,
      requiredAction: 'SECURITY_SETUP_REQUIRED',
      profile,
    };
  }

  return {
    allowed: true,
    profile,
  };
}

/**
 * Throws an error or returns a redirect instruction if security gate evaluation fails.
 */
export async function enforceSecurityGate(
  requiredDataClass: DataClassificationLevel = 'CLASS_2_PERSONAL_CAREER'
): Promise<Profile> {
  const evaluation = await evaluateSecurityGate(requiredDataClass);

  if (!evaluation.allowed || !evaluation.profile) {
    const error = new Error(evaluation.reason || 'Security gate access denied');
    (error as unknown as { code: string }).code = evaluation.requiredAction || 'SECURITY_GATE_DENIED';
    throw error;
  }

  return evaluation.profile;
}
