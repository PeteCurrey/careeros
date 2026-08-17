import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function SchoolTermsPage() {
  const meta = GOVERNANCE_MANIFEST["school-terms"]!;
  const toc = [
    { id: "scope", title: "1. Contracting Scope & Parties" },
    { id: "authorizations", title: "2. Authorized Administrators & Roster Provisioning" },
    { id: "ferpa-coppa", title: "3. FERPA School Official & COPPA Compliance" },
    { id: "data-governance", title: "4. Student Data Governance & Asset Separation" },
    { id: "commercial-prohibition", title: "5. Prohibition of Advertising & Commercial Exploitation" },
    { id: "employer-programs", title: "6. Institution-Controlled Opportunity Programs" },
    { id: "retention-transition", title: "7. Data Retention & Post-Graduation Transition" },
    { id: "security-dpa", title: "8. Security Standards & Model DPA Framework" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Institutional terms governing Career OS deployment across K-12 school districts, multi-academy trusts, and higher education institutions." toc={toc}>
      <section id="scope" className="space-y-4">
        <h2>1. Contracting Scope &amp; Parties</h2>
        <p>
          These School &amp; Institutional Terms of Service (&quot;School Terms&quot;) govern the deployment and use of Career OS by school districts, local educational agencies (LEAs), charter networks, secondary schools, and postsecondary institutions (collectively, &quot;Educational Institutions&quot;).
        </p>
      </section>

      <section id="authorizations" className="space-y-4">
        <h2>2. Authorized Administrators &amp; Roster Provisioning</h2>
        <p>
          Educational Institutions designate authorized administrators, educators, and counselors to provision student accounts via Student Information System (SIS) integration, Clever/ClassLink single sign-on, or secure CSV roster upload. Institutions warrant that roster transfers comply with applicable student privacy laws.
        </p>
      </section>

      <section id="ferpa-coppa" className="space-y-4">
        <h2>3. FERPA School Official &amp; COPPA Compliance</h2>
        <p>
          Where an Educational Institution engages Career OS to perform institutional services, Career OS acts as a &quot;School Official&quot; with legitimate educational interests pursuant to 34 CFR § 99.31(a)(1)(i)(B). Career OS remains under the direct control of the institution with respect to the use and maintenance of education records.
        </p>
        <p>
          For students under 13 enrolled in institutional programs, the institution acts as the consenting entity under FTC COPPA guidelines, authorizing data collection solely for legitimate educational purposes.
        </p>
      </section>

      <section id="data-governance" className="space-y-4">
        <h2>4. Student Data Governance &amp; Asset Separation</h2>
        <p>
          Career OS strictly distinguishes between institution-owned education records (transcripts, district attendance, official grades) and user-created Career Twin assets (student project code, personal reflections, portfolio evidence). School records remain governed by the institutional Data Processing Addendum (DPA).
        </p>
      </section>

      <section id="commercial-prohibition" className="space-y-4">
        <h2>5. Prohibition of Advertising &amp; Commercial Exploitation</h2>
        <p>
          Career OS strictly prohibits third-party advertising, commercial profiling, behavioral retargeting, and student data sales within school-sponsored workspaces.
        </p>
      </section>

      <section id="employer-programs" className="space-y-4">
        <h2>6. Institution-Controlled Opportunity Programs</h2>
        <p>
          Employer interactions involving enrolled K-12 students are restricted to school-approved opportunity programs (internships, work-based learning, apprenticeships). School counselors retain full visibility and oversight over employer introductions.
        </p>
      </section>

      <section id="retention-transition" className="space-y-4">
        <h2>7. Data Retention &amp; Post-Graduation Transition</h2>
        <p>
          Upon graduation or district departure, student-created Career Twin and Passport evidence remains portable to the student&apos;s personal account, while institutional administrative records are archived or returned pursuant to district DPA retention schedules.
        </p>
      </section>

      <section id="security-dpa" className="space-y-4">
        <h2>8. Security Standards &amp; Model DPA Framework</h2>
        <p>
          Career OS executes standardized state DPA exhibits (CA CSPA, NY Ed Law § 2-d Exhibit E, IL SDPC) incorporating TLS 1.3 encryption, AES-256 storage encryption, and 24-hour breach notification commitments.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
