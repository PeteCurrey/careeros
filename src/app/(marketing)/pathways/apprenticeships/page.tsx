import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function ApprenticeshipsPathwayPage() {
  return (
    <EditorialSubpage
      badge="PATHWAYS &bull; EARN WHILE YOU LEARN"
      title="Apprenticeship Pathways"
      description="Combine paid employment with rigorous structured learning, earning debt-free qualifications and verified on-the-job competencies."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Pathways', href: ROUTES.PATHWAYS },
        { label: 'Apprenticeships', href: ROUTES.PATHWAYS_APPRENTICESHIPS },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">The Premier Route to Debt-Free Mastery</h2>
        <p>
          Apprenticeships are rapidly expanding across engineering, software architecture, healthcare, finance, and advanced manufacturing. Career OS treats apprenticeship credentials with equal prestige to traditional collegiate degrees.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Apprenticeship Dimensions in Career OS</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>On-the-Job Evidence Vault:</strong> Real-time logging of workplace deliverables, supervisor sign-offs, and compliance milestones.</li>
          <li><strong>Dual Qualification Tracking:</strong> Managing academic coursework alongside industrial certifications.</li>
          <li><strong>Direct Pathway to Leadership:</strong> Mapping transitions from apprentice to site supervisor, specialist engineer, and operations director.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
