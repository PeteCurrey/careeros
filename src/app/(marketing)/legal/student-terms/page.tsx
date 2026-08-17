import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function StudentTermsPage() {
  const meta = GOVERNANCE_MANIFEST["student-terms"]!;

  const toc = [
    { id: "eligibility", title: "1. Account Eligibility & Age Policy" },
    { id: "custodianship", title: "2. Data Governance & Asset Separation" },
    { id: "ferpa-transfer", title: "3. FERPA Rights Transfer & Eligible Student Status" },
    { id: "guardian-rights", title: "4. Parent & Guardian Access Principles" },
    { id: "institutional-agreements", title: "5. School & Institutional Sponsorship" },
    { id: "account-transition", title: "6. Account Lifecycle & Post-Graduation Transition" },
    { id: "safeguarding", title: "7. Minor Safeguarding & Recruiter Interaction Restrictions" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Operative terms governing student accounts, youth privacy, institutional data separation, and FERPA rights transfer." toc={toc}>
      <section id="eligibility" className="space-y-4">
        <h2>1. Account Eligibility &amp; Age Policy</h2>
        <p>
          Career OS operates a multi-tier age model designed to balance youth autonomy with strict statutory safeguards under applicable US privacy laws:
        </p>
        <ul>
          <li>
            <strong>Age 16 or Older (Direct Account Eligibility):</strong> A person aged 16 or older may create a direct individual Career OS account without institutional or guardian sponsorship. This is a Career OS product eligibility policy and does not constitute a universal statement of legal majority. Users aged 16–17 remain minors where applicable law treats them as minors and receive mandatory minor safeguarding protections.
          </li>
          <li>
            <strong>Ages 13–15 (Verified Relationship Requirement):</strong> Users aged 13–15 may access Career OS only through a verified school/institutional arrangement or a verified parent/guardian consent arrangement. Open, unverified self-service account registration is prohibited for this age band.
          </li>
          <li>
            <strong>Under Age 13 (Institutional Enrollment Only):</strong> Career OS does not provide open consumer registration for children under 13. Under-13 access is permitted solely through a verified educational institution agreement operating under FERPA&apos;s school-official exception for authorized educational purposes.
          </li>
        </ul>
      </section>

      <section id="custodianship" className="space-y-4">
        <h2>2. Data Governance &amp; Asset Separation</h2>
        <p>
          Career OS explicitly distinguishes between school-provided education records and user-created professional assets:
        </p>
        <ul>
          <li>
            <strong>School-Provided Education Records:</strong> Transcripts, formal attendance records, district assessment scores, and official institutional communications provided by an educational institution remain governed by the applicable school institutional agreement and statutory FERPA rules.
          </li>
          <li>
            <strong>User-Created Career Twin &amp; Passport Assets:</strong> Self-directed skill profiles, personal project repositories, student-submitted reflection logs, and portable evidence artifacts created directly by the student belong to the student&apos;s personal record, subject to applicable terms and privacy choices.
          </li>
        </ul>
      </section>

      <section id="ferpa-transfer" className="space-y-4">
        <h2>3. FERPA Rights Transfer &amp; Eligible Student Status</h2>
        <p>
          Under the Family Educational Rights and Privacy Act (FERPA, 34 CFR § 99.5), rights regarding school-maintained education records transfer from parents/guardians to the student when the student:
        </p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Reaches 18 years of age; <strong>OR</strong></li>
          <li>Attends a postsecondary institution at any age.</li>
        </ol>
        <p>
          Once a student attains &quot;Eligible Student&quot; status under FERPA, the right to inspect, review, and authorize disclosure of their school-maintained education records resides primarily with the student. Dual-enrollment students attending both high school and postsecondary courses exercise FERPA rights directly with respect to their postsecondary education records.
        </p>
      </section>

      <section id="guardian-rights" className="space-y-4">
        <h2>4. Parent &amp; Guardian Access Principles</h2>
        <p>
          Parent and guardian access, review, and deletion rights are contextual and depend on:
        </p>
        <ul>
          <li>The user&apos;s current age and jurisdictional minor status;</li>
          <li>Whether the student has attained FERPA Eligible Student status;</li>
          <li>Whether the account is school-sponsored or a direct consumer account;</li>
          <li>The source and legal classification of the specific information requested;</li>
          <li>The terms of the applicable institutional agreement.</li>
        </ul>
        <p>
          Parents of students under 18 enrolled in K-12 institutional programs retain inspection rights over school-provided education records through their school district, as governed by local school policy and FERPA.
        </p>
      </section>

      <section id="institutional-agreements" className="space-y-4">
        <h2>5. School &amp; Institutional Sponsorship</h2>
        <p>
          When a student accesses Career OS through a participating school or district, Career OS acts under the terms of the Data Protection Agreement (DPA) executed with that institution. Institutional administrators may manage access grants, institutional course linkages, and verified school credentials in accordance with statutory requirements.
        </p>
      </section>

      <section id="account-transition" className="space-y-4">
        <h2>6. Account Lifecycle &amp; Post-Graduation Transition</h2>
        <p>
          Career OS supports non-destructive lifecycle transitions as students progress:
        </p>
        <ul>
          <li>
            <strong>High School to Direct Youth / Adult Account:</strong> Upon attaining age 16 or graduating high school, students may transition their personal Career Twin and Passport assets into a direct individual account.
          </li>
          <li>
            <strong>Institutional Asset Isolation:</strong> School-owned administrative records remain subject to institutional retention schedules and are isolated from the personal consumer profile unless explicitly authorized.
          </li>
        </ul>
      </section>

      <section id="safeguarding" className="space-y-4">
        <h2>7. Minor Safeguarding &amp; Recruiter Interaction Restrictions</h2>
        <p>
          Minor profiles (users under 18) are default-private. Unrestricted recruiter browsing of minor profiles and cold commercial solicitation of school-age users are strictly prohibited. Employer interactions involving minor candidates are restricted to institution-controlled opportunity programs featuring verified employers, verified opportunities, restricted messaging, and full interaction audit logging.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
