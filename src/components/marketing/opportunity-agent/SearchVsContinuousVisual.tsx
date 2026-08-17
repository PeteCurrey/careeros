'use client';

import React from 'react';
import { cn } from '@/lib/utils';

// Editorial two-column comparison: Traditional Search vs Career OS Direction.
// Not rounded comparison cards — uses journey-line / stepper style.

const TRADITIONAL_STEPS = [
  { label: 'Career event happens', note: 'Redundancy, frustration, contract end' },
  { label: 'Search begins', note: 'Job board opened, job title entered' },
  { label: 'Applications sent', note: 'Volume approach, little context shared' },
  { label: 'Context resets', note: 'Next search starts from zero again' },
  { label: 'Wait', note: 'Outcome uncertain, timeline unknown' },
];

const CAREER_OS_STEPS = [
  { label: 'Career context develops', note: 'As work and experience accumulates' },
  { label: 'Evidence builds', note: 'Career Passport reflects what you demonstrate' },
  { label: 'Direction is set', note: 'Where you want to go, on your terms' },
  { label: 'Relevant opportunities surface', note: 'Context-matched, with a clear rationale' },
  { label: 'You decide whether to engage', note: 'Identity shared only when you choose' },
];

export function SearchVsContinuousVisual() {
  return (
    <div
      className="w-full border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden"
      role="img"
      aria-label="Comparison of traditional job search versus Career OS continuous discovery approach"
    >
      {/* Header row */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="px-8 py-5 bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)] md:border-r">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)]">
            Traditional approach
          </span>
          <h3 className="text-base font-semibold text-[var(--color-text-primary)] mt-1">
            Search-first. React when needed.
          </h3>
        </div>
        <div className="px-8 py-5 bg-[var(--color-brand-950)]/30 border-b border-[var(--color-border-default)]">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-brand-400)]">
            Career OS direction
          </span>
          <h3 className="text-base font-semibold text-[var(--color-text-primary)] mt-1">
            Context-first. Continuous discovery.
          </h3>
        </div>
      </div>

      {/* Step rows */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Traditional column */}
        <div className="border-b border-[var(--color-border-default)] md:border-r md:border-b-0">
          {TRADITIONAL_STEPS.map((step, i) => (
            <div
              key={step.label}
              className={cn(
                'flex items-start gap-4 px-8 py-5 border-b border-[var(--color-border-default)] last:border-b-0',
                'bg-[var(--color-surface-base)]'
              )}
            >
              {/* Step number + connector */}
              <div className="flex flex-col items-center flex-shrink-0 pt-0.5">
                <div className="w-6 h-6 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface-raised)] flex items-center justify-center">
                  <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
                    {i + 1}
                  </span>
                </div>
                {i < TRADITIONAL_STEPS.length - 1 && (
                  <div className="w-px h-full min-h-[20px] bg-[var(--color-border-default)] mt-1" />
                )}
              </div>
              <div className="space-y-0.5 pb-1">
                <p className="text-sm font-medium text-[var(--color-text-secondary)]">
                  {step.label}
                </p>
                <p className="text-xs text-[var(--color-text-tertiary)]">{step.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Career OS column */}
        <div>
          {CAREER_OS_STEPS.map((step, i) => (
            <div
              key={step.label}
              className={cn(
                'flex items-start gap-4 px-8 py-5 border-b border-[var(--color-border-default)] last:border-b-0',
                'bg-[var(--color-brand-950)]/20'
              )}
            >
              <div className="flex flex-col items-center flex-shrink-0 pt-0.5">
                <div className="w-6 h-6 rounded-full border border-[var(--color-brand-600)]/50 bg-[var(--color-brand-950)]/60 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-[var(--color-brand-400)]">
                    {i + 1}
                  </span>
                </div>
                {i < CAREER_OS_STEPS.length - 1 && (
                  <div className="w-px h-full min-h-[20px] bg-[var(--color-brand-600)]/20 mt-1" />
                )}
              </div>
              <div className="space-y-0.5 pb-1">
                <p className="text-sm font-medium text-[var(--color-text-primary)]">{step.label}</p>
                <p className="text-xs text-[var(--color-text-tertiary)]">{step.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer callout */}
      <div className="px-8 py-4 bg-[var(--color-surface-raised)] border-t border-[var(--color-border-default)]">
        <p className="text-xs text-[var(--color-text-tertiary)] italic">
          Career OS is being built toward the continuous discovery model.
          Both approaches are illustrated here for comparison purposes only.
        </p>
      </div>
    </div>
  );
}
