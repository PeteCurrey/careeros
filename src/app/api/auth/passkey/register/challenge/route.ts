import { NextResponse, type NextRequest } from 'next/server';
import { createClient, createAdminClient } from '@/lib/supabase/server';
import { generateWebAuthnChallenge, createPasskeyRegistrationOptions } from '@/lib/auth/passkeys';

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    const adminDb = createAdminClient();
    const { data: profile, error: profileError } = await adminDb
      .from('profiles')
      .select('*')
      .eq('auth_user_id', user.id)
      .single();

    if (profileError || !profile) {
      return NextResponse.json({ error: 'Profile not found.' }, { status: 404 });
    }

    // Generate cryptographic challenge
    const challenge = generateWebAuthnChallenge();
    const options = createPasskeyRegistrationOptions(
      {
        id: profile.id,
        email: user.email || 'user@careeros.com',
        displayName: profile.display_name || undefined,
      },
      challenge
    );

    return NextResponse.json({
      success: true,
      challenge,
      options,
    });
  } catch (error) {
    console.error('Error generating passkey registration challenge:', error);
    return NextResponse.json(
      { error: 'Failed to generate passkey challenge.' },
      { status: 500 }
    );
  }
}
