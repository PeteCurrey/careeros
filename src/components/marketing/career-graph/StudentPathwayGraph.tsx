'use client';

import React, { useState } from 'react';
import { Sparkles, GraduationCap, Briefcase, Award, ArrowRight, CheckCircle2, Compass } from 'lucide-react';
import { cn } from '@/lib/utils';

export function StudentPathwayGraph() {
  const [selectedTrack, setSelectedTrack] = useState<'health' | 'engineering' | 'digital'>('health');

  const tracks = {
    health: {
      title: 'Life Sciences, Care & Practical Biology',
      interests: ['Human Biology', 'Working with People', 'Practical Problem Solving', 'Anatomy & Wellness'],
      routes: [
        {
          name: 'University Degree (BSc / BN)',
          type: 'Higher Education',
          examples: ['Registered Nursing', 'Physiotherapy', 'Public Health Analyst', 'Biomedical Scientist'],
          note: 'Rigorous academic research and clinical placement rotations.',
        },
        {
          name: 'Degree Apprenticeship',
          type: 'Work + Degree',
          examples: ['Paramedic Practitioner', 'Diagnostic Radiographer', 'Healthcare Science Tech'],
          note: 'Employer-funded salary, zero tuition debt, direct clinical hours from day one.',
        },
        {
          name: 'Technical / Vocational College',
          type: 'Applied Certification',
          examples: ['Dental Nurse', 'Emergency Medical Technician (EMT)', 'Pharmacy Dispenser'],
          note: 'Accelerated 1–2 year technical entry into licensed support roles.',
        },
        {
          name: 'Direct Healthcare Entry',
          type: 'Workplace Training',
          examples: ['Healthcare Support Worker', 'Phlebotomist', 'Clinical Administrative Lead'],
          note: 'Structured on-the-job competency progression into NHS/hospital bands.',
        },
      ],
    },
    engineering: {
      title: 'Physical Systems, Physics & Building',
      interests: ['Physics & Maths', 'Mechanical Fabrication', 'Robotics & Hardware', 'Electronics'],
      routes: [
        {
          name: 'University Degree (BEng / MEng)',
          type: 'Higher Education',
          examples: ['Mechanical Engineer', 'Aerospace Systems Designer', 'Renewable Energy Analyst'],
          note: 'Theoretical mathematical modeling, FEA simulation, and accredited chartership track.',
        },
        {
          name: 'Advanced Apprenticeship',
          type: 'Work + Technical Guild',
          examples: ['Precision CNC Machinist', 'Mechatronics Technician', 'Aviation Avionics Tech'],
          note: 'Paid trade mastery, workshop precision tooling, and fast-track to site leadership.',
        },
        {
          name: 'Vocational Technical Diploma',
          type: 'Applied Certification',
          examples: ['Licensed Electrician', 'Automotive Diagnostic Tech', 'HVAC Plant Specialist'],
          note: 'High-demand statutory licensing with immediate earning power.',
        },
        {
          name: 'Direct Infrastructure Entry',
          type: 'Workplace Training',
          examples: ['Railway Maintenance Crew', 'Utilities Site Operator', 'Wind Turbine Rigger'],
          note: 'Heavy industrial field safety certifications and shift-allowance advancement.',
        },
      ],
    },
    digital: {
      title: 'Computational Logic, Design & Data',
      interests: ['Programming & Logic', 'UI/UX Design', 'Data & Statistics', 'Creative Media'],
      routes: [
        {
          name: 'University Degree (BSc / BA)',
          type: 'Higher Education',
          examples: ['Computer Science Researcher', 'Algorithm Designer', 'Data Scientist'],
          note: 'Foundational computer theory, algorithmic complexity, and distributed computing.',
        },
        {
          name: 'Tech Degree Apprenticeship',
          type: 'Work + Degree',
          examples: ['Cloud Solutions Engineer', 'Cybersecurity Analyst', 'DevOps Specialist'],
          note: 'Work directly within enterprise engineering teams while earning a fully paid BSc.',
        },
        {
          name: 'Intensive Technical Bootcamp / Academy',
          type: 'Accelerated Portfolio',
          examples: ['Frontend Web Developer', 'QA Automation Engineer', 'Product Designer'],
          note: 'Project-based portfolio development and direct junior hiring pipelines.',
        },
        {
          name: 'Self-Directed Open Source & Freelance',
          type: 'Demonstrated Output',
          examples: ['Indie Software Builder', 'Digital Creator', 'Community Tech Lead'],
          note: 'Public GitHub repositories and commercial client deliverables logged in Career Passport.',
        },
      ],
    },
  };

  const active = tracks[selectedTrack];

  return (
    <div className="w-full bg-[var(--background-dark-deep)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden p-6 sm:p-10 space-y-8 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-border-default)] pb-6">
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)] flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-purple-400" />
            Exploratory Student Multi-Track Mapping
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-[var(--color-text-primary)]">
            One Interest Cluster &bull; Multiple Equal Pathways
          </h3>
        </div>

        {/* Track selector */}
        <div className="flex gap-1.5 bg-black/40 p-1 rounded-lg border border-white/10 self-start sm:self-auto">
          <button
            onClick={() => setSelectedTrack('health')}
            className={cn(
              'px-3 py-1.5 rounded text-xs font-medium transition-colors',
              selectedTrack === 'health'
                ? 'bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] border border-white/10 shadow-xs'
                : 'text-[var(--color-text-tertiary)] hover:text-white'
            )}
          >
            Health & Life Sciences
          </button>
          <button
            onClick={() => setSelectedTrack('engineering')}
            className={cn(
              'px-3 py-1.5 rounded text-xs font-medium transition-colors',
              selectedTrack === 'engineering'
                ? 'bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] border border-white/10 shadow-xs'
                : 'text-[var(--color-text-tertiary)] hover:text-white'
            )}
          >
            Engineering & Trades
          </button>
          <button
            onClick={() => setSelectedTrack('digital')}
            className={cn(
              'px-3 py-1.5 rounded text-xs font-medium transition-colors',
              selectedTrack === 'digital'
                ? 'bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] border border-white/10 shadow-xs'
                : 'text-[var(--color-text-tertiary)] hover:text-white'
            )}
          >
            Computing & Design
          </button>
        </div>
      </div>

      {/* Interests Layer */}
      <div className="p-4 rounded-lg bg-black/20 border border-[var(--color-border-default)] space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-taupe-300)]">
            Starting Inputs &bull; Interests, Subjects & Natural Inclinations
          </span>
          <span className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
            No Fixed Quizzes
          </span>
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {active.interests.map((interest, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-medium text-[var(--color-text-primary)]"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      {/* Multi-Track Education Routes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {active.routes.map((route, idx) => (
          <div
            key={idx}
            className="p-5 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4 flex flex-col justify-between hover:border-[var(--color-border-strong)] transition-all"
          >
            <div className="space-y-3">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400">
                  {route.type}
                </span>
                <h4 className="text-sm font-bold text-[var(--color-text-primary)]">
                  {route.name}
                </h4>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-[var(--color-border-default)]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] block">
                  Accessible Destinations:
                </span>
                <ul className="text-xs text-[var(--color-text-secondary)] space-y-1">
                  {route.examples.map((ex, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-[11px] text-[var(--color-text-tertiary)] leading-relaxed pt-2 border-t border-white/5 font-mono">
              {route.note}
            </p>
          </div>
        ))}
      </div>

      <div className="p-3.5 rounded bg-black/30 border border-white/10 text-xs text-[var(--color-text-tertiary)] flex items-start gap-2">
        <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Non-hierarchical philosophy:</strong> Career Graph treats vocational apprenticeships, technical certifications, degree programs, and direct industry training as equally valid pathways into respected, high-earning careers.
        </p>
      </div>
    </div>
  );
}
