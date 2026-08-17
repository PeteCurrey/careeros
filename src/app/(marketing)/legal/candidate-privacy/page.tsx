import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function CandidatePrivacyNoticePage() {
  const meta = GOVERNANCE_MANIFEST["candidate-privacy"]!;
  const toc = [
    { id: "profile-visibility", title: "1. Candidate Profile Visibility Controls" },
    { id: "hash-ids", title: "2. Candidate Hash IDs & Identity Protection" },
    { id: "matching-rationale", title: "3. Matching Rationale & AI Role" },
    { id: "access-grants", title: "4. Candidate Access Grants & Revocation" },
    { id: "aedt-readiness", title: "5. AEDT Automated Hiring Regulations" },
    { id: "fcra-scope", title: "6. FCRA Scope & Background Screening Notice" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Information for job candidates regarding profile visibility, Candidate Hash IDs, employer access grants, and matching controls." toc={toc}>
      <section id="profile-visibility" className="space-y-4">
        <h2>1. Candidate Profile Visibility Controls</h2>
        <p>
          As a candidate on Career OS, your profile is default-private. You control when, how, and with whom your professional evidence and contact details are shared.
        </p>
      </section>

      <section id="hash-ids" className="space-y-4">
        <h2>2. Candidate Hash IDs &amp; Identity Protection</h2>
        <p>
          During initial opportunity discovery, employers view candidate skill summaries associated with an anonymous Candidate Hash ID (e.g. Candidate #CAND-8F4D92A1). Your real name, email address, phone number, and physical address are withheld.
        </p>
      </section>

      <section id="matching-rationale" className="space-y-4">
        <h2>3. Matching Rationale &amp; AI Role</h2>
        <p>
          Opportunity matches surface transparent key decision factors based on verified skills and expressed career preferences. AI matching is advisory—it does not auto-reject candidates or make autonomous hiring decisions.
        </p>
      </section>

      <section id="access-grants" className="space-y-4">
        <h2>4. Candidate Access Grants &amp; Revocation</h2>
        <p>
          When an employer expresses interest in your profile, your contact details are shared ONLY if you explicitly accept the match. You may revoke access grants at any time in your privacy settings.
        </p>
      </section>

      <section id="aedt-readiness" className="space-y-4">
        <h2>5. AEDT Automated Hiring Regulations</h2>
        <p>
          Career OS aligns with emerging Automated Employment Decision Tool (AEDT) laws (NYC Local Law 144, EU AI Act) by enforcing explainable match factors and human hiring manager oversight.
        </p>
      </section>

      <section id="fcra-scope" className="space-y-4">
        <h2>6. FCRA Scope &amp; Background Screening Notice</h2>
        <p>
          Career OS is a self-directed career twin and evidence ledger. Career OS is not a consumer reporting agency under the Fair Credit Reporting Act (FCRA). Employers conducting formal background checks must utilize accredited FCRA consumer reporting agencies.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
