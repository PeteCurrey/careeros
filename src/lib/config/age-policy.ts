/**
 * Canonical Career OS Age Model & Safeguarding Policy Engine
 * 
 * Rules:
 * - AGE 16+: Eligible for direct individual Career OS account without school sponsorship.
 *   (This is a Career OS product eligibility policy, NOT a universal legal definition of adulthood).
 *   Users aged 16–17 remain minors where applicable law treats them as minors and receive minor safeguards.
 * - AGE 13–15: Access ONLY through verified school arrangement OR verified parent/guardian consent arrangement.
 *   No unrestricted self-service account creation without a verified relationship.
 * - UNDER AGE 13: NO open consumer registration. Access ONLY through a verified school/institutional arrangement
 *   satisfying FERPA/COPPA School Official requirements.
 * 
 * Concept Isolation:
 * Direct account eligibility, minor status, guardian relationship, institutional relationship,
 * FERPA eligible student status, postsecondary status, and jurisdictional age of majority
 * are architected independently.
 */

// Product Policy Thresholds
export const DIRECT_ACCOUNT_MIN_AGE = 16;
export const YOUTH_CONSENT_MIN_AGE = 13;
export const COPPA_CHILD_THRESHOLD = 13;
export const DEFAULT_LEGAL_MAJORITY_AGE = 18;

/** Age-Banded Policy States */
export type AgePolicyState =
  | "UNDER_13_INSTITUTIONAL"
  | "AGE_13_15_SCHOOL"
  | "AGE_13_15_GUARDIAN"
  | "AGE_16_17_DIRECT"
  | "AGE_16_17_INSTITUTIONAL"
  | "ADULT_DIRECT"
  | "ELIGIBLE_STUDENT";

/** Account Transition Types */
export type AccountTransitionType =
  | "SCHOOL_TO_DIRECT_YOUTH"
  | "SCHOOL_TO_ADULT"
  | "GUARDIAN_TO_DIRECT_INDIVIDUAL"
  | "HIGH_SCHOOL_TO_POSTSECONDARY"
  | "POSTSECONDARY_TO_PROFESSIONAL";

/** Jurisdictional Age of Majority Lookup (US Default) */
export function getJurisdictionalAgeOfMajority(countryCode = "US", stateCode?: string): number {
  if (countryCode !== "US") return 18;
  switch (stateCode?.toUpperCase()) {
    case "AL":
    case "NE":
      return 19;
    case "MS":
      return 21;
    default:
      return 18;
  }
}

/** Evaluates whether a user is legally a minor based on age and jurisdiction */
export function isMinorStatus(age: number, countryCode = "US", stateCode?: string): boolean {
  const ageOfMajority = getJurisdictionalAgeOfMajority(countryCode, stateCode);
  return age < ageOfMajority;
}

/** Evaluates whether user meets Career OS product eligibility for direct self-serve account */
export function hasDirectAccountEligibility(age: number): boolean {
  return age >= DIRECT_ACCOUNT_MIN_AGE;
}

/**
 * Evaluates FERPA Eligible Student Status.
 * Under FERPA, rights transfer to the student when the student:
 * 1. Reaches age 18; OR
 * 2. Attends a postsecondary institution at any age.
 */
export function hasFERPAEligibleStudentStatus(age: number, isPostsecondaryEnrolled = false): boolean {
  return age >= 18 || isPostsecondaryEnrolled;
}

/** Evaluates the canonical Age-Banded Policy State for a user context */
export function evaluateAgePolicyState(
  age: number,
  channel: "DIRECT" | "SCHOOL" | "GUARDIAN",
  isPostsecondary = false,
  countryCode = "US",
  stateCode?: string
): AgePolicyState {
  if (hasFERPAEligibleStudentStatus(age, isPostsecondary)) {
    if (age < getJurisdictionalAgeOfMajority(countryCode, stateCode)) {
      return "ELIGIBLE_STUDENT";
    }
    return "ADULT_DIRECT";
  }

  if (age < COPPA_CHILD_THRESHOLD) {
    return "UNDER_13_INSTITUTIONAL";
  }

  if (age >= 13 && age <= 15) {
    return channel === "SCHOOL" ? "AGE_13_15_SCHOOL" : "AGE_13_15_GUARDIAN";
  }

  if (age >= 16 && age <= 17) {
    return channel === "SCHOOL" ? "AGE_16_17_INSTITUTIONAL" : "AGE_16_17_DIRECT";
  }

  return "ADULT_DIRECT";
}

/** Evaluates account transition feasibility while preserving data asset separation */
export interface AccountTransitionEvaluation {
  allowed: boolean;
  transitionType: AccountTransitionType | null;
  twinPortabilityGranted: boolean;
  institutionalRecordIsolated: boolean;
  requiresGuardianNotice: boolean;
  reason: string;
}

export function evaluateAccountTransition(
  fromState: AgePolicyState,
  toState: AgePolicyState,
  userAge: number,
  isPostsecondary = false
): AccountTransitionEvaluation {
  // School-sponsored -> Direct Youth (at age 16)
  if (
    (fromState === "UNDER_13_INSTITUTIONAL" || fromState === "AGE_13_15_SCHOOL" || fromState === "AGE_16_17_INSTITUTIONAL") &&
    toState === "AGE_16_17_DIRECT"
  ) {
    if (userAge < DIRECT_ACCOUNT_MIN_AGE) {
      return {
        allowed: false,
        transitionType: "SCHOOL_TO_DIRECT_YOUTH",
        twinPortabilityGranted: false,
        institutionalRecordIsolated: true,
        requiresGuardianNotice: true,
        reason: `Direct individual account creation requires minimum age of ${DIRECT_ACCOUNT_MIN_AGE}.`,
      };
    }
    return {
      allowed: true,
      transitionType: "SCHOOL_TO_DIRECT_YOUTH",
      twinPortabilityGranted: true,
      institutionalRecordIsolated: true,
      requiresGuardianNotice: true,
      reason: "User meets direct account age minimum (16+). Career Twin assets portable; school education records isolated under institutional agreement.",
    };
  }

  // School-sponsored -> Adult Individual (at age 18 / legal majority)
  if (
    (fromState === "UNDER_13_INSTITUTIONAL" || fromState === "AGE_13_15_SCHOOL" || fromState === "AGE_16_17_INSTITUTIONAL") &&
    (toState === "ADULT_DIRECT" || toState === "ELIGIBLE_STUDENT")
  ) {
    return {
      allowed: true,
      transitionType: "SCHOOL_TO_ADULT",
      twinPortabilityGranted: true,
      institutionalRecordIsolated: true,
      requiresGuardianNotice: false,
      reason: "User has attained legal majority / eligible student status. Full account portability granted.",
    };
  }

  // High School -> Postsecondary
  if (toState === "ELIGIBLE_STUDENT" || isPostsecondary) {
    return {
      allowed: true,
      transitionType: "HIGH_SCHOOL_TO_POSTSECONDARY",
      twinPortabilityGranted: true,
      institutionalRecordIsolated: true,
      requiresGuardianNotice: false,
      reason: "FERPA rights transferred to student upon postsecondary enrollment. Twin and Passport assets remain student-controlled.",
    };
  }

  return {
    allowed: true,
    transitionType: null,
    twinPortabilityGranted: true,
    institutionalRecordIsolated: true,
    requiresGuardianNotice: false,
    reason: "Standard lifecycle transition.",
  };
}
