'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  EyeOff, 
  UserCheck, 
  Building2, 
  GraduationCap, 
  Bot,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ACCESS_ROWS = [
  {
    domain: 'Private Career Twin Reflections & Personal Hesitations',
    student: 'Full Control',
    school: 'Zero Access (Confidential)',
    partnerEmployer: 'Zero Access (Strictly Segregated)',
    eduProvider: 'Zero Access',
    rationale: 'Students explore personal uncertainties authentically without fear of institutional or employer judgment.',
  },
  {
    domain: 'Raw Conversational Transcripts with AI Career Mentor',
    student: 'Private Memory',
    school: 'Zero Access (Synthesis Only)',
    partnerEmployer: 'Zero Access',
    eduProvider: 'Zero Access',
    rationale: 'Conversations remain private; counsellors receive high-level pre-session briefs rather than raw transcripts.',
  },
  {
    domain: 'School Pastoral Notes & Safeguarding Records',
    student: 'School Governed',
    school: 'Designated Staff Only (DSL)',
    partnerEmployer: 'Zero Access',
    eduProvider: 'Zero Access',
    rationale: 'Statutory school welfare records remain under school information systems and are never exposed externally.',
  },
  {
    domain: 'Verified Career Passport Credentials & Artifacts',
    student: 'Owner & Curator',
    school: 'Institutional Verification Access',
    partnerEmployer: 'Only if Shared by Student',
    eduProvider: 'Only upon Application',
    rationale: 'Students selectively share verified evidence (capstones, licenses) when applying for opportunities.',
  },
  {
    domain: 'Opportunity Applications (Apprenticeships / Events)',
    student: 'Initiates & Authorizes',
    school: 'Advisory Visibility (Where Appropriate)',
    partnerEmployer: 'Application Specific View',
    eduProvider: 'Applicant Submission Only',
    rationale: 'Employers only receive profile data explicitly authorized by the candidate for a specific vacancy.',
  },
  {
    domain: 'Direct Minor Contact & Unmoderated Outreach',
    student: 'Protected Sanctuary',
    school: 'Institutional Facilitator',
    partnerEmployer: 'Strictly Prohibited',
    eduProvider: 'Strictly Prohibited',
    rationale: 'Commercial cold-sourcing and recruiter unsolicited messaging to users under 18 are blocked platform-wide.',
  },
];

export function PartnerAccessMatrix() {
  return (
    <div
      id="partner-privacy-matrix"
      className="w-full bg-[var(--background-dark-deep)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl space-y-0"
      role="region"
      aria-label="Partner Access and Student Privacy Boundary Matrix"
    >
      {/* Top Header */}
      <div className="p-6 sm:p-8 bg-black/30 backdrop-blur-sm border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)] flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-purple-400" />
            Data Governance &bull; Strict Perimeter Architecture
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
            Being a partner does not make an organisation part of a student&apos;s private Career OS.
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            Explore how data boundaries segregate private developmental exploration from partner opportunities.
          </p>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/60 backdrop-blur-sm text-[var(--color-text-tertiary)] self-start sm:self-auto shrink-0">
          Privacy Boundary Matrix
        </span>
      </div>

      {/* Access Matrix Table */}
      <div className="overflow-x-auto p-6 sm:p-8">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-[var(--color-border-default)] text-[10px] font-mono uppercase text-[var(--color-taupe-300)]">
              <th className="pb-3 pr-4 font-semibold">Information Domain</th>
              <th className="pb-3 px-3 font-semibold text-white">Student</th>
              <th className="pb-3 px-3 font-semibold text-purple-300">School Team</th>
              <th className="pb-3 px-3 font-semibold text-[#6BB8FF]">Partner Employer</th>
              <th className="pb-3 pl-3 font-semibold text-emerald-300">College / University</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border-subtle)]">
            {ACCESS_ROWS.map((row) => (
              <tr key={row.domain} className="hover:bg-white/5 transition-colors">
                <td className="py-4 pr-4 space-y-1 max-w-xs sm:max-w-md">
                  <span className="font-semibold text-white block text-xs">{row.domain}</span>
                  <span className="text-[11px] text-[var(--color-text-tertiary)] block leading-relaxed">{row.rationale}</span>
                </td>

                <td className="py-4 px-3 align-top font-mono text-[11px] text-white">
                  <span className="inline-flex items-center gap-1 text-white font-medium">
                    <Eye className="w-3.5 h-3.5 text-white" />
                    {row.student}
                  </span>
                </td>

                <td className="py-4 px-3 align-top font-mono text-[11px]">
                  <span className={cn('inline-flex items-center gap-1', row.school.includes('Zero Access') ? 'text-rose-400 font-semibold' : 'text-purple-300')}>
                    {row.school.includes('Zero Access') ? <EyeOff className="w-3.5 h-3.5 text-rose-400" /> : <GraduationCap className="w-3.5 h-3.5 text-purple-400" />}
                    {row.school}
                  </span>
                </td>

                <td className="py-4 px-3 align-top font-mono text-[11px]">
                  <span className={cn('inline-flex items-center gap-1', row.partnerEmployer.includes('Zero Access') || row.partnerEmployer.includes('Prohibited') ? 'text-rose-400 font-semibold' : 'text-[#6BB8FF]')}>
                    {row.partnerEmployer.includes('Zero Access') || row.partnerEmployer.includes('Prohibited') ? <Lock className="w-3.5 h-3.5 text-rose-400" /> : <Building2 className="w-3.5 h-3.5 text-[#2F8FFF]" />}
                    {row.partnerEmployer}
                  </span>
                </td>

                <td className="py-4 pl-3 align-top font-mono text-[11px]">
                  <span className={cn('inline-flex items-center gap-1', row.eduProvider.includes('Zero Access') || row.eduProvider.includes('Prohibited') ? 'text-rose-400 font-semibold' : 'text-emerald-300')}>
                    {row.eduProvider.includes('Zero Access') || row.eduProvider.includes('Prohibited') ? <Lock className="w-3.5 h-3.5 text-rose-400" /> : <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />}
                    {row.eduProvider}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Statement */}
      <div className="p-4 bg-black/30 backdrop-blur-sm border-t border-[var(--color-border-default)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-text-tertiary)]">
        <div className="flex items-center gap-2 text-white">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong>Core Rule:</strong> Partnership status is not a data-access permission. Commercial organisations never browse minor profiles.
          </span>
        </div>
        <span className="font-mono text-[11px] text-[var(--color-taupe-300)] shrink-0">
          Youth Sanctuary Standard
        </span>
      </div>
    </div>
  );
}
