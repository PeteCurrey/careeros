import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function CompanyPartnersPage() {
  return (
    <EditorialSubpage
      badge="COMPANY &bull; PARTNERS"
      title="Strategic Partners & Collaborators"
      description="Organisations, institutions, and technology partners working with Career OS to build the future of career infrastructure."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'About', href: ROUTES.COMPANY_ABOUT },
        { label: 'Partners', href: ROUTES.COMPANY_PARTNERS },
      ]}
      ctaText="Explore Partnership"
      ctaHref={ROUTES.COMPANY_CONTACT}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Building an Ecosystem of Trust</h2>
        <p>
          Career OS works alongside visionary educational institutions, enterprise employers, research organizations, and technology infrastructure providers to build a high-trust, evidence-based career ecosystem.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Partnership Categories</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Launch Schools & Districts:</strong> Forward-thinking high schools and vocational academies pioneering equitable career development.</li>
          <li><strong>Enterprise Launch Employers:</strong> Organizations committed to evidence-based, bias-mitigated talent acquisition.</li>
          <li><strong>Research & Policy Partners:</strong> Academic institutions and think tanks advancing responsible AI in employment.</li>
          <li><strong>Technology Infrastructure:</strong> Cloud, cryptographic credential, and identity verification providers.</li>
        </ul>

        <div className="p-6 rounded-lg bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] mt-6">
          <p className="text-sm font-semibold text-[var(--color-text-primary)]">Interested in a strategic partnership?</p>
          <p className="text-xs text-[var(--color-text-secondary)] mt-1">
            We are selectively forming founding partnerships with organisations that share our commitment to equity, transparency, and human-centred career development.
          </p>
        </div>
      </div>
    </EditorialSubpage>
  );
}
