-- Migration: Organisations
-- Career OS Platform Foundation
-- ============================================================

create table public.organisations (
  id uuid primary key default gen_random_uuid(),
  type organisation_type not null,
  name text not null,
  slug text not null unique,
  domain text,
  country_code char(2),
  jurisdiction_key text,
  verified_at timestamptz,
  approved_at timestamptz,
  approved_by uuid references public.profiles(id),
  settings jsonb not null default '{}',

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  archived_at timestamptz,
  deleted_at timestamptz
);

create trigger organisations_updated_at
  before update on public.organisations
  for each row execute function public.handle_updated_at();

create index idx_organisations_type on public.organisations(type);
create index idx_organisations_slug on public.organisations(slug);
create index idx_organisations_domain on public.organisations(domain);
create index idx_organisations_deleted_at on public.organisations(deleted_at) where deleted_at is null;
