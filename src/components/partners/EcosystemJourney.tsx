'use client';

import React, { useState } from 'react';
import { ECOSYSTEM_PROGRESSION_STEPS } from '@/lib/partners/registry';
import { ArrowDown, CheckCircle2, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';
import { CareerGradientText } from '@/components/brand/CareerGradientText';

export function EcosystemJourney() {
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);

  return (
    <section id="ecosystem-journey" className="section-editorial bg-[var(--color-surface-base)] border-y border-[var(--color-border-default)] relative overflow-hidden">
      
      {/* Ambient background wash */}
      <div className="ambient-glow-blue absolute inset-0 pointer-events-none" />

      <div className="container-editorial relative z-10 space-y-16">
        
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="section-label flex items-center gap-2">
                <span className="accent-blue-dot" />
                The Connected Career
              </span>
              <TechnicalBadge variant="blue">TRACEABLE PROGRESSION</TechnicalBadge>
            </div>

            <h2 className="text-display-section text-[var(--color-text-primary)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Learn. Verify. <br />
              <CareerGradientText variant="blue">
                Connect.
              </CareerGradientText>
            </h2>

            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl font-normal">
              When CareerOS, its data partners, accredited learning institutions, and hiring ecosystems collaborate around one person, moving from skill gap to career milestone becomes structured, verifiable, and private.
            </p>
          </div>
        </ScrollReveal>

        {/* Vertical Connected Pipeline Canvas */}
        <ScrollReveal delayMs={100}>
          <div className="max-w-4xl mx-auto p-6 sm:p-10 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4 hover-lift">
            
            <div className="space-y-0 relative">
              
              {/* Connected background glowing spine */}
              <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#2F8FFF]/60 via-[#CDBBD2]/40 to-[#34D399]/60 pointer-events-none" />

              {ECOSYSTEM_PROGRESSION_STEPS.map((step, index) => {
                const isActive = activeStepIndex === index;

                return (
                  <div
                    key={step.stepNumber}
                    onMouseEnter={() => setActiveStepIndex(index)}
                    onMouseLeave={() => setActiveStepIndex(null)}
                    onClick={() => setActiveStepIndex(isActive ? null : index)}
                    className={`relative flex gap-6 py-5 px-4 rounded-lg transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-[var(--color-surface-warm)] border border-[#2F8FFF]/40 shadow-[0_0_20px_rgba(47,143,255,0.08)]'
                        : 'hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    {/* Step number milestone node */}
                    <div className="flex flex-col items-center gap-2 shrink-0 relative z-10">
                      <div
                        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-[#2F8FFF] border-[#2F8FFF] text-white shadow-[0_0_12px_rgba(47,143,255,0.6)] scale-110'
                            : 'bg-[var(--color-surface-base)] border-[var(--color-border-strong)] text-[var(--color-text-secondary)]'
                        }`}
                      >
                        <span className="text-xs font-mono font-bold">
                          {String(step.stepNumber).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Step narrative payload */}
                    <div className="flex-1 space-y-2 pb-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#2F8FFF] bg-[#2F8FFF]/10 px-2 py-0.5 rounded border border-[#2F8FFF]/20 font-bold">
                          STAGE {step.stepNumber} &bull; {step.stage}
                        </span>
                        <span className="text-[11px] font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider font-semibold">
                          {step.entityRole} &bull; <strong className="text-[var(--color-text-primary)]">{step.entityName}</strong>
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[var(--color-text-primary)]">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {step.description}
                      </p>

                      {/* Data Output Pill */}
                      <div className="flex items-center gap-2 pt-2">
                        <div className="w-2 h-2 rounded-full bg-[#34D399] shadow-[0_0_6px_rgba(52,211,153,0.8)] shrink-0" />
                        <span className="text-xs font-mono text-[var(--color-text-primary)] bg-[var(--color-surface-base)] px-2.5 py-1 rounded border border-[var(--color-border-subtle)] font-medium">
                          {step.dataOutput}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-6 border-t border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[var(--color-text-tertiary)] font-mono">
              <span>
                Deterministic progression pipeline across 7 ecosystem layers.
              </span>
              <span className="text-[#34D399] flex items-center gap-1 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Continuous sovereign verification active
              </span>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
