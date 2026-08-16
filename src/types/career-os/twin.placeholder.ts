/**
 * Career Twin — PLACEHOLDER BOUNDARY
 * 
 * This file defines conceptual interfaces ONLY.
 * No database schema is created for these types in Phase 1.
 * 
 * The Career Twin domain model will be designed in a dedicated
 * product architecture phase AFTER the platform foundation is complete.
 * 
 * These types establish the architectural boundary and prevent
 * Phase 1 UI assumptions from accidentally dictating the domain model.
 */

/**
 * Conceptual shape of the Career Twin.
 * Multi-dimensional — extends well beyond a résumé.
 * Exact dimensions, relationships and storage TBD in product architecture phase.
 */
export interface CareerTwinConcept {
  // Identity
  profile_id: string;
  
  // Dimensions (conceptual — not finalised)
  skills?: unknown; // skill ontology TBD
  experience?: unknown; // work history model TBD
  interests?: unknown;
  strengths?: unknown;
  development?: unknown;
  ambitions?: unknown;
  qualifications?: unknown;
  achievements?: unknown;
  verified_evidence?: unknown;
  work_preferences?: unknown;
  pathways?: unknown;
  goals?: unknown;
}

/** Verification state for any career information */
export type VerificationState =
  | 'SELF_DECLARED' // User has declared this themselves
  | 'EVIDENCE_ATTACHED' // Supporting evidence has been uploaded
  | 'PLATFORM_ASSESSED' // Career OS has assessed/reviewed
  | 'THIRD_PARTY_VERIFIED' // A third party (not the issuer) has verified
  | 'ISSUER_VERIFIED' // The issuing institution has confirmed
  | 'EMPLOYER_VERIFIED' // A former/current employer has confirmed
  | 'EXPIRED' // Verification has lapsed
  | 'REVOKED' // Verification was revoked
  | 'DISPUTED'; // Verification is under dispute
