import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Cpu, UserCheck, Award, Compass, Network, Settings } from 'lucide-react';

export default function AppDashboardPage() {
  return (
    <div className="section-padding">
      <div className="container-site space-y-10">
        {/* Welcome Header */}
        <div className="space-y-2">
          <p className="text-eyebrow font-mono uppercase text-xs">Career OS Dashboard</p>
          <h1 className="text-headline font-bold tracking-tight text-[var(--color-text-primary)]">
            Welcome to your Career OS
          </h1>
          <p className="text-body text-[var(--color-text-secondary)]">
            Your career infrastructure is being built. Complete onboarding to activate all features.
          </p>
        </div>

        {/* Onboarding Callout */}
        <Card className="p-6 sm:p-8 border-[var(--color-brand-200)] dark:border-[var(--color-brand-900)] bg-[var(--color-surface-raised)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="space-y-2">
              <Badge variant="brand" size="sm">Getting Started</Badge>
              <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
                Complete your foundation profile
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Set up your initial Career OS profile to unlock personalised recommendations and career intelligence.
              </p>
            </div>
            <Button href={ROUTES.APP_ONBOARDING} variant="primary" size="md" className="shrink-0">
              Start Onboarding
            </Button>
          </div>
        </Card>

        {/* Platform Engines Status */}
        <div>
          <h2 className="text-base font-bold text-[var(--color-text-primary)] mb-4">Platform Systems</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'AI Career Mentor', icon: Cpu, status: 'Coming Soon', href: ROUTES.PRODUCT_AI_CAREER_MENTOR },
              { title: 'Career Twin', icon: UserCheck, status: 'Coming Soon', href: ROUTES.PRODUCT_CAREER_TWIN },
              { title: 'Career Passport', icon: Award, status: 'Coming Soon', href: ROUTES.PRODUCT_CAREER_PASSPORT },
              { title: 'Career Graph', icon: Compass, status: 'Coming Soon', href: ROUTES.PRODUCT_CAREER_GRAPH },
              { title: 'Opportunity Agent', icon: Compass, status: 'Future', href: ROUTES.PRODUCT_OPPORTUNITY_AGENT },
              { title: 'Career Network', icon: Network, status: 'Future', href: ROUTES.PRODUCT_CAREER_NETWORK },
            ].map((engine) => {
              const Icon = engine.icon;
              return (
                <Card key={engine.title} className="p-5 flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--color-surface-interactive)] text-[var(--color-text-tertiary)] shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[var(--color-text-primary)] truncate">{engine.title}</p>
                    <p className="text-xs text-[var(--color-text-tertiary)]">{engine.status}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-3 text-sm">
          <Link
            href={ROUTES.APP_SETTINGS_ACCOUNT}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)] transition-colors text-xs font-medium"
          >
            <Settings className="w-3.5 h-3.5" />
            Account Settings
          </Link>
          <Link
            href={ROUTES.APP_SETTINGS_PRIVACY}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)] transition-colors text-xs font-medium"
          >
            Privacy Controls
          </Link>
        </div>
      </div>
    </div>
  );
}
