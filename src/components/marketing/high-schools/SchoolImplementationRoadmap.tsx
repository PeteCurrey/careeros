'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Settings, 
  Users, 
  Compass, 
  BarChart, 
  ArrowRight,
  Shield,
  Layers,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoadmapPhase {
  num: string;
  title: string;
  duration: string;
  summary: string;
  keyDeliverables: string[];
  stakeholderFocus: string;
}

const IMPLEMENTATION_PHASES: RoadmapPhase[] = [
  {
    num: '01',
    title: 'Align & Establish Governance',
    duration: 'Weeks 1–2',
    summary: 'Define cohort scope, institutional objectives, counselling priorities, and student safeguarding policies.',
    keyDeliverables: [
      'Identify target year group or student pilot cohort (e.g., Grade 11 / Year 11)',
      'Confirm institutional data boundaries and student privacy configuration',
      'Designate school career lead and pastoral safeguarding liaisons',
    ],
    stakeholderFocus: 'School Leadership & Careers Department Head',
  },
  {
    num: '02',
    title: 'Configure Institutional Environment',
    duration: 'Weeks 2–3',
    summary: 'Provision school tenant, define role permissions, and calibrate regional pathway and curriculum context.',
    keyDeliverables: [
      'Setup school administrative workspace and counsellor credentials',
      'Configure age thresholds (16+ vs 13–15 institutional oversight)',
      'Map regional vocational, university, and apprenticeship pathway priorities',
    ],
    stakeholderFocus: 'IT Administration & Careers Advising Lead',
  },
  {
    num: '03',
    title: 'Educator Onboarding & Preparation',
    duration: 'Weeks 3–4',
    summary: 'Equip school counsellors and advisors on how to leverage pre-conversation briefs and workflow cues.',
    keyDeliverables: [
      'Conduct 60-minute interactive counsellor walkthrough on context-driven advising',
      'Demonstrate how student privacy boundaries operate in practice',
      'Provide parent & guardian information notices and introductory materials',
    ],
    stakeholderFocus: 'Career Counsellors & Pastoral Advisors',
  },
  {
    num: '04',
    title: 'Student Cohort Launch & Orientation',
    duration: 'Weeks 4–8',
    summary: 'Introduce students to their individual Career Mentor, pathway explorer, and Career Passport.',
    keyDeliverables: [
      'Deliver structured in-class orientation session during advisory period',
      'Students explore initial career curiosities and compare post-school routes',
      'First round of student-initiated pre-conversation advising requests logged',
    ],
    stakeholderFocus: 'Students & Advisory Teachers',
  },
  {
    num: '05',
    title: 'Pilot Review & Counsellor Feedback',
    duration: 'Weeks 8–10',
    summary: 'Evaluate human advising leverage, exploration breadth, and student feedback across the term.',
    keyDeliverables: [
      'Review cohort engagement signals and pathway interest distributions',
      'Conduct counsellor feedback session on pre-conversation brief utility',
      'Identify opportunities for targeted employer or alumni pathway panels',
    ],
    stakeholderFocus: 'School Leadership, Counsellors & Career OS Team',
  },
  {
    num: '06',
    title: 'Scale & Regional Partner Connection',
    duration: 'Term 2 & Beyond',
    summary: 'Expand to additional year groups and connect verified local apprenticeship and employer opportunities.',
    keyDeliverables: [
      'Extend Career OS access to wider secondary year groups',
      'Integrate local employer work-experience and apprenticeship listings where appropriate',
      'Establish compounding student Career Passport records that persist through graduation',
    ],
    stakeholderFocus: 'Full School Community & Regional Partners',
  },
];

export function SchoolImplementationRoadmap() {
  const [selectedPhaseIdx, setSelectedPhaseIdx] = useState<number>(0);
  const activePhase = IMPLEMENTATION_PHASES[selectedPhaseIdx] ?? IMPLEMENTATION_PHASES[0]!;

  return (
    <div className="w-full space-y-8" id="implementation-roadmap">
      
      {/* 6-Phase Horizontal Steps */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {IMPLEMENTATION_PHASES.map((p, idx) => {
          const isSelected = idx === selectedPhaseIdx;
          return (
            <button
              key={p.num}
              type="button"
              onClick={() => setSelectedPhaseIdx(idx)}
              className={cn(
                'p-3.5 rounded-[var(--radius-card)] border text-left transition-all cursor-pointer flex flex-col justify-between gap-2',
                isSelected
                  ? 'bg-white/15 border-white/40 text-white shadow-xs'
                  : 'bg-[var(--color-surface-raised)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-white/20'
              )}
            >
              <div className="flex items-center justify-between">
                <span className={cn('text-xs font-mono font-bold', isSelected ? 'text-[#2F8FFF]' : 'text-[var(--color-text-tertiary)]')}>
                  Phase {p.num}
                </span>
                <span className="text-[10px] font-mono text-[var(--color-taupe-400)]">
                  {p.duration.split(' ')[0]}
                </span>
              </div>
              <h4 className="text-xs font-bold text-white line-clamp-2">
                {p.title}
              </h4>
            </button>
          );
        })}
      </div>

      {/* Active Phase Detail Stage */}
      <div className="p-6 sm:p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6">
        
        {/* Phase Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-border-default)] pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#2F8FFF] font-semibold">
                Phase {activePhase.num} Detail
              </span>
              <span className="text-[var(--color-border-strong)]">&bull;</span>
              <span className="text-xs font-mono text-[var(--color-taupe-300)]">
                {activePhase.duration}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-normal text-white">
              {activePhase.title}
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed pt-0.5">
              {activePhase.summary}
            </p>
          </div>

          <span className="text-[11px] font-mono px-3 py-1 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)] shrink-0">
            Stakeholder: {activePhase.stakeholderFocus.split('&')[0]}
          </span>
        </div>

        {/* Key Deliverables Grid */}
        <div className="space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#6BB8FF] font-semibold block">
            Concrete Milestone Deliverables:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activePhase.keyDeliverables.map((del, i) => (
              <div key={i} className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-1.5 flex flex-col justify-start">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#2F8FFF]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Deliverable {activePhase.num}.{i + 1}</span>
                </div>
                <p className="text-xs text-[var(--color-text-primary)] leading-relaxed">
                  {del}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Architecture Direction */}
        <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded text-xs text-[var(--color-text-secondary)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#2F8FFF] shrink-0" />
            <span><strong className="text-white">Integration Direction:</strong> Career OS is designed to roll out as a standalone institutional environment or connect pragmatically with institutional SSO (SAML / OIDC) and roster directories.</span>
          </div>
          <span className="text-[10px] font-mono text-[var(--color-taupe-400)] shrink-0">
            Zero Complex Stack Rebuilding
          </span>
        </div>

      </div>

    </div>
  );
}
