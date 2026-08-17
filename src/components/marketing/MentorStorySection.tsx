import React from 'react';
import Image from 'next/image';
import { MEDIA_ASSETS } from '@/lib/media';
import { Bot, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Compass } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

export function MentorStorySection() {
  return (
    <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)]">
      <div className="container-wide">
        
        {/* Editorial Section Top Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <p className="text-xs font-mono font-bold tracking-widest text-[var(--color-brand-600)] uppercase">
            Lifelong Intelligence
          </p>
          <h2 className="text-display-section text-[var(--color-text-primary)]">
            Your mentor knows where you&apos;re trying to go.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)]">
            Not a generic prompt box. A persistent advisor backed by structured career graphs, verifiable evidence, and transparent rationale.
          </p>
        </div>

        {/* Hero Narrative Split: Mentor Portrait & Natural Advisory UI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Art-Directed Mentor Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-xl overflow-hidden border border-[var(--color-border-default)] shadow-editorial bg-[var(--color-surface-raised)] relative aspect-4/3 lg:aspect-auto lg:h-[540px]">
              <Image
                src={MEDIA_ASSETS.mentors.marcus.src}
                alt={MEDIA_ASSETS.mentors.marcus.alt}
                width={MEDIA_ASSETS.mentors.marcus.width}
                height={MEDIA_ASSETS.mentors.marcus.height}
                className="w-full h-full object-cover"
              />
              
              {/* Bottom Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-neutral-950)]/85 via-[var(--color-neutral-950)]/40 to-transparent p-6 text-white">
                <p className="text-xs font-mono font-bold tracking-wider text-white/70 uppercase">
                  Assigned Domain Mentor
                </p>
                <h3 className="text-base font-bold text-white">
                  Marcus Thorne
                </h3>
                <p className="text-xs text-white/80">
                  Senior Engineering & Technical Leadership Advisory
                </p>
              </div>
            </div>
          </div>

          {/* Right: Realistic Structured Advisory Interface */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* The Conversational Insight Block */}
            <div className="p-8 sm:p-10 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-editorial space-y-6">
              
              <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] flex items-center justify-center text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] font-bold text-sm">
                    MT
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[var(--color-text-primary)]">
                      Marcus Thorne
                    </h3>
                    <p className="text-xs text-[var(--color-text-tertiary)]">
                      System-assigned advisor &bull; 4 years mentoring history
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[var(--color-brand-50)] text-[var(--color-brand-600)] font-bold">
                  Active Consultation
                </span>
              </div>

              {/* Natural Advisory Dialog */}
              <div className="space-y-4">
                <div className="p-5 rounded-lg bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] text-sm sm:text-base text-[var(--color-text-primary)] leading-relaxed">
                  &ldquo;You said leadership is your next priority. You&apos;ve now built the technical architecture evidence in your Passport, but demonstrable cross-functional management exposure is still missing for a Staff role.&rdquo;
                </div>
              </div>

              {/* Next Move Actionable Recommendation Card */}
              <div className="p-6 rounded-lg bg-[var(--color-surface-base)] border-2 border-[var(--color-brand-300)] dark:border-[var(--color-brand-700)] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]">
                    RECOMMENDED NEXT MOVE
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[var(--color-verified-light)] text-[var(--color-verified)]">
                    High Impact
                  </span>
                </div>

                <h4 className="text-lg font-bold text-[var(--color-text-primary)]">
                  Lead a small cross-functional deliverable
                </h4>

                <div className="space-y-1">
                  <p className="text-xs font-bold text-[var(--color-text-secondary)] uppercase font-mono">
                    STRATEGIC RATIONALE
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    Builds documented stakeholder and team delivery evidence before applying for your next promotion, closing the 28% gap in management competencies.
                  </p>
                </div>
              </div>

              {/* Transparency Provenance Footer */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--color-text-tertiary)]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-verified)]" />
                  Factor provenance: Career Graph benchmark &bull; Verified skills record
                </span>
                <Link
                  href={ROUTES.PRODUCT_AI_CAREER_MENTOR}
                  className="font-semibold text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] hover:underline inline-flex items-center gap-1"
                >
                  Explore AI Career Mentor <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
