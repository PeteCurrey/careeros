import { createAdminClient } from '@/lib/supabase/server';
import { Profile } from '@/types/platform/identity';
import { recordUserSecurityEvent } from './passkeys';

export type SensitiveActionType =
  | 'CHANGE_EMAIL'
  | 'CHANGE_DOB'
  | 'REMOVE_PASSKEY'
  | 'CHANGE_PASSWORD'
  | 'EXPORT_PERSONAL_DATA'
  | 'DELETE_ACCOUNT'
  | 'REVOKE_ALL_SESSIONS';

export const STEP_UP_MAX_AGE_MS = 15 * 60 * 1000; // 15 minutes validity window

/**
 * Evaluates whether a session has recent step-up authentication.
 */
export function isStepUpActive(profile: Profile): boolean {
  if (!profile.last_stepped_up_at) return false;
  const steppedUpTime = new Date(profile.last_stepped_up_at).getTime();
  return Date.now() - steppedUpTime < STEP_UP_MAX_AGE_MS;
}

/**
 * Validates step-up authentication requirement for a sensitive action.
 */
export async function enforceStepUp(profile: Profile, action: SensitiveActionType): Promise<boolean> {
  const active = isStepUpActive(profile);
  if (!active) {
    const error = new Error(`Step-up authentication required for action: ${action}`);
    (error as unknown as { code: string }).code = 'STEP_UP_REQUIRED';
    throw error;
  }
  return true;
}

/**
 * Records successful step-up re-authentication timestamp on the profile.
 */
export async function recordStepUpSuccess(
  profileId: string,
  method: 'passkey' | 'password' | 'otp',
  metadata?: Record<string, unknown>
) {
  const adminDb = createAdminClient();
  const now = new Date().toISOString();

  await adminDb
    .from('profiles')
    .update({
      last_stepped_up_at: now,
      security_assurance: 'STEPPED_UP',
    })
    .eq('id', profileId);

  await recordUserSecurityEvent({
    profileId,
    eventType: 'step_up_success',
    success: true,
    metadata: { method, ...metadata },
  });
}
