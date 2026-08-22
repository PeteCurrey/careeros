'use client';

import React, { useState } from 'react';
import { OperatingControlPillar } from '@/types/compliance';
import { 
  KeyRound, 
  Lock, 
  Code2, 
  Activity, 
  Layers, 
  Bot, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface EngineeringControlsMatrixProps {
  pillars: OperatingControlPillar[];
}

const PILLAR_ICONS: Record<string, React.ElementType> = {
  'identity-access': KeyRound,
  'data-protection': Lock,
  'secure-development': Code2,
  'monitoring-response': Activity,
  'vendor-governance': Layers,
  'ai-governance': Bot,
};

export function EngineeringControlsMatrix({ pillars }: EngineeringControlsMatrixProps) {
  const defaultPillar = pillars[0];
  const [activePillarId, setActivePillarId] = useState(defaultPillar?.id || 'identity-access');

  if (!defaultPillar) {
    return null;
  }

  const activePillar = pillars.find((p) => p.id === activePillarId) ?? defaultPillar;
  const ActiveIcon = PILLAR_ICONS[activePillar.id] || ShieldCheck;

  return (
    <section id="engineering-controls" className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[var(--color-brand-300)]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>PRODUCTION-GRADE TECHNICAL SAFEGUARDS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
          How compliance becomes engineering
        </h2>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
          Compliance at CareerOS is not a static paperwork exercise. Every statutory requirement translates directly into enforceable code, database Row Level Security policies, automated CI/CD gates, and cryptographic audit ledgers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Navigation: 6 Capability Areas */}
        <div className="lg:col-span-4 space-y-2">
          {pillars.map((pillar) => {
            const Icon = PILLAR_ICONS[pillar.id] || ShieldCheck;
            const isActive = activePillarId === pillar.id;

            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActivePillarId(pillar.id)}
                className={cn(
                  'w-full text-left p-4 rounded-md border transition-all flex items-center justify-between gap-3',
                  isActive
                    ? 'bg-[var(--color-surface-raised)] border-[var(--accent-blue)] text-[var(--color-text-primary)] shadow-xs'
                    : 'bg-[var(--color-surface-sunken)] border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-interactive)]'
                )}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      'w-7 h-7 rounded-sm flex items-center justify-center transition-colors',
                      isActive ? 'bg-[var(--accent-blue)]/20 text-[var(--color-brand-300)]' : 'bg-[var(--overlay-lift)] text-[var(--color-text-tertiary)]'
                    )}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold">{pillar.title}</h4>
                    <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] truncate max-w-[200px]">
                      {pillar.capabilities.length} active capabilities
                    </p>
                  </div>
                </div>

                <ChevronRight
                  className={cn(
                    'w-4 h-4 transition-transform',
                    isActive ? 'text-[var(--color-brand-300)] translate-x-0.5' : 'text-[var(--color-text-tertiary)]'
                  )}
                />
              </button>
            );
          })}
        </div>

        {/* Right Detail Pane: Active Capability Breakdown */}
        <div className="lg:col-span-8 p-6 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-6">
          <div className="space-y-2 border-b border-[var(--color-border-subtle)] pb-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase text-[var(--color-brand-300)] font-semibold tracking-wider">
                {activePillar.subtitle}
              </span>
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              {activePillar.title}
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {activePillar.description}
            </p>
          </div>

          {/* Capabilities List */}
          <div className="space-y-4">
            {activePillar.capabilities.map((cap) => (
              <div
                key={cap.name}
                className="p-4 rounded-sm bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] space-y-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-xs font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-success)] shrink-0" />
                    <span>{cap.name}</span>
                  </h4>
                  <span className="font-mono text-[10px] text-[var(--color-brand-300)] bg-[var(--overlay-lift)] px-2 py-0.5 rounded-xs border border-[var(--color-border-subtle)] self-start sm:self-auto">
                    {cap.evidence}
                  </span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] pl-5 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
