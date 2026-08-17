import React from 'react';
import Image from 'next/image';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { MEDIA_ASSETS } from '@/lib/media';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Employers — For | Career OS",
  description: "Career OS For employers. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/for/employers",
  },
};

export default function ForEmployersPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-ivory-base)]">
      {/* Hero Section */}
      <section className="section-editorial bg-[var(--color-ivory-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6 max-w-2xl">
              <span className="section-label">
                Employers & Hiring Teams
              </span>

              <h1 className="text-display-section text-[var(--color-charcoal-deep)]">
                Find more than the right résumé.
              </h1>

              <p className="text-lead text-[var(--color-text-secondary)]">
                Move beyond flat CV screening and keyword algorithms. Discover candidate capability through verified project evidence, demonstrable competency, and explainable decision support.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button href={ROUTES.COMPANY_CONTACT} variant="primary" size="lg">
                  Become a Launch Employer <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href={ROUTES.PRODUCT_EMPLOYER_AGENT} variant="secondary" size="lg">
                  Employer Agent Vision
                </Button>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-[var(--color-text-secondary)] font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-lavender-base)]" /> Algorithmic Transparency & Human in Loop
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-gold-base)]" /> Verified Credentials
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] rounded-[var(--radius-card)] overflow-hidden shadow-subtle aspect-16/10 relative">
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
      <section className="section-editorial bg-[var(--color-ivory-warm)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">
              Evidence-Based Talent
            </span>
            <h2 className="text-display-section text-[var(--color-charcoal-deep)]">
              Intelligent matching anchored in verified competency.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Keyword matching rejects non-traditional high-potential talent. Career OS evaluates demonstrated evidence and verified capability bridges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
              <span className="section-label text-[10px]">
                Dimension 01
              </span>
              <h3 className="text-lg font-semibold text-[var(--color-charcoal-deep)]">
                Verified Evidence Review
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Review candidate credentials, verified project deliverables, and authentic apprenticeship certifications without guessing whether bullet points are exaggerated.
              </p>
            </div>

            <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
              <span className="section-label text-[10px]">
                Dimension 02
              </span>
              <h3 className="text-lg font-semibold text-[var(--color-charcoal-deep)]">
                Explainable Decision Support
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Employer Agent provides transparent alignment factors and capability overlap analysis, strictly preserving human agency in every final hiring decision.
              </p>
            </div>

            <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
              <span className="section-label text-[10px]">
                Dimension 03
              </span>
              <h3 className="text-lg font-semibold text-[var(--color-charcoal-deep)]">
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
      <section className="section-editorial bg-[var(--color-charcoal-base)] text-[var(--color-ivory-base)] border-t border-[var(--color-charcoal-border)]">
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl font-normal text-white tracking-tight">
              Become a Career OS Launch Employer
            </h3>
            <p className="text-sm text-[var(--color-text-inverse-muted)]">
              Work with us to establish responsible, evidence-based talent pipelines for your organization.
            </p>
          </div>
          <Button href={ROUTES.COMPANY_CONTACT} variant="dark" size="lg" className="shrink-0">
            Enquire About Launch Program <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}

