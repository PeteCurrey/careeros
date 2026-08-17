import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { MEDIA_ASSETS } from '@/lib/media';
import { Briefcase, TrendingUp, RefreshCw, Compass, ShieldCheck, ArrowRight, CheckCircle2, Award } from 'lucide-react';

export default function ForProfessionalsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] text-xs font-mono font-bold text-[var(--color-brand-600)]">
                <Briefcase className="w-3.5 h-3.5" /> PROFESSIONALS & LEADERS
              </div>

              <h1 className="text-display-section text-[var(--color-text-primary)]">
                Your next role is only one part of your career.
              </h1>

              <p className="text-lead text-[var(--color-text-secondary)]">
                Compound your capability, execute strategic lateral industry pivots, benchmark market compensation, or prepare for entrepreneurship and global mobility with your complete professional foundation.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button href={ROUTES.SIGNUP} variant="primary" size="lg" className="shadow-card">
                  Start Your Career OS <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href={ROUTES.PRODUCT_AI_CAREER_MENTOR} variant="secondary" size="lg">
                  Explore Career Mentor
                </Button>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-[var(--color-text-tertiary)] font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-verified)]" /> Private & Autonomous
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-brand-600)]" /> Zero employer discovery leaks
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-xl overflow-hidden border border-[var(--color-border-default)] shadow-editorial aspect-16/10 relative">
                <Image
                  src={MEDIA_ASSETS.audiences.professionals.src}
                  alt={MEDIA_ASSETS.audiences.professionals.alt}
                  width={MEDIA_ASSETS.audiences.professionals.width}
                  height={MEDIA_ASSETS.audiences.professionals.height}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3 Pillars of Professional Advancement */}
      <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)]">
        <div className="container-wide space-y-12">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Strategic career compounding over decades.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Traditional employment is transactional. Career OS is compounding professional capital that stays under your control across every company transition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-card space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center font-bold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                Next Move Strategic Advisory
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Benchmark capability requirements against actual market expectations. Receive targeted advisory on closing gaps before applying for executive or staff-level promotions.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-card space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center font-bold">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                Lateral Pivots & Reinvention
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Transition across industries with confidence. The Career Graph maps transferable competencies so you don&apos;t start from scratch when pivoting into new sectors.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-card space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                Autonomous Opportunity Agent
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Set private compensation, culture, and alignment parameters. Let high-trust opportunities reach you directly without broadcasting your search publicly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Action Banner */}
      <section className="section-editorial bg-[var(--color-neutral-950)] text-white">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl font-bold text-white">
              Take complete control of your professional trajectory.
            </h3>
            <p className="text-sm text-white/70">
              Free forever for individual professionals. Own your evidence, credentials, and career intelligence.
            </p>
          </div>
          <Button href={ROUTES.SIGNUP} variant="primary" size="lg" className="bg-white text-[var(--color-neutral-950)] hover:bg-white/90 font-bold shrink-0">
            Start Free Account <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
