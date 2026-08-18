'use client';

import React from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';

export function MissionSection() {
  return (
    <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)] relative overflow-hidden">
      
      {/* ── Cinematic Sunrise Horizon & Sky Bridges Backdrop ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20 lg:opacity-25">
          <Image
            src="/media/hero/career_twin_horizon.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        {/* Deep central vignette ensuring maximum contrast for centered manifesto copy */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(34,34,34,0.80) 0%, rgba(24,24,24,0.94) 75%, var(--color-surface-warm) 100%)',
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-24"
          style={{ background: 'linear-gradient(to bottom, var(--color-surface-warm) 0%, transparent 100%)' }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-24"
          style={{ background: 'linear-gradient(to top, var(--color-surface-warm) 0%, transparent 100%)' }}
        />
        {/* Subtle ambient lighting */}
        <div className="ambient-glow-lilac absolute inset-0 pointer-events-none opacity-40" />
      </div>

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
