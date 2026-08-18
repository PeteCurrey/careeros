'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { CareerOSSignatureMark } from '@/components/editorial/CareerOSMarks';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';

interface DimensionTab {
  id: string;
  name: string;
  count: string;
  items: { title: string; subtitle: string; verified?: boolean }[];
}

const TWIN_DIMENSIONS: DimensionTab[] = [
  {
    id: 'skills',
    name: 'Verified Skills',
    count: '16 Active',
    items: [
      { title: 'Distributed Systems Architecture', subtitle: 'Demonstrated across 3 production platforms', verified: true },
      { title: 'Technical Leadership & Mentorship', subtitle: 'Verified through 4 structured peer reviews', verified: true },
      { title: 'Cross-Functional Roadmapping', subtitle: 'Evidence: Product Launch Specification', verified: true },
      { title: 'Cloud Infrastructure Engineering', subtitle: 'Certified and benchmarked', verified: true },
    ],
  },
  {
    id: 'preferences',
    name: 'Work Preferences',
    count: 'Private Model',
    items: [
      { title: 'High-Trust Autonomous Culture', subtitle: 'Target environment: low micromanagement, async workflows' },
      { title: 'Technical Leadership Track', subtitle: 'Preference: Staff+ Individual Contributor or Engineering Director' },
      { title: 'Compensation Horizon', subtitle: 'Calibrated against top 15% regional market benchmarks' },
    ],
  },
  {
    id: 'strengths',
    name: 'Latent Strengths',
    count: 'Graph Inferred',
    items: [
      { title: 'Complex Systems Diagnostics', subtitle: 'High proficiency in tracing cross-domain anomalies' },
      { title: 'Executive Stakeholder Translation', subtitle: 'Translating technical tradeoffs into business risk mitigation' },
    ],
  },
  {
    id: 'horizons',
    name: 'Target Horizons',
    count: '3 Pathways',
    items: [
      { title: 'Director of Platform Engineering', subtitle: 'Current capability bridge: 84% match (Missing: Multi-org budgeting)' },
      { title: 'Staff Systems Architect', subtitle: 'Current capability bridge: 96% match (Ready for engagement)' },
      { title: 'Technical Co-Founder', subtitle: 'Current capability bridge: 78% match (Venture path)' },
    ],
  },
];

export function CareerTwinSection() {
  const [selectedDimension, setSelectedDimension] = useState<string>('skills');
  const activeData = TWIN_DIMENSIONS.find((d) => d.id === selectedDimension) ?? TWIN_DIMENSIONS[0]!;

  return (
    <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)] relative overflow-hidden">
      
      {/* Subtle ambient lighting */}
      <div className="ambient-glow-blue absolute inset-0 pointer-events-none" />

      <div className="container-editorial space-y-16 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[var(--color-border-default)]">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="section-label flex items-center gap-2">
                  <span className="accent-blue-dot" />
                  Dynamic Self-Model
                </span>
                <TechnicalBadge variant="blue">SYNTHETIC GRAPH</TechnicalBadge>
              </div>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Your résumé tells people where you&apos;ve been. <br />
                <span className="text-[var(--color-taupe-300)] font-normal">
                  Your Career Twin helps understand where you could go.
                </span>
              </h2>
              <p className="text-lead text-[var(--color-text-secondary)]">
                A static PDF cannot capture your potential, evolving strengths, or genuine working preferences. Career OS synthesizes your capabilities into an intelligent personal model.
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-3">
              <CareerOSSignatureMark className="w-16 h-16" />
            </div>
          </div>
        </ScrollReveal>

        {/* Visual Contrast: Flat Legacy Résumé vs Multidimensional Career Twin */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: The Legacy Flat Résumé */}
          <div className="lg:col-span-4">
            <ScrollReveal delayMs={100}>
              <div className="p-8 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] flex flex-col justify-between opacity-80 h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="section-label text-[#F87171]">
                      The Legacy Artifact
                    </span>
                    <XCircle className="w-4 h-4 text-[#F87171]" />
                  </div>
                  <h3 className="text-lg font-medium text-[var(--color-text-primary)] line-through decoration-[var(--color-danger)]">
                    The Static Résumé
                  </h3>
                  <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">
                    Unverifiable claims, keyword stuffing, and outdated the moment it is exported to PDF.
                  </p>
                  
                  <div className="space-y-2.5 pt-4 border-t border-[var(--color-border-subtle)] text-xs text-[var(--color-text-tertiary)] font-sans">
                    <div className="p-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-subtle)] rounded-[var(--radius-sm)] line-through opacity-70">
                      &bull; &ldquo;Results-driven professional with strong communication&rdquo;
                    </div>
                    <div className="p-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-subtle)] rounded-[var(--radius-sm)] line-through opacity-70">
                      &bull; &ldquo;Proficient in major industry tools&rdquo;
                    </div>
                    <div className="p-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-subtle)] rounded-[var(--radius-sm)] line-through opacity-70">
                      &bull; Filtered by keyword ATS screening bots
                    </div>
                  </div>
                </div>

                <div className="pt-6 text-xs text-[var(--color-danger)] font-mono font-medium flex items-center gap-1.5">
                  <span>&times; Zero evidence provenance</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: The Dynamic Career Twin Canvas */}
          <div className="lg:col-span-8">
            <ScrollReveal delayMs={150}>
              <div className="p-8 sm:p-10 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6 flex flex-col justify-between border-beam-container border-beam-slow hover-lift h-full">
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-6">
                    <div>
                      <span className="section-label">
                        Sovereign Intelligence Model
                      </span>
                      <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mt-1">
                        The Dynamic Career Twin
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <TechnicalBadge variant="success" dot>
                        92% EVIDENCE ANCHORED
                      </TechnicalBadge>
                    </div>
                  </div>

                  {/* Interactive Dimension Switcher (Squared Tabs) */}
                  <div className="flex flex-wrap gap-2">
                    {TWIN_DIMENSIONS.map((dim) => {
                      const isSelected = selectedDimension === dim.id;
                      return (
                        <button
                          key={dim.id}
                          type="button"
                          onClick={() => setSelectedDimension(dim.id)}
                          className={cn(
                            'px-4 py-2 text-xs font-semibold rounded-[var(--radius-sm)] transition-all cursor-pointer flex items-center gap-2 border font-mono',
                            isSelected
                              ? 'bg-[#F4F3EF] text-[#202020] border-[#F4F3EF] shadow-sm'
                              : 'bg-[var(--color-surface-warm)] text-[var(--color-text-secondary)] border-[var(--color-border-default)] hover:bg-white/10'
                          )}
                        >
                          <span>{dim.name}</span>
                          <span className={cn('text-[10px] px-1.5 py-0.5 rounded-[var(--radius-sm)]', isSelected ? 'bg-[#202020]/20 text-[#202020]' : 'bg-[var(--color-border-default)] text-[var(--color-text-tertiary)]')}>
                            {dim.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Dimension Items Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {activeData.items.map((item, i) => (
                      <div
                        key={i}
                        className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-1 hover:border-[rgba(47,143,255,0.25)] transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-[var(--color-text-primary)]">
                            {item.title}
                          </h4>
                          {item.verified && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
                          )}
                        </div>
                        <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                          {item.subtitle}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer link */}
                <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-[var(--color-text-tertiary)] text-[11px]">
                    Governed by your granular privacy access grants.
                  </span>
                  <Link
                    href={ROUTES.PRODUCT_CAREER_TWIN}
                    className="font-semibold text-[var(--color-text-primary)] hover:text-white inline-flex items-center gap-1 underline underline-offset-4 group"
                  >
                    <span>Learn about Career Twin</span>
                    <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
