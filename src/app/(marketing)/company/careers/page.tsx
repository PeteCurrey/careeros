import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Careers — Company | Career OS",
  description: "Career OS Company careers. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/company/careers",
  },
};

export default function CompanyCareersPage() {
  return (
    <EditorialSubpage
      badge="COMPANY &bull; JOIN US"
      title="Careers at Career OS"
      description="We are building foundational career infrastructure. Join a team committed to equity, transparency, and building technology that genuinely serves human potential."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'About', href: ROUTES.COMPANY_ABOUT },
        { label: 'Careers', href: ROUTES.COMPANY_CAREERS },
      ]}
      ctaText="View Open Roles"
      ctaHref={ROUTES.COMPANY_CONTACT}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Building Meaningful Infrastructure</h2>
        <p>
          Career OS is in its founding phase. We are looking for unusually thoughtful engineers, product designers, and domain experts who believe that technology can genuinely improve how people navigate their working lives.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">What We Value in Our Team</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Systems Thinking:</strong> Comfort with complexity and an ability to design for long-term user trust.</li>
          <li><strong>Ethical Judgment:</strong> Genuine care for the societal implications of technology in hiring and career development.</li>
          <li><strong>Craftsmanship:</strong> A high bar for product quality, clarity of communication, and rigorous engineering.</li>
          <li><strong>Intellectual Honesty:</strong> Willingness to challenge assumptions and admit uncertainty.</li>
        </ul>

        <div className="p-6 rounded-lg bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] mt-6">
          <p className="text-sm font-semibold text-[var(--color-text-primary)]">Currently Recruiting</p>
          <p className="text-xs text-[var(--color-text-secondary)] mt-1">
            We are building our founding team across engineering, design, and partnerships. All roles are fully remote-friendly. Reach out directly with a brief introduction and examples of your work.
          </p>
        </div>
      </div>
    </EditorialSubpage>
  );
}
