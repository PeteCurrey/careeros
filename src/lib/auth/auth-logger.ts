import crypto from 'crypto';

export type AuthOperation =
  | 'otp_send'
  | 'otp_verify'
  | 'profile_create'
  | 'profile_reconcile'
  | 'identity_link'
  | 'consent_record'
  | 'passkey_challenge'
  | 'passkey_verify'
  | 'password_setup'
  | 'password_verify'
  | 'session_revoke'
  | 'step_up_verify';

export type AuthStage =
  | 'request_received'
  | 'validation'
  | 'age_policy_evaluated'
  | 'rate_limit_checked'
  | 'auth_provider_call'
  | 'session_establishment'
  | 'database_profile'
  | 'database_consent'
  | 'security_event_logged'
  | 'response_dispatched'
  | 'error_caught';

export interface StructuredAuthLog {
  correlationId: string;
  timestamp: string;
  operation: AuthOperation;
  stage: AuthStage;
  success: boolean;
  emailHash?: string | null;
  profileId?: string | null;
  authUserId?: string | null;
  supabaseErrorCode?: string | null;
  databaseErrorCode?: string | null;
  httpStatus?: number;
  durationMs?: number;
  safeMessage?: string;
  metadata?: Record<string, unknown>;
}

/**
 * Generates a unique correlation ID for an auth request.
 */
export function generateCorrelationId(): string {
  return `req_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
}

/**
 * Hashes an email for privacy-safe correlation without logging PII.
 */
export function hashEmailForLog(email?: string): string | null {
  if (!email) return null;
  return crypto.createHash('sha256').update(email.trim().toLowerCase()).digest('hex').substring(0, 12);
}

/**
 * Logs a structured auth transaction event.
 * Strips/omits all OTPs, tokens, passwords, secrets, headers, and excessive PII.
 */
export function logAuthEvent(event: StructuredAuthLog): void {
  const sanitizedMetadata: Record<string, unknown> = {};

  if (event.metadata) {
    for (const [key, value] of Object.entries(event.metadata)) {
      const lowerKey = key.toLowerCase();
      // Block sensitive keywords
      if (
        lowerKey.includes('password') ||
        lowerKey.includes('otp') ||
        lowerKey.includes('token') ||
        lowerKey.includes('secret') ||
        lowerKey.includes('key') ||
        lowerKey.includes('auth') ||
        lowerKey.includes('credential')
      ) {
        sanitizedMetadata[key] = '[REDACTED]';
      } else {
        sanitizedMetadata[key] = value;
      }
    }
  }

  const logEntry = {
    ...event,
    metadata: Object.keys(sanitizedMetadata).length > 0 ? sanitizedMetadata : undefined,
  };

  if (event.success) {
    console.log(`[AUTH_AUDIT] ${JSON.stringify(logEntry)}`);
  } else {
    console.error(`[AUTH_ERROR] ${JSON.stringify(logEntry)}`);
  }
}
