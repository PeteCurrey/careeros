'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  EyeOff, 
  Users, 
  UserCheck, 
  Sparkles, 
  Building2, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  Home
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoleAccessDefinition {
  id: string;
  roleTitle: string;
  roleSubtitle: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  purposeStatement: string;
  fields: {
    name: string;
    description: string;
    visibility: 'FULL_ACCESS' | 'PERMISSIONED_SUMMARY' | 'STRICTLY_PRIVATE' | 'RESTRICTED_GATE';
    visibilityNote: string;
  }[];
}

const ACCESS_ROLES: RoleAccessDefinition[] = [
  {
    id: 'student',
    roleTitle: 'The Student',
    roleSubtitle: 'Primary Sovereign User',
    badge: '100% Sovereign Data Ownership',
    icon: Sparkles,
    purposeStatement: 'Full transparency into all personal reflections, exploration history, verified artifacts, and access grants.',
    fields: [
      { name: 'Private Mentor Exploratory Dialogue', description: 'Raw conversation transcripts, personal uncertainties, exploratory prompts', visibility: 'FULL_ACCESS', visibilityNote: 'Unrestricted full access to personal history' },
      { name: 'Career Pathways Explored', description: 'Comparative pathway evaluations, apprenticeships vs degree models', visibility: 'FULL_ACCESS', visibilityNote: 'Unrestricted full access' },
      { name: 'Stated Advising Questions & Goals', description: 'Topics flagged for school counselor or mentor follow-up', visibility: 'FULL_ACCESS', visibilityNote: 'Editable and controllable by student' },
      { name: 'Career Passport Evidence Artifacts', description: 'Projects, competition entries, course transcripts, verified certificates', visibility: 'FULL_ACCESS', visibilityNote: 'Sovereign ownership persists after school' },
      { name: 'Personal Reflections & Sensitive Notes', description: 'Family considerations, private doubts, developmental reflections', visibility: 'FULL_ACCESS', visibilityNote: 'Confidential personal layer' },
      { name: 'Direct Contact Details & Identity', description: 'Full legal name, school ID, personal email, address', visibility: 'FULL_ACCESS', visibilityNote: 'Controllable under privacy settings' },
    ],
  },
  {
    id: 'counselor',
    roleTitle: 'School Career Counselor',
    roleSubtitle: 'Institutional Guidance Professional',
    badge: 'Purpose-Based Advising Context',
    icon: UserCheck,
    purposeStatement: 'Receives structured preparatory briefs, aggregate cohort trends, and student-permissioned advising questions to maximize 1:1 human advising impact.',
    fields: [
      { name: 'Private Mentor Exploratory Dialogue', description: 'Raw conversation transcripts, personal uncertainties, exploratory prompts', visibility: 'STRICTLY_PRIVATE', visibilityNote: 'Hidden & Segregated — Private to student' },
      { name: 'Career Pathways Explored', description: 'Comparative pathway evaluations, apprenticeships vs degree models', visibility: 'PERMISSIONED_SUMMARY', visibilityNote: 'Aggregated summary of explored industries' },
      { name: 'Stated Advising Questions & Goals', description: 'Topics flagged for school counselor or mentor follow-up', visibility: 'FULL_ACCESS', visibilityNote: 'Visible to prepare 1:1 human conversation' },
      { name: 'Career Passport Evidence Artifacts', description: 'Projects, competition entries, course transcripts, verified certificates', visibility: 'FULL_ACCESS', visibilityNote: 'Visible to assist with applications/references' },
      { name: 'Personal Reflections & Sensitive Notes', description: 'Family considerations, private doubts, developmental reflections', visibility: 'STRICTLY_PRIVATE', visibilityNote: 'Hidden & Segregated — Never exposed' },
      { name: 'Direct Contact Details & Identity', description: 'Full legal name, school ID, personal email, address', visibility: 'FULL_ACCESS', visibilityNote: 'School records identity per institutional roster' },
    ],
  },
  {
    id: 'mentor',
    roleTitle: 'Career OS AI Mentor',
    roleSubtitle: 'System-Assigned Guidance Engine',
    badge: 'Confidential Guidance Context',
    icon: Sparkles,
    purposeStatement: 'Uses active exploratory context to provide tailored guidance and questions without retaining unpermissioned data for third-party advertising.',
    fields: [
      { name: 'Private Mentor Exploratory Dialogue', description: 'Raw conversation transcripts, personal uncertainties, exploratory prompts', visibility: 'FULL_ACCESS', visibilityNote: 'Active in session memory under strict controls' },
      { name: 'Career Pathways Explored', description: 'Comparative pathway evaluations, apprenticeships vs degree models', visibility: 'FULL_ACCESS', visibilityNote: 'Used to provide balanced, unbiased exploration' },
      { name: 'Stated Advising Questions & Goals', description: 'Topics flagged for school counselor or mentor follow-up', visibility: 'FULL_ACCESS', visibilityNote: 'Helps structure questions for human review' },
      { name: 'Career Passport Evidence Artifacts', description: 'Projects, competition entries, course transcripts, verified certificates', visibility: 'FULL_ACCESS', visibilityNote: 'Grounds advice in demonstrated evidence' },
      { name: 'Personal Reflections & Sensitive Notes', description: 'Family considerations, private doubts, developmental reflections', visibility: 'FULL_ACCESS', visibilityNote: 'Handled with care; never sold to third parties' },
      { name: 'Direct Contact Details & Identity', description: 'Full legal name, school ID, personal email, address', visibility: 'STRICTLY_PRIVATE', visibilityNote: 'AI operates on pseudonymised identifiers' },
    ],
  },
  {
    id: 'guardian',
    roleTitle: 'Parent / Guardian',
    roleSubtitle: 'Family Oversight (Age Configured)',
    badge: 'Age & Jurisdiction Aligned',
    icon: Home,
    purposeStatement: 'Provides family visibility and consent mechanisms based on student age thresholds, school policy, and statutory requirements.',
    fields: [
      { name: 'Private Mentor Exploratory Dialogue', description: 'Raw conversation transcripts, personal uncertainties, exploratory prompts', visibility: 'STRICTLY_PRIVATE', visibilityNote: 'Preserves student exploratory safe space' },
      { name: 'Career Pathways Explored', description: 'Comparative pathway evaluations, apprenticeships vs degree models', visibility: 'PERMISSIONED_SUMMARY', visibilityNote: 'High-level pathway exploration summary' },
      { name: 'Stated Advising Questions & Goals', description: 'Topics flagged for school counselor or mentor follow-up', visibility: 'PERMISSIONED_SUMMARY', visibilityNote: 'Visible where family alignment is agreed' },
      { name: 'Career Passport Evidence Artifacts', description: 'Projects, competition entries, course transcripts, verified certificates', visibility: 'FULL_ACCESS', visibilityNote: 'Full view of student achievements and certificates' },
      { name: 'Personal Reflections & Sensitive Notes', description: 'Family considerations, private doubts, developmental reflections', visibility: 'STRICTLY_PRIVATE', visibilityNote: 'Private student exploratory reflection' },
      { name: 'Direct Contact Details & Identity', description: 'Full legal name, school ID, personal email, address', visibility: 'FULL_ACCESS', visibilityNote: 'Linked to verified guardian relationship' },
    ],
  },
  {
    id: 'employer',
    roleTitle: 'Prospective Employer / Recruiter',
    roleSubtitle: 'Strict Minor Safeguarding Barrier',
    badge: 'Zero Unsolicited Minor Outreach',
    icon: Building2,
    purposeStatement: 'Strictly prohibited from browsing minor student directories, cold-soliciting students, or accessing private career data.',
    fields: [
      { name: 'Private Mentor Exploratory Dialogue', description: 'Raw conversation transcripts, personal uncertainties, exploratory prompts', visibility: 'STRICTLY_PRIVATE', visibilityNote: '100% Inaccessible to commercial employers' },
      { name: 'Career Pathways Explored', description: 'Comparative pathway evaluations, apprenticeships vs degree models', visibility: 'STRICTLY_PRIVATE', visibilityNote: '100% Inaccessible — No behavioral marketing' },
      { name: 'Stated Advising Questions & Goals', description: 'Topics flagged for school counselor or mentor follow-up', visibility: 'STRICTLY_PRIVATE', visibilityNote: '100% Inaccessible to commercial recruiters' },
      { name: 'Career Passport Evidence Artifacts', description: 'Projects, competition entries, course transcripts, verified certificates', visibility: 'RESTRICTED_GATE', visibilityNote: 'Accessible ONLY via explicit student application' },
      { name: 'Personal Reflections & Sensitive Notes', description: 'Family considerations, private doubts, developmental reflections', visibility: 'STRICTLY_PRIVATE', visibilityNote: '100% Inaccessible — Absolute segregation' },
      { name: 'Direct Contact Details & Identity', description: 'Full legal name, school ID, personal email, address', visibility: 'RESTRICTED_GATE', visibilityNote: 'Revealed ONLY after verified institutional introduction' },
    ],
  },
];

export function InteractivePrivacyAccessViewer() {
  const [selectedRoleId, setSelectedRoleId] = useState<string>('counselor');
  const activeRole = ACCESS_ROLES.find((r) => r.id === selectedRoleId) ?? ACCESS_ROLES[1]!;

  const getVisibilityBadge = (vis: string) => {
    switch (vis) {
      case 'FULL_ACCESS':
        return (
          <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[10px] font-mono font-semibold flex items-center gap-1">
            <Eye className="w-3 h-3" /> Full Access
          </span>
        );
      case 'PERMISSIONED_SUMMARY':
        return (
          <span className="px-2.5 py-1 rounded bg-blue-500/10 text-[#6BB8FF] border border-blue-500/20 text-[10px] font-mono font-semibold flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> Scoped Summary
          </span>
        );
      case 'RESTRICTED_GATE':
        return (
          <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[10px] font-mono font-semibold flex items-center gap-1">
            <Lock className="w-3 h-3" /> Application Gate Only
          </span>
        );
      case 'STRICTLY_PRIVATE':
      default:
        return (
          <span className="px-2.5 py-1 rounded bg-red-500/10 text-red-300 border border-red-500/20 text-[10px] font-mono font-semibold flex items-center gap-1">
            <EyeOff className="w-3 h-3" /> Strictly Hidden
          </span>
        );
    }
  };

  return (
    <div className="w-full bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-editorial space-y-6" id="privacy-access-matrix">
      
      {/* Header Context Bar */}
      <div className="bg-[var(--background-dark-deep)] p-5 sm:p-6 border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="accent-blue-dot" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#2F8FFF] font-bold">
              Granular Institutional Access Matrix
            </span>
          </div>
          <h3 className="text-lg font-serif font-normal text-white">
            What Can Each Stakeholder See?
          </h3>
        </div>

        <span className="text-[11px] font-mono px-3 py-1 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)]">
          Illustrative Access Architecture
        </span>
      </div>

      {/* Role Selection Tabs */}
      <div className="px-6 pt-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {ACCESS_ROLES.map((role) => {
            const isSelected = role.id === selectedRoleId;
            const Icon = role.icon;
            return (
              <button
                key={role.id}
                type="button"
                onClick={() => setSelectedRoleId(role.id)}
                className={cn(
                  'p-3.5 rounded-[var(--radius-sm)] border text-left transition-all cursor-pointer flex flex-col justify-between gap-2',
                  isSelected
                    ? 'bg-white/15 border-white/40 text-white shadow-xs'
                    : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-white/20'
                )}
              >
                <div className="flex items-center justify-between">
                  <Icon className={cn('w-4 h-4', isSelected ? 'text-[#2F8FFF]' : 'text-[var(--color-taupe-300)]')} />
                  <span className={cn('text-[9px] font-mono px-1.5 py-0.5 rounded', isSelected ? 'bg-white/20 text-white font-bold' : 'bg-white/5 text-[var(--color-taupe-400)]')}>
                    {isSelected ? 'ACTIVE' : 'SELECT'}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white line-clamp-1">
                    {role.roleTitle}
                  </h4>
                  <p className="text-[10px] text-[var(--color-text-tertiary)] truncate mt-0.5">
                    {role.roleSubtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Role Matrix Table */}
      <div className="px-6 pb-6 space-y-5">
        
        {/* Role Purpose Card */}
        <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white font-serif text-sm">
                {activeRole.roleTitle}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-[var(--color-taupe-300)] border border-white/10">
                {activeRole.badge}
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)]">
              {activeRole.purposeStatement}
            </p>
          </div>
        </div>

        {/* Field Visibility Breakdown */}
        <div className="space-y-2.5">
          <span className="section-label block pb-1">
            Field-by-Field Information Governance
          </span>
          <div className="space-y-2">
            {activeRole.fields.map((f, i) => (
              <div
                key={i}
                className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-0.5 max-w-xl">
                  <div className="flex items-center gap-2">
                    <h5 className="text-xs font-bold text-white">
                      {f.name}
                    </h5>
                  </div>
                  <p className="text-[11px] text-[var(--color-text-secondary)]">
                    {f.description}
                  </p>
                  <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] pt-0.5">
                    {f.visibilityNote}
                  </p>
                </div>

                <div className="shrink-0">
                  {getVisibilityBadge(f.visibility)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Footer */}
        <div className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded text-xs text-[var(--color-text-secondary)] flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Strict Architecture Principle:</strong> Career guidance requires context to be useful, but high utility does not require eliminating student privacy. Career OS treats private thoughts and raw reflections as belonging exclusively to the individual.
          </p>
        </div>

      </div>

    </div>
  );
}
