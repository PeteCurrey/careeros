import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";
import { createAdminClient } from "@/lib/supabase/server";
import { verifyRealAuthenticationResponse, recordUserSecurityEvent } from "@/lib/auth/passkeys";

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const expectedChallenge = cookieStore.get("webauthn_auth_challenge")?.value;

    if (!expectedChallenge) {
      return NextResponse.json(
        { error: "Authentication challenge expired. Please try again." },
        { status: 400 }
      );
    }

    const body = await request.json();
    const credentialId = body?.id;

    if (!credentialId) {
      return NextResponse.json(
        { error: "Credential ID is required." },
        { status: 400 }
      );
    }

    const adminDb = createAdminClient();
    const { data: passkey, error: passkeyError } = await adminDb
      .from("user_passkeys")
      .select("*, profiles(*)")
      .eq("credential_id", credentialId)
      .single();

    if (passkeyError || !passkey) {
      return NextResponse.json(
        { error: "Passkey not recognized. Please sign in with an email code." },
        { status: 401 }
      );
    }

    const verification = await verifyRealAuthenticationResponse(
      body,
      expectedChallenge,
      passkey
    );

    if (!verification.verified || !verification.authenticationInfo) {
      return NextResponse.json(
        { error: "Passkey cryptographic signature verification failed." },
        { status: 401 }
      );
    }

    // Update counter and last used
    await adminDb
      .from("user_passkeys")
      .update({
        counter: verification.authenticationInfo.newCounter,
        last_used_at: new Date().toISOString(),
      })
      .eq("id", passkey.id);

    // Update profile assurance to SECURED
    await adminDb
      .from("profiles")
      .update({
        security_assurance: "SECURED",
        last_stepped_up_at: new Date().toISOString(),
      })
      .eq("id", passkey.profile_id);

    cookieStore.delete("webauthn_auth_challenge");

    await recordUserSecurityEvent({
      profileId: passkey.profile_id,
      eventType: "login_success",
      success: true,
      metadata: { method: "passkey", passkeyId: passkey.id },
    });

    return NextResponse.json({
      success: true,
      profileId: passkey.profile_id,
      securityAssurance: "SECURED",
      message: "Authenticated with passkey.",
    });
  } catch (error) {
    console.error("Error in passkey auth verify:", error);
    return NextResponse.json(
      { error: "Passkey authentication failed." },
      { status: 500 }
    );
  }
}
