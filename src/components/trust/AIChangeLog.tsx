'use client';

import React from 'react';
import { AI_CHANGE_LOG } from './trustData';
import { cn } from '@/lib/utils';
import { FileCheck, ShieldCheck, Clock, History } from 'lucide-react';

export function AIChangeLog() {
  return (
    <div
      id="ai-change-log"
      className="w-full bg-[var(--background-dark-deep)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl space-y-0"
      role="region"
      aria-label="Public AI Transparency and Change Log"
    >
      {/* Top Header */}
      <div className="p-6 sm:p-8 bg-black/30 backdrop-blur-sm border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#6BB8FF] font-semibold flex items-center gap-1.5">
            <History className="w-3.5 h-3.5 text-[#2F8FFF]" />
            Auditability &bull; Public Model Change Register
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
            Public AI Change Log
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            Transparent public record of AI capability updates, safety guardrail enhancements, and governance board reviews.
          </p>
        </div>
        <span className="text-[10px] font-mono uppercase px-3 py-1.5 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/60 text-[var(--color-text-tertiary)] self-start sm:self-auto shrink-0">
          Auditable Ledger
        </span>
      </div>

      {/* Change Log Entries */}
      <div className="divide-y divide-[var(--color-border-subtle)] p-6 sm:p-8 space-y-4">
        {AI_CHANGE_LOG.map((log) => (
          <div key={log.version + log.capability} className="pt-4 first:pt-0 space-y-2 text-xs">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-white text-xs bg-white/10 px-2 py-0.5 rounded">
                  {log.version}
                </span>
                <span className="font-semibold text-white text-sm">{log.capability}</span>
                <span
                  className={cn(
                    'px-2 py-0.5 rounded text-[9px] font-mono font-bold border uppercase',
                    log.impactTier === 'LOW'
                      ? 'text-cyan-300 bg-cyan-950/40 border-cyan-500/30'
                      : log.impactTier === 'MODERATE'
                      ? 'text-amber-300 bg-amber-950/40 border-amber-500/30'
                      : 'text-rose-300 bg-rose-950/40 border-rose-500/30'
                  )}
                >
                  {log.impactTier} IMPACT
                </span>
              </div>
              <span className="font-mono text-[11px] text-[var(--color-text-tertiary)] flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {log.date}
              </span>
            </div>

            <p className="text-[var(--color-text-secondary)] leading-relaxed pl-1">
              <strong className="text-white">Change:</strong> {log.change}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] font-mono text-[var(--color-text-tertiary)] pl-1">
              <span><strong>Reason:</strong> {log.reason}</span>
              <span className="text-emerald-400">Reviewed by: {log.governanceReviewer}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Statement */}
      <div className="p-4 bg-black/30 backdrop-blur-sm border-t border-[var(--color-border-default)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-text-tertiary)]">
        <span className="italic">
          &ldquo;Every material AI capability change is logged with rationale and governance approval.&rdquo;
        </span>
        <span className="font-mono text-[11px] text-[var(--color-taupe-300)] shrink-0">
          Institutional Procurement Asset
        </span>
      </div>
    </div>
  );
}
