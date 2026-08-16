-- Migration: Row Level Security Policies
-- Career OS Platform Foundation
-- ============================================================

-- Enable RLS on all application tables
alter table public.profiles enable row level security;
alter table public.identities enable row level security;
alter table public.organisations enable row level security;
alter table public.workspaces enable row level security;
alter table public.workspace_memberships enable row level security;
alter table public.roles enable row level security;
alter table public.permissions enable row level security;
alter table public.role_permissions enable row level security;
alter table public.guardian_relationships enable row level security;
alter table public.institution_relationships enable row level security;
alter table public.policy_documents enable row level security;
alter table public.policy_versions enable row level security;
alter table public.policy_acceptances enable row level security;
alter table public.consents enable row level security;
alter table public.consent_events enable row level security;
alter table public.privacy_preferences enable row level security;
alter table public.data_access_grants enable row level security;
alter table public.audit_events enable row level security;
alter table public.feature_flags enable row level security;
alter table public.jurisdictions enable row level security;
alter table public.user_jurisdictions enable row level security;

-- Helper: get current authenticated profile_id
create or replace function public.auth_profile_id()
returns uuid language sql stable security definer as $$
  select id from public.profiles
  where auth_user_id = auth.uid()
  limit 1;
$$;

-- Helper: check if user is platform admin
create or replace function public.is_platform_admin()
returns boolean language sql stable security definer as $$
  select exists (
    select 1
    from public.workspace_memberships wm
    join public.roles r on r.id = wm.role_id
    join public.workspaces w on w.id = wm.workspace_id
    where wm.profile_id = public.auth_profile_id()
      and r.name = 'platform_admin'
      and w.type = 'ADMIN'
      and wm.status = 'ACTIVE'
  );
$$;

-- PROFILES
create policy "profiles_select_own" on public.profiles
  for select using (id = public.auth_profile_id() or public.is_platform_admin());

create policy "profiles_update_own" on public.profiles
  for update using (id = public.auth_profile_id());

-- IDENTITIES
create policy "identities_select_own" on public.identities
  for select using (profile_id = public.auth_profile_id());

-- ORGANISATIONS
create policy "organisations_select_members" on public.organisations
  for select using (
    public.is_platform_admin() or
    exists (
      select 1 from public.workspace_memberships wm
      join public.workspaces w on w.id = wm.workspace_id
      where w.organisation_id = organisations.id
        and wm.profile_id = public.auth_profile_id()
        and wm.status = 'ACTIVE'
    )
  );

-- WORKSPACES
create policy "workspaces_select_members" on public.workspaces
  for select using (
    public.is_platform_admin() or
    exists (
      select 1 from public.workspace_memberships
      where workspace_id = workspaces.id
        and profile_id = public.auth_profile_id()
        and status = 'ACTIVE'
    )
  );

-- WORKSPACE_MEMBERSHIPS
create policy "workspace_memberships_select_own" on public.workspace_memberships
  for select using (profile_id = public.auth_profile_id() or public.is_platform_admin());

-- ROLES & PERMISSIONS
create policy "roles_select_authenticated" on public.roles
  for select using (auth.uid() is not null);

create policy "permissions_select_authenticated" on public.permissions
  for select using (auth.uid() is not null);

create policy "role_permissions_select_authenticated" on public.role_permissions
  for select using (auth.uid() is not null);

-- POLICY DOCUMENTS & VERSIONS
create policy "policy_documents_select_public" on public.policy_documents
  for select using (true);

create policy "policy_versions_select_public" on public.policy_versions
  for select using (true);

-- POLICY ACCEPTANCES
create policy "policy_acceptances_select_own" on public.policy_acceptances
  for select using (profile_id = public.auth_profile_id());

create policy "policy_acceptances_insert_own" on public.policy_acceptances
  for insert with check (profile_id = public.auth_profile_id());

-- CONSENTS
create policy "consents_select_own" on public.consents
  for select using (
    subject_user_id = public.auth_profile_id() or
    granted_by_user_id = public.auth_profile_id() or
    public.is_platform_admin()
  );

-- CONSENT EVENTS
create policy "consent_events_select_via_consent" on public.consent_events
  for select using (
    exists (
      select 1 from public.consents c
      where c.id = consent_events.consent_id
        and (
          c.subject_user_id = public.auth_profile_id() or
          c.granted_by_user_id = public.auth_profile_id()
        )
    ) or public.is_platform_admin()
  );

-- PRIVACY PREFERENCES
create policy "privacy_preferences_select_own" on public.privacy_preferences
  for select using (profile_id = public.auth_profile_id());

create policy "privacy_preferences_update_own" on public.privacy_preferences
  for update using (profile_id = public.auth_profile_id());

-- DATA ACCESS GRANTS
create policy "data_access_grants_select" on public.data_access_grants
  for select using (
    granted_by = public.auth_profile_id() or
    subject_id = public.auth_profile_id()::text or
    public.is_platform_admin()
  );

create policy "data_access_grants_insert_own" on public.data_access_grants
  for insert with check (granted_by = public.auth_profile_id());

create policy "data_access_grants_update_own" on public.data_access_grants
  for update using (granted_by = public.auth_profile_id());

-- AUDIT EVENTS
create policy "audit_events_select_admin" on public.audit_events
  for select using (public.is_platform_admin());

-- FEATURE FLAGS
create policy "feature_flags_select_authenticated" on public.feature_flags
  for select using (auth.uid() is not null);

-- JURISDICTIONS
create policy "jurisdictions_select_public" on public.jurisdictions
  for select using (true);

-- USER JURISDICTIONS
create policy "user_jurisdictions_select_own" on public.user_jurisdictions
  for select using (profile_id = public.auth_profile_id());

-- GUARDIAN RELATIONSHIPS
create policy "guardian_relationships_select" on public.guardian_relationships
  for select using (
    guardian_profile_id = public.auth_profile_id() or
    minor_profile_id = public.auth_profile_id() or
    public.is_platform_admin()
  );

-- INSTITUTION RELATIONSHIPS
create policy "institution_relationships_select_own" on public.institution_relationships
  for select using (profile_id = public.auth_profile_id() or public.is_platform_admin());
