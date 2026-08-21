'use client';

import React from 'react';
import Link from 'next/link';
import { ComplianceFramework } from '@/types/compliance';
import { FrameworkCard } from './FrameworkCard';
import { GraduationCap, ShieldCheck, Lock, Eye, AlertCircle, FileCheck, CheckCircle2 } from 'lucide-react';
import { ROUTES } from '@/lib/routes';

interface StudentPrivacySectionProps {
  frameworks: ComplianceFramework[];
  onRequestAccess?: (framework: ComplianceFramework) => void;
}

export function StudentPrivacySection({
  frameworks,
  onRequestAccess,
}: StudentPrivacySectionProps) {
  const studentFrameworks = frameworks.filter(
    (f) => f.id === 'ferpa' || f.id === 'ppra' || f.id === 'coppa' || f.id === 'hipaa'
  );

  return (
    <section id="student-privacy" className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#6BB8FF]">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>K-12 & HIGHER EDUCATION STATUTORY PROTECTIONS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
          Student privacy and education safeguards
        </h2>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
          CareerOS is built to serve secondary schools, colleges, and young people exploring their future. We engineer strict legal and technical controls around student education records, minor identity protection, and school administrative oversight.
        </p>
      </div>

      {/* 4 Cards: FERPA Ready, PPRA Controls, COPPA Architecture, HIPAA Isolation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {studentFrameworks.map((framework) => (
          <FrameworkCard
            key={framework.id}
            framework={framework}
            onRequestAccess={onRequestAccess}
          />
        ))}
      </div>

      {/* Deep Dive on Educational Commitments */}
      <div className="p-6 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-6">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)] font-mono flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#34D399]" />
          <span>Core Student & School Institutional Commitments</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-xs text-[var(--color-text-secondary)]">
          <div className="space-y-2">
            <h4 className="font-bold text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
              <span>Zero Unauthorised Secondary Use</span>
            </h4>
            <p className="leading-relaxed">
              Student data received from educational institutions is used exclusively for authorized educational and career discovery purposes. CareerOS never sells student personal information or profiles minors for commercial behavioral advertising.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
              <span>School-Controlled Data Access</span>
            </h4>
            <p className="leading-relaxed">
              Schools and districts retain administrative ownership of institutional records. Counselor and district dashboards allow educators to manage permissions, inspect student guidance activity, and export or delete records on demand.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
              <span>Parental Inspection & Consent</span>
            </h4>
            <p className="leading-relaxed">
              In accordance with PPRA and COPPA principles, career questionnaires and assessment instruments are transparent and inspectable. Minor accounts support verified parental notices, consent records, and consent withdrawal workflows.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
            Explore dedicated school documentation and safeguarding policies:
          </span>
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <Link href={ROUTES.SCHOOLS_STUDENT_SAFETY} className="text-[#6BB8FF] hover:underline">
              Student Safety & Safeguarding Center &rarr;
            </Link>
            <Link href={ROUTES.SCHOOLS_PRIVACY} className="text-[#6BB8FF] hover:underline">
              School Privacy Policy &rarr;
            </Link>
            <Link href={ROUTES.LEGAL_DPA} className="text-[#6BB8FF] hover:underline">
              Institutional DPA &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
