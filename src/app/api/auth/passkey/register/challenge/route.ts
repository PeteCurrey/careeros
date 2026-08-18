import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";
import { createClient, createAdminClient } from "@/lib/supabase/server";
import { createRealRegistrationOptions } from "@/lib/auth/passkeys";

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const adminDb = createAdminClient();
    const { data: profile } = await adminDb
      .from("profiles")
      .select("*")
      .eq("auth_user_id", user.id)
      .single();

    const profileId = profile?.id || user.id;

    const options = await createRealRegistrationOptions({
      id: profileId,
      email: user.email || "user@careeros.com",
      displayName: profile?.display_name || undefined,
    });

    const cookieStore = await cookies();
    cookieStore.set("webauthn_reg_challenge", options.challenge, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 300, // 5 mins
      path: "/",
    });

    return NextResponse.json({
      success: true,
      options,
    });
  } catch (error) {
    console.error("Error generating passkey registration options:", error);
    return NextResponse.json(
      { error: "Failed to generate passkey challenge." },
      { status: 500 }
    );
  }
}
