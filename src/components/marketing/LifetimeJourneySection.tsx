'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';
import { ImageHoverRevealCard } from '@/components/brand/ImageHoverRevealCard';
import { Sparkles, Layers } from 'lucide-react';

interface Stage {
  num: string;
  name: string;
  tagline: string;
  environment: string;
  description: string;
  milestones: string[];
  imageSrc: string;
  imageAlt: string;
}

const LIFETIME_STAGES: Stage[] = [
  {
    num: '01',
    name: 'DISCOVER',
    tagline: 'Understand innate strengths & viable horizons',
    environment: 'School & Exploration Environment',
    description: 'Explore suited careers, emerging industries, and realistic pathways without being forced into narrow predetermined tracks or premature decisions.',
    milestones: ['Latent Strength Mapping', 'Exploratory Pathway Modelling', 'Parity across University & Trades'],
    imageSrc: '/media/students/student_hero_futures.jpg',
    imageAlt: 'Young student exploring future horizon pathways',
  },
  {
    num: '02',
    name: 'PREPARE',
    tagline: 'Build intentional capability through real work',
    environment: 'Technical Workshop & University Campus',
    description: 'Gain targeted skills across college, technical apprenticeships, trades, or university with curated development milestones and verified projects.',
    milestones: ['Domain Capability Frameworks', 'Hands-on Project Deliverables', 'Apprenticeship & Academic Parity'],
    imageSrc: '/media/students/audience_students.jpg',
    imageAlt: 'Engineers and students collaborating on technical prototypes',
  },
  {
    num: '03',
    name: 'PROVE',
    tagline: 'Transform experience into verifiable evidence',
    environment: 'Professional Project Space',
    description: 'Anchor qualifications, project deliverables, and verified endorsements inside your tamper-evident Career Passport independently of any employer.',
    milestones: ['W3C Verifiable Credentials', 'Cryptographic Proof of Work', 'Peer & Institutional Endorsements'],
    imageSrc: '/media/product/career_passport_hero.jpg',
    imageAlt: 'Secure credential archive and verifiable evidence vault',
  },
  {
    num: '04',
    name: 'CONNECT',
    tagline: 'Engage high-trust opportunities & sponsors',
    environment: 'Enterprise & Industry Ecosystem',
    description: 'Let verified capability surface you directly to forward-thinking employers and mentors who value demonstrated potential over keyword résumés.',
    milestones: ['Private Opportunity Matching', 'Autonomous Agent Introductions', 'Zero Public Job-Search Broadcasting'],
    imageSrc: '/media/product/opportunity_agent_hero.jpg',
    imageAlt: 'Opportunity intelligence observatory overlooking career horizons',
  },
  {
    num: '05',
    name: 'PROGRESS',
    tagline: 'Navigate leadership, promotion & compounding value',
    environment: 'Executive & Strategic Operations',
    description: 'Continuously benchmark capability, bridge management skill gaps, and strategically advance compensation trajectory over years.',
    milestones: ['Staff & Executive Advisory', 'Market Compensation Calibration', 'Capability Gap Resolution'],
    imageSrc: '/media/professionals/audience_professionals.jpg',
    imageAlt: 'Professional leader contemplating strategic career trajectory',
  },
  {
    num: '06',
    name: 'REINVENT',
    tagline: 'Pivot across sectors, launch ventures, or go global',
    environment: 'Founder & Venture Studio',
    description: 'Execute strategic lateral career transitions, international mobility, or entrepreneurial launches with your complete professional foundation intact.',
    milestones: ['Cross-Industry Capability Bridges', 'Venture Founder Readiness', 'Global Portability Standards'],
    imageSrc: '/media/professionals/professional_hero_intersection.jpg',
    imageAlt: 'Professional executing lateral pivot across industries',
  },
];

export function LifetimeJourneySection() {
  const [activeStage, setActiveStage] = useState<number>(0);
  const stage = LIFETIME_STAGES[activeStage] ?? LIFETIME_STAGES[0]!;

  return (
    <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)] relative overflow-hidden">
      
      {/* ── Panoramic Architectural Civic Innovation Backdrop ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20 lg:opacity-25">
          <Image
            src="/media/product/how_it_works_hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        {/* Deep vertical dark gradient overlay for text protection */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, var(--color-surface-warm) 0%, rgba(34,34,34,0.92) 18%, rgba(24,24,24,0.85) 50%, rgba(34,34,34,0.92) 82%, var(--color-surface-warm) 100%)',
          }}
        />
        {/* Subtle ambient lighting */}
        <div className="ambient-glow-champagne absolute inset-0 pointer-events-none opacity-40" />
      </div>

      <div className="container-editorial space-y-16 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[var(--color-border-default)]">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="section-label">
                  The Continuous Lifetime Model
                </span>
                <TechnicalBadge variant="champagne">LIFELONG COMPOUNDING</TechnicalBadge>
              </div>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                One system. <span className="text-[#DDD36D]">Your whole working life.</span>
              </h2>
              <p className="text-lead text-[var(--color-text-secondary)]">
                Most career tools vanish the moment you secure a first job. Career OS stays with you across every promotion, lateral pivot, and reinvention.
              </p>
            </div>
            <div className="text-xs font-mono text-[var(--color-text-tertiary)] font-medium">
              PHASE {stage.num}/06 &bull; <span className="text-[#2F8FFF]">{stage.name}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Horizontal Interactive Lifetime Phase Cards */}
        <ScrollReveal delayMs={100}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {LIFETIME_STAGES.map((item, idx) => {
              const isActive = activeStage === idx;
              return (
                <div
                  key={item.num}
                  onClick={() => setActiveStage(idx)}
                  className="cursor-pointer"
                >
                  <ImageHoverRevealCard
                    imageSrc={item.imageSrc}
                    imageAlt={item.imageAlt}
                    pattern="background"
                    active={isActive}
                    className="h-full min-h-[160px] p-5 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between">
                      <span className={cn('text-xs font-mono font-semibold', isActive ? 'text-[#2F8FFF]' : 'text-[var(--color-taupe-400)]')}>
                        {item.num}
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2F8FFF] shadow-[0_0_6px_rgba(47,143,255,0.8)]" />
                      )}
                    </div>
                    <div className="mt-4">
                      <h3 className="font-semibold text-sm text-[var(--color-text-primary)] tracking-tight">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-[var(--color-text-tertiary)] line-clamp-2 mt-1 leading-relaxed">
                        {item.tagline}
                      </p>
                    </div>
                  </ImageHoverRevealCard>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Stage Detailed Spotlight */}
        <ScrollReveal delayMs={150}>
          <div className="p-8 sm:p-12 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-start hover-lift">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <TechnicalBadge variant="blue">
                    PHASE {stage.num} &bull; {stage.environment}
                  </TechnicalBadge>
                </div>
                <h3 className="text-headline-editorial text-[var(--color-text-primary)]">
                  {stage.tagline}
                </h3>
              </div>
              
              <p className="text-body-editorial text-[var(--color-text-secondary)] leading-relaxed">
                {stage.description}
              </p>

              <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center gap-3 text-xs text-[var(--color-text-tertiary)] font-mono">
                <span>Context:</span>
                <span className="font-semibold text-[var(--color-text-primary)]">{stage.environment}</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[var(--color-surface-warm)] p-7 border border-[var(--color-border-subtle)] rounded-[var(--radius-sm)] space-y-4">
              <div className="flex items-center justify-between">
                <p className="section-label">
                  Compounding Artifacts
                </p>
                <Layers className="w-3.5 h-3.5 text-[#DDD36D]" />
              </div>

              <ul className="space-y-3 pt-1">
                {stage.milestones.map((m) => (
                  <li key={m} className="flex items-start gap-2.5 text-xs text-[var(--color-text-primary)] font-medium">
                    <span className="text-[#2F8FFF] font-bold text-sm leading-none">&bull;</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 text-[11px] font-mono text-[var(--color-text-tertiary)] border-t border-[var(--color-border-default)]">
                Compounded inside your lifelong Career Twin &amp; Passport
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
