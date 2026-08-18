'use client';

import React from 'react';
import { Sparkles, CheckCircle2, Clock, ShieldCheck, UserCheck, Bot, Target, Compass } from 'lucide-react';

export interface SystemComponentStatus {
  id: string;
  label: string;
  status: 'READY' | 'ACTIVE' | 'BUILDING' | 'WAITING';
  detail?: string;
}

interface OnboardingSystemRailProps {
  components: SystemComponentStatus[];
  className?: string;
}

export function OnboardingSystemRail({ components, className = '' }: OnboardingSystemRailProps) {
  return (
    <div className={`p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3.5 ${className}`}>
      <div className="flex items-center justify-between pb-2.5 border-b border-[var(--color-border-default)]">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#2F8FFF]" />
          <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
            Career OS Construction
          </span>
        </div>
        <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">
          Real System State
        </span>
      </div>

      <div className="space-y-2">
        {components.map((comp) => {
          const isReady = comp.status === 'READY' || comp.status === 'ACTIVE';
          const isBuilding = comp.status === 'BUILDING';

          return (
            <div
              key={comp.id}
              className={`p-2.5 rounded-lg border flex items-center justify-between gap-3 text-xs transition-all ${
                isReady
                  ? 'bg-emerald-500/5 border-emerald-500/20 text-white'
                  : isBuilding
                  ? 'bg-[var(--accent-blue-subtle)] border-[var(--accent-blue-border)] text-white'
                  : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-tertiary)] opacity-60'
              }`}
            >
              <div className="flex items-center gap-2">
                {isReady ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                ) : isBuilding ? (
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-[#2F8FFF] flex items-center justify-center shrink-0">
                    <div className="w-1 h-1 rounded-full bg-[#2F8FFF] animate-ping" />
                  </div>
                ) : (
                  <Clock className="w-3.5 h-3.5 text-[var(--color-taupe-300)] shrink-0" />
                )}
                <div>
                  <span className="font-semibold text-xs">{comp.label}</span>
                  {comp.detail && (
                    <p className="text-[10px] text-[var(--color-text-tertiary)] leading-tight">{comp.detail}</p>
                  )}
                </div>
              </div>

              <span
                className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded font-bold ${
                  isReady
                    ? 'bg-emerald-500/20 text-emerald-300'
                    : isBuilding
                    ? 'bg-[#2F8FFF]/20 text-[#6BB8FF] animate-pulse'
                    : 'bg-white/5 text-[var(--color-taupe-300)]'
                }`}
              >
                {comp.status}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
