'use client';

import React, { useState } from 'react';
import {
  Compass,
  Filter,
  HelpCircle,
  TrendingUp,
  GraduationCap,
  Layers,
  ArrowRight,
  ShieldCheck,
  Building2,
  Users,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface CohortData {
  cohortLabel: string;
  totalStudentsSample: number;
  averagePathwaysPerStudent: number;
  pathways: {
    name: string;
    percentage: number;
    color: string;
    studentCount: number;
  }[];
  keyObservation: string;
  leadershipQuestions: string[];
}

const COHORT_DATA: Record<string, CohortData> = {
  'grade-10': {
    cohortLabel: 'Grade 10 / Year 11 (Ages 15–16)',
    totalStudentsSample: 220,
    averagePathwaysPerStudent: 3.9,
    pathways: [
      { name: '4-Year University & College', percentage: 36, color: 'bg-[#F4F3EF]', studentCount: 79 },
      { name: 'Degree & Higher Apprenticeships', percentage: 34, color: 'bg-[#2F8FFF]', studentCount: 75 },
      { name: 'Technical & Vocational Trades', percentage: 20, color: 'bg-[#DDD36D]', studentCount: 44 },
      { name: 'Direct Industry & Public Service', percentage: 10, color: 'bg-[#CDBBD2]', studentCount: 22 },
    ],
    keyObservation: 'Early parity: 54% of Grade 10 students actively research vocational trades or apprenticeship alternatives alongside traditional academic higher education.',
    leadershipQuestions: [
      'Are we scheduling technical apprenticeship briefings early enough before post-16 subject selection deadlines?',
      'Do our autumn career events provide equal stage time to trade academies and engineering employers as they do to universities?',
      'Are students who express interest in skilled trades receiving timely 1:1 guidance on local entry requirements?',
    ],
  },
  'grade-11': {
    cohortLabel: 'Grade 11 / Year 12 (Ages 16–17)',
    totalStudentsSample: 195,
    averagePathwaysPerStudent: 3.4,
    pathways: [
      { name: '4-Year University & College', percentage: 44, color: 'bg-[#F4F3EF]', studentCount: 86 },
      { name: 'Degree & Higher Apprenticeships', percentage: 32, color: 'bg-[#2F8FFF]', studentCount: 62 },
      { name: 'Technical & Vocational Trades', percentage: 14, color: 'bg-[#DDD36D]', studentCount: 27 },
      { name: 'Direct Industry & Public Service', percentage: 10, color: 'bg-[#CDBBD2]', studentCount: 20 },
    ],
    keyObservation: 'Application preparation divergence: Degree apprenticeship exploration intensifies in engineering and business, but application timelines (autumn) occur earlier than standard university cycles.',
    leadershipQuestions: [
      'Do our counseling workflows support the distinct, high-intensity autumn application windows required for competitive degree apprenticeships?',
      'Are students building tangible portfolio evidence (projects, GitHub, volunteering) to support dual university and apprenticeship applications?',
      'How are we engaging families whose students are considering earn-while-learning routes over full-time academic degrees?',
    ],
  },
  'grade-12': {
    cohortLabel: 'Grade 12 / Year 13 (Ages 17–18)',
    totalStudentsSample: 180,
    averagePathwaysPerStudent: 2.7,
    pathways: [
      { name: '4-Year University & College', percentage: 50, color: 'bg-[#F4F3EF]', studentCount: 90 },
      { name: 'Degree & Higher Apprenticeships', percentage: 28, color: 'bg-[#2F8FFF]', studentCount: 50 },
      { name: 'Technical & Vocational Trades', percentage: 12, color: 'bg-[#DDD36D]', studentCount: 22 },
      { name: 'Direct Industry & Public Service', percentage: 10, color: 'bg-[#CDBBD2]', studentCount: 18 },
    ],
    keyObservation: 'Consolidation & contingency: Students narrow choices to primary routes with verified contingency options logged in their Career Passport.',
    leadershipQuestions: [
      'Are students with single-track university applications maintaining viable contingency plans (e.g. professional conversion apprenticeships)?',
      'Have graduating students exported their Career Passport evidence to sovereign personal accounts before institutional school accounts expire?',
      'Are non-university bound students receiving dedicated interview preparation and direct employer application support?',
    ],
  },
  'all-school': {
    cohortLabel: 'All High School Cohorts (Grades 9–12 / Years 10–13)',
    totalStudentsSample: 780,
    averagePathwaysPerStudent: 3.6,
    pathways: [
      { name: '4-Year University & College', percentage: 41, color: 'bg-[#F4F3EF]', studentCount: 320 },
      { name: 'Degree & Higher Apprenticeships', percentage: 33, color: 'bg-[#2F8FFF]', studentCount: 257 },
      { name: 'Technical & Vocational Trades', percentage: 16, color: 'bg-[#DDD36D]', studentCount: 125 },
      { name: 'Direct Industry & Public Service', percentage: 10, color: 'bg-[#CDBBD2]', studentCount: 78 },
    ],
    keyObservation: 'Multi-year breadth: Across the entire school body, 82% of students explore at least one non-traditional or work-integrated pathway during their high school journey.',
    leadershipQuestions: [
      'Does our overall careers budget reflect the diverse pathway interests of the entire student body, or is it skewed toward university admissions alone?',
      'Are careers leaders equipped with aggregate trend intelligence to advocate for targeted employer partnership investments?',
      'How does our career education curriculum develop progressive capability and evidence from Grade 9 through graduation?',
    ],
  },
};

export function PathwayExposureInteraction() {
  const [selectedCohort, setSelectedCohort] = useState<string>('grade-10');
  const [selectedSector, setSelectedSector] = useState<string>('all');

  const activeCohortData = COHORT_DATA[selectedCohort] ?? COHORT_DATA['grade-10']!;

  return (
    <div className="w-full bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-editorial space-y-6" id="pathway-exposure-explorer">
      
      {/* Header Context Bar */}
      <div className="bg-[var(--background-dark-deep)] p-5 sm:p-7 border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent-blue)] font-bold">
              Interaction 01 · Pathway Exposure Explorer
            </span>
          </div>
          <h3 className="text-xl font-serif font-normal text-white">
            Are Students Seeing the Full Range of Routes Available to Them?
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Inspect aggregate pathway comparisons across year groups to identify exposure gaps and inform institutional curriculum planning.
          </p>
        </div>

        <span className="text-[10px] font-mono px-3 py-1.5 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)] self-start sm:self-auto">
          Illustrative data — not live school data
        </span>
      </div>

      {/* Filter Controls */}
      <div className="px-5 sm:px-7 space-y-4">
        <div className="space-y-1.5">
          <span className="section-label block">Select Year Cohort / Grade Level</span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'grade-10', label: 'Grade 10 / Year 11' },
              { id: 'grade-11', label: 'Grade 11 / Year 12' },
              { id: 'grade-12', label: 'Grade 12 / Year 13' },
              { id: 'all-school', label: 'All High School' },
            ].map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setSelectedCohort(btn.id)}
                className={cn(
                  'p-3 rounded-[var(--radius-sm)] border text-xs font-semibold transition-all cursor-pointer text-center',
                  selectedCohort === btn.id
                    ? 'bg-white text-zinc-900 border-white shadow-xs'
                    : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white'
                )}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Visualization Area */}
      <div className="px-5 sm:px-7 pb-7 space-y-6">
        
        {/* Cohort Summary Card */}
        <div className="p-5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-5">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-3">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono text-[var(--accent-blue)] font-bold uppercase tracking-wider">
                Cohort Profile
              </span>
              <h4 className="text-base font-serif font-medium text-white">
                {activeCohortData.cohortLabel}
              </h4>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="text-[var(--color-text-tertiary)] font-mono">
                Sample Size: <strong className="text-white">{activeCohortData.totalStudentsSample} students</strong>
              </span>
              <span className="text-[var(--color-border-strong)]">·</span>
              <span className="text-[var(--color-text-tertiary)] font-mono">
                Avg Routes Compared: <strong className="text-emerald-400">{activeCohortData.averagePathwaysPerStudent}</strong>
              </span>
            </div>
          </div>

          {/* Stacked Distribution Bar */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-[var(--color-surface-raised)] rounded-[var(--radius-sm)] overflow-hidden flex border border-[var(--color-border-default)]">
              {activeCohortData.pathways.map((item, idx) => (
                <div
                  key={idx}
                  style={{ width: `${item.percentage}%` }}
                  className={`${item.color} h-full transition-all duration-300`}
                  title={`${item.name}: ${item.percentage}%`}
                />
              ))}
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 text-xs">
              {activeCohortData.pathways.map((item, idx) => (
                <div key={idx} className="p-2.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-xs ${item.color} shrink-0`} />
                    <span className="font-bold text-white font-mono">{item.percentage}%</span>
                  </div>
                  <div className="text-[11px] text-[var(--color-text-secondary)] font-medium leading-tight">
                    {item.name}
                  </div>
                  <div className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
                    ~{item.studentCount} students
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Observation Callout */}
          <div className="p-3.5 bg-[var(--background-dark-deep)] border border-[rgba(47,143,255,0.2)] rounded text-xs text-[var(--color-text-secondary)] leading-relaxed">
            <strong className="text-[var(--accent-blue)]">Cohort Trend Observation: </strong>
            {activeCohortData.keyObservation}
          </div>

        </div>

        {/* Actionable Questions for School Leadership */}
        <div className="p-5 sm:p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[var(--accent-blue)] shrink-0" />
            <h4 className="text-sm font-bold text-white font-serif">
              Actionable Questions for Leadership &amp; Careers Coordinators
            </h4>
          </div>

          <p className="text-xs text-[var(--color-text-secondary)]">
            Aggregate data should prompt human dialogue and strategic resource decisions — not automated student sorting.
          </p>

          <div className="space-y-2.5 pt-1">
            {activeCohortData.leadershipQuestions.map((q, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded flex items-start gap-3 text-xs"
              >
                <span className="font-mono text-[var(--accent-blue)] font-bold shrink-0 mt-0.5">
                  0{idx + 1}.
                </span>
                <span className="text-[var(--color-text-primary)] leading-relaxed font-medium">
                  {q}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
