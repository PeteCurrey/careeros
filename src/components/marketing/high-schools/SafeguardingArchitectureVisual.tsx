'use client';

import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { 
  ShieldCheck, 
  Lock, 
  UserCheck, 
  AlertTriangle, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  FileText
} from 'lucide-react';

export function SafeguardingArchitectureVisual() {
  const ageTiers = [
    {
      tier: 'Age 16+',
      badge: 'Direct Account Permitted',
      badgeStyle: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      headline: 'Direct Individual Account',
      description: 'Permitted to register an individual Career OS account under product policy. Retains full personal control over Career Passport credentials and Career Twin reflections.',
      guardrails: [
        'Commercial employers still blocked from unsolicited cold-contact until introduction is mutually consented',
        'Optional connection to school cohort advising where school holds an active partnership',
        'Full sovereign ownership of verifiable evidence that continues after graduation',
      ],
      legalNote: 'Account eligibility threshold under Career OS policy; distinct from statutory legal age of majority.',
    },
    {
      tier: 'Age 13–15',
      badge: 'Institutional or Guardian Arrangement',
      badgeStyle: 'bg-blue-500/10 text-[#6BB8FF] border-blue-500/30',
      headline: 'School-Governed or Verified Guardian Access',
      description: 'Access enabled through an approved high school / institutional partnership or verified parent/guardian arrangement with age-appropriate exploration safeguards.',
      guardrails: [
        'Strict zero-recruiter visibility: no commercial employer access to profile or exploration data',
        'Exploratory Career Mentor operates under heightened content moderation guardrails',
        'School counselling teams receive structured pre-conversation briefs with zero transcript surveillance',
      ],
      legalNote: 'Requires institutional authorisation or guardian verification in compliance with applicable youth privacy standards.',
    },
    {
      tier: 'Under 13',
      badge: 'Strict Institutional Authorization Only',
      badgeStyle: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
      headline: 'No Open Consumer Registration',
      description: 'Zero direct consumer registration. Supported strictly through permitted institutional arrangements where authorised under educational data privacy laws.',
      guardrails: [
        'Strict data minimisation: zero third-party data transmission or persistent commercial tracking',
        'Direct parent/school administrative consent and oversight mechanisms',
        'Limited to approved curriculum career exploration modules',
      ],
      legalNote: 'Structured to support COPPA and institutional educational record compliance without broad marketing claims.',
    },
  ];

  return (
    <div className="w-full space-y-8" id="safeguarding-model">
      
      {/* 3 Age Tier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ageTiers.map((tier, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-7 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-5 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-3">
                <span className="text-sm font-bold text-white font-mono">
                  {tier.tier}
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${tier.badgeStyle}`}>
                  {tier.badge}
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="text-base font-serif font-medium text-white">
                  {tier.headline}
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono uppercase text-[#6BB8FF] font-semibold block">
                  Product Safeguards:
                </span>
                <ul className="space-y-1.5 text-xs text-[var(--color-text-secondary)]">
                  {tier.guardrails.map((g, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#2F8FFF] font-bold mt-0.5">&bull;</span>
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--color-border-subtle)] text-[10px] font-mono text-[var(--color-text-tertiary)] italic">
              {tier.legalNote}
            </div>
          </div>
        ))}
      </div>

      {/* Employer Minor Barrier Callout */}
      <div className="p-6 sm:p-7 bg-[var(--background-dark-deep)] border border-[rgba(47,143,255,0.22)] rounded-[var(--radius-card)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--color-border-default)] pb-4">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <h4 className="text-base font-serif font-medium text-white">
              Institutional Safeguard: No Unsolicited Employer Access to Minor Students
            </h4>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)]">
            Core Policy Standard
          </span>
        </div>

        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
          Career OS is an educational infrastructure platform, not a commercial candidate directory. Commercial recruiters cannot search, browse, or cold-contact minor students. Where student-to-employer opportunities (such as degree apprenticeships or certified work placements) are eventually explored, interactions require institutional or guardian authorization, verified student application, and strict communication controls.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs">
          <Link
            href={ROUTES.TRUST_SAFEGUARDING}
            className="text-white hover:text-[#6BB8FF] font-semibold underline underline-offset-4 inline-flex items-center gap-1"
          >
            Safeguarding Architecture <ArrowRight className="w-3 h-3" />
          </Link>
          <Link
            href={ROUTES.REGULATORY_STUDENT_PRIVACY}
            className="text-[var(--color-text-secondary)] hover:text-white underline underline-offset-4 inline-flex items-center gap-1"
          >
            Student Privacy Framework <ArrowRight className="w-3 h-3" />
          </Link>
          <Link
            href={ROUTES.LEGAL_PARENT_GUARDIAN}
            className="text-[var(--color-text-secondary)] hover:text-white underline underline-offset-4 inline-flex items-center gap-1"
          >
            Parent &amp; Guardian Notice <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

    </div>
  );
}
