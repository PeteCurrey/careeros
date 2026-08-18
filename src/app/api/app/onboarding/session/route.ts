import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getOrCreateOnboardingSession } from "@/lib/onboarding/engine";

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const session = await getOrCreateOnboardingSession(user.id);
    return NextResponse.json({ success: true, session });
  } catch (error) {
    console.error("Error in onboarding session GET:", error);
    return NextResponse.json({ error: "Failed to retrieve onboarding session." }, { status: 500 });
  }
}
