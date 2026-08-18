"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MEDIA_ASSETS } from "@/lib/media";
import { ArrowRight, ShieldCheck, Bot, Sparkles } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { ScrollReveal } from "@/components/brand/ScrollReveal";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";

export function MentorStorySection() {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion.current) {
      setInView(true);
      return;
    }

    const currentRef = containerRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getStepStyle = (delayMs: number) => {
    if (prefersReducedMotion.current || inView) {
      return {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
        transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
      };
    }
    return {
      opacity: 0,
      transform: 'translate3d(0, 10px, 0)',
    };
  };

  return (
    <section
      ref={containerRef}
      className="section-editorial bg-[var(--background-dark-deep)] text-[var(--color-text-primary)] relative overflow-hidden border-b border-[var(--color-border-default)]"
    >
      {/* Subtle organic lilac/cool blue background motif */}
      <div className="ambient-glow-lilac absolute inset-0 pointer-events-none" />

      <div className="container-editorial relative z-10 space-y-16">

        {/* Editorial Section Top Header */}
        <ScrollReveal>
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="section-label-light">
                Continuous Intelligence &amp; Advisory
              </span>
              <TechnicalBadge variant="lavender" dot>
                AI MENTOR PERSONA
              </TechnicalBadge>
            </div>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Someone in your corner. <br />
              <span className="text-[#CDBBD2] font-normal">
                Backed by your Career OS.
              </span>
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Not a generic prompt box. A persistent AI career mentor with domain warmth, backed by structured career graphs, verifiable evidence, and transparent rationale throughout your working life.
            </p>
          </div>
        </ScrollReveal>

        {/* Narrative Split: Stylized AI Mentor Portrait & Sequential Reasoning Consultation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left: Stylized AI Mentor Portrait with Optical Breathing Depth */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="right" delayMs={100}>
              <div className="border border-[var(--color-border-default)] bg-[var(--color-surface-base)] rounded-[var(--radius-card)] overflow-hidden shadow-floating relative aspect-4/3 lg:aspect-auto lg:h-[520px] group">
                
                {/* Top Explicit AI Badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-[var(--background-dark-deep)]/90 backdrop-blur-sm border border-[var(--color-lavender-base)]/40 rounded-[var(--radius-sm)] text-xs text-[var(--color-lavender-light)] font-bold shadow-md">
                  <Bot className="w-3.5 h-3.5 text-[var(--color-lavender-base)]" />
                  <span className="font-mono">AI MENTOR</span>
                </div>

                {/* Stylized AI Portrait Image with subtle breathing motion */}
                <div className="w-full h-full breathing-subtle">
                  <Image
                    src={MEDIA_ASSETS.mentors.marcus.src}
                    alt={MEDIA_ASSETS.mentors.marcus.alt}
                    width={MEDIA_ASSETS.mentors.marcus.width}
                    height={MEDIA_ASSETS.mentors.marcus.height}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom Caption Bar */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--background-dark-deep)] via-[var(--background-dark-deep)]/85 to-transparent p-6 text-[var(--color-text-primary)] space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-lavender-light)] font-bold px-2 py-0.5 bg-white/10 rounded-[var(--radius-sm)] border border-white/15">
                      System-Assigned AI Domain Advisor
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white flex items-center justify-between">
                    <span>Marcus Thorne</span>
                    <span className="text-xs font-semibold text-[var(--color-gold-light)] bg-black/40 px-2 py-0.5 rounded border border-[var(--color-gold-base)]/30 font-mono">
                      AI Persona
                    </span>
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    Senior Technology &amp; Engineering Leadership Specialization
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Sequential Reasoning Consultation Interface with Connected Data Line */}
          <div className="lg:col-span-7 space-y-6 relative">
            
            {/* Fine connecting data line between mentor and reasoning nodes */}
            <div className="hidden lg:block absolute -left-7 top-1/2 -translate-y-1/2 w-7 h-px bg-gradient-to-r from-[#CDBBD2]/40 to-[#2F8FFF]/60" />

            <ScrollReveal direction="left" delayMs={150}>
              <div className="p-8 sm:p-10 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6 border-beam-container border-beam-slow">

                {/* Step 1: Session Header Context */}
                <div
                  style={getStepStyle(100)}
                  className="flex items-center justify-between border-b border-[var(--color-border-default)] pb-4"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-sm text-[var(--color-text-primary)]">
                        Active Strategic Consultation
                      </h4>
                      <TechnicalBadge variant="lavender">AI SESSION 14</TechnicalBadge>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                      Calibration against Staff Architecture Benchmark
                    </p>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[var(--color-lavender-base)] px-2.5 py-1 bg-white/5 border border-white/10 rounded-[var(--radius-sm)]">
                    Evidence-Grounded
                  </span>
                </div>

                {/* Step 2: Natural Advisory Dialogue */}
                <div
                  style={getStepStyle(300)}
                  className="p-5 bg-white/5 border border-white/10 rounded-[var(--radius-sm)] text-sm sm:text-base text-[var(--color-text-primary)] leading-relaxed relative"
                >
                  <div className="absolute -left-2 top-4 w-1 h-6 bg-[#CDBBD2] rounded-full" />
                  &ldquo;You noted that moving into Staff leadership is your priority for the next 18 months. You&apos;ve now anchored the distributed systems design deliverables in your Passport, but demonstrable cross-functional budget exposure is still missing for a Staff review.&rdquo;
                </div>

                {/* Step 3: Actionable Next Move Recommendation */}
                <div
                  style={getStepStyle(500)}
                  className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-3 hover-lift relative"
                >
                  <div className="absolute -left-2 top-6 w-1 h-8 bg-[#2F8FFF] rounded-full" />
                  <div className="flex items-center justify-between">
                    <span className="section-label-light">
                      Recommended Next Move
                    </span>
                    <TechnicalBadge variant="champagne" dot>
                      HIGH STRATEGIC VALUE
                    </TechnicalBadge>
                  </div>

                  <h4 className="text-base sm:text-lg font-medium text-white">
                    Lead a multi-team delivery specification with financial trade-offs
                  </h4>

                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    Builds documented stakeholder and team delivery evidence before applying for your next promotion, closing the 28% gap in strategic leadership competencies.
                  </p>
                </div>

                {/* Step 4: Provenance Anchor & Link */}
                <div
                  style={getStepStyle(700)}
                  className="pt-3 border-t border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[var(--color-text-secondary)]"
                >
                  <span className="flex items-center gap-1.5 font-mono text-[11px]">
                    <ShieldCheck className="w-4 h-4 text-[var(--color-lavender-base)]" />
                    Provenance: Career Graph &bull; Verified skills record
                  </span>
                  <Link
                    href={ROUTES.PRODUCT_AI_CAREER_MENTOR}
                    className="font-semibold text-[var(--color-text-primary)] hover:text-white inline-flex items-center gap-1 underline underline-offset-4 group"
                  >
                    <span>Explore AI Career Mentor</span>
                    <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
