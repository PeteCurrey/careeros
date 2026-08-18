import { createClient, createAdminClient } from "@/lib/supabase/server";
import {
  OnboardingSession,
  OnboardingState,
  OnboardingChapter,
  CareerStage,
  CareerContext,
  ProvenanceMetadata,
} from "@/types/platform/onboarding";

export const ONBOARDING_VERSION = 1;

export async function getOrCreateOnboardingSession(userId: string): Promise<OnboardingSession> {
  const adminDb = createAdminClient();

  const { data: existing } = await adminDb
    .from("onboarding_sessions")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  if (existing) {
    return {
      id: existing.id,
      userId: existing.user_id,
      state: existing.state,
      currentChapter: existing.current_chapter || "01_PROTECT",
      currentSection: existing.current_section || "identity",
      accountOrigin: existing.account_origin || "DIRECT_INDIVIDUAL",
      careerStage: existing.career_stage || null,
      version: existing.version || ONBOARDING_VERSION,
      startedAt: existing.started_at,
      updatedAt: existing.updated_at,
      completedAt: existing.completed_at,
      lastActivityAt: existing.last_activity_at,
    };
  }

  const now = new Date().toISOString();
  const newSession: OnboardingSession = {
    id: `onb_${userId.substring(0, 8)}_${Date.now()}`,
    userId,
    state: "ONBOARDING_STARTED",
    currentChapter: "01_PROTECT",
    currentSection: "identity",
    accountOrigin: "DIRECT_INDIVIDUAL",
    careerStage: null,
    version: ONBOARDING_VERSION,
    startedAt: now,
    updatedAt: now,
    completedAt: null,
    lastActivityAt: now,
  };

  try {
    await adminDb.from("onboarding_sessions").insert({
      id: newSession.id,
      user_id: userId,
      state: newSession.state,
      current_chapter: newSession.currentChapter,
      current_section: newSession.currentSection,
      account_origin: newSession.accountOrigin,
      version: newSession.version,
      started_at: newSession.startedAt,
      updated_at: newSession.updatedAt,
      last_activity_at: newSession.lastActivityAt,
    });
  } catch (err) {
    console.warn("Non-fatal onboarding session DB insert error:", err);
  }

  return newSession;
}

export async function updateOnboardingSessionState(
  userId: string,
  updates: Partial<OnboardingSession>
): Promise<OnboardingSession> {
  const session = await getOrCreateOnboardingSession(userId);
  const now = new Date().toISOString();

  const updated: OnboardingSession = {
    ...session,
    ...updates,
    updatedAt: now,
    lastActivityAt: now,
  };

  try {
    const adminDb = createAdminClient();
    await adminDb
      .from("onboarding_sessions")
      .update({
        state: updated.state,
        current_chapter: updated.currentChapter,
        current_section: updated.currentSection,
        career_stage: updated.careerStage,
        completed_at: updated.completedAt,
        updated_at: updated.updatedAt,
        last_activity_at: updated.lastActivityAt,
      })
      .eq("user_id", userId);
  } catch (err) {
    console.warn("Non-fatal session update warning:", err);
  }

  return updated;
}
