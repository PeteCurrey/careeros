'use client';

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
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
    location: 'Austin, TX / Remote',
    alignment: 94,
    factors: ['Verified Distributed Systems Deliverable', 'Clean Energy Sector Preference', 'Target Compensation Calibration'],
  },
  {
    role: 'Staff Infrastructure Operations Specialist',
    organisation: 'Autonomous Transit Labs',
    type: 'Full-time &bull; On-site',
    location: 'San Francisco, CA',
    alignment: 89,
    factors: ['Electro-Mechanical Diagnostics Evidence', 'High-Trust Culture Model Match'],
  },
];

export function OpportunityIntelligenceSection() {
  return (
    <section className="section-editorial bg-[var(--color-ivory-warm)] border-b border-[var(--color-border-default)]">
      <div className="container-editorial space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="section-label">
              Autonomous Discovery Intelligence
            </span>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-taupe-600)] px-2 py-0.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)]">
              Platform Direction
            </span>
          </div>
          <h2 className="text-display-section text-[var(--color-charcoal-deep)]">
            What if the right opportunity found you first? <br />
            <span className="text-[var(--color-taupe-600)] font-normal">
              Your career agent will find you.
            </span>
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)]">
            Instead of spending hours scrolling generic job boards and feeding résumés into automated black-box keyword filters, your Career OS agent matches opportunities directly to your verified capabilities and private parameters.
          </p>
        </div>

        {/* Proactive Opportunity Matching Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Narrative Pillar */}
          <div className="lg:col-span-5 p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="section-label">
                Zero Public Broadcasting
              </span>
              <h3 className="text-xl font-semibold text-[var(--color-charcoal-deep)]">
                Autonomous, Private Evaluation
              </h3>
              <p className="text-body-editorial text-[var(--color-text-secondary)] leading-relaxed">
                Opportunities evaluate against your Career Twin under your explicit consent ledger. Your identity and employment status remain entirely private until you choose to accept an introduction.
              </p>
              
              <ul className="space-y-3 text-xs text-[var(--color-charcoal-deep)] pt-2 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] shrink-0 mt-0.5" />
                  <span>Zero public broadcasting of job-search status to your current employer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] shrink-0 mt-0.5" />
                  <span>Matched on verified capability and deliverable evidence, not keyword fluff</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] shrink-0 mt-0.5" />
                  <span>Explainable alignment factors with transparent criteria provenance</span>
                </li>
              </ul>
            </div>

            <div className="text-[11px] text-[var(--color-text-tertiary)] pt-4 border-t border-[var(--color-border-subtle)]">
              * Autonomous opportunity matching operates under strict user-controlled consent grants.
            </div>
          </div>

          {/* Right Matching Demonstration Flow */}
          <div className="lg:col-span-7 space-y-4">
            {MATCHES.map((match, i) => (
              <div
                key={i}
                className="p-7 sm:p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-[var(--color-border-subtle)]">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-taupe-600)]">
                      Autonomous Direct Match
                    </span>
                    <h4 className="text-base sm:text-lg font-semibold text-[var(--color-charcoal-deep)]">
                      {match.role}
                    </h4>
                    <p
                      className="text-xs text-[var(--color-text-secondary)]"
                      dangerouslySetInnerHTML={{ __html: match.organisation + ' &bull; ' + match.location }}
                    />
                  </div>
                  <span className="shrink-0 px-3 py-1 bg-[var(--color-success-light)] text-[var(--color-success)] text-xs font-semibold rounded-[var(--radius-sm)] border border-[var(--color-success)]/20">
                    {match.alignment}% Capability Fit
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-[11px] uppercase tracking-wider text-[var(--color-taupe-600)] font-semibold">
                    Explainable Matching Provenance
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {match.factors.map((f) => (
                      <span
                        key={f}
                        className="text-xs px-3 py-1 bg-[var(--color-ivory-warm)] text-[var(--color-charcoal-deep)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] font-medium"
                      >
                        &bull; {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-2 flex justify-end">
              <Link
                href={ROUTES.PRODUCT_OPPORTUNITY_AGENT}
                className="text-xs font-semibold text-[var(--color-charcoal-deep)] hover:text-black inline-flex items-center gap-1 underline underline-offset-4"
              >
                Learn about Opportunity Agent <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

