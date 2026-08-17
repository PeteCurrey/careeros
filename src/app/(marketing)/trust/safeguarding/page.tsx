import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function SafeguardingPage() {
  const meta = GOVERNANCE_MANIFEST["safeguarding"]!;
  const toc = [
    { id: "canonical-age", title: "1. Canonical Age Model & Access Controls" },
    { id: "recruiter-hardblock", title: "2. Recruiter Contact Hard-Blocks & Default-Private Minor Profiles" },
    { id: "safety-controls", title: "3. Anti-Grooming, Exploitation & Emergency Escalation" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Substantial youth safeguarding framework governing minor profiles, employer contact restrictions, and safety escalations." toc={toc}>
      <section id="canonical-age" className="space-y-4">
        <h2>1. Canonical Age Model &amp; Access Controls</h2>
        <p>
          Career OS enforces age-banded safeguards:
        </p>
        <ul>
          <li><strong>Age 16+:</strong> Direct individual accounts permitted. Users aged 16–17 remain legal minors and receive active minor safeguarding protections.</li>
          <li><strong>Ages 13–15:</strong> Access enabled solely through a verified school arrangement or verified parent/guardian consent arrangement.</li>
          <li><strong>Under Age 13:</strong> Direct consumer signup prohibited. Institutional access only under FERPA school-official exception.</li>
        </ul>
      </section>

      <section id="recruiter-hardblock" className="space-y-4">
        <h2>2. Recruiter Contact Hard-Blocks &amp; Default-Private Minor Profiles</h2>
        <p>
          Commercial recruiters cannot search or browse minor candidate profiles. Direct cold messaging from recruiters to minor users is hard-blocked at the system level. Minor participation in employer programs is restricted to school-approved, counselor-overseen programs.
        </p>
      </section>

      <section id="safety-controls" className="space-y-4">
        <h2>3. Anti-Grooming, Exploitation &amp; Emergency Escalation</h2>
        <p>
          We maintain automated guardrails against grooming, sexual exploitation, harassment, and bullying. Safety violations trigger immediate account restriction and referral to our Youth Safeguarding Officer (<a href={`mailto:${LEGAL_CONFIG.safeguardingEmail}`}>{LEGAL_CONFIG.safeguardingEmail}</a>) and relevant authorities.
        </p>
      </section>
    </GovernancePageLayout>
  );
}