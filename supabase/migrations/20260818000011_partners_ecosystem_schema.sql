-- Migration: Partnerships & Ecosystem Schema Extensions
-- Adds missing partner columns, public display controls, attribution tracking, and partnership inquiry queue
-- ============================================================

-- 1. Ensure all required columns exist on partners table
do $$
begin
  -- partnership_reason
  if not exists (select 1 from information_schema.columns where table_schema = 'public' and table_name = 'partners' and column_name = 'partnership_reason') then
    alter table public.partners add column partnership_reason text;
  end if;

  -- capability_provided
  if not exists (select 1 from information_schema.columns where table_schema = 'public' and table_name = 'partners' and column_name = 'capability_provided') then
    alter table public.partners add column capability_provided text;
  end if;

  -- audience_supported
  if not exists (select 1 from information_schema.columns where table_schema = 'public' and table_name = 'partners' and column_name = 'audience_supported') then
    alter table public.partners add column audience_supported text[] default array['students', 'professionals']::text[];
  end if;

  -- logo_dark_url
  if not exists (select 1 from information_schema.columns where table_schema = 'public' and table_name = 'partners' and column_name = 'logo_dark_url') then
    alter table public.partners add column logo_dark_url text;
  end if;

  -- logo_use_approved
  if not exists (select 1 from information_schema.columns where table_schema = 'public' and table_name = 'partners' and column_name = 'logo_use_approved') then
    alter table public.partners add column logo_use_approved boolean not null default false;
  end if;

  -- attribution_required
  if not exists (select 1 from information_schema.columns where table_schema = 'public' and table_name = 'partners' and column_name = 'attribution_required') then
    alter table public.partners add column attribution_required boolean not null default false;
  end if;

  -- attribution_copy
  if not exists (select 1 from information_schema.columns where table_schema = 'public' and table_name = 'partners' and column_name = 'attribution_copy') then
    alter table public.partners add column attribution_copy text;
  end if;

  -- legal_notes
  if not exists (select 1 from information_schema.columns where table_schema = 'public' and table_name = 'partners' and column_name = 'legal_notes') then
    alter table public.partners add column legal_notes text;
  end if;

  -- last_verified_at
  if not exists (select 1 from information_schema.columns where table_schema = 'public' and table_name = 'partners' and column_name = 'last_verified_at') then
    alter table public.partners add column last_verified_at timestamptz default now();
  end if;

  -- category
  if not exists (select 1 from information_schema.columns where table_schema = 'public' and table_name = 'partners' and column_name = 'category') then
    alter table public.partners add column category text default 'Workforce & Opportunity';
  end if;

  -- short_description
  if not exists (select 1 from information_schema.columns where table_schema = 'public' and table_name = 'partners' and column_name = 'short_description') then
    alter table public.partners add column short_description text;
  end if;

  -- featured
  if not exists (select 1 from information_schema.columns where table_schema = 'public' and table_name = 'partners' and column_name = 'featured') then
    alter table public.partners add column featured boolean not null default false;
  end if;

  -- sort_order
  if not exists (select 1 from information_schema.columns where table_schema = 'public' and table_name = 'partners' and column_name = 'sort_order') then
    alter table public.partners add column sort_order integer default 100;
  end if;
end $$;

-- 2. Create Partnership Inquiries Table
create table if not exists public.partnership_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  work_email text not null,
  organisation text not null,
  website text,
  organisation_type text not null, -- 'employer', 'school_college', 'workforce_org', 'training_provider', 'nonprofit', 'technology_data', 'other'
  partnership_type text not null, -- 'strategic_alliance', 'wellbeing', 'workforce', 'education', 'credentials', 'technology', 'other'
  approximate_reach text, -- '<1k', '1k-10k', '10k-50k', '50k-250k', '250k+'
  message text not null,
  privacy_consent boolean not null default true,
  status text not null default 'new' check (status in ('new', 'in_review', 'contacted', 'qualified', 'declined', 'archived')),
  assigned_to uuid references public.profiles(id),
  internal_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.partnership_inquiries enable row level security;

-- Public can submit inquiries
create policy "partnership_inquiries_insert_public" on public.partnership_inquiries
  for insert with check (true);

-- Admins have full access to inquiries
create policy "partnership_inquiries_admin_all" on public.partnership_inquiries
  for all using (public.is_platform_admin());

-- Allow public read of approved partners
create policy "partners_public_read_approved" on public.partners
  for select using (active = true and public_display_approved = true);

-- 3. Upsert Strategic Partners with rich positioning and ecosystem mapping
insert into public.partners (
  name, slug, organization_type, relationship_type, category, primary_category,
  short_description, partnership_reason, capability_provided, audience_supported,
  website_url, featured, sort_order, relationship_status, public_display_approved,
  logo_use_approved, attribution_required, attribution_copy, active
) values
  (
    'National Association of Workforce Boards',
    'nawb',
    'nonprofit',
    'workforce_partner',
    'Workforce & Opportunity',
    'Workforce & Opportunity',
    'Connecting CareerOS with the 550+ workforce development boards building America''s regional talent pipelines.',
    'Workforce organisations are fundamental to connecting local talent, employers, training, and economic opportunity. CareerOS complements workforce boards rather than trying to replace them.',
    'Regional workforce board integration, American Job Center ecosystem mapping, local employer coalition access, and public workforce investment alignment.',
    array['job_seekers', 'adult_learners', 'workforce_boards', 'employers', 'community_colleges'],
    'https://www.nawb.org',
    true,
    1,
    'discussion',
    false,
    false,
    false,
    null,
    true
  ),
  (
    'BetterHelp',
    'betterhelp',
    'enterprise',
    'wellbeing_partner',
    'Wellbeing & Human Support',
    'Wellbeing & Human Support',
    'Because careers affect people, not profiles. Professional mental health support for adult professionals navigating workplace burnout and transition.',
    'CareerOS AI mentors are strictly not therapists. When a career conversation moves beyond mentorship into clinical stress or burnout, CareerOS provides an immediate, compassionate human pathway.',
    '24/7 licensed professional tele-therapy network, private consent boundaries, confidential adult referral pathways, and specialized workplace stress support.',
    array['adult_professionals', 'career_pivoters', 'remote_workers'],
    'https://www.betterhelp.com',
    true,
    2,
    'discussion',
    false,
    false,
    false,
    null,
    true
  ),
  (
    'Talkspace',
    'talkspace',
    'enterprise',
    'wellbeing_partner',
    'Wellbeing & Human Support',
    'Wellbeing & Human Support',
    'Specialist mental health support for young people and students when post-secondary and career pressures become overwhelming.',
    'Complements the adult wellbeing pathway by supporting CareerOS'' youth, high school, and school district ecosystem under strict FERPA and minor safeguarding controls.',
    'Youth-specialized licensed tele-health, school district integration capabilities, adolescent anxiety support, and crisis escalation protocols.',
    array['high_school_students', 'young_adults', 'school_districts', 'youth_programmes'],
    'https://www.talkspace.com',
    true,
    3,
    'discussion',
    false,
    false,
    false,
    null,
    true
  ),
  (
    'Handshake',
    'handshake',
    'enterprise',
    'employment_partner',
    'Early Careers & Opportunity',
    'Early Careers & Opportunity',
    'Connecting emerging talent with the employers and hiring organisations actively seeking early-career capability.',
    'CareerOS helps students understand where they are, where they could go, and what skills they need. Handshake helps connect that prepared talent with actual university and early-career job openings.',
    'Early-career job feeds, college recruitment integration, campus career centre alignment, and verified employer connections.',
    array['college_students', 'recent_graduates', 'university_career_centres', 'early_career_employers'],
    'https://joinhandshake.com',
    false,
    4,
    'discussion',
    false,
    false,
    false,
    null,
    true
  ),
  (
    'Coursera',
    'coursera',
    'enterprise',
    'education_partner',
    'Learning & Skills',
    'Learning & Skills',
    'Turning a skills gap into a structured learning pathway with world-class universities and industry leaders.',
    'CareerOS does not simply diagnose skill deficiencies; it turns identified development opportunities into tangible, credit-eligible learning pathways.',
    'Online courses, professional certificates from top universities and tech leaders, skill benchmarking, and automated completion verification.',
    array['students', 'career_switchers', 'professionals_upskilling'],
    'https://www.coursera.org',
    true,
    5,
    'discussion',
    false,
    false,
    false,
    null,
    true
  ),
  (
    'Lightcast',
    'lightcast',
    'enterprise',
    'data_provider',
    'Workforce Intelligence',
    'Workforce Intelligence',
    'Grounding CareerOS guidance and Career Twin decisions in real-time global and regional labour-market intelligence.',
    'Career advice should not exist in an information vacuum. Lightcast brings real-time employer demand, skill adjacencies, and regional wage intelligence directly into Career Twin algorithms.',
    'Real-time job posting analytics, regional compensation data, emerging skill taxonomy, and occupational trajectory mapping.',
    array['all_careeros_users', 'workforce_planners', 'curriculum_developers'],
    'https://lightcast.io',
    true,
    6,
    'discussion',
    false,
    false,
    false,
    null,
    true
  ),
  (
    'Credly by Pearson',
    'credly',
    'enterprise',
    'credential_partner',
    'Credentials & Evidence',
    'Credentials & Evidence',
    'Skills should be demonstrated, not merely claimed. Verifiable digital credentials anchored directly into the Career Passport.',
    'As CareerOS builds an evolving Career Twin for each user, verified credentials provide tamper-proof evidence of capability for employers and institutions.',
    'Open Badges standard verification, 30,000+ credential issuer integrations, instant digital badge import, and cryptographic skill verification.',
    array['certified_professionals', 'trade_practitioners', 'students', 'employers'],
    'https://www.credly.com',
    false,
    7,
    'discussion',
    false,
    false,
    false,
    null,
    true
  ),
  (
    'Britebound',
    'britebound',
    'startup',
    'education_partner',
    'Youth & Career Readiness',
    'Youth & Career Readiness',
    'Career exploration should start before somebody needs a job. Empowering youth to explore interests and connect education with future possibilities.',
    'Mission alignment around early exploration for high school students, providing an engaging bridge from school learning into modern career pathways.',
    'Youth career exploration curriculum, student interest inventories, interactive career discovery for secondary schools, and educator resources.',
    array['middle_school_students', 'high_school_students', 'educators', 'parents'],
    'https://britebound.com',
    false,
    8,
    'discussion',
    false,
    false,
    false,
    null,
    true
  ),
  (
    'Hiring Our Heroes',
    'hiring-our-heroes',
    'nonprofit',
    'workforce_partner',
    'Specialist Career Pathways',
    'Specialist Career Pathways',
    'Military experience is experience. Translating military skills into civilian career leadership for veterans and military spouses.',
    'Transitioning service members have distinct career navigation needs. CareerOS maps military occupational specialties (MOS) directly into civilian competencies and private-sector opportunities.',
    'Military MOS-to-civilian skill translation, Corporate Fellowship program alignment, military spouse career continuity, and veteran hiring coalitions.',
    array['veterans', 'transitioning_service_members', 'military_spouses', 'defense_employers'],
    'https://www.hiringourheroes.org',
    false,
    9,
    'discussion',
    false,
    false,
    false,
    null,
    true
  ),
  (
    'United Way 211',
    'united-way-211',
    'nonprofit',
    'community_partner',
    'Whole-Person Support',
    'Whole-Person Support',
    'Sometimes the barrier to work isn''t work. Connecting individuals to essential community support including childcare, transit, and housing.',
    'Career progression is frequently blocked by practical life barriers outside a resume. CareerOS connects users with local 211 social care resources so foundational needs are resolved alongside career growth.',
    'Local social care navigation across 50 states, childcare assistance lookup, transit subsidy discovery, and housing/utility support integration.',
    array['job_seekers_with_barriers', 'low_income_workers', 'single_parents', 'community_advocates'],
    'https://www.211.org',
    false,
    10,
    'discussion',
    false,
    false,
    false,
    null,
    true
  ),
  (
    'Jobs for the Future (JFF)',
    'jff',
    'nonprofit',
    'strategic_alliance',
    'Workforce Innovation',
    'Workforce Innovation',
    'Building better pathways between learning and work, advancing skills-first employment and equitable economic mobility.',
    'CareerOS collaborates with national workforce innovation leaders to ensure registered apprenticeships and non-traditional pathways receive equal weight to 4-year degrees.',
    'Workforce policy research, skills-based hiring frameworks, apprenticeship acceleration, and regional economic mobility initiatives.',
    array['policy_makers', 'workforce_innovators', 'apprenticeship_sponsors', 'underrepresented_workers'],
    'https://www.jff.org',
    false,
    11,
    'discussion',
    false,
    false,
    false,
    null,
    true
  ),
  (
    'CareerOneStop',
    'careeronestop',
    'government',
    'public_workforce_resource',
    'Official Workforce Resources',
    'Official Workforce Resources',
    'Official U.S. Department of Labor sponsored career exploration, job search, and training resource portal.',
    'CareerOS ingests public federal workforce information to provide nationwide occupation profiles, licensed profession criteria, and state American Job Center locations.',
    'State licensing registries, local training provider databases, American Job Center finder, and public wage metrics.',
    array['all_us_workers', 'counsellors', 're_entry_candidates'],
    'https://www.careeronestop.org',
    false,
    12,
    'live',
    true,
    false,
    true,
    'CareerOneStop is sponsored by the U.S. Department of Labor, Employment and Training Administration. Reference to CareerOneStop does not imply endorsement by the U.S. Department of Labor.',
    true
  ),
  (
    'O*NET®',
    'onet',
    'government',
    'public_workforce_resource',
    'Official Workforce Resources',
    'Official Workforce Resources',
    'The nation''s primary source of occupational information, sponsored by the U.S. Department of Labor / ETA.',
    'CareerOS maps all Career Twin competencies and Career Graph nodes to standard O*NET Standard Occupational Classification (SOC) taxonomies.',
    'O*NET SOC occupation taxonomy, detailed work activities, worker characteristics, and standardized occupational requirements.',
    array['all_users', 'employers', 'researchers'],
    'https://www.onetonline.org',
    false,
    13,
    'live',
    true,
    false,
    true,
    'O*NET® is a trademark of the U.S. Department of Labor, Employment and Training Administration (USDOL/ETA). CareerOS uses O*NET information under terms of use; this does not constitute an endorsement by USDOL.',
    true
  ),
  (
    'Apprenticeship.gov',
    'apprenticeship-gov',
    'government',
    'public_workforce_resource',
    'Official Workforce Resources',
    'Official Workforce Resources',
    'Official federal platform for Registered Apprenticeships, sponsored by the U.S. Department of Labor.',
    'Direct integration with federal and state Registered Apprenticeship directories, ensuring skilled trade and technical pathways receive full parity in CareerOS exploration.',
    'Registered Apprenticeship sponsor directory, apprenticeship occupation profiles, and state apprenticeship agency links.',
    array['apprentices', 'youth', 'skilled_trades_employers'],
    'https://www.apprenticeship.gov',
    false,
    14,
    'live',
    true,
    false,
    true,
    'Apprenticeship.gov is operated by the U.S. Department of Labor. Reference to Apprenticeship.gov does not imply federal agency endorsement.',
    true
  )
on conflict (slug) do update set
  short_description = excluded.short_description,
  partnership_reason = excluded.partnership_reason,
  capability_provided = excluded.capability_provided,
  audience_supported = excluded.audience_supported,
  website_url = excluded.website_url,
  attribution_required = excluded.attribution_required,
  attribution_copy = excluded.attribution_copy,
  updated_at = now();
