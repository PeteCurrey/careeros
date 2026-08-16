import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Building2, Cpu, CheckCircle, ShieldAlert, Users, ArrowRight } from 'lucide-react';

export default function ForEmployersPage() {
  return (
    <div className="section-padding">
      <div className="container-site space-y-16">
        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="brand" size="md">
            Enterprise & Talent Leaders
          </Badge>
          <h1 className="text-display font-bold tracking-tight text-[var(--color-text-primary)]">
            Intelligent talent discovery. Not a vacancy board.
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            Replace the broken paradigm of keyword-filtered résumé piles with verified evidence matching and explainable Employer Agent intelligence. Designed from first principles around candidate dignity, transparency, and human accountability.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href={ROUTES.COMPANY_CONTACT} variant="primary" size="md">
              Become a Launch Employer
            </Button>
            <Button href={ROUTES.PRODUCT_EMPLOYER_AGENT} variant="secondary" size="md">
              Explore Employer Agent
            </Button>
          </div>
        </div>

        {/* The Model Shift */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 space-y-4 border-l-4 border-l-[var(--color-brand-600)]">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              The Future: Agent ↔ Agent Discovery
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Instead of posting generic vacancies and receiving hundreds of hallucinated résumés, Employer Agents coordinate with candidate Career Agents to evaluate verified capability, genuine alignment, and mutual parameters before human conversations begin.
            </p>
            <ul className="space-y-2 text-xs text-[var(--color-text-secondary)] pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-success)]" />
                <span>Verified skills backed by authentic project evidence</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-success)]" />
                <span>Explainable matching rationale with clear decision factors</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-success)]" />
                <span>Respectful candidate engagement with zero ghosting</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 space-y-4 border-l-4 border-l-[var(--color-border-strong)]">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Responsible AI Non-Negotiables
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              We reject black-box autonomous hiring. In employment workflows, Career OS AI systems are strictly scoped to discovery, matching, and recommendation support. All final hiring decisions remain with human recruiters and hiring managers.
            </p>
            <ul className="space-y-2 text-xs text-[var(--color-text-secondary)] pt-2">
              <li className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[var(--color-brand-600)]" />
                <span>No automated rejection algorithms without human review</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[var(--color-brand-600)]" />
                <span>NYC Local Law 144 and EEOC alignment readiness</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[var(--color-brand-600)]" />
                <span>Full audit provenance recorded for every matching event</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Talent Discovery Modules */}
        <div className="border-t border-[var(--color-border-default)] pt-12">
          <SectionHeading
            eyebrow="Capabilities"
            heading="Modern talent intelligence for progressive organisations."
            description="Build diverse, capable teams across early-career apprenticeships, university graduates, and seasoned lateral specialists."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <h4 className="font-bold text-sm text-[var(--color-text-primary)]">
                Early Careers & Apprenticeships
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Connect directly with high-potential students from diverse educational pathways before traditional graduation cycles.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <h4 className="font-bold text-sm text-[var(--color-text-primary)]">
                Evidence-Based Lateral Hiring
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Evaluate professionals through their verified Career Passport credentials and capstone work rather than pedigree filters.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
              <h4 className="font-bold text-sm text-[var(--color-text-primary)]">
                Employer Workspace Governance
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Role-based access controls for recruiting teams, hiring managers, and HR compliance officers with audit logging.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Card className="p-8 sm:p-12 bg-[var(--color-surface-sunken)] border-[var(--color-border-default)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Partner with Career OS as a launch employer
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Join leading organisations testing the next generation of evidence-based talent discovery.
            </p>
          </div>
          <Button href={ROUTES.COMPANY_CONTACT} variant="primary" size="md">
            Talk to Our Enterprise Team <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </Card>
      </div>
    </div>
  );
}
