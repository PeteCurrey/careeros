'use client';

import React from 'react';
import { FileText, FileCheck, Check, X, ShieldCheck } from 'lucide-react';

export function ResumeVsPassportComparison() {
  const comparisonData = [
    {
      criterion: 'Core Objective',
      resume: 'Fast screening document designed to get a candidate through an initial recruiter filter.',
      passport: 'Comprehensive, verifiable record designed to support lifelong capability and career mobility.',
    },
    {
      criterion: 'Proof Model',
      resume: 'Unverified self-declared statements ("Spearheaded cross-functional safety transformation").',
      passport: 'Evidence-linked records with direct attachments, issuer confirmations, and audit trails.',
    },
    {
      criterion: 'Document Lifespan',
      resume: 'Ephemeral snapshot written for a single vacancy, frequently discarded after hiring.',
      passport: 'Compounding lifetime record that stays with you across employers, industries, and education.',
    },
    {
      criterion: 'Handling Complex Proof',
      resume: 'Limited to bullet points; cannot embed reports, code repositories, or CAD drawings.',
      passport: 'Structured artifact vault accommodating technical logs, project deliverables, and licenses.',
    },
    {
      criterion: 'Status Transparency',
      resume: 'Treats all statements identically regardless of whether they are self-claimed or verified.',
      passport: 'Explicit verification states (Self-declared, Evidence attached, Issuer verified, Expired).',
    },
    {
      criterion: 'Sharing Precision',
      resume: 'All-or-nothing document sent out without granular field-level redaction.',
      passport: 'Selective sharing packages allowing you to share only what is relevant to each specific role.',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Split Comparison Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Résumé Card */}
        <div className="p-8 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-5">
          <div className="flex items-center gap-3 border-b border-[var(--color-border-subtle)] pb-4">
            <div className="w-10 h-10 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-center justify-center text-[var(--color-taupe-700)]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="section-label">THE SUMMARY LAYER</span>
              <h3 className="font-serif font-bold text-xl text-[var(--color-text-primary)]">
                The Traditional Résumé
              </h3>
            </div>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            The résumé remains an effective tool for quick screening and concise communication. But it cannot carry the authentic evidence behind your claims.
          </p>
          <ul className="space-y-3 pt-2 text-xs">
            <li className="flex items-start gap-2 text-[var(--color-text-secondary)]">
              <X className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>Forces multi-year technical projects into two-line bullet points.</span>
            </li>
            <li className="flex items-start gap-2 text-[var(--color-text-secondary)]">
              <X className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>Cannot verify whether certifications are genuine or currently expired.</span>
            </li>
            <li className="flex items-start gap-2 text-[var(--color-text-secondary)]">
              <X className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>Requires manual rebuilding for every job opportunity you pursue.</span>
            </li>
          </ul>
        </div>

        {/* Career Passport Card */}
        <div className="p-8 bg-[var(--color-surface-raised)] border-2 border-white/15 rounded-[var(--radius-card)] space-y-5 shadow-subtle relative overflow-hidden">
          <div className="absolute top-0 right-0 px-4 py-1 bg-white/15 text-[var(--color-text-primary)] font-mono text-[10px] font-bold uppercase tracking-wider rounded-bl">
            Supporting Evidence Record
          </div>
          <div className="flex items-center gap-3 border-b border-[var(--color-border-subtle)] pb-4">
            <div className="w-10 h-10 rounded bg-white/15 text-[var(--color-text-primary)] flex items-center justify-center">
              <FileCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="section-label">THE VERIFIABLE RECORD</span>
              <h3 className="font-serif font-bold text-xl text-[var(--color-text-primary)]">
                The Career Passport
              </h3>
            </div>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            The supporting record behind your career—bringing together verified credentials, project artifacts, and work history that you control and carry anywhere.
          </p>
          <ul className="space-y-3 pt-2 text-xs">
            <li className="flex items-start gap-2 text-[var(--color-text-primary)] font-medium">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Holds genuine project documentation, technical reports, and credentials.</span>
            </li>
            <li className="flex items-start gap-2 text-[var(--color-text-primary)] font-medium">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Displays transparent verification states from self-declared to issuer verified.</span>
            </li>
            <li className="flex items-start gap-2 text-[var(--color-text-primary)] font-medium">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Supports selective sharing so you only reveal evidence relevant to the recipient.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Editorial Quotation Banner */}
      <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] text-center text-xs text-[var(--color-text-primary)] font-medium">
        <span className="font-serif italic text-sm">
          “The résumé can remain the summary. The Passport becomes the supporting record.”
        </span>
      </div>

      {/* Structured Comparison Table */}
      <div className="overflow-x-auto border border-[var(--color-border-default)] rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)] font-mono uppercase text-[10px] text-[var(--color-taupe-700)]">
              <th className="p-4 font-bold">Comparison Area</th>
              <th className="p-4 font-bold text-[var(--color-text-tertiary)]">Traditional Résumé</th>
              <th className="p-4 font-bold text-[var(--color-text-primary)]">Career OS Career Passport</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border-subtle)]">
            {comparisonData.map((row, idx) => (
              <tr key={idx} className="hover:bg-[var(--color-surface-warm)] transition-colors">
                <td className="p-4 font-bold text-[var(--color-text-primary)] whitespace-nowrap font-mono text-[11px]">
                  {row.criterion}
                </td>
                <td className="p-4 text-[var(--color-text-secondary)] leading-relaxed max-w-xs">
                  {row.resume}
                </td>
                <td className="p-4 text-[var(--color-text-primary)] font-medium leading-relaxed max-w-xs bg-[var(--color-surface-base)]/40">
                  {row.passport}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
