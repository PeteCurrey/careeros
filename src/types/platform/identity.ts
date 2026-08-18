import type { WorkspaceType } from './workspace';

/**
 * Platform Identity Types
 * 
 * Application identity is NOT tightly coupled to the auth provider.
 * A Profile is an application-level concept. Identities are auth provider records
 * linked to a Profile. This allows future addition of passkeys, SAML SSO,
 * school district SSO, etc., without restructuring core identity.
 */

/** Auth provider identifiers */
export type AuthProvider =
  | 'email'
  | 'magic_link'
  | 'google'
  | 'microsoft'
  | 'saml'
  | 'passkey';

/** Account status */
export type AccountStatus =
  | 'ACTIVE'
  | 'PENDING_VERIFICATION'
  | 'PENDING_GUARDIAN_CONSENT'
  | 'PURGE_SCHEDULED'
  | 'SUSPENDED'
  | 'DEACTIVATED'
  | 'DELETED';

/** Age classification for COPPA/FERPA and minor consent branching */
export type AgeBracket =
  | 'UNDER_13'
  | 'MINOR_13_17'
  | 'ADULT_18_PLUS';

/** Minor consent lifecycle state */
export type ConsentState =
  | 'NOT_REQUIRED'
  | 'PENDING'
  | 'GRANTED'
  | 'DENIED'
  | 'EXPIRED';

/** Retention classification for data lifecycle management */
export type RetentionClass =
  | 'STANDARD'
  | 'EXTENDED'
  | 'LEGAL_HOLD'
  | 'EPHEMERAL'
  | 'CONSENT_BOUND';

/** Security Assurance Level — progressive authentication trust level */
export type SecurityAssuranceLevel =
  | 'EMAIL_VERIFIED' // Basic account, allowed Class 0 & Class 1
  | 'SECURED'        // Passkey or Password+MFA enabled, allowed Class 2, 3, 4
  | 'STEPPED_UP';    // Recent strong authentication (< 15 min), allowed sensitive actions

/** Data Classification Levels for CareerOS data boundary */
export type DataClassificationLevel =
  | 'CLASS_0_PUBLIC'                 // Public content, resource library, guides
  | 'CLASS_1_BASIC'                  // Email, basic account metadata, broad onboarding preferences
  | 'CLASS_2_PERSONAL_CAREER'        // CV content, work history, detailed education, applications
  | 'CLASS_3_SENSITIVE_CAREEROS'     // Private mentor conversations, assessments, AI analyses, salary
  | 'CLASS_4_HIGH_SENSITIVITY_MEDIA'; // Voice recordings, video mock interviews, transcripts

/** User Passkey (W3C WebAuthn Credential) */
export interface UserPasskey {
  id: string;
  profile_id: string;
  credential_id: string;
  public_key: string;
  counter: number;
  device_name: string;
  aaguid: string | null;
  transports: string[];
  created_at: string;
  last_used_at: string | null;
}

/** User Active Device Session */
export interface UserActiveSession {
  id: string;
  profile_id: string;
  session_token_hash: string;
  device_category: 'desktop' | 'mobile' | 'tablet';
  browser_name: string;
  os_name: string;
  ip_address_hash?: string | null;
  approximate_location?: string | null;
  created_at: string;
  last_active_at: string;
  expires_at: string;
  revoked_at: string | null;
}

/** User Security Audit Event */
export interface UserSecurityEvent {
  id: string;
  profile_id: string;
  event_type:
    | 'account_created'
    | 'email_verified'
    | 'passkey_registered'
    | 'passkey_removed'
    | 'password_set'
    | 'password_changed'
    | 'mfa_enabled'
    | 'mfa_disabled'
    | 'login_success'
    | 'login_failure'
    | 'session_revoked'
    | 'step_up_success'
    | 'step_up_failure'
    | 'email_changed'
    | 'dob_changed'
    | 'account_export'
    | 'account_delete_requested';
  success: boolean;
  metadata?: Record<string, unknown>;
  created_at: string;
}

/** Core application profile — one per person */
export interface Profile {
  id: string; // UUID
  auth_user_id?: string | null;
  display_name: string | null;
  given_name: string | null;
  family_name: string | null;
  locale: string | null; // BCP 47 e.g. 'en-US'
  timezone: string | null; // IANA timezone
  country_code: string | null; // ISO 3166-1 alpha-2
  status: AccountStatus;
  security_assurance: SecurityAssuranceLevel;
  last_stepped_up_at?: string | null;
  date_of_birth?: string | null;
  age_bracket?: AgeBracket | null;
  guardian_email?: string | null;
  consent_state?: ConsentState;
  purge_scheduled_at?: string | null;
  created_at: string;
  updated_at: string;
  archived_at: string | null;
  deleted_at: string | null;
  retention_class: RetentionClass | null;
  retention_until: string | null;
}

/** Auth provider identity record linked to a Profile */
export interface Identity {
  id: string; // UUID
  profile_id: string; // FK -> profiles.id
  provider: AuthProvider;
  provider_user_id: string; // external user ID from provider
  email: string | null;
  verified_at: string | null;
  created_at: string;
  last_used_at: string | null;
}

/** Session context (client-safe, no secrets) */
export interface SessionContext {
  profile_id: string;
  active_workspace_id: string | null;
  workspace_type: WorkspaceType | null;
  security_assurance: SecurityAssuranceLevel;
  roles: string[];
  permissions: string[];
}
