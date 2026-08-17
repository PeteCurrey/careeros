import React from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

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
  hideCta?: boolean;
  fullScreenHero?: boolean;
}

export function EditorialSubpage({
  badge,
  title,
  description,
  breadcrumbs,
  lastUpdated,
  children,
  ctaText = "Start your career — Free",
  ctaHref = ROUTES.SIGNUP,
  sidebar,
  hideCta = false,
  fullScreenHero = false,
}: EditorialSubpageProps) {
  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)]">
      {/* Header */}
      <section
        className={`border-b border-[var(--color-border-default)] ${
          fullScreenHero
            ? "min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center py-20 lg:py-0"
            : "pt-16 pb-14"
        }`}
      >
        <div className="container-editorial space-y-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-[var(--color-text-tertiary)]" aria-label="Breadcrumb">
            {breadcrumbs.map((b, idx) => (
              <React.Fragment key={b.href}>
                <Link href={b.href} className="hover:text-[var(--color-text-primary)] transition-colors">
                  {b.label}
                </Link>
                {idx < breadcrumbs.length - 1 && <span className="opacity-40">/</span>}
              </React.Fragment>
            ))}
          </nav>

          <div className="max-w-4xl space-y-4">
            <span className="section-label">
              {badge}
            </span>

            <h1 className="text-display-section text-[var(--color-text-primary)]">
              {title}
            </h1>

            <p className="text-lead text-[var(--color-text-secondary)]">
              {description}
            </p>

            {lastUpdated && (
              <p className="text-xs text-[var(--color-text-tertiary)] pt-2 border-t border-[var(--color-border-subtle)] inline-block">
                Last reviewed: {lastUpdated} &bull; Career OS Governance &amp; Standards
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Column (Flat Editorial Surface) */}
            <div className={sidebar ? "lg:col-span-8" : "lg:col-span-12"}>
              <div className="p-8 sm:p-12 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-8 prose prose-invert max-w-none text-[var(--color-text-secondary)]">
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

      {/* Footer CTA Banner (Omitted when hideCta is true for Governance pages per Requirement 17) */}
      {!hideCta && (
        <section className="py-16 bg-[var(--background-dark-deep)] text-[var(--color-text-primary)] border-t border-[var(--color-border-default)]">
          <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-2xl font-normal text-[var(--color-text-primary)] tracking-tight">
                Ready to begin with Career OS?
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] font-normal">
                Free forever for individuals &bull; Universal professional infrastructure
              </p>
            </div>
            <Button href={ctaHref} variant="primary" size="md" className="shrink-0">
              {ctaText} <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}
