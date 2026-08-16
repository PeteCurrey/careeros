import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Eye, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export default function ResponsibleAIPage() {
  return (
    <div className="section-padding">
      <div className="container-site space-y-16">
        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="brand" size="md">
            Responsible AI Architecture
          </Badge>
          <h1 className="text-display font-bold tracking-tight text-[var(--color-text-primary)]">
            Explainability, human agency, and auditable provenance.
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            AI in Career OS is designed as decision support that compounds human judgment, not a black-box replacement for human evaluation. We never pretend an AI is human, never guarantee automated career outcomes, and never execute autonomous hiring decisions.
          </p>
        </div>

        {/* Responsible AI Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 space-y-4 border-l-4 border-l-[var(--color-brand-600)]">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Core Commitments
            </h3>
            <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] mt-0.5" />
                <span><strong>Explicit Decision Factors:</strong> All recommendations surface key rationale and input sources.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] mt-0.5" />
                <span><strong>No Human Simulation:</strong> System mentors clearly identify as artificial intelligence systems.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] mt-0.5" />
                <span><strong>Full Execution Provenance:</strong> Provider, model version, timestamp, and policy version stored with every run.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] mt-0.5" />
                <span><strong>User Override & Feedback:</strong> Individuals can modify, reject, or correct any recommendation.</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 space-y-4 border-l-4 border-l-[var(--color-border-strong)]">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Prohibited Practices
            </h3>
            <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              <li className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-[var(--color-danger)] mt-0.5" />
                <span><strong>No Autonomous Hiring Decisions:</strong> Final hiring selections must be made by human managers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-[var(--color-danger)] mt-0.5" />
                <span><strong>No Secret Rejections:</strong> Candidates are never silently rejected by automated scoring models.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-[var(--color-danger)] mt-0.5" />
                <span><strong>No Guaranteed Outcomes:</strong> We never promise guaranteed jobs, salaries, or admissions.</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* AI Role in Employment Taxonomy */}
        <div className="border-t border-[var(--color-border-default)] pt-12">
          <SectionHeading
            eyebrow="Governance Taxonomy"
            heading="Role of AI in Employment Workflows"
            description="Our architecture explicitly models and constrains the specific role AI plays in employment."
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {[
              { role: 'DISCOVERY', status: 'Enabled', note: 'Surfacing matching opportunities' },
              { role: 'MATCHING', status: 'Enabled', note: 'Evaluating alignment criteria' },
              { role: 'RECOMMENDATION', status: 'Enabled', note: 'Decision support suggestions' },
              { role: 'DECISION_SUPPORT', status: 'Enabled', note: 'Providing structured factor analysis' },
              { role: 'RANKING', status: 'Constrained', note: 'Requires human criteria review' },
              { role: 'SCREENING', status: 'Restricted', note: 'Subject to elevated governance' },
              { role: 'DECISION', status: 'Prohibited', note: 'Human decision-maker mandatory' },
            ].map((item) => (
              <div
                key={item.role}
                className="p-4 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[var(--color-text-primary)]">
                    {item.role}
                  </span>
                  <Badge
                    variant={
                      item.status === 'Enabled'
                        ? 'success'
                        : item.status === 'Prohibited'
                        ? 'danger'
                        : 'warning'
                    }
                    size="sm"
                  >
                    {item.status}
                  </Badge>
                </div>
                <p className="text-[0.6875rem] text-[var(--color-text-tertiary)]">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
