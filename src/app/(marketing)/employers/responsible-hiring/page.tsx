import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function EmployersResponsibleHiringPage() {
  return (
    <EditorialSubpage
      badge="EMPLOYERS &bull; COMPLIANCE & AI ETHICS"
      title="Responsible AI Hiring & Regulatory Alignment"
      description="Achieve full compliance with NYC Local Law 144, EU AI Act High-Risk Employment AI requirements, and EEOC disparate impact standards."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Employers', href: ROUTES.EMPLOYERS },
        { label: 'Responsible Hiring', href: ROUTES.EMPLOYERS_RESPONSIBLE_HIRING },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Auditable Decision Support Framework</h2>
        <p>
          Automated employment decision tools (AEDTs) require rigorous independent bias audits and clear candidate disclosure. Career OS is architected specifically to satisfy emerging global hiring regulations.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Regulatory Alignment Pillars</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>NYC LL 144 Independent Bias Audit Logs:</strong> Published annual adverse impact ratio audits across gender, race, and ethnicity.</li>
          <li><strong>EU AI Act Transparency:</strong> Candidates are notified when AI decision support is utilized and provided meaningful explanations.</li>
          <li><strong>EEOC Uniform Guidelines:</strong> Focus on validated job-related skills and demonstrable competency evidence.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
