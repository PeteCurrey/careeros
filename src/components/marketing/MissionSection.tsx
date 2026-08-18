'use client';

import React from 'react';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';

export function MissionSection() {
  return (
    <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)] relative overflow-hidden">
      
      {/* Subtle ambient lighting */}
      <div className="ambient-glow-lilac absolute inset-0 pointer-events-none" />

      <div className="container-narrow text-center space-y-10 relative z-10">
        
        <ScrollReveal>
          <div className="flex justify-center mb-3">
            <TechnicalBadge variant="lavender" dot>
              FOUNDATIONAL MANIFESTO
            </TechnicalBadge>
          </div>

          <h2 className="text-display-section text-[var(--color-text-primary)] leading-[1.08] max-w-2xl mx-auto">
            Human capability is humanity&apos;s greatest asset. <br />
            <span className="font-serif italic font-normal text-[var(--color-taupe-300)] block mt-2">
              It deserves an enduring operating system.
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delayMs={150}>
          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto">
            For generations, careers have been navigated with fragmented advice, transactional recruiters, and fragile paper résumés. Career OS provides every human being with an intelligent, trustworthy companion that compounds value throughout their working life.
          </p>
        </ScrollReveal>

        <ScrollReveal delayMs={250}>
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[var(--color-taupe-300)] uppercase tracking-widest font-semibold border-t border-[var(--color-border-default)] max-w-xl mx-auto font-mono">
            <span className="text-[#2F8FFF]">Universal Access</span>
            <span className="text-[var(--color-border-strong)]">&bull;</span>
            <span className="text-[#CDBBD2]">Uncompromised Privacy</span>
            <span className="text-[var(--color-border-strong)]">&bull;</span>
            <span className="text-[#DDD36D]">Verified Evidence</span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
