/**
 * Integration Registry Types
 * Central type definitions for the CareerOS Data Sources & Integrations transparency register.
 */

export type IntegrationProviderType =
  | 'public_data_source'
  | 'licensed_data_provider'
  | 'data_processor'
  | 'subprocessor'
  | 'independent_controller'
  | 'infrastructure_provider'
  | 'ai_service_provider'
  | 'referral_service'
  | 'authentication_provider'
  | 'analytics_provider'
  | 'communications_provider'
  | 'partner_integration';

export type IntegrationCategory =
  | 'occupations'
  | 'skills'
  | 'job_vacancies'
  | 'salaries'
  | 'labour_market'
  | 'employment_projections'
  | 'education'
  | 'training'
  | 'credentials'
  | 'apprenticeships'
  | 'employer_information'
  | 'ai_inference'
  | 'speech'
  | 'video'
  | 'authentication'
  | 'communications'
  | 'analytics'
  | 'infrastructure'
  | 'wellbeing_referral'
  | 'payments'
  | 'security'
  | 'search'
  | 'moderation';

export type IntegrationLifecycleStatus =
  | 'researching'
  | 'planned'
  | 'development'
  | 'testing'
  | 'production'
  | 'degraded'
  | 'paused'
  | 'retired';

export type DataDirection = 'inbound' | 'outbound' | 'bidirectional' | 'no_data_exchange';

export type CareerOSProcessing = 'none' | 'normalised' | 'enriched' | 'derived' | 'aggregated';

export type RefreshFrequency =
  | 'real-time'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'quarterly'
  | 'annually'
  | 'reference';

/** Displayed on the public /legal/data-sources-integrations page */
export interface PublicIntegrationRecord {
  id: string;
  providerName: string;
  providerSlug: string;
  serviceName: string;
  providerType: IntegrationProviderType;
  category: IntegrationCategory;
  categories: IntegrationCategory[];

  // Public display
  publicDisplayName: string | null;
  publicDescription: string | null;

  // Lifecycle
  lifecycleStatus: IntegrationLifecycleStatus;
  productionEnabled: boolean;

  // Data direction & classification
  dataDirection: DataDirection;
  informationCategories: string[];
  personalDataInvolved: boolean;
  personalDataCategories: string[];
  sensitiveDataInvolved: boolean;
  minorsDataPossible: boolean;
  authenticationData: boolean;
  userContent: boolean;
  pseudonymousIdentifiers: boolean;
  aggregateOnly: boolean;
  dataRetentionSummary: string | null;

  // Provenance
  authoritative_source: string | null;
  sourceVersion: string | null;
  refreshFrequency: RefreshFrequency | null;
  cached: boolean;
  expectedDelayHours: number;
  transformationApplied: boolean;
  transformationDescription: string | null;
  derivedData: boolean;
  careeroosProcessing: CareerOSProcessing;

  // Attribution & licensing
  attributionRequired: boolean;
  attributionText: string | null;
  licenseType: string | null;
  nonEndorsementRequired: boolean;
  nonEndorsementText: string | null;

  // Links
  websiteUrl: string | null;
  sourceUrl: string | null;
  termsUrl: string | null;
  privacyUrl: string | null;

  // Timestamps
  lastSuccessfulSync: string | null;
  lastReviewedAt: string | null;
  createdAt: string;
}

/** Full record for admin use — extends public with internal fields */
export interface AdminIntegrationRecord extends PublicIntegrationRecord {
  description: string;
  purpose: string;
  internalNotes: string | null;
  documentationUrl: string | null;

  // Internal lifecycle
  environment: 'development' | 'staging' | 'production' | 'all';
  active: boolean;
  previewOnly: boolean;

  // Review gates
  technicalReviewed: boolean;
  privacyReviewed: boolean;
  securityReviewed: boolean;
  legalReviewed: boolean;
  publicDisclosureReviewed: boolean;
  publicDisclosureApproved: boolean;
  publicDisclosureRequired: boolean;

  // Terms monitoring
  termsVersion: string | null;
  lastTermsReviewedAt: string | null;
  nextReviewAt: string | null;
  termsChanged: boolean;
  reviewOwner: string | null;

  // Personal data detail
  dataProcessingPurpose: string | null;

  // Dates
  usedFromDate: string | null;
  usedUntilDate: string | null;
  retirementReason: string | null;
  updatedAt: string;
}

/** For grouping the public register by category */
export interface IntegrationRegistryGroup {
  groupId: string;
  groupLabel: string;
  groupDescription: string;
  personalDataInvolved: boolean;
  integrations: PublicIntegrationRecord[];
}

/** Data issue report submitted from public page */
export interface DataIssueReport {
  issueType:
    | 'incorrect_job_data'
    | 'incorrect_employer_info'
    | 'outdated_salary_info'
    | 'incorrect_occupation_info'
    | 'broken_source_link'
    | 'incorrect_attribution'
    | 'integration_problem'
    | 'other';
  pageUrl?: string;
  dataSourceKnown?: string;
  description: string;
  reporterEmail?: string;
}

/** Labels for display */
export const PROVIDER_TYPE_LABELS: Record<IntegrationProviderType, string> = {
  public_data_source: 'Public Data Source',
  licensed_data_provider: 'Licensed Data Provider',
  data_processor: 'Data Processor',
  subprocessor: 'Sub-processor',
  independent_controller: 'Independent Controller',
  infrastructure_provider: 'Infrastructure Provider',
  ai_service_provider: 'AI Service Provider',
  referral_service: 'Referral Service',
  authentication_provider: 'Authentication Provider',
  analytics_provider: 'Analytics Provider',
  communications_provider: 'Communications Provider',
  partner_integration: 'Partner Integration',
};

export const CATEGORY_LABELS: Record<IntegrationCategory, string> = {
  occupations: 'Occupational Data',
  skills: 'Skills & Competencies',
  job_vacancies: 'Job Vacancies',
  salaries: 'Salaries & Compensation',
  labour_market: 'Labour Market Intelligence',
  employment_projections: 'Employment Projections',
  education: 'Education & Training',
  training: 'Training Programmes',
  credentials: 'Credentials & Verification',
  apprenticeships: 'Apprenticeships',
  employer_information: 'Employer Information',
  ai_inference: 'AI & Inference Services',
  speech: 'Speech Services',
  video: 'Video Services',
  authentication: 'Authentication',
  communications: 'Communications',
  analytics: 'Analytics & Measurement',
  infrastructure: 'Infrastructure & Platform',
  wellbeing_referral: 'Wellbeing Referral',
  payments: 'Payments',
  security: 'Security & Monitoring',
  search: 'Search',
  moderation: 'Content Moderation',
};

export const LIFECYCLE_STATUS_LABELS: Record<IntegrationLifecycleStatus, string> = {
  researching: 'Researching',
  planned: 'Planned',
  development: 'In Development',
  testing: 'In Testing',
  production: 'Live in Production',
  degraded: 'Degraded',
  paused: 'Paused',
  retired: 'Retired',
};

export const DATA_DIRECTION_LABELS: Record<DataDirection, string> = {
  inbound: 'Inbound (CareerOS receives data)',
  outbound: 'Outbound (CareerOS sends data)',
  bidirectional: 'Bidirectional (data flows both ways)',
  no_data_exchange: 'No data exchanged',
};

export const PROCESSING_LABELS: Record<CareerOSProcessing, string> = {
  none: 'Unmodified — used as-is',
  normalised: 'Normalised — standardised to CareerOS taxonomy',
  enriched: 'Enriched — combined with additional CareerOS data',
  derived: 'Derived — CareerOS generates new data from this source',
  aggregated: 'Aggregated — combined across multiple sources, no individual records',
};

export const REFRESH_FREQUENCY_LABELS: Record<RefreshFrequency, string> = {
  'real-time': 'Real-time',
  hourly: 'Hourly',
  daily: 'Daily',
  weekly: 'Weekly',
  monthly: 'Monthly',
  quarterly: 'Quarterly',
  annually: 'Annual update cycle',
  reference: 'Reference data — updated infrequently',
};
