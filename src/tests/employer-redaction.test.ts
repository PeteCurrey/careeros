import { describe, it, expect } from "vitest";
import { redactCandidateForEmployer, CandidateProfile, MatchRecord } from "@/lib/privacy/employer-redaction";

describe("Phase 0 Employer-Side Candidate Redaction (RLS Enforcement)", () => {
  const employerId = "emp-uuid-1111-2222";
  const candidate: CandidateProfile = {
    id: "cand-uuid-9999-8888",
    given_name: "Jane",
    family_name: "Doe",
    email: "jane.doe@example.com",
    display_name: "Jane Doe",
    phone: "+15551234567",
  };

  describe("NEGATIVE CASE 1: Non-Matched Candidate Redaction", () => {
    it("completely redacts name, email, and phone when no match record exists", () => {
      const matches: MatchRecord[] = [];
      const result = redactCandidateForEmployer(candidate, employerId, matches);

      expect(result.given_name).toBe("[REDACTED]");
      expect(result.family_name).toBe("[REDACTED]");
      expect(result.email).toBe("[REDACTED]");
      expect(result.phone).toBe("[REDACTED]");
      expect(result.display_name).toContain("Candidate #CAND-UUI");
    });
  });

  describe("NEGATIVE CASE 2: Pending Match Candidate Redaction", () => {
    it("completely redacts contact info when match status is still PENDING", () => {
      const matches: MatchRecord[] = [
        {
          employer_profile_id: employerId,
          candidate_profile_id: candidate.id,
          status: "PENDING",
        },
      ];
      const result = redactCandidateForEmployer(candidate, employerId, matches);

      expect(result.given_name).toBe("[REDACTED]");
      expect(result.email).toBe("[REDACTED]");
      expect(result.phone).toBe("[REDACTED]");
    });
  });

  describe("POSITIVE CASE 3: Accepted Match Candidate Unredaction", () => {
    it("returns full unredacted candidate contact info when match status is MATCH_ACCEPTED", () => {
      const matches: MatchRecord[] = [
        {
          employer_profile_id: employerId,
          candidate_profile_id: candidate.id,
          status: "MATCH_ACCEPTED",
        },
      ];
      const result = redactCandidateForEmployer(candidate, employerId, matches);

      expect(result.given_name).toBe("Jane");
      expect(result.family_name).toBe("Doe");
      expect(result.email).toBe("jane.doe@example.com");
      expect(result.phone).toBe("+15551234567");
    });
  });
});
