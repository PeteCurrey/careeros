'use client';

import React, { useState } from 'react';
import { CareerOSSignatureMark } from '@/components/editorial/CareerOSMarks';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';
import { ImageHoverRevealCard } from '@/components/brand/ImageHoverRevealCard';
import { CheckCircle2, Network, Shield } from 'lucide-react';

interface UnderstandingDimension {
  id: string;
  num: string;
  name: string;
  question: string;
  description: string;
  signals: string[];
  graphRole: string;
  imageSrc: string;
  imageAlt: string;
}

const DIMENSIONS: UnderstandingDimension[] = [
  {
    id: 'direction',
    num: '01',
    name: 'Direction',
    question: 'Where do you actually want to go?',
    description: 'Your genuine ambitions, emerging sector interests, leadership horizons, or desire for entrepreneurship.',
    signals: ['Target Horizons', 'Sector Openness', 'Trajectory Pace'],
    graphRole: 'HORIZON MAPPING',
    imageSrc: '/media/students/student_hero_futures.jpg',
    imageAlt: 'Young student exploring future horizon pathways',
  },
  {
    id: 'capability',
    num: '02',
    name: 'Capability',
    question: 'What can you already do?',
    description: 'Demonstrated skills across technical execution, problem solving, team leadership, and domain depth.',
    signals: ['Skill Topology', 'Diagnostic Aptitude', 'Execution Depth'],
    graphRole: 'SKILL SYNTHESIS',
    imageSrc: '/media/students/audience_students.jpg',
    imageAlt: 'Engineers and students collaborating on technical prototypes in learning lab',
  },
  {
    id: 'evidence',
    num: '03',
    name: 'Evidence',
    question: 'What can you tangibly prove?',
    description: 'Verified qualifications, completed deliverables, code artifacts, trade endorsements, and peer reviews.',
    signals: ['Passport Vault', 'W3C Verifiable Credentials', 'Artifact Reviews'],
    graphRole: 'EVIDENCE PROVENANCE',
    imageSrc: '/media/product/career_passport_hero.jpg',
    imageAlt: 'Secure digital evidence vault and verifiable credentials archive',
  },
  {
    id: 'context',
    num: '04',
    name: 'Context',
    question: 'What is your real situation?',
    description: 'Your life stage, educational path, geographic mobility, caregiver commitments, or financial constraints.',
    signals: ['Life Milestones', 'Education Pathway', 'Mobility Parameters'],
    graphRole: 'CONTEXT PARAMETERS',
    imageSrc: '/media/schools/audience_schools.jpg',
    imageAlt: 'High school teacher and students discussing career realities',
  },
  {
    id: 'preferences',
    num: '05',
    name: 'Preferences',
    question: 'How and where do you thrive?',
    description: 'Working style, autonomy vs structure, compensation benchmarks, and values alignment.',
    signals: ['Culture Model', 'Compensation Band', 'Autonomy Index'],
    graphRole: 'CULTURE CALIBRATION',
    imageSrc: '/media/professionals/audience_professionals.jpg',
    imageAlt: 'Professional contemplating strategic options in modern workplace',
  },
  {
    id: 'potential',
    num: '06',
    name: 'Potential',
    question: 'Where could adjacent skills lead?',
    description: 'Latent capabilities, transferable bridges across unrelated industries, and high-probability lateral moves.',
    signals: ['Transferable Bridges', 'Adjacent Skill Match', 'Reinvention Viability'],
    graphRole: 'ADJACENT BRIDGES',
    imageSrc: '/media/professionals/professional_pathways_collective.jpg',
    imageAlt: 'Multidisciplinary team in strategic engineering environment',
  },
];

export function HowCareerOSUnderstandsYou() {
  const [activeDim, setActiveDim] = useState<string>('direction');
  const activeData = DIMENSIONS.find((d) => d.id === activeDim) || DIMENSIONS[0]!;

  return (
    <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)] relative overflow-hidden">
      
      {/* Ambient background wash */}
      <div className="ambient-glow-blue absolute inset-0 pointer-events-none" />

      <div className="container-editorial space-y-16 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[var(--color-border-default)]">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="section-label flex items-center gap-2">
                  <span className="accent-blue-dot" />
                  Career Intelligence Model
                </span>
                <TechnicalBadge variant="blue">DIMENSIONAL SYNTHESIS</TechnicalBadge>
              </div>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                A career is <span className="text-[#2F8FFF]">more than a job title</span>.
              </h2>
              <p className="text-lead text-[var(--color-text-secondary)]">
                Traditional platforms reduce you to keywords on a static document. Career OS continuously understands the full dimensionality of your working life.
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-3">
              <CareerOSSignatureMark className="w-14 h-14" />
            </div>
          </div>
        </ScrollReveal>

        {/* 6 Editorial Interactive Dimension Cards with Image Hover Reveal */}
        <ScrollReveal delayMs={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
            {DIMENSIONS.map((dim) => {
              const isSelected = activeDim === dim.id;
              return (
                <div
                  key={dim.id}
                  onClick={() => setActiveDim(dim.id)}
                  className="cursor-pointer"
                >
                  <ImageHoverRevealCard
                    imageSrc={dim.imageSrc}
                    imageAlt={dim.imageAlt}
                    pattern="background"
                    active={isSelected}
                    className="h-full min-h-[220px] p-5 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-mono font-semibold ${isSelected ? 'text-[#2F8FFF]' : 'text-[var(--color-taupe-400)]'}`}>
                          {dim.num}
                        </span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#2F8FFF] shadow-[0_0_8px_rgba(47,143,255,0.8)]" />
                        )}
                      </div>
                      <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                        {dim.name}
                      </h3>
                    </div>

                    <div className="pt-4 border-t border-[var(--color-border-subtle)]">
                      <p className="text-[11px] text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
                        {dim.question}
                      </p>
                    </div>
                  </ImageHoverRevealCard>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Dimension Spotlight with Career Topology Synthesis Visual */}
        <ScrollReveal delayMs={150}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] hover-lift">
            
            {/* Left: Dimension Deep Dive */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <TechnicalBadge variant="lavender">
                    DIMENSION {activeData.num} &bull; {activeData.graphRole}
                  </TechnicalBadge>
                </div>
                <h3 className="text-headline-editorial text-[var(--color-text-primary)]">
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
                    className="text-xs px-3 py-1.5 bg-[var(--color-surface-warm)] text-[var(--color-text-primary)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] font-medium flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#2F8FFF]" />
                    <span>{sig}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Synthesis Topology Visual */}
            <div className="lg:col-span-5 p-6 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded-[var(--radius-sm)] space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-[11px] uppercase tracking-wider text-[var(--color-taupe-300)] font-semibold font-mono">
                  Continuous Graph Synthesis
                </div>
                <TechnicalBadge variant="champagne" dot>
                  ACTIVE SYNTHESIS
                </TechnicalBadge>
              </div>

              {/* Mini topological graph visual */}
              <div className="py-3 px-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-subtle)] space-y-2 font-mono text-[11px]">
                <div className="flex items-center justify-between text-[#2F8FFF]">
                  <span>&bull; PERSON IDENTITY</span>
                  <span className="text-[var(--color-text-tertiary)]">SOVEREIGN</span>
                </div>
                <div className="pl-3 border-l border-[#2F8FFF]/30 space-y-1 text-[var(--color-text-secondary)]">
                  <div className="flex justify-between">
                    <span>└─ {activeData.name.toUpperCase()} SIGNAL</span>
                    <span className="text-[#34D399]">VERIFIED</span>
                  </div>
                  <div className="flex justify-between text-[var(--color-text-tertiary)]">
                    <span>└─ CAREER GRAPH CORRELATION</span>
                    <span>14,000+ ROLES</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Unlike static personality tests that give you a one-time archetype, Career OS continuously evaluates your {activeData.name.toLowerCase()} against real workforce graphs, market compensation data, and accredited capability frameworks.
              </p>
              
              <div className="text-[11px] text-[var(--color-text-tertiary)] pt-2 border-t border-[var(--color-border-default)] flex items-center justify-between font-mono">
                <span>Zero public advertisement</span>
                <span>Sovereign data model</span>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}