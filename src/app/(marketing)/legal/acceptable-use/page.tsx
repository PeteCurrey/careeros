import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Acceptable Use — Legal | Career OS",
  description: "Career OS Legal acceptable Use. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/legal/acceptable-use",
  },
};

export default function LegalAcceptableUsePage() {
  return (
    <EditorialSubpage
      badge="LEGAL &bull; ACCEPTABLE USE"
      title="Acceptable Use Policy"
      description="Permitted and prohibited uses of the Career OS platform, services, and professional networking capabilities."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Legal', href: ROUTES.LEGAL },
        { label: 'Acceptable Use', href: ROUTES.LEGAL_ACCEPTABLE_USE },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Platform Use Standards</h2>
        <p>
          Career OS is a professional career infrastructure platform. Users agree to engage in good faith, represent themselves accurately, and refrain from any conduct that could harm other users, employers, or the integrity of the platform ecosystem.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Prohibited Activities</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li>Misrepresenting qualifications, credentials, or work experience.</li>
          <li>Harvesting user data, contact information, or platform content via scraping or automated means.</li>
          <li>Posting fraudulent job listings, commission-only MLM opportunities, or positions requiring upfront payment.</li>
          <li>Harassing, threatening, or discriminating against other users.</li>
          <li>Circumventing security controls, authentication systems, or access permissions.</li>
        </ul>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Enforcement</h3>
        <p>
          Violations may result in temporary or permanent account suspension. Material breaches may be reported to relevant regulatory authorities.
        </p>
      </div>
    </EditorialSubpage>
  );
}
