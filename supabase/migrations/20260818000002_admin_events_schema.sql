-- Migration: Events Platform & Discovery Database Architecture
-- Career OS Admin Control Plane Foundation
-- ============================================================

-- 1. Enums for Events Platform
create type event_format_enum as enum ('in-person', 'online', 'hybrid');
create type event_cost_type_enum as enum ('free', 'paid', 'scholarship-available', 'deposit-refundable');
create type event_moderation_status_enum as enum (
  'draft',
  'submitted',
  'under-review',
  'changes-requested',
  'approved',
  'scheduled',
  'live',
  'rejected',
  'cancelled',
  'expired',
  'suspended'
);
create type event_commercial_tier_enum as enum (
  'standard',
  'featured',
  'sponsored',
  'targeted-campaign',
  'employer-enterprise-package'
);
create type event_source_type_enum as enum (
  'api',
  'rss',
  'atom',
  'ical',
  'sitemap',
  'html_listing',
  'structured_data',
  'search_discovery',
  'manual'
);
create type source_trust_level_enum as enum (
  'new',
  'normal',
  'trusted',
  'restricted',
  'blocked'
);
create type source_health_enum as enum (
  'healthy',
  'degraded',
  'failing',
  'disabled'
);

-- 2. Event Categories (Database Managed)
create table public.event_categories (
  id text primary key,
  slug text not null unique,
  name text not null,
  short_description text not null,
  long_description text not null,
  category_group text not null check (category_group in ('careers', 'learning', 'education', 'entrepreneurship', 'explore')),
  badge_text text,
  icon_name text,
  display_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 3. Event Organisers
create table public.event_organisers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  organiser_type text not null,
  website_url text,
  logo_url text,
  contact_email text,
  contact_name text,
  verification_status text not null default 'unverified',
  trust_status text not null default 'normal',
  is_partner boolean not null default false,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 4. Canonical Events Table
create table public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  short_description text not null,
  long_description text not null,
  organiser_id uuid references public.event_organisers(id) on delete set null,
  organiser_name text not null,
  organiser_type text not null,
  organiser_url text,
  category_id text not null references public.event_categories(id),
  category_slug text not null,
  format event_format_enum not null default 'in-person',
  venue_name text,
  address_line text,
  city text,
  region text,
  postal_code text,
  country text not null default 'United States',
  country_code char(2) not null default 'US',
  latitude numeric(10, 7),
  longitude numeric(10, 7),
  start_time timestamptz not null,
  end_time timestamptz not null,
  timezone text not null default 'America/New_York',
  is_multi_day boolean not null default false,
  cost_type event_cost_type_enum not null default 'free',
  cost_amount_cents int,
  cost_currency char(3) default 'USD',
  registration_url text not null,
  registration_deadline timestamptz,
  capacity int,
  spots_remaining int,
  age_suitability text not null default 'suitable-for-under-18s',
  career_stages text[] not null default '{}',
  experience_levels text[] not null default '{}',
  tags text[] not null default '{}',
  industries text[] not null default '{}',
  hero_image_url text,
  moderation_status event_moderation_status_enum not null default 'draft',
  commercial_tier event_commercial_tier_enum not null default 'standard',
  is_featured boolean not null default false,
  is_sponsored boolean not null default false,
  source_id uuid,
  source_url text,
  confidence_score numeric(4, 3),
  moderation_notes text,
  approved_by uuid references public.profiles(id),
  approved_at timestamptz,
  published_at timestamptz,
  expires_at timestamptz not null,
  outbound_clicks int not null default 0,
  saves_count int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 5. Event Occurrences (Multi-date/recurring support)
create table public.event_occurrences (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  start_time timestamptz not null,
  end_time timestamptz not null,
  session_title text,
  venue_override text,
  is_cancelled boolean not null default false,
  created_at timestamptz not null default now()
);

-- 6. Event Discovery Sources
create table public.event_sources (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  domain text not null,
  source_url text not null unique,
  source_type event_source_type_enum not null,
  trust_level source_trust_level_enum not null default 'normal',
  health_status source_health_enum not null default 'healthy',
  is_enabled boolean not null default true,
  crawl_frequency_hours int not null default 24,
  country_code char(2) default 'US',
  default_category_id text references public.event_categories(id),
  last_checked_at timestamptz,
  next_scheduled_run_at timestamptz,
  total_discovered int not null default 0,
  total_approved int not null default 0,
  total_rejected int not null default 0,
  consecutive_failures int not null default 0,
  last_error_message text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 7. Event Discovery Runs
create table public.event_discovery_runs (
  id uuid primary key default gen_random_uuid(),
  source_id uuid references public.event_sources(id) on delete set null,
  status text not null check (status in ('running', 'completed', 'failed', 'cancelled')),
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  duration_ms int,
  urls_fetched int not null default 0,
  candidates_found int not null default 0,
  duplicates_detected int not null default 0,
  errors_encountered int not null default 0,
  log_summary jsonb not null default '{}',
  created_at timestamptz not null default now()
);

-- 8. Discovered Event Candidates (Human Review Queue)
create table public.event_candidates (
  id uuid primary key default gen_random_uuid(),
  source_id uuid references public.event_sources(id) on delete cascade,
  run_id uuid references public.event_discovery_runs(id) on delete set null,
  source_url text not null,
  canonical_url text,
  title text not null,
  raw_payload jsonb not null default '{}',
  extracted_data jsonb not null default '{}',
  confidence_score numeric(4, 3) not null default 0.500,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected', 'duplicate', 'ignored')),
  duplicate_of_event_id uuid references public.events(id) on delete set null,
  review_notes text,
  reviewed_by uuid references public.profiles(id),
  reviewed_at timestamptz,
  discovered_at timestamptz not null default now()
);

-- 9. User/Organiser Submitted Events Queue
create table public.event_submissions (
  id uuid primary key default gen_random_uuid(),
  submitter_profile_id uuid references public.profiles(id),
  submitter_name text not null,
  submitter_email text not null,
  submitter_phone text,
  organisation_name text not null,
  organisation_url text,
  proposed_event_data jsonb not null default '{}',
  supporting_notes text,
  status text not null default 'submitted' check (status in ('submitted', 'under_review', 'changes_requested', 'approved', 'rejected')),
  moderation_notes text,
  moderated_by uuid references public.profiles(id),
  moderated_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 10. Event Promotions & Sponsored Inventory
create table public.event_promotions (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  advertiser_name text not null,
  placement text not null check (placement in ('featured_hero', 'category_top', 'search_boost', 'newsletter_spotlight')),
  start_date date not null,
  end_date date not null,
  price_cents int not null default 0,
  currency char(3) not null default 'USD',
  payment_status text not null default 'unpaid' check (payment_status in ('unpaid', 'paid', 'waived', 'refunded')),
  impressions_count int not null default 0,
  clicks_count int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Indexes for performance
create index idx_events_status on public.events(moderation_status);
create index idx_events_category on public.events(category_slug);
create index idx_events_start_time on public.events(start_time);
create index idx_events_city on public.events(city);
create index idx_events_commercial on public.events(commercial_tier);
create index idx_event_candidates_status on public.event_candidates(status);
create index idx_event_candidates_source on public.event_candidates(source_id);
create index idx_event_sources_health on public.event_sources(health_status, is_enabled);
create index idx_event_submissions_status on public.event_submissions(status);
