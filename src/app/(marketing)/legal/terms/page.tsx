import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function TermsOfServicePage() {
  const meta = GOVERNANCE_MANIFEST["terms"]!;

  const toc = [
    { id: "intro", title: "1. Introduction & Contracting Relationship" },
    { id: "eligibility", title: "2. Eligibility & Canonical Age Architecture" },
    { id: "account-security", title: "3. Account Security & Authentication" },
    { id: "service-description", title: "4. Platform Subsystems & Feature Classification" },
    { id: "ai-features", title: "5. AI Features & System Limitations" },
    { id: "disclaimers-outcomes", title: "6. Outcome Disclaimers (Employment & Education)" },
    { id: "user-content", title: "7. User Content & Processing Grants" },
    { id: "evidence-spectrum", title: "8. Evidence Taxonomy & Verification Spectrum" },
    { id: "integrity", title: "9. Academic & Professional Evidence Integrity" },
    { id: "privacy-grants", title: "10. Privacy Settings & Candidate Access Grants" },
    { id: "schools", title: "11. School & Institutional Terms Precedence" },
    { id: "employers", title: "12. Employer & Recruiter Engagement Rules" },
    { id: "third-parties", title: "13. Third-Party Services & Connected Systems" },
    { id: "community", title: "14. Community Standards & Scraping Prohibitions" },
    { id: "enforcement", title: "15. Suspension, Termination & Safeguarding Enforcement" },
    { id: "exit", title: "16. Account Exit, Data Portability & Deletion" },
    { id: "ip", title: "17. Intellectual Property & Branding Rights" },
    { id: "modifications", title: "18. Service Changes & Beta Features" },
    { id: "pricing", title: "19. Individual Pricing & Commercial Services" },
    { id: "warranties", title: "20. Warranties & General Disclaimers" },
    { id: "liability", title: "21. Limitation of Liability & Indemnification" },
    { id: "governing-law", title: "22. Governing Law, Jurisdiction & Contact" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Operative legal contract governing individual account creation, platform access, AI features, evidence verification, and user rights." toc={toc}>
      <section id="intro" className="space-y-4">
        <h2>1. Introduction &amp; Contracting Relationship</h2>
        <p>
          These General Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and <strong>{LEGAL_CONFIG.legalEntityName}</strong> (&quot;Career OS,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your access to and use of the Career OS website, software applications, AI mentor interfaces, Career Twin engine, Career Passport ledger, and related services (collectively, the &quot;Platform&quot;).
        </p>
        <p>
          By creating an account, accessing, or using the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are accepting these Terms on behalf of an educational institution or corporate employer, you represent and warrant that you have full legal authority to bind that entity.
        </p>
      </section>

      <section id="eligibility" className="space-y-4">
        <h2>2. Eligibility &amp; Canonical Age Architecture</h2>
        <p>
          Career OS operates an explicit, canonical age eligibility policy designed to protect youth while granting professional self-sovereignty:
        </p>
        <ul>
          <li>
            <strong>Age 16 or Older (Direct Individual Accounts):</strong> A person aged 16 or older is eligible to create a direct individual Career OS account without institutional or parent/guardian sponsorship. This is a Career OS product eligibility rule. Users aged 16–17 remain legal minors where applicable law treats them as minors and receive active minor safeguarding protections.
          </li>
          <li>
            <strong>Ages 13–15 (Verified Relationship Requirement):</strong> Persons aged 13–15 may access the Platform only through a verified school/institutional arrangement or a verified parent/guardian consent arrangement. Open, unverified self-service account registration is prohibited.
          </li>
          <li>
            <strong>Under Age 13 (Institutional Enrollment Only):</strong> Direct consumer registration for children under 13 is prohibited under COPPA. Access is enabled solely through a verified educational institution agreement operating under FERPA&apos;s school-official exception for authorized educational purposes.
          </li>
          <li>
            <strong>Legal Capacity:</strong> Where a user cannot independently enter a binding legal contract under applicable jurisdictional law, the legally authorized parent, guardian, or sponsoring educational institution acts as the contracting party without altering Career OS&apos;s age-16 direct account eligibility threshold.
          </li>
        </ul>
      </section>

      <section id="account-security" className="space-y-4">
        <h2>3. Account Security &amp; Authentication</h2>
        <p>
          You are responsible for maintaining the security and confidentiality of your authentication credentials. You agree to provide accurate, current, and complete identity information during registration. Sharing account credentials, allowing third parties to access your individual profile, or transferring accounts without authorization is strictly prohibited. You must notify us immediately at <a href={`mailto:${LEGAL_CONFIG.securityEmail}`}>{LEGAL_CONFIG.securityEmail}</a> upon discovering any unauthorized access or security breach.
        </p>
      </section>

      <section id="service-description" className="space-y-4">
        <h2>4. Platform Subsystems &amp; Feature Classification</h2>
        <p>
          Career OS integrates core subsystems designed for lifelong professional development. Deployed features are distinguished from future/planned functionality:
        </p>
        <ul>
          <li><strong>AI Career Mentor (Deployed):</strong> Domain-specialized AI system providing context-aware guidance and recommendation provenance.</li>
          <li><strong>Career Twin (Deployed):</strong> Structured model of verified skills, preferences, strengths, and developmental goals.</li>
          <li><strong>Career Passport (Deployed):</strong> Portable record of verified credentials, project evidence, and qualifications.</li>
          <li><strong>Career Graph (Deployed):</strong> Structural map of skills, industries, roles, and pathway connections.</li>
          <li><strong>Opportunity Agent &amp; Employer Agent (Future Vision):</strong> Ethical talent matching and discovery tools (currently operating under advisory decision support models).</li>
        </ul>
      </section>

      <section id="ai-features" className="space-y-4">
        <h2>5. AI Features &amp; System Limitations</h2>
        <p>
          Career OS incorporates artificial intelligence (AI) systems, including large language models (LLMs). By using AI features, you acknowledge and agree:
        </p>
        <ul>
          <li><strong>AI is Not Human:</strong> The AI Career Mentor is an automated software system and does not constitute a human mentor, licensed career counselor, attorney, financial advisor, or medical professional.</li>
          <li><strong>No Accuracy Guarantee:</strong> AI outputs are advisory. AI systems may occasionally produce inaccurate, incomplete, or stale information (&quot;hallucinations&quot;). You must independently evaluate all AI suggestions.</li>
          <li><strong>User Agency:</strong> All ultimate career decisions, job applications, educational choices, and professional commitments remain your sole responsibility.</li>
          <li><strong>No Hidden Reasoning Disclosures:</strong> Career OS surfaces user-facing decision factors and provenance metadata, but does not guarantee disclosure of raw model weights or proprietary chain-of-thought traces.</li>
        </ul>
      </section>

      <section id="disclaimers-outcomes" className="space-y-4">
        <h2>6. Outcome Disclaimers (Employment &amp; Education)</h2>
        <p>
          Career OS provides tools for professional development, but does NOT guarantee:
        </p>
        <ul>
          <li>Employment, job placement, offer letters, or interview invitations;</li>
          <li>Specific salary levels, compensation increases, or promotions;</li>
          <li>Admission to educational institutions, degree programs, or vocational courses;</li>
          <li>Professional licenses, certifications, or regulatory accreditations;</li>
          <li>Immigration visas, work authorizations, or international mobility clearances;</li>
          <li>Commercial, entrepreneurial, or investment success.</li>
        </ul>
      </section>

      <section id="user-content" className="space-y-4">
        <h2>7. User Content &amp; Processing Grants</h2>
        <p>
          You retain all ownership rights in the personal content, project code, written reflections, portfolio work, and evidence artifacts you upload or create on Career OS. You grant Career OS a worldwide, non-exclusive, royalty-free license to store, process, format, and display your content solely for the purpose of delivering, securing, and improving the Platform services in accordance with your privacy settings.
        </p>
      </section>

      <section id="evidence-spectrum" className="space-y-4">
        <h2>8. Evidence Taxonomy &amp; Verification Spectrum</h2>
        <p>
          To preserve trust, Career OS categorizes all profile claims across an explicit verification spectrum:
        </p>
        <ol className="list-decimal pl-5 space-y-1">
          <li><strong>Self-Declared:</strong> Unverified claims entered directly by the user.</li>
          <li><strong>Evidence Attached:</strong> User claims supported by attached work samples or code repositories.</li>
          <li><strong>Platform Assessed:</strong> Capabilities evaluated via interactive platform assessments.</li>
          <li><strong>Third-Party Verified:</strong> Qualifications confirmed via accredited assessment partners.</li>
          <li><strong>Issuer Verified:</strong> Credentials directly issued or cryptographically signed by accredited institutions.</li>
          <li><strong>Employer Verified:</strong> Experience records confirmed directly by verified employers.</li>
        </ol>
      </section>

      <section id="integrity" className="space-y-4">
        <h2>9. Academic &amp; Professional Evidence Integrity</h2>
        <p>
          Authenticity is fundamental to Career OS. You strictly agree NOT to:
        </p>
        <ul>
          <li>Fabricate qualifications, degree certificates, or employment dates;</li>
          <li>Upload counterfeit work samples, plagiarized code, or fake references;</li>
          <li>Use AI image/document generators to forge official institutional credentials;</li>
          <li>Impersonate licensed professionals or credentialed individuals.</li>
        </ul>
      </section>

      <section id="privacy-grants" className="space-y-4">
        <h2>10. Privacy Settings &amp; Candidate Access Grants</h2>
        <p>
          Candidate profiles are default-private. Employers cannot view your personal contact details (Name, Email, Phone) unless you explicitly accept a match or grant access through a candidate Data Access Grant. You may revoke access grants at any time through your privacy settings.
        </p>
      </section>

      <section id="schools" className="space-y-4">
        <h2>11. School &amp; Institutional Terms Precedence</h2>
        <p>
          Where an account is created under a school district agreement or institutional contract, the terms of the <a href="/legal/school-terms">School Terms of Service</a> and applicable Data Processing Addendum (DPA) govern the educational record relationship.
        </p>
      </section>

      <section id="employers" className="space-y-4">
        <h2>12. Employer &amp; Recruiter Engagement Rules</h2>
        <p>
          Employers using Career OS are bound by the <a href="/legal/employer-terms">Employer Terms of Service</a>, which mandate verified corporate identities, legitimate job openings, EEOC non-discrimination, and minor candidate safeguards.
        </p>
      </section>

      <section id="third-parties" className="space-y-4">
        <h2>13. Third-Party Services &amp; Connected Systems</h2>
        <p>
          The Platform may link to third-party services, repository hosts, or learning platforms. Career OS is not responsible for the availability, content, or privacy practices of external services beyond our legal control.
        </p>
      </section>

      <section id="community" className="space-y-4">
        <h2>14. Community Standards &amp; Scraping Prohibitions</h2>
        <p>
          You agree to abide by our <a href="/legal/acceptable-use">Acceptable Use Policy</a>. Automated data harvesting, candidate profile scraping, bulk email extraction, harassment, or commercial spamming is strictly prohibited.
        </p>
      </section>

      <section id="enforcement" className="space-y-4">
        <h2>15. Suspension, Termination &amp; Safeguarding Enforcement</h2>
        <p>
          Career OS reserves the right to suspend or terminate accounts that violate these Terms, engage in credential fraud, or compromise minor safeguarding. Urgent restrictions may be imposed to prevent harm or protect statutory privacy rights.
        </p>
      </section>

      <section id="exit" className="space-y-4">
        <h2>16. Account Exit, Data Portability &amp; Deletion</h2>
        <p>
          You may export your Career Twin and Passport data or delete your account at any time. Account deletion removes your personal profile, subject to statutory audit retention and institutional DPA rules.
        </p>
      </section>

      <section id="ip" className="space-y-4">
        <h2>17. Intellectual Property &amp; Branding Rights</h2>
        <p>
          Career OS, the Career OS logo, Career Twin, Career Passport, and Career Graph are trademarks and proprietary technology of {LEGAL_CONFIG.legalEntityName}. All rights reserved.
        </p>
      </section>

      <section id="modifications" className="space-y-4">
        <h2>18. Service Changes &amp; Beta Features</h2>
        <p>
          We continuously update the Platform. Material changes to these Terms will be notified 30 days in advance via email or in-app notice.
        </p>
      </section>

      <section id="pricing" className="space-y-4">
        <h2>19. Individual Pricing &amp; Commercial Services</h2>
        <p>
          Individual core accounts on Career OS are currently free. Institutional district deployments, enterprise employer workspaces, and advanced API access are governed by separate commercial order forms.
        </p>
      </section>

      <section id="warranties" className="space-y-4">
        <h2>20. Warranties &amp; General Disclaimers</h2>
        <p>
          THE PLATFORM IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
        </p>
      </section>

      <section id="liability" className="space-y-4">
        <h2>21. Limitation of Liability &amp; Indemnification</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, CAREER OS SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE PLATFORM. (Provisions subject to specialist legal review).
        </p>
      </section>

      <section id="governing-law" className="space-y-4">
        <h2>22. Governing Law, Jurisdiction &amp; Contact</h2>
        <p>
          These Terms are governed by the laws of the {LEGAL_CONFIG.governingLaw}. Any disputes shall be submitted to the exclusive jurisdiction of the state or federal courts located in {LEGAL_CONFIG.disputeVenue}. For legal notices, contact <a href={`mailto:${LEGAL_CONFIG.legalEmail}`}>{LEGAL_CONFIG.legalEmail}</a>.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
