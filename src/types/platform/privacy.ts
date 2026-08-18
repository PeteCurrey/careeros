/**
 * Privacy Preferences Types — Career OS Pass 06
 *
 * Structured, granular privacy preferences model.
 * Separates legally-required processing from optional consent.
 * Youth accounts enforce additional restrictions automatically.
 */

/** Visibility scope for Career Twin and Passport data */
export type VisibilityScope =
  | "PRIVATE"          // Only the user can see this
  | "INSTITUTION_ONLY" // Only the user's linked institution/school
  | "NETWORK_ONLY"     // Only explicitly connected parties
  | "PUBLIC";          // Publicly discoverable

/** Employer discovery state — never on by default */
export type EmployerDiscoveryState =
  | "OFF"
  | "ANONYMOUS"        // Employers can see signal, not identity
  | "DIRECT";          // Full profile discoverable

/** Marketing preferences — granular, no bundling */
export interface MarketingPreferences {
  productUpdates: boolean;
  careerInsightsDigest: boolean;
  eventNotifications: boolean;
  partnerOffers: boolean;      // Third-party partner content — separate opt-in
  updatedAt: string;
}

/** Core privacy preferences — stored in user_privacy_preferences */
export interface PrivacyPreferences {
  id: string;
  userId: string;

  // Career data visibility
  careerTwinVisibility: VisibilityScope;
  passportVisibility: VisibilityScope;

  // Discovery controls
  employerDiscovery: EmployerDiscoveryState;
  opportunityRecommendationsEnabled: boolean;

  // Institutional visibility
  institutionalSharingState: "OFF" | "POLICY_GOVERNED" | "EXPLICIT_CONSENT";

  // Mentor data — conversations are always private; only analytics sharing is optional
  mentorAnalyticsSharing: boolean;

  // Marketing — stored separately but returned together
  marketing: MarketingPreferences;

  // Youth-specific enforcement (system-managed, not user-editable)
  youthRestrictionsApplied: boolean;
  publicProfileEnabled: boolean;

  updatedAt: string;
  createdAt: string;
}

/** Default privacy preferences — privacy-first, employer discovery OFF */
export function getDefaultPrivacyPreferences(
  userId: string,
  isMinor: boolean
): Omit<PrivacyPreferences, "id" | "createdAt" | "updatedAt"> {
  return {
    userId,
    careerTwinVisibility: "PRIVATE",
    passportVisibility: "PRIVATE",
    employerDiscovery: "OFF",
    opportunityRecommendationsEnabled: true,   // Core product feature — on by default
    institutionalSharingState: "OFF",          // User must explicitly enable
    mentorAnalyticsSharing: false,
    marketing: {
      productUpdates: false,
      careerInsightsDigest: false,
      eventNotifications: false,
      partnerOffers: false,
      updatedAt: new Date().toISOString(),
    },
    youthRestrictionsApplied: isMinor,
    publicProfileEnabled: isMinor ? false : false, // OFF for everyone at launch
  };
}

/** Privacy answers for the plain-English display */
export interface PrivacyAnswers {
  whatIsPrivate: string[];
  whatCareerOSCanUse: string[];
  canEmployersSeeProfile: string;
  canSchoolSeeMentorConversations: string;
  canChangeSettingsLater: string;
}

export function getPrivacyAnswers(prefs: Partial<PrivacyPreferences>, isMinor: boolean): PrivacyAnswers {
  return {
    whatIsPrivate: [
      "Your Career Twin — visible only to you",
      "Mentor conversations — always private",
      "Your Career Passport — visible only to you",
      "Your personal identity and contact information",
    ],
    whatCareerOSCanUse: [
      "Your career context to generate personalised recommendations",
      "Your Career Twin to match relevant opportunities (anonymised)",
      prefs.opportunityRecommendationsEnabled
        ? "Your goals and capabilities to surface relevant roles and pathways"
        : "Opportunity matching is currently disabled",
    ].filter(Boolean) as string[],
    canEmployersSeeProfile:
      prefs.employerDiscovery === "OFF" || prefs.employerDiscovery === undefined
        ? "No. Employer discovery is off. You control when and whether to become discoverable."
        : "Employers can see a limited profile. You can change this at any time in Settings.",
    canSchoolSeeMentorConversations: isMinor
      ? "No. Mentor conversations are always private. Your school or institution cannot access them."
      : "No. Mentor conversations are always private between you and your AI Career Mentor.",
    canChangeSettingsLater:
      "Yes. All privacy settings can be updated at any time from your Career OS Settings. You can expand or restrict what is shared whenever you choose.",
  };
}
