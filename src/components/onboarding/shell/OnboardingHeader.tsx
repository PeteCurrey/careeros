'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { OnboardingChapter } from '@/types/platform/onboarding';
import { OnboardingHelpModal } from './OnboardingHelpModal';
import { ShieldCheck, HelpCircle, LogOut, CheckCircle2 } from 'lucide-react';
import { ROUTES } from '@/lib/routes';

interface OnboardingHeaderProps {
  currentChapter: OnboardingChapter;
  saveStatus?: string | null;
  onSaveAndExit?: () => void;
}

export function OnboardingHeader({
  currentChapter,
  saveStatus,
  onSaveAndExit,
}: OnboardingHeaderProps) {
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const chapters: { id: OnboardingChapter; label: string; number: string }[] = [
    { id: '01_PROTECT', label: 'Protect', number: '01' },
    { id: '02_UNDERSTAND', label: 'Understand', number: '02' },
    { id: '03_ACTIVATE', label: 'Activate', number: '03' },
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

          {/* CENTRE / DESKTOP: 3 Clean Chapter Milestones */}
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

          {/* MOBILE: Compact Chapter Badge */}
          <div className="md:hidden flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-xs font-mono text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] animate-pulse" />
            <span>
              {chapters[currentChapterIndex]?.number} {chapters[currentChapterIndex]?.label}
            </span>
          </div>

          {/* RIGHT: Status, Help & Save & Exit */}
          <div className="flex items-center gap-3 text-xs font-mono">
            {/* Auto-save confirmation indicator */}
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="hidden sm:inline">{saveStatus || 'Saved'}</span>
            </div>

            <div className="h-3.5 w-px bg-[var(--color-border-default)] hidden sm:block" />

            {/* Help modal trigger */}
            <button
              onClick={() => setIsHelpOpen(true)}
              className="text-[var(--color-taupe-300)] hover:text-white flex items-center gap-1 px-2 py-1 rounded hover:bg-white/5 transition-colors"
              title="Setup help & privacy details"
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
