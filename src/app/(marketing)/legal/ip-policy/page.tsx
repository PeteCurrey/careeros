import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ip Policy — Legal | Career OS",
  description: "Career OS Legal ip Policy. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/legal/ip-policy",
  },
};

export default function LegalIpPolicyPage() {
  return (
    <EditorialSubpage
      hideCta={true}
      badge="LEGAL &bull; IP POLICY"
      title="Intellectual Property Policy"
      description="Rules governing proprietary platform technology, user-generated content ownership, third-party IP, and DMCA takedown procedures."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Legal', href: ROUTES.LEGAL },
        { label: 'IP Policy', href: ROUTES.LEGAL_IP_POLICY },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Intellectual Property Framework</h2>
        <p>
          This policy covers the intellectual property rights of Career OS, our users, and third parties whose content appears on the platform. It explains how we protect IP and how users should handle content on the platform.
        </p>
        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Key Provisions</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Platform Technology:</strong> Career OS software, algorithms, AI models, and design systems are protected by copyright and trade secret law.</li>
          <li><strong>Career Evidence Ownership:</strong> All project artifacts, credentials, and career records you create belong exclusively to you.</li>
          <li><strong>Third-Party Content:</strong> Users must not upload content they do not have rights to reproduce.</li>
          <li><strong>DMCA Takedown:</strong> Copyright holders may submit takedown notices to our designated DMCA agent via the contact page.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
