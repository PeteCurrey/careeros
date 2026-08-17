import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function RegulatoryStudentPrivacyPage() {
  return (
    <EditorialSubpage
      badge="REGULATORY &bull; STUDENT DATA"
      title="Student Data Privacy Compliance"
      description="Full alignment with FERPA, COPPA, SOPIPA, UK GDPR children's provisions, and Age Appropriate Design Code requirements."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Regulatory', href: ROUTES.REGULATORY },
        { label: 'Student Privacy', href: ROUTES.REGULATORY_STUDENT_PRIVACY },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Protecting Student Records Across Jurisdictions</h2>
        <p>
          Student data is subject to the strictest regulatory protections globally. Career OS operates in full compliance with federal, state, and international student privacy regimes.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Student Privacy Standards</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>FERPA Compliance:</strong> Education records only accessible to authorized school officials and with parent/student consent.</li>
          <li><strong>SOPIPA:</strong> Student Online Personal Information Protection Act — prohibition on targeted advertising to students.</li>
          <li><strong>UK Age Appropriate Design Code:</strong> Privacy-by-default for all minor users regardless of geographic origin.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
