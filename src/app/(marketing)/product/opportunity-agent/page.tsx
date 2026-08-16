import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Compass, Sparkles, Shield, Eye, ArrowRight } from 'lucide-react';

export default function OpportunityAgentPage() {
  return (
    <div className="section-padding">
      <div className="container-site space-y-16">
        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="outline" size="md">
            Future Intelligence Vision
          </Badge>
          <h1 className="text-display font-bold tracking-tight text-[var(--color-text-primary)]">
            Opportunity Agent: Your career agent will find you.
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            The long-term vision of Career OS is proactive matching. Instead of requiring individuals to spend dozens of hours searching through vacancy boards, your personal Opportunity Agent will identify and surface relevant opportunities directly to you.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href={ROUTES.SIGNUP} variant="primary" size="md">
              Join Early Access
            </Button>
            <Button href={ROUTES.PRODUCT_EMPLOYER_AGENT} variant="secondary" size="md">
              Employer Agent Architecture
            </Button>
          </div>
        </div>

        {/* Vision Statement Callout */}
        <Card className="p-8 border-l-4 border-l-[var(--color-brand-600)] bg-[var(--color-surface-raised)] space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-brand-600)]">
            Architectural Principle
          </span>
          <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
            From Search Friction to Intelligent Discovery
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            Today, hiring is broken on both sides: candidates submit hundreds of indiscriminate applications, while employers drown in unvetted résumés. Opportunity Agent reverses this model through structured parameters, mutual alignment criteria, and verified competence.
          </p>
        </Card>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Explainable Matching
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              When an opportunity is matched, you receive an explicit rationale detailing why it aligns with your Career Twin, compensation requirements, culture preferences, and growth trajectory.
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Strict User Agency
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Your profile is never broadcast blindly to recruiters. You approve every employer introduction individually before any contact information or non-public details are disclosed.
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Multi-Track Opportunities
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Surfaces not just full-time employment, but apprenticeships, technical mentorships, research fellowships, venture co-founder matching, and project contracts.
            </p>
          </Card>
        </div>

        {/* CTA */}
        <Card className="p-8 sm:p-12 bg-[var(--color-surface-sunken)] border-[var(--color-border-default)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Build your foundation today
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              As Opportunity Agent capabilities roll out, accounts with established Career Twins and Passports will be matched first.
            </p>
          </div>
          <Button href={ROUTES.SIGNUP} variant="primary" size="md">
            Start Free Account <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </Card>
      </div>
    </div>
  );
}
