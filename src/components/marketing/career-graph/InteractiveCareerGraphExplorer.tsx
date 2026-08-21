'use client';

import React, { useState } from 'react';
import { CAREER_GRAPH_PROFESSIONS, ProfessionGraph, GraphDestination, TransferTier } from './careerGraphDemoData';
import {
  Compass,
  ArrowRight,
  GitBranch,
  Layers,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Building,
  GraduationCap,
  Briefcase,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function InteractiveCareerGraphExplorer() {
  const [selectedProfIndex, setSelectedProfIndex] = useState(0);
  const currentProf = CAREER_GRAPH_PROFESSIONS[selectedProfIndex] || CAREER_GRAPH_PROFESSIONS[0]!;
  const [selectedDestId, setSelectedDestId] = useState<string>(currentProf.destinations[0]!.id);

  const activeDestination =
    currentProf.destinations.find((d) => d.id === selectedDestId) || currentProf.destinations[0]!;

  const handleProfChange = (index: number) => {
    setSelectedProfIndex(index);
    const targetProf = CAREER_GRAPH_PROFESSIONS[index] || CAREER_GRAPH_PROFESSIONS[0]!;
    setSelectedDestId(targetProf.destinations[0]!.id);
  };

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
    <div
      id="interactive-graph"
      className="w-full bg-[var(--background-dark-deep)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl space-y-0"
    >
      {/* Top Controls Header */}
      <div className="p-6 sm:p-8 bg-black/40 border-b border-[var(--color-border-default)] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-purple-400" />
              Interactive Career Graph Explorer
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[var(--color-text-primary)]">
              Start with a career. See where it can connect.
            </h3>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-mono text-[var(--color-text-tertiary)]">
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
              6 Representative Disciplines
            </span>
          </div>
        </div>

        {/* Editorial Tab Switcher */}
        <div className="flex flex-wrap gap-2 pt-2" role="tablist" aria-label="Career Disciplines">
          {CAREER_GRAPH_PROFESSIONS.map((prof, idx) => {
            const isSelected = idx === selectedProfIndex;
            return (
              <button
                key={prof.id}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`panel-${prof.id}`}
                id={`tab-${prof.id}`}
                onClick={() => handleProfChange(idx)}
                className={cn(
                  'px-4 py-2.5 rounded text-xs font-medium transition-all duration-150 flex items-center gap-2 border',
                  isSelected
                    ? 'bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] border-[var(--color-border-strong)] shadow-sm ring-1 ring-[var(--color-focus)]'
                    : 'bg-black/20 text-[var(--color-text-secondary)] border-[var(--color-border-default)] hover:text-white hover:bg-black/40'
                )}
              >
                <span>{prof.shortTitle}</span>
                <span className="text-[10px] font-mono text-[var(--color-taupe-300)] opacity-75">
                  ({prof.category})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Canvas Area */}
      <div
        id={`panel-${currentProf.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${currentProf.id}`}
        className="p-6 sm:p-8 space-y-8"
      >
        {/* Starting Context Banner */}
        <div className="p-4 sm:p-5 rounded-lg bg-black/20 border border-[var(--color-border-default)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)]">
                Selected Baseline
              </span>
              <span className="text-xs text-[var(--color-text-tertiary)]">&bull;</span>
              <span className="text-xs text-[var(--color-text-secondary)] font-medium">
                {currentProf.domain}
              </span>
            </div>
            <h4 className="text-lg font-bold text-[var(--color-text-primary)]">
              {currentProf.title}
            </h4>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {currentProf.startingContext}
            </p>
          </div>
          <div className="shrink-0 text-xs font-mono text-[var(--color-text-tertiary)] bg-white/5 px-3 py-2 rounded border border-white/10">
            {currentProf.capabilities.length} Core Capabilities &bull; {currentProf.destinations.length} Branching Routes
          </div>
        </div>

        {/* Dynamic Graph Flow (Horizontal on desktop, Vertical on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Column 1: Core Capability Nodes (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider pb-1 border-b border-[var(--color-border-default)]">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                Transferable Capabilities
              </span>
              <span>Layer 01</span>
            </div>

            <div className="space-y-2">
              {currentProf.capabilities.map((cap) => (
                <div
                  key={cap.id}
                  className="p-3 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-1 hover:border-[var(--color-border-strong)] transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-[var(--color-text-primary)]">
                    <span>{cap.name}</span>
                    <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">
                      {cap.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--color-text-tertiary)] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Adjacent Destinations Selector (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider pb-1 border-b border-[var(--color-border-default)]">
              <span className="flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5 text-emerald-400" />
                Adjacent Directions
              </span>
              <span>Layer 02</span>
            </div>

            <div className="space-y-2" role="radiogroup" aria-label="Adjacent Destinations">
              {currentProf.destinations.map((dest) => {
                const isActive = dest.id === selectedDestId;
                return (
                  <button
                    key={dest.id}
                    role="radio"
                    aria-checked={isActive}
                    onClick={() => setSelectedDestId(dest.id)}
                    className={cn(
                      'w-full p-3.5 rounded text-left transition-all duration-150 border flex flex-col justify-between gap-2 group',
                      isActive
                        ? 'bg-[var(--color-surface-raised)] border-[var(--color-border-strong)] shadow-md ring-1 ring-[var(--color-focus)]'
                        : 'bg-black/20 border-[var(--color-border-default)] hover:bg-black/40 hover:border-[var(--color-border-strong)]'
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-[var(--color-text-primary)] group-hover:text-white">
                        {dest.title}
                      </span>
                      <ChevronRight
                        className={cn(
                          'w-3.5 h-3.5 shrink-0 transition-transform',
                          isActive ? 'text-emerald-400 translate-x-0.5' : 'text-neutral-500'
                        )}
                      />
                    </div>
                    <div className="flex items-center justify-between gap-2 text-[11px] text-[var(--color-text-tertiary)]">
                      <span className="line-clamp-1">{dest.industry}</span>
                      <span
                        className={cn(
                          'text-[10px] font-mono px-2 py-0.5 rounded border shrink-0',
                          getTierBadgeStyle(dest.transferTier)
                        )}
                      >
                        {dest.transferTier}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Column 3: Active Pathway Inspection Drawer (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider pb-1 border-b border-[var(--color-border-default)]">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                Bridge & Rationale
              </span>
              <span>Layer 03</span>
            </div>

            {/* Active Pathway Detail Card */}
            <div className="p-5 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-strong)] space-y-4 shadow-lg">
              <div className="space-y-1 border-b border-[var(--color-border-default)] pb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)]">
                  {activeDestination.industry}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-[var(--color-text-primary)]">
                  {activeDestination.title}
                </h4>
                <div className="flex items-center justify-between text-[11px] font-mono text-[var(--color-text-tertiary)] pt-1">
                  <span>Feasibility Tier:</span>
                  <span className={cn('px-2 py-0.5 rounded border text-[10px]', getTierBadgeStyle(activeDestination.transferTier))}>
                    {activeDestination.transferTier}
                  </span>
                </div>
              </div>

              {/* Transfer Advantage */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Existing Transfer Advantage</span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed bg-black/20 p-2.5 rounded border border-white/5">
                  {activeDestination.transferAdvantage}
                </p>
              </div>

              {/* Bridge Requirements */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Likely Bridge Requirements</span>
                </div>
                <div className="space-y-1 bg-black/20 p-2.5 rounded border border-white/5">
                  {activeDestination.bridgeRequirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      <span className="text-amber-400 font-mono text-[10px] shrink-0 mt-0.5">&bull;</span>
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why It Connects */}
              <div className="space-y-1 text-xs text-[var(--color-text-tertiary)] pt-2 border-t border-[var(--color-border-default)]">
                <div className="font-semibold text-[var(--color-text-secondary)] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-purple-400" />
                  <span>Why It Connects:</span>
                </div>
                <p className="text-[11px] leading-relaxed text-[var(--color-text-secondary)]">
                  {activeDestination.whyItConnects}
                </p>
              </div>

              {/* Transition Timeframe & Considerations */}
              <div className="p-2.5 rounded bg-white/5 border border-white/10 text-[11px] text-[var(--color-text-tertiary)] space-y-1 font-mono">
                <div className="flex justify-between">
                  <span>Typical Timeframe:</span>
                  <span className="text-[var(--color-text-primary)]">{activeDestination.typicalTimeframe}</span>
                </div>
                <div className="text-[10px] text-[var(--color-taupe-300)] opacity-80 pt-1 border-t border-white/5">
                  {activeDestination.keyConsiderations}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Discreet Accessibility / Screen-Reader Semantic Parallel Text */}
        <div className="sr-only" aria-live="polite">
          Currently viewing {currentProf.title}. Selected adjacent pathway is {activeDestination.title} in the {activeDestination.industry} sector.
          Transfer tier: {activeDestination.transferTier}.
          Transfer advantage: {activeDestination.transferAdvantage}.
          Bridge requirements: {activeDestination.bridgeRequirements.join(', ')}.
        </div>
      </div>

      {/* Footer Audit Disclaimer */}
      <div className="p-4 sm:p-5 bg-black/40 border-t border-[var(--color-border-default)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[var(--color-text-tertiary)]">
        <p className="leading-relaxed">
          <strong>Illustrative Career Graph:</strong> Examples show product concepts, not live labor-market recommendations or guaranteed eligibility.
        </p>
        <span className="text-[11px] font-mono text-[var(--color-taupe-300)] shrink-0">
          Career OS &bull; Graph Exploration Model
        </span>
      </div>
    </div>
  );
}
