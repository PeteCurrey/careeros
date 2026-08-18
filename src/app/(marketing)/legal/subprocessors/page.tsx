import React from "react";
import Link from "next/link";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { SUBPROCESSORS_REGISTRY } from "@/lib/subprocessors/registry";
import { ShieldCheck, ExternalLink, Server, CheckCircle2 } from "lucide-react";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";

export default function LegalSubprocessorsPage() {
  const meta = GOVERNANCE_MANIFEST["subprocessors"]!;
  const toc = [
    { id: "overview", title: "1. Subprocessor Governance & Due Diligence" },
    { id: "registry", title: "2. Approved Technical Subprocessors" },
    { id: "updates", title: "3. Notification of Subprocessor Changes" },
  ];

  return (
    <GovernancePageLayout
      meta={meta}
      subtitle="Public register of verified cloud infrastructure, database, and AI inference processors handling data on behalf of Career OS."
      toc={toc}
    >
      <section id="overview" className="space-y-4">
        <h2>1. Subprocessor Governance &amp; Due Diligence</h2>
        <p>
          Career OS engages a limited number of enterprise cloud infrastructure and specialized AI inference providers to deliver our services. Each subprocessor undergoes rigorous vendor risk assessment, security evaluation (SOC 2 / ISO 27001 review), and executes our standardized Data Processing Addendum with strict confidentiality and data protection obligations.
        </p>
      </section>

      <section id="registry" className="space-y-6">
        <h2>2. Approved Technical Subprocessors</h2>
        <p>
          The following entities are currently authorized to process data for Career OS production environments:
        </p>

        <div className="space-y-6 not-prose">
          {SUBPROCESSORS_REGISTRY.map((sub) => (
            <div
              key={sub.id}
              className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--color-border-default)] pb-3">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Server className="w-4 h-4 text-[#2F8FFF]" />
                    <span>{sub.name}</span>
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)]">{sub.service}</p>
                </div>
                <TechnicalBadge variant="success" dot>
                  APPROVED &bull; ACTIVE
                </TechnicalBadge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-mono text-[10px] text-[var(--color-taupe-300)] uppercase tracking-wider block">
                    Purpose of Processing
                  </span>
                  <p className="text-[var(--color-text-secondary)] mt-0.5 leading-relaxed">{sub.purpose}</p>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-[var(--color-taupe-300)] uppercase tracking-wider block">
                    Data Categories Handled
                  </span>
                  <ul className="text-[var(--color-text-secondary)] mt-0.5 space-y-0.5">
                    {sub.dataCategories.map((c) => (
                      <li key={c} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#34D399] shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[var(--color-text-tertiary)]">
                <span>Location: {sub.processingLocation}</span>
                <a
                  href={sub.securityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6BB8FF] hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>Vendor Security Center</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="updates" className="space-y-4">
        <h2>3. Notification of Subprocessor Changes</h2>
        <p>
          Institutional partners and enterprise customers who have executed our Data Processing Addendum may subscribe to receive advance notifications of prospective subprocessor additions at least 30 days prior to authorization by emailing <a href="mailto:privacy@career-os.com" className="text-[#6BB8FF] font-semibold underline">privacy@career-os.com</a>.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
