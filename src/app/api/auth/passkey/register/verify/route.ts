import { NextResponse, type NextRequest } from 'next/server';
import { createClient, createAdminClient } from '@/lib/supabase/server';
import { recordUserSecurityEvent } from '@/lib/auth/passkeys';

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    const body = await request.json();
    const { credentialId, publicKey, deviceName, aaguid } = body;

    if (!credentialId || !publicKey) {
      return NextResponse.json(
        { error: 'Credential ID and public key are required.' },
        { status: 400 }
      );
    }

    const adminDb = createAdminClient();
    const { data: profile, error: profileError } = await adminDb
      .from('profiles')
      .select('id, security_assurance')
      .eq('auth_user_id', user.id)
      .single();

    if (profileError || !profile) {
      return NextResponse.json({ error: 'Profile not found.' }, { status: 404 });
    }

    // Insert passkey into user_passkeys
    const { data: newPasskey, error: passkeyInsertError } = await adminDb
      .from('user_passkeys')
      .insert({
        profile_id: profile.id,
        credential_id: credentialId,
        public_key: publicKey,
        device_name: deviceName || 'Personal Device',
        aaguid: aaguid || null,
        counter: 0,
      })
      .select()
      .single();

    if (passkeyInsertError) {
      console.error('Error inserting passkey:', passkeyInsertError);
      return NextResponse.json(
        { error: 'Failed to store passkey credential.' },
        { status: 500 }
      );
    }

    // Promote profile security assurance to SECURED
    await adminDb
      .from('profiles')
      .update({
        security_assurance: 'SECURED',
        updated_at: new Date().toISOString(),
      })
      .eq('id', profile.id);

    // Record security event
    await recordUserSecurityEvent({
      profileId: profile.id,
      eventType: 'passkey_registered',
      success: true,
      metadata: {
        passkeyId: newPasskey.id,
        deviceName: deviceName || 'Personal Device',
      },
    });

    return NextResponse.json({
      success: true,
      passkeyId: newPasskey.id,
      securityAssurance: 'SECURED',
      message: 'CareerOS secured with passkey.',
    });
  } catch (error) {
    console.error('Error verifying passkey registration:', error);
    return NextResponse.json(
      { error: 'Passkey verification failed.' },
      { status: 500 }
    );
  }
}
