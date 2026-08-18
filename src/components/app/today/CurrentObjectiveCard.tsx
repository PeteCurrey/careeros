'use client';

import React from 'react';
import Link from 'next/link';
import { CareerObjective } from '@/types/platform/mentors';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/lib/routes';
import {
  Target,
  CheckCircle2,
  Circle,
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface CurrentObjectiveCardProps {
  objective: CareerObjective | null;
  mentorFirstName?: string;
}

export function CurrentObjectiveCard({
  objective,
  mentorFirstName = 'Marcus',
}: CurrentObjectiveCardProps) {
  if (!objective) {
    return (
      <Card className="p-6 space-y-4 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-[#2F8FFF]" />
          <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
            Active Career Objective
          </h3>
        </div>
        <p className="text-xs text-[var(--color-text-secondary)]">
          No objective set yet. Work with your Mentor to establish your first milestone roadmap.
        </p>
        <Button href={ROUTES.PRODUCT_AI_CAREER_MENTOR} variant="secondary" size="sm">
          Set Objective with {mentorFirstName} &rarr;
        </Button>
      </Card>
    );
  }

  const milestones = objective.milestones || [];
  const completedCount = milestones.filter((m) => m.isCompleted).length;
  const totalCount = milestones.length;

  return (
    <Card className="p-6 sm:p-7 space-y-5 bg-[var(--color-surface-raised)] border-[var(--color-border-default)] shadow-subtle">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[var(--color-border-default)]">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] flex items-center justify-center text-[var(--accent-blue)]">
            <Target className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] font-semibold block">
              Active Focus &bull; {objective.horizonDays}-Day Horizon
            </span>
            <h3 className="text-base font-bold text-white leading-tight">
              {objective.title}
            </h3>
          </div>
        </div>

        {totalCount > 0 && (
          <div className="px-3 py-1 rounded bg-white/5 border border-white/10 font-mono text-xs text-white">
            <span className="text-emerald-400 font-bold">{completedCount}</span> of{' '}
            <span className="font-bold">{totalCount}</span> milestones complete
          </div>
        )}
      </div>

      {objective.description && (
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
          {objective.description}
        </p>
      )}

      {/* Sequential Milestone Progress List */}
      {milestones.length > 0 && (
        <div className="space-y-2 pt-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-taupe-300)] font-semibold block">
            Milestone Progression Sequence:
          </span>
          <div className="space-y-2">
            {milestones.map((m, idx) => {
              const isCurrentTarget = !m.isCompleted && (idx === 0 || milestones[idx - 1]?.isCompleted);

              return (
                <div
                  key={m.id}
                  className={`p-3 rounded-lg border flex items-start gap-3 transition-colors ${
                    m.isCompleted
                      ? 'bg-emerald-500/5 border-emerald-500/20 text-[var(--color-text-secondary)]'
                      : isCurrentTarget
                      ? 'bg-[var(--accent-blue-subtle)] border-[var(--accent-blue-border)] text-white shadow-sm'
                      : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-tertiary)] opacity-80'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {m.isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : isCurrentTarget ? (
                      <div className="w-4 h-4 rounded-full border-2 border-[#2F8FFF] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2F8FFF] animate-pulse" />
                      </div>
                    ) : (
                      <Circle className="w-4 h-4 text-[var(--color-taupe-300)]" />
                    )}
                  </div>

                  <div className="space-y-0.5 flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className={`text-xs font-semibold ${m.isCompleted ? 'text-[var(--color-text-secondary)] line-through' : isCurrentTarget ? 'text-white' : 'text-[var(--color-text-secondary)]'}`}>
                        {m.title}
                      </p>
                      {isCurrentTarget && (
                        <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 rounded bg-[#2F8FFF] text-white font-bold">
                          Active Target
                        </span>
                      )}
                    </div>
                    {m.description && (
                      <p className="text-[11px] text-[var(--color-text-tertiary)] leading-snug">
                        {m.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Plan Link */}
      <div className="pt-2 flex items-center justify-between text-xs font-mono">
        <Link
          href={ROUTES.PRODUCT_AI_CAREER_MENTOR}
          className="text-[#2F8FFF] hover:underline flex items-center gap-1"
        >
          <span>View plan with {mentorFirstName}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </Card>
  );
}
