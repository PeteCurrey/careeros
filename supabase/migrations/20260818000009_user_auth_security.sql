-- Migration: User Progressive Authentication & Account Security Architecture
-- Career OS Platform Foundation
-- ============================================================

-- 1. Security Assurance Level Enum
do $$
begin
  if not exists (select 1 from pg_type where typname = 'security_assurance_level') then
    create type security_assurance_level as enum (
      'EMAIL_VERIFIED',
      'SECURED',
      'STEPPED_UP'
    );
  end if;
end $$;

-- 2. Data Classification Level Enum
do $$
begin
  if not exists (select 1 from pg_type where typname = 'data_classification_level') then
    create type data_classification_level as enum (
      'CLASS_0_PUBLIC',
      'CLASS_1_BASIC',
      'CLASS_2_PERSONAL_CAREER',
      'CLASS_3_SENSITIVE_CAREEROS',
      'CLASS_4_HIGH_SENSITIVITY_MEDIA'
    );
  end if;
end $$;

-- 3. Add security_assurance to profiles
alter table public.profiles
  add column if not exists security_assurance security_assurance_level not null default 'EMAIL_VERIFIED',
  add column if not exists last_stepped_up_at timestamptz;

-- 4. User Passkeys Table (W3C WebAuthn Credential Registry)
create table if not exists public.user_passkeys (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  credential_id text not null unique,
  public_key text not null,
  counter bigint not null default 0,
  device_name text not null default 'My Device',
  aaguid text,
  transports text[] default array['internal']::text[],
  created_at timestamptz not null default now(),
  last_used_at timestamptz
);

alter table public.user_passkeys enable row level security;

-- Policy: users can view and manage their own passkeys
create policy "user_passkeys_select_own" on public.user_passkeys
  for select using (
    profile_id = public.auth_profile_id() or public.is_platform_admin()
  );

create policy "user_passkeys_insert_own" on public.user_passkeys
  for insert with check (
    profile_id = public.auth_profile_id()
  );

create policy "user_passkeys_update_own" on public.user_passkeys
  for update using (
    profile_id = public.auth_profile_id()
  );

create policy "user_passkeys_delete_own" on public.user_passkeys
  for delete using (
    profile_id = public.auth_profile_id()
  );

create index if idx_user_passkeys_profile_id on public.user_passkeys(profile_id);
create index if idx_user_passkeys_credential_id on public.user_passkeys(credential_id);

-- 5. User Active Sessions Table (Device & Session Management)
create table if not exists public.user_active_sessions (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  session_token_hash text not null unique,
  device_category text default 'desktop', -- 'desktop', 'mobile', 'tablet'
  browser_name text default 'Browser',
  os_name text default 'OS',
  ip_address_hash text,
  approximate_location text,
  created_at timestamptz not null default now(),
  last_active_at timestamptz not null default now(),
  expires_at timestamptz not null,
  revoked_at timestamptz
);

alter table public.user_active_sessions enable row level security;

create policy "user_active_sessions_select_own" on public.user_active_sessions
  for select using (
    profile_id = public.auth_profile_id() or public.is_platform_admin()
  );

create policy "user_active_sessions_update_own" on public.user_active_sessions
  for update using (
    profile_id = public.auth_profile_id()
  );

create index if idx_user_active_sessions_profile on public.user_active_sessions(profile_id);
create index if idx_user_active_sessions_token on public.user_active_sessions(session_token_hash);

-- 6. User Security Events (Immutable Security Audit Log)
create table if not exists public.user_security_events (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  event_type text not null, -- 'account_created', 'email_verified', 'passkey_registered', 'passkey_removed', 'password_set', 'mfa_enabled', 'login_success', 'session_revoked', 'step_up_success', 'email_changed', 'dob_changed'
  success boolean not null default true,
  ip_address_hash text,
  user_agent_hash text,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.user_security_events enable row level security;

create policy "user_security_events_select_own" on public.user_security_events
  for select using (
    profile_id = public.auth_profile_id() or public.is_platform_admin()
  );

create index if idx_user_security_events_profile on public.user_security_events(profile_id);
create index if idx_user_security_events_created on public.user_security_events(created_at desc);

-- 7. Helper Functions for Security Assurance & Data Classification
create or replace function public.auth_security_assurance()
returns security_assurance_level language sql stable security definer as $$
  select security_assurance from public.profiles
  where auth_user_id = auth.uid()
  limit 1;
$$;

create or replace function public.is_account_secured()
returns boolean language sql stable security definer as $$
  select exists (
    select 1 from public.profiles
    where auth_user_id = auth.uid()
      and security_assurance in ('SECURED', 'STEPPED_UP')
  );
$$;

-- Helper function: verify if session has recent step-up authentication (within 15 minutes)
create or replace function public.is_session_stepped_up()
returns boolean language sql stable security definer as $$
  select exists (
    select 1 from public.profiles
    where auth_user_id = auth.uid()
      and last_stepped_up_at is not null
      and last_stepped_up_at > now() - interval '15 minutes'
  );
$$;
