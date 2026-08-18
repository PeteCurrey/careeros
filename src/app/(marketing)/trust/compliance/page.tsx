import React from 'react';
import type { Metadata } from 'next';
import { TrustSubnav } from '@/components/trust/TrustSubnav';
import { ComplianceHero } from '@/components/compliance/ComplianceHero';
import { IndependentAssuranceSection } from '@/components/compliance/IndependentAssuranceSection';
import { StudentPrivacySection } from '@/components/compliance/StudentPrivacySection';
import { CybersecurityResilienceSection } from '@/components/compliance/CybersecurityResilienceSection';
import { ResponsibleAIRiskSection } from '@/components/compliance/ResponsibleAIRiskSection';
import { AIDecisionGovernanceRegistryView } from '@/components/compliance/AIDecisionGovernanceRegistryView';
import { StatePrivacySection } from '@/components/compliance/StatePrivacySection';
import { AccessibilityPaymentSection } from '@/components/compliance/AccessibilityPaymentSection';
import { EngineeringControlsMatrix } from '@/components/compliance/EngineeringControlsMatrix';
import { EvidenceDocumentsVaultView } from '@/components/compliance/EvidenceDocumentsVaultView';
import { ComplianceContactSection } from '@/components/compliance/ComplianceContactSection';
import {
  COMPLIANCE_FRAMEWORKS_REGISTRY,
  AI_DECISION_SYSTEMS_REGISTRY,
  OPERATING_CONTROLS_PILLARS,
  COMPLIANCE_DOCUMENTS_VAULT,
} from '@/lib/compliance/registry';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Compliance & Assurance | CareerOS',
  description:
    'Learn how CareerOS approaches information security, privacy, student data protection, responsible AI, accessibility and regulatory compliance across US school districts, colleges, and enterprise employers.',
  alternates: { canonical: 'https://career-os.com/trust/compliance' },
  openGraph: {
    title: 'Compliance & Assurance | CareerOS',
    description:
      'Trust should be verifiable. Explore independent assurance, SOC 2, ISO/IEC 42001 AI governance, FERPA readiness, and US regulatory controls.',
    url: 'https://career-os.com/trust/compliance',
    type: 'website',
  },
};

export default function ComplianceAndAssurancePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'CareerOS Compliance & Assurance Framework',
    description:
      'Overview of CareerOS security certifications, privacy management systems, responsible AI governance (ISO/IEC 42001), and student privacy controls.',
    url: 'https://career-os.com/trust/compliance',
    author: {
      '@type': 'Organization',
      name: 'CareerOS Trust & Assurance Office',
      url: 'https://career-os.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Career OS Inc.',
      url: 'https://career-os.com',
    },
    about: [
      { '@type': 'Thing', name: 'Information Security Management System' },
      { '@type': 'Thing', name: 'Artificial Intelligence Governance' },
      { '@type': 'Thing', name: 'Family Educational Rights and Privacy Act' },
      { '@type': 'Thing', name: 'SOC 2 Type II' },
      { '@type': 'Thing', name: 'ISO/IEC 42001' },
    ],
  };

  const nistCsfFramework = COMPLIANCE_FRAMEWORKS_REGISTRY.find((f) => f.id === 'nist-csf-2');
  const nistAiFramework = COMPLIANCE_FRAMEWORKS_REGISTRY.find((f) => f.id === 'nist-ai-rmf');
  const statePrivacyFramework = COMPLIANCE_FRAMEWORKS_REGISTRY.find((f) => f.id === 'us-state-privacy');
  const wcagFramework = COMPLIANCE_FRAMEWORKS_REGISTRY.find((f) => f.id === 'wcag-22-aa');
  const pciFramework = COMPLIANCE_FRAMEWORKS_REGISTRY.find((f) => f.id === 'pci-dss');

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Trust Center Local Sub-Navigation */}
      <TrustSubnav />

      {/* Hero Section */}
      <ComplianceHero />

      {/* Main Assurance Content Stream */}
      <div className="container-editorial py-16 md:py-24 space-y-24">
        {/* 1. Independent Assurance & Recognised Standards (SOC 2, ISO 27001, ISO 27701, ISO 42001) */}
        <IndependentAssuranceSection
          frameworks={COMPLIANCE_FRAMEWORKS_REGISTRY}
          onRequestAccess={() => {}}
        />

        {/* 2. US Student Privacy & Education (FERPA, PPRA, COPPA, HIPAA) */}
        <StudentPrivacySection
          frameworks={COMPLIANCE_FRAMEWORKS_REGISTRY}
          onRequestAccess={() => {}}
        />

        {/* 3. Cybersecurity & Operational Resilience (NIST CSF 2.0) */}
        <CybersecurityResilienceSection framework={nistCsfFramework} />

        {/* 4. Responsible AI Risk Management (NIST AI RMF) */}
        <ResponsibleAIRiskSection framework={nistAiFramework} />

        {/* 5. AI in Employment & Consequential Decisions (NYC LL144, Illinois AIVA, Colorado SB 24-205) */}
        <AIDecisionGovernanceRegistryView systems={AI_DECISION_SYSTEMS_REGISTRY} />

        {/* 6. US State Privacy Rights Readiness (CCPA/CPRA, CPA, VCDPA) */}
        <StatePrivacySection framework={statePrivacyFramework} />

        {/* 7. Accessibility (WCAG 2.2 AA) & Payment Security (PCI DSS) */}
        <AccessibilityPaymentSection
          wcagFramework={wcagFramework}
          pciFramework={pciFramework}
        />

        {/* 8. How Compliance Becomes Engineering (6 Capability Areas) */}
        <EngineeringControlsMatrix pillars={OPERATING_CONTROLS_PILLARS} />

        {/* 9. Compliance Documents & Audit Evidence Vault */}
        <EvidenceDocumentsVaultView documents={COMPLIANCE_DOCUMENTS_VAULT} />

        {/* 10. Direct Compliance & Procurement Contact Channels */}
        <ComplianceContactSection />
      </div>
    </div>
  );
}
