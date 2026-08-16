import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Building2, ShieldAlert, CheckCircle, Users, ArrowRight } from 'lucide-react';

export default function EmployerAgentPage() {
  return (
    <div className="section-padding">
      <div className="container-site space-y-16">
        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="outline" size="md">
            Future Intelligence Vision
          </Badge>
          <h1 className="text-display font-bold tracking-tight text-[var(--color-text-primary)]">
            Employer Agent: Responsible talent discovery and matching.
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            Intelligent candidate-role matching for progressive organisations. Grounded in verified evidence, transparent decision factors, and non-negotiable human accountability.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href={ROUTES.COMPANY_CONTACT} variant="primary" size="md">
              Become a Launch Employer
            </Button>
            <Button href={ROUTES.TRUST_RESPONSIBLE_AI} variant="secondary" size="md">
              Responsible AI Governance
            </Button>
          </div>
        </div>

        {/* AI Scoping & Human Oversight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 space-y-4 border-l-4 border-l-[var(--color-brand-600)]">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Explicit Role Scoping
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Employer Agent is architecturally restricted to Discovery, Matching, Recommendation, and Decision Support. We do not build autonomous hiring robots or automated rejection engines.
            </p>
            <div className="p-3 bg-[var(--color-surface-sunken)] rounded text-xs font-mono text-[var(--color-text-secondary)]">
              AI Role: DISCOVERY &bull; MATCHING &bull; RECOMMENDATION &bull; DECISION_SUPPORT
            </div>
          </Card>

          <Card className="p-8 space-y-4 border-l-4 border-l-[var(--color-border-strong)]">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Candidate Respect & Transparency
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Every match is explainable with clear decision factors. Candidates receive respectful, timely status updates, eliminating the black-box résumé black hole common in legacy applicant tracking systems.
            </p>
            <div className="p-3 bg-[var(--color-surface-sunken)] rounded text-xs font-mono text-[var(--color-text-secondary)]">
              Provenance: FULL_AUDIT_LOGGING &bull; HUMAN_OVERRIDE_ENABLED
            </div>
          </Card>
        </div>

        {/* CTA */}
        <Card className="p-8 sm:p-12 bg-[var(--color-surface-sunken)] border-[var(--color-border-default)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Explore Employer Agent with our team
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Join leading organisations testing modern, evidence-first talent discovery.
            </p>
          </div>
          <Button href={ROUTES.COMPANY_CONTACT} variant="primary" size="md">
            Talk to Us <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </Card>
      </div>
    </div>
  );
}
