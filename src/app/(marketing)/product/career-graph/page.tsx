import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Compass, Network, GitFork, ArrowUpRight, ArrowRight } from 'lucide-react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Career Graph — Product | Career OS",
  description: "Career OS Product career Graph. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/product/career-graph",
  },
};

export default function CareerGraphPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-ivory-base)] text-[var(--color-charcoal-deep)]">
      {/* Full Screen Hero */}
      <section className="min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] py-16 lg:py-0">
        <div className="container-editorial">
          <div className="max-w-4xl space-y-6">
            <span className="section-label">
              Core Subsystem
            </span>
            <h1 className="text-display-hero font-serif font-normal tracking-tight text-[var(--color-charcoal-deep)]">
              Career Graph: Visualise careers as connected pathways.
            </h1>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              Careers are not rigid linear ladders. The Career Graph maps dynamic connections between skills, roles, industries, education, verified evidence, and possible future destinations to illuminate non-linear transitions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
                Explore Your Career Graph
              </Button>
              <Button href={ROUTES.PATHWAYS} variant="secondary" size="lg">
                Browse Pathways Directory
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <div className="section-editorial">
        <div className="container-editorial space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Network className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Underlying Skills Topology
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Every job title is decomposed into fundamental capability nodes, revealing unexpected overlaps between seemingly unrelated industries (e.g., aerospace avionics and healthcare robotics).
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <GitFork className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Bridging Transition Feasibility
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Calculate the exact delta required to execute a lateral pivot. Identify the 2–3 high-leverage skills or credentials needed to open an entirely new cluster of opportunities.
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Non-Hierarchical Pathways
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Connects vocational apprenticeships, 4-year degree programs, community college tracks, and self-directed portfolios into the same unified graph ontology.
            </p>
          </Card>
        </div>

        {/* CTA */}
        <Card className="p-8 sm:p-12 bg-[var(--color-surface-sunken)] border-[var(--color-border-default)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Map your pathway with Career Graph
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Discover reachable destinations and actionable bridging steps.
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
