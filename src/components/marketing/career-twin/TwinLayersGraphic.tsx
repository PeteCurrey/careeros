'use client';

import React, { useState } from 'react';
import { Briefcase, Wrench, FileCheck, Award, TrendingUp, Target, Heart, Sliders, MapPin, Compass, ChevronRight } from 'lucide-react';

interface DimensionItem {
  id: string;
  title: string;
  category: string;
  icon: React.ElementType;
  description: string;
  sampleItems: string[];
  provenance: string;
}

export function TwinLayersGraphic() {
  const dimensions: DimensionItem[] = [
    {
      id: 'experience',
      title: 'Experience',
      category: 'Historical Context',
      icon: Briefcase,
      description: 'What you have actually done—roles, projects, operational environments, and time spent in field.',
      sampleItems: ['5 yrs Mechanical Maintenance Technician', '2 yrs Industrial Safety Representative', '12 Plant Shutdown Audits'],
      provenance: 'User provided & Employer verified',
    },
    {
      id: 'capability',
      title: 'Capability',
      category: 'Current Skill Stack',
      icon: Wrench,
      description: 'What you can currently perform reliably—technical competencies, soft skills, and tool proficiencies.',
      sampleItems: ['Hydraulic System Diagnostics (Level 3)', 'VFD Configuration', 'Root Cause Failure Analysis'],
      provenance: 'Demonstrated & Platform Assessed',
    },
    {
      id: 'evidence',
      title: 'Evidence',
      category: 'Verified Artifacts',
      icon: FileCheck,
      description: 'The physical proof backing your capability claims—code repos, project logs, designs, and capstone audits.',
      sampleItems: ['Plant Maintenance SOP Audit Log (#482)', 'VFD Replacement Video Record', 'CAD Assembly Drawing'],
      provenance: 'Passport Evidence Vault',
    },
    {
      id: 'qualifications',
      title: 'Qualifications',
      category: 'Formal Credentials',
      icon: Award,
      description: 'Formal degrees, trade certifications, licenses, and official regulatory accreditations.',
      sampleItems: ['NVQ Level 3 Electrical Installation', 'OSHA 30-Hour Safety Cert', 'AWS Solutions Architect Associate'],
      provenance: 'Issuer Verified (Credential Registry)',
    },
    {
      id: 'development',
      title: 'Development',
      category: 'Active Growth',
      icon: TrendingUp,
      description: 'What you are currently building or studying right now to prepare for your next step.',
      sampleItems: ['Siemens S7 PLC Programming Course', 'Micro-credentials in Robotics', 'Team Leadership Mentorship'],
      provenance: 'Self-directed & School System',
    },
    {
      id: 'goals',
      title: 'Goals',
      category: 'Forward Ambition',
      icon: Target,
      description: 'The explicit outcomes you want to achieve over 1, 3, and 5-year horizons.',
      sampleItems: ['Transition to Automation Controls Specialist', 'Achieve $95k Compensation Floor', 'Lead a 6-person Engineering Crew'],
      provenance: 'User Private Context',
    },
    {
      id: 'interests',
      title: 'Interests',
      category: 'Professional Curiosity',
      icon: Heart,
      description: 'The topics, industries, and technological trends that hold your genuine attention.',
      sampleItems: ['Renewable Wind Micro-grids', 'Robotic Surgery Automation', 'Sustainable Supply Chain Logistics'],
      provenance: 'User Interest Diagnostic',
    },
    {
      id: 'preferences',
      title: 'Work Preferences',
      category: 'Operational Boundaries',
      icon: Sliders,
      description: 'How, where, and under what conditions you operate best.',
      sampleItems: ['Hybrid / 2 days remote', 'Non-defense sector only', 'Travel up to 20%', 'Day shifts preferred'],
      provenance: 'User Preference Settings',
    },
    {
      id: 'context',
      title: 'Context',
      category: 'Personal Circumstances',
      icon: MapPin,
      description: 'Relevant life circumstances and geographic requirements you choose to share.',
      sampleItems: ['Relocation ready (US-East)', 'Requires visa sponsorship eligibility check', 'School schedule alignment'],
      provenance: 'User Controlled Sharing',
    },
    {
      id: 'direction',
      title: 'Direction',
      category: 'Exploratory Trajectories',
      icon: Compass,
      description: 'The active career pathways currently being modeled or tested with your AI Career Mentor.',
      sampleItems: ['Pathway A: Automation Engineer', 'Pathway B: Maintenance Manager', 'Pathway C: Independent Contractor'],
      provenance: 'Career Mentor Co-Design',
    },
  ];

  const [activeId, setActiveId] = useState('experience');
  const activeDim = (dimensions.find((d) => d.id === activeId) || dimensions[0])!;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 10 Dimensions Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {dimensions.map((dim) => {
            const Icon = dim.icon;
            const isSelected = dim.id === activeId;
            return (
              <button
                key={dim.id}
                onClick={() => setActiveId(dim.id)}
                className={`p-4 rounded-[var(--radius-card)] border text-left transition-all flex items-start justify-between gap-3 ${
                  isSelected
                    ? 'bg-white/15 text-[var(--color-text-primary)] border-white/15 shadow-subtle'
                    : 'bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] border-[var(--color-border-default)] hover:border-white/20'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-taupe-600)]'}`} />
                    <span className="font-bold text-xs">{dim.title}</span>
                  </div>
                  <span className={`text-[10px] font-mono block ${isSelected ? 'text-[var(--color-taupe-300)]' : 'text-[var(--color-taupe-700)]'}`}>
                    {dim.category}
                  </span>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 mt-1 transition-transform ${isSelected ? 'translate-x-0.5 text-[var(--color-text-primary)]' : 'text-[var(--color-taupe-400)]'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Dimension Inspector */}
        <div className="lg:col-span-5 sticky top-24">
          <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-5 shadow-subtle">
            <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                Dimension Inspector
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-surface-warm)] text-[var(--color-taupe-700)] border border-[var(--color-border-default)]">
                {activeDim.category.toUpperCase()}
              </span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-white/15 text-[var(--color-text-primary)] flex items-center justify-center">
                  <activeDim.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[var(--color-text-primary)]">
                    {activeDim.title}
                  </h4>
                  <span className="text-[11px] text-[var(--color-text-tertiary)] font-mono">
                    Source: {activeDim.provenance}
                  </span>
                </div>
              </div>

              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {activeDim.description}
              </p>

              <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-700)] block">
                  Illustrative Field Items in Profile:
                </span>
                <ul className="space-y-1.5 text-xs text-[var(--color-text-primary)] font-mono">
                  {activeDim.sampleItems.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-taupe-600)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-3 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded text-[11px] text-[var(--color-text-secondary)]">
              <p className="leading-snug">
                <strong className="text-[var(--color-text-primary)]">Product Note:</strong> Career Twin dimensions shown here are illustrative of the product concept and may evolve as the platform develops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
