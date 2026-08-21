'use client';
import React, { useState } from 'react';
import { UserCheck, Shield, GraduationCap, AlertCircle, HelpCircle, CheckCircle2 } from 'lucide-react';

type StageId = 'under-13' | '13-15' | '16-17' | '18-plus' | 'postsecondary';

interface LifeStage {
  id: StageId;
  label: string;
  ageBand: string;
  accountEligibility: string;
  schoolRelationship: string;
  guardianRelationship: string;
  legalMajorityStatus: string;
  ferpaStatus: string;
  summary: string;
  keySafeguards: string[];
}

const STAGES: LifeStage[] = [
  {
    id: 'under-13',
    label: 'Under 13',
    ageBand: 'Primary & Junior Secondary (Ages <13)',
    accountEligibility: 'Strictly Institutional Deployments Only',
    schoolRelationship: 'School-managed institutional tenancy with strict data processing agreement.',
    guardianRelationship: 'School acts as in loco parentis under COPPA / UK GDPR Article 8 exceptions where authorized.',
    legalMajorityStatus: 'Minor &bull; Full child safeguarding protections apply.',
    ferpaStatus: 'All educational privacy rights reside with parents / guardians.',
    summary: 'No open consumer registration permitted. Career OS is deployed solely under authorized institutional school contracts with zero direct marketing, zero open social features, and strict data minimisation.',
    keySafeguards: [
      'Zero open consumer registration without institutional contract',
      'No behavioral profiling or advertising data processing',
      'Educator-mediated classroom exploratory modules only',
      'Full compliance with COPPA and UK Age Appropriate Design Code',
    ],
  },
  {
    id: '13-15',
    label: 'Ages 13–15',
    ageBand: 'Secondary School (Ages 13–15)',
    accountEligibility: 'School-Approved OR Verified Guardian Arrangement',
    schoolRelationship: 'Enrolled in school workspace with career counselor access.',
    guardianRelationship: 'Linked parent/guardian account provides consent and high-level progress oversight.',
    legalMajorityStatus: 'Minor &bull; Child safety protections and contact restrictions active.',
    ferpaStatus: 'FERPA rights remain with parent/guardian for secondary school records.',
    summary: 'Students begin building their personal Career Twin and Career Passport under appropriate guardian oversight. AI Mentor provides career exploration while private reflection boundaries prevent casual surveillance.',
    keySafeguards: [
      'Verified parent or school institutional authorization required',
      'No unrestricted recruiter direct messaging or cold outreach',
      'Parental consent required for any external opportunity sharing',
      'Confidential student reflection space with automated safety escalation',
    ],
  },
  {
    id: '16-17',
    label: 'Ages 16–17',
    ageBand: 'High School Juniors & Seniors (Ages 16–17)',
    accountEligibility: 'Direct Individual Account Permitted Under Platform Policy',
    schoolRelationship: 'Optional connection to school workspace; student owns their personal account.',
    guardianRelationship: 'Guardian involvement varies by jurisdiction; student manages application sharing.',
    legalMajorityStatus: 'Minor &bull; Special safeguarding rules apply to employer introductions.',
    ferpaStatus: 'FERPA rights remain with parent for high school records until age 18.',
    summary: 'Turning 16 grants direct Career OS individual account eligibility under product policy. However, turning 16 does NOT create legal adulthood, and high school FERPA rights still reside with parents until age 18.',
    keySafeguards: [
      'Direct account ownership allows career evidence continuity beyond school',
      'Safe guarding and minor contact restrictions continue for employer interactions',
      'Student explicitly controls which credentials and artifacts to disclose',
      'Clear separation between personal Career OS and high school records',
    ],
  },
  {
    id: '18-plus',
    label: 'Ages 18+',
    ageBand: 'Adult Individual / Higher Education (Ages 18+)',
    accountEligibility: 'Full Adult Account Control',
    schoolRelationship: 'Alumni / past student status or direct individual subscriber.',
    guardianRelationship: 'No routine guardian access unless explicitly authorized by adult student.',
    legalMajorityStatus: 'Legal Majority &bull; Full contractual capacity in most jurisdictions.',
    ferpaStatus: 'FERPA rights transfer completely from parent to student at age 18.',
    summary: 'The student possesses full adult legal capacity. All educational privacy rights under FERPA transfer to the adult student. Career Passport records and Mentor context continue without institutional dependencies.',
    keySafeguards: [
      'All educational privacy rights held exclusively by the individual',
      'Complete self-custody over Career Passport evidence ledger',
      'Direct adult commercial interactions with prospective employers',
      'Optional connection to university or employer learning networks',
    ],
  },
  {
    id: 'postsecondary',
    label: 'Postsecondary Status (Any Age)',
    ageBand: 'Attending College / University / Postsecondary (Any Age)',
    accountEligibility: 'Adult Higher Education Account Model',
    schoolRelationship: 'Postsecondary institution relationship (College/University).',
    guardianRelationship: 'Zero automatic parental access to postsecondary education records.',
    legalMajorityStatus: 'May be under 18 chronologically, but holds postsecondary student status.',
    ferpaStatus: 'FERPA rights transfer to student immediately upon postsecondary enrollment.',
    summary: 'Crucial distinction: Under U.S. federal law (FERPA), when a student attends a postsecondary institution at ANY age (even under 18), all educational privacy rights transfer to the student. Career OS models this separately from age.',
    keySafeguards: [
      'FERPA rights transfer to student upon college matriculation regardless of age',
      'Secondary school records vs postsecondary records governed by distinct rules',
      'Higher education career services operate in institutional workspace',
      'Full personal custody over Career Twin and Career Passport assets',
    ],
  },
];

export function LifeStagePrivacyInteractive() {
  const [selectedStageId, setSelectedStageId] = useState<StageId>('16-17');

  const stage = STAGES.find((s) => s.id === selectedStageId) ?? STAGES[0]!;

  return (
    <div className="w-full space-y-6" id="life-stage-privacy-interactive">
      {/* Stage Selector */}
      <div className="space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)] font-semibold">
          Select Life Stage &bull; Legal Transition:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {STAGES.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedStageId(s.id)}
              className={`p-3.5 rounded text-left transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] ${
                selectedStageId === s.id
                  ? 'bg-white text-black border-transparent shadow-sm'
                  : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white'
              }`}
              aria-pressed={selectedStageId === s.id}
            >
              <span className="text-[9px] font-mono uppercase block font-bold tracking-wider opacity-60">
                {s.label}
              </span>
              <span className="text-xs font-semibold block truncate mt-1">
                {s.ageBand.split('(')[0]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Stage Analysis Card */}
      <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-6 animate-in fade-in duration-200">
        <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-[var(--color-border-default)]">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-blue)] font-bold">
              Legal &amp; Privacy Configuration
            </span>
            <h4 className="text-xl font-serif text-white font-normal">
              {stage.ageBand}
            </h4>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[var(--accent-blue-subtle)] text-[var(--accent-blue)] border border-[var(--accent-blue-border)]">
            {stage.accountEligibility}
          </span>
        </div>

        <p className="text-sm text-white leading-relaxed">
          {stage.summary}
        </p>

        {/* 4 Distinct Legal Tracks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="p-3.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1">
            <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] block font-semibold">
              01. School Relationship
            </span>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">{stage.schoolRelationship}</p>
          </div>

          <div className="p-3.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1">
            <span className="text-[10px] font-mono uppercase text-amber-400 block font-semibold">
              02. Guardian Relationship
            </span>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">{stage.guardianRelationship}</p>
          </div>

          <div className="p-3.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1">
            <span className="text-[10px] font-mono uppercase text-purple-400 block font-semibold">
              03. Legal Majority
            </span>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">{stage.legalMajorityStatus}</p>
          </div>

          <div className="p-3.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1">
            <span className="text-[10px] font-mono uppercase text-emerald-400 block font-semibold">
              04. FERPA Privacy Status
            </span>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">{stage.ferpaStatus}</p>
          </div>
        </div>

        {/* Key Safeguards */}
        <div className="p-4 rounded bg-[var(--color-surface-base)] border border-emerald-500/20 space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5" /> Enforced Safeguards for this Tier:
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white">
            {stage.keySafeguards.map((sg, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{sg}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2 border-t border-[var(--color-border-subtle)] text-[10px] font-mono text-[var(--color-text-tertiary)] flex flex-wrap items-center justify-between gap-2">
          <span>Career OS models Direct Account Eligibility, Legal Majority, Guardian Role, and FERPA Status as distinct tracks.</span>
          <span>Not legal advice &bull; Consult institutional counsel</span>
        </div>
      </div>
    </div>
  );
}
