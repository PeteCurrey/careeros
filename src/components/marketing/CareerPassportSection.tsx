'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

interface PassportRecord {
  type: string;
  title: string;
  issuer: string;
  date: string;
  status: 'VERIFIED' | 'EVIDENCED' | 'CLAIMED';
  proofType: string;
}

const PASSPORT_RECORDS: PassportRecord[] = [
  {
    type: 'Degree / Qualification',
    title: 'BSc Computer Science & Systems Engineering',
    issuer: 'University of Edinburgh &bull; Faculty of Engineering',
    date: 'July 2022',
    status: 'VERIFIED',
    proofType: 'Cryptographic Institutional Anchor',
  },
  {
    type: 'Vocational Credential',
    title: 'Advanced Electro-Mechanical Systems Certificate',
    issuer: 'National Apprenticeship Council',
    date: 'March 2023',
    status: 'VERIFIED',
    proofType: 'Verified Trade Assessment Registry',
  },
  {
    type: 'Production Deliverable',
    title: 'Distributed Event-Sourcing Pipeline Specification',
    issuer: 'Independent Deliverable &bull; 4 Peer Reviews',
    date: 'November 2025',
    status: 'EVIDENCED',
    proofType: 'Source Artifact & Execution Proof',
  },
  {
    type: 'Professional Standard',
    title: 'Clinical Data Ethics & Privacy Practitioner',
    issuer: 'Global Standards Consortium',
    date: 'January 2026',
    status: 'VERIFIED',
    proofType: 'Accredited Certification Record',
  },
];

export function CareerPassportSection() {
  return (
    <section className="section-editorial bg-[var(--color-ivory-warm)] border-b border-[var(--color-border-default)]">
      <div className="container-editorial space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="section-label">
            Sovereign Evidence Vault
          </span>
          <h2 className="text-display-section text-[var(--color-charcoal-deep)]">
            Take the evidence with you.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)]">
            A portable professional record you own independently of any employer, school, or platform. Designed to grow and compound throughout your entire working life.
          </p>
        </div>

        {/* Digital Career Passport Interface Shell */}
        <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-subtle">
          
          {/* Document Header Bar */}
          <div className="bg-[var(--color-charcoal-base)] text-[var(--color-ivory-base)] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-charcoal-border)]">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="section-label-light text-[10px]">
                  Career OS Passport Specification V2.4
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-white">
                Alexander Chen &bull; Passport #COS-8891-GB
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-white/10 text-xs text-white/90 border border-white/20 rounded-[var(--radius-sm)] flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-gold-base)]" /> Cryptographically Anchored
              </span>
            </div>
          </div>

          {/* Record Items Table / Grid */}
          <div className="p-6 sm:p-10 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PASSPORT_RECORDS.map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-[var(--color-ivory-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-[var(--color-taupe-600)] font-semibold">
                      {item.type}
                    </span>
                    {item.status === 'VERIFIED' ? (
                      <span className="px-2.5 py-0.5 bg-[var(--color-success-light)] text-[var(--color-success)] text-[10px] font-semibold rounded-[var(--radius-sm)] border border-[var(--color-success)]/20 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Verified Record
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 bg-[var(--color-lavender-subtle)] text-[var(--color-charcoal-deep)] text-[10px] font-semibold rounded-[var(--radius-sm)] border border-[var(--color-lavender-base)]/40 flex items-center gap-1">
                        <FileText className="w-3 h-3" /> Evidenced Artifact
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-[var(--color-charcoal-deep)]">
                      {item.title}
                    </h4>
                    <p
                      className="text-xs text-[var(--color-text-secondary)] mt-1"
                      dangerouslySetInnerHTML={{ __html: item.issuer }}
                    />
                  </div>

                  <div className="pt-3 border-t border-[var(--color-border-default)] flex items-center justify-between text-[11px] text-[var(--color-text-tertiary)]">
                    <span>Issued: {item.date}</span>
                    <span>{item.proofType}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-[var(--color-text-tertiary)] pt-2 text-center">
              * Verification states strictly distinguish peer reviews and raw artifacts from accredited institutional credentials.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="bg-[var(--color-ivory-base)] px-6 sm:px-10 py-4 border-t border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <span className="text-[var(--color-text-secondary)]">
              Exportable as standard W3C verifiable credentials &bull; Zero vendor lock-in
            </span>
            <Link
              href={ROUTES.PRODUCT_CAREER_PASSPORT}
              className="font-semibold text-[var(--color-charcoal-deep)] hover:text-black inline-flex items-center gap-1 underline underline-offset-4"
            >
              Explore Career Passport <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

