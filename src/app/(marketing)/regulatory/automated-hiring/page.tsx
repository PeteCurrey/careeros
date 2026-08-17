import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Automated Hiring — Regulatory | Career OS",
  description: "Career OS Regulatory automated Hiring. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/regulatory/automated-hiring",
  },
};

export default function RegulatoryAutomatedHiringPage() {
  return (
    <EditorialSubpage
      badge="REGULATORY &bull; AUTOMATED DECISION TOOLS"
      title="Automated Hiring Tool Compliance"
      description="NYC Local Law 144, EU AI Act High-Risk Employment AI, and emerging state-level AEDT transparency and bias audit requirements."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Regulatory', href: ROUTES.REGULATORY },
        { label: 'Automated Hiring', href: ROUTES.REGULATORY_AUTOMATED_HIRING },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Responsible Automated Employment Decision Tools</h2>
        <p>
          Automated Employment Decision Tools (AEDTs) are subject to rapidly expanding regulation globally. Career OS anticipates and exceeds current requirements across US municipal law and EU AI Act provisions.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Compliance Framework</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>NYC LL144 Bias Audit:</strong> Published annual independent bias audit assessing selection rate disparities across demographic groups.</li>
          <li><strong>Candidate Disclosure:</strong> Clear, plain-language disclosure when AI assistance influences any hiring or matching decision.</li>
          <li><strong>EU AI Act Conformity:</strong> High-risk AI system registration, technical documentation, and human oversight conformity assessments.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
