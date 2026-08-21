'use client';

import React from 'react';
import { 
  UserCheck, 
  Eye, 
  Scale, 
  Lock, 
  ShieldCheck, 
  Users, 
  FileCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function TrustSystemDiagram() {
  const pillars = [
    { title: 'Human Agency', icon: UserCheck, role: 'Individual sovereignty & decision primacy', color: 'text-purple-300', bg: 'bg-purple-950/40', border: 'border-purple-500/30' },
    { title: 'Transparency', icon: Eye, role: 'Explicit rationale & data provenance', color: 'text-[#6BB8FF]', bg: 'bg-blue-950/40', border: 'border-blue-500/30' },
    { title: 'Fairness & Parity', icon: Scale, role: 'Multi-pathway dignity & continuous testing', color: 'text-emerald-300', bg: 'bg-emerald-950/40', border: 'border-emerald-500/30' },
    { title: 'Architectural Privacy', icon: Lock, role: 'Zero data sales & strict perimeter segregation', color: 'text-amber-300', bg: 'bg-amber-950/40', border: 'border-amber-500/30' },
    { title: 'Safety & Safeguards', icon: ShieldCheck, role: 'Youth protection & non-therapeutic guardrails', color: 'text-rose-300', bg: 'bg-rose-950/40', border: 'border-rose-500/30' },
    { title: 'Human Oversight', icon: Users, role: 'Human hiring & education decision gates', color: 'text-cyan-300', bg: 'bg-cyan-950/40', border: 'border-cyan-500/30' },
    { title: 'Accountability', icon: FileCheck, role: 'Auditable use-case register & user recourse', color: 'text-indigo-300', bg: 'bg-indigo-950/40', border: 'border-indigo-500/30' },
  ];

  return (
    <div
      className="w-full bg-[var(--background-dark-deep)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl p-6 sm:p-8 space-y-8"
      role="region"
      aria-label="Career OS Trust Operating Model Architecture Diagram"
    >
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--color-border-default)]">
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#6BB8FF] font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#2F8FFF]" />
            Operating Model &bull; Seven-Pillar Trust Architecture
          </span>
          <h3 className="text-lg sm:text-xl font-serif text-white font-normal">
            Governance Centered on Human Agency
          </h3>
        </div>
        <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)] self-start sm:self-auto shrink-0">
          Architectural Blueprint
        </span>
      </div>

      {/* Central Core & Surrounding Ring */}
      <div className="space-y-6">
        
        {/* Center Core Hub */}
        <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)]/80 backdrop-blur-md border border-[rgba(47,143,255,0.3)] shadow-inner text-center max-w-xl mx-auto space-y-2">
          <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-[#2F8FFF] flex items-center justify-center text-[#2F8FFF] mx-auto shadow-[0_0_10px_rgba(47,143,255,0.3)]">
            <UserCheck className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#6BB8FF] font-bold block">
            CENTRAL SOVEREIGN INDIVIDUAL
          </span>
          <h4 className="text-base font-serif text-white font-medium">
            The User Retains Final Authority Over Their Career
          </h4>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            AI provides assistance, synthesis, and exploration. The human user decides which pathways to explore, which opportunities to pursue, and how their data is shared.
          </p>
        </div>

        {/* 7 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={cn(
                  'p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border transition-all flex flex-col justify-between space-y-2 text-xs',
                  p.border,
                  idx === 6 ? 'sm:col-span-2 lg:col-span-2' : ''
                )}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className={cn('w-7 h-7 rounded flex items-center justify-center border', p.bg, p.border, p.color)}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[9px] font-mono text-[var(--color-text-tertiary)] font-bold">
                      0{idx + 1}
                    </span>
                  </div>
                  <h5 className="font-semibold text-white text-sm">
                    {p.title}
                  </h5>
                  <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                    {p.role}
                  </p>
                </div>
                <div className="pt-2 text-[10px] font-mono text-emerald-400">
                  &bull; Enforced via System Boundary
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Footer Statement */}
      <div className="p-4 bg-black/30 backdrop-blur-sm border-t border-[var(--color-border-default)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-text-tertiary)]">
        <span className="italic">
          &ldquo;Designed for responsible use. Tested for foreseeable risks. Transparent about limitations. Accountable when things go wrong.&rdquo;
        </span>
        <span className="font-mono text-[11px] text-[var(--color-taupe-300)] shrink-0">
          Career OS Trust Standard
        </span>
      </div>
    </div>
  );
}
