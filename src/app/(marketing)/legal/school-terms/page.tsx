import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "School Terms — Legal | Career OS",
  description: "Career OS Legal school Terms. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/legal/school-terms",
  },
};

export default function LegalSchoolTermsPage() {
  return (
    <EditorialSubpage
      badge="LEGAL &bull; SCHOOL TERMS"
      title="School & Institution Agreement"
      description="Terms governing Career OS deployment within schools, multi-academy trusts, and district educational authorities."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Legal', href: ROUTES.LEGAL },
        { label: 'School Terms', href: ROUTES.LEGAL_SCHOOL_TERMS },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Institutional Deployment Agreement</h2>
        <p>
          These terms govern the relationship between Career OS and educational institutions deploying the platform for student career development. Schools accept these terms on behalf of their institution when activating a school partnership account.
        </p>
        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Key Provisions</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Data Processing Role:</strong> The school acts as Data Controller for student education records; Career OS acts as Data Processor.</li>
          <li><strong>Staff Responsibilities:</strong> Designated administrators are responsible for provisioning accounts and managing student access permissions.</li>
          <li><strong>No Commercialisation:</strong> Career OS will not use student data for any commercial purpose, advertising, or third-party data sale.</li>
          <li><strong>Exit & Data Return:</strong> On termination, all student records are exported and returned to the institution within 30 days.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
