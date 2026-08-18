/**
 * Integration Registry — Server-Side Data Access
 * Uses next/headers via @/lib/supabase/server — ONLY import from Server Components.
 * For 'use client' components, use registry-client.ts instead.
 */

import { createClient } from '@/lib/supabase/server';
import { PublicIntegrationRecord, AdminIntegrationRecord, IntegrationRegistryGroup, IntegrationCategory } from '@/types/integrations';
import { STATIC_INTEGRATION_REGISTRY, categoriseIntegrations } from './registry-data';

// ─── Public query (Server Components only) ────────────────────────────────

/**
 * Fetches integrations for the public transparency register.
 * Only returns records where public_display_approved = true AND production_enabled = true.
 * Falls back to static registry in dev/preview environments.
 */
export async function getPublicIntegrationRegistry(): Promise<IntegrationRegistryGroup[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('integration_registry')
      .select('*')
      .eq('active', true)
      .eq('public_display_approved', true)
      .eq('production_enabled', true)
      .eq('lifecycle_status', 'production')
      .eq('preview_only', false)
      .order('provider_name', { ascending: true });

    if (!error && data && data.length > 0) {
      const records = data.map(mapDbToPublic);
      return categoriseIntegrations(records);
    }
  } catch {
    // Offline or test environment — use static fallback
  }

  return categoriseIntegrations(STATIC_INTEGRATION_REGISTRY);
}

/**
 * Fetches ALL integrations for the admin interface.
 * Server Components only — uses authenticated session via RLS.
 */
export async function getAdminIntegrationRegistry(): Promise<AdminIntegrationRecord[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('integration_registry')
      .select('*')
      .order('provider_name', { ascending: true });

    if (!error && data) {
      return data.map(mapDbToAdmin);
    }
  } catch {
    // dev fallback
  }

  return STATIC_INTEGRATION_REGISTRY.map((r): AdminIntegrationRecord => ({
    ...r,
    description: r.publicDescription ?? '',
    purpose: '',
    internalNotes: null,
    documentationUrl: null,
    environment: 'all' as const,
    active: true,
    previewOnly: false,
    technicalReviewed: true,
    privacyReviewed: true,
    securityReviewed: true,
    legalReviewed: true,
    publicDisclosureReviewed: true,
    publicDisclosureApproved: r.productionEnabled,
    publicDisclosureRequired: false,
    termsVersion: null,
    lastTermsReviewedAt: null,
    nextReviewAt: null,
    termsChanged: false,
    reviewOwner: null,
    dataProcessingPurpose: null,
    usedFromDate: null,
    usedUntilDate: null,
    retirementReason: null,
    updatedAt: r.createdAt,
  }));
}

// ─── DB row mappers ────────────────────────────────────────────────────────

function mapDbToPublic(d: Record<string, unknown>): PublicIntegrationRecord {
  return {
    id: d.id as string,
    providerName: d.provider_name as string,
    providerSlug: d.provider_slug as string,
    serviceName: d.service_name as string,
    providerType: d.provider_type as PublicIntegrationRecord['providerType'],
    category: d.category as IntegrationCategory,
    categories: (d.categories as IntegrationCategory[]) ?? [],
    publicDisplayName: d.public_display_name as string | null,
    publicDescription: d.public_description as string | null,
    lifecycleStatus: d.lifecycle_status as PublicIntegrationRecord['lifecycleStatus'],
    productionEnabled: d.production_enabled as boolean,
    dataDirection: d.data_direction as PublicIntegrationRecord['dataDirection'],
    informationCategories: (d.information_categories as string[]) ?? [],
    personalDataInvolved: d.personal_data_involved as boolean,
    personalDataCategories: (d.personal_data_categories as string[]) ?? [],
    sensitiveDataInvolved: d.sensitive_data_involved as boolean,
    minorsDataPossible: d.minors_data_possible as boolean,
    authenticationData: d.authentication_data as boolean,
    userContent: d.user_content as boolean,
    pseudonymousIdentifiers: d.pseudonymous_identifiers as boolean,
    aggregateOnly: d.aggregate_only as boolean,
    dataRetentionSummary: d.data_retention_summary as string | null,
    authoritative_source: d.authoritative_source as string | null,
    sourceVersion: d.source_version as string | null,
    refreshFrequency: d.refresh_frequency as PublicIntegrationRecord['refreshFrequency'],
    cached: d.cached as boolean,
    expectedDelayHours: (d.expected_delay_hours as number) ?? 0,
    transformationApplied: d.transformation_applied as boolean,
    transformationDescription: d.transformation_description as string | null,
    derivedData: d.derived_data as boolean,
    careeroosProcessing: d.careeros_processing as PublicIntegrationRecord['careeroosProcessing'],
    attributionRequired: d.attribution_required as boolean,
    attributionText: d.attribution_text as string | null,
    licenseType: d.license_type as string | null,
    nonEndorsementRequired: d.non_endorsement_required as boolean,
    nonEndorsementText: d.non_endorsement_text as string | null,
    websiteUrl: d.website_url as string | null,
    sourceUrl: d.source_url as string | null,
    termsUrl: d.terms_url as string | null,
    privacyUrl: d.privacy_url as string | null,
    lastSuccessfulSync: d.last_successful_sync as string | null,
    lastReviewedAt: d.last_reviewed_at as string | null,
    createdAt: d.created_at as string,
  };
}

function mapDbToAdmin(d: Record<string, unknown>): AdminIntegrationRecord {
  return {
    ...mapDbToPublic(d),
    description: (d.description as string) ?? '',
    purpose: (d.purpose as string) ?? '',
    internalNotes: d.internal_notes as string | null,
    documentationUrl: d.documentation_url as string | null,
    environment: (d.environment as AdminIntegrationRecord['environment']) ?? 'all',
    active: d.active as boolean,
    previewOnly: d.preview_only as boolean,
    technicalReviewed: d.technical_reviewed as boolean,
    privacyReviewed: d.privacy_reviewed as boolean,
    securityReviewed: d.security_reviewed as boolean,
    legalReviewed: d.legal_reviewed as boolean,
    publicDisclosureReviewed: d.public_disclosure_reviewed as boolean,
    publicDisclosureApproved: d.public_display_approved as boolean,
    publicDisclosureRequired: d.public_disclosure_required as boolean,
    termsVersion: d.terms_version as string | null,
    lastTermsReviewedAt: d.last_terms_reviewed_at as string | null,
    nextReviewAt: d.next_review_at as string | null,
    termsChanged: d.terms_changed as boolean,
    reviewOwner: d.review_owner as string | null,
    dataProcessingPurpose: d.data_processing_purpose as string | null,
    usedFromDate: d.used_from_date as string | null,
    usedUntilDate: d.used_until_date as string | null,
    retirementReason: d.retirement_reason as string | null,
    updatedAt: d.updated_at as string,
  };
}
