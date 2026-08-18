import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";

export default function FcraEmploymentReportsPage() {
  const meta = GOVERNANCE_MANIFEST["fcra-and-employment-reports"]!;
  const toc = [
    { id: "fcra-status", title: "1. Non-CRA Status & Direct Evidence Platform" },
    { id: "background-limits", title: "2. Absence of Consumer Background Reports" },
    { id: "employer-responsibility", title: "3. Employer Compliance Obligations" },
    { id: "disputed-evidence", title: "4. Disputed Evidence & Provenance Correction Rights" },
  ];

  return (
    <GovernancePageLayout
      meta={meta}
      subtitle="Statutory analysis under the Fair Credit Reporting Act (15 U.S.C. § 1681 et seq.) governing Career OS candidate-provided evidence records."
      toc={toc}
    >
      <section id="fcra-status" className="space-y-4">
        <h2>1. Non-CRA Status &amp; Direct Evidence Platform</h2>
        <p>
          Career OS Inc. is a professional infrastructure software platform. Career OS is not a &ldquo;Consumer Reporting Agency&rdquo; (CRA) as defined by the Fair Credit Reporting Act (15 U.S.C. § 1681a(f)), and the Career Twin, Career Passport, and Career Graph do not constitute &ldquo;Consumer Reports&rdquo; or &ldquo;Investigative Consumer Reports.&rdquo;
        </p>
        <p>
          Information displayed within Career OS represents candidate-directed portfolio evidence, self-declared capabilities, and cryptographic credential signatures issued directly by accredited third-party institutions. Career OS does not compile secret background dossiers or sell investigative consumer data.
        </p>
      </section>

      <section id="background-limits" className="space-y-4">
        <h2>2. Absence of Consumer Background Reports</h2>
        <p>
          Career OS does not perform or provide:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Criminal record background checks.</li>
          <li>Consumer credit history or credit score evaluations.</li>
          <li>Driving record (MVR) verifications.</li>
          <li>Drug screening adjudication services.</li>
          <li>Tenant screening reports.</li>
        </ul>
        <p>
          Employers requiring formal statutory background checks must contract separately with a certified Consumer Reporting Agency and comply with FCRA pre-adverse action notice requirements independently of Career OS.
        </p>
      </section>

      <section id="employer-responsibility" className="space-y-4">
        <h2>3. Employer Compliance Obligations</h2>
        <p>
          Employers accessing candidate portfolios through Career OS agree pursuant to our Employer Terms of Service that they will not use Career OS profile information as the sole basis for automated adverse employment action without affording the candidate an opportunity for human review and discussion.
        </p>
      </section>

      <section id="disputed-evidence" className="space-y-4">
        <h2>4. Disputed Evidence &amp; Provenance Correction Rights</h2>
        <p>
          Candidates maintain absolute rights to inspect, update, correct, or delete any evidence record stored in their Career Passport. If a candidate believes an issuer-verified credential contains an error, they may trigger our formal credential provenance dispute workflow.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
