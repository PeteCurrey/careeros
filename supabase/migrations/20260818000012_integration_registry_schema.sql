-- Migration: Data Source & Integration Registry
-- CareerOS centralised provenance and disclosure architecture
-- ============================================================

-- 1. Integration Registry Table
create table if not exists public.integration_registry (
  id uuid primary key default gen_random_uuid(),

  -- Provider identification
  provider_name text not null,
  provider_slug text not null unique,
  service_name text not null,
  provider_type text not null check (provider_type in (
    'public_data_source',
    'licensed_data_provider',
    'data_processor',
    'subprocessor',
    'independent_controller',
    'infrastructure_provider',
    'ai_service_provider',
    'referral_service',
    'authentication_provider',
    'analytics_provider',
    'communications_provider',
    'partner_integration'
  )),
  category text not null check (category in (
    'occupations',
    'skills',
    'job_vacancies',
    'salaries',
    'labour_market',
    'employment_projections',
    'education',
    'training',
    'credentials',
    'apprenticeships',
    'employer_information',
    'ai_inference',
    'speech',
    'video',
    'authentication',
    'communications',
    'analytics',
    'infrastructure',
    'wellbeing_referral',
    'payments',
    'security',
    'search',
    'moderation'
  )),
  categories text[] default array[]::text[],

  -- Description and purpose
  description text not null,
  purpose text not null,
  internal_notes text,
  website_url text,
  documentation_url text,
  source_url text,
  terms_url text,
  privacy_url text,
  license_url text,

  -- Public display
  public_display_name text,
  public_description text,
  public_display_approved boolean not null default false,
  public_disclosure_required boolean not null default false,
  preview_only boolean not null default false,

  -- Lifecycle
  lifecycle_status text not null default 'planned' check (lifecycle_status in (
    'researching',
    'planned',
    'development',
    'testing',
    'production',
    'degraded',
    'paused',
    'retired'
  )),
  environment text default 'all' check (environment in ('development', 'staging', 'production', 'all')),
  active boolean not null default true,
  production_enabled boolean not null default false,

  -- Data direction
  data_direction text not null default 'inbound' check (data_direction in (
    'inbound',
    'outbound',
    'bidirectional',
    'no_data_exchange'
  )),
  information_categories text[] default array[]::text[],

  -- Personal data classification
  personal_data_involved boolean not null default false,
  personal_data_categories text[] default array[]::text[],
  sensitive_data_involved boolean not null default false,
  minors_data_possible boolean not null default false,
  authentication_data boolean not null default false,
  user_content boolean not null default false,
  pseudonymous_identifiers boolean not null default false,
  aggregate_only boolean not null default false,
  data_retention_summary text,
  data_processing_purpose text,

  -- Data provenance
  original_source text,
  authoritative_source text,
  source_version text,
  retrieved_at timestamptz,
  last_successful_sync timestamptz,
  refresh_frequency text, -- 'real-time', 'hourly', 'daily', 'weekly', 'monthly', 'quarterly', 'annually', 'reference'
  update_frequency text,
  cached boolean not null default false,
  expected_delay_hours integer default 0,
  transformation_applied boolean not null default false,
  transformation_description text,
  derived_data boolean not null default false,
  methodology_url text,
  attribution_required boolean not null default false,
  attribution_text text,
  license_type text,
  modification_disclosure_required boolean not null default false,
  non_endorsement_required boolean not null default false,
  non_endorsement_text text,

  -- CareerOS processing classification
  careeros_processing text default 'none' check (careeros_processing in (
    'none',
    'normalised',
    'enriched',
    'derived',
    'aggregated'
  )),

  -- Disclosure review gates
  technical_reviewed boolean not null default false,
  privacy_reviewed boolean not null default false,
  security_reviewed boolean not null default false,
  legal_reviewed boolean not null default false,
  public_disclosure_reviewed boolean not null default false,

  -- Terms monitoring
  terms_version text,
  last_terms_reviewed_at timestamptz,
  next_review_at timestamptz,
  terms_changed boolean not null default false,
  review_owner text,

  -- Related entities
  partner_id uuid references public.partners(id) on delete set null,

  -- Retirement tracking
  used_from_date date,
  used_until_date date,
  retirement_reason text,

  -- Audit
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  last_reviewed_at timestamptz default now()
);

alter table public.integration_registry enable row level security;

-- Public can read approved, production, active integrations
create policy "integration_registry_public_read" on public.integration_registry
  for select using (
    active = true
    and production_enabled = true
    and public_display_approved = true
    and lifecycle_status = 'production'
    and not preview_only
  );

-- Admins have full access
create policy "integration_registry_admin_all" on public.integration_registry
  for all using (public.is_platform_admin());

create index if not exists idx_integration_registry_slug on public.integration_registry(provider_slug);
create index if not exists idx_integration_registry_status on public.integration_registry(lifecycle_status);
create index if not exists idx_integration_registry_category on public.integration_registry(category);
create index if not exists idx_integration_registry_public on public.integration_registry(public_display_approved, production_enabled, active);

-- 2. Data Issue Reports Table
create table if not exists public.data_issue_reports (
  id uuid primary key default gen_random_uuid(),
  issue_type text not null check (issue_type in (
    'incorrect_job_data',
    'incorrect_employer_info',
    'outdated_salary_info',
    'incorrect_occupation_info',
    'broken_source_link',
    'incorrect_attribution',
    'integration_problem',
    'other'
  )),
  page_url text,
  data_source_known text,
  description text not null,
  reporter_email text,
  status text not null default 'new' check (status in ('new', 'under_review', 'resolved', 'wont_fix', 'duplicate')),
  assigned_to uuid references public.profiles(id) on delete set null,
  resolution text,
  resolved_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.data_issue_reports enable row level security;

-- Public can submit data issue reports
create policy "data_issue_reports_insert_public" on public.data_issue_reports
  for insert with check (true);

-- Admins have full access
create policy "data_issue_reports_admin_all" on public.data_issue_reports
  for all using (public.is_platform_admin());

-- 3. Seed known integrations into registry
insert into public.integration_registry (
  provider_name, provider_slug, service_name, provider_type, category, categories,
  description, purpose, public_description,
  website_url, source_url, terms_url, license_url,
  lifecycle_status, environment, active, production_enabled, public_display_approved,
  data_direction, information_categories,
  personal_data_involved, aggregate_only,
  original_source, authoritative_source, source_version,
  refresh_frequency, cached, transformation_applied, transformation_description,
  derived_data, careeros_processing,
  attribution_required, attribution_text,
  non_endorsement_required, non_endorsement_text,
  modification_disclosure_required,
  technical_reviewed, privacy_reviewed, legal_reviewed,
  preview_only
) values
  (
    'O*NET® (Occupational Information Network)',
    'onet',
    'Occupational Information Network',
    'public_data_source',
    'occupations',
    array['occupations', 'skills'],
    'U.S. Department of Labor / ETA database providing authoritative occupational descriptors, task taxonomies, skill taxonomies, knowledge structures, and work context information.',
    'CareerOS maps Career Twin competencies, career exploration, and occupational recommendations to standardised O*NET Standard Occupational Classification (SOC) taxonomies.',
    'Provides the occupational taxonomy and skill structures that underpin CareerOS career exploration and Career Twin capability mapping.',
    'https://www.onetonline.org',
    'https://www.onetcenter.org/database.html',
    'https://www.onetcenter.org/license_db.html',
    'https://www.onetcenter.org/license_db.html',
    'production',
    'all',
    true,
    true,
    true,
    'inbound',
    array['occupations', 'skills', 'knowledge', 'abilities', 'work activities', 'worker characteristics'],
    false,
    false,
    'USDOL/ETA O*NET Program',
    'O*NET® (Occupational Information Network), USDOL/ETA',
    'O*NET 28.3 Database',
    'annually',
    false,
    true,
    'CareerOS normalises O*NET SOC codes to internal Career Twin skill taxonomy and applies regional relevance weighting.',
    false,
    'normalised',
    true,
    'O*NET® is a trademark of the U.S. Department of Labor, Employment and Training Administration (USDOL/ETA). CareerOS uses O*NET information under open data terms; this does not constitute an endorsement by USDOL/ETA.',
    true,
    'Use of O*NET information does not imply U.S. Department of Labor endorsement of CareerOS.',
    true,
    true, true, true,
    false
  ),
  (
    'CareerOneStop',
    'careeronestop',
    'Career Exploration & Workforce API',
    'public_data_source',
    'occupations',
    array['occupations', 'training', 'labour_market'],
    'U.S. Department of Labor sponsored career search, training lookup, and workforce resource portal with API access to occupational data and service locators.',
    'Enhances CareerOS occupational profiles and training recommendations with authoritative U.S. Department of Labor public workforce data and American Job Center locations.',
    'Provides authoritative US federal occupational information, training programme lookup, and American Job Center location services.',
    'https://www.careeronestop.org',
    'https://www.careeronestop.org/Developers/WebAPI/web-api.aspx',
    'https://www.careeronestop.org/Developers/WebAPI/web-api.aspx',
    null,
    'production',
    'all',
    true,
    true,
    true,
    'inbound',
    array['occupations', 'training', 'employment', 'skills', 'licensing'],
    false,
    false,
    'USDOL/ETA CareerOneStop Program',
    'CareerOneStop, USDOL/ETA',
    null,
    'daily',
    true,
    true,
    'CareerOS normalises occupational data with its internal taxonomy and enriches with regional labour-market signals.',
    false,
    'enriched',
    true,
    'CareerOneStop is sponsored by the U.S. Department of Labor, Employment and Training Administration. Reference to CareerOneStop does not imply endorsement by the U.S. Department of Labor.',
    true,
    'Use of CareerOneStop information does not imply U.S. Department of Labor endorsement of CareerOS.',
    false,
    true, true, true,
    false
  ),
  (
    'Supabase',
    'supabase',
    'Database, Auth & Storage Platform',
    'infrastructure_provider',
    'infrastructure',
    array['infrastructure'],
    'Managed PostgreSQL database, authentication, real-time subscriptions, and object storage infrastructure provider.',
    'Provides the core data persistence, user authentication, row-level security, and file storage infrastructure for CareerOS.',
    'Provides CareerOS'' core database and authentication infrastructure.',
    'https://supabase.com',
    null,
    'https://supabase.com/terms',
    null,
    'production',
    'all',
    true,
    true,
    true,
    'bidirectional',
    array['infrastructure'],
    true,
    false,
    null, null, null,
    'real-time',
    false, false, null, false,
    'none',
    false, null,
    false, null, false,
    true, true, true,
    false
  ),
  (
    'Vercel',
    'vercel',
    'Edge Compute & Hosting Platform',
    'infrastructure_provider',
    'infrastructure',
    array['infrastructure'],
    'Cloud platform providing application hosting, edge compute, CI/CD deployment pipelines, and global content delivery for the CareerOS web application.',
    'Deploys and serves the CareerOS web application globally with low-latency edge compute and automated deployment pipelines.',
    'Hosts and serves the CareerOS web application globally.',
    'https://vercel.com',
    null,
    'https://vercel.com/legal/terms',
    null,
    'production',
    'all',
    true,
    true,
    true,
    'bidirectional',
    array['infrastructure'],
    false,
    false,
    null, null, null,
    'real-time',
    false, false, null, false,
    'none',
    false, null,
    false, null, false,
    true, true, true,
    false
  ),
  (
    'Resend',
    'resend',
    'Transactional Email Service',
    'communications_provider',
    'communications',
    array['communications'],
    'Developer-focused transactional email delivery service used to send account-related, notification, and operational emails to CareerOS users.',
    'Delivers transactional emails including account confirmations, security alerts, and system notifications to CareerOS users.',
    'Delivers transactional emails including account confirmations and security notifications.',
    'https://resend.com',
    null,
    'https://resend.com/legal/terms-of-service',
    null,
    'production',
    'all',
    true,
    true,
    true,
    'outbound',
    array['communications'],
    true,
    false,
    null, null, null,
    'real-time',
    false, false, null, false,
    'none',
    false, null,
    false, null, false,
    true, true, true,
    false
  ),
  (
    'Stripe',
    'stripe',
    'Payment Processing Infrastructure',
    'data_processor',
    'infrastructure',
    array['infrastructure'],
    'PCI DSS Level 1 certified payment processing infrastructure. CareerOS uses Stripe client-side tokenization; raw payment card data never touches CareerOS servers.',
    'Processes payment transactions for CareerOS commercial services using tokenized client-side payment elements under PCI DSS Level 1 controls.',
    'Processes payments securely using industry-standard PCI DSS Level 1 controls. CareerOS never stores raw payment card data.',
    'https://stripe.com',
    null,
    'https://stripe.com/legal/payment-terms',
    null,
    'planned',
    'all',
    false,
    false,
    true,
    'bidirectional',
    array['infrastructure'],
    true,
    false,
    null, null, null,
    'real-time',
    false, false, null, false,
    'none',
    false, null,
    false, null, false,
    true, true, true,
    false
  )
on conflict (provider_slug) do update set
  description = excluded.description,
  purpose = excluded.purpose,
  public_description = excluded.public_description,
  updated_at = now();
