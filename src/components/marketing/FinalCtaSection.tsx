import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ShieldCheck, CheckCircle2, School, Building2 } from 'lucide-react';

export function FinalCtaSection() {
  return (
    <section className="section-editorial-lg bg-[var(--color-neutral-950)] text-white relative overflow-hidden">
      <div className="container-wide relative z-10 space-y-16">
        
        {/* Main CTA Block */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-xs font-mono font-bold tracking-widest text-[var(--color-brand-400)] uppercase">
            BEGIN YOUR LIFELONG OPERATING SYSTEM
          </span>

          <h2 className="text-display-hero font-bold tracking-tight text-white">
            Start building your career on verifiable evidence.
          </h2>

          <p className="text-lead text-white/80 max-w-2xl mx-auto leading-relaxed">
            Free forever for individuals. Your data stays completely under your control. Available from your first day of discovery to executive leadership and beyond.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              href={ROUTES.SIGNUP}
              variant="primary"
              size="lg"
              className="bg-white text-[var(--color-neutral-950)] hover:bg-white/90 shadow-floating text-base font-bold w-full sm:w-auto"
            >
              Start Your Career — Free <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              href={ROUTES.PRODUCT}
              variant="secondary"
              size="lg"
              className="bg-white/10 text-white hover:bg-white/20 border-white/20 text-base font-semibold w-full sm:w-auto"
            >
              Explore Full Platform
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/60 pt-4">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-verified)]" /> Free for individuals
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-brand-400)]" /> No advertising sales of private data
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-verified)]" /> Portable W3C verifiable credentials
            </span>
          </div>
        </div>

        {/* Institutional Partner Invitation Sub-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-8 border-t border-white/15">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-brand-400)] uppercase">
                <School className="w-4 h-4" /> Educational Institutions
              </div>
              <h3 className="text-base font-bold text-white">
                Become a Launch School
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Partner with Career OS to bring equitable career development, apprenticeship discovery, and safeguarding to your high school or district.
              </p>
            </div>
            <Link
              href={ROUTES.FOR_HIGH_SCHOOLS}
              className="text-xs font-bold text-white hover:text-[var(--color-brand-300)] inline-flex items-center gap-1 pt-2"
            >
              School Partnership Details &rarr;
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-brand-400)] uppercase">
                <Building2 className="w-4 h-4" /> Forward-Thinking Employers
              </div>
              <h3 className="text-base font-bold text-white">
                Become a Launch Employer
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Shape responsible talent discovery based on demonstrated evidence and mutual alignment rather than keyword filtering.
              </p>
            </div>
            <Link
              href={ROUTES.FOR_EMPLOYERS}
              className="text-xs font-bold text-white hover:text-[var(--color-brand-300)] inline-flex items-center gap-1 pt-2"
            >
              Employer Program Details &rarr;
            </Link>
          </div>
        </div>

      </div>

      {/* Atmospheric Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial from-[var(--color-brand-600)]/15 to-transparent blur-3xl pointer-events-none -z-0" />
    </section>
  );
}
