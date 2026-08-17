'use client';

import React, { useState } from 'react';
import { User, Shield, Compass, FileCheck, Layers, Sparkles, Network, ArrowUpRight } from 'lucide-react';

export function HeroTwinInterface() {
  const [activeLayer, setActiveLayer] = useState<string>('skills');

  const layers = [
    { id: 'skills', label: 'Verified Skills', count: '18 Competencies', detail: 'Diagnostics, Systems Architecture, Controls, Safety', state: 'Evidenced' },
    { id: 'evidence', label: 'Work Evidence', count: '14 Artifacts', detail: 'Project documentation, code repos, capstone audits', state: 'Verified' },
    { id: 'qualifications', label: 'Qualifications', count: '3 Credentials', detail: 'BSc Engineering, AWS Solutions Architect, First Aid', state: 'Issuer Verified' },
    { id: 'goals', label: 'Development Goals', count: '2 Active Trajectories', detail: 'Automation Leadership, PLC Micro-credentials', state: 'Private' },
    { id: 'preferences', label: 'Work Preferences', count: '4 Constraints', detail: 'Hybrid US-East, Non-defense, Equity option', state: 'Mentor View Only' },
  ];

  return (
    <div className="w-full p-6 sm:p-8 bg-[var(--color-surface-raised)] backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] shadow-editorial space-y-6 border-beam-container border-beam-slow">
      {/* Visual Header Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--color-border-subtle)] pb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#2F8FFF] shadow-[0_0_6px_rgba(47,143,255,0.7)]" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
            Career Twin &bull; Active Context Layer
          </span>
        </div>
        <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] text-[var(--color-taupe-700)]">
          Illustrative Career OS interface
        </span>
      </div>

      {/* Central Visual Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Profile & Context Topology Graphic */}
        <div className="lg:col-span-7 relative p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] min-h-[300px] flex flex-col justify-center items-center overflow-hidden">
          {/* Background Career Path Lines */}
          <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
            <div className="w-64 h-64 border border-dashed border-[var(--color-taupe-600)] rounded-full animate-spin-slow" />
            <div className="w-96 h-96 border border-dotted border-[var(--color-taupe-400)] rounded-full absolute" />
          </div>

          {/* Central Human Profile Node */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-2 mb-6">
            <div className="w-16 h-16 rounded-full bg-white/15 text-[var(--color-text-primary)] flex items-center justify-center shadow-md border-2 border-[var(--color-border-default)]">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-[var(--color-text-primary)]">Alex Morgan</h4>
              <span className="text-[11px] font-mono text-[var(--color-taupe-700)]">Mechanical Maintenance &bull; 5 Yrs Exp</span>
            </div>
          </div>

          {/* Surrounding Context Layer Buttons */}
          <div className="relative z-10 flex flex-wrap justify-center gap-2 max-w-md">
            {layers.map((layer) => {
              const isActive = activeLayer === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`px-3 py-1.5 rounded-[var(--radius-card)] text-xs font-mono transition-all border ${
                    isActive
                      ? 'bg-white/15 text-[var(--color-text-primary)] border-white/15 shadow-xs'
                      : 'bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] border-[var(--color-border-default)] hover:border-white/20'
                  }`}
                >
                  {layer.label}
                </button>
              );
            })}
          </div>

          {/* Outward Outbound System Vectors */}
          <div className="w-full mt-6 pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-around text-[10px] font-mono text-[var(--color-taupe-700)]">
            <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-purple-600" /> Mentor</span>
            <span className="flex items-center gap-1"><FileCheck className="w-3 h-3 text-emerald-600" /> Passport</span>
            <span className="flex items-center gap-1"><Network className="w-3 h-3 text-amber-600" /> Graph</span>
            <span className="flex items-center gap-1"><Compass className="w-3 h-3 text-blue-600" /> Opportunities</span>
          </div>
        </div>

        {/* Selected Layer Detail Inspector */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-taupe-700)] block">
            LAYER INSPECTOR &bull; SELECTED CONTEXT
          </span>
          {(() => {
            const current = (layers.find((l) => l.id === activeLayer) || layers[0])!;
            return (
              <div className="p-5 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif font-bold text-base text-[var(--color-text-primary)]">
                    {current.label}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold border border-emerald-300">
                    {current.state}
                  </span>
                </div>
                <div className="text-xs font-mono font-bold text-[var(--color-taupe-800)]">
                  {current.count}
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {current.detail}
                </p>
                <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--color-taupe-700)]">
                  <span>Privacy: Field-Level Enforced</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
                    Live Context <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
