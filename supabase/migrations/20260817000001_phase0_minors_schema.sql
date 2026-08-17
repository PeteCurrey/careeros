-- Migration: Phase 0 Minors & Guardian Consent Schema
-- Career OS Platform Foundation
-- ============================================================

-- 1. Add new account status values for guardian consent flow
alter type account_status add value if not exists 'PENDING_GUARDIAN_CONSENT';
alter type account_status add value if not exists 'PURGE_SCHEDULED';

-- 2. Create age_bracket enum
create type age_bracket as enum (
  'UNDER_13',
  'MINOR_13_17',
  'ADULT_18_PLUS'
);

-- 3. Create consent_state enum
create type consent_state_enum as enum (
  'NOT_REQUIRED',
  'PENDING',
  'GRANTED',
  'DENIED',
  'EXPIRED'
);

-- 4. Alter public.profiles table with age, guardian, and consent fields
alter table public.profiles
  add column if not exists date_of_birth date,
  add column if not exists age_bracket age_bracket,
  add column if not exists guardian_email text,
  add column if not exists consent_state consent_state_enum not null default 'NOT_REQUIRED',
  add column if not exists purge_scheduled_at timestamptz;

-- 5. Create consent_audit_log table (Extensible structure for Phase 1 verification methods)
create table public.consent_audit_log (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  age_bracket age_bracket not null,
  consent_state consent_state_enum not null,
  verification_method text, -- Left nullable/extensible for Phase 1 without breaking schema changes
  verification_metadata jsonb default '{}'::jsonb,
  ip_address_hash text,
  user_agent_hash text,
  notes text,
  created_at timestamptz not null default now()
);

-- Enable RLS on consent_audit_log
alter table public.consent_audit_log enable row level security;

-- Policy: users can select their own consent audit log
create policy "consent_audit_log_select_own" on public.consent_audit_log
  for select using (
    profile_id = public.auth_profile_id() or public.is_platform_admin()
  );

-- Indexes for performance
create index idx_profiles_age_bracket on public.profiles(age_bracket);
create index idx_profiles_consent_state on public.profiles(consent_state);
create index idx_profiles_purge_scheduled on public.profiles(purge_scheduled_at) where purge_scheduled_at is not null;
create index idx_consent_audit_log_profile_id on public.consent_audit_log(profile_id);

-- 6. Employer-candidate matching table for RLS redaction
create table if not exists public.employer_candidate_matches (
  id uuid primary key default gen_random_uuid(),
  employer_profile_id uuid not null references public.profiles(id) on delete cascade,
  candidate_profile_id uuid not null references public.profiles(id) on delete cascade,
  status text not null default 'PENDING', -- 'PENDING', 'MATCH_ACCEPTED', 'REJECTED'
  matched_at timestamptz not null default now(),
  accepted_at timestamptz,

  unique(employer_profile_id, candidate_profile_id)
);

alter table public.employer_candidate_matches enable row level security;

create policy "employer_candidate_matches_select_participants" on public.employer_candidate_matches
  for select using (
    employer_profile_id = public.auth_profile_id() or
    candidate_profile_id = public.auth_profile_id() or
    public.is_platform_admin()
  );

-- Helper function: Check if candidate identity is unredacted for an employer query
create or replace function public.is_candidate_unredacted_for_employer(candidate_id uuid, querying_profile_id uuid)
returns boolean language sql stable security definer as $$
  select exists (
    select 1 from public.employer_candidate_matches
    where candidate_profile_id = candidate_id
      and employer_profile_id = querying_profile_id
      and status = 'MATCH_ACCEPTED'
  );
$$;

-- 7. Postgres function for account purge job (Stalled pending accounts)
-- Spec 3.1: 30-day expiry threshold -> purge_scheduled_at = now() + 7 days grace.
-- After 7-day grace, hard delete profiles.
create or replace function public.purge_stalled_pending_accounts()
returns table(action text, profile_id uuid) language plpgsql security definer as $$
begin
  -- Step A: Transition PENDING_GUARDIAN_CONSENT accounts older than 30 days to PURGE_SCHEDULED
  return query
  with scheduled as (
    update public.profiles
    set
      status = 'PURGE_SCHEDULED',
      purge_scheduled_at = now() + interval '7 days'
    where status = 'PENDING_GUARDIAN_CONSENT'
      and created_at < now() - interval '30 days'
      and purge_scheduled_at is null
    returning id
  )
  select 'SCHEDULED_FOR_PURGE'::text, id from scheduled;

  -- Step B: Hard delete profiles where purge_scheduled_at grace period has passed (7 days after scheduling)
  return query
  with purged as (
    delete from public.profiles
    where status = 'PURGE_SCHEDULED'
      and purge_scheduled_at is not null
      and purge_scheduled_at <= now()
    returning id
  )
  select 'PURGED_DELETED'::text, id from purged;
end;
$$;
