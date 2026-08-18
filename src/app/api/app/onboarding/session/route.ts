import { NextResponse, type NextRequest } from "next/server";
import { getOrCreateOnboardingSession } from "@/lib/onboarding/engine";
import { getAuthUser } from "@/lib/auth/get-auth-user";

export async function GET(request: NextRequest) {
  try {
    const user = await getAuthUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const session = await getOrCreateOnboardingSession(user.id);
    return NextResponse.json({ success: true, session });
  } catch (error) {
    console.error("Error in onboarding session GET:", error);
    return NextResponse.json({ error: "Failed to retrieve onboarding session." }, { status: 500 });
  }
}
