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
  canonicalIsoDate: string;
}

export interface DOBValidationResult {
  isValid: boolean;
  isoDate?: string;
  displayDate?: string;
  error?: string;
}

/**
 * Validates and canonicalises a Date of Birth input string (supporting MM/DD/YYYY or YYYY-MM-DD).
 * Rejects impossible dates (e.g. 02/30/2000, 13/10/2000, 02/29/2023), future dates, and impossible ages (> 120).
 */
export function validateAndFormatDOB(input: string, referenceDate: Date = new Date()): DOBValidationResult {
  if (!input || typeof input !== "string") {
    return { isValid: false, error: "Enter your date of birth in MM/DD/YYYY format." };
  }

  const trimmed = input.trim();
  let mm: number, dd: number, yyyy: number;

  // Format 1: MM/DD/YYYY
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(trimmed)) {
    const parts = trimmed.split("/");
    mm = parseInt(parts[0]!, 10);
    dd = parseInt(parts[1]!, 10);
    yyyy = parseInt(parts[2]!, 10);
  }
  // Format 2: 8 raw digits MMDDYYYY
  else if (/^\d{8}$/.test(trimmed)) {
    mm = parseInt(trimmed.substring(0, 2), 10);
    dd = parseInt(trimmed.substring(2, 4), 10);
    yyyy = parseInt(trimmed.substring(4, 8), 10);
  }
  // Format 3: ISO YYYY-MM-DD
  else if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    const parts = trimmed.split("-");
    yyyy = parseInt(parts[0]!, 10);
    mm = parseInt(parts[1]!, 10);
    dd = parseInt(parts[2]!, 10);
  } else {
    return { isValid: false, error: "Enter your date of birth in MM/DD/YYYY format." };
  }

  // Month check
  if (mm < 1 || mm > 12) {
    return { isValid: false, error: "Invalid month. Enter a valid month between 01 and 12." };
  }

  // Days in month check (handles leap years accurately via standard calendar arithmetic)
  const daysInMonth = new Date(yyyy, mm, 0).getDate();
  if (dd < 1 || dd > daysInMonth) {
    return { isValid: false, error: `Invalid date. The specified month has ${daysInMonth} days.` };
  }

  // Future date check
  const birthDate = new Date(yyyy, mm - 1, dd, 0, 0, 0, 0);
  const refDateZero = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate(), 0, 0, 0, 0);
  if (birthDate > refDateZero) {
    return { isValid: false, error: "Date of birth cannot be in the future." };
  }

  // Age bounds check
  const currentYear = referenceDate.getFullYear();
  const ageApprox = currentYear - yyyy;
  if (ageApprox > 120 || yyyy < 1900) {
    return { isValid: false, error: "Enter a realistic year of birth." };
  }

  const mmStr = mm.toString().padStart(2, "0");
  const ddStr = dd.toString().padStart(2, "0");
  const isoDate = `${yyyy}-${mmStr}-${ddStr}`;
  const displayDate = `${mmStr}/${ddStr}/${yyyy}`;

  return {
    isValid: true,
    isoDate,
    displayDate,
  };
}

/**
 * Calculates user age based on date of birth and reference date.
 */
export function calculateAge(dob: string | Date, referenceDate: Date = new Date()): number {
  let birthDate: Date;

  if (typeof dob === "string") {
    const validation = validateAndFormatDOB(dob, referenceDate);
    if (!validation.isValid || !validation.isoDate) {
      throw new Error(validation.error || "Invalid date of birth provided.");
    }
    const [y, m, d] = validation.isoDate.split("-").map(Number);
    birthDate = new Date(y!, m! - 1, d!);
  } else {
    birthDate = dob;
    if (isNaN(birthDate.getTime())) {
      throw new Error("Invalid date of birth provided.");
    }
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
  let canonicalIsoDate = "";
  if (typeof dob === "string") {
    const valid = validateAndFormatDOB(dob, referenceDate);
    if (!valid.isValid || !valid.isoDate) {
      throw new Error(valid.error || "Invalid date of birth.");
    }
    canonicalIsoDate = valid.isoDate;
  } else {
    const y = dob.getFullYear();
    const m = (dob.getMonth() + 1).toString().padStart(2, "0");
    const d = dob.getDate().toString().padStart(2, "0");
    canonicalIsoDate = `${y}-${m}-${d}`;
  }

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
      canonicalIsoDate,
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
      canonicalIsoDate,
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
      canonicalIsoDate,
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
    canonicalIsoDate,
  };
}
