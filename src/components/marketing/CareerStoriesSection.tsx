import React from 'react';
import { ArrowRight, CheckCircle2, Compass } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

interface StoryPath {
  domain: string;
  headline: string;
  stages: string[];
  keyBridge: string;
}

const STORIES: StoryPath[] = [
  {
    domain: 'SKILLED TRADES TO OPERATIONS',
    headline: 'Apprentice to Senior Operations Director',
    stages: ['School Discovery', 'Electrical Apprenticeship', 'Industrial Systems Specialist', 'Site Project Lead', 'Director of Operations'],
    keyBridge: 'Bridge: Industrial project execution evidence transferred into corporate operations management.',
  },
  {
    domain: 'STEM TO ENTREPRENEURSHIP',
    headline: 'Graduate Analyst to Tech Co-Founder',
    stages: ['Biomedical Student', 'Junior Systems Analyst', 'Senior Product Manager', 'VP Product', 'Venture Founder'],
    keyBridge: 'Bridge: Product roadmapping & architecture deliverables verified in Career Passport enabled venture team assembly.',
  },
  {
    domain: 'HEALTHCARE LEADERSHIP',
    headline: 'Registered Nurse to Health Informatics Director',
    stages: ['Nursing Graduate', 'Critical Care Specialist', 'Clinical Systems Lead', 'Director of Clinical Informatics'],
    keyBridge: 'Bridge: Clinical front-line expertise combined with verifiable health-data ethics certification.',
  },
  {
    domain: 'NON-LINEAR REINVENTION',
    headline: 'Retail Specialist to Cloud Infrastructure Engineer',
    stages: ['Customer Experience Lead', 'Vocational Technical Diploma', 'Junior DevOps Engineer', 'Infrastructure Specialist'],
    keyBridge: 'Bridge: Troubleshooting aptitude & demonstrated hands-on lab projects closed the 35% capability transition gap.',
  },
];

export function CareerStoriesSection() {
  return (
    <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)]">
      <div className="container-wide space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-mono font-bold tracking-widest text-[var(--color-brand-600)] uppercase">
            Example Career Transitions
          </p>
          <h2 className="text-display-section text-[var(--color-text-primary)]">
            Careers are forged through continuous transition.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)]">
            Explore how Career OS maps transferable capability bridges across industries, enabling purposeful progression and reinvention.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STORIES.map((story, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-card flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[var(--color-brand-600)] tracking-wider">
                    {story.domain}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-surface-warm)] text-[var(--color-text-tertiary)] border border-[var(--color-border-subtle)]">
                    Example Career Path
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                  {story.headline}
                </h3>

                {/* Stepper Flow */}
                <div className="space-y-2 pt-2">
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-[var(--color-text-primary)]">
                    {story.stages.map((stg, sIdx, arr) => (
                      <React.Fragment key={stg}>
                        <span className="px-2.5 py-1 rounded-md bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)]">
                          {stg}
                        </span>
                        {sIdx < arr.length - 1 && (
                          <span className="text-[var(--color-text-tertiary)] font-mono">&rarr;</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed pt-2 border-t border-[var(--color-border-subtle)]">
                  {story.keyBridge}
                </p>
              </div>

              <div className="pt-2 text-[11px] font-mono text-[var(--color-text-tertiary)] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-verified)]" />
                <span>Mapped through verified Career Graph nodes</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs font-mono text-center text-[var(--color-text-tertiary)]">
          * Illustrative progression paths. Career OS personalizes trajectories based on individual capability and aspirations.
        </p>

      </div>
    </section>
  );
}
