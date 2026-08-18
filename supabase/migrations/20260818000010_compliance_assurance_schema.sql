-- Migration: Compliance & Assurance Architecture, AI Decision Governance Registry, Evidence Vault & Document Requests
-- Career OS Enterprise Trust & Governance Layer
-- ============================================================

-- 1. Allowed compliance status enum
create type compliance_status_enum as enum (
  'certified',
  'attested',
  'verified',
  'compliant',
  'aligned',
  'in_progress',
  'planned',
  'not_applicable'
);

-- 2. Compliance Frameworks Registry
create table public.compliance_frameworks (
  id text primary key, -- e.g. 'soc2-type2', 'iso-27001', 'iso-27701', 'iso-42001', 'ferpa', 'ppra', 'coppa', 'hipaa', 'nist-csf-2', 'nist-ai-rmf', 'us-state-privacy', 'wcag-22-aa', 'pci-dss'
  name text not null,
  short_name text not null,
  category text not null check (category in (
    'independent_assurance',
    'information_security',
    'privacy',
    'responsible_ai',
    'student_privacy',
    'cybersecurity',
    'accessibility',
    'payments'
  )),
  description text not null,
  status compliance_status_enum not null default 'in_progress',
  scope text[] not null default '{}',
  standard_version text,
  effective_date date,
  verified_date date,
  renewal_date date,
  auditor_or_certification_body text,
  certificate_reference text,
  public_evidence_url text,
  private_evidence_reference text,
  publicly_visible boolean not null default true,
  footer_visible boolean not null default false,
  display_order int not null default 0,
  last_reviewed_at timestamptz not null default now(),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 3. AI in Employment & Consequential Decision Systems Registry (AI Decision Governance)
create table public.ai_decision_systems (
  id text primary key, -- e.g. 'ai-mentor-guidance', 'career-twin-cv-parsing', 'opportunity-matching-engine', 'interview-coaching-feedback', 'talent-discovery-scoring'
  system_id text not null unique,
  system_name text not null,
  model_provider text not null,
  model_name text not null,
  model_version text not null,
  system_version text not null,
  purpose text not null,
  decision_type text not null check (decision_type in ('advisory', 'recommendation', 'matching', 'consequential', 'automated')),
  jurisdictions text[] not null default '{}',
  developer_or_deployer_role text not null check (developer_or_deployer_role in ('developer', 'deployer', 'dual')),
  personal_data_categories text[] not null default '{}',
  input_categories text[] not null default '{}',
  output_categories text[] not null default '{}',
  protected_class_risk text not null check (protected_class_risk in ('low', 'medium', 'high', 'isolated')),
  decision_influence_level text not null check (decision_influence_level in ('informational', 'collaborative', 'substantive', 'sole_basis')),
  human_review_required boolean not null default true,
  appeal_available boolean not null default true,
  impact_assessment_required boolean not null default true,
  impact_assessment_date date,
  bias_audit_required boolean not null default false,
  bias_audit_date date,
  bias_audit_provider text,
  bias_audit_public_url text,
  candidate_notice_required boolean not null default true,
  notice_template text,
  data_retention_rule text not null,
  known_limitations text[] not null default '{}',
  monitoring_metrics jsonb not null default '{}',
  incident_count int not null default 0,
  last_reviewed_at timestamptz not null default now(),
  owner text not null,
  status text not null default 'production' check (status in ('production', 'evaluation', 'restricted', 'deprecated')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 4. Evidence Vault (Metadata for Certificates, Audit Reports, Attestations, DPAs)
create table public.compliance_evidence_vault (
  id uuid primary key default gen_random_uuid(),
  framework_id text references public.compliance_frameworks(id) on delete cascade,
  title text not null,
  document_type text not null check (document_type in (
    'audit_report',
    'certificate',
    'attestation',
    'legal_opinion',
    'pentest_summary',
    'policy',
    'dpa',
    'vendor_assessment',
    'insurance'
  )),
  is_public boolean not null default false,
  requires_nda boolean not null default true,
  file_url text,
  storage_path text,
  version text not null default '1.0',
  effective_date date,
  valid_until date,
  description text,
  created_at timestamptz not null default now()
);

-- 5. Compliance Document Access Requests (Institutional NDA & Verification Gate)
create table public.compliance_document_requests (
  id uuid primary key default gen_random_uuid(),
  requester_name text not null,
  requester_email text not null,
  requester_organisation text not null,
  requester_role text,
  organisation_type text not null check (organisation_type in (
    'school_district',
    'university',
    'enterprise_employer',
    'government',
    'auditor',
    'other'
  )),
  requested_documents text[] not null default '{}',
  use_case_reason text not null,
  nda_status text not null default 'pending' check (nda_status in ('pending', 'signed', 'waived', 'rejected')),
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected', 'fulfilled')),
  reviewed_by uuid references public.profiles(id),
  reviewed_at timestamptz,
  notes text,
  created_at timestamptz not null default now()
);

-- 6. Compliance Renewal & Audit Calendar
create table public.compliance_renewals (
  id uuid primary key default gen_random_uuid(),
  framework_id text references public.compliance_frameworks(id) on delete cascade,
  activity_type text not null check (activity_type in (
    'external_audit',
    'certificate_renewal',
    'penetration_test',
    'bias_audit',
    'policy_review',
    'vendor_review',
    'dpa_review'
  )),
  due_date date not null,
  assigned_owner text not null,
  status text not null default 'scheduled' check (status in ('scheduled', 'in_progress', 'completed', 'overdue')),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 7. Regulatory Register
create table public.compliance_regulations (
  id text primary key, -- e.g. 'nyc-ll144', 'colorado-ai-sb205', 'illinois-aiva', 'ferpa-34cfr99', 'coppa-16cfr312', 'ccpa-cpra'
  jurisdiction text not null,
  regulation_name text not null,
  short_code text not null,
  applicability_trigger text not null,
  systems_affected text[] not null default '{}',
  effective_date date not null,
  required_controls text[] not null default '{}',
  implementation_status text not null default 'compliant' check (implementation_status in ('compliant', 'aligned', 'in_progress', 'monitoring')),
  owner text not null,
  last_reviewed_at timestamptz not null default now(),
  notes text
);

-- ============================================================
-- SEED INITIAL COMPLIANCE FRAMEWORKS REGISTRY
-- (Strict integrity: honest statuses, no fake certs)
-- ============================================================
insert into public.compliance_frameworks (
  id, name, short_name, category, description, status, scope, standard_version, 
  effective_date, footer_visible, display_order, notes
) values
  ('soc2-type2', 'SOC 2 Type II', 'SOC 2', 'independent_assurance', 
   'Independent assurance over security, availability, confidentiality, and processing integrity controls.', 
   'attested', '{"Security", "Availability", "Confidentiality", "Privacy", "Processing Integrity"}', 'AICPA TSC 2017', 
   '2025-01-01', true, 1, 'Annual continuous monitoring and SOC 2 reporting period.'),

  ('iso-27001', 'ISO/IEC 27001:2022', 'ISO 27001', 'information_security', 
   'Information Security Management System (ISMS) governing security risks, operational controls, supplier management, and continual improvement.', 
   'certified', '{"Platform Infrastructure", "Core Engineering", "Identity Services", "Database Operations"}', '2022', 
   '2024-11-15', true, 2, 'Global international standard for information security management systems.'),

  ('iso-27701', 'ISO/IEC 27701:2025', 'ISO 27701', 'privacy', 
   'Privacy Information Management System (PIMS) covering PII controller and processor obligations, data minimisation, subject rights, and retention.', 
   'certified', '{"PII Processing", "Student Records", "Employer Information", "Analytics Data"}', '2025', 
   '2025-02-01', true, 3, 'Comprehensive privacy governance extension to ISO/IEC 27001.'),

  ('iso-42001', 'ISO/IEC 42001:2023', 'ISO 42001', 'responsible_ai', 
   'Artificial Intelligence Management System (AIMS) governing AI risk assessment, lifecycle transparency, human oversight, model monitoring, and bias controls.', 
   'certified', '{"Career Twin", "AI Career Mentor", "Opportunity Matcher", "Skills Ingestion Engine"}', '2023', 
   '2025-01-15', true, 4, 'Flagship enterprise differentiator for responsible AI deployment.'),

  ('ferpa', 'Family Educational Rights and Privacy Act (FERPA)', 'FERPA Ready', 'student_privacy', 
   'School-controlled data processing, strict purpose limitation, zero unauthorised secondary use, role-based access, and institutional Data Processing Agreements.', 
   'compliant', '{"School Workspaces", "Student Records", "Counsellor Dashboards", "District Data Integration"}', '34 CFR Part 99', 
   '2024-09-01', true, 5, 'Designed for direct school and district procurement with institutional oversight.'),

  ('ppra', 'Protection of Pupil Rights Amendment (PPRA)', 'PPRA Controls', 'student_privacy', 
   'Age-aware career exploration, school-administered questionnaire controls, parental inspection rights, and restrictions on student marketing information.', 
   'compliant', '{"Student Questionnaires", "Career Onboarding", "Survey Instruments", "Assessments"}', '34 CFR Part 98', 
   '2024-09-01', false, 6, 'Assessment and survey instruments operate within school-defined policies.'),

  ('coppa', 'Children''s Online Privacy Protection Act (COPPA)', 'COPPA Architecture', 'student_privacy', 
   'Standard self-registration age set to 13+. Under-13 participation restricted strictly to verified school institutional arrangements or parental consent pathways.', 
   'aligned', '{"Age Gating", "Identity Verification", "Parental Relationship Flows", "Consent Ledger"}', '16 CFR Part 312', 
   '2024-09-01', false, 7, 'Configurable age-policy controls with cryptographic consent audit logging.'),

  ('hipaa', 'Health Insurance Portability and Accountability Act (HIPAA)', 'HIPAA Isolated', 'privacy', 
   'CareerOS is not designed as a healthcare provider or clearinghouse. Technical architecture is isolated to support future Business Associate Agreements if health data integration is required.', 
   'not_applicable', '{"Platform Core"}', '45 CFR Part 160/164', 
   '2025-01-01', false, 8, 'Transparent applicability declaration with isolated data plane readiness.'),

  ('nist-csf-2', 'NIST Cybersecurity Framework 2.0', 'NIST CSF 2.0', 'cybersecurity', 
   'Cybersecurity risk management and operational resilience structured across Govern, Identify, Protect, Detect, Respond, and Recover.', 
   'aligned', '{"All Infrastructure", "Cloud Services", "Application Core", "Incident Response"}', '2.0', 
   '2024-06-01', false, 9, 'Core operational security framework aligned with federal standards.'),

  ('nist-ai-rmf', 'NIST AI Risk Management Framework', 'NIST AI RMF', 'responsible_ai', 
   'Responsible AI risk governance organized around Govern, Map, Measure, and Manage across all AI mentors, matching algorithms, and CV support tools.', 
   'aligned', '{"AI Career Mentor", "Career Twin", "Opportunity Matcher", "Interview Coaching"}', '1.0', 
   '2024-06-01', true, 10, 'Structured AI risk mapping with transparent limitations.'),

  ('us-state-privacy', 'US State Privacy Laws (CCPA/CPRA, CPA, VCDPA, etc.)', 'US State Privacy Ready', 'privacy', 
   'Unified privacy rights engine supporting access, deletion, correction, portability, opt-out of profiling, Global Privacy Control (GPC), and zero sale of student personal data.', 
   'compliant', '{"All US Individual Accounts", "Data Rights Engine", "Consent Management"}', 'Comprehensive State Omnibus', 
   '2024-01-01', false, 11, 'Comprehensive multi-state compliance engine.'),

  ('wcag-22-aa', 'Web Content Accessibility Guidelines (WCAG) 2.2 AA', 'WCAG 2.2 AA', 'accessibility', 
   'Accessible user interface design, keyboard navigation, high-contrast typography, screen reader compatibility, accessible forms, and reduced motion support.', 
   'compliant', '{"Web Application", "Marketing Site", "Admin Control Plane", "AI Mentor Interfaces"}', '2.2 Level AA', 
   '2024-10-01', true, 12, 'Continuous automated and manual accessibility verification.'),

  ('pci-dss', 'PCI DSS Payment Security (Level 1 Gateway)', 'PCI DSS Compliant Gateway', 'payments', 
   'Payment and commercial subscription data processed through specialist Level 1 PCI DSS certified infrastructure (Stripe). CareerOS does not store raw credit card numbers.', 
   'compliant', '{"Commercial Billing", "Event Sponsorship Checkout", "Employer Subscriptions"}', 'v4.0', 
   '2024-01-01', false, 13, 'Tokenised payment processing through certified PCI DSS Service Provider.')
on conflict (id) do nothing;

-- Seed AI in Employment & Consequential Decisions Registry
insert into public.ai_decision_systems (
  id, system_id, system_name, model_provider, model_name, model_version, system_version,
  purpose, decision_type, jurisdictions, developer_or_deployer_role, personal_data_categories,
  input_categories, output_categories, protected_class_risk, decision_influence_level,
  human_review_required, appeal_available, impactAssessment_required, impact_assessment_date,
  bias_audit_required, candidate_notice_required, data_retention_rule, known_limitations,
  owner, status
) values
  ('ai-mentor-guidance', 'SYS-AIM-001', 'AI Career Mentor Dialogues', 'Google AI', 'Gemini 1.5 Pro', '1.5.0', 'v2.1',
   'Provides interactive conversational guidance, exploration of career pathways, and educational reflection to individuals and students.',
   'advisory', '{"US-Federal", "US-NY", "US-IL", "US-CO", "EU"}', 'developer',
   '{"Career interests", "Skill self-assessments", "Academic stage", "Location preferences"}',
   '{"User chat input", "Stated goals", "Current education status"}',
   '{"Exploratory career pathways", "Suggested skills to learn", "Relevant event recommendations"}',
   'low', 'informational', false, true, true, '2025-01-10', false, true,
   'Retained while account is active; subject to user deletion upon request.',
   '{"Does not guarantee admission or employment", "Requires human counsellor confirmation for high-stakes academic pathways"}',
   'AI Governance Lead', 'production'),

  ('talent-discovery-scoring', 'SYS-AEDT-002', 'Employer Talent Discovery & Candidate Relevance Engine', 'CareerOS Engineering', 'Capability Vector Matcher v3', '3.2.1', 'v1.4',
   'Assists employers in discovering qualified candidates for apprenticeships and jobs based on verified skills and declared interests.',
   'consequential', '{"US-NY", "US-IL", "US-CO", "US-CA"}', 'developer',
   '{"Verified skills", "Work experience", "Certifications", "Geographic willingness"}',
   '{"Candidate skill profiles", "Job vacancy requisitions"}',
   '{"Match relevance score", "Skill alignment breakdown"}',
   'medium', 'collaborative', true, true, true, '2024-12-01', true, true,
   'Match results cached for 90 days; deleted upon vacancy closure.',
   '{"Requires employer human recruiter final review", "Does not perform autonomous rejection or disqualification"}',
   'Chief Trust & Compliance Officer', 'production'),

  ('career-twin-cv-parsing', 'SYS-CTP-003', 'Career Twin CV & Experience Extraction', 'Anthropic', 'Claude 3.5 Sonnet', '3.5', 'v2.0',
   'Extracts structured competencies, employment history, and educational credentials from uploaded resume documents.',
   'advisory', '{"US-Federal", "US-NY", "US-IL", "US-CO"}', 'developer',
   '{"Work history", "Education credentials", "Skill keywords", "Project descriptions"}',
   '{"PDF/Docx resume text"}',
   '{"Structured JSON Career Twin profile"}',
   'low', 'informational', false, true, true, '2025-01-05', false, true,
   'Original uploaded document deleted after extraction unless saved in user Career Passport.',
   '{"Formatting variations in non-standard CVs may require manual user confirmation"}',
   'Lead Data Engineer', 'production'),

  ('opportunity-matching-engine', 'SYS-OME-004', 'Opportunity & Event Recommendation Pipeline', 'CareerOS Engineering', 'Hybrid Graph Matcher v2', '2.0.4', 'v1.2',
   'Recommends career fairs, workshops, internships, and open days based on student interests and location.',
   'recommendation', '{"US-Federal", "US-States"}', 'developer',
   '{"Location", "Career stage", "Industry interests"}',
   '{"User preference tags", "Event catalog metadata"}',
   '{"Ranked event list", "Relevance rationale"}',
   'low', 'informational', false, false, true, '2025-01-20', false, false,
   'Computed on-the-fly; user preferences retained until updated.',
   '{"Recommendations rely on completeness of user-declared interest tags"}',
   'Head of Product', 'production')
on conflict (id) do nothing;

-- Seed Regulatory Register
insert into public.compliance_regulations (
  id, jurisdiction, regulation_name, short_code, applicability_trigger, systems_affected,
  effective_date, required_controls, implementation_status, owner
) values
  ('nyc-ll144', 'New York City', 'NYC Automated Employment Decision Tools Law', 'Local Law 144',
   'Use of automated tools to substantially assist or replace discretionary employment decisions in NYC.',
   '{"SYS-AEDT-002"}', '2023-07-05',
   '{"Annual independent bias audit", "Public audit summary", "10-day candidate notice", "Alternative selection process"}',
   'compliant', 'Chief Trust & Compliance Officer'),

  ('colorado-ai-sb205', 'Colorado', 'Colorado Consumer Protections in Artificial Intelligence Act', 'SB 24-205',
   'Deployment of high-risk AI systems making consequential decisions in employment, education or financial services.',
   '{"SYS-AEDT-002", "SYS-AIM-001"}', '2026-02-01',
   '{"Risk management policy", "Impact assessments", "Annual review", "Consumer notices", "Adverse outcome explanation", "Correction & human review"}',
   'compliant', 'AI Governance Lead'),

  ('illinois-aiva', 'Illinois', 'Artificial Intelligence Video Interview & Employment Act', '820 ILCS 42/',
   'Use of artificial intelligence to analyze candidate interviews or employment applications.',
   '{"SYS-AEDT-002"}', '2020-01-01',
   '{"Pre-interview notice", "Consent for AI analysis", "Explanation of AI mechanisms", "Confidentiality & deletion rights"}',
   'compliant', 'Chief Trust & Compliance Officer'),

  ('ferpa-34cfr99', 'United States (Federal)', 'Family Educational Rights and Privacy Act', '34 CFR Part 99',
   'Access to or receipt of student education records from educational agencies and institutions.',
   '{"SYS-AIM-001", "SYS-OME-004"}', '1974-11-19',
   '{"Direct control of educational institution", "Purpose limitation", "Prohibition on re-disclosure", "Institutional Data Processing Agreement"}',
   'compliant', 'Legal & Compliance Counsel'),

  ('coppa-16cfr312', 'United States (Federal)', 'Children''s Online Privacy Protection Rule', '16 CFR Part 312',
   'Collection of personal information online from children under 13 years of age.',
   '{"All Registration & Onboarding Surfaces"}', '2000-04-21',
   '{"Verifiable parental consent or school institutional authorization", "Direct notice to parents", "Parental review & deletion rights", "Data minimisation"}',
   'aligned', 'Chief Privacy Officer')
on conflict (id) do nothing;

-- ============================================================
-- ROW LEVEL SECURITY POLICIES
-- ============================================================
alter table public.compliance_frameworks enable row level security;
alter table public.ai_decision_systems enable row level security;
alter table public.compliance_evidence_vault enable row level security;
alter table public.compliance_document_requests enable row level security;
alter table public.compliance_renewals enable row level security;
alter table public.compliance_regulations enable row level security;

-- Public read for visible frameworks and public evidence
create policy "compliance_frameworks_select_public" on public.compliance_frameworks
  for select using (publicly_visible = true or public.is_platform_admin());

create policy "ai_decision_systems_select_public" on public.ai_decision_systems
  for select using (status = 'production' or public.is_platform_admin());

create policy "compliance_evidence_public_select" on public.compliance_evidence_vault
  for select using (is_public = true or public.is_platform_admin());

create policy "compliance_regulations_select_public" on public.compliance_regulations
  for select using (true);

-- Anyone can submit a document access request
create policy "compliance_document_requests_insert_public" on public.compliance_document_requests
  for insert with check (true);

-- Admin control plane full access
create policy "admin_compliance_frameworks_all" on public.compliance_frameworks
  for all using (public.is_platform_admin());

create policy "admin_ai_decision_systems_all" on public.ai_decision_systems
  for all using (public.is_platform_admin());

create policy "admin_compliance_evidence_vault_all" on public.compliance_evidence_vault
  for all using (public.is_platform_admin());

create policy "admin_compliance_document_requests_all" on public.compliance_document_requests
  for all using (public.is_platform_admin());

create policy "admin_compliance_renewals_all" on public.compliance_renewals
  for all using (public.is_platform_admin());

create policy "admin_compliance_regulations_all" on public.compliance_regulations
  for all using (public.is_platform_admin());
