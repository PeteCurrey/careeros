'use client';

import React, { useState } from 'react';
import { CAPABILITY_GOVERNANCE_MATRIX, CapabilityGovernanceItem } from './trustData';
import { cn } from '@/lib/utils';
import { 
  ShieldCheck, 
  Bot, 
  UserCheck, 
  Lock, 
  AlertCircle, 
  Eye, 
  Sparkles,
  Layers
} from 'lucide-react';

export function TrustCapabilityMatrix() {
  const [filterImpact, setFilterImpact] = useState<string>('ALL');

  const filteredItems = filterImpact === 'ALL'
    ? CAPABILITY_GOVERNANCE_MATRIX
    : CAPABILITY_GOVERNANCE_MATRIX.filter((item) => item.consequentialImpact === filterImpact);

  return (
    <div
      id="capability-governance-matrix"
      className="w-full bg-[var(--background-dark-deep)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl space-y-0"
      role="region"
      aria-label="Career OS Capability Governance Matrix"
    >
      {/* Top Filter Header */}
      <div className="p-6 sm:p-8 bg-[var(--overlay-inset)] backdrop-blur-sm border-b border-[var(--color-border-default)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-brand-300)] font-semibold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
            Feature-Level Governance Architecture
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-[var(--color-text-primary)] font-normal">
            Where Governance Applies Across Career OS
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            Review how AI involvement, human oversight, and safeguards scale proportionally with consequential impact.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono shrink-0">
          <span className="text-[11px] text-[var(--color-text-tertiary)] mr-1">Filter Impact:</span>
          {['ALL', 'LOW', 'MODERATE', 'HEIGHTENED'].map((tier) => (
            <button
              key={tier}
              type="button"
              onClick={() => setFilterImpact(tier)}
              className={cn(
                'px-2.5 py-1 rounded text-[11px] border transition-colors',
                filterImpact === tier
                  ? 'bg-[var(--overlay-lift-strong)] border-[var(--color-border-strong)] text-[var(--color-text-primary)] font-semibold'
                  : 'bg-[var(--overlay-lift)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              )}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto p-6 sm:p-8">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-[var(--color-border-default)] text-[10px] font-mono uppercase text-[var(--color-taupe-300)]">
              <th className="pb-3 pr-4 font-semibold">Capability</th>
              <th className="pb-3 px-3 font-semibold text-[var(--color-text-primary)]">AI Involvement</th>
              <th className="pb-3 px-3 font-semibold text-[var(--color-text-mauve)]">Human Review &amp; Agency</th>
              <th className="pb-3 px-3 font-semibold text-[var(--color-warning)]">Impact Tier</th>
              <th className="pb-3 pl-3 font-semibold text-[var(--color-success)]">Safeguards</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border-subtle)]">
            {filteredItems.map((item) => (
              <tr key={item.capability} className="hover:bg-[var(--overlay-lift)] transition-colors">
                <td className="py-4 pr-4 align-top max-w-xs space-y-1">
                  <span className="font-semibold text-[var(--color-text-primary)] block text-xs">{item.capability}</span>
                  <span className="text-[11px] text-[var(--color-text-tertiary)] block leading-relaxed">{item.description}</span>
                </td>

                <td className="py-4 px-3 align-top text-[11px] text-[var(--color-text-secondary)] max-w-xs">
                  {item.aiRole}
                </td>

                <td className="py-4 px-3 align-top text-[11px] text-[var(--color-text-primary)] max-w-xs">
                  {item.humanReview}
                </td>

                <td className="py-4 px-3 align-top">
                  <span
                    className={cn(
                      'inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold border uppercase',
                      item.consequentialImpact === 'LOW'
                        ? 'text-[var(--color-brand-300)] bg-[var(--accent-blue-subtle)] border-[var(--accent-blue-border)]'
                        : item.consequentialImpact === 'MODERATE'
                        ? 'text-[var(--color-warning)] bg-[var(--color-warning-light)] border-[var(--color-warning)]/30'
                        : 'text-[var(--color-danger)] bg-[var(--color-danger-light)] border-[var(--color-danger)]/30'
                    )}
                  >
                    {item.consequentialImpact}
                  </span>
                </td>

                <td className="py-4 pl-3 align-top text-[11px] text-[var(--color-text-secondary)] space-y-1">
                  {item.safeguards.map((sg) => (
                    <div key={sg} className="flex items-center gap-1.5 text-[var(--color-text-secondary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)] shrink-0" />
                      <span>{sg}</span>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile / Tablet Cards View */}
      <div className="lg:hidden p-4 sm:p-6 space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.capability}
            className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-3 text-xs"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="font-semibold text-[var(--color-text-primary)] text-sm">{item.capability}</h4>
                <p className="text-[11px] text-[var(--color-text-secondary)] mt-0.5">{item.description}</p>
              </div>
              <span
                className={cn(
                  'px-2 py-0.5 rounded text-[9px] font-mono font-bold border uppercase shrink-0',
                  item.consequentialImpact === 'LOW'
                    ? 'text-[var(--color-brand-300)] bg-[var(--accent-blue-subtle)] border-[var(--accent-blue-border)]'
                    : item.consequentialImpact === 'MODERATE'
                    ? 'text-[var(--color-warning)] bg-[var(--color-warning-light)] border-[var(--color-warning)]/30'
                    : 'text-[var(--color-danger)] bg-[var(--color-danger-light)] border-[var(--color-danger)]/30'
                )}
              >
                {item.consequentialImpact}
              </span>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-[var(--color-border-subtle)]">
              <div>
                <span className="text-[10px] font-mono text-[var(--color-taupe-300)] uppercase block">AI Role:</span>
                <span className="text-[var(--color-text-primary)]">{item.aiRole}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[var(--color-taupe-300)] uppercase block">Human Oversight:</span>
                <span className="text-[var(--color-text-mauve)]">{item.humanReview}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[var(--color-border-subtle)] space-y-1">
              <span className="text-[10px] font-mono text-[var(--color-success)] uppercase block">Safeguards:</span>
              <div className="flex flex-wrap gap-1.5">
                {item.safeguards.map((sg) => (
                  <span key={sg} className="px-2 py-0.5 rounded bg-[var(--overlay-lift)] border border-[var(--color-border-default)] text-[10px] text-[var(--color-text-primary)]">
                    {sg}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Statement */}
      <div className="p-4 bg-[var(--overlay-inset)] backdrop-blur-sm border-t border-[var(--color-border-default)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-text-tertiary)]">
        <span className="italic">
          &ldquo;AI recommendations can be challenged, corrected, or disregarded.&rdquo;
        </span>
        <span className="font-mono text-[11px] text-[var(--color-taupe-300)] shrink-0">
          Proportional Risk Calibration
        </span>
      </div>
    </div>
  );
}
