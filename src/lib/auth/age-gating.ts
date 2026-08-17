import { AgeBracket, ConsentState, AccountStatus } from "@/types/platform/identity";
import {
  DIRECT_ACCOUNT_MIN_AGE,
  COPPA_CHILD_THRESHOLD,
  AgePolicyState,
  evaluateAgePolicyState,
  isMinorStatus,
  hasDirectAccountEligibility,
  hasFERPAEligibleStudentStatus,
} from "@/lib/config/age-policy";

export interface AgeCalculationResult {
  age: number;
  ageBracket: AgeBracket;
  agePolicyState: AgePolicyState;
  hasDirectAccountEligibility: boolean;
  isMinor: boolean;
  requiresGuardianConsent: boolean;
  requiresInstitutionalEnrollment: boolean;
  isHardBlocked: boolean;
  defaultConsentState: ConsentState;
  defaultAccountStatus: AccountStatus;
}

/**
 * Calculates user age based on date of birth and reference date.
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

/**
 * Evaluates canonical Career OS age policy rules.
 * 
 * Rules:
 * - Age < 13: UNDER_13 (Hard-blocked from open self-service signup; school arrangement only)
 * - 13 <= Age <= 15: Gated behind verified school arrangement or verified guardian consent arrangement
 * - 16 <= Age <= 17: MINOR_16_17 (Direct account eligible under Career OS product policy; minor safeguards active)
 * - Age >= 18: ADULT_18_PLUS (Standard direct account)
 */
export function evaluateAgeBracket(
  dob: string | Date,
  referenceDate: Date = new Date(),
  channel: "DIRECT" | "SCHOOL" | "GUARDIAN" = "DIRECT",
  isPostsecondary = false
): AgeCalculationResult {
  const age = calculateAge(dob, referenceDate);
  const isMinor = isMinorStatus(age);
  const directEligible = hasDirectAccountEligibility(age);
  const policyState = evaluateAgePolicyState(age, channel, isPostsecondary);

  // Under-13 Hard Block on direct consumer signup
  if (age < COPPA_CHILD_THRESHOLD) {
    return {
      age,
      ageBracket: "UNDER_13",
      agePolicyState: "UNDER_13_INSTITUTIONAL",
      hasDirectAccountEligibility: false,
      isMinor: true,
      requiresGuardianConsent: false,
      requiresInstitutionalEnrollment: true,
      isHardBlocked: true,
      defaultConsentState: "DENIED",
      defaultAccountStatus: "DEACTIVATED",
    };
  }

  // Ages 13–15 require verified school or guardian relationship
  if (age >= 13 && age < DIRECT_ACCOUNT_MIN_AGE) {
    return {
      age,
      ageBracket: "MINOR_13_17",
      agePolicyState: policyState,
      hasDirectAccountEligibility: false,
      isMinor: true,
      requiresGuardianConsent: true,
      requiresInstitutionalEnrollment: channel === "SCHOOL",
      isHardBlocked: false,
      defaultConsentState: "PENDING",
      defaultAccountStatus: "PENDING_GUARDIAN_CONSENT",
    };
  }

  // Ages 16–17 are eligible for direct individual accounts without school/guardian sponsorship,
  // but remain legal minors with active minor safeguarding protections.
  if (age >= DIRECT_ACCOUNT_MIN_AGE && age <= 17) {
    return {
      age,
      ageBracket: "MINOR_13_17",
      agePolicyState: policyState,
      hasDirectAccountEligibility: true,
      isMinor: true,
      requiresGuardianConsent: false,
      requiresInstitutionalEnrollment: false,
      isHardBlocked: false,
      defaultConsentState: "NOT_REQUIRED",
      defaultAccountStatus: "ACTIVE",
    };
  }

  // Age 18+ Adult
  return {
    age,
    ageBracket: "ADULT_18_PLUS",
    agePolicyState: policyState,
    hasDirectAccountEligibility: true,
    isMinor: false,
    requiresGuardianConsent: false,
    requiresInstitutionalEnrollment: false,
    isHardBlocked: false,
    defaultConsentState: "NOT_REQUIRED",
    defaultAccountStatus: "ACTIVE",
  };
}
