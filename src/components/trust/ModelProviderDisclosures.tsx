'use client';

import React, { useState } from 'react';
import { MODEL_PROVIDER_DISCLOSURES, ModelProviderRecord } from './trustData';
import { cn } from '@/lib/utils';
import { 
  Building2, 
  ShieldCheck, 
  Lock, 
  Globe, 
  CheckCircle2, 
  AlertCircle,
  Sparkles
} from 'lucide-react';

export function ModelProviderDisclosures() {
  const [selectedProviderIndex, setSelectedProviderIndex] = useState(0);

  const activeProvider: ModelProviderRecord =
    MODEL_PROVIDER_DISCLOSURES[selectedProviderIndex] || MODEL_PROVIDER_DISCLOSURES[0]!;

  return (
    <div
      id="model-provider-disclosures"
      className="w-full bg-[var(--background-dark-deep)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl space-y-0"
      role="region"
      aria-label="Foundation Model and Provider Transparency Disclosures"
    >
      {/* Top Header */}
      <div className="p-6 sm:p-8 bg-[var(--overlay-inset)] backdrop-blur-sm border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-brand-300)] font-semibold flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
            Enterprise Model Infrastructure
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-[var(--color-text-primary)] font-normal">
            Foundation Model &amp; Provider Disclosures
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            Review the foundation model providers utilized across Career OS, including data processing regions and enterprise zero-training terms.
          </p>
        </div>
        <span className="text-[10px] font-mono uppercase px-3 py-1.5 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/60 text-[var(--color-text-tertiary)] self-start sm:self-auto shrink-0">
          Zero Vendor Training
        </span>
      </div>

      {/* Provider Tabs */}
      <div className="p-4 sm:p-6 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border-b border-[var(--color-border-default)]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5" role="tablist" aria-label="Model Providers">
          {MODEL_PROVIDER_DISCLOSURES.map((prov, idx) => {
            const isSelected = idx === selectedProviderIndex;
            return (
              <button
                key={prov.provider}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedProviderIndex(idx)}
                className={cn(
                  'p-3.5 rounded-lg border text-left transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] flex flex-col justify-between space-y-1.5',
                  isSelected
                    ? 'bg-[var(--overlay-lift-strong)] border-[var(--color-border-strong)] shadow-md ring-1 ring-[var(--color-border-strong)]'
                    : 'bg-[var(--color-surface-raised)]/60 border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-[var(--color-text-primary)]">
                    {prov.providerDisplayName.split(' (')[0]}
                  </span>
                  <span className="text-[9px] font-mono text-[var(--color-success)] font-bold px-1.5 py-0.5 rounded bg-[var(--color-success-light)] border border-[var(--color-success)]/25">
                    {prov.status}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[var(--color-taupe-300)]">
                  {prov.modelFamily}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Provider Details Grid */}
      <div className="p-6 sm:p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2">
              <span className="text-[10px] font-mono uppercase text-[var(--color-brand-300)] font-semibold block">
                Primary Purpose in Career OS
              </span>
              <p className="text-[var(--color-text-primary)] font-medium leading-relaxed">
                {activeProvider.purpose}
              </p>
              <div className="pt-2">
                <span className="text-[10px] font-mono text-[var(--color-taupe-300)] block mb-1">Capabilities Utilized:</span>
                <div className="flex flex-wrap gap-1.5">
                  {activeProvider.capabilitiesUsed.map((cap) => (
                    <span key={cap} className="px-2 py-0.5 rounded bg-[var(--overlay-lift)] border border-[var(--color-border-default)] text-[10px] text-[var(--color-text-primary)]">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2">
              <span className="text-[10px] font-mono uppercase text-[var(--color-success)] font-semibold block">
                Enterprise PII &amp; Data Residency
              </span>
              <p className="text-[var(--color-text-primary)] font-medium leading-relaxed">
                {activeProvider.piiHandling}
              </p>
              <div className="pt-2 text-[11px] font-mono text-[var(--color-success)] flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>Residency: {activeProvider.processingRegion}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-[var(--color-surface-warm)]/60 backdrop-blur-sm border border-[var(--color-border-subtle)] space-y-2">
              <span className="text-[10px] font-mono uppercase text-[var(--color-warning)] font-semibold block">
                Material Model Limitations
              </span>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {activeProvider.limitations}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[var(--overlay-inset)] backdrop-blur-sm border border-[var(--color-border-default)] space-y-2">
              <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] font-semibold block">
                Governance Review &amp; Security Boundary
              </span>
              <div className="flex items-center justify-between text-[11px] font-mono text-[var(--color-text-secondary)]">
                <span>Last Comprehensive Review:</span>
                <span className="text-[var(--color-text-primary)] font-bold">{activeProvider.lastReview}</span>
              </div>
              <p className="text-[11px] text-[var(--color-text-tertiary)] pt-1">
                * Zero exposure of sensitive environment variables, internal prompt templates, or system API keys.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Statement */}
      <div className="p-4 bg-[var(--overlay-inset)] backdrop-blur-sm border-t border-[var(--color-border-default)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-text-tertiary)]">
        <span className="italic">
          &ldquo;Enterprise terms guarantee that vendor foundation models never train on user conversation or profile data.&rdquo;
        </span>
        <span className="font-mono text-[11px] text-[var(--color-taupe-300)] shrink-0">
          Enterprise Security Standard
        </span>
      </div>
    </div>
  );
}
