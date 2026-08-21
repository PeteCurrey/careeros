'use client';

import React, { useState } from 'react';
import { CareerEvent } from '@/types/events/platform';
import { CareerMatchIntelligence } from '@/types/events/platform';
import { Sparkles, Target, Brain, ArrowRight, Lock } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { cn } from '@/lib/utils';

interface PersonalizedEventMatchProps {
  event: CareerEvent;
  isLoggedIn?: boolean;
  className?: string;
}

export function PersonalizedEventMatch({
  event,
  isLoggedIn = false,
  className,
}: PersonalizedEventMatchProps) {
  const intel = event.mockIntelligence;

  // If no intelligence data and not logged in — show sign-in prompt
  if (!isLoggedIn || !intel) {
    return (
      <div
        className={cn(
          'p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3',
          className
        )}
      >
        <div className="flex items-center gap-2 text-[var(--color-text-tertiary)]">
          <Brain className="w-4 h-4" />
          <span className="text-[11px] font-bold uppercase tracking-wider">Career Intelligence</span>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] flex items-center justify-center shrink-0">
            <Lock className="w-4 h-4 text-[var(--color-text-tertiary)]" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-[var(--color-text-primary)] leading-snug">
              Sign in to see how this event fits your career plan.
            </p>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              CareerOS analyzes your Career Twin, goals, sector interests and location to personalize your event intelligence.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <Link
            href={ROUTES.SIGNUP}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white text-zinc-900 text-xs font-bold rounded-[var(--radius-button)] hover:bg-zinc-100 transition-colors"
          >
            <span>Create free account</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href={ROUTES.LOGIN}
            className="text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            Sign in
          </Link>
        </div>
      </div>
    );
  }

  const matchColor =
    intel.matchScore >= 85
      ? 'text-emerald-400'
      : intel.matchScore >= 65
      ? 'text-amber-400'
      : 'text-[var(--color-text-secondary)]';

  const matchBarColor =
    intel.matchScore >= 85
      ? 'bg-emerald-400'
      : intel.matchScore >= 65
      ? 'bg-amber-400'
      : 'bg-zinc-500';

  return (
    <div
      className={cn(
        'p-5 bg-[var(--color-surface-raised)] border border-[rgba(47,143,255,0.2)] rounded-[var(--radius-card)] space-y-4',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[var(--accent-blue)]">
          <Brain className="w-4 h-4" />
          <span className="text-[11px] font-bold uppercase tracking-wider">Why this event matters to you</span>
        </div>
        <div className={cn('text-xl font-black tabular-nums', matchColor)}>
          {intel.matchScore}%
        </div>
      </div>

      {/* Match Score Bar */}
      <div className="space-y-1.5">
        <div className="text-xs font-semibold text-[var(--color-text-primary)]">
          {intel.headline}
        </div>
        <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className={cn('h-full rounded-full transition-all duration-700', matchBarColor)}
            style={{ width: `${intel.matchScore}%` }}
          />
        </div>
      </div>

      {/* Rationale */}
      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed border-l-2 border-[rgba(47,143,255,0.35)] pl-3">
        {intel.rationale}
      </p>

      {/* Goals Alignment */}
      {intel.alignedGoals.length > 0 && (
        <div className="space-y-1.5">
          <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-300)]">
            Aligned Career Goals
          </div>
          <div className="flex flex-wrap gap-1.5">
            {intel.alignedGoals.map((goal) => (
              <span
                key={goal}
                className="px-2 py-0.5 bg-[rgba(47,143,255,0.1)] border border-[rgba(47,143,255,0.25)] text-[11px] text-[var(--accent-blue)] rounded-[var(--radius-tag)]"
              >
                {goal}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Targeted Skills */}
      {intel.targetedSkills.length > 0 && (
        <div className="space-y-1.5">
          <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-300)]">
            Skills This Event Addresses
          </div>
          <div className="flex flex-wrap gap-1.5">
            {intel.targetedSkills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] text-[11px] text-[var(--color-text-secondary)] rounded-[var(--radius-tag)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Mentor Snippet */}
      {intel.mentorAdviceSnippet && (
        <div className="p-3 bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] rounded-[var(--radius-sm)] flex items-start gap-2.5">
          <Sparkles className="w-3.5 h-3.5 text-[var(--accent-blue)] shrink-0 mt-0.5" />
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent-blue)] mb-1">
              Mentor Insight
            </div>
            <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
              {intel.mentorAdviceSnippet}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
