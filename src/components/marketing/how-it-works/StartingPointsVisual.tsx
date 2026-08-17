'use client';

import React, { useState } from 'react';
import { STARTING_PERSONAS, StartingPersona } from './howItWorksData';
import { cn } from '@/lib/utils';
import { GraduationCap, Briefcase, RefreshCw, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';

const PERSONA_ICONS: Record<string, React.ElementType> = {
  student: GraduationCap,
  professional: Briefcase,
  changer: RefreshCw,
  founder: Rocket,
};

export function StartingPointsVisual() {
  const [selectedPersonaId, setSelectedPersonaId] = useState<string>('student');
  const activePersona: StartingPersona =
    STARTING_PERSONAS.find((p) => p.id === selectedPersonaId) ?? STARTING_PERSONAS[0]!;

  return (
    <div
      className="w-full border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden bg-[var(--background-dark-deep)]"
      role="region"
      aria-label="Four Starting Points in Career OS"
    >
      {/* Top Header */}
      <div className="p-6 sm:p-8 bg-black/40 border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)]">
            Intake &amp; Calibration
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
            Where are you starting from?
          </h3>
        </div>
        <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] px-3 py-1.5 rounded">
          4 Illustrative Journeys
        </span>
      </div>

      {/* 4 Persona Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]" role="tablist">
        {STARTING_PERSONAS.map((persona) => {
          const Icon = PERSONA_ICONS[persona.id] || Briefcase;
          const isSelected = persona.id === selectedPersonaId;
          return (
            <button
              key={persona.id}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedPersonaId(persona.id)}
              className={cn(
                'p-4 sm:p-5 text-left border-r last:border-r-0 border-b md:border-b-0 border-[var(--color-border-default)] transition-all duration-150 flex flex-col gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400',
                isSelected
                  ? 'bg-[var(--color-surface-raised)] text-white shadow-xs border-b-2 md:border-b-0 md:border-t-2 border-t-purple-400'
                  : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] hover:bg-white/5'
              )}
            >
              <div className="flex items-center gap-2">
                <Icon className={cn('w-4 h-4', isSelected ? 'text-purple-400' : 'text-[var(--color-text-tertiary)]')} />
                <span className="text-xs font-semibold leading-tight">{persona.role}</span>
              </div>
              <span className="text-[10px] text-[var(--color-text-tertiary)] leading-tight hidden sm:block">
                {persona.tagline}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Persona Deep Dive */}
      <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 items-start bg-[var(--color-surface-base)]" aria-live="polite">
        {/* Left: The Starting Voice */}
        <div className="space-y-5">
          <div className="p-5 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300">
              The Starting Situation
            </span>
            <p className="text-base sm:text-lg font-serif italic text-white leading-snug">
              {activePersona.quote}
            </p>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed pt-2 border-t border-[var(--color-border-default)]">
              <span className="font-semibold text-white">Common Bottleneck: </span>
              {activePersona.startingChallenge}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-black/40 border border-[var(--color-border-default)] space-y-1">
            <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider">
              Initial Platform Outcome
            </span>
            <p className="text-xs text-emerald-300 font-medium leading-relaxed">
              {activePersona.initialOutcome}
            </p>
          </div>
        </div>

        {/* Right: How Career OS Begins */}
        <div className="space-y-4">
          <span className="text-xs font-semibold text-white uppercase tracking-wider block">
            How Career OS Calibrates Your First Steps:
          </span>

          <div className="space-y-3">
            {activePersona.howCareerOSStarts.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-[var(--color-text-tertiary)] pt-2 italic">
            Career OS adapts its language and depth based on where you are. A high school student gets exploratory guidance; a 15-year veteran gets strategic leverage.
          </p>
        </div>
      </div>
    </div>
  );
}
