-- Career OS Development Seed Data
-- ============================================================
-- SYNTHETIC DEVELOPMENT FIXTURES ONLY
-- This data is for local development and testing.
-- NEVER represents real users, schools, employers or careers.
-- This file must NOT be applied to production.
-- ============================================================

insert into public.policy_documents (id, name, document_type, applicable_audiences) values
  ('00000000-0000-0000-0000-000000000001', 'Terms of Service', 'TERMS', '{individual,school,employer,partner}'),
  ('00000000-0000-0000-0000-000000000002', 'Privacy Policy', 'PRIVACY', '{individual,school,employer,partner}'),
  ('00000000-0000-0000-0000-000000000003', 'AI Terms of Use', 'AI_TERMS', '{individual,school,employer}'),
  ('00000000-0000-0000-0000-000000000004', 'Student Terms', 'STUDENT_TERMS', '{individual}'),
  ('00000000-0000-0000-0000-000000000005', 'Employer Terms', 'EMPLOYER_TERMS', '{employer}'),
  ('00000000-0000-0000-0000-000000000006', 'School Terms', 'SCHOOL_TERMS', '{school}'),
  ('00000000-0000-0000-0000-000000000007', 'Parent & Guardian Notice', 'GUARDIAN_NOTICE', '{individual}');
