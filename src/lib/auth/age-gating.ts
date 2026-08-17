import { AgeBracket, ConsentState, AccountStatus } from "@/types/platform/identity";

export interface AgeCalculationResult {
  age: number;
  ageBracket: AgeBracket;
  requiresGuardianConsent: boolean;
  isHardBlocked: boolean;
  defaultConsentState: ConsentState;
  defaultAccountStatus: AccountStatus;
}

/**
 * Calculates user age and determines Phase 0 age-bracket branching rules.
 * 
 * Rules:
 * - Age < 13: UNDER_13 (Hard blocked from self-serve signup)
 * - 13 <= Age <= 17: MINOR_13_17 (Pending guardian consent, restricted account)
 * - Age >= 18: ADULT_18_PLUS (Standard adult signup)
 */
export function calculateAge(dob: string | Date, referenceDate: Date = new Date()): number {
  const birthDate = typeof dob === "string" ? new Date(dob) : dob;
  if (isNaN(birthDate.getTime())) {
    throw new Error("Invalid date of birth provided.");
  }

  let age = referenceDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = referenceDate.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && referenceDate.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

export function evaluateAgeBracket(dob: string | Date, referenceDate: Date = new Date()): AgeCalculationResult {
  const age = calculateAge(dob, referenceDate);

  if (age < 13) {
    return {
      age,
      ageBracket: "UNDER_13",
      requiresGuardianConsent: false,
      isHardBlocked: true,
      defaultConsentState: "DENIED",
      defaultAccountStatus: "DEACTIVATED",
    };
  }

  if (age >= 13 && age <= 17) {
    return {
      age,
      ageBracket: "MINOR_13_17",
      requiresGuardianConsent: true,
      isHardBlocked: false,
      defaultConsentState: "PENDING",
      defaultAccountStatus: "PENDING_GUARDIAN_CONSENT",
    };
  }

  return {
    age,
    ageBracket: "ADULT_18_PLUS",
    requiresGuardianConsent: false,
    isHardBlocked: false,
    defaultConsentState: "NOT_REQUIRED",
    defaultAccountStatus: "ACTIVE",
  };
}
