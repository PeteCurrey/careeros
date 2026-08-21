'use client';

import React, { useState } from 'react';
import { 
  Users, 
  UserCheck, 
  MessageSquare, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Compass, 
  Layers, 
  ArrowRight,
  Filter,
  ShieldCheck,
  Search,
  BookOpen
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface StudentCohortItem {
  id: string;
  initials: string;
  name: string;
  yearGroup: string;
  pathwayFocus: string;
  explorationState: string;
  statusBadge: string;
  statusStyle: string;
  lastActive: string;
  counselorAction: string;
  actionRequired: boolean;
  contextSummary: string;
  studentQuestions: string[];
  privacyCheck: string;
}

const COHORT_STUDENTS: StudentCohortItem[] = [
  {
    id: 'stu-a',
    initials: 'SA',
    name: 'Student A (Anonymised View)',
    yearGroup: 'Year 11 / Grade 11',
    pathwayFocus: 'Healthcare & Clinical Science',
    explorationState: 'Comparing BSc Nursing vs Paramedic Science vs Medical Lab Apprenticeship',
    statusBadge: '1:1 Conversation Requested',
    statusStyle: 'bg-blue-500/10 text-[#6BB8FF] border-blue-500/20',
    lastActive: 'Today at 09:15 AM',
    counselorAction: 'Review clinical entry criteria and confirm local hospital trust shadowing day',
    actionRequired: true,
    contextSummary: 'Student has completed extensive exploration of healthcare pathways and wants to understand clinical placement commitments versus university life.',
    studentQuestions: [
      'What are the minimum science grade boundaries for the Degree Apprenticeship?',
      'Does our school have a partnership with the regional ambulance service trust?',
      'How does financial support compare between university nursing and apprenticeship?',
    ],
    privacyCheck: 'Private reflections on family health experiences remain segregated and confidential.',
  },
  {
    id: 'stu-b',
    initials: 'SB',
    name: 'Student B (Anonymised View)',
    yearGroup: 'Year 11 / Grade 11',
    pathwayFocus: 'Engineering & Advanced Manufacturing',
    explorationState: 'Comparing Advanced Apprenticeship vs Technical College HND',
    statusBadge: 'Advising Follow-up Scheduled',
    statusStyle: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    lastActive: 'Yesterday',
    counselorAction: 'Explain levy-funded employer application deadlines and portfolio requirements',
    actionRequired: true,
    contextSummary: 'Student has logged 2 school workshop projects in Career Passport and seeks help preparing for technical assessment interviews.',
    studentQuestions: [
      'When do aerospace employer apprenticeship applications open for September entry?',
      'Can I apply to university courses at the same time as apprenticeships as a backup?',
    ],
    privacyCheck: 'Personal salary and location mobility preferences are strictly in student control.',
  },
  {
    id: 'stu-c',
    initials: 'SC',
    name: 'Student C (Anonymised View)',
    yearGroup: 'Year 11 / Grade 11',
    pathwayFocus: 'Broad Discovery / Undeclared',
    explorationState: 'Active Multi-Domain Exploration (Creative Arts, Media & Digital Strategy)',
    statusBadge: 'Independent Exploration',
    statusStyle: 'bg-white/10 text-white/80 border-white/10',
    lastActive: '3 days ago',
    counselorAction: 'No immediate intervention needed — exploration proceeding naturally',
    actionRequired: false,
    contextSummary: 'Student is actively using Career Mentor to map transferrable skills from graphic design and video editing into technology and communication pathways.',
    studentQuestions: [
      'What careers combine visual design with computer science?',
      'What are the typical day-to-day tasks of a UX / Product Designer?',
    ],
    privacyCheck: 'Creative drafts and exploratory mentor prompts remain completely private.',
  },
  {
    id: 'stu-d',
    initials: 'SD',
    name: 'Student D (Anonymised View)',
    yearGroup: 'Year 11 / Grade 11',
    pathwayFocus: 'Software Engineering & Cloud Computing',
    explorationState: 'Targeting Degree Apprenticeships & Tech University Faculties',
    statusBadge: 'Evidence Milestone Logged',
    statusStyle: 'bg-purple-500/10 text-[#CDBBD2] border-purple-500/20',
    lastActive: '4 hours ago',
    counselorAction: 'Acknowledge robotics club captaincy evidence in Career Passport',
    actionRequired: false,
    contextSummary: 'Student has uploaded verified capstone coding project and requested school mentor sign-off on robotics leadership credential.',
    studentQuestions: [
      'How do software employers evaluate personal coding portfolios during selection?',
    ],
    privacyCheck: 'Code repository artifacts are linked with explicit student sharing consent.',
  },
];

export function InteractiveEducatorView() {
  const [selectedStudentId, setSelectedStudentId] = useState<string>('stu-a');
  const activeStudent = COHORT_STUDENTS.find((s) => s.id === selectedStudentId) ?? COHORT_STUDENTS[0]!;

  return (
    <div className="w-full bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-editorial space-y-6" id="educator-dashboard-demo">
      
      {/* Top Console Navigation */}
      <div className="bg-[var(--background-dark-deep)] p-5 sm:p-6 border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-gold-base)] font-bold">
              Institutional Advising Console &bull; Grade 11 Cohort (148 Students)
            </span>
          </div>
          <h3 className="text-lg font-serif font-normal text-white">
            Context-First Workflow Queue (No Student Ranking)
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono px-3 py-1 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)]">
            Role: Lead Careers Counselor
          </span>
        </div>
      </div>

      {/* Main Interactive Matrix */}
      <div className="p-6 sm:p-8 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Student Queue */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="flex items-center justify-between pb-1">
              <span className="section-label">
                Cohort Student Context Cards
              </span>
              <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
                4 Demonstrations
              </span>
            </div>

            {COHORT_STUDENTS.map((stu) => {
              const isSelected = stu.id === selectedStudentId;
              return (
                <button
                  key={stu.id}
                  type="button"
                  onClick={() => setSelectedStudentId(stu.id)}
                  className={cn(
                    'w-full p-4 rounded-[var(--radius-sm)] border text-left transition-all cursor-pointer flex flex-col gap-2',
                    isSelected
                      ? 'bg-white/10 border-white/30 text-white shadow-xs'
                      : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-white/20'
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded bg-white/15 text-white font-mono text-[10px] font-bold flex items-center justify-center">
                        {stu.initials}
                      </span>
                      <span className="text-xs font-bold text-white">{stu.name}</span>
                    </div>
                    <span className={cn('text-[10px] font-mono px-2 py-0.5 rounded border', stu.statusStyle)}>
                      {stu.statusBadge}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--color-text-primary)] line-clamp-1">
                    {stu.pathwayFocus}
                  </p>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-tertiary)] pt-1 border-t border-[var(--color-border-subtle)]">
                    <span>{stu.yearGroup}</span>
                    <span>Active {stu.lastActive}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Educator Pre-Conversation Brief */}
          <div className="lg:col-span-7 p-6 sm:p-7 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6">
            
            {/* Brief Header */}
            <div className="flex items-start justify-between border-b border-[var(--color-border-default)] pb-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#2F8FFF] font-bold">
                  Pre-Conversation Advising Brief
                </span>
                <h4 className="text-lg font-serif font-medium text-white">
                  {activeStudent.name}
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  {activeStudent.yearGroup} &bull; Focus: {activeStudent.pathwayFocus}
                </p>
              </div>
              <span className={cn('text-[10px] font-mono px-2.5 py-1 rounded border font-semibold', activeStudent.statusStyle)}>
                {activeStudent.statusBadge}
              </span>
            </div>

            {/* Context Summary */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] font-semibold block">
                Exploration Activity Summary
              </span>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed p-3.5 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded">
                {activeStudent.contextSummary}
              </p>
            </div>

            {/* Questions Student Wants to Discuss */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#6BB8FF] font-semibold flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#2F8FFF]" />
                Student Stated Questions for Counselor (Permissioned)
              </span>
              <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                {activeStudent.studentQuestions.map((q, i) => (
                  <li key={i} className="p-2.5 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded flex items-start gap-2">
                    <span className="text-[#2F8FFF] font-bold mt-0.5">{i + 1}.</span>
                    <span className="text-white">{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Educator Action */}
            <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-[var(--color-gold-base)] font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-gold-base)]" />
                High-Leverage Human Touchpoint
              </span>
              <p className="text-xs text-white leading-relaxed">
                {activeStudent.counselorAction}
              </p>
            </div>

            {/* Privacy Guardrail Confirmation */}
            <div className="pt-3 border-t border-[var(--color-border-subtle)] flex items-start gap-2 text-[11px] text-[var(--color-text-tertiary)] italic">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{activeStudent.privacyCheck}</span>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
