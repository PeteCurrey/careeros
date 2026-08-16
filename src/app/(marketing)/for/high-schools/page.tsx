import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { MEDIA_ASSETS } from '@/lib/media';
import { School, ShieldCheck, Compass, Users, CheckCircle2, ArrowRight, BookOpen } from 'lucide-react';

export default function ForHighSchoolsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] text-xs font-mono font-bold text-[var(--color-brand-600)]">
                <School className="w-3.5 h-3.5" /> HIGH SCHOOLS & DISTRICTS
              </div>

              <h1 className="text-display-section text-[var(--color-text-primary)]">
                Personalised career development for every student.
              </h1>

              <p className="text-lead text-[var(--color-text-secondary)]">
                Empower career counsellors, support college, trade, and apprenticeship pathways with equal prestige, and protect minors under strict FERPA, COPPA, and state student safeguarding standards.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button href={ROUTES.COMPANY_CONTACT} variant="primary" size="lg" className="shadow-card">
                  Become a Launch School <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href={ROUTES.TRUST_SAFEGUARDING} variant="secondary" size="lg">
                  Student Safeguarding
                </Button>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-[var(--color-text-tertiary)] font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-brand-600)]" /> FERPA & COPPA Aligned
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-verified)]" /> Zero 3rd-party advertising
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden border border-[var(--color-border-default)] shadow-editorial aspect-16/10 relative">
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
      <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)]">
        <div className="container-wide space-y-12">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Equitable guidance at institutional scale.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              School counsellors face student-to-counsellor ratios exceeding 400:1. Career OS provides high-fidelity, unbiased mentoring that amplifies educator impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-card space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                Equal Pathway Parity
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Provide comprehensive, un-siloed discovery across university, technical trades, apprenticeships, and community college without steering students into one predetermined route.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-card space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                Minor Safeguarding & Privacy
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Zero behavioral ad targeting. Full parental / guardian consent controls for students under age thresholds. Strict isolation of student records.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-card space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
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
      <section className="section-editorial bg-[var(--color-neutral-950)] text-white">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl font-bold text-white">
              Become a Career OS Launch School
            </h3>
            <p className="text-sm text-white/70">
              Partner with our team to shape modern, equitable career infrastructure for your high school, academy, or district.
            </p>
          </div>
          <Button href={ROUTES.COMPANY_CONTACT} variant="primary" size="lg" className="bg-white text-[var(--color-neutral-950)] hover:bg-white/90 font-bold shrink-0">
            Enquire About Partnership <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
