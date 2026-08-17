'use client';

import React from 'react';
import { FileText, Cpu, Check, X } from 'lucide-react';

export function ResumeVsTwinComparison() {
  const comparisonItems = [
    {
      attribute: 'Primary Purpose',
      resume: 'Communicating selected historical highlights for a specific job application.',
      twin: 'Providing living, structured context for lifelong career development and guidance.',
    },
    {
      attribute: 'Data Structure',
      resume: 'Flat, unformatted or semi-structured text document (PDF/Word).',
      twin: 'Multi-dimensional graph linking skills, proof, goals, and market relationships.',
    },
    {
      attribute: 'Time Horizon',
      resume: 'Backward-looking historical record of past employers and titles.',
      twin: 'Continuous continuum: past achievements + active learning + future trajectories.',
    },
    {
      attribute: 'Proof & Evidence',
      resume: 'Unverified self-declared bullet points ("Managed project budget").',
      twin: 'Evidence-backed artifacts with verifiable issuer & platform audit trails.',
    },
    {
      attribute: 'Maintenance Burden',
      resume: 'Manually rewritten and tailored from scratch for every single application.',
      twin: 'Compounding context that automatically enriches as work and learning happen.',
    },
    {
      attribute: 'Privacy Control',
      resume: 'All-or-nothing broadcast once attached to a job application.',
      twin: 'Granular field-level permissions (Mentor View vs Employer View vs Public).',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Card: The Traditional Résumé */}
        <div className="p-8 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-5">
          <div className="flex items-center gap-3 border-b border-[var(--color-border-subtle)] pb-4">
            <div className="w-10 h-10 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-center justify-center text-[var(--color-taupe-700)]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="section-label">TRADITIONAL FORMAT</span>
              <h3 className="font-serif font-bold text-xl text-[var(--color-charcoal-deep)]">
                The Résumé
              </h3>
            </div>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            Designed for 20th-century paper processing. Useful for broadcasting selected claims, but incapable of holding ongoing developmental context.
          </p>
          <ul className="space-y-3 pt-2 text-xs">
            <li className="flex items-start gap-2 text-[var(--color-text-secondary)]">
              <X className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>Resets context every time you start a new search or job application.</span>
            </li>
            <li className="flex items-start gap-2 text-[var(--color-text-secondary)]">
              <X className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>Forces non-linear career achievements into rigid chronological job titles.</span>
            </li>
            <li className="flex items-start gap-2 text-[var(--color-text-secondary)]">
              <X className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>Cannot distinguish between a claimed skill and a verified capability.</span>
            </li>
          </ul>
        </div>

        {/* Right Card: The Career Twin */}
        <div className="p-8 bg-[var(--color-surface-raised)] border-2 border-[var(--color-charcoal-deep)] rounded-[var(--radius-card)] space-y-5 shadow-subtle relative overflow-hidden">
          <div className="absolute top-0 right-0 px-4 py-1 bg-[var(--color-charcoal-deep)] text-[var(--color-ivory-base)] font-mono text-[10px] font-bold uppercase tracking-wider rounded-bl">
            Career OS Core Model
          </div>
          <div className="flex items-center gap-3 border-b border-[var(--color-border-subtle)] pb-4">
            <div className="w-10 h-10 rounded bg-[var(--color-charcoal-deep)] text-[var(--color-ivory-base)] flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="section-label">CAREER OS ARCHITECTURE</span>
              <h3 className="font-serif font-bold text-xl text-[var(--color-charcoal-deep)]">
                The Career Twin
              </h3>
            </div>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            A living representation of your full professional context—connecting what you can do, what you have built, and where you want to go.
          </p>
          <ul className="space-y-3 pt-2 text-xs">
            <li className="flex items-start gap-2 text-[var(--color-charcoal-deep)] font-medium">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Compounds lifelong context so you never start from zero during career transitions.</span>
            </li>
            <li className="flex items-start gap-2 text-[var(--color-charcoal-deep)] font-medium">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Links verified evidence and project artifacts directly to your capability profile.</span>
            </li>
            <li className="flex items-start gap-2 text-[var(--color-charcoal-deep)] font-medium">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Protects private goals and salary targets behind strict field-level permission controls.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Structured Editorial Comparison Table */}
      <div className="overflow-x-auto border border-[var(--color-border-default)] rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)] font-mono uppercase text-[10px] text-[var(--color-taupe-700)]">
              <th className="p-4 font-bold">Dimension</th>
              <th className="p-4 font-bold text-[var(--color-text-tertiary)]">Traditional Résumé</th>
              <th className="p-4 font-bold text-[var(--color-charcoal-deep)]">Career OS Career Twin</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border-subtle)]">
            {comparisonItems.map((row, idx) => (
              <tr key={idx} className="hover:bg-[var(--color-surface-warm)] transition-colors">
                <td className="p-4 font-bold text-[var(--color-charcoal-deep)] whitespace-nowrap font-mono text-[11px]">
                  {row.attribute}
                </td>
                <td className="p-4 text-[var(--color-text-secondary)] leading-relaxed max-w-xs">
                  {row.resume}
                </td>
                <td className="p-4 text-[var(--color-charcoal-deep)] font-medium leading-relaxed max-w-xs bg-[var(--color-ivory-base)]/40">
                  {row.twin}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
