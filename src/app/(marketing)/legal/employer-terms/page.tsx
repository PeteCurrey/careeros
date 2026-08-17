import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function EmployerTermsPage() {
  const meta = GOVERNANCE_MANIFEST["employer-terms"]!;
  const toc = [
    { id: "verification", title: "1. Verified Employer Identity" },
    { id: "opportunity-integrity", title: "2. Legitimate Opportunities & Compensation Transparency" },
    { id: "eeoc-compliance", title: "3. Non-Discrimination & EEOC Alignment" },
    { id: "candidate-privacy", title: "4. Candidate Privacy & Data Access Grants" },
    { id: "minor-protections", title: "5. Minor Candidate Safeguards & School Programs" },
    { id: "ai-decision-support", title: "6. Employer Agent AI & Human Decision Accountability" },
    { id: "prohibited-conduct", title: "7. Prohibited Recruiter Conduct & Data Scraping" },
    { id: "terms-termination", title: "8. Account Termination & Commercial Terms" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Operative terms governing enterprise employer accounts, recruiter conduct, candidate privacy access grants, and minor safeguarding." toc={toc}>
      <section id="verification" className="space-y-4">
        <h2>1. Verified Employer Identity</h2>
        <p>
          Employers and corporate recruiters accessing Career OS must undergo employer identity verification. Speculative recruiting agencies, unverified brokers, or individuals attempting to impersonate corporate hiring managers are prohibited.
        </p>
      </section>

      <section id="opportunity-integrity" className="space-y-4">
        <h2>2. Legitimate Opportunities &amp; Compensation Transparency</h2>
        <p>
          Employers agree to post only authentic, active job opportunities, internships, or apprenticeships. Speculative vacancy farming, multi-level marketing, unpaid positions mislabeled as paid, or inaccurate salary ranges are strictly prohibited.
        </p>
      </section>

      <section id="eeoc-compliance" className="space-y-4">
        <h2>3. Non-Discrimination &amp; EEOC Alignment</h2>
        <p>
          Employers warrant that candidate evaluations adhere to federal EEOC guidelines and equal opportunity statutes. Targeting candidates based on protected characteristics or utilizing proxy criteria to discriminate is grounds for immediate termination.
        </p>
      </section>

      <section id="candidate-privacy" className="space-y-4">
        <h2>4. Candidate Privacy &amp; Data Access Grants</h2>
        <p>
          Candidate profiles on Career OS are default-private. Employers receive candidate summaries under anonymous Candidate Hash IDs. Full personal contact information (Name, Email, Phone) is unlocked solely when a candidate explicitly accepts a match or grants access.
        </p>
      </section>

      <section id="minor-protections" className="space-y-4">
        <h2>5. Minor Candidate Safeguards &amp; School Programs</h2>
        <p>
          Unrestricted recruiter browsing of minor profiles (users under 18) and cold commercial solicitation of school-age users are hard-blocked. Employer interaction with minors is restricted to institution-controlled, school-approved opportunity programs with full audit trails.
        </p>
      </section>

      <section id="ai-decision-support" className="space-y-4">
        <h2>6. Employer Agent AI &amp; Human Decision Accountability</h2>
        <p>
          The Employer Agent provides advisory skill-matching support. Automated candidate rejection and autonomous hiring decisions are strictly prohibited. Human hiring managers retain full responsibility for all evaluation and hiring outcomes.
        </p>
      </section>

      <section id="prohibited-conduct" className="space-y-4">
        <h2>7. Prohibited Recruiter Conduct &amp; Data Scraping</h2>
        <p>
          Scraping candidate profiles, building shadow databases from Career OS candidate data, re-selling candidate records, or sending unauthorized commercial marketing is strictly prohibited.
        </p>
      </section>

      <section id="terms-termination" className="space-y-4">
        <h2>8. Account Termination &amp; Commercial Terms</h2>
        <p>
          Career OS reserves the right to suspend employer accounts that violate candidate privacy or safeguarding rules. Subscriptions are governed by executing commercial order forms.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
