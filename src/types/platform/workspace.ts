/**
 * Workspace Types
 * 
 * A user has one core identity (Profile) but may hold memberships
 * across multiple Workspaces. The authenticated application switches
 * context between workspaces without switching identities or accounts.
 */

export type WorkspaceType =
  | 'INDIVIDUAL'
  | 'SCHOOL'
  | 'EMPLOYER'
  | 'PARTNER'
  | 'ADMIN';

export type WorkspaceMemberStatus =
  | 'ACTIVE'
  | 'INVITED'
  | 'PENDING_APPROVAL'
  | 'SUSPENDED'
  | 'LEFT';

/** A workspace — a typed context for application access */
export interface Workspace {
  id: string; // UUID
  type: WorkspaceType;
  name: string;
  slug: string; // URL-safe identifier
  organisation_id: string | null; // FK -> organisations.id (null for INDIVIDUAL)
  settings: WorkspaceSettings;
  created_at: string;
  updated_at: string;
}

export interface WorkspaceSettings {
  feature_flags?: Record<string, boolean>;
  jurisdiction?: string;
  locale?: string;
  [key: string]: unknown;
}

/** Membership of a user in a workspace */
export interface WorkspaceMembership {
  id: string; // UUID
  profile_id: string; // FK -> profiles.id
  workspace_id: string; // FK -> workspaces.id
  role_id: string; // FK -> roles.id
  status: WorkspaceMemberStatus;
  joined_at: string;
  left_at: string | null;
  invited_by: string | null; // profile_id of inviter
}

/** Workspace summary for switcher UI */
export interface WorkspaceSummary {
  workspace_id: string;
  workspace_name: string;
  workspace_type: WorkspaceType;
  role_name: string;
  status: WorkspaceMemberStatus;
}
