import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { MEDIA_ASSETS } from '@/lib/media';
import { GraduationCap, Compass, Award, ShieldCheck, Sparkles, ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';

export default function ForStudentsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Editorial Photography */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] text-xs font-mono font-bold text-[var(--color-brand-600)]">
                <GraduationCap className="w-3.5 h-3.5" /> STUDENTS & EARLY CAREERS
              </div>

              <h1 className="text-display-section text-[var(--color-text-primary)]">
                Work out where you&apos;re going — and what it takes to get there.
              </h1>

              <p className="text-lead text-[var(--color-text-secondary)]">
                Understand what you are genuinely suited to, build verifiable evidence through real projects, and carry your Career OS beyond graduation into your entire working life.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button href={ROUTES.SIGNUP} variant="primary" size="lg" className="shadow-card">
                  Start Free Account <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href={ROUTES.PRODUCT_CAREER_PASSPORT} variant="secondary" size="lg">
                  Explore Career Passport
                </Button>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-[var(--color-text-tertiary)] font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-verified)]" /> 100% Free for individuals
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-brand-600)]" /> You own your portfolio
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-xl overflow-hidden border border-[var(--color-border-default)] shadow-editorial aspect-16/10 relative">
                <Image
                  src={MEDIA_ASSETS.audiences.students.src}
                  alt={MEDIA_ASSETS.audiences.students.alt}
                  width={MEDIA_ASSETS.audiences.students.width}
                  height={MEDIA_ASSETS.audiences.students.height}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3 Pillars of Student Empowerment */}
      <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)]">
        <div className="container-wide space-y-12">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Built for how modern careers actually start.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              No generic questionnaires or superficial personality quizzes. A structured operating system that bridges learning to employment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-card space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                Suitability & Possibilities
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Explore viable pathways across university, college, apprenticeships, and trades. Understand the day-to-day reality of roles before committing years of preparation.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-card space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                Skills Gaps & Actionable Steps
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Identify the exact capability bridge between where you are today and your target opportunities. Get curated project guidance that closes competency gaps.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-card space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                Evidence That Outlasts School
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                When you graduate, your school login disappears — but your Career OS does not. Your Career Passport is your permanent asset, holding verified credentials forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways Parity Grid */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-wide space-y-10">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              All career destinations supported equally.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Career OS provides identical high-calibre mentoring across vocational trades, technical apprenticeships, and university degrees.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { name: 'Apprenticeships', href: ROUTES.PATHWAYS_APPRENTICESHIPS },
              { name: 'Technical Trades', href: ROUTES.PATHWAYS_TRADES },
              { name: 'Community College', href: ROUTES.PATHWAYS_COLLEGE },
              { name: 'University', href: ROUTES.PATHWAYS_UNIVERSITY },
              { name: 'First Employment', href: ROUTES.PATHWAYS_FIRST_JOB },
              { name: 'Entrepreneurship', href: ROUTES.PATHWAYS_ENTREPRENEURSHIP },
            ].map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="p-5 rounded-lg bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-500)] text-center text-xs font-bold text-[var(--color-text-primary)] transition-all block shadow-xs"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Action Banner */}
      <section className="section-editorial bg-[var(--color-neutral-950)] text-white">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl font-bold text-white">
              Start building your Career OS today (100% Free)
            </h3>
            <p className="text-sm text-white/70">
              Individual accounts are free forever. No credit card, no subscription lock-in.
            </p>
          </div>
          <Button href={ROUTES.SIGNUP} variant="primary" size="lg" className="bg-white text-[var(--color-neutral-950)] hover:bg-white/90 font-bold shrink-0">
            Create Free Account <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
