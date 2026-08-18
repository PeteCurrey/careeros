'use client';

import React from 'react';
import Link from 'next/link';
import { ComplianceFramework } from '@/types/compliance';
import { ComplianceStatusBadge } from './ComplianceStatusBadge';
import { Lock, UserCheck, ShieldCheck, CheckCircle2, ArrowRight, Ban, FileText } from 'lucide-react';
import { ROUTES } from '@/lib/routes';

interface StatePrivacySectionProps {
  framework?: ComplianceFramework;
}

const PRIVACY_RIGHTS = [
  { title: 'Right to Know & Access', description: 'Request full transparency regarding what personal information is collected, used, and processed.' },
  { title: 'Right to Deletion (Erase)', description: 'Permanently purge personal data across all active database stores and backups with cryptographic verification.' },
  { title: 'Right to Correction (Rectify)', description: 'Correct inaccurate personal information, employment histories, or verified academic credentials.' },
  { title: 'Data Portability', description: 'Export complete Career Passport, Career Twin profiles, and activity logs in structured, machine-readable JSON.' },
  { title: 'Opt-Out of Automated Profiling', description: 'Disable automated recommendation models and algorithmic matching with zero platform degradation.' },
  { title: 'Global Privacy Control (GPC)', description: 'Automated edge recognition of browser-level Global Privacy Control (GPC) universal opt-out signals.' },
];

export function StatePrivacySection({ framework }: StatePrivacySectionProps) {
  return (
    <section id="privacy-rights" className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#6BB8FF]">
            <Lock className="w-3.5 h-3.5" />
            <span>US STATE OMNIBUS PRIVACY REGIMES (CCPA / CPRA / CPA / VCDPA)</span>
          </div>
          {framework && <ComplianceStatusBadge framework={framework} />}
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
          Privacy rights & US state law readiness
        </h2>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
          Rather than fragmenting compliance across fifty jurisdictions, CareerOS operates a unified <span className="text-white font-semibold">US State Privacy Law Ready</span> framework satisfying California (CCPA/CPRA), Colorado (CPA), Virginia (VCDPA), and modern state consumer data protections.
        </p>
      </div>

      {/* Strict Anti-Commercialization Banner */}
      <div className="p-5 rounded-md bg-[var(--color-surface-raised)] border border-[#34D399]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#34D399]" />
            <h3 className="text-sm font-bold text-white">
              Strict Non-Commercialization Guarantee
            </h3>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            CareerOS NEVER sells personal information. We NEVER monetize student profiles, sell data to data brokers, or use educational information for third-party behavioral advertising.
          </p>
        </div>

        <Link
          href={ROUTES.TRUST_DATA_ETHICS}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-white text-neutral-900 hover:bg-neutral-100 transition-colors shrink-0"
        >
          <span>Data Ethics Principles</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* 6 Core Data Subject Rights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PRIVACY_RIGHTS.map((right) => (
          <div
            key={right.title}
            className="p-5 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0" />
              <h4 className="text-sm font-bold text-[var(--color-text-primary)]">
                {right.title}
              </h4>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed pl-6">
              {right.description}
            </p>
          </div>
        ))}
      </div>

      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-[var(--color-border-subtle)]">
        <span className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
          Manage your account privacy preferences or submit a formal data request:
        </span>
        <div className="flex items-center gap-4">
          <Link href={ROUTES.LEGAL_PRIVACY} className="text-[#6BB8FF] hover:underline font-medium">
            Privacy Policy &rarr;
          </Link>
          <Link href={ROUTES.LEGAL_DATA_PROCESSING} className="text-[#6BB8FF] hover:underline font-medium">
            Data Processing Terms &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
