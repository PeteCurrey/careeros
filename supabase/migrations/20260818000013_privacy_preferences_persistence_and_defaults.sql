-- Migration: Privacy Preferences Persistence, Defaults Trigger & RLS Hardening
-- Career OS Platform Foundation
-- ============================================================

-- 1. Ensure columns exist on public.privacy_preferences for rich preference controls
alter table public.privacy_preferences
  add column if not exists career_twin_visibility default_visibility not null default 'PRIVATE',
  add column if not exists passport_visibility default_visibility not null default 'PRIVATE',
  add column if not exists opportunity_recommendations_enabled boolean not null default true,
  add column if not exists institutional_sharing_state text not null default 'OFF',
  add column if not exists mentor_analytics_sharing boolean not null default false,
  add column if not exists created_at timestamptz not null default now();

-- 2. Row Level Security Policies for privacy_preferences
-- Enable RLS
alter table public.privacy_preferences enable row level security;

-- SELECT own policy
drop policy if exists "privacy_preferences_select_own" on public.privacy_preferences;
create policy "privacy_preferences_select_own" on public.privacy_preferences
  for select using (profile_id = public.auth_profile_id() or public.is_platform_admin());

-- INSERT own policy (CRITICAL P0 FIX)
drop policy if exists "privacy_preferences_insert_own" on public.privacy_preferences;
create policy "privacy_preferences_insert_own" on public.privacy_preferences
  for insert with check (profile_id = public.auth_profile_id());

-- UPDATE own policy with CHECK clause (CRITICAL P0 FIX)
drop policy if exists "privacy_preferences_update_own" on public.privacy_preferences;
create policy "privacy_preferences_update_own" on public.privacy_preferences
  for update using (profile_id = public.auth_profile_id())
  with check (profile_id = public.auth_profile_id());

-- 3. Trigger Function: Automatically Provision Privacy-Preserving Defaults on Profile Creation
create or replace function public.handle_new_profile_privacy()
returns trigger
language plpgsql
security definer
as $$
begin
  insert into public.privacy_preferences (
    profile_id,
    default_visibility,
    career_twin_visibility,
    passport_visibility,
    allow_mentor_access,
    allow_employer_discovery,
    allow_network_visibility,
    opportunity_recommendations_enabled,
    institutional_sharing_state,
    mentor_analytics_sharing
  )
  values (
    new.id,
    'PRIVATE',
    'PRIVATE',
    'PRIVATE',
    true,
    false,
    false,
    true,
    'OFF',
    false
  )
  on conflict (profile_id) do nothing;
  return new;
end;
$$;

-- Drop trigger if already exists then attach to profiles table
drop trigger if exists on_profile_created_privacy_defaults on public.profiles;
create trigger on_profile_created_privacy_defaults
  after insert on public.profiles
  for each row execute function public.handle_new_profile_privacy();

-- 4. Idempotent Backfill for all existing profiles that lack a privacy_preferences row
insert into public.privacy_preferences (
  profile_id,
  default_visibility,
  career_twin_visibility,
  passport_visibility,
  allow_mentor_access,
  allow_employer_discovery,
  allow_network_visibility,
  opportunity_recommendations_enabled,
  institutional_sharing_state,
  mentor_analytics_sharing
)
select
  p.id,
  'PRIVATE',
  'PRIVATE',
  'PRIVATE',
  true,
  false,
  false,
  true,
  'OFF',
  false
from public.profiles p
left join public.privacy_preferences pp on pp.profile_id = p.id
where pp.profile_id is null
on conflict (profile_id) do nothing;
