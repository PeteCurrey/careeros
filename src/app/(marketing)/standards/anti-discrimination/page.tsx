import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function AntiDiscriminationPage() {
  const meta = GOVERNANCE_MANIFEST["anti-discrimination"]!;
  const toc = [
    { id: "civil-rights", title: "1. Civil Rights Principles & Protected Characteristics" },
    { id: "proxy-prohibitions", title: "2. Prohibition of Proxy Variable Discrimination" },
    { id: "accommodations", title: "3. Candidate Disability Accommodations" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Prohibiting discrimination, protected characteristic targeting, and proxy variable misuse across all platform matching." toc={toc}>
      <section id="civil-rights" className="space-y-4">
        <h2>1. Civil Rights Principles &amp; Protected Characteristics</h2>
        <p>
          Career OS prohibits discrimination based on race, color, religion, sex, national origin, age, disability, genetic information, veteran status, or sexual orientation in compliance with federal Title VII, ADA, and ADEA statutes.
        </p>
      </section>

      <section id="proxy-prohibitions" className="space-y-4">
        <h2>2. Prohibition of Proxy Variable Discrimination</h2>
        <p>
          Employers and matching algorithms are strictly prohibited from using proxy criteria (such as geographic zip codes or institutional prestige filters) to systematically exclude protected groups.
        </p>
      </section>

      <section id="accommodations" className="space-y-4">
        <h2>3. Candidate Disability Accommodations</h2>
        <p>
          Employers using Career OS must provide reasonable application accommodations for candidates with disabilities.
        </p>
      </section>
    </GovernancePageLayout>
  );
}