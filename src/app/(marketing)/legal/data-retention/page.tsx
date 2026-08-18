import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { DATA_RETENTION_SCHEDULE } from "@/lib/retention/schedule";
import { ShieldCheck, Clock, FileCheck2, Trash2 } from "lucide-react";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";

export default function LegalDataRetentionPage() {
  const meta = GOVERNANCE_MANIFEST["data-retention"]!;
  const toc = [
    { id: "principles", title: "1. Core Retention & Minimisation Principles" },
    { id: "schedule", title: "2. Comprehensive Data Retention Schedule" },
    { id: "deletion-rights", title: "3. User-Initiated Erasure & Account Termination" },
    { id: "backup-rotation", title: "4. Backup Lifecycle & Cryptographic Purging" },
  ];

  return (
    <GovernancePageLayout
      meta={meta}
      subtitle="Transparent retention schedules, legal justifications, and automated purge mechanisms across all Career OS data categories."
      toc={toc}
    >
      <section id="principles" className="space-y-4">
        <h2>1. Core Retention &amp; Minimisation Principles</h2>
        <p>
          Career OS adheres strictly to data minimisation and storage limitation principles. We store personal data only for as long as necessary to fulfill the authentic career development and evidence verification purposes for which it was collected, or to comply with statutory legal and regulatory obligations.
        </p>
      </section>

      <section id="schedule" className="space-y-6">
        <h2>2. Comprehensive Data Retention Schedule</h2>
        <p>
          The table below outlines our operational retention rules across data categories:
        </p>

        <div className="space-y-6 not-prose">
          {DATA_RETENTION_SCHEDULE.map((rule) => (
            <div
              key={rule.category}
              className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--color-border-default)] pb-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#2F8FFF]" />
                  <span>{rule.category}</span>
                </h3>
                <TechnicalBadge variant="neutral">
                  {rule.userRelationship}
                </TechnicalBadge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-mono text-[10px] text-[var(--color-taupe-300)] uppercase tracking-wider block">
                    Retention Period
                  </span>
                  <p className="text-white font-semibold mt-0.5">{rule.retentionPeriod}</p>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-[var(--color-taupe-300)] uppercase tracking-wider block">
                    Legal & Operational Basis
                  </span>
                  <p className="text-[var(--color-text-secondary)] mt-0.5">{rule.legalBasis}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--color-border-subtle)] text-xs space-y-1">
                <span className="font-mono text-[10px] text-[var(--color-taupe-300)] uppercase tracking-wider block">
                  Purge & Deletion Mechanism
                </span>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">{rule.deletionMechanism}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="deletion-rights" className="space-y-4">
        <h2>3. User-Initiated Erasure &amp; Account Termination</h2>
        <p>
          Candidates may terminate their account or wipe specific Career Twin context at any time directly through Account Settings. Deletion commands trigger an immediate soft-delete cascade across active application views, followed by hard database row purging during daily automated vacuum jobs.
        </p>
      </section>

      <section id="backup-rotation" className="space-y-4">
        <h2>4. Backup Lifecycle &amp; Cryptographic Purging</h2>
        <p>
          Encrypted database disaster recovery snapshots rotate on a 30-day lifecycle. When an account is purged from active databases, it expires automatically from backup archives as snapshots roll off within 30 days.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
