import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Career Progression — Pathways | Career OS",
  description: "Career OS Pathways career Progression. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/pathways/career-progression",
  },
};

export default function CareerProgressionPathwayPage() {
  return (
    <EditorialSubpage
      badge="PATHWAYS &bull; ADVANCEMENT & PROMOTION"
      title="Career Progression & Promotion Pathways"
      description="Strategically advance within your domain, benchmark market compensation, close capability gaps, and prepare for senior and staff-level responsibilities."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Pathways', href: ROUTES.PATHWAYS },
        { label: 'Progression', href: ROUTES.PATHWAYS_CAREER_PROGRESSION },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Systematic Promotion Planning</h2>
        <p>
          Advancement should not be a guessing game. Career OS benchmarks your current evidence against actual industry promotion rubrics, identifying high-leverage milestones to target before your performance review.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Strategic Milestones</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Capability Gap Audit:</strong> Precise percentage alignment against next-tier role expectations.</li>
          <li><strong>Cross-Functional Influence:</strong> Logging leadership artifacts, stakeholder communications, and mentorship contributions.</li>
          <li><strong>Compensation Intelligence:</strong> Calibrating target bands against verified regional market data.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
