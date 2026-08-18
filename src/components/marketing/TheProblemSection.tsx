'use client';

import React from 'react';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';
import { HumanCareerAnnotation } from '@/components/brand/HumanCareerAnnotation';
import { CareerGradientText } from '@/components/brand/CareerGradientText';

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
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal delayMs={100}>
              <h2 className="text-display-section text-[var(--color-text-primary)] max-w-3xl leading-[1.08]">
                Careers aren&apos;t linear anymore. <br />
                <CareerGradientText variant="blue" className="font-normal">
                  Career support shouldn&apos;t be either.
                </CareerGradientText>
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
              <div className="space-y-4 max-w-2xl text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  The traditional playbook — pick a major at 18, polish a two-page paper résumé, and climb a single company ladder — has collapsed under the weight of technological and economic change.
                </p>
                <p>
                  Today, people transition between sectors, combine technical trades with leadership, reskill mid-career, and navigate AI disruption. <strong className="text-[var(--color-text-primary)] font-semibold">Your career needs more than advice. It needs an operating system.</strong>
                </p>
              </div>
            </ScrollReveal>

            {/* Reality Gap Metric Indicators */}
            <ScrollReveal delayMs={350}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-subtle)] rounded-lg space-y-1">
                  <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">AVERAGE LIFETIME</span>
                  <div className="text-base font-bold font-mono text-[#2F8FFF]">5.7 Career Changes</div>
                  <p className="text-[10px] text-[var(--color-text-secondary)] leading-tight">Frequent pivots across sectors and roles.</p>
                </div>

                <div className="p-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-subtle)] rounded-lg space-y-1">
                  <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">JOB BOARD CLAIM</span>
                  <div className="text-base font-bold font-mono text-[#F87171]">85% Unverified</div>
                  <p className="text-[10px] text-[var(--color-text-secondary)] leading-tight">Keyword claims without evidence provenance.</p>
                </div>

                <div className="p-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-subtle)] rounded-lg space-y-1">
                  <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">SOVEREIGN HOME</span>
                  <div className="text-base font-bold font-mono text-[#34D399]">1 Platform</div>
                  <p className="text-[10px] text-[var(--color-text-secondary)] leading-tight">Lifelong compounding from first job to executive.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Photographic Human Career Annotation Panel */}
          <div className="lg:col-span-5">
            <ScrollReveal delayMs={200}>
              <HumanCareerAnnotation
                imageSrc="/media/professionals/professional_hero_intersection.jpg"
                imageAlt="Professional engineer navigating multidirectional career choices in a contemporary architectural setting"
                title="Sovereign Career Understanding"
                roleBadge="REAL-WORLD SYNTHESIS"
                annotations={[
                  {
                    label: 'Experience',
                    value: '8 Yrs Technical Operations',
                    detail: 'Cross-industry engineering systems & team mentoring',
                    category: 'experience',
                    position: { top: '28%', left: '30%' },
                  },
                  {
                    label: 'Skills',
                    value: '3 Verified Domains',
                    detail: 'Cloud systems, team leadership, risk assessment',
                    category: 'skills',
                    position: { top: '48%', left: '72%' },
                  },
                  {
                    label: 'Next Move',
                    value: 'Principal Architect',
                    detail: 'Identified 92% readiness with 1 development bridge',
                    category: 'next_move',
                    position: { top: '75%', left: '38%' },
                  },
                ]}
              />
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
