import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function TrustHumanOversightPage() {
  return (
    <EditorialSubpage
      badge="TRUST &bull; HUMAN OVERSIGHT"
      title="Human Agency & Oversight Architecture"
      description="Preserving human agency, accountability, and the final word in every career decision, promotion milestone, and hiring choice."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Trust', href: ROUTES.TRUST },
        { label: 'Human Oversight', href: ROUTES.TRUST_HUMAN_OVERSIGHT },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Technology as an Amplifier, Never the Decision Maker</h2>
        <p>
          Career OS strictly enforces human-in-the-loop governance. AI agents provide advisory perspectives, capability analysis, and discovery assistance, but never execute automated career decisions or irreversible rejections.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Oversight Principles</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>No Automated Dismissal:</strong> Employer Agent never unilaterally disqualifies candidates; human hiring managers review all qualified pools.</li>
          <li><strong>Individual Consent:</strong> Opportunities and introductions require explicit, un-coerced confirmation by the candidate.</li>
          <li><strong>Override & Recalibration:</strong> Candidates can dispute or adjust mentor advisory recommendations at any time.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
