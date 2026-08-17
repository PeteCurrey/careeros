'use client';

import React, { useState } from 'react';
import { ShieldCheck, Eye, EyeOff, Lock, User, Briefcase, Globe, Info } from 'lucide-react';

export function PrivacySimulatorInteractive() {
  const [viewMode, setViewMode] = useState<'MY_VIEW' | 'MENTOR_VIEW' | 'EMPLOYER_VIEW' | 'PUBLIC_VIEW'>('MY_VIEW');

  const fields = [
    { name: 'Professional Name & Qualifications', myView: 'Visible (Account)', mentorView: 'Visible for Context', employerView: 'Shared on Application', publicView: 'Public Handle / Name', category: 'Identity' },
    { name: 'Career Ambitions & Target Roles', myView: 'Targeting Lead Roles ($160k)', mentorView: 'Targeting Lead Roles ($160k)', employerView: 'HIDDEN (Private Intent)', publicView: 'HIDDEN (Private Intent)', category: 'Strategy' },
    { name: 'Private Career Uncertainty / Doubts', myView: '“Unsure about management track”', mentorView: 'Active Guidance Context', employerView: 'NOT ACCESSIBLE', publicView: 'NOT ACCESSIBLE', category: 'Private Context' },
    { name: 'Current Salary & Compensation Targets', myView: '$135,000 / Target $160,000', mentorView: 'Benchmark Target $160k', employerView: 'HIDDEN (Private Data)', publicView: 'HIDDEN (Private Data)', category: 'Compensation' },
    { name: 'Passport Evidence Records', myView: '8 Project & Credential Records', mentorView: '8 Project & Credential Records', employerView: 'Explicitly Shared Records', publicView: 'Selected Public Proof', category: 'Evidence' },
    { name: 'Opportunity Status', myView: 'Exploring Opportunities', mentorView: 'Exploring Opportunities', employerView: 'HIDDEN by Default', publicView: 'HIDDEN (Private Status)', category: 'Status' },
  ];

  return (
    <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6 shadow-subtle">
      {/* Simulator Header & Tab Control */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[var(--color-border-default)] pb-6">
        <div>
          <span className="section-label">INTERACTIVE PRIVACY BOUNDARY SIMULATOR</span>
          <h3 className="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-1">
            See Exactly What Is Visible Across Roles
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)] font-mono mt-1">
            Illustrative privacy view &bull; Conceptual permission model
          </p>
        </div>

        {/* View Mode Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-[var(--radius-card)]">
          <button
            onClick={() => setViewMode('MY_VIEW')}
            className={`px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === 'MY_VIEW'
                ? 'bg-white/15 text-[var(--color-text-primary)] shadow-sm'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
            }`}
          >
            <User className="w-3.5 h-3.5" /> MY VIEW
          </button>
          <button
            onClick={() => setViewMode('MENTOR_VIEW')}
            className={`px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === 'MENTOR_VIEW'
                ? 'bg-white/15 text-[var(--color-text-primary)] shadow-sm'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" /> MENTOR VIEW
          </button>
          <button
            onClick={() => setViewMode('EMPLOYER_VIEW')}
            className={`px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === 'EMPLOYER_VIEW'
                ? 'bg-white/15 text-[var(--color-text-primary)] shadow-sm'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" /> EMPLOYER VIEW
          </button>
          <button
            onClick={() => setViewMode('PUBLIC_VIEW')}
            className={`px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === 'PUBLIC_VIEW'
                ? 'bg-white/15 text-[var(--color-text-primary)] shadow-sm'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
            }`}
          >
            <Globe className="w-3.5 h-3.5" /> PUBLIC VIEW
          </button>
        </div>
      </div>

      {/* Simulator Description Banner */}
      <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded text-xs text-[var(--color-text-secondary)] flex items-center gap-3">
        <Info className="w-4 h-4 text-[var(--color-taupe-600)] shrink-0" />
        <div>
          {viewMode === 'MY_VIEW' && (
            <span><strong>My View:</strong> You retain full visibility over all your private career data, notes, targets, and evidence records.</span>
          )}
          {viewMode === 'MENTOR_VIEW' && (
            <span><strong>Mentor View:</strong> Your AI Mentor accesses relevant developmental context to tailor recommendations under Career OS data controls.</span>
          )}
          {viewMode === 'EMPLOYER_VIEW' && (
            <span><strong>Employer View:</strong> Employers see only evidence and profile fields you explicitly grant permission to share. Private career uncertainty and salary targets are not shared.</span>
          )}
          {viewMode === 'PUBLIC_VIEW' && (
            <span><strong>Public View:</strong> Public visitors see only verified records you choose to make publicly visible on your Career Passport.</span>
          )}
        </div>
      </div>

      {/* Data Field Visibility Table */}
      <div className="border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden text-xs">
        <div className="grid grid-cols-12 bg-[var(--color-surface-sunken)] p-3 font-mono font-bold text-[var(--color-text-secondary)] border-b border-[var(--color-border-default)]">
          <div className="col-span-5 uppercase tracking-wider">Data Field Category</div>
          <div className="col-span-7 uppercase tracking-wider">Visibility Status in Selected View Mode</div>
        </div>

        <div className="divide-y divide-[var(--color-border-subtle)] bg-[var(--color-surface-raised)]">
          {fields.map((f, idx) => {
            let val = f.myView;
            let isRedacted = false;

            if (viewMode === 'MENTOR_VIEW') val = f.mentorView;
            if (viewMode === 'EMPLOYER_VIEW') {
              val = f.employerView;
              if (val.includes('HIDDEN') || val.includes('REDACTED')) isRedacted = true;
            }
            if (viewMode === 'PUBLIC_VIEW') {
              val = f.publicView;
              if (val.includes('HIDDEN') || val.includes('REDACTED')) isRedacted = true;
            }

            return (
              <div key={idx} className="grid grid-cols-12 p-3.5 items-center">
                <div className="col-span-5 font-semibold text-[var(--color-text-primary)] flex items-center gap-2">
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-[var(--color-taupe-300)]">
                    {f.category}
                  </span>
                  <span>{f.name}</span>
                </div>
                <div className="col-span-7 font-mono">
                  {isRedacted ? (
                    <span className="inline-flex items-center gap-1.5 text-red-700 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded font-bold text-[11px]">
                      <Lock className="w-3 h-3" /> {val}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded font-bold text-[11px]">
                      <Eye className="w-3 h-3 text-emerald-600" /> {val}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
