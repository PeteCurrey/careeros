import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { UserCheck, Lock, Layers, Eye, Shield, ArrowRight } from 'lucide-react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Career Twin — Product | Career OS",
  description: "Career OS Product career Twin. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/product/career-twin",
  },
};

export default function CareerTwinPage() {
  return (
    <div className="section-padding">
      <div className="container-site space-y-16">
        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="brand" size="md">
            Core Subsystem
          </Badge>
          <h1 className="text-display font-bold tracking-tight text-[var(--color-text-primary)]">
            Career Twin: A multi-dimensional model of your professional self.
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            A résumé is a flat, static two-page summary designed for 1990s recruitment. The Career Twin is a living, structured model of your skills, verified evidence, developmental ambitions, strengths, and work preferences.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href={ROUTES.SIGNUP} variant="primary" size="md">
              Build Your Career Twin
            </Button>
            <Button href={ROUTES.TRUST_DATA_ETHICS} variant="secondary" size="md">
              Granular Privacy Architecture
            </Button>
          </div>
        </div>

        {/* Multi-Dimensional Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Beyond the Flat Résumé
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Captures non-linear capability across skills, actual work artifacts, certifications, personal development milestones, problem-solving tendencies, and verified project outcomes.
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Granular Field-Level Privacy
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Employers never automatically receive everything in your Career Twin. You control distinct permissions for your mentor, trusted peers, verified prospective employers, and public verifiers.
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Evolving Developmental State
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Continuously tracks current capabilities alongside active learning goals, illuminating the exact delta between your current profile and target future roles.
            </p>
          </Card>
        </div>

        {/* Conceptual Dimensions Breakdown */}
        <div className="border-t border-[var(--color-border-default)] pt-12">
          <SectionHeading
            eyebrow="Architecture Dimensions"
            heading="The structural facets of the Career Twin model."
            description="A high-resolution representation of competence, intent, and authentic professional identity."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-4">
            {[
              'Demonstrated Skills',
              'Verified Evidence & Artifacts',
              'Work Preferences & Style',
              'Development Goals',
              'Qualifications & Credentials',
              'Strengths & Problem Solving',
              'Pathway Trajectories',
              'Compensation Parameters',
              'Industry Experience',
              'Leadership Milestones',
              'Endorsement Context',
              'International Mobility Readiness',
            ].map((dim) => (
              <div
                key={dim}
                className="p-4 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-xs font-semibold text-[var(--color-text-primary)]"
              >
                {dim}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="p-8 sm:p-12 bg-[var(--color-surface-sunken)] border-[var(--color-border-default)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Build your Career Twin today
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Free, private, and under your absolute ownership forever.
            </p>
          </div>
          <Button href={ROUTES.SIGNUP} variant="primary" size="md">
            Create Your Twin <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </Card>
      </div>
    </div>
  );
}
