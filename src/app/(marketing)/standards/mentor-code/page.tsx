import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function StandardsMentorCodePage() {
  return (
    <EditorialSubpage
      badge="STANDARDS &bull; MENTOR CODE"
      title="Mentor Ethics & Guidance Code"
      description="Ethical obligations for human mentors and AI guidance models: conflict of interest prevention, safeguarding, and objective advisory."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Standards', href: ROUTES.STANDARDS },
        { label: 'Mentor Code', href: ROUTES.STANDARDS_MENTOR_CODE },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Fiduciary Duty to Candidate Advancement</h2>
        <p>
          Career mentors — whether human advisors or AI personas — operate with a fiduciary obligation to the long-term well-being and autonomous potential of the mentee.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Mentor Commitments</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Unbiased Advice:</strong> Mentors do not receive kickbacks or undisclosed incentives for directing candidates to specific institutions.</li>
          <li><strong>Safeguarding Protocol:</strong> Strict adherence to minor safeguarding rules, background vetting, and transparent communication records.</li>
          <li><strong>Constructive Candor:</strong> Delivering honest, actionable assessments of capability gaps paired with realistic roadmaps to close them.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
