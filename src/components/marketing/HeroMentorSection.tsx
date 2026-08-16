'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { MEDIA_ASSETS } from '@/lib/media';
import { ShieldCheck, CheckCircle2, Lock, ArrowRight, Sparkles } from 'lucide-react';

interface MentorBadgeInfo {
  id: string;
  name: string;
  domain: string;
  xPercent: number;
  yPercent: number;
}

const MENTORS: MentorBadgeInfo[] = [
  { id: '1', name: 'Eleanor Vance', domain: 'Executive Leadership & Strategy', xPercent: 14, yPercent: 48 },
  { id: '2', name: 'Kai Chen', domain: 'Software Architecture & AI', xPercent: 26, yPercent: 44 },
  { id: '3', name: 'David Miller', domain: 'Advanced Manufacturing & Trades', xPercent: 39, yPercent: 42 },
  { id: '4', name: 'Dr. Sofia Ramos', domain: 'Clinical Healthcare & Life Sciences', xPercent: 51, yPercent: 50 },
  { id: '5', name: 'Tariq Al-Mansoor', domain: 'Creative Direction & Industrial Design', xPercent: 64, yPercent: 44 },
  { id: '6', name: 'Amara Okafor', domain: 'Higher Education & Career Pathways', xPercent: 77, yPercent: 48 },
  { id: '7', name: 'Liam Hughes', domain: 'Venture & Entrepreneurship', xPercent: 88, yPercent: 42 },
];

export function HeroMentorSection() {
  const [activeMentor, setActiveMentor] = useState<MentorBadgeInfo | null>(null);

  return (
    <section className="relative overflow-hidden hero-editorial-backdrop pt-12 pb-20 md:pt-20 md:pb-32 border-b border-[var(--color-border-default)]">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Asymmetric Narrative & Action */}
          <div className="lg:col-span-5 z-10 space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-600)] animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-[var(--color-text-primary)]">
                The Career Operating System
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-display-hero text-[var(--color-text-primary)]">
                Your career needs more than advice.{' '}
                <span className="block mt-2 text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] font-extrabold">
                  It needs an operating system.
                </span>
              </h1>
              <p className="text-lead text-[var(--color-text-secondary)]">
                Your mentor, career intelligence, evidence, and opportunities — working together from education to employment, progression, and whatever comes next.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button href={ROUTES.SIGNUP} variant="primary" size="lg" className="shadow-editorial text-base">
                Start Your Career — Free <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="#how-it-works" variant="secondary" size="lg" className="text-base">
                See How Career OS Works
              </Button>
            </div>

            {/* Micro-Proof Points */}
            <div className="pt-4 border-t border-[var(--color-border-subtle)] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[var(--color-text-secondary)]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-verified)] shrink-0" />
                <span>Free for individuals</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[var(--color-brand-600)] shrink-0" />
                <span>You own your data</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--color-brand-600)] shrink-0" />
                <span>Lifelong compounding</span>
              </div>
            </div>

            {/* Tertiary Pathways */}
            <div className="flex items-center gap-4 pt-2 text-xs font-medium text-[var(--color-text-tertiary)]">
              <span>Looking for institutional partnerships?</span>
              <Link href={ROUTES.FOR_HIGH_SCHOOLS} className="hover:text-[var(--color-text-primary)] underline underline-offset-4">
                For Schools
              </Link>
              <span>&bull;</span>
              <Link href={ROUTES.FOR_EMPLOYERS} className="hover:text-[var(--color-text-primary)] underline underline-offset-4">
                For Employers
              </Link>
            </div>
          </div>

          {/* Right Column: Panoramic Mentor Team Hero Visual */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-[var(--color-border-default)] shadow-floating bg-[var(--color-surface-raised)] group">
              <Image
                src={MEDIA_ASSETS.hero.mentorTeam.src}
                alt={MEDIA_ASSETS.hero.mentorTeam.alt}
                width={MEDIA_ASSETS.hero.mentorTeam.width}
                height={MEDIA_ASSETS.hero.mentorTeam.height}
                priority
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.01]"
              />

              {/* Seamless Bottom Overlay with Caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-neutral-950)]/80 via-[var(--color-neutral-950)]/30 to-transparent p-4 sm:p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                    The Multidisciplinary Mentor Ecosystem
                  </p>
                  <p className="text-xs sm:text-sm text-white/90 font-medium">
                    Assigned intelligence matching your domain: Engineering, Trades, Healthcare, Business & Creative.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs text-white shrink-0">
                  <Lock className="w-3 h-3" /> System-Assigned Mentors
                </div>
              </div>
            </div>

            {/* Subtle floating background ambient glow */}
            <div className="absolute -inset-4 -z-10 bg-radial from-[var(--color-brand-500)]/10 to-transparent blur-2xl rounded-full pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
