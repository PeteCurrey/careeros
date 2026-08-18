import { NextResponse, type NextRequest } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { updateOnboardingSessionState } from "@/lib/onboarding/engine";
import { getAuthUser } from "@/lib/auth/get-auth-user";

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const body = await request.json();
    const { chapter, section, careerStage, payload } = body;

    const adminDb = createAdminClient();

    if (section === "context" && payload) {
      try {
        await adminDb.from("career_contexts").upsert({
          user_id: user.id,
          display_name: payload.displayName,
          city: payload.city,
          state: payload.state,
          zip_code: payload.zipCode,
          career_stage: careerStage || payload.careerStage,
          primary_goal: payload.primaryGoal,
          secondary_goals: payload.secondaryGoals || [],
          branch_data: payload.branchData || {},
          updated_at: new Date().toISOString(),
        }, { onConflict: "user_id" });
      } catch (err) {
        console.warn("Context upsert warning:", err);
      }
    }

    const updatedSession = await updateOnboardingSessionState(user.id, {
      currentChapter: chapter || "01_PROTECT",
      currentSection: section || "identity",
      careerStage: careerStage || undefined,
      state: "CAREER_CONTEXT_CAPTURED",
    });

    return NextResponse.json({ success: true, session: updatedSession });
  } catch (error) {
    console.error("Error saving onboarding section:", error);
    return NextResponse.json({ error: "Failed to save onboarding progress." }, { status: 500 });
  }
}
