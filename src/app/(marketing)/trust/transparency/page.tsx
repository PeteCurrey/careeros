import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";

export default function TrustTransparencyPage() {
  const meta = {
    id: "gov-trust-transparency-001",
    title: "Platform Transparency & Open Governance Standards",
    slug: "transparency",
    category: "TRUST" as const,
    documentType: "TRANSPARENCY_POLICY",
    version: "2026.08.1",
    status: "ACTIVE" as const,
    effectiveDate: "2026-08-17",
    publishedDate: "2026-08-17",
    lastReviewedDate: "2026-08-17",
    nextReviewDate: "2027-08-17",
    jurisdiction: "Global Infrastructure",
    owner: "Chief Governance Officer",
    requiresLegalReview: true,
    bindingStatus: "INFORMATIONAL" as const,
    relatedDocuments: [
      { title: "Security Architecture", href: "/trust/security" },
      { title: "Responsible AI Policy", href: "/trust/responsible-ai" },
    ],
    sources: [],
    changeSummary: "Updated transparency commitments to reflect current readiness frameworks and open architecture documentation.",
  };

  const toc = [
    { id: "philosophy", title: "1. Transparency Philosophy" },
    { id: "public-disclosures", title: "2. Public Governance Disclosures" },
    { id: "open-specifications", title: "3. Open Architecture & Ontology Specifications" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Commitment to open architecture, explainable AI recommendation provenance, and transparent security controls." toc={toc}>
      <section id="philosophy" className="space-y-4">
        <h2>1. Transparency Philosophy</h2>
        <p>
          Trust in career infrastructure requires verifiable transparency. Career OS publishes open architecture specifications, system audit schemas, recommendation provenance standards, and security control states to ensure candidates, schools, and employers have full visibility into platform governance.
        </p>
      </section>

      <section id="public-disclosures" className="space-y-4">
        <h2>2. Public Governance Disclosures</h2>
        <p>
          Career OS publishes the following public governance resources:
        </p>
        <ul>
          <li><strong>Recommendation Provenance Ledger:</strong> Structured audit metadata surfaced for every AI recommendation.</li>
          <li><strong>Security Control Verification Matrix:</strong> Transparent tracking of implemented, in-progress, and planned security controls.</li>
          <li><strong>Demographic Parity Monitoring Framework:</strong> System readiness frameworks for evaluating algorithmic fairness.</li>
        </ul>
      </section>

      <section id="open-specifications" className="space-y-4">
        <h2>3. Open Architecture &amp; Ontology Specifications</h2>
        <p>
          We publish the data schemas for the Career Passport, Career Twin, and Career Graph ontology to ensure long-term portability and eliminate vendor lock-in.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
