'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { MEDIA_ASSETS } from '@/lib/media';
import { ArrowRight } from 'lucide-react';

export function HeroMentorSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-ivory-base)] pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[var(--color-border-default)]">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Narrative & Deliberate Typography */}
          <div className="lg:col-span-5 space-y-8 max-w-2xl">
            <div className="space-y-2">
              <span className="section-label">
                The Career Operating System
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-display-hero text-[var(--color-charcoal-deep)]">
                Your career needs <br />
                more than advice.
                <span className="block mt-2 font-normal text-[var(--color-charcoal-base)]">
                  It needs an operating system.
                </span>
              </h1>
              
              <p className="text-lead text-[var(--color-text-secondary)] max-w-xl">
                Your mentor, career intelligence, evidence, and opportunities — working together from education to employment, progression, and whatever comes next.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-2">
              <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
                Start your career
              </Button>
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-charcoal-deep)] hover:text-black transition-colors py-2 px-1"
              >
                <span>See how it works</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Editorial Micro-Proof Points */}
            <div className="pt-6 border-t border-[var(--color-border-default)] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[var(--color-text-secondary)] font-medium">
              <span>Free for individuals</span>
              <span className="text-[var(--color-taupe-300)]">&bull;</span>
              <span>You own your data</span>
              <span className="text-[var(--color-taupe-300)]">&bull;</span>
              <span>Lifelong compounding</span>
            </div>

            {/* Institutional Pathways */}
            <div className="flex items-center gap-3 pt-1 text-xs text-[var(--color-text-tertiary)]">
              <span>Institutional partnerships:</span>
              <Link href={ROUTES.FOR_HIGH_SCHOOLS} className="text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal-deep)] underline underline-offset-4">
                For Schools
              </Link>
              <span>&bull;</span>
              <Link href={ROUTES.FOR_EMPLOYERS} className="text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal-deep)] underline underline-offset-4">
                For Employers
              </Link>
            </div>
          </div>

          {/* Right Column: Panoramic Multidisciplinary Mentor Team Visual */}
          <div className="lg:col-span-7 relative">
            <div className="relative border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] rounded-[var(--radius-card)] overflow-hidden shadow-subtle">
              <Image
                src={MEDIA_ASSETS.hero.mentorTeam.src}
                alt="Career OS multidisciplinary mentor ecosystem representing engineering, trades, healthcare, business, and creative professions"
                width={MEDIA_ASSETS.hero.mentorTeam.width}
                height={MEDIA_ASSETS.hero.mentorTeam.height}
                priority
                className="w-full h-auto object-cover"
              />

              {/* Editorial Caption Bar */}
              <div className="p-5 sm:p-6 bg-[var(--color-ivory-warm)] border-t border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <p className="font-semibold text-[var(--color-charcoal-deep)] uppercase tracking-wider text-[11px]">
                    The Multidisciplinary Mentor Advisory
                  </p>
                  <p className="text-[var(--color-text-secondary)] mt-0.5">
                    System-assigned domain intelligence: Technology, Engineering, Trades, Healthcare, Business & Creative.
                  </p>
                </div>
                <span className="shrink-0 text-[11px] font-semibold text-[var(--color-taupe-600)] px-2.5 py-1 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)]">
                  System-Assigned
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
