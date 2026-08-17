'use client';

import React, { useState } from 'react';
import { FileCheck, ShieldCheck, CheckCircle2, Award, Wrench, Briefcase, Eye, Lock, ExternalLink, Calendar, ArrowRight } from 'lucide-react';

export function HeroPassportInterface() {
  const [activeTab, setActiveTab] = useState<'qualifications' | 'projects' | 'licences'>('qualifications');

  return (
    <div className="w-full p-6 sm:p-8 bg-white/95 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] shadow-editorial space-y-6 text-[var(--color-charcoal-deep)]">
      {/* Top Passport Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded bg-[var(--color-charcoal-deep)] text-[var(--color-ivory-base)] flex items-center justify-center font-serif font-bold text-lg">
            JM
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif font-bold text-lg text-[var(--color-charcoal-deep)]">
                Jordan Morgan
              </h3>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">
                ACTIVE RECORD
              </span>
            </div>
            <p className="text-xs font-mono text-[var(--color-taupe-700)]">
              Mechanical & Electrical Technician &bull; Passport ID: CP-84920
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] text-[var(--color-taupe-700)]">
            Illustrative Career OS interface
          </span>
          <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-slate-100 border border-slate-300 text-slate-700 flex items-center gap-1">
            <Calendar className="w-3 h-3 text-slate-500" /> Updated 3d ago
          </span>
        </div>
      </div>

      {/* Record Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-[var(--color-border-subtle)] pb-2 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('qualifications')}
          className={`px-4 py-2 rounded-[var(--radius-card)] text-xs font-mono font-semibold transition-all border ${
            activeTab === 'qualifications'
              ? 'bg-[var(--color-charcoal-deep)] text-[var(--color-ivory-base)] border-[var(--color-charcoal-deep)]'
              : 'bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] border-[var(--color-border-default)] hover:border-[var(--color-charcoal-base)]'
          }`}
        >
          Qualifications (4)
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`px-4 py-2 rounded-[var(--radius-card)] text-xs font-mono font-semibold transition-all border ${
            activeTab === 'projects'
              ? 'bg-[var(--color-charcoal-deep)] text-[var(--color-ivory-base)] border-[var(--color-charcoal-deep)]'
              : 'bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] border-[var(--color-border-default)] hover:border-[var(--color-charcoal-base)]'
          }`}
        >
          Project Evidence (6)
        </button>
        <button
          onClick={() => setActiveTab('licences')}
          className={`px-4 py-2 rounded-[var(--radius-card)] text-xs font-mono font-semibold transition-all border ${
            activeTab === 'licences'
              ? 'bg-[var(--color-charcoal-deep)] text-[var(--color-ivory-base)] border-[var(--color-charcoal-deep)]'
              : 'bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] border-[var(--color-border-default)] hover:border-[var(--color-charcoal-base)]'
          }`}
        >
          Licences & Safety (3)
        </button>
      </div>

      {/* Tab Content Display */}
      {activeTab === 'qualifications' && (
        <div className="space-y-3">
          <div className="p-4 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-700" />
                <h4 className="font-bold text-xs text-[var(--color-charcoal-deep)]">
                  NVQ Level 3 Electrical Installation
                </h4>
              </div>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                Awarded by City & Guilds &bull; Apprenticeship Track &bull; Issued 2022
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">
                Issuer Verified
              </span>
            </div>
          </div>

          <div className="p-4 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-blue-700" />
                <h4 className="font-bold text-xs text-[var(--color-charcoal-deep)]">
                  Siemens S7-1200 PLC Automation Certificate
                </h4>
              </div>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                Industrial Training Institute &bull; 60 Hours Practical &bull; Issued 2024
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-300">
                Evidence Attached
              </span>
            </div>
          </div>

          <div className="p-4 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-amber-700" />
                <h4 className="font-bold text-xs text-[var(--color-charcoal-deep)]">
                  Lean Manufacturing & 5S Operational Practice
                </h4>
              </div>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                Internal Workshop Workshop Lead &bull; Self-Reported Competency Entry
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                Self-Declared
              </span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'projects' && (
        <div className="space-y-3">
          <div className="p-4 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-xs text-[var(--color-charcoal-deep)] flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-700" />
                Conveyor Line Automation Retrofit (#PRJ-2024-09)
              </h4>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">
                Employer Verified
              </span>
            </div>
            <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
              Led mechanical rewiring and sensor integration across 3 packaging lines, reducing unscheduled stoppage by 22%.
            </p>
            <div className="flex items-center gap-3 text-[10px] font-mono text-[var(--color-taupe-700)] pt-1 border-t border-[var(--color-border-subtle)]">
              <span>Artifact: Technical Commissioning Sign-Off (PDF)</span>
              <span>&bull;</span>
              <span>Verified by Apex Manufacturing LLC</span>
            </div>
          </div>

          <div className="p-4 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-xs text-[var(--color-charcoal-deep)] flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-blue-700" />
                Hydraulic Press Overhaul & Diagnostics
              </h4>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-300">
                Evidence Attached
              </span>
            </div>
            <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
              Complete teardown and valve replacement for 50-ton stamping unit. Rebuilt within 48h emergency maintenance window.
            </p>
            <div className="flex items-center gap-3 text-[10px] font-mono text-[var(--color-taupe-700)] pt-1 border-t border-[var(--color-border-subtle)]">
              <span>Artifact: Teardown Log & Pressure Test Reports</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'licences' && (
        <div className="space-y-3">
          <div className="p-4 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <h4 className="font-bold text-xs text-[var(--color-charcoal-deep)]">
                  OSHA 30-Hour General Industry Safety Certification
                </h4>
              </div>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                Credential ID: OSHA-GI-98402 &bull; Valid through 2027
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">
              Issuer Verified
            </span>
          </div>

          <div className="p-4 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-500" />
                <h4 className="font-bold text-xs text-[var(--color-charcoal-deep)]">
                  Forklift & Telehandler Operator Card
                </h4>
              </div>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                Card Ref #48201 &bull; Expired: March 2025
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
              Renewal Due / Expired
            </span>
          </div>
        </div>
      )}

      {/* Trust & Selective Sharing Footer */}
      <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--color-taupe-800)]">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Clear verification states distinguish user claims from third-party proof.</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white border border-[var(--color-border-default)] text-[var(--color-charcoal-deep)] font-semibold">
            Selective Sharing Active
          </span>
        </div>
      </div>
    </div>
  );
}
