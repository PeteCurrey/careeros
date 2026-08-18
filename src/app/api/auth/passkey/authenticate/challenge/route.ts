import { NextResponse, type NextRequest } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server';
import { generateWebAuthnChallenge, createPasskeyAuthenticationOptions } from '@/lib/auth/passkeys';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { email } = body;

    const challenge = generateWebAuthnChallenge();
    let allowCredentialIds: string[] | undefined = undefined;

    if (email) {
      const adminDb = createAdminClient();
      // Look up profile by email identity
      const { data: identity } = await adminDb
        .from('identities')
        .select('profile_id')
        .eq('email', email)
        .single();

      if (identity?.profile_id) {
        const { data: passkeys } = await adminDb
          .from('user_passkeys')
          .select('credential_id')
          .eq('profile_id', identity.profile_id);

        if (passkeys && passkeys.length > 0) {
          allowCredentialIds = passkeys.map((p) => p.credential_id);
        }
      }
    }

    const options = createPasskeyAuthenticationOptions(challenge, allowCredentialIds);

    return NextResponse.json({
      success: true,
      challenge,
      options,
    });
  } catch (error) {
    console.error('Error in /api/auth/passkey/authenticate/challenge:', error);
    return NextResponse.json(
      { error: 'Failed to generate authentication challenge.' },
      { status: 500 }
    );
  }
}
