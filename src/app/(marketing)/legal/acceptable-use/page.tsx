import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function AcceptableUsePage() {
  const meta = GOVERNANCE_MANIFEST["acceptable-use"]!;
  const toc = [
    { id: "prohibited-fraud", title: "1. Prohibited Fraudulent & Deceptive Conduct" },
    { id: "system-abuse", title: "2. Security Attacks & Automated Scraping" },
    { id: "community-safety", title: "3. Harassment, Bullying & Exploitation" },
    { id: "employer-misuse", title: "4. Discriminatory Employer Conduct" },
    { id: "enforcement", title: "5. Enforcement, Suspension & Review Procedures" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Rules governing acceptable conduct, security integrity, anti-fraud standards, and platform enforcement procedures." toc={toc}>
      <section id="prohibited-fraud" className="space-y-4">
        <h2>1. Prohibited Fraudulent &amp; Deceptive Conduct</h2>
        <p>
          Career OS depends on verified professional trust. The following acts are strictly prohibited:
        </p>
        <ul>
          <li>Falsifying educational qualifications, degrees, licenses, or employment dates;</li>
          <li>Uploading plagiarized project repositories or forged work samples;</li>
          <li>Impersonating another individual, school official, or corporate recruiter;</li>
          <li>Creating fake employer accounts to harvest candidate PII.</li>
        </ul>
      </section>

      <section id="system-abuse" className="space-y-4">
        <h2>2. Security Attacks &amp; Automated Scraping</h2>
        <p>
          You agree NOT to:
        </p>
        <ul>
          <li>Scrape, harvest, or extract candidate data using automated bots or crawlers;</li>
          <li>Attempt to breach Row-Level Security (RLS) policies or bypass authentication controls;</li>
          <li>Launch denial-of-service (DoS) attacks or inject malicious scripts;</li>
          <li>Reverse-engineer or decompile proprietary matching algorithms.</li>
        </ul>
      </section>

      <section id="community-safety" className="space-y-4">
        <h2>3. Harassment, Bullying &amp; Exploitation</h2>
        <p>
          Harassment, stalking, doxxing, hate speech, sexual exploitation, and grooming are strictly prohibited and will result in immediate permanent account termination and referral to law enforcement where minor safety is compromised.
        </p>
      </section>

      <section id="employer-misuse" className="space-y-4">
        <h2>4. Discriminatory Employer Conduct</h2>
        <p>
          Employers may not use Career OS to target candidates based on protected characteristics, conduct unlawful pre-employment inquiries, or solicit school-age minors outside approved institutional programs.
        </p>
      </section>

      <section id="enforcement" className="space-y-4">
        <h2>5. Enforcement, Suspension &amp; Review Procedures</h2>
        <p>
          Career OS enforces a zero-tolerance policy for fraud and minor safeguarding violations. Account suspensions may be appealed by contacting <a href={`mailto:${LEGAL_CONFIG.legalEmail}`}>{LEGAL_CONFIG.legalEmail}</a>.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
