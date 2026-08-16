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
  | 'SUSPENDED'
  | 'DEACTIVATED'
  | 'DELETED';

/** Retention classification for data lifecycle management */
export type RetentionClass =
  | 'STANDARD'
  | 'EXTENDED'
  | 'LEGAL_HOLD'
  | 'EPHEMERAL'
  | 'CONSENT_BOUND';

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
  roles: string[];
  permissions: string[];
}
