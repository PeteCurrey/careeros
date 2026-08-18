import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import {
  ArrowRight,
  Shield,
  UserCheck,
  Award,
  Compass,
  Bot,
  Sparkles,
  Building,
  AlertCircle,
  ChevronDown,
} from 'lucide-react';

import { InteractiveSystemMap } from '@/components/marketing/how-it-works/InteractiveSystemMap';
import { StartingPointsVisual } from '@/components/marketing/how-it-works/StartingPointsVisual';
import { CareerLoopVisual } from '@/components/marketing/how-it-works/CareerLoopVisual';
import { PrivacyBoundaryDiagram } from '@/components/marketing/how-it-works/PrivacyBoundaryDiagram';
import { LifetimeJourneyVisual } from '@/components/marketing/how-it-works/LifetimeJourneyVisual';
import { DiverseCareersVisual } from '@/components/marketing/how-it-works/DiverseCareersVisual';
import { ProductLayersSection } from '@/components/marketing/how-it-works/ProductLayersSection';
import { CareerOSInActionDemo } from '@/components/marketing/how-it-works/CareerOSInActionDemo';
import { CareerGradientText } from '@/components/brand/CareerGradientText';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { CareerPathwayConnector } from '@/components/brand/CareerPathwayConnector';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Career OS Works: Career Planning, Evidence & Opportunity',
  description:
    'See how Career OS connects AI career mentoring, Career Twin, professional evidence, Career Graph and future opportunity discovery into one system for your working life.',
  alternates: {
    canonical: 'https://career-os.com/product/how-it-works',
  },
  other: {
    'script:ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://career-os.com' },
        { '@type': 'ListItem', position: 2, name: 'Product', item: 'https://career-os.com/product' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'How It Works',
          item: 'https://career-os.com/product/how-it-works',
        },
      ],
    }),
  },
};

// ─── Shared helpers ───────────────────────────────────────────────────────────
function Section({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`py-16 lg:py-24 border-b border-[var(--color-border-default)] ${className}`}
    >
      <div className="container-editorial">{children}</div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <div className="border-b border-[var(--color-border-default)] py-5">
      <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">{q}</p>
      <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{a}</div>
    </div>
  );
}

import Image from 'next/image';
import { MEDIA_ASSETS } from '@/lib/media';

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HowItWorksPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">

      {/* ── SECTION 01 — HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--color-surface-base)] py-20 lg:py-0">
        {/* Civic Innovation Atrium Background Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src={MEDIA_ASSETS.product.howItWorks.src}
            alt={MEDIA_ASSETS.product.howItWorks.alt}
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-center"
          />

          {/* Editorial Scrim: Charcoal Wash on Left for Ultra-Crisp Legibility */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, #222222 0%, rgba(34, 34, 34, 0.96) 38%, rgba(34, 34, 34, 0.88) 55%, rgba(34, 34, 34, 0.42) 78%, rgba(34, 34, 34, 0.18) 100%)`,
            }}
          />

          {/* Top Edge Dissolve */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-28 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, #222222 0%, transparent 100%)`,
            }}
          />

          {/* Bottom Edge Dissolve */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
            style={{
              background: `linear-gradient(to top, #222222 0%, transparent 100%)`,
            }}
          />
        </div>

        <CareerPathwayConnector variant="branching" className="opacity-20" />

        <div className="container-editorial relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Copy */}
            <div className="space-y-7">
              <div className="flex items-center gap-3">
                <span className="section-label flex items-center gap-2">
                  <span className="accent-blue-dot accent-blue-dot-pulse" />
                  Lifecycle &bull; How Career OS Works
                </span>
              </div>
              <h1 className="text-display-hero font-serif font-normal tracking-tight text-[var(--color-text-primary)] leading-[1.08]">
                Your career is already a system.
                <br />
                <CareerGradientText variant="blue">
                  Career OS makes it visible.
                </CareerGradientText>
              </h1>
              <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
                Career OS is designed to connect career guidance, professional context, evidence,
                development and opportunity — so every next move can build on what came before.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button href="#system-map" variant="primary" size="lg">
                  See how it works ↓
                </Button>
                <Button href={ROUTES.SIGNUP} variant="secondary" size="lg">
                  Start your Career OS
                </Button>
              </div>
              <p className="text-xs text-[var(--color-text-tertiary)]">Free for individuals.</p>
            </div>

            {/* Right — Interactive System Map */}
            <div className="w-full">
              <InteractiveSystemMap />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02 — START WITH YOU ──────────────────────────────────────── */}
      <Section id="start-with-you">
        <div className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Section 02</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Career OS doesn't start with a vacancy.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              It starts by understanding the person. Before surfacing any opportunity, direction or
              recommendation, Career OS is designed to build a clear picture of where you are, what
              you have built, and where you want to go.
            </p>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Whether you are 16 and exploring possibilities for the first time, or a senior
              professional ready for a strategic pivot, Career OS adapts its depth and tone to where
              you actually are — not where a form template assumes you to be.
            </p>
          </div>
          <StartingPointsVisual />
        </div>
      </Section>

      {/* ── SECTION 03 — CAREER TWIN BUILDS CONTEXT ─────────────────────────── */}
      <Section id="career-twin-context">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="section-label">Section 03</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Career advice gets better when it has context.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Career Twin is the context layer. It structures the professional picture behind you —
              bringing together your experience, demonstrated capability, evidence, qualifications,
              current development, goals, working preferences, and personal direction.
            </p>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Career Twin is not a public résumé. It is not automatically visible to employers. It
              is not a psychological profile or personality model. It is the private, structured
              record of your professional self that makes every other Career OS system more useful.
            </p>
            <blockquote className="border-l-4 border-[var(--color-brand-500)] pl-6 py-2">
              <p className="text-lg font-serif text-[var(--color-text-primary)] leading-relaxed">
                Career Twin is the context layer. Without it, career guidance is generic.
                With it, it gets specific.
              </p>
            </blockquote>
            <Link
              href={ROUTES.PRODUCT_CAREER_TWIN}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-brand-400)] hover:text-[var(--color-brand-300)] transition-colors group"
            >
              See how Career Twin builds context
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Twin Dimension Overview */}
          <div className="space-y-2.5">
            {[
              { label: 'Experience', note: 'Professional history and roles across your career' },
              { label: 'Demonstrated capability', note: 'What you can actually show, not just claim' },
              { label: 'Qualifications & training', note: 'Formal and informal educational achievements' },
              { label: 'Current development', note: 'What you are actively building toward' },
              { label: 'Goals & direction', note: 'Where you have told Career OS you want to go' },
              { label: 'Working preferences', note: 'Where and how you work best' },
              { label: 'Constraints', note: 'Location, availability, and practical boundaries' },
            ].map((dim) => (
              <div
                key={dim.label}
                className="flex items-start gap-4 px-5 py-4 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/50"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-400)] flex-shrink-0 mt-2" />
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">{dim.label}</p>
                  <p className="text-xs text-[var(--color-text-tertiary)] mt-0.5">{dim.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SECTION 04 — MENTOR TURNS CONTEXT INTO ACTION ───────────────────── */}
      <Section id="mentor-action">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Illustrative Mentor Example Card */}
          <div className="rounded-[var(--radius-card)] border border-[var(--color-border-default)] overflow-hidden">
            <div className="px-6 py-4 bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)]">
                Illustrative Career Mentor recommendation
              </span>
            </div>
            <div className="p-6 space-y-5 bg-[var(--color-surface-base)]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-brand-400)]">
                  Career Twin Context
                </span>
                <div className="mt-2 space-y-1.5">
                  {[
                    'Strong technical diagnostic capability',
                    'Verified EV battery system certification',
                    'Good client communication evidence',
                    'Goal: move into industrial engineering / management',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-1.5">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-brand-400)] flex-shrink-0" />
                      <span className="text-xs text-[var(--color-text-secondary)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-px bg-[var(--color-border-default)]" />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400">
                  What Mentor identified
                </span>
                <p className="text-xs text-[var(--color-text-tertiary)] mt-1">
                  Technical credibility: strong. Leadership evidence: absent.
                  Another technical qualification will not close this gap.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--color-brand-950)]/40 border border-[var(--color-brand-600)]/30">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-brand-400)]">
                  Mentor recommendation
                </span>
                <p className="text-sm text-[var(--color-text-primary)] mt-1 font-medium">
                  Lead a reliability-improvement project inside your current role.
                  Create leadership evidence before chasing another technical qualification.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <span className="section-label">Section 04</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Context is useful. Knowing what to do next is better.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              The AI Career Mentor interprets your Career Twin context to turn complex career
              questions into concrete developmental direction. It helps identify what the highest-
              leverage next action is — often different from the most obvious one.
            </p>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Mentor conversations are private. They are not visible to employers, recruiters, or
              anyone outside your Career OS account. The goal is honest coaching without
              professional risk.
            </p>
            <blockquote className="border-l-4 border-[var(--color-brand-500)] pl-6 py-2">
              <p className="text-lg font-serif text-[var(--color-text-primary)] leading-relaxed">
                Career Twin provides context. Career Mentor helps you use it.
              </p>
            </blockquote>
            <Link
              href={ROUTES.PRODUCT_AI_CAREER_MENTOR}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-brand-400)] hover:text-[var(--color-brand-300)] transition-colors group"
            >
              Meet the AI Career Mentor
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Section>

      {/* ── SECTION 05 — ACTION CREATES EVIDENCE ─────────────────────────────── */}
      <Section id="evidence-loop">
        <div className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Section 05</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Career development should leave something behind.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Most career advice disappears when the conversation ends. Career OS is designed around
              a different principle: every developmental action can contribute evidence — a project
              deliverable, a completed certification, a documented outcome — that strengthens your
              Career Passport and updates your Career Twin.
            </p>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              This is the compounding loop. Guidance becomes action. Action becomes evidence.
              Evidence becomes context. Context makes the next guidance more precise.
            </p>
          </div>
          <CareerLoopVisual />
        </div>
      </Section>

      {/* ── SECTION 06 — CAREER PASSPORT ─────────────────────────────────────── */}
      <Section id="career-passport">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <span className="section-label">Section 06</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Don't just remember what you've done.
              Build the record behind it.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Career Passport is designed to carry the structured professional record behind your
              career — bringing qualifications, project samples, verified credentials, work outcomes,
              and professional achievements into one portable record you own independently of any
              employer.
            </p>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Career Passport distinguishes between self-declared information, information with
              evidence attached, and information that has been formally verified. These are not
              the same thing, and Career OS does not pretend they are.
            </p>

            {/* Evidence tier visual */}
            <div className="space-y-2 pt-2">
              {[
                { label: 'Self-declared', color: 'border-[var(--color-border-default)] text-[var(--color-text-tertiary)]', note: 'Recorded by you, not yet supported by external evidence.' },
                { label: 'Evidence attached', color: 'border-amber-500/40 text-amber-300', note: 'You have added a supporting artifact, sample, or outcome document.' },
                { label: 'Verified', color: 'border-emerald-500/40 text-emerald-300', note: 'An issuer, employer, or institution has provided formal attestation.' },
              ].map((tier) => (
                <div key={tier.label} className={`flex items-start gap-3 px-4 py-3 rounded border ${tier.color}`}>
                  <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-current`} />
                  <div>
                    <p className="text-sm font-semibold">{tier.label}</p>
                    <p className="text-xs text-[var(--color-text-tertiary)] mt-0.5">{tier.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-[var(--color-brand-500)] pl-6 py-2 mt-4">
              <p className="text-lg font-serif text-[var(--color-text-primary)] leading-relaxed">
                The résumé can tell the story. The Passport can carry the supporting record.
              </p>
            </blockquote>

            <Link
              href={ROUTES.PRODUCT_CAREER_PASSPORT}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-brand-400)] hover:text-[var(--color-brand-300)] transition-colors group"
            >
              Explore Career Passport
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Passport Contents Overview */}
          <div className="space-y-2.5">
            {[
              { label: 'Qualifications', note: 'Formal educational and professional qualifications' },
              { label: 'Licences', note: 'Professional, regulatory and statutory licences' },
              { label: 'Technical training', note: 'Certified courses, bootcamps, and structured programmes' },
              { label: 'Projects & deliverables', note: 'Concrete work samples with described outcomes' },
              { label: 'Professional credentials', note: 'Attestations from employers, institutions, and issuers' },
              { label: 'Achievements', note: 'Awards, publications, and recognisable accomplishments' },
              { label: 'Continuing development', note: 'CPD, ongoing learning, and professional growth records' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 px-5 py-4 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/50"
              >
                <Award className="w-4 h-4 text-[var(--color-brand-400)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">{item.label}</p>
                  <p className="text-xs text-[var(--color-text-tertiary)] mt-0.5">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SECTION 07 — CAREER GRAPH ─────────────────────────────────────────── */}
      <Section id="career-graph">
        <div className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Section 07</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Once Career OS understands what you've built, it can help explore where it might connect.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Career Graph maps how roles, capabilities, industries, and directions relate to each
              other. It is designed to surface connections that job title searches miss entirely —
              showing you where existing capabilities travel well, where bridges are required, and
              what directions your professional foundation makes realistic.
            </p>
            <blockquote className="border-l-4 border-[var(--color-brand-500)] pl-6 py-2">
              <p className="text-lg font-serif text-[var(--color-text-primary)] leading-relaxed">
                Career Graph shows possibility — not destiny.
              </p>
            </blockquote>
          </div>

          {/* Illustrative Capability Map */}
          <div className="rounded-[var(--radius-card)] border border-[var(--color-border-default)] overflow-hidden">
            <div className="px-6 py-4 bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)]">
                Illustrative Career Graph example — Automotive Technician
              </span>
            </div>
            <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Starting Profile */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-brand-400)]">Starting capability</span>
                <div className="space-y-1.5">
                  {['Electronic diagnostics & CAN-bus analysis', 'EV high-voltage battery systems', 'Customer technical communication', 'Workshop safety compliance', 'Fault-finding methodology'].map((c) => (
                    <div key={c} className="flex items-start gap-1.5">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-brand-400)] flex-shrink-0" />
                      <span className="text-xs text-[var(--color-text-secondary)]">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transfers */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">Strong transfer</span>
                <div className="space-y-1.5">
                  {['Field Service Engineer', 'EV Technical Fleet Trainer', 'Maintenance Technician', 'Technical Services Supervisor'].map((r) => (
                    <div key={r} className="flex items-start gap-1.5">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
                      <span className="text-xs text-[var(--color-text-secondary)]">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bridge Required */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400">Bridge required</span>
                <div className="space-y-1.5">
                  {[
                    { role: 'Robotics & Automation Specialist', bridge: 'PLC / SCADA programming' },
                    { role: 'Workshop Operations Manager', bridge: 'Leadership evidence' },
                    { role: 'Independent Business Owner', bridge: 'Commercial / legal foundation' },
                  ].map((r) => (
                    <div key={r.role} className="flex items-start gap-1.5">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-400 flex-shrink-0" />
                      <div>
                        <span className="text-xs text-[var(--color-text-secondary)]">{r.role}</span>
                        <span className="text-[10px] text-amber-400/80 block">{r.bridge}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-6 py-3 border-t border-[var(--color-border-default)] bg-[var(--color-surface-raised)]">
              <p className="text-[10px] text-[var(--color-text-tertiary)]">
                Illustrative Career Graph output. No suitability is guaranteed. Bridge requirements reflect what may still be needed.
              </p>
            </div>
          </div>

          <Link
            href={ROUTES.PRODUCT_CAREER_GRAPH}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-brand-400)] hover:text-[var(--color-brand-300)] transition-colors group"
          >
            Explore Career Graph
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Section>

      {/* ── SECTION 08 — OPPORTUNITY AGENT ───────────────────────────────────── */}
      <Section id="opportunity-discovery">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <span className="section-label">Section 08</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Eventually, you shouldn't have to discover every opportunity manually.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Opportunity Agent is a future Career OS capability designed to change the fundamental
              direction of discovery — from you searching for roles, to relevant roles finding you
              against the context you have already built.
            </p>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Once Career OS understands your capabilities, your evidence, your stated direction and
              your preferences, Opportunity Agent is designed to use that full picture to identify
              what might be relevant to you specifically — not to a generic professional with your
              job title.
            </p>
            <blockquote className="border-l-4 border-[var(--color-brand-500)] pl-6 py-2">
              <p className="text-lg font-serif text-[var(--color-text-primary)] leading-relaxed">
                Opportunity Agent is designed to move Career OS from career planning
                toward continuous opportunity awareness.
              </p>
            </blockquote>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              Opportunity Agent is a product direction. Career OS does not currently operate a
              live autonomous opportunity-matching or discovery engine.
            </p>
            <Link
              href={ROUTES.PRODUCT_OPPORTUNITY_AGENT}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-brand-400)] hover:text-[var(--color-brand-300)] transition-colors group"
            >
              Explore Opportunity Agent
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Opportunity types */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
              Opportunity types Career OS aims to surface
            </p>
            {[
              { icon: '💼', label: 'Employment roles', note: 'Full-time, part-time, contract, fractional' },
              { icon: '🏢', label: 'Internal mobility', note: 'Promotions, lateral moves, and stretch assignments' },
              { icon: '🎓', label: 'Training & qualifications', note: 'Courses, certifications, and continuing development' },
              { icon: '🌱', label: 'Work experience & internships', note: 'Evidence-building for early careers' },
              { icon: '🔄', label: 'Secondments & projects', note: 'Time-limited assignments across sectors' },
              { icon: '🌍', label: 'International pathways', note: 'Cross-border careers with eligibility context' },
              { icon: '🚀', label: 'Entrepreneurship routes', note: 'Founder programmes, accelerators, and commercial learning' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 px-4 py-3 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/50">
                <span className="text-base">{item.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">{item.label}</p>
                  <p className="text-xs text-[var(--color-text-tertiary)]">{item.note}</p>
                </div>
              </div>
            ))}
            <p className="text-xs text-[var(--color-text-tertiary)] pt-2 italic">
              Not all opportunity types are currently available within Career OS. These represent the intended future scope.
            </p>
          </div>
        </div>
      </Section>

      {/* ── SECTION 09 — EMPLOYERS CONNECT THROUGH A DIFFERENT SIDE ─────────── */}
      <Section id="employer-side">
        <div className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Section 09</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Employers don't need access to everything Career OS knows.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Career intelligence and employer visibility are not the same thing. The coaching
              conversations, career uncertainties, salary ambitions and future plans that make
              Career OS useful to you should not automatically become available to any employer who
              decides to look.
            </p>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Employer Agent is designed to sit on the employer side of the architecture — helping
              organisations understand capability and discover potentially relevant people — without
              gaining access to your private Career OS context. People decide whether to engage.
              Employers decide whether to progress. Career OS facilitates the introduction.
            </p>
            <Link
              href={ROUTES.PRODUCT_EMPLOYER_AGENT}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-brand-400)] hover:text-[var(--color-brand-300)] transition-colors group"
            >
              Explore Employer Agent
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <PrivacyBoundaryDiagram />
        </div>
      </Section>

      {/* ── SECTION 10 — SYSTEM CONTINUES AFTER THE JOB ─────────────────────── */}
      <Section id="post-hire">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <span className="section-label">Section 10</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Getting the job isn't the end of the career.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Many career tools end the moment you accept an offer. Career OS is designed around
              a different premise: the career continues, and Career OS should continue with it.
            </p>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              After a new role begins, the AI Career Mentor can help with first-90-day navigation,
              performance development, difficult workplace conversations, salary preparation,
              leadership planning, and team management. Career Twin evolves. Passport evidence grows.
              Career Graph adjusts as your context changes.
            </p>
            <blockquote className="border-l-4 border-[var(--color-brand-500)] pl-6 py-3">
              <p className="text-xl font-serif text-[var(--color-text-primary)] leading-relaxed">
                Career OS is designed around the career, not the transaction.
              </p>
            </blockquote>
          </div>

          {/* Post-Hire use cases */}
          <div className="space-y-3">
            {[
              { phase: 'First 90 Days', uses: 'Sector navigation, relationship-building, establishing credibility' },
              { phase: 'Performance Development', uses: 'Targeted capability building and evidence logging' },
              { phase: 'Difficult Conversations', uses: 'Negotiation preparation, feedback, and conflict frameworks' },
              { phase: 'Salary Preparation', uses: 'Market context, evidence packaging, and negotiation approach' },
              { phase: 'Leadership Transition', uses: 'Moving from individual contributor to managing a team' },
              { phase: 'Professional Development', uses: 'CPD tracking, training evidence, and qualification planning' },
              { phase: 'Future Pivot Planning', uses: 'Identifying next directions while still succeeding in current role' },
            ].map((item) => (
              <div key={item.phase} className="px-5 py-4 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/50">
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">{item.phase}</p>
                <p className="text-xs text-[var(--color-text-tertiary)] mt-0.5">{item.uses}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SECTION 11 — LIFETIME JOURNEY ────────────────────────────────────── */}
      <Section id="lifetime-journey">
        <div className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Section 11</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              One Career OS. Different questions.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              The central question of your career changes as you progress from exploration to
              acceleration to leadership to legacy. Career OS is designed to remain useful through
              every phase — not just the ones where you are urgently job hunting.
            </p>
          </div>
          <LifetimeJourneyVisual />
        </div>
      </Section>

      {/* ── SECTION 12 — DIFFERENT CAREERS ───────────────────────────────────── */}
      <Section id="different-careers">
        <div className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Section 12</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Career OS should work whether you wear a suit, scrubs, uniform or work boots.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Career OS is not built for one career world. The same underlying system — Career Twin,
              Mentor, Passport, Graph — is designed to apply across trades, healthcare, defence,
              law, and public safety in ways that respect the real evidence and progression
              structures of each sector.
            </p>
          </div>
          <DiverseCareersVisual />
        </div>
      </Section>

      {/* ── SECTION 13 — USER CONTROL ─────────────────────────────────────────── */}
      <Section id="user-control">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-4">
            <span className="section-label">Section 13</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Career OS works for you, not the other way around.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Career OS is a personal career tool. These core principles govern how it behaves.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: 'You can correct your context',
                body: 'Career information Career OS holds about you should be challengeable and correctable. It is your record.',
              },
              {
                title: 'You choose what to share',
                body: 'Private Career OS context does not automatically become employer-visible. You control what information is authorised for sharing.',
              },
              {
                title: 'AI recommends — it does not determine',
                body: 'The AI Career Mentor offers guidance calibrated to your context. It does not make binding decisions about your career path.',
              },
              {
                title: 'Evidence has provenance',
                body: 'Self-declared information and verified credentials are not the same. Career OS is designed to distinguish between them clearly.',
              },
              {
                title: 'Human decisions remain important',
                body: 'Employment decisions, especially hiring, involve human judgment. Career OS facilitates — it does not automate that judgment.',
              },
              {
                title: 'You can change direction',
                body: 'Career OS should not trap you inside a past recommendation. Your direction, goals, and preferences can evolve as you do.',
              },
              {
                title: 'Conversations stay private',
                body: 'What you discuss with the AI Career Mentor — including doubts, frustrations, and career plans — is not shared with employers.',
              },
            ].map((principle) => (
              <div
                key={principle.title}
                className="flex items-start gap-4 px-5 py-4 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/50"
              >
                <Shield className="w-4 h-4 text-[var(--color-brand-400)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">{principle.title}</p>
                  <p className="text-xs text-[var(--color-text-tertiary)] mt-0.5 leading-relaxed">{principle.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SECTION 14 — PRODUCT LAYERS ───────────────────────────────────────── */}
      <Section id="product-layers">
        <div className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Section 14</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Career OS is being built in layers.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Career OS is an evolving platform. We deliberately distinguish between what is
              available today, what is being actively built, and what represents our longer-term
              product direction — so you can trust what this page describes.
            </p>
          </div>
          <ProductLayersSection />
        </div>
      </Section>

      {/* ── SECTION 15 — CAREER OS IN ACTION ──────────────────────────────────── */}
      <Section id="in-action">
        <div className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Section 15 — Signature interaction</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Follow one career through Career OS.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              This 8-step walkthrough follows an illustrative Mechanical Technician through the full
              Career OS system — from initial context-building through Mentor guidance, evidence
              creation, pathway mapping, and opportunity discovery.
            </p>
          </div>
          <CareerOSInActionDemo />

          <div className="max-w-3xl pt-4">
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed italic">
              One action changed the evidence. The evidence changed the context. The context changed the possibilities.
            </p>
          </div>
        </div>
      </Section>

      {/* ── SECTION 16 — FAQ ──────────────────────────────────────────────────── */}
      <Section id="faq">
        <div className="max-w-3xl space-y-6">
          <div className="space-y-4">
            <span className="section-label">Section 16</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Frequently asked questions
            </h2>
          </div>

          <FaqItem q="What is Career OS?" a="Career OS is a career platform designed to bring AI career guidance, professional context, evidence, pathway mapping, and future opportunity discovery into one connected system. It is designed to remain useful throughout your whole working life — not just when you are urgently searching for a job." />
          <FaqItem q="Is Career OS a job board?" a="No. Career OS does not list jobs or vacancies. It is designed to help you understand your professional context, build verifiable evidence, and eventually — through Opportunity Agent — have relevant opportunities surface to you without constant manual searching." />
          <FaqItem q="Is it an AI career coach?" a={<>It includes an AI Career Mentor, but Career OS is more than a coaching chatbot. The Mentor is one component of a connected system that includes <Link href={ROUTES.PRODUCT_CAREER_TWIN} className="underline underline-offset-2 hover:text-[var(--color-text-primary)] transition-colors">Career Twin</Link>, <Link href={ROUTES.PRODUCT_CAREER_PASSPORT} className="underline underline-offset-2 hover:text-[var(--color-text-primary)] transition-colors">Career Passport</Link>, <Link href={ROUTES.PRODUCT_CAREER_GRAPH} className="underline underline-offset-2 hover:text-[var(--color-text-primary)] transition-colors">Career Graph</Link>, and future discovery capabilities.</>} />
          <FaqItem q="How does the AI Career Mentor work?" a="The AI Career Mentor is designed to use your Career Twin context to provide guidance calibrated to your specific situation — not generic advice. Mentor conversations are private and are not visible to employers. The Mentor recommends actions; it does not make binding decisions about your career." />
          <FaqItem q="What is Career Twin?" a="Career Twin is the structured context layer at the centre of Career OS. It brings together your experience, demonstrated capabilities, qualifications, development, goals, preferences, and direction. It is private to you — not a public profile or employer-visible document." />
          <FaqItem q="What is Career Passport?" a="Career Passport is your structured professional evidence record. It carries qualifications, project artifacts, verified credentials, and professional outcomes. It distinguishes between self-declared information, evidence-attached records, and formally verified credentials." />
          <FaqItem q="What is Career Graph?" a="Career Graph maps how roles, capabilities, industries and directions connect. It is designed to surface adjacent pathways that traditional job title searches would miss — showing what transfers well, where bridges are required, and where your professional foundation makes progress realistic." />
          <FaqItem q="What is Opportunity Agent?" a="Opportunity Agent is a planned future Career OS capability designed to identify relevant opportunities against your career context — without requiring you to manually search job boards. It is not a currently live operational system." />
          <FaqItem q="What is Employer Agent?" a="Employer Agent is designed to help organisations define work through capability and evidence, and discover potentially relevant candidates. It operates outside the individual's private Career OS and can only access information you have explicitly authorised for sharing." />
          <FaqItem q="Does Career OS find jobs automatically?" a="No. Career OS does not autonomously apply for roles on your behalf. Future Opportunity Agent capability is designed to surface relevant opportunities — but engagement, application, and identity disclosure are all decisions you make explicitly." />
          <FaqItem q="Does Career OS share my information with employers?" a="Not by default. Your private Career OS — including Mentor conversations, Career Twin context, salary ambitions, and career plans — is not automatically visible to employers. Information becomes eligible for sharing only when you review an opportunity and grant explicit permission." />
          <FaqItem q="Can my employer see my Mentor conversations?" a="No. Mentor conversations are private. Career OS is designed so that your current employer cannot access what you discuss in Mentor sessions — including any exploration of other career directions." />
          <FaqItem q="Is everything in Career Passport verified?" a="No. Career Passport distinguishes between self-declared information, records with evidence attached, and formally verified credentials. These are explicitly different categories. Career OS does not pretend self-declared information is the same as verified." />
          <FaqItem q="Can Career OS help me change careers?" a="Yes. Career Graph is specifically designed to map transferable capabilities across sector boundaries — identifying where existing skills travel well, which directions are realistic from your current foundation, and what bridges a transition may require." />
          <FaqItem q="Can Career OS help after I get a job?" a="Yes. Career OS is designed to continue after placement — helping with first-90-day navigation, performance development, salary preparation, leadership transition, and planning the next chapter while still succeeding in your current role." />
          <FaqItem q="Can Career OS support entrepreneurship?" a="The longer-term Career OS direction includes support for entrepreneurial pathways — founder programmes, accelerators, and commercial learning. These are future product directions and are not currently fully active." />
          <FaqItem q="Can students use Career OS?" a="Yes. Career OS is designed for people from age 16 onward. For students, it helps explore educational pathways, build early evidence, and understand how subjects connect to the real world of work." />
          <FaqItem q="Does Career OS work for trades and non-university careers?" a="Yes. Career OS is explicitly designed not to be a graduate recruitment platform. The same architecture applies across trades, healthcare, defence, public safety, law, and business — each mapped to their genuine evidence and progression frameworks." />
          <FaqItem q="Which features are currently live?" a="The AI Career Mentor, structured profile intake, Career Passport artifact logging, and editorial pathway explorers are available today. Career Twin long-term persistence, formal credential verification, and autonomous Opportunity Agent discovery are under development or represent future product direction." />
          <FaqItem q="Is Career OS free for individuals?" a="Yes. Career OS is free for individuals." />
        </div>
      </Section>

      {/* ── SECTION 17 — FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-b-0 bg-[var(--color-surface-base)]">
        <div className="container-editorial">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Start where you are.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
              Career OS is designed to grow from the career context you have today into the
              experience, evidence and possibilities you build tomorrow.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
                Start your Career OS
              </Button>
              <Button href={ROUTES.PRODUCT_AI_CAREER_MENTOR} variant="secondary" size="lg">
                Meet your AI Career Mentor <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
            <p className="text-xs text-[var(--color-text-tertiary)]">Free for individuals.</p>

            {/* Product quick links */}
            <div className="pt-6 border-t border-[var(--color-border-default)] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { label: 'Career Twin', href: ROUTES.PRODUCT_CAREER_TWIN },
                { label: 'Career Mentor', href: ROUTES.PRODUCT_AI_CAREER_MENTOR },
                { label: 'Career Passport', href: ROUTES.PRODUCT_CAREER_PASSPORT },
                { label: 'Career Graph', href: ROUTES.PRODUCT_CAREER_GRAPH },
                { label: 'Opportunity Agent', href: ROUTES.PRODUCT_OPPORTUNITY_AGENT },
                { label: 'Employer Agent', href: ROUTES.PRODUCT_EMPLOYER_AGENT },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] underline underline-offset-2 transition-colors"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
