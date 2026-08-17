import { describe, it, expect } from "vitest";
import { evaluateAgeBracket, calculateAge } from "@/lib/auth/age-gating";
import {
  DIRECT_ACCOUNT_MIN_AGE,
  isMinorStatus,
  hasDirectAccountEligibility,
  hasFERPAEligibleStudentStatus,
  evaluateAgePolicyState,
  evaluateAccountTransition,
} from "@/lib/config/age-policy";

describe("Canonical Career OS Age Model & Governance Tests", () => {
  const refDate = new Date("2026-08-17T00:00:00Z");

  it("calculates exact age correctly considering month/day boundaries", () => {
    expect(calculateAge("2013-08-17", refDate)).toBe(13);
    expect(calculateAge("2013-08-18", refDate)).toBe(12);
    expect(calculateAge("2013-08-16", refDate)).toBe(13);
  });

  describe("Requirement 1 & 8: Age-Banded Policy States & Thresholds", () => {
    it("Under-13 is hard-blocked from direct self-service signup", () => {
      const res = evaluateAgeBracket("2014-05-10", refDate); // 12 years old
      expect(res.age).toBe(12);
      expect(res.ageBracket).toBe("UNDER_13");
      expect(res.agePolicyState).toBe("UNDER_13_INSTITUTIONAL");
      expect(res.isHardBlocked).toBe(true);
      expect(res.defaultAccountStatus).toBe("DEACTIVATED");
    });

    it("Ages 13–15 require verified school or guardian relationship", () => {
      const res = evaluateAgeBracket("2012-03-10", refDate); // 14 years old
      expect(res.age).toBe(14);
      expect(res.ageBracket).toBe("MINOR_13_17");
      expect(res.hasDirectAccountEligibility).toBe(false);
      expect(res.requiresGuardianConsent).toBe(true);
      expect(res.defaultAccountStatus).toBe("PENDING_GUARDIAN_CONSENT");
    });

    it("Ages 16–17 meet direct account eligibility (16+) while remaining legal minors", () => {
      const res = evaluateAgeBracket("2010-03-22", refDate); // 16 years old
      expect(res.age).toBe(16);
      expect(res.hasDirectAccountEligibility).toBe(true);
      expect(res.isMinor).toBe(true);
      expect(res.requiresGuardianConsent).toBe(false); // 16+ is direct eligible
      expect(res.defaultAccountStatus).toBe("ACTIVE");
      expect(res.agePolicyState).toBe("AGE_16_17_DIRECT");
    });

    it("Age 18+ is adult direct account eligible", () => {
      const res = evaluateAgeBracket("2000-01-01", refDate); // 26 years old
      expect(res.age).toBe(26);
      expect(res.hasDirectAccountEligibility).toBe(true);
      expect(res.isMinor).toBe(false);
      expect(res.agePolicyState).toBe("ADULT_DIRECT");
    });
  });

  describe("Requirement 2 & 3: Concept Isolation & FERPA Transfer", () => {
    it("evaluates minor status independently from direct account eligibility", () => {
      expect(isMinorStatus(16)).toBe(true); // Minor by law (under 18)
      expect(hasDirectAccountEligibility(16)).toBe(true); // Eligible for Career OS direct account (16+)
    });

    it("evaluates FERPA Eligible Student status transfer at 18 or postsecondary enrollment at any age", () => {
      expect(hasFERPAEligibleStudentStatus(17, false)).toBe(false);
      expect(hasFERPAEligibleStudentStatus(17, true)).toBe(true); // Postsecondary student at 17 has FERPA rights
      expect(hasFERPAEligibleStudentStatus(18, false)).toBe(true); // 18+ has FERPA rights
    });
  });

  describe("Requirement 9: Non-Destructive Account Transitions", () => {
    it("evaluates school-sponsored to direct youth transition at age 16", () => {
      const transition = evaluateAccountTransition("AGE_13_15_SCHOOL", "AGE_16_17_DIRECT", 16);
      expect(transition.allowed).toBe(true);
      expect(transition.twinPortabilityGranted).toBe(true);
      expect(transition.institutionalRecordIsolated).toBe(true);
    });
  });
});
