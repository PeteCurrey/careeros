import crypto from 'crypto';
import { cookies } from 'next/headers';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSession, AdminSecurityEventType } from '@/types/admin';

export const ADMIN_SESSION_COOKIE_NAME = '__Host-careeros-admin-session';
export const ADMIN_FALLBACK_COOKIE_NAME = 'careeros_admin_session'; // For localhost dev if __Host- is rejected by non-https
export const IDLE_TIMEOUT_MINUTES = parseInt(process.env.ADMIN_SESSION_IDLE_MINUTES || '30', 10);
export const ABSOLUTE_TIMEOUT_HOURS = parseInt(process.env.ADMIN_SESSION_MAX_HOURS || '8', 10);
export const STEP_UP_WINDOW_MINUTES = parseInt(process.env.ADMIN_STEP_UP_MINUTES || '15', 10);

/**
 * Generates a high-entropy 256-bit cryptographically secure session token.
 */
export function generateSessionToken(): string {
  return crypto.randomBytes(32).toString('base64url');
}

/**
 * Computes a SHA-256 hash of a session token for safe storage at rest.
 */
export function hashToken(token: string): string {
  return crypto.createHash('sha256').update(token).digest('hex');
}

/**
 * Hashes an IP address or User Agent to preserve privacy while supporting anomaly detection.
 */
export function hashMetadata(value?: string | null): string | undefined {
  if (!value) return undefined;
  return crypto.createHash('sha256').update(value).digest('hex').substring(0, 32);
}

/**
 * Creates a server-side record in public.admin_sessions and returns the raw token.
 */
export async function createServerAdminSession(params: {
  adminProfileId: string;
  supabaseUserId?: string;
  ipAddress?: string;
  userAgent?: string;
  deviceLabel?: string;
}): Promise<{ token: string; session: AdminSession }> {
  const token = generateSessionToken();
  const tokenHash = hashToken(token);

  const now = new Date();
  const expiresAt = new Date(now.getTime() + ABSOLUTE_TIMEOUT_HOURS * 60 * 60 * 1000);
  const idleExpiresAt = new Date(now.getTime() + IDLE_TIMEOUT_MINUTES * 60 * 1000);

  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from('admin_sessions')
    .insert({
      admin_profile_id: params.adminProfileId,
      session_token_hash: tokenHash,
      supabase_user_id: params.supabaseUserId,
      mfa_verified_at: now.toISOString(),
      step_up_verified_at: now.toISOString(),
      last_active_at: now.toISOString(),
      expires_at: expiresAt.toISOString(),
      idle_expires_at: idleExpiresAt.toISOString(),
      ip_address_hash: hashMetadata(params.ipAddress),
      user_agent_hash: hashMetadata(params.userAgent),
      device_label: params.deviceLabel || 'Admin Console Session',
    })
    .select('*')
    .single();

  if (error || !data) {
    throw new Error(`Failed to create admin session record: ${error?.message || 'Unknown error'}`);
  }

  // Record security event
  await recordAdminSecurityEvent({
    adminProfileId: params.adminProfileId,
    eventType: 'session_created',
    success: true,
    ipAddress: params.ipAddress,
    userAgent: params.userAgent,
    metadata: {
      sessionId: data.id,
      deviceLabel: data.device_label,
      expiresAt: data.expires_at,
    },
  });

  return { token, session: data as AdminSession };
}

/**
 * Validates a session token string against the database.
 * Enforces: revoked status, absolute timeout, and rolling idle timeout.
 */
export async function validateAdminSessionToken(
  token: string
): Promise<{ valid: boolean; session?: AdminSession; reason?: string }> {
  if (!token || token.length < 20) {
    return { valid: false, reason: 'invalid_token_format' };
  }

  const tokenHash = hashToken(token);
  const supabase = createAdminClient();

  const { data: session, error } = await supabase
    .from('admin_sessions')
    .select('*')
    .eq('session_token_hash', tokenHash)
    .single();

  if (error || !session) {
    return { valid: false, reason: 'session_not_found' };
  }

  // Check if revoked
  if (session.revoked_at) {
    return { valid: false, reason: 'session_revoked', session: session as AdminSession };
  }

  const now = new Date();
  const expiresAt = new Date(session.expires_at);
  const idleExpiresAt = new Date(session.idle_expires_at);

  // Check absolute expiration
  if (now > expiresAt) {
    return { valid: false, reason: 'session_expired_absolute', session: session as AdminSession };
  }

  // Check idle expiration
  if (now > idleExpiresAt) {
    return { valid: false, reason: 'session_expired_idle', session: session as AdminSession };
  }

  return { valid: true, session: session as AdminSession };
}

/**
 * Updates the rolling idle expiration and last_active_at timestamp.
 */
export async function touchAdminSession(sessionId: string): Promise<void> {
  try {
    const supabase = createAdminClient();
    const now = new Date();
    const newIdleExpiresAt = new Date(now.getTime() + IDLE_TIMEOUT_MINUTES * 60 * 1000);

    await supabase
      .from('admin_sessions')
      .update({
        last_active_at: now.toISOString(),
        idle_expires_at: newIdleExpiresAt.toISOString(),
      })
      .eq('id', sessionId);
  } catch (err) {
    console.error('Failed to touch admin session:', err);
  }
}

/**
 * Updates step_up_verified_at timestamp upon strong reauthentication.
 */
export async function recordStepUpSuccess(sessionId: string): Promise<void> {
  const supabase = createAdminClient();
  const now = new Date().toISOString();

  await supabase
    .from('admin_sessions')
    .update({
      step_up_verified_at: now,
      last_active_at: now,
    })
    .eq('id', sessionId);
}

/**
 * Revokes a specific admin session.
 */
export async function revokeAdminSession(
  sessionId: string,
  reason = 'user_requested_logout'
): Promise<void> {
  const supabase = createAdminClient();
  const now = new Date().toISOString();

  const { data: session } = await supabase
    .from('admin_sessions')
    .update({
      revoked_at: now,
      revocation_reason: reason,
    })
    .eq('id', sessionId)
    .select('admin_profile_id')
    .single();

  if (session?.admin_profile_id) {
    await recordAdminSecurityEvent({
      adminProfileId: session.admin_profile_id,
      eventType: 'session_revoked',
      success: true,
      metadata: { sessionId, reason },
    });
  }
}

/**
 * Revokes all active sessions for an administrator.
 */
export async function revokeAllAdminSessions(
  adminProfileId: string,
  exceptSessionId?: string,
  reason = 'revoke_all_sessions'
): Promise<void> {
  const supabase = createAdminClient();
  const now = new Date().toISOString();

  let query = supabase
    .from('admin_sessions')
    .update({
      revoked_at: now,
      revocation_reason: reason,
    })
    .eq('admin_profile_id', adminProfileId)
    .is('revoked_at', null);

  if (exceptSessionId) {
    query = query.neq('id', exceptSessionId);
  }

  await query;

  await recordAdminSecurityEvent({
    adminProfileId,
    eventType: 'all_sessions_revoked',
    success: true,
    metadata: { reason, exceptSessionId },
  });
}

/**
 * Helper to record administrative security events.
 */
export async function recordAdminSecurityEvent(params: {
  adminProfileId?: string;
  eventType: AdminSecurityEventType;
  success?: boolean;
  ipAddress?: string;
  userAgent?: string;
  metadata?: Record<string, unknown>;
}): Promise<void> {
  try {
    const supabase = createAdminClient();
    await supabase.from('admin_security_events').insert({
      admin_profile_id: params.adminProfileId,
      event_type: params.eventType,
      success: params.success !== false,
      ip_address_hash: hashMetadata(params.ipAddress),
      user_agent_hash: hashMetadata(params.userAgent),
      metadata: params.metadata || {},
    });
  } catch (err) {
    console.error('Failed to log admin security event:', err);
  }
}
