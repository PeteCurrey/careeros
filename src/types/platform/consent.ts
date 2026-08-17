/**
 * Consent & Policy Types
 * 
 * Consent is a first-class concept, not a boolean field.
 * All consent changes are recorded in an append-only event ledger.
 * Every policy acceptance is an immutable record proving which version
 * a user accepted and when.
 */

export type ConsentType =
  | 'TERMS_OF_SERVICE'
  | 'PRIVACY_POLICY'
  | 'AI_TERMS'
  | 'DATA_PROCESSING'
  | 'GUARDIAN_AUTHORISATION'
  | 'SCHOOL_DATA_SHARING'
  | 'EMPLOYER_PROFILE_ACCESS'
  | 'MENTOR_DATA_ACCESS'
  | 'RESEARCH_PARTICIPATION'
  | 'MARKETING_COMMUNICATIONS';

export type ConsentEventType =
  | 'CONSENT_GRANTED'
  | 'CONSENT_UPDATED'
  | 'CONSENT_WITHDRAWN'
  | 'CONSENT_EXPIRED';

export type RelationshipType =
  | 'SELF'
  | 'GUARDIAN'
  | 'SCHOOL'
  | 'EMPLOYER'
  | 'PLATFORM';

/** Current consent record — one per (subject_user_id, consent_type, organisation_id) */
export interface Consent {
  id: string; // UUID
  consent_type: ConsentType;
  subject_user_id: string; // profile whose data is covered
  granted_by_user_id: string; // who granted (may differ for minors)
  relationship_type: RelationshipType;
  organisation_id: string | null;
  purpose: string;
  jurisdiction: string | null; // ISO country code or jurisdiction key
  policy_document_id: string | null;
  policy_version_id: string | null;
  legal_or_policy_basis: string | null;
  granted_at: string;
  expires_at: string | null;
  withdrawn_at: string | null;
  withdrawal_reason: string | null;
  metadata: Record<string, unknown> | null;
}

/** Append-only consent event ledger entry */
export interface ConsentEvent {
  id: string; // UUID
  consent_id: string; // FK -> consents.id
  event_type: ConsentEventType;
  changed_by_user_id: string;
  occurred_at: string;
  reason: string | null;
  snapshot: Partial<Consent>; // state at time of event
  metadata: Record<string, unknown> | null;
}

/** A canonical policy/legal document */
export interface PolicyDocument {
  id: string;
  name: string; // e.g. 'Terms of Service', 'Privacy Policy'
  document_type: string; // e.g. 'TERMS', 'PRIVACY', 'AI_TERMS'
  applicable_audiences: string[]; // e.g. ['individual', 'school', 'employer']
  created_at: string;
}

/** An immutable versioned snapshot of a policy document */
export interface PolicyVersion {
  id: string;
  policy_document_id: string;
  version: string; // e.g. '1.0', '2.1'
  effective_from: string;
  effective_until: string | null;
  content_hash: string; // SHA-256 of content for integrity
  published_at: string;
}

/** Proof that a user accepted a specific policy version */
export interface PolicyAcceptance {
  id: string;
  profile_id: string;
  policy_version_id: string;
  accepted_at: string;
  ip_address_hash: string | null; // hashed for privacy
  user_agent_hash: string | null; // hashed for privacy
  method: 'EXPLICIT_CLICK' | 'DIGITAL_SIGNATURE' | 'API' | 'IMPORT';
}

/** Phase 0 Extensible Consent Audit Log Table Record */
export interface ConsentAuditLog {
  id: string;
  profile_id: string;
  age_bracket: 'UNDER_13' | 'MINOR_13_17' | 'ADULT_18_PLUS';
  consent_state: 'NOT_REQUIRED' | 'PENDING' | 'GRANTED' | 'DENIED' | 'EXPIRED';
  /** Verification method (left open/nullable for Phase 1 verification mechanisms) */
  verification_method: string | null;
  verification_metadata: Record<string, unknown> | null;
  ip_address_hash: string | null;
  user_agent_hash: string | null;
  notes: string | null;
  created_at: string;
}

