import { describe, it, expect } from "vitest";
import { evaluateAgeBracket, calculateAge } from "@/lib/auth/age-gating";

describe("Phase 0 Age-Gating & Branching Logic", () => {
  const refDate = new Date("2026-08-17T00:00:00Z");

  it("calculates exact age correctly considering month/day boundaries", () => {
    // Born Aug 17, 2013 -> exactly 13 on Aug 17, 2026
    expect(calculateAge("2013-08-17", refDate)).toBe(13);
    // Born Aug 18, 2013 -> 12 years old on Aug 17, 2026
    expect(calculateAge("2013-08-18", refDate)).toBe(12);
    // Born Aug 16, 2013 -> 13 years old on Aug 17, 2026
    expect(calculateAge("2013-08-16", refDate)).toBe(13);
  });

  describe("NEGATIVE CASE 1: Under-13 Self-Serve Signup Hard Block", () => {
    it("hard-blocks self-serve signup for anyone under 13 and prevents active account state", () => {
      const res = evaluateAgeBracket("2014-05-10", refDate); // 12 years old

      expect(res.age).toBe(12);
      expect(res.ageBracket).toBe("UNDER_13");
      expect(res.isHardBlocked).toBe(true); // HARD BLOCKED
      expect(res.defaultAccountStatus).not.toBe("ACTIVE");
      expect(res.defaultAccountStatus).toBe("DEACTIVATED");
      expect(res.defaultConsentState).toBe("DENIED");
    });
  });

  describe("CASE 2: 13-17 Minor Self-Serve Signup Landing in Pending State", () => {
    it("places 13-17 year olds into PENDING_GUARDIAN_CONSENT state with PENDING consent", () => {
      const res = evaluateAgeBracket("2010-03-22", refDate); // 16 years old

      expect(res.age).toBe(16);
      expect(res.ageBracket).toBe("MINOR_13_17");
      expect(res.isHardBlocked).toBe(false);
      expect(res.requiresGuardianConsent).toBe(true);
      expect(res.defaultAccountStatus).toBe("PENDING_GUARDIAN_CONSENT");
      expect(res.defaultConsentState).toBe("PENDING");
    });
  });

  describe("CASE 3: 18+ Adult Signup", () => {
    it("allows adult signups to land directly in ACTIVE account status", () => {
      const res = evaluateAgeBracket("2000-01-01", refDate); // 26 years old

      expect(res.age).toBe(26);
      expect(res.ageBracket).toBe("ADULT_18_PLUS");
      expect(res.isHardBlocked).toBe(false);
      expect(res.requiresGuardianConsent).toBe(false);
      expect(res.defaultAccountStatus).toBe("ACTIVE");
      expect(res.defaultConsentState).toBe("NOT_REQUIRED");
    });
  });
});
