import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mission — Company | Career OS",
  description: "Career OS Company mission. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/company/mission",
  },
};

export default function CompanyMissionPage() {
  return (
    <EditorialSubpage
      badge="COMPANY &bull; MISSION"
      title="Mission & Guiding Principles"
      description="Building universal, equitable career infrastructure that serves human potential across a lifetime — not just the next job application."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'About', href: ROUTES.COMPANY_ABOUT },
        { label: 'Mission', href: ROUTES.COMPANY_MISSION },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">A Lifetime Platform for Human Potential</h2>
        <p>
          The current career infrastructure — résumés, keyword ATS filters, anonymous job boards — was designed for a world that no longer exists. Career OS is building the operating system that modern careers actually deserve: one that tracks genuine capability, enables lifelong growth, and routes exceptional people to the opportunities most aligned with who they truly are.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Our Guiding Principles</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Equity by Default:</strong> A student from a rural comprehensive school deserves the same quality of career guidance as a graduate from an elite university.</li>
          <li><strong>Capability over Credentials:</strong> What you can demonstrably do matters more than the institution that taught you.</li>
          <li><strong>Privacy as Architecture:</strong> Career data belongs entirely and permanently to the individual.</li>
          <li><strong>Technology in Service of Humans:</strong> AI augments human judgment; it never replaces it.</li>
        </ul>

        <div className="p-6 rounded-lg bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] mt-6">
          <p className="text-sm italic text-[var(--color-text-secondary)]">
            &ldquo;Career OS is not a job board with an AI sticker. It is permanent career infrastructure — a lifelong partner for every professional transition, reinvention, and aspiration.&rdquo;
          </p>
          <p className="text-xs font-bold text-[var(--color-text-tertiary)] mt-2">— Career OS Founding Team</p>
        </div>
      </div>
    </EditorialSubpage>
  );
}
