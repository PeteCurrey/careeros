import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function LeadershipPathwayPage() {
  return (
    <EditorialSubpage
      badge="PATHWAYS &bull; EXECUTIVE & ORGANISATIONAL LEADERSHIP"
      title="Leadership & Management Pathways"
      description="Transition from individual contributor to engineering manager, director, vice president, and C-suite executive with structured leadership evidence."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Pathways', href: ROUTES.PATHWAYS },
        { label: 'Leadership', href: ROUTES.PATHWAYS_LEADERSHIP },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Cultivating Executive Judgment and Organizational Impact</h2>
        <p>
          Leadership requires a fundamental shift from direct execution to organizational strategy, talent development, and capital allocation. Career OS tracks leadership milestones, governance credentials, and cross-functional outcomes.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Key Leadership Competencies</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Strategic Capital & Budgeting:</strong> Multi-team resource allocation and operational forecasting.</li>
          <li><strong>Organizational Culture & Governance:</strong> Demonstrated talent retention, inclusive hiring, and compliance frameworks.</li>
          <li><strong>Board & Investor Communication:</strong> Executive synthesis and business risk management.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
