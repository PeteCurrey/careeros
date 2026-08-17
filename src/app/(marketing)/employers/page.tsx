import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';
import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Employers | Career OS",
  description: "Career OS Employers. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/employers",
  },
};

export default function EmployersHubPage() {
  return (
    <EditorialSubpage
      badge="INSTITUTIONS &bull; EMPLOYERS"
      title="Employers & Talent Teams Hub"
      description="Discover high-aptitude talent through verified project evidence, demonstrable competence, and explainable Employer Agent decision support."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Employers', href: ROUTES.EMPLOYERS },
      ]}
      ctaText="Become a Launch Employer"
      ctaHref={ROUTES.COMPANY_CONTACT}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Hiring on Evidence, Not Keyword Filtering</h2>
        <p>
          Legacy ATS systems reject qualified candidates based on arbitrary resume formatting and keyword density. Career OS evaluates verified capabilities, actual project deliverables, and genuine alignment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <Link href={ROUTES.EMPLOYERS_EMPLOYER_AGENT} className="p-6 rounded-lg bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-500)] block transition-colors">
            <h3 className="font-bold text-sm text-[var(--color-text-primary)]">Employer Agent Intelligence</h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Autonomous candidate-role capability matching with full rationale.</p>
          </Link>
          <Link href={ROUTES.EMPLOYERS_TALENT_DISCOVERY} className="p-6 rounded-lg bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-500)] block transition-colors">
            <h3 className="font-bold text-sm text-[var(--color-text-primary)]">Evidence-Based Discovery</h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Directly review capstone artifacts, trade credentials, and code repositories.</p>
          </Link>
          <Link href={ROUTES.EMPLOYERS_EARLY_CAREERS} className="p-6 rounded-lg bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-500)] block transition-colors">
            <h3 className="font-bold text-sm text-[var(--color-text-primary)]">Early Careers & Apprenticeships</h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Build durable pipelines of motivated graduates and apprentices.</p>
          </Link>
          <Link href={ROUTES.EMPLOYERS_RESPONSIBLE_HIRING} className="p-6 rounded-lg bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-500)] block transition-colors">
            <h3 className="font-bold text-sm text-[var(--color-text-primary)]">Responsible Hiring & Compliance</h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">NYC LL144, EU AI Act, and EEOC audit alignment.</p>
          </Link>
        </div>
      </div>
    </EditorialSubpage>
  );
}
