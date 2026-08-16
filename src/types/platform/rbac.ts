/**
 * Role-Based Access Control Types
 * 
 * RBAC controls workspace/application capabilities.
 * Granular access policies (data_access_grants) control sensitive career information.
 */

export interface Role {
  id: string;
  name: string; // e.g. 'individual_member', 'school_admin', 'employer_recruiter'
  workspace_type: string; // which workspace type this role belongs to
  description: string | null;
  is_system_role: boolean;
  created_at: string;
}

export interface Permission {
  id: string;
  name: string; // e.g. 'career_twin.read', 'workspace.invite', 'employer.search'
  description: string | null;
  resource_type: string | null;
  action: string;
}

export interface RolePermission {
  role_id: string;
  permission_id: string;
  granted_at: string;
}

/**
 * Known permission strings (non-exhaustive — add as features are built).
 * Using dot-notation: resource.action
 */
export const PERMISSIONS = {
  // Workspace management
  WORKSPACE_VIEW: 'workspace.view',
  WORKSPACE_INVITE: 'workspace.invite',
  WORKSPACE_MANAGE: 'workspace.manage',
  
  // Individual career
  CAREER_TWIN_READ: 'career_twin.read',
  CAREER_TWIN_WRITE: 'career_twin.write',
  CAREER_PASSPORT_READ: 'career_passport.read',
  CAREER_PASSPORT_WRITE: 'career_passport.write',
  
  // School context
  SCHOOL_STUDENTS_READ: 'school.students.read',
  SCHOOL_OUTCOMES_READ: 'school.outcomes.read',
  SCHOOL_SETTINGS_WRITE: 'school.settings.write',
  
  // Employer context
  EMPLOYER_SEARCH: 'employer.search',
  EMPLOYER_AGENT_USE: 'employer.agent.use',
  EMPLOYER_SETTINGS_WRITE: 'employer.settings.write',
  
  // Admin
  ADMIN_ALL: 'admin.*',
} as const;

export type PermissionKey = keyof typeof PERMISSIONS;
export type PermissionValue = (typeof PERMISSIONS)[PermissionKey];
