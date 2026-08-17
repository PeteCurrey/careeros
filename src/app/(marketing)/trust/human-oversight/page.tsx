import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function HumanOversightPage() {
  const meta = GOVERNANCE_MANIFEST["human-oversight"]!;
  const toc = [
    { id: "consequential-decisions", title: "1. Low-Impact Assistance vs. Consequential Decisions" },
    { id: "employer-accountability", title: "2. Employer Decision Accountability" },
    { id: "safeguarding-escalations", title: "3. Youth Safeguarding Escalation Channels" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Defining human oversight boundaries, employer hiring manager accountability, and youth safeguarding escalations." toc={toc}>
      <section id="consequential-decisions" className="space-y-4">
        <h2>1. Low-Impact Assistance vs. Consequential Decisions</h2>
        <p>
          Career OS strictly delineates low-impact assistance (resume formatting ideas, exploratory skill summaries) from consequential employment or educational decisions (hiring, candidate rejection, course grading). AI never makes autonomous consequential decisions.
        </p>
      </section>

      <section id="employer-accountability" className="space-y-4">
        <h2>2. Employer Decision Accountability</h2>
        <p>
          Corporate employers using the Employer Agent receive advisory skill-matching support. Final hiring choices, interview selections, and rejection decisions remain 100% human-driven by authorized corporate hiring managers.
        </p>
      </section>

      <section id="safeguarding-escalations" className="space-y-4">
        <h2>3. Youth Safeguarding Escalation Channels</h2>
        <p>
          AI mentor conversations involving minor students are monitored by automated safety guardrails. Flags indicating self-harm, abuse, or safety risks trigger human safeguarding review and escalation to school counselors or emergency authorities.
        </p>
      </section>
    </GovernancePageLayout>
  );
}