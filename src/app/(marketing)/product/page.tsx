import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles, Shield, Cpu, Network, Compass, UserCheck, Layers, FileCheck } from 'lucide-react';
import { MEDIA_ASSETS } from '@/lib/media';
import { CareerGradientText } from '@/components/brand/CareerGradientText';
import { HoverImageCard } from '@/components/brand/HoverImageCard';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { CareerPathwayConnector } from '@/components/brand/CareerPathwayConnector';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Product Architecture | Career OS",
  description: "Explore the 8 integrated subsystems of the Career OS platform: AI Career Mentor, Career Twin, Career Passport, Career Graph, and Opportunity Agents.",
  alternates: {
    canonical: "https://career-os.com/product",
  },
};

export default function ProductOverviewPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      {/* ── 01. Hero Section ── */}
      <section className="relative min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)] overflow-hidden py-20 lg:py-0">
        {/* Background Image with Signature Editorial Charcoal Fade */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src={MEDIA_ASSETS.product.overview.src}
            alt={MEDIA_ASSETS.product.overview.alt}
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-center"
          />

          {/* Left-edge charcoal dissolve for ultra-crisp legibility */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, #222222 0%, rgba(34, 34, 34, 0.96) 38%, rgba(34, 34, 34, 0.88) 55%, rgba(34, 34, 34, 0.42) 78%, rgba(34, 34, 34, 0.18) 100%)`,
            }}
          />

          {/* Edge Dissolves */}
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
                Product Architecture &amp; Subsystems
              </span>
              <TechnicalBadge variant="blue">
                PLATFORM CORE
              </TechnicalBadge>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <h1 className="text-display-section text-[var(--color-text-primary)] leading-[1.08]">
              A comprehensive operating system for{' '}
              <CareerGradientText variant="blue">
                lifelong career development.
              </CareerGradientText>
            </h1>
          </ScrollReveal>

          <ScrollReveal delayMs={200}>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
              Career OS integrates eight foundational subsystems into one unified, privacy-first platform. Built to support people from early education through professional leadership, lateral reinvention, and international mobility.
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={300}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
                Explore Subsystems <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Link
                href={ROUTES.PRODUCT_HOW_IT_WORKS}
                className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors py-2 px-4"
              >
                <span>How the lifecycle works</span>
                <span className="text-[#2F8FFF]">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 02. Subsystems Engine Grid with Contextual Hover Reveals ── */}
      <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)] relative">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-2">
              <span className="section-label">
                The 8 Core Subsystems
              </span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Autonomous capability,{' '}
                <CareerGradientText variant="blue">
                  seamlessly connected.
                </CareerGradientText>
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Each subsystem operates with deep domain intelligence while compounding value across the entire Career OS graph.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal delayMs={50}>
              <Link href={ROUTES.PRODUCT_AI_CAREER_MENTOR} className="block h-full">
                <HoverImageCard
                  badge="AI ADVISORY"
                  badgeVariant="lilac"
                  tagline="Active Intelligence"
                  title="AI Career Mentor"
                  description="System-assigned professional guidance that maintains continuous context across goals, history, evidence, and development milestones with full provenance."
                  ctaText="Explore Mentor System"
                  imageSrc={MEDIA_ASSETS.product.aiMentorCity.src}
                  imageAlt="AI Career Mentor Architecture"
                  pattern="background"
                  pathwaySignals={['Goal Calibration', 'Socratic Inquiry', 'Evidence Verification']}
                  className="h-full"
                />
              </Link>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <Link href={ROUTES.PRODUCT_CAREER_TWIN} className="block h-full">
                <HoverImageCard
                  badge="IDENTITY MODEL"
                  badgeVariant="blue"
                  tagline="Dynamic Synthesis"
                  title="Career Twin"
                  description="A structured multi-dimensional model of your professional self — capturing verified capabilities, strengths, and work preferences with granular privacy."
                  ctaText="Explore Career Twin"
                  imageSrc={MEDIA_ASSETS.product.careerTwinHorizon.src}
                  imageAlt="Career Twin Trajectories"
                  pattern="background"
                  pathwaySignals={['Skill Vectors', 'Trajectory Adjacency', 'Market Mapping']}
                  className="h-full"
                />
              </Link>
            </ScrollReveal>

            <ScrollReveal delayMs={150}>
              <Link href={ROUTES.PRODUCT_CAREER_PASSPORT} className="block h-full">
                <HoverImageCard
                  badge="CREDENTIAL VAULT"
                  badgeVariant="gold"
                  tagline="W3C Standards"
                  title="Career Passport"
                  description="A portable, tamper-evident professional record containing verified qualifications, project artifacts, and milestones owned permanently by you."
                  ctaText="Explore Career Passport"
                  imageSrc={MEDIA_ASSETS.product.careerPassport.src}
                  imageAlt="Career Passport Evidence Vault"
                  pattern="background"
                  pathwaySignals={['Verifiable Credentials', 'Zero-Knowledge Proofs', 'Direct Export']}
                  className="h-full"
                />
              </Link>
            </ScrollReveal>

            <ScrollReveal delayMs={200}>
              <Link href={ROUTES.PRODUCT_CAREER_GRAPH} className="block h-full">
                <HoverImageCard
                  badge="TOPOLOGICAL MAP"
                  badgeVariant="blue"
                  tagline="Career Topography"
                  title="Career Graph"
                  description="A dynamic structural map of skills, industries, roles, and pathway connections that illuminates non-linear advancement trajectories."
                  ctaText="Explore Career Graph"
                  imageSrc={MEDIA_ASSETS.product.careerGraph.src}
                  imageAlt="Career Graph Topology"
                  pattern="background"
                  pathwaySignals={['Cross-Sector Nodes', 'Skill Gap Delta', 'Pathway Branching']}
                  className="h-full"
                />
              </Link>
            </ScrollReveal>

            <ScrollReveal delayMs={250}>
              <Link href={ROUTES.PRODUCT_OPPORTUNITY_AGENT} className="block h-full">
                <HoverImageCard
                  badge="AUTONOMOUS AGENT"
                  badgeVariant="blue"
                  tagline="Reverse Discovery"
                  title="Opportunity Agent"
                  description="Proactive intelligence that matches target opportunities to your verified parameters: 'Your career agent will find you.'"
                  ctaText="Explore Opportunity Agent"
                  imageSrc={MEDIA_ASSETS.product.opportunityAgent.src}
                  imageAlt="Opportunity Discovery Horizon"
                  pattern="background"
                  pathwaySignals={['Reverse Search', 'Candidate Dignity', 'Direct Alignment']}
                  className="h-full"
                />
              </Link>
            </ScrollReveal>

            <ScrollReveal delayMs={300}>
              <Link href={ROUTES.PRODUCT_EMPLOYER_AGENT} className="block h-full">
                <HoverImageCard
                  badge="TALENT INTELLIGENCE"
                  badgeVariant="default"
                  tagline="Explainable Match"
                  title="Employer Agent"
                  description="Ethical talent discovery and explainable candidate-role matching for employers, anchored in human oversight and candidate dignity."
                  ctaText="Explore Employer Agent"
                  imageSrc={MEDIA_ASSETS.product.employerAgent.src}
                  imageAlt="Employer Talent Match"
                  pattern="background"
                  pathwaySignals={['Evidence-Based Fit', 'No Keyword Filtering', 'Fairness Audits']}
                  className="h-full"
                />
              </Link>
            </ScrollReveal>

            <ScrollReveal delayMs={350}>
              <Link href={ROUTES.PRODUCT_HOW_IT_WORKS} className="block h-full md:col-span-2 lg:col-span-3">
                <HoverImageCard
                  badge="SYSTEM LIFECYCLE"
                  badgeVariant="blue"
                  tagline="End-to-End Walkthrough"
                  title="How It Works — The Complete Operating Cycle"
                  description="From initial capability discovery and Socratic mentor sessions to verified credential minting and automated opportunity matching."
                  ctaText="Read End-to-End Walkthrough"
                  imageSrc={MEDIA_ASSETS.product.howItWorks.src}
                  imageAlt="Career OS Innovation Atrium"
                  pattern="side"
                  pathwaySignals={['Discover', 'Synthesize', 'Verify', 'Advance', 'Reinvent']}
                  className="h-full"
                />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 03. Architectural Integrity & Pillars ── */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)] relative overflow-hidden">
        <CareerPathwayConnector variant="cross-section" className="opacity-15" />

        <div className="container-editorial relative z-10 space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-3">
              <span className="section-label">
                Architectural Integrity
              </span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Engineered as infrastructure,{' '}
                <CareerGradientText variant="blue">
                  not disposable software.
                </CareerGradientText>
              </h2>
              <p className="text-body-editorial text-[var(--color-text-secondary)]">
                Every component of Career OS adheres to strict principles of data sovereignty, explainability, and multi-tenancy.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delayMs={100}>
              <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3 h-full">
                <div className="flex items-center justify-between">
                  <span className="section-label text-[10px] text-[#2F8FFF]">Pillar 01</span>
                  <Shield className="w-4 h-4 text-[#2F8FFF]" />
                </div>
                <h4 className="font-semibold text-base text-[var(--color-text-primary)]">
                  Permanent Data Portability
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Your Career Passport and Twin remain your property across educational transitions, corporate reorganisations, and international relocations.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={200}>
              <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3 h-full">
                <div className="flex items-center justify-between">
                  <span className="section-label text-[10px] text-[#CDBBD2]">Pillar 02</span>
                  <Cpu className="w-4 h-4 text-[#CDBBD2]" />
                </div>
                <h4 className="font-semibold text-base text-[var(--color-text-primary)]">
                  Model-Agnostic AI Execution
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Our AI layer is built on open provider abstractions, ensuring task-specific routing, rigorous safety policies, and zero vendor lock-in.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={300}>
              <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3 h-full">
                <div className="flex items-center justify-between">
                  <span className="section-label text-[10px] text-[#34D399]">Pillar 03</span>
                  <Layers className="w-4 h-4 text-[#34D399]" />
                </div>
                <h4 className="font-semibold text-base text-[var(--color-text-primary)]">
                  Multi-Tenant Isolation
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Schools, employers, and individuals operate within cryptographically enforced Row-Level Security boundaries.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 04. Call to Action ── */}
      <section className="section-editorial bg-[var(--background-dark-deep)] text-[var(--color-text-primary)] border-t border-[var(--color-border-default)]">
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-normal text-white tracking-tight">
              Get started with Career OS
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Create your free account today and start building your lifetime professional record.
            </p>
          </div>
          <Button href={ROUTES.SIGNUP} variant="primary" size="lg" className="shrink-0">
            Start Your Career <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
