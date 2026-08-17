"use client";

import React from "react";
import Image from "next/image";
import { MEDIA_ASSETS } from "@/lib/media";
import { ArrowRight, ShieldCheck, Bot, Sparkles } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export function MentorStorySection() {
  return (
    <section className="section-editorial bg-[var(--background-dark-deep)] text-[var(--color-text-primary)] relative overflow-hidden border-b border-[var(--color-border-default)]">
      <div className="container-editorial relative z-10 space-y-16">

        {/* Editorial Section Top Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="section-label-light">
              Continuous Intelligence &amp; Advisory
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[var(--radius-sm)] bg-[var(--color-lavender-base)]/20 text-[var(--color-lavender-light)] text-[10px] uppercase font-bold tracking-wider border border-[var(--color-lavender-base)]/40">
              <Bot className="w-3 h-3" /> AI Mentor Persona
            </span>
          </div>
          <h2 className="text-display-section text-[var(--color-text-primary)]">
            Someone in your corner. <br />
            <span className="text-[var(--color-lavender-base)] font-normal">
              Backed by your Career OS.
            </span>
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)]">
            Not a generic prompt box. A persistent AI career mentor with domain warmth, backed by structured career graphs, verifiable evidence, and transparent rationale throughout your working life.
          </p>
        </div>

        {/* High-Contrast Narrative Split: Stylized AI Mentor Portrait & Structured Advisory Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left: Stylized Non-Photographic AI Mentor Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="border border-[var(--color-border-default)] bg-[var(--color-surface-base)] rounded-[var(--radius-card)] overflow-hidden shadow-floating relative aspect-4/3 lg:aspect-auto lg:h-[520px]">
              
              {/* Top Explicit AI Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-[var(--background-dark-deep)]/90 backdrop-blur-sm border border-[var(--color-lavender-base)]/40 rounded-[var(--radius-sm)] text-xs text-[var(--color-lavender-light)] font-bold shadow-md">
                <Bot className="w-3.5 h-3.5 text-[var(--color-lavender-base)]" />
                <span>AI MENTOR</span>
              </div>

              {/* Stylized AI Portrait Image */}
              <Image
                src={MEDIA_ASSETS.mentors.marcus.src}
                alt={MEDIA_ASSETS.mentors.marcus.alt}
                width={MEDIA_ASSETS.mentors.marcus.width}
                height={MEDIA_ASSETS.mentors.marcus.height}
                className="w-full h-full object-cover"
              />

              {/* Bottom Caption Bar */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--background-dark-deep)] via-[var(--background-dark-deep)]/80 to-transparent p-6 text-[var(--color-text-primary)] space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-widest text-[var(--color-lavender-light)] font-bold px-2 py-0.5 bg-white/10 rounded-[var(--radius-sm)] border border-white/15">
                    System-Assigned AI Domain Advisor
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white flex items-center justify-between">
                  <span>Marcus Thorne</span>
                  <span className="text-xs font-semibold text-[var(--color-gold-light)] bg-black/40 px-2 py-0.5 rounded border border-[var(--color-gold-base)]/30">AI Persona</span>
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Senior Technology &amp; Engineering Leadership Specialization
                </p>
              </div>
            </div>
          </div>

          {/* Right: Authentic Structured Advisory Interface */}
          <div className="lg:col-span-7 space-y-6">

            <div className="p-8 sm:p-10 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6">

              <div className="flex items-center justify-between border-b border-[var(--color-border-default)] pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-sm text-[var(--color-text-primary)]">
                      Active Strategic Consultation
                    </h4>
                    <span className="text-[10px] font-bold text-[var(--color-lavender-light)] uppercase tracking-wider px-1.5 py-0.5 bg-[var(--color-lavender-base)]/20 border border-[var(--color-lavender-base)]/30 rounded">AI</span>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                    Session 14 &bull; Calibration against Staff Architecture Benchmark
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-[var(--color-lavender-base)] px-2.5 py-1 bg-white/5 border border-white/10 rounded-[var(--radius-sm)]">
                  Evidence-Grounded
                </span>
              </div>

              {/* Natural Advisory Dialogue */}
              <div className="p-5 bg-white/5 border border-white/10 rounded-[var(--radius-sm)] text-sm sm:text-base text-[var(--color-text-primary)] leading-relaxed relative">
                &ldquo;You noted that moving into Staff leadership is your priority for the next 18 months. You&apos;ve now anchored the distributed systems design deliverables in your Passport, but demonstrable cross-functional budget exposure is still missing for a Staff review.&rdquo;
              </div>

              {/* Actionable Next Move Recommendation */}
              <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="section-label-light">
                    Recommended Next Move
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-[var(--radius-sm)] bg-[var(--color-gold-base)]/20 text-[var(--color-gold-light)] flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> High Strategic Value
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-medium text-white">
                  Lead a multi-team delivery specification with financial trade-offs
                </h4>

                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Builds documented stakeholder and team delivery evidence before applying for your next promotion, closing the 28% gap in strategic leadership competencies.
                </p>
              </div>

              {/* Provenance & CTA */}
              <div className="pt-3 border-t border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[var(--color-text-secondary)]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-lavender-base)]" />
                  Factor provenance: Career Graph benchmark &bull; Verified skills record
                </span>
                <Link
                  href={ROUTES.PRODUCT_AI_CAREER_MENTOR}
                  className="font-semibold text-[var(--color-text-primary)] hover:text-white inline-flex items-center gap-1 underline underline-offset-4"
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
