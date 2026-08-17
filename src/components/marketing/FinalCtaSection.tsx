import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export function FinalCtaSection() {
  return (
    <section className="section-editorial-lg bg-[var(--color-charcoal-base)] text-[var(--color-ivory-base)] relative overflow-hidden border-b border-[var(--color-charcoal-border)]">
      <div className="container-editorial relative z-10 space-y-16">
        
        {/* Main CTA Block */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="section-label-light">
            Begin Your Lifelong Operating System
          </span>

          <h2 className="text-display-hero text-white max-w-3xl mx-auto">
            Start building your career on verifiable evidence.
          </h2>

          <p className="text-lead text-[var(--color-text-inverse-muted)] max-w-2xl mx-auto leading-relaxed">
            Free forever for individuals. Your data stays completely under your sovereign control. Available from your first day of discovery to executive leadership and beyond.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              href={ROUTES.SIGNUP}
              variant="dark"
              size="lg"
              className="text-base font-semibold w-full sm:w-auto"
            >
              Start your career — Free <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              href={ROUTES.PRODUCT}
              variant="secondary"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white text-base font-medium w-full sm:w-auto"
            >
              Explore Full Platform
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--color-text-inverse-muted)] pt-4">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-gold-base)]" /> Free for individuals
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-lavender-base)]" /> Zero commercial advertising
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-gold-base)]" /> Portable W3C verifiable credentials
            </span>
          </div>
        </div>

        {/* Institutional Partner Invitation Sub-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-12 border-t border-[var(--color-border-charcoal)]">
          <div className="p-8 bg-[var(--color-charcoal-deep)] border border-[var(--color-border-charcoal)] rounded-[var(--radius-card)] space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="section-label-light text-[10px]">
                Educational Institutions
              </span>
              <h3 className="text-lg font-normal text-white">
                Become a Launch School or District
              </h3>
              <p className="text-xs text-[var(--color-text-inverse-muted)] leading-relaxed">
                Partner with Career OS to bring equitable career development, apprenticeship discovery, and safeguarding to your students with zero advertising.
              </p>
            </div>
            <Link
              href={ROUTES.FOR_HIGH_SCHOOLS}
              className="text-xs font-semibold text-[var(--color-ivory-base)] hover:text-white inline-flex items-center gap-1 pt-2 underline underline-offset-4"
            >
              School Partnership Details <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-8 bg-[var(--color-charcoal-deep)] border border-[var(--color-border-charcoal)] rounded-[var(--radius-card)] space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="section-label-light text-[10px]">
                Forward-Thinking Employers
              </span>
              <h3 className="text-lg font-normal text-white">
                Become a Founding Launch Employer
              </h3>
              <p className="text-xs text-[var(--color-text-inverse-muted)] leading-relaxed">
                Shape responsible talent discovery based on demonstrated evidence, apprenticeship capabilities, and mutual alignment rather than keyword filtering.
              </p>
            </div>
            <Link
              href={ROUTES.FOR_EMPLOYERS}
              className="text-xs font-semibold text-[var(--color-ivory-base)] hover:text-white inline-flex items-center gap-1 pt-2 underline underline-offset-4"
            >
              Employer Program Details <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

