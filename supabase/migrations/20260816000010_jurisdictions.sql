-- Migration: Jurisdictions
-- Career OS Platform Foundation
-- ============================================================

create table public.jurisdictions (
  id uuid primary key default gen_random_uuid(),
  country_code char(2) not null,
  region_code text,
  name text not null,
  jurisdiction_key text not null unique,
  locale text not null,
  language char(2) not null,
  currency_code char(3) not null,
  timezone text not null,
  education_system text,
  qualification_framework text,
  occupation_taxonomy text,
  employment_regime text,
  work_authorisation_types text[],
  salary_market text,
  regulatory_profile jsonb,
  active boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.user_jurisdictions (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  jurisdiction_id uuid not null references public.jurisdictions(id),
  is_primary boolean not null default false,
  created_at timestamptz not null default now(),

  unique(profile_id, jurisdiction_id)
);

create unique index idx_user_jurisdictions_primary
  on public.user_jurisdictions(profile_id)
  where is_primary = true;

insert into public.jurisdictions (
  country_code, name, jurisdiction_key, locale, language, currency_code,
  timezone, education_system, qualification_framework, occupation_taxonomy,
  employment_regime, salary_market, active,
  regulatory_profile
) values (
  'US', 'United States', 'us', 'en-US', 'en', 'USD',
  'America/New_York', 'US_K12', 'US_NQFL', 'SOC_2018',
  'US_AT_WILL', 'US_NATIONAL', true,
  '{"references": ["FERPA", "COPPA", "EEOC", "ADA", "ADEA", "NYC_Local_Law_144"]}'
);
