'use client';

import React from 'react';
import { Shield, ArrowRight, Layers, GitBranch, ArrowUpRight } from 'lucide-react';

export function TitleVsCapabilityVisual() {
  return (
    <div className="w-full bg-[var(--background-dark-deep)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden p-6 sm:p-10 space-y-8 shadow-xl">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-border-default)] pb-6">
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)]">
            Topology Deconstruction &bull; Illustrative Model
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-[var(--color-text-primary)]">
            Deconstructing the Label: Job Title vs Underlying Capability
          </h3>
        </div>
        <span className="self-start sm:self-auto text-xs font-mono px-3 py-1 rounded bg-white/5 border border-white/10 text-[var(--color-text-tertiary)]">
          1 Title &rarr; 6 Capability Layers &rarr; 5+ Distinct Industries
        </span>
      </div>

      {/* 3-Column Visual Flow */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Column 1: The Rigid Label (4 cols) */}
        <div className="lg:col-span-3 p-6 rounded-lg bg-black/30 border border-white/10 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-rose-300/80">
              The Traditional Résumé View
            </span>
            <div className="p-4 rounded bg-white/5 border border-white/10 space-y-1">
              <h4 className="text-base font-bold text-[var(--color-text-primary)] tracking-wide font-mono">
                FIREFIGHTER
              </h4>
              <p className="text-[11px] text-[var(--color-text-tertiary)]">
                Single occupational taxonomy node. Assumes candidate can only perform frontline fire suppression.
              </p>
            </div>
          </div>

          <div className="p-3 rounded bg-rose-500/10 border border-rose-500/20 text-[11px] text-rose-200 leading-relaxed">
            <strong>Limitation:</strong> Keyword-matching algorithms screen out this candidate for non-emergency job postings despite massive operational capability overlap.
          </div>
        </div>

        {/* Column 2: The Decomposed Capabilities (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-taupe-300)]">
              Career Graph Capability Decomposition
            </span>
            <span className="text-[10px] font-mono text-emerald-400">
              Active Context
            </span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded bg-black/20 border border-[var(--color-border-default)] flex items-center justify-between text-xs">
              <span className="font-semibold text-[var(--color-text-primary)]">Incident Command & Team Control</span>
              <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Operations</span>
            </div>
            <div className="p-2.5 rounded bg-black/20 border border-[var(--color-border-default)] flex items-center justify-between text-xs">
              <span className="font-semibold text-[var(--color-text-primary)]">Dynamic Atmospheric & Structural Risk</span>
              <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Safety</span>
            </div>
            <div className="p-2.5 rounded bg-black/20 border border-[var(--color-border-default)] flex items-center justify-between text-xs">
              <span className="font-semibold text-[var(--color-text-primary)]">High-Stakes Crisis Communication</span>
              <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Leadership</span>
            </div>
            <div className="p-2.5 rounded bg-black/20 border border-[var(--color-border-default)] flex items-center justify-between text-xs">
              <span className="font-semibold text-[var(--color-text-primary)]">Statutory Building Safety Auditing</span>
              <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Compliance</span>
            </div>
            <div className="p-2.5 rounded bg-black/20 border border-[var(--color-border-default)] flex items-center justify-between text-xs">
              <span className="font-semibold text-[var(--color-text-primary)]">Tactical Crew Training & Mentorship</span>
              <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">Development</span>
            </div>
          </div>
        </div>

        {/* Column 3: Outward Connected Industries (4 cols) */}
        <div className="lg:col-span-4 p-6 rounded-lg bg-black/30 border border-white/10 space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
              Exposed Industry Pathways
            </span>
            <div className="space-y-2">
              <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-200 flex items-center justify-between">
                <span>Emergency Planning & Civil Resilience</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
              </div>
              <div className="p-2 rounded bg-purple-500/10 border border-purple-500/20 text-xs text-purple-200 flex items-center justify-between">
                <span>Corporate Health & Safety Leadership</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
              </div>
              <div className="p-2 rounded bg-blue-500/10 border border-blue-500/20 text-xs text-blue-200 flex items-center justify-between">
                <span>Critical Infrastructure & Plant Operations</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
              </div>
              <div className="p-2 rounded bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-center justify-between">
                <span>Commercial Fire Risk Consulting</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
              </div>
            </div>
          </div>

          <p className="text-[11px] text-[var(--color-text-tertiary)] pt-2 border-t border-white/10 leading-relaxed">
            By analyzing underlying capability rather than literal title strings, Career Graph surfaces transitions that traditional algorithms bury.
          </p>
        </div>
      </div>
    </div>
  );
}
