import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function PrivacyPolicyPage() {
  const meta = GOVERNANCE_MANIFEST["privacy"]!;

  const toc = [
    { id: "overview", title: "1. Overview & Data Control Commitment" },
    { id: "age-policy", title: "2. Canonical Age Architecture & Youth Privacy" },
    { id: "ferpa-coppa", title: "3. Educational Records, FERPA & COPPA" },
    { id: "data-collection", title: "4. Information Collected & Processing Purposes" },
    { id: "data-sharing", title: "5. Information Sharing & Employer Interaction Controls" },
    { id: "security-rls", title: "6. Security Architecture & Row-Level Authorization" },
    { id: "user-rights", title: "7. User Rights & Data Portability" },
    { id: "contact", title: "8. Governance & Privacy Contacts" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Operative privacy policy governing data collection, youth privacy protections, FERPA alignment, and user data control." toc={toc}>
      <section id="overview" className="space-y-4">
        <h2>1. Overview &amp; Data Control Commitment</h2>
        <p>
          Career OS is built on the core principle of individual data control: <em>You control how your Career OS information is used and shared. You retain rights in the content and evidence you provide, subject to applicable Terms and this Privacy Policy.</em>
        </p>
        <p>
          We do not monetize candidate data through third-party advertising networks, sell personal profiles to data brokers, or conduct unexamined algorithmic profiling.
        </p>
      </section>

      <section id="age-policy" className="space-y-4">
        <h2>2. Canonical Age Architecture &amp; Youth Privacy</h2>
        <p>
          Career OS enforces an age-banded privacy architecture aligned with statutory requirements in the United States:
        </p>
        <ul>
          <li>
            <strong>Age 16 or Older (Direct Account Eligibility):</strong> Persons aged 16 or older are eligible to open a direct individual Career OS account. This is a product eligibility rule. Users aged 16–17 remain legal minors where applicable law treats them as minors and receive minor safeguarding protections (default-private profiles, restricted employer contact).
          </li>
          <li>
            <strong>Ages 13–15 (Verified Relationship Required):</strong> Registration for users aged 13–15 requires a verified school institutional arrangement or verified parent/guardian consent. Unrestricted self-service registration without a verified relationship is prohibited.
          </li>
          <li>
            <strong>Under Age 13 (Institutional Enrollment Only):</strong> Direct consumer registration for children under 13 is prohibited under COPPA. Access is enabled solely through verified educational institution agreements for legitimate educational purposes.
          </li>
        </ul>
      </section>

      <section id="ferpa-coppa" className="space-y-4">
        <h2>3. Educational Records, FERPA &amp; COPPA</h2>
        <p>
          Where a participating educational institution engages Career OS under an arrangement that relies on FERPA&apos;s school-official exception (34 CFR § 99.31(a)(1)), the institution and Career OS will structure the service and applicable agreement to satisfy the requirements relevant to that arrangement. We do not claim that the school-official exception applies to every Career OS deployment automatically.
        </p>
        <p>
          Under FERPA, rights regarding education records transfer to the student when the student reaches age 18 OR attends a postsecondary institution at any age. Dual-enrollment students exercise FERPA rights directly with respect to their postsecondary records.
        </p>
      </section>

      <section id="data-collection" className="space-y-4">
        <h2>4. Information Collected &amp; Processing Purposes</h2>
        <p>
          We collect personal information necessary to deliver career intelligence, credential verification, and pathway guidance:
        </p>
        <ul>
          <li><strong>Identity &amp; Profile Data:</strong> Name, contact details, date of birth, age classification, locale.</li>
          <li><strong>Career Twin &amp; Skill Data:</strong> Self-declared skills, verified achievements, work preferences, learning ambitions.</li>
          <li><strong>Evidence &amp; Artifacts:</strong> Work samples, certificates, capstone project links.</li>
          <li><strong>System Audit Data:</strong> AI interaction audit logs, consent ledger timestamps.</li>
        </ul>
      </section>

      <section id="data-sharing" className="space-y-4">
        <h2>5. Information Sharing &amp; Employer Interaction Controls</h2>
        <p>
          Candidate profiles are default-private. Employer interactions require explicit candidate consent or institution-controlled program matching. Unrestricted recruiter browsing of minor profiles and cold commercial solicitation of school-age users are strictly prohibited.
        </p>
      </section>

      <section id="security-rls" className="space-y-4">
        <h2>6. Security Architecture &amp; Row-Level Authorization</h2>
        <p>
          Career OS implements multi-layer technical safeguards, including TLS encryption in transit, AES-256 encryption at rest, and PostgreSQL Row-Level Security (RLS) policies enforcing database authorization boundaries between tenants. PostgreSQL RLS operates as an database access-control and authorization mechanism.
        </p>
      </section>

      <section id="user-rights" className="space-y-4">
        <h2>7. User Rights &amp; Data Portability</h2>
        <p>
          You have the right to access, inspect, export, correct, and request deletion of your Career OS personal data. Your Career Twin and Passport assets remain portable across educational and employment transitions.
        </p>
      </section>

      <section id="contact" className="space-y-4">
        <h2>8. Governance &amp; Privacy Contacts</h2>
        <p>
          For privacy inquiries or to exercise data rights, contact our Data Privacy Officer at <a href={`mailto:${LEGAL_CONFIG.privacyEmail}`}>{LEGAL_CONFIG.privacyEmail}</a> or legal team at <a href={`mailto:${LEGAL_CONFIG.legalEmail}`}>{LEGAL_CONFIG.legalEmail}</a>.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
