import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function CommunityCodePage() {
  const meta = GOVERNANCE_MANIFEST["community-code"]!;
  const toc = [
    { id: "principles", title: "1. Core Principles (Respect, Honesty, Safety)" },
    { id: "prohibited-conduct", title: "2. Prohibited Community Misconduct" },
    { id: "enforcement", title: "3. Reporting & Enforcement Escalation" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Behavioral expectations of respect, honesty, identity integrity, and safety across all platform participants." toc={toc}>
      <section id="principles" className="space-y-4">
        <h2>1. Core Principles (Respect, Honesty, Safety)</h2>
        <p>
          Career OS brings together students, job seekers, working professionals, educators, and enterprise hiring managers. All participants agree to interact with mutual respect, professional courtesy, and honesty regarding capabilities.
        </p>
      </section>

      <section id="prohibited-conduct" className="space-y-4">
        <h2>2. Prohibited Community Misconduct</h2>
        <p>
          The following behaviors are strictly prohibited and result in account restriction or termination:
        </p>
        <ul>
          <li>Harassment, bullying, stalking, or discriminatory abuse;</li>
          <li>Doxxing, releasing private contact details without authorization;</li>
          <li>Commercial spam, multi-level marketing pitches, or financial scams;</li>
          <li>Falsifying evidence, forging certificates, or credential fraud;</li>
          <li>Impersonating licensed professionals, educators, or school officials.</li>
        </ul>
      </section>

      <section id="enforcement" className="space-y-4">
        <h2>3. Reporting &amp; Enforcement Escalation</h2>
        <p>
          Community violations can be reported directly in-app or via email to <a href={`mailto:${LEGAL_CONFIG.safeguardingEmail}`}>{LEGAL_CONFIG.safeguardingEmail}</a>.
        </p>
      </section>
    </GovernancePageLayout>
  );
}