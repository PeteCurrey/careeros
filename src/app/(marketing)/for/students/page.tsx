import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { MEDIA_ASSETS } from '@/lib/media';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Students — For | Career OS",
  description: "Career OS For students. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/for/students",
  },
};

export default function ForStudentsPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-ivory-base)]">
      {/* Hero Section with Editorial Photography */}
      <section className="section-editorial bg-[var(--color-ivory-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6 max-w-2xl">
              <span className="section-label">
                Students & Early Careers
              </span>

              <h1 className="text-display-section text-[var(--color-charcoal-deep)]">
                You shouldn&apos;t have to know your whole future at 17.
              </h1>

              <p className="text-lead text-[var(--color-text-secondary)]">
                Understand what you are genuinely suited to, build verifiable evidence through real projects, and carry your Career OS beyond graduation into your entire working life.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
                  Start your career — Free <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href={ROUTES.PRODUCT_CAREER_PASSPORT} variant="secondary" size="lg">
                  Explore Career Passport
                </Button>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-[var(--color-text-secondary)] font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-gold-base)]" /> 100% Free for individuals
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-lavender-base)]" /> You own your portfolio
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] rounded-[var(--radius-card)] overflow-hidden shadow-subtle aspect-16/10 relative">
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
      <section className="section-editorial bg-[var(--color-ivory-warm)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">
              Empowerment Foundations
            </span>
            <h2 className="text-display-section text-[var(--color-charcoal-deep)]">
              Built for how modern careers actually start.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              No generic questionnaires or superficial personality quizzes. A structured operating system that bridges learning to employment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
              <span className="section-label text-[10px]">
                Dimension 01
              </span>
              <h3 className="text-lg font-semibold text-[var(--color-charcoal-deep)]">
                Suitability & Possibilities
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Explore viable pathways across university, college, apprenticeships, and trades. Understand the day-to-day reality of roles before committing years of preparation.
              </p>
            </div>

            <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
              <span className="section-label text-[10px]">
                Dimension 02
              </span>
              <h3 className="text-lg font-semibold text-[var(--color-charcoal-deep)]">
                Skills Gaps & Actionable Steps
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Identify the exact capability bridge between where you are today and your target opportunities. Get curated project guidance that closes competency gaps.
              </p>
            </div>

            <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
              <span className="section-label text-[10px]">
                Dimension 03
              </span>
              <h3 className="text-lg font-semibold text-[var(--color-charcoal-deep)]">
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
      <section className="section-editorial bg-[var(--color-ivory-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">
              Universal Pathway Support
            </span>
            <h2 className="text-display-section text-[var(--color-charcoal-deep)]">
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
                className="p-5 bg-[var(--color-ivory-warm)] border border-[var(--color-border-default)] hover:border-[var(--color-charcoal-base)] text-center text-xs font-semibold text-[var(--color-charcoal-deep)] transition-all block rounded-[var(--radius-sm)]"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Action Banner */}
      <section className="section-editorial bg-[var(--color-charcoal-base)] text-[var(--color-ivory-base)] border-t border-[var(--color-charcoal-border)]">
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl font-normal text-white tracking-tight">
              Start building your Career OS today (100% Free)
            </h3>
            <p className="text-sm text-[var(--color-text-inverse-muted)]">
              Individual core accounts are free for individuals. No credit card required.
            </p>
          </div>
          <Button href={ROUTES.SIGNUP} variant="dark" size="lg" className="shrink-0">
            Create Free Account <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}

