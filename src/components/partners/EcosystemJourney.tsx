import React from 'react';
import { ECOSYSTEM_PROGRESSION_STEPS } from '@/lib/partners/registry';
import { ArrowDown } from 'lucide-react';

export function EcosystemJourney() {
  return (
    <section id="ecosystem-journey" className="py-28 bg-[var(--color-surface-sunken)] border-y border-[var(--color-border-default)]">
      <div className="container-editorial">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4">
            <p className="section-label text-[var(--color-accent-primary)]">THE CONNECTED CAREER</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Learn. Verify. Connect.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
              When CareerOS, its data partners, and learning and employment ecosystems work together around one individual, the journey from skill gap to opportunity becomes structured, evidence-based and traceable.
            </p>
          </div>

          {/* Progression steps */}
          <div className="space-y-0">
            {ECOSYSTEM_PROGRESSION_STEPS.map((step, index) => (
              <div key={step.stepNumber}>
                <div className="flex gap-6 py-6">
                  {/* Step number column */}
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <div className="w-8 h-8 rounded-sm bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-center justify-center">
                      <span className="text-[10px] font-mono font-bold text-[var(--color-accent-primary)]">
                        {String(step.stepNumber).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2 pb-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-accent-primary)] bg-[var(--color-accent-primary)]/5 px-2 py-0.5 rounded-sm border border-[var(--color-accent-primary)]/15 self-start">
                        {step.stage}
                      </span>
                      <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase tracking-wide">
                        {step.entityName}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#34D399] shrink-0" />
                      <span className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
                        {step.dataOutput}
                      </span>
                    </div>
                  </div>
                </div>

                {index < ECOSYSTEM_PROGRESSION_STEPS.length - 1 && (
                  <div className="flex items-center gap-6 py-1">
                    <div className="w-8 flex justify-center">
                      <ArrowDown className="w-3 h-3 text-[var(--color-border-default)]" />
                    </div>
                    <div className="flex-1 border-t border-dashed border-[var(--color-border-subtle)]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed border-t border-[var(--color-border-subtle)] pt-6">
            This flow represents the intended CareerOS ecosystem. Individual partnerships and integrations are subject to separate agreements. Career Twin capabilities expand over time as the ecosystem develops.
          </p>
        </div>
      </div>
    </section>
  );
}
