-- Migration: Row Level Security for Admin Control Plane Tables
-- Career OS Admin Control Plane Foundation
-- ============================================================

-- Enable RLS on all newly created tables
alter table public.event_categories enable row level security;
alter table public.event_organisers enable row level security;
alter table public.events enable row level security;
alter table public.event_occurrences enable row level security;
alter table public.event_sources enable row level security;
alter table public.event_discovery_runs enable row level security;
alter table public.event_candidates enable row level security;
alter table public.event_submissions enable row level security;
alter table public.event_promotions enable row level security;

alter table public.cms_pages enable row level security;
alter table public.cms_blocks enable row level security;
alter table public.cms_revisions enable row level security;
alter table public.media_assets enable row level security;
alter table public.redirects enable row level security;
alter table public.seo_scans enable row level security;
alter table public.seo_issues enable row level security;

alter table public.ai_providers enable row level security;
alter table public.ai_models enable row level security;
alter table public.ai_use_cases enable row level security;
alter table public.ai_prompts enable row level security;
alter table public.ai_usage_logs enable row level security;
alter table public.ai_errors enable row level security;
alter table public.ai_evaluations enable row level security;

alter table public.email_templates enable row level security;
alter table public.newsletters enable row level security;
alter table public.campaigns enable row level security;
alter table public.communication_delivery_logs enable row level security;
alter table public.email_suppressions enable row level security;

alter table public.integrations enable row level security;
alter table public.scheduled_jobs enable row level security;
alter table public.job_runs enable row level security;

-- ============================================================
-- POLICIES: PUBLIC ACCESS
-- ============================================================

-- Active event categories are readable by anyone (public website)
create policy "event_categories_select_public" on public.event_categories
  for select using (is_active = true or public.is_platform_admin());

-- Published, unexpired events are readable by anyone (public website)
create policy "events_select_public" on public.events
  for select using (moderation_status in ('approved', 'live') or public.is_platform_admin());

-- Event occurrences for published events are readable by anyone
create policy "event_occurrences_select_public" on public.event_occurrences
  for select using (
    exists (
      select 1 from public.events e
      where e.id = event_occurrences.event_id
        and (e.moderation_status in ('approved', 'live') or public.is_platform_admin())
    )
  );

-- Active redirects are readable by everyone for URL routing
create policy "redirects_select_public" on public.redirects
  for select using (is_active = true or public.is_platform_admin());

-- Published CMS pages & blocks are readable by everyone
create policy "cms_pages_select_public" on public.cms_pages
  for select using (status = 'published' or public.is_platform_admin());

create policy "cms_blocks_select_public" on public.cms_blocks
  for select using (
    is_visible = true or public.is_platform_admin()
  );

-- Public can submit new events into moderation queue
create policy "event_submissions_insert_public" on public.event_submissions
  for insert with check (true);

-- ============================================================
-- POLICIES: ADMIN CONTROL PLANE (Full RLS Protection)
-- ============================================================

-- Events & Discovery
create policy "admin_events_all" on public.events
  for all using (public.is_platform_admin());

create policy "admin_event_categories_all" on public.event_categories
  for all using (public.is_platform_admin());

create policy "admin_event_organisers_all" on public.event_organisers
  for all using (public.is_platform_admin());

create policy "admin_event_sources_all" on public.event_sources
  for all using (public.is_platform_admin());

create policy "admin_event_discovery_runs_all" on public.event_discovery_runs
  for all using (public.is_platform_admin());

create policy "admin_event_candidates_all" on public.event_candidates
  for all using (public.is_platform_admin());

create policy "admin_event_submissions_all" on public.event_submissions
  for all using (public.is_platform_admin());

create policy "admin_event_promotions_all" on public.event_promotions
  for all using (public.is_platform_admin());

-- CMS & Media
create policy "admin_cms_pages_all" on public.cms_pages
  for all using (public.is_platform_admin());

create policy "admin_cms_blocks_all" on public.cms_blocks
  for all using (public.is_platform_admin());

create policy "admin_cms_revisions_all" on public.cms_revisions
  for all using (public.is_platform_admin());

create policy "admin_media_assets_all" on public.media_assets
  for all using (public.is_platform_admin());

create policy "admin_redirects_all" on public.redirects
  for all using (public.is_platform_admin());

create policy "admin_seo_scans_all" on public.seo_scans
  for all using (public.is_platform_admin());

create policy "admin_seo_issues_all" on public.seo_issues
  for all using (public.is_platform_admin());

-- AI Control Plane
create policy "admin_ai_providers_all" on public.ai_providers
  for all using (public.is_platform_admin());

create policy "admin_ai_models_all" on public.ai_models
  for all using (public.is_platform_admin());

create policy "admin_ai_use_cases_all" on public.ai_use_cases
  for all using (public.is_platform_admin());

create policy "admin_ai_prompts_all" on public.ai_prompts
  for all using (public.is_platform_admin());

create policy "admin_ai_usage_logs_all" on public.ai_usage_logs
  for all using (public.is_platform_admin());

create policy "admin_ai_errors_all" on public.ai_errors
  for all using (public.is_platform_admin());

create policy "admin_ai_evaluations_all" on public.ai_evaluations
  for all using (public.is_platform_admin());

-- Communications
create policy "admin_email_templates_all" on public.email_templates
  for all using (public.is_platform_admin());

create policy "admin_newsletters_all" on public.newsletters
  for all using (public.is_platform_admin());

create policy "admin_campaigns_all" on public.campaigns
  for all using (public.is_platform_admin());

create policy "admin_delivery_logs_all" on public.communication_delivery_logs
  for all using (public.is_platform_admin());

create policy "admin_email_suppressions_all" on public.email_suppressions
  for all using (public.is_platform_admin());

-- System & Integrations
create policy "admin_integrations_all" on public.integrations
  for all using (public.is_platform_admin());

create policy "admin_scheduled_jobs_all" on public.scheduled_jobs
  for all using (public.is_platform_admin());

create policy "admin_job_runs_all" on public.job_runs
  for all using (public.is_platform_admin());
