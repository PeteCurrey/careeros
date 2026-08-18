-- Migration: System Management, Integrations and Scheduled Jobs Schema
-- Career OS Admin Control Plane Foundation
-- ============================================================

-- 1. Integration Status Registry
create table public.integrations (
  id text primary key, -- e.g. 'supabase_database', 'supabase_auth', 'google_search_console', 'google_ai', 'anthropic', 'resend', 'stripe'
  category text not null check (category in ('database', 'auth', 'ai', 'email', 'analytics', 'seo', 'storage', 'payments', 'search')),
  display_name text not null,
  description text not null,
  env_keys text[] not null default '{}',
  is_connected boolean not null default false,
  status text not null default 'disconnected' check (status in ('connected', 'configuration_required', 'degraded', 'error', 'disabled')),
  last_health_check_at timestamptz,
  last_error_message text,
  metadata jsonb not null default '{}',
  updated_at timestamptz not null default now()
);

-- 2. Scheduled Background Jobs Registry
create table public.scheduled_jobs (
  id text primary key, -- e.g. 'event_discovery_hourly', 'event_expiry_daily', 'seo_scan_weekly', 'stale_jobs_cleanup'
  name text not null,
  description text not null,
  cron_expression text not null,
  is_enabled boolean not null default true,
  last_run_at timestamptz,
  last_run_status text check (last_run_status in ('success', 'failed', 'running', 'timeout')),
  last_duration_ms int,
  consecutive_failures int not null default 0,
  next_run_at timestamptz,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 3. Job Execution History Logs
create table public.job_runs (
  id uuid primary key default gen_random_uuid(),
  job_id text not null references public.scheduled_jobs(id) on delete cascade,
  status text not null check (status in ('running', 'success', 'failed', 'timeout')),
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  duration_ms int,
  records_processed int not null default 0,
  error_message text,
  log_details jsonb not null default '{}'
);

-- 4. Initial seed for standard integrations
insert into public.integrations (id, category, display_name, description, env_keys, is_connected, status) values
  ('supabase_database', 'database', 'Supabase PostgreSQL', 'Core production relational database and extensions', '{NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY}', true, 'connected'),
  ('supabase_auth', 'auth', 'Supabase Auth & Session Engine', 'Identity management, OAuth, Magic links and token verification', '{NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY}', true, 'connected'),
  ('google_ai', 'ai', 'Google Gemini AI', 'Primary intelligence, event extraction and mentorship engine', '{GOOGLE_AI_API_KEY}', false, 'configuration_required'),
  ('anthropic_ai', 'ai', 'Anthropic Claude', 'Secondary intelligence and deep analytical evaluation', '{ANTHROPIC_API_KEY}', false, 'configuration_required'),
  ('openai_ai', 'ai', 'OpenAI', 'Alternative reasoning and embedding provider', '{OPENAI_API_KEY}', false, 'configuration_required'),
  ('google_search_console', 'seo', 'Google Search Console API', 'Organic search indexation, click data and CTR performance', '{GOOGLE_SEARCH_CONSOLE_CLIENT_EMAIL, GOOGLE_SEARCH_CONSOLE_PRIVATE_KEY}', false, 'configuration_required'),
  ('resend_email', 'email', 'Resend / Transactional Email', 'Transactional notifications, verification emails and event alerts', '{RESEND_API_KEY}', false, 'configuration_required'),
  ('stripe_payments', 'payments', 'Stripe Payments', 'Commercial billing, promoted event checkout and enterprise contracts', '{STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET}', false, 'configuration_required')
on conflict (id) do nothing;

-- 5. Initial seed for scheduled background jobs
insert into public.scheduled_jobs (id, name, description, cron_expression, is_enabled) values
  ('event_discovery', 'Autonomous Event Discovery Run', 'Executes active connectors and populates candidate queue', '0 */4 * * *', true),
  ('event_expiry', 'Event Expiration & Lifecycle Sweep', 'Transitions past events to expired status and updates indexation', '0 2 * * *', true),
  ('seo_internal_scan', 'Internal SEO & Broken Link Audit', 'Crawls live application routes for missing metadata and broken links', '0 3 * * 0', true),
  ('source_health_check', 'Event Source Connectivity Monitor', 'Pings source URLs to verify reachability and header validity', '0 6 * * *', true)
on conflict (id) do nothing;

create index idx_job_runs_job_id on public.job_runs(job_id, started_at desc);
