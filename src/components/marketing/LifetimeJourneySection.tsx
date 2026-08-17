'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Stage {
  num: string;
  name: string;
  tagline: string;
  environment: string;
  description: string;
  milestones: string[];
}

const LIFETIME_STAGES: Stage[] = [
  {
    num: '01',
    name: 'DISCOVER',
    tagline: 'Understand innate strengths & viable horizons',
    environment: 'School & Exploration Environment',
    description: 'Explore suited careers, emerging industries, and realistic pathways without being forced into narrow predetermined tracks or premature decisions.',
    milestones: ['Latent Strength Mapping', 'Exploratory Pathway Modelling', 'Parity across University & Trades'],
  },
  {
    num: '02',
    name: 'PREPARE',
    tagline: 'Build intentional capability through real work',
    environment: 'Technical Workshop & University Campus',
    description: 'Gain targeted skills across college, technical apprenticeships, trades, or university with curated development milestones and verified projects.',
    milestones: ['Domain Capability Frameworks', 'Hands-on Project Deliverables', 'Apprenticeship & Academic Parity'],
  },
  {
    num: '03',
    name: 'PROVE',
    tagline: 'Transform experience into verifiable evidence',
    environment: 'Professional Project Space',
    description: 'Anchor qualifications, project deliverables, and verified endorsements inside your tamper-evident Career Passport independently of any employer.',
    milestones: ['W3C Verifiable Credentials', 'Cryptographic Proof of Work', 'Peer & Institutional Endorsements'],
  },
  {
    num: '04',
    name: 'CONNECT',
    tagline: 'Engage high-trust opportunities & sponsors',
    environment: 'Enterprise & Industry Ecosystem',
    description: 'Let verified capability surface you directly to forward-thinking employers and mentors who value demonstrated potential over keyword résumés.',
    milestones: ['Private Opportunity Matching', 'Autonomous Agent Introductions', 'Zero Public Job-Search Broadcasting'],
  },
  {
    num: '05',
    name: 'PROGRESS',
    tagline: 'Navigate leadership, promotion & compounding value',
    environment: 'Executive & Strategic Operations',
    description: 'Continuously benchmark capability, bridge management skill gaps, and strategically advance compensation trajectory over years.',
    milestones: ['Staff & Executive Advisory', 'Market Compensation Calibration', 'Capability Gap Resolution'],
  },
  {
    num: '06',
    name: 'REINVENT',
    tagline: 'Pivot across sectors, launch ventures, or go global',
    environment: 'Founder & Venture Studio',
    description: 'Execute strategic lateral career transitions, international mobility, or entrepreneurial launches with your complete professional foundation intact.',
    milestones: ['Cross-Industry Capability Bridges', 'Venture Founder Readiness', 'Global Portability Standards'],
  },
];

export function LifetimeJourneySection() {
  const [activeStage, setActiveStage] = useState<number>(0);
  const stage = LIFETIME_STAGES[activeStage] ?? LIFETIME_STAGES[0]!;

  return (
    <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)]">
      <div className="container-editorial space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[var(--color-border-default)]">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">
              The Continuous Lifetime Model
            </span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              One system. Your whole working life.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Most career tools vanish the moment you secure a first job. Career OS stays with you across every promotion, lateral pivot, and reinvention.
            </p>
          </div>
          <div className="text-xs text-[var(--color-text-tertiary)] font-medium">
            Stage {stage.num} of 06 &bull; {stage.name}
          </div>
        </div>

        {/* Horizontal Editorial Timeline Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border-default)] border-y border-[var(--color-border-default)] bg-[var(--color-surface-raised)]">
          {LIFETIME_STAGES.map((item, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={item.num}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={cn(
                  'p-6 text-left transition-all cursor-pointer flex flex-col justify-between min-h-[160px]',
                  isActive
                    ? 'bg-[var(--color-surface-sunken)] border-b-2 border-b-[var(--color-text-primary)]'
                    : 'hover:bg-white/5'
                )}
              >
                <span className={cn('text-xs font-semibold', isActive ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-taupe-400)]')}>
                  {item.num}
                </span>
                <div className="mt-4">
                  <h3 className="font-semibold text-sm text-[var(--color-text-primary)] tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[var(--color-text-tertiary)] line-clamp-2 mt-1">
                    {item.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Spotlight (Editorial Layout) */}
        <div className="p-8 sm:p-12 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="section-label">
                Phase {stage.num} &bull; {stage.environment}
              </span>
              <h3 className="text-headline-editorial text-[var(--color-text-primary)]">
                {stage.tagline}
              </h3>
            </div>
            
            <p className="text-body-editorial text-[var(--color-text-secondary)] leading-relaxed">
              {stage.description}
            </p>

            <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center gap-4 text-xs text-[var(--color-text-tertiary)]">
              <span>Environment Context:</span>
              <span className="font-semibold text-[var(--color-text-primary)]">{stage.environment}</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[var(--color-surface-warm)] p-7 border border-[var(--color-border-subtle)] rounded-[var(--radius-sm)] space-y-4">
            <p className="section-label">
              Compounding Career Artifacts
            </p>
            <ul className="space-y-3 pt-1">
              {stage.milestones.map((m) => (
                <li key={m} className="flex items-start gap-2.5 text-xs text-[var(--color-text-primary)] font-medium">
                  <span className="text-[var(--color-taupe-300)] font-bold text-sm leading-none">&bull;</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2 text-[11px] text-[var(--color-text-tertiary)] border-t border-[var(--color-border-default)]">
              Compounded inside your lifelong Career Twin & Passport
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

