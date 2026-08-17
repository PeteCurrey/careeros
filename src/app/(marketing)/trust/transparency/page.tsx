import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function TrustTransparencyPage() {
  const meta = GOVERNANCE_MANIFEST["transparency"]!;
  const toc = [
    { id: "corporate-disclosures", title: "1. Corporate Identity & Governance Disclosures" },
    { id: "roadmap-distinction", title: "2. Distinguishing Live Features from Roadmap Vision" },
    { id: "commercial-transparency", title: "3. Commercial Partnership Disclosures" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Public disclosures distinguishing deployed capabilities from planned features, commercial partnerships, and regulatory readiness." toc={toc}>
      <section id="corporate-disclosures" className="space-y-4">
        <h2>1. Corporate Identity &amp; Governance Disclosures</h2>
        <p>
          Career OS is operated by {LEGAL_CONFIG.legalEntityName}. Corporate governance contact details and legal emails are publicly published in our Legal Centre.
        </p>
      </section>

      <section id="roadmap-distinction" className="space-y-4">
        <h2>2. Distinguishing Live Features from Roadmap Vision</h2>
        <p>
          We explicitly label product interfaces to distinguish live, deployed capabilities (AI Mentor, Career Twin, Career Passport) from future roadmap concepts (Opportunity Agent, Employer Agent).
        </p>
      </section>

      <section id="commercial-transparency" className="space-y-4">
        <h2>3. Commercial Partnership Disclosures</h2>
        <p>
          Core individual accounts are free. Commercial revenue is generated exclusively through enterprise employer subscriptions and institutional school district partnerships. We do not accept sponsored candidate placements or paid ad rankings.
        </p>
      </section>
    </GovernancePageLayout>
  );
}