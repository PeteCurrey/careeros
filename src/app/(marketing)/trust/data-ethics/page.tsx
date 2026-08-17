import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function DataEthicsPage() {
  const meta = GOVERNANCE_MANIFEST["data-ethics"]!;
  const toc = [
    { id: "minimisation", title: "1. Data Minimisation & Purpose Limitation" },
    { id: "access-grants", title: "2. Private Twin Control & Access Grants" },
    { id: "no-ad-sales", title: "3. Zero Advertising Sales & No Shadow Dossiers" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Data ethics principles prohibiting shadow candidate dossiers, ad network tracking, and unauthorized recruiter access." toc={toc}>
      <section id="minimisation" className="space-y-4">
        <h2>1. Data Minimisation &amp; Purpose Limitation</h2>
        <p>
          Career OS collects only the data necessary to deliver career guidance and skill verification. We do not collect unnecessary sensitive personal attributes or track browsing activity across external websites.
        </p>
      </section>

      <section id="access-grants" className="space-y-4">
        <h2>2. Private Twin Control &amp; Access Grants</h2>
        <p>
          Your Career Twin is default-private. Employers, mentors, and institutions access your profile solely when you grant explicit permission through a candidate Data Access Grant.
        </p>
      </section>

      <section id="no-ad-sales" className="space-y-4">
        <h2>3. Zero Advertising Sales &amp; No Shadow Dossiers</h2>
        <p>
          We do not sell student or job-seeker data to third-party data brokers, ad networks, or credit agencies. We strictly prohibit building shadow candidate dossiers or unauthorized profile enrichment.
        </p>
      </section>
    </GovernancePageLayout>
  );
}