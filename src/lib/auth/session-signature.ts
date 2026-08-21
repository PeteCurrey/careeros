/**
 * Signed end-user session cookie.
 *
 * The previous implementation stored `{ userId, authenticated: true }` as plain
 * JSON in a cookie with `httpOnly: false`, and both the access guard and the
 * middleware treated `authenticated === true` as proof of identity. Because
 * nothing was signed, any visitor could set that cookie from the browser
 * console and be served another user's account.
 *
 * The payload is now HMAC-SHA256 signed and verified on every read, so a cookie
 * the server did not issue is rejected. Signing uses Web Crypto rather than
 * Node's `crypto` so the same code runs in Edge middleware and in Node route
 * handlers.
 *
 * Format:  base64url(JSON payload) + "." + base64url(HMAC-SHA256)
 *
 * The cookie remains a *fallback*. A valid Supabase SSR session always wins;
 * this only covers the window where the SSR cookie has not yet propagated.
 */

const encoder = new TextEncoder();

export interface UserSessionPayload {
  userId: string;
  email: string;
  displayName?: string;
  /** Seconds since epoch. */
  issuedAt: number;
  /** Seconds since epoch. Verification fails past this point. */
  expiresAt: number;
}

/**
 * Secret used to sign sessions.
 *
 * Prefers a dedicated secret; falls back to the service-role key, which is
 * already required server-side and never reaches the client. Returns null when
 * neither is configured, which callers must treat as "cannot verify".
 */
function getSecret(): string | null {
  const dedicated = process.env.CAREEROS_SESSION_SECRET;
  if (dedicated && dedicated.length >= 32) return dedicated;

  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (serviceRole && serviceRole.length >= 32) return serviceRole;

  return null;
}

function base64UrlEncode(bytes: Uint8Array): string {
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64UrlDecode(value: string): Uint8Array {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/');
  const binary = atob(padded.padEnd(Math.ceil(padded.length / 4) * 4, '='));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function hmac(secret: string, data: string): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(data));
  return new Uint8Array(signature);
}

/** Length-invariant comparison, so verification time reveals nothing. */
function timingSafeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a[i]! ^ b[i]!;
  return diff === 0;
}

/**
 * Signs a session payload. Returns null when no secret is configured, so a
 * caller can decide whether that is fatal rather than silently issuing an
 * unverifiable cookie.
 */
export async function signUserSession(
  payload: UserSessionPayload,
): Promise<string | null> {
  const secret = getSecret();
  if (!secret) return null;

  const body = base64UrlEncode(encoder.encode(JSON.stringify(payload)));
  const signature = await hmac(secret, body);
  return `${body}.${base64UrlEncode(signature)}`;
}

/**
 * Verifies a session cookie and returns its payload, or null if the cookie is
 * malformed, unsigned, signed with the wrong key, or expired.
 */
export async function verifyUserSession(
  cookieValue: string | undefined | null,
): Promise<UserSessionPayload | null> {
  if (!cookieValue) return null;

  const secret = getSecret();
  if (!secret) return null;

  const separator = cookieValue.lastIndexOf('.');
  if (separator <= 0) return null;

  const body = cookieValue.slice(0, separator);
  const provided = cookieValue.slice(separator + 1);

  let providedBytes: Uint8Array;
  try {
    providedBytes = base64UrlDecode(provided);
  } catch {
    return null;
  }

  const expected = await hmac(secret, body);
  if (!timingSafeEqual(providedBytes, expected)) return null;

  let payload: UserSessionPayload;
  try {
    payload = JSON.parse(new TextDecoder().decode(base64UrlDecode(body)));
  } catch {
    return null;
  }

  if (!payload?.userId || !payload?.email) return null;

  const now = Math.floor(Date.now() / 1000);
  if (typeof payload.expiresAt !== 'number' || payload.expiresAt <= now) {
    return null;
  }

  return payload;
}

/** True when a signing secret is available. */
export function canVerifySessions(): boolean {
  return getSecret() !== null;
}
