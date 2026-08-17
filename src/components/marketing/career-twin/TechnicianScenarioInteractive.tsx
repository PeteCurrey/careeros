'use client';

import React, { useState } from 'react';
import { UserCheck, ArrowRight, CheckCircle2, AlertTriangle, Sparkles, Wrench, Shield, Briefcase, Building } from 'lucide-react';

interface ScenarioTarget {
  id: string;
  targetRole: string;
  timeframe: string;
  transferableStrengths: string[];
  bridgeRequirements: string[];
  mentorGuidance: string;
  graphConnection: string;
  passportEvidenceNeeded: string;
}

export function TechnicianScenarioInteractive() {
  const targets: ScenarioTarget[] = [
    {
      id: 'current',
      targetRole: 'Current Baseline: Mechanical Technician',
      timeframe: '5 Years Experience',
      transferableStrengths: [
        'Hydraulic & pneumatic diagnostics',
        'Industrial plant safety protocols',
        'Preventative maintenance scheduling',
        'Equipment teardown & rebuilding',
      ],
      bridgeRequirements: [
        'Baseline verified in Twin',
        'Ready for multi-pathway modeling',
      ],
      mentorGuidance: 'Your baseline context is strong in hands-on diagnostics and plant safety. Let’s evaluate which direction aligns best with your target 3-year income and work-life goals.',
      graphConnection: 'Matches 14 adjacent engineering roles across regional manufacturing and renewable energy hubs.',
      passportEvidenceNeeded: 'Upload plant shutdown logs and NVQ Level 3 certificate to complete initial Passport baseline.',
    },
    {
      id: 'automation',
      targetRole: 'Target: Automation & Controls Engineer',
      timeframe: '12–18 Months Bridge',
      transferableStrengths: [
        'Systems troubleshooting methodology',
        'Sensors & actuator hardware familiarity',
        'High safety compliance discipline',
      ],
      bridgeRequirements: [
        'Siemens S7 / Allen-Bradley PLC programming',
        'Industrial Ethernet networking micro-cert',
        '1 Capstone automation project evidence',
      ],
      mentorGuidance: 'You don’t need to restart as a junior programmer. Your deep mechanical diagnostics experience gives you an edge over pure software grads. Focus on adding PLC programming evidence.',
      graphConnection: 'Automation Engineers in your region earn 38% higher median compensation with strong 5-year growth.',
      passportEvidenceNeeded: 'Completed PLC simulation capstone project + Siemens micro-credential.',
    },
    {
      id: 'manager',
      targetRole: 'Target: Plant Maintenance Manager',
      timeframe: '24–36 Months Bridge',
      transferableStrengths: [
        'First-hand knowledge of plant bottlenecks',
        'High respect from shop-floor technicians',
        'Deep equipment lifecycle understanding',
      ],
      bridgeRequirements: [
        'Maintenance budget & OPEX management',
        'Team leadership & shift scheduling proof',
        'Reliability-Centered Maintenance (RCM) cert',
      ],
      mentorGuidance: 'Your technical skills are proven. The key bridge is demonstrating leadership and financial literacy. Seek out opportunity to lead weekend shutdown crews and document budget impacts.',
      graphConnection: 'Connects to Maintenance Supervisor and Reliability Engineer leadership trajectories.',
      passportEvidenceNeeded: 'Verified crew leadership project record + cost-saving maintenance audit report.',
    },
    {
      id: 'founder',
      targetRole: 'Target: Independent Engineering Contractor',
      timeframe: '18–24 Months Bridge',
      transferableStrengths: [
        'End-to-end mechanical repair mastery',
        'Client-facing emergency response skills',
        'Strong industry reputation in region',
      ],
      bridgeRequirements: [
        'Commercial contract & pricing structure',
        'Public liability insurance & contractor license',
        'Client acquisition micro-portfolio',
      ],
      mentorGuidance: 'Your technical execution is client-ready. Your Twin indicates high autonomy. We can model a staged transition—taking contract shifts while maintaining part-time employment stability.',
      graphConnection: 'Surfaces B2B contracting rates ($85–$120/hr) across regional industrial clients.',
      passportEvidenceNeeded: 'Independent work portfolio + 3 client reference endorsements.',
    },
  ];

  const [activeTargetId, setActiveTargetId] = useState('automation');
  const activeTarget = (targets.find((t) => t.id === activeTargetId) || targets[0])!;

  return (
    <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-8 shadow-subtle">
      {/* Scenario Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="section-label">PRACTICAL WORKED EXAMPLE</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-semibold border border-amber-300">
              Illustrative Persona: Alex Morgan
            </span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-[var(--color-text-primary)]">
            How Alex’s Career Twin Models 4 Different Futures
          </h3>
        </div>
        <span className="text-xs font-mono px-3 py-1 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded text-[var(--color-taupe-700)] shrink-0">
          Mechanical Technician Example
        </span>
      </div>

      {/* Target Selector Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {targets.map((t) => {
          const isActive = t.id === activeTargetId;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTargetId(t.id)}
              className={`p-4 rounded-[var(--radius-card)] text-left border transition-all space-y-1 ${
                isActive
                  ? 'bg-white/15 text-[var(--color-text-primary)] border-white/15 shadow-sm'
                  : 'bg-[var(--color-surface-warm)] text-[var(--color-text-primary)] border-[var(--color-border-default)] hover:border-white/20'
              }`}
            >
              <span className={`text-[10px] font-mono uppercase tracking-wider block ${isActive ? 'text-[var(--color-taupe-300)]' : 'text-[var(--color-taupe-700)]'}`}>
                {t.timeframe}
              </span>
              <h4 className="font-bold text-xs leading-snug">{t.targetRole}</h4>
            </button>
          );
        })}
      </div>

      {/* Active Target Scenario Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Strengths & Bridge Requirements */}
        <div className="lg:col-span-6 space-y-6">
          {/* Transferable Strengths */}
          <div className="p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
            <h4 className="font-serif font-bold text-sm text-[var(--color-text-primary)] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Existing Transferable Strengths (In Twin):
            </h4>
            <ul className="space-y-2 text-xs text-[var(--color-text-primary)]">
              {activeTarget.transferableStrengths.map((str, idx) => (
                <li key={idx} className="flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>{str}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bridge Requirements */}
          <div className="p-6 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
            <h4 className="font-serif font-bold text-sm text-[var(--color-text-primary)] flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              Bridge Gaps Needed for This Direction:
            </h4>
            <ul className="space-y-2 text-xs text-[var(--color-text-primary)]">
              {activeTarget.bridgeRequirements.map((req, idx) => (
                <li key={idx} className="flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Platform Synergy (Mentor, Graph, Passport) */}
        <div className="lg:col-span-6 space-y-4">
          {/* Mentor Advice Box */}
          <div className="p-5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-taupe-700)] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              AI Career Mentor Guidance Output:
            </span>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed italic">
              “{activeTarget.mentorGuidance}”
            </p>
          </div>

          {/* Graph Connection */}
          <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded text-xs space-y-1">
            <span className="font-mono text-[10px] font-bold uppercase text-[var(--color-taupe-700)] block">
              CAREER GRAPH MARKET INSIGHT:
            </span>
            <p className="text-[var(--color-text-primary)] font-medium">
              {activeTarget.graphConnection}
            </p>
          </div>

          {/* Passport Evidence Needed */}
          <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded text-xs space-y-1">
            <span className="font-mono text-[10px] font-bold uppercase text-[var(--color-taupe-700)] block">
              PASSPORT EVIDENCE REQUIRED:
            </span>
            <p className="text-[var(--color-text-primary)] font-medium font-mono text-[11px]">
              {activeTarget.passportEvidenceNeeded}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
