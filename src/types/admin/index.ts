/**
 * CareerOS Admin Control Plane — Type System & Contracts
 */

export type AdminRole =
  | 'super_admin'
  | 'admin'
  | 'content_editor'
  | 'events_moderator'
  | 'support'
  | 'marketing'
  | 'analyst'
  | 'read_only';

export interface AdminUser {
  id: string;
  auth_user_id: string;
  email: string;
  display_name: string;
  role: AdminRole;
  workspace_id: string;
  workspace_name: string;
  last_sign_in_at?: string;
  created_at: string;
}

export interface AdminAuditRecord {
  id: string;
  event_type: string;
  actor_type: 'ADMIN' | 'SYSTEM' | 'USER';
  actor_id: string;
  actor_email?: string;
  subject_type: string;
  subject_id: string;
  workspace_id?: string;
  payload: Record<string, unknown>;
  occurred_at: string;
  ip_address_hash?: string;
  user_agent_hash?: string;
}

export interface CommandCentreStats {
  totalUsers: number;
  activeUsers30d: number;
  newUsers7d: number;
  publishedEvents: number;
  pendingEventReviews: number;
  discoveredCandidates: number;
  totalOrganizations: number;
  totalSchools: number;
  totalEmployers: number;
  aiRequestsToday: number;
  aiCostTodayUsd: number;
  aiErrorRate: number;
  failedJobs24h: number;
  failingSourcesCount: number;
  disconnectedIntegrationsCount: number;
}

export interface ActionCenterItem {
  id: string;
  category: 'needs_review' | 'needs_attention' | 'opportunity';
  title: string;
  description: string;
  count?: number;
  urgency: 'high' | 'medium' | 'low';
  actionHref: string;
  actionLabel: string;
  sourceSystem: string;
  timestamp: string;
}

export interface AdminNavItem {
  title: string;
  href: string;
  icon?: string;
  badge?: string | number;
  requiredRole?: AdminRole[];
  children?: {
    title: string;
    href: string;
    badge?: string | number;
    requiredRole?: AdminRole[];
  }[];
}

export interface AdminNavSection {
  title: string;
  items: AdminNavItem[];
}

export type AdminSecurityEventType =
  | 'login_attempt'
  | 'login_success'
  | 'login_failure'
  | 'mfa_challenge'
  | 'mfa_success'
  | 'mfa_failure'
  | 'mfa_totp_enrolled'
  | 'mfa_passkey_enrolled'
  | 'mfa_factor_removed'
  | 'recovery_code_used'
  | 'recovery_code_invalid'
  | 'recovery_codes_regenerated'
  | 'session_created'
  | 'session_revoked'
  | 'all_sessions_revoked'
  | 'step_up_required'
  | 'step_up_completed'
  | 'password_changed'
  | 'admin_invited'
  | 'admin_activated'
  | 'admin_deactivated'
  | 'role_changed'
  | 'super_admin_action'
  | 'break_glass_access';

export interface AdminSession {
  id: string;
  admin_profile_id: string;
  session_token_hash: string;
  supabase_user_id?: string;
  mfa_verified_at: string;
  step_up_verified_at?: string;
  last_active_at: string;
  expires_at: string;
  idle_expires_at: string;
  ip_address_hash?: string;
  user_agent_hash?: string;
  device_label?: string;
  revoked_at?: string;
  revocation_reason?: string;
  created_at: string;
}

export interface AdminMfaFactor {
  id: string;
  admin_profile_id: string;
  factor_type: 'totp' | 'webauthn_passkey';
  factor_label: string;
  credential_id?: string;
  enrolled_at: string;
  last_used_at?: string;
  revoked_at?: string;
}

export interface AdminAuthContext {
  user: AdminUser;
  session: AdminSession;
  mfaEnrolled: boolean;
  hasRecentStepUp: boolean;
}
