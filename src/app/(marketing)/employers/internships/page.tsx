import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function EmployersInternshipsPage() {
  return (
    <EditorialSubpage
      badge="EMPLOYERS &bull; INTERNSHIPS"
      title="High-Impact Internship Programs"
      description="Design meaningful summer and term-time internships anchored in measurable project deliverables and real capability development."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Employers', href: ROUTES.EMPLOYERS },
        { label: 'Internships', href: ROUTES.EMPLOYERS_INTERNSHIPS },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Transforming Internships into Real Capability</h2>
        <p>
          Internships should be mutually transformative. Career OS helps employers define clear project scopes that produce demonstrable deliverables for students while evaluating authentic fit for permanent roles.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Program Features</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Structured Project Milestones:</strong> Clearly defined weekly deliverables that translate into Career Passport evidence.</li>
          <li><strong>Mentor & Sponsor Pairing:</strong> Connecting interns with internal team mentors for continuous feedback.</li>
          <li><strong>Seamless Conversion:</strong> Fast-tracking top-performing interns directly into full-time offers with zero re-screening.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
