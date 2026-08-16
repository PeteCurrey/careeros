-- Migration: Audit Events and Feature Flags
-- Career OS Platform Foundation
-- ============================================================

create table public.audit_events (
  id uuid primary key default gen_random_uuid(),
  event_type text not null,
  actor_type audit_actor_type not null,
  actor_id uuid,
  subject_type text,
  subject_id text,
  workspace_id uuid,
  organisation_id uuid,
  payload jsonb not null default '{}',
  occurred_at timestamptz not null default now(),
  ip_address_hash text,
  user_agent_hash text,
  jurisdiction char(2)
);

create rule audit_events_no_update as on update to public.audit_events do instead nothing;
create rule audit_events_no_delete as on delete to public.audit_events do instead nothing;

create index idx_audit_events_actor on public.audit_events(actor_id, occurred_at desc);
create index idx_audit_events_subject on public.audit_events(subject_type, subject_id);
create index idx_audit_events_workspace on public.audit_events(workspace_id, occurred_at desc);
create index idx_audit_events_type on public.audit_events(event_type, occurred_at desc);

create table public.feature_flags (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  description text,
  enabled boolean not null default false,
  rollout_percentage smallint default 0 check (rollout_percentage between 0 and 100),
  workspace_types workspace_type[],
  metadata jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger feature_flags_updated_at
  before update on public.feature_flags
  for each row execute function public.handle_updated_at();

insert into public.feature_flags (name, description, enabled, rollout_percentage, workspace_types) values
  ('passkey_auth', 'Passkey / WebAuthn authentication', false, 0, null),
  ('saml_sso', 'SAML SSO for institutional login', false, 0, '{SCHOOL,EMPLOYER}'),
  ('school_sso', 'School/district SSO integration', false, 0, '{SCHOOL}'),
  ('employer_sso', 'Enterprise SSO for employers', false, 0, '{EMPLOYER}'),
  ('mfa_enforcement', 'Multi-factor authentication enforcement', false, 0, null),
  ('career_twin_v1', 'Career Twin feature (Phase 2)', false, 0, '{INDIVIDUAL}'),
  ('career_passport_v1', 'Career Passport feature (Phase 2)', false, 0, '{INDIVIDUAL}'),
  ('ai_mentor_v1', 'AI Career Mentor (Phase 2)', false, 0, '{INDIVIDUAL}'),
  ('opportunity_agent_v1', 'Opportunity Agent (Phase 2+)', false, 0, '{INDIVIDUAL}'),
  ('employer_agent_v1', 'Employer Agent (Phase 2+)', false, 0, '{EMPLOYER}'),
  ('career_network_v1', 'Career Network (Phase 2+)', false, 0, null);
