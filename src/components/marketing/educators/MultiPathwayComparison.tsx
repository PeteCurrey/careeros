'use client';

import React, { useState } from 'react';
import { MULTI_PATHWAY_ROUTES } from './educatorsData';
import { cn } from '@/lib/utils';
import { 
  GraduationCap, 
  Briefcase, 
  Wrench, 
  Shield, 
  Building2, 
  Clock, 
  Coins, 
  FileCheck, 
  Target, 
  UserCheck,
  ArrowRight
} from 'lucide-react';

const ROUTE_ICONS: Record<string, React.ElementType> = {
  uni: GraduationCap,
  apprentice: Briefcase,
  college: Building2,
  trades: Wrench,
  direct: Shield,
};

export function MultiPathwayComparison() {
  const [selectedRouteId, setSelectedRouteId] = useState<string>('apprentice');

  const activeRoute = MULTI_PATHWAY_ROUTES.find((r) => r.id === selectedRouteId) || MULTI_PATHWAY_ROUTES[1]!;
  const ActiveIcon = ROUTE_ICONS[activeRoute.id] || Briefcase;

  return (
    <div
      id="multi-pathway-comparison"
      className="w-full bg-[var(--background-dark-deep)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl space-y-0"
      role="region"
      aria-label="Multi-Pathway Parity Comparison Explorer"
    >
      {/* Top Header */}
      <div className="p-6 sm:p-8 bg-black/30 backdrop-blur-sm border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)] flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-[#2F8FFF]" />
            Multi-Pathway Architecture &bull; Starting Sector: Engineering &amp; Technology
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
            Parity Across Every Route. No Pre-Set Hierarchy.
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            Explore 5 distinct educational and employment trajectories from the same starting technical interest.
          </p>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/60 backdrop-blur-sm text-[var(--color-text-tertiary)] self-start sm:self-auto shrink-0">
          Pathway Parity Model
        </span>
      </div>

      {/* Pathway Selection Tabs */}
      <div className="p-4 sm:p-6 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border-b border-[var(--color-border-default)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5" role="tablist" aria-label="Engineering Pathways">
          {MULTI_PATHWAY_ROUTES.map((route) => {
            const isSelected = route.id === selectedRouteId;
            const Icon = ROUTE_ICONS[route.id] || Briefcase;
            return (
              <button
                key={route.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedRouteId(route.id)}
                className={cn(
                  'p-3.5 rounded-lg border text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F8FFF] flex flex-col justify-between space-y-2',
                  isSelected
                    ? 'bg-white/10 border-white/40 shadow-md ring-1 ring-white/20'
                    : 'bg-[var(--color-surface-raised)]/60 border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] text-[var(--color-text-secondary)] hover:text-white'
                )}
              >
                <div className="flex items-center justify-between">
                  <Icon className={cn('w-4 h-4', isSelected ? 'text-white' : 'text-[var(--color-text-tertiary)]')} />
                  <span className={cn('text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border font-semibold', route.badgeColor)}>
                    {route.badge}
                  </span>
                </div>
                <div className="font-semibold text-xs text-white leading-tight">
                  {route.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Route Deep-Dive Grid */}
      <div className="p-6 sm:p-8 space-y-6">
        
        {/* Route Banner */}
        <div className="p-5 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
              <ActiveIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={cn('text-[10px] font-mono uppercase px-2 py-0.5 rounded border font-semibold', activeRoute.badgeColor)}>
                  {activeRoute.badge}
                </span>
                <span className="text-xs font-mono text-[var(--color-text-tertiary)] flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {activeRoute.duration}
                </span>
              </div>
              <h4 className="text-xl font-serif text-white font-normal mt-1">
                {activeRoute.title}
              </h4>
            </div>
          </div>

          <div className="text-xs text-[var(--color-text-tertiary)] font-mono self-start sm:self-auto shrink-0">
            Route {MULTI_PATHWAY_ROUTES.findIndex((r) => r.id === activeRoute.id) + 1} of {MULTI_PATHWAY_ROUTES.length}
          </div>
        </div>

        {/* 4 Factor Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-semibold flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-purple-400" />
              Learning Environment
            </span>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {activeRoute.environment}
            </p>
          </div>

          <div className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-semibold flex items-center gap-1.5">
              <Coins className="w-3.5 h-3.5 text-emerald-400" />
              Cost &amp; Earning Structure
            </span>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {activeRoute.costStructure}
            </p>
          </div>

          <div className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#6BB8FF] font-semibold flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5 text-[#2F8FFF]" />
              Evidence Produced
            </span>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {activeRoute.evidenceProduced}
            </p>
          </div>

          <div className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-semibold flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-amber-400" />
              Typical Destination
            </span>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {activeRoute.typicalDestination}
            </p>
          </div>

        </div>

        {/* Educator Role Guidance Box */}
        <div className="p-4 rounded-lg bg-[var(--color-surface-warm)]/60 backdrop-blur-sm border border-[var(--color-border-subtle)] space-y-1.5 text-xs">
          <div className="flex items-center gap-2 text-white font-semibold">
            <UserCheck className="w-4 h-4 text-emerald-400" />
            <span>How the Careers Team Supports this Pathway</span>
          </div>
          <p className="text-[var(--color-text-secondary)] leading-relaxed pl-6">
            {activeRoute.educatorRole}
          </p>
        </div>

      </div>

      {/* Footer Rule Note */}
      <div className="p-4 bg-black/30 backdrop-blur-sm border-t border-[var(--color-border-default)] text-xs text-[var(--color-text-tertiary)] flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="italic">
          &ldquo;Career OS should help educators compare pathways rather than encode a hierarchy of pathways.&rdquo;
        </span>
        <span className="font-mono text-[11px] text-[var(--color-taupe-300)]">
          Architectural Parity &bull; Non-Biased Career Modelling
        </span>
      </div>
    </div>
  );
}
