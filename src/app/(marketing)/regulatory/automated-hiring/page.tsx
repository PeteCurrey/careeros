import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import type { EmploymentAIFrameworkItem } from "@/types/platform/governance";

export default function AutomatedHiringRegulatoryPage() {
  const meta = GOVERNANCE_MANIFEST["automated-hiring"]!;

  const toc = [
    { id: "overview", title: "1. Overview & Regulatory Context" },
    { id: "taxonomy", title: "2. Employment AI Role Taxonomy" },
    { id: "readiness-framework", title: "3. Regulatory Readiness Framework" },
    { id: "nyc-ll144", title: "4. NYC Local Law 144 Readiness" },
    { id: "eu-ai-act", title: "5. EU AI Act High-Risk Employment Framework" },
    { id: "human-in-command", title: "6. Human Agency & Final Decision Prohibition" },
  ];

  const aiTaxonomy: EmploymentAIFrameworkItem[] = [
    {
      role: "DISCOVERY",
      inScopeForCareerOS: true,
      intendedFunctionality: "Surfacing relevant career pathways and verified opportunity matches to candidates.",
      humanOversightModel: "Candidate controls search criteria and visibility.",
      biasAuditStatus: "In-scope for internal fairness monitoring.",
    },
    {
      role: "MATCHING",
      inScopeForCareerOS: true,
      intendedFunctionality: "Evaluating skill overlap between candidate Career Twins and posted role parameters.",
      humanOversightModel: "Explainable match scores with explicit key factor breakdowns.",
      biasAuditStatus: "Readiness framework established; bias metrics monitored.",
    },
    {
      role: "RECOMMENDATION",
      inScopeForCareerOS: true,
      intendedFunctionality: "Suggesting skill development milestones, courses, or certifications.",
      humanOversightModel: "Purely advisory recommendations surfaced to candidate.",
      biasAuditStatus: "Non-binding career guidance; low risk.",
    },
    {
      role: "DECISION_SUPPORT",
      inScopeForCareerOS: true,
      intendedFunctionality: "Providing employers with structured candidate evidence summaries for human review.",
      humanOversightModel: "Human hiring managers perform all evaluation and interview decisions.",
      biasAuditStatus: "Structured evidence summaries with PII redaction active.",
    },
    {
      role: "RANKING",
      inScopeForCareerOS: false,
      intendedFunctionality: "Forced stack-ranking or automated filtering out of candidates.",
      humanOversightModel: "Out of scope — Career OS does not perform candidate elimination stack-ranking.",
      biasAuditStatus: "Not applicable.",
    },
    {
      role: "SCREENING",
      inScopeForCareerOS: false,
      intendedFunctionality: "Automated candidate rejection or resume screening filters.",
      humanOversightModel: "Out of scope — Career OS does not auto-reject candidates.",
      biasAuditStatus: "Not applicable.",
    },
    {
      role: "DECISION",
      inScopeForCareerOS: false,
      intendedFunctionality: "Autonomous hiring, rejection, or compensation decisions.",
      humanOversightModel: "Strictly prohibited — Career OS never makes autonomous employment decisions.",
      biasAuditStatus: "Not applicable.",
    },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Regulatory alignment and readiness framework for NYC Local Law 144, EU AI Act High-Risk Employment AI, and EEOC guidelines." toc={toc}>
      <section id="overview" className="space-y-4">
        <h2>1. Overview &amp; Regulatory Context</h2>
        <p>
          As automated tools enter recruitment and talent discovery, regulatory bodies in the United States and European Union have established strict oversight frameworks for Automated Employment Decision Tools (AEDTs).
        </p>
        <p>
          Career OS publishes this framework to detail how our Employer Agent and AI matching architecture are designed for transparency, explainability, and regulatory readiness. We clearly state: <em>Career OS does not claim to have completed formal third-party bias audits or regulatory certifications prior to feature activation; rather, we establish the technical readiness framework required if candidate matching functionality enters regulated commercial scope.</em>
        </p>
      </section>

      <section id="taxonomy" className="space-y-4">
        <h2>2. Employment AI Role Taxonomy</h2>
        <p>
          Career OS classifies AI functionality across seven distinct employment operational roles:
        </p>
        <div className="space-y-3 pt-2">
          {aiTaxonomy.map((item) => (
            <div key={item.role} className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-sm text-[var(--color-charcoal-deep)]">{item.role}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                  item.inScopeForCareerOS
                    ? "bg-[var(--color-success-light)] text-[var(--color-success)] border border-[var(--color-success)]/20"
                    : "bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] border border-[var(--color-border-default)]"
                }`}>
                  {item.inScopeForCareerOS ? "In Scope (Advisory)" : "Out of Scope (Prohibited)"}
                </span>
              </div>
              <p className="text-[var(--color-text-secondary)]">{item.intendedFunctionality}</p>
              <div className="pt-1 text-[11px] text-[var(--color-text-tertiary)] grid grid-cols-1 sm:grid-cols-2 gap-1 border-t border-[var(--color-border-subtle)]">
                <div><strong>Oversight:</strong> {item.humanOversightModel}</div>
                <div><strong>Bias Audit Status:</strong> {item.biasAuditStatus}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="readiness-framework" className="space-y-4">
        <h2>3. Regulatory Readiness Framework</h2>
        <p>
          Our Employer Agent is engineered to support four compliance pillars when deployed:
        </p>
        <ul>
          <li><strong>Explainable Provenance:</strong> Every match surfaces explicit key decision factors rather than opaque scores.</li>
          <li><strong>Candidate PII Redaction:</strong> Candidate identities remain default-private during initial discovery.</li>
          <li><strong>Demographic Disparity Monitoring:</strong> Systems engineered to log aggregate outcome statistics for bias evaluations.</li>
          <li><strong>Audit Trail Retention:</strong> AI recommendation inputs and human acceptance decisions are logged immutably.</li>
        </ul>
      </section>

      <section id="nyc-ll144" className="space-y-4">
        <h2>4. NYC Local Law 144 Readiness</h2>
        <p>
          NYC Local Law 144 regulates the use of AEDTs in candidate screening or selection within New York City. Career OS&apos;s architecture is designed to support independent bias audit requirements and candidate disclosure notices if automated matching is deployed by employers in NYC jurisdictions.
        </p>
      </section>

      <section id="eu-ai-act" className="space-y-4">
        <h2>5. EU AI Act High-Risk Employment Framework</h2>
        <p>
          Under the EU Artificial Intelligence Act (Regulation EU 2024/1689), AI systems used for recruitment, candidate filtering, or evaluating workers are classified as <strong>High-Risk AI Systems</strong>. Career OS&apos;s AI governance model incorporates technical documentation, risk management logs, and human oversight controls aligned with Annex III requirements.
        </p>
      </section>

      <section id="human-in-command" className="space-y-4">
        <h2>6. Human Agency &amp; Final Decision Prohibition</h2>
        <p>
          Career OS strictly prohibits autonomous hiring or rejection decisions. All employment evaluations, interview selections, and hiring decisions must be made by human hiring managers.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
