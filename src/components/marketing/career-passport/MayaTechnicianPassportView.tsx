'use client';

import React from 'react';
import { Award, Wrench, FileCheck, Briefcase, Compass, ArrowRight, ShieldCheck } from 'lucide-react';

export function MayaTechnicianPassportView() {
  return (
    <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-8 shadow-subtle">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded bg-white/15 text-[var(--color-text-primary)] flex items-center justify-center font-serif font-bold text-lg">
            MC
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif font-bold text-xl text-[var(--color-text-primary)]">
                Maya Chen
              </h3>
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-300">
                ILLUSTRATIVE SCENARIO
              </span>
            </div>
            <p className="text-xs font-mono text-[var(--color-taupe-700)]">
              Automotive Diagnostics Specialist &bull; 4 Years Track Record
            </p>
          </div>
        </div>

        <span className="text-xs font-mono text-[var(--color-taupe-700)] bg-[var(--color-surface-warm)] px-3 py-1.5 rounded border border-[var(--color-border-default)]">
          Target: Master EV Diagnostic Foreman
        </span>
      </div>

      {/* Structured Passport Entries */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Entry 1: Core Qualification */}
        <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-taupe-700)] flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-700" /> Qualification
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">
              Issuer Verified
            </span>
          </div>
          <h4 className="font-bold text-xs text-[var(--color-text-primary)]">
            NVQ Level 3 Light Vehicle Maintenance &amp; Repair
          </h4>
          <p className="text-[11px] text-[var(--color-text-secondary)]">
            City &amp; Guilds Awarded &bull; Full Apprenticeship Completion Portfolio
          </p>
        </div>

        {/* Entry 2: High-Voltage EV Training */}
        <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-taupe-700)] flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-blue-700" /> Specialist Training
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">
              Issuer Verified
            </span>
          </div>
          <h4 className="font-bold text-xs text-[var(--color-text-primary)]">
            IMI Level 3 Award in Electric / Hybrid Vehicle System Repair
          </h4>
          <p className="text-[11px] text-[var(--color-text-secondary)]">
            High-voltage safety isolation, battery management, inverter diagnostics.
          </p>
        </div>

        {/* Entry 3: Complex Project Evidence */}
        <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-taupe-700)] flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5 text-emerald-700" /> Project Evidence
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-300">
              Evidence Attached
            </span>
          </div>
          <h4 className="font-bold text-xs text-[var(--color-text-primary)]">
            CAN-Bus Intermittent Signal Loss Resolution (#EV-LOG-48)
          </h4>
          <p className="text-[11px] text-[var(--color-text-secondary)]">
            Diagnostic waveform capture, schematic tracing log, and repair sign-off.
          </p>
        </div>

        {/* Entry 4: Verified Employment */}
        <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-taupe-700)] flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-amber-700" /> Employment History
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">
              Employer Verified
            </span>
          </div>
          <h4 className="font-bold text-xs text-[var(--color-text-primary)]">
            Senior Workshop Technician &bull; Vantage Automotive Ltd (3 Years)
          </h4>
          <p className="text-[11px] text-[var(--color-text-secondary)]">
            Verified by Service Director &bull; Lead workshop technician on EV diagnostics.
          </p>
        </div>
      </div>

      {/* How Career OS Leverages This Passport Record */}
      <div className="p-5 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-text-primary)] flex items-center gap-2">
          <Compass className="w-4 h-4 text-emerald-700" />
          How Maya&apos;s Career Passport Powers the Rest of Career OS:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 bg-white border border-[var(--color-border-subtle)] rounded space-y-1">
            <strong className="text-[var(--color-text-primary)] block">Career Twin Context:</strong>
            <span className="text-[var(--color-text-secondary)] text-[11px]">Maps high-voltage EV expertise as a premium capability cluster.</span>
          </div>
          <div className="p-3 bg-white border border-[var(--color-border-subtle)] rounded space-y-1">
            <strong className="text-[var(--color-text-primary)] block">AI Mentor Guidance:</strong>
            <span className="text-[var(--color-text-secondary)] text-[11px]">Recommends supervisory management module to unlock Foreman role.</span>
          </div>
          <div className="p-3 bg-white border border-[var(--color-border-subtle)] rounded space-y-1">
            <strong className="text-[var(--color-text-primary)] block">Employer Discovery:</strong>
            <span className="text-[var(--color-text-secondary)] text-[11px]">Proves EV credentials to fleet operators without manual resume screening.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
