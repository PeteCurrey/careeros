import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function TradesPathwayPage() {
  return (
    <EditorialSubpage
      badge="PATHWAYS &bull; SKILLED TRADES & ADVANCED CRAFT"
      title="Skilled Trades & Technical Pathways"
      description="Build high-earning, essential careers in electrical systems, precision manufacturing, plumbing, HVAC, construction management, and industrial robotics."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Pathways', href: ROUTES.PATHWAYS },
        { label: 'Trades', href: ROUTES.PATHWAYS_TRADES },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Essential Infrastructure & High-Earning Autonomy</h2>
        <p>
          Skilled trades form the backbone of modern civilization. With increasing automation and energy transition needs, certified master tradespeople enjoy unparalleled job security, rapid compensation growth, and early pathways to business ownership.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Supported Capabilities</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Licensure & Safety Vault:</strong> Storing OSHA certifications, state licenses, and specialized safety endorsements.</li>
          <li><strong>Project Deliverables:</strong> Documenting commercial installations, schematic diagnoses, and industrial site projects.</li>
          <li><strong>Contractor & Trade Venture Launch:</strong> Transitioning from journeyman to licensed contractor and enterprise founder.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
