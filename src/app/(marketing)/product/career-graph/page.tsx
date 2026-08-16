import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Compass, Network, GitFork, ArrowUpRight, ArrowRight } from 'lucide-react';

export default function CareerGraphPage() {
  return (
    <div className="section-padding">
      <div className="container-site space-y-16">
        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="brand" size="md">
            Core Subsystem
          </Badge>
          <h1 className="text-display font-bold tracking-tight text-[var(--color-text-primary)]">
            Career Graph: Visualise careers as connected pathways.
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            Careers are not rigid linear ladders. The Career Graph maps dynamic connections between skills, roles, industries, education, verified evidence, and possible future destinations to illuminate non-linear transitions.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href={ROUTES.SIGNUP} variant="primary" size="md">
              Explore Your Career Graph
            </Button>
            <Button href={ROUTES.PATHWAYS} variant="secondary" size="md">
              Browse Pathways Directory
            </Button>
          </div>
        </div>

        {/* Pillars */}
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
  );
}
