import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Transparency — Trust | Career OS",
  description: "Career OS Trust transparency. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/trust/transparency",
  },
};

export default function TrustTransparencyPage() {
  return (
    <EditorialSubpage
      badge="TRUST &bull; OPEN REPORTING"
      title="Platform Transparency & Open Governance"
      description="Regularly published independent security audits, algorithmic fairness assessments, and public vulnerability disclosure reports."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Trust', href: ROUTES.TRUST },
        { label: 'Transparency', href: ROUTES.TRUST_TRANSPARENCY },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Radical Governance Transparency</h2>
        <p>
          Trust requires verifiable proof. Career OS publishes regular compliance audits, uptime telemetry, AI evaluation benchmark results, and demographic matching parity indices.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Public Governance Reports</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Annual Algorithmic Fairness Audit:</strong> Third-party statistical analysis of opportunity recommendation distribution.</li>
          <li><strong>SOC 2 & ISO 27001 Summaries:</strong> Independent security compliance attestations.</li>
          <li><strong>Public Roadmap & Schema Specifications:</strong> Open documentation of the Career Graph ontology.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
