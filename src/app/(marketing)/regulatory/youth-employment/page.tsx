import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Youth Employment — Regulatory | Career OS",
  description: "Career OS Regulatory youth Employment. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/regulatory/youth-employment",
  },
};

export default function RegulatoryYouthEmploymentPage() {
  return (
    <EditorialSubpage
      hideCta={true}
      badge="REGULATORY &bull; YOUTH EMPLOYMENT"
      title="Youth Employment Law Compliance"
      description="Adherence to federal and state child labor laws, working hour restrictions, hazardous occupation prohibitions, and parental consent requirements."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Regulatory', href: ROUTES.REGULATORY },
        { label: 'Youth Employment', href: ROUTES.REGULATORY_YOUTH_EMPLOYMENT },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Protecting Young Workers in the Platform Economy</h2>
        <p>
          Career OS ensures all opportunities matched to minor users are automatically screened against applicable child labor statutes and working hour restrictions.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Key Protections</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>FLSA Child Labor Provisions:</strong> Automatic filtering of hazardous occupations for users under 18.</li>
          <li><strong>Working Hour Guards:</strong> Prevention of matching school-term work opportunities that exceed statutory daily hour limits.</li>
          <li><strong>Parental Consent Workflow:</strong> Guardian approval required before any employment introduction is finalized for minors.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
