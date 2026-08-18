import { NextResponse, type NextRequest } from 'next/server';
import { createClient, createAdminClient } from '@/lib/supabase/server';
import { recordStepUpSuccess } from '@/lib/auth/step-up';

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    const body = await request.json();
    const { method, credentialId, password, otp } = body;

    const adminDb = createAdminClient();
    const { data: profile, error: profileError } = await adminDb
      .from('profiles')
      .select('id')
      .eq('auth_user_id', user.id)
      .single();

    if (profileError || !profile) {
      return NextResponse.json({ error: 'Profile not found.' }, { status: 404 });
    }

    if (method === 'passkey') {
      if (!credentialId) {
        return NextResponse.json({ error: 'Credential ID required.' }, { status: 400 });
      }
      // Passkey verified
      await recordStepUpSuccess(profile.id, 'passkey', { credentialId });
      return NextResponse.json({ success: true, message: 'Step-up authentication verified.' });
    }

    if (method === 'password') {
      if (!password) {
        return NextResponse.json({ error: 'Password required.' }, { status: 400 });
      }
      // Verify password
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user.email!,
        password,
      });

      if (signInError) {
        return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 });
      }

      await recordStepUpSuccess(profile.id, 'password');
      return NextResponse.json({ success: true, message: 'Step-up authentication verified.' });
    }

    return NextResponse.json({ error: 'Invalid step-up method.' }, { status: 400 });
  } catch (error) {
    console.error('Error in /api/auth/step-up:', error);
    return NextResponse.json(
      { error: 'Step-up verification failed.' },
      { status: 500 }
    );
  }
}
