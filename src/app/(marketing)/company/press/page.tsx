import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Press — Company | Career OS",
  description: "Career OS Company press. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/company/press",
  },
};

export default function CompanyPressPage() {
  return (
    <EditorialSubpage
      badge="COMPANY &bull; PRESS & MEDIA"
      title="Press & Media Resources"
      description="Brand assets, executive bios, press releases, and media contacts for journalists covering career technology and responsible AI."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'About', href: ROUTES.COMPANY_ABOUT },
        { label: 'Press', href: ROUTES.COMPANY_PRESS },
      ]}
      ctaText="Contact Press Team"
      ctaHref={ROUTES.COMPANY_CONTACT}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Media Enquiries & Brand Assets</h2>
        <p>
          Career OS is building universal career infrastructure at a pivotal moment in AI and employment technology. We welcome rigorous editorial coverage across career development, responsible AI, and workforce equity.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Press Resources</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Brand Guidelines:</strong> Official logo usage, color palette, and typography specifications available on request.</li>
          <li><strong>Executive Profiles:</strong> Founder and leadership biographies and approved photography.</li>
          <li><strong>Product Demonstrations:</strong> Arrange editorial walkthrough sessions with our product team.</li>
          <li><strong>Data & Research:</strong> Access to career mobility research, equity metrics, and platform statistics.</li>
        </ul>

        <div className="p-6 rounded-lg bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] mt-6">
          <p className="text-sm font-semibold text-[var(--color-text-primary)]">Press Contact</p>
          <p className="text-xs text-[var(--color-text-secondary)] mt-1">
            For all press and media enquiries, please reach out via our contact page. We aim to respond within 24 hours on business days.
          </p>
        </div>
      </div>
    </EditorialSubpage>
  );
}
