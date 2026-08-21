'use client';

import React from 'react';
import { 
  Sparkles, 
  Bot, 
  UserCheck, 
  ArrowRight, 
  FileCheck, 
  Clock, 
  ShieldCheck, 
  Compass, 
  CheckCircle2,
  Lock
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function HeroEducatorComposition() {
  return (
    <div className="w-full space-y-4">
      {/* Visual Subtitle Tag */}
      <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-tertiary)] px-1">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#2F8FFF] shadow-[0_0_6px_rgba(47,143,255,0.7)]" />
          <span>CAREER OS &bull; GUIDANCE PREPARATION WORKFLOW</span>
        </span>
        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] uppercase font-bold tracking-wider hidden sm:inline-block">
          Illustrative Career OS Experience
        </span>
      </div>

      {/* Main Dual-View Stage with gentle glassmorphism */}
      <div className="w-full bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl border-beam-container border-beam-slow">
        
        {/* Top Window Bar */}
        <div className="px-5 py-3.5 bg-[var(--color-surface-sunken)]/60 backdrop-blur-sm border-b border-[var(--color-border-default)] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2.5 text-[var(--color-text-secondary)]">
            <span className="w-2 h-2 rounded-full bg-[#2F8FFF]" />
            <span className="font-semibold text-white">1:1 SESSION PREPARATION</span>
            <span className="text-[var(--color-text-tertiary)] hidden md:inline">| More context before, more human judgment during</span>
          </div>
          <span className="text-[11px] text-emerald-400 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Strict Privacy Segregation</span>
          </span>
        </div>

        {/* Content Grid: 2 Equal Columns (Before the Meeting vs Educator Prep) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[var(--color-border-default)]">
          
          {/* COLUMN 1: BEFORE THE MEETING (Student Work) */}
          <div className="p-6 sm:p-7 space-y-5 bg-[var(--color-surface-base)]/40">
            <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-3">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#6BB8FF] font-semibold flex items-center gap-1.5">
                  <Bot className="w-3 h-3 text-[#2F8FFF]" />
                  Student Independent Work &bull; Jordan M. (Year 11)
                </span>
                <h4 className="text-base font-serif font-medium text-white">
                  Exploration Between Appointments
                </h4>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-[#6BB8FF] border border-blue-500/20 font-semibold">
                STUDENT OWNED
              </span>
            </div>

            {/* What student has done inside Career OS */}
            <div className="space-y-3">
              <div className="p-3.5 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-taupe-300)] font-semibold flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-purple-400" />
                  Pathways Compared
                </span>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center justify-between text-white font-medium">
                    <span>1. Electro-Mechanical Degree Apprenticeship</span>
                    <span className="text-[10px] font-mono text-emerald-400">Levy-Funded</span>
                  </div>
                  <div className="flex items-center justify-between text-[var(--color-text-secondary)]">
                    <span>2. BSc Electrical &amp; Electronic Engineering</span>
                    <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">Full-Time Campus</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-taupe-300)] font-semibold flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Evidence Added to Career Passport
                </span>
                <div className="flex items-start gap-2 text-xs text-[var(--color-text-secondary)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>VEX Robotics Competition Finalist portfolio + Practical CAD assessed project</span>
                </div>
              </div>

              <div className="p-3.5 bg-[var(--color-surface-warm)]/60 backdrop-blur-sm border border-[var(--color-border-subtle)] rounded-[var(--radius-sm)] space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Student Stated Question for Counselor
                </span>
                <p className="text-xs text-white font-medium leading-relaxed italic">
                  &ldquo;Will taking an advanced apprenticeship limit my ability to become a Chartered Engineer later compared to doing a university degree first?&rdquo;
                </p>
              </div>
            </div>

            <div className="text-[11px] text-[var(--color-text-tertiary)] flex items-center gap-1.5 pt-1">
              <Lock className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span>Private reflections with AI Mentor remain confidential to student.</span>
            </div>
          </div>

          {/* COLUMN 2: DURING THE MEETING (Educator Prepared Context) */}
          <div className="p-6 sm:p-7 space-y-5 bg-[var(--color-surface-base)]/75">
            <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-3">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-semibold flex items-center gap-1.5">
                  <UserCheck className="w-3 h-3 text-emerald-400" />
                  Educator Session Brief &bull; Ms. Alvarez (Careers Lead)
                </span>
                <h4 className="text-base font-serif font-medium text-white">
                  Prepared Human Conversation
                </h4>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-semibold">
                READY FOR 1:1
              </span>
            </div>

            {/* Context Summary for Educator */}
            <div className="space-y-3">
              <div className="p-3.5 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#6BB8FF] font-semibold block">
                  Counselor Briefing Notes (Automated Context)
                </span>
                <div className="space-y-1.5 text-xs text-[var(--color-text-secondary)]">
                  <p>
                    <strong className="text-white">Exploration Focus:</strong> Engineering &amp; technical degree apprenticeship parity.
                  </p>
                  <p>
                    <strong className="text-white">Core Dilemma:</strong> Chartered status progression vs early employer salary &amp; zero tuition debt.
                  </p>
                  <p>
                    <strong className="text-white">Key Evidence:</strong> Exceptional robotics practical aptitude.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-semibold block">
                  Suggested High-Leverage Discussion Prompts
                </span>
                <ul className="space-y-1.5 text-xs text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">&bull;</span>
                    <span>Review employer-sponsored BEng top-ups and IMechE accreditation routes.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">&bull;</span>
                    <span>Discuss dual-tracking college applications as a safety net alongside early autumn apprenticeship deadlines.</span>
                  </li>
                </ul>
              </div>

              <div className="p-3 bg-[var(--color-surface-warm)]/60 backdrop-blur-sm border border-[var(--color-border-subtle)] rounded-[var(--radius-sm)] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[var(--color-taupe-300)]" />
                  <span className="text-white font-medium">Session: Today at 2:15 PM</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                  Zero Time Spent on Basics
                </span>
              </div>
            </div>

            <div className="text-[11px] text-[var(--color-text-tertiary)] flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Full human advisory authority. Career OS prepares context—the educator guides the young person.</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
