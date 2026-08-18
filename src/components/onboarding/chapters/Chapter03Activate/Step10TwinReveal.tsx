'use client';

import React from 'react';
import { AdaptiveSplitLayout } from '../../shared/AdaptiveSplitLayout';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CareerTwin } from '@/types/platform/intelligence';
import { Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';

interface Step10TwinRevealProps {
  careerTwin: CareerTwin;
  onConfirm: () => void;
  onCorrect: () => void;
  onBack: () => void;
}

export function Step10TwinReveal({
  careerTwin,
  onConfirm,
  onCorrect,
  onBack,
}: Step10TwinRevealProps) {
  return (
    <AdaptiveSplitLayout
      chapter="03_ACTIVATE"
      stepNumber="1"
      stepTotal="5"
      sectionLabel="Your Career OS"
      headline="Meet your Career Twin."
      description="Your Career Twin is a private, evolving picture of your experience, skills, goals and where you could go next."
      imageSrc="/media/product/career_twin_horizon.jpg"
      imageAlt="Career Twin Overview"
      bottomVisualQuote={{
        text: 'Your Career Twin grows and updates as you achieve new things.',
        author: 'Career OS',
      }}
    >
      <div className="space-y-6">
        {/* Core Summary Card */}
        <Card className="p-6 sm:p-7 space-y-5 bg-gradient-to-br from-[var(--color-surface-raised)] to-[var(--color-surface-base)] border border-[var(--accent-blue-border)] shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border-default)]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#DDD36D]" />
              <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                Your Starting Profile
              </h3>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-bold">
              PRIVATE
            </span>
          </div>

          <p className="text-sm sm:text-base font-serif text-white leading-relaxed italic">
            &ldquo;{careerTwin.summary}&rdquo;
          </p>

          {/* Capabilities Recognized */}
          {careerTwin.capabilities?.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-[var(--color-border-default)]">
              <span className="text-[10px] font-mono text-[var(--color-taupe-300)] uppercase tracking-wider block">
                Key Skills &amp; Strengths ({careerTwin.capabilities.length}):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {careerTwin.capabilities.map((c) => (
                  <span
                    key={c.name}
                    className="px-2.5 py-1 rounded bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] text-xs text-white"
                  >
                    <span className="font-semibold">{c.name}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Experience Themes */}
          {careerTwin.experienceThemes?.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-[var(--color-border-default)]">
              <span className="text-[10px] font-mono text-[var(--color-taupe-300)] uppercase tracking-wider block">
                Focus Areas:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {careerTwin.experienceThemes.map((theme) => (
                  <span
                    key={theme}
                    className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-zinc-200"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          )}
        </Card>

        {/* Confirmation or Correction Bar */}
        <div className="p-4 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-[var(--color-text-secondary)]">
            Does this sound like a good starting point?
          </span>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={onCorrect}
              className="text-xs font-mono"
            >
              <RotateCcw className="w-3 h-3 mr-1" />
              <span>Change this</span>
            </Button>

            <Button
              type="button"
              variant="primary"
              size="sm"
              onClick={onConfirm}
              className="text-xs font-mono"
            >
              <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
              <span>Looks right</span>
            </Button>
          </div>
        </div>
      </div>
    </AdaptiveSplitLayout>
  );
}
