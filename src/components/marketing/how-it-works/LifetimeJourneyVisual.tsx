'use client';

import React, { useState } from 'react';
import { LIFETIME_MILESTONES, LifetimeMilestone } from './howItWorksData';
import { cn } from '@/lib/utils';
import { Calendar, ChevronRight, Sparkles, Compass } from 'lucide-react';

export function LifetimeJourneyVisual() {
  const [selectedAge, setSelectedAge] = useState<string>('27');
  const activeMilestone: LifetimeMilestone =
    LIFETIME_MILESTONES.find((m) => m.age === selectedAge) ?? LIFETIME_MILESTONES[3]!;

  return (
    <div
      className="w-full border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden bg-[var(--background-dark-deep)]"
      role="region"
      aria-label="One Career OS: Different Questions Over a Lifetime"
    >
      {/* Header */}
      <div className="p-6 sm:p-8 bg-black/40 border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)] flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-purple-400" />
            Lifelong Continuity
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
            One Career OS. Different questions as you grow.
          </h3>
        </div>
        <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] px-3 py-1.5 rounded">
          Illustrative Career Timeline
        </span>
      </div>

      {/* Interactive Age Timeline Selector */}
      <div className="p-4 sm:p-6 bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Career Milestones Timeline">
          {LIFETIME_MILESTONES.map((milestone) => {
            const isSelected = milestone.age === selectedAge;
            return (
              <button
                key={milestone.age}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedAge(milestone.age)}
                className={cn(
                  'px-3 sm:px-4 py-2 rounded-lg border text-left shrink-0 transition-all duration-150 flex flex-col items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400',
                  isSelected
                    ? 'border-purple-500 bg-purple-500/15 text-white ring-1 ring-purple-500 shadow-sm'
                    : 'border-[var(--color-border-default)] bg-[var(--color-surface-raised)] text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] hover:bg-white/5'
                )}
              >
                <span className="text-xs sm:text-sm font-bold font-mono">Age {milestone.age}</span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)]">
                  {milestone.lifePhase}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Milestone Detail */}
      <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-center bg-[var(--color-surface-base)]" aria-live="polite">
        {/* Left: The Central Question */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono">
            <span>Milestone: Age {activeMilestone.age}</span>
            <span>&bull;</span>
            <span>{activeMilestone.lifePhase}</span>
          </div>

          <div className="space-y-2">
            <span className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider block font-mono">
              The Question at this Stage:
            </span>
            <p className="text-xl sm:text-2xl font-serif italic text-white leading-snug">
              “{activeMilestone.centralQuestion}”
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed pt-2">
            {activeMilestone.systemRole}
          </p>
        </div>

        {/* Right: Active Career OS Engines */}
        <div className="p-6 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white uppercase tracking-wider">
              Active Career OS Engines
            </span>
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>

          <div className="space-y-2">
            {activeMilestone.activeEngines.map((engine) => (
              <div
                key={engine}
                className="p-3 rounded-lg bg-[var(--color-surface-base)] border border-[var(--color-border-default)] flex items-center justify-between"
              >
                <span className="text-xs font-medium text-white">{engine}</span>
                <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded">
                  Primary Utility
                </span>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-[var(--color-text-tertiary)] leading-relaxed italic pt-1">
            Career OS does not end at placement. It evolves continuously throughout your working life.
          </p>
        </div>
      </div>
    </div>
  );
}
