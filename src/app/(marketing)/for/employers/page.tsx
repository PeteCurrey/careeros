import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { MEDIA_ASSETS } from '@/lib/media';
import { Building2, ShieldCheck, Users, Sparkles, CheckCircle2, ArrowRight, Award } from 'lucide-react';

export default function ForEmployersPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] text-xs font-mono font-bold text-[var(--color-brand-600)]">
                <Building2 className="w-3.5 h-3.5" /> EMPLOYERS & HIRING TEAMS
              </div>

              <h1 className="text-display-section text-[var(--color-text-primary)]">
                Find people by potential, evidence and fit — not just keywords on a résumé.
              </h1>

              <p className="text-lead text-[var(--color-text-secondary)]">
                Move beyond flat CV screening and keyword algorithms. Discover candidate capability through verified project evidence, demonstrable competency, and explainable decision support.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button href={ROUTES.COMPANY_CONTACT} variant="primary" size="lg" className="shadow-card">
                  Become a Launch Employer <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href={ROUTES.PRODUCT_EMPLOYER_AGENT} variant="secondary" size="lg">
                  Employer Agent Vision
                </Button>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-[var(--color-text-tertiary)] font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-brand-600)]" /> NYC LL144 & EU AI Act Aligned
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-verified)]" /> Human in the loop
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden border border-[var(--color-border-default)] shadow-editorial aspect-16/10 relative">
                <Image
                  src={MEDIA_ASSETS.audiences.employers.src}
                  alt={MEDIA_ASSETS.audiences.employers.alt}
                  width={MEDIA_ASSETS.audiences.employers.width}
                  height={MEDIA_ASSETS.audiences.employers.height}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3 Pillars of Responsible Hiring */}
      <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)]">
        <div className="container-wide space-y-12">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Intelligent matching anchored in verified competency.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Keyword matching rejects non-traditional high-potential talent. Career OS evaluates demonstrated evidence and verified capability bridges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-card space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                Verified Evidence Review
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Review candidate credentials, verified project deliverables, and authentic apprenticeship certifications without guessing whether bullet points are exaggerated.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-card space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                Explainable Decision Support
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Employer Agent provides transparent alignment factors and capability overlap analysis, strictly preserving human agency in every final hiring decision.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-card space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                Early-Career & Non-Traditional Talent
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Directly discover high-aptitude graduates, trade apprentices, and career switchers whose genuine capabilities are overlooked by legacy ATS software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Launch Employer Partner Banner */}
      <section className="section-editorial bg-[var(--color-neutral-950)] text-white">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl font-bold text-white">
              Become a Career OS Launch Employer
            </h3>
            <p className="text-sm text-white/70">
              Work with us to establish responsible, evidence-based talent pipelines for your organization.
            </p>
          </div>
          <Button href={ROUTES.COMPANY_CONTACT} variant="primary" size="lg" className="bg-white text-[var(--color-neutral-950)] hover:bg-white/90 font-bold shrink-0">
            Enquire About Launch Program <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
