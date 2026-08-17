import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function ProfessionalConductPage() {
  const meta = GOVERNANCE_MANIFEST["professional-conduct"]!;
  const toc = [
    { id: "evidence-honesty", title: "1. Evidence & Qualification Honesty" },
    { id: "trade-secrets", title: "2. Respect for Employer Trade Secrets" },
    { id: "ai-assisted-apps", title: "3. Transparent AI-Assisted Job Applications" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Standards for evidence honesty, reference integrity, trade secret protection, and AI-assisted job applications." toc={toc}>
      <section id="evidence-honesty" className="space-y-4">
        <h2>1. Evidence &amp; Qualification Honesty</h2>
        <p>
          Candidates agree to represent their skills, project work, degrees, and employment dates truthfully without forging credentials or misrepresenting contributions.
        </p>
      </section>

      <section id="trade-secrets" className="space-y-4">
        <h2>2. Respect for Employer Trade Secrets</h2>
        <p>
          Candidates and professionals agree NOT to upload proprietary employer code, confidential documents, or non-disclosed intellectual property as portfolio evidence on Career OS.
        </p>
      </section>

      <section id="ai-assisted-apps" className="space-y-4">
        <h2>3. Transparent AI-Assisted Job Applications</h2>
        <p>
          While candidates may use AI tools to refine resumes or cover letters, automated bot spamming of employer job openings is strictly prohibited.
        </p>
      </section>
    </GovernancePageLayout>
  );
}