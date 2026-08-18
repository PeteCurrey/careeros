'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { MEDIA_ASSETS } from '@/lib/media';
import { CareerAtmosphere } from '@/components/brand/CareerAtmosphere';
import { CareerPathLines } from '@/components/brand/CareerPathLines';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';

// The exact hex of --background-dark used in the CSS dissolve overlay
const CHARCOAL = '#222222';

export function HeroMentorSection() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useRef(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const t = setTimeout(() => setMounted(true), 60);

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion.current || window.innerWidth < 1024) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      clearTimeout(t);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Staggered entrance timing
  const textStagger = (delaySec: number) =>
    prefersReducedMotion.current
      ? {}
      : {
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translate3d(0, 0, 0)' : 'translate3d(0, 14px, 0)',
          transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delaySec}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delaySec}s`,
        };

  // Micro-parallax depth calculations (barely perceptible, 3–5px max)
  const imageParallax = prefersReducedMotion.current
    ? {}
    : {
        transform: `translate3d(${mousePos.x * -4}px, ${mousePos.y * -3}px, 0)`,
        transition: 'transform 0.4s ease-out',
      };

  const bgParallax = prefersReducedMotion.current
    ? {}
    : {
        transform: `translate3d(${mousePos.x * 2}px, ${mousePos.y * 1.5}px, 0)`,
        transition: 'transform 0.4s ease-out',
      };

  return (
    <section
      ref={heroRef}
      aria-labelledby="hero-headline"
      className="relative overflow-hidden border-b border-[var(--color-border-default)] min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center select-none"
      style={{
        minHeight: '100vh',
        backgroundColor: CHARCOAL,
      }}
    >
      {/* ── Layer 1: Career Atmosphere with subtle ambient parallax ── */}
      <div className="absolute inset-0 z-0" style={bgParallax}>
        <CareerAtmosphere
          className="absolute inset-0"
          intensity={1}
          animate={true}
        />
      </div>

      {/* ── Layer 2: Career Path Lines (Drawing animation & nodes) ─── */}
      <CareerPathLines
        className="absolute inset-0 z-[1]"
        density="all"
        animate={true}
      />

      {/* ── Layer 3: Atmospheric Lighting Spill behind Visionary Horizon ─ */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-y-0 right-0 z-[2] w-[65%] pointer-events-none"
      >
        {/* Cool precision cyan-blue atmospheric wash behind illuminated pathways */}
        <div
          className="absolute top-[35%] right-[25%] w-96 h-96 rounded-full blur-3xl opacity-35"
          style={{ background: 'radial-gradient(circle, #2F8FFF 0%, transparent 70%)' }}
        />
        {/* Warm sunset gold wash over the horizon skyline */}
        <div
          className="absolute top-[15%] right-[8%] w-80 h-80 rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(circle, #DDD36D 0%, transparent 70%)' }}
        />
        {/* Deep electric blue accent in lower foreground */}
        <div
          className="absolute bottom-[10%] right-[35%] w-72 h-72 rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(circle, #0066FF 0%, transparent 70%)' }}
        />
      </div>

      {/* ── Layer 4: Mobile Atmospheric Background Image Layer ───────── */}
      <div
        aria-hidden="true"
        className="block lg:hidden absolute inset-0 z-[2] pointer-events-none opacity-20"
      >
        <Image
          src={MEDIA_ASSETS.hero.mentorTeam.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${CHARCOAL} 0%, rgba(34,34,34,0.7) 50%, ${CHARCOAL} 100%)`,
          }}
        />
      </div>

      {/* ── Layer 5: Hero Visionary Pathways Image — right side panel with micro-parallax ── */}
      <div
        className="hidden lg:block absolute inset-y-0 right-0 z-[3]"
        style={{
          width: '62%',
          opacity: mounted || prefersReducedMotion.current ? 1 : 0,
          transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
          ...imageParallax,
        }}
      >
        <Image
          src={MEDIA_ASSETS.hero.mentorTeam.src}
          alt={MEDIA_ASSETS.hero.mentorTeam.alt}
          fill
          priority
          sizes="(min-width: 1920px) 1200px, (min-width: 1440px) 900px, (min-width: 1024px) 62vw"
          className="object-cover object-center"
          style={{ objectPosition: '52% center' }}
        />

        {/* Left-edge charcoal dissolve — matches exact bg colour */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 z-10 w-[50%] pointer-events-none"
          style={{
            background: `linear-gradient(to right, ${CHARCOAL} 0%, ${CHARCOAL} 12%, rgba(34,34,34,0.92) 26%, rgba(34,34,34,0.50) 50%, rgba(34,34,34,0.10) 75%, transparent 100%)`,
          }}
        />

        {/* Top-edge fade */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 z-10 h-[16%] pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, ${CHARCOAL} 0%, rgba(34,34,34,0.5) 40%, transparent 100%)`,
          }}
        />

        {/* Bottom-edge fade */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-10 h-[16%] pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${CHARCOAL} 0%, rgba(34,34,34,0.5) 40%, transparent 100%)`,
          }}
        />
      </div>

      {/* ── Layer 6: Left-side foreground vignette ─────────────────── */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-y-0 left-0 z-[4] pointer-events-none"
        style={{
          width: '50%',
          background: `radial-gradient(ellipse at 0% 50%, rgba(34,34,34,0.75) 0%, transparent 80%)`,
        }}
      />

      {/* ── Layer 6: Copy content & Staggered Editorial Entrances ──── */}
      <div className="relative z-10 container-editorial h-full">
        <div
          className="grid grid-cols-1 lg:grid-cols-[44fr_56fr] min-h-[inherit]"
          style={{ minHeight: 'inherit' }}
        >
          {/* LEFT: Editorial copy */}
          <div className="flex flex-col justify-center pt-24 pb-16 lg:pt-0 lg:pb-0 pr-0 lg:pr-8 xl:pr-12">
            
            {/* Section label */}
            <div style={textStagger(0.05)} className="mb-6 flex items-center gap-3">
              <span className="section-label flex items-center gap-2">
                <span className="accent-blue-dot accent-blue-dot-pulse" />
                The Career Operating System
              </span>
              <TechnicalBadge variant="blue" className="hidden sm:inline-flex">
                SIGNAL 01
              </TechnicalBadge>
            </div>

            {/* H1 headline — Staggered visual entrances */}
            <h1
              id="hero-headline"
              className="text-display-hero mb-8"
              style={{
                color: 'var(--color-text-primary)',
                maxWidth: '14ch',
              }}
            >
              <span style={textStagger(0.12)} className="inline-block">
                Your career
              </span>
              <br />
              <span style={textStagger(0.22)} className="inline-block">
                needs more
              </span>
              <br />
              <span style={textStagger(0.32)} className="inline-block">
                than advice.
              </span>
              <span
                className="block mt-3"
                style={{
                  color: 'var(--color-text-secondary)',
                  fontWeight: 350,
                  ...textStagger(0.42),
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
                ...textStagger(0.52),
              }}
            >
              Your mentor, career intelligence, evidence and
              opportunities — working together from education to
              employment, progression and whatever comes next.
            </p>

            {/* Primary CTA block */}
            <div style={textStagger(0.62)} className="flex flex-col gap-4 mb-8">
              <div className="flex flex-wrap items-center gap-5">
                {/* Primary button with hover lift */}
                <Link
                  href={ROUTES.SIGNUP}
                  className="hover-lift inline-flex items-center justify-center px-8 py-3.5 font-semibold text-base focus-visible:outline-offset-4 active:scale-[0.98] shadow-xs"
                  style={{
                    backgroundColor: '#F4F3EF',
                    color: '#202020',
                    borderRadius: 'var(--radius-button)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Start your career
                </Link>

                {/* Secondary text link with subtle arrow slide */}
                <Link
                  href="#how-it-works"
                  className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium transition-colors duration-150 text-[var(--color-text-primary)] hover:text-white"
                >
                  <span>See how Career OS works</span>
                  <span
                    aria-hidden="true"
                    className="text-[var(--color-taupe-300)] group-hover:text-[var(--accent-blue)] transform transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>

              {/* Commercial reassurance */}
              <p
                className="text-xs flex items-center gap-2"
                style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.01em' }}
              >
                <span className="w-1 h-1 rounded-full bg-[#34D399]" />
                <span>Free for individuals.&ensp;&middot;&ensp;Your information stays under your control.</span>
              </p>
            </div>

            {/* Institutional quiet links */}
            <div
              className="flex items-center gap-1 text-xs"
              style={{ color: 'var(--color-text-tertiary)', ...textStagger(0.72) }}
            >
              <span>For institutions:</span>
              <Link
                href={ROUTES.FOR_HIGH_SCHOOLS}
                className="ml-2 underline underline-offset-4 hover:text-[var(--color-text-primary)] transition-colors"
              >
                Schools
              </Link>
              <span className="mx-1 opacity-50">&middot;</span>
              <Link
                href={ROUTES.FOR_EMPLOYERS}
                className="underline underline-offset-4 hover:text-[var(--color-text-primary)] transition-colors"
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
        style={{
          aspectRatio: '4/3',
          opacity: mounted || prefersReducedMotion.current ? 1 : 0,
          transition: 'opacity 1s ease-out',
        }}
      >
        <Image
          src={MEDIA_ASSETS.hero.mentorTeam.src}
          alt={MEDIA_ASSETS.hero.mentorTeam.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${CHARCOAL} 0%, rgba(34,34,34,0.4) 40%, transparent 100%)`,
          }}
        />
      </div>
    </section>
  );
}
