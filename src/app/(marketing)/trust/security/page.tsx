import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Security — Trust | Career OS",
  description: "Career OS Trust security. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/trust/security",
  },
};

export default function TrustSecurityPage() {
  return (
    <EditorialSubpage
      badge="TRUST &bull; INFRASTRUCTURE SECURITY"
      title="Security & Cryptographic Architecture"
      description="Zero-trust infrastructure, SOC 2 Type II controls, end-to-end encryption at rest and in transit, and row-level database security."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Trust', href: ROUTES.TRUST },
        { label: 'Security', href: ROUTES.TRUST_SECURITY },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Enterprise Security for Lifelong Career Records</h2>
        <p>
          Career data is among the most sensitive personal information an individual possesses. Career OS is built upon a defense-in-depth zero-trust architecture designed to protect your professional equity over a lifetime.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Security Safeguards</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>PostgreSQL Row-Level Security (RLS):</strong> Cryptographically enforced user isolation at the database layer.</li>
          <li><strong>AES-256 & TLS 1.3:</strong> State-of-the-art encryption for all data at rest and in flight.</li>
          <li><strong>Continuous Vulnerability Testing:</strong> Regular third-party penetration testing and automated static analysis security scans.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
