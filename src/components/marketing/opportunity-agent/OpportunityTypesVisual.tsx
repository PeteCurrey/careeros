'use client';

import React, { useState } from 'react';
import { OPPORTUNITY_TYPES, OpportunityTypeItem } from './opportunityAgentData';
import { cn } from '@/lib/utils';

// Branching opportunity-type visual.
// Shows different opportunity categories along career pathway branches.
// NOT a 9-card grid — uses a branching/track layout.

const TRACK_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  core: {
    label: 'Core opportunities',
    color: 'text-[var(--color-brand-400)]',
    bg: 'border-[var(--color-brand-600)]/40 bg-[var(--color-brand-950)]/30',
  },
  development: {
    label: 'Development opportunities',
    color: 'text-emerald-400',
    bg: 'border-emerald-500/30 bg-emerald-500/5',
  },
  alternative: {
    label: 'Alternative pathways',
    color: 'text-amber-400',
    bg: 'border-amber-500/30 bg-amber-500/5',
  },
};

export function OpportunityTypesVisual() {
  const [activeType, setActiveType] = useState<string | null>(null);
  const activeItem = OPPORTUNITY_TYPES.find((t) => t.id === activeType);

  const byTrack = (track: 'core' | 'development' | 'alternative') =>
    OPPORTUNITY_TYPES.filter((t) => t.track === track);

  return (
    <div
      className="w-full border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden"
      role="region"
      aria-label="Opportunity types available through Career OS"
    >
      {/* Header */}
      <div className="px-6 py-4 bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
        <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)]">
          Opportunity types · Product direction
        </span>
        <p className="text-sm font-semibold text-[var(--color-text-primary)] mt-0.5">
          Opportunity Agent is not a job board.
        </p>
      </div>

      {/* Three-track layout */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {(['core', 'development', 'alternative'] as const).map((track) => {
          const trackConfig = TRACK_LABELS[track]!;
          return (
            <div key={track} className="space-y-3">
              {/* Track header */}
              <div className="flex items-center gap-2">
                <div className={cn('w-2 h-2 rounded-full', track === 'core' ? 'bg-[var(--color-brand-400)]' : track === 'development' ? 'bg-emerald-400' : 'bg-amber-400')} />
                <span className={cn('text-[10px] font-semibold uppercase tracking-wider', trackConfig.color)}>
                  {trackConfig.label}
                </span>
              </div>

              {/* Items */}
              <div className="space-y-2">
                {byTrack(track).map((item: OpportunityTypeItem) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveType(activeType === item.id ? null : item.id)}
                    aria-pressed={activeType === item.id}
                    className={cn(
                      'w-full text-left flex items-center gap-3 px-4 py-3 rounded border transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-500)]',
                      activeType === item.id
                        ? trackConfig.bg
                        : 'border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/50 hover:border-[var(--color-border-strong)]'
                    )}
                  >
                    <span className="text-base" role="img" aria-label={item.label}>
                      {item.icon}
                    </span>
                    <span className="text-xs font-medium text-[var(--color-text-primary)]">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Description panel */}
      <div
        className={cn(
          'mx-6 mb-6 rounded border p-4 transition-all duration-200',
          activeItem
            ? 'border-[var(--color-border-strong)] bg-[var(--color-surface-raised)]'
            : 'border-[var(--color-border-default)] bg-[var(--color-surface-base)] opacity-50'
        )}
        aria-live="polite"
        aria-atomic="true"
      >
        {activeItem ? (
          <div className="flex items-start gap-3">
            <span className="text-xl mt-0.5">{activeItem.icon}</span>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                {activeItem.label}
              </p>
              <p className="text-xs text-[var(--color-text-secondary)] mt-0.5 leading-relaxed">
                {activeItem.description}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-xs text-[var(--color-text-tertiary)] text-center py-1">
            Select an opportunity type above to see more detail.
          </p>
        )}
      </div>

      <div className="px-6 pb-4">
        <p className="text-[10px] text-[var(--color-text-tertiary)]">
          These opportunity types represent the intended future direction of Opportunity Agent.
          Not all categories are currently available within Career OS.
        </p>
      </div>
    </div>
  );
}
