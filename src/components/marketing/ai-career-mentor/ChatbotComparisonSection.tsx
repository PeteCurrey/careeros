import React from 'react';
import { CheckCircle2, Info } from 'lucide-react';

export function ChatbotComparisonSection() {
  return (
    <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-raised)] text-[var(--color-charcoal-deep)]">
      <div className="container-editorial space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="section-label">ARCHITECTURAL DISTINCTION</span>
          <h2 className="text-display-section font-serif font-normal text-[var(--color-charcoal-deep)] tracking-tight">
            Why this is different from opening a blank chatbot.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
            General AI models are powerful conversational tools. But a career is not a single prompt session&mdash;it is a multi-decade progression of capability, verified work, and changing market pathways.
          </p>
        </div>

        {/* Editorial Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* General-Purpose AI */}
          <div className="p-8 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6">
            <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-4">
              <h3 className="font-serif font-bold text-lg text-[var(--color-charcoal-deep)] flex items-center gap-2">
                <Info className="w-5 h-5 text-[var(--color-taupe-600)]" />
                General-Purpose AI Services
              </h3>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--color-taupe-100)] text-[var(--color-taupe-800)] border border-[var(--color-border-default)] font-bold">
                GENERAL ASSISTANT
              </span>
            </div>

            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Built to assist across thousands of unrelated subjects—from writing emails to debugging code.
              Career context depends on whatever text has been manually typed into that individual chat session.
            </p>

            <div className="space-y-3 pt-2">
              <span className="font-mono text-[10px] font-bold text-[var(--color-taupe-700)] uppercase tracking-wider block">
                Not Inherently Structured Around:
              </span>
              <ul className="space-y-2.5 text-xs text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-taupe-600)] font-mono">&mdash;</span>
                  <span>Living, multi-dimensional Career Twin models</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-taupe-600)] font-mono">&mdash;</span>
                  <span>Tamper-evident Career Passport project evidence</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-taupe-600)] font-mono">&mdash;</span>
                  <span>Formal cryptographic verification states &amp; institutional issuers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-taupe-600)] font-mono">&mdash;</span>
                  <span>Real-time occupational transition graphs (Career Graph)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-taupe-600)] font-mono">&mdash;</span>
                  <span>Field-level employer vs mentor privacy boundaries</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Career OS AI Mentor */}
          <div className="p-8 bg-[var(--color-surface-warm)] border-2 border-[var(--color-charcoal-deep)] rounded-[var(--radius-card)] space-y-6 shadow-subtle">
            <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-4">
              <h3 className="font-serif font-bold text-lg text-[var(--color-charcoal-deep)] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Career OS AI Mentor
              </h3>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                PURPOSE-BUILT INFRASTRUCTURE
              </span>
            </div>

            <p className="text-xs text-[var(--color-charcoal-deep)] leading-relaxed">
              Purpose-built around ongoing professional development. Designed to connect career context,
              verified project proof, developmental milestones, and labor market intelligence.
            </p>

            <div className="space-y-3 pt-2">
              <span className="font-mono text-[10px] font-bold text-[var(--color-charcoal-deep)] uppercase tracking-wider block">
                Natively Engineered To Connect:
              </span>
              <ul className="space-y-2.5 text-xs text-[var(--color-charcoal-deep)]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Career Context:</strong> Persistent history of strengths, goals &amp; parameters</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Evidence &amp; Proof:</strong> Grounded in verified capstones &amp; credentials</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Pathways:</strong> Real market mobility data from Career Graph</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Actionable Milestones:</strong> Concrete deliverables you can build &amp; verify</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Strict Privacy:</strong> Zero model training on PII &amp; user-owned data boundaries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
