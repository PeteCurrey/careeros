import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Employer Standards — Employers | Career OS",
  description: "Career OS Employers employer Standards. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/employers/employer-standards",
  },
};

export default function EmployersStandardsPage() {
  return (
    <EditorialSubpage
      badge="EMPLOYERS &bull; STANDARDS"
      title="Employer Quality & Transparency Standards"
      description="Clear guidelines on salary transparency, feedback commitments, honest role definitions, and candidate respect across the Career OS ecosystem."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Employers', href: ROUTES.EMPLOYERS },
        { label: 'Standards', href: ROUTES.EMPLOYERS_STANDARDS },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">High-Trust Ecosystem Principles</h2>
        <p>
          Career OS maintains a curated, high-trust marketplace. Employers who participate agree to standards that foster transparency, mutual respect, and rapid feedback loops.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Employer Commitments</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Mandatory Compensation Transparency:</strong> Explicit salary bands and benefit disclosures on all matched opportunities.</li>
          <li><strong>Timely Candidate Feedback:</strong> Actionable milestone status updates for all applicants engaged through Employer Agent.</li>
          <li><strong>No Ghost Roles:</strong> Verified hiring intent for all active opportunities listed on the platform.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
