'use client';

import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';

export function FinalCtaSection() {
  return (
    <section className="section-editorial-lg bg-[var(--background-dark-deep)] text-[var(--color-text-primary)] relative overflow-hidden border-b border-[var(--color-border-default)]">
      
      {/* Atmospheric blue depth — imperceptible, not decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at 60% 30%, rgba(47,143,255,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="container-editorial relative z-10 space-y-16">
        
        {/* Main CTA Block */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center">
              <span className="section-label-light flex items-center justify-center gap-2">
                <span className="accent-blue-dot accent-blue-dot-pulse" />
                Begin Your Lifelong Operating System
              </span>
            </div>

            <h2 className="text-display-hero text-white max-w-3xl mx-auto">
              Start building your career on verifiable evidence.
            </h2>

            <p className="text-lead text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
              Free forever for individuals. Your data stays completely under your sovereign control. Available from your first day of discovery to executive leadership and beyond.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 font-sans">
              <Link
                href={ROUTES.SIGNUP}
                className="hover-lift inline-flex items-center justify-center px-8 py-4 font-semibold text-base focus-visible:outline-offset-4 active:scale-[0.98] shadow-xs w-full sm:w-auto text-[#202020] bg-[#F4F3EF] rounded-[var(--radius-button)]"
              >
                <span>Start your career — Free</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href={ROUTES.PRODUCT}
                className="hover-lift inline-flex items-center justify-center px-8 py-4 font-medium text-base text-[var(--color-text-primary)] border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] hover:bg-white/10 rounded-[var(--radius-button)] w-full sm:w-auto transition-colors"
              >
                <span>Explore Full Platform</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--color-text-tertiary)] pt-4 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DDD36D]" /> Free for individuals
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#CDBBD2]" /> Zero commercial advertising
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" /> Portable W3C verifiable credentials
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Institutional Partner Invitation Sub-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-12 border-t border-[var(--color-border-default)]">
          <ScrollReveal delayMs={100}>
            <div className="p-8 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4 flex flex-col justify-between hover-lift h-full">
              <div className="space-y-2">
                <TechnicalBadge variant="lavender">EDUCATIONAL INSTITUTIONS</TechnicalBadge>
                <h3 className="text-lg font-normal text-white">
                  Become a Launch School or District
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Partner with Career OS to bring equitable career development, apprenticeship discovery, and safeguarding to your students with zero advertising.
                </p>
              </div>
              <Link
                href={ROUTES.FOR_HIGH_SCHOOLS}
                className="text-xs font-semibold text-[var(--color-text-primary)] hover:text-white inline-flex items-center gap-1 pt-2 underline underline-offset-4 group font-mono"
              >
                <span>School Partnership Details</span>
                <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={200}>
            <div className="p-8 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4 flex flex-col justify-between hover-lift h-full">
              <div className="space-y-2">
                <TechnicalBadge variant="blue">FORWARD-THINKING EMPLOYERS</TechnicalBadge>
                <h3 className="text-lg font-normal text-white">
                  Become a Founding Launch Employer
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Shape responsible talent discovery based on demonstrated evidence, apprenticeship capabilities, and mutual alignment rather than keyword filtering.
                </p>
              </div>
              <Link
                href={ROUTES.FOR_EMPLOYERS}
                className="text-xs font-semibold text-[var(--color-text-primary)] hover:text-white inline-flex items-center gap-1 pt-2 underline underline-offset-4 group font-mono"
              >
                <span>Employer Program Details</span>
                <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
