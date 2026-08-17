import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "United States — Regulatory | Career OS",
  description: "Career OS Regulatory united States. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/regulatory/united-states",
  },
};

export default function RegulatoryUnitedStatesPage() {
  return (
    <EditorialSubpage
      badge="REGULATORY &bull; UNITED STATES"
      title="US Regulatory Alignment"
      description="Compliance with FERPA, COPPA, NYC Local Law 144, EEOC Uniform Guidelines, state-level biometric privacy laws, and FTC regulations."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Regulatory', href: ROUTES.REGULATORY },
        { label: 'United States', href: ROUTES.REGULATORY_UNITED_STATES },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Federal & State Regulatory Compliance</h2>
        <p>
          Career OS maintains legal alignment across all US federal agencies and state-level privacy statutes relevant to career technology, student data, employment screening, and automated decision systems.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Key Regulatory Frameworks</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>FERPA:</strong> Family Educational Rights and Privacy Act — governs student education record access and consent.</li>
          <li><strong>COPPA:</strong> Children&apos;s Online Privacy Protection Act — limits data collection for users under 13.</li>
          <li><strong>NYC Local Law 144:</strong> Automated Employment Decision Tool bias audit and candidate disclosure requirements.</li>
          <li><strong>Illinois BIPA:</strong> Biometric Information Privacy Act — consent requirements for any biometric data processing.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
