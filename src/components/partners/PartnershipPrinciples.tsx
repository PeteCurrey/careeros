'use client';

import React from 'react';
import { PARTNERSHIP_PRINCIPLES } from '@/lib/partners/registry';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';
import { CareerGradientText } from '@/components/brand/CareerGradientText';
import { ShieldCheck, Lock, Sparkles } from 'lucide-react';

export function PartnershipPrinciplesSection() {
  return (
    <section id="partnership-principles" className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)] relative overflow-hidden">
      
      {/* Subtle ambient lighting */}
      <div className="ambient-glow-lilac absolute inset-0 pointer-events-none" />

      <div className="container-editorial space-y-16 relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="section-label flex items-center gap-2">
                  <span className="accent-blue-dot" />
                  Selection Standards
                </span>
                <TechnicalBadge variant="lavender">GOVERNANCE &amp; ETHICS</TechnicalBadge>
              </div>

              <h2 className="text-display-section text-[var(--color-text-primary)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Who we partner with <br />
                <CareerGradientText variant="lilac">
                  matters.
                </CareerGradientText>
              </h2>

              <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed font-normal">
                CareerOS does not accept partnerships simply because an organisation will pay. Every relationship must pass five strict governing principles before integration.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2 hover-lift">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#CDBBD2]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-primary)] font-bold">
                    The 5th Principle is Paramount
                  </span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Commercial relationships must <strong>never silently bias career guidance</strong>. Where a relationship influences opportunity placement, it is explicitly disclosed with transparent criteria. User career decisions remain sovereign.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 5 Principles Grid */}
        <ScrollReveal delayMs={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PARTNERSHIP_PRINCIPLES.map((principle, idx) => (
              <div
                key={principle.id}
                className={`p-6 sm:p-7 bg-[var(--color-surface-raised)] border rounded-[var(--radius-card)] flex flex-col justify-between hover-lift transition-all duration-300 ${
                  idx === 4
                    ? 'border-[#CDBBD2]/50 shadow-[0_0_20px_rgba(205,187,210,0.1)] md:col-span-2 lg:col-span-2'
                    : 'border-[var(--color-border-default)]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#2F8FFF]">
                      PRINCIPLE {principle.number}
                    </span>
                    {idx === 4 && <TechnicalBadge variant="lavender" dot>CORE SAFEGUARD</TechnicalBadge>}
                  </div>

                  <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                    {principle.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-normal italic leading-relaxed">
                    &ldquo;{principle.statement}&rdquo;
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--color-border-subtle)]">
                  <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
