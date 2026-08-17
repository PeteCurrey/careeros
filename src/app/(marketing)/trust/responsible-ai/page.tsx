import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function ResponsibleAiPage() {
  const meta = GOVERNANCE_MANIFEST["responsible-ai"]!;
  const toc = [
    { id: "principles", title: "1. 14 Responsible AI Principles" },
    { id: "system-register", title: "2. AI System Register Architecture" },
    { id: "evaluations", title: "3. Model Evaluation & Continuous Benchmarking" },
  ];

  const principles = [
    "Human Agency (Users retain ultimate career decision-making)",
    "Purpose Limitation (AI used solely for career guidance and matching)",
    "Proportionality (AI scope calibrated to user context)",
    "Safety & Non-Harm (Guards against hazardous or toxic content)",
    "Fairness & Parity (Equal dignity across university, trade, and vocational pathways)",
    "Accessibility (AI interfaces accessible via keyboard and screen reader)",
    "Privacy by Design (Zero vendor training on candidate PII)",
    "Security & Threat Protection (Prompt-injection defense)",
    "Transparency (Surfacing explicit recommendation decision factors)",
    "Accountability (Clear human owner for every deployed AI subsystem)",
    "Contestability (Users can challenge or override AI recommendations)",
    "Data Quality (Recommendations backed by verified evidence)",
    "Continuous Evaluation (Regular bias testing and benchmark audits)",
    "Appropriate Human Oversight (Human hiring managers retain final authority)",
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="14 core responsible AI principles and operational AI System Register architecture governing all machine intelligence on Career OS." toc={toc}>
      <section id="principles" className="space-y-4">
        <h2>1. 14 Responsible AI Principles</h2>
        <p>
          Career OS operates under an explicit Responsible AI framework derived from NIST AI 100-1 and the EU Artificial Intelligence Act:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {principles.map((p, idx) => (
            <div key={idx} className="p-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] text-xs text-[var(--color-text-secondary)] flex items-start gap-2">
              <span className="font-mono font-bold text-[var(--color-charcoal-deep)] text-xs">{idx + 1}.</span>
              <span>{p}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="system-register" className="space-y-4">
        <h2>2. AI System Register Architecture</h2>
        <p>
          Career OS maintains an internal AI System Register tracking all deployed models, risk classifications, and human review requirements:
        </p>
        <div className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] font-mono text-xs space-y-1">
          <p><strong>System Register Schema:</strong></p>
          <p className="text-[var(--color-text-secondary)]">feature | provider | model | purpose | riskLevel | minorAccess | humanReviewRequirement | deploymentStatus</p>
          <div className="pt-2 border-t border-[var(--color-border-subtle)] space-y-1 text-[11px]">
            <p>&bull; AI Career Mentor &bull; Google Cloud GCP &bull; Gemini 1.5 Pro &bull; Advisory Career Guidance &bull; LOW_RISK &bull; Restricted (16+ Direct) &bull; Self-Service &bull; IMPLEMENTED</p>
            <p>&bull; Employer Agent Match &bull; OpenAI Enterprise &bull; GPT-4o &bull; Candidate Decision Support &bull; MEDIUM_RISK &bull; Prohibited (Under 18) &bull; Mandatory Human Hiring Manager &bull; IMPLEMENTED</p>
          </div>
        </div>
      </section>

      <section id="evaluations" className="space-y-4">
        <h2>3. Model Evaluation &amp; Continuous Benchmarking</h2>
        <p>
          AI models are evaluated quarterly against benchmark datasets for factual accuracy, bias mitigation, and safety guardrail adherence.
        </p>
      </section>
    </GovernancePageLayout>
  );
}