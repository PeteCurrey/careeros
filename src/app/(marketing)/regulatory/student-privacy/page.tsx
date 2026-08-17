import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";

export default function StudentPrivacyRegulatoryPage() {
  const meta = GOVERNANCE_MANIFEST["student-privacy"]!;

  const toc = [
    { id: "framework", title: "1. Framework Overview" },
    { id: "scope", title: "2. Scope & Statutory Applicability" },
    { id: "relevance", title: "3. Institutional & Statutory Relevance" },
    { id: "product-response", title: "4. Career OS Product Response & Controls" },
    { id: "readiness-status", title: "5. Current Readiness Status" },
    { id: "outstanding-work", title: "6. Outstanding Engineering & Legal Work" },
    { id: "primary-sources", title: "7. Primary Sources & Statutory Citations" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Regulatory alignment and readiness framework for US federal and state K-12 and postsecondary student privacy statutes." toc={toc}>
      <section id="framework" className="space-y-4">
        <h2>1. Framework Overview</h2>
        <p>
          This document details Career OS&apos;s regulatory alignment and engineering readiness posture regarding United States student privacy legislation, including FERPA, COPPA, SOPIPA, and state-level student data protection statutes.
        </p>
        <p>
          Career OS presents its compliance posture transparently: describing active architecture controls alongside ongoing legal and engineering readiness work.
        </p>
      </section>

      <section id="scope" className="space-y-4">
        <h2>2. Scope &amp; Statutory Applicability</h2>
        <p>
          This framework applies to all Career OS services deployed in US primary, secondary (K-12), and postsecondary educational environments, covering:
        </p>
        <ul>
          <li><strong>Family Educational Rights and Privacy Act (FERPA):</strong> 20 U.S.C. § 1232g; 34 CFR Part 99.</li>
          <li><strong>Children&apos;s Online Privacy Protection Act (COPPA):</strong> 15 U.S.C. §§ 6501–6506; 16 CFR Part 312.</li>
          <li><strong>Student Online Personal Information Protection Act (SOPIPA):</strong> Cal. Bus. &amp; Prof. Code §§ 22584–22585.</li>
          <li><strong>State Student Data Privacy Statutes:</strong> NY Education Law § 2-d, IL SOPPA (105 ILCS 85/), TX SCOPE Act (HB 18).</li>
        </ul>
      </section>

      <section id="relevance" className="space-y-4">
        <h2>3. Institutional &amp; Statutory Relevance</h2>
        <p>
          Educational institutions operating in the United States require technology providers to satisfy rigorous data governance criteria:
        </p>
        <ul>
          <li><strong>FERPA School Official Exception:</strong> Where an institution engages Career OS to perform institutional services, the arrangement must satisfy 34 CFR § 99.31(a)(1)(i)(B) (direct control, legitimate educational interest, redisclosure limits).</li>
          <li><strong>COPPA Institutional Consent:</strong> Schools may consent to data collection for under-13 students solely for authorized educational purposes under FTC COPPA guidelines.</li>
          <li><strong>Statutory Prohibitions:</strong> Prohibition of targeted advertising based on K-12 student data, student profiling for non-educational purposes, and commercial sale of student information.</li>
        </ul>
      </section>

      <section id="product-response" className="space-y-4">
        <h2>4. Career OS Product Response &amp; Controls</h2>
        <p>
          Career OS addresses these statutory requirements through structural platform controls:
        </p>
        <ul>
          <li><strong>Canonical Age Model:</strong> Age 16+ direct account eligibility; Age 13–15 verified relationship gating; Under-13 school-only enrollment.</li>
          <li><strong>Zero Third-Party Advertising:</strong> No third-party ad tracking, behavioral retargeting, or data monetization.</li>
          <li><strong>Default-Private Minor Profiles:</strong> Profiles for users under 18 are default-private with recruiter browsing hard-blocked.</li>
          <li><strong>Multi-Tenant Data Isolation:</strong> PostgreSQL Row-Level Security (RLS) policies enforcing institutional workspace isolation.</li>
          <li><strong>Asset Separation:</strong> Student-created Career Twin assets remain portable while school-owned administrative records remain subject to district DPA terms.</li>
        </ul>
      </section>

      <section id="readiness-status" className="space-y-4">
        <h2>5. Current Readiness Status</h2>
        <div className="space-y-2 text-xs">
          <div className="p-3 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded">
            <span className="font-semibold text-[var(--color-text-primary)] block">FERPA Alignment: READY (Conditional Model DPA)</span>
            <p className="text-[var(--color-text-secondary)]">Structured to support FERPA School Official DPAs executed with participating districts.</p>
          </div>
          <div className="p-3 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded">
            <span className="font-semibold text-[var(--color-text-primary)] block">COPPA Alignment: READY (School Enrollment Pathway)</span>
            <p className="text-[var(--color-text-secondary)]">Under-13 consumer registration hard-blocked. School-administered onboarding supported.</p>
          </div>
          <div className="p-3 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded">
            <span className="font-semibold text-[var(--color-text-primary)] block">SOPIPA &amp; State Student Privacy: IN PROGRESS</span>
            <p className="text-[var(--color-text-secondary)]">Core advertising prohibitions active; state-specific DPA addenda undergoing counsel review.</p>
          </div>
        </div>
      </section>

      <section id="outstanding-work" className="space-y-4">
        <h2>6. Outstanding Engineering &amp; Legal Work</h2>
        <p>
          The following readiness items are currently being finalized prior to Phase 1 state-wide district deployments:
        </p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Finalization of state-specific DPA exhibits (CA CSPA, NY Exhibit E, IL SDPC DPA).</li>
          <li>Outside counsel review of Texas SCOPE Act (HB 18) digital service provider obligations.</li>
          <li>Integration of automated district DPA verification workflows in the institutional dashboard.</li>
        </ol>
      </section>

      <section id="primary-sources" className="space-y-4">
        <h2>7. Primary Sources &amp; Statutory Citations</h2>
        <ul>
          <li>U.S. Department of Education Privacy Technical Assistance Center (PTAC): <a href="https://studentprivacy.ed.gov/" target="_blank" rel="noopener noreferrer">studentprivacy.ed.gov</a></li>
          <li>FTC COPPA Guidance for Educational Institutions: 16 CFR Part 312</li>
          <li>California Student Online Personal Information Protection Act: Cal. Bus. &amp; Prof. Code §§ 22584–22585</li>
        </ul>
      </section>
    </GovernancePageLayout>
  );
}
