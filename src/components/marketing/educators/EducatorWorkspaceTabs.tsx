'use client';

import React, { useState } from 'react';
import { 
  WORKSPACE_TABS, 
  WORKSPACE_TODAY_ITEMS, 
  COHORT_PATHWAY_STATS, 
  COHORT_SECTOR_STATS,
  STUDENT_PREP_SCENARIOS 
} from './educatorsData';
import { cn } from '@/lib/utils';
import { 
  Calendar, 
  Users, 
  Layers, 
  FileCheck, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle,
  HelpCircle,
  Building,
  GraduationCap,
  Briefcase
} from 'lucide-react';

const TAB_ICONS: Record<string, React.ElementType> = {
  today: Clock,
  students: Users,
  pathways: Layers,
  evidence: FileCheck,
  events: Calendar,
};

export function EducatorWorkspaceTabs() {
  const [activeTabId, setActiveTabId] = useState<string>('today');

  return (
    <div
      id="educator-workspace-demo"
      className="w-full bg-[var(--background-dark-deep)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl space-y-0"
      role="region"
      aria-label="Illustrative Career OS Educator Workspace"
    >
      {/* Workspace Header Bar */}
      <div className="p-6 sm:p-8 bg-black/30 backdrop-blur-sm border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#2F8FFF]" />
            Interaction 02 &bull; Working View (No Surveillance)
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
            Educator Workspace
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            Purpose-built workflow organisation for careers leaders, guidance counsellors, and pastoral teams.
          </p>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/60 backdrop-blur-sm text-[var(--color-text-tertiary)] self-start sm:self-auto shrink-0">
          Illustrative Workspace
        </span>
      </div>

      {/* Tabs Bar */}
      <div className="p-3 sm:p-4 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border-b border-[var(--color-border-default)] flex items-center gap-2 overflow-x-auto">
        {WORKSPACE_TABS.map((tab) => {
          const isSelected = tab.id === activeTabId;
          const Icon = TAB_ICONS[tab.id] || Clock;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTabId(tab.id)}
              className={cn(
                'px-4 py-2.5 rounded-lg border text-xs font-medium flex items-center gap-2 transition-all shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F8FFF]',
                isSelected
                  ? 'bg-white/15 border-white/40 text-white shadow-sm ring-1 ring-white/20'
                  : 'bg-[var(--color-surface-raised)]/60 border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-border-strong)]'
              )}
            >
              <Icon className={cn('w-3.5 h-3.5', isSelected ? 'text-[#2F8FFF]' : 'text-[var(--color-text-tertiary)]')} />
              <span>{tab.title}</span>
              {tab.badgeCount !== undefined && (
                <span className="px-1.5 py-0.2 rounded-full bg-white/10 text-[10px] font-mono font-bold">
                  {tab.badgeCount}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div className="p-6 sm:p-8 min-h-[420px] flex flex-col justify-between" aria-live="polite">
        
        {/* TAB 1: TODAY */}
        {activeTabId === 'today' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-3">
              <div>
                <h4 className="text-base font-serif text-white font-medium">
                  Today’s Guidance Schedule &amp; Explicit Follow-Ups
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Ordered by appointment time and student-initiated meeting requests. No algorithmic worth ranking.
                </p>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 self-start sm:self-auto">
                4 Priority Events
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {WORKSPACE_TODAY_ITEMS.map((item) => (
                <div
                  key={item.student}
                  className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-3 hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-white font-bold flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-[#2F8FFF]" />
                        {item.time}
                      </span>
                      <span className={cn('text-[10px] font-mono px-2 py-0.5 rounded border font-semibold', item.statusColor)}>
                        {item.status}
                      </span>
                    </div>

                    <div className="space-y-0.5">
                      <span className="font-semibold text-sm text-white block">
                        {item.student}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-[#6BB8FF] block">
                        {item.tag}
                      </span>
                    </div>

                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {item.prepSummary}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-[var(--color-border-subtle)] space-y-1 text-xs">
                    <span className="text-[10px] font-mono text-[var(--color-taupe-300)] uppercase block">
                      Target Action:
                    </span>
                    <p className="text-white text-[11px]">
                      {item.actionRequired}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: STUDENTS (Cohort Directory) */}
        {activeTabId === 'students' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-3">
              <div>
                <h4 className="text-base font-serif text-white font-medium">
                  Cohort Guidance Overview (148 Students)
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Anonymised developmental context. Shows active exploratory focus without behavioral profiling or deficit labels.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">
                Year 10 &amp; 11 Active Cohorts
              </span>
            </div>

            <div className="space-y-3">
              {STUDENT_PREP_SCENARIOS.map((stu) => (
                <div
                  key={stu.id}
                  className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs"
                >
                  <div className="space-y-1 max-w-xl">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{stu.name}</span>
                      <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">({stu.yearGroup})</span>
                      <span className={cn('text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border', stu.statusStyle)}>
                        {stu.tag}
                      </span>
                    </div>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {stu.currentExploration.description}
                    </p>
                  </div>

                  <div className="text-left md:text-right shrink-0 space-y-1">
                    <span className="text-[10px] font-mono text-emerald-400 block font-semibold">
                      {stu.evidenceLogged.length} Evidence Items Logged
                    </span>
                    <span className="text-[10px] font-mono text-[var(--color-taupe-300)] block">
                      Private reflections segregated
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: PATHWAYS (Aggregate Intelligence) */}
        {activeTabId === 'pathways' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-3">
              <div>
                <h4 className="text-base font-serif text-white font-medium">
                  Aggregate Cohort Pathway Exploration
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  High-level institutional trends to inform employer visits, guest speakers, and resource allocation.
                </p>
              </div>
              <span className="text-[10px] font-mono text-purple-400 font-semibold px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                Cohort Analytics
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Pathway breakdown */}
              <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#6BB8FF] font-semibold block">
                  Route Interest Distribution
                </span>
                <div className="space-y-3">
                  {COHORT_PATHWAY_STATS.map((stat) => (
                    <div key={stat.label} className="space-y-1 text-xs">
                      <div className="flex justify-between text-white">
                        <span>{stat.label}</span>
                        <span className="font-mono text-[11px] text-[var(--color-taupe-300)]">
                          {stat.percentage}% ({stat.count})
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className={cn('h-full rounded-full transition-all duration-700', stat.color)}
                          style={{ width: `${stat.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sector breakdown */}
              <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-semibold block">
                  Top Exploration Sectors
                </span>
                <div className="space-y-3">
                  {COHORT_SECTOR_STATS.map((sec) => (
                    <div key={sec.sector} className="space-y-1 text-xs">
                      <div className="flex justify-between text-white">
                        <span>{sec.sector}</span>
                        <span className="font-mono text-[11px] text-[var(--color-taupe-300)]">
                          {sec.percentage}%
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className={cn('h-full rounded-full transition-all duration-700', sec.color)}
                          style={{ width: `${sec.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: EVIDENCE (Evidence & Passports) */}
        {activeTabId === 'evidence' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-3">
              <div>
                <h4 className="text-base font-serif text-white font-medium">
                  Programme Evidence &amp; Career Passport Verification
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Track institutional work experience completion, school project verification, and transferable skills portfolios.
                </p>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                Gatsby Benchmark 5 &amp; 6 Support
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2">
                <span className="text-[10px] font-mono uppercase text-[#6BB8FF] font-semibold block">
                  Work Experience Placements
                </span>
                <div className="text-2xl font-serif text-white">84 / 92</div>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Year 11 students have logged completed workplace journals ready for counsellor verification sign-off.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2">
                <span className="text-[10px] font-mono uppercase text-emerald-300 font-semibold block">
                  STEM &amp; Practical Projects
                </span>
                <div className="text-2xl font-serif text-white">136 Items</div>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Coursework, VEX robotics entries, and vocational workshop portfolios linked to transferable capabilities.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2">
                <span className="text-[10px] font-mono uppercase text-purple-300 font-semibold block">
                  External Certifications
                </span>
                <div className="text-2xl font-serif text-white">48 Verified</div>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  First aid, Duke of Edinburgh, cadet qualifications, and regional arts leadership awards.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: EVENTS (Career Events & Employer Engagement) */}
        {activeTabId === 'events' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-3">
              <div>
                <h4 className="text-base font-serif text-white font-medium">
                  Career Events &amp; Employer Engagement (Planned Integration)
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Connect students to school-approved career fairs, apprenticeship workshops, and employer spotlights.
                </p>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                Future Module
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">Annual Regional Engineering &amp; Green Skills Fair</span>
                  <span className="text-[10px] font-mono text-[#6BB8FF]">14 Oct 2026</span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  24 verified local aerospace and clean-energy employers. Career OS automatically drafts student prep sheets.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">NHS Healthcare Trust Multi-Disciplinary Spotlight</span>
                  <span className="text-[10px] font-mono text-emerald-400">22 Nov 2026</span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Live webinar covering nursing, paramedic science, radiodiagnostics, and clinical laboratory apprenticeships.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Anti-Surveillance Ethical Guarantee Footer */}
        <div className="pt-6 border-t border-[var(--color-border-default)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[var(--color-text-tertiary)]">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Anti-Surveillance Standard: No employability scores, no ranking tables, no behavioral tracking.</span>
          </div>
          <span className="font-mono text-[11px] text-[var(--color-taupe-300)]">
            Purpose-Based Access Control
          </span>
        </div>

      </div>
    </div>
  );
}
