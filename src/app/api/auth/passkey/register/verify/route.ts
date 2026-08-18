import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";
import { createClient, createAdminClient } from "@/lib/supabase/server";
import { verifyRealRegistrationResponse, recordUserSecurityEvent } from "@/lib/auth/passkeys";

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const cookieStore = await cookies();
    const expectedChallenge = cookieStore.get("webauthn_reg_challenge")?.value;

    if (!expectedChallenge) {
      return NextResponse.json(
        { error: "Registration challenge expired or missing. Please try again." },
        { status: 400 }
      );
    }

    const body = await request.json();
    const verification = await verifyRealRegistrationResponse(body, expectedChallenge);

    if (!verification.verified || !verification.registrationInfo) {
      return NextResponse.json(
        { error: "Passkey verification failed cryptographically." },
        { status: 400 }
      );
    }

    const { credential, aaguid } = verification.registrationInfo;
    const adminDb = createAdminClient();

    const { data: profile } = await adminDb
      .from("profiles")
      .select("id")
      .eq("auth_user_id", user.id)
      .single();

    const profileId = profile?.id || user.id;

    // Store verified credential
    const publicKeyBase64 = Buffer.from(credential.publicKey).toString("base64");
    const { data: newPasskey, error: insertError } = await adminDb
      .from("user_passkeys")
      .insert({
        profile_id: profileId,
        credential_id: credential.id,
        public_key: publicKeyBase64,
        counter: credential.counter,
        device_name: "Biometric Passkey",
        aaguid: aaguid || null,
        transports: credential.transports || ["internal"],
      })
      .select()
      .single();

    if (insertError) {
      console.error("Failed to store passkey in DB:", insertError);
      return NextResponse.json(
        { error: "Failed to persist passkey credential." },
        { status: 500 }
      );
    }

    // Promote security assurance to SECURED
    await adminDb
      .from("profiles")
      .update({
        security_assurance: "SECURED",
        updated_at: new Date().toISOString(),
      })
      .eq("id", profileId);

    // Clean up challenge cookie
    cookieStore.delete("webauthn_reg_challenge");

    // Record audit event
    await recordUserSecurityEvent({
      profileId,
      eventType: "passkey_registered",
      success: true,
      metadata: { passkeyId: newPasskey.id },
    });

    return NextResponse.json({
      success: true,
      passkeyId: newPasskey.id,
      securityAssurance: "SECURED",
      message: "Passkey verified and registered successfully.",
    });
  } catch (error) {
    console.error("Error verifying passkey registration:", error);
    return NextResponse.json(
      { error: "Passkey verification failed." },
      { status: 500 }
    );
  }
}
