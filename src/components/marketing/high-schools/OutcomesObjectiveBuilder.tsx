'use client';

import React, { useState } from 'react';
import {
  Target,
  Compass,
  Layers,
  Users,
  Calendar,
  GraduationCap,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface InstitutionalObjective {
  id: string;
  title: string;
  categoryTag: string;
  icon: React.ComponentType<{ className?: string }>;
  overview: string;
  potentialMeasures: string[];
  whatItCanTellYou: string[];
  whatItCannotTellYou: string[];
  recommendedSchoolAction: string;
}

const OBJECTIVES: InstitutionalObjective[] = [
  {
    id: 'pathway-breadth',
    title: 'Pathway Breadth & Alternative Awareness',
    categoryTag: 'Exploration Reach',
    icon: Compass,
    overview: 'Ensuring students evaluate multiple distinct post-16/post-18 routes (e.g. degree apprenticeships, technical trades, public service) rather than relying on default assumptions.',
    potentialMeasures: [
      'Number and percentage of distinct pathways researched per student',
      'Cohort-level distribution across university, apprenticeships, trades, and direct employment',
      'Rate of students comparing entry requirements across two or more different sectors',
    ],
    whatItCanTellYou: [
      'Whether students are aware of viable earn-while-learning alternatives before key deadlines',
      'If certain year cohorts disproportionately ignore technical or vocational options',
      'How student exploration patterns shift following careers fairs or employer talks',
    ],
    whatItCannotTellYou: [
      'Whether a student will ultimately succeed in or complete a chosen pathway',
      'The intrinsic &ldquo;correctness&rdquo; of a student&apos;s personal career ambition',
      'A deterministic prediction of future salary or university admission outcomes',
    ],
    recommendedSchoolAction: 'Host targeted sector panels (e.g. Engineering Degree Apprenticeships) for year cohorts showing low exposure to technical alternatives.',
  },
  {
    id: 'engagement-depth',
    title: 'Student Engagement Depth & Research Quality',
    categoryTag: 'Exploration Depth',
    icon: Target,
    overview: 'Understanding whether students move beyond casual headline browsing into substantive comparison of job duties, daily realities, and educational prerequisites.',
    potentialMeasures: [
      'Progression from career discovery to detailed pathway comparison and curriculum research',
      'Frequency of students bookmarking prerequisites, entry assessments, and training standards',
      'Completion of pre-meeting advising reflections before human counselling appointments',
    ],
    whatItCanTellYou: [
      'Whether students are conducting rigorous, multi-session occupational research',
      'Which specific career families generate deep inquiry vs superficial surface browsing',
      'How early students begin concrete contingency planning ahead of graduation',
    ],
    whatItCannotTellYou: [
      'An algorithmic &ldquo;career-readiness score&rdquo; or numerical employability rating',
      'The student&apos;s emotional maturity, resilience, or personal motivation',
      'A guarantee of job market placement upon leaving school',
    ],
    recommendedSchoolAction: 'Embed structured Career OS reflection tasks into tutor time or PSHE curriculum to bridge casual interest into actionable research.',
  },
  {
    id: 'evidence-building',
    title: 'Career Passport Evidence Artifacts',
    categoryTag: 'Capability Documentation',
    icon: Layers,
    overview: 'Tracking whether students are documenting tangible artifacts — such as capstone projects, work experience, certifications, and volunteering — that persist into their working lives.',
    potentialMeasures: [
      'Average number of verified capability artifacts logged per student Career Passport',
      'Diversity of evidence types (technical projects, leadership roles, micro-credentials)',
      'Rate of graduating seniors with complete, exportable career evidence portfolios',
    ],
    whatItCanTellYou: [
      'Whether students are actively capturing developmental achievements during their school years',
      'If students have documented proof of transferable capabilities for CVs and applications',
      'Which curriculum departments generate strong, tangible portfolio artifacts',
    ],
    whatItCannotTellYou: [
      'That a student with 6 artifacts is intrinsically &ldquo;better&rdquo; than a student with 2 artifacts',
      'The qualitative artistic, technical, or personal depth of work beyond recorded criteria',
      'Automatic qualification for employment without formal statutory licensing',
    ],
    recommendedSchoolAction: 'Celebrate multi-disciplinary evidence (e.g. robotics competitions, part-time jobs, community service) during school awards and references.',
  },
  {
    id: 'human-guidance',
    title: 'Human Guidance & Counsellor Appointment Impact',
    categoryTag: 'Advising Workflow',
    icon: Users,
    overview: 'Measuring whether technology successfully equips human counsellors to conduct higher-impact 1:1 guidance appointments with pre-synthesised student context.',
    potentialMeasures: [
      'Percentage of students arriving to guidance sessions with completed pre-conversation briefs',
      'Number of student-initiated guidance requests and flagged advising dilemmas',
      'Post-conversation action milestone completion rates logged by student and counsellor',
    ],
    whatItCanTellYou: [
      'If counsellors spend less appointment time discovering basic facts and more time on complex decisions',
      'Which student cohorts request guidance most frequently around critical decision cycles',
      'Whether agreed action items from human advising sessions are being followed through',
    ],
    whatItCannotTellYou: [
      'A replacement for human pastoral intuition, empathy, and professional judgment',
      'A score of counsellor &ldquo;performance&rdquo; or teacher productivity',
      'That automated AI guidance alone can resolve complex adolescent dilemmas',
    ],
    recommendedSchoolAction: 'Allocate dedicated counselling capacity to students flagging complex multi-pathway decisions (e.g. degree vs higher apprenticeship).',
  },
  {
    id: 'employer-exposure',
    title: 'Employer Encounters & Careers Event Balance',
    categoryTag: 'Industry Encounters',
    icon: Calendar,
    overview: 'Auditing whether school-sponsored careers fairs, employer visits, and industry panels provide balanced exposure across regional growth sectors, public services, and skilled trades.',
    potentialMeasures: [
      'Distribution of sectors represented across school-organised careers events and speakers',
      'Student attendance and engagement across non-traditional vs corporate professional events',
      'Post-event student reflection notes logged into Career OS',
    ],
    whatItCanTellYou: [
      'If the school&apos;s event calendar over-indexes on professional services at the expense of engineering or healthcare',
      'Which employer encounters generate genuine student follow-up research',
      'Gaps where local high-demand industry sectors have zero presence in school events',
    ],
    whatItCannotTellYou: [
      'A guarantee of job offers or direct employment from visiting employers',
      'The long-term cultural fit of a visiting employer organisation',
      'Replacement of statutory school visitor safeguarding checks',
    ],
    recommendedSchoolAction: 'Use sector gap analysis to invite employers from under-represented industries (e.g. green energy, advanced manufacturing, allied health).',
  },
  {
    id: 'post-school-transition',
    title: 'Post-School Transition & Destination Readiness',
    categoryTag: 'Longitudinal Transition',
    icon: GraduationCap,
    overview: 'Helping school leadership understand how well graduating cohorts transition into intended next-stage destinations with verified contingency plans.',
    potentialMeasures: [
      'Proportion of graduating seniors with a confirmed primary pathway and documented contingency plan',
      'Student-reported destination categories (University, Apprenticeship, Employment, Public Service)',
      'Export and sovereign ownership activation of Career Passports prior to school departure',
    ],
    whatItCanTellYou: [
      'Whether students leave school with concrete next steps and portable evidence',
      'Broad trends in post-secondary pathway destinations across graduating years',
      'How effectively the careers programme supported students through final application cycles',
    ],
    whatItCannotTellYou: [
      'Sole causal responsibility for a student&apos;s post-school employment or life outcomes',
      'Permanent surveillance of alumni careers without explicit individual consent',
      'Definitive economic mobility or salary outcomes caused exclusively by the platform',
    ],
    recommendedSchoolAction: 'Conduct exit reviews with graduating seniors to ensure sovereign Career Passport access is established on personal email addresses.',
  },
];

export function OutcomesObjectiveBuilder() {
  const [selectedObjectiveId, setSelectedObjectiveId] = useState<string>('pathway-breadth');
  const activeObjective = OBJECTIVES.find((o) => o.id === selectedObjectiveId) ?? OBJECTIVES[0]!;

  return (
    <div className="w-full bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-editorial space-y-6" id="outcomes-objective-builder">
      
      {/* Header Bar */}
      <div className="bg-[var(--background-dark-deep)] p-5 sm:p-7 border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent-blue)] font-bold">
              Interaction 02 · Institutional Objective Builder
            </span>
          </div>
          <h3 className="text-xl font-serif font-normal text-white">
            What Is Your School Trying to Improve?
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Select an institutional goal to inspect what Career OS can measure, what it can tell you, and its strict analytical boundaries.
          </p>
        </div>

        <span className="text-[10px] font-mono px-3 py-1.5 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)] self-start sm:self-auto">
          Illustrative Configuration Model
        </span>
      </div>

      {/* Objective Selector Grid */}
      <div className="px-5 sm:px-7 space-y-2">
        <span className="section-label block">Select an Institutional Objective</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {OBJECTIVES.map((obj) => {
            const isSelected = obj.id === activeObjective.id;
            const Icon = obj.icon;
            return (
              <button
                key={obj.id}
                type="button"
                onClick={() => setSelectedObjectiveId(obj.id)}
                className={cn(
                  'p-3.5 rounded-[var(--radius-sm)] border text-left flex items-start gap-3 transition-all cursor-pointer',
                  isSelected
                    ? 'bg-[var(--color-surface-base)] border-[var(--accent-blue)] text-white shadow-xs'
                    : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-zinc-500'
                )}
              >
                <Icon className={cn('w-4 h-4 mt-0.5 shrink-0', isSelected ? 'text-[var(--accent-blue)]' : 'text-zinc-400')} />
                <div className="space-y-0.5">
                  <div className="text-xs font-bold leading-snug">{obj.title}</div>
                  <div className="text-[10px] font-mono text-[var(--color-taupe-300)]">{obj.categoryTag}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Objective Deep Dive */}
      <div className="px-5 sm:px-7 pb-7 space-y-6">
        <div className="p-5 sm:p-7 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6">
          
          <div className="space-y-2 border-b border-[var(--color-border-subtle)] pb-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-[var(--accent-blue)] font-bold uppercase tracking-wider">
                Objective Focus: {activeObjective.categoryTag}
              </span>
            </div>
            <h4 className="text-base font-serif font-medium text-white">
              {activeObjective.title}
            </h4>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {activeObjective.overview}
            </p>
          </div>

          {/* Potential Measures */}
          <div className="space-y-2.5">
            <span className="section-label block">Potential Programme-Level Measures</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
              {activeObjective.potentialMeasures.map((measure, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded text-xs space-y-1"
                >
                  <div className="text-[10px] font-mono text-[var(--accent-blue)] font-bold uppercase">
                    Signal 0{idx + 1}
                  </div>
                  <p className="text-[11px] text-[var(--color-text-primary)] leading-relaxed font-medium">
                    {measure}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Side-by-Side CAN TELL vs CANNOT TELL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            
            {/* What It Can Tell You */}
            <div className="p-4 bg-[var(--color-surface-raised)] border border-emerald-500/30 rounded-[var(--radius-sm)] space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold font-mono uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>What This Data Can Tell You</span>
              </div>
              <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                {activeObjective.whatItCanTellYou.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What It Cannot Tell You (Analytical Restraint) */}
            <div className="p-4 bg-[var(--color-surface-raised)] border border-amber-500/30 rounded-[var(--radius-sm)] space-y-3">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold font-mono uppercase tracking-wider">
                <XCircle className="w-4 h-4" />
                <span>What This Data Cannot Tell You (Restraint)</span>
              </div>
              <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                {activeObjective.whatItCannotTellYou.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold mt-0.5">✕</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Strategic Action Recommendation */}
          <div className="p-4 bg-[var(--background-dark-deep)] border border-[rgba(47,143,255,0.25)] rounded flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono text-[var(--accent-blue)] font-bold uppercase tracking-wider">
                Recommended Leadership Action
              </span>
              <p className="text-xs text-[var(--color-text-primary)] font-medium">
                {activeObjective.recommendedSchoolAction}
              </p>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)] shrink-0 self-start sm:self-auto">
              Human Strategic Decision
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}
