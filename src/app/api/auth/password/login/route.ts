import { NextResponse, type NextRequest } from 'next/server';
import { createClient, createAdminClient } from '@/lib/supabase/server';
import { recordUserSecurityEvent } from '@/lib/auth/passkeys';
import { ROUTES } from '@/lib/routes';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required.' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !anonKey) {
      // In dev or local mode without Supabase credentials configured
      return NextResponse.json({
        success: true,
        redirectTo: ROUTES.APP_DASHBOARD,
        message: 'Authenticated successfully in local environment.',
      });
    }

    const supabase = await createClient();
    const { data: authData, error: signInError } = await supabase.auth.signInWithPassword({
      email: cleanEmail,
      password,
    });

    if (signInError || !authData.user) {
      return NextResponse.json(
        { error: 'Invalid email or password. Please try again.' },
        { status: 401 }
      );
    }

    // Lookup profile if service role is available
    if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const adminDb = createAdminClient();
        const { data: profile } = await adminDb
          .from('profiles')
          .select('id')
          .eq('auth_user_id', authData.user.id)
          .maybeSingle();

        if (profile) {
          await recordUserSecurityEvent({
            profileId: profile.id,
            eventType: 'login_success',
            success: true,
            metadata: { method: 'password' },
          });
        }
      } catch (err) {
        console.warn('Non-blocking security event log warning:', err);
      }
    }

    return NextResponse.json({
      success: true,
      redirectTo: ROUTES.APP_DASHBOARD,
      user: {
        id: authData.user.id,
        email: authData.user.email,
      },
    });
  } catch (error) {
    console.error('Error in /api/auth/password/login:', error);
    return NextResponse.json(
      { error: 'Sign in failed. Please try again.' },
      { status: 500 }
    );
  }
}
