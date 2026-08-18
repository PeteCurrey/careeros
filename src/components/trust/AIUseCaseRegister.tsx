'use client';

import React, { useState } from 'react';
import { AI_USE_CASE_REGISTER, AIUseCaseRecord } from './trustData';
import { cn } from '@/lib/utils';
import { 
  Search, 
  Filter, 
  ShieldCheck, 
  ChevronDown, 
  AlertCircle, 
  CheckCircle2, 
  Lock, 
  Bot,
  Eye,
  Sparkles,
  Calendar
} from 'lucide-react';

export function AIUseCaseRegister() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRisk, setSelectedRisk] = useState<string>('ALL');
  const [expandedId, setExpandedId] = useState<string | null>(AI_USE_CASE_REGISTER[0]?.id || null);

  const filteredUseCases = AI_USE_CASE_REGISTER.filter((uc) => {
    const matchesSearch =
      uc.capability.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uc.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uc.aiRole.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRisk = selectedRisk === 'ALL' || uc.riskTier === selectedRisk;
    return matchesSearch && matchesRisk;
  });

  return (
    <div
      id="ai-use-case-register"
      className="w-full bg-[var(--background-dark-deep)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl space-y-0"
      role="region"
      aria-label="Public AI Use-Case Register"
    >
      {/* Top Search & Filter Bar */}
      <div className="p-6 sm:p-8 bg-black/30 backdrop-blur-sm border-b border-[var(--color-border-default)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#6BB8FF] font-semibold flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-[#2F8FFF]" />
            Public Disclosure Register &bull; ISO / NIST AI RMF Aligned
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
            Public AI Use-Case Register
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            Explore granular transparency logs for every active AI capability across Career OS.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-tertiary)]" />
            <input
              type="text"
              placeholder="Search use cases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 rounded-lg bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-xs text-white placeholder-[var(--color-text-tertiary)] focus:outline-none focus:border-[#2F8FFF]"
            />
          </div>

          <div className="flex items-center gap-1 text-xs font-mono">
            {['ALL', 'LOW', 'MODERATE', 'HEIGHTENED'].map((risk) => (
              <button
                key={risk}
                type="button"
                onClick={() => setSelectedRisk(risk)}
                className={cn(
                  'px-2 py-1 rounded text-[10px] border transition-colors',
                  selectedRisk === risk
                    ? 'bg-white/15 border-white/40 text-white font-bold'
                    : 'bg-white/5 border-white/10 text-[var(--color-text-secondary)] hover:text-white'
                )}
              >
                {risk}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Accordion / Detailed List of Use Cases */}
      <div className="divide-y divide-[var(--color-border-subtle)]">
        {filteredUseCases.length === 0 ? (
          <div className="p-12 text-center space-y-2 text-xs text-[var(--color-text-tertiary)]">
            <p>No active AI use cases match your search criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRisk('ALL');
              }}
              className="text-[#6BB8FF] underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredUseCases.map((uc) => {
            const isExpanded = expandedId === uc.id;
            return (
              <div key={uc.id} className="p-5 sm:p-6 transition-colors hover:bg-white/5">
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : uc.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left flex flex-col md:flex-row md:items-center justify-between gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F8FFF]"
                >
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-white text-base group-hover:text-[#6BB8FF] transition-colors">
                        {uc.capability}
                      </span>
                      <span
                        className={cn(
                          'px-2 py-0.5 rounded text-[9px] font-mono font-bold border uppercase',
                          uc.riskTier === 'LOW'
                            ? 'text-cyan-300 bg-cyan-950/40 border-cyan-500/30'
                            : uc.riskTier === 'MODERATE'
                            ? 'text-amber-300 bg-amber-950/40 border-amber-500/30'
                            : 'text-rose-300 bg-rose-950/40 border-rose-500/30'
                        )}
                      >
                        {uc.riskTier} RISK
                      </span>
                      <span className="text-[9px] font-mono text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-950/30 border border-emerald-500/20">
                        {uc.governanceStatus}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {uc.purpose}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-[var(--color-text-tertiary)] self-end md:self-auto shrink-0">
                    <span className="hidden sm:inline">Reviewed: {uc.lastReviewed}</span>
                    <div className="p-1 rounded bg-white/5 border border-white/10 group-hover:text-white transition-colors">
                      <ChevronDown
                        className={cn('w-4 h-4 transition-transform duration-200', isExpanded && 'rotate-180')}
                      />
                    </div>
                  </div>
                </button>

                {/* Expanded Disclosure Panel */}
                {isExpanded && (
                  <div className="mt-5 pt-5 border-t border-[var(--color-border-subtle)] grid grid-cols-1 md:grid-cols-3 gap-4 text-xs animate-fadeIn">
                    <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2">
                      <span className="text-[10px] font-mono uppercase text-[#6BB8FF] font-semibold block">
                        AI Role &amp; Output Type
                      </span>
                      <p className="text-white font-medium">{uc.aiRole}</p>
                      <div className="pt-2 text-[11px] text-[var(--color-text-tertiary)]">
                        <strong>Output Classification:</strong> {uc.outputType} (Advisory / Non-Binding)
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2">
                      <span className="text-[10px] font-mono uppercase text-purple-300 font-semibold block">
                        Human Involvement &amp; Data Used
                      </span>
                      <p className="text-white font-medium">{uc.humanInvolvement.replace(/_/g, ' ')}</p>
                      <div className="pt-2 space-y-1">
                        <span className="text-[10px] font-mono text-[var(--color-taupe-300)] block">Data Ingested:</span>
                        <ul className="list-disc pl-4 text-[11px] text-[var(--color-text-secondary)] space-y-0.5">
                          {uc.dataUsed.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-[var(--color-surface-warm)]/60 backdrop-blur-sm border border-[var(--color-border-subtle)] space-y-2">
                      <span className="text-[10px] font-mono uppercase text-amber-300 font-semibold block">
                        Material Limitations &amp; Boundaries
                      </span>
                      <ul className="list-disc pl-4 text-[11px] text-[var(--color-text-secondary)] space-y-1">
                        {uc.limitations.map((lim) => (
                          <li key={lim}>{lim}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Footer Statement */}
      <div className="p-4 bg-black/30 backdrop-blur-sm border-t border-[var(--color-border-default)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-text-tertiary)]">
        <span className="italic">
          &ldquo;Meaningful transparency means knowing what AI is doing and what data influences it.&rdquo;
        </span>
        <span className="font-mono text-[11px] text-[var(--color-taupe-300)] shrink-0">
          Admin Managed &bull; Versioned Public Record
        </span>
      </div>
    </div>
  );
}
