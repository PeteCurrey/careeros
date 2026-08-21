/**
 * Integration Registry — Pure Data Module
 * No server-side imports. Safe to use in both client and server components.
 * Contains: static registry, categorization logic, and type-safe group definitions.
 */

import {
  PublicIntegrationRecord,
  IntegrationRegistryGroup,
  IntegrationCategory,
} from '@/types/integrations';

// ─── Static fallback registry ──────────────────────────────────────────────

export const STATIC_INTEGRATION_REGISTRY: PublicIntegrationRecord[] = [
  {
    id: 'onet',
    providerName: 'O*NET® (Occupational Information Network)',
    providerSlug: 'onet',
    serviceName: 'Occupational Information Network',
    providerType: 'public_data_source',
    category: 'occupations',
    categories: ['occupations', 'skills'],
    publicDisplayName: 'O*NET® (Occupational Information Network)',
    publicDescription: 'Provides the occupational taxonomy and skill structures that underpin CareerOS career exploration and Career Twin capability mapping.',
    lifecycleStatus: 'production',
    productionEnabled: true,
    dataDirection: 'inbound',
    informationCategories: ['Occupational descriptors', 'Skills taxonomy', 'Knowledge structures', 'Work activities', 'Worker characteristics'],
    personalDataInvolved: false,
    personalDataCategories: [],
    sensitiveDataInvolved: false,
    minorsDataPossible: false,
    authenticationData: false,
    userContent: false,
    pseudonymousIdentifiers: false,
    aggregateOnly: false,
    dataRetentionSummary: 'Reference database held until superseded by a new O*NET release.',
    authoritative_source: 'U.S. Department of Labor / Employment and Training Administration (USDOL/ETA)',
    sourceVersion: 'O*NET 28.3 Database',
    refreshFrequency: 'annually',
    cached: false,
    expectedDelayHours: 0,
    transformationApplied: true,
    transformationDescription: 'CareerOS normalizes O*NET SOC codes to its internal Career Twin skill taxonomy and applies regional relevance weighting.',
    derivedData: false,
    careeroosProcessing: 'normalized',
    attributionRequired: true,
    attributionText: 'O*NET® is a trademark of the U.S. Department of Labor, Employment and Training Administration (USDOL/ETA). CareerOS uses O*NET information under open data terms; this does not constitute an endorsement by USDOL/ETA.',
    licenseType: 'O*NET Open Database License',
    nonEndorsementRequired: true,
    nonEndorsementText: 'Use of O*NET information does not imply U.S. Department of Labor endorsement of CareerOS.',
    websiteUrl: 'https://www.onetonline.org',
    sourceUrl: 'https://www.onetcenter.org/database.html',
    termsUrl: 'https://www.onetcenter.org/license_db.html',
    privacyUrl: null,
    lastSuccessfulSync: null,
    lastReviewedAt: '2026-08-18T00:00:00Z',
    createdAt: '2026-08-18T00:00:00Z',
  },
  {
    id: 'careeronestop',
    providerName: 'CareerOneStop',
    providerSlug: 'careeronestop',
    serviceName: 'Career Exploration & Workforce API',
    providerType: 'public_data_source',
    category: 'occupations',
    categories: ['occupations', 'training', 'labour_market'],
    publicDisplayName: 'CareerOneStop',
    publicDescription: 'Provides authoritative US federal occupational information, training program lookup, and American Job Center location services.',
    lifecycleStatus: 'production',
    productionEnabled: true,
    dataDirection: 'inbound',
    informationCategories: ['Occupational profiles', 'Training programs', 'American Job Center locations', 'State licensing requirements', 'Employment trends'],
    personalDataInvolved: false,
    personalDataCategories: [],
    sensitiveDataInvolved: false,
    minorsDataPossible: false,
    authenticationData: false,
    userContent: false,
    pseudonymousIdentifiers: false,
    aggregateOnly: false,
    dataRetentionSummary: 'Cached up to 24 hours, then refreshed from CareerOneStop API.',
    authoritative_source: 'U.S. Department of Labor, Employment and Training Administration (USDOL/ETA)',
    sourceVersion: null,
    refreshFrequency: 'daily',
    cached: true,
    expectedDelayHours: 24,
    transformationApplied: true,
    transformationDescription: 'CareerOS normalizes occupational data with its internal taxonomy and enriches with regional labor-market signals.',
    derivedData: false,
    careeroosProcessing: 'enriched',
    attributionRequired: true,
    attributionText: 'CareerOneStop is sponsored by the U.S. Department of Labor, Employment and Training Administration. Reference to CareerOneStop does not imply endorsement by the U.S. Department of Labor.',
    licenseType: 'Public domain / US federal government open data',
    nonEndorsementRequired: true,
    nonEndorsementText: 'Use of CareerOneStop information does not imply U.S. Department of Labor endorsement of CareerOS.',
    websiteUrl: 'https://www.careeronestop.org',
    sourceUrl: 'https://www.careeronestop.org/Developers/WebAPI/web-api.aspx',
    termsUrl: 'https://www.careeronestop.org/Developers/WebAPI/web-api.aspx',
    privacyUrl: null,
    lastSuccessfulSync: null,
    lastReviewedAt: '2026-08-18T00:00:00Z',
    createdAt: '2026-08-18T00:00:00Z',
  },
  {
    id: 'supabase',
    providerName: 'Supabase',
    providerSlug: 'supabase',
    serviceName: 'Database, Auth & Storage Platform',
    providerType: 'infrastructure_provider',
    category: 'infrastructure',
    categories: ['infrastructure', 'authentication'],
    publicDisplayName: 'Supabase',
    publicDescription: "Provides CareerOS' core database and user authentication infrastructure.",
    lifecycleStatus: 'production',
    productionEnabled: true,
    dataDirection: 'bidirectional',
    informationCategories: ['User accounts', 'Career profiles', 'Platform content', 'Application data'],
    personalDataInvolved: true,
    personalDataCategories: ['Account identifiers', 'Career profile data', 'User-generated content', 'Platform activity records'],
    sensitiveDataInvolved: false,
    minorsDataPossible: true,
    authenticationData: true,
    userContent: true,
    pseudonymousIdentifiers: true,
    aggregateOnly: false,
    dataRetentionSummary: 'Data retained under CareerOS retention schedule. Users may request deletion under the Privacy Policy.',
    authoritative_source: null,
    sourceVersion: null,
    refreshFrequency: 'real-time',
    cached: false,
    expectedDelayHours: 0,
    transformationApplied: false,
    transformationDescription: null,
    derivedData: false,
    careeroosProcessing: 'none',
    attributionRequired: false,
    attributionText: null,
    licenseType: 'Commercial SaaS agreement',
    nonEndorsementRequired: false,
    nonEndorsementText: null,
    websiteUrl: 'https://supabase.com',
    sourceUrl: null,
    termsUrl: 'https://supabase.com/terms',
    privacyUrl: 'https://supabase.com/privacy',
    lastSuccessfulSync: null,
    lastReviewedAt: '2026-08-18T00:00:00Z',
    createdAt: '2026-08-18T00:00:00Z',
  },
  {
    id: 'vercel',
    providerName: 'Vercel',
    providerSlug: 'vercel',
    serviceName: 'Edge Compute & Hosting Platform',
    providerType: 'infrastructure_provider',
    category: 'infrastructure',
    categories: ['infrastructure'],
    publicDisplayName: 'Vercel',
    publicDescription: 'Hosts and serves the CareerOS web application globally.',
    lifecycleStatus: 'production',
    productionEnabled: true,
    dataDirection: 'bidirectional',
    informationCategories: ['HTTP request logs', 'Edge function execution metadata', 'Performance telemetry'],
    personalDataInvolved: false,
    personalDataCategories: [],
    sensitiveDataInvolved: false,
    minorsDataPossible: false,
    authenticationData: false,
    userContent: false,
    pseudonymousIdentifiers: true,
    aggregateOnly: false,
    dataRetentionSummary: 'Request logs retained per Vercel standard data retention policy.',
    authoritative_source: null,
    sourceVersion: null,
    refreshFrequency: 'real-time',
    cached: false,
    expectedDelayHours: 0,
    transformationApplied: false,
    transformationDescription: null,
    derivedData: false,
    careeroosProcessing: 'none',
    attributionRequired: false,
    attributionText: null,
    licenseType: 'Commercial SaaS agreement',
    nonEndorsementRequired: false,
    nonEndorsementText: null,
    websiteUrl: 'https://vercel.com',
    sourceUrl: null,
    termsUrl: 'https://vercel.com/legal/terms',
    privacyUrl: 'https://vercel.com/legal/privacy-policy',
    lastSuccessfulSync: null,
    lastReviewedAt: '2026-08-18T00:00:00Z',
    createdAt: '2026-08-18T00:00:00Z',
  },
  {
    id: 'resend',
    providerName: 'Resend',
    providerSlug: 'resend',
    serviceName: 'Transactional Email Service',
    providerType: 'communications_provider',
    category: 'communications',
    categories: ['communications'],
    publicDisplayName: 'Resend',
    publicDescription: 'Delivers transactional emails including account confirmations and security notifications.',
    lifecycleStatus: 'production',
    productionEnabled: true,
    dataDirection: 'outbound',
    informationCategories: ['Email addresses', 'Notification content'],
    personalDataInvolved: true,
    personalDataCategories: ['Email addresses', 'Notification content (account-related only)'],
    sensitiveDataInvolved: false,
    minorsDataPossible: true,
    authenticationData: false,
    userContent: false,
    pseudonymousIdentifiers: false,
    aggregateOnly: false,
    dataRetentionSummary: 'Email delivery records retained per Resend standard retention. CareerOS does not store email content after delivery.',
    authoritative_source: null,
    sourceVersion: null,
    refreshFrequency: 'real-time',
    cached: false,
    expectedDelayHours: 0,
    transformationApplied: false,
    transformationDescription: null,
    derivedData: false,
    careeroosProcessing: 'none',
    attributionRequired: false,
    attributionText: null,
    licenseType: 'Commercial SaaS agreement',
    nonEndorsementRequired: false,
    nonEndorsementText: null,
    websiteUrl: 'https://resend.com',
    sourceUrl: null,
    termsUrl: 'https://resend.com/legal/terms-of-service',
    privacyUrl: 'https://resend.com/legal/privacy-policy',
    lastSuccessfulSync: null,
    lastReviewedAt: '2026-08-18T00:00:00Z',
    createdAt: '2026-08-18T00:00:00Z',
  },
  {
    id: 'stripe',
    providerName: 'Stripe',
    providerSlug: 'stripe',
    serviceName: 'Payment Processing Infrastructure',
    providerType: 'data_processor',
    category: 'payments',
    categories: ['payments', 'infrastructure'],
    publicDisplayName: 'Stripe',
    publicDescription: 'Processes payments securely using industry-standard PCI DSS Level 1 controls. CareerOS never stores raw payment card data.',
    lifecycleStatus: 'planned',
    productionEnabled: false,
    dataDirection: 'bidirectional',
    informationCategories: ['Payment tokens', 'Transaction records', 'Billing information'],
    personalDataInvolved: true,
    personalDataCategories: ['Billing contact details', 'Payment tokens (no raw card data stored by CareerOS)', 'Transaction records'],
    sensitiveDataInvolved: false,
    minorsDataPossible: false,
    authenticationData: false,
    userContent: false,
    pseudonymousIdentifiers: false,
    aggregateOnly: false,
    dataRetentionSummary: 'Stripe retains payment records under PCI DSS compliance obligations. CareerOS retains only tokenised references.',
    authoritative_source: null,
    sourceVersion: null,
    refreshFrequency: 'real-time',
    cached: false,
    expectedDelayHours: 0,
    transformationApplied: false,
    transformationDescription: null,
    derivedData: false,
    careeroosProcessing: 'none',
    attributionRequired: false,
    attributionText: null,
    licenseType: 'Commercial SaaS agreement',
    nonEndorsementRequired: false,
    nonEndorsementText: null,
    websiteUrl: 'https://stripe.com',
    sourceUrl: null,
    termsUrl: 'https://stripe.com/legal',
    privacyUrl: 'https://stripe.com/privacy',
    lastSuccessfulSync: null,
    lastReviewedAt: '2026-08-18T00:00:00Z',
    createdAt: '2026-08-18T00:00:00Z',
  },
];

// ─── Category group definitions ────────────────────────────────────────────

const CATEGORY_GROUP_META: {
  occupational_data: { label: string; description: string; personalData: boolean };
  infrastructure: { label: string; description: string; personalData: boolean };
  communications: { label: string; description: string; personalData: boolean };
  payments: { label: string; description: string; personalData: boolean };
  ai_services: { label: string; description: string; personalData: boolean };
  analytics: { label: string; description: string; personalData: boolean };
} = {
  occupational_data: {
    label: 'Occupational & Labor Market Data',
    description: 'External authoritative sources CareerOS draws on for occupational information, skills taxonomies, and labor market intelligence. This data does not involve personal information.',
    personalData: false,
  },
  infrastructure: {
    label: 'Platform Infrastructure & Hosting',
    description: "Core technology providers that power CareerOS' database, authentication, hosting, and performance infrastructure.",
    personalData: true,
  },
  communications: {
    label: 'Communications & Notifications',
    description: 'Services used to deliver emails and notifications to CareerOS users. Personal data is transmitted only for delivery purposes.',
    personalData: true,
  },
  payments: {
    label: 'Payments & Billing',
    description: "Payment processing infrastructure. CareerOS uses client-side tokenisation — raw payment card data is never stored on CareerOS servers.",
    personalData: true,
  },
  ai_services: {
    label: 'AI & Inference Services',
    description: 'AI model providers and inference infrastructure used to power CareerOS AI features including Career Twin, AI mentoring, and content generation.',
    personalData: false,
  },
  analytics: {
    label: 'Analytics & Monitoring',
    description: 'Services that help CareerOS understand platform health, performance, and usage patterns. Where personal data is used, it is subject to privacy controls.',
    personalData: false,
  },
};

export function categoriseIntegrations(records: PublicIntegrationRecord[]): IntegrationRegistryGroup[] {
  const occupationalCategories: IntegrationCategory[] = [
    'occupations', 'skills', 'job_vacancies', 'salaries', 'labour_market',
    'employment_projections', 'education', 'training', 'credentials',
    'apprenticeships', 'employer_information',
  ];

  const groups: IntegrationRegistryGroup[] = [];

  const occupational = records.filter(r => occupationalCategories.includes(r.category));
  if (occupational.length > 0) {
    groups.push({
      groupId: 'occupational_data',
      groupLabel: CATEGORY_GROUP_META.occupational_data.label,
      groupDescription: CATEGORY_GROUP_META.occupational_data.description,
      personalDataInvolved: false,
      integrations: occupational,
    });
  }

  const infra = records.filter(r => r.category === 'infrastructure' || r.category === 'authentication');
  if (infra.length > 0) {
    groups.push({
      groupId: 'infrastructure',
      groupLabel: CATEGORY_GROUP_META.infrastructure.label,
      groupDescription: CATEGORY_GROUP_META.infrastructure.description,
      personalDataInvolved: true,
      integrations: infra,
    });
  }

  const comms = records.filter(r => r.category === 'communications');
  if (comms.length > 0) {
    groups.push({
      groupId: 'communications',
      groupLabel: CATEGORY_GROUP_META.communications.label,
      groupDescription: CATEGORY_GROUP_META.communications.description,
      personalDataInvolved: true,
      integrations: comms,
    });
  }

  const payments = records.filter(r => r.category === 'payments');
  if (payments.length > 0) {
    groups.push({
      groupId: 'payments',
      groupLabel: CATEGORY_GROUP_META.payments.label,
      groupDescription: CATEGORY_GROUP_META.payments.description,
      personalDataInvolved: true,
      integrations: payments,
    });
  }

  const ai = records.filter(r =>
    r.category === 'ai_inference' || r.category === 'speech' || r.category === 'video'
  );
  if (ai.length > 0) {
    groups.push({
      groupId: 'ai_services',
      groupLabel: CATEGORY_GROUP_META.ai_services.label,
      groupDescription: CATEGORY_GROUP_META.ai_services.description,
      personalDataInvolved: false,
      integrations: ai,
    });
  }

  const analytics = records.filter(r =>
    r.category === 'analytics' || r.category === 'security' || r.category === 'moderation'
  );
  if (analytics.length > 0) {
    groups.push({
      groupId: 'analytics',
      groupLabel: CATEGORY_GROUP_META.analytics.label,
      groupDescription: CATEGORY_GROUP_META.analytics.description,
      personalDataInvolved: false,
      integrations: analytics,
    });
  }

  // Uncategorised remainder
  const coveredIds = new Set(groups.flatMap(g => g.integrations.map(i => i.id)));
  const other = records.filter(r => !coveredIds.has(r.id));
  if (other.length > 0) {
    groups.push({
      groupId: 'other',
      groupLabel: 'Other Integrations',
      groupDescription: 'Additional external services and integrations used within the CareerOS platform.',
      personalDataInvolved: other.some(r => r.personalDataInvolved),
      integrations: other,
    });
  }

  return groups;
}
