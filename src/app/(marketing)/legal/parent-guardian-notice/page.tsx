import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function LegalParentGuardianPage() {
  return (
    <EditorialSubpage
      badge="LEGAL &bull; GUARDIAN NOTICE"
      title="Parent & Guardian Notice"
      description="Information for parents and legal guardians of students using Career OS through school partnerships."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Legal', href: ROUTES.LEGAL },
        { label: 'Parent & Guardian Notice', href: ROUTES.LEGAL_PARENT_GUARDIAN },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Your Rights as a Guardian</h2>
        <p>
          If your child is using Career OS through their school, you have important rights over their account, data, and career records. This notice explains what information we collect, how it is used, and what control you retain.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">What We Collect</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li>Career interest and suitability exploration data (what pathways your child has explored).</li>
          <li>Skills and project evidence added by your child or verified by their school.</li>
          <li>AI Career Mentor conversation summaries (anonymized for coaching improvement only with explicit consent).</li>
        </ul>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Your Rights</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Access:</strong> Request a full data export of your child&apos;s Career OS records at any time.</li>
          <li><strong>Correction:</strong> Request amendment of inaccurate information.</li>
          <li><strong>Deletion:</strong> Request complete deletion of your child&apos;s account and records.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
