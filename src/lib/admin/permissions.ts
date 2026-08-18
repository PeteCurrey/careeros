import { AdminRole, AdminUser } from '@/types/admin';

/**
 * Role hierarchy for administrative permissions
 */
export const ROLE_HIERARCHY: Record<AdminRole, number> = {
  super_admin: 100,
  admin: 80,
  content_editor: 50,
  events_moderator: 50,
  marketing: 50,
  support: 40,
  analyst: 30,
  read_only: 10,
};

/**
 * High-risk actions that require active step-up authentication within the last 15 minutes.
 */
export const SENSITIVE_OPERATIONS = [
  'admin.accounts.invite',
  'admin.accounts.change_role',
  'admin.accounts.suspend',
  'admin.accounts.reactivate',
  'admin.accounts.revoke_sessions',
  'admin.accounts.mfa_reset',
  'admin.security.regenerate_recovery_codes',
  'admin.ai.manage_credentials',
  'admin.ai.kill_switch',
  'admin.system.integrations_write',
  'admin.system.settings_write',
  'admin.exports.sensitive',
] as const;

export type SensitiveOperation = (typeof SENSITIVE_OPERATIONS)[number];

/**
 * Validates that an admin user satisfies the required minimum role level.
 */
export function hasMinimumRole(userRole: AdminRole, requiredRole: AdminRole): boolean {
  const userLevel = ROLE_HIERARCHY[userRole] || 0;
  const requiredLevel = ROLE_HIERARCHY[requiredRole] || 0;
  return userLevel >= requiredLevel;
}

/**
 * Checks whether an admin session has verified step-up authentication within the step-up window.
 */
export function isStepUpValid(stepUpVerifiedAt?: string | null, windowMinutes = 15): boolean {
  if (!stepUpVerifiedAt) return false;
  const verifiedTime = new Date(stepUpVerifiedAt).getTime();
  const now = Date.now();
  return now - verifiedTime <= windowMinutes * 60 * 1000;
}

/**
 * Enforces server-side permission check. Throws an error if unauthorized.
 */
export function enforceAdminRole(user: AdminUser, minimumRole: AdminRole): void {
  if (!hasMinimumRole(user.role, minimumRole)) {
    throw new Error(`Forbidden: required role '${minimumRole}', current role is '${user.role}'`);
  }
}

/**
 * Enforces server-side Super Admin requirement.
 */
export function enforceSuperAdmin(user: AdminUser): void {
  if (user.role !== 'super_admin') {
    throw new Error('Forbidden: Super Admin authority required');
  }
}
