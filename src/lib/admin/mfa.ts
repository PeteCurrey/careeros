import crypto from 'crypto';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminMfaFactor } from '@/types/admin';

/**
 * Generates a set of 10 single-use, high-entropy recovery codes.
 * Returns both the plaintext codes (for single-time user display) and their SHA-256 hashes (for DB storage).
 */
export function generateRecoveryCodes(count = 10): { plaintextCodes: string[]; hashedCodes: string[] } {
  const plaintextCodes: string[] = [];
  const hashedCodes: string[] = [];

  for (let i = 0; i < count; i++) {
    // 8-character alphanumeric formatted as XXXX-XXXX
    const raw = crypto.randomBytes(4).toString('hex').toUpperCase();
    const formatted = `${raw.slice(0, 4)}-${raw.slice(4, 8)}`;
    const hash = crypto.createHash('sha256').update(formatted).digest('hex');

    plaintextCodes.push(formatted);
    hashedCodes.push(hash);
  }

  return { plaintextCodes, hashedCodes };
}

/**
 * Stores hashed recovery codes in the database, invalidating any previous unconsumed codes.
 */
export async function storeRecoveryCodes(adminProfileId: string, hashedCodes: string[]): Promise<void> {
  const supabase = createAdminClient();

  // Delete previous unconsumed recovery codes
  await supabase
    .from('admin_recovery_codes')
    .delete()
    .eq('admin_profile_id', adminProfileId);

  // Insert new hashed codes
  const rows = hashedCodes.map((codeHash) => ({
    admin_profile_id: adminProfileId,
    code_hash: codeHash,
  }));

  const { error } = await supabase.from('admin_recovery_codes').insert(rows);
  if (error) {
    throw new Error(`Failed to store recovery codes: ${error.message}`);
  }
}

/**
 * Validates and consumes a single-use recovery code.
 * If valid, marks the code as used immediately so it cannot be replayed.
 */
export async function consumeRecoveryCode(
  adminProfileId: string,
  candidateCode: string
): Promise<{ valid: boolean; reason?: string }> {
  if (!candidateCode) {
    return { valid: false, reason: 'empty_code' };
  }

  const normalized = candidateCode.trim().toUpperCase();
  const hash = crypto.createHash('sha256').update(normalized).digest('hex');
  const supabase = createAdminClient();

  // Look for unused code matching the hash
  const { data: codeRecord, error } = await supabase
    .from('admin_recovery_codes')
    .select('id, used_at')
    .eq('admin_profile_id', adminProfileId)
    .eq('code_hash', hash)
    .single();

  if (error || !codeRecord) {
    return { valid: false, reason: 'invalid_code' };
  }

  if (codeRecord.used_at) {
    return { valid: false, reason: 'code_already_consumed' };
  }

  // Consume code
  const { error: updateError } = await supabase
    .from('admin_recovery_codes')
    .update({ used_at: new Date().toISOString() })
    .eq('id', codeRecord.id);

  if (updateError) {
    return { valid: false, reason: 'consumption_failed' };
  }

  return { valid: true };
}

/**
 * Retrieves the count of remaining unused recovery codes for an admin.
 */
export async function getRemainingRecoveryCodesCount(adminProfileId: string): Promise<number> {
  const supabase = createAdminClient();
  const { count } = await supabase
    .from('admin_recovery_codes')
    .select('*', { count: 'exact', head: true })
    .eq('admin_profile_id', adminProfileId)
    .is('used_at', null);

  return count || 0;
}

/**
 * Checks whether an admin profile has any enrolled MFA factors or recovery codes.
 */
export async function getAdminMfaFactors(adminProfileId: string): Promise<{
  factors: AdminMfaFactor[];
  hasTotp: boolean;
  hasPasskey: boolean;
  hasMfaEnrolled: boolean;
  remainingRecoveryCodes: number;
}> {
  const supabase = createAdminClient();

  const [{ data: factors }, remainingCodes] = await Promise.all([
    supabase
      .from('admin_mfa_factors')
      .select('*')
      .eq('admin_profile_id', adminProfileId)
      .is('revoked_at', null),
    getRemainingRecoveryCodesCount(adminProfileId),
  ]);

  const activeFactors = (factors || []) as AdminMfaFactor[];
  const hasTotp = activeFactors.some((f) => f.factor_type === 'totp');
  const hasPasskey = activeFactors.some((f) => f.factor_type === 'webauthn_passkey');

  return {
    factors: activeFactors,
    hasTotp,
    hasPasskey,
    hasMfaEnrolled: hasTotp || hasPasskey || remainingCodes > 0,
    remainingRecoveryCodes: remainingCodes,
  };
}
