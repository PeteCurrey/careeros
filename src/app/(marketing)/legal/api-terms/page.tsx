import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Api Terms — Legal | Career OS",
  description: "Career OS Legal api Terms. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/legal/api-terms",
  },
};

export default function LegalApiTermsPage() {
  return (
    <EditorialSubpage
      badge="LEGAL &bull; API"
      title="API Terms of Service"
      description="Terms governing programmatic access to Career OS APIs for integration partners, institutional SIS integrations, and credential verification services."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Legal', href: ROUTES.LEGAL },
        { label: 'API Terms', href: ROUTES.LEGAL_API_TERMS },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Programmatic Integration Agreement</h2>
        <p>
          These terms govern access to Career OS APIs by integration partners, Student Information System (SIS) providers, and credential verification services. API access requires an approved integration agreement and active authentication credentials.
        </p>
        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">API Use Conditions</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Rate Limits:</strong> API calls are subject to per-integration rate limits. Excess consumption may result in temporary throttling.</li>
          <li><strong>Data Scope:</strong> API responses are scoped strictly to data explicitly consented to by the relevant users.</li>
          <li><strong>No Re-sale:</strong> Extracted data may not be resold, repackaged, or used to build competing products.</li>
          <li><strong>Security Requirements:</strong> All API integrations must implement OAuth 2.0 authentication and TLS 1.3 transport encryption.</li>
        </ul>
        <p className="text-xs text-[var(--color-text-tertiary)] pt-4">
          To apply for API access, contact our partnerships team via the contact page.
        </p>
      </div>
    </EditorialSubpage>
  );
}
