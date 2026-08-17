import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function EmployersApprenticeshipsPage() {
  return (
    <EditorialSubpage
      badge="EMPLOYERS &bull; APPRENTICESHIP SCHEMES"
      title="Employer Apprenticeship Schemes"
      description="Deploy scalable, government-aligned technical apprenticeship programs that build loyal, highly skilled workforces from the ground up."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Employers', href: ROUTES.EMPLOYERS },
        { label: 'Apprenticeships', href: ROUTES.EMPLOYERS_APPRENTICESHIPS },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Building Custom Technical Talent Pipelines</h2>
        <p>
          Apprenticeships allow enterprises to mold talent to their exact architectural, operational, and safety standards. Career OS automates competency logging, levy compliance, and academic partner coordination.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Apprenticeship Management</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Curriculum & On-the-Job Alignment:</strong> Synchronizing workplace tasks with vocational qualification modules.</li>
          <li><strong>Supervisor Sign-Off Portal:</strong> Streamlined mobile review of apprentice deliverables and safety checks.</li>
          <li><strong>Levy & Funding Optimization:</strong> Automated audit records for state and federal apprenticeship subsidies.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
