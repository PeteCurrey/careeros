-- Migration: Profiles and Identities
-- Career OS Platform Foundation
-- ============================================================
-- Application identity is decoupled from the auth provider.
-- profiles = application-level person record
-- identities = auth provider records linked to a profile
-- ============================================================

create table public.profiles (
  id uuid primary key default gen_random_uuid(),

  -- Link to Supabase auth user (nullable)
  auth_user_id uuid unique,

  display_name text,
  given_name text,
  family_name text,

  -- Internationalisation
  locale text default 'en-US',
  timezone text default 'America/New_York',
  country_code char(2), -- ISO 3166-1 alpha-2

  status account_status not null default 'PENDING_VERIFICATION',

  -- Data lifecycle
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  data_source text,
  purpose text,
  retention_class retention_class,
  retention_until timestamptz,
  archived_at timestamptz,
  deleted_at timestamptz
);

-- Auth provider identities linked to a profile
create table public.identities (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  provider auth_provider not null,
  provider_user_id text not null,
  email text,
  verified_at timestamptz,
  created_at timestamptz not null default now(),
  last_used_at timestamptz,

  unique(provider, provider_user_id)
);

-- Trigger: auto-update updated_at
create or replace function public.handle_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute function public.handle_updated_at();

-- Indexes
create index idx_profiles_auth_user_id on public.profiles(auth_user_id);
create index idx_profiles_status on public.profiles(status);
create index idx_profiles_deleted_at on public.profiles(deleted_at) where deleted_at is null;
create index idx_identities_profile_id on public.identities(profile_id);
create index idx_identities_email on public.identities(email);
