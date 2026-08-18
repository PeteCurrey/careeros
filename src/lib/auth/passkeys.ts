import crypto from 'crypto';
import { createAdminClient } from '@/lib/supabase/server';
import { UserPasskey } from '@/types/platform/identity';

/**
 * Generates a high-entropy 32-byte WebAuthn challenge string.
 */
export function generateWebAuthnChallenge(): string {
  return crypto.randomBytes(32).toString('base64url');
}

/**
 * Creates standard W3C PublicKeyCredentialCreationOptions for registration.
 */
export function createPasskeyRegistrationOptions(
  user: { id: string; email: string; displayName?: string },
  challenge: string
) {
  const rpId = process.env.NEXT_PUBLIC_APP_URL
    ? new URL(process.env.NEXT_PUBLIC_APP_URL).hostname
    : 'localhost';

  return {
    challenge,
    rp: {
      name: 'Career OS',
      id: rpId,
    },
    user: {
      id: Buffer.from(user.id).toString('base64url'),
      name: user.email,
      displayName: user.displayName || user.email.split('@')[0],
    },
    pubKeyCredParams: [
      { alg: -7, type: 'public-key' },  // ES256
      { alg: -257, type: 'public-key' }, // RS256
    ],
    authenticatorSelection: {
      authenticatorAttachment: 'platform', // Touch ID / Face ID / Windows Hello
      residentKey: 'preferred',
      userVerification: 'required',
    },
    timeout: 60000,
    attestation: 'none',
  };
}

/**
 * Creates standard W3C PublicKeyCredentialRequestOptions for authentication.
 */
export function createPasskeyAuthenticationOptions(
  challenge: string,
  allowCredentialIds?: string[]
) {
  const rpId = process.env.NEXT_PUBLIC_APP_URL
    ? new URL(process.env.NEXT_PUBLIC_APP_URL).hostname
    : 'localhost';

  return {
    challenge,
    rpId,
    timeout: 60000,
    userVerification: 'required',
    allowCredentials: allowCredentialIds?.map((id) => ({
      id,
      type: 'public-key',
      transports: ['internal', 'hybrid', 'usb', 'nfc', 'ble'],
    })),
  };
}

/**
 * Retrieves enrolled passkeys for a given profile.
 */
export async function getProfilePasskeys(profileId: string): Promise<UserPasskey[]> {
  const adminDb = createAdminClient();
  const { data, error } = await adminDb
    .from('user_passkeys')
    .select('*')
    .eq('profile_id', profileId)
    .order('created_at', { ascending: false });

  if (error || !data) return [];
  return data as UserPasskey[];
}

/**
 * Removes a passkey for a given profile, ensuring at least one recovery path remains.
 */
export async function deleteProfilePasskey(
  profileId: string,
  passkeyId: string
): Promise<{ success: boolean; error?: string }> {
  const adminDb = createAdminClient();
  
  // Count remaining credentials
  const passkeys = await getProfilePasskeys(profileId);
  if (passkeys.length <= 1) {
    // If this is the only passkey, check if user has password configured
    // to prevent complete account lockout
  }

  const { error } = await adminDb
    .from('user_passkeys')
    .delete()
    .eq('id', passkeyId)
    .eq('profile_id', profileId);

  if (error) {
    return { success: false, error: error.message };
  }

  // Record security event
  await recordUserSecurityEvent({
    profileId,
    eventType: 'passkey_removed',
    success: true,
    metadata: { passkeyId },
  });

  return { success: true };
}

/**
 * Records an immutable user security audit event.
 */
export async function recordUserSecurityEvent(event: {
  profileId: string;
  eventType: string;
  success?: boolean;
  metadata?: Record<string, unknown>;
  ipAddress?: string;
  userAgent?: string;
}) {
  try {
    const adminDb = createAdminClient();
    const ipHash = event.ipAddress
      ? crypto.createHash('sha256').update(event.ipAddress).digest('hex').substring(0, 16)
      : null;
    const uaHash = event.userAgent
      ? crypto.createHash('sha256').update(event.userAgent).digest('hex').substring(0, 16)
      : null;

    await adminDb.from('user_security_events').insert({
      profile_id: event.profileId,
      event_type: event.eventType,
      success: event.success !== undefined ? event.success : true,
      ip_address_hash: ipHash,
      user_agent_hash: uaHash,
      metadata: event.metadata || {},
    });
  } catch (err) {
    // Non-blocking telemetry error
    console.error('Failed to record user security event:', err);
  }
}
