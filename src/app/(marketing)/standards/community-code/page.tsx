import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function StandardsCommunityCodePage() {
  return (
    <EditorialSubpage
      badge="STANDARDS &bull; COMMUNITY CODE"
      title="Community Code of Conduct"
      description="The foundational expectations of integrity, mutual respect, constructive engagement, and honest capability reporting across the Career OS network."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Standards', href: ROUTES.STANDARDS },
        { label: 'Community Code', href: ROUTES.STANDARDS_COMMUNITY_CODE },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Integrity, Respect, and Authenticity</h2>
        <p>
          Career OS connects students, experienced mentors, educators, and enterprise employers. Our Community Code ensures that every interaction is grounded in professional respect, constructive collaboration, and authentic representation of capabilities.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Core Principles</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Authentic Self-Representation:</strong> No fabricated credentials, exaggerated project outputs, or deceptive credentials.</li>
          <li><strong>Respectful Interaction:</strong> Zero harassment, discriminatory conduct, or unprofessional communication across all channels.</li>
          <li><strong>Supportive Guidance:</strong> Mentors and senior professionals are committed to constructive, growth-oriented feedback.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
