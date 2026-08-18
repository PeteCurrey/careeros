-- Migration: Admin Roles & Granular Permissions
-- Career OS Admin Control Plane Foundation
-- ============================================================

-- 1. Insert granular admin permissions if not already present
insert into public.permissions (name, description, resource_type, action) values
  ('admin.command_centre.view', 'View admin command centre and top-level KPIs', 'admin', 'view'),
  ('admin.audit.view', 'View platform audit logs', 'audit', 'view'),
  ('admin.content.manage', 'Create, edit and publish CMS content and pages', 'content', 'manage'),
  ('admin.content.media', 'Manage media assets and library', 'media', 'manage'),
  ('admin.content.seo', 'Manage SEO and run internal SEO scans', 'seo', 'manage'),
  ('admin.content.redirects', 'Create and modify URL redirects', 'redirects', 'manage'),
  ('admin.events.view', 'View all events across statuses', 'events', 'view'),
  ('admin.events.moderate', 'Review, approve, reject and edit event submissions', 'events', 'moderate'),
  ('admin.events.sources.manage', 'Register and configure event discovery sources', 'events_sources', 'manage'),
  ('admin.events.discovery.trigger', 'Trigger manual or scheduled event discovery runs', 'events_discovery', 'trigger'),
  ('admin.events.promotions.manage', 'Configure promoted event inventory and campaigns', 'events_promotions', 'manage'),
  ('admin.users.view', 'View user directory and aggregate indicators', 'users', 'view'),
  ('admin.users.manage', 'Manage user status, suspension and support actions', 'users', 'manage'),
  ('admin.users.trust_safety', 'Investigate and resolve trust & safety incidents', 'trust_safety', 'manage'),
  ('admin.organisations.manage', 'Verify and manage employers, schools and partners', 'organisations', 'manage'),
  ('admin.ai.view', 'View AI usage, routing and latency metrics', 'ai', 'view'),
  ('admin.ai.manage', 'Configure AI providers, models, routing and prompts', 'ai', 'manage'),
  ('admin.ai.kill_switch', 'Operate AI kill switches and emergency fallbacks', 'ai', 'kill_switch'),
  ('admin.comms.templates', 'Manage email and communication templates', 'comms', 'templates'),
  ('admin.comms.campaigns', 'Create and review communication campaigns', 'comms', 'campaigns'),
  ('admin.growth.analytics', 'View traffic, funnels and attribution analytics', 'growth', 'view'),
  ('admin.revenue.view', 'View commercial transactions and revenue status', 'revenue', 'view'),
  ('admin.revenue.manage', 'Manage commercial pricing, tiers and products', 'revenue', 'manage'),
  ('admin.system.integrations', 'View and configure platform integrations', 'system', 'integrations'),
  ('admin.system.jobs', 'Manage and retry scheduled background jobs', 'system', 'jobs'),
  ('admin.system.feature_flags', 'Toggle and configure platform feature flags', 'system', 'feature_flags'),
  ('admin.system.settings', 'Manage core platform configuration and security', 'system', 'settings')
on conflict (name) do nothing;

-- 2. Insert admin roles
insert into public.roles (name, workspace_type, description, is_system_role) values
  ('super_admin', 'ADMIN', 'Super Administrator with unrestricted access to all control plane surfaces', true),
  ('admin', 'ADMIN', 'Platform Administrator with broad management authority', true),
  ('content_editor', 'ADMIN', 'Editorial lead responsible for CMS, media, SEO and page content', true),
  ('events_moderator', 'ADMIN', 'Events operations lead handling discovery queue, submissions and sources', true),
  ('support', 'ADMIN', 'Customer support specialist with user assistance and moderation tooling', true),
  ('marketing', 'ADMIN', 'Growth and communications manager handling campaigns, newsletters and promotions', true),
  ('analyst', 'ADMIN', 'Data analyst with read-only visibility into operational metrics and funnels', true),
  ('read_only', 'ADMIN', 'Read-only viewer for audits, compliance and monitoring', true)
on conflict (name) do nothing;

-- 3. Helper function: check if profile has specific admin permission
create or replace function public.has_admin_permission(permission_name text)
returns boolean language sql stable security definer as $$
  select exists (
    select 1
    from public.workspace_memberships wm
    join public.roles r on r.id = wm.role_id
    join public.workspaces w on w.id = wm.workspace_id
    join public.role_permissions rp on rp.role_id = r.id
    join public.permissions p on p.id = rp.permission_id
    where wm.profile_id = public.auth_profile_id()
      and w.type = 'ADMIN'
      and wm.status = 'ACTIVE'
      and (p.name = permission_name or p.name = 'admin.all' or r.name = 'super_admin')
  );
$$;

-- 4. Helper function: get admin role name for current user
create or replace function public.get_current_admin_role()
returns text language sql stable security definer as $$
  select r.name
  from public.workspace_memberships wm
  join public.roles r on r.id = wm.role_id
  join public.workspaces w on w.id = wm.workspace_id
  where wm.profile_id = public.auth_profile_id()
    and w.type = 'ADMIN'
    and wm.status = 'ACTIVE'
  limit 1;
$$;
