'use client';

import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Compass,
  CheckCircle2,
  Lock
} from 'lucide-react';

export function SchoolLifetimeTransitionVisual() {
  const journeyStages = [
    {
      phase: 'Stage 01',
      title: 'Secondary Education',
      duration: 'Ages 14–18',
      role: 'High School / District',
      icon: GraduationCap,
      context: 'Initial career curiosities, broad pathway exploration, project evidence logging, structured counseling touchpoints.',
      dataGovernance: 'Institutional Workspace & Parental Oversight',
      isSchoolPhase: true,
    },
    {
      phase: 'Stage 02',
      title: 'Pathway Execution',
      duration: 'Ages 18–22',
      role: 'University / Apprenticeship / Trade',
      icon: Compass,
      context: 'Degree study, technical trade training, or work-based learning. Evidence compounds with real vocational artifacts.',
      dataGovernance: 'Individual Sovereign Record Transition',
      isSchoolPhase: false,
    },
    {
      phase: 'Stage 03',
      title: 'Early Career Entry',
      duration: 'Ages 22–26',
      role: 'First Professional Roles',
      icon: Briefcase,
      context: 'Transition into primary employment. Career Passport demonstrates verified early capability and project deliverable proofs.',
      dataGovernance: 'Personal Sovereign Account',
      isSchoolPhase: false,
    },
    {
      phase: 'Stage 04',
      title: 'Lifelong Compounding',
      duration: 'Ages 26–50+',
      role: 'Senior / Leadership / Venture',
      icon: TrendingUp,
      context: 'Promotions, lateral industry pivots, continuous upskilling, and venture creation backed by 20+ years of unified career context.',
      dataGovernance: 'Lifelong Personal Infrastructure',
      isSchoolPhase: false,
    },
  ];

  return (
    <div className="w-full bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-editorial space-y-6" id="lifetime-transition">
      
      {/* Header Bar */}
      <div className="bg-[var(--background-dark-deep)] p-5 sm:p-6 border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="accent-blue-dot" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#2F8FFF] font-bold">
              Lifelong Architecture Continuity
            </span>
          </div>
          <h3 className="text-lg font-serif font-normal text-white">
            Career Guidance Shouldn&apos;t Expire on Graduation Day
          </h3>
        </div>

        <span className="text-[11px] font-mono px-3 py-1 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)]">
          School-to-Career Continuity
        </span>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        
        {/* 4-Stage Horizontal Progression */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {journeyStages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-[var(--radius-sm)] border space-y-3.5 flex flex-col justify-between ${
                  stage.isSchoolPhase
                    ? 'bg-[var(--color-surface-base)] border-[#2F8FFF]/40 shadow-xs'
                    : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#6BB8FF]">
                      {stage.phase} &bull; {stage.duration}
                    </span>
                    <Icon className="w-4 h-4 text-[var(--color-taupe-300)]" />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white font-serif">
                      {stage.title}
                    </h4>
                    <span className="text-[11px] text-[var(--color-taupe-300)] font-mono block mt-0.5">
                      {stage.role}
                    </span>
                  </div>

                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {stage.context}
                  </p>
                </div>

                <div className="pt-2 border-t border-[var(--color-border-subtle)] text-[10px] font-mono text-[var(--color-text-tertiary)] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{stage.dataGovernance}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Institutional vs Individual Boundary Callout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          
          <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1.5 text-xs">
            <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] font-bold flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[var(--color-taupe-300)]" />
              School-Controlled Education Records
            </span>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Institutional records (official transcripts, disciplinary files, IEPs) remain strictly within school authority and are retained or archived according to statutory school policy and FERPA requirements.
            </p>
          </div>

          <div className="p-4 bg-[var(--color-surface-base)] border border-[rgba(47,143,255,0.22)] rounded space-y-1.5 text-xs">
            <span className="text-[10px] font-mono uppercase text-[#6BB8FF] font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2F8FFF]" />
              Student-Controlled Career Evidence
            </span>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              The student&apos;s Career Passport (verified project artifacts, skills, certifications) and personal Career Twin remain with the individual as portable lifelong infrastructure that compounds over decades.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
