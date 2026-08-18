'use client';

import React from "react";
import { ScrollReveal } from "@/components/brand/ScrollReveal";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";

const CAREER_JOURNEY_STAGES = [
  'Education',
  'First Role',
  'Skills',
  'Career Change',
  'Leadership',
  'Entrepreneurship',
  'Reinvention',
];

export function TheProblemSection() {
  return (
    <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)] relative overflow-hidden">
      
      {/* Background Fine-Line Non-Linear Career Pathway Ribbon */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 z-0 opacity-25 overflow-hidden"
      >
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle connecting spline */}
          <path
            d="M -100 480 C 150 420, 320 540, 520 400 C 720 260, 940 380, 1160 220 C 1300 120, 1460 200, 1600 160"
            stroke="rgba(47, 143, 255, 0.4)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
          />
          {/* Secondary branching spline */}
          <path
            d="M 520 400 C 640 480, 800 510, 980 460 C 1140 420, 1320 440, 1500 380"
            stroke="rgba(205, 187, 210, 0.35)"
            strokeWidth="0.8"
            fill="none"
          />
        </svg>

        {/* Ambient radial wash */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#2F8FFF]/5 blur-3xl" />
      </div>

      <div className="container-editorial relative z-10 space-y-12">
        
        {/* Header Badge */}
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <span className="section-label">
              The Structural Challenge
            </span>
            <TechnicalBadge variant="blue" dot>
              SYSTEM DIAGNOSTIC
            </TechnicalBadge>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Editorial Statement & Copy */}
          <div className="lg:col-span-8 space-y-8">
            <ScrollReveal delayMs={100}>
              <h2 className="text-display-section text-[var(--color-text-primary)] max-w-3xl leading-[1.08]">
                Careers aren&apos;t linear anymore. <br />
                <span className="text-[var(--color-taupe-300)] font-normal">
                  Career support shouldn&apos;t be either.
                </span>
              </h2>
            </ScrollReveal>

            {/* Non-Linear Journey Milestone Track */}
            <ScrollReveal delayMs={200}>
              <div className="py-3 px-4 rounded-md bg-[var(--color-surface-base)] border border-[var(--color-border-subtle)] flex items-center justify-between overflow-x-auto gap-2 text-[11px] font-mono text-[var(--color-text-tertiary)] select-none">
                {CAREER_JOURNEY_STAGES.map((stg, idx) => (
                  <React.Fragment key={stg}>
                    <span className="hover:text-[var(--color-text-primary)] transition-colors whitespace-nowrap">
                      {stg}
                    </span>
                    {idx < CAREER_JOURNEY_STAGES.length - 1 && (
                      <span className="text-[#2F8FFF]/60">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={250}>
              <div className="editorial-rule max-w-xl" />
            </ScrollReveal>

            <ScrollReveal delayMs={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2 max-w-3xl text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  The traditional playbook — pick a major at 18, polish a two-page paper résumé, and climb a single company ladder — has collapsed under the weight of technological and economic change.
                </p>
                <p>
                  Today, people transition between sectors, combine technical trades with leadership, reskill mid-career, and navigate AI disruption. They need persistent, verifiable infrastructure that travels with them.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: The Reality Gap Panel */}
          <div className="lg:col-span-4">
            <ScrollReveal delayMs={200}>
              <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6 hover-lift">
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase tracking-widest text-[var(--color-taupe-300)] font-semibold">
                    The Reality Gap
                  </div>
                  <TechnicalBadge variant="champagne">EVIDENCE</TechnicalBadge>
                </div>

                <div className="space-y-4 text-xs text-[var(--color-text-secondary)]">
                  <div className="pb-3.5 border-b border-[var(--color-border-subtle)] space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F8FFF]" />
                      <span className="font-semibold text-[var(--color-text-primary)] text-sm">
                        5.7 Career Changes
                      </span>
                    </div>
                    <p className="text-[var(--color-text-tertiary)] pl-3.5">
                      Average career pivots an individual will make over their working lifetime.
                    </p>
                  </div>

                  <div className="pb-3.5 border-b border-[var(--color-border-subtle)] space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F87171]" />
                      <span className="font-semibold text-[var(--color-text-primary)] text-sm">
                        85% Unverified Résumés
                      </span>
                    </div>
                    <p className="text-[var(--color-text-tertiary)] pl-3.5">
                      Self-reported claims on job boards that lack verifiable evidence provenance.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                      <span className="font-semibold text-[var(--color-text-primary)] text-sm">
                        1 Platform
                      </span>
                    </div>
                    <p className="text-[var(--color-text-tertiary)] pl-3.5">
                      Career OS unites discovery, mentoring, evidence, and progression in one sovereign home.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
