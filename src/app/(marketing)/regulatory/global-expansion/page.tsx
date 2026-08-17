import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Global Expansion — Regulatory | Career OS",
  description: "Career OS Regulatory global Expansion. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/regulatory/global-expansion",
  },
};

export default function RegulatoryGlobalExpansionPage() {
  return (
    <EditorialSubpage
      hideCta={true}
      badge="REGULATORY &bull; GLOBAL MARKETS"
      title="Global Regulatory Expansion Framework"
      description="Career OS&apos;s systematic approach to UK GDPR, EU AI Act, Canadian PIPEDA, Australian Privacy Act, and upcoming markets regulatory preparation."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Regulatory', href: ROUTES.REGULATORY },
        { label: 'Global Expansion', href: ROUTES.REGULATORY_GLOBAL_EXPANSION },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Compliance-First International Architecture</h2>
        <p>
          Career OS is architected for global regulatory diversity from day one. Our data residency model, consent framework, and processing architecture are designed to satisfy requirements across all major deployment regions.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Regional Frameworks</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>UK GDPR & ICO:</strong> UK-adapted General Data Protection Regulation with ICO registration and DPA compliance.</li>
          <li><strong>EU AI Act:</strong> High-risk AI system conformity assessments and transparent technical documentation.</li>
          <li><strong>Canada (PIPEDA / Bill C-27):</strong> Privacy law alignment and proposed Artificial Intelligence and Data Act compliance roadmap.</li>
          <li><strong>Australia (Privacy Act 1988):</strong> Australian Privacy Principles adherence and cross-border data transfer governance.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
