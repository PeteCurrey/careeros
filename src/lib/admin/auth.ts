import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminRole, AdminUser, AdminSession, AdminAuthContext } from '@/types/admin';
import { ROUTES } from '@/lib/routes';
import {
  ADMIN_SESSION_COOKIE_NAME,
  ADMIN_FALLBACK_COOKIE_NAME,
  validateAdminSessionToken,
  touchAdminSession,
} from '@/lib/admin/session';
import { ROLE_HIERARCHY, isStepUpValid } from '@/lib/admin/permissions';
import { getAdminMfaFactors } from '@/lib/admin/mfa';

/**
 * High-Security Admin Authentication Guard
 * 
 * Enforces:
 * 1. Presence and cryptographic validity of dedicated Admin Session Token
 * 2. Active, non-revoked DB session record with idle & absolute timeouts
 * 3. Verified MFA factor (or immediate redirection to setup)
 * 4. Active admin workspace membership & minimum role hierarchy
 * 
 * Completely decoupled from consumer sessions.
 */
export async function requireAdminSession(minimumRole: AdminRole = 'read_only'): Promise<AdminAuthContext> {
  const cookieStore = await cookies();
  const token =
    cookieStore.get(ADMIN_SESSION_COOKIE_NAME)?.value ||
    cookieStore.get(ADMIN_FALLBACK_COOKIE_NAME)?.value;

  const isDev = process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_APP_ENV === 'development';
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  // Local development bypass strictly for unconfigured local instances
  if (isDev && (!supabaseUrl || !token)) {
    // If no token exists in dev without supabase, allow developer fallback
    if (!token && (!supabaseUrl || supabaseUrl === '')) {
      const mockSession: AdminSession = {
        id: '00000000-0000-0000-0000-000000000001',
        admin_profile_id: '00000000-0000-0000-0000-000000000001',
        session_token_hash: 'dev_mock_hash',
        mfa_verified_at: new Date().toISOString(),
        step_up_verified_at: new Date().toISOString(),
        last_active_at: new Date().toISOString(),
        expires_at: new Date(Date.now() + 8 * 3600 * 1000).toISOString(),
        idle_expires_at: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
        created_at: new Date().toISOString(),
      };

      const mockUser: AdminUser = {
        id: '00000000-0000-0000-0000-000000000001',
        auth_user_id: '00000000-0000-0000-0000-000000000001',
        email: 'admin@careeros.local',
        display_name: 'Lead Administrator (Local Dev)',
        role: 'super_admin',
        workspace_id: '00000000-0000-0000-0000-000000000001',
        workspace_name: 'CareerOS Platform Administration',
        created_at: new Date().toISOString(),
      };

      return {
        user: mockUser,
        session: mockSession,
        mfaEnrolled: true,
        hasRecentStepUp: true,
      };
    }
  }

  if (!token) {
    redirect(ROUTES.ADMIN_LOGIN);
  }

  // Validate session against DB
  const validation = await validateAdminSessionToken(token);
  if (!validation.valid || !validation.session) {
    redirect(ROUTES.ADMIN_LOGIN);
  }

  const session = validation.session;

  // Touch session (refresh rolling idle timeout)
  await touchAdminSession(session.id);

  const supabase = createAdminClient();

  // Load profile and verified role
  const { data: profile } = await supabase
    .from('profiles')
    .select('id, auth_user_id, display_name, status')
    .eq('id', session.admin_profile_id)
    .single();

  if (!profile || profile.status !== 'ACTIVE') {
    redirect(ROUTES.ADMIN_LOGIN);
  }

  // Load admin workspace membership
  const { data: membership } = await supabase
    .from('workspace_memberships')
    .select(`
      role_id,
      status,
      workspaces!inner (
        id,
        name,
        type
      ),
      roles!inner (
        name
      )
    `)
    .eq('profile_id', profile.id)
    .eq('workspaces.type', 'ADMIN')
    .eq('status', 'ACTIVE')
    .single();

  if (!membership) {
    redirect(ROUTES.ADMIN_FORBIDDEN);
  }

  const rawRoleName = (membership.roles as unknown as { name: string })?.name as AdminRole;
  const userRole: AdminRole = rawRoleName || 'read_only';

  const userRoleLevel = ROLE_HIERARCHY[userRole] || 0;
  const requiredRoleLevel = ROLE_HIERARCHY[minimumRole] || 0;

  if (userRoleLevel < requiredRoleLevel) {
    redirect(ROUTES.ADMIN_FORBIDDEN);
  }

  // Verify MFA Status
  const mfaStatus = await getAdminMfaFactors(profile.id);
  if (!mfaStatus.hasMfaEnrolled) {
    redirect(ROUTES.ADMIN_SECURITY_SETUP);
  }

  const workspaceData = membership.workspaces as unknown as { id: string; name: string };

  const adminUser: AdminUser = {
    id: profile.id,
    auth_user_id: profile.auth_user_id || '',
    email: '', // Retrieved from identities if necessary
    display_name: profile.display_name || 'Administrator',
    role: userRole,
    workspace_id: workspaceData?.id || '',
    workspace_name: workspaceData?.name || 'CareerOS Platform Administration',
    created_at: session.created_at,
  };

  const hasRecentStepUp = isStepUpValid(session.step_up_verified_at);

  return {
    user: adminUser,
    session,
    mfaEnrolled: mfaStatus.hasMfaEnrolled,
    hasRecentStepUp,
  };
}

/**
 * Backward compatibility wrapper for existing admin routes while providing the new security boundary.
 */
export async function requireAdminRole(minimumRole: AdminRole = 'read_only'): Promise<AdminUser> {
  const context = await requireAdminSession(minimumRole);
  return context.user;
}

/**
 * Appends an entry to the immutable audit_events table.
 */
export async function recordAdminAuditLog(params: {
  eventType: string;
  actorId: string;
  subjectType: string;
  subjectId: string;
  workspaceId?: string;
  payload?: Record<string, unknown>;
  ipAddressHash?: string;
  userAgentHash?: string;
}) {
  try {
    const adminSupabase = createAdminClient();
    await adminSupabase.from('audit_events').insert({
      event_type: params.eventType,
      actor_type: 'ADMIN',
      actor_id: params.actorId,
      subject_type: params.subjectType,
      subject_id: params.subjectId,
      workspace_id: params.workspaceId,
      payload: params.payload || {},
      ip_address_hash: params.ipAddressHash,
      user_agent_hash: params.userAgentHash,
    });
  } catch (err) {
    console.error('Failed to record admin audit log:', err);
  }
}
