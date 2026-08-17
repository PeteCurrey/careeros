import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function StandardsProfessionalConductPage() {
  return (
    <EditorialSubpage
      badge="STANDARDS &bull; CONDUCT"
      title="Professional Conduct & Communications"
      description="Guidelines for constructive communications, meeting decorum, interview professionalism, and data handling among platform participants."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Standards', href: ROUTES.STANDARDS },
        { label: 'Professional Conduct', href: ROUTES.STANDARDS_PROFESSIONAL_CONDUCT },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Fostering a Culture of Professionalism</h2>
        <p>
          High-trust professional networks rely on clear expectations regarding communication decorum, punctuality, intellectual property respect, and confidentiality.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Standards of Conduct</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Confidentiality:</strong> Respect for proprietary business information and private candidate records.</li>
          <li><strong>Punctuality & Reliability:</strong> Adhering to scheduled advisory sessions and technical interviews.</li>
          <li><strong>Professional Tone:</strong> Constructive, courteous, and inclusive discourse across all collaborative spaces.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
