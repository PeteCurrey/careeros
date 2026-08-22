'use client';

import React from 'react';
import { REGULATORY_REFERENCES } from './trustData';
import { cn } from '@/lib/utils';
import { 
  FileText, 
  ExternalLink, 
  ShieldCheck, 
  Globe,
  AlertCircle
} from 'lucide-react';

export function RegulatoryReferencesPanel() {
  return (
    <div
      id="regulatory-references"
      className="w-full bg-[var(--background-dark-deep)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl space-y-0"
      role="region"
      aria-label="Official Regulatory Standards and Frameworks Referenced"
    >
      {/* Header */}
      <div className="p-6 sm:p-8 bg-[var(--overlay-inset)] backdrop-blur-sm border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-brand-300)] font-semibold flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
            Official Reference Library
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-[var(--color-text-primary)] font-normal">
            Regulatory &amp; Standards References
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            Official frameworks, regulatory guidance, and voluntary standards that inform Career OS governance architecture.
          </p>
        </div>
        {/* Disclaimer Badge */}
        <div className="flex items-start gap-2 p-3 rounded-lg bg-[var(--color-warning-light)] border border-[var(--color-warning)]/25 text-[var(--color-warning)] text-[11px] max-w-xs self-start sm:self-auto">
          <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          <span>References do not imply formal certification unless explicitly stated.</span>
        </div>
      </div>

      {/* Reference Entries */}
      <div className="divide-y divide-[var(--color-border-subtle)]">
        {REGULATORY_REFERENCES.map((ref) => (
          <div key={ref.framework} className="p-5 sm:p-6 hover:bg-[var(--overlay-lift)] transition-colors space-y-3 text-xs">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] font-semibold block">
                  {ref.category}
                </span>
                <h4 className="font-semibold text-[var(--color-text-primary)] text-sm leading-snug">
                  {ref.framework}
                </h4>
                <p className="text-[11px] text-[var(--color-text-tertiary)]">
                  {ref.authority}
                </p>
              </div>
              <a
                href={ref.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[var(--color-brand-300)] hover:text-[var(--color-text-primary)] transition-colors shrink-0 px-3 py-1.5 rounded border border-[var(--color-border-default)] hover:border-[var(--accent-blue)] bg-[var(--overlay-lift)]"
                aria-label={`View official ${ref.framework} documentation`}
              >
                <ExternalLink className="w-3 h-3" />
                View Official Source
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-[var(--color-taupe-300)] uppercase block">
                  Relevance to CareerOS:
                </span>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {ref.relevance}
                </p>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-[var(--color-success)] uppercase block">
                  Governance Alignment:
                </span>
                <p className="text-[var(--color-text-primary)] font-medium leading-relaxed">
                  {ref.governanceAlignment}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 bg-[var(--overlay-inset)] backdrop-blur-sm border-t border-[var(--color-border-default)] text-xs text-[var(--color-text-tertiary)] italic">
        External references are provided for transparency. Career OS does not claim formal certification under any of these frameworks unless separately verified.
      </div>
    </div>
  );
}
