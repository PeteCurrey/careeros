import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function SecurityPage() {
  const meta = GOVERNANCE_MANIFEST["security"]!;
  const toc = [
    { id: "infrastructure", title: "1. Cloud Infrastructure & Authentication" },
    { id: "rls-authorization", title: "2. PostgreSQL Row-Level Security (RLS)" },
    { id: "encryption", title: "3. In-Transit & At-Rest Encryption" },
    { id: "security-matrix", title: "4. Verified Controls Implementation Matrix" },
  ];

  const controls = [
    { control: "TLS 1.3 Transport Encryption", status: "IMPLEMENTED", detail: "All web traffic encrypted using TLS 1.3 with modern cipher suites." },
    { control: "AES-256 Volume Encryption", status: "IMPLEMENTED", detail: "Database volumes and storage buckets encrypted at rest using AES-256." },
    { control: "PostgreSQL Row-Level Security (RLS)", status: "IMPLEMENTED", detail: "Database-level authorization enforcing multi-tenant data boundaries." },
    { control: "Supabase JWT Auth & RBAC", status: "IMPLEMENTED", detail: "Secure HTTP-only session tokens with role-based access control." },
    { control: "SOC 2 Type II Formal Audit", status: "PLANNED", detail: "Independent SOC 2 Type II audit scheduled post-launch." },
    { control: "ISO 27001 Certification", status: "PLANNED", detail: "Information security management system alignment planned for Year 2." },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Verified technical security architecture, PostgreSQL Row-Level Security disclosures, and 5-state controls matrix." toc={toc}>
      <section id="infrastructure" className="space-y-4">
        <h2>1. Cloud Infrastructure &amp; Authentication</h2>
        <p>
          Career OS is hosted on enterprise cloud infrastructure (Supabase AWS US-East, Vercel Edge Network). Authentication relies on encrypted JWT session tokens managed through Supabase Auth.
        </p>
      </section>

      <section id="rls-authorization" className="space-y-4">
        <h2>2. PostgreSQL Row-Level Security (RLS)</h2>
        <p>
          <em>Technical Precision Note:</em> PostgreSQL Row-Level Security (RLS) is an database access-control and authorization policy engine, not cryptographic encryption. Data protection against unauthorized application roles is enforced at the query planner level.
        </p>
      </section>

      <section id="encryption" className="space-y-4">
        <h2>3. In-Transit &amp; At-Rest Encryption</h2>
        <p>
          Data in transit is encrypted using TLS 1.3. Data at rest is encrypted using AES-256 volume encryption.
        </p>
      </section>

      <section id="security-matrix" className="space-y-4">
        <h2>4. Verified Controls Implementation Matrix</h2>
        <div className="space-y-3 pt-2">
          {controls.map((c) => (
            <div key={c.control} className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-1 text-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-1">
                <span className="font-bold text-sm text-[var(--color-charcoal-deep)]">{c.control}</span>
                <span className={`font-mono text-[10px] px-2 py-0.5 rounded uppercase font-bold ${c.status === "IMPLEMENTED" ? "bg-[var(--color-success-light)] text-[var(--color-success)] border border-[var(--color-success)]/30" : "bg-blue-50 text-blue-800 border border-blue-200"}`}>
                  {c.status}
                </span>
              </div>
              <p className="text-[var(--color-text-secondary)]">{c.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </GovernancePageLayout>
  );
}