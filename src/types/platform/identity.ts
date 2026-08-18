import type { WorkspaceType } from "./workspace";

/**
 * Platform Identity Types
 */

export type AuthProvider =
  | "email"
  | "magic_link"
  | "google"
  | "microsoft"
  | "saml"
  | "passkey";

export type AccountStatus =
  | "ACTIVE"
  | "PENDING_VERIFICATION"
  | "PENDING_GUARDIAN_CONSENT"
  | "PURGE_SCHEDULED"
  | "SUSPENDED"
  | "DEACTIVATED"
  | "DELETED";

export type AgeBracket =
  | "UNDER_13"
  | "MINOR_13_17"
  | "ADULT_18_PLUS";

export type ConsentState =
  | "NOT_REQUIRED"
  | "REQUIRED"
  | "PENDING"
  | "VERIFIED"
  | "REJECTED"
  | "GRANTED"
  | "DENIED"
  | "EXPIRED";

export type RetentionClass =
  | "STANDARD"
  | "EXTENDED"
  | "LEGAL_HOLD"
  | "EPHEMERAL"
  | "CONSENT_BOUND";

/**
 * Security Assurance Level — progressive authentication trust level
 */
export type SecurityAssuranceLevel =
  | "UNVERIFIED"
  | "EMAIL_VERIFIED"
  | "PRIMARY_AUTH_CONFIGURED"
  | "MFA_REQUIRED"
  | "MFA_CONFIGURED"
  | "SECURED"
  | "STEPPED_UP";

export type DataClassificationLevel =
  | "CLASS_0_PUBLIC"
  | "CLASS_1_BASIC"
  | "CLASS_2_PERSONAL_CAREER"
  | "CLASS_3_SENSITIVE_CAREEROS"
  | "CLASS_4_HIGH_SENSITIVITY_MEDIA";

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

export interface UserActiveSession {
  id: string;
  profile_id: string;
  session_token_hash: string;
  device_category: "desktop" | "mobile" | "tablet";
  browser_name: string;
  os_name: string;
  ip_address_hash?: string | null;
  approximate_location?: string | null;
  created_at: string;
  last_active_at: string;
  expires_at: string;
  revoked_at: string | null;
}

export interface UserSecurityEvent {
  id: string;
  profile_id: string;
  event_type:
    | "account_created"
    | "email_verified"
    | "passkey_registered"
    | "passkey_removed"
    | "password_set"
    | "password_changed"
    | "mfa_enabled"
    | "mfa_disabled"
    | "login_success"
    | "login_failure"
    | "session_revoked"
    | "step_up_success"
    | "step_up_failure"
    | "email_changed"
    | "dob_changed"
    | "guardian_verification_changed"
    | "security_state_changed"
    | "onboarding_access_granted"
    | "account_export"
    | "account_delete_requested";
  success: boolean;
  metadata?: Record<string, unknown>;
  created_at: string;
}

export interface Profile {
  id: string;
  auth_user_id?: string | null;
  display_name: string | null;
  given_name: string | null;
  family_name: string | null;
  locale: string | null;
  timezone: string | null;
  country_code: string | null;
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

export interface Identity {
  id: string;
  profile_id: string;
  provider: AuthProvider;
  provider_user_id: string;
  email: string | null;
  verified_at: string | null;
  created_at: string;
  last_used_at: string | null;
}

export interface SessionContext {
  profile_id: string;
  active_workspace_id: string | null;
  workspace_type: WorkspaceType | null;
  security_assurance: SecurityAssuranceLevel;
  roles: string[];
  permissions: string[];
}
