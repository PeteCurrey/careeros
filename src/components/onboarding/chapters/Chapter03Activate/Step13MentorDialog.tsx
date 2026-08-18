'use client';

import React from 'react';
import Image from 'next/image';
import { AdaptiveSplitLayout } from '../../shared/AdaptiveSplitLayout';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { MentorAssignment, CareerObjective } from '@/types/platform/mentors';
import { MessageSquare, Sparkles, Target, ArrowRight, ArrowLeft } from 'lucide-react';

interface Step13MentorDialogProps {
  mentorAssignment: MentorAssignment;
  mentorQuestion: string;
  mentorAnswer: string;
  careerObjective: CareerObjective | null;
  objectiveError: string | null;
  onChangeAnswer: (answer: string) => void;
  onFormulateObjective: () => void;
  onNext: () => void;
  onBack: () => void;
}

export function Step13MentorDialog({
  mentorAssignment,
  mentorQuestion,
  mentorAnswer,
  careerObjective,
  objectiveError,
  onChangeAnswer,
  onFormulateObjective,
  onNext,
  onBack,
}: Step13MentorDialogProps) {
  const firstName = mentorAssignment.mentorName.split(' ')[0] || 'Mentor';
  const questionText =
    mentorQuestion ||
    "If Career OS works really well for you over the next six months, what would actually be different in your career?";

  const mentorVisual = (
    <div className="p-7 rounded-2xl bg-gradient-to-br from-[#0F1422] to-[#141B2E] border border-blue-950/40 shadow-2xl space-y-5">
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 shrink-0">
          <Image
            src={mentorAssignment.portraitSrc}
            alt={mentorAssignment.mentorName}
            fill
            className="object-cover object-top"
          />
        </div>
        <div>
          <span className="text-xs font-bold text-white block">
            {mentorAssignment.mentorName}
          </span>
          <span className="text-[10px] font-mono text-[var(--accent-blue)]">
            {mentorAssignment.mentorDomain}
          </span>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
        <span className="text-[10px] font-mono uppercase text-[#DDD36D] font-bold block">
          Your goal
        </span>
        <p className="text-xs text-zinc-200 leading-relaxed">
          &ldquo;We'll turn what you want to achieve into clear next steps you can work on.&rdquo;
        </p>
      </div>
    </div>
  );

  return (
    <AdaptiveSplitLayout
      chapter="03_ACTIVATE"
      stepNumber="3"
      stepTotal="5"
      sectionLabel="Your Mentor"
      headline={`A question from ${firstName}.`}
      description="Your answer helps your Mentor understand what success looks like for you."
      visualContent={mentorVisual}
    >
      <div className="space-y-6">
        {/* Mentor Question Dialogue Box */}
        <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--accent-blue-border)] space-y-4 shadow-xl">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#2F8FFF]" />
            <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              {firstName}'s First Question
            </span>
          </div>

          <p className="text-sm sm:text-base font-serif text-white italic leading-relaxed">
            &ldquo;{questionText}&rdquo;
          </p>

          <div className="space-y-2 pt-2 border-t border-[var(--color-border-default)]">
            <label htmlFor="reflection-input" className="text-xs font-semibold text-white block">
              Your answer
            </label>
            <textarea
              id="reflection-input"
              rows={3}
              autoFocus
              value={mentorAnswer}
              onChange={(e) => onChangeAnswer(e.target.value)}
              placeholder="e.g. Find a job with better pay, get practical experience in a new area, work out my next move..."
              className="w-full p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#2F8FFF]"
            />
          </div>

          {!careerObjective && (
            <div className="flex justify-end pt-1">
              <Button
                type="button"
                variant="primary"
                size="sm"
                onClick={onFormulateObjective}
                disabled={!mentorAnswer.trim()}
                className="text-xs font-mono"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1 text-[#DDD36D]" />
                <span>Create my plan</span>
              </Button>
            </div>
          )}

          {objectiveError && (
            <p className="text-xs text-red-400 p-2 rounded bg-red-950/20 border border-red-700/30">
              {objectiveError}
            </p>
          )}
        </div>

        {/* Formulated Objective Card Payoff */}
        {careerObjective && (
          <Card className="p-6 bg-gradient-to-br from-[var(--color-surface-raised)] to-[var(--color-surface-base)] border border-emerald-500/30 space-y-3 shadow-lg animate-in fade-in duration-300">
            <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border-default)]">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                  Here's what we'll work towards first
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                READY
              </span>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white">{careerObjective.title}</h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {careerObjective.description}
              </p>
            </div>

            {careerObjective.milestones?.length > 0 && (
              <div className="space-y-1.5 pt-2 border-t border-[var(--color-border-default)]">
                <span className="text-[10px] font-mono text-[var(--color-taupe-300)] uppercase block">
                  Your first steps:
                </span>
                <div className="space-y-1">
                  {careerObjective.milestones.map((m) => (
                    <div
                      key={m.id}
                      className="p-2 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-xs text-zinc-300 flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2F8FFF]" />
                      <span>{m.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card>
        )}

        {/* Bottom Actions */}
        <div className="pt-2 flex items-center justify-between">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-xs font-mono text-[var(--color-taupe-300)]"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>Back</span>
          </Button>

          <Button
            type="button"
            variant="primary"
            size="md"
            onClick={onNext}
            disabled={!careerObjective}
            className="text-xs font-mono"
          >
            <span>Next</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </AdaptiveSplitLayout>
  );
}
