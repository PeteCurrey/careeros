-- Migration: Dedicated Admin Authentication & Security Architecture
-- Career OS Platform Security Boundary
-- ============================================================

-- 1. Create enum for admin security event types
do $$
begin
  if not exists (select 1 from pg_type where typname = 'admin_security_event_type') then
    create type admin_security_event_type as enum (
      'login_attempt',
      'login_success',
      'login_failure',
      'mfa_challenge',
      'mfa_success',
      'mfa_failure',
      'mfa_totp_enrolled',
      'mfa_passkey_enrolled',
      'mfa_factor_removed',
      'recovery_code_used',
      'recovery_code_invalid',
      'recovery_codes_regenerated',
      'session_created',
      'session_revoked',
      'all_sessions_revoked',
      'step_up_required',
      'step_up_completed',
      'password_changed',
      'admin_invited',
      'admin_activated',
      'admin_deactivated',
      'role_changed',
      'super_admin_action',
      'break_glass_access'
    );
  end if;
end $$;

-- 2. Dedicated Admin Sessions Table
create table if not exists public.admin_sessions (
  id uuid primary key default gen_random_uuid(),
  admin_profile_id uuid not null references public.profiles(id) on delete cascade,
  session_token_hash text not null unique,
  supabase_user_id uuid,
  mfa_verified_at timestamptz not null default now(),
  step_up_verified_at timestamptz,
  last_active_at timestamptz not null default now(),
  expires_at timestamptz not null, -- absolute lifetime (e.g. 8h)
  idle_expires_at timestamptz not null, -- rolling idle lifetime (e.g. 30m)
  ip_address_hash text,
  user_agent_hash text,
  device_label text,
  revoked_at timestamptz,
  revocation_reason text,
  created_at timestamptz not null default now()
);

create index if not exists idx_admin_sessions_profile on public.admin_sessions(admin_profile_id);
create index if not exists idx_admin_sessions_token_hash on public.admin_sessions(session_token_hash);
create index if not exists idx_admin_sessions_revoked on public.admin_sessions(revoked_at);

-- 3. Dedicated Admin MFA Enrolled Factors Table
create table if not exists public.admin_mfa_factors (
  id uuid primary key default gen_random_uuid(),
  admin_profile_id uuid not null references public.profiles(id) on delete cascade,
  factor_type text not null check (factor_type in ('totp', 'webauthn_passkey')),
  factor_label text not null default 'Primary Authenticator',
  secret_encrypted text, -- for TOTP (if application encrypted)
  credential_id text, -- for WebAuthn
  public_key text, -- for WebAuthn
  counter bigint default 0, -- for WebAuthn replay prevention
  enrolled_at timestamptz not null default now(),
  last_used_at timestamptz,
  revoked_at timestamptz
);

create index if not exists idx_admin_mfa_factors_profile on public.admin_mfa_factors(admin_profile_id);

-- 4. Dedicated Admin Recovery Codes Table (Single-use hashed codes)
create table if not exists public.admin_recovery_codes (
  id uuid primary key default gen_random_uuid(),
  admin_profile_id uuid not null references public.profiles(id) on delete cascade,
  code_hash text not null,
  used_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists idx_admin_recovery_codes_profile on public.admin_recovery_codes(admin_profile_id);
create index if not exists idx_admin_recovery_codes_hash on public.admin_recovery_codes(code_hash);

-- 5. Dedicated Admin Invitations Table
create table if not exists public.admin_invitations (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  role_id uuid not null references public.roles(id),
  token_hash text not null unique,
  invited_by_profile_id uuid references public.profiles(id),
  expires_at timestamptz not null,
  accepted_at timestamptz,
  revoked_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists idx_admin_invitations_token_hash on public.admin_invitations(token_hash);
create index if not exists idx_admin_invitations_email on public.admin_invitations(email);

-- 6. Dedicated Admin Security Events Table (Immutable)
create table if not exists public.admin_security_events (
  id uuid primary key default gen_random_uuid(),
  admin_profile_id uuid references public.profiles(id),
  event_type admin_security_event_type not null,
  success boolean not null default true,
  ip_address_hash text,
  user_agent_hash text,
  metadata jsonb not null default '{}',
  occurred_at timestamptz not null default now()
);

create rule admin_security_events_no_update as on update to public.admin_security_events do instead nothing;
create rule admin_security_events_no_delete as on delete to public.admin_security_events do instead nothing;

create index if not exists idx_admin_sec_events_profile on public.admin_security_events(admin_profile_id, occurred_at desc);
create index if not exists idx_admin_sec_events_type on public.admin_security_events(event_type, occurred_at desc);

-- 7. Dedicated Admin Rate Limiting Table
create table if not exists public.admin_rate_limits (
  id uuid primary key default gen_random_uuid(),
  identifier text not null, -- e.g. "login:ip_hash" or "login:email_hash" or "mfa:profile_id"
  attempts_count int not null default 1,
  first_attempt_at timestamptz not null default now(),
  last_attempt_at timestamptz not null default now(),
  blocked_until timestamptz
);

create unique index if not exists idx_admin_rate_limits_identifier on public.admin_rate_limits(identifier);

-- 8. Enable Row Level Security on all admin auth tables
alter table public.admin_sessions enable row level security;
alter table public.admin_mfa_factors enable row level security;
alter table public.admin_recovery_codes enable row level security;
alter table public.admin_invitations enable row level security;
alter table public.admin_security_events enable row level security;
alter table public.admin_rate_limits enable row level security;

-- All admin auth tables are restricted to server-side SERVICE ROLE only.
-- No public policies are granted.
