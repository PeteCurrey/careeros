import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Copyright — Legal | Career OS",
  description: "Career OS Legal copyright. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/legal/copyright",
  },
};

export default function LegalCopyrightPage() {
  return (
    <EditorialSubpage
      badge="LEGAL &bull; COPYRIGHT"
      title="Copyright & Intellectual Property"
      description="Ownership of Career OS platform content, user-generated career evidence, and the rules governing platform content reproduction."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Legal', href: ROUTES.LEGAL },
        { label: 'Copyright', href: ROUTES.LEGAL_COPYRIGHT },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Platform Content & User Ownership</h2>
        <p>
          Career OS owns and operates the platform software, design system, and editorial content. However, all career evidence, project deliverables, credentials, and professional records you create remain your exclusive intellectual property.
        </p>
        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Ownership Summary</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Platform IP:</strong> Career OS software architecture, AI models, matching algorithms, and editorial content are proprietary.</li>
          <li><strong>User Content:</strong> Your Career Twin data, project submissions, and Passport credentials are solely owned by you.</li>
          <li><strong>Licence Grant:</strong> You grant Career OS a limited, non-exclusive licence to process your content solely to provide platform services.</li>
          <li><strong>DMCA:</strong> We respect intellectual property rights. Copyright notices may be submitted to our legal team via the contact page.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
