import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';
import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Regulatory Alignment & Jurisdictional Compliance | Career OS",
  description: "Career OS regulatory posture across US federal, state, student privacy, and youth labor compliance frameworks.",
  alternates: {
    canonical: "https://career-os.com/regulatory",
  },
};

export default function RegulatoryHubPage() {
  return (
    <EditorialSubpage
      badge="GOVERNANCE &bull; COMPLIANCE"
      title="Regulatory Alignment & Jurisdictional Frameworks"
      description="Career OS is engineered from the ground up to comply with global student privacy regulations, youth labor protections, anti-discrimination statutes, and automated hiring accountability standards."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Regulatory', href: ROUTES.REGULATORY },
      ]}
      ctaText="Review Trust Centre"
      ctaHref={ROUTES.TRUST}
      fullScreenHero={true}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Jurisdictional &amp; Statutory Compliance</h2>
        <p>
          We maintain explicit compliance mappings across key regulatory domains, ensuring educators, employers, candidates, and guardians have complete legal clarity on how Career OS operates.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <Link href={ROUTES.REGULATORY_UNITED_STATES} className="p-6 rounded-lg bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-500)] block transition-colors">
            <h3 className="font-bold text-sm text-[var(--color-text-primary)]">United States Federal &amp; State Compliance</h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">FERPA, COPPA, EEOC, and state privacy law posture.</p>
          </Link>
          <Link href={ROUTES.REGULATORY_STUDENT_PRIVACY} className="p-6 rounded-lg bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-500)] block transition-colors">
            <h3 className="font-bold text-sm text-[var(--color-text-primary)]">Student Data Privacy Protections</h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Non-commercialization guarantees and school district DPA terms.</p>
          </Link>
          <Link href={ROUTES.REGULATORY_YOUTH_EMPLOYMENT} className="p-6 rounded-lg bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-500)] block transition-colors">
            <h3 className="font-bold text-sm text-[var(--color-text-primary)]">Youth Employment &amp; Apprenticeship Rules</h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Age-banded workflow boundaries and labor law compliance.</p>
          </Link>
          <Link href={ROUTES.REGULATORY_AUTOMATED_HIRING} className="p-6 rounded-lg bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-500)] block transition-colors">
            <h3 className="font-bold text-sm text-[var(--color-text-primary)]">Automated Employment Decision Systems (AEDT)</h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">NYC Local Law 144, EU AI Act, and algorithmic audit standards.</p>
          </Link>
        </div>
      </div>
    </EditorialSubpage>
  );
}
