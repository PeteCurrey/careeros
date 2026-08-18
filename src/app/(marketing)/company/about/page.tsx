import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ShieldCheck, Sparkles, Compass, CheckCircle2, Users, Building2, Globe2 } from 'lucide-react';
import { CareerGradientText } from '@/components/brand/CareerGradientText';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { CareerPathwayConnector } from '@/components/brand/CareerPathwayConnector';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';
import { MEDIA_ASSETS } from '@/lib/media';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Career OS | Serious Infrastructure for Your Working Life",
  description: "Career OS was founded on a conviction: that every person deserves persistent, high-trust career infrastructure that compounds over decades.",
  alternates: {
    canonical: "https://career-os.com/company/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      {/* ── 01. Full Screen Hero ── */}
      <section className="relative min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--color-surface-base)] py-20 lg:py-0">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src={MEDIA_ASSETS.hero.mentorTeam.src}
            alt={MEDIA_ASSETS.hero.mentorTeam.alt}
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, #222222 0%, rgba(34, 34, 34, 0.96) 38%, rgba(34, 34, 34, 0.88) 55%, rgba(34, 34, 34, 0.42) 78%, rgba(34, 34, 34, 0.18) 100%)`,
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-28 pointer-events-none"
            style={{ background: `linear-gradient(to bottom, #222222 0%, transparent 100%)` }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
            style={{ background: `linear-gradient(to top, #222222 0%, transparent 100%)` }}
          />
        </div>

        <CareerPathwayConnector variant="branching" className="opacity-20" />

        <div className="container-editorial relative z-10 space-y-6 max-w-4xl">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <span className="section-label flex items-center gap-2">
                <span className="accent-blue-dot accent-blue-dot-pulse" />
                Company &amp; Philosophy
              </span>
              <TechnicalBadge variant="blue">
                ESTABLISHED 2026
              </TechnicalBadge>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <h1 className="text-display-hero font-serif font-normal tracking-tight text-[var(--color-text-primary)] leading-[1.08]">
              Serious career infrastructure for{' '}
              <CareerGradientText variant="blue">
                your entire working life.
              </CareerGradientText>
            </h1>
          </ScrollReveal>

          <ScrollReveal delayMs={200}>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              Career OS was founded on a single conviction: that every person deserves professional infrastructure of the same quality that was previously accessible only to privileged networks.
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={300}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href={ROUTES.COMPANY_MISSION} variant="primary" size="lg">
                Read Our Mission <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button href={ROUTES.COMPANY_CONTACT} variant="secondary" size="lg">
                Contact the Team
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 02. Editorial Narrative ── */}
      <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)] relative">
        <div className="container-editorial space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
              <ScrollReveal>
                <h2 className="text-display-section text-[var(--color-text-primary)] leading-[1.12]">
                  Why we built{' '}
                  <CareerGradientText variant="blue">
                    Career OS.
                  </CareerGradientText>
                </h2>
              </ScrollReveal>

              <ScrollReveal delayMs={100}>
                <p>
                  We built Career OS because the existing paradigm is broken. Job boards degrade candidates into keyword-filtered résumé applicants. Professional networks reward performative self-promotion over genuine demonstrated competence. Career coaching is financially inaccessible to most. AI assistants provide shallow, generic advice with no memory of who you actually are.
                </p>
              </ScrollReveal>

              <ScrollReveal delayMs={200}>
                <p>
                  Career OS takes a fundamentally different approach. We are building persistent career infrastructure that compounds in value over decades — not a transactional tool only used during sudden employment crises. A platform that understands your multi-dimensional professional identity, not just your last job title.
                </p>
              </ScrollReveal>

              <ScrollReveal delayMs={300}>
                <p>
                  We are equally committed to the breadth of human opportunity. University is not the only respectable path. Skilled trades, registered apprenticeships, community college, vocational certification, and direct workforce entry deserve the same quality of guidance, verification infrastructure, and professional network access.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal delayMs={200}>
                <div className="p-7 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4">
                  <span className="section-label text-[#2F8FFF]">CORE CONVICTION</span>
                  <h3 className="text-lg font-bold text-white">
                    Universal Parity of Opportunity
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    The operating system for your working life should not depend on whether you attended an elite university, live in a major city, or can afford expensive coaching. It should be available to everyone who wants to build a meaningful working life.
                  </p>
                  <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center gap-2 text-xs font-mono text-[var(--color-taupe-300)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Free core access for all individuals</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. CTA ── */}
      <section className="section-editorial bg-[var(--background-dark-deep)] text-[var(--color-text-primary)] border-t border-[var(--color-border-default)]">
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-normal text-white tracking-tight">
              Join us in building the career operating system
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Explore our mission, partner with our team, or create your personal account today.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
              Start Free <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button href={ROUTES.COMPANY_PARTNERS} variant="secondary" size="lg">
              Partnerships →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
