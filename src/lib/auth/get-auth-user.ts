/**
 * getAuthUser - Resolves the current authenticated user from either:
 * 1. A valid Supabase SSR session (preferred)
 * 2. The `careeros_user_session` cookie set during password login (fallback)
 *
 * This exists because the password login route may succeed via Supabase
 * while the SSR session cookie is not yet propagated to the next request,
 * so we carry a signed fallback cookie.
 */
import { cookies } from 'next/headers';
import { createClient } from '@/lib/supabase/server';

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

  // 2. Fallback: careeros_user_session cookie
  try {
    const cookieStore = await cookies();
    const raw = cookieStore.get('careeros_user_session')?.value;
    if (raw) {
      const session = JSON.parse(raw);
      if (session?.authenticated && session?.userId && session?.email) {
        return {
          id: session.userId,
          email: session.email,
          displayName: session.displayName,
          fromSupabaseSession: false,
        };
      }
    }
  } catch {
    // Malformed cookie — ignore
  }

  return null;
}
