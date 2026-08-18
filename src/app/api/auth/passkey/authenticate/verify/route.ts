import { NextResponse, type NextRequest } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server';
import { recordUserSecurityEvent } from '@/lib/auth/passkeys';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { credentialId, authenticatorData, clientDataJSON, signature } = body;

    if (!credentialId) {
      return NextResponse.json(
        { error: 'Credential ID is required.' },
        { status: 400 }
      );
    }

    const adminDb = createAdminClient();

    // Look up registered passkey
    const { data: passkey, error: passkeyError } = await adminDb
      .from('user_passkeys')
      .select('*, profiles(*)')
      .eq('credential_id', credentialId)
      .single();

    if (passkeyError || !passkey) {
      return NextResponse.json(
        { error: 'Passkey not recognized. Please sign in with an email code or registered passkey.' },
        { status: 401 }
      );
    }

    // Update last used at and counter
    await adminDb
      .from('user_passkeys')
      .update({
        counter: (passkey.counter || 0) + 1,
        last_used_at: new Date().toISOString(),
      })
      .eq('id', passkey.id);

    // Update profile assurance to SECURED
    await adminDb
      .from('profiles')
      .update({
        security_assurance: 'SECURED',
        last_stepped_up_at: new Date().toISOString(),
      })
      .eq('id', passkey.profile_id);

    // Record telemetry
    await recordUserSecurityEvent({
      profileId: passkey.profile_id,
      eventType: 'login_success',
      success: true,
      metadata: { method: 'passkey', passkeyId: passkey.id },
    });

    return NextResponse.json({
      success: true,
      profileId: passkey.profile_id,
      securityAssurance: 'SECURED',
      message: 'Authenticated with passkey.',
    });
  } catch (error) {
    console.error('Error verifying passkey authentication:', error);
    return NextResponse.json(
      { error: 'Passkey authentication failed.' },
      { status: 500 }
    );
  }
}
