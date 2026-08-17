import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function ResourcesGuidesPage() {
  return (
    <EditorialSubpage
      badge="RESOURCES &bull; PLAYBOOKS"
      title="Strategic Career Guides & Playbooks"
      description="Practical tactical playbooks for negotiating executive compensation, transitioning into technical leadership, and building verifiable project evidence."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Resources', href: ROUTES.RESOURCES },
        { label: 'Guides', href: ROUTES.RESOURCES_GUIDES },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Tactical Playbooks for Strategic Advancement</h2>
        <p>
          Career OS guides are written by experienced domain practitioners. They offer actionable frameworks, conversation templates, and evidence architectures for every career inflection point.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Featured Guides</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>The Evidence-Based Promotion Strategy:</strong> How to document technical impact that makes senior promotion undeniable.</li>
          <li><strong>Executive Compensation Negotiation:</strong> Benchmarking base, equity vesting schedules, and severance provisions.</li>
          <li><strong>The Non-Traditional Switcher Guide:</strong> Translating military, hospitality, or teaching experience into engineering and operations.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
