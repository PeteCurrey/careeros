import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Guardian Notice — Legal | Career OS",
  description: "Career OS Legal guardian Notice. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/legal/guardian-notice",
  },
};

export default function LegalGuardianNoticePage() {
  return (
    <EditorialSubpage
      badge="LEGAL &bull; GUARDIAN"
      title="Guardian Notice for Minor Users"
      description="Summary notice for guardians whose minor dependants access Career OS independently, outside of a school institutional partnership."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Legal', href: ROUTES.LEGAL },
        { label: 'Guardian Notice', href: ROUTES.LEGAL_GUARDIAN_NOTICE },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Notice for Guardians of Independent Minor Users</h2>
        <p>
          Some users under the age of majority access Career OS independently, without a school institutional account. This notice explains the applicable protections and guardian rights in that context.
        </p>
        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Protections in Place</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Age Verification:</strong> Users self-declare their age during registration. We apply additional protections for all declared minors.</li>
          <li><strong>No Advertising:</strong> Minor accounts are permanently excluded from all commercial targeting and third-party advertising.</li>
          <li><strong>Employment Safeguards:</strong> Opportunity matching is automatically restricted to age-appropriate, legally compliant roles.</li>
          <li><strong>Guardian Requests:</strong> Guardians may contact us to verify, amend, or delete a minor&apos;s account records at any time.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
