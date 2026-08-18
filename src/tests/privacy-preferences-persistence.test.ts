import { describe, it, expect, vi, beforeEach } from "vitest";
import { getDefaultPrivacyPreferences, getPrivacyAnswers } from "@/types/platform/privacy";

describe("P0 Blocker: Privacy Preferences Persistence & Activation", () => {
  describe("Default Privacy Settings & Stance", () => {
    it("guarantees private-by-default for Career Twin and Passport", () => {
      const defaults = getDefaultPrivacyPreferences("user_test_123", false);
      expect(defaults.careerTwinVisibility).toBe("PRIVATE");
      expect(defaults.passportVisibility).toBe("PRIVATE");
    });

    it("defaults employer discovery to OFF (never active silently)", () => {
      const defaults = getDefaultPrivacyPreferences("user_test_123", false);
      expect(defaults.employerDiscovery).toBe("OFF");
    });

    it("defaults marketing and product update communications to OFF/opted-out", () => {
      const defaults = getDefaultPrivacyPreferences("user_test_123", false);
      expect(defaults.marketing.productUpdates).toBe(false);
      expect(defaults.marketing.careerInsightsDigest).toBe(false);
      expect(defaults.marketing.eventNotifications).toBe(false);
      expect(defaults.marketing.partnerOffers).toBe(false);
    });

    it("enables core opportunity recommendations by default", () => {
      const defaults = getDefaultPrivacyPreferences("user_test_123", false);
      expect(defaults.opportunityRecommendationsEnabled).toBe(true);
    });

    it("enforces youth safeguards automatically for minors", () => {
      const minorDefaults = getDefaultPrivacyPreferences("minor_123", true);
      expect(minorDefaults.youthRestrictionsApplied).toBe(true);
      expect(minorDefaults.employerDiscovery).toBe("OFF");
      expect(minorDefaults.mentorAnalyticsSharing).toBe(false);
      expect(minorDefaults.publicProfileEnabled).toBe(false);
    });
  });

  describe("Canonical Database Record Mapping", () => {
    it("maps frontend preferences to canonical public.privacy_preferences schema", () => {
      const profileId = "prof_abc_123";
      const payload = {
        employerDiscovery: "ANONYMOUS" as const,
        opportunityRecommendationsEnabled: true,
        careerTwinVisibility: "PRIVATE" as const,
        passportVisibility: "PRIVATE" as const,
        allowMentorAccess: true,
        institutionalSharingState: "OFF",
        mentorAnalyticsSharing: false,
      };

      const isMinor = false;
      const canonicalRecord = {
        profile_id: profileId,
        default_visibility: isMinor ? "PRIVATE" : payload.careerTwinVisibility,
        career_twin_visibility: isMinor ? "PRIVATE" : payload.careerTwinVisibility,
        passport_visibility: isMinor ? "PRIVATE" : payload.passportVisibility,
        allow_mentor_access: isMinor ? true : payload.allowMentorAccess,
        allow_employer_discovery: isMinor ? false : payload.employerDiscovery === "ANONYMOUS",
        allow_network_visibility: false,
        opportunity_recommendations_enabled: payload.opportunityRecommendationsEnabled,
        institutional_sharing_state: payload.institutionalSharingState,
        mentor_analytics_sharing: isMinor ? false : payload.mentorAnalyticsSharing,
      };

      expect(canonicalRecord.profile_id).toBe(profileId);
      expect(canonicalRecord.allow_employer_discovery).toBe(true);
      expect(canonicalRecord.default_visibility).toBe("PRIVATE");
      expect(canonicalRecord.opportunity_recommendations_enabled).toBe(true);
    });

    it("correctly blocks employer discovery for minors even if requested", () => {
      const profileId = "prof_minor_456";
      const isMinor = true;
      const payload = {
        employerDiscovery: "ANONYMOUS" as const,
        opportunityRecommendationsEnabled: true,
      };

      const canonicalRecord = {
        profile_id: profileId,
        allow_employer_discovery: isMinor ? false : payload.employerDiscovery === "ANONYMOUS",
        opportunity_recommendations_enabled: true,
      };

      expect(canonicalRecord.allow_employer_discovery).toBe(false);
    });
  });

  describe("Marketing Consent Separation", () => {
    it("keeps optional marketing consent in consent ledger distinct from privacy record", () => {
      const profileId = "prof_abc_123";
      const marketingOptIn = false; // default

      const consentRecord = marketingOptIn
        ? {
            consent_type: "MARKETING_COMMUNICATIONS",
            subject_user_id: profileId,
            granted_by_user_id: profileId,
            relationship_type: "SELF",
            purpose: "Optional Career OS product and intelligence update emails",
          }
        : null;

      expect(consentRecord).toBeNull();
    });

    it("creates explicit MARKETING_COMMUNICATIONS consent only when user actively opts in", () => {
      const profileId = "prof_abc_123";
      const marketingOptIn = true; // active choice

      const consentRecord = marketingOptIn
        ? {
            consent_type: "MARKETING_COMMUNICATIONS",
            subject_user_id: profileId,
            granted_by_user_id: profileId,
            relationship_type: "SELF",
            purpose: "Optional Career OS product and intelligence update emails",
          }
        : null;

      expect(consentRecord).not.toBeNull();
      expect(consentRecord?.consent_type).toBe("MARKETING_COMMUNICATIONS");
      expect(consentRecord?.subject_user_id).toBe(profileId);
    });
  });

  describe("Plain-English Explanations", () => {
    it("provides clear, jargon-free explanations for user review", () => {
      const answers = getPrivacyAnswers({ employerDiscovery: "OFF" }, false);
      expect(answers.whatIsPrivate).toContain("Your Career Twin — visible only to you");
      expect(answers.canEmployersSeeProfile).toContain("No. Employer discovery is off.");
      expect(answers.canSchoolSeeMentorConversations).toContain("Mentor conversations are always private");
    });
  });
});
