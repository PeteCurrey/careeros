import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Candidate Privacy — Legal | Career OS",
  description: "Career OS Legal candidate Privacy. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/legal/candidate-privacy",
  },
};

export default function LegalCandidatePrivacyPage() {
  return (
    <EditorialSubpage
      badge="LEGAL &bull; CANDIDATE PRIVACY"
      title="Candidate Privacy Notice"
      description="How Career OS collects, processes, stores, and protects your personal career data when you use the platform as an individual."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Legal', href: ROUTES.LEGAL },
        { label: 'Candidate Privacy', href: ROUTES.LEGAL_CANDIDATE_PRIVACY },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Your Career Data, Your Control</h2>
        <p>
          This notice explains in plain language how we handle your personal information as a Career OS user. Your Career Twin, Career Passport, and all advisory records belong to you and are stored under your cryptographic access control.
        </p>
        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Data We Collect</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Profile Information:</strong> Name, contact details, educational history, and professional experience you enter.</li>
          <li><strong>Career Activity:</strong> Pathway explorations, mentor sessions, skills assessments, and project submissions.</li>
          <li><strong>Opportunity Matching:</strong> Your stated preferences, consent grants, and introduction responses.</li>
          <li><strong>Technical Data:</strong> Device type, session metadata, and anonymised usage analytics.</li>
        </ul>
        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Your Rights</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li>Access and download all your personal data at any time via Settings → Privacy.</li>
          <li>Correct inaccurate records immediately within your profile.</li>
          <li>Request complete account and data deletion with a 30-day processing window.</li>
          <li>Withdraw any consent grant (including employer access) at any time.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
