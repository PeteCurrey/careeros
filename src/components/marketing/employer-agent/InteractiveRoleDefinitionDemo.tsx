'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  FileCheck,
  ChevronRight,
  Layers,
  ShieldCheck,
  Building,
  Wrench,
  Cpu,
  Users,
  Compass,
  ArrowRight,
  Clock,
  Briefcase,
} from 'lucide-react';

interface ProfileData {
  id: string;
  title: string;
  category: string;
  origin: string;
  whySurfaced: string;
  supportingEvidence: string[];
  whatMayTransfer: string[];
  whatIsUnclear: string[];
  possibleBridge: string;
  hardRequirements: {
    label: string;
    status: 'CONFIRMED' | 'NOT CONFIRMED' | 'NOT APPLICABLE';
    detail: string;
  }[];
  qualitativeTag: string;
}

const PROFILES: ProfileData[] = [
  {
    id: 'profile-a',
    title: 'Profile A — Industrial Maintenance Technician',
    category: 'Direct Sector Adjacent',
    origin: 'Packaging & FMCG Manufacturing Lines',
    whySurfaced:
      'Demonstrates extensive day-to-day diagnostic and breakdown management experience on automated production lines with high machinery overlap.',
    supportingEvidence: [
      'Verified 4-year Advanced Apprenticeship in Electro-Mechanical Engineering (Issuer-Verified)',
      '180+ documented hydraulic & PLC fault rectification logs in Career Passport',
      'IOSH Managing Safely Certification (Third-party Verified)',
    ],
    whatMayTransfer: [
      'High-speed packaging line electromechanical diagnostics',
      'Preventative maintenance scheduling and CMMS data entry',
      'Contractor permit-to-work sign-off protocols',
    ],
    whatIsUnclear: [
      'Experience leading multi-disciplinary teams across multi-shift rotations',
      'Budget management for annual capital equipment overhauls',
    ],
    possibleBridge:
      'Targeted coaching on departmental budget stewardship and direct line-management of 12+ technician teams.',
    hardRequirements: [
      {
        label: 'Statutory Electrical / Mechanical Qualification',
        status: 'CONFIRMED',
        detail: 'City & Guilds 2365 / NVQ Level 3 Verified',
      },
      {
        label: 'Right to Work & Location Proximity',
        status: 'CONFIRMED',
        detail: 'Location matches target facility radius',
      },
      {
        label: 'Senior Managerial Sign-Off Authority',
        status: 'NOT CONFIRMED',
        detail: 'Previous sign-off limited to lead technician grade',
      },
    ],
    qualitativeTag: 'Strong core diagnostic evidence &bull; Managerial bridge required',
  },
  {
    id: 'profile-b',
    title: 'Profile B — Field Service Engineer',
    category: 'Operational Adjacent',
    origin: 'Industrial Robotics & Automation OEM',
    whySurfaced:
      'Autonomous problem-solving across diverse customer plant environments with deep root-cause diagnostic expertise on complex multi-axis machinery.',
    supportingEvidence: [
      'HND in Robotics & Automated Systems (Issuer-Verified)',
      'OEM Certified Senior Automation Systems Specialist',
      '45 field deployment case studies documented with client sign-offs',
    ],
    whatMayTransfer: [
      'Precision servo-drive, robotic sensor, and logic controller troubleshooting',
      'High-pressure crisis management during customer emergency shutdowns',
      'Cross-stakeholder technical communication and executive briefings',
    ],
    whatIsUnclear: [
      'Long-term asset lifecycle management within a single fixed manufacturing site',
      'Continuous TPM (Total Productive Maintenance) culture implementation',
    ],
    possibleBridge:
      'Orientation toward fixed-facility continuous reliability metrics (MTBF, MTTR, OEE) vs project-based field repairs.',
    hardRequirements: [
      {
        label: 'Statutory Electrical / Mechanical Qualification',
        status: 'CONFIRMED',
        detail: 'HND Level 5 Engineering Record Verified',
      },
      {
        label: 'Right to Work & Location Proximity',
        status: 'CONFIRMED',
        detail: 'Within 30-minute commute of site',
      },
      {
        label: 'Fixed Plant Safety Leadership',
        status: 'NOT CONFIRMED',
        detail: 'Experience primarily vendor site-safety rather than plant-wide HSE ownership',
      },
    ],
    qualitativeTag: 'Exceptional automation expertise &bull; Plant-lifecycle context needed',
  },
  {
    id: 'profile-c',
    title: 'Profile C — Automotive Diagnostic Technician',
    category: 'Transferable Discipline',
    origin: 'Commercial Fleet & High-Voltage Electric Vehicle Workshop',
    whySurfaced:
      'Highly sophisticated multi-meter, oscilloscope, and CAN-bus telemetry diagnostic skills with proven safety discipline in high-voltage environments.',
    supportingEvidence: [
      'IMI Level 4 Award in Electric/Hybrid Vehicle System Diagnostics (Issuer-Verified)',
      '7 years advanced fault-finding across heavy goods electrical drivetrains',
      'Clean statutory safety record with high-voltage isolation sign-off',
    ],
    whatMayTransfer: [
      'Systematic logical fault isolation under time constraints',
      'Electrical schematics reading and sensor telemetry analysis',
      'High-voltage safety discipline and PPE enforcement',
    ],
    whatIsUnclear: [
      'Industrial machinery regulations (e.g. PUWER, LOLER standards)',
      'Heavy mechanical plant pneumatic and steam utility infrastructure',
    ],
    possibleBridge:
      'Structured 6-week industrial machinery compliance conversion course (PUWER/Machinery Directive).',
    hardRequirements: [
      {
        label: 'Statutory Electrical / Mechanical Qualification',
        status: 'CONFIRMED',
        detail: 'Automotive/HV Electrical Level 4 Verified',
      },
      {
        label: 'Industrial Plant HSE Certification',
        status: 'NOT CONFIRMED',
        detail: 'Commercial fleet safety, not industrial manufacturing safety',
      },
      {
        label: 'Full Driving Licence & Shift Availability',
        status: 'CONFIRMED',
        detail: 'Fully eligible for on-site shift roster',
      },
    ],
    qualitativeTag: 'High diagnostic aptitude &bull; Industrial regulatory bridge required',
  },
  {
    id: 'profile-d',
    title: 'Profile D — Military Technical Engineer',
    category: 'High-Accountability Transfer',
    origin: 'Defence Logistics / Royal Air Force Avionics',
    whySurfaced:
      'Rigorous adherence to maintenance schedules, high-stress incident command, safety audits, and disciplined leadership of technical maintenance squads.',
    supportingEvidence: [
      'Military Avionics Engineering Class 1 Certification (Third-party Verified)',
      'Documented leadership of 16-person aircraft turn-around maintenance teams',
      'Comprehensive safety management and audit compliance records',
    ],
    whatMayTransfer: [
      'Exceptional team leadership and procedural safety discipline',
      'Rigorous planned maintenance execution and parts inventory logistics',
      'Calm, structured decision-making under severe operational pressure',
    ],
    whatIsUnclear: [
      'Commercial manufacturing profit-and-loss (P&L) constraints',
      'Commercial vendor negotiation and unionized workforce relations',
    ],
    possibleBridge:
      'Onboarding on commercial factory economics and vendor contracting practices.',
    hardRequirements: [
      {
        label: 'Statutory Electrical / Mechanical Qualification',
        status: 'CONFIRMED',
        detail: 'Recognised military engineering equivalent (MOD/City & Guilds)',
      },
      {
        label: 'Commercial Plant Experience',
        status: 'NOT CONFIRMED',
        detail: 'Defence environment; commercial bridge needed',
      },
      {
        label: 'Security Clearance & Right to Work',
        status: 'CONFIRMED',
        detail: 'Full civilian right to work verified',
      },
    ],
    qualitativeTag: 'Outstanding leadership &bull; Commercial plant bridge needed',
  },
];

export function InteractiveRoleDefinitionDemo() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [selectedProfileId, setSelectedProfileId] = useState<string>('profile-a');

  const selectedProfile =
    (PROFILES.find((p) => p.id === selectedProfileId) || PROFILES[0])!;

  const steps = [
    {
      num: '01',
      title: 'Define Role Outcomes',
      desc: 'What must this person accomplish in the operating environment?',
      content: (
        <div className="space-y-3">
          <p className="text-xs text-[var(--color-text-secondary)]">
            Move away from copying generic boilerplate responsibilities. Specify concrete operational goals:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Maintain 99.4% plant line availability across 3 shifts</span>
            </div>
            <div className="p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Reduce unpredicted breakdown recovery time (MTTR) by 20%</span>
            </div>
            <div className="p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Lead and develop 14 multi-skilled maintenance technicians</span>
            </div>
            <div className="p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Ensure 100% compliance with statutory safety &amp; PUWER audits</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: '02',
      title: 'Map Required Capabilities',
      desc: 'Which functional competencies truly drive these outcomes?',
      content: (
        <div className="space-y-3">
          <p className="text-xs text-[var(--color-text-secondary)]">
            Deconstruct titles into underlying capabilities that transfer across sectors:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div className="p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1">
              <span className="font-bold text-white block">Diagnostics</span>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                Root-cause isolation in complex electromechanical &amp; automated loops.
              </p>
            </div>
            <div className="p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1">
              <span className="font-bold text-white block">Planning &amp; TPM</span>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                Preventative maintenance schedules, CMMS tracking, and spare parts buffer planning.
              </p>
            </div>
            <div className="p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-1">
              <span className="font-bold text-white block">Safety Leadership</span>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                Permit-to-work systems, isolation verification, and active safety culture enforcement.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: '03',
      title: 'Identify High-Signal Evidence',
      desc: 'What verified artifacts would substantiate competence?',
      content: (
        <div className="space-y-3">
          <p className="text-xs text-[var(--color-text-secondary)]">
            Look for evidence items recorded in Career Passports rather than claims on flat CVs:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded flex items-start gap-2">
              <FileCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">Equipment Overhaul Logs</span>
                <span className="text-[11px] text-[var(--color-text-secondary)]">Verified technical maintenance reports &amp; sign-off history</span>
              </div>
            </div>
            <div className="p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded flex items-start gap-2">
              <FileCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">Accredited Engineering Credentials</span>
                <span className="text-[11px] text-[var(--color-text-secondary)]">Issuer-verified NVQ / HND / City &amp; Guilds certifications</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: '04',
      title: 'Set Non-Negotiable Conditions',
      desc: 'Which constraints cannot be compromised by transferable skills?',
      content: (
        <div className="space-y-3">
          <p className="text-xs text-[var(--color-text-secondary)]">
            Clearly distinguish soft capability overlap from hard statutory and location boundaries:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div className="p-3 bg-[var(--color-surface-base)] border border-amber-500/20 rounded space-y-1">
              <span className="font-bold text-amber-400 block">Statutory Licence</span>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                Recognised electrical qualification for statutory sign-off authority.
              </p>
            </div>
            <div className="p-3 bg-[var(--color-surface-base)] border border-amber-500/20 rounded space-y-1">
              <span className="font-bold text-amber-400 block">Physical Location</span>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                Must be within 45 minutes of the plant for emergency breakdown response.
              </p>
            </div>
            <div className="p-3 bg-[var(--color-surface-base)] border border-amber-500/20 rounded space-y-1">
              <span className="font-bold text-amber-400 block">Shift Availability</span>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                Commitment to continental 4-on-4-off rotating shift pattern.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full space-y-10" id="role-definition-demo">
      {/* ── PART 1: ROLE DEFINITION WORKFLOW ───────────────────────── */}
      <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--color-border-default)]">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-purple-400 flex items-center gap-1.5 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Interactive Role-Definition Workflow
            </span>
            <h3 className="text-xl font-serif font-normal text-white">
              Target: Maintenance &amp; Reliability Manager
            </h3>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 text-[var(--color-taupe-300)] border border-white/10">
            Illustrative Capability Brief
          </span>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {steps.map((s, idx) => (
            <button
              key={s.num}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded text-left transition-all border ${
                activeStep === idx
                  ? 'bg-white/10 border-white/30 text-white shadow-sm'
                  : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-white/15'
              }`}
            >
              <span className="text-[10px] font-mono text-purple-400 block font-bold">
                Step {s.num}
              </span>
              <span className="font-semibold text-xs block truncate text-white">
                {s.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Step Panel */}
        {(() => {
          const currentStep = (steps[activeStep] ?? steps[0])!;
          return (
            <div className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-white flex items-center gap-2">
                  <span className="text-purple-400 font-mono">Step {currentStep.num}:</span>
                  {currentStep.title}
                </h4>
                <span className="text-[11px] text-[var(--color-text-tertiary)] hidden sm:inline font-mono">
                  {currentStep.desc}
                </span>
              </div>

              <div>{currentStep.content}</div>

              <div className="flex items-center justify-between pt-3 border-t border-[var(--color-border-subtle)] text-xs">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded bg-white/5 border border-white/10 disabled:opacity-30 text-[var(--color-text-secondary)] hover:text-white"
                >
                  &larr; Previous Step
                </button>
                <span className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
                  Step {activeStep + 1} of {steps.length}
                </span>
                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded bg-white/10 border border-white/20 disabled:opacity-30 font-semibold text-white hover:bg-white/15"
                >
                  Next Step &rarr;
                </button>
              </div>
            </div>
          );
        })()}
      </div>

      {/* ── PART 2: CANDIDATE REASONING EXPLORER (NO MATCH SCORES) ─── */}
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
              Candidate Reasoning Explorer
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-semibold">
              Explainable Overlap &bull; Zero Match Scores
            </span>
          </div>
          <h3 className="text-2xl font-serif font-normal text-white">
            Understand why each candidate surfaced.
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
            Select an illustrative profile below to inspect how Employer Agent explains relevant evidence, highlights transferable capability, clarifies what is still missing, and flags hard regulatory conditions.
          </p>
        </div>

        {/* Profile Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {PROFILES.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedProfileId(p.id)}
              className={`p-4 rounded-[var(--radius-card)] text-left transition-all border flex flex-col justify-between space-y-3 ${
                selectedProfileId === p.id
                  ? 'bg-white/10 border-purple-400 shadow-md ring-1 ring-purple-400/30'
                  : 'bg-[var(--color-surface-raised)] border-[var(--color-border-default)] hover:border-white/20'
              }`}
            >
              <div className="space-y-1.5">
                <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/5 text-[var(--color-taupe-300)] border border-white/10 inline-block">
                  {p.category}
                </span>
                <h4 className="font-bold text-xs sm:text-sm text-white leading-snug">
                  {p.title}
                </h4>
                <p className="text-[11px] text-[var(--color-text-tertiary)]">
                  {p.origin}
                </p>
              </div>

              <div className="pt-2 border-t border-[var(--color-border-subtle)] text-[10px] font-mono text-purple-300 flex items-center justify-between">
                <span>View Full Reasoning</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </button>
          ))}
        </div>

        {/* Selected Profile Detailed Reasoning Box */}
        <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-[var(--color-border-default)]">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-[var(--color-taupe-300)]">
                Selected Candidate Discovery Evaluation
              </span>
              <h4 className="text-xl font-serif text-white font-normal">
                {selectedProfile.title}
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Background: {selectedProfile.origin}
              </p>
            </div>
            <div className="px-3 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs">
              {selectedProfile.qualitativeTag}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Why Surfaced & What Transfers */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300 font-bold block">
                  Why This Profile Surfaced
                </span>
                <p className="text-xs sm:text-sm text-white leading-relaxed p-3.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded">
                  &ldquo;{selectedProfile.whySurfaced}&rdquo;
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300 font-bold block">
                  Supporting Career Passport Evidence
                </span>
                <ul className="space-y-1.5 text-xs text-[var(--color-text-secondary)]">
                  {selectedProfile.supportingEvidence.map((ev, idx) => (
                    <li
                      key={idx}
                      className="p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded flex items-start gap-2 text-white"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ev}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-300 font-bold block">
                  Transferable Capabilities Identified
                </span>
                <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                  {selectedProfile.whatMayTransfer.map((tr, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>{tr}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Missing Context, Bridge & Hard Requirements */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-4 bg-[var(--color-surface-base)] border border-amber-500/20 rounded-[var(--radius-card)] space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-bold flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" /> What Is Still Unclear
                </span>
                <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                  {selectedProfile.whatIsUnclear.map((unc, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-400 font-bold">&bull;</span>
                      <span>{unc}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 border-t border-[var(--color-border-subtle)]">
                  <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase block mb-1">
                    Potential Bridge Requirement:
                  </span>
                  <p className="text-xs text-white leading-relaxed">
                    {selectedProfile.possibleBridge}
                  </p>
                </div>
              </div>

              {/* Hard Requirements Status */}
              <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] font-bold block">
                  Mandatory Requirements Status
                </span>
                <div className="space-y-2 text-xs">
                  {selectedProfile.hardRequirements.map((hr, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-start justify-between gap-2"
                    >
                      <div className="space-y-0.5">
                        <span className="font-semibold text-white block text-[11px]">
                          {hr.label}
                        </span>
                        <span className="text-[10px] text-[var(--color-text-secondary)] block">
                          {hr.detail}
                        </span>
                      </div>
                      <span
                        className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold uppercase shrink-0 ${
                          hr.status === 'CONFIRMED'
                            ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                            : hr.status === 'NOT CONFIRMED'
                            ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                            : 'bg-white/5 text-zinc-400 border border-white/10'
                        }`}
                      >
                        {hr.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[var(--color-border-default)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[var(--color-text-tertiary)]">
            <span>
              Employer Agent surfaces relevant factors and evidence provenance. <strong>Human hiring teams evaluate candidates and make all final decisions.</strong>
            </span>
            <span className="font-mono text-[11px] text-purple-300 shrink-0">
              No Automated Scoring &bull; Human in Loop
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
