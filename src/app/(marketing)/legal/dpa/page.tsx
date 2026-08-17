import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dpa — Legal | Career OS",
  description: "Career OS Legal dpa. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/legal/dpa",
  },
};

export default function LegalDpaPage() {
  return (
    <EditorialSubpage
      hideCta={true}
      badge="LEGAL &bull; DPA"
      title="Data Protection Addendum"
      description="Supplementary data protection terms for enterprise and institutional partners requiring specific contractual data protection commitments."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Legal', href: ROUTES.LEGAL },
        { label: 'DPA', href: ROUTES.LEGAL_DPA },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Enterprise Data Protection Addendum</h2>
        <p>
          This Data Protection Addendum supplements the standard Career OS Terms of Service for enterprise customers and institutional partners who require specific contractual commitments in accordance with GDPR, UK GDPR, CCPA, or other applicable data protection legislation.
        </p>
        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Addendum Scope</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Lawful Basis:</strong> Confirmation of the processing lawful basis applicable to institutional deployments.</li>
          <li><strong>Data Residency:</strong> Options for EU, UK, or US data residency based on institutional requirements.</li>
          <li><strong>Retention Schedules:</strong> Agreed data retention and destruction timelines tailored to institutional policies.</li>
          <li><strong>Incident Notification:</strong> 72-hour breach notification commitment in accordance with GDPR Article 33.</li>
        </ul>
        <p className="text-xs text-[var(--color-text-tertiary)] pt-4">
          To request an executed DPA, please contact our legal team. Standard DPA turnaround is 5 business days.
        </p>
      </div>
    </EditorialSubpage>
  );
}
