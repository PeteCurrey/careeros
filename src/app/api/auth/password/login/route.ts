import { NextResponse, type NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { createClient, createAdminClient } from '@/lib/supabase/server';
import { ROUTES } from '@/lib/routes';
import { USER_SESSION_COOKIE_NAME } from '@/lib/auth/cookie-names';
import { signUserSession } from '@/lib/auth/session-signature';

/**
 * Password sign-in.
 *
 * This route previously did three things it must never do, all of which are
 * now removed:
 *
 *   1. It granted a session to a specific hardcoded email address regardless
 *      of the password supplied.
 *   2. When Supabase sign-in failed it called `admin.updateUserById` to reset
 *      the account's password to whatever the caller had just typed, which
 *      allowed anyone to take over any registered account by submitting its
 *      email address.
 *   3. It issued an unsigned, non-httpOnly session cookie that downstream code
 *      trusted on `authenticated === true`.
 *
 * Sign-in is now delegated entirely to Supabase Auth. Accounts are created by
 * /signup, never here: a login endpoint that provisions accounts turns every
 * typo into a new user and silently skips email verification.
 */

const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days

/** Deliberately identical for unknown email and wrong password. */
const INVALID_CREDENTIALS = 'Invalid email or password. Please try again.';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Enter your email address and password to sign in.' },
        { status: 400 },
      );
    }

    const cleanEmail = String(email).trim().toLowerCase();

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const supabaseConfigured =
      Boolean(supabaseUrl) &&
      Boolean(anonKey) &&
      !supabaseUrl!.includes('placeholder');

    // Local development without Supabase credentials. Mirrors the same guard
    // used in middleware. Never reachable in a deployed environment, where
    // NODE_ENV is 'production' and Supabase is configured.
    const isLocalDev =
      process.env.NODE_ENV !== 'production' &&
      process.env.NEXT_PUBLIC_APP_ENV !== 'production';

    if (!supabaseConfigured) {
      if (!isLocalDev) {
        console.error('Password login attempted with Supabase not configured.');
        return NextResponse.json(
          { error: 'Sign in is temporarily unavailable. Please try again shortly.' },
          { status: 503 },
        );
      }
      return issueSession(
        {
          userId: `dev_${cleanEmail.replace(/[^a-z0-9]/g, '_')}`,
          email: cleanEmail,
        },
        ROUTES.APP_ONBOARDING,
      );
    }

    const supabase = await createClient();
    const { data: signInData, error: signInError } =
      await supabase.auth.signInWithPassword({ email: cleanEmail, password });

    if (signInError || !signInData.user) {
      return NextResponse.json({ error: INVALID_CREDENTIALS }, { status: 401 });
    }

    const authUserId = signInData.user.id;
    const authEmail = signInData.user.email || cleanEmail;
    const displayName = signInData.user.user_metadata?.display_name;

    // Send first-time users to onboarding, returning users to the dashboard.
    let targetRedirect: string = ROUTES.APP_ONBOARDING;
    try {
      const adminDb = createAdminClient();
      const { data: profile } = await adminDb
        .from('profiles')
        .select('id, onboarding_completed_at')
        .eq('auth_user_id', authUserId)
        .maybeSingle();

      if (profile?.onboarding_completed_at) {
        targetRedirect = ROUTES.APP_DASHBOARD;
      }
    } catch {
      // Profile lookup is advisory only; onboarding is the safe default.
    }

    return issueSession(
      { userId: authUserId, email: authEmail, displayName },
      targetRedirect,
    );
  } catch (error) {
    console.error('Error in /api/auth/password/login:', error);
    return NextResponse.json(
      { error: 'Sign in failed. Please try again.' },
      { status: 500 },
    );
  }
}

/**
 * Issues the signed fallback cookie that carries identity across the window
 * where the Supabase SSR cookie has not yet propagated. If no signing secret
 * is configured the cookie is omitted rather than issued unsigned — the
 * Supabase session alone still authenticates the user.
 */
async function issueSession(
  user: { userId: string; email: string; displayName?: string },
  redirectTo: string,
) {
  const now = Math.floor(Date.now() / 1000);
  const token = await signUserSession({
    userId: user.userId,
    email: user.email,
    displayName: user.displayName,
    issuedAt: now,
    expiresAt: now + SESSION_MAX_AGE_SECONDS,
  });

  if (token) {
    const cookieStore = await cookies();
    cookieStore.set(USER_SESSION_COOKIE_NAME, token, {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: SESSION_MAX_AGE_SECONDS,
    });
  } else {
    console.warn(
      'No session signing secret configured; issuing Supabase session only.',
    );
  }

  return NextResponse.json({
    success: true,
    redirectTo,
    user: { id: user.userId, email: user.email },
  });
}
