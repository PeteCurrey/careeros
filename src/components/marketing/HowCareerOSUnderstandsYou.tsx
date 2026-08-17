'use client';

import React, { useState } from 'react';
import { CareerOSSignatureMark } from '@/components/editorial/CareerOSMarks';

interface UnderstandingDimension {
  id: string;
  num: string;
  name: string;
  question: string;
  description: string;
  signals: string[];
}

const DIMENSIONS: UnderstandingDimension[] = [
  {
    id: 'direction',
    num: '01',
    name: 'Direction',
    question: 'Where do you actually want to go?',
    description: 'Your genuine ambitions, emerging sector interests, leadership horizons, or desire for entrepreneurship.',
    signals: ['Target Horizons', 'Sector Openness', 'Trajectory Pace'],
  },
  {
    id: 'capability',
    num: '02',
    name: 'Capability',
    question: 'What can you already do?',
    description: 'Demonstrated skills across technical execution, problem solving, team leadership, and domain depth.',
    signals: ['Skill Topology', 'Diagnostic Aptitude', 'Execution Depth'],
  },
  {
    id: 'evidence',
    num: '03',
    name: 'Evidence',
    question: 'What can you tangibly prove?',
    description: 'Verified qualifications, completed deliverables, code artifacts, trade endorsements, and peer reviews.',
    signals: ['Passport Vault', 'W3C Verifiable Credentials', 'Artifact Reviews'],
  },
  {
    id: 'context',
    num: '04',
    name: 'Context',
    question: 'What is your real situation?',
    description: 'Your life stage, educational path, geographic mobility, caregiver commitments, or financial constraints.',
    signals: ['Life Milestones', 'Education Pathway', 'Mobility Parameters'],
  },
  {
    id: 'preferences',
    num: '05',
    name: 'Preferences',
    question: 'How and where do you thrive?',
    description: 'Working style, autonomy vs structure, compensation benchmarks, and values alignment.',
    signals: ['Culture Model', 'Compensation Band', 'Autonomy Index'],
  },
  {
    id: 'potential',
    num: '06',
    name: 'Potential',
    question: 'Where could adjacent skills lead?',
    description: 'Latent capabilities, transferable bridges across unrelated industries, and high-probability lateral moves.',
    signals: ['Transferable Bridges', 'Adjacent Skill Match', 'Reinvention Viability'],
  },
];

export function HowCareerOSUnderstandsYou() {
  const [activeDim, setActiveDim] = useState<string>('direction');
  const activeData = DIMENSIONS.find((d) => d.id === activeDim) || DIMENSIONS[0]!;

  return (
    <section className="section-editorial bg-[var(--color-ivory-base)] border-b border-[var(--color-border-default)]">
      <div className="container-editorial space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[var(--color-border-default)]">
          <div className="max-w-3xl space-y-4">
            <span className="section-label">
              Career Intelligence Model
            </span>
            <h2 className="text-display-section text-[var(--color-charcoal-deep)]">
              A career is more than a job title.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Traditional platforms reduce you to keywords on a static document. Career OS continuously understands the full dimensionality of your working life.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <CareerOSSignatureMark className="w-14 h-14" />
          </div>
        </div>

        {/* 6 Editorial Columns with Thin Rules — No Bubble Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border-default)] border-y border-[var(--color-border-default)]">
          {DIMENSIONS.map((dim) => {
            const isSelected = activeDim === dim.id;
            return (
              <button
                key={dim.id}
                type="button"
                onClick={() => setActiveDim(dim.id)}
                className={`text-left p-6 sm:p-7 transition-all cursor-pointer flex flex-col justify-between min-h-[220px] ${
                  isSelected
                    ? "bg-[var(--color-ivory-warm)] border-b-2 border-b-[var(--color-charcoal-deep)]"
                    : "hover:bg-[var(--color-surface-interactive)]/40"
                }`}
              >
                <div className="space-y-2">
                  <span className={`text-xs font-semibold ${isSelected ? "text-[var(--color-charcoal-deep)]" : "text-[var(--color-taupe-400)]"}`}>
                    {dim.num}
                  </span>
                  <h3 className="text-lg font-medium text-[var(--color-charcoal-deep)]">
                    {dim.name}
                  </h3>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] font-normal line-clamp-3 mt-4">
                  {dim.question}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Dimension Spotlight (Flat Editorial Canvas) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)]">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="section-label">
                Dimension {activeData.num} &bull; {activeData.name}
              </span>
              <h3 className="text-headline-editorial text-[var(--color-charcoal-deep)]">
                {activeData.question}
              </h3>
            </div>
            
            <p className="text-body-editorial text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
              {activeData.description}
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {activeData.signals.map((sig) => (
                <span
                  key={sig}
                  className="text-xs px-3 py-1.5 bg-[var(--color-ivory-warm)] text-[var(--color-charcoal-deep)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] font-medium"
                >
                  &bull; {sig}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-6 bg-[var(--color-ivory-warm)] border border-[var(--color-border-subtle)] rounded-[var(--radius-sm)] space-y-4">
            <div className="text-[11px] uppercase tracking-wider text-[var(--color-taupe-600)] font-semibold">
              How Career OS Synthesizes This
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Unlike static personality tests that give you a one-time archetype, Career OS continuously evaluates your {activeData.name.toLowerCase()} against real workforce graphs, market compensation data, and accredited capability frameworks.
            </p>
            <div className="text-[11px] text-[var(--color-text-tertiary)] pt-2 border-t border-[var(--color-border-default)]">
              Zero public advertisement &bull; Sovereign data model
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}