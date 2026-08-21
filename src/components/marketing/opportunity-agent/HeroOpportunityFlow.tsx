'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Illustrative animated opportunity flow for the hero section.
// Shows a Career Twin at center-left, capabilities radiating, and
// relevant opportunities moving toward the individual.
// Clearly labeled as illustrative concept.

const CAPABILITIES = [
  { label: 'Diagnostics', angle: -60, radius: 130, color: 'text-blue-400' },
  { label: 'EV Systems', angle: -25, radius: 150, color: 'text-cyan-400' },
  { label: 'Communication', angle: 15, radius: 140, color: 'text-indigo-400' },
  { label: 'Safety', angle: 50, radius: 120, color: 'text-purple-400' },
  { label: 'Fault Finding', angle: 80, radius: 145, color: 'text-blue-300' },
];

const OPPORTUNITIES = [
  {
    id: 'opp1',
    label: 'Field Service Engineer',
    org: 'Northstar Industrial Systems',
    angle: -40,
    startRadius: 340,
    endRadius: 210,
    active: true,
    color: 'border-emerald-500/60 bg-emerald-500/10',
    dot: 'bg-emerald-400',
  },
  {
    id: 'opp2',
    label: 'EV Technical Trainer',
    org: 'Meridian Technical Education',
    angle: 10,
    startRadius: 360,
    endRadius: 240,
    active: false,
    color: 'border-amber-500/40 bg-amber-500/5',
    dot: 'bg-amber-400',
  },
  {
    id: 'opp3',
    label: 'Maintenance Technician',
    org: 'Civic Infrastructure Group',
    angle: 55,
    startRadius: 320,
    endRadius: 220,
    active: false,
    color: 'border-slate-500/30 bg-slate-500/5',
    dot: 'bg-slate-400',
  },
];

const WHY_SURFACED = [
  'Diagnostics & fault-finding background',
  'Electromechanical system experience',
  'Customer-facing technical communication',
  'EV training completed',
];

export function HeroOpportunityFlow() {
  const [phase, setPhase] = useState(0);
  const [showRationale, setShowRationale] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setShowRationale(true), 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border-default)] bg-[var(--background-dark-deep)]/75 backdrop-blur-md border-beam-container border-beam-slow"
      style={{ minHeight: '420px' }}
      role="img"
      aria-label="Illustrative Opportunity Agent concept showing relevant opportunities surfacing toward a career profile"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-border-default) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-default) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Soft glow behind twin */}
      <div className="absolute left-[18%] top-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[var(--color-brand-600)]/10 blur-3xl pointer-events-none" />

      {/* SVG layer — path lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 900 420"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {/* Capability arcs from twin (center ~170, 210) */}
        {CAPABILITIES.map((cap, i) => {
          const rad = (cap.angle * Math.PI) / 180;
          const x2 = 170 + Math.cos(rad) * cap.radius;
          const y2 = 210 + Math.sin(rad) * cap.radius;
          return (
            <line
              key={cap.label}
              x1={170}
              y1={210}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth={1}
              strokeOpacity={phase >= 1 ? 0.25 : 0}
              className="text-[var(--color-brand-400)] transition-all duration-1000"
              style={{ transitionDelay: `${i * 120}ms` }}
            />
          );
        })}

        {/* Opportunity paths moving inward */}
        {OPPORTUNITIES.map((opp, i) => {
          const rad = (opp.angle * Math.PI) / 180;
          const xStart = 170 + Math.cos(rad) * opp.startRadius;
          const yStart = 210 + Math.sin(rad) * opp.startRadius;
          const xEnd = 170 + Math.cos(rad) * opp.endRadius;
          const yEnd = 210 + Math.sin(rad) * opp.endRadius;
          const active = opp.active && phase >= 2;
          return (
            <line
              key={opp.id}
              x1={xStart}
              y1={yStart}
              x2={xEnd}
              y2={yEnd}
              stroke="currentColor"
              strokeWidth={active ? 1.5 : 0.8}
              strokeOpacity={phase >= 2 ? (active ? 0.5 : 0.15) : 0}
              strokeDasharray={active ? undefined : '4 6'}
              className={cn(
                'transition-all duration-1000',
                active ? 'text-emerald-400' : 'text-slate-500'
              )}
              style={{ transitionDelay: `${i * 200}ms` }}
            />
          );
        })}
      </svg>

      {/* Career Twin node */}
      <div
        className={cn(
          'absolute flex flex-col items-center gap-1.5 transition-all duration-700',
          phase >= 1 ? 'opacity-100' : 'opacity-0'
        )}
        style={{ left: '170px', top: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <div className="w-14 h-14 rounded-full border-2 border-[var(--color-brand-500)]/60 bg-[var(--color-brand-950)]/80 flex items-center justify-center shadow-lg shadow-[var(--color-brand-600)]/20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="8" r="4" fill="currentColor" className="text-[var(--color-brand-400)]" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-[var(--color-brand-400)]" />
          </svg>
        </div>
        <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)]">Career Twin</span>
      </div>

      {/* Capability nodes */}
      {CAPABILITIES.map((cap, i) => {
        const rad = (cap.angle * Math.PI) / 180;
        const x = 170 + Math.cos(rad) * cap.radius;
        const y = 210 + Math.sin(rad) * cap.radius;
        return (
          <div
            key={cap.label}
            className={cn(
              'absolute transition-all duration-500 pointer-events-none',
              phase >= 1 ? 'opacity-100' : 'opacity-0'
            )}
            style={{
              left: `${x}px`,
              top: `${y}px`,
              transform: 'translate(-50%, -50%)',
              transitionDelay: `${200 + i * 100}ms`,
            }}
          >
            <span
              className={cn(
                'text-[10px] font-medium px-2 py-0.5 rounded border border-current/30 bg-[var(--color-surface-raised)]/60',
                cap.color
              )}
            >
              {cap.label}
            </span>
          </div>
        );
      })}

      {/* Opportunity nodes */}
      {OPPORTUNITIES.map((opp, i) => {
        const rad = (opp.angle * Math.PI) / 180;
        const r = phase >= 2 ? opp.endRadius + 20 : opp.startRadius;
        const x = 170 + Math.cos(rad) * r;
        const y = 210 + Math.sin(rad) * r;
        const active = opp.active && phase >= 2;
        return (
          <div
            key={opp.id}
            className={cn(
              'absolute transition-all duration-1000 pointer-events-none',
              phase >= 2 ? 'opacity-100' : 'opacity-0'
            )}
            style={{
              left: `${x}px`,
              top: `${y}px`,
              transform: 'translate(-50%, -50%)',
              transitionDelay: `${i * 200}ms`,
            }}
          >
            <div
              className={cn(
                'rounded border text-[10px] font-medium px-2.5 py-1.5 whitespace-nowrap transition-all duration-500',
                opp.color,
                active ? 'shadow-md shadow-emerald-500/20' : ''
              )}
            >
              <div className="flex items-center gap-1.5">
                <span className={cn('w-1.5 h-1.5 rounded-full flex-shrink-0', opp.dot)} />
                <span className={active ? 'text-emerald-200' : 'text-[var(--color-text-tertiary)]'}>
                  {opp.label}
                </span>
              </div>
            </div>
          </div>
        );
      })}

      {/* Rationale panel — why this surfaced */}
      <div
        className={cn(
          'absolute right-6 top-1/2 -translate-y-1/2 max-w-[280px] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-lg p-5 space-y-3 transition-all duration-700 shadow-xl',
          showRationale ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        )}
        aria-live="polite"
      >
        <div className="space-y-0.5">
          <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-400">
            Why this surfaced
          </span>
          <p className="text-xs font-semibold text-[var(--color-text-primary)]">
            Field Service Engineer
          </p>
          <p className="text-[10px] text-[var(--color-text-tertiary)]">
            Northstar Industrial Systems · Illustrative opportunity
          </p>
        </div>
        <div className="space-y-1">
          {WHY_SURFACED.map((item) => (
            <div key={item} className="flex items-start gap-1.5">
              <span className="mt-0.5 w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
              <span className="text-[11px] text-[var(--color-text-secondary)]">{item}</span>
            </div>
          ))}
        </div>
        <div className="pt-1 border-t border-[var(--color-border-default)]">
          <span className="text-[9px] font-mono uppercase tracking-widest text-amber-400">Bridge</span>
          <p className="text-[11px] text-[var(--color-text-tertiary)] mt-0.5">
            Industrial equipment exposure may still be required.
          </p>
        </div>
      </div>

      {/* Illustrative label */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] opacity-60">
          Illustrative Opportunity Agent concept · Product demonstration
        </span>
      </div>
    </div>
  );
}
