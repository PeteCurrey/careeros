/**
 * getAuthUser - Resolves the current authenticated user from either:
 * 1. A valid Supabase SSR session (preferred)
 * 2. The `careeros_user_session` cookie set during password login (fallback)
 *
 * This exists because the password login route may succeed via Supabase
 * while the SSR session cookie is not yet propagated to the next request,
 * so we carry a signed fallback cookie.
 *
 * The fallback cookie is now genuinely signed. It previously was not, despite
 * this comment: it was plain JSON with `httpOnly: false`, and this function
 * accepted any cookie whose `authenticated` field was `true`, so a visitor
 * could assume any identity from the browser console. Every read now verifies
 * an HMAC the server issued.
 */
import { cookies } from 'next/headers';
import { createClient } from '@/lib/supabase/server';
import { USER_SESSION_COOKIE_NAME } from '@/lib/auth/cookie-names';
import { verifyUserSession } from '@/lib/auth/session-signature';

export interface AuthUser {
  id: string;
  email: string;
  displayName?: string;
  /** True when resolved via Supabase session (has full DB access) */
  fromSupabaseSession: boolean;
}

export async function getAuthUser(): Promise<AuthUser | null> {
  try {
    // 1. Try Supabase session first
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (!error && user) {
      return {
        id: user.id,
        email: user.email ?? '',
        displayName: user.user_metadata?.display_name,
        fromSupabaseSession: true,
      };
    }
  } catch {
    // Supabase client unavailable (e.g. placeholder env) — fall through
  }

  // 2. Fallback: signed careeros_user_session cookie
  try {
    const cookieStore = await cookies();
    const session = await verifyUserSession(
      cookieStore.get(USER_SESSION_COOKIE_NAME)?.value,
    );
    if (session) {
      return {
        id: session.userId,
        email: session.email,
        displayName: session.displayName,
        fromSupabaseSession: false,
      };
    }
  } catch {
    // Malformed or unverifiable cookie — treat as signed out.
  }

  return null;
}
