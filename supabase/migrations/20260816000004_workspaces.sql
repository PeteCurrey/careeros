-- Migration: Workspaces and Memberships
-- Career OS Platform Foundation
-- ============================================================

create table public.workspaces (
  id uuid primary key default gen_random_uuid(),
  type workspace_type not null,
  name text not null,
  slug text not null unique,
  organisation_id uuid references public.organisations(id) on delete cascade,
  settings jsonb not null default '{}',

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  archived_at timestamptz
);

create trigger workspaces_updated_at
  before update on public.workspaces
  for each row execute function public.handle_updated_at();

create table public.workspace_memberships (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  role_id uuid not null,
  status workspace_member_status not null default 'INVITED',
  joined_at timestamptz,
  left_at timestamptz,
  invited_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  unique(profile_id, workspace_id)
);

create trigger workspace_memberships_updated_at
  before update on public.workspace_memberships
  for each row execute function public.handle_updated_at();

create index idx_workspaces_type on public.workspaces(type);
create index idx_workspaces_organisation_id on public.workspaces(organisation_id);
create index idx_workspace_memberships_profile_id on public.workspace_memberships(profile_id);
create index idx_workspace_memberships_workspace_id on public.workspace_memberships(workspace_id);
create index idx_workspace_memberships_status on public.workspace_memberships(status);
