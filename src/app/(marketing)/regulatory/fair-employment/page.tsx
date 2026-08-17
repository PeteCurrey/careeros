import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Fair Employment — Regulatory | Career OS",
  description: "Career OS Regulatory fair Employment. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/regulatory/fair-employment",
  },
};

export default function RegulatoryFairEmploymentPage() {
  return (
    <EditorialSubpage
      hideCta={true}
      badge="REGULATORY &bull; FAIR EMPLOYMENT"
      title="Fair Employment & Equal Opportunity Compliance"
      description="EEOC Uniform Guidelines, Title VII, ADA, ADEA, and international equal employment legislation compliance across all hiring surfaces."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Regulatory', href: ROUTES.REGULATORY },
        { label: 'Fair Employment', href: ROUTES.REGULATORY_FAIR_EMPLOYMENT },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Principled Hiring Under Equal Opportunity Law</h2>
        <p>
          Career OS&apos;s matching architecture is specifically designed to satisfy the EEOC Uniform Guidelines on Employee Selection Procedures, ensuring selection criteria are valid, job-related, and statistically free of adverse impact.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Regulatory Alignment</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Title VII:</strong> No discrimination based on race, color, religion, sex, or national origin in employment matching.</li>
          <li><strong>ADA Reasonable Accommodation:</strong> Accessible interview and application flows for candidates with disabilities.</li>
          <li><strong>ADEA:</strong> Age Discrimination in Employment Act protections for workers 40 and over.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
