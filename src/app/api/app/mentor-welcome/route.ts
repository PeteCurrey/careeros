import { NextResponse, type NextRequest } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { DailyMentorWelcomeService } from "@/lib/mentors/daily-welcome-service";
import { CareerTwin, CareerPassport } from "@/types/platform/intelligence";
import { CareerObjective } from "@/types/platform/mentors";
import { getAuthUser } from "@/lib/auth/get-auth-user";

export async function GET(request: NextRequest) {
  try {
    const user = await getAuthUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const userId: string = user.id;
    const { searchParams } = new URL(request.url);
    const todayStr: string = searchParams.get("localDate") || new Date().toISOString().split("T")[0] || "2026-08-18";
    const hour: number = parseInt(searchParams.get("localHour") || `${new Date().getHours()}`, 10);
    const forceFirstEver: boolean = searchParams.get("firstEver") === "true";

    const adminDb = createAdminClient();

    // Fetch user profile to extract first name and onboarding completion timestamp
    const { data: profile } = await adminDb
      .from("profiles")
      .select("display_name, email, onboarding_completed_at, created_at, status")
      .eq("auth_user_id", userId)
      .maybeSingle();

    const displayName = profile?.display_name || user.email?.split("@")[0] || "there";
    const firstName = displayName.split(" ")[0] || "there";

    // Determine if this is the first-ever session immediately following onboarding
    const onboardingTime = profile?.onboarding_completed_at ? new Date(profile.onboarding_completed_at).getTime() : 0;
    const isRecentOnboarding = onboardingTime > 0 && Date.now() - onboardingTime < 2 * 60 * 60 * 1000;
    const isFirstEver = forceFirstEver || (isRecentOnboarding && !DailyMentorWelcomeService.hasPlayedToday(userId, todayStr));

    // Fetch assigned mentor
    const { data: mentorAssignment } = await adminDb
      .from("mentor_assignments")
      .select("mentor_id")
      .eq("user_id", userId)
      .maybeSingle();

    const mentorId: string = mentorAssignment?.mentor_id || "marcus-thorne";

    // Fetch Career Twin
    const { data: twinRow } = await adminDb
      .from("career_twins")
      .select("*")
      .eq("user_id", userId)
      .maybeSingle();

    const careerTwin: CareerTwin | null = twinRow?.twin_data || null;

    // Fetch active objective
    const { data: objectiveRow } = await adminDb
      .from("career_objectives")
      .select("*")
      .eq("user_id", userId)
      .eq("status", "ACTIVE")
      .maybeSingle();

    const careerObjective: CareerObjective | null = objectiveRow?.objective_data || null;

    // Fetch Career Passport entries
    const { data: passportRow } = await adminDb
      .from("career_passports")
      .select("*")
      .eq("user_id", userId)
      .maybeSingle();

    const careerPassport: CareerPassport | null = passportRow?.passport_data || null;

    // Fetch user privacy preference for welcome mode
    const { data: privacy } = await adminDb
      .from("user_privacy_preferences")
      .select("preferences")
      .eq("user_id", userId)
      .maybeSingle();

    const welcomeMode = privacy?.preferences?.dailyMentorWelcomeMode || "CINEMATIC";

    // Generate or fetch cached Daily Mentor Welcome
    const welcome = DailyMentorWelcomeService.buildDailyMentorWelcome({
      userId,
      userFirstName: firstName,
      mentorId,
      localDate: todayStr,
      localHour: hour,
      careerTwin,
      careerObjective,
      careerPassport,
      isFirstEver,
    });

    const alreadyPlayedToday = DailyMentorWelcomeService.hasPlayedToday(userId, todayStr);
    const shouldPlayCinematic = welcomeMode === "CINEMATIC" && (!alreadyPlayedToday || isFirstEver);

    return NextResponse.json({
      success: true,
      welcome,
      shouldPlayCinematic,
      welcomeMode,
      alreadyPlayedToday,
      isFirstEver,
    });
  } catch (error) {
    console.error("Error generating daily mentor welcome:", error);
    return NextResponse.json(
      { error: "Failed to load daily mentor welcome." },
      { status: 500 }
    );
  }
}
