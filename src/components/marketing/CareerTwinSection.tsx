'use client';

import React, { useState } from 'react';
import { UserCheck, CheckCircle2, Shield, Sparkles, Layers, Target, Compass, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { cn } from '@/lib/utils';

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
      { title: 'Distributed Systems Design', subtitle: 'Demonstrated across 3 production architectures', verified: true },
      { title: 'Technical Mentorship', subtitle: 'Verified through 4 peer & junior reviews', verified: true },
      { title: 'Cross-Functional Roadmapping', subtitle: 'Evidence: Q2 Product Launch Plan', verified: true },
      { title: 'Cloud Infrastructure (AWS/GCP)', subtitle: 'Certified & benchmarked', verified: true },
    ],
  },
  {
    id: 'preferences',
    name: 'Work Preferences',
    count: 'Private Model',
    items: [
      { title: 'High-Trust Autonomous Culture', subtitle: 'Target environment: low micromanagement, async workflows' },
      { title: 'Technical Leadership Track', subtitle: 'Preference: Individual Contributor Staff+ or Engineering Manager' },
      { title: 'Compensation Horizon', subtitle: 'Calibrated to top 15% regional market benchmarks' },
    ],
  },
  {
    id: 'strengths',
    name: 'Latent Strengths',
    count: 'Graph Inferred',
    items: [
      { title: 'Systems Diagnostics', subtitle: 'High proficiency in tracing complex cross-service anomalies' },
      { title: 'Executive Communication', subtitle: 'Translating technical tradeoffs into business risk mitigation' },
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
    <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
      <div className="container-wide space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-mono font-bold tracking-widest text-[var(--color-brand-600)] uppercase">
            Multidimensional Self-Model
          </p>
          <h2 className="text-display-section text-[var(--color-text-primary)]">
            Your résumé records what you&apos;ve done.{' '}
            <span className="text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] block sm:inline">
              Your Career Twin helps understand what you can become.
            </span>
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)]">
            A static PDF cannot capture your potential, evolving strengths, or genuine working preferences. Career OS continuously synthesizes your capabilities into an intelligent personal model.
          </p>
        </div>

        {/* Visual Comparison: Flat Résumé vs. Multidimensional Career Twin */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: The Legacy Flat Résumé (Faded / Inadequate) */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] flex flex-col justify-between opacity-80">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-text-tertiary)]">
                The 1980s Format
              </span>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] line-through decoration-[var(--color-danger)] decoration-2">
                The Static Résumé
              </h3>
              <p className="text-xs text-[var(--color-text-tertiary)]">
                Unverifiable claims, keyword stuffing, out of date the minute it is printed.
              </p>
              
              <div className="space-y-3 pt-4 border-t border-[var(--color-border-subtle)] text-xs text-[var(--color-text-tertiary)] font-mono">
                <div className="p-3 bg-[var(--color-surface-base)] rounded-lg border border-[var(--color-border-subtle)] line-through">
                  &bull; &ldquo;Self-starter with excellent communication skills&rdquo;
                </div>
                <div className="p-3 bg-[var(--color-surface-base)] rounded-lg border border-[var(--color-border-subtle)] line-through">
                  &bull; &ldquo;Proficient in all major tools&rdquo;
                </div>
                <div className="p-3 bg-[var(--color-surface-base)] rounded-lg border border-[var(--color-border-subtle)] line-through">
                  &bull; Blindly parsed by keyword ATS black-boxes
                </div>
              </div>
            </div>

            <div className="pt-6 text-xs text-[var(--color-danger)] font-semibold">
              &times; Zero proof of future capability
            </div>
          </div>

          {/* Right: The Modern Dynamic Career Twin */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface-raised)] border-2 border-[var(--color-brand-400)] dark:border-[var(--color-brand-600)] shadow-editorial space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]">
                    The Modern Intelligence Layer
                  </span>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                    The Dynamic Career Twin
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[var(--color-verified-light)] text-[var(--color-verified)] font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 92% Evidence Verification
                  </span>
                </div>
              </div>

              {/* Interactive Dimension Tabs */}
              <div className="flex flex-wrap gap-2">
                {TWIN_DIMENSIONS.map((dim) => (
                  <button
                    key={dim.id}
                    onClick={() => setSelectedDimension(dim.id)}
                    className={cn(
                      'px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2',
                      selectedDimension === dim.id
                        ? 'bg-[var(--color-brand-600)] text-white shadow-xs'
                        : 'bg-[var(--color-surface-warm)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-interactive)] border border-[var(--color-border-default)]'
                    )}
                  >
                    <span>{dim.name}</span>
                    <span className={cn('text-[10px] px-1.5 py-0.5 rounded font-mono', selectedDimension === dim.id ? 'bg-white/20 text-white' : 'bg-[var(--color-border-default)] text-[var(--color-text-tertiary)]')}>
                      {dim.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Dimension Content Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeData.items.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] space-y-1 hover:border-[var(--color-brand-300)] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-[var(--color-text-primary)]">
                        {item.title}
                      </h4>
                      {item.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-verified)] shrink-0" />
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
            <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs">
              <span className="text-[var(--color-text-tertiary)]">
                Governed by your granular privacy access grants.
              </span>
              <Link
                href={ROUTES.PRODUCT_CAREER_TWIN}
                className="font-semibold text-[var(--color-brand-600)] hover:underline inline-flex items-center gap-1"
              >
                Learn about Career Twin <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
