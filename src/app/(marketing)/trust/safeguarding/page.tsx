import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheck, Users, Lock, EyeOff, FileText, ArrowRight } from 'lucide-react';

export default function SafeguardingPage() {
  return (
    <div className="section-padding">
      <div className="container-site space-y-16">
        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="brand" size="md">
            Student & Youth Safety
          </Badge>
          <h1 className="text-display font-bold tracking-tight text-[var(--color-text-primary)]">
            Safeguarding architecture for students and minors.
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            Protecting high school students and young people requires elevated technical and institutional safeguards. We enforce age-banded visibility, parent/guardian relationship models, and strict institutional boundaries.
          </p>
        </div>

        {/* Safeguarding Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <EyeOff className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              No Unsolicited Commercial Access
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Student profiles are never accessible to third-party commercial recruiters without explicit school district or guardian authorization.
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Guardian Relationship Models
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Integrated parent/guardian relationship tracking allows verified guardians to review policy consents and data-sharing preferences for minors.
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Strict Under-13 Protection
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              We do not launch open consumer registration for children under 13, adhering strictly to COPPA guidelines and verified school institutional arrangements.
            </p>
          </Card>
        </div>

        {/* CTA */}
        <Card className="p-8 sm:p-12 bg-[var(--color-surface-sunken)] border-[var(--color-border-default)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Questions about school safeguarding?
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Our education compliance team is available to review district data protection agreements.
            </p>
          </div>
          <Button href={ROUTES.COMPANY_CONTACT} variant="primary" size="md">
            Contact Safety Team <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </Card>
      </div>
    </div>
  );
}
