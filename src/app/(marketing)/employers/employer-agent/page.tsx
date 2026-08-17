import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function EmployerAgentPage() {
  return (
    <EditorialSubpage
      badge="EMPLOYERS &bull; EMPLOYER AGENT"
      title="Employer Agent Decision Support"
      description="Autonomous, structured candidate-role capability matching with transparent decision factors and strict human oversight."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Employers', href: ROUTES.EMPLOYERS },
        { label: 'Employer Agent', href: ROUTES.EMPLOYERS_EMPLOYER_AGENT },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Transparent Alignment, Not Black-Box Filtering</h2>
        <p>
          Employer Agent works on behalf of your hiring managers to evaluate applicant evidence against authentic role competency requirements. Every candidate recommendation includes full factor provenance, highlighting exact strengths and developmental bridges.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Core Capabilities</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Factor Provenance:</strong> Clear explanations of why a candidate was ranked, detailing verified coursework and project evidence.</li>
          <li><strong>Human Agency Preservation:</strong> Employer Agent never makes automated rejections; human hiring managers retain full decision autonomy.</li>
          <li><strong>Bias Mitigation:</strong> Demographic attributes are masked during initial screening to focus strictly on demonstrated capability.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
