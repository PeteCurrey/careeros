import React from "react";
import Link from "next/link";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { History, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";

export default function LegalVersionHistoryPage() {
  const meta = GOVERNANCE_MANIFEST["version-history"]!;
  const toc = [
    { id: "versioning-model", title: "1. Governance Versioning & Semantic Structure" },
    { id: "changelog", title: "2. Active Governance Document Register" },
    { id: "archive-access", title: "3. Historical Archive Requests" },
  ];

  const docEntries = Object.values(GOVERNANCE_MANIFEST);

  return (
    <GovernancePageLayout
      meta={meta}
      subtitle="Public audit log and changelog of all active, updated, and historic legal terms, privacy policies, and compliance standards."
      toc={toc}
    >
      <section id="versioning-model" className="space-y-4">
        <h2>1. Governance Versioning &amp; Semantic Structure</h2>
        <p>
          Career OS maintains strict document versioning across all public legal policies, ethical standards, and regulatory alignment briefs. Each document is tracked with a semantic version number (YYYY.MM.V), formal ownership, review schedules, and change summaries.
        </p>
      </section>

      <section id="changelog" className="space-y-6">
        <h2>2. Active Governance Document Register</h2>
        <p>
          The current registered version status across all platform governance assets is detailed below:
        </p>

        <div className="space-y-4 not-prose">
          {docEntries.map((doc) => (
            <div
              key={doc.id}
              className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-[#2F8FFF] uppercase tracking-wider font-bold">
                    {doc.category} &bull; v{doc.version}
                  </span>
                  <TechnicalBadge variant="neutral">{doc.status}</TechnicalBadge>
                </div>
                <h3 className="text-sm font-bold text-white">{doc.title}</h3>
                <p className="text-xs text-[var(--color-text-secondary)] line-clamp-1">{doc.changeSummary}</p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[11px] font-mono text-[var(--color-taupe-300)]">
                  Reviewed: {doc.lastReviewedDate}
                </span>
                <Link
                  href={`/${doc.slug}`}
                  className="text-xs font-semibold text-[#6BB8FF] hover:underline inline-flex items-center gap-1"
                >
                  <span>View Doc</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="archive-access" className="space-y-4">
        <h2>3. Historical Archive Requests</h2>
        <p>
          For regulatory inquiries, litigation discovery, or historical verification of terms in effect at a specific prior date, please contact <a href="mailto:legal@career-os.com" className="text-[#6BB8FF] font-semibold underline">legal@career-os.com</a>.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
