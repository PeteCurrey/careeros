import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Network, Award, Users, Shield, ArrowRight } from 'lucide-react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Career Network — Product | Career OS",
  description: "Career OS Product career Network. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/product/career-network",
  },
};

export default function CareerNetworkPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      {/* Full Screen Hero */}
      <section className="min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] py-16 lg:py-0">
        <div className="container-editorial">
          <div className="max-w-4xl space-y-6">
            <span className="section-label">
              Future Network Architecture
            </span>
            <h1 className="text-display-hero font-serif font-normal tracking-tight text-[var(--color-text-primary)]">
              Career Network: Built on verified evidence, not social vanity.
            </h1>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              We reject the social-media mechanics that have corrupted professional networking. No follower counts, no algorithmic engagement bait, no endless feed spam. Just high-trust connections centered on practice, authentic mentorship, and shared projects.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
                Start Free Account
              </Button>
              <Button href={ROUTES.STANDARDS_COMMUNITY_CODE} variant="secondary" size="lg">
                Community Standards
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="section-editorial">
        <div className="container-editorial space-y-16">

        {/* Core Differentiation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Evidence-Based Peer Graph
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Connections are rooted in shared work artifacts, co-authored repositories, verified institutional relationships, and authentic peer endorsements with context.
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Real Mentorship & Exchange
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Connect directly with verified practitioners in target industries for specific technical advice, portfolio review, and career navigation without influencer posturing.
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Zero Vanity Engagement
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              No viral content algorithms designed to maximize screen time. Career OS is designed to be useful, concise, and respectful of your attention.
            </p>
          </Card>
        </div>

        {/* CTA */}
        <Card className="p-8 sm:p-12 bg-[var(--color-surface-sunken)] border-[var(--color-border-default)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Join the evidence-based network
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Build high-trust professional relationships grounded in verified competence.
            </p>
          </div>
          <Button href={ROUTES.SIGNUP} variant="primary" size="md">
            Start Free <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </Card>
      </div>
    </div>
  </div>
  );
}
