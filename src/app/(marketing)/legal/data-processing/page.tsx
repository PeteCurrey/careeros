import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Data Processing — Legal | Career OS",
  description: "Career OS Legal data Processing. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/legal/data-processing",
  },
};

export default function LegalDataProcessingPage() {
  return (
    <EditorialSubpage
      badge="LEGAL &bull; DATA PROCESSING"
      title="Data Processing Agreement (DPA)"
      description="GDPR Article 28-compliant data processing agreement for institutional and enterprise partners deploying Career OS."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Legal', href: ROUTES.LEGAL },
        { label: 'Data Processing', href: ROUTES.LEGAL_DATA_PROCESSING },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">GDPR-Compliant Processing Framework</h2>
        <p>
          This Data Processing Agreement governs the relationship between Career OS (as Data Processor) and institutional partners (as Data Controllers) under GDPR Article 28 and UK GDPR Schedule 2 requirements.
        </p>
        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Processing Conditions</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Purpose Limitation:</strong> Data processed exclusively for the career development and matching services described in the partnership agreement.</li>
          <li><strong>Sub-processors:</strong> Full list of approved sub-processors (cloud infrastructure, authentication, analytics) maintained and updated with 30-days notice.</li>
          <li><strong>International Transfers:</strong> Standard Contractual Clauses applied for any data transfers outside the EEA or UK.</li>
          <li><strong>Security Measures:</strong> Technical and organisational security controls documented and updated annually.</li>
        </ul>
        <p className="text-xs text-[var(--color-text-tertiary)] pt-4">
          Institutional partners requiring a signed DPA should contact our legal team via the contact page.
        </p>
      </div>
    </EditorialSubpage>
  );
}
