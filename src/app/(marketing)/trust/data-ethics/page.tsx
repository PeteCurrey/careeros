import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Lock, Shield, Eye, Database, ArrowRight } from 'lucide-react';

export default function DataEthicsPage() {
  return (
    <div className="section-padding">
      <div className="container-site space-y-16">
        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="brand" size="md">
            Data Ethics & Sovereignty
          </Badge>
          <h1 className="text-display font-bold tracking-tight text-[var(--color-text-primary)]">
            Your career data belongs to you. Always.
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            We treat your Career Twin, skills record, and personal development history as consequential private assets. We separate data ownership from matching eligibility, ensuring you retain total sovereignty.
          </p>
        </div>

        {/* Ethical Foundations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              No Advertising Data Sales
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              We do not monetize user attention by selling private career records, student profiles, or compensation expectations to behavioral ad networks.
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Granular Data Access Grants
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Access to specific Career Twin fields requires an explicit, revocable grant. An employer receiving access to your portfolio cannot see your internal mentor reflections.
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Export & Lifecycle Rights
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Export your Career Passport and Twin data at any time in open, structured formats. Full support for account deletion and data lifecycle purging.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
