import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { ArrowRight, BookOpen, Compass, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { CareerGradientText } from '@/components/brand/CareerGradientText';
import { HoverImageCard } from '@/components/brand/HoverImageCard';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { CareerPathwayConnector } from '@/components/brand/CareerPathwayConnector';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Career Intelligence & Open Frameworks | Career OS",
  description: "In-depth guides, occupational research, skill taxonomies, and governance standards developed by Career OS researchers and partner institutions.",
  alternates: {
    canonical: "https://career-os.com/resources",
  },
};

export default function ResourcesPage() {
  const resources = [
    {
      title: 'Career Intelligence Cloud',
      category: 'Intelligence',
      badgeVariant: 'blue' as const,
      description: 'Comprehensive research on emerging occupational clusters, shifting skill demands, automation impacts, and regional wage benchmarks.',
      imageSrc: '/media/product/career_graph_hero.jpg',
      signals: ['Labour Market Signals', 'Regional Benchmarks', 'Automation Index'],
      href: ROUTES.RESOURCES_CAREERS,
    },
    {
      title: 'Skills Ontologies & Taxonomies',
      category: 'Frameworks',
      badgeVariant: 'lilac' as const,
      description: 'Structured mapping of over 12,000 discrete technical and human competencies cross-referenced against global qualification standards.',
      imageSrc: '/media/product/how_it_works_hero.jpg',
      signals: ['O*NET Alignment', 'Capability Graph', 'Modular Competency'],
      href: ROUTES.RESOURCES_SKILLS,
    },
    {
      title: 'Industry Pathways & Transition Guides',
      category: 'Playbooks',
      badgeVariant: 'gold' as const,
      description: 'Step-by-step technical transition guides for common lateral pivots, including software engineering, green energy, biomedical trades, and healthcare.',
      imageSrc: '/media/professionals/professional_hero_intersection.jpg',
      signals: ['Cross-Sector Bridges', 'Reskilling Sprints', 'Portfolio Requirements'],
      href: ROUTES.RESOURCES_GUIDES,
    },
    {
      title: 'Ethical AI in Employment Standards',
      category: 'Governance',
      badgeVariant: 'default' as const,
      description: 'Our published technical standards on candidate respect, algorithm bias mitigation, and human-in-the-loop hiring governance.',
      imageSrc: '/media/schools/school_privacy_architecture_hero.jpg',
      signals: ['ISO/IEC 42001', 'NIST AI RMF', 'Human-in-the-Loop'],
      href: ROUTES.TRUST_RESPONSIBLE_AI,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      {/* ── 01. Hero Section ── */}
      <section className="relative min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--color-surface-base)] py-20 lg:py-0">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/media/hero/city_horizon_hero.jpg"
            alt="Panoramic city horizon representing open knowledge and intelligence"
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
                Knowledge &amp; Frameworks
              </span>
              <TechnicalBadge variant="blue">
                OPEN RESEARCH
              </TechnicalBadge>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <h1 className="text-display-hero font-serif font-normal tracking-tight text-[var(--color-text-primary)] leading-[1.08]">
              Career Intelligence &amp;{' '}
              <CareerGradientText variant="blue">
                Open Frameworks.
              </CareerGradientText>
            </h1>
          </ScrollReveal>

          <ScrollReveal delayMs={200}>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              In-depth guides, occupational research, skill taxonomies, and governance standards developed by Career OS researchers and partner institutions.
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={300}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
                Explore Resources <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 02. Resources Grid with Hover Image Reveals ── */}
      <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)] relative">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-2">
              <span className="section-label">Core Research Pillars</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Authoritative research,{' '}
                <CareerGradientText variant="blue">
                  practical applications.
                </CareerGradientText>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((res, idx) => (
              <ScrollReveal key={res.title} delayMs={100 * idx}>
                <Link href={res.href} className="block h-full">
                  <HoverImageCard
                    badge={res.category}
                    badgeVariant={res.badgeVariant}
                    title={res.title}
                    description={res.description}
                    ctaText="Read publication"
                    imageSrc={res.imageSrc}
                    imageAlt={res.title}
                    pattern="background"
                    pathwaySignals={res.signals}
                    className="h-full min-h-[260px]"
                  />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03. CTA ── */}
      <section className="section-editorial bg-[var(--background-dark-deep)] text-[var(--color-text-primary)] border-t border-[var(--color-border-default)]">
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-normal text-white tracking-tight">
              Explore the platform firsthand
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Create your free account today and start building your lifetime professional record.
            </p>
          </div>
          <Button href={ROUTES.SIGNUP} variant="primary" size="lg" className="shrink-0">
            Start Free <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
