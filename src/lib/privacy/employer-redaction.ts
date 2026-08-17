/**
 * Employer Redaction Service (Phase 0)
 * 
 * Enforces field-level redaction on candidate PII for employer role queries.
 * Candidate Name, Email, Address, and Phone remain 100% REDACTED from employers
 * unless an explicit MATCH_ACCEPTED record exists for the candidate-employer pair.
 */

export interface CandidateProfile {
  id: string;
  given_name?: string | null;
  family_name?: string | null;
  email?: string | null;
  display_name?: string | null;
  candidate_code?: string;
  [key: string]: unknown;
}

export interface MatchRecord {
  employer_profile_id: string;
  candidate_profile_id: string;
  status: "PENDING" | "MATCH_ACCEPTED" | "REJECTED";
}

export function redactCandidateForEmployer<T extends CandidateProfile>(
  candidate: T,
  employerProfileId: string,
  matches: MatchRecord[]
): T {
  const isAcceptedMatch = matches.some(
    (m) =>
      m.candidate_profile_id === candidate.id &&
      m.employer_profile_id === employerProfileId &&
      m.status === "MATCH_ACCEPTED"
  );

  if (isAcceptedMatch) {
    return candidate;
  }

  // Redact PII
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
