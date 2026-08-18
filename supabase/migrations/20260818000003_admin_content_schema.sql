-- Migration: CMS Content, Media, Redirects and SEO Scanner Schema
-- Career OS Admin Control Plane Foundation
-- ============================================================

-- 1. CMS Pages
create table public.cms_pages (
  id uuid primary key default gen_random_uuid(),
  route text not null unique,
  title text not null,
  description text,
  status text not null default 'published' check (status in ('draft', 'review', 'scheduled', 'published', 'archived')),
  meta_title text,
  meta_description text,
  canonical_url text,
  robots_directive text not null default 'index, follow',
  og_image_url text,
  scheduled_publish_at timestamptz,
  last_edited_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2. CMS Content Blocks
create table public.cms_blocks (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references public.cms_pages(id) on delete cascade,
  block_key text not null,
  block_type text not null check (block_type in ('hero', 'text', 'image', 'quote', 'stats', 'faq', 'cta', 'cards', 'feature_grid', 'rich_text')),
  content jsonb not null default '{}',
  display_order int not null default 0,
  is_visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(page_id, block_key)
);

-- 3. CMS Revisions & History
create table public.cms_revisions (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references public.cms_pages(id) on delete cascade,
  snapshot jsonb not null,
  revision_summary text,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

-- 4. Media Asset Library
create table public.media_assets (
  id uuid primary key default gen_random_uuid(),
  filename text not null,
  storage_path text not null unique,
  public_url text not null,
  mime_type text not null,
  file_size_bytes bigint not null,
  width int,
  height int,
  alt_text text,
  caption text,
  credit text,
  usage_count int not null default 0,
  uploaded_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

-- 5. URL Redirects Manager
create table public.redirects (
  id uuid primary key default gen_random_uuid(),
  source_path text not null unique,
  target_path text not null,
  status_code int not null default 301 check (status_code in (301, 302, 307, 308)),
  is_active boolean not null default true,
  hit_count bigint not null default 0,
  last_hit_at timestamptz,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 6. SEO Scans & Issue Tracking
create table public.seo_scans (
  id uuid primary key default gen_random_uuid(),
  status text not null check (status in ('running', 'completed', 'failed')),
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  routes_scanned int not null default 0,
  errors_found int not null default 0,
  warnings_found int not null default 0,
  passed_checks int not null default 0,
  summary jsonb not null default '{}'
);

create table public.seo_issues (
  id uuid primary key default gen_random_uuid(),
  scan_id uuid not null references public.seo_scans(id) on delete cascade,
  route text not null,
  severity text not null check (severity in ('error', 'warning', 'info')),
  issue_type text not null,
  message text not null,
  element_context text,
  is_resolved boolean not null default false,
  created_at timestamptz not null default now()
);

create index idx_cms_pages_status on public.cms_pages(status);
create index idx_redirects_source on public.redirects(source_path) where is_active is true;
create index idx_seo_issues_route on public.seo_issues(route, severity);
