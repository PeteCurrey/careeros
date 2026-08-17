'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { MEDIA_ASSETS } from '@/lib/media';
import { CareerAtmosphere } from '@/components/brand/CareerAtmosphere';
import { CareerPathLines } from '@/components/brand/CareerPathLines';

// The exact hex of --color-ivory-base used in the CSS dissolve overlay
const IVORY = '#F7F5EC';

export function HeroMentorSection() {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    // Slight delay so entrance is perceived on first render
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const heroEnter = prefersReducedMotion.current
    ? {}
    : {
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(6px)',
        transition: 'opacity 0.9s ease-out, transform 0.9s ease-out',
      };

  const imageEnter = prefersReducedMotion.current
    ? {}
    : {
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateX(0)' : 'translateX(10px)',
        transition: 'opacity 1.2s ease-out 0.15s, transform 1.2s ease-out 0.15s',
      };

  return (
    <section
      aria-labelledby="hero-headline"
      className="relative overflow-hidden border-b border-[var(--color-border-default)] min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center"
      style={{
        minHeight: '100vh',
        backgroundColor: IVORY,
      }}
    >
      {/* ── Layer 1: Career Atmosphere ──────────────────────────────── */}
      <CareerAtmosphere
        className="absolute inset-0 z-0"
        intensity={1}
        animate={true}
      />

      {/* ── Layer 2: Career Path Lines ─────────────────────────────── */}
      <CareerPathLines
        className="absolute inset-0 z-[1]"
        density="all"
        animate={true}
      />

      {/* ── Layer 3: Mentor Team Image — right side absolute panel ──── */}
      {/* Visible on lg+ only; in-flow on mobile (see below) */}
      <div
        className="hidden lg:block absolute inset-y-0 right-0 z-[2]"
        style={{ width: '60%', ...imageEnter }}
      >
        <Image
          src={MEDIA_ASSETS.hero.mentorTeam.src}
          alt=""
          fill
          priority
          sizes="(min-width: 1920px) 1152px, (min-width: 1440px) 864px, (min-width: 1024px) 60vw"
          className="object-cover object-center"
          style={{ objectPosition: '48% center' }}
        />

        {/* Left-edge ivory dissolve — matches exact bg colour */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 z-10 w-[55%] pointer-events-none"
          style={{
            background: `linear-gradient(to right, ${IVORY} 0%, ${IVORY} 8%, rgba(247,245,236,0.9) 28%, rgba(247,245,236,0.55) 50%, rgba(247,245,236,0.12) 72%, transparent 100%)`,
          }}
        />

        {/* Top-edge fade */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 z-10 h-[18%] pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, ${IVORY} 0%, rgba(247,245,236,0.6) 40%, transparent 100%)`,
          }}
        />

        {/* Bottom-edge fade */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-10 h-[14%] pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${IVORY} 0%, rgba(247,245,236,0.5) 40%, transparent 100%)`,
          }}
        />
      </div>

      {/* ── Layer 4: Left-side foreground vignette ─────────────────── */}
      {/* Keeps copy area crisp ivory regardless of atmosphere */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-y-0 left-0 z-[3] pointer-events-none"
        style={{
          width: '52%',
          background: `radial-gradient(ellipse at 0% 50%, rgba(247,245,236,0.7) 0%, transparent 75%)`,
        }}
      />

      {/* ── Layer 5: Copy content ─────────────────────────────────── */}
      <div className="relative z-10 container-editorial h-full">
        <div
          className="grid grid-cols-1 lg:grid-cols-[44fr_56fr] min-h-[inherit]"
          style={{ minHeight: 'inherit' }}
        >
          {/* LEFT: Editorial copy */}
          <div
            className="flex flex-col justify-center pt-24 pb-16 lg:pt-0 lg:pb-0 pr-0 lg:pr-8 xl:pr-12"
            style={heroEnter}
          >
            {/* Section label */}
            <p className="section-label mb-6">
              The Career Operating System
            </p>

            {/* H1 headline */}
            <h1
              id="hero-headline"
              className="text-display-hero mb-8"
              style={{
                color: 'var(--color-charcoal-deep)',
                maxWidth: '14ch',
              }}
            >
              Your career
              <br />
              needs more
              <br />
              than advice.
              <span
                className="block mt-3"
                style={{
                  color: 'var(--color-charcoal-base)',
                  fontWeight: 350,
                }}
              >
                It needs an
                <br />
                operating system.
              </span>
            </h1>

            {/* Supporting copy */}
            <p
              className="text-lead mb-10"
              style={{
                maxWidth: '560px',
                color: 'var(--color-text-secondary)',
              }}
            >
              Your mentor, career intelligence, evidence and
              opportunities — working together from education to
              employment, progression and whatever comes next.
            </p>

            {/* Primary CTA block */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex flex-wrap items-center gap-5">
                {/* Primary button */}
                <Link
                  href={ROUTES.SIGNUP}
                  className="inline-flex items-center justify-center px-8 py-3.5 font-semibold text-base transition-all duration-200 focus-visible:outline-offset-4 hover:opacity-90 active:scale-[0.98]"
                  style={{
                    backgroundColor: 'var(--color-charcoal-deep)',
                    color: 'var(--color-ivory-base)',
                    borderRadius: 'var(--radius-button)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Start your career
                </Link>

                {/* Secondary text link */}
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center gap-1.5 text-[0.9375rem] font-medium transition-colors duration-150 hover:opacity-80"
                  style={{ color: 'var(--color-charcoal-base)' }}
                >
                  See how Career OS works
                  <span aria-hidden="true" className="text-[var(--color-taupe-400)]">→</span>
                </Link>
              </div>

              {/* Commercial reassurance */}
              <p
                className="text-xs"
                style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.01em' }}
              >
                Free for individuals.&ensp;&middot;&ensp;Your information stays under your control.
              </p>
            </div>

            {/* Institutional quiet links */}
            <div
              className="flex items-center gap-1 text-xs"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              <span>For institutions:</span>
              <Link
                href={ROUTES.FOR_HIGH_SCHOOLS}
                className="ml-2 underline underline-offset-4 hover:text-[var(--color-charcoal-deep)] transition-colors"
              >
                Schools
              </Link>
              <span className="mx-1 opacity-50">&middot;</span>
              <Link
                href={ROUTES.FOR_EMPLOYERS}
                className="underline underline-offset-4 hover:text-[var(--color-charcoal-deep)] transition-colors"
              >
                Employers
              </Link>
            </div>
          </div>

          {/* RIGHT: Empty spacer on desktop (image is absolute) */}
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>

      {/* ── Mobile: In-flow mentor team image ─────────────────────── */}
      <div
        className="block lg:hidden relative z-[2] w-full"
        style={{ aspectRatio: '4/3', ...imageEnter }}
      >
        <Image
          src={MEDIA_ASSETS.hero.mentorTeam.src}
          alt={MEDIA_ASSETS.hero.mentorTeam.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: '50% center' }}
        />
        {/* Top fade into ivory */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[22%] pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, ${IVORY} 0%, transparent 100%)`,
          }}
        />
      </div>

      {/* ── Mobile: Career path lines (simplified) ─────────────────── */}
      <div className="block lg:hidden absolute inset-0 z-[1] pointer-events-none">
        <CareerPathLines density="minimal" animate={false} />
      </div>
    </section>
  );
}
