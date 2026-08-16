-- Migration: Guardian and Institution Relationships
-- Career OS Platform Foundation
-- ============================================================

create table public.guardian_relationships (
  id uuid primary key default gen_random_uuid(),
  guardian_profile_id uuid not null references public.profiles(id) on delete restrict,
  minor_profile_id uuid not null references public.profiles(id) on delete restrict,
  relationship_label text,
  consent_id uuid,
  verified_at timestamptz,
  verified_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  terminated_at timestamptz,

  unique(guardian_profile_id, minor_profile_id)
);

create table public.institution_relationships (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  organisation_id uuid not null references public.organisations(id) on delete cascade,
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  role_in_institution text,
  enrolment_start timestamptz,
  enrolment_end timestamptz,
  created_at timestamptz not null default now(),
  terminated_at timestamptz,

  unique(profile_id, organisation_id)
);

create index idx_guardian_relationships_guardian on public.guardian_relationships(guardian_profile_id);
create index idx_guardian_relationships_minor on public.guardian_relationships(minor_profile_id);
create index idx_institution_relationships_profile on public.institution_relationships(profile_id);
create index idx_institution_relationships_org on public.institution_relationships(organisation_id);
