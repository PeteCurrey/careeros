'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Shield, Eye, ChevronRight } from 'lucide-react';

// Staged identity reveal — 5-phase flow showing how Opportunity Agent
// conceptually separates relevance from identity disclosure.
// Clearly marked as illustrative future workflow.

const STAGES = [
  {
    id: 1,
    label: 'Career Context',
    description: 'Your capabilities, evidence and career direction exist within Career OS.',
    userSees: 'Your full Career Twin and Passport are visible to you only.',
    employerSees: null,
    icon: '🧭',
    isPrivate: true,
  },
  {
    id: 2,
    label: 'Opportunity Relevance',
    description: 'Career OS evaluates whether an opportunity is potentially relevant against your context.',
    userSees: 'You see why the opportunity surfaced — the rationale, what connects, and what bridges are needed.',
    employerSees: 'No profile access at this stage.',
    icon: '🔍',
    isPrivate: true,
  },
  {
    id: 3,
    label: 'User Reviews',
    description: 'You read the opportunity explanation and decide whether it is worth exploring.',
    userSees: 'Full opportunity rationale, bridge requirements, and what Career OS does not yet know.',
    employerSees: 'No profile access at this stage.',
    icon: '📋',
    isPrivate: true,
  },
  {
    id: 4,
    label: 'User Decides',
    description: 'You choose whether to express interest, explore further, or ignore the opportunity.',
    userSees: 'Control over what happens next. No pressure to engage.',
    employerSees: 'Interest may be indicated without full identity disclosure at this step.',
    icon: '🎯',
    isPrivate: false,
  },
  {
    id: 5,
    label: 'Appropriate Information Shared',
    description: 'If you choose to proceed, selected professional information becomes eligible for sharing.',
    userSees: 'You choose what is shared and when.',
    employerSees: 'Agreed evidence and identity — only what you have authorized.',
    icon: '🤝',
    isPrivate: false,
  },
];

export function PrivacyRevealFlow() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = STAGES[activeStage]!;

  return (
    <div
      className="w-full border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden"
      role="region"
      aria-label="Illustrative identity reveal flow for Opportunity Agent"
    >
      {/* Header */}
      <div className="px-6 py-4 bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[var(--color-brand-400)]" />
          <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-brand-400)]">
            Illustrative future workflow
          </span>
        </div>
        <p className="text-sm font-semibold text-[var(--color-text-primary)] mt-1">
          Relevance first. Identity when you choose.
        </p>
      </div>

      {/* Stage stepper */}
      <div className="px-6 py-5 border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div
          className="flex items-start gap-0 overflow-x-auto pb-2"
          role="tablist"
          aria-label="Identity reveal stages"
        >
          {STAGES.map((s, i) => (
            <React.Fragment key={s.id}>
              <button
                role="tab"
                aria-selected={i === activeStage}
                onClick={() => setActiveStage(i)}
                className={cn(
                  'flex flex-col items-center gap-1.5 flex-shrink-0 px-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-500)] rounded transition-all duration-150',
                  i === activeStage ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                )}
              >
                <div
                  className={cn(
                    'w-9 h-9 rounded-full border-2 flex items-center justify-center text-base transition-all',
                    i === activeStage
                      ? s.isPrivate
                        ? 'border-[var(--color-brand-500)] bg-[var(--color-brand-950)]/60'
                        : 'border-emerald-500 bg-emerald-500/10'
                      : 'border-[var(--color-border-default)] bg-[var(--color-surface-raised)]'
                  )}
                >
                  {s.icon}
                </div>
                <span
                  className={cn(
                    'text-[9px] font-medium text-center leading-tight max-w-[60px]',
                    i === activeStage ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-tertiary)]'
                  )}
                >
                  {s.label}
                </span>
              </button>
              {i < STAGES.length - 1 && (
                <div className="flex-1 h-px bg-[var(--color-border-default)] mt-4 mx-1 min-w-[20px]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Stage detail */}
      <div
        className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6"
        aria-live="polite"
        aria-atomic="true"
      >
        {/* Left: stage info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">{stage.icon}</span>
            <div>
              <span
                className={cn(
                  'text-[9px] font-mono uppercase tracking-widest',
                  stage.isPrivate ? 'text-[var(--color-brand-400)]' : 'text-emerald-400'
                )}
              >
                Stage {stage.id} of {STAGES.length}
              </span>
              <h3 className="text-base font-bold text-[var(--color-text-primary)]">{stage.label}</h3>
            </div>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            {stage.description}
          </p>

          {/* Privacy indicator */}
          <div
            className={cn(
              'flex items-center gap-2 px-3 py-2 rounded border',
              stage.isPrivate
                ? 'border-[var(--color-brand-600)]/40 bg-[var(--color-brand-950)]/30'
                : 'border-emerald-500/30 bg-emerald-500/5'
            )}
          >
            {stage.isPrivate ? (
              <>
                <Shield className="w-3.5 h-3.5 text-[var(--color-brand-400)]" />
                <span className="text-[10px] font-medium text-[var(--color-brand-300)]">
                  Identity private at this stage
                </span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[10px] font-medium text-emerald-300">
                  You control what is shared
                </span>
              </>
            )}
          </div>

          {/* Navigation */}
          <div className="flex gap-2 pt-2">
            {activeStage > 0 && (
              <button
                onClick={() => setActiveStage((s) => s - 1)}
                className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] flex items-center gap-1 transition-colors"
              >
                ← Previous
              </button>
            )}
            {activeStage < STAGES.length - 1 && (
              <button
                onClick={() => setActiveStage((s) => s + 1)}
                className="text-xs text-[var(--color-brand-400)] hover:text-[var(--color-brand-300)] flex items-center gap-1 transition-colors ml-auto"
              >
                Next <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Right: perspective panel */}
        <div className="space-y-4">
          <div className="rounded border border-[var(--color-border-default)] p-4 space-y-2 bg-[var(--color-surface-raised)]/40">
            <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)]">
              Your view
            </span>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {stage.userSees}
            </p>
          </div>
          <div
            className={cn(
              'rounded border p-4 space-y-2 transition-all',
              stage.employerSees
                ? 'border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/40'
                : 'border-[var(--color-border-default)] bg-[var(--color-surface-base)] opacity-50'
            )}
          >
            <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)]">
              Employer / opportunity side
            </span>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {stage.employerSees ?? 'No access at this stage.'}
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 pb-4">
        <p className="text-[10px] text-[var(--color-text-tertiary)]">
          This illustrates the intended privacy architecture of Opportunity Agent.
          Anonymous matching between career context and opportunities is a designed future direction,
          not a currently operational feature of Career OS.
        </p>
      </div>
    </div>
  );
}
