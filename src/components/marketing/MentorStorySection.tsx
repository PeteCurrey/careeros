'use client';

import React from 'react';
import Image from 'next/image';
import { MEDIA_ASSETS } from '@/lib/media';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';

export function MentorStorySection() {
  return (
    <section className="section-editorial bg-[var(--color-charcoal-base)] text-[var(--color-ivory-base)] relative overflow-hidden border-b border-[var(--color-charcoal-border)]">
      <div className="container-editorial relative z-10 space-y-16">
        
        {/* Editorial Section Top Header */}
        <div className="max-w-3xl space-y-4">
          <span className="section-label-light">
            Continuous Intelligence & Advisory
          </span>
          <h2 className="text-display-section text-[var(--color-ivory-base)]">
            Someone in your corner. <br />
            <span className="text-[var(--color-lavender-base)] font-normal">
              Backed by your Career OS.
            </span>
          </h2>
          <p className="text-lead text-[var(--color-text-inverse-muted)]">
            Not a generic prompt box. A persistent advisor backed by structured career graphs, verifiable evidence, and transparent rationale throughout your working life.
          </p>
        </div>

        {/* High-Contrast Narrative Split: Mentor Portrait & Natural Advisory UI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Documentary Mentor Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="border border-[var(--color-border-charcoal)] bg-[var(--color-charcoal-deep)] rounded-[var(--radius-card)] overflow-hidden shadow-floating relative aspect-4/3 lg:aspect-auto lg:h-[520px]">
              <Image
                src={MEDIA_ASSETS.mentors.marcus.src}
                alt="Marcus Thorne - Career OS Assigned Mentor in Technical Leadership"
                width={MEDIA_ASSETS.mentors.marcus.width}
                height={MEDIA_ASSETS.mentors.marcus.height}
                className="w-full h-full object-cover"
              />
              
              {/* Bottom Caption Bar */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-charcoal-deep)] via-[var(--color-charcoal-deep)]/70 to-transparent p-6 text-[var(--color-ivory-base)] space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[var(--color-lavender-light)] font-semibold">
                  System-Assigned Domain Advisor
                </span>
                <h3 className="text-lg font-bold text-white">
                  Marcus Thorne
                </h3>
                <p className="text-xs text-[var(--color-text-inverse-muted)]">
                  Senior Engineering & Technical Leadership Advisory
                </p>
              </div>
            </div>
          </div>

          {/* Right: Authentic Structured Advisory Interface */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-8 sm:p-10 bg-[var(--color-charcoal-deep)] border border-[var(--color-border-charcoal)] rounded-[var(--radius-card)] space-y-6">
              
              <div className="flex items-center justify-between border-b border-[var(--color-border-charcoal)] pb-4">
                <div>
                  <h4 className="font-semibold text-sm text-[var(--color-ivory-base)]">
                    Active Strategic Consultation
                  </h4>
                  <p className="text-xs text-[var(--color-text-inverse-muted)]">
                    Session 14 &bull; Calibration against Staff Architecture Benchmark
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-[var(--color-lavender-base)] px-2.5 py-1 bg-white/5 border border-white/10 rounded-[var(--radius-sm)]">
                  Evidence-Grounded
                </span>
              </div>

              {/* Natural Advisory Dialogue */}
              <div className="p-5 bg-white/5 border border-white/10 rounded-[var(--radius-sm)] text-sm sm:text-base text-[var(--color-ivory-base)] leading-relaxed">
                &ldquo;You noted that moving into Staff leadership is your priority for the next 18 months. You&apos;ve now anchored the distributed systems design deliverables in your Passport, but demonstrable cross-functional budget exposure is still missing for a Staff review.&rdquo;
              </div>

              {/* Actionable Next Move Recommendation */}
              <div className="p-6 bg-[var(--color-charcoal-base)] border border-[var(--color-border-charcoal)] rounded-[var(--radius-sm)] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="section-label-light">
                    Recommended Next Move
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-[var(--radius-sm)] bg-[var(--color-gold-base)]/20 text-[var(--color-gold-light)]">
                    High Strategic Value
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-medium text-white">
                  Lead a multi-team delivery specification with financial trade-offs
                </h4>

                <p className="text-xs sm:text-sm text-[var(--color-text-inverse-muted)] leading-relaxed">
                  Builds documented stakeholder and team delivery evidence before applying for your next promotion, closing the 28% gap in strategic leadership competencies.
                </p>
              </div>

              {/* Provenance & CTA */}
              <div className="pt-3 border-t border-[var(--color-border-charcoal)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[var(--color-text-inverse-muted)]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-lavender-base)]" />
                  Factor provenance: Career Graph benchmark &bull; Verified skills record
                </span>
                <Link
                  href={ROUTES.PRODUCT_AI_CAREER_MENTOR}
                  className="font-semibold text-[var(--color-ivory-base)] hover:text-white inline-flex items-center gap-1 underline underline-offset-4"
                >
                  Explore AI Career Mentor <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Subtle organic background motif */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-lavender-base)]/5 blur-3xl rounded-full pointer-events-none" />
    </section>
  );
}

