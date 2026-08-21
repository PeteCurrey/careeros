import { describe, it, expect } from 'vitest';
import {
  STATIC_INTEGRATION_REGISTRY,
  categoriseIntegrations,
} from '@/lib/integrations/registry-data';
import {
  PROVIDER_TYPE_LABELS,
  LIFECYCLE_STATUS_LABELS,
  DATA_DIRECTION_LABELS,
  PROCESSING_LABELS,
  PublicIntegrationRecord,
} from '@/types/integrations';

describe('Data Sources & Integrations Registry', () => {
  it('contains valid static seed data for authoritative sources and infrastructure', () => {
    expect(STATIC_INTEGRATION_REGISTRY.length).toBeGreaterThanOrEqual(5);

    const onet = STATIC_INTEGRATION_REGISTRY.find((r) => r.id === 'onet');
    expect(onet).toBeDefined();
    expect(onet?.lifecycleStatus).toBe('production');
    expect(onet?.dataDirection).toBe('inbound');
    expect(onet?.attributionRequired).toBe(true);
    expect(onet?.personalDataInvolved).toBe(false);

    const careeronestop = STATIC_INTEGRATION_REGISTRY.find((r) => r.id === 'careeronestop');
    expect(careeronestop).toBeDefined();
    expect(careeronestop?.lifecycleStatus).toBe('production');
    expect(careeronestop?.nonEndorsementRequired).toBe(true);

    const stripe = STATIC_INTEGRATION_REGISTRY.find((r) => r.id === 'stripe');
    expect(stripe).toBeDefined();
    expect(stripe?.lifecycleStatus).toBe('planned');
    expect(stripe?.productionEnabled).toBe(false);
  });

  it('categorizes integrations accurately into logical groups without data duplication', () => {
    const groups = categoriseIntegrations(STATIC_INTEGRATION_REGISTRY);
    expect(groups.length).toBeGreaterThan(0);

    const occupationalGroup = groups.find((g) => g.groupId === 'occupational_data');
    expect(occupationalGroup).toBeDefined();
    expect(occupationalGroup?.personalDataInvolved).toBe(false);
    expect(occupationalGroup?.integrations.some((i) => i.id === 'onet')).toBe(true);
    expect(occupationalGroup?.integrations.some((i) => i.id === 'careeronestop')).toBe(true);

    const infraGroup = groups.find((g) => g.groupId === 'infrastructure');
    expect(infraGroup).toBeDefined();
    expect(infraGroup?.personalDataInvolved).toBe(true);
    expect(infraGroup?.integrations.some((i) => i.id === 'supabase')).toBe(true);
  });

  it('enforces required display labels mapping across all key enum values', () => {
    expect(PROVIDER_TYPE_LABELS.public_data_source).toBe('Public Data Source');
    expect(PROVIDER_TYPE_LABELS.infrastructure_provider).toBe('Infrastructure Provider');
    expect(LIFECYCLE_STATUS_LABELS.production).toBe('Live in Production');
    expect(LIFECYCLE_STATUS_LABELS.planned).toBe('Planned');
    expect(DATA_DIRECTION_LABELS.inbound).toBe('Inbound (CareerOS receives data)');
    expect(PROCESSING_LABELS.normalized).toBe('Normalized — standardized to CareerOS taxonomy');
  });

  it('correctly tracks personal data and minor safeguards across integrations', () => {
    const personalDataSources = STATIC_INTEGRATION_REGISTRY.filter((r) => r.personalDataInvolved);
    const nonPersonalDataSources = STATIC_INTEGRATION_REGISTRY.filter((r) => !r.personalDataInvolved);

    // O*NET and BLS-style public datasets must never touch personal data
    expect(nonPersonalDataSources.some((s) => s.id === 'onet')).toBe(true);
    expect(nonPersonalDataSources.some((s) => s.id === 'careeronestop')).toBe(true);

    // Storage/auth infrastructure handling accounts has personal data flags true
    expect(personalDataSources.some((s) => s.id === 'supabase')).toBe(true);
    expect(personalDataSources.some((s) => s.id === 'resend')).toBe(true);
  });
});
