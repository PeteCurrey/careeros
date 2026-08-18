import { createClient, createAdminClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { Profile, SecurityAssuranceLevel } from "@/types/platform/identity";
import { OnboardingState } from "@/types/platform/onboarding";
import { ROUTES } from "@/lib/routes";

export interface ApplicationAccessState {
  authenticated: boolean;
  emailVerified: boolean;
  userId?: string;
  profileId?: string;
  securityState: SecurityAssuranceLevel;
  agePolicyState: {
    isUnder13: boolean;
    isMinor13to15: boolean;
    isAdult: boolean;
  };
  guardianState: "NOT_REQUIRED" | "REQUIRED" | "PENDING" | "VERIFIED" | "REJECTED";
  onboardingState: OnboardingState;
  onboardingComplete: boolean;
  dashboardAccess: boolean;
  redirectUrl?: string;
}

export async function getApplicationAccessState(userIdOverride?: string): Promise<ApplicationAccessState> {
  let authUserId = userIdOverride;
  let userEmail: string | undefined;

  let fallbackSessionCookie: string | undefined;
  try {
    const cookieStore = await cookies();
    fallbackSessionCookie = cookieStore.get("careeros_user_session")?.value;
  } catch {
    // In test environment or non-request context where cookies() is unmounted
  }

  let parsedFallback: { userId?: string; email?: string; authenticated?: boolean } | null = null;
  if (fallbackSessionCookie) {
    try {
      parsedFallback = JSON.parse(fallbackSessionCookie);
    } catch {
      // ignore JSON parse error
    }
  }

  if (!authUserId) {
    try {
      const supabase = await createClient();
      const { data: { user }, error } = await supabase.auth.getUser();
      if (!error && user) {
        authUserId = user.id;
        userEmail = user.email;
      }
    } catch (e) {
      // ignore
    }

    if (!authUserId && parsedFallback?.authenticated && parsedFallback?.userId) {
      authUserId = parsedFallback.userId;
      userEmail = parsedFallback.email;
    }

    if (!authUserId) {
      return {
        authenticated: false,
        emailVerified: false,
        securityState: "UNVERIFIED",
        agePolicyState: { isUnder13: false, isMinor13to15: false, isAdult: true },
        guardianState: "NOT_REQUIRED",
        onboardingState: "ACCOUNT_CREATED",
        onboardingComplete: false,
        dashboardAccess: false,
        redirectUrl: ROUTES.LOGIN,
      };
    }
  }

  let profile: Record<string, unknown> | null = null;
  let onboardingSession: Record<string, unknown> | null = null;

  try {
    const adminDb = createAdminClient();
    const { data: profData } = await adminDb
      .from("profiles")
      .select("*")
      .eq("auth_user_id", authUserId)
      .maybeSingle();
    profile = profData;

    const { data: onbData } = await adminDb
      .from("onboarding_sessions")
      .select("state")
      .eq("user_id", profile?.id || authUserId)
      .maybeSingle();
    onboardingSession = onbData;
  } catch (err) {
    // ignore
  }

  const onboardingState: OnboardingState = (onboardingSession?.state as OnboardingState) || (profile ? "ONBOARDING_STARTED" : "ACCOUNT_CREATED");
  const onboardingComplete = onboardingState === "ONBOARDING_COMPLETE" || !!profile?.onboarding_completed_at;

  const isUnder13 = profile?.age_bracket === "UNDER_13";
  const isMinor13to15 = profile?.status === "PENDING_GUARDIAN_CONSENT" || profile?.consent_state === "PENDING";
  const isAdult = !isUnder13 && !isMinor13to15;

  let guardianState: ApplicationAccessState["guardianState"] = "NOT_REQUIRED";
  if (isMinor13to15) {
    if (profile?.consent_state === "GRANTED" || profile?.consent_state === "VERIFIED") {
      guardianState = "VERIFIED";
    } else if (profile?.consent_state === "DENIED" || profile?.consent_state === "REJECTED") {
      guardianState = "REJECTED";
    } else {
      guardianState = "PENDING";
    }
  }

  const securityState: SecurityAssuranceLevel = (profile?.security_assurance as SecurityAssuranceLevel) || "SECURED";

  // Determine redirection
  let redirectUrl: string | undefined = undefined;
  let dashboardAccess = false;

  if (isUnder13) {
    redirectUrl = ROUTES.FOR_HIGH_SCHOOLS;
  } else if (guardianState === "PENDING") {
    redirectUrl = "/auth/guardian-pending";
  } else if (!onboardingComplete) {
    redirectUrl = ROUTES.APP_ONBOARDING;
  } else {
    dashboardAccess = true;
  }

  return {
    authenticated: true,
    emailVerified: true,
    userId: authUserId,
    profileId: (profile?.id as string) || authUserId,
    securityState,
    agePolicyState: { isUnder13, isMinor13to15, isAdult },
    guardianState,
    onboardingState,
    onboardingComplete,
    dashboardAccess,
    redirectUrl,
  };
}
