import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { BookOpen, Compass, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Resources | Career OS",
  description: "Career OS Resources. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/resources",
  },
};

export default function ResourcesPage() {
  const resources = [
    {
      title: 'Career Intelligence Cloud',
      category: 'Intelligence',
      description: 'Comprehensive research on emerging occupational clusters, shifting skill demands, automation impacts, and regional wage benchmarks.',
    },
    {
      title: 'Skills Ontologies & Taxonomies',
      category: 'Frameworks',
      description: 'Structured mapping of over 12,000 discrete technical and human competencies cross-referenced against global qualification standards.',
    },
    {
      title: 'Industry Pathways & Transition Guides',
      category: 'Playbooks',
      description: 'Step-by-step technical transition guides for common lateral pivots, including software engineering, green energy, biomedical trades, and healthcare.',
    },
    {
      title: 'Ethical AI in Employment Standards',
      category: 'Governance',
      description: 'Our published technical standards on candidate respect, algorithm bias mitigation, and human-in-the-loop hiring governance.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      {/* Full Screen Hero */}
      <section className="min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] py-16 lg:py-0">
        <div className="container-editorial">
          <div className="max-w-4xl space-y-6">
            <span className="section-label">
              Knowledge &amp; Frameworks
            </span>
            <h1 className="text-display-hero font-serif font-normal tracking-tight text-[var(--color-text-primary)]">
              Career Intelligence &amp; Open Frameworks.
            </h1>
            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              In-depth guides, occupational research, skill taxonomies, and governance standards developed by Career OS researchers and partner institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <div className="section-editorial">
        <div className="container-editorial space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((res) => (
            <Card key={res.title} className="p-7 space-y-3 hover:border-[var(--color-brand-400)] transition-all">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]">
                {res.category}
              </span>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                {res.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {res.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="p-8 sm:p-12 bg-[var(--color-surface-sunken)] border-[var(--color-border-default)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Explore the platform firsthand
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Create your free account today and start building your lifetime professional record.
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
