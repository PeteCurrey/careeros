-- Migration: Partnership Target & Relationship Management System
-- Career OS Admin Control Plane
-- ============================================================

-- 1. Create Enums
do $$
begin
  if not exists (select 1 from pg_type where typname = 'partner_relationship_type') then
    create type partner_relationship_type as enum (
      'commercial_partner',
      'strategic_alliance',
      'education_partner',
      'workforce_partner',
      'public_workforce_resource',
      'nonprofit_partner',
      'vendor'
    );
  end if;

  if not exists (select 1 from pg_type where typname = 'partner_pipeline_stage') then
    create type partner_pipeline_stage as enum (
      'IDENTIFIED',
      'RESEARCHING',
      'QUALIFIED',
      'INTRO_NEEDED',
      'OUTREACH_READY',
      'CONTACTED',
      'ENGAGED',
      'DISCOVERY',
      'PROPOSAL',
      'NEGOTIATION',
      'LEGAL_PROCUREMENT',
      'AGREED',
      'INTEGRATION',
      'LAUNCH_READY',
      'LIVE',
      'EXPANSION',
      'PAUSED',
      'DECLINED',
      'CLOSED'
    );
  end if;

  if not exists (select 1 from pg_type where typname = 'partner_priority_level') then
    create type partner_priority_level as enum (
      'P0',
      'P1',
      'P2',
      'P3',
      'P4',
      'INFRASTRUCTURE'
    );
  end if;
end $$;

-- 2. Core Partners Table
create table if not exists public.partners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  legal_name text,
  website_url text,
  logo_url text,
  organization_type text default 'enterprise', -- 'enterprise', 'nonprofit', 'government', 'education', 'startup'
  primary_category text not null,
  secondary_categories text[] default array[]::text[],
  description text,
  headquarters_country text default 'US',
  headquarters_region text,
  geographic_reach text default 'National', -- 'Global', 'National', 'Regional', 'State'
  target_audiences text[] default array['students', 'professionals']::text[],
  relationship_type partner_relationship_type not null default 'strategic_alliance',
  relationship_status partner_pipeline_stage not null default 'IDENTIFIED',
  priority partner_priority_level not null default 'P1',
  strategic_score integer default 50, -- 0 to 100
  strategic_score_factors jsonb default '{
    "userValue": 70,
    "distributionPotential": 70,
    "strategicCredibility": 70,
    "productCapability": 50,
    "commercialPotential": 50,
    "dataIntelligenceValue": 50,
    "integrationFeasibility": 60,
    "relationshipAttainability": 50
  }'::jsonb,
  strategic_rationale text, -- Why CareerOS wants them
  partner_value_proposition text, -- Why they want CareerOS
  partnership_hypothesis jsonb default '{}'::jsonb,
  best_route_in text,
  potential_introducer text,
  next_best_action text,
  next_action_at timestamptz,
  waiting_on text,
  waiting_since timestamptz,
  estimated_value text,
  potential_revenue_model text,
  potential_cost_model text,
  public_display_approved boolean not null default false,
  public_name text,
  public_description text,
  public_logo text,
  public_category text,
  featured_publicly boolean not null default false,
  public_sort_order integer default 100,
  logo_permission_status text default 'not_requested', -- 'not_requested', 'requested', 'approved', 'restricted', 'denied'
  active boolean not null default true,
  owner_user_id uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  last_activity_at timestamptz default now()
);

alter table public.partners enable row level security;

create policy "partners_admin_read" on public.partners
  for select using (public.is_platform_admin());

create policy "partners_admin_write" on public.partners
  for all using (public.is_platform_admin());

create index if not exists idx_partners_slug on public.partners(slug);
create index if not exists idx_partners_stage on public.partners(relationship_status);
create index if not exists idx_partners_priority on public.partners(priority);
create index if not exists idx_partners_type on public.partners(relationship_type);

-- 3. Partner Contacts Table
create table if not exists public.partner_contacts (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  first_name text not null,
  last_name text not null,
  job_title text,
  department text,
  seniority text, -- 'Executive', 'VP / Director', 'Lead / Manager', 'Specialist'
  email text,
  phone text,
  linkedin_url text,
  relationship_strength text default 'none', -- 'none', 'cold', 'warm', 'strong'
  is_primary_owner boolean default false,
  is_executive_sponsor boolean default false,
  decision_maker boolean default false,
  influencer boolean default false,
  technical_contact boolean default false,
  legal_contact boolean default false,
  marketing_contact boolean default false,
  notes text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.partner_contacts enable row level security;
create policy "partner_contacts_admin_all" on public.partner_contacts for all using (public.is_platform_admin());
create index if not exists idx_partner_contacts_partner on public.partner_contacts(partner_id);

-- 4. Partner Opportunities Table
create table if not exists public.partner_opportunities (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  title text not null,
  opportunity_type text not null, -- 'API integration', 'distribution', 'referral', 'co-marketing', 'workforce programme', etc.
  description text,
  careeros_value_proposition text,
  partner_value_proposition text,
  target_audience text,
  proposed_model text,
  revenue_opportunity text,
  cost_estimate text,
  probability integer default 50, -- 0 to 100
  strategic_value integer default 50,
  stage partner_pipeline_stage not null default 'IDENTIFIED',
  expected_close_date date,
  owner_user_id uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.partner_opportunities enable row level security;
create policy "partner_opps_admin_all" on public.partner_opportunities for all using (public.is_platform_admin());
create index if not exists idx_partner_opps_partner on public.partner_opportunities(partner_id);

-- 5. Partner Activities Timeline
create table if not exists public.partner_activities (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  opportunity_id uuid references public.partner_opportunities(id) on delete set null,
  contact_id uuid references public.partner_contacts(id) on delete set null,
  activity_type text not null, -- 'research', 'email', 'call', 'meeting', 'intro', 'demo', 'proposal', 'follow_up', 'negotiation', 'legal', 'technical', 'contract', 'integration', 'launch', 'review', 'note'
  activity_date timestamptz not null default now(),
  summary text not null,
  details text,
  outcome text,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table public.partner_activities enable row level security;
create policy "partner_activities_admin_all" on public.partner_activities for all using (public.is_platform_admin());
create index if not exists idx_partner_activities_partner on public.partner_activities(partner_id);
create index if not exists idx_partner_activities_date on public.partner_activities(activity_date desc);

-- 6. Partner Tasks Table (with Waiting On tracking)
create table if not exists public.partner_tasks (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  opportunity_id uuid references public.partner_opportunities(id) on delete set null,
  contact_id uuid references public.partner_contacts(id) on delete set null,
  title text not null,
  description text,
  owner_user_id uuid references public.profiles(id) on delete set null,
  due_date date,
  priority partner_priority_level not null default 'P1',
  status text not null default 'open', -- 'open', 'in_progress', 'waiting', 'blocked', 'complete', 'cancelled'
  waiting_on_entity text,
  waiting_since timestamptz,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.partner_tasks enable row level security;
create policy "partner_tasks_admin_all" on public.partner_tasks for all using (public.is_platform_admin());
create index if not exists idx_partner_tasks_partner on public.partner_tasks(partner_id);
create index if not exists idx_partner_tasks_due on public.partner_tasks(due_date);

-- 7. Partner Documents Table
create table if not exists public.partner_documents (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  opportunity_id uuid references public.partner_opportunities(id) on delete set null,
  document_type text not null, -- 'research', 'outreach', 'deck', 'proposal', 'business_case', 'nda', 'mou', 'contract', 'dpa', 'security_review', 'technical_spec', 'integration_plan', 'marketing_approval', 'logo_permission', 'other'
  title text not null,
  storage_url text,
  version text default '1.0',
  status text default 'draft', -- 'draft', 'in_review', 'approved', 'executed', 'expired'
  confidential boolean not null default true,
  uploaded_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.partner_documents enable row level security;
create policy "partner_documents_admin_all" on public.partner_documents for all using (public.is_platform_admin());
create index if not exists idx_partner_documents_partner on public.partner_documents(partner_id);

-- 8. Partner Integrations Table (Technical Architecture)
create table if not exists public.partner_integrations (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  integration_name text not null,
  integration_type text not null, -- 'REST API', 'OAuth 2.0', 'Webhook', 'GraphQL', 'Batch Feed', 'SSO / SAML', 'Embedded SDK'
  api_available boolean default false,
  api_docs_url text,
  authentication_method text default 'OAuth 2.0 / Bearer',
  data_direction text default 'bi_directional', -- 'inbound', 'outbound', 'bi_directional'
  data_categories text[] default array['course_catalog', 'credentials']::text[],
  pii_involved boolean default false,
  minor_data_involved boolean default false,
  dpa_required boolean default false,
  security_review_required boolean default true,
  implementation_status text not null default 'not_assessed', -- 'not_assessed', 'researching', 'technically_feasible', 'blocked', 'planned', 'development', 'testing', 'awaiting_partner', 'production_ready', 'live', 'paused', 'retired'
  sandbox_available boolean default false,
  sandbox_status text default 'pending',
  production_status text default 'pending',
  technical_owner uuid references public.profiles(id) on delete set null,
  last_health_check timestamptz,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.partner_integrations enable row level security;
create policy "partner_integrations_admin_all" on public.partner_integrations for all using (public.is_platform_admin());
create index if not exists idx_partner_integrations_partner on public.partner_integrations(partner_id);

-- 9. Partner Compliance & Launch Gate Table
create table if not exists public.partner_compliance (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade unique,
  nda_status text default 'pending', -- 'not_required', 'pending', 'passed', 'blocked'
  contract_status text default 'pending',
  dpa_status text default 'pending',
  security_review_status text default 'pending',
  privacy_review_status text default 'pending',
  minors_review_status text default 'pending',
  ai_governance_status text default 'not_required',
  data_flows_documented boolean default false,
  trademark_permission_status text default 'pending',
  logo_permission_status text default 'pending',
  public_reference_permission text default 'pending',
  technical_qa_status text default 'pending',
  support_escalation_agreed boolean default false,
  renewal_date date,
  termination_date date,
  legal_owner uuid references public.profiles(id) on delete set null,
  override_reason text,
  override_by uuid references public.profiles(id) on delete set null,
  updated_at timestamptz not null default now()
);

alter table public.partner_compliance enable row level security;
create policy "partner_compliance_admin_all" on public.partner_compliance for all using (public.is_platform_admin());
create index if not exists idx_partner_compliance_partner on public.partner_compliance(partner_id);

-- 10. Partner Live Metrics Table
create table if not exists public.partner_metrics (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  reporting_period text not null, -- '2026-Q1', '2026-08'
  referrals_sent integer default 0,
  referrals_received integer default 0,
  registrations integer default 0,
  conversions integer default 0,
  users_supported integer default 0,
  opportunities_created integer default 0,
  placements integer default 0,
  course_enrolments integer default 0,
  credential_completions integer default 0,
  attributed_revenue numeric default 0,
  attributed_cost numeric default 0,
  net_value numeric default 0,
  custom_metrics jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.partner_metrics enable row level security;
create policy "partner_metrics_admin_all" on public.partner_metrics for all using (public.is_platform_admin());
create index if not exists idx_partner_metrics_partner on public.partner_metrics(partner_id);

-- 11. Partner Suggested Targets (Radar Inbox)
create table if not exists public.partner_suggested_targets (
  id uuid primary key default gen_random_uuid(),
  organisation_name text not null,
  website_url text,
  reason_identified text not null,
  source text default 'Industry Research',
  potential_category text not null,
  initial_strategic_rationale text,
  review_status text not null default 'pending', -- 'pending', 'approved', 'dismissed', 'watching'
  discovered_at timestamptz not null default now()
);

alter table public.partner_suggested_targets enable row level security;
create policy "partner_suggested_admin_all" on public.partner_suggested_targets for all using (public.is_platform_admin());

-- 12. Partner Audit Events Table
create table if not exists public.partner_audit_events (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid references public.partners(id) on delete cascade,
  action text not null, -- 'partner_created', 'stage_changed', 'contract_uploaded', 'launch_gate_override', 'made_live', etc.
  actor_user_id uuid references public.profiles(id) on delete set null,
  previous_state jsonb default '{}'::jsonb,
  new_state jsonb default '{}'::jsonb,
  notes text,
  created_at timestamptz not null default now()
);

alter table public.partner_audit_events enable row level security;
create policy "partner_audit_admin_all" on public.partner_audit_events for all using (public.is_platform_admin());

-- ============================================================
-- SEED INITIAL PARTNERSHIP TARGETS (Strategic Targets & Resources)
-- Labelled strictly as IDENTIFIED targets with genuine rationale
-- ============================================================

insert into public.partners (
  name, slug, organization_type, primary_category, secondary_categories,
  description, geographic_reach, relationship_type, relationship_status, priority,
  strategic_score, strategic_score_factors, strategic_rationale, partner_value_proposition,
  partnership_hypothesis, next_best_action
) values
-- P0: National Association of Workforce Boards (NAWB)
(
  'National Association of Workforce Boards',
  'nawb',
  'nonprofit',
  'Workforce',
  array['Government', 'Labour-Market Intelligence'],
  'Represents the nation’s 550+ local workforce development boards and American Job Center networks.',
  'National',
  'workforce_partner',
  'IDENTIFIED',
  'P0',
  92,
  '{"userValue": 95, "distributionPotential": 95, "strategicCredibility": 90, "productCapability": 85, "commercialPotential": 75, "dataIntelligenceValue": 90, "integrationFeasibility": 70, "relationshipAttainability": 80}'::jsonb,
  'Potential national workforce-board distribution and connectivity into American Job Center/workforce ecosystems, providing structural scale across 500+ regional workforce boards.',
  'CareerOS provides local workforce boards with an enduring digital operating system that continues supporting job seekers beyond short-term WIOA grant funding cycles.',
  '{"problem": "Workforce boards lose touch with candidates once temporary training programs end.", "user": "Dislocated workers and adult job seekers.", "careerOSContribution": "Lifelong sovereign Career Twin and Career Passport.", "partnerContribution": "National workforce board distribution and regional employer networks.", "jointOutcome": "Continuous post-placement career compounding and verifiable outcome tracking.", "commercialModel": "Workforce board enterprise SaaS and subsidized state deployment.", "proofPoint": "Successful 3-board regional pilot with 5,000 active participants."}'::jsonb,
  'Identify VP of Strategic Partnerships or Executive Director for initial introductory brief'
),

-- P0: Handshake
(
  'Handshake',
  'handshake',
  'enterprise',
  'Employment',
  array['Education', 'Youth'],
  'Leading early-career community connecting college students, universities, and enterprise employers.',
  'National',
  'strategic_alliance',
  'IDENTIFIED',
  'P0',
  94,
  '{"userValue": 95, "distributionPotential": 95, "strategicCredibility": 90, "productCapability": 90, "commercialPotential": 85, "dataIntelligenceValue": 95, "integrationFeasibility": 75, "relationshipAttainability": 70}'::jsonb,
  'Potential access to early-career, higher-education and employer networks. Connects Career Twin capability recommendations directly with real early-career employer demand.',
  'CareerOS provides Handshake with more career-ready, better-informed candidates whose skills, objectives and evidence portfolio have been developed before application.',
  '{"problem": "College students apply indiscriminately to hundreds of roles with generic résumés.", "user": "University students and early-career job seekers.", "careerOSContribution": "Verified skills evidence and AI mentor interview preparation.", "partnerContribution": "Vast employer network and campus university career centre integrations.", "jointOutcome": "Higher candidate match rates and reduced recruiter screening overhead.", "commercialModel": "Reciprocal distribution and verified credential API integration.", "proofPoint": "15% increase in candidate interview progression for CareerOS-prepared students."}'::jsonb,
  'Prepare executive 1-pager on CareerOS candidate readiness integration'
),

-- P0: Lightcast
(
  'Lightcast',
  'lightcast',
  'enterprise',
  'Labour-Market Intelligence',
  array['Data', 'Skills & Training'],
  'Global authority on labour market analytics, real-time job posting data, and dynamic skill taxonomies.',
  'Global',
  'strategic_alliance',
  'IDENTIFIED',
  'P0',
  91,
  '{"userValue": 90, "distributionPotential": 80, "strategicCredibility": 95, "productCapability": 95, "commercialPotential": 75, "dataIntelligenceValue": 100, "integrationFeasibility": 85, "relationshipAttainability": 75}'::jsonb,
  'Potential labour-market intelligence infrastructure supporting Career Twin capability benchmarking and 14,000+ career graph bridge models.',
  'CareerOS offers Lightcast a real-time, consumer-grounded verification layer that measures how workers actually apply and compound skills throughout their working lives.',
  '{"problem": "Static job descriptions lag emerging workforce skills and multi-disciplinary careers.", "user": "All CareerOS members exploring career transitions.", "careerOSContribution": "Longitudinal career pathway and verified competency graph.", "partnerContribution": "Enterprise-grade real-time job market posting and salary taxonomy data.", "jointOutcome": "Hyper-accurate career gap analysis and market compensation calibration.", "commercialModel": "Data licensing and co-developed capability benchmarks.", "proofPoint": "Sub-100ms career bridge recommendations mapped across 14,000 occupation nodes."}'::jsonb,
  'Research Lightcast Developer API documentation and pricing tiers'
),

-- P0: Coursera
(
  'Coursera',
  'coursera',
  'enterprise',
  'Skills & Training',
  array['Education', 'Credentials'],
  'Global online learning platform offering courses, certificates, and degrees from world-class universities.',
  'Global',
  'commercial_partner',
  'IDENTIFIED',
  'P0',
  89,
  '{"userValue": 95, "distributionPotential": 90, "strategicCredibility": 90, "productCapability": 85, "commercialPotential": 85, "dataIntelligenceValue": 80, "integrationFeasibility": 80, "relationshipAttainability": 70}'::jsonb,
  'Potential skills-to-learning pathway integration, converting identified Career Twin capability gaps directly into verified accredited coursework.',
  'CareerOS drives highly qualified, high-intent learners with specific identified skill needs directly into Coursera certificate and degree programs.',
  '{"problem": "Learners take disparate courses without a coherent lifelong career progression strategy.", "user": "Mid-career professionals and students reskilling.", "careerOSContribution": "Precision skill gap diagnosis and verified credential passport anchoring.", "partnerContribution": "World-class course catalog and accredited university certificates.", "jointOutcome": "Seamless one-click enrollment from AI mentor recommendations to verified course completion.", "commercialModel": "Affiliate referral fee and co-branded learning pathways.", "proofPoint": "30% higher course completion rate driven by targeted career goal alignment."}'::jsonb,
  'Draft value proposition outline for Coursera Partner Business Development team'
),

-- P1: BetterHelp
(
  'BetterHelp',
  'betterhelp',
  'enterprise',
  'Wellbeing',
  array['Healthcare', 'Community Support'],
  'World’s largest online therapy platform providing accessible, professional mental health support.',
  'Global',
  'commercial_partner',
  'IDENTIFIED',
  'P1',
  84,
  '{"userValue": 85, "distributionPotential": 75, "strategicCredibility": 80, "productCapability": 90, "commercialPotential": 85, "dataIntelligenceValue": 60, "integrationFeasibility": 90, "relationshipAttainability": 80}'::jsonb,
  'Potential professional adult mental-health escalation pathway when career stress, burnout, or transition anxiety requires clinical human support.',
  'CareerOS offers BetterHelp an organic, contextually sensitive referral channel for professionals experiencing workplace burnout and career transition pressure.',
  '{"problem": "Career crisis and chronic workplace stress frequently manifest as unaddressed mental health challenges.", "user": "Adult professionals navigating burnout or severe career disruption.", "careerOSContribution": "Compassionate AI mentor escalation triggers and private consent boundaries.", "partnerContribution": "Licensed professional therapy network available 24/7.", "jointOutcome": "Rapid, stigma-free access to human clinical care when workplace stress exceeds coaching boundaries.", "commercialModel": "Healthcare referral partnership and wellness benefit integration.", "proofPoint": "Clear ethical guardrails separating career guidance from licensed therapy."}'::jsonb,
  'Define safety and ethical escalation protocol before conducting partnership outreach'
),

-- P1: Talkspace
(
  'Talkspace',
  'talkspace',
  'enterprise',
  'Wellbeing',
  array['Youth', 'Education'],
  'Leading digital behavioural healthcare company supporting youth, schools, and enterprise teams.',
  'National',
  'commercial_partner',
  'IDENTIFIED',
  'P1',
  83,
  '{"userValue": 85, "distributionPotential": 80, "strategicCredibility": 85, "productCapability": 85, "commercialPotential": 75, "dataIntelligenceValue": 60, "integrationFeasibility": 85, "relationshipAttainability": 75}'::jsonb,
  'Potential youth and young-adult wellbeing pathway aligned with high school and district safeguarding frameworks.',
  'CareerOS provides school districts with an integrated career exploration system that respects mental wellbeing and provides immediate clinical escalation.',
  '{"problem": "Adolescents experience severe anxiety regarding post-graduation career and college decisions.", "user": "High school students (13-17) and early college youth.", "careerOSContribution": "Minor-safeguarded career exploration with institutional privacy defaults.", "partnerContribution": "Youth-specialized licensed tele-health and school district contracts.", "jointOutcome": "Holistic student career support with immediate crisis support pathways.", "commercialModel": "District co-procurement and youth support partnership.", "proofPoint": "FERPA and COPPA compliant data isolation with zero commercial cross-marketing."}'::jsonb,
  'Align youth clinical boundary definitions with CareerOS minor safeguarding policy'
),

-- P1: Credly by Pearson
(
  'Credly by Pearson',
  'credly',
  'enterprise',
  'Credentials',
  array['Education', 'Technology'],
  'World’s largest digital credential network, connecting accredited badges with employers and individuals.',
  'Global',
  'strategic_alliance',
  'IDENTIFIED',
  'P1',
  88,
  '{"userValue": 90, "distributionPotential": 85, "strategicCredibility": 90, "productCapability": 90, "commercialPotential": 75, "dataIntelligenceValue": 85, "integrationFeasibility": 90, "relationshipAttainability": 75}'::jsonb,
  'Potential verified digital credential integration, enabling instantaneous import and cryptographic anchoring of badges into the Career Passport.',
  'CareerOS transforms Credly badges into actionable, lifelong career compounding assets mapped directly to multi-industry career bridges.',
  '{"problem": "Digital badges sit isolated in email inboxes without compounding into career progression.", "user": "Certified trade professionals and tech practitioners.", "careerOSContribution": "Sovereign Career Passport and multi-dimensional Career Twin.", "partnerContribution": "Standardized Open Badges verification API for 30,000+ organizations.", "jointOutcome": "Instant cryptographic proof of qualifications inside the Career Passport.", "commercialModel": "API integration partnership and reciprocal user distribution.", "proofPoint": "One-click 100% automated badge verification into W3C verifiable credentials."}'::jsonb,
  'Review Credly / Pearson Open Badges 2.0 / 3.0 API specifications'
),

-- P1: Britebound
(
  'Britebound',
  'britebound',
  'startup',
  'Youth',
  array['Education', 'Workforce'],
  'Innovative platform empowering youth and students through career-readiness and apprenticeship matching.',
  'National',
  'strategic_alliance',
  'IDENTIFIED',
  'P1',
  82,
  '{"userValue": 85, "distributionPotential": 80, "strategicCredibility": 80, "productCapability": 80, "commercialPotential": 70, "dataIntelligenceValue": 80, "integrationFeasibility": 85, "relationshipAttainability": 85}'::jsonb,
  'Potential youth career-readiness alignment, expanding early exploratory learning for high school students.',
  'CareerOS offers Britebound students a persistent lifelong operating system that stays with them after graduation into apprenticeships or university.',
  '{"problem": "High school career tools terminate when students graduate.", "user": "High school students exploring non-linear options.", "careerOSContribution": "Persistent lifelong architecture across university, trades, and first jobs.", "partnerContribution": "Youth curriculum engagement and high school educator relationships.", "jointOutcome": "Unbroken longitudinal career record from 10th grade through career progression.", "commercialModel": "Curriculum licensing and school district distribution.", "proofPoint": "1,000 student pilot demonstrating high retention into first post-school roles."}'::jsonb,
  'Schedule exploratory discovery call with founding team'
),

-- P1: Hiring Our Heroes
(
  'Hiring Our Heroes',
  'hiring-our-heroes',
  'nonprofit',
  'Veterans',
  array['Workforce', 'Employer'],
  'U.S. Chamber of Commerce Foundation initiative connecting veterans, transitioning service members, and military spouses with meaningful employment.',
  'National',
  'workforce_partner',
  'IDENTIFIED',
  'P1',
  87,
  '{"userValue": 90, "distributionPotential": 85, "strategicCredibility": 95, "productCapability": 80, "commercialPotential": 65, "dataIntelligenceValue": 85, "integrationFeasibility": 85, "relationshipAttainability": 80}'::jsonb,
  'Potential veteran and military-family specialist pathway, translating military occupational specialties (MOS) directly into civilian workforce capabilities.',
  'CareerOS provides Hiring Our Heroes with sovereign capability translation tools that map military command, logistics, and technical experience into civilian leadership.',
  '{"problem": "Transitioning service members struggle to translate military MOS codes into civilian resumes.", "user": "Veterans, military spouses, and transitioning active-duty personnel.", "careerOSContribution": "MOS-to-Civilian translation taxonomy and Career Passport proof of capability.", "partnerContribution": "National military base network, Fellowship programs, and corporate hiring coalition.", "jointOutcome": "Reduced military transition friction and higher placement into senior civilian operations.", "commercialModel": "Foundation grant-funded and employer sponsorship.", "proofPoint": "90%+ placement rate for military fellows utilizing CareerOS skill profiles."}'::jsonb,
  'Connect with Director of Military Transition Programs'
),

-- P1: Jobs for the Future (JFF)
(
  'Jobs for the Future',
  'jff',
  'nonprofit',
  'Workforce',
  array['Education', 'Labour-Market Intelligence'],
  'National nonprofit driving workforce innovation and economic advancement for millions of workers.',
  'National',
  'strategic_alliance',
  'IDENTIFIED',
  'P1',
  86,
  '{"userValue": 85, "distributionPotential": 85, "strategicCredibility": 95, "productCapability": 80, "commercialPotential": 60, "dataIntelligenceValue": 90, "integrationFeasibility": 80, "relationshipAttainability": 75}'::jsonb,
  'Potential workforce innovation, apprenticeship policy alignment, and equitable economic-mobility collaboration.',
  'CareerOS provides JFF with empirical verification infrastructure that proves non-traditional apprenticeships provide equal economic return to 4-year degrees.',
  '{"problem": "Policy research struggles to capture real-time evidence of apprenticeship economic outcomes.", "user": "Low-wage workers seeking upward economic mobility.", "careerOSContribution": "Verified credential telemetry and lifelong compensation compounding data.", "partnerContribution": "National workforce innovation leadership, philanthropic network, and policy influence.", "jointOutcome": "Joint whitepaper and national demonstration pilot on verified skill mobility.", "commercialModel": "Grant-funded research partnership and workforce innovation challenge.", "proofPoint": "National recognition of CareerOS as an approved workforce mobility standard."}'::jsonb,
  'Review JFFLabs workforce tech accelerator guidelines'
),

-- P2: United Way / 211
(
  'United Way Worldwide / 211',
  'united-way-211',
  'nonprofit',
  'Community Support',
  array['Workforce', 'Financial Wellbeing'],
  'National network connecting millions of people to local essential community and crisis resources.',
  'National',
  'nonprofit_partner',
  'IDENTIFIED',
  'P2',
  78,
  '{"userValue": 85, "distributionPotential": 85, "strategicCredibility": 90, "productCapability": 75, "commercialPotential": 40, "dataIntelligenceValue": 70, "integrationFeasibility": 75, "relationshipAttainability": 70}'::jsonb,
  'Potential access to local support services (housing, childcare, transportation) where non-career barriers interfere with employment progression.',
  'CareerOS allows 211 specialists to connect community members with actionable career advancement once immediate emergency needs are stabilized.',
  '{"problem": "Workers cannot sustain employment when basic human needs (childcare, transit) are disrupted.", "user": "Individuals facing economic hardship and employment barriers.", "careerOSContribution": "Structured pathway from emergency stability to long-term career compounding.", "partnerContribution": "Hyper-local 211 community services directory across all 50 states.", "jointOutcome": "Holistic wraparound support removing practical barriers to job retention.", "commercialModel": "Non-commercial community health and workforce partnership.", "proofPoint": "Seamless bi-directional referral between 211 crisis navigation and CareerOS."}'::jsonb,
  'Identify national innovation lead at United Way Worldwide'
),

-- P2: Findhelp
(
  'Findhelp',
  'findhelp',
  'enterprise',
  'Community Support',
  array['Healthcare', 'Workforce'],
  'Leading social care network connecting people with local programs providing food, housing, transit and job training.',
  'National',
  'strategic_alliance',
  'IDENTIFIED',
  'P2',
  79,
  '{"userValue": 85, "distributionPotential": 80, "strategicCredibility": 85, "productCapability": 85, "commercialPotential": 50, "dataIntelligenceValue": 75, "integrationFeasibility": 80, "relationshipAttainability": 75}'::jsonb,
  'Potential social determinant support integration, resolving practical livelihood obstacles for job seekers and apprentices.',
  'CareerOS provides Findhelp with an actionable pathway from social service assistance into verified, living-wage workforce opportunities.',
  '{"problem": "Social care platforms solve immediate needs but lack long-term wage progression tools.", "user": "Vulnerable job seekers and low-income apprentices.", "careerOSContribution": "Living-wage career graph mapping and verified apprenticeship access.", "partnerContribution": "Comprehensive social care search API and closed-loop referral network.", "jointOutcome": "Closed-loop referral between social assistance and career progression.", "commercialModel": "API integration partnership.", "proofPoint": "Integrated local resource finder inside CareerOS Support centre."}'::jsonb,
  'Evaluate Findhelp REST API documentation and partner program'
),

-- Infrastructure / Public Resource: CareerOneStop
(
  'CareerOneStop',
  'careeronestop',
  'government',
  'Government',
  array['Labour-Market Intelligence', 'Workforce'],
  'U.S. Department of Labor-sponsored career search, training, and jobs resource portal.',
  'National',
  'public_workforce_resource',
  'IDENTIFIED',
  'INFRASTRUCTURE',
  85,
  '{"userValue": 90, "distributionPotential": 80, "strategicCredibility": 95, "productCapability": 85, "commercialPotential": 30, "dataIntelligenceValue": 95, "integrationFeasibility": 90, "relationshipAttainability": 90}'::jsonb,
  'Public workforce resource providing official U.S. Department of Labor career descriptions, local training provider registries, and state licensing boards.',
  'CareerOS ingests public federal data to enrich Career Twin options while remaining completely non-commercial and public-service oriented.',
  '{"problem": "Public workforce portals have rich data but lack personalized AI-guided coaching.", "user": "All U.S. workforce participants.", "careerOSContribution": "Interactive AI Mentor experience and sovereign Career Passport.", "partnerContribution": "Open federal datasets on occupations, licenses, and local American Job Centers.", "jointOutcome": "Standardized occupation and credential lookup integrated across CareerOS.", "commercialModel": "Open Government Data Integration (Zero commercial exchange).", "proofPoint": "Automated synchronization of state licensing and local training databases."}'::jsonb,
  'Review CareerOneStop Web Services API account registration'
),

-- Infrastructure / Public Resource: O*NET
(
  'O*NET (Occupational Information Network)',
  'onet',
  'government',
  'Labour-Market Intelligence',
  array['Government', 'Skills & Training'],
  'Nation’s primary source of occupational information, sponsored by the U.S. Department of Labor.',
  'National',
  'public_workforce_resource',
  'INFRASTRUCTURE',
  90,
  '{"userValue": 95, "distributionPotential": 80, "strategicCredibility": 95, "productCapability": 90, "commercialPotential": 20, "dataIntelligenceValue": 100, "integrationFeasibility": 95, "relationshipAttainability": 95}'::jsonb,
  'Foundational occupation and task taxonomy maintained by the U.S. Department of Labor, providing standardized occupational codes (SOC) and work activities.',
  'CareerOS utilizes O*NET standards to ensure all Career Twin skills map to universally recognized federal workforce taxonomies.',
  '{"problem": "Proprietary job titles create confusion across industries and state lines.", "user": "All CareerOS members.", "careerOSContribution": "Modern consumer UI and cross-industry capability bridge algorithms.", "partnerContribution": "Comprehensive SOC taxonomy and detailed work activity descriptors.", "jointOutcome": "100% taxonomy parity with official federal workforce standards.", "commercialModel": "Public domain federal data.", "proofPoint": "Complete SOC cross-referencing across all 14,000 Career Graph nodes."}'::jsonb,
  'Verify O*NET Web Services 2.0 API schema compatibility'
),

-- Infrastructure / Public Resource: Apprenticeship.gov
(
  'Apprenticeship.gov',
  'apprenticeship-gov',
  'government',
  'Skills & Training',
  array['Government', 'Workforce'],
  'Official federal platform for Registered Apprenticeships, sponsored by the U.S. Department of Labor.',
  'National',
  'public_workforce_resource',
  'INFRASTRUCTURE',
  88,
  '{"userValue": 95, "distributionPotential": 85, "strategicCredibility": 95, "productCapability": 85, "commercialPotential": 20, "dataIntelligenceValue": 90, "integrationFeasibility": 85, "relationshipAttainability": 90}'::jsonb,
  'Direct integration with federal and state Registered Apprenticeship program registries, supporting full parity for skilled trades and vocational pathways.',
  'CareerOS provides Apprenticeship.gov programs with verified, motivated candidates who understand apprenticeship value alongside traditional degrees.',
  '{"problem": "High school students frequently overlook Registered Apprenticeships due to lack of visibility.", "user": "Youth and career pivoters exploring skilled trades.", "careerOSContribution": "Parity weighting between 4-year degrees and registered apprenticeships.", "partnerContribution": "Verified federal apprenticeship program registry and sponsor directory.", "jointOutcome": "Direct search and application to accredited Registered Apprenticeship sponsors.", "commercialModel": "Public federal open API integration.", "proofPoint": "1,500 direct apprenticeship inquiries generated through CareerOS discovery."}'::jsonb,
  'Map Apprenticeship.gov API fields to CareerOS Opportunity schema'
)
on conflict (slug) do update set
  strategic_rationale = excluded.strategic_rationale,
  partner_value_proposition = excluded.partner_value_proposition,
  partnership_hypothesis = excluded.partnership_hypothesis,
  updated_at = now();

-- Initialize Compliance records for all seeded partners
insert into public.partner_compliance (partner_id, nda_status, contract_status, dpa_status, security_review_status, privacy_review_status, minors_review_status)
select id, 'pending', 'pending', 'pending', 'pending', 'pending', 'pending'
from public.partners
on conflict (partner_id) do nothing;
