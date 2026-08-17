import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Opportunity Standards — Standards | Career OS",
  description: "Career OS Standards opportunity Standards. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/standards/opportunity-standards",
  },
};

export default function StandardsOpportunityStandardsPage() {
  return (
    <EditorialSubpage
      badge="STANDARDS &bull; OPPORTUNITY VETTING"
      title="Opportunity Vetting & Quality Standards"
      description="Systematic screening protocols to eliminate predatory recruiting, multi-level marketing scams, and fraudulent job postings."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Standards', href: ROUTES.STANDARDS },
        { label: 'Opportunity Standards', href: ROUTES.STANDARDS_OPPORTUNITY_STANDARDS },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Zero Tolerance for Predatory Listings</h2>
        <p>
          Every opportunity matched through Career OS undergoes cryptographic entity verification and automated semantic vetting to ensure legitimate employment terms, verified business registry, and compliant wage offerings.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Vetting Criteria</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Entity Verification:</strong> Employer tax ID and registered business identity verified prior to listing opportunities.</li>
          <li><strong>Prohibited Categories:</strong> Zero tolerance for commission-only Multi-Level Marketing (MLM), upfront training fee requirements, or pay-to-work schemes.</li>
          <li><strong>Wage Law Compliance:</strong> Guaranteed adherence to prevailing local, state, and national minimum wage mandates.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
