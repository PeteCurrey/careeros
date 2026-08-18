import { createAdminClient } from '@/lib/supabase/server';

const MAX_LOGIN_ATTEMPTS = parseInt(process.env.ADMIN_LOGIN_MAX_ATTEMPTS || '5', 10);
const WINDOW_MINUTES = parseInt(process.env.ADMIN_LOGIN_WINDOW_MINUTES || '15', 10);
const BASE_LOCKOUT_SECONDS = 30; // Progressive backoff starts at 30 seconds

/**
 * Checks and records rate-limiting attempts for sensitive administrative actions.
 * Operates in PostgreSQL, making it horizontal & serverless-safe.
 */
export async function checkRateLimit(
  identifier: string,
  maxAttempts: number = MAX_LOGIN_ATTEMPTS,
  windowMinutes: number = WINDOW_MINUTES
): Promise<{ allowed: boolean; remainingAttempts: number; retryAfterSeconds?: number }> {
  try {
    const supabase = createAdminClient();
    const now = new Date();

    const { data: record } = await supabase
      .from('admin_rate_limits')
      .select('*')
      .eq('identifier', identifier)
      .single();

    if (!record) {
      // First attempt
      await supabase.from('admin_rate_limits').insert({
        identifier,
        attempts_count: 1,
        first_attempt_at: now.toISOString(),
        last_attempt_at: now.toISOString(),
      });
      return { allowed: true, remainingAttempts: maxAttempts - 1 };
    }

    // Check if currently blocked
    if (record.blocked_until) {
      const blockedUntil = new Date(record.blocked_until);
      if (now < blockedUntil) {
        const retryAfterSeconds = Math.ceil((blockedUntil.getTime() - now.getTime()) / 1000);
        return {
          allowed: false,
          remainingAttempts: 0,
          retryAfterSeconds,
        };
      }
    }

    // Check if the rate window has expired
    const firstAttemptAt = new Date(record.first_attempt_at);
    const windowEnd = new Date(firstAttemptAt.getTime() + windowMinutes * 60 * 1000);

    if (now > windowEnd) {
      // Reset window
      await supabase
        .from('admin_rate_limits')
        .update({
          attempts_count: 1,
          first_attempt_at: now.toISOString(),
          last_attempt_at: now.toISOString(),
          blocked_until: null,
        })
        .eq('identifier', identifier);

      return { allowed: true, remainingAttempts: maxAttempts - 1 };
    }

    // Window active — increment attempts
    const newCount = record.attempts_count + 1;
    let blockedUntil: Date | null = null;

    if (newCount >= maxAttempts) {
      // Calculate progressive exponential backoff lockout
      const excessAttempts = newCount - maxAttempts;
      const lockoutMultiplier = Math.pow(2, excessAttempts);
      const lockoutSeconds = Math.min(BASE_LOCKOUT_SECONDS * lockoutMultiplier, 60 * 60); // Cap at 1 hour
      blockedUntil = new Date(now.getTime() + lockoutSeconds * 1000);
    }

    await supabase
      .from('admin_rate_limits')
      .update({
        attempts_count: newCount,
        last_attempt_at: now.toISOString(),
        blocked_until: blockedUntil ? blockedUntil.toISOString() : null,
      })
      .eq('identifier', identifier);

    if (blockedUntil) {
      const retryAfterSeconds = Math.ceil((blockedUntil.getTime() - now.getTime()) / 1000);
      return {
        allowed: false,
        remainingAttempts: 0,
        retryAfterSeconds,
      };
    }

    return {
      allowed: true,
      remainingAttempts: Math.max(0, maxAttempts - newCount),
    };
  } catch (err) {
    console.error('Rate limit evaluation error:', err);
    // Fail open in case of infrastructure issues, but log error
    return { allowed: true, remainingAttempts: 1 };
  }
}

/**
 * Resets the rate-limiting counter upon successful primary authentication or MFA verification.
 */
export async function resetRateLimit(identifier: string): Promise<void> {
  try {
    const supabase = createAdminClient();
    await supabase.from('admin_rate_limits').delete().eq('identifier', identifier);
  } catch (err) {
    console.error('Failed to reset rate limit:', err);
  }
}
