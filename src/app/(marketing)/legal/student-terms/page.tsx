import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Student Terms — Legal | Career OS",
  description: "Career OS Legal student Terms. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/legal/student-terms",
  },
};

export default function LegalStudentTermsPage() {
  return (
    <EditorialSubpage
      badge="LEGAL &bull; STUDENT TERMS"
      title="Student & Minor User Terms of Service"
      description="Specific terms governing use of Career OS by students in secondary education, with age-appropriate consent and safeguarding provisions."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Legal', href: ROUTES.LEGAL },
        { label: 'Student Terms', href: ROUTES.LEGAL_STUDENT_TERMS },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Tailored Protections for Young Users</h2>
        <p>
          Students accessing Career OS through a school partnership agreement benefit from enhanced safeguarding, restricted data collection, and parental or guardian oversight provisions that exceed standard adult platform terms.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Key Provisions</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Zero Advertising:</strong> Student accounts are permanently excluded from any commercial advertising or targeted marketing.</li>
          <li><strong>Parental Access Rights:</strong> Guardians retain the right to review, amend, or request deletion of their child&apos;s records at any time.</li>
          <li><strong>Institutional Data Governance:</strong> Student records remain under joint custodianship of the school institution and the student until age majority.</li>
          <li><strong>Post-Graduation Continuity:</strong> Students may elect to transition their account to personal adult status upon reaching majority age.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
