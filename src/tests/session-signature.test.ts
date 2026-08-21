import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  signUserSession,
  verifyUserSession,
  canVerifySessions,
  type UserSessionPayload,
} from '@/lib/auth/session-signature';

/**
 * These tests exist because the end-user session cookie was previously plain
 * JSON with `httpOnly: false`, accepted by the access guard on the strength of
 * an `authenticated: true` field the client controlled. Any visitor could
 * assume another user's identity from the browser console.
 *
 * The forgery cases below are the ones that matter — if any of them starts
 * returning a payload, the bypass is back.
 */

const SECRET = 'test-secret-key-at-least-32-characters-long';

function payload(overrides: Partial<UserSessionPayload> = {}): UserSessionPayload {
  const now = Math.floor(Date.now() / 1000);
  return {
    userId: 'user_abc123',
    email: 'someone@example.com',
    displayName: 'Someone',
    issuedAt: now,
    expiresAt: now + 3600,
    ...overrides,
  };
}

describe('session signature', () => {
  const original = process.env.CAREEROS_SESSION_SECRET;

  beforeEach(() => {
    process.env.CAREEROS_SESSION_SECRET = SECRET;
  });

  afterEach(() => {
    if (original === undefined) delete process.env.CAREEROS_SESSION_SECRET;
    else process.env.CAREEROS_SESSION_SECRET = original;
  });

  it('round-trips a session it signed', async () => {
    const token = await signUserSession(payload());
    expect(token).toBeTruthy();

    const verified = await verifyUserSession(token);
    expect(verified?.userId).toBe('user_abc123');
    expect(verified?.email).toBe('someone@example.com');
    expect(verified?.displayName).toBe('Someone');
  });

  it('rejects an unsigned JSON cookie in the old format', async () => {
    // Exactly what the previous implementation stored and trusted.
    const legacy = JSON.stringify({
      userId: 'user_abc123',
      email: 'someone@example.com',
      authenticated: true,
    });
    expect(await verifyUserSession(legacy)).toBeNull();
  });

  it('rejects a payload whose signature belongs to a different payload', async () => {
    const token = await signUserSession(payload());
    const signature = token!.slice(token!.lastIndexOf('.') + 1);

    const forgedBody = Buffer.from(
      JSON.stringify(payload({ userId: 'someone_elses_id' })),
    )
      .toString('base64url')
      .replace(/=+$/, '');

    expect(await verifyUserSession(`${forgedBody}.${signature}`)).toBeNull();
  });

  it('rejects a token signed with a different secret', async () => {
    const token = await signUserSession(payload());
    process.env.CAREEROS_SESSION_SECRET = 'a-completely-different-secret-key-32ch';
    expect(await verifyUserSession(token)).toBeNull();
  });

  it('rejects an expired session', async () => {
    const now = Math.floor(Date.now() / 1000);
    const token = await signUserSession(
      payload({ issuedAt: now - 7200, expiresAt: now - 60 }),
    );
    expect(await verifyUserSession(token)).toBeNull();
  });

  it('rejects a session with no expiry', async () => {
    const token = await signUserSession(
      payload({ expiresAt: undefined as unknown as number }),
    );
    expect(await verifyUserSession(token)).toBeNull();
  });

  it('rejects malformed, empty and truncated values', async () => {
    const valid = await signUserSession(payload());
    for (const bad of [
      undefined,
      null,
      '',
      'not-a-token',
      'no-separator-here',
      '.',
      `${valid}tampered`,
      valid!.slice(0, valid!.lastIndexOf('.')),
    ]) {
      expect(await verifyUserSession(bad as string)).toBeNull();
    }
  });

  it('cannot sign or verify when no secret is configured', async () => {
    delete process.env.CAREEROS_SESSION_SECRET;
    const previousServiceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;
    delete process.env.SUPABASE_SERVICE_ROLE_KEY;

    expect(canVerifySessions()).toBe(false);
    expect(await signUserSession(payload())).toBeNull();
    expect(await verifyUserSession('anything')).toBeNull();

    if (previousServiceRole !== undefined) {
      process.env.SUPABASE_SERVICE_ROLE_KEY = previousServiceRole;
    }
  });

  it('falls back to the service-role key when no dedicated secret is set', async () => {
    delete process.env.CAREEROS_SESSION_SECRET;
    process.env.SUPABASE_SERVICE_ROLE_KEY =
      'service-role-key-that-is-long-enough-to-use';

    expect(canVerifySessions()).toBe(true);
    const token = await signUserSession(payload());
    expect((await verifyUserSession(token))?.userId).toBe('user_abc123');
  });

  it('rejects a short secret rather than signing weakly', async () => {
    process.env.CAREEROS_SESSION_SECRET = 'too-short';
    const previousServiceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;
    delete process.env.SUPABASE_SERVICE_ROLE_KEY;

    expect(canVerifySessions()).toBe(false);
    expect(await signUserSession(payload())).toBeNull();

    if (previousServiceRole !== undefined) {
      process.env.SUPABASE_SERVICE_ROLE_KEY = previousServiceRole;
    }
  });
});
