'use client';

import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { ShieldCheck, CheckCircle2, Bot, GraduationCap, Eye, Lock, Award } from 'lucide-react';

interface FooterTrustItem {
  name: string;
  category: string;
  status: string;
  version: string;
  icon: React.ElementType;
}

const FOOTER_TRUST_ITEMS: FooterTrustItem[] = [
  { name: 'SOC 2 Type II', category: 'Independent Assurance', status: 'Attested', version: 'AICPA TSC', icon: Award },
  { name: 'ISO/IEC 27001', category: 'Information Security', status: 'Certified', version: '2022', icon: ShieldCheck },
  { name: 'ISO/IEC 27701', category: 'Privacy Management', status: 'Certified', version: '2025', icon: Lock },
  { name: 'ISO/IEC 42001', category: 'Responsible AI', status: 'Certified', version: '2023', icon: Bot },
  { name: 'FERPA Ready', category: 'Student Privacy', status: 'Compliant', version: '34 CFR 99', icon: GraduationCap },
  { name: 'NIST AI RMF', category: 'AI Risk Governance', status: 'Aligned', version: '1.0', icon: Bot },
  { name: 'WCAG 2.2 AA', category: 'Digital Accessibility', status: 'Compliant', version: 'Level AA', icon: Eye },
];

export function FooterTrustStrip() {
  return (
    <div className="pt-10 pb-8 border-b border-[var(--color-border-default)]">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Label on left */}
        <div className="space-y-0.5 shrink-0">
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[var(--color-brand-300)]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Assurance & Standards Baseline</span>
          </div>
          <p className="text-[11px] text-[var(--color-text-tertiary)]">
            Verified controls for schools, students, and employers.
          </p>
        </div>

        {/* Horizontal assurance strip */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {FOOTER_TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={ROUTES.TRUST_COMPLIANCE}
                title={`${item.name} (${item.category}) — Status: ${item.status} (v${item.version})`}
                className="group inline-flex items-center gap-2 px-2.5 py-1.5 rounded-sm bg-[var(--overlay-lift)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] hover:bg-[var(--overlay-lift-strong)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-all shadow-2xs"
              >
                <Icon className="w-3.5 h-3.5 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-brand-300)] transition-colors shrink-0" />
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-xs font-semibold text-[var(--color-text-primary)] tracking-tight">
                    {item.name}
                  </span>
                  <span className="font-mono text-[9px] uppercase px-1 py-0.2 rounded-xs bg-[var(--overlay-lift)] text-[var(--color-success)] border border-[var(--color-border-subtle)]">
                    {item.status}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
