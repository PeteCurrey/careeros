import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { ShieldAlert, ShieldCheck, Lock, ExternalLink } from 'lucide-react';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';

export function MentorBoundariesBlock() {
  const boundaries = [
    {
      title: 'AI Persona Disclosure',
      desc: 'All mentors are artificial intelligence personas. They never pretend to be living humans, therapists, or certified financial advisers.',
    },
    {
      title: 'No Autonomous Hiring Power',
      desc: 'Mentors do not make employment selection decisions, reject applications, or guarantee specific salary outcomes.',
    },
    {
      title: 'Default-Private Conversations',
      desc: 'Mentor consultations are confidential to the candidate. Employers cannot browse chat histories without explicit consent.',
    },
    {
      title: 'Minor Safeguarding Gating',
      desc: 'Youth accounts (13–15) operate under strict school and guardian safeguarding controls with employer messaging hard-blocks.',
    },
  ];

  return (
    <div className="p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-border-default)] pb-4">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-6 h-6 text-[#DDD36D]" />
          <div>
            <h3 className="text-lg font-bold text-white">Governance, Safety & Ethical Boundaries</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Strict policy controls governing AI Career Mentor behavior.
            </p>
          </div>
        </div>
        <TechnicalBadge variant="champagne">MANDATORY COMPLIANCE</TechnicalBadge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {boundaries.map((b) => (
          <div key={b.title} className="p-4 rounded bg-white/5 border border-white/5 space-y-1.5">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#34D399]" />
              <span>{b.title}</span>
            </h4>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {b.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-[var(--color-border-default)] flex flex-wrap items-center gap-4 text-xs font-semibold">
        <Link href={ROUTES.TRUST_RESPONSIBLE_AI} className="text-[#6BB8FF] hover:underline inline-flex items-center gap-1">
          <span>Responsible AI Framework</span>
          <ExternalLink className="w-3 h-3" />
        </Link>
        <Link href={ROUTES.TRUST_AI_TRANSPARENCY} className="text-[#6BB8FF] hover:underline inline-flex items-center gap-1">
          <span>AI Transparency Register</span>
          <ExternalLink className="w-3 h-3" />
        </Link>
        <Link href={ROUTES.TRUST_HUMAN_OVERSIGHT} className="text-[#6BB8FF] hover:underline inline-flex items-center gap-1">
          <span>Human Oversight Policy</span>
          <ExternalLink className="w-3 h-3" />
        </Link>
        <Link href={ROUTES.STANDARDS_MENTOR_CODE} className="text-[#6BB8FF] hover:underline inline-flex items-center gap-1">
          <span>AI Mentor Code of Ethics</span>
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
