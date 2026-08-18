-- Migration: Communications & Email Infrastructure Architecture
-- Career OS Admin Control Plane Foundation
-- ============================================================

-- 1. Email & Communication Templates
create table public.email_templates (
  id uuid primary key default gen_random_uuid(),
  template_key text not null unique,
  name text not null,
  category text not null check (category in ('user', 'events', 'employers', 'schools', 'partners', 'marketing')),
  subject_template text not null,
  preheader_text text,
  body_html text not null,
  body_text text not null,
  available_variables text[] not null default '{}',
  is_active boolean not null default true,
  last_edited_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2. Newsletters Configuration & Editions
create table public.newsletters (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text not null,
  target_audience text not null check (target_audience in ('all_users', 'students', 'graduates', 'professionals', 'employers', 'organisers', 'educators')),
  cadence text not null default 'weekly',
  is_active boolean not null default true,
  subscriber_count int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 3. Communication Campaigns (Draft first)
create table public.campaigns (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  campaign_type text not null check (campaign_type in ('newsletter', 'announcement', 'event_spotlight', 'onboarding_drip', 'reactivation')),
  status text not null default 'draft' check (status in ('draft', 'scheduled', 'sending', 'sent', 'cancelled', 'failed')),
  subject text not null,
  target_segment jsonb not null default '{}',
  content_html text not null,
  total_recipients int not null default 0,
  sent_count int not null default 0,
  delivered_count int not null default 0,
  opened_count int not null default 0,
  clicked_count int not null default 0,
  bounced_count int not null default 0,
  unsubscribed_count int not null default 0,
  scheduled_for timestamptz,
  sent_at timestamptz,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 4. Communication Delivery Logs
create table public.communication_delivery_logs (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid references public.campaigns(id) on delete set null,
  template_id uuid references public.email_templates(id) on delete set null,
  recipient_profile_id uuid references public.profiles(id) on delete set null,
  recipient_email text not null,
  message_type text not null default 'transactional' check (message_type in ('transactional', 'marketing')),
  provider text not null default 'supabase',
  status text not null check (status in ('queued', 'sent', 'delivered', 'opened', 'clicked', 'bounced', 'failed', 'suppressed')),
  provider_message_id text,
  error_message text,
  created_at timestamptz not null default now()
);

-- 5. Email Suppression List
create table public.email_suppressions (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  reason text not null check (reason in ('unsubscribe', 'hard_bounce', 'spam_complaint', 'admin_block', 'gdpr_deletion')),
  source text,
  created_at timestamptz not null default now()
);

create index idx_campaigns_status on public.campaigns(status);
create index idx_comms_logs_recipient on public.communication_delivery_logs(recipient_email);
create index idx_email_suppressions_email on public.email_suppressions(email);
