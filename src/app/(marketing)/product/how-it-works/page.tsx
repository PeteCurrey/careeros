import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { LifetimeTimeline } from '@/components/ui/LifetimeTimeline';
import { Layers, ShieldCheck, UserCheck, Award, ArrowRight } from 'lucide-react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How It Works — Product | Career OS",
  description: "Career OS Product how It Works. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/product/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <div className="section-padding">
      <div className="container-site space-y-16">
        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="brand" size="md">
            Lifecycle Guide
          </Badge>
          <h1 className="text-display font-bold tracking-tight text-[var(--color-text-primary)]">
            How Career OS Works: From discovery to lifelong advancement.
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            Understand how our platform engines coordinate to provide persistent guidance, evidence verification, and proactive opportunity discovery throughout your working life.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href={ROUTES.SIGNUP} variant="primary" size="md">
              Start Free Account
            </Button>
            <Button href={ROUTES.PRODUCT} variant="secondary" size="md">
              Product Systems
            </Button>
          </div>
        </div>

        {/* The 6 Phases Detailed */}
        <div className="border-t border-[var(--color-border-default)] pt-12">
          <SectionHeading
            eyebrow="The 6 Lifecycle Stages"
            heading="An operating system that stays with you forever."
            description="Explore how Career OS evolves in utility as you advance from early exploration to senior leadership and entrepreneurship."
          />
          <LifetimeTimeline />
        </div>

        {/* Underlying Coordination */}
        <div className="border-t border-[var(--color-border-default)] pt-12">
          <SectionHeading
            eyebrow="System Interaction"
            heading="How our core engines interact."
            description="Every component of Career OS is designed to reinforce your professional momentum."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <Card className="p-6 space-y-2">
              <h4 className="font-bold text-sm text-[var(--color-text-primary)]">
                1. Context Feeding Twin & Mentor
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Your coursework, projects, and developmental milestones continuously enrich your Career Twin under your explicit privacy control.
              </p>
            </Card>
            <Card className="p-6 space-y-2">
              <h4 className="font-bold text-sm text-[var(--color-text-primary)]">
                2. Graph Computing Feasibility
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                The Career Graph continuously maps your current capabilities against millions of role pathways to calculate bridge recommendations.
              </p>
            </Card>
            <Card className="p-6 space-y-2">
              <h4 className="font-bold text-sm text-[var(--color-text-primary)]">
                3. Passport Verifying Claims
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                When you achieve verified credentials or complete assessed work, your Career Passport updates with cryptographic verification states.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <Card className="p-8 sm:p-12 bg-[var(--color-surface-sunken)] border-[var(--color-border-default)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Begin your Career OS journey
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Create your account in seconds. Free for all individual users.
            </p>
          </div>
          <Button href={ROUTES.SIGNUP} variant="primary" size="md">
            Start Free <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </Card>
      </div>
    </div>
  );
}
