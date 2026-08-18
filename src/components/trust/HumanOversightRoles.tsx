'use client';

import React from 'react';
import { 
  User, 
  ShieldCheck, 
  GraduationCap, 
  Building2, 
  HeartPulse, 
  Lock, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function HumanOversightRoles() {
  const roles = [
    {
      role: 'The Individual User',
      stakeholder: 'Student / Professional Candidate',
      oversight: 'Sovereign authority to accept, edit, dispute, or ignore any AI recommendation. Full control over Career Passport sharing.',
      boundaries: 'Zero algorithmic lock-in; user decides what evidence is attached to applications.',
      icon: User,
      badgeColor: 'text-purple-300 bg-purple-950/40 border-purple-500/30',
    },
    {
      role: 'Schools & Educators',
      stakeholder: 'Counsellors, Teachers & DSLs',
      oversight: 'Access pre-session synthesis briefs before 1:1 meetings. Statutory safeguarding leads maintain immediate escalation channels.',
      boundaries: 'Zero access to unconsented private student reflections or raw conversational memory.',
      icon: GraduationCap,
      badgeColor: 'text-emerald-300 bg-emerald-950/40 border-emerald-500/30',
    },
    {
      role: 'Employers & Hiring Teams',
      stakeholder: 'Corporate Hiring Managers',
      oversight: 'Review candidate capability profiles manually. Make 100% of final interview, hiring, and rejection decisions.',
      boundaries: 'Strictly prohibited from cold-messaging minors or using autonomous candidate rejection algorithms.',
      icon: Building2,
      badgeColor: 'text-[#6BB8FF] bg-blue-950/40 border-blue-500/30',
    },
    {
      role: 'CareerOS Trust & Safety',
      stakeholder: 'Internal Governance Council',
      oversight: 'Continuously monitors model latency, error telemetry, and adverse impact metrics. Manages emergency kill-switches.',
      boundaries: 'Subject to external regulatory audits and published transparency registers.',
      icon: ShieldCheck,
      badgeColor: 'text-amber-300 bg-amber-950/40 border-amber-500/30',
    },
  ];

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {roles.map((r) => {
          const Icon = r.icon;
          return (
            <div
              key={r.role}
              className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] hover:border-white/20 transition-all flex flex-col justify-between space-y-4 text-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={cn('text-[10px] font-mono uppercase px-2 py-0.5 rounded border font-semibold', r.badgeColor)}>
                    {r.stakeholder}
                  </span>
                  <Icon className="w-4 h-4 text-[var(--color-text-tertiary)]" />
                </div>
                <h4 className="text-base font-serif text-white font-normal">
                  {r.role}
                </h4>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#6BB8FF] font-semibold block">
                    Oversight Responsibilities:
                  </span>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {r.oversight}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--color-border-subtle)] space-y-1">
                <span className="text-[10px] font-mono uppercase text-rose-300 font-semibold block">
                  Strict Governance Perimeter:
                </span>
                <p className="text-white/80 font-medium">
                  {r.boundaries}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
