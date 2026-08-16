-- Migration: Extensions and Enums
-- Career OS Platform Foundation
-- ============================================================

-- Enable required extensions
create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";
create extension if not exists "pg_trgm";

-- ============================================================
-- ENUMS
-- ============================================================

create type account_status as enum (
  'ACTIVE',
  'PENDING_VERIFICATION',
  'SUSPENDED',
  'DEACTIVATED',
  'DELETED'
);

create type workspace_type as enum (
  'INDIVIDUAL',
  'SCHOOL',
  'EMPLOYER',
  'PARTNER',
  'ADMIN'
);

create type workspace_member_status as enum (
  'ACTIVE',
  'INVITED',
  'PENDING_APPROVAL',
  'SUSPENDED',
  'LEFT'
);

create type auth_provider as enum (
  'email',
  'magic_link',
  'google',
  'microsoft',
  'saml',
  'passkey'
);

create type consent_type as enum (
  'TERMS_OF_SERVICE',
  'PRIVACY_POLICY',
  'AI_TERMS',
  'DATA_PROCESSING',
  'GUARDIAN_AUTHORISATION',
  'SCHOOL_DATA_SHARING',
  'EMPLOYER_PROFILE_ACCESS',
  'MENTOR_DATA_ACCESS',
  'RESEARCH_PARTICIPATION',
  'MARKETING_COMMUNICATIONS'
);

create type consent_event_type as enum (
  'CONSENT_GRANTED',
  'CONSENT_UPDATED',
  'CONSENT_WITHDRAWN',
  'CONSENT_EXPIRED'
);

create type relationship_type as enum (
  'SELF',
  'GUARDIAN',
  'SCHOOL',
  'EMPLOYER',
  'PLATFORM'
);

create type default_visibility as enum (
  'PRIVATE',
  'CONNECTIONS',
  'NETWORK',
  'PUBLIC'
);

create type access_subject_type as enum (
  'MENTOR',
  'EMPLOYER',
  'ORGANISATION',
  'PERSON',
  'GUARDIAN',
  'EDUCATOR',
  'PARTNER'
);

create type access_resource_type as enum (
  'CAREER_TWIN_FIELD',
  'CAREER_TWIN_SECTION',
  'CAREER_PASSPORT',
  'CREDENTIAL',
  'WORK_HISTORY',
  'PROFILE',
  'GOALS',
  'ASSESSMENTS'
);

create type access_permission as enum (
  'READ',
  'READ_SUMMARY',
  'WRITE',
  'ENDORSE',
  'VERIFY'
);

create type retention_class as enum (
  'STANDARD',
  'EXTENDED',
  'LEGAL_HOLD',
  'EPHEMERAL',
  'CONSENT_BOUND'
);

create type organisation_type as enum (
  'SCHOOL',
  'EMPLOYER',
  'PARTNER',
  'PLATFORM'
);

create type audit_actor_type as enum (
  'USER',
  'SYSTEM',
  'AI_AGENT',
  'ADMIN',
  'EMPLOYER',
  'SCHOOL',
  'API'
);
