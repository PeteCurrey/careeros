import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Briefcase, TrendingUp, RefreshCw, Globe, Shield, ArrowRight } from 'lucide-react';

export default function ForProfessionalsPage() {
  return (
    <div className="section-padding">
      <div className="container-site space-y-16">
        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="brand" size="md">
            Professionals & Leaders
          </Badge>
          <h1 className="text-display font-bold tracking-tight text-[var(--color-text-primary)]">
            A strategic operating system for your entire working life.
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            Career OS is not a product you only visit during sudden job searches. It is personal infrastructure for continuous skill compounding, compensation progression, lateral industry pivots, leadership growth, and international mobility.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href={ROUTES.SIGNUP} variant="primary" size="md">
              Start Free Account
            </Button>
            <Button href={ROUTES.PRODUCT_CAREER_TWIN} variant="secondary" size="md">
              Explore Career Twin
            </Button>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Progression & Compensation Intelligence
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Track skill accumulation, market benchmark alignment, and leadership development. Understand what capabilities drive promotion and compensation growth in your field without opaque corporate guesswork.
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Strategic Industry Pivots
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Pivoting sectors should not mean starting from zero. Your Career Graph highlights transferable capabilities, identifies adjacent domains, and charts the bridge required to execute credible lateral moves.
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              International Mobility & Venture Building
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Prepare for global relocation with multi-jurisdiction qualification mappings, or leverage your Career Twin to assemble co-founders, advisors, and capabilities for entrepreneurial ventures.
            </p>
          </Card>
        </div>

        {/* Granular Control */}
        <div className="border-t border-[var(--color-border-default)] pt-12">
          <SectionHeading
            eyebrow="Privacy & Independence"
            heading="You own your career data. Never your employer."
            description="Your Career Twin and Career Passport belong strictly to you. Granular access controls ensure your current employer, prospective recruiters, and network only ever see what you explicitly choose to disclose."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-3">
              <h4 className="text-base font-bold text-[var(--color-text-primary)]">
                Field-Level Visibility Control
              </h4>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Configure separate access permissions for your system mentor, direct connections, verified prospective employers, or public credentials ledger. Revoke access grants at any time.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-base font-bold text-[var(--color-text-primary)]">
                Redundancy & Re-entry Resilience
              </h4>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                If corporate restructuring occurs, your career foundation remains fully intact. You maintain an uncompromised record of your verified achievements, artifacts, and network connections.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Card className="p-8 sm:p-12 bg-[var(--color-surface-sunken)] border-[var(--color-border-default)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Take ownership of your career operating system
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Free forever for individuals. Serious infrastructure designed to compound over your entire professional life.
            </p>
          </div>
          <Button href={ROUTES.SIGNUP} variant="primary" size="md">
            Start Your Career OS (Free) <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </Card>
      </div>
    </div>
  );
}
