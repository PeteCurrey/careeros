'use client';

import React from 'react';
import { Check, Minus } from 'lucide-react';

interface ComparisonRow {
  capability: string;
  traditional: string;
  jobBoards: string;
  careerOS: string;
  isHighlight?: boolean;
}

const ROWS: ComparisonRow[] = [
  {
    capability: 'Continuous Career Context',
    traditional: 'One-off snapshot',
    jobBoards: 'Static keyword profile',
    careerOS: 'Lifelong dynamic model',
    isHighlight: true,
  },
  {
    capability: 'Sovereign Evidence Record',
    traditional: 'None (quiz result)',
    jobBoards: 'Unverified self-claims',
    careerOS: 'Portable W3C credentials',
    isHighlight: true,
  },
  {
    capability: 'Personal Strategic Mentoring',
    traditional: 'Generic static PDF report',
    jobBoards: 'None',
    careerOS: 'Persistent AI advisory with explainability',
  },
  {
    capability: 'Parity for University & Skilled Trades',
    traditional: 'Academic bias',
    jobBoards: 'Fragmented job categories',
    careerOS: 'Equal capability weighting & graph mapping',
  },
  {
    capability: 'Private Opportunity Matching',
    traditional: 'None',
    jobBoards: 'Public resume database / spam',
    careerOS: 'Autonomous matching under strict consent',
  },
  {
    capability: 'Lifetime Data Ownership',
    traditional: 'Vendor-locked test',
    jobBoards: 'Sold to corporate recruiters',
    careerOS: 'User-owned & free for individuals',
    isHighlight: true,
  },
];

export function ComparisonTableSection() {
  return (
    <section className="section-editorial bg-[var(--color-ivory-base)] border-b border-[var(--color-border-default)]">
      <div className="container-editorial space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="section-label">
            Architectural Comparison
          </span>
          <h2 className="text-display-section text-[var(--color-charcoal-deep)]">
            Built as infrastructure, not a transactional tool.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)]">
            Compare how Career OS differs from one-time career personality quizzes and commercial recruiter databases.
          </p>
        </div>

        {/* Editorial Comparison Table */}
        <div className="border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] rounded-[var(--radius-card)] overflow-hidden shadow-subtle">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-border-default)] bg-[var(--color-ivory-warm)] text-xs text-[var(--color-charcoal-deep)] font-semibold">
                  <th className="p-5 sm:p-6 font-semibold w-1/3">Core Capability</th>
                  <th className="p-5 sm:p-6 font-medium text-[var(--color-text-tertiary)] w-1/5">Traditional Quizzes</th>
                  <th className="p-5 sm:p-6 font-medium text-[var(--color-text-tertiary)] w-1/5">Job Boards</th>
                  <th className="p-5 sm:p-6 font-bold text-white bg-[var(--color-charcoal-base)] w-1/4">Career OS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-default)] text-xs sm:text-sm">
                {ROWS.map((row) => (
                  <tr key={row.capability} className="hover:bg-[var(--color-ivory-warm)]/40 transition-colors">
                    <td className="p-5 sm:p-6 font-semibold text-[var(--color-charcoal-deep)]">
                      {row.capability}
                    </td>
                    <td className="p-5 sm:p-6 text-[var(--color-text-secondary)]">
                      {row.traditional}
                    </td>
                    <td className="p-5 sm:p-6 text-[var(--color-text-secondary)]">
                      {row.jobBoards}
                    </td>
                    <td className="p-5 sm:p-6 font-semibold text-[var(--color-charcoal-deep)] bg-[var(--color-ivory-deep)]/40 border-l border-r border-[var(--color-border-default)]">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[var(--color-success)] shrink-0" />
                        <span>{row.careerOS}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}