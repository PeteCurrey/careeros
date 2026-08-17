import React from 'react';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { ProductEngineCard } from '@/components/ui/ProductEngineCard';
import { ArrowRight } from 'lucide-react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Product | Career OS",
  description: "Career OS Product. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/product",
  },
};

export default function ProductOverviewPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      {/* Header */}
      <section className="min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)] py-16 lg:py-0">
        <div className="container-editorial space-y-6 max-w-4xl">
          <span className="section-label">
            Product Architecture & Subsystems
          </span>
          <h1 className="text-display-section text-[var(--color-text-primary)]">
            A comprehensive operating system for lifelong career development.
          </h1>
          <p className="text-lead text-[var(--color-text-secondary)]">
            Career OS integrates eight foundational subsystems into one unified, privacy-first platform. Built to support people from early education through professional leadership, lateral reinvention, and international mobility.
          </p>
        </div>
      </section>

      {/* Engine Grid */}
      <section className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductEngineCard
              title="AI Career Mentor"
              description="System-assigned professional guidance that maintains continuous context across goals, history, evidence, and development milestones with full provenance."
              href={ROUTES.PRODUCT_AI_CAREER_MENTOR}
              status="available"
            />
            <ProductEngineCard
              title="Career Twin"
              description="A structured multi-dimensional model of your professional self — capturing verified capabilities, strengths, and work preferences with granular privacy."
              href={ROUTES.PRODUCT_CAREER_TWIN}
              status="available"
            />
            <ProductEngineCard
              title="Career Passport"
              description="A portable, tamper-evident professional record containing verified qualifications, project artifacts, and milestones owned permanently by you."
              href={ROUTES.PRODUCT_CAREER_PASSPORT}
              status="available"
            />
            <ProductEngineCard
              title="Career Graph"
              description="A dynamic structural map of skills, industries, roles, and pathway connections that illuminates non-linear advancement trajectories."
              href={ROUTES.PRODUCT_CAREER_GRAPH}
              status="available"
            />
            <ProductEngineCard
              title="Opportunity Agent"
              description="Proactive intelligence that matches target opportunities to your verified parameters: 'Your career agent will find you.'"
              href={ROUTES.PRODUCT_OPPORTUNITY_AGENT}
              status="future-vision"
            />
            <ProductEngineCard
              title="Employer Agent"
              description="Ethical talent discovery and explainable candidate-role matching for employers, anchored in human oversight and candidate dignity."
              href={ROUTES.PRODUCT_EMPLOYER_AGENT}
              status="future-vision"
            />
            <ProductEngineCard
              title="Career Network"
              description="A high-trust professional network centered on evidence, shared practice, and genuine mentorship rather than vanity follower metrics."
              href={ROUTES.PRODUCT_CAREER_NETWORK}
              status="future-vision"
            />
            <ProductEngineCard
              title="How It Works"
              description="An end-to-end walkthrough of the Career OS lifecycle across discovery, preparation, verification, and long-term advancement."
              href={ROUTES.PRODUCT_HOW_IT_WORKS}
              status="available"
            />
          </div>
        </div>
      </section>

      {/* System Principles */}
      <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="section-label">
              Architectural Integrity
            </span>
            <h2 className="text-display-section text-[var(--color-text-primary)]">
              Engineered as infrastructure, not disposable software.
            </h2>
            <p className="text-body-editorial text-[var(--color-text-secondary)]">
              Every component of Career OS adheres to strict principles of data sovereignty, explainability, and multi-tenancy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <span className="section-label text-[10px]">Pillar 01</span>
              <h4 className="font-semibold text-base text-[var(--color-text-primary)]">
                Permanent Data Portability
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Your Career Passport and Twin remain your property across educational transitions, corporate reorganisations, and international relocations.
              </p>
            </div>
            <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <span className="section-label text-[10px]">Pillar 02</span>
              <h4 className="font-semibold text-base text-[var(--color-text-primary)]">
                Model-Agnostic AI Execution
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Our AI layer is built on open provider abstractions, ensuring task-specific routing, rigorous safety policies, and zero vendor lock-in.
              </p>
            </div>
            <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
              <span className="section-label text-[10px]">Pillar 03</span>
              <h4 className="font-semibold text-base text-[var(--color-text-primary)]">
                Multi-Tenant Isolation
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Schools, employers, and individuals operate within cryptographically enforced Row-Level Security boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-editorial bg-[var(--background-dark-deep)] text-[var(--color-text-primary)] border-t border-[var(--color-border-default)]">
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-normal text-white tracking-tight">
              Get started with Career OS
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Create your free account today and start building your lifetime professional record.
            </p>
          </div>
          <Button href={ROUTES.SIGNUP} variant="primary" size="lg" className="shrink-0">
            Start Your Career <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

