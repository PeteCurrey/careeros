import { createClient, createAdminClient } from "@/lib/supabase/server";
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

  if (!authUserId) {
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) {
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
    authUserId = user.id;
    userEmail = user.email;
  }

  const adminDb = createAdminClient();
  const { data: profile } = await adminDb
    .from("profiles")
    .select("*")
    .eq("auth_user_id", authUserId)
    .maybeSingle();

  // Check onboarding session state
  const { data: onboardingSession } = await adminDb
    .from("onboarding_sessions")
    .select("state")
    .eq("user_id", profile?.id || authUserId)
    .maybeSingle();

  const onboardingState: OnboardingState = onboardingSession?.state || (profile ? "ONBOARDING_STARTED" : "ACCOUNT_CREATED");
  const onboardingComplete = onboardingState === "ONBOARDING_COMPLETE";

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

  const securityState: SecurityAssuranceLevel = profile?.security_assurance || "EMAIL_VERIFIED";

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
    profileId: profile?.id,
    securityState,
    agePolicyState: { isUnder13, isMinor13to15, isAdult },
    guardianState,
    onboardingState,
    onboardingComplete,
    dashboardAccess,
    redirectUrl,
  };
}
