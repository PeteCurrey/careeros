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
  totalOrganisations: number;
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
