'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';

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
    issuer: 'MIT • School of Engineering',
    date: 'July 2022',
    status: 'VERIFIED',
    proofType: 'Cryptographic Institutional Anchor',
  },
  {
    type: 'Vocational Credential',
    title: 'Advanced Electro-Mechanical Systems Certificate',
    issuer: 'NIMS • Certified Metalworking Skills Standard',
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
    <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)] relative overflow-hidden">
      
      {/* Subtle ambient lighting */}
      <div className="ambient-glow-champagne absolute inset-0 pointer-events-none" />

      <div className="container-editorial space-y-16 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="section-label flex items-center gap-2">
                <span className="accent-blue-dot" />
                Sovereign Evidence Vault
              </span>
              <TechnicalBadge variant="champagne">W3C COMPATIBLE</TechnicalBadge>
            </div>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Take the evidence with you.
            </h2>
            <p className="text-lead text-[var(--color-text-secondary)]">
              A portable professional record you own independently of any employer, school, or platform. Designed to grow and compound throughout your entire working life.
            </p>
          </div>
        </ScrollReveal>

        {/* Digital Career Passport Interface Shell */}
        <ScrollReveal delayMs={100}>
          <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-subtle border-beam-container border-beam-slow hover-lift">
            
            {/* Document Header Bar */}
            <div className="bg-[var(--background-dark-deep)] text-[var(--color-text-primary)] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-border-default)]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="section-label-light text-[10px] font-mono">
                    SPECIFICATION V2.4 &bull; SOVEREIGN IDENTIFIER
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-white font-mono">
                  Alexander Chen &bull; #COS-8891-US
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-white/10 text-xs text-white/90 border border-white/20 rounded-[var(--radius-sm)] flex items-center gap-1.5 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#DDD36D]" /> Cryptographically Anchored
                </span>
              </div>
            </div>

            {/* Record Items Table / Grid */}
            <div className="p-6 sm:p-10 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PASSPORT_RECORDS.map((item, i) => (
                  <div
                    key={i}
                    className="p-6 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-4 hover:border-[rgba(47,143,255,0.25)] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-wider text-[var(--color-taupe-300)] font-semibold font-mono">
                        {item.type}
                      </span>
                      {item.status === 'VERIFIED' ? (
                        <span className="px-2.5 py-0.5 bg-[var(--color-success-light)] text-[var(--color-success)] text-[10px] font-semibold rounded-[var(--radius-sm)] border border-[var(--color-success)]/20 flex items-center gap-1 font-mono">
                          <CheckCircle2 className="w-3 h-3" /> Verified Record
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 bg-[var(--color-lavender-base)]/20 text-[var(--color-lavender-light)] text-[10px] font-semibold rounded-[var(--radius-sm)] border border-[var(--color-lavender-base)]/40 flex items-center gap-1 font-mono">
                          <FileText className="w-3 h-3" /> Evidenced Artifact
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-[var(--color-text-primary)]">
                        {item.title}
                      </h4>
                      <p
                        className="text-xs text-[var(--color-text-secondary)] mt-1"
                        dangerouslySetInnerHTML={{ __html: item.issuer }}
                      />
                    </div>

                    <div className="pt-3 border-t border-[var(--color-border-default)] flex items-center justify-between text-[11px] text-[var(--color-text-tertiary)] font-mono">
                      <span>Issued: {item.date}</span>
                      <span>{item.proofType}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-[var(--color-text-tertiary)] pt-2 text-center font-mono">
                * Verification states strictly distinguish peer reviews and raw artifacts from accredited institutional credentials.
              </p>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[var(--color-surface-base)] px-6 sm:px-10 py-4 border-t border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
              <span className="text-[var(--color-text-secondary)] text-[11px]">
                Exportable as standard W3C verifiable credentials &bull; Zero vendor lock-in
              </span>
              <Link
                href={ROUTES.PRODUCT_CAREER_PASSPORT}
                className="font-semibold text-[var(--color-text-primary)] hover:text-white inline-flex items-center gap-1 underline underline-offset-4 group"
              >
                <span>Explore Career Passport</span>
                <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
