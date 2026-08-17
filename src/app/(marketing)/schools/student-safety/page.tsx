import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function SchoolsSafetyPage() {
  return (
    <EditorialSubpage
      badge="SCHOOLS &bull; SAFEGUARDING"
      title="Student Safety & Minor Protection"
      description="Zero behavioral advertising, strict age-based consent models, isolated student workspaces, and full alignment with federal and state safeguarding laws."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Schools', href: ROUTES.SCHOOLS },
        { label: 'Student Safety', href: ROUTES.SCHOOLS_STUDENT_SAFETY },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Uncompromising Ethical Boundaries for Minors</h2>
        <p>
          Career OS operates with zero tolerance for commercial exploitation of minors. Student Career Twins are protected by strict institutional firewalls, verifiable parent/guardian consent flows, and complete prohibition of third-party tracking.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Safety Protocols</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>FERPA & COPPA Certification:</strong> Full compliance with US student data privacy statutes and UK/EU age-appropriate design codes.</li>
          <li><strong>Parental Transparency:</strong> Guardians retain direct visibility and revocation rights for students under statutory age thresholds.</li>
          <li><strong>No Commercial Resale:</strong> Student data is never packaged, sold, or shared with advertisers under any circumstances.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
