import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Industries — Resources | Career OS",
  description: "Career OS Resources industries. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/resources/industries",
  },
};

export default function ResourcesIndustriesPage() {
  return (
    <EditorialSubpage
      badge="RESOURCES &bull; SECTORS & MARKETS"
      title="Industry Intelligence & Market Landscapes"
      description="Understand macro labor trends, high-growth sectors, emerging technological disruption, and global hiring demand across global markets."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Resources', href: ROUTES.RESOURCES },
        { label: 'Industries', href: ROUTES.RESOURCES_INDUSTRIES },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Macro Industry Topology</h2>
        <p>
          Industries evolve continuously. Career OS tracks shifts in demand across key global sectors, providing early intelligence on where technological capability is creating high-growth opportunities.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Global Sectors Tracked</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Clean Energy & Climate Technology:</strong> Grid storage, solar/wind mechanics, environmental compliance.</li>
          <li><strong>Artificial Intelligence & Applied Compute:</strong> ML engineering, data infrastructure, algorithmic safety.</li>
          <li><strong>Healthcare Delivery & MedTech:</strong> Telehealth, surgical robotics, medical devices.</li>
          <li><strong>Aerospace & Defense Engineering:</strong> Avionics, satellite systems, defense manufacturing.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
