'use client';

import React from 'react';
import { Shield, Lock, Eye, ArrowRight, CheckCircle2, XCircle, Building, UserCheck, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

export function PrivacyBoundaryDiagram() {
  return (
    <div
      className="w-full border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden bg-[var(--background-dark-deep)]"
      role="region"
      aria-label="Private Career OS vs Shared Professional Context Privacy Boundary Diagram"
    >
      {/* Top Header */}
      <div className="p-6 sm:p-8 bg-black/40 border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)] flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            Security &amp; Data Sovereignty
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
            Career intelligence and employer visibility are not the same thing.
          </h3>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded">
          Permission-Governed
        </span>
      </div>

      {/* Two-Column Privacy Boundary Schema */}
      <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[var(--color-surface-base)] relative">
        {/* Left Column: 100% Private to You */}
        <div className="p-6 rounded-xl bg-[var(--color-surface-raised)] border border-emerald-500/40 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-400">
              <Lock className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest font-bold">
                Private Career OS
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded">
              Visible Only to You
            </span>
          </div>

          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            Your personal thinking space. Everything here is strictly confidential and protected from current employers, recruiters, and search algorithms.
          </p>

          <div className="space-y-2.5 text-xs">
            {[
              'Coaching dialogue & reflections with AI Career Mentor',
              'Internal Career Twin capability baseline & uncertainties',
              'Confidential salary targets & compensation history',
              'Future career-change thoughts & exploration signals',
              'Self-evaluations, developmental goals & weaknesses',
              'Target companies you are privately researching',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-[var(--color-text-secondary)]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Shared Professional Context */}
        <div className="p-6 rounded-xl bg-[var(--color-surface-raised)] border border-purple-500/40 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-purple-400">
              <Eye className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest font-bold">
                Authorised Sharing
              </span>
            </div>
            <span className="text-[10px] font-mono text-purple-300/80 bg-purple-500/10 px-2 py-0.5 rounded">
              You Control Disclosure
            </span>
          </div>

          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            Information that becomes eligible for presentation to an employer only after you review an opportunity and explicitly grant permission.
          </p>

          <div className="space-y-2.5 text-xs">
            {[
              'Selected Career Passport credentials & project artifacts',
              'Verified qualifications & institutional attestations',
              'Demonstrated technical capabilities matching role criteria',
              'Agreed contact information upon mutually approved intro',
              'Specific case studies you explicitly choose to attach',
              'Objective verification badges from verified issuers',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-[var(--color-text-secondary)]">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strict Commitments Banner */}
      <div className="p-6 bg-black/40 border-t border-[var(--color-border-default)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-white flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            Employer Agent Separation
          </span>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            Employer Agent cannot browse unpermitted profiles or read private mentor interactions. Organizations only see what you intentionally provide for an active evaluation.
          </p>
        </div>
      </div>
    </div>
  );
}
