import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import type { SecurityControlItem } from "@/types/platform/governance";

export default function SecurityTrustPage() {
  const meta = GOVERNANCE_MANIFEST["security"]!;

  const toc = [
    { id: "principles", title: "1. Security Philosophy & Architecture" },
    { id: "controls-matrix", title: "2. Security Control States Matrix" },
    { id: "rls-explanation", title: "3. Database Authorization & Row-Level Security" },
    { id: "encryption-identity", title: "4. Encryption & Identity Access Management" },
    { id: "audit-readiness", title: "5. Independent Audit & Compliance Roadmap" },
  ];

  const controls: SecurityControlItem[] = [
    {
      id: "sec-001",
      name: "Database Tenant Authorization (RLS)",
      category: "Data Access Control",
      description: "PostgreSQL Row-Level Security enforcing tenant boundary isolation at database layer.",
      state: "IMPLEMENTED",
      technicalMechanism: "PostgreSQL RLS policies on all application tables using auth.uid()",
      verificationEvidence: "Internal engineering test suite (Vitest + Supabase test runner)",
    },
    {
      id: "sec-002",
      name: "Transport Layer Encryption",
      category: "Network Security",
      description: "HTTPS/TLS encryption for all HTTP endpoints and API transmissions.",
      state: "IMPLEMENTED",
      technicalMechanism: "TLS 1.2/1.3 edge termination via Vercel / Supabase API gateway",
      verificationEvidence: "SSL Labs configuration report",
    },
    {
      id: "sec-003",
      name: "Data Encryption at Rest",
      category: "Data Protection",
      description: "AES-256 block encryption for database storage volumes and backups.",
      state: "IMPLEMENTED",
      technicalMechanism: "Managed cloud provider storage encryption (AWS KMS / Supabase Managed)",
      verificationEvidence: "Cloud provider infrastructure documentation",
    },
    {
      id: "sec-004",
      name: "Minor Candidate Safeguarding Redaction",
      category: "Privacy & Safeguarding",
      description: "Field-level PII redaction for candidate profiles queried by employers.",
      state: "IMPLEMENTED",
      technicalMechanism: "Application-layer redaction service and RLS candidate access functions",
      verificationEvidence: "Automated Vitest unit test suite (employer-redaction.test.ts)",
    },
    {
      id: "sec-005",
      name: "SOC 2 Type II Independent Attestation",
      category: "Independent Assurance",
      description: "Formal third-party audit of Trust Services Criteria (Security, Availability, Confidentiality).",
      state: "PLANNED",
      technicalMechanism: "Targeted SOC 2 Type II audit engagement following Phase 1 launch",
      verificationEvidence: "Roadmap item — not yet independently attested",
    },
    {
      id: "sec-006",
      name: "ISO/IEC 27001 Certification",
      category: "Independent Assurance",
      description: "Information Security Management System (ISMS) international standard certification.",
      state: "PLANNED",
      technicalMechanism: "Targeted ISO 27001 ISMS implementation",
      verificationEvidence: "Roadmap item — not yet independently certified",
    },
    {
      id: "sec-007",
      name: "Independent Third-Party Penetration Test",
      category: "Vulnerability Management",
      description: "Annual external grey-box penetration test of web application and API boundaries.",
      state: "IN_PROGRESS",
      technicalMechanism: "Third-party security audit firm engagement",
      verificationEvidence: "Scheduled prior to commercial enterprise deployment",
    },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Security architecture, database access controls, data protection mechanisms, and transparent verification states." toc={toc}>
      <section id="principles" className="space-y-4">
        <h2>1. Security Philosophy &amp; Architecture</h2>
        <p>
          Career OS approaches platform security with absolute transparency. We clearly distinguish between presently deployed technical controls, internal engineering safeguards, and future independent audit milestones.
        </p>
        <p>
          We do not make unsupported claims of third-party security certifications or call access-control mechanisms &quot;cryptographic enforcement.&quot;
        </p>
      </section>

      <section id="controls-matrix" className="space-y-4">
        <h2>2. Security Control States Matrix</h2>
        <p>
          Every security control in Career OS is categorized into one of five explicit verification states:
        </p>
        <div className="space-y-3 pt-2">
          {controls.map((ctrl) => (
            <div key={ctrl.id} className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-1.5 text-xs">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-bold text-[var(--color-charcoal-deep)] text-sm">{ctrl.name}</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] uppercase font-bold ${
                  ctrl.state === "IMPLEMENTED"
                    ? "bg-[var(--color-success-light)] text-[var(--color-success)] border border-[var(--color-success)]/20"
                    : ctrl.state === "IN_PROGRESS"
                    ? "bg-[var(--color-gold-light)] text-[var(--color-gold-deep)] border border-[var(--color-gold-base)]/30"
                    : "bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] border border-[var(--color-border-default)]"
                }`}>
                  {ctrl.state}
                </span>
              </div>
              <p className="text-[var(--color-text-secondary)]">{ctrl.description}</p>
              <div className="pt-1 text-[11px] text-[var(--color-text-tertiary)] grid grid-cols-1 sm:grid-cols-2 gap-1 border-t border-[var(--color-border-subtle)]">
                <div><strong>Mechanism:</strong> {ctrl.technicalMechanism}</div>
                <div><strong>Evidence:</strong> {ctrl.verificationEvidence}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="rls-explanation" className="space-y-4">
        <h2>3. Database Authorization &amp; Row-Level Security</h2>
        <p>
          Career OS uses PostgreSQL Row-Level Security (RLS) policies as a database-level authorization and access-control mechanism. RLS ensures that database queries executed on behalf of a user or workspace tenant only return records matching their authenticated role and explicit access permissions.
        </p>
        <p>
          <em>Technical Precision Note:</em> PostgreSQL RLS is an access-control and authorization policy engine, not cryptographic encryption. Data protection against unauthorized application roles is enforced at the query planner level.
        </p>
      </section>

      <section id="encryption-identity" className="space-y-4">
        <h2>4. Encryption &amp; Identity Access Management</h2>
        <ul>
          <li><strong>Data in Transit:</strong> Encrypted using TLS (TLS 1.2/1.3) across all public APIs and client connections.</li>
          <li><strong>Data at Rest:</strong> Database storage volumes and automatic backups are encrypted using AWS KMS / cloud provider AES-256 volume encryption.</li>
          <li><strong>Identity &amp; Session Handling:</strong> Secure HTTP-only JWT token management with Supabase Auth identity isolation.</li>
        </ul>
      </section>

      <section id="audit-readiness" className="space-y-4">
        <h2>5. Independent Audit &amp; Compliance Roadmap</h2>
        <p>
          Career OS is actively preparing its security management framework for formal independent audit engagements following Phase 1 launch. Independent SOC 2 Type II attestations and penetration testing reports will be published to enterprise customers upon formal completion.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
