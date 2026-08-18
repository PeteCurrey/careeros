'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Search, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';

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
    <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)] relative overflow-hidden">
      
      {/* ── Modern Architectural Opportunity Observatory Backdrop ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20 lg:opacity-25">
          <Image
            src="/media/product/opportunity_agent_hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        {/* Directional & Vertical Dark Dissolve Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, var(--color-surface-warm) 0%, rgba(34,34,34,0.90) 15%, rgba(24,24,24,0.85) 50%, rgba(34,34,34,0.90) 85%, var(--color-surface-warm) 100%)',
          }}
        />
        {/* Subtle ambient lighting */}
        <div className="ambient-glow-champagne absolute inset-0 pointer-events-none opacity-50" />
      </div>

      <div className="container-editorial space-y-16 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="section-label">
                Autonomous Discovery Intelligence
              </span>
              <TechnicalBadge variant="champagne" dot>
                DIRECT MATCHING
              </TechnicalBadge>
            </div>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              What if the right opportunity found you first? <br />
              <span className="text-[var(--color-taupe-300)] font-normal">
                Your career agent will find you.
              </span>
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              Instead of spending hours scrolling generic job boards and feeding résumés into automated black-box keyword filters, your Career OS agent matches opportunities directly to your verified capabilities and private parameters.
            </p>
          </div>
        </ScrollReveal>

        {/* Proactive Opportunity Matching Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Narrative Pillar */}
          <div className="lg:col-span-5">
            <ScrollReveal delayMs={100}>
              <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6 flex flex-col justify-between h-full hover-lift">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="section-label">
                      Zero Public Broadcasting
                    </span>
                    <TechnicalBadge variant="neutral">PRIVATE CONSENT</TechnicalBadge>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                    Autonomous, Private Evaluation
                  </h3>
                  <p className="text-body-editorial text-[var(--color-text-secondary)] leading-relaxed">
                    Opportunities evaluate against your Career Twin under your explicit consent ledger. Your identity and employment status remain entirely private until you choose to accept an introduction.
                  </p>
                  
                  <ul className="space-y-3 text-xs text-[var(--color-text-primary)] pt-2 font-medium">
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

                <div className="text-[11px] text-[var(--color-text-tertiary)] pt-4 border-t border-[var(--color-border-subtle)] font-mono">
                  * Autonomous opportunity matching operates under strict user-controlled consent grants.
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Matching Demonstration Flow */}
          <div className="lg:col-span-7 space-y-4">
            {MATCHES.map((match, i) => (
              <ScrollReveal key={i} delayMs={150 + i * 100}>
                <div
                  className="p-7 sm:p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-5 hover-lift"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-[var(--color-border-subtle)]">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-taupe-300)] font-mono">
                          Autonomous Direct Match
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-semibold text-[var(--color-text-primary)]">
                        {match.role}
                      </h4>
                      <p
                        className="text-xs text-[var(--color-text-secondary)]"
                        dangerouslySetInnerHTML={{ __html: match.organisation + ' &bull; ' + match.location }}
                      />
                    </div>
                    <span className="shrink-0 px-3 py-1 bg-[rgba(52,211,153,0.1)] text-[#34D399] text-xs font-semibold rounded-[var(--radius-sm)] border border-[rgba(52,211,153,0.25)] font-mono flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#34D399]" />
                      <span>{match.alignment}% Match</span>
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[11px] uppercase tracking-wider text-[var(--color-taupe-300)] font-semibold font-mono">
                      Explainable Matching Provenance
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {match.factors.map((f) => (
                        <span
                          key={f}
                          className="text-xs px-3 py-1 bg-[var(--color-surface-warm)] text-[var(--color-text-primary)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] font-medium flex items-center gap-1.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#2F8FFF]" />
                          <span>{f}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal delayMs={350}>
              <div className="pt-2 flex justify-end font-mono">
                <Link
                  href={ROUTES.PRODUCT_OPPORTUNITY_AGENT}
                  className="text-xs font-semibold text-[var(--color-text-primary)] hover:text-white inline-flex items-center gap-1 underline underline-offset-4 group"
                >
                  <span>Learn about Opportunity Agent</span>
                  <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
