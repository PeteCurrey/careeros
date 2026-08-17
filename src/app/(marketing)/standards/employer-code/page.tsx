import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function EmployerCodePage() {
  const meta = GOVERNANCE_MANIFEST["employer-code"]!;
  const toc = [
    { id: "verification", title: "1. Corporate Verification & Real Opportunities" },
    { id: "compensation-honesty", title: "2. Compensation Transparency & Unpaid Work Rules" },
    { id: "candidate-privacy", title: "3. Candidate Privacy Grants & Anti-Scraping Rules" },
    { id: "minor-safeguards", title: "4. Minor Candidate Protection & School Programs" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Major platform differentiator establishing mandatory recruiter verification, authentic job posts, and candidate privacy grants." toc={toc}>
      <section id="verification" className="space-y-4">
        <h2>1. Corporate Verification &amp; Real Opportunities</h2>
        <p>
          Employers on Career OS must undergo identity verification. Employers agree to post only authentic, open positions. Speculative vacancy farming or posting fake job openings to collect candidate resumes is grounds for immediate ban.
        </p>
      </section>

      <section id="compensation-honesty" className="space-y-4">
        <h2>2. Compensation Transparency &amp; Unpaid Work Rules</h2>
        <p>
          Employers must provide clear salary ranges or hourly compensation details. Unpaid internships must comply with FLSA primary beneficiary standards and cannot be mislabeled as paid employment.
        </p>
      </section>

      <section id="candidate-privacy" className="space-y-4">
        <h2>3. Candidate Privacy Grants &amp; Anti-Scraping Rules</h2>
        <p>
          Employers receive anonymous Candidate Hash IDs during matching. Full personal contact details are unlocked only when a candidate accepts a match. Employers agree NOT to scrape candidate data, re-sell profiles, or build shadow candidate databases.
        </p>
      </section>

      <section id="minor-safeguards" className="space-y-4">
        <h2>4. Minor Candidate Protection &amp; School Programs</h2>
        <p>
          Commercial recruiters cannot search or browse minor candidate profiles. Employer interactions with high school students are restricted to school-approved opportunity programs overseen by counselors.
        </p>
      </section>
    </GovernancePageLayout>
  );
}