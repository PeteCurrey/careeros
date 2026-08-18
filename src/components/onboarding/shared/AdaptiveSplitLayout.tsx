'use client';

import React from 'react';
import Image from 'next/image';
import { OnboardingChapter } from '@/types/platform/onboarding';

interface AdaptiveSplitLayoutProps {
  chapter: OnboardingChapter;
  stepNumber?: string;
  stepTotal?: string;
  sectionLabel?: string;
  headline: string | React.ReactNode;
  description?: string | React.ReactNode;
  children: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  visualContent?: React.ReactNode;
  bottomVisualQuote?: {
    text: string;
    author?: string;
  };
}

export function AdaptiveSplitLayout({
  chapter,
  stepNumber,
  stepTotal,
  sectionLabel,
  headline,
  description,
  children,
  imageSrc,
  imageAlt = 'Career OS Environment',
  visualContent,
  bottomVisualQuote,
}: AdaptiveSplitLayoutProps) {
  // Atmosphere styles per chapter
  const getAtmosphereClass = () => {
    switch (chapter) {
      case '01_PROTECT':
        return 'from-[#0A0D12] via-[#0E131A] to-[#121824] border-cyan-950/30';
      case '02_UNDERSTAND':
        return 'from-[#0D1117] via-[#151C26] to-[#1A2332] border-blue-950/30';
      case '03_ACTIVATE':
        return 'from-[#0B0F19] via-[#10172A] to-[#162038] border-indigo-950/40';
      default:
        return 'from-[var(--color-surface-base)] to-[var(--color-surface-raised)]';
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* ── LEFT / MAIN INTERACTION COLUMN (approx 52%) ── */}
        <div className="lg:col-span-7 space-y-8 animate-in fade-in duration-300">
          {/* Header Step Signpost */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              {sectionLabel && (
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-[var(--accent-blue-subtle)] text-[var(--accent-blue)] border border-[var(--accent-blue-border)] font-bold">
                  {sectionLabel}
                </span>
              )}
              {stepNumber && (
                <span className="text-xs font-mono text-[var(--color-taupe-300)]">
                  Step {stepNumber} {stepTotal && `of ${stepTotal}`}
                </span>
              )}
            </div>

            {/* Editorial Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-white tracking-tight leading-tight">
              {headline}
            </h1>

            {/* Supporting Context Copy */}
            {description && (
              <div className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
                {description}
              </div>
            )}
          </div>

          {/* Interactive Children Form Area */}
          <div className="space-y-6">{children}</div>
        </div>

        {/* ── RIGHT / VISUAL & ATMOSPHERE COLUMN (approx 48%) ── */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
          {visualContent ? (
            <div className="animate-in fade-in duration-500">{visualContent}</div>
          ) : imageSrc ? (
            <div
              className={`relative rounded-2xl overflow-hidden border bg-gradient-to-br ${getAtmosphereClass()} shadow-2xl p-1 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]`}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center filter saturate-[0.85] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {bottomVisualQuote && (
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 space-y-1">
                    <p className="text-xs text-white italic leading-relaxed">
                      &ldquo;{bottomVisualQuote.text}&rdquo;
                    </p>
                    {bottomVisualQuote.author && (
                      <p className="text-[10px] font-mono text-[var(--accent-blue)]">
                        &mdash; {bottomVisualQuote.author}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>

      </div>
    </div>
  );
}
