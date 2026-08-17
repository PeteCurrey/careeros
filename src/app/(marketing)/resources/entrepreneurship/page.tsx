import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function ResourcesEntrepreneurshipPage() {
  return (
    <EditorialSubpage
      badge="RESOURCES &bull; VENTURE COMPENDIUM"
      title="Entrepreneurship & Venture Creation Resources"
      description="Frameworks, cap table models, intellectual property templates, and co-founder alignment agreements for venture builders."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Resources', href: ROUTES.RESOURCES },
        { label: 'Entrepreneurship', href: ROUTES.RESOURCES_ENTREPRENEURSHIP },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Foundational Tools for Company Builders</h2>
        <p>
          Turning an innovation into a sustainable venture requires structured governance from day zero. Career OS provides vetted templates and capability modeling for new enterprises.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Resource Toolkit</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Founder Alignment Agreements:</strong> Dynamic equity vesting and intellectual property assignment frameworks.</li>
          <li><strong>First 10 Hires Competency Model:</strong> Defining critical technical and commercial competencies before recruiting.</li>
          <li><strong>Investor Evidence Deck Guidelines:</strong> Structuring technical validation evidence for pre-seed and seed institutional diligence.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
