-- Migration: Consent and Policy Ledger
-- Career OS Platform Foundation
-- ============================================================

create table public.policy_documents (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  document_type text not null,
  applicable_audiences text[] not null default '{}',
  created_at timestamptz not null default now()
);

create table public.policy_versions (
  id uuid primary key default gen_random_uuid(),
  policy_document_id uuid not null references public.policy_documents(id),
  version text not null,
  effective_from timestamptz not null,
  effective_until timestamptz,
  content_hash text not null,
  published_at timestamptz not null default now(),
  notes text,

  unique(policy_document_id, version)
);

create table public.policy_acceptances (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete restrict,
  policy_version_id uuid not null references public.policy_versions(id),
  accepted_at timestamptz not null default now(),
  ip_address_hash text,
  user_agent_hash text,
  method text not null default 'EXPLICIT_CLICK',

  unique(profile_id, policy_version_id)
);

create table public.consents (
  id uuid primary key default gen_random_uuid(),
  consent_type consent_type not null,
  subject_user_id uuid not null references public.profiles(id) on delete restrict,
  granted_by_user_id uuid not null references public.profiles(id),
  relationship_type relationship_type not null default 'SELF',
  organisation_id uuid references public.organisations(id),
  purpose text not null,
  jurisdiction char(2),
  policy_document_id uuid references public.policy_documents(id),
  policy_version_id uuid references public.policy_versions(id),
  legal_or_policy_basis text,
  granted_at timestamptz not null default now(),
  expires_at timestamptz,
  withdrawn_at timestamptz,
  withdrawal_reason text,
  metadata jsonb,

  unique(subject_user_id, consent_type, organisation_id)
);

create table public.consent_events (
  id uuid primary key default gen_random_uuid(),
  consent_id uuid not null references public.consents(id),
  event_type consent_event_type not null,
  changed_by_user_id uuid not null references public.profiles(id),
  occurred_at timestamptz not null default now(),
  reason text,
  snapshot jsonb not null,
  metadata jsonb
);

alter table public.guardian_relationships
  add constraint fk_guardian_relationships_consent_id
  foreign key (consent_id) references public.consents(id);

create index idx_consents_subject on public.consents(subject_user_id);
create index idx_consents_type on public.consents(consent_type);
create index idx_consents_organisation on public.consents(organisation_id);
create index idx_consent_events_consent_id on public.consent_events(consent_id);
create index idx_policy_acceptances_profile on public.policy_acceptances(profile_id);
create index idx_policy_acceptances_version on public.policy_acceptances(policy_version_id);
