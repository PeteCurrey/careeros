import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Employer Terms — Legal | Career OS",
  description: "Career OS Legal employer Terms. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/legal/employer-terms",
  },
};

export default function LegalEmployerTermsPage() {
  return (
    <EditorialSubpage
      hideCta={true}
      badge="LEGAL &bull; EMPLOYER TERMS"
      title="Employer Platform Terms of Service"
      description="Terms governing employer and hiring organisation use of Career OS talent discovery, Employer Agent, and opportunity matching services."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Legal', href: ROUTES.LEGAL },
        { label: 'Employer Terms', href: ROUTES.LEGAL_EMPLOYER_TERMS },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Employer Agreement</h2>
        <p>
          These terms govern access to Career OS employer tools, including Employer Agent, candidate discovery, opportunity posting, and apprenticeship programme management. All employers must maintain active business registration and agree to the Employer Code of Integrity.
        </p>
        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Core Obligations</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Genuine Hiring Intent:</strong> Employers may only post roles with active, funded headcount approval.</li>
          <li><strong>Salary Transparency:</strong> Verified compensation bands are mandatory before any candidate is matched to a role.</li>
          <li><strong>Candidate Data Restrictions:</strong> Candidate profile data accessed through the platform may not be exported, shared, or resold outside Career OS systems.</li>
          <li><strong>Bias Audit Cooperation:</strong> Employers consent to participate in platform-level anonymised adverse impact statistical monitoring.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
