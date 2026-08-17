import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function CareerChangePathwayPage() {
  return (
    <EditorialSubpage
      badge="PATHWAYS &bull; LATERAL PIVOTS & REINVENTION"
      title="Career Change & Transition Pathways"
      description="Pivot into a new sector without starting from scratch. Map transferable competencies, identify adjacent industries, and build targeted transitional evidence."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Pathways', href: ROUTES.PATHWAYS },
        { label: 'Career Change', href: ROUTES.PATHWAYS_CAREER_CHANGE },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Non-Linear Reinvention Across Industries</h2>
        <p>
          Changing careers does not mean discarding your past accomplishments. The Career Graph analyzes your existing skills taxonomy and maps direct capability bridges into emerging or adjacent fields.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Transition Architecture</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Transferable Skill Mapping:</strong> Identifying high-overlap competencies between your past domain and target industry.</li>
          <li><strong>Bridge Evidence Sprints:</strong> Focused 60–90 day projects designed to prove domain-specific capability.</li>
          <li><strong>Private Exploration Mode:</strong> Evaluating opportunities without alerting your current employer.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
