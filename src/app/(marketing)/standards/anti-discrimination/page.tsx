import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Anti Discrimination — Standards | Career OS",
  description: "Career OS Standards anti Discrimination. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/standards/anti-discrimination",
  },
};

export default function StandardsAntiDiscriminationPage() {
  return (
    <EditorialSubpage
      hideCta={true}
      badge="STANDARDS &bull; EQUALITY"
      title="Anti-Discrimination & Equal Opportunity Policy"
      description="Zero tolerance for discrimination based on race, gender, age, disability, sexual orientation, socio-economic background, or non-traditional educational path."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Standards', href: ROUTES.STANDARDS },
        { label: 'Anti-Discrimination', href: ROUTES.STANDARDS_ANTI_DISCRIMINATION },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Universal Access and Systemic Equity</h2>
        <p>
          Career OS prohibits all forms of unlawful and unethical discrimination in matching, mentoring, opportunity posting, and candidate evaluation.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Policy Dimensions</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Protected Characteristics:</strong> Complete protection across age, race, ethnicity, gender identity, religion, veteran status, and disability.</li>
          <li><strong>Pathway Parity:</strong> Equal opportunity matching regardless of whether skills were acquired through vocational apprenticeship or university study.</li>
          <li><strong>Reporting & Enforcement:</strong> Rapid investigation and immediate suspension of accounts that violate anti-discrimination policies.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
