import React from "react";
import { redirect } from "next/navigation";
import { ROUTES } from "@/lib/routes";
import { getApplicationAccessState } from "@/lib/auth/access-guard";
import { createAdminClient } from "@/lib/supabase/server";
import { CareerBriefService } from "@/lib/intelligence/career-brief-service";
import { TodayExperience } from "@/components/app/today/TodayExperience";
import { CareerTwin, CareerPassport, CareerGraphSeed } from "@/types/platform/intelligence";
import { CareerObjective, MentorAssignment } from "@/types/platform/mentors";
import { MENTOR_LIST } from "@/content/mentors/mentorRegistry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Today | Career OS",
  description:
    "Your daily operational Career OS overview: priorities, active objective milestones, Career Twin context, and mentor focus.",
};

export default async function AppTodayPage() {
  const accessState = await getApplicationAccessState();

  // If user is not yet fully onboarded, redirect immediately to /app/onboarding
  if (!accessState.onboardingComplete) {
    redirect(accessState.redirectUrl || ROUTES.APP_ONBOARDING);
  }

  const userId = accessState.userId || "demo-user";
  const hour = new Date().getHours();

  const adminDb = createAdminClient();

  // Fetch profile
  const { data: profile } = await adminDb
    .from("profiles")
    .select("display_name, onboarding_completed_at, created_at")
    .eq("auth_user_id", userId)
    .maybeSingle();

  const displayName = profile?.display_name || "Pete Currey";

  // Fetch assigned mentor
  const { data: mentorRow } = await adminDb
    .from("mentor_assignments")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  const mentorId = mentorRow?.mentor_id || "marcus-thorne";
  const persona = MENTOR_LIST.find((m) => m.slug === mentorId) ?? MENTOR_LIST[0]!;

  const mentorAssignment: MentorAssignment = mentorRow
    ? {
        id: mentorRow.id || `assign_${userId}`,
        userId,
        mentorId: persona.slug,
        mentorName: persona.name,
        mentorDomain: persona.domain,
        portraitSrc: persona.portraitSrc,
        assignmentReason:
          mentorRow.assignment_reason ||
          `${persona.name} is assigned to support your career direction in ${persona.domain}.`,
        domainMatches: [persona.domain],
        confidence: 0.95,
        status: "ACTIVE",
        assignedAt: mentorRow.assigned_at || new Date().toISOString(),
      }
    : {
        id: `assign_${userId}_default`,
        userId,
        mentorId: persona.slug,
        mentorName: persona.name,
        mentorDomain: persona.domain,
        portraitSrc: persona.portraitSrc,
        assignmentReason: `${persona.name} is assigned to support your career direction in ${persona.domain}.`,
        domainMatches: [persona.domain],
        confidence: 0.95,
        status: "ACTIVE",
        assignedAt: new Date().toISOString(),
      };

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

  // Fetch Career Passport
  const { data: passportRow } = await adminDb
    .from("career_passports")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  const careerPassport: CareerPassport | null = passportRow?.passport_data || null;

  // Fetch Career Graph Seed
  const { data: graphRow } = await adminDb
    .from("career_graph_seeds")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  const careerGraph: CareerGraphSeed | null = graphRow?.graph_data || null;

  // Build the deterministic Career Brief
  const brief = CareerBriefService.buildCareerBrief({
    userId,
    userDisplayName: displayName,
    careerTwin,
    careerObjective,
    careerPassport,
    careerGraph,
    mentorAssignment,
    localHour: hour,
  });

  return (
    <TodayExperience
      brief={brief}
      objective={careerObjective}
      mentorName={persona.name}
      mentorDomain={persona.domain}
      portraitSrc={persona.portraitSrc}
    />
  );
}
