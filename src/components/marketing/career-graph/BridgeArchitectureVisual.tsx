'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Wrench, Cpu, Award, ShieldCheck, FileCheck } from 'lucide-react';

export function BridgeArchitectureVisual() {
  return (
    <div className="w-full bg-[var(--background-dark-deep)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden p-6 sm:p-10 space-y-8 shadow-xl">
      {/* Header */}
      <div className="space-y-2 border-b border-[var(--color-border-default)] pb-6">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)]">
          The Anatomy of a Transition
        </span>
        <h3 className="text-xl sm:text-2xl font-serif text-[var(--color-text-primary)]">
          The Four-Stage Pathway Bridge
        </h3>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
          Career Graph never pretends that skill overlap equals instant eligibility. A credible career pivot requires isolating transferable capability and identifying the exact bridge needed.
        </p>
      </div>

      {/* 4-Stage Horizontal Stepper Flow */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {/* Stage 1: Current Role */}
        <div className="p-5 rounded-lg bg-black/30 border border-white/10 space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-taupe-300)]">
              01 &bull; Current Role
            </span>
            <h4 className="text-base font-bold text-[var(--color-text-primary)]">
              Automotive Diagnostic Tech
            </h4>
            <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">
              5 years diagnosing vehicle CAN-bus electrical networks, sensors, and hydraulic braking assemblies.
            </p>
          </div>
          <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-emerald-400">
            Baseline Context Established
          </div>
        </div>

        {/* Stage 2: Transferable Capability */}
        <div className="p-5 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
              02 &bull; Transferable Capability
            </span>
            <h4 className="text-base font-bold text-[var(--color-text-primary)]">
              Diagnostic & Signal Logic
            </h4>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Systematic fault-tree elimination, wiring schematics fluency, actuator calibration, and oscilloscopy.
            </p>
          </div>
          <div className="pt-2 border-t border-[var(--color-border-default)] text-[11px] font-mono text-emerald-300 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>High Domain Portability</span>
          </div>
        </div>

        {/* Stage 3: Bridge Requirement */}
        <div className="p-5 rounded-lg bg-amber-500/5 border border-amber-500/20 space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400">
              03 &bull; Bridge Requirement
            </span>
            <h4 className="text-base font-bold text-amber-200">
              PLC Automation Training
            </h4>
            <p className="text-xs text-amber-300/80 leading-relaxed">
              Siemens/Allen-Bradley ladder logic programming, industrial robotics safety standards, and 3-phase plant power.
            </p>
          </div>
          <div className="pt-2 border-t border-amber-500/20 text-[11px] font-mono text-amber-300 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>12–16 Week Conversion</span>
          </div>
        </div>

        {/* Stage 4: Destination */}
        <div className="p-5 rounded-lg bg-purple-500/5 border border-purple-500/20 space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400">
              04 &bull; Target Destination
            </span>
            <h4 className="text-base font-bold text-purple-200">
              Controls & Automation Specialist
            </h4>
            <p className="text-xs text-purple-300/80 leading-relaxed">
              Maintains automated robotic fulfillment lines at global distribution hubs and advanced manufacturing plants.
            </p>
          </div>
          <div className="pt-2 border-t border-purple-500/20 text-[11px] font-mono text-purple-300 flex items-center gap-1">
            <Award className="w-3.5 h-3.5" />
            <span>New Industry Cluster Unlocked</span>
          </div>
        </div>
      </div>

      {/* Bridge Taxonomy Categories */}
      <div className="p-4 rounded-lg bg-black/20 border border-[var(--color-border-default)] space-y-3">
        <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-taupe-300)]">
          Common Career Graph Bridge Typologies
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs">
          <div className="p-2 rounded bg-white/5 border border-white/10 text-center space-y-1">
            <span className="font-semibold text-[var(--color-text-primary)] block">Statutory Licence</span>
            <span className="text-[10px] text-[var(--color-text-tertiary)] block">Regulated authority</span>
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/10 text-center space-y-1">
            <span className="font-semibold text-[var(--color-text-primary)] block">Formal Credential</span>
            <span className="text-[10px] text-[var(--color-text-tertiary)] block">Degree or diploma</span>
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/10 text-center space-y-1">
            <span className="font-semibold text-[var(--color-text-primary)] block">Technical Upskill</span>
            <span className="text-[10px] text-[var(--color-text-tertiary)] block">Software or tooling</span>
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/10 text-center space-y-1">
            <span className="font-semibold text-[var(--color-text-primary)] block">Portfolio Evidence</span>
            <span className="text-[10px] text-[var(--color-text-tertiary)] block">Tangible work artifacts</span>
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/10 text-center space-y-1">
            <span className="font-semibold text-[var(--color-text-primary)] block">Leadership Track</span>
            <span className="text-[10px] text-[var(--color-text-tertiary)] block">Team & budget record</span>
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/10 text-center space-y-1">
            <span className="font-semibold text-[var(--color-text-primary)] block">Domain Exposure</span>
            <span className="text-[10px] text-[var(--color-text-tertiary)] block">Sector terminology</span>
          </div>
        </div>
      </div>
    </div>
  );
}
