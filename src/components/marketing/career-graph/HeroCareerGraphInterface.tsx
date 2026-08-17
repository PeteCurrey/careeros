'use client';

import React, { useState } from 'react';
import { CAREER_GRAPH_PROFESSIONS, GraphDestination, TransferTier } from './careerGraphDemoData';
import { ArrowRight, Compass, ShieldAlert, CheckCircle2, AlertCircle, Sparkles, BookOpen, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HeroCareerGraphInterface() {
  const [selectedProfIndex, setSelectedProfIndex] = useState(0);
  const currentProf = CAREER_GRAPH_PROFESSIONS[selectedProfIndex] || CAREER_GRAPH_PROFESSIONS[0]!;
  const [selectedDestId, setSelectedDestId] = useState<string>(currentProf.destinations[0]!.id);

  const activeDestination = currentProf.destinations.find((d) => d.id === selectedDestId) || currentProf.destinations[0]!;

  const getTierBadgeStyle = (tier: TransferTier) => {
    switch (tier) {
      case 'Strong Transfer':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
      case 'Additional Training Likely':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
      case 'Leadership Bridge':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
      case 'Qualification Required':
        return 'bg-blue-500/10 text-blue-300 border-blue-500/30';
    }
  };

  return (
    <div className="w-full bg-[var(--background-dark-deep)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl transition-all duration-300">
      {/* Top Header Bar */}
      <div className="px-5 py-3.5 bg-black/40 border-b border-[var(--color-border-default)] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono font-semibold tracking-wider text-[var(--color-text-primary)] uppercase">
            Career Graph &bull; Interactive Topology
          </span>
        </div>
        <div className="flex items-center gap-2 text-[var(--color-text-tertiary)] text-[11px]">
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono">
            ILLUSTRATIVE MODEL
          </span>
          <span className="hidden sm:inline">No deterministic match scoring</span>
        </div>
      </div>

      {/* Role Switcher Tabs */}
      <div className="px-4 py-2.5 bg-black/20 border-b border-[var(--color-border-default)] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        <span className="text-[11px] font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider pr-2 shrink-0">
          Select Career:
        </span>
        {CAREER_GRAPH_PROFESSIONS.map((prof, idx) => {
          const isSelected = idx === selectedProfIndex;
          return (
            <button
              key={prof.id}
              onClick={() => {
                setSelectedProfIndex(idx);
                setSelectedDestId(prof.destinations[0]!.id);
              }}
              className={cn(
                'px-3 py-1.5 rounded text-xs font-medium whitespace-nowrap transition-all duration-150',
                isSelected
                  ? 'bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] border border-[var(--color-border-strong)] shadow-xs'
                  : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] hover:bg-white/5'
              )}
            >
              {prof.shortTitle}
            </button>
          );
        })}
      </div>

      {/* Main Graph Grid (Responsive) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Column: Starting Role & Core Capabilities */}
        <div className="lg:col-span-5 p-6 border-b lg:border-b-0 lg:border-r border-[var(--color-border-default)] bg-black/10 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 text-[var(--color-taupe-300)] border border-white/10">
                Starting Context
              </span>
              <span className="text-xs text-[var(--color-text-tertiary)]">
                {currentProf.domain}
              </span>
            </div>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] tracking-tight">
              {currentProf.title}
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {currentProf.description}
            </p>
          </div>

          {/* Capability Layers */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-[11px] font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider">
              <span>Underlying Capabilities</span>
              <span>{currentProf.capabilities.length} Decomposed Nodes</span>
            </div>
            <div className="space-y-1.5">
              {currentProf.capabilities.map((cap) => (
                <div
                  key={cap.id}
                  className="p-2.5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-semibold text-[var(--color-text-primary)]">
                    <span>{cap.name}</span>
                    <span className="text-[10px] font-mono text-[var(--color-taupe-300)] opacity-75">
                      {cap.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--color-text-tertiary)] mt-1 line-clamp-1">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Adjacent Directions & Pathway Inspection */}
        <div className="lg:col-span-7 p-6 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)]">
                  Adjacent Possibilities
                </span>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Select a destination to evaluate bridge requirements and transferable capability.
                </p>
              </div>
              <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-[var(--color-text-tertiary)] border border-white/10">
                {currentProf.destinations.length} Pathways
              </span>
            </div>

            {/* Destination Selection Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentProf.destinations.map((dest) => {
                const isActive = dest.id === selectedDestId;
                return (
                  <button
                    key={dest.id}
                    onClick={() => setSelectedDestId(dest.id)}
                    className={cn(
                      'p-3 rounded text-left transition-all duration-150 border flex flex-col justify-between gap-2',
                      isActive
                        ? 'bg-[var(--color-surface-raised)] border-[var(--color-border-strong)] shadow-md ring-1 ring-[var(--color-focus)]'
                        : 'bg-black/20 border-[var(--color-border-default)] hover:bg-black/30 hover:border-[var(--color-border-strong)]'
                    )}
                  >
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-[var(--color-text-primary)] flex items-center justify-between gap-1">
                        <span className="line-clamp-1">{dest.title}</span>
                        {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                      </div>
                      <div className="text-[11px] text-[var(--color-text-tertiary)] line-clamp-1">
                        {dest.industry}
                      </div>
                    </div>
                    <span
                      className={cn(
                        'inline-block self-start text-[10px] font-mono px-2 py-0.5 rounded border',
                        getTierBadgeStyle(dest.transferTier)
                      )}
                    >
                      {dest.transferTier}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Pathway Detail Box */}
          <div className="p-4 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3 mt-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--color-border-default)] pb-2.5">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)]">
                  Pathway Analysis &bull; {activeDestination.industry}
                </span>
                <h4 className="text-sm font-bold text-[var(--color-text-primary)]">
                  {currentProf.shortTitle} &rarr; {activeDestination.title}
                </h4>
              </div>
              <span className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
                Est. {activeDestination.typicalTimeframe}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <div className="font-semibold text-emerald-400 flex items-center gap-1.5 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Existing Transfer Advantage</span>
                </div>
                <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                  {activeDestination.transferAdvantage}
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-semibold text-amber-400 flex items-center gap-1.5 text-[11px]">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Likely Bridge Requirements</span>
                </div>
                <ul className="text-[11px] text-[var(--color-text-secondary)] space-y-1 list-disc list-inside leading-relaxed">
                  {activeDestination.bridgeRequirements.map((req, idx) => (
                    <li key={idx} className="line-clamp-2">
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2 border-t border-[var(--color-border-default)] text-[11px] text-[var(--color-text-tertiary)] flex items-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-[var(--color-text-secondary)]">Why it connects:</strong> {activeDestination.whyItConnects}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Notice */}
      <div className="px-5 py-2.5 bg-black/40 border-t border-[var(--color-border-default)] text-[11px] text-[var(--color-text-tertiary)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p>
          Illustrative pathways. Actual requirements, licensing, qualifications and suitability vary by role, employer and jurisdiction.
        </p>
        <span className="font-mono text-[10px] text-[var(--color-taupe-300)] shrink-0">
          Career OS Graph Engine Concept
        </span>
      </div>
    </div>
  );
}
