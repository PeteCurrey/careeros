import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';
import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Schools | Career OS",
  description: "Career OS Schools. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/schools",
  },
};

export default function SchoolsHubPage() {
  return (
    <EditorialSubpage
      badge="INSTITUTIONS &bull; EDUCATION"
      title="Schools & Educational Institutions Hub"
      description="Equip counsellors, safeguard minors, and provide equal pathway discovery across academic, technical, and trade destinations for your entire student cohort."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Schools', href: ROUTES.SCHOOLS },
      ]}
      ctaText="Become a Launch School"
      ctaHref={ROUTES.COMPANY_CONTACT}
      fullScreenHero={true}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Institutional Infrastructure for Modern Guidance</h2>
        <p>
          Career OS partners with high schools, multi-academy trusts, and school districts to deliver high-fidelity, un-siloed career discovery that respects student privacy and equips educators with actionable intelligence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <Link href={ROUTES.SCHOOLS_EDUCATORS} className="p-6 rounded-lg bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-500)] block transition-colors">
            <h3 className="font-bold text-sm text-[var(--color-text-primary)]">For Educators & Counsellors</h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Tools to amplify guidance capacity and support non-linear paths.</p>
          </Link>
          <Link href={ROUTES.SCHOOLS_STUDENT_SAFETY} className="p-6 rounded-lg bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-500)] block transition-colors">
            <h3 className="font-bold text-sm text-[var(--color-text-primary)]">Student Safety & Safeguarding</h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Strict FERPA, COPPA, and minor consent protocols.</p>
          </Link>
          <Link href={ROUTES.SCHOOLS_OUTCOMES} className="p-6 rounded-lg bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-500)] block transition-colors">
            <h3 className="font-bold text-sm text-[var(--color-text-primary)]">Longitudinal Outcome Tracking</h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Measuring post-secondary readiness and career destinations.</p>
          </Link>
          <Link href={ROUTES.SCHOOLS_PARTNERSHIPS} className="p-6 rounded-lg bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-500)] block transition-colors">
            <h3 className="font-bold text-sm text-[var(--color-text-primary)]">Launch School Partnerships</h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">How pilot districts collaborate with our architecture team.</p>
          </Link>
        </div>
      </div>
    </EditorialSubpage>
  );
}
