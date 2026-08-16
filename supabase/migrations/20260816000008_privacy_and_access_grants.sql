-- Migration: Privacy Preferences and Data Access Grants
-- Career OS Platform Foundation
-- ============================================================

create table public.privacy_preferences (
  profile_id uuid primary key references public.profiles(id) on delete cascade,
  default_visibility default_visibility not null default 'PRIVATE',
  allow_mentor_access boolean not null default false,
  allow_employer_discovery boolean not null default false,
  allow_network_visibility boolean not null default false,
  updated_at timestamptz not null default now()
);

create table public.data_access_grants (
  id uuid primary key default gen_random_uuid(),
  resource_type access_resource_type not null,
  resource_id text not null,
  subject_type access_subject_type not null,
  subject_id text not null,
  permission access_permission not null,
  purpose text not null,
  granted_by uuid not null references public.profiles(id),
  granted_at timestamptz not null default now(),
  expires_at timestamptz,
  revoked_at timestamptz,
  jurisdiction char(2),
  metadata jsonb,

  unique(resource_type, resource_id, subject_type, subject_id, permission)
);

create index idx_data_access_grants_resource on public.data_access_grants(resource_type, resource_id);
create index idx_data_access_grants_subject on public.data_access_grants(subject_type, subject_id);
create index idx_data_access_grants_granted_by on public.data_access_grants(granted_by);
create index idx_data_access_grants_active on public.data_access_grants(revoked_at, expires_at)
  where revoked_at is null;
