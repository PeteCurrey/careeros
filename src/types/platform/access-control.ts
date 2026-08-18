/**
 * Granular Access Control Types
 * 
 * IMPORTANT: This is NOT a simple hierarchical enum.
 * 
 * A person can grant Employer A access to a field while Employer B cannot see it.
 * A person can allow a mentor to see something their professional network cannot.
 * 
 * Two complementary systems:
 * 1. DefaultVisibility — what is visible by default without an explicit grant
 * 2. DataAccessGrant — explicit, relationship-based, purpose-limited access grants
 */

/** Default visibility levels for profile fields */
export type DefaultVisibility =
  | 'PRIVATE' // Only the subject themselves (and platform with consent)
  | 'CONNECTIONS' // Direct, verified connections
  | 'NETWORK' // Extended professional network
  | 'PUBLIC'; // Publicly visible on Career OS

/** Types of subject that can receive an access grant */
export type AccessSubjectType =
  | 'MENTOR'
  | 'EMPLOYER'
  | 'ORGANISATION'
  | 'PERSON'
  | 'GUARDIAN'
  | 'EDUCATOR'
  | 'PARTNER';

/** Types of resource that can be access-controlled */
export type AccessResourceType =
  | 'CAREER_TWIN_FIELD'
  | 'CAREER_TWIN_SECTION'
  | 'CAREER_PASSPORT'
  | 'CREDENTIAL'
  | 'WORK_HISTORY'
  | 'PROFILE'
  | 'GOALS'
  | 'ASSESSMENTS';

/** Permission granted within a DataAccessGrant */
export type AccessPermission =
  | 'READ'
  | 'READ_SUMMARY'
  | 'WRITE'
  | 'ENDORSE'
  | 'VERIFY';

/**
 * Explicit, revocable access grant for a specific resource.
 * An employer must never automatically receive everything known by the Career Twin.
 */
export interface DataAccessGrant {
  id: string; // UUID
  resource_type: AccessResourceType;
  resource_id: string; // ID of the specific resource
  subject_type: AccessSubjectType;
  subject_id: string; // Who receives access
  permission: AccessPermission;
  purpose: string; // Why this access was granted
  granted_by: string; // profile_id
  granted_at: string;
  expires_at: string | null;
  revoked_at: string | null;
  jurisdiction: string | null;
  metadata: Record<string, unknown> | null;
}

/** Privacy preferences per profile (Legacy schema) */
export interface ProfilePrivacySettings {
  profile_id: string;
  default_visibility: DefaultVisibility;
  allow_mentor_access: boolean;
  allow_employer_discovery: boolean;
  allow_network_visibility: boolean;
  updated_at: string;
}
