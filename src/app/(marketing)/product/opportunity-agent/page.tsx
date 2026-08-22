import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import {
  ArrowRight,
  Shield,
  Eye,
  Compass,
  GitBranch,
  AlertCircle,
  Users,
  BookOpen,
  Globe,
  Rocket,
  ChevronDown,
} from 'lucide-react';

import { HeroOpportunityFlow } from '@/components/marketing/opportunity-agent/HeroOpportunityFlow';
import { SearchVsContinuousVisual } from '@/components/marketing/opportunity-agent/SearchVsContinuousVisual';
import { InteractiveOpportunityDemo } from '@/components/marketing/opportunity-agent/InteractiveOpportunityDemo';
import { OpportunityTypesVisual } from '@/components/marketing/opportunity-agent/OpportunityTypesVisual';
import { PrivacyRevealFlow } from '@/components/marketing/opportunity-agent/PrivacyRevealFlow';
import { AgentArchitectureVisual } from '@/components/marketing/opportunity-agent/AgentArchitectureVisual';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Opportunity Agent for Skills-Based Career Discovery',
  description:
    'Discover the Opportunity Agent vision from Career OS — designed to connect your skills, evidence and career direction with relevant jobs, development and future opportunities.',
  alternates: {
    canonical: 'https://career-os.com/product/opportunity-agent',
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
          name: 'Opportunity Agent',
          item: 'https://career-os.com/product/opportunity-agent',
        },
      ],
    }),
  },
};

// ─── Shared section container ─────────────────────────────────────────────────
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

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
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
import { CareerPathwayConnector } from '@/components/brand/CareerPathwayConnector';
import { CareerGradientText } from '@/components/brand/CareerGradientText';

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function OpportunityAgentPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">

      {/* ── SECTION 01 — HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--color-surface-base)] py-20 lg:py-0">
        {/* Modern Observatory Horizon Background Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src={MEDIA_ASSETS.product.opportunityAgent.src}
            alt={MEDIA_ASSETS.product.opportunityAgent.alt}
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
              background: `linear-gradient(to right, var(--color-surface-base) 0%, color-mix(in srgb, var(--color-surface-base) 96%, transparent) 38%, color-mix(in srgb, var(--color-surface-base) 88%, transparent) 55%, color-mix(in srgb, var(--color-surface-base) 42%, transparent) 78%, color-mix(in srgb, var(--color-surface-base) 18%, transparent) 100%)`,
            }}
          />

          {/* Top Edge Dissolve */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-28 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, var(--color-surface-base) 0%, transparent 100%)`,
            }}
          />

          {/* Bottom Edge Dissolve */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
            style={{
              background: `linear-gradient(to top, var(--color-surface-base) 0%, transparent 100%)`,
            }}
          />
        </div>

        <CareerPathwayConnector variant="branching" className="opacity-20" />

        <div className="container-editorial relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — copy */}
            <div className="space-y-7">
              <div className="flex items-center gap-3">
                <span className="section-label flex items-center gap-2">
                  <span className="accent-blue-dot accent-blue-dot-pulse" />
                  Core Subsystem &bull; Opportunity Agent
                </span>
              </div>
              <h1 className="text-display-hero font-serif font-normal tracking-tight text-[var(--color-text-primary)]">
                What if the right opportunity{' '}
                <CareerGradientText variant="blue">
                  found you first?
                </CareerGradientText>
              </h1>
              <p className="text-display-sub font-serif font-normal text-[var(--color-text-secondary)] leading-relaxed">
                Your career agent will find you.
              </p>
              <p className="text-base text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
                Opportunity Agent is the Career OS direction for discovering roles, development and
                career moves against the professional context you have already built — without
                requiring you to start every search from zero.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button href="#opportunity-demo" variant="primary" size="lg">
                  See how Opportunity Agent could work ↓
                </Button>
                <Button href={ROUTES.SIGNUP} variant="secondary" size="lg">
                  Start your Career OS
                </Button>
              </div>
              <p className="text-xs text-[var(--color-text-tertiary)]">Free for individuals.</p>
            </div>

            {/* Right — hero visual */}
            <div className="w-full">
              <HeroOpportunityFlow />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02 — THE PROBLEM WITH SEARCH ────────────────────────────── */}
      <Section id="search-problem">
        <div className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Section 02</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Job search starts too late.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Most people only begin serious career exploration when something forces it — redundancy,
              frustration, a contract ending, a promotion blocked. Then they open a job board, enter a
              job title, and start from nothing.
            </p>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              This search often misses adjacent careers they were never prompted to consider, internal
              opportunities that could have opened earlier, development pathways worth building toward,
              and emerging roles that do not match any familiar title. Career OS is being designed around
              a different model — one where relevant opportunities can be understood continuously rather
              than only when you urgently need to find one.
            </p>
            <blockquote className="border-l-4 border-[var(--color-brand-500)] pl-6 py-2 my-6">
              <p className="text-lg font-serif text-[var(--color-text-primary)] leading-relaxed">
                The best time to understand your next opportunity is before you urgently need one.
              </p>
            </blockquote>
          </div>
          <SearchVsContinuousVisual />
        </div>
      </Section>

      {/* ── SECTION 03 — WHAT MAKES AN OPPORTUNITY RELEVANT ─────────────────── */}
      <Section id="relevance">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <span className="section-label">Section 03</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Relevance should mean more than matching a job title.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Searching by job title starts with the answer and works backward. Career OS is designed
              to start with your context — what you know, what you have demonstrated, where you want to
              go — and use that to identify what might actually be relevant to you specifically.
            </p>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              The conceptual matching dimensions Career OS is building toward include not just obvious
              skills, but demonstrated evidence, stated direction, current development, practical
              constraints, and bridge requirements — what is still missing between where you are and
              where an opportunity sits.
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              These are product concepts illustrating future direction. Career OS does not currently
              operate a quantitative matching algorithm.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { label: 'Capability', note: 'Relevant skills and experience from your work history' },
              { label: 'Evidence', note: 'What your Career Passport demonstrates and supports' },
              { label: 'Direction', note: 'Where you have stated you want to go' },
              { label: 'Development', note: 'Capabilities you are currently building' },
              { label: 'Work preferences', note: 'Location, environment, type of work' },
              { label: 'Practical constraints', note: 'Where you choose to share them with Career OS' },
              { label: 'Bridge requirements', note: 'What may still be needed for a connection to work' },
              {
                label: 'Opportunity characteristics',
                note: 'Role environment, progression offered, stated requirements',
              },
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

      {/* ── SECTION 04 — INTERACTIVE DEMO ───────────────────────────────────── */}
      <Section id="opportunity-demo">
        <div className="space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Section 04 — Interactive demonstration</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              See why an opportunity might surface.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Select an illustrative professional profile below to see how Career OS might evaluate
              which opportunities are relevant — and the reasoning behind each one.
            </p>
          </div>
          <InteractiveOpportunityDemo />
        </div>
      </Section>

      {/* ── SECTION 05 — BEYOND JOBS ─────────────────────────────────────────── */}
      <Section id="beyond-jobs">
        <div className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Section 05</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              The next useful opportunity isn't always a vacancy.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Career OS is a career operating system, not a vacancy board. Opportunity Agent is being
              designed to surface relevant opportunities across a much wider range than job listings
              alone — because a qualification, a project, a secondment, or a mentorship might be the
              more useful next step for where you actually are.
            </p>
          </div>
          <OpportunityTypesVisual />
        </div>
      </Section>

      {/* ── SECTION 06 — CAREER CHANGE ──────────────────────────────────────── */}
      <Section id="career-change">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <span className="section-label">Section 06</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Search for what you can become, not only what you are called today.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              When a career changer searches by job title, the results reflect who they used to be.
              A Military Logistics Specialist searching for leadership roles may only surface military
              or logistics titles. The broader capabilities they carry — resource coordination, pressure
              performance, multi-agency operation, crisis planning — may not appear in any title they
              have held.
            </p>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Career OS, using{' '}
              <Link href={ROUTES.PRODUCT_CAREER_GRAPH} className="underline underline-offset-2 hover:text-[var(--color-text-primary)] transition-colors">
                Career Graph
              </Link>{' '}
              relationships, is being designed to surface roles outside the original title vocabulary —
              identifying where existing capabilities overlap with positions the person may never have
              thought to search for. Bridge requirements are always included: suitability is not
              implied, only potential relevance.
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              Career OS does not guarantee suitability for any role. Bridge requirements reflect
              what may still be needed between a person's current profile and a target destination.
            </p>
          </div>

          {/* Illustrative example */}
          <div className="rounded-[var(--radius-card)] border border-[var(--color-border-default)] overflow-hidden">
            <div className="px-6 py-4 bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)]">
                Illustrative career-change example
              </span>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)]">
                  Current title
                </span>
                <p className="text-lg font-bold text-[var(--color-text-primary)] mt-1">
                  Military Logistics Specialist
                </p>
              </div>
              <div className="h-px bg-[var(--color-border-default)]" />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400">
                  Traditional title-based search may surface
                </span>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {['Military Logistics Manager', 'Supply Chain Officer', 'Defense Procurement'].map(
                    (t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded border border-[var(--color-border-default)] text-[var(--color-text-tertiary)]"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className="h-px bg-[var(--color-border-default)]" />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-brand-400)]">
                  Career OS direction — capability-based connections
                </span>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[
                    'Operations Manager',
                    'Supply Chain Coordinator',
                    'Emergency Planning Advisor',
                    'Project Management',
                    'Facilities Operations',
                  ].map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded border border-[var(--color-brand-600)]/40 bg-[var(--color-brand-950)]/30 text-[var(--color-brand-300)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-[10px] text-[var(--color-text-tertiary)] pt-1">
                Connections reflect capability overlap, not guaranteed suitability.
                Bridge requirements apply in each case.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── SECTION 07 — PASSIVE DISCOVERY ──────────────────────────────────── */}
      <Section id="passive-discovery">
        <div className="max-w-3xl space-y-6">
          <span className="section-label">Section 07</span>
          <h2 className="text-display-md font-serif font-normal tracking-tight">
            You shouldn't have to be actively job hunting to understand your market.
          </h2>
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
            A professional may be satisfied in their current role, not applying anywhere, not looking —
            but still genuinely interested in understanding whether an unusually good opportunity
            exists. Perhaps something senior, international, entrepreneurial, or that offers markedly
            better development. Career OS is being designed so that it does not require urgency to be
            useful.
          </p>
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
            The intended future architecture includes an opportunity posture — a user-controlled
            setting that communicates how open they are to discovery, without creating a broadcast
            signal to employers or recruiter networks.
          </p>

          {/* Posture concepts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { label: 'Not looking', note: 'No discovery active' },
              { label: 'Open to exceptional opportunities', note: 'Highly selective discovery' },
              { label: 'Exploring', note: 'Broader discovery enabled' },
              { label: 'Actively looking', note: 'Full discovery active' },
              { label: 'Career change', note: 'Direction-shift exploration' },
            ].map((p) => (
              <div
                key={p.label}
                className="px-4 py-3 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/50 space-y-0.5"
              >
                <p className="text-xs font-semibold text-[var(--color-text-primary)]">{p.label}</p>
                <p className="text-[10px] text-[var(--color-text-tertiary)]">{p.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--color-text-tertiary)]">
            These posture concepts are illustrative product direction. They are not currently
            implemented within Career OS as live database states.
          </p>

          {/* Privacy callout */}
          <div className="border-l-4 border-[var(--color-brand-500)] pl-6 py-3 bg-[var(--color-surface-raised)]/40 rounded-r">
            <div className="flex items-start gap-2">
              <Shield className="w-4 h-4 text-[var(--color-brand-400)] flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  Being open to opportunity does not mean making your career plans public.
                </p>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Your current employer should not automatically be notified simply because you are
                  exploring another path. Career OS is being designed so that discovery is kept private
                  until you choose to proceed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── SECTION 08 — PRIVATE UNTIL YOU DECIDE ───────────────────────────── */}
      <Section id="privacy">
        <div className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Section 08</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Relevance first. Identity when you choose.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              One of the most important architectural decisions in Career OS is the separation of
              opportunity relevance from identity disclosure. Career OS should be able to evaluate
              whether an opportunity is worth your attention without automatically exposing who you are,
              what you earn, where you currently work, or what you privately intend.
            </p>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Private Mentor conversations, salary ambitions, career-change plans, and personal
              uncertainties should not be included in any employer-facing profile without your
              explicit authorization. This is a trust proposition, not just a feature.
            </p>
          </div>
          <PrivacyRevealFlow />
        </div>
      </Section>

      {/* ── SECTION 09 — AGENT ARCHITECTURE ─────────────────────────────────── */}
      <Section id="agent-architecture">
        <div className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">Section 09</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Two agents. Human decisions on both sides.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Career OS is designed around a two-sided architecture. Opportunity Agent works on behalf
              of the individual. Employer Agent — currently in development — would work on behalf of
              organizations. Both agents can potentially identify meaningful overlap. Neither makes a
              final decision on behalf of the person or the employer.
            </p>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              This is agent-mediated discovery, not automated recruitment. The person decides whether
              to engage. The employer decides whether to progress. Career OS facilitates the introduction
              — it does not replace either judgment.
            </p>
          </div>
          <AgentArchitectureVisual />
          <p className="text-xs text-[var(--color-text-tertiary)] max-w-2xl">
            Learn more about the employer side:{' '}
            <Link href={ROUTES.PRODUCT_EMPLOYER_AGENT} className="underline underline-offset-2 hover:text-[var(--color-text-secondary)] transition-colors">
              Employer Agent →
            </Link>
          </p>
        </div>
      </Section>

      {/* ── SECTION 10 — OPPORTUNITY EXPLANATION ─────────────────────────────── */}
      <Section id="opportunity-explanation">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <span className="section-label">Section 10</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Every opportunity should come with an explanation.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              A percentage score tells you very little. It does not explain what connects, what is
              missing, what Career OS does not yet know, or whether the bridge is realistic within your
              timeframe. Career OS is designed around qualitative explanation rather than numeric
              confidence.
            </p>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              When Career OS surfaces an opportunity, it should be able to articulate: what from your
              background is relevant, what you have stated about your direction, what may still be
              required, and what it does not yet have enough information to assess.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="px-4 py-2 rounded border border-[var(--color-border-strong)] bg-[var(--color-surface-raised)]">
                <p className="text-xs text-[var(--color-text-tertiary)] line-through">89% match</p>
                <p className="text-[10px] text-[var(--color-text-tertiary)] mt-0.5">not this</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--color-text-tertiary)]" />
              <div className="px-4 py-2 rounded border border-[var(--color-brand-600)]/40 bg-[var(--color-brand-950)]/30">
                <p className="text-xs text-[var(--color-brand-300)]">Strong existing overlap</p>
                <p className="text-[10px] text-[var(--color-text-tertiary)] mt-0.5">with clear rationale</p>
              </div>
            </div>
          </div>

          {/* Illustrative opportunity explanation */}
          <div className="rounded-[var(--radius-card)] border border-[var(--color-border-default)] overflow-hidden">
            <div className="px-6 py-4 bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)]">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)]">
                Illustrative opportunity explanation
              </span>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <h3 className="text-base font-bold text-[var(--color-text-primary)]">
                  Emergency Planning Manager
                </h3>
                <p className="text-xs text-[var(--color-text-tertiary)] mt-0.5">
                  Civic Resilience Partnership · Illustrative opportunity
                </p>
                <span className="inline-block mt-2 text-[10px] font-medium px-2.5 py-0.5 rounded border border-[var(--color-brand-600)]/40 bg-[var(--color-brand-950)]/30 text-[var(--color-brand-300)]">
                  Adjacent career direction
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[var(--color-brand-400)]">
                  Existing experience
                </span>
                {['Incident coordination and multi-agency operation', 'Risk management and contingency planning', 'Leadership under operational pressure'].map((i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-brand-400)] flex-shrink-0" />
                    <span className="text-xs text-[var(--color-text-secondary)]">{i}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-mono uppercase tracking-wider text-amber-400">
                  Bridge
                </span>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  Formal emergency planning or civil resilience experience may be required.
                  Civil Contingencies Act familiarity typically expected.
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)]">
                  What Career OS doesn't yet know
                </span>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  Employer-specific qualification requirements and whether previous sector
                  experience is essential or beneficial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── SECTION 11 — STUDENTS & EARLY CAREERS ───────────────────────────── */}
      <Section id="students">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <span className="section-label">Section 11</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              Opportunity discovery should start before the first full-time job.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              For students and early-career individuals, Opportunity Agent may eventually surface work
              experience, internships, apprenticeships, employer programs, relevant competitions,
              and industry events — before a resume is needed, and before a career direction is fixed.
            </p>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Age safeguards remain consistent with Career OS policy. Under-18 interactions with
              employers require appropriate controls. Career OS does not enable unrestricted
              recruiter-to-minor contact.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <Link href={ROUTES.SCHOOLS_STUDENT_SAFETY} className="text-xs underline underline-offset-2 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors">
                Student Safeguarding →
              </Link>
              <Link href={ROUTES.REGULATORY_STUDENT_PRIVACY} className="text-xs underline underline-offset-2 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors">
                Student Privacy →
              </Link>
              <Link href={ROUTES.STANDARDS_OPPORTUNITY_STANDARDS} className="text-xs underline underline-offset-2 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors">
                Opportunity Standards →
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { icon: '🌱', label: 'Work experience', note: 'Early evidence-building in a relevant environment' },
              { icon: '📋', label: 'Internships', note: 'Structured experience with a defined scope and outcome' },
              { icon: '🎓', label: 'Apprenticeships', note: 'Entry into a new sector with formal training and employment' },
              { icon: '🏢', label: 'Employer programs', note: 'Graduate schemes, insight days, and early talent pipelines' },
              { icon: '⚡', label: 'Competitions & projects', note: 'Evidence-building through external challenge or contribution' },
              { icon: '📚', label: 'Education routes', note: 'Pathways and qualifications relevant to stated direction' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 px-4 py-3 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/50">
                <span className="text-base mt-0.5">{item.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">{item.label}</p>
                  <p className="text-xs text-[var(--color-text-tertiary)]">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SECTION 12 — PROFESSIONAL DEVELOPMENT ───────────────────────────── */}
      <Section id="professional-development">
        <div className="max-w-3xl space-y-6">
          <span className="section-label">Section 12</span>
          <h2 className="text-display-md font-serif font-normal tracking-tight">
            Sometimes the best opportunity is inside the job you already have.
          </h2>
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
            Career OS is not a job-switching platform. Opportunity Agent is being designed to
            consider the full range of meaningful next steps — including internal projects, stretch
            assignments, leadership responsibility, secondments, internal mobility, training, and
            mentorship.
          </p>
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
            For many people, the most useful career opportunity at a given point is not a new
            employer, but a better-understood role within their current one, or evidence they can
            build without moving.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {['Internal mobility', 'Stretch assignments', 'Leadership track', 'Secondment', 'Mentorship', 'Training pathway'].map(
              (item) => (
                <div key={item} className="px-4 py-3 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/50 text-center">
                  <p className="text-xs font-medium text-[var(--color-text-secondary)]">{item}</p>
                </div>
              )
            )}
          </div>
        </div>
      </Section>

      {/* ── SECTION 13 — ENTREPRENEURSHIP ───────────────────────────────────── */}
      <Section id="entrepreneurship">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <span className="section-label">Section 13</span>
            <h2 className="text-display-md font-serif font-normal tracking-tight">
              An opportunity can also be the moment to build something yourself.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Career OS is designed to support the full range of career directions — including
              entrepreneurship. The longer-term Opportunity Agent direction includes the potential to
              surface founder programs, accelerators, commercial training, relevant professional
              networks, and business resources relevant to a person's stated interests and context.
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              Entrepreneurship opportunity feeds are a future product direction and are not
              currently active within Career OS.
            </p>
            <Link href={ROUTES.PATHWAYS_ENTREPRENEURSHIP} className="text-sm underline underline-offset-2 text-[var(--color-brand-400)] hover:text-[var(--color-brand-300)] transition-colors">
              Explore Entrepreneurship pathways →
            </Link>
          </div>
          <div className="space-y-3">
            {[
              { label: 'Founder programs', note: 'Structured support for early-stage company building' },
              { label: 'Accelerators', note: 'Intensive development programs for founders' },
              { label: 'Commercial training', note: 'Skills relevant to running a business' },
              { label: 'Professional networks', note: 'Connections relevant to a target sector or idea' },
              { label: 'Grants & support', note: 'Funding and support relevant to stage and sector' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 px-4 py-3 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/50">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-400)] flex-shrink-0 mt-1.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">{item.label}</p>
                  <p className="text-xs text-[var(--color-text-tertiary)]">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SECTION 14 — INTERNATIONAL ──────────────────────────────────────── */}
      <Section id="international">
        <div className="max-w-3xl space-y-6">
          <span className="section-label">Section 14</span>
          <h2 className="text-display-md font-serif font-normal tracking-tight">
            Careers increasingly cross borders. Eligibility still matters.
          </h2>
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
            Career OS is designed to recognize that international opportunities exist and are relevant
            to many users. The longer-term Opportunity Agent direction includes the ability to surface
            opportunities in other jurisdictions — with appropriate awareness of factors including
            work authorization, professional licensing, qualification recognition, language, and
            relocation requirements.
          </p>
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
            Career OS does not provide immigration or legal advice. Opportunity Agent should
            eventually distinguish between an opportunity that is interesting and one that a person
            is actually eligible to pursue. These are not the same thing.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {['Work authorization', 'Professional licensing', 'Qualification recognition', 'Language requirements', 'Relocation', 'Visa / sponsorship'].map(
              (item) => (
                <div key={item} className="px-4 py-3 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/50 text-center">
                  <p className="text-xs font-medium text-[var(--color-text-secondary)]">{item}</p>
                </div>
              )
            )}
          </div>
          <p className="text-xs text-[var(--color-text-tertiary)]">
            International opportunity discovery is a future direction. Career OS does not currently
            provide cross-border opportunity matching or immigration guidance of any kind.
          </p>
        </div>
      </Section>

      {/* ── SECTION 15 — WHAT OA WILL NOT DO ────────────────────────────────── */}
      <Section id="boundaries">
        <div className="max-w-3xl space-y-6">
          <span className="section-label">Section 15</span>
          <h2 className="text-display-md font-serif font-normal tracking-tight">
            Opportunity discovery still needs boundaries.
          </h2>
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
            Career OS is committed to being useful without being unsafe. Opportunity Agent should not
            — and will not — operate in ways that erode trust, remove human control, or create
            misleading expectations.
          </p>
          <div className="space-y-2">
            {[
              'Guarantee job offers or outcomes',
              'Automatically apply for roles without your explicit authority',
              'Disclose your identity to employers without your permission',
              'Fabricate qualifications or misrepresent your experience',
              'Claim eligibility for regulated roles without verified evidence',
              'Make final hiring decisions on behalf of employers',
              'Encourage you to misrepresent your experience or credentials',
              'Guarantee salary, progression, or employer response',
              'Secretly alert your current employer that you are exploring other paths',
              'Sell your private career plans to advertisers or data brokers',
              'Present illustrative examples as live vacancies',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 px-4 py-3 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/50">
                <AlertCircle className="w-4 h-4 text-[var(--color-text-tertiary)] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--color-text-secondary)]">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--color-text-tertiary)]">
            Career OS cannot know every employer's internal hiring criteria, culture expectations, or
            unstated requirements. Surfacing an opportunity indicates potential relevance — not
            guaranteed suitability.
          </p>
        </div>
      </Section>

      {/* ── SECTION 16 — FAQ ─────────────────────────────────────────────────── */}
      <Section id="faq">
        <div className="max-w-3xl space-y-6">
          <span className="section-label">Section 16</span>
          <h2 className="text-display-md font-serif font-normal tracking-tight">
            Frequently asked questions
          </h2>

          <FaqItem
            q="What is Opportunity Agent?"
            a="Opportunity Agent is a planned Career OS capability designed to identify relevant opportunities — employment, development, and career moves — against the professional context a user has already built, and surface them without requiring constant manual searching."
          />
          <FaqItem
            q="Is Opportunity Agent live today?"
            a="No. Opportunity Agent is a designed product direction, not a currently operational feature. Career OS does not yet run a live opportunity-matching engine or employer network. This page explains the intended architecture and product vision."
          />
          <FaqItem
            q="Is this the same as a job board?"
            a="No. A job board requires you to search. Opportunity Agent is designed to evaluate relevant opportunities against your context and bring them to you. It is also designed to cover opportunity types beyond employment — including development, training, secondments, mentorship, and entrepreneurship pathways."
          />
          <FaqItem
            q="Will I still be able to search manually?"
            a="Yes. Career OS will support manual exploration alongside any future discovery capability. Opportunity Agent is designed to complement your own initiative, not replace it."
          />
          <FaqItem
            q="Does Career OS automatically apply for jobs?"
            a="No. Career OS does not automatically apply for any role. Application, introduction, and engagement decisions remain entirely with you."
          />
          <FaqItem
            q="Can employers see that I'm looking?"
            a="The Opportunity Agent architecture is designed so that being open to discovery does not automatically signal your availability to employers. Identity disclosure is intended to be controlled by you."
          />
          <FaqItem
            q="Can my current employer see my career plans?"
            a="Career OS is designed so that your Mentor conversations, career direction, salary ambitions, and career-change plans are not automatically shared with your current employer. This is a core trust and privacy commitment."
          />
          <FaqItem
            q="What information would an employer receive?"
            a="In the designed future architecture, employers would receive only information you have authorized for sharing — agreed professional evidence and identity, not your full Career Twin or private context."
          />
          <FaqItem
            q="How will Career OS decide what's relevant?"
            a="Opportunity Agent is designed around qualitative contextual matching — capability overlap, evidence, stated direction, bridge requirements, and work preferences. Career OS does not use or plan to use percentage match scores or automated ranking numbers."
          />
          <FaqItem
            q="Does it use Career Twin?"
            a={
              <>
                Yes. <Link href={ROUTES.PRODUCT_CAREER_TWIN} className="underline underline-offset-2 hover:text-[var(--color-text-primary)] transition-colors">Career Twin</Link> is the personal professional context layer that Opportunity Agent would evaluate against. It represents your capabilities, experience, and direction.
              </>
            }
          />
          <FaqItem
            q="Does it use Career Passport?"
            a={
              <>
                Yes. <Link href={ROUTES.PRODUCT_CAREER_PASSPORT} className="underline underline-offset-2 hover:text-[var(--color-text-primary)] transition-colors">Career Passport</Link> provides the verified evidence layer — what you can actually demonstrate, not just claim. Opportunity Agent is designed to distinguish between stated experience and evidenced capability.
              </>
            }
          />
          <FaqItem
            q="How does Career Graph affect opportunities?"
            a={
              <>
                <Link href={ROUTES.PRODUCT_CAREER_GRAPH} className="underline underline-offset-2 hover:text-[var(--color-text-primary)] transition-colors">Career Graph</Link> maps how roles, capabilities, industries, and directions connect — including connections that do not follow obvious title paths. Opportunity Agent is designed to use those relationships to surface opportunities outside a user's current title vocabulary.
              </>
            }
          />
          <FaqItem
            q="Can it find opportunities outside my current job title?"
            a="Yes — that is one of its core design objectives. By evaluating capability rather than job title, Opportunity Agent aims to surface roles a person may never have searched for but which align with their transferable skills and stated direction."
          />
          <FaqItem
            q="Does it work for students?"
            a="Yes, the intended student-facing Opportunity Agent direction includes work experience, internships, apprenticeships, employer programs, and education routes. Under-18 interactions with employers are subject to appropriate safeguarding controls."
          />
          <FaqItem
            q="Can it surface apprenticeships?"
            a="Yes. Apprenticeships are a supported opportunity type in the Opportunity Agent architecture — both for early careers and for career changers moving into a new sector."
          />
          <FaqItem
            q="Can it help with internal progression?"
            a="Yes. Opportunity Agent is designed to consider internal opportunities — including secondments, internal mobility, stretch assignments, and leadership development — not only external vacancies."
          />
          <FaqItem
            q="Can it support international careers?"
            a="International opportunity discovery is a future direction. Where opportunities in other jurisdictions are surfaced, the relevant eligibility factors — work authorization, professional licensing, qualification recognition — are intended to be clearly indicated. Career OS does not provide immigration or legal advice."
          />
          <FaqItem
            q="Can it support entrepreneurship?"
            a="The longer-term Opportunity Agent direction includes founder programs, accelerators, and commercial learning relevant to entrepreneurship. These are not currently active."
          />
          <FaqItem
            q="Does it guarantee I am qualified for a role?"
            a="No. Opportunity Agent surfaces potential relevance based on the context Career OS has available. It explicitly indicates bridge requirements — what may still be needed — and identifies what it does not yet know. Suitability for any role is ultimately determined between you and the employer."
          />
          <FaqItem
            q="Is Career OS free for individuals?"
            a="Yes. Career OS is free for individuals. Building your Career Twin, Career Passport, and career context does not require payment."
          />
        </div>
      </Section>

      {/* ── SECTION 17 — FINAL CTA ───────────────────────────────────────────── */}
      <Section className="border-b-0">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-display-md font-serif font-normal tracking-tight">
            Build your career before you need to search for the next one.
          </h2>
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
            Career OS is being designed so your context, evidence and direction can eventually help
            relevant opportunities find their way to you — without requiring you to start from zero
            each time.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
              Start your Career OS
            </Button>
            <Button href={ROUTES.PRODUCT_CAREER_GRAPH} variant="secondary" size="lg">
              Explore Career Graph <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
          <p className="text-xs text-[var(--color-text-tertiary)]">Free for individuals.</p>

          {/* Ecosystem quick links */}
          <div className="pt-6 border-t border-[var(--color-border-default)] grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Career Twin', href: ROUTES.PRODUCT_CAREER_TWIN },
              { label: 'Career Passport', href: ROUTES.PRODUCT_CAREER_PASSPORT },
              { label: 'AI Career Mentor', href: ROUTES.PRODUCT_AI_CAREER_MENTOR },
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
      </Section>
    </div>
  );
}
