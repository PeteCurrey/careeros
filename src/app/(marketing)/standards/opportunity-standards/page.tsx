import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function OpportunityStandardsPage() {
  const meta = GOVERNANCE_MANIFEST["opportunity-standards"]!;
  const toc = [
    { id: "authenticity", title: "1. Authentic Opportunity Requirements" },
    { id: "prohibited-schemes", title: "2. Prohibition of Advance Fees & Pyramids" },
    { id: "youth-eligibility", title: "3. Youth Opportunity Safety Standards" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Standards for jobs, internships, apprenticeships, trades, and higher education opportunities." toc={toc}>
      <section id="authenticity" className="space-y-4">
        <h2>1. Authentic Opportunity Requirements</h2>
        <p>
          All opportunities posted on Career OS (jobs, apprenticeships, degree programs, trade certifications) must be verified, active, and accurately described with location, compensation, and prerequisite details.
        </p>
      </section>

      <section id="prohibited-schemes" className="space-y-4">
        <h2>2. Prohibition of Advance Fees &amp; Pyramids</h2>
        <p>
          Career OS strictly prohibits multi-level marketing (MLM) schemes, pyramid recruitment, opportunities requiring candidate placement fees, or deceptive self-employment offers.
        </p>
      </section>

      <section id="youth-eligibility" className="space-y-4">
        <h2>3. Youth Opportunity Safety Standards</h2>
        <p>
          Work-based learning and early career opportunities involving minors must conform to state child labor laws, hazardous occupation rules, and school-day hour limits.
        </p>
      </section>
    </GovernancePageLayout>
  );
}