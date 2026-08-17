'use client';

import React, { useState } from 'react';
import { Compass, Sparkles, Award, Network, TrendingUp, RefreshCw, ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Stage {
  num: string;
  name: string;
  tagline: string;
  icon: React.ElementType;
  description: string;
  artifacts: string[];
}

const LIFETIME_STAGES: Stage[] = [
  {
    num: '01',
    name: 'DISCOVER',
    tagline: 'Understand your innate strengths & viable horizons',
    icon: Compass,
    description: 'Explore suited careers, emerging industries, and realistic pathways without being forced into narrow predetermined tracks.',
    artifacts: ['Strength Analysis', 'Pathway Modeling', 'Career Graph Exploration'],
  },
  {
    num: '02',
    name: 'PREPARE',
    tagline: 'Build intentional capability through real work',
    icon: Sparkles,
    description: 'Gain targeted skills across college, technical apprenticeships, trades, or university with curated development milestones.',
    artifacts: ['Curated Learning Plans', 'Apprenticeship Readiness', 'Milestone Tracking'],
  },
  {
    num: '03',
    name: 'PROVE',
    tagline: 'Transform experience into verifiable evidence',
    icon: Award,
    description: 'Anchor qualifications, project deliverables, and verified endorsements inside your tamper-evident Career Passport.',
    artifacts: ['Cryptographic Credentials', 'Project Artifacts', 'Demonstrated Competency'],
  },
  {
    num: '04',
    name: 'CONNECT',
    tagline: 'Engage high-trust opportunities & mentors',
    icon: Network,
    description: 'Let verified capability surface you directly to launch employers and mentors who value demonstrated potential over keyword résumés.',
    artifacts: ['Private Opportunity Matching', 'Mentor Collaboration', 'Sponsor Introductions'],
  },
  {
    num: '05',
    name: 'PROGRESS',
    tagline: 'Navigate leadership, promotion & compounding value',
    icon: TrendingUp,
    description: 'Continuously benchmark capability, bridge management skill gaps, and strategically advance compensation trajectory over time.',
    artifacts: ['Next Move Advisory', 'Gap Closure Guidance', 'Market Trajectory'],
  },
  {
    num: '06',
    name: 'REINVENT',
    tagline: 'Pivot across sectors, launch ventures, or go global',
    icon: RefreshCw,
    description: 'Execute strategic lateral career transitions, international mobility, or entrepreneurial launches with your complete professional foundation intact.',
    artifacts: ['Lateral Capability Bridge', 'Venture Readiness', 'International Mobility'],
  },
];

interface JourneyPath {
  id: string;
  title: string;
  steps: string[];
}

const EXAMPLE_BRANCHES: JourneyPath[] = [
  {
    id: 'trades-to-exec',
    title: 'Skilled Trades to Engineering Leadership',
    steps: ['High School Discovery', 'Electrical Apprentice', 'Certified Specialist', 'Site Lead', 'Operations Director'],
  },
  {
    id: 'student-to-founder',
    title: 'University to Venture Founder',
    steps: ['STEM Student', 'Junior Analyst', 'Product Manager', 'Head of Product', 'Tech Co-Founder'],
  },
  {
    id: 'clinical-to-director',
    title: 'Clinical Healthcare to Healthtech Leadership',
    steps: ['Biomedical Student', 'Registered Clinical Nurse', 'Senior Specialist', 'Clinical Informatics Lead', 'Director of Care Operations'],
  },
];

export function LifetimeJourneySection() {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [activeBranch, setActiveBranch] = useState<string>('trades-to-exec');

  const stage = LIFETIME_STAGES[activeStage] ?? LIFETIME_STAGES[0]!;
  const StageIcon = stage.icon;

  return (
    <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)]">
      <div className="container-wide space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-mono font-bold tracking-widest text-[var(--color-brand-600)] uppercase">
            The Continuous Lifetime Model
          </p>
          <h2 className="text-display-section text-[var(--color-text-primary)]">
            One system. Your whole working life.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)]">
            Most career tools vanish the moment you secure a first job. Career OS stays with you across every promotion, lateral pivot, and reinvention.
          </p>
        </div>

        {/* Interactive 6-Stage Timeline Bar */}
        <div className="space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {LIFETIME_STAGES.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeStage === idx;
              return (
                <button
                  key={item.num}
                  onClick={() => setActiveStage(idx)}
                  className={cn(
                    'p-5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between min-h-[140px]',
                    isActive
                      ? 'bg-[var(--color-surface-raised)] border-[var(--color-brand-500)] shadow-card ring-1 ring-[var(--color-brand-500)]'
                      : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] hover:border-[var(--color-border-strong)]'
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className={cn('text-xs font-mono font-bold', isActive ? 'text-[var(--color-brand-600)]' : 'text-[var(--color-text-tertiary)]')}>
                      STAGE {item.num}
                    </span>
                    <Icon className={cn('w-4 h-4', isActive ? 'text-[var(--color-brand-600)]' : 'text-[var(--color-text-tertiary)]')} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[var(--color-text-primary)] tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[var(--color-text-tertiary)] line-clamp-1 mt-0.5">
                      {item.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Spotlight */}
          <div className="p-8 sm:p-10 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-editorial grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] border border-[var(--color-brand-200)] dark:border-[var(--color-brand-800)] text-xs font-bold text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]">
                <StageIcon className="w-3.5 h-3.5" /> Stage {stage.num}: {stage.name}
              </div>
              <h3 className="text-headline-editorial text-[var(--color-text-primary)]">
                {stage.tagline}
              </h3>
              <p className="text-body-editorial text-[var(--color-text-secondary)] leading-relaxed">
                {stage.description}
              </p>
            </div>

            <div className="lg:col-span-5 bg-[var(--color-surface-warm)] p-6 rounded-lg border border-[var(--color-border-subtle)] space-y-3">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-text-tertiary)]">
                Generated Intelligence & Artifacts
              </p>
              <div className="space-y-2">
                {stage.artifacts.map((art) => (
                  <div key={art} className="flex items-center gap-3 p-2.5 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-xs font-semibold text-[var(--color-text-primary)]">
                    <Check className="w-4 h-4 text-[var(--color-verified)] shrink-0" />
                    <span>{art}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Non-Linear Branching Showcase */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                Careers are dynamic graphs, not straight ladders.
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                See how different trajectories evolve naturally with verified evidence and continuous mentoring.
              </p>
            </div>

            {/* Path Switchers */}
            <div className="flex flex-wrap gap-2">
              {EXAMPLE_BRANCHES.map((branch) => (
                <button
                  key={branch.id}
                  onClick={() => setActiveBranch(branch.id)}
                  className={cn(
                    'px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer',
                    activeBranch === branch.id
                      ? 'bg-[var(--color-text-primary)] text-[var(--color-surface-raised)] shadow-xs'
                      : 'bg-[var(--color-surface-base)] text-[var(--color-text-secondary)] border border-[var(--color-border-default)] hover:bg-[var(--color-surface-interactive)]'
                  )}
                >
                  {branch.title}
                </button>
              ))}
            </div>
          </div>

          {/* Path Visual Flow */}
          <div className="p-6 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {EXAMPLE_BRANCHES.find((b) => b.id === activeBranch)?.steps.map((step, sIdx, arr) => (
                <React.Fragment key={step}>
                  <div className="px-4 py-2.5 rounded-lg bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] text-xs font-bold text-[var(--color-text-primary)] shadow-xs flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[var(--color-brand-600)] text-white text-[10px] flex items-center justify-center font-mono">
                      {sIdx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                  {sIdx < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[var(--color-text-tertiary)] shrink-0 hidden sm:inline-block" />
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="text-[11px] font-mono text-[var(--color-text-tertiary)] mt-4">
              * Illustrative Career Graph transition path. Non-linear paths compound verified evidence at every stage.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
