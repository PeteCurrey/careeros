'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Eye,
  EyeOff,
  UserCheck,
  Sparkles,
  Building2,
  Home,
  ShieldAlert,
  FileText,
  Info,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SafetyRoleAccessDefinition {
  id: string;
  roleTitle: string;
  roleSubtitle: string;
  badge: string;
  badgeVariant: 'emerald' | 'blue' | 'purple' | 'amber' | 'red';
  icon: React.ComponentType<{ className?: string }>;
  purposeStatement: string;
  legalContext: string;
  fields: {
    name: string;
    description: string;
    visibility: 'FULL_ACCESS' | 'PERMISSIONED_SUMMARY' | 'STRICTLY_PRIVATE' | 'RESTRICTED_GATE';
    visibilityNote: string;
  }[];
}

const SAFETY_ACCESS_ROLES: SafetyRoleAccessDefinition[] = [
  {
    id: 'student',
    roleTitle: 'Student User',
    roleSubtitle: 'Primary Account Subject',
    badge: '100% Personal Sovereign Access',
    badgeVariant: 'emerald',
    icon: Sparkles,
    purposeStatement: 'Full, unhindered visibility into personal reflections, conversation history, verified evidence artifacts, exploration records, and active permission grants.',
    legalContext: 'The student remains the primary subject of their career development. Personal reflections are not public records by default.',
    fields: [
      {
        name: 'Private Mentor Exploratory Dialogue',
        description: 'Raw exploratory prompts, candid career doubts, personal uncertainties, and iterative reflection chats',
        visibility: 'FULL_ACCESS',
        visibilityNote: 'Unrestricted full access to own personal conversation history',
      },
      {
        name: 'Career Pathways Explored',
        description: 'Comparative industry reviews, apprenticeship vs degree models, exploratory sector bookmarks',
        visibility: 'FULL_ACCESS',
        visibilityNote: 'Full personal access to all explored options',
      },
      {
        name: 'Stated Advising Questions & Goals',
        description: 'Explicitly flagged topics and questions prepared for human counsellor or mentor follow-up',
        visibility: 'FULL_ACCESS',
        visibilityNote: 'Fully editable, configurable, and controllable by student',
      },
      {
        name: 'Career Passport Evidence Artifacts',
        description: 'Verified certificates, portfolio project documentation, competition submissions, skills badges',
        visibility: 'FULL_ACCESS',
        visibilityNote: 'Portable personal record that remains with the student after graduation',
      },
      {
        name: 'Personal Circumstances & Sensitive Context',
        description: 'Family commitments, financial barriers, disability accommodations, personal disclosures',
        visibility: 'FULL_ACCESS',
        visibilityNote: 'Strictly segregated personal layer subject to data minimisation',
      },
      {
        name: 'Direct Contact Details & Identifiers',
        description: 'Full legal name, school email, home address, phone number, institutional ID',
        visibility: 'FULL_ACCESS',
        visibilityNote: 'Managed under account profile and privacy settings',
      },
      {
        name: 'Safety & Concern Reports',
        description: 'Formal user reports submitted regarding inappropriate opportunities, employers, or safety concerns',
        visibility: 'FULL_ACCESS',
        visibilityNote: 'Student can track submission status and receive support outcomes',
      },
    ],
  },
  {
    id: 'counsellor',
    roleTitle: 'School Career Counsellor',
    roleSubtitle: 'Academic & Pathway Advisor',
    badge: 'Purpose-Based Advising Context',
    badgeVariant: 'blue',
    icon: UserCheck,
    purposeStatement: 'Receives structured preparatory briefs, student-flagged discussion topics, and verified evidence to conduct high-impact 1:1 human career guidance sessions.',
    legalContext: 'Operates under school educational remit. Receives scoped summaries necessary for educational guidance without omniscient transcript surveillance.',
    fields: [
      {
        name: 'Private Mentor Exploratory Dialogue',
        description: 'Raw exploratory prompts, candid career doubts, personal uncertainties, and iterative reflection chats',
        visibility: 'STRICTLY_PRIVATE',
        visibilityNote: 'Hidden & Segregated — Raw exploratory dialogue is private to the student',
      },
      {
        name: 'Career Pathways Explored',
        description: 'Comparative industry reviews, apprenticeship vs degree models, exploratory sector bookmarks',
        visibility: 'PERMISSIONED_SUMMARY',
        visibilityNote: 'Aggregated pathway interest themes to support advising sessions',
      },
      {
        name: 'Stated Advising Questions & Goals',
        description: 'Explicitly flagged topics and questions prepared for human counsellor or mentor follow-up',
        visibility: 'FULL_ACCESS',
        visibilityNote: 'Fully visible to enable counsellor to prepare tailored 1:1 sessions',
      },
      {
        name: 'Career Passport Evidence Artifacts',
        description: 'Verified certificates, portfolio project documentation, competition submissions, skills badges',
        visibility: 'FULL_ACCESS',
        visibilityNote: 'Visible to assist student with university/apprenticeship references',
      },
      {
        name: 'Personal Circumstances & Sensitive Context',
        description: 'Family commitments, financial barriers, disability accommodations, personal disclosures',
        visibility: 'STRICTLY_PRIVATE',
        visibilityNote: 'Hidden by default unless student explicitly chooses to share in an advising brief',
      },
      {
        name: 'Direct Contact Details & Identifiers',
        description: 'Full legal name, school email, home address, phone number, institutional ID',
        visibility: 'FULL_ACCESS',
        visibilityNote: 'Managed via existing school administrative roster',
      },
      {
        name: 'Safety & Concern Reports',
        description: 'Formal user reports submitted regarding inappropriate opportunities, employers, or safety concerns',
        visibility: 'PERMISSIONED_SUMMARY',
        visibilityNote: 'Notified of institutional concern trends; individual reports route to Safeguarding Lead',
      },
    ],
  },
  {
    id: 'safeguarding-lead',
    roleTitle: 'Designated Safeguarding Lead',
    roleSubtitle: 'Institutional Child Protection Role',
    badge: 'Safeguarding & Escalation Scope',
    badgeVariant: 'amber',
    icon: ShieldAlert,
    purposeStatement: 'Holds an emergency escalation role for investigating reported safety concerns, severe wellbeing disclosures, or inappropriate adult contact.',
    legalContext: 'Access is strictly audited, purpose-limited, and governed by school safeguarding protocols. Not a general browsing role for academic monitoring.',
    fields: [
      {
        name: 'Private Mentor Exploratory Dialogue',
        description: 'Raw exploratory prompts, candid career doubts, personal uncertainties, and iterative reflection chats',
        visibility: 'RESTRICTED_GATE',
        visibilityNote: 'Accessible ONLY upon formal safeguarding escalation or urgent welfare trigger with logged audit trail',
      },
      {
        name: 'Career Pathways Explored',
        description: 'Comparative industry reviews, apprenticeship vs degree models, exploratory sector bookmarks',
        visibility: 'PERMISSIONED_SUMMARY',
        visibilityNote: 'Visible if relevant to investigating an exploitative opportunity lead',
      },
      {
        name: 'Stated Advising Questions & Goals',
        description: 'Explicitly flagged topics and questions prepared for human counsellor or mentor follow-up',
        visibility: 'PERMISSIONED_SUMMARY',
        visibilityNote: 'Accessible for context during formal student welfare review',
      },
      {
        name: 'Career Passport Evidence Artifacts',
        description: 'Verified certificates, portfolio project documentation, competition submissions, skills badges',
        visibility: 'PERMISSIONED_SUMMARY',
        visibilityNote: 'Accessible if credential legitimacy or external provider is under review',
      },
      {
        name: 'Personal Circumstances & Sensitive Context',
        description: 'Family commitments, financial barriers, disability accommodations, personal disclosures',
        visibility: 'RESTRICTED_GATE',
        visibilityNote: 'Accessible under documented safeguarding need, strictly logged to audit ledger',
      },
      {
        name: 'Direct Contact Details & Identifiers',
        description: 'Full legal name, school email, home address, phone number, institutional ID',
        visibility: 'FULL_ACCESS',
        visibilityNote: 'Full institutional directory access for verified safeguarding interventions',
      },
      {
        name: 'Safety & Concern Reports',
        description: 'Formal user reports submitted regarding inappropriate opportunities, employers, or safety concerns',
        visibility: 'FULL_ACCESS',
        visibilityNote: 'Direct priority inbox for student and staff reported safeguarding alerts',
      },
    ],
  },
  {
    id: 'mentor-engine',
    roleTitle: 'Career OS AI Mentor',
    roleSubtitle: 'System-Assigned Guidance Engine',
    badge: 'Confidential Guidance Context',
    badgeVariant: 'purple',
    icon: Sparkles,
    purposeStatement: 'Maintains conversational memory strictly to deliver unbiased, multi-year developmental career reflection, pathway deconstruction, and interview preparation.',
    legalContext: 'Automated processing strictly within the career guidance remit. Prohibited from training public models on private dialogue or monetising data.',
    fields: [
      {
        name: 'Private Mentor Exploratory Dialogue',
        description: 'Raw exploratory prompts, candid career doubts, personal uncertainties, and iterative reflection chats',
        visibility: 'FULL_ACCESS',
        visibilityNote: 'Maintained in persistent session memory under isolated cryptographic tenancy',
      },
      {
        name: 'Career Pathways Explored',
        description: 'Comparative industry reviews, apprenticeship vs degree models, exploratory sector bookmarks',
        visibility: 'FULL_ACCESS',
        visibilityNote: 'Used to provide balanced, non-deterministic occupational options',
      },
      {
        name: 'Stated Advising Questions & Goals',
        description: 'Explicitly flagged topics and questions prepared for human counsellor or mentor follow-up',
        visibility: 'FULL_ACCESS',
        visibilityNote: 'Helps structure questions for student to take into human 1:1 meetings',
      },
      {
        name: 'Career Passport Evidence Artifacts',
        description: 'Verified certificates, portfolio project documentation, competition submissions, skills badges',
        visibility: 'FULL_ACCESS',
        visibilityNote: 'Grounds advice in demonstrated, verified capabilities',
      },
      {
        name: 'Personal Circumstances & Sensitive Context',
        description: 'Family commitments, financial barriers, disability accommodations, personal disclosures',
        visibility: 'PERMISSIONED_SUMMARY',
        visibilityNote: 'Handled with ethical guardrails; never sold or transferred to advertisers',
      },
      {
        name: 'Direct Contact Details & Identifiers',
        description: 'Full legal name, school email, home address, phone number, institutional ID',
        visibility: 'STRICTLY_PRIVATE',
        visibilityNote: 'AI operates on pseudonymised identifiers; PII stripped from core model context',
      },
      {
        name: 'Safety & Concern Reports',
        description: 'Formal user reports submitted regarding inappropriate opportunities, employers, or safety concerns',
        visibility: 'STRICTLY_PRIVATE',
        visibilityNote: 'Reports route directly to human moderation systems, not processed by generative AI',
      },
    ],
  },
  {
    id: 'guardian',
    roleTitle: 'Parent / Legal Guardian',
    roleSubtitle: 'Family Oversight & Consent Holder',
    badge: 'Age & Relationship Configured',
    badgeVariant: 'emerald',
    icon: Home,
    purposeStatement: 'Enables families to support their young person, review approved pathways, and exercise legal privacy rights in alignment with age thresholds and statutory standards.',
    legalContext: 'Under 13 / 13–15 accounts require verified guardian or institutional consent. 16+ accounts transition toward young person autonomy with family alignment.',
    fields: [
      {
        name: 'Private Mentor Exploratory Dialogue',
        description: 'Raw exploratory prompts, candid career doubts, personal uncertainties, and iterative reflection chats',
        visibility: 'STRICTLY_PRIVATE',
        visibilityNote: 'Preserves a candid, psychologically safe space for career uncertainty and reflection',
      },
      {
        name: 'Career Pathways Explored',
        description: 'Comparative industry reviews, apprenticeship vs degree models, exploratory sector bookmarks',
        visibility: 'PERMISSIONED_SUMMARY',
        visibilityNote: 'High-level summary of industries, education routes, and careers explored',
      },
      {
        name: 'Stated Advising Questions & Goals',
        description: 'Explicitly flagged topics and questions prepared for human counsellor or mentor follow-up',
        visibility: 'PERMISSIONED_SUMMARY',
        visibilityNote: 'Shared where student and family collaborate on career planning',
      },
      {
        name: 'Career Passport Evidence Artifacts',
        description: 'Verified certificates, portfolio project documentation, competition submissions, skills badges',
        visibility: 'FULL_ACCESS',
        visibilityNote: 'Full view of student accomplishments, credentials, and achievements',
      },
      {
        name: 'Personal Circumstances & Sensitive Context',
        description: 'Family commitments, financial barriers, disability accommodations, personal disclosures',
        visibility: 'STRICTLY_PRIVATE',
        visibilityNote: 'Private personal layer; shared in person at family discretion',
      },
      {
        name: 'Direct Contact Details & Identifiers',
        description: 'Full legal name, school email, home address, phone number, institutional ID',
        visibility: 'FULL_ACCESS',
        visibilityNote: 'Linked to verified guardian account for safety and administrative notices',
      },
      {
        name: 'Safety & Concern Reports',
        description: 'Formal user reports submitted regarding inappropriate opportunities, employers, or safety concerns',
        visibility: 'FULL_ACCESS',
        visibilityNote: 'Guardians can submit safety reports and track resolutions directly',
      },
    ],
  },
  {
    id: 'employer',
    roleTitle: 'Commercial Employer / Recruiter',
    roleSubtitle: 'External Opportunity Provider',
    badge: 'Strict Minor Safeguarding Boundary',
    badgeVariant: 'red',
    icon: Building2,
    purposeStatement: 'Strictly prohibited from browsing minor student directories, cold-soliciting students, or accessing private career data. Sits entirely outside the private core.',
    legalContext: 'Zero recruiter search capability over minor profiles. Opportunity interaction occurs strictly through verified, student-initiated applications or approved school programmes.',
    fields: [
      {
        name: 'Private Mentor Exploratory Dialogue',
        description: 'Raw exploratory prompts, candid career doubts, personal uncertainties, and iterative reflection chats',
        visibility: 'STRICTLY_PRIVATE',
        visibilityNote: '100% Inaccessible — Absolute segregation from commercial recruiters',
      },
      {
        name: 'Career Pathways Explored',
        description: 'Comparative industry reviews, apprenticeship vs degree models, exploratory sector bookmarks',
        visibility: 'STRICTLY_PRIVATE',
        visibilityNote: '100% Inaccessible — Zero behavioural advertising or tracking',
      },
      {
        name: 'Stated Advising Questions & Goals',
        description: 'Explicitly flagged topics and questions prepared for human counsellor or mentor follow-up',
        visibility: 'STRICTLY_PRIVATE',
        visibilityNote: '100% Inaccessible to commercial employers',
      },
      {
        name: 'Career Passport Evidence Artifacts',
        description: 'Verified certificates, portfolio project documentation, competition submissions, skills badges',
        visibility: 'RESTRICTED_GATE',
        visibilityNote: 'Accessible ONLY when the student explicitly submits an application for an approved opportunity',
      },
      {
        name: 'Personal Reflections & Sensitive Context',
        description: 'Family commitments, financial barriers, disability accommodations, personal disclosures',
        visibility: 'STRICTLY_PRIVATE',
        visibilityNote: '100% Inaccessible — Zero personal reflection data shared',
      },
      {
        name: 'Direct Contact Details & Identifiers',
        description: 'Full legal name, school email, home address, phone number, institutional ID',
        visibility: 'RESTRICTED_GATE',
        visibilityNote: 'Revealed ONLY after student application and mutual institutional introduction',
      },
      {
        name: 'Safety & Concern Reports',
        description: 'Formal user reports submitted regarding inappropriate opportunities, employers, or safety concerns',
        visibility: 'STRICTLY_PRIVATE',
        visibilityNote: 'Inaccessible; reports are handled internally by CareerOS and school safeguarding leads',
      },
    ],
  },
];

export function StudentSafetyAccessMatrix() {
  const [selectedRoleId, setSelectedRoleId] = useState<string>('counsellor');
  const activeRole = SAFETY_ACCESS_ROLES.find((r) => r.id === selectedRoleId) ?? SAFETY_ACCESS_ROLES[1]!;

  const renderBadge = (vis: string) => {
    switch (vis) {
      case 'FULL_ACCESS':
        return (
          <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[10px] font-mono font-semibold flex items-center gap-1.5 whitespace-nowrap">
            <Eye className="w-3 h-3 text-emerald-400" /> Full Access
          </span>
        );
      case 'PERMISSIONED_SUMMARY':
        return (
          <span className="px-2.5 py-1 rounded bg-blue-500/10 text-[#6BB8FF] border border-blue-500/20 text-[10px] font-mono font-semibold flex items-center gap-1.5 whitespace-nowrap">
            <ShieldCheck className="w-3 h-3 text-[#2F8FFF]" /> Purpose Summary
          </span>
        );
      case 'RESTRICTED_GATE':
        return (
          <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[10px] font-mono font-semibold flex items-center gap-1.5 whitespace-nowrap">
            <Lock className="w-3 h-3 text-amber-400" /> Gated / Audit Trigger
          </span>
        );
      case 'STRICTLY_PRIVATE':
      default:
        return (
          <span className="px-2.5 py-1 rounded bg-red-500/10 text-red-300 border border-red-500/20 text-[10px] font-mono font-semibold flex items-center gap-1.5 whitespace-nowrap">
            <EyeOff className="w-3 h-3 text-red-400" /> Strictly Private
          </span>
        );
    }
  };

  return (
    <div className="w-full bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-editorial space-y-6" id="information-governance-matrix">
      
      {/* Header Bar */}
      <div className="bg-[var(--background-dark-deep)] p-5 sm:p-7 border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent-blue)] font-bold">
              Purpose-Based Information Matrix
            </span>
          </div>
          <h3 className="text-xl font-serif font-normal text-white">
            Who Can See What in a Student&apos;s Career OS?
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Explore how data access differs across roles based on purpose, relationship, and safeguarding need.
          </p>
        </div>

        <div className="shrink-0">
          <span className="text-[10px] font-mono px-3 py-1.5 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)] block">
            Illustrative Access Architecture
          </span>
        </div>
      </div>

      {/* Role Selection Grid */}
      <div className="px-5 sm:px-7 pt-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {SAFETY_ACCESS_ROLES.map((role) => {
            const isSelected = role.id === selectedRoleId;
            const Icon = role.icon;
            return (
              <button
                key={role.id}
                type="button"
                onClick={() => setSelectedRoleId(role.id)}
                className={cn(
                  'p-3.5 rounded-[var(--radius-sm)] border text-left transition-all cursor-pointer flex flex-col justify-between gap-2.5',
                  isSelected
                    ? 'bg-white/15 border-white/40 text-white shadow-xs'
                    : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-white/20'
                )}
              >
                <div className="flex items-center justify-between">
                  <Icon className={cn('w-4 h-4', isSelected ? 'text-[#2F8FFF]' : 'text-[var(--color-taupe-300)]')} />
                  <span className={cn('text-[9px] font-mono px-1.5 py-0.5 rounded', isSelected ? 'bg-white/20 text-white font-bold' : 'bg-white/5 text-[var(--color-taupe-400)]')}>
                    {isSelected ? 'ACTIVE' : 'VIEW'}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white line-clamp-1">
                    {role.roleTitle}
                  </h4>
                  <p className="text-[10px] text-[var(--color-text-tertiary)] line-clamp-1 mt-0.5">
                    {role.roleSubtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Role Content */}
      <div className="px-5 sm:px-7 pb-7 space-y-6">
        
        {/* Role Statement Card */}
        <div className="p-4 sm:p-5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white font-serif text-base">
                {activeRole.roleTitle}
              </span>
              <span className="text-xs text-[var(--color-text-tertiary)]">
                ({activeRole.roleSubtitle})
              </span>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/10 text-[var(--color-taupe-300)] border border-white/10 self-start sm:self-auto">
              {activeRole.badge}
            </span>
          </div>

          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed pt-1">
            <strong>Operating Purpose:</strong> {activeRole.purposeStatement}
          </p>

          <p className="text-[11px] text-[var(--color-text-tertiary)] leading-relaxed pt-1 border-t border-[var(--color-border-subtle)] font-mono">
            <strong>Governance Context:</strong> {activeRole.legalContext}
          </p>
        </div>

        {/* Fields Matrix Table */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="section-label">
              Field-by-Field Information Governance
            </span>
            <span className="text-[11px] text-[var(--color-text-tertiary)]">
              {activeRole.fields.length} core data categories evaluated
            </span>
          </div>

          <div className="space-y-2">
            {activeRole.fields.map((f, i) => (
              <div
                key={i}
                className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-2">
                    <h5 className="text-xs font-bold text-white">
                      {f.name}
                    </h5>
                  </div>
                  <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                    {f.description}
                  </p>
                  <p className="text-[10px] font-mono text-[var(--color-taupe-300)] pt-0.5">
                    {f.visibilityNote}
                  </p>
                </div>

                <div className="shrink-0 self-start sm:self-center">
                  {renderBadge(f.visibility)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Editorial Principle */}
        <div className="p-4 bg-[var(--background-dark-deep)] border border-[var(--color-border-subtle)] rounded-[var(--radius-sm)] flex items-start gap-3 text-xs text-[var(--color-text-secondary)]">
          <Info className="w-4 h-4 text-[var(--accent-blue)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Core Safeguarding Principle:</strong> Protecting a student does not require eliminating all student privacy. Career OS is designed around purpose-based, role-delimited access where educators and safeguarding leads receive what is necessary for guidance and protection — without turning career reflection into continuous surveillance.
          </p>
        </div>

      </div>

    </div>
  );
}
