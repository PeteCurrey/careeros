'use client';

import React from 'react';
import { ArrowRight, Bot, Target, Award, UserCheck, RefreshCw, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoopStage {
  step: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  bg: string;
}

const LOOP_STAGES: LoopStage[] = [
  {
    step: '01',
    title: 'Guidance',
    subtitle: 'Mentor evaluates goals & context to recommend a high-leverage action.',
    icon: Bot,
    color: 'text-emerald-400',
    bg: 'border-emerald-500/30 bg-emerald-500/10',
  },
  {
    step: '02',
    title: 'Action',
    subtitle: 'You complete a real project, deliverable, certification, or stretch role.',
    icon: Target,
    color: 'text-blue-400',
    bg: 'border-blue-500/30 bg-blue-500/10',
  },
  {
    step: '03',
    title: 'Evidence',
    subtitle: 'Concrete work artifacts and outcomes are logged in your Career Passport.',
    icon: Award,
    color: 'text-purple-400',
    bg: 'border-purple-500/30 bg-purple-500/10',
  },
  {
    step: '04',
    title: 'Context',
    subtitle: 'Career Twin updates baseline capability; Career Graph unlocks new routes.',
    icon: UserCheck,
    color: 'text-[var(--color-brand-400)]',
    bg: 'border-[var(--color-brand-500)]/30 bg-[var(--color-brand-950)]/40',
  },
];

export function CareerLoopVisual() {
  return (
    <div
      className="w-full border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden bg-[var(--background-dark-deep)]"
      role="region"
      aria-label="The Career OS Continuous Compounding Loop"
    >
      {/* Header */}
      <div className="p-6 sm:p-8 bg-black/40 border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)] flex items-center gap-1.5">
            <RefreshCw className="w-3.5 h-3.5 text-purple-400 animate-spin-slow" />
            The Compounding Feedback Loop
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
            Action creates evidence. Evidence unlocks opportunity.
          </h3>
        </div>
        <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] px-3 py-1.5 rounded">
          Continuous Engine
        </span>
      </div>

      {/* 4-Stage Connected Process */}
      <div className="p-6 sm:p-10 bg-[var(--color-surface-base)]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {LOOP_STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div key={stage.step} className="flex flex-col relative group">
                {/* Stage Box */}
                <div className="p-5 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex-1 flex flex-col justify-between space-y-4 transition-all duration-200 group-hover:border-[var(--color-border-strong)]">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
                      Stage {stage.step}
                    </span>
                    <div className={cn('p-2 rounded-lg border', stage.bg)}>
                      <Icon className={cn('w-4 h-4', stage.color)} />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-white tracking-tight">
                      {stage.title}
                    </h4>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {stage.subtitle}
                    </p>
                  </div>
                </div>

                {/* Arrow Connector to next stage on Desktop */}
                {idx < LOOP_STAGES.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[var(--background-dark-deep)] border border-[var(--color-border-default)] items-center justify-center text-[var(--color-text-tertiary)]">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Compounding Callout Banner */}
        <div className="mt-8 p-5 rounded-xl bg-purple-950/20 border border-purple-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="text-xs font-semibold text-white">
                Compounding Career Context
              </span>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Unlike a résumé that is rewritten from memory every few years, Career OS preserves every verified milestone so your professional leverage builds continuously.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
