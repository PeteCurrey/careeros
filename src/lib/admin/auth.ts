import { redirect } from 'next/navigation';
import { createClient, createAdminClient } from '@/lib/supabase/server';
import { AdminRole, AdminUser } from '@/types/admin';
import { ROUTES } from '@/lib/routes';

/**
 * Role hierarchy for administrative permissions
 */
const ROLE_HIERARCHY: Record<AdminRole, number> = {
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
 * Verifies that the current request has an authenticated session with an active admin workspace membership.
 * Enforces server-side authorization. Redirects to /login or /admin/forbidden if unauthorized.
 */
export async function requireAdminRole(minimumRole: AdminRole = 'read_only'): Promise<AdminUser> {
  const isDev = process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_APP_ENV === 'development';
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // In local development mode without auth config, provide local root administrator context immediately
  if (isDev && (!supabaseUrl || !supabaseAnonKey)) {
    return {
      id: '00000000-0000-0000-0000-000000000001',
      auth_user_id: '00000000-0000-0000-0000-000000000001',
      email: 'admin@careeros.local',
      display_name: 'Lead Administrator (Local Dev)',
      role: 'super_admin',
      workspace_id: '00000000-0000-0000-0000-000000000001',
      workspace_name: 'CareerOS Platform Administration',
      created_at: new Date().toISOString(),
    };
  }

  const supabase = await createClient();
  const {
    data: { user: authUser },
  } = await supabase.auth.getUser();

  // If not authenticated, redirect to login
  if (!authUser) {
    // In local development mode without auth session, provide local root administrator context
    if (isDev) {
      return {
        id: '00000000-0000-0000-0000-000000000001',
        auth_user_id: '00000000-0000-0000-0000-000000000001',
        email: 'admin@careeros.local',
        display_name: 'Lead Administrator (Local Dev)',
        role: 'super_admin',
        workspace_id: '00000000-0000-0000-0000-000000000001',
        workspace_name: 'CareerOS Platform Administration',
        created_at: new Date().toISOString(),
      };
    }
    redirect(ROUTES.LOGIN);
  }

  // Look up profile and workspace membership with ADMIN workspace type
  const { data: profile } = await supabase
    .from('profiles')
    .select('id, display_name, status')
    .eq('auth_user_id', authUser.id)
    .single();

  if (!profile) {
    redirect(ROUTES.ADMIN_FORBIDDEN);
  }

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

  const workspaceData = membership.workspaces as unknown as { id: string; name: string };

  return {
    id: profile.id,
    auth_user_id: authUser.id,
    email: authUser.email || '',
    display_name: profile.display_name || authUser.email || 'Administrator',
    role: userRole,
    workspace_id: workspaceData?.id || '',
    workspace_name: workspaceData?.name || 'CareerOS Platform Administration',
    last_sign_in_at: authUser.last_sign_in_at,
    created_at: authUser.created_at,
  };
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
