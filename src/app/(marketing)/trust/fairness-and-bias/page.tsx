import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Fairness And Bias — Trust | Career OS",
  description: "Career OS Trust fairness And Bias. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/trust/fairness-and-bias",
  },
};

export default function TrustFairnessBiasPage() {
  return (
    <EditorialSubpage
      badge="TRUST &bull; FAIRNESS & BIAS"
      title="Fairness, Anti-Bias & Algorithmic Parity"
      description="Proactive bias auditing, demographic masking during initial screening, and continuous testing against adverse impact across all matching models."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Trust', href: ROUTES.TRUST },
        { label: 'Fairness & Bias', href: ROUTES.TRUST_FAIRNESS_BIAS },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Systemic Equity in Career Discovery</h2>
        <p>
          Historical hiring data contains entrenched socio-economic and demographic biases. Career OS actively mitigates these systemic distortions through continuous statistical auditing and blind candidate representation during initial matching stages.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Mitigation Methodologies</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Four-Fifths Rule Statistical Audits:</strong> Regular selection rate parity verification across gender, racial, and age groups.</li>
          <li><strong>Demographic Masking:</strong> Anonymized presentation of candidate profiles until an interview or introduction is formally agreed upon.</li>
          <li><strong>Non-Traditional Pathway Parity:</strong> Explicit weighting of trade certifications, military experience, and open-source contributions equal to traditional 4-year degrees.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
