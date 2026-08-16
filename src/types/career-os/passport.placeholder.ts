import type { VerificationState } from './twin.placeholder';

/**
 * Career Passport — PLACEHOLDER BOUNDARY
 * 
 * This file defines conceptual interfaces ONLY.
 * No database schema is created for these types in Phase 1.
 * 
 * IMPORTANT: Not all Passport information is "verified".
 * Information exists on a spectrum from SELF_DECLARED through ISSUER_VERIFIED.
 * The platform will never display false verification badges.
 */

/**
 * Conceptual shape of the Career Passport.
 * A portable professional record — complements rather than recreates a résumé.
 */
export interface CareerPassportConcept {
  profile_id: string;
  qualifications?: CareerPassportItemConcept[];
  skills?: CareerPassportItemConcept[];
  achievements?: CareerPassportItemConcept[];
  projects?: CareerPassportItemConcept[];
  credentials?: CareerPassportItemConcept[];
  work_history?: CareerPassportItemConcept[];
  development_milestones?: CareerPassportItemConcept[];
}

export interface CareerPassportItemConcept {
  id: string;
  item_type: string; // e.g. 'qualification', 'skill', 'achievement'
  title: string;
  description: string | null;
  issuer: string | null;
  issued_at: string | null;
  expires_at: string | null;
  verification_state: VerificationState;
}
