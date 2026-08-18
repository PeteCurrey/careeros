'use client';

import React from 'react';
import { LOCAL_ECOSYSTEM_EXAMPLE } from './partnershipsData';
import { 
  Building2, 
  GraduationCap, 
  Wrench, 
  Shield, 
  HeartPulse, 
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const SECTOR_ICONS: Record<string, React.ElementType> = {
  HeartPulse,
  Wrench,
  Building2,
  GraduationCap,
  Shield,
};

export function LocalEcosystemMap() {
  return (
    <div className="w-full space-y-6">
      {/* Visual Subtitle Tag */}
      <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-tertiary)] px-1">
        <span className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#2F8FFF]" />
          <span>LOCAL SCHOOL CAREER NETWORK &bull; WORKED EXAMPLE</span>
        </span>
        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] uppercase font-bold tracking-wider hidden sm:inline-block">
          Illustrative Local Ecosystem
        </span>
      </div>

      {/* Main Glassmorphic Container */}
      <div className="w-full bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl p-6 sm:p-8 space-y-8">
        
        {/* Top Summary Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[var(--color-border-default)]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-semibold text-white text-base">
                Community High School (1,200 Students)
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Connected across 5 key regional economic sectors to provide balanced student exposure.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-[var(--color-taupe-300)] self-start md:self-auto">
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">10 Active Sector Partners</span>
            <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Zero Paywall on Student Guidance</span>
          </div>
        </div>

        {/* 5-Sector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {LOCAL_ECOSYSTEM_EXAMPLE.map((sec) => {
            const Icon = SECTOR_ICONS[sec.iconName] || Building2;
            return (
              <div
                key={sec.sector}
                className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] hover:border-white/20 transition-all space-y-3.5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={cn('text-[10px] font-mono uppercase px-2 py-0.5 rounded border font-semibold', sec.badgeColor)}>
                      {sec.sector.split(' ')[0]}
                    </span>
                    <Icon className="w-4 h-4 text-[var(--color-text-tertiary)]" />
                  </div>

                  <h4 className="font-semibold text-sm text-white">
                    {sec.sector}
                  </h4>

                  <div className="space-y-2.5 pt-1">
                    {sec.partners.map((p) => (
                      <div key={p.type} className="p-2.5 rounded bg-white/5 border border-white/10 space-y-1 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-white text-[11px]">{p.type}</span>
                          <span className="text-[9px] font-mono text-[var(--color-taupe-300)]">Verified Node</span>
                        </div>
                        <p className="text-[11px] text-[var(--color-text-secondary)] leading-tight">
                          {p.contribution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-[var(--color-border-subtle)] text-[10px] font-mono text-[var(--color-taupe-300)] flex items-center justify-between">
                  <span>Structured Student Access</span>
                  <ArrowRight className="w-3 h-3 text-white/30" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Rule Statement */}
        <div className="p-4 rounded-lg bg-[var(--color-surface-warm)]/60 backdrop-blur-sm border border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-white font-medium">
            &ldquo;Career OS should help schools expand the range of careers students can see without requiring the careers team to manually build every relationship from zero.&rdquo;
          </span>
          <span className="font-mono text-[10px] text-[var(--color-taupe-300)] shrink-0">
            Scalable School Networks
          </span>
        </div>

      </div>
    </div>
  );
}
