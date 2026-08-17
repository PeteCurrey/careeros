'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { MEDIA_ASSETS } from '@/lib/media';
import {
  MENTOR_DEMO_BRANCHES,
  Stage1Branch,
  Stage2Option,
  MentorResponseArea,
} from './mentorDemoData';
import {
  ArrowRight,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Compass,
  FileCheck,
  Network,
  CheckCircle2,
  HelpCircle,
  ArrowLeft,
  Lock,
} from 'lucide-react';

export function InteractiveMentorDemo() {
  const [selectedBranch, setSelectedBranch] = useState<Stage1Branch | null>(null);
  const [selectedOption, setSelectedOption] = useState<Stage2Option | null>(null);
  const sessionRef = useRef<HTMLDivElement>(null);

  const stage = selectedOption ? 3 : selectedBranch ? 2 : 1;

  const handleSelectBranch = (branch: Stage1Branch) => {
    setSelectedBranch(branch);
    setSelectedOption(null);
  };

  const handleSelectOption = (option: Stage2Option) => {
    setSelectedOption(option);
  };

  const handleReset = () => {
    setSelectedBranch(null);
    setSelectedOption(null);
  };

  const handleBackToStage1 = () => {
    setSelectedBranch(null);
    setSelectedOption(null);
  };

  const handleBackToStage2 = () => {
    setSelectedOption(null);
  };

  return (
    <section
      id="not-another-chatbot"
      aria-labelledby="mentor-demo-heading"
      className="scroll-mt-20 lg:scroll-mt-24 pt-20 lg:pt-28 pb-16 lg:pb-24 border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)]"
    >
      <div className="container-editorial space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="section-label">MENTOR DEMO</span>

          <h2
            id="mentor-demo-heading"
            className="text-display-section font-serif font-normal text-[var(--color-text-primary)] tracking-tight"
          >
            Ask the question that&apos;s actually on your mind.
          </h2>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
            Choose what you&apos;re trying to work out and see how an illustrative Career OS Mentor
            would turn a career question into context, a possible next move and the reasoning behind it.
          </p>

          <p className="text-xs font-mono text-[var(--color-text-tertiary)] pt-1 flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-[var(--color-taupe-600)] shrink-0" />
            <span>Illustrative experience &mdash; no information entered here is saved to a Career OS profile.</span>
          </p>
        </div>

        {/* Interactive 2-Part Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch min-h-[720px]">
          {/* Left Column: Human Mentor Presence (35–40% on Desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-subtle">
            {/* Mentor Visual Framing */}
            <div className="relative w-full aspect-4/3 sm:aspect-16/11 lg:aspect-4/3 overflow-hidden bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)]">
              <Image
                src={MEDIA_ASSETS.mentors.marcus.src}
                alt="Marcus Thorne — Illustrative Career OS Mentor in Technology & Engineering Leadership"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />

              {/* Bottom Image Overlay Scrim */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[var(--background-dark-deep)]/90 via-transparent to-transparent pointer-events-none"
              />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/20 backdrop-blur-md text-[11px] font-mono font-bold tracking-wider uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Illustrative Career OS Mentor
                </span>
              </div>
            </div>

            {/* Mentor Metadata Details */}
            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-xl text-[var(--color-text-primary)]">
                    Marcus Thorne
                  </h3>
                  <p className="text-xs font-semibold text-[var(--color-taupe-700)]">
                    Domain Specialization: Engineering, Operations &amp; Career Strategy
                  </p>
                </div>

                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  &ldquo;A real career conversation doesn&apos;t give you generic inspiration. It helps
                  you inspect your capabilities, pinpoint what&apos;s missing, and identify the next
                  verifiable move.&rdquo;
                </p>
              </div>

              {/* System Architecture Badges */}
              <div className="pt-4 border-t border-[var(--color-border-subtle)] space-y-2 text-[11px] font-mono text-[var(--color-text-tertiary)]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>Grounding: Career Twin &amp; Passport Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-taupe-600)]" />
                  <span>Session Type: Qualitative Diagnostic Sandbox</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Career Session (60–65% on Desktop) */}
          <div
            ref={sessionRef}
            aria-live="polite"
            className="lg:col-span-7 flex flex-col justify-between bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] p-6 sm:p-10 shadow-subtle"
          >
            {/* Top Bar: Progress Indicator & Reset */}
            <div className="flex items-center justify-between border-b border-[var(--color-border-default)] pb-4 text-xs font-mono text-[var(--color-text-tertiary)]">
              <div className="flex items-center gap-3">
                <span
                  className={
                    stage === 1
                      ? 'text-[var(--color-text-primary)] font-bold'
                      : 'text-[var(--color-text-tertiary)]'
                  }
                >
                  01 QUESTION
                </span>
                <span className="opacity-40">&rarr;</span>
                <span
                  className={
                    stage === 2
                      ? 'text-[var(--color-text-primary)] font-bold'
                      : 'text-[var(--color-text-tertiary)]'
                  }
                >
                  02 CONTEXT
                </span>
                <span className="opacity-40">&rarr;</span>
                <span
                  className={
                    stage === 3
                      ? 'text-[var(--color-text-primary)] font-bold'
                      : 'text-[var(--color-text-tertiary)]'
                  }
                >
                  03 NEXT MOVE
                </span>
              </div>

              {stage > 1 && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[var(--color-taupe-700)] hover:text-[var(--color-text-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-white/30 rounded px-1.5 py-0.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restart</span>
                </button>
              )}
            </div>

            {/* Stage Body */}
            <div className="py-6 flex-1 flex flex-col justify-center">
              {/* ───────────────────────────────────────────────────────────── */}
              {/* STAGE 1: WHAT ARE YOU TRYING TO WORK OUT?                     */}
              {/* ───────────────────────────────────────────────────────────── */}
              {stage === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="font-mono text-xs font-bold text-[var(--color-taupe-600)] uppercase tracking-wider block">
                      STAGE 01 &bull; INITIAL INQUIRY
                    </span>
                    <h3 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
                      What are you trying to work out right now?
                    </h3>
                  </div>

                  <div className="space-y-3 pt-2" role="group" aria-label="Career goal options">
                    {MENTOR_DEMO_BRANCHES.map((branch) => (
                      <button
                        key={branch.id}
                        type="button"
                        onClick={() => handleSelectBranch(branch)}
                        className="w-full text-left p-5 sm:p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] hover:border-white/15 hover:bg-[var(--color-surface-warm)] transition-all group flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-white/30 shadow-xs"
                      >
                        <div className="space-y-1">
                          <span className="font-mono text-[11px] font-bold text-[var(--color-taupe-700)] uppercase tracking-wider block">
                            {branch.title}
                          </span>
                          <p className="font-serif font-medium text-base sm:text-lg text-[var(--color-text-primary)] group-hover:translate-x-0.5 transition-transform">
                            {branch.subtitle}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-[var(--color-taupe-600)] group-hover:text-[var(--color-text-primary)] group-hover:translate-x-1 transition-all shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ───────────────────────────────────────────────────────────── */}
              {/* STAGE 2: MENTOR ASKS FOR RELEVANT CONTEXT                     */}
              {/* ───────────────────────────────────────────────────────────── */}
              {stage === 2 && selectedBranch && (
                <div className="space-y-6">
                  {/* Branch Anchor Tag */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleBackToStage1}
                      className="inline-flex items-center gap-1 text-xs font-mono text-[var(--color-taupe-700)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Change goal</span>
                    </button>
                    <span className="text-xs text-[var(--color-text-tertiary)]">&bull;</span>
                    <span className="font-mono text-xs font-bold text-[var(--color-text-primary)] uppercase">
                      {selectedBranch.title}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-xs font-bold text-[var(--color-taupe-600)] uppercase tracking-wider block">
                      STAGE 02 &bull; CONTEXTUAL CALIBRATION
                    </span>
                    <h3 className="text-display-section font-serif font-normal text-[var(--color-text-primary)]">
                      {selectedBranch.stage2Question}
                    </h3>
                  </div>

                  <div className="space-y-3 pt-2" role="group" aria-label="Context options">
                    {selectedBranch.stage2Options.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectOption(opt)}
                        className="w-full text-left p-4 sm:p-5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] hover:border-white/15 hover:bg-[var(--color-surface-warm)] transition-all group flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-white/30 shadow-xs"
                      >
                        <p className="font-serif font-medium text-base text-[var(--color-text-primary)] group-hover:translate-x-0.5 transition-transform">
                          {opt.text}
                        </p>
                        <ArrowRight className="w-4 h-4 text-[var(--color-taupe-600)] group-hover:text-[var(--color-text-primary)] group-hover:translate-x-1 transition-all shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ───────────────────────────────────────────────────────────── */}
              {/* STAGE 3: STRUCTURED CAREER OS MENTOR RESPONSE                 */}
              {/* ───────────────────────────────────────────────────────────── */}
              {stage === 3 && selectedBranch && selectedOption && (
                <div className="space-y-6">
                  {/* Selected Breadcrumb trail */}
                  <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--color-taupe-700)]">
                      <span>{selectedBranch.title}</span>
                      <span>&bull;</span>
                      <span className="text-[var(--color-text-primary)] font-semibold">
                        {selectedOption.text}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handleBackToStage2}
                      className="inline-flex items-center gap-1 text-xs font-mono text-[var(--color-taupe-700)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  </div>

                  {/* 1. What I'm Hearing */}
                  <div className="p-5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-700)] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[var(--color-taupe-600)]" />
                      1. What I&apos;m Hearing
                    </span>
                    <p className="text-sm font-serif text-[var(--color-text-primary)] leading-relaxed">
                      &ldquo;{selectedOption.response.hearing}&rdquo;
                    </p>
                  </div>

                  {/* 2. Possible Next Move */}
                  <div className="p-5 bg-[var(--color-surface-warm)] border-2 border-white/15 rounded-[var(--radius-card)] space-y-2 shadow-xs">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-primary)] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      2. Possible Next Move
                    </span>
                    <h4 className="font-serif font-bold text-base text-[var(--color-text-primary)]">
                      {selectedOption.response.nextMove}
                    </h4>
                    {selectedOption.response.nextMoveDetail && (
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                        {selectedOption.response.nextMoveDetail}
                      </p>
                    )}
                  </div>

                  {/* 3. Why This Could Matter (Factors) */}
                  <div className="p-5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-700)] block">
                      3. Why This Could Matter
                    </span>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {selectedOption.response.why}
                    </p>

                    {/* Factor Breakdown */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-[var(--color-border-subtle)]">
                      {selectedOption.response.factors.map((factor, fIdx) => (
                        <div key={fIdx} className="p-2.5 bg-white/70 rounded border border-[var(--color-border-subtle)] space-y-1">
                          <span className="font-mono text-[10px] font-bold text-[var(--color-taupe-700)] block uppercase">
                            {factor.label}
                          </span>
                          <p className="text-[11px] text-[var(--color-text-primary)] leading-tight">
                            {factor.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 4. What I'd Want to Know Next */}
                  <div className="p-5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-700)] flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-[var(--color-taupe-600)]" />
                      4. What I&apos;d Want to Know Next
                    </span>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {selectedOption.response.wantToKnowNext}
                    </p>

                    <div className="pt-3 border-t border-[var(--color-border-subtle)] space-y-2">
                      <p className="text-xs font-semibold text-[var(--color-text-primary)] font-serif">
                        Inside Career OS, this is where your Career Twin, Career Passport and Career Graph provide the deeper context:
                      </p>
                      <div className="flex flex-wrap gap-4 text-xs font-mono font-bold">
                        <Link
                          href={ROUTES.PRODUCT_CAREER_TWIN}
                          className="text-[var(--color-text-primary)] hover:text-[var(--color-taupe-700)] underline underline-offset-4"
                        >
                          Explore Career Twin &rarr;
                        </Link>
                        <Link
                          href={ROUTES.PRODUCT_CAREER_PASSPORT}
                          className="text-[var(--color-text-primary)] hover:text-[var(--color-taupe-700)] underline underline-offset-4"
                        >
                          See Career Passport &rarr;
                        </Link>
                        <Link
                          href={ROUTES.PRODUCT_CAREER_GRAPH}
                          className="text-[var(--color-text-primary)] hover:text-[var(--color-taupe-700)] underline underline-offset-4"
                        >
                          Explore Career Graph &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Controls */}
            <div className="pt-6 border-t border-[var(--color-border-default)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              {stage === 3 ? (
                <>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[var(--radius-card)] border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-xs font-mono font-bold text-[var(--color-text-primary)] hover:bg-[var(--color-surface-warm)] transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Ask another question</span>
                  </button>

                  <Button href={ROUTES.SIGNUP} variant="primary" size="md">
                    Start your Career OS
                  </Button>
                </>
              ) : (
                <div className="w-full flex items-center justify-between text-xs font-mono text-[var(--color-text-tertiary)]">
                  <span>Step {stage} of 3</span>
                  <span>Select an option to advance</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
