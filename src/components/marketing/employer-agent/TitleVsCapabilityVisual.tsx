'use client';

import React from 'react';
import {
  FileText,
  Layers,
  ArrowRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ShieldCheck,
  Search,
  Sparkles,
} from 'lucide-react';

export function TitleVsCapabilityVisual() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Column 1: Conventional Title-First Search */}
      <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-6 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border-default)]">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-zinc-400" />
              Conventional Approach
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[var(--color-taupe-300)] border border-white/10">
              Keyword Matching
            </span>
          </div>

          <h3 className="text-xl font-serif font-normal text-white">
            Title-First Sourcing
          </h3>

          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
            Search queries scan resume headlines for literal title strings: <em>&ldquo;Senior Maintenance Engineer&rdquo;</em>. Candidates with identical underlying capability under different job titles are filtered out before human review.
          </p>

          {/* Workflow Representation */}
          <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-[10px]">1</span>
              <span>Exact Title Query: &ldquo;Maintenance Engineer&rdquo;</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-[10px]">2</span>
              <span>Filter: &ge;5 Years in same job title</span>
            </div>
            <div className="flex items-center gap-2 text-red-400">
              <XCircle className="w-4 h-4 shrink-0" />
              <span>Excludes: Navy Engineers, Plant Technicians, Auto Techs</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-[var(--color-border-subtle)] text-xs text-[var(--color-text-tertiary)]">
          <strong>Outcome:</strong> Fast candidate filtering, but limits talent pools to people already carrying the same job label.
        </div>
      </div>

      {/* Column 2: Career OS Capability-First Discovery */}
      <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[rgba(47,143,255,0.22)] relative overflow-hidden space-y-6 flex flex-col justify-between">
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-64 h-64 bg-[rgba(47,143,255,0.04)] rounded-full blur-3xl pointer-events-none"
        />

        <div className="space-y-4 relative z-10">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border-default)]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2F8FFF] flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              Career OS Direction
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[rgba(47,143,255,0.07)] text-[#6BB8FF] border border-[rgba(47,143,255,0.18)] font-semibold">
              Capability &amp; Evidence
            </span>
          </div>

          <h3 className="text-xl font-serif font-normal text-white">
            Capability-First Discovery
          </h3>

          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
            Deconstructs the target role into fundamental functional competencies, verified project deliverables, and statutory conditions. Surfaces relevant candidates across adjacent fields with transparent bridge context.
          </p>

          {/* Workflow Representation */}
          <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-white">
              <span className="w-5 h-5 rounded-full bg-[rgba(47,143,255,0.12)] text-[#6BB8FF] flex items-center justify-center text-[10px]">1</span>
              <span>Outcome Brief: Electromechanical Diagnostics + Safety</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <span className="w-5 h-5 rounded-full bg-[rgba(47,143,255,0.12)] text-[#6BB8FF] flex items-center justify-center text-[10px]">2</span>
              <span>Evidence Match: Verified logbooks &amp; apprenticeship items</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Surfaces: Cross-discipline candidates with explained bridges</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-[var(--color-border-subtle)] text-xs text-[var(--color-text-tertiary)] relative z-10">
          <strong>Outcome:</strong> Expands candidate consideration to real capability while preserving statutory credentials and human oversight.
        </div>
      </div>
    </div>
  );
}
