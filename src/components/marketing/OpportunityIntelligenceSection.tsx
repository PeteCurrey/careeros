import React from 'react';
import { Sparkles, Compass, Shield, ArrowRight, Building2, MapPin, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

interface MatchedOpportunity {
  role: string;
  organisation: string;
  type: string;
  location: string;
  alignment: number;
  factors: string[];
}

const MATCHES: MatchedOpportunity[] = [
  {
    role: 'Lead Systems Architect — Renewable Energy Infrastructure',
    organisation: 'Nordic Clean Power Consortium',
    type: 'Full-time &bull; Hybrid',
    location: 'Edinburgh / Remote',
    alignment: 94,
    factors: ['Verified Distributed Systems Evidence', 'Clean Energy Preference Match', 'Target Compensation Band'],
  },
  {
    role: 'Staff Infrastructure Specialist',
    organisation: 'Autonomous Transit Labs',
    type: 'Full-time &bull; On-site',
    location: 'London',
    alignment: 89,
    factors: ['Electro-Mechanical Qualification Match', 'High-Trust Culture Alignment'],
  },
];

export function OpportunityIntelligenceSection() {
  return (
    <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
      <div className="container-wide space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-50)] text-xs font-mono font-bold text-[var(--color-brand-600)] uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Future Opportunity Agent
          </div>
          <h2 className="text-display-section text-[var(--color-text-primary)]">
            Eventually, you shouldn&apos;t have to search for every opportunity.{' '}
            <span className="text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] block sm:inline">
              Your career agent will find you.
            </span>
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)]">
            Instead of spending hours scrolling generic job boards and feeding résumés into keyword algorithms, your Career OS agent matches opportunities directly to your verified capabilities and private parameters.
          </p>
        </div>

        {/* Proactive Opportunity Matching Demonstration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Narrative Pillar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-xl bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] space-y-4">
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                Autonomous, Private Matching
              </h3>
              <p className="text-body-editorial text-[var(--color-text-secondary)] leading-relaxed">
                Opportunities evaluate against your Career Twin under your explicit consent. Your identity remains private until you choose to accept an introduction.
              </p>
              <ul className="space-y-2.5 text-xs text-[var(--color-text-secondary)] pt-2">
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-verified)] shrink-0" />
                  <span>Zero public broadcasting of job-search status</span>
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-verified)] shrink-0" />
                  <span>Matched on verified capability, not keyword fluff</span>
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-verified)] shrink-0" />
                  <span>Explainable alignment factors with full provenance</span>
                </li>
              </ul>
            </div>

            <div className="px-4 text-[11px] font-mono text-[var(--color-text-tertiary)]">
              * Opportunity Agent is part of the Career OS Phase 2 autonomous matching roadmap.
            </div>
          </div>

          {/* Right Matching Flow Cards */}
          <div className="lg:col-span-7 space-y-4">
            {MATCHES.map((match, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-400)] transition-all shadow-card space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-brand-600)]">
                      PROACTIVE OPPORTUNITY MATCH
                    </span>
                    <h4 className="text-lg font-bold text-[var(--color-text-primary)] mt-1">
                      {match.role}
                    </h4>
                    <p
                      className="text-xs text-[var(--color-text-secondary)] mt-0.5"
                      dangerouslySetInnerHTML={{ __html: match.organisation }}
                    />
                  </div>
                  <div className="shrink-0 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[var(--color-verified-light)] text-[var(--color-verified)] text-xs font-mono font-bold">
                      {match.alignment}% Capability Fit
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-[11px] font-mono font-bold text-[var(--color-text-tertiary)] uppercase">
                    WHY THIS OPPORTUNITY REACHED YOU
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {match.factors.map((f) => (
                      <span key={f} className="px-3 py-1 rounded-lg bg-[var(--color-surface-warm)] text-xs text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)]">
                        &bull; {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
