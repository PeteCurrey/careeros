import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';
import Link from 'next/link';

export default function CollegePathwayPage() {
  return (
    <EditorialSubpage
      badge="PATHWAYS &bull; HIGHER EDUCATION"
      title="Community & Technical College Pathways"
      description="Leverage 2-year degrees, articulated credit transfers, and targeted technical certificates to enter high-demand careers or transfer to 4-year institutions."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Pathways', href: ROUTES.PATHWAYS },
        { label: 'College', href: ROUTES.PATHWAYS_COLLEGE },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Strategic Higher Education Architecture</h2>
        <p>
          Community and technical colleges provide an accessible, cost-effective launchpad for modern careers. Career OS maps credit articulation agreements, certificate-to-degree bridges, and direct employer hiring partnerships to ensure your coursework compounds into demonstrable professional equity.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Key Opportunities in College Pathways</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Direct Transfer Articulation:</strong> Seamless credit progression into accredited university bachelor programs.</li>
          <li><strong>Applied Associate Degrees:</strong> Practical programs aligned with local industry and technology clusters.</li>
          <li><strong>Micro-Certifications:</strong> Rapid capability building in cloud systems, nursing support, and industrial automation.</li>
        </ul>

        <div className="p-6 rounded-lg bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] space-y-2 mt-6">
          <h4 className="font-bold text-sm text-[var(--color-text-primary)]">Verified Evidence Integration</h4>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Every course milestone and technical laboratory project completed at college can be anchored directly in your Career Passport, giving future employers verified proof of your hands-on competencies.
          </p>
        </div>
      </div>
    </EditorialSubpage>
  );
}
