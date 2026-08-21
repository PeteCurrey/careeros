'use client';

import React, { useState } from 'react';
import { 
  Compass, 
  GraduationCap, 
  Layers, 
  ShieldCheck, 
  Users, 
  MessageSquare, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  FileText, 
  UserCheck, 
  Info,
  Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function HeroSchoolExperience() {
  const [activeTab, setActiveTab] = useState<'split' | 'student' | 'educator'>('split');

  return (
    <div className="w-full space-y-4">
      {/* Top Controls & Illustrative Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-1.5 p-1 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)]">
          <button
            type="button"
            onClick={() => setActiveTab('split')}
            className={cn(
              'px-3 py-1 font-semibold rounded-[var(--radius-sm)] transition-colors',
              activeTab === 'split'
                ? 'bg-white/15 text-[var(--color-text-primary)] shadow-xs'
                : 'text-[var(--color-text-secondary)] hover:text-white'
            )}
          >
            Combined View
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('student')}
            className={cn(
              'px-3 py-1 font-semibold rounded-[var(--radius-sm)] transition-colors',
              activeTab === 'student'
                ? 'bg-white/15 text-[var(--color-text-primary)] shadow-xs'
                : 'text-[var(--color-text-secondary)] hover:text-white'
            )}
          >
            Student Experience
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('educator')}
            className={cn(
              'px-3 py-1 font-semibold rounded-[var(--radius-sm)] transition-colors',
              activeTab === 'educator'
                ? 'bg-white/15 text-[var(--color-text-primary)] shadow-xs'
                : 'text-[var(--color-text-secondary)] hover:text-white'
            )}
          >
            Educator Context
          </button>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--color-text-tertiary)]">
          <span className="accent-blue-dot" />
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] uppercase font-bold tracking-wider">
            Illustrative Career OS Interface
          </span>
        </div>
      </div>

      {/* Main Dual-View Stage */}
      <div className="w-full bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-editorial border-beam-container border-beam-slow">
        
        {/* Top Window Bar */}
        <div className="px-5 py-3 bg-[var(--color-surface-sunken)]/60 backdrop-blur-sm border-b border-[var(--color-border-default)] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2.5 text-[var(--color-text-secondary)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2F8FFF] shadow-[0_0_8px_rgba(47,143,255,0.6)]" />
            <span className="font-semibold text-white">CAREER OS &bull; INSTITUTIONAL ENVIRONMENT</span>
          </div>
          <span className="text-[11px] text-[var(--color-text-tertiary)] hidden sm:inline">
            Augmenting human guidance &bull; Strict privacy boundaries
          </span>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[var(--color-border-default)]">
          
          {/* STUDENT VIEW (Left Column) */}
          {(activeTab === 'split' || activeTab === 'student') && (
            <div className={cn('p-6 sm:p-7 space-y-6', activeTab === 'split' ? 'lg:col-span-6' : 'lg:col-span-12')}>
              {/* Perspective Header */}
              <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-4">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6BB8FF] font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#2F8FFF]" />
                    Student View &bull; Jordan M. (Year 11 / Grade 11)
                  </span>
                  <h4 className="text-base font-serif font-medium text-white">
                    Personal Career Exploration &amp; Mentor
                  </h4>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-semibold">
                  ACTIVE EXPLORATION
                </span>
              </div>

              {/* AI Career Mentor Dialogue Preview */}
              <div className="p-4 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-tertiary)]">
                  <span className="flex items-center gap-1.5 text-white font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2F8FFF]" />
                    AI Career Mentor
                  </span>
                  <span>10:42 AM</span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  &quot;You mentioned enjoying hands-on electronics diagnostics and mathematics. We can compare an <strong className="text-white">Electro-Mechanical Degree Apprenticeship</strong> with a <strong className="text-white">BSc Electrical Engineering</strong> route so you understand entry requirements, costs, and day-to-day differences.&quot;
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2 py-0.5 text-[11px] bg-[var(--color-surface-warm)]/60 backdrop-blur-sm border border-[var(--color-border-default)] rounded text-[var(--color-text-primary)] font-medium">
                    Comparing 2 Pathways
                  </span>
                  <span className="px-2 py-0.5 text-[11px] bg-[var(--color-surface-warm)]/60 backdrop-blur-sm border border-[var(--color-border-default)] rounded text-[var(--color-text-primary)] font-medium">
                    Robotics Club Evidence Linked
                  </span>
                </div>
              </div>

              {/* Student Next Action Card */}
              <div className="p-4 bg-[var(--color-surface-warm)]/60 backdrop-blur-sm border border-[var(--color-border-subtle)] rounded-[var(--radius-sm)] flex items-center justify-between gap-3 text-xs">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] font-semibold block">
                    Student Stated Intention
                  </span>
                  <span className="text-white font-medium">
                    Requested 1:1 conversation with Ms. Alvarez (Counselor)
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded bg-white/10 text-white font-mono text-[10px] shrink-0">
                  Topic: Apprenticeship Entry
                </span>
              </div>

              {/* Student Status Summary */}
              <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
                <div className="p-3 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-1">
                  <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Explored Routes</span>
                  <p className="font-semibold text-white">Apprenticeship &amp; BEng</p>
                </div>
                <div className="p-3 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-1">
                  <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Evidence In Passport</span>
                  <p className="font-semibold text-white">3 School Projects Logged</p>
                </div>
              </div>
            </div>
          )}

          {/* EDUCATOR VIEW (Right Column) */}
          {(activeTab === 'split' || activeTab === 'educator') && (
            <div className={cn('p-6 sm:p-7 space-y-6', activeTab === 'split' ? 'lg:col-span-6' : 'lg:col-span-12')}>
              {/* Perspective Header */}
              <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-4">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-gold-base)] font-semibold flex items-center gap-1.5">
                    <UserCheck className="w-3 h-3 text-[var(--color-gold-base)]" />
                    Educator Context &bull; Year 11 Career Lead View
                  </span>
                  <h4 className="text-base font-serif font-medium text-white">
                    Cohort Context &amp; High-Leverage Follow-ups
                  </h4>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-[var(--color-taupe-300)] border border-white/10 font-semibold">
                  PERMISSIONED CONTEXT
                </span>
              </div>

              {/* Follow-up Queue Item (No surveillance, pure context) */}
              <div className="p-4 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-white/15 text-white font-mono text-[10px] font-bold flex items-center justify-center">
                      JM
                    </span>
                    <span className="font-semibold text-white">Jordan Morgan</span>
                    <span className="text-[11px] font-mono text-[var(--color-text-tertiary)]">Year 11B</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-[#6BB8FF] border border-blue-500/20 text-[10px] font-mono font-semibold">
                    Requested Guidance
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-[var(--color-text-secondary)] pl-8">
                  <div className="flex items-start gap-1.5">
                    <span className="text-[#2F8FFF] font-bold">&bull;</span>
                    <span><strong className="text-white">Active question:</strong> Entry requirements for engineering degree apprenticeships vs university.</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-[#2F8FFF] font-bold">&bull;</span>
                    <span><strong className="text-white">Exploration completed:</strong> Compared 2 local vocational employers and 1 engineering faculty.</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-[#2F8FFF] font-bold">&bull;</span>
                    <span><strong className="text-white">Privacy check:</strong> Private Mentor personal reflections remain strictly with student.</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs pl-8">
                  <span className="text-[11px] text-[var(--color-text-tertiary)] flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3 text-[var(--color-taupe-400)]" /> Scheduled: Tomorrow 2:15 PM
                  </span>
                  <button className="text-xs font-semibold text-white hover:text-[#6BB8FF] transition-colors flex items-center gap-1">
                    Open Counselor Brief <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Aggregate Cohort Overview */}
              <div className="p-4 bg-[var(--color-surface-warm)]/60 backdrop-blur-sm border border-[var(--color-border-subtle)] rounded-[var(--radius-sm)] space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold text-white">
                  <span>Year 11 Exploration Distribution (Aggregate)</span>
                  <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">148 Students</span>
                </div>
                
                <div className="grid grid-cols-4 gap-1.5 pt-1 text-center font-mono text-[10px]">
                  <div className="p-2 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] rounded">
                    <span className="block font-bold text-white">44%</span>
                    <span className="text-[var(--color-text-tertiary)]">University</span>
                  </div>
                  <div className="p-2 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] rounded">
                    <span className="block font-bold text-white">31%</span>
                    <span className="text-[var(--color-text-tertiary)]">Apprentice</span>
                  </div>
                  <div className="p-2 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] rounded">
                    <span className="block font-bold text-white">16%</span>
                    <span className="text-[var(--color-text-tertiary)]">Trades/Voc</span>
                  </div>
                  <div className="p-2 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] rounded">
                    <span className="block font-bold text-white">9%</span>
                    <span className="text-[var(--color-text-tertiary)]">Direct Emp</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-[var(--color-text-tertiary)] italic flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Educator view displays permissioned workflow context — no behavioral profiling or employability scoring.</span>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
