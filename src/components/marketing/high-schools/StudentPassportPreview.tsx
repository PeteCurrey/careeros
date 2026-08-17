'use client';

import React, { useState } from 'react';
import { 
  FileCheck, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  Wrench, 
  Briefcase, 
  Eye, 
  Lock, 
  ExternalLink, 
  Calendar, 
  ArrowRight,
  Sparkles,
  HelpCircle,
  FileCode
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface StudentEvidenceRecord {
  id: string;
  category: string;
  title: string;
  context: string;
  date: string;
  statusBadge: string;
  statusStyle: string;
  provenanceNote: string;
  skillsTagged: string[];
  artifactSnippet: string;
}

const STUDENT_EVIDENCE: StudentEvidenceRecord[] = [
  {
    id: 'rec-1',
    category: 'STEM Capstone Project',
    title: 'Autonomous Rover Obstacle Avoidance & Telemetry',
    context: 'National High School Robotics Championship',
    date: 'March 2026',
    statusBadge: 'Artifact & Video Evidence Attached',
    statusStyle: 'bg-blue-500/10 text-[#6BB8FF] border-blue-500/20',
    provenanceNote: 'Includes GitHub code repository link, electrical wiring diagram, and 2-minute sensor demonstration video.',
    skillsTagged: ['Microcontroller C++', 'Ultrasonic Sensors', 'Rapid Prototyping', 'Team Collaboration'],
    artifactSnippet: 'Built C++ PID control algorithm on Arduino Mega to navigate 8-point physical obstacle maze autonomously.',
  },
  {
    id: 'rec-2',
    category: 'Work Experience Placement',
    title: '2-Week Advanced Manufacturing Internship',
    context: 'Precision Aerospace Components Ltd.',
    date: 'July 2025',
    statusBadge: 'Institution / Employer Confirmed',
    statusStyle: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    provenanceNote: 'Supervisor structured sign-off confirming 70 hours attended across CNC machinery, health & safety, and quality checks.',
    skillsTagged: ['Industrial Safety Protocols', 'Precision Measurement', 'CNC Calibration', 'Workplace Punctuality'],
    artifactSnippet: 'Shadowed senior maintenance engineers; completed basic machine calibration and daily safety audit documentation.',
  },
  {
    id: 'rec-3',
    category: 'Academic Qualification',
    title: 'Advanced Mathematics & Computer Science Modules',
    context: 'State Curriculum Examination Board',
    date: 'June 2025',
    statusBadge: 'School Recorded Credential',
    statusStyle: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    provenanceNote: 'Officially recorded module grades verified through school administration registrar link.',
    skillsTagged: ['Calculus & Linear Algebra', 'Algorithmic Thinking', 'Statistical Data Analysis'],
    artifactSnippet: 'Achieved top quintile grade across advanced calculus, probability distributions, and Python programming.',
  },
  {
    id: 'rec-4',
    category: 'Extracurricular Leadership',
    title: 'Community Junior STEM Workshop Coordinator',
    context: 'Local Library Youth Outreach Initiative',
    date: 'October 2025 – Present',
    statusBadge: 'Self-Declared with Mentor Review',
    statusStyle: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    provenanceNote: 'Student-declared community engagement supported by workshop syllabus and feedback letters.',
    skillsTagged: ['Technical Communication', 'Public Speaking', 'Curriculum Design', 'Patience & Mentorship'],
    artifactSnippet: 'Designed and led weekly 1-hour coding workshops for 14 middle school students using introductory block and Python tools.',
  },
];

export function StudentPassportPreview() {
  const [selectedRecordId, setSelectedRecordId] = useState<string>('rec-1');
  const activeRecord = STUDENT_EVIDENCE.find((r) => r.id === selectedRecordId) ?? STUDENT_EVIDENCE[0]!;

  return (
    <div className="w-full bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-editorial space-y-6">
      
      {/* Passport Header Bar */}
      <div className="bg-[var(--background-dark-deep)] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-border-default)]">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded bg-white/15 text-white font-serif font-bold text-lg flex items-center justify-center border border-white/20">
            JM
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-serif font-bold text-white">
                Jordan Morgan &bull; Student Career Passport
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-semibold">
                ACTIVE COHORT
              </span>
            </div>
            <p className="text-xs font-mono text-[var(--color-text-secondary)]">
              Westfield High School &bull; Expected Graduation: 2027 &bull; Passport ID #CP-8841-STU
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--color-text-tertiary)]">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Sovereign student evidence ownership</span>
        </div>
      </div>

      {/* Main Evidence Grid */}
      <div className="p-6 sm:p-8 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Evidence Records List */}
          <div className="lg:col-span-6 space-y-2.5">
            <span className="section-label block pb-1">
              Demonstrated Capabilities &amp; Artifacts (4 Logged)
            </span>
            {STUDENT_EVIDENCE.map((rec) => {
              const isSelected = rec.id === selectedRecordId;
              return (
                <button
                  key={rec.id}
                  type="button"
                  onClick={() => setSelectedRecordId(rec.id)}
                  className={cn(
                    'w-full p-4 rounded-[var(--radius-sm)] border text-left transition-all cursor-pointer flex flex-col gap-2',
                    isSelected
                      ? 'bg-white/10 border-white/30 text-white shadow-xs'
                      : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-white/20'
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-[#6BB8FF] font-semibold">
                      {rec.category}
                    </span>
                    <span className={cn('text-[10px] font-mono px-2 py-0.5 rounded border', rec.statusStyle)}>
                      {rec.statusBadge.split(' ')[0]} Verified
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white">
                    {rec.title}
                  </h4>
                  <p className="text-[11px] text-[var(--color-text-tertiary)] font-mono">
                    {rec.context} &bull; {rec.date}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Record Deep Dive */}
          <div className="lg:col-span-6 p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-5">
            <div className="space-y-1.5 border-b border-[var(--color-border-default)] pb-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#2F8FFF] font-bold">
                Evidence Provenance Inspector
              </span>
              <h4 className="text-base font-serif font-medium text-white">
                {activeRecord.title}
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)]">
                {activeRecord.context} &bull; {activeRecord.date}
              </p>
            </div>

            {/* Verification Status Banner */}
            <div className={cn('p-3 rounded border text-xs flex items-start gap-2.5', activeRecord.statusStyle)}>
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">{activeRecord.statusBadge}</span>
                <span className="text-[11px] opacity-90">{activeRecord.provenanceNote}</span>
              </div>
            </div>

            {/* Artifact Highlight */}
            <div className="p-3.5 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] font-semibold block">
                Evidence Excerpt / Description
              </span>
              <p className="text-xs text-white leading-relaxed font-mono text-[11px]">
                &quot;{activeRecord.artifactSnippet}&quot;
              </p>
            </div>

            {/* Tagged Skills */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase text-[var(--color-text-tertiary)] font-semibold block">
                Demonstrated Competencies Tagged in Career Twin:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeRecord.skillsTagged.map((s, i) => (
                  <span key={i} className="px-2 py-0.5 bg-white/10 border border-white/10 text-white rounded text-[11px] font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Post-Graduation Note */}
            <div className="pt-3 border-t border-[var(--color-border-subtle)] text-[11px] text-[var(--color-text-tertiary)] flex items-center justify-between">
              <span>Owned by student &bull; Compounds after high school</span>
              <span className="text-white font-mono text-[10px]">W3C Verifiable Credential Ready</span>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
