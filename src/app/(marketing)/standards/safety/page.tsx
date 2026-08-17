import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function SafetyStandardPage() {
  const meta = GOVERNANCE_MANIFEST["safety"]!;
  const toc = [
    { id: "cross-platform", title: "1. Cross-Platform Safety Principles" },
    { id: "youth-enhanced", title: "2. Enhanced Safeguards for Youth & Students" },
    { id: "reporting-channel", title: "3. Emergency Safety Reporting & Incident Response" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Cross-platform safety standard covering students, candidates, educators, employers, and network users." toc={toc}>
      <section id="cross-platform" className="space-y-4">
        <h2>1. Cross-Platform Safety Principles</h2>
        <p>
          Career OS maintains a safe environment across all user populations. Safety controls prevent malicious intrusion, financial fraud, impersonation, and harassment.
        </p>
      </section>

      <section id="youth-enhanced" className="space-y-4">
        <h2>2. Enhanced Safeguards for Youth &amp; Students</h2>
        <p>
          Students and minor candidates receive enhanced protections including default-private profiles, recruiter hard-blocks, anti-grooming monitoring, and school counselor visibility.
        </p>
      </section>

      <section id="reporting-channel" className="space-y-4">
        <h2>3. Emergency Safety Reporting &amp; Incident Response</h2>
        <p>
          Safety concerns can be reported 24/7 to <a href={`mailto:${LEGAL_CONFIG.safeguardingEmail}`}>{LEGAL_CONFIG.safeguardingEmail}</a>. Immediate account restrictions are applied during active safety investigations.
        </p>
      </section>
    </GovernancePageLayout>
  );
}