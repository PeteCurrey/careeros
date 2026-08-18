'use client';

import React, { useState } from 'react';
import { OPPORTUNITY_GOVERNANCE_STEPS, GovernanceStep } from './partnershipsData';
import { cn } from '@/lib/utils';
import { 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Eye, 
  Sparkles, 
  ArrowRight, 
  Lock, 
  Layers, 
  Building2, 
  Coins, 
  FileCheck 
} from 'lucide-react';

export function OpportunityGovernanceFlow() {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);

  const activeStep: GovernanceStep = OPPORTUNITY_GOVERNANCE_STEPS[selectedStepIndex] || OPPORTUNITY_GOVERNANCE_STEPS[0]!;

  return (
    <div
      id="opportunity-governance"
      className="w-full bg-[var(--background-dark-deep)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl space-y-0"
      role="region"
      aria-label="Opportunity Governance and Review Pipeline Explorer"
    >
      {/* Top Header Bar */}
      <div className="p-6 sm:p-8 bg-black/30 backdrop-blur-sm border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#2F8FFF]" />
            Interaction 02 &bull; Editorial &amp; Safeguarding Pipeline
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
            How does an opportunity enter Career OS?
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            Inspect the 5 review stages every partner opportunity, apprenticeship, and career event passes through before publication.
          </p>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/60 backdrop-blur-sm text-[var(--color-text-tertiary)] self-start sm:self-auto shrink-0">
          Illustrative Governance Flow
        </span>
      </div>

      {/* 5-Step Pipeline Indicator Tabs */}
      <div className="p-4 sm:p-6 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border-b border-[var(--color-border-default)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5" role="tablist" aria-label="Governance Pipeline Steps">
          {OPPORTUNITY_GOVERNANCE_STEPS.map((step, idx) => {
            const isSelected = idx === selectedStepIndex;
            return (
              <button
                key={step.step}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedStepIndex(idx)}
                className={cn(
                  'p-3.5 rounded-lg border text-left transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F8FFF] flex flex-col justify-between space-y-2',
                  isSelected
                    ? 'bg-white/10 border-white/40 shadow-md ring-1 ring-white/20'
                    : 'bg-[var(--color-surface-raised)]/60 border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] text-[var(--color-text-secondary)] hover:text-white'
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-white px-1.5 py-0.5 rounded bg-white/10">
                    Step {step.step}
                  </span>
                  <span className={cn('text-[9px] font-mono font-semibold', step.outcomeColor)}>
                    Stage {idx + 1}
                  </span>
                </div>
                <div className="font-semibold text-xs text-white leading-tight">
                  {step.stage}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Deep-Dive Stage */}
      <div className="p-6 sm:p-8 space-y-6">
        
        {/* Step Banner */}
        <div className="p-5 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#6BB8FF] font-semibold">
              Step {activeStep.step} &bull; {activeStep.stage}
            </span>
            <h4 className="text-xl font-serif text-white font-normal">
              {activeStep.title}
            </h4>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/30 px-3 py-1.5 rounded border border-emerald-500/20 shrink-0 self-start sm:self-auto">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Gate Status: {activeStep.outcome}</span>
          </div>
        </div>

        {/* 3 Core Verification Checks Grid */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-taupe-300)] font-semibold block">
            Verification &amp; Governance Criteria
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {activeStep.checks.map((check, cIdx) => (
              <div
                key={check}
                className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2 flex flex-col justify-between text-xs"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-tertiary)]">
                    <span>Audit Rule 0{cIdx + 1}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <p className="text-white font-medium leading-relaxed">
                    {check}
                  </p>
                </div>
                <div className="pt-2 text-[10px] font-mono text-emerald-400">
                  &bull; Enforced via Protocol
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Illustrative Opportunity In-Flight Context Box */}
        <div className="p-4 rounded-lg bg-[var(--color-surface-warm)]/60 backdrop-blur-sm border border-[var(--color-border-subtle)] space-y-2 text-xs">
          <div className="flex items-center justify-between text-white font-semibold">
            <span className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Example In-Flight Opportunity: Level 6 Aerospace Degree Apprenticeship</span>
            </span>
            <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Illustrative Submission</span>
          </div>
          <p className="text-[var(--color-text-secondary)] leading-relaxed pl-6">
            Submitted by verified enterprise employer. Wage: &pound;24,500/year (levy funded, full BEng tuition covered). Zero unmoderated youth chat enabled. Distinctly marked as verified employer vacancy.
          </p>
        </div>

      </div>

      {/* Footer Statement */}
      <div className="p-4 bg-black/30 backdrop-blur-sm border-t border-[var(--color-border-default)] text-xs text-[var(--color-text-tertiary)] flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="italic">
          &ldquo;Career OS should distinguish availability, relevance and promotion.&rdquo;
        </span>
        <span className="font-mono text-[11px] text-[var(--color-taupe-300)]">
          Zero Pay-to-Influence &bull; Strict Editorial Moderation
        </span>
      </div>
    </div>
  );
}
