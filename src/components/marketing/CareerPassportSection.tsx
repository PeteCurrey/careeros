import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Clock, Lock, FileCode, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

interface PassportItem {
  type: string;
  title: string;
  issuer: string;
  date: string;
  status: 'VERIFIED' | 'SELF_REPORTED' | 'INSTITUTIONAL';
  hash: string;
}

const PASSPORT_ITEMS: PassportItem[] = [
  {
    type: 'DEGREE / QUALIFICATION',
    title: 'BSc Computer Science & Systems Engineering',
    issuer: 'University of Edinburgh &bull; Faculty of Engineering',
    date: 'July 2022',
    status: 'VERIFIED',
    hash: '0x8f2a...c39d',
  },
  {
    type: 'APPRENTICESHIP CERTIFICATE',
    title: 'Advanced Electro-Mechanical Systems Certificate',
    issuer: 'National Apprenticeship Council',
    date: 'March 2023',
    status: 'VERIFIED',
    hash: '0x3e1b...9902',
  },
  {
    type: 'PROJECT EVIDENCE',
    title: 'Distributed Event-Sourcing Pipeline Design',
    issuer: 'Independent Artifact &bull; 4 Verified Peer Reviews',
    date: 'November 2025',
    status: 'INSTITUTIONAL',
    hash: '0x7c49...a811',
  },
  {
    type: 'PROFESSIONAL CREDENTIAL',
    title: 'Clinical Data Ethics & Privacy Practitioner',
    issuer: 'Global Standards Body',
    date: 'January 2026',
    status: 'VERIFIED',
    hash: '0x12a9...fd40',
  },
];

export function CareerPassportSection() {
  return (
    <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)]">
      <div className="container-wide space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-mono font-bold tracking-widest text-[var(--color-brand-600)] uppercase">
            Verifiable Evidence Vault
          </p>
          <h2 className="text-display-section text-[var(--color-text-primary)]">
            Take your evidence with you.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)]">
            A portable professional record you own independently of any employer, school, or platform. Designed to grow and compound throughout your entire working life.
          </p>
        </div>

        {/* Digital Career Passport Interface Shell */}
        <div className="rounded-3xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-editorial overflow-hidden">
          
          {/* Passport Header Bar */}
          <div className="bg-[var(--color-neutral-900)] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[var(--color-brand-400)]" />
                <span className="text-xs font-mono tracking-widest uppercase text-white/70">
                  CAREER OS PASSPORT SPECIFICATION V2.4
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Alexander Chen &bull; Passport ID #COS-8891-GB
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white/90 border border-white/20 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-verified)]" /> Cryptographically Anchored
              </span>
            </div>
          </div>

          {/* Passport Item Grid */}
          <div className="p-6 sm:p-10 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PASSPORT_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-400)] transition-all space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[var(--color-text-tertiary)] uppercase">
                      {item.type}
                    </span>
                    {item.status === 'VERIFIED' ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-[var(--color-verified-light)] text-[var(--color-verified)] text-[10px] font-mono font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> VERIFIED CREDENTIAL
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full bg-[var(--color-brand-50)] text-[var(--color-brand-600)] text-[10px] font-mono font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> INSTITUTIONAL ENDORSEMENT
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[var(--color-text-primary)]">
                      {item.title}
                    </h4>
                    <p
                      className="text-xs text-[var(--color-text-secondary)] mt-1"
                      dangerouslySetInnerHTML={{ __html: item.issuer }}
                    />
                  </div>

                  <div className="pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--color-text-tertiary)]">
                    <span>Issued: {item.date}</span>
                    <span>Hash: {item.hash}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[11px] font-mono text-[var(--color-text-tertiary)] pt-2 text-center">
              * Example illustrative Career Passport records. Verification states strictly distinguish peer endorsements from institutional and cryptographic records.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="bg-[var(--color-surface-warm)] px-6 sm:px-10 py-4 border-t border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <span className="text-[var(--color-text-secondary)]">
              Exportable as standard W3C verifiable credentials &bull; Zero vendor lock-in
            </span>
            <Link
              href={ROUTES.PRODUCT_CAREER_PASSPORT}
              className="font-semibold text-[var(--color-brand-600)] hover:underline inline-flex items-center gap-1"
            >
              Explore Career Passport <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
