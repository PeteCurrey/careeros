'use client';

import React, { useState } from 'react';
import { CAREER_OS_IN_ACTION_STEPS, JourneyStep } from './howItWorksData';
import { cn } from '@/lib/utils';
import {
  User, UserCheck, Bot, Award, Compass, Sparkles, Shield, RefreshCw,
  ArrowRight, ChevronLeft, ChevronRight, CheckCircle2,
} from 'lucide-react';

const STEP_ICONS: Record<string, React.ElementType> = {
  profile: User,
  twin: UserCheck,
  mentor: Bot,
  passport: Award,
  graph: Compass,
  opportunity: Sparkles,
  decision: Shield,
  continuity: RefreshCw,
};

const STEP_COLORS: Record<string, { ring: string; bg: string; text: string; badge: string }> = {
  profile: { ring: 'border-white/50', bg: 'bg-white/10', text: 'text-white', badge: 'text-white bg-white/10 border-white/30' },
  twin: { ring: 'border-[var(--color-brand-500)]', bg: 'bg-[var(--color-brand-950)]/60', text: 'text-[var(--color-brand-300)]', badge: 'text-[var(--color-brand-300)] bg-[var(--color-brand-950)]/40 border-[var(--color-brand-500)]/40' },
  mentor: { ring: 'border-emerald-500', bg: 'bg-emerald-950/40', text: 'text-emerald-300', badge: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30' },
  passport: { ring: 'border-blue-500', bg: 'bg-blue-950/40', text: 'text-blue-300', badge: 'text-blue-300 bg-blue-500/10 border-blue-500/30' },
  graph: { ring: 'border-purple-500', bg: 'bg-purple-950/40', text: 'text-purple-300', badge: 'text-purple-300 bg-purple-500/10 border-purple-500/30' },
  opportunity: { ring: 'border-amber-500', bg: 'bg-amber-950/40', text: 'text-amber-300', badge: 'text-amber-300 bg-amber-500/10 border-amber-500/30' },
  decision: { ring: 'border-rose-500', bg: 'bg-rose-950/40', text: 'text-rose-300', badge: 'text-rose-300 bg-rose-500/10 border-rose-500/30' },
  continuity: { ring: 'border-cyan-500', bg: 'bg-cyan-950/40', text: 'text-cyan-300', badge: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/30' },
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function StepSidebar({
  steps,
  currentIndex,
  onSelect,
}: {
  steps: JourneyStep[];
  currentIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="space-y-1" role="tablist" aria-label="Career OS Journey Steps">
      {steps.map((step, idx) => {
        const isActive = idx === currentIndex;
        const isComplete = idx < currentIndex;
        const Icon = STEP_ICONS[step.visualArtifact.type] || User;
        const colors = STEP_COLORS[step.visualArtifact.type] ?? STEP_COLORS['profile']!;
        return (
          <button
            key={step.stepNumber}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(idx)}
            className={cn(
              'w-full text-left flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400',
              isActive
                ? `${colors.bg} border border-opacity-50 ${colors.ring} border text-white`
                : isComplete
                ? 'text-[var(--color-text-secondary)] hover:bg-white/5'
                : 'text-[var(--color-text-tertiary)] hover:bg-white/5'
            )}
          >
            <div
              className={cn(
                'w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 text-[10px] font-bold font-mono',
                isActive ? `${colors.ring} ${colors.bg} ${colors.text}` : isComplete ? 'border-white/30 bg-white/10 text-white/60' : 'border-white/15 text-white/30'
              )}
            >
              {isComplete ? <CheckCircle2 className="w-3.5 h-3.5 text-white/50" /> : step.stepNumber}
            </div>
            <div className="min-w-0">
              <div className={cn('text-xs font-semibold leading-tight truncate', isActive ? 'text-white' : '')}>
                {step.phaseTitle}
              </div>
              <div className="text-[10px] text-[var(--color-text-tertiary)] font-mono">{step.engine}</div>
            </div>
            {isActive && <Icon className={cn('w-3.5 h-3.5 shrink-0 ml-auto', colors.text)} />}
          </button>
        );
      })}
    </div>
  );
}

function ArtifactCard({ step }: { step: JourneyStep }) {
  const { visualArtifact } = step;
  const colors = STEP_COLORS[visualArtifact.type] ?? STEP_COLORS['profile']!;

  return (
    <div className="space-y-5" aria-live="polite" aria-atomic="true">
      {/* Phase Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              'text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded border font-semibold',
              colors.badge
            )}
          >
            {visualArtifact.badge}
          </span>
          <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
            Step {step.stepNumber} of {CAREER_OS_IN_ACTION_STEPS.length}
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
          {step.phaseTitle}
        </h3>
        <p className={cn('text-xs font-semibold uppercase tracking-wider', colors.text)}>
          {step.engine}
        </p>
      </div>

      {/* User Context */}
      <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-1">
        <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">What's happening for the user</span>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">{step.userContext}</p>
      </div>

      {/* System Action */}
      <div className="p-4 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-1">
        <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">How Career OS responds</span>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">{step.systemAction}</p>
      </div>

      {/* Artifact Details */}
      <div className={cn('p-4 sm:p-5 rounded-xl border space-y-3', colors.bg, 'border-opacity-40', colors.ring)}>
        <div className="space-y-1">
          <span className={cn('text-[10px] font-mono uppercase tracking-wider', colors.text)}>
            Career OS System Output
          </span>
          <p className="text-sm font-semibold text-white">{visualArtifact.title}</p>
        </div>
        <div className="space-y-1.5">
          {visualArtifact.details.map((detail, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className={cn('w-1.5 h-1.5 rounded-full mt-1.5 shrink-0', colors.text.replace('text-', 'bg-'))} />
              <span className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{detail}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Highlight Quote */}
      {visualArtifact.highlightQuote && (
        <blockquote className={cn('border-l-4 pl-4 py-1', colors.ring)}>
          <p className={cn('text-sm font-serif italic leading-snug', colors.text)}>
            {visualArtifact.highlightQuote}
          </p>
        </blockquote>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function CareerOSInActionDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentStep = CAREER_OS_IN_ACTION_STEPS[currentIndex]!;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === CAREER_OS_IN_ACTION_STEPS.length - 1;

  return (
    <div
      id="career-os-in-action"
      className="w-full border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden bg-[var(--background-dark-deep)]"
      role="region"
      aria-label="Career OS in Action: Follow One Career Through the Full System"
    >
      {/* Top Header */}
      <div className="p-6 sm:p-8 bg-black/40 border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-widest text-purple-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Signature Interactive Experience · Mechanical Technician
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
            Follow one career through Career OS.
          </h3>
        </div>
        <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] px-3 py-1.5 rounded shrink-0">
          Step {currentIndex + 1} / {CAREER_OS_IN_ACTION_STEPS.length}
        </span>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] bg-[var(--color-surface-base)]">
        {/* Left: Step Sidebar Navigation */}
        <div className="border-b lg:border-b-0 lg:border-r border-[var(--color-border-default)] p-4 sm:p-6 bg-[var(--color-surface-raised)]">
          <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] mb-4 block">
            8-Step Journey
          </p>
          <StepSidebar
            steps={CAREER_OS_IN_ACTION_STEPS}
            currentIndex={currentIndex}
            onSelect={setCurrentIndex}
          />
        </div>

        {/* Right: Artifact Detail Panel */}
        <div className="p-6 sm:p-8 lg:p-10 overflow-y-auto">
          <ArtifactCard step={currentStep} />
        </div>
      </div>

      {/* Mobile Progress Indicator (visible on small screens) */}
      <div className="lg:hidden px-6 py-3 bg-[var(--color-surface-raised)] border-t border-[var(--color-border-default)] flex gap-1.5 justify-center">
        {CAREER_OS_IN_ACTION_STEPS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to step ${idx + 1}`}
            className={cn(
              'h-1 rounded-full transition-all',
              idx === currentIndex ? 'w-6 bg-purple-400' : idx < currentIndex ? 'w-3 bg-white/30' : 'w-3 bg-white/15'
            )}
          />
        ))}
      </div>

      {/* Bottom Navigation Controls */}
      <div className="p-5 bg-black/40 border-t border-[var(--color-border-default)] flex items-center justify-between">
        <button
          onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
          disabled={isFirst}
          className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-secondary)] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded px-3 py-2"
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>

        {!isLast ? (
          <button
            onClick={() => setCurrentIndex((i) => Math.min(CAREER_OS_IN_ACTION_STEPS.length - 1, i + 1))}
            className="flex items-center gap-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300 px-3 py-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            Journey Complete
          </div>
        )}
      </div>
    </div>
  );
}
