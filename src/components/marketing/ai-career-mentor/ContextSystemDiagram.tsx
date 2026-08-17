'use client';

import React from 'react';
import { Target, Briefcase, Award, GraduationCap, Heart, Compass, Sliders, ShieldAlert, Cpu } from 'lucide-react';

export function ContextSystemDiagram() {
  const contextCategories = [
    { title: "Goals", icon: Target, desc: "What you are actively trying to achieve, from short-term skill acquisition to multi-year leadership targets." },
    { title: "Career History", icon: Briefcase, desc: "Past roles, responsibilities, projects, and cross-functional experience across industries." },
    { title: "Skills & Competencies", icon: Cpu, desc: "Verified technical capabilities, domain knowledge, and practical working proficiencies." },
    { title: "Evidence Spectrum", icon: Award, desc: "Work artifacts, capstone projects, code repos, certifications, and peer/employer verifications." },
    { title: "Education & Learning", icon: GraduationCap, desc: "Formal degrees, vocational trade credentials, specialized courses, and self-directed study." },
    { title: "Interests & Passions", icon: Heart, desc: "Fields, problems, and causes that naturally attract your curiosity and intrinsic motivation." },
    { title: "Work Preferences", icon: Sliders, desc: "Environment, team structure, remote vs on-site, compensation targets, and autonomy preferences." },
    { title: "Development Gaps", icon: Compass, desc: "Completed learning modules and specific capability gaps currently being addressed." },
    { title: "Career Direction", icon: Compass, desc: "Explored pathways across technical tracks, management, skilled trades, or entrepreneurship." },
    { title: "Personal Constraints", icon: ShieldAlert, desc: "Location requirements, visa/licensure needs, or timing factors you explicitly choose to share." },
  ];

  return (
    <div className="space-y-12">
      {/* Editorial System Diagram (SVG/HTML) */}
      <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[var(--color-border-default)]">
          <div>
            <span className="section-label">System Architecture</span>
            <h3 className="text-xl font-bold font-serif text-[var(--color-charcoal-deep)] mt-1">
              Context-Engine Interconnection Topology
            </h3>
          </div>
          <span className="font-mono text-xs text-[var(--color-text-secondary)] px-3 py-1 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded">
            Career OS Directional Subsystems
          </span>
        </div>

        {/* System Diagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {/* Node 1: Career Twin */}
          <div className="p-5 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-[var(--color-taupe-700)] uppercase tracking-wider">
                INPUT SUBSYSTEM
              </span>
              <span className="w-2 h-2 rounded-full bg-blue-500" />
            </div>
            <h4 className="font-serif font-bold text-base text-[var(--color-charcoal-deep)]">
              Career Twin
            </h4>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Structured digital representation of your professional context, credentials, history, and goals.
            </p>
          </div>

          {/* Center Node: AI Career Mentor */}
          <div className="p-5 bg-[var(--color-surface-warm)] border-2 border-[var(--color-charcoal-deep)] rounded-[var(--radius-card)] space-y-3 shadow-subtle relative">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-[var(--color-charcoal-deep)] uppercase tracking-wider">
                GUIDANCE LAYER
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <h4 className="font-serif font-bold text-base text-[var(--color-charcoal-deep)]">
              AI Career Mentor
            </h4>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Interprets Twin context, maps potential pathways, and formulates evidence-backed next actions.
            </p>
          </div>

          {/* Node 3: Output Engines */}
          <div className="p-5 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-[var(--color-taupe-700)] uppercase tracking-wider">
                VERIFICATION &amp; PATHWAYS
              </span>
              <span className="w-2 h-2 rounded-full bg-purple-500" />
            </div>
            <h4 className="font-serif font-bold text-base text-[var(--color-charcoal-deep)]">
              Passport &amp; Graph
            </h4>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Stores verified achievement evidence and navigates real-world labor market career pathways.
            </p>
          </div>
        </div>

        {/* Diagram Flow Lines Note */}
        <div className="text-center pt-2">
          <p className="text-xs text-[var(--color-text-tertiary)] italic">
            Continuous bidirectional data synchronization &mdash; advice updates dynamically as your Career Twin and Passport evidence evolve.
          </p>
        </div>
      </div>

      {/* 10 Context Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {contextCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div key={idx} className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2 hover:border-[var(--color-charcoal-base)] transition-colors">
              <div className="w-8 h-8 rounded bg-[var(--color-taupe-100)] text-[var(--color-charcoal-deep)] flex items-center justify-center mb-2">
                <Icon className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-[var(--color-charcoal-deep)] font-serif">
                {cat.title}
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {cat.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
