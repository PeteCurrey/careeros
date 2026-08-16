import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ProductEngineCard } from '@/components/ui/ProductEngineCard';
import {
  Cpu,
  UserCheck,
  Award,
  Compass,
  Building2,
  Network,
  ArrowRight,
  ShieldCheck,
  Layers,
} from 'lucide-react';

export default function ProductOverviewPage() {
  return (
    <div className="section-padding">
      <div className="container-site space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="brand" size="md">
            Product Architecture
          </Badge>
          <h1 className="text-display font-bold tracking-tight text-[var(--color-text-primary)]">
            A comprehensive operating system for lifelong career development.
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            Career OS integrates eight foundational subsystems into one unified, privacy-first platform. Built to support people from early education through professional leadership, lateral reinvention, and international mobility.
          </p>
        </div>

        {/* Engine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductEngineCard
            title="AI Career Mentor"
            description="System-assigned professional guidance that maintains continuous context across goals, history, evidence, and development milestones with full provenance."
            href={ROUTES.PRODUCT_AI_CAREER_MENTOR}
            status="available"
            icon={Cpu}
          />
          <ProductEngineCard
            title="Career Twin"
            description="A structured multi-dimensional model of your professional self — capturing verified capabilities, strengths, and work preferences with granular privacy."
            href={ROUTES.PRODUCT_CAREER_TWIN}
            status="available"
            icon={UserCheck}
          />
          <ProductEngineCard
            title="Career Passport"
            description="A portable, tamper-evident professional record containing verified qualifications, project artifacts, and milestones owned permanently by you."
            href={ROUTES.PRODUCT_CAREER_PASSPORT}
            status="available"
            icon={Award}
          />
          <ProductEngineCard
            title="Career Graph"
            description="A dynamic structural map of skills, industries, roles, and pathway connections that illuminates non-linear advancement trajectories."
            href={ROUTES.PRODUCT_CAREER_GRAPH}
            status="available"
            icon={Compass}
          />
          <ProductEngineCard
            title="Opportunity Agent"
            description="Proactive intelligence that matches target opportunities to your verified parameters: 'Your career agent will find you.'"
            href={ROUTES.PRODUCT_OPPORTUNITY_AGENT}
            status="future-vision"
            icon={Compass}
          />
          <ProductEngineCard
            title="Employer Agent"
            description="Ethical talent discovery and explainable candidate-role matching for employers, anchored in human oversight and candidate dignity."
            href={ROUTES.PRODUCT_EMPLOYER_AGENT}
            status="future-vision"
            icon={Building2}
          />
          <ProductEngineCard
            title="Career Network"
            description="A high-trust professional network centered on evidence, shared practice, and genuine mentorship rather than vanity follower metrics."
            href={ROUTES.PRODUCT_CAREER_NETWORK}
            status="future-vision"
            icon={Network}
          />
          <ProductEngineCard
            title="How It Works"
            description="An end-to-end walkthrough of the Career OS lifecycle across discovery, preparation, verification, and long-term advancement."
            href={ROUTES.PRODUCT_HOW_IT_WORKS}
            status="available"
            icon={Layers}
          />
        </div>

        {/* System Principles */}
        <div className="border-t border-[var(--color-border-default)] pt-12">
          <SectionHeading
            eyebrow="Architectural Integrity"
            heading="Engineered as infrastructure, not disposable software."
            description="Every component of Career OS adheres to strict principles of data sovereignty, explainability, and multi-tenancy."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <h4 className="font-bold text-sm text-[var(--color-text-primary)]">
                Permanent Data Portability
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Your Career Passport and Twin remain your property across educational transitions, corporate reorganisations, and international relocations.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <h4 className="font-bold text-sm text-[var(--color-text-primary)]">
                Model-Agnostic AI Execution
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Our AI layer is built on open provider abstractions, ensuring task-specific routing, rigorous safety policies, and zero vendor lock-in.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <h4 className="font-bold text-sm text-[var(--color-text-primary)]">
                Multi-Tenant Isolation
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Schools, employers, and individuals operate within cryptographically enforced Row-Level Security boundaries.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Card className="p-8 sm:p-12 bg-[var(--color-surface-sunken)] border-[var(--color-border-default)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Get started with Career OS
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Create your free account today and start building your lifetime professional record.
            </p>
          </div>
          <Button href={ROUTES.SIGNUP} variant="primary" size="md">
            Start Your Career <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </Card>
      </div>
    </div>
  );
}
