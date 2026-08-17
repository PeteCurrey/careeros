'use client';

import React from 'react';
import { PRIVACY_ACCESS_FIELDS } from './educatorsData';
import { cn } from '@/lib/utils';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  EyeOff, 
  UserCheck, 
  Bot, 
  Briefcase,
  Sparkles
} from 'lucide-react';

export function PrivacyAccessDiagram() {
  return (
    <div
      id="privacy-access-model"
      className="w-full bg-[var(--background-dark-deep)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl space-y-0"
      role="region"
      aria-label="Career OS Purpose-Based Privacy Access Architecture"
    >
      {/* Top Header Bar */}
      <div className="p-6 sm:p-8 bg-black/30 backdrop-blur-sm border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)] flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-purple-400" />
            Governance Architecture &bull; Purpose-Based Access Model
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
            Useful Context is Not the Same as Unlimited Access.
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            Explore how data boundaries segregate private student reflections from educator guidance and external employers.
          </p>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/60 backdrop-blur-sm text-[var(--color-text-tertiary)] self-start sm:self-auto shrink-0">
          Privacy Boundary Model
        </span>
      </div>

      {/* Access Matrix Table */}
      <div className="overflow-x-auto p-6 sm:p-8">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-[var(--color-border-default)] text-[10px] font-mono uppercase text-[var(--color-taupe-300)]">
              <th className="pb-3 pr-4 font-semibold">Information Domain</th>
              <th className="pb-3 px-3 font-semibold text-white">Student</th>
              <th className="pb-3 px-3 font-semibold text-purple-300">AI Career Mentor</th>
              <th className="pb-3 px-3 font-semibold text-emerald-300">School Educator</th>
              <th className="pb-3 pl-3 font-semibold text-amber-300">External Employer</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border-subtle)]">
            {PRIVACY_ACCESS_FIELDS.map((row) => (
              <tr key={row.field} className="hover:bg-white/5 transition-colors">
                <td className="py-4 pr-4 space-y-1">
                  <span className="font-semibold text-white block text-xs">{row.field}</span>
                  <span className="text-[11px] text-[var(--color-text-tertiary)] block leading-relaxed">{row.note}</span>
                </td>

                <td className="py-4 px-3 align-top font-mono text-[11px] text-white">
                  <span className="inline-flex items-center gap-1 text-white font-medium">
                    <Eye className="w-3.5 h-3.5 text-white" />
                    {row.student}
                  </span>
                </td>

                <td className="py-4 px-3 align-top font-mono text-[11px]">
                  <span className={cn('inline-flex items-center gap-1', row.mentor.includes('Conversational') ? 'text-purple-300' : 'text-purple-400')}>
                    <Bot className="w-3.5 h-3.5" />
                    {row.mentor}
                  </span>
                </td>

                <td className="py-4 px-3 align-top font-mono text-[11px]">
                  <span className={cn('inline-flex items-center gap-1', row.educator.includes('Zero Access') ? 'text-rose-400 font-semibold' : 'text-emerald-300')}>
                    {row.educator.includes('Zero Access') ? (
                      <EyeOff className="w-3.5 h-3.5 text-rose-400" />
                    ) : (
                      <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                    {row.educator}
                  </span>
                </td>

                <td className="py-4 pl-3 align-top font-mono text-[11px]">
                  <span className={cn('inline-flex items-center gap-1', row.employer.includes('Zero Access') || row.employer.includes('Restricted') ? 'text-rose-400 font-semibold' : 'text-amber-300')}>
                    {row.employer.includes('Zero Access') || row.employer.includes('Restricted') ? (
                      <Lock className="w-3.5 h-3.5 text-rose-400" />
                    ) : (
                      <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                    )}
                    {row.employer}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Governance Guarantee */}
      <div className="p-4 bg-black/30 backdrop-blur-sm border-t border-[var(--color-border-default)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[var(--color-text-tertiary)]">
        <div className="flex items-center gap-2 text-white">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong>Governed Privacy:</strong> Illustrative access model — actual access depends on account relationship, institutional policy, and explicit student consent.
          </span>
        </div>
        <span className="font-mono text-[11px] text-[var(--color-taupe-300)] shrink-0">
          Strict Youth Safeguards
        </span>
      </div>
    </div>
  );
}
