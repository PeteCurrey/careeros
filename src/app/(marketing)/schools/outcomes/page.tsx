import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Outcomes — Schools | Career OS",
  description: "Career OS Schools outcomes. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/schools/outcomes",
  },
};

export default function SchoolsOutcomesPage() {
  return (
    <EditorialSubpage
      badge="SCHOOLS &bull; OUTCOMES & METRICS"
      title="Longitudinal Career Outcomes & Metrics"
      description="Measure post-secondary readiness, apprenticeship completion rates, and alumni career satisfaction without invasive personal surveillance."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Schools', href: ROUTES.SCHOOLS },
        { label: 'Outcomes', href: ROUTES.SCHOOLS_OUTCOMES },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Evaluating Real-World Student Success</h2>
        <p>
          State reporting frequently lacks visibility into what happens after high school graduation. Career OS provides privacy-preserving aggregated outcome metrics across trade employment, collegiate retention, and earnings trajectory.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Outcome Insights</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Pathway Conversion Rates:</strong> Real data on how many students enter apprenticeships vs 4-year degrees.</li>
          <li><strong>Career Longevity & Mobility:</strong> Understanding long-term career compounding of graduating cohorts.</li>
          <li><strong>District Accountability Dashboards:</strong> Automated reporting formatted for state education board requirements.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
