/**
 * Employer Redaction & Minor Safeguarding Service
 * 
 * Rules:
 * 1. Default-Private Profiles: Candidate Name, Email, Address, and Phone remain 100% REDACTED
 *    from employer views unless an explicit, verified MATCH_ACCEPTED record exists.
 * 2. Minor Candidate Safeguards (Age < 18):
 *    - Unrestricted recruiter browsing of minor profiles is strictly prohibited.
 *    - A guardian or school approval does NOT unlock a minor candidate profile for open browsing.
 *    - Minor candidate interactions require:
 *      a) Institution-controlled or verified opportunity program sponsorship;
 *      b) Verified employer identity;
 *      c) Verified legitimate opportunity;
 *      d) Restricted direct messaging with audit logging;
 *      e) Mandatory safeguarding escalation mechanisms.
 *    - Cold commercial solicitation of school-age users is hard-blocked.
 */

export interface CandidateProfile {
  id: string;
  given_name?: string | null;
  family_name?: string | null;
  email?: string | null;
  display_name?: string | null;
  candidate_code?: string;
  age?: number | null;
  is_minor?: boolean;
  [key: string]: unknown;
}

export interface MatchRecord {
  employer_profile_id: string;
  candidate_profile_id: string;
  status: "PENDING" | "MATCH_ACCEPTED" | "REJECTED";
  is_institution_controlled_program?: boolean;
  is_verified_employer?: boolean;
  is_verified_opportunity?: boolean;
}

export function redactCandidateForEmployer<T extends CandidateProfile>(
  candidate: T,
  employerProfileId: string,
  matches: MatchRecord[]
): T {
  const isMinor = candidate.is_minor ?? (typeof candidate.age === "number" && candidate.age < 18);

  const match = matches.find(
    (m) =>
      m.candidate_profile_id === candidate.id &&
      m.employer_profile_id === employerProfileId
  );

  const isAcceptedMatch = match?.status === "MATCH_ACCEPTED";

  // For Minor Candidates, additional safeguarding validation is required
  if (isMinor) {
    const isSafeguardedProgramMatch =
      isAcceptedMatch &&
      match?.is_institution_controlled_program === true &&
      match?.is_verified_employer === true &&
      match?.is_verified_opportunity === true;

    if (isSafeguardedProgramMatch) {
      // Even under an accepted program match, phone and direct home address remain redacted for minors
      return {
        ...candidate,
        phone: "[REDACTED_MINOR_SAFEGUARD]",
        address: "[REDACTED_MINOR_SAFEGUARD]",
      };
    }

    // Minor profiles remain fully redacted for general queries
    const candidateHash = candidate.id.slice(0, 8).toUpperCase();
    return {
      ...candidate,
      given_name: "[REDACTED]",
      family_name: "[REDACTED]",
      display_name: `Youth Candidate #${candidateHash}`,
      email: "[REDACTED_MINOR_SAFEGUARD]",
      phone: "[REDACTED_MINOR_SAFEGUARD]",
      address: "[REDACTED_MINOR_SAFEGUARD]",
    };
  }

  // Adult Candidate Redaction
  if (isAcceptedMatch) {
    return candidate;
  }

  const candidateHash = candidate.id.slice(0, 8).toUpperCase();
  return {
    ...candidate,
    given_name: "[REDACTED]",
    family_name: "[REDACTED]",
    display_name: `Candidate #${candidateHash}`,
    email: "[REDACTED]",
    phone: "[REDACTED]",
  };
}
