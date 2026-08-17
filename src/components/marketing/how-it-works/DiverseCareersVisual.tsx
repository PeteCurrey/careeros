'use client';

import React, { useState } from 'react';
import { DIVERSE_CAREERS, DiverseCareer } from './howItWorksData';
import { cn } from '@/lib/utils';
import { ShieldAlert, Wrench, Stethoscope, Scale, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';

const PROFESSION_ICONS: Record<string, React.ElementType> = {
  firefighter: ShieldAlert,
  mechanic: Wrench,
  doctor: Stethoscope,
  lawyer: Scale,
  logistics: Truck,
};

export function DiverseCareersVisual() {
  const [selectedCareerId, setSelectedCareerId] = useState<string>('firefighter');
  const activeCareer: DiverseCareer =
    DIVERSE_CAREERS.find((c) => c.id === selectedCareerId) ?? DIVERSE_CAREERS[0]!;

  return (
    <div
      className="w-full border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden bg-[var(--background-dark-deep)]"
      role="region"
      aria-label="Different Careers, Same System Visual"
    >
      {/* Header */}
      <div className="p-6 sm:p-8 bg-black/40 border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)]">
            Universal Architecture
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
            Whether you wear a suit, scrubs, uniform or work boots.
          </h3>
        </div>
        <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] px-3 py-1.5 rounded">
          5 Sector Models
        </span>
      </div>

      {/* 5 Profession Switcher Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]" role="tablist">
        {DIVERSE_CAREERS.map((career) => {
          const Icon = PROFESSION_ICONS[career.id] || Wrench;
          const isSelected = career.id === selectedCareerId;
          return (
            <button
              key={career.id}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedCareerId(career.id)}
              className={cn(
                'p-4 text-left border-r last:border-r-0 border-b lg:border-b-0 border-[var(--color-border-default)] transition-all duration-150 flex flex-col gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400',
                isSelected
                  ? 'bg-[var(--color-surface-raised)] text-white shadow-xs border-t-2 border-t-purple-400'
                  : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] hover:bg-white/5'
              )}
            >
              <div className="flex items-center gap-1.5">
                <Icon className={cn('w-4 h-4', isSelected ? 'text-purple-400' : 'text-[var(--color-text-tertiary)]')} />
                <span className="text-xs font-semibold leading-tight truncate">{career.title.split('/')[0]}</span>
              </div>
              <span className="text-[10px] text-[var(--color-text-tertiary)] truncate">
                {career.sector.split('&')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Career Deep Dive */}
      <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[var(--color-surface-base)]" aria-live="polite">
        {/* Left: Evidence Base */}
        <div className="p-6 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-blue-300 uppercase tracking-wider">
              Career Passport Evidence Base
            </span>
            <h4 className="text-base font-bold text-white">
              {activeCareer.title}
            </h4>
          </div>

          <div className="space-y-2 text-xs">
            {activeCareer.evidenceBase.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-[var(--color-text-secondary)]">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Progression Pathways & System Application */}
        <div className="p-6 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-purple-300 uppercase tracking-wider">
              Career Graph Progression &amp; Bridges
            </span>
            <h4 className="text-base font-bold text-white">
              Adjacent Destinations
            </h4>
          </div>

          <div className="space-y-2 text-xs">
            {activeCareer.progressionPathways.map((pathway, idx) => (
              <div key={idx} className="flex items-start gap-2 text-[var(--color-text-secondary)]">
                <ArrowRight className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span className="font-medium text-white">{pathway}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed pt-3 border-t border-[var(--color-border-default)]">
            <span className="font-semibold text-white">System Calibration: </span>
            {activeCareer.systemApplication}
          </p>
        </div>
      </div>
    </div>
  );
}
