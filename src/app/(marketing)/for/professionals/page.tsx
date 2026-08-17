import React from 'react';
import Image from 'next/image';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { MEDIA_ASSETS } from '@/lib/media';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ForProfessionalsPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-ivory-base)]">
      {/* Hero Section */}
      <section className="section-editorial bg-[var(--color-ivory-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6 max-w-2xl">
              <span className="section-label">
                Professionals & Leaders
              </span>

              <h1 className="text-display-section text-[var(--color-charcoal-deep)]">
                The job you have now isn&apos;t the end of the story.
              </h1>

              <p className="text-lead text-[var(--color-text-secondary)]">
                Compound your capability, execute strategic lateral industry pivots, benchmark market compensation, or prepare for entrepreneurship and global mobility with your complete professional foundation.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
                  Start your career — Free <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href={ROUTES.PRODUCT_AI_CAREER_MENTOR} variant="secondary" size="lg">
                  Explore Career Mentor
                </Button>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-[var(--color-text-secondary)] font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-gold-base)]" /> Private & Autonomous
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-lavender-base)]" /> Zero employer discovery leaks
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] rounded-[var(--radius-card)] overflow-hidden shadow-subtle aspect-16/10 relative">
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
      <section className="section-editorial bg-[var(--color-ivory-warm)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">
              Compounding Trajectory
            </span>
            <h2 className="text-display-section text-[var(--color-charcoal-deep)]">
              Strategic career compounding over decades.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Traditional employment is transactional. Career OS is compounding professional capital that stays under your control across every company transition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
              <span className="section-label text-[10px]">
                Dimension 01
              </span>
              <h3 className="text-lg font-semibold text-[var(--color-charcoal-deep)]">
                Next Move Strategic Advisory
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Benchmark capability requirements against actual market expectations. Receive targeted advisory on closing gaps before applying for executive or staff-level promotions.
              </p>
            </div>

            <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
              <span className="section-label text-[10px]">
                Dimension 02
              </span>
              <h3 className="text-lg font-semibold text-[var(--color-charcoal-deep)]">
                Lateral Pivots & Reinvention
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Transition across industries with confidence. The Career Graph maps transferable competencies so you don&apos;t start from scratch when pivoting into new sectors.
              </p>
            </div>

            <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
              <span className="section-label text-[10px]">
                Dimension 03
              </span>
              <h3 className="text-lg font-semibold text-[var(--color-charcoal-deep)]">
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
      <section className="section-editorial bg-[var(--color-charcoal-base)] text-[var(--color-ivory-base)] border-t border-[var(--color-charcoal-border)]">
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl font-normal text-white tracking-tight">
              Take complete control of your professional trajectory.
            </h3>
            <p className="text-sm text-[var(--color-text-inverse-muted)]">
              Free forever for individual professionals. Own your evidence, credentials, and career intelligence.
            </p>
          </div>
          <Button href={ROUTES.SIGNUP} variant="dark" size="lg" className="shrink-0">
            Start Free Account <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}

