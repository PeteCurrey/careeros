import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { GraduationCap, Compass, Award, Shield, Sparkles, ArrowRight } from 'lucide-react';

export default function ForStudentsPage() {
  return (
    <div className="section-padding">
      <div className="container-site space-y-16">
        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="brand" size="md">
            Students & Early Career
          </Badge>
          <h1 className="text-display font-bold tracking-tight text-[var(--color-text-primary)]">
            Discover what fits. Prove what you can do. Keep your OS for life.
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            Determine who you are, what you are genuinely suited to, and what it takes to get there. From first internships and apprenticeships to graduation and beyond — your Career OS stays with you everywhere you go.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href={ROUTES.SIGNUP} variant="primary" size="md">
              Start Free Account
            </Button>
            <Button href={ROUTES.PRODUCT_CAREER_PASSPORT} variant="secondary" size="md">
              See Career Passport
            </Button>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Suitability & Possibilities
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Explore diverse career trajectories based on your strengths, problem-solving preferences, and emerging interests. Understand the real day-to-day reality of roles before committing years to preparation.
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Skills Gaps & Actionable Steps
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              See the exact bridge between where you are today and target opportunities. Identify high-leverage coursework, technical certifications, and project work needed to become genuinely competitive.
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Portable Evidence That Outlasts School
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              When you graduate, your school login disappears — but your Career OS does not. Your Career Passport is your permanent asset, holding your verified credentials, capstone projects, and milestones forever.
            </p>
          </Card>
        </div>

        {/* Pathways Support */}
        <div className="border-t border-[var(--color-border-default)] pt-12">
          <SectionHeading
            eyebrow="All Destinations Supported"
            heading="Your path is yours to build."
            description="Whether your journey leads to a 4-year university, a skilled trade, an apprenticeship, community college, or direct venture creation, Career OS provides the exact same high-calibre intelligence."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 pt-4">
            {[
              { name: 'Apprenticeships', href: ROUTES.PATHWAYS_APPRENTICESHIPS },
              { name: 'Technical Trades', href: ROUTES.PATHWAYS_TRADES },
              { name: 'Community College', href: ROUTES.PATHWAYS_COLLEGE },
              { name: 'University', href: ROUTES.PATHWAYS_UNIVERSITY },
              { name: 'First Employment', href: ROUTES.PATHWAYS_FIRST_JOB },
              { name: 'Entrepreneurship', href: ROUTES.PATHWAYS_ENTREPRENEURSHIP },
            ].map((p) => (
              <a
                key={p.name}
                href={p.href}
                className="p-4 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-400)] text-center text-xs font-semibold text-[var(--color-text-primary)] transition-colors block"
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="p-8 sm:p-12 bg-[var(--color-surface-sunken)] border-[var(--color-border-default)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Build your Career OS today (100% Free)
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Individual access is completely free. No credit card, no subscription lock-in.
            </p>
          </div>
          <Button href={ROUTES.SIGNUP} variant="primary" size="md">
            Create Free Account <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </Card>
      </div>
    </div>
  );
}
