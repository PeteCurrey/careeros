-- Migration: AI Control Plane Architecture
-- Career OS Admin Control Plane Foundation
-- ============================================================

-- 1. AI Providers Registry
create table public.ai_providers (
  id text primary key, -- e.g. 'google', 'anthropic', 'openai'
  display_name text not null,
  is_enabled boolean not null default true,
  env_secret_key_name text not null, -- Name of environment variable holding key (e.g. 'GOOGLE_AI_API_KEY')
  base_url text,
  supported_capabilities text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2. AI Models Registry
create table public.ai_models (
  id text primary key, -- e.g. 'gemini-1.5-pro', 'claude-3-5-sonnet', 'gpt-4o'
  provider_id text not null references public.ai_providers(id) on delete cascade,
  display_name text not null,
  model_id text not null, -- Vendor API model identifier
  context_window int not null,
  max_output_tokens int not null,
  capabilities text[] not null default '{}',
  input_cost_per_1m_tokens_cents int not null default 0,
  output_cost_per_1m_tokens_cents int not null default 0,
  is_enabled boolean not null default true,
  is_fallback boolean not null default false,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 3. AI Use Cases & Model Routing
create table public.ai_use_cases (
  id text primary key, -- e.g. 'mentor_conversation', 'event_extraction', 'cv_analysis'
  display_name text not null,
  description text not null,
  primary_model_id text not null references public.ai_models(id),
  fallback_model_id text references public.ai_models(id),
  temperature numeric(3, 2) not null default 0.70,
  max_tokens int,
  safety_profile text not null default 'STANDARD' check (safety_profile in ('STANDARD', 'ELEVATED', 'STRICT')),
  is_active boolean not null default true,
  kill_switch_active boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 4. Versioned Prompt Registry
create table public.ai_prompts (
  id uuid primary key default gen_random_uuid(),
  use_case_id text not null references public.ai_use_cases(id) on delete cascade,
  version int not null default 1,
  system_prompt text not null,
  user_prompt_template text,
  parameters_schema jsonb not null default '{}',
  is_active boolean not null default true,
  change_notes text,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  unique(use_case_id, version)
);

-- 5. AI Usage & Cost Log (Granular metrics)
create table public.ai_usage_logs (
  id uuid primary key default gen_random_uuid(),
  use_case_id text not null references public.ai_use_cases(id),
  provider_id text not null references public.ai_providers(id),
  model_id text not null references public.ai_models(id),
  input_tokens int not null default 0,
  output_tokens int not null default 0,
  latency_ms int not null default 0,
  cost_cents numeric(8, 4) not null default 0.0000,
  was_fallback boolean not null default false,
  status text not null default 'success' check (status in ('success', 'error', 'rate_limited', 'timed_out')),
  error_code text,
  occurred_at timestamptz not null default now()
);

-- 6. AI Error Log (Debuggability without leaking sensitive prompts)
create table public.ai_errors (
  id uuid primary key default gen_random_uuid(),
  use_case_id text not null,
  provider_id text not null,
  model_id text not null,
  error_type text not null,
  error_message text not null,
  status_code int,
  occurred_at timestamptz not null default now()
);

-- 7. AI Model Evaluations
create table public.ai_evaluations (
  id uuid primary key default gen_random_uuid(),
  use_case_id text not null references public.ai_use_cases(id),
  model_id text not null references public.ai_models(id),
  evaluation_name text not null,
  sample_count int not null,
  accuracy_score numeric(5, 2) not null,
  latency_avg_ms int not null,
  notes text,
  evaluated_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

-- Seed initial provider records
insert into public.ai_providers (id, display_name, is_enabled, env_secret_key_name, supported_capabilities) values
  ('google', 'Google AI (Gemini)', true, 'GOOGLE_AI_API_KEY', '{conversation, structured_extraction, matching, analysis, document_understanding, agent_execution}'),
  ('anthropic', 'Anthropic (Claude)', true, 'ANTHROPIC_API_KEY', '{conversation, structured_extraction, analysis, agent_execution}'),
  ('openai', 'OpenAI', true, 'OPENAI_API_KEY', '{conversation, structured_extraction, matching, analysis, embedding}')
on conflict (id) do nothing;

create index idx_ai_usage_date on public.ai_usage_logs(occurred_at desc);
create index idx_ai_usage_use_case on public.ai_usage_logs(use_case_id, occurred_at desc);
create index idx_ai_errors_date on public.ai_errors(occurred_at desc);
