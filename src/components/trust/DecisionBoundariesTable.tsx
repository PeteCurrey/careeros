'use client';

import React from 'react';
import { 
  Bot, 
  Sparkles, 
  Users, 
  UserCheck, 
  Lock, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const BOUNDARY_TIERS = [
  {
    tier: 'Tier 01 &bull; AI Assistance',
    title: 'Exploratory & Formative Support',
    aiDoes: 'Drafts bullet points, explains industry terminology, simulates interview practice prompts.',
    humanDoes: 'Directs the session, reviews drafts, edits or discards content before export.',
    boundary: 'Zero external transmission without explicit user confirmation.',
    badgeColor: 'text-cyan-300 bg-cyan-950/40 border-cyan-500/30',
  },
  {
    tier: 'Tier 02 &bull; AI Recommendation',
    title: 'Advisory Guidance & Comparisons',
    aiDoes: 'Suggests transferable skill bridges, compares university vs degree apprenticeships, surfaces open days.',
    humanDoes: 'Evaluates suggestions against personal preferences, discusses with school counselor, decides whether to pursue.',
    boundary: 'Recommendation is never a binding decision; zero algorithmic lock-in.',
    badgeColor: 'text-amber-300 bg-amber-950/40 border-amber-500/30',
  },
  {
    tier: 'Tier 03 &bull; AI-Assisted Higher-Impact',
    title: 'Candidate Discovery & Talent Matching',
    aiDoes: 'Matches candidate-consented skill portfolios to employer role requirements.',
    humanDoes: 'Hiring managers review profiles, conduct interviews, and evaluate human context.',
    boundary: 'Strictly prohibited on minors (under 18); zero automated applicant rejections.',
    badgeColor: 'text-purple-300 bg-purple-950/40 border-purple-500/30',
  },
  {
    tier: 'Tier 04 &bull; Consequential Human Decision',
    title: 'Binding Life & Career Outcomes',
    aiDoes: 'STRICTLY PROHIBITED. AI has zero authority to make consequential determinations.',
    humanDoes: 'Sole domain of authorized human decision-makers (hiring managers, admissions deans, educators).',
    boundary: 'Non-negotiable architectural rule: AI never hires, fires, admits, or grades.',
    badgeColor: 'text-emerald-300 bg-emerald-950/40 border-emerald-500/30',
  },
];

export function DecisionBoundariesTable() {
  return (
    <div
      id="decision-boundaries"
      className="w-full bg-[var(--background-dark-deep)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl space-y-0"
      role="region"
      aria-label="Decision Boundaries: Where AI Stops Table"
    >
      {/* Header */}
      <div className="p-6 sm:p-8 bg-black/30 backdrop-blur-sm border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#6BB8FF] font-semibold flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-[#2F8FFF]" />
            Governance Boundary &bull; Consequential Decision Isolation
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
            Where AI Stops: Decision Boundaries
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            Explore how Career OS separates automated assistance from human decision-making authority.
          </p>
        </div>
        <span className="text-[10px] font-mono uppercase px-3 py-1.5 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/60 text-[var(--color-text-tertiary)] self-start sm:self-auto shrink-0">
          Non-Negotiable Rule
        </span>
      </div>

      {/* 4 Tiers Grid */}
      <div className="p-6 sm:p-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {BOUNDARY_TIERS.map((b) => (
            <div
              key={b.title}
              className="p-5 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] hover:border-white/20 transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      'text-[10px] font-mono uppercase px-2 py-0.5 rounded border font-semibold',
                      b.badgeColor
                    )}
                    dangerouslySetInnerHTML={{ __html: b.tier }}
                  />
                </div>
                <h4 className="text-base font-serif text-white font-normal">
                  {b.title}
                </h4>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#6BB8FF] font-semibold block">
                    AI Capability:
                  </span>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {b.aiDoes}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-purple-300 font-semibold block">
                    Human Authority:
                  </span>
                  <p className="text-white font-medium leading-relaxed">
                    {b.humanDoes}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[var(--color-border-subtle)] space-y-0.5">
                <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold block">
                  Hard Boundary:
                </span>
                <p className="text-[11px] text-[var(--color-taupe-300)]">
                  {b.boundary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Statement */}
      <div className="p-4 bg-black/30 backdrop-blur-sm border-t border-[var(--color-border-default)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-text-tertiary)]">
        <span className="italic">
          &ldquo;AI should expand human opportunity — not quietly make decisions about people&apos;s futures.&rdquo;
        </span>
        <span className="font-mono text-[11px] text-[var(--color-taupe-300)] shrink-0">
          Core Human Primacy Standard
        </span>
      </div>
    </div>
  );
}
