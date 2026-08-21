'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown, Users, Briefcase } from 'lucide-react';

// Two-sided agent architecture visual.
// Career side: Twin → Passport → Graph → Preferences → Opportunity Agent
// ↕
// Employer Agent: Role requirements → environment → constraints → progression

const CAREER_INPUTS = [
  { label: 'Career Twin', note: 'Personal career context' },
  { label: 'Career Passport', note: 'Verified evidence' },
  { label: 'Career Graph', note: 'Transferable directions' },
  { label: 'Stated preferences', note: 'Direction and constraints' },
];

const EMPLOYER_INPUTS = [
  { label: 'Role requirements', note: 'Experience and skills' },
  { label: 'Evidence expected', note: 'Qualifications and proof' },
  { label: 'Working environment', note: 'Culture and conditions' },
  { label: 'Progression offered', note: 'Development pathway' },
];

export function AgentArchitectureVisual() {
  return (
    <div
      className="w-full border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden"
      role="img"
      aria-label="Opportunity Agent and Employer Agent two-sided architecture diagram"
    >
      {/* Header */}
      <div className="px-6 py-4 bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)]">
          Architecture · Designed direction
        </span>
        <p className="text-sm font-semibold text-[var(--color-text-primary)] mt-0.5">
          Two agents. Human decisions on both sides.
        </p>
      </div>

      <div className="p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-4 items-start">

          {/* Career side */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-[var(--color-brand-400)]" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-brand-400)]">
                Career side
              </span>
            </div>
            {CAREER_INPUTS.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 px-4 py-3 rounded border border-[var(--color-brand-600)]/30 bg-[var(--color-brand-950)]/20"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-400)] flex-shrink-0 mt-1.5" />
                <div>
                  <p className="text-xs font-semibold text-[var(--color-text-primary)]">{item.label}</p>
                  <p className="text-[10px] text-[var(--color-text-tertiary)]">{item.note}</p>
                </div>
              </div>
            ))}

            {/* Arrow down to OA */}
            <div className="flex flex-col items-center py-2 gap-1">
              <ArrowDown className="w-4 h-4 text-[var(--color-brand-400)]" />
            </div>

            {/* Opportunity Agent node */}
            <div className="rounded-lg border-2 border-[var(--color-brand-500)]/50 bg-[var(--color-brand-950)]/40 px-5 py-4 text-center shadow-lg shadow-[var(--color-brand-600)]/10">
              <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-brand-400)] mb-1">
                Opportunity Agent
              </p>
              <p className="text-[10px] text-[var(--color-text-tertiary)]">
                Identifies potential relevance
              </p>
            </div>

            {/* Human decision */}
            <div className="rounded border border-emerald-500/30 bg-emerald-500/5 px-4 py-3 text-center">
              <p className="text-[10px] font-semibold text-emerald-300">
                Person decides whether to engage
              </p>
            </div>
          </div>

          {/* Center exchange indicator */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-2 pt-24 px-2">
            <div className="w-px h-16 bg-gradient-to-b from-[var(--color-brand-500)] to-[var(--color-border-default)]" />
            <div className="rounded border border-[var(--color-border-strong)] bg-[var(--color-surface-raised)] px-3 py-2 text-center">
              <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] whitespace-nowrap">
                potential overlap
              </span>
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-[var(--color-border-default)] to-emerald-500" />
          </div>

          {/* Employer side */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                Employer side
              </span>
            </div>

            {/* Employer Agent node */}
            <div className="rounded-lg border-2 border-emerald-500/50 bg-emerald-500/10 px-5 py-4 text-center shadow-lg shadow-emerald-500/10">
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-1">
                Employer Agent
              </p>
              <p className="text-[10px] text-[var(--color-text-tertiary)]">
                Identifies potentially relevant candidates
              </p>
            </div>

            {/* Arrow down from EA */}
            <div className="flex flex-col items-center py-2 gap-1">
              <ArrowDown className="w-4 h-4 text-emerald-400" />
            </div>

            {EMPLOYER_INPUTS.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 px-4 py-3 rounded border border-emerald-500/20 bg-emerald-500/5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5" />
                <div>
                  <p className="text-xs font-semibold text-[var(--color-text-primary)]">{item.label}</p>
                  <p className="text-[10px] text-[var(--color-text-tertiary)]">{item.note}</p>
                </div>
              </div>
            ))}

            {/* Human decision — employer */}
            <div className="rounded border border-emerald-500/30 bg-emerald-500/5 px-4 py-3 text-center">
              <p className="text-[10px] font-semibold text-emerald-300">
                Employer decides whether to progress
              </p>
            </div>
          </div>
        </div>

        {/* Mobile exchange indicator */}
        <div className="lg:hidden my-4 flex items-center gap-3">
          <div className="flex-1 h-px bg-[var(--color-border-default)]" />
          <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] px-3 py-1 border border-[var(--color-border-default)] rounded bg-[var(--color-surface-raised)]">
            potential overlap identified
          </span>
          <div className="flex-1 h-px bg-[var(--color-border-default)]" />
        </div>
      </div>

      <div className="px-6 pb-5">
        <p className="text-[10px] text-[var(--color-text-tertiary)]">
          This illustrates the designed architecture of Opportunity Agent and Employer Agent.
          Career OS does not currently operate an automated two-sided agent matching system.
          Final decisions on both sides remain with the person and the employer.
        </p>
      </div>
    </div>
  );
}
