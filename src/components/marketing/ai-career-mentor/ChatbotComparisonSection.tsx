import React from 'react';
import { CheckCircle2, Info } from 'lucide-react';

export function ChatbotComparisonSection() {
  return (
    <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-raised)] text-[var(--color-text-primary)]">
      <div className="container-editorial space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="section-label">ARCHITECTURAL DISTINCTION</span>
          <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)] tracking-tight">
            Why this is different from opening a blank chatbot.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
            General AI models are powerful conversational tools. But a career is not a single prompt session&mdash;it is a multi-decade progression of capability, structured evidence, and changing market pathways.
          </p>
        </div>

        {/* Editorial Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* General-Purpose AI */}
          <div className="p-8 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6">
            <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-4">
              <h3 className="font-serif font-bold text-lg text-[var(--color-text-primary)] flex items-center gap-2">
                <Info className="w-5 h-5 text-[var(--color-taupe-600)]" />
                General-Purpose AI Services
              </h3>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-[var(--color-taupe-800)] border border-[var(--color-border-default)] font-bold">
                GENERAL ASSISTANT
              </span>
            </div>

            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Built to assist across thousands of unrelated subjects—from writing emails to debugging code.
              Career context depends on what the user provides, what that service retains, available integrations, and the particular account configuration.
            </p>

            <div className="space-y-3 pt-2">
              <span className="font-mono text-[10px] font-bold text-[var(--color-taupe-700)] uppercase tracking-wider block">
                Not Inherently Structured Around:
              </span>
              <ul className="space-y-2.5 text-xs text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-taupe-600)] font-mono">&mdash;</span>
                  <span>Structured, multi-dimensional Career Twin models</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-taupe-600)] font-mono">&mdash;</span>
                  <span>Organized Career Passport project evidence and credentials</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-taupe-600)] font-mono">&mdash;</span>
                  <span>Career OS evidence states, issuer confirmations and verification tiers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-taupe-600)] font-mono">&mdash;</span>
                  <span>Career OS-specific Career Graph pathways and market models</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-taupe-600)] font-mono">&mdash;</span>
                  <span>Field-level employer vs mentor privacy boundaries</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Career OS AI Mentor */}
          <div className="p-8 bg-[var(--color-surface-warm)] border-2 border-white/15 rounded-[var(--radius-card)] space-y-6 shadow-subtle">
            <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-4">
              <h3 className="font-serif font-bold text-lg text-[var(--color-text-primary)] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Career OS AI Mentor
              </h3>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                PURPOSE-BUILT INFRASTRUCTURE
              </span>
            </div>

            <p className="text-xs text-[var(--color-text-primary)] leading-relaxed">
              Purpose-built around ongoing professional development. Designed to connect career context,
              evidence records, developmental milestones, and pathway intelligence.
            </p>

            <div className="space-y-3 pt-2">
              <span className="font-mono text-[10px] font-bold text-[var(--color-text-primary)] uppercase tracking-wider block">
                Natively Engineered To Connect:
              </span>
              <ul className="space-y-2.5 text-xs text-[var(--color-text-primary)]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Career Context:</strong> Structured model of strengths, goals &amp; parameters</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Evidence &amp; Proof:</strong> Grounded in Career Twin context &amp; relevant Passport records</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Pathways:</strong> Pathway models and occupational connections from Career Graph</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Actionable Milestones:</strong> Concrete deliverables you can build &amp; verify</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Strict Privacy:</strong> Private data handled under Career OS AI controls &amp; user boundaries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
