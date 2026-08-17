import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Employer Code — Standards | Career OS",
  description: "Career OS Standards employer Code. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/standards/employer-code",
  },
};

export default function StandardsEmployerCodePage() {
  return (
    <EditorialSubpage
      hideCta={true}
      badge="STANDARDS &bull; EMPLOYER CODE"
      title="Employer Code of Integrity"
      description="Requirements for participating hiring organizations: genuine hiring intent, transparent salary bands, prompt candidate communication, and respectful evaluation."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Standards', href: ROUTES.STANDARDS },
        { label: 'Employer Code', href: ROUTES.STANDARDS_EMPLOYER_CODE },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Fair, Transparent, and Respectful Hiring</h2>
        <p>
          Employers using Career OS agree to uphold rigorous standards of candidate respect, eliminating ghost job listings, predatory unpaid work trials, and excessive interview stages.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Employer Obligations</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Total Salary Band Transparency:</strong> Explicit compensation ranges required on all opportunities before matching.</li>
          <li><strong>Respectful Interview Sprints:</strong> Maximum limits on test assignments; unpaid commercial work strictly prohibited.</li>
          <li><strong>Deterministic Feedback:</strong> Applicants who interview receive clear status updates and feedback.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
