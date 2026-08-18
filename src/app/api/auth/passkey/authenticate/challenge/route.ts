import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";
import { createAdminClient } from "@/lib/supabase/server";
import { createRealAuthenticationOptions } from "@/lib/auth/passkeys";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { email } = body;

    let allowCredentialIds: string[] | undefined = undefined;

    if (email) {
      const adminDb = createAdminClient();
      const { data: identity } = await adminDb
        .from("identities")
        .select("profile_id")
        .eq("email", email.trim().toLowerCase())
        .single();

      if (identity?.profile_id) {
        const { data: passkeys } = await adminDb
          .from("user_passkeys")
          .select("credential_id")
          .eq("profile_id", identity.profile_id);

        if (passkeys && passkeys.length > 0) {
          allowCredentialIds = passkeys.map((p) => p.credential_id);
        }
      }
    }

    const options = await createRealAuthenticationOptions(allowCredentialIds);

    const cookieStore = await cookies();
    cookieStore.set("webauthn_auth_challenge", options.challenge, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 300,
      path: "/",
    });

    return NextResponse.json({
      success: true,
      options,
    });
  } catch (error) {
    console.error("Error in passkey auth challenge:", error);
    return NextResponse.json(
      { error: "Failed to generate authentication challenge." },
      { status: 500 }
    );
  }
}
