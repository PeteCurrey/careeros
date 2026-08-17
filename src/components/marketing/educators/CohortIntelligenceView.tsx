'use client';

import React from 'react';
import { COHORT_PATHWAY_STATS, COHORT_SECTOR_STATS } from './educatorsData';
import { cn } from '@/lib/utils';
import { 
  BarChart3, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  TrendingUp, 
  Compass,
  CheckCircle2,
  Lock
} from 'lucide-react';

export function CohortIntelligenceView() {
  return (
    <div className="w-full space-y-6">
      {/* Visual Subtitle Tag */}
      <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-tertiary)] px-1">
        <span className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-purple-400" />
          <span>COHORT-LEVEL AGGREGATE INTELLIGENCE &bull; INSTITUTIONAL PLANNING</span>
        </span>
        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] uppercase font-bold tracking-wider hidden sm:inline-block">
          No Individual Leaderboards
        </span>
      </div>

      {/* Main Glassmorphic Container */}
      <div className="w-full bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl p-6 sm:p-8 space-y-8">
        
        {/* Top Summary Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-[var(--color-border-default)] text-xs">
          <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-1">
            <span className="text-[10px] font-mono text-[var(--color-taupe-300)] uppercase block">
              Active Cohort Size
            </span>
            <span className="text-2xl font-serif text-white block">148 Students</span>
            <span className="text-[11px] text-[var(--color-text-tertiary)] font-mono">
              Year 10 &amp; Year 11 Exploration
            </span>
          </div>

          <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-1">
            <span className="text-[10px] font-mono text-[var(--color-taupe-300)] uppercase block">
              Apprenticeship Parity
            </span>
            <span className="text-2xl font-serif text-[#6BB8FF] block">31% Interest</span>
            <span className="text-[11px] text-[var(--color-text-tertiary)] font-mono">
              Significant growth in degree apprenticeships
            </span>
          </div>

          <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-1">
            <span className="text-[10px] font-mono text-[var(--color-taupe-300)] uppercase block">
              Human Advisory Requests
            </span>
            <span className="text-2xl font-serif text-emerald-400 block">42 Sessions</span>
            <span className="text-[11px] text-[var(--color-text-tertiary)] font-mono">
              Pre-prepared 1:1 guidance requests
            </span>
          </div>
        </div>

        {/* 2-Column Analytics Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left: Pathway Distribution */}
          <div className="p-5 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-purple-400" />
                Pathway Exploration Distribution
              </span>
              <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">
                Aggregated
              </span>
            </div>

            <div className="space-y-3.5">
              {COHORT_PATHWAY_STATS.map((stat) => (
                <div key={stat.label} className="space-y-1 text-xs">
                  <div className="flex justify-between text-white font-medium">
                    <span>{stat.label}</span>
                    <span className="font-mono text-[11px] text-[var(--color-taupe-300)]">
                      {stat.percentage}% ({stat.count})
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className={cn('h-full rounded-full transition-all duration-700', stat.color)}
                      style={{ width: `${stat.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Sector Exploration */}
          <div className="p-5 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-semibold flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                Top Career Sectors Explored
              </span>
              <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">
                Curriculum Insight
              </span>
            </div>

            <div className="space-y-3.5">
              {COHORT_SECTOR_STATS.map((sec) => (
                <div key={sec.sector} className="space-y-1 text-xs">
                  <div className="flex justify-between text-white font-medium">
                    <span>{sec.sector}</span>
                    <span className="font-mono text-[11px] text-[var(--color-taupe-300)]">
                      {sec.percentage}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className={cn('h-full rounded-full transition-all duration-700', sec.color)}
                      style={{ width: `${sec.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Pedagogical Guidance Footer */}
        <div className="p-4 rounded-lg bg-[var(--color-surface-warm)]/60 backdrop-blur-sm border border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-white">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Ethical Data Standard:</strong> Aggregate data assists school event planning, employer partnerships, and resource allocation without ranking individual students or generating risk scores.
            </span>
          </div>
          <span className="font-mono text-[10px] text-[var(--color-taupe-300)] shrink-0">
            Privacy-Preserved Aggregation
          </span>
        </div>

      </div>
    </div>
  );
}
