'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TrustHeroProps {
  eyebrow: string;
  headline: string | React.ReactNode;
  lead: string;
  lastReviewed?: string;
  version?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  tertiaryCta?: { label: string; href: string };
  children?: React.ReactNode;
}

export function TrustHero({
  eyebrow,
  headline,
  lead,
  lastReviewed = '2026-08-16',
  version = 'v2.4.1',
  primaryCta,
  secondaryCta,
  tertiaryCta,
  children,
}: TrustHeroProps) {
  return (
    <section className="relative min-h-[50vh] lg:min-h-[60vh] flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--color-surface-base)] py-16 sm:py-20">
      {/* Subtle top & bottom lighting */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(47, 143, 255, 0.08) 0%, transparent 60%)',
        }}
      />

      <div className="container-editorial relative z-10 space-y-12">
        <div className="max-w-4xl space-y-6">
          {/* Eyebrow & Live Verification Pill */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="accent-blue-dot accent-blue-dot-pulse" />
              <span className="section-label uppercase tracking-widest text-[var(--color-brand-300)]">
                {eyebrow}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-[var(--color-success)] bg-[var(--color-success-light)] px-2.5 py-0.5 rounded border border-[var(--color-success)]/25">
              <CheckCircle2 className="w-3 h-3" />
              <span>Active Governance &bull; Last Reviewed {lastReviewed}</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-display-hero text-[var(--color-text-primary)] leading-tight font-serif font-normal">
            {headline}
          </h1>

          {/* Lead Copy */}
          <p className="text-lead text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
            {lead}
          </p>

          {/* CTAs */}
          {(primaryCta || secondaryCta || tertiaryCta) && (
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {primaryCta && (
                <Button href={primaryCta.href} variant="primary" size="md">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="secondary" size="md">
                  {secondaryCta.label}
                </Button>
              )}
              {tertiaryCta && (
                <Link
                  href={tertiaryCta.href}
                  className="text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors inline-flex items-center gap-1.5 px-2 py-1"
                >
                  <span>{tertiaryCta.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                </Link>
              )}
            </div>
          )}
        </div>

        {children && <div className="pt-2">{children}</div>}
      </div>
    </section>
  );
}
