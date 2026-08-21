'use client';

import React, { useState } from 'react';
import { Eye, Shield, Lock, Check, X, AlertCircle } from 'lucide-react';

type ViewMode = 'MY_VIEW' | 'MENTOR_VIEW' | 'EMPLOYER_VIEW' | 'PUBLIC_VIEW';

interface FieldRule {
  fieldName: string;
  category: string;
  sampleValue: string;
  visibleIn: ViewMode[];
  redactedLabel?: string;
}

export function TwinPrivacySimulator() {
  const [viewMode, setViewMode] = useState<ViewMode>('MY_VIEW');

  const fields: FieldRule[] = [
    {
      fieldName: 'Current Role & Employer',
      category: 'Professional History',
      sampleValue: 'Mechanical Technician at General Manufacturing Inc.',
      visibleIn: ['MY_VIEW', 'MENTOR_VIEW', 'EMPLOYER_VIEW', 'PUBLIC_VIEW'],
    },
    {
      fieldName: 'Verified Qualifications',
      category: 'Verified Credentials',
      sampleValue: 'NVQ Level 3 Electrical Installation (City & Guilds Verified)',
      visibleIn: ['MY_VIEW', 'MENTOR_VIEW', 'EMPLOYER_VIEW', 'PUBLIC_VIEW'],
    },
    {
      fieldName: 'Public Portfolio Evidence',
      category: 'Work Evidence',
      sampleValue: 'Plant Maintenance Optimization Case Study (Public PDF)',
      visibleIn: ['MY_VIEW', 'MENTOR_VIEW', 'EMPLOYER_VIEW', 'PUBLIC_VIEW'],
    },
    {
      fieldName: 'Career Change Interest',
      category: 'Exploratory Intent',
      sampleValue: 'Exploring pivot to Renewable Wind Turbine Field Engineering',
      visibleIn: ['MY_VIEW', 'MENTOR_VIEW'],
      redactedLabel: 'Redacted (Private Exploratory Context)',
    },
    {
      fieldName: 'Minimum Target Salary',
      category: 'Compensation Parameters',
      sampleValue: '$92,000 / year base floor',
      visibleIn: ['MY_VIEW', 'MENTOR_VIEW'],
      redactedLabel: 'Redacted (Private Compensation Floor)',
    },
    {
      fieldName: 'Self-Assessed Skill Weakness',
      category: 'Development Diagnostics',
      sampleValue: 'Low confidence in PLC Ladder Logic programming',
      visibleIn: ['MY_VIEW', 'MENTOR_VIEW'],
      redactedLabel: 'Redacted (Private Diagnostic Context)',
    },
    {
      fieldName: 'Active Job Search Status',
      category: 'Job Search Signals',
      sampleValue: 'Open to external opportunities within 60 days',
      visibleIn: ['MY_VIEW', 'MENTOR_VIEW'],
      redactedLabel: 'Redacted (Employer Anti-Surveillance Gate)',
    },
    {
      fieldName: 'Personal Development Notes',
      category: 'Personal Journal',
      sampleValue: 'Frustrated with current shift scheduling; aiming for management title',
      visibleIn: ['MY_VIEW'],
      redactedLabel: 'Redacted (Personal Notes Only)',
    },
  ];

  const viewModesInfo = [
    { id: 'MY_VIEW', label: 'My View', desc: 'Full personal context including private notes & salary floors.' },
    { id: 'MENTOR_VIEW', label: 'Mentor View', desc: 'Authorized context for AI Career Mentor guidance & trajectory modeling.' },
    { id: 'EMPLOYER_VIEW', label: 'Employer View', desc: 'Only explicitly shared professional qualifications & evidence.' },
    { id: 'PUBLIC_VIEW', label: 'Public View', desc: 'Minimal public profile or verified credential verification link.' },
  ];

  return (
    <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6 shadow-subtle">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-5">
        <div className="space-y-1">
          <span className="section-label">INTERACTIVE PRIVACY SIMULATOR</span>
          <h3 className="text-xl font-serif font-bold text-[var(--color-text-primary)]">
            One Twin. Four Distinct Permission Views.
          </h3>
        </div>
        <span className="text-xs font-mono px-3 py-1 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded font-semibold shrink-0">
          Field-Level Scoping Live Demo
        </span>
      </div>

      {/* Mode Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {viewModesInfo.map((mode) => {
          const isActive = viewMode === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => setViewMode(mode.id as ViewMode)}
              className={`p-3 rounded-[var(--radius-card)] text-left border transition-all space-y-1 ${
                isActive
                  ? 'bg-white/15 text-[var(--color-text-primary)] border-white/15 shadow-sm'
                  : 'bg-[var(--color-surface-warm)] text-[var(--color-text-primary)] border-[var(--color-border-default)] hover:border-white/20'
              }`}
            >
              <span className="font-mono text-xs font-bold block">{mode.label}</span>
              <span className={`text-[10px] block leading-tight ${isActive ? 'text-[var(--color-taupe-300)]' : 'text-[var(--color-text-tertiary)]'}`}>
                {mode.desc}
              </span>
            </button>
          );
        })}
      </div>

      {/* Field Visibility Table */}
      <div className="border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden bg-[var(--color-surface-base)]">
        <div className="p-4 bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)] flex items-center justify-between text-xs font-mono font-bold text-[var(--color-text-primary)]">
          <span>CAREER TWIN FIELD NAME</span>
          <span>CURRENT VISIBILITY ({viewMode.replace('_', ' ')})</span>
        </div>

        <div className="divide-y divide-[var(--color-border-subtle)] text-xs">
          {fields.map((field, idx) => {
            const isVisible = field.visibleIn.includes(viewMode);
            return (
              <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[var(--color-surface-warm)]/40 transition-colors">
                <div className="space-y-0.5 max-w-sm">
                  <span className="text-[10px] font-mono font-semibold text-[var(--color-taupe-700)] uppercase tracking-wider block">
                    {field.category}
                  </span>
                  <p className="font-bold text-[var(--color-text-primary)]">{field.fieldName}</p>
                </div>

                <div className="sm:text-right">
                  {isVisible ? (
                    <div className="flex items-center gap-1.5 text-emerald-800 font-mono font-medium bg-emerald-50 border border-emerald-200 px-3 py-1 rounded">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{field.sampleValue}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[11px] bg-slate-100 border border-slate-200 px-3 py-1 rounded italic">
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{field.redactedLabel || 'Redacted / Hidden'}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-3 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded text-[11px] text-[var(--color-text-secondary)] flex items-center gap-2">
        <AlertCircle className="w-4 h-4 text-[var(--color-taupe-600)] shrink-0" />
        <span>Matching algorithms do not grant employers access to private Twin context. Access must be explicitly granted by the user.</span>
      </div>
    </div>
  );
}
