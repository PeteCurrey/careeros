import { describe, it, expect } from "vitest";
import { redactCandidateForEmployer, CandidateProfile, MatchRecord } from "@/lib/privacy/employer-redaction";

describe("Employer Candidate Redaction & Minor Safeguarding Tests", () => {
  const employerId = "emp-uuid-1111-2222";
  
  const adultCandidate: CandidateProfile = {
    id: "cand-uuid-9999-8888",
    given_name: "Jane",
    family_name: "Doe",
    email: "jane.doe@example.com",
    display_name: "Jane Doe",
    phone: "+15551234567",
    age: 24,
    is_minor: false,
  };

  const minorCandidate: CandidateProfile = {
    id: "cand-uuid-7777-6666",
    given_name: "Alex",
    family_name: "Smith",
    email: "alex.smith@school.edu",
    display_name: "Alex Smith",
    phone: "+15559876543",
    age: 16,
    is_minor: true,
  };

  describe("Adult Candidate Redaction", () => {
    it("redacts PII for un-matched adult candidates", () => {
      const result = redactCandidateForEmployer(adultCandidate, employerId, []);
      expect(result.given_name).toBe("[REDACTED]");
      expect(result.email).toBe("[REDACTED]");
      expect(result.phone).toBe("[REDACTED]");
    });

    it("unredacts adult contact info for MATCH_ACCEPTED status", () => {
      const matches: MatchRecord[] = [
        {
          employer_profile_id: employerId,
          candidate_profile_id: adultCandidate.id,
          status: "MATCH_ACCEPTED",
        },
      ];
      const result = redactCandidateForEmployer(adultCandidate, employerId, matches);
      expect(result.given_name).toBe("Jane");
      expect(result.email).toBe("jane.doe@example.com");
    });
  });

  describe("Requirement 10: Minor Candidate Safeguarding Redaction", () => {
    it("keeps minor candidates fully redacted on standard match without institutional program controls", () => {
      const matches: MatchRecord[] = [
        {
          employer_profile_id: employerId,
          candidate_profile_id: minorCandidate.id,
          status: "MATCH_ACCEPTED",
        },
      ];
      const result = redactCandidateForEmployer(minorCandidate, employerId, matches);
      expect(result.given_name).toBe("[REDACTED]");
      expect(result.email).toBe("[REDACTED_MINOR_SAFEGUARD]");
      expect(result.phone).toBe("[REDACTED_MINOR_SAFEGUARD]");
    });

    it("allows verified institutional program match for minors while maintaining phone redaction", () => {
      const matches: MatchRecord[] = [
        {
          employer_profile_id: employerId,
          candidate_profile_id: minorCandidate.id,
          status: "MATCH_ACCEPTED",
          is_institution_controlled_program: true,
          is_verified_employer: true,
          is_verified_opportunity: true,
        },
      ];
      const result = redactCandidateForEmployer(minorCandidate, employerId, matches);
      expect(result.given_name).toBe("Alex");
      expect(result.email).toBe("alex.smith@school.edu");
      expect(result.phone).toBe("[REDACTED_MINOR_SAFEGUARD]");
    });
  });
});
