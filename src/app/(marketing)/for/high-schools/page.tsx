import React from 'react';
import Image from 'next/image';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { MEDIA_ASSETS } from '@/lib/media';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ForHighSchoolsPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-ivory-base)]">
      {/* Hero Section */}
      <section className="section-editorial bg-[var(--color-ivory-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6 max-w-2xl">
              <span className="section-label">
                High Schools & Districts
              </span>

              <h1 className="text-display-section text-[var(--color-charcoal-deep)]">
                Personal career guidance shouldn&apos;t depend on how much time a counsellor has.
              </h1>

              <p className="text-lead text-[var(--color-text-secondary)]">
                Empower career counsellors, support college, trade, and apprenticeship pathways with equal prestige, and protect minors under strict student safeguarding standards.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button href={ROUTES.COMPANY_CONTACT} variant="primary" size="lg">
                  Become a Launch School <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href={ROUTES.TRUST_SAFEGUARDING} variant="secondary" size="lg">
                  Student Safeguarding
                </Button>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-[var(--color-text-secondary)] font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-lavender-base)]" /> Minor Safeguarding & Consent
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-gold-base)]" /> Zero 3rd-party advertising
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] rounded-[var(--radius-card)] overflow-hidden shadow-subtle aspect-16/10 relative">
                <Image
                  src={MEDIA_ASSETS.audiences.schools.src}
                  alt={MEDIA_ASSETS.audiences.schools.alt}
                  width={MEDIA_ASSETS.audiences.schools.width}
                  height={MEDIA_ASSETS.audiences.schools.height}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3 Pillars of School Partnerships */}
      <section className="section-editorial bg-[var(--color-ivory-warm)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">
              Institutional Scale
            </span>
            <h2 className="text-display-section text-[var(--color-charcoal-deep)]">
              Equitable guidance at institutional scale.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              School counsellors face student-to-counsellor ratios exceeding 400:1. Career OS provides high-fidelity, unbiased mentoring that amplifies educator impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
              <span className="section-label text-[10px]">
                Dimension 01
              </span>
              <h3 className="text-lg font-semibold text-[var(--color-charcoal-deep)]">
                Equal Pathway Parity
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Provide comprehensive, un-siloed discovery across university, technical trades, apprenticeships, and community college without steering students into one predetermined route.
              </p>
            </div>

            <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
              <span className="section-label text-[10px]">
                Dimension 02
              </span>
              <h3 className="text-lg font-semibold text-[var(--color-charcoal-deep)]">
                Minor Safeguarding & Privacy
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Zero behavioral ad targeting. Full parental / guardian consent controls for students under age thresholds. Strict isolation of student records.
              </p>
            </div>

            <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
              <span className="section-label text-[10px]">
                Dimension 03
              </span>
              <h3 className="text-lg font-semibold text-[var(--color-charcoal-deep)]">
                Permanent Asset for Alumni
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Unlike district software that students lose on graduation day, Career OS transitions seamlessly with them into higher education, apprenticeships, and employment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Launch School Partner Banner */}
      <section className="section-editorial bg-[var(--color-charcoal-base)] text-[var(--color-ivory-base)] border-t border-[var(--color-charcoal-border)]">
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl font-normal text-white tracking-tight">
              Become a Career OS Launch School
            </h3>
            <p className="text-sm text-[var(--color-text-inverse-muted)]">
              Partner with our team to shape modern, equitable career infrastructure for your high school, academy, or district.
            </p>
          </div>
          <Button href={ROUTES.COMPANY_CONTACT} variant="dark" size="lg" className="shrink-0">
            Enquire About Partnership <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}

