import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Early Careers — Employers | Career OS",
  description: "Career OS Employers early Careers. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/employers/early-careers",
  },
};

export default function EmployersEarlyCareersPage() {
  return (
    <EditorialSubpage
      badge="EMPLOYERS &bull; EARLY CAREERS"
      title="Early Careers & Graduate Pipelines"
      description="Build sustainable, diverse pipelines of high-potential school leavers, apprentices, and university graduates."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Employers', href: ROUTES.EMPLOYERS },
        { label: 'Early Careers', href: ROUTES.EMPLOYERS_EARLY_CAREERS },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Cultivating Next-Generation Leadership</h2>
        <p>
          Early career talent brings fresh perspective and long-term loyalty. Career OS connects employers directly with students actively building verified competencies in technical, commercial, and operational domains.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Pipeline Capabilities</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Direct School District Integration:</strong> Connect with secondary schools and vocational academies.</li>
          <li><strong>Cohort Onboarding Kits:</strong> Structured development milestones that guide starters through their first 90 days.</li>
          <li><strong>Retention & Progression Analytics:</strong> Measuring apprentice and graduate development velocity over time.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
