import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Educators — Schools | Career OS",
  description: "Career OS Schools educators. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/schools/educators",
  },
};

export default function SchoolsEducatorsPage() {
  return (
    <EditorialSubpage
      badge="SCHOOLS &bull; EDUCATORS"
      title="Counsellor & Educator Empowerment"
      description="Amplify student guidance capacity with structured career graph intelligence, automated pathway tracking, and individualized capability maps."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Schools', href: ROUTES.SCHOOLS },
        { label: 'Educators', href: ROUTES.SCHOOLS_EDUCATORS },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Amplifying Guidance Beyond 400:1 Ratios</h2>
        <p>
          High school counsellors are often overwhelmed by administrative burdens and high caseloads. Career OS provides educators with cohort analytics, individualized capability bridges, and unbiased exploration tools to ensure every student receives high-caliber advisory.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Educator Capabilities</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Cohort Discovery Overview:</strong> Aggregated insights into student interests, target destinations, and emerging trade/academic choices.</li>
          <li><strong>Pathway Parity Controls:</strong> Ensuring technical apprenticeships and vocational colleges receive equal visibility alongside 4-year universities.</li>
          <li><strong>Early Intervention Alerts:</strong> Identifying students at risk of missing prerequisite credits for their chosen career fields.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
