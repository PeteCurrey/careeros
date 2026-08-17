'use client';

import React from 'react';
import {
  Compass,
  Briefcase,
  User,
  ArrowRight,
  ArrowLeftRight,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Lock,
} from 'lucide-react';

export function AgentCoordinationVisual() {
  return (
    <div className="w-full p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
          Ecosystem Coordination
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white">
          Discovery Works from Both Directions
        </h3>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
          Career OS coordinates two dedicated intelligence layers: Opportunity Agent advocating for the individual, and Employer Agent supporting the hiring organisation.
        </p>
      </div>

      {/* Two-Way Visual Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Individual & Opportunity Agent */}
        <div className="lg:col-span-5 p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border-default)]">
              <span className="text-xs font-mono uppercase text-purple-400 font-bold flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" /> Individual Side
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                Opportunity Agent
              </span>
            </div>

            <h4 className="font-bold text-sm sm:text-base text-white">
              Candidate Career Intelligence
            </h4>

            <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">&bull;</span>
                <span><strong>Career Twin:</strong> Private motivations, preferences, salary parameters</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">&bull;</span>
                <span><strong>Career Passport:</strong> Verified project evidence &amp; confirmed credentials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">&bull;</span>
                <span><strong>Career Graph:</strong> Feasible lateral pathways &amp; bridge requirements</span>
              </li>
            </ul>

            <div className="p-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-subtle)] rounded space-y-1 text-xs">
              <span className="font-semibold text-white block text-[11px]">Individual Questions Answered:</span>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                &ldquo;Why might this role fit me? What evidence transfers? What bridge is required? Do I want to introduce myself?&rdquo;
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--color-border-subtle)] text-[10px] font-mono text-purple-300 flex items-center gap-1.5">
            <Lock className="w-3 h-3" /> Private until user approves introduction
          </div>
        </div>

        {/* Middle Column: Mutual Alignment Channel */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center gap-3 p-4 rounded-[var(--radius-card)] bg-purple-500/5 border border-purple-500/20 text-center">
          <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
            <ArrowLeftRight className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono font-bold text-white uppercase">
            Mutual Discovery
          </span>
          <p className="text-[10px] text-[var(--color-text-secondary)] leading-relaxed">
            Explains capability alignment without exposing private dossiers or forcing algorithmic hiring.
          </p>
        </div>

        {/* Right Column: Employer & Employer Agent */}
        <div className="lg:col-span-5 p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border-default)]">
              <span className="text-xs font-mono uppercase text-emerald-400 font-bold flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" /> Employer Side
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                Employer Agent
              </span>
            </div>

            <h4 className="font-bold text-sm sm:text-base text-white">
              Role &amp; Evidence Decision Support
            </h4>

            <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span><strong>Role Outcomes:</strong> Concrete operational impact briefs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span><strong>Capability Matrix:</strong> Essential technical &amp; behavioral skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span><strong>Evidence Provenance:</strong> Verified qualifications &amp; statutory checks</span>
              </li>
            </ul>

            <div className="p-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-subtle)] rounded space-y-1 text-xs">
              <span className="font-semibold text-white block text-[11px]">Employer Questions Answered:</span>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                &ldquo;Why is this person relevant? What verified evidence supports this? What is missing? What should our human team evaluate?&rdquo;
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--color-border-subtle)] text-[10px] font-mono text-emerald-300 flex items-center gap-1.5">
            <ShieldCheck className="w-3 h-3" /> Human recruiters retain 100% final authority
          </div>
        </div>
      </div>

      <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-center text-xs text-[var(--color-text-secondary)]">
        <strong className="text-white">The agents can support discovery. People still make the decision.</strong>
      </div>
    </div>
  );
}
