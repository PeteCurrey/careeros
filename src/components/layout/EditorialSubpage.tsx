import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export interface Breadcrumb {
  label: string;
  href: string;
}

export interface EditorialSubpageProps {
  badge: string;
  title: string;
  description: string;
  breadcrumbs: Breadcrumb[];
  lastUpdated?: string;
  children: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
  sidebar?: React.ReactNode;
}

export function EditorialSubpage({
  badge,
  title,
  description,
  breadcrumbs,
  lastUpdated,
  children,
  ctaText = 'Start Your Career — Free',
  ctaHref = ROUTES.SIGNUP,
  sidebar,
}: EditorialSubpageProps) {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-wide space-y-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-[var(--color-text-tertiary)] font-mono" aria-label="Breadcrumb">
            {breadcrumbs.map((b, idx) => (
              <React.Fragment key={b.href}>
                <Link href={b.href} className="hover:text-[var(--color-text-primary)] transition-colors">
                  {b.label}
                </Link>
                {idx < breadcrumbs.length - 1 && <span>/</span>}
              </React.Fragment>
            ))}
          </nav>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] text-xs font-mono font-bold text-[var(--color-brand-600)]">
              {badge}
            </div>

            <h1 className="text-display-section text-[var(--color-text-primary)]">
              {title}
            </h1>

            <p className="text-lead text-[var(--color-text-secondary)]">
              {description}
            </p>

            {lastUpdated && (
              <p className="text-xs font-mono text-[var(--color-text-tertiary)] pt-2">
                Last reviewed: {lastUpdated} &bull; Career OS Governance
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Column */}
            <div className={sidebar ? 'lg:col-span-8' : 'lg:col-span-12'}>
              <div className="p-8 sm:p-12 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-card space-y-8 prose prose-slate max-w-none text-[var(--color-text-secondary)]">
                {children}
              </div>
            </div>

            {/* Optional Sidebar */}
            {sidebar && (
              <div className="lg:col-span-4 space-y-6">
                <div className="sticky top-24 space-y-6">
                  {sidebar}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="py-16 bg-[var(--color-neutral-950)] text-white">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">
              Ready to explore Career OS?
            </h3>
            <p className="text-xs text-white/70">
              Free forever for individuals &bull; Universal professional infrastructure
            </p>
          </div>
          <Button href={ctaHref} variant="primary" size="md" className="bg-white text-[var(--color-neutral-950)] hover:bg-white/90 font-bold shrink-0">
            {ctaText} <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
