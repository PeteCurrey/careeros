'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { OnboardingChapter } from '@/types/platform/onboarding';
import { OnboardingHelpModal } from './OnboardingHelpModal';
import { HelpCircle, LogOut, CheckCircle2, Loader2, AlertTriangle } from 'lucide-react';
import { ROUTES } from '@/lib/routes';

/**
 * Real save state, rather than a permanent green tick.
 *
 * This indicator previously rendered "Saved" with a green dot from the first
 * frame onward — before anything had been sent, and regardless of whether the
 * request later failed. In a product whose pitch is that the user's record is
 * trustworthy, the one piece of chrome that reports on their data has to be
 * accurate.
 */
export type OnboardingSaveState = 'idle' | 'saving' | 'saved' | 'error';

interface OnboardingHeaderProps {
  currentChapter: OnboardingChapter;
  saveState?: OnboardingSaveState;
  /** Optional detail, e.g. "Passkey secured". Only shown alongside 'saved'. */
  saveDetail?: string | null;
  onSaveAndExit?: () => void;
}

export function OnboardingHeader({
  currentChapter,
  saveState = 'idle',
  saveDetail,
  onSaveAndExit,
}: OnboardingHeaderProps) {
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const chapters: { id: OnboardingChapter; label: string; number: string }[] = [
    { id: '01_PROTECT', label: 'Set up', number: '01' },
    { id: '02_UNDERSTAND', label: 'About you', number: '02' },
    { id: '03_ACTIVATE', label: 'Your Career OS', number: '03' },
  ];

  const currentChapterIndex = chapters.findIndex((c) => c.id === currentChapter);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[var(--color-surface-base)]/90 backdrop-blur-md border-b border-[var(--color-border-default)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* LEFT: Career OS Brand Signpost */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-mono tracking-tight text-white hover:text-[var(--accent-blue)] transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-blue)] rounded"
            >
              <div className="w-6 h-6 rounded bg-[var(--accent-blue)]/15 border border-[var(--accent-blue)]/40 flex items-center justify-center text-[var(--accent-blue)] group-hover:border-[var(--accent-blue)] transition-colors">
                <span className="font-bold text-xs">C</span>
              </div>
              <span className="font-bold tracking-wider uppercase text-xs">Career OS</span>
            </Link>
          </div>

          {/* CENTER / DESKTOP: 3 Simple Milestones */}
          <nav
            aria-label="Setup progress"
            className="hidden md:flex items-center gap-2 p-1 rounded-full bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]"
          >
            {chapters.map((ch, idx) => {
              const isCurrent = ch.id === currentChapter;
              const isPast = idx < currentChapterIndex;

              return (
                <div
                  key={ch.id}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all ${
                    isCurrent
                      ? 'bg-[var(--accent-blue-subtle)] text-white border border-[var(--accent-blue-border)] font-bold shadow-sm'
                      : isPast
                      ? 'text-emerald-400 font-medium'
                      : 'text-[var(--color-text-tertiary)]'
                  }`}
                >
                  {isPast ? (
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isCurrent ? 'bg-[var(--accent-blue)] animate-pulse' : 'bg-zinc-600'
                      }`}
                    />
                  )}
                  <span>
                    {ch.number} {ch.label}
                  </span>
                </div>
              );
            })}
          </nav>

          {/* MOBILE: Compact Stage Badge */}
          <div className="md:hidden flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-xs font-mono text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] animate-pulse" />
            <span>
              {chapters[currentChapterIndex]?.number} {chapters[currentChapterIndex]?.label}
            </span>
          </div>

          {/* RIGHT: Status, Help & Save & Exit */}
          <div className="flex items-center gap-3 text-xs font-mono">
            {/* Save state — renders nothing until there is something to report. */}
            {saveState !== 'idle' && (
              <div
                role="status"
                aria-live="polite"
                className={`flex items-center gap-1.5 ${
                  saveState === 'error'
                    ? 'text-[var(--color-warning)]'
                    : saveState === 'saving'
                      ? 'text-[var(--color-text-tertiary)]'
                      : 'text-emerald-400'
                }`}
              >
                {saveState === 'saving' && (
                  <Loader2 className="w-3 h-3 animate-spin" aria-hidden="true" />
                )}
                {saveState === 'saved' && (
                  <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                )}
                {saveState === 'error' && (
                  <AlertTriangle className="w-3 h-3" aria-hidden="true" />
                )}
                <span className="hidden sm:inline">
                  {saveState === 'saving' && 'Saving'}
                  {saveState === 'saved' && (saveDetail || 'Progress saved')}
                  {saveState === 'error' && "Couldn't save"}
                </span>
              </div>
            )}

            {saveState !== 'idle' && (
              <div className="h-3.5 w-px bg-[var(--color-border-default)] hidden sm:block" />
            )}

            {/* Help modal trigger */}
            <button
              onClick={() => setIsHelpOpen(true)}
              className="text-[var(--color-taupe-300)] hover:text-white flex items-center gap-1 px-2 py-1 rounded hover:bg-white/5 transition-colors"
              title="Help and privacy details"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Help</span>
            </button>

            {/* Save & exit action */}
            <button
              onClick={onSaveAndExit || (() => window.location.assign(ROUTES.HOME))}
              className="text-[var(--color-taupe-300)] hover:text-white flex items-center gap-1 px-2.5 py-1 rounded border border-transparent hover:border-[var(--color-border-default)] hover:bg-white/5 transition-colors"
              title="Save progress and exit"
            >
              <LogOut className="w-3.5 h-3.5 text-[var(--color-taupe-300)]" />
              <span className="hidden sm:inline">Save &amp; exit</span>
            </button>
          </div>
        </div>
      </header>

      {/* Contextual Help Modal */}
      <OnboardingHelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
    </>
  );
}
