import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function DataProcessingAddendumPage() {
  const meta = GOVERNANCE_MANIFEST["data-processing"]!;
  const toc = [
    { id: "roles", title: "1. Controller & Processor Roles" },
    { id: "instructions", title: "2. Processing Scope & Subject Instructions" },
    { id: "security-annex", title: "3. Technical Security Annex (TLS & Encryption)" },
    { id: "subprocessors", title: "4. Subprocessor Authorization & 30-Day Notice" },
    { id: "incidents", title: "5. Security Incident Notification (24 Hours)" },
    { id: "retention-deletion", title: "6. Data Return & Deletion Obligations" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Standardized Data Processing Addendum (DPA) for institutional school districts and enterprise employer customers." toc={toc}>
      <section id="roles" className="space-y-4">
        <h2>1. Controller &amp; Processor Roles</h2>
        <p>
          This Data Processing Addendum (&quot;DPA&quot;) supplements institutional and commercial agreements executed with {LEGAL_CONFIG.legalEntityName}. Where an Educational Institution or Employer acts as Data Controller, Career OS acts as Data Processor under applicable US and international privacy laws.
        </p>
      </section>

      <section id="instructions" className="space-y-4">
        <h2>2. Processing Scope &amp; Subject Instructions</h2>
        <p>
          Career OS processes personal data solely to fulfill obligations under the principal agreement, in accordance with the Controller&apos;s documented instructions, and in compliance with FERPA, COPPA, CCPA, and applicable state statutes.
        </p>
      </section>

      <section id="security-annex" className="space-y-4">
        <h2>3. Technical Security Annex (TLS &amp; Encryption)</h2>
        <p>
          Career OS maintains technical and organizational measures including TLS 1.3 in-transit encryption, AES-256 at-rest volume encryption, PostgreSQL Row-Level Security tenant isolation, and strict role-based access control (RBAC).
        </p>
      </section>

      <section id="subprocessors" className="space-y-4">
        <h2>4. Subprocessor Authorization &amp; 30-Day Notice</h2>
        <p>
          Controller authorizes Career OS to engage approved sub-processors listed on our <a href="/legal/subprocessors">Approved Subprocessor List</a>. Career OS provides 30 days prior notice for sub-processor changes.
        </p>
      </section>

      <section id="incidents" className="space-y-4">
        <h2>5. Security Incident Notification (24 Hours)</h2>
        <p>
          Career OS will notify affected Controllers without undue delay and no later than 24 hours after confirming a security breach involving Controller personal data.
        </p>
      </section>

      <section id="retention-deletion" className="space-y-4">
        <h2>6. Data Return &amp; Deletion Obligations</h2>
        <p>
          Upon contract termination, Career OS will, at Controller&apos;s election, return or securely delete all Controller personal data within 30 days, subject to statutory audit retention schedules.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
