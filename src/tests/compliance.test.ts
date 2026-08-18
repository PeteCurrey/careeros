import { describe, it, expect } from 'vitest';
import {
  COMPLIANCE_FRAMEWORKS_REGISTRY,
  AI_DECISION_SYSTEMS_REGISTRY,
  OPERATING_CONTROLS_PILLARS,
  COMPLIANCE_DOCUMENTS_VAULT,
  COMPLIANCE_REGULATIONS_REGISTRY,
} from '@/lib/compliance/registry';
import { getSafeStatusDisplay, ComplianceFramework } from '@/types/compliance';

describe('Compliance & Assurance Registry Integrity', () => {
  it('should register all mandatory compliance frameworks with valid metadata', () => {
    expect(COMPLIANCE_FRAMEWORKS_REGISTRY.length).toBeGreaterThanOrEqual(13);

    const requiredIds = [
      'soc2-type2',
      'iso-27001',
      'iso-27701',
      'iso-42001',
      'ferpa',
      'ppra',
      'coppa',
      'hipaa',
      'nist-csf-2',
      'nist-ai-rmf',
      'us-state-privacy',
      'wcag-22-aa',
      'pci-dss',
    ];

    const registeredIds = new Set(COMPLIANCE_FRAMEWORKS_REGISTRY.map((f) => f.id));
    requiredIds.forEach((id) => {
      expect(registeredIds.has(id)).toBe(true);
    });
  });

  it('should enforce the verified claim guardrail for unverified statuses', () => {
    const unverifiedFramework: ComplianceFramework = {
      id: 'mock-framework',
      name: 'Mock Framework',
      shortName: 'Mock',
      category: 'independent_assurance',
      description: 'Test description',
      status: 'in_progress',
      scope: ['Test'],
      publiclyVisible: true,
      footerVisible: false,
      displayOrder: 99,
      lastReviewedAt: new Date().toISOString(),
    };

    const display = getSafeStatusDisplay(unverifiedFramework);
    expect(display.isVerifiedClaim).toBe(false);
    expect(display.badgeLabel).toBe('In Progress');
  });

  it('should prevent HIPAA and COPPA from claiming fake certification', () => {
    const hipaa = COMPLIANCE_FRAMEWORKS_REGISTRY.find((f) => f.id === 'hipaa');
    expect(hipaa).toBeDefined();
    expect(hipaa?.status).toBe('not_applicable');
    expect(hipaa?.footerVisible).toBe(false);

    const coppa = COMPLIANCE_FRAMEWORKS_REGISTRY.find((f) => f.id === 'coppa');
    expect(coppa).toBeDefined();
    expect(coppa?.status).not.toBe('certified');
  });

  it('should ensure all AI decision systems define human oversight and statutory attributes', () => {
    expect(AI_DECISION_SYSTEMS_REGISTRY.length).toBeGreaterThanOrEqual(4);

    AI_DECISION_SYSTEMS_REGISTRY.forEach((sys) => {
      expect(sys.systemId).toBeTruthy();
      expect(sys.modelProvider).toBeTruthy();
      expect(sys.purpose).toBeTruthy();
      expect(sys.dataRetentionRule).toBeTruthy();
      expect(Array.isArray(sys.jurisdictions)).toBe(true);
      expect(Array.isArray(sys.knownLimitations)).toBe(true);

      // Consequential systems like talent discovery must require human review
      if (sys.decisionType === 'consequential') {
        expect(sys.humanReviewRequired).toBe(true);
        expect(sys.biasAuditRequired).toBe(true);
      }
    });
  });

  it('should define all 6 technical operating control pillars', () => {
    expect(OPERATING_CONTROLS_PILLARS.length).toBe(6);

    const requiredPillars = [
      'identity-access',
      'data-protection',
      'secure-development',
      'monitoring-response',
      'vendor-governance',
      'ai-governance',
    ];

    const registeredPillarIds = new Set(OPERATING_CONTROLS_PILLARS.map((p) => p.id));
    requiredPillars.forEach((id) => {
      expect(registeredPillarIds.has(id)).toBe(true);
    });
  });

  it('should mark sensitive audit reports as requiring NDA in the documents vault', () => {
    const soc2Doc = COMPLIANCE_DOCUMENTS_VAULT.find((d) => d.frameworkId === 'soc2-type2');
    expect(soc2Doc).toBeDefined();
    expect(soc2Doc?.requiresNda).toBe(true);
    expect(soc2Doc?.isPublic).toBe(false);

    const dpaDoc = COMPLIANCE_DOCUMENTS_VAULT.find((d) => d.documentType === 'dpa');
    expect(dpaDoc).toBeDefined();
    expect(dpaDoc?.isPublic).toBe(true);
  });
});
