'use client';

import React from 'react';
import { Card } from './Card';
import { Compass, Sparkles, Award, Network, TrendingUp, RefreshCw } from 'lucide-react';

interface Phase {
  num: string;
  name: string;
  icon: React.ElementType;
  description: string;
}

const PHASES: Phase[] = [
  {
    num: '01',
    name: 'DISCOVER',
    icon: Compass,
    description:
      'Understand who you are, identify your natural strengths and interests, and explore possible pathways without being forced into narrow predetermined tracks.',
  },
  {
    num: '02',
    name: 'PREPARE',
    icon: Sparkles,
    description:
      'Build intentional capability across education, apprenticeships, technical trades, and hands-on projects designed to prepare you for real work.',
  },
  {
    num: '03',
    name: 'PROVE',
    icon: Award,
    description:
      'Demonstrate verified skills and authentic evidence in your Career Passport rather than relying solely on self-reported assertions or static summaries.',
  },
  {
    num: '04',
    name: 'CONNECT',
    icon: Network,
    description:
      'Engage with employers, mentors, and high-trust professional networks based on demonstrated evidence, alignment, and mutual respect.',
  },
  {
    num: '05',
    name: 'PROGRESS',
    icon: TrendingUp,
    description:
      'Navigate advancement, promotions, compensation trajectory, and leadership responsibilities with ongoing intelligence that stays with you.',
  },
  {
    num: '06',
    name: 'REINVENT',
    icon: RefreshCw,
    description:
      'Pivot across industries, launch entrepreneurial ventures, or pursue international mobility with your complete professional foundation intact.',
  },
];

export function LifetimeTimeline() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PHASES.map((phase) => {
          const Icon = phase.icon;
          return (
            <Card
              key={phase.num}
              className="relative overflow-hidden group hover:border-[var(--color-brand-400)] transition-all p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold tracking-wider px-2 py-1 rounded bg-[var(--color-surface-interactive)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]">
                    PHASE {phase.num}
                  </span>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] border border-[var(--color-brand-200)] dark:border-[var(--color-brand-800)]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 tracking-tight">
                  {phase.name}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
