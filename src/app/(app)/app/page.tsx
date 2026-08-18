import React from "react";
import { redirect } from "next/navigation";
import { ROUTES } from "@/lib/routes";
import { getApplicationAccessState } from "@/lib/auth/access-guard";
import { createAdminClient } from "@/lib/supabase/server";
import { DailyMentorWelcomeService } from "@/lib/mentors/daily-welcome-service";
import { TodayDashboard } from "@/components/app/dashboard/TodayDashboard";
import { CareerTwin, CareerPassport } from "@/types/platform/intelligence";
import { CareerObjective } from "@/types/platform/mentors";

export default async function AppDashboardPage() {
  const accessState = await getApplicationAccessState();

  // If user is not yet fully onboarded, redirect immediately to /app/onboarding
  if (!accessState.onboardingComplete) {
    redirect(accessState.redirectUrl || ROUTES.APP_ONBOARDING);
  }

  const userId: string = accessState.userId || "demo-user";
  const todayStr: string = new Date().toISOString().split("T")[0] || "2026-08-18";
  const hour: number = new Date().getHours();

  const adminDb = createAdminClient();

  // Fetch profile for first name
  const { data: profile } = await adminDb
    .from("profiles")
    .select("display_name, onboarding_completed_at, created_at")
    .eq("auth_user_id", userId)
    .maybeSingle();

  const displayName = profile?.display_name || "Pete";
  const firstName = displayName.split(" ")[0] || "Pete";

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

  // Fetch user preference for welcome mode
  const { data: privacy } = await adminDb
    .from("user_privacy_preferences")
    .select("preferences")
    .eq("user_id", userId)
    .maybeSingle();

  const welcomeMode = privacy?.preferences?.dailyMentorWelcomeMode || "CINEMATIC";

  // Determine if first ever activation post-onboarding
  const onboardingTime = profile?.onboarding_completed_at ? new Date(profile.onboarding_completed_at).getTime() : 0;
  const isRecentOnboarding = onboardingTime > 0 && Date.now() - onboardingTime < 2 * 60 * 60 * 1000;
  const isFirstEver = isRecentOnboarding && !DailyMentorWelcomeService.hasPlayedToday(userId, todayStr);

  // Generate or retrieve cached Daily Mentor Welcome
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

  return (
    <TodayDashboard
      initialWelcome={welcome}
      initialShouldPlayCinematic={shouldPlayCinematic}
    />
  );
}
