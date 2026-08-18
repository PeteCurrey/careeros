import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Compass, Sparkles, CheckCircle2, GitBranch, Layers } from 'lucide-react';
import { CareerGradientText } from '@/components/brand/CareerGradientText';
import { HoverImageCard } from '@/components/brand/HoverImageCard';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { CareerPathwayConnector } from '@/components/brand/CareerPathwayConnector';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';
import { MEDIA_ASSETS } from '@/lib/media';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Career Pathways & Progression | Career OS",
  description: "Explore diverse vocational, academic, technical, and leadership pathways on Career OS with equal prestige, verified evidence, and persistent AI guidance.",
  alternates: {
    canonical: "https://career-os.com/pathways",
  },
};

interface PathwayItem {
  name: string;
  category: string;
  badgeVariant: 'blue' | 'lilac' | 'gold' | 'default';
  description: string;
  href: string;
  imageSrc: string;
  signals: string[];
}

const PATHWAYS: PathwayItem[] = [
  {
    name: 'Skilled Vocational Trades',
    category: 'Hands-On Mastery',
    badgeVariant: 'gold',
    description: 'Electrical, mechanical, precision tooling, plumbing, and modern infrastructure systems with direct commercial progression.',
    href: ROUTES.PATHWAYS_TRADES,
    imageSrc: '/media/professionals/professional_pathways_collective.jpg',
    signals: ['Apprenticeship', 'State Licensure', 'Mastery'],
  },
  {
    name: 'Technical Apprenticeships',
    category: 'Earn & Learn',
    badgeVariant: 'blue',
    description: 'Degree apprenticeships, corporate apprenticeships, and government-accredited workforce programs across technology and operations.',
    href: ROUTES.PATHWAYS_APPRENTICESHIPS,
    imageSrc: '/media/students/student_pathway_avatars.jpg',
    signals: ['Zero Student Debt', 'Applied Practice', 'Direct Seniority'],
  },
  {
    name: 'University & Higher Education',
    category: 'Academic & Research',
    badgeVariant: 'lilac',
    description: 'Undergraduate and postgraduate degrees, research programs, and professional university credentials.',
    href: ROUTES.PATHWAYS_UNIVERSITY,
    imageSrc: '/media/students/audience_students.jpg',
    signals: ['Foundational Theory', 'Research Portfolio', 'Specialisation'],
  },
  {
    name: 'Community & Technical College',
    category: 'Applied Degrees',
    badgeVariant: 'default',
    description: 'Associate degrees, technical diplomas, and targeted certification sequences that bridge directly to employment or transfer.',
    href: ROUTES.PATHWAYS_COLLEGE,
    imageSrc: '/media/schools/audience_schools.jpg',
    signals: ['Fast-Track Transfer', 'Vocational Diplomas', 'Workforce Alignment'],
  },
  {
    name: 'First Employment & Early Career',
    category: 'Workforce Launch',
    badgeVariant: 'blue',
    description: 'Entry-level roles, graduate schemes, internships, and rapid foundational experience building.',
    href: ROUTES.PATHWAYS_FIRST_JOB,
    imageSrc: '/media/students/student_hero_futures.jpg',
    signals: ['Evidence Compounding', 'Onboarding Mentorship', 'Rapid Growth'],
  },
  {
    name: 'Lateral Industry Pivots',
    category: 'Mid-Career Evolution',
    badgeVariant: 'blue',
    description: 'Transferable capability mapping, reskilling sprints, and strategic cross-sector career transitions.',
    href: ROUTES.PATHWAYS_CAREER_CHANGE,
    imageSrc: '/media/professionals/professional_hero_intersection.jpg',
    signals: ['Transferable Skill Vector', 'Bridge Curriculum', 'Capability Match'],
  },
  {
    name: 'Executive Leadership & Management',
    category: 'Organizational Direction',
    badgeVariant: 'lilac',
    description: 'People leadership, strategy execution, executive benchmarking, and organizational stewardship.',
    href: ROUTES.PATHWAYS_LEADERSHIP,
    imageSrc: '/media/professionals/audience_professionals.jpg',
    signals: ['Strategy Execution', 'Talent Stewardship', 'Executive Influence'],
  },
  {
    name: 'Venture & Entrepreneurship',
    category: 'Founders & Builders',
    badgeVariant: 'gold',
    description: 'Founding companies, trade contracting businesses, advisory practices, and independent commercial ventures.',
    href: ROUTES.PATHWAYS_ENTREPRENEURSHIP,
    imageSrc: '/media/hero/mentor_team_hero.jpg',
    signals: ['Market Validation', 'Commercial Architecture', 'Independent Equity'],
  },
];

export default function PathwaysPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      {/* ── 01. Hero Section ── */}
      <section className="relative min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)] overflow-hidden py-20 lg:py-0">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/media/hero/city_horizon_hero.jpg"
            alt="Expansive panoramic horizon representing diverse career routes"
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
              background: `linear-gradient(to right, #393939 0%, rgba(57, 57, 57, 0.96) 38%, rgba(57, 57, 57, 0.88) 55%, rgba(57, 57, 57, 0.42) 78%, rgba(57, 57, 57, 0.18) 100%)`,
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-28 pointer-events-none"
            style={{ background: `linear-gradient(to bottom, #393939 0%, transparent 100%)` }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
            style={{ background: `linear-gradient(to top, #393939 0%, transparent 100%)` }}
          />
        </div>

        <CareerPathwayConnector variant="branching" className="opacity-25" />

        <div className="container-editorial relative z-10 space-y-6 max-w-4xl">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <span className="section-label flex items-center gap-2">
                <span className="accent-blue-dot accent-blue-dot-pulse" />
                Universal Career Pathways
              </span>
              <TechnicalBadge variant="blue">
                EQUAL PARITY
              </TechnicalBadge>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <h1 className="text-display-section text-[var(--color-text-primary)] leading-[1.08]">
              Every career route supported with{' '}
              <CareerGradientText variant="blue">
                equal prestige and depth.
              </CareerGradientText>
            </h1>
          </ScrollReveal>

          <ScrollReveal delayMs={200}>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
              Career OS does not steer people toward a single predetermined path. Whether you are pursuing a licensed trade, an engineering degree, a corporate apprenticeship, or an independent business, our operating system provides continuous, high-fidelity guidance.
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={300}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
                Start Exploring Pathways <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 02. Pathways Interactive Directory Grid with Hover Image Reveals ── */}
      <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)] relative">
        <div className="container-editorial space-y-12">
          <ScrollReveal>
            <div className="max-w-3xl space-y-2">
              <span className="section-label">Explore 8 Core Trajectories</span>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Find where your strengths{' '}
                <CareerGradientText variant="blue">
                  compound best.
                </CareerGradientText>
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Select any pathway to explore structured progression steps, required credentials, transferable skill bridges, and verified industry milestones.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PATHWAYS.map((p, idx) => (
              <ScrollReveal key={p.name} delayMs={50 * (idx % 4)}>
                <Link href={p.href} className="block h-full">
                  <HoverImageCard
                    badge={p.category}
                    badgeVariant={p.badgeVariant}
                    title={p.name}
                    description={p.description}
                    ctaText="Explore pathway"
                    imageSrc={p.imageSrc}
                    imageAlt={p.name}
                    pattern="background"
                    pathwaySignals={p.signals}
                    className="h-full"
                  />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03. Call to Action ── */}
      <section className="section-editorial bg-[var(--background-dark-deep)] text-[var(--color-text-primary)] border-t border-[var(--color-border-default)]">
        <ScrollReveal direction="none">
          <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl font-normal text-white tracking-tight">
                Begin exploring your pathway on Career OS
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Free for individual core accounts. Start discovering and building verified evidence today.
              </p>
            </div>
            <Button href={ROUTES.SIGNUP} variant="primary" size="lg" className="shrink-0">
              Start Free <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
