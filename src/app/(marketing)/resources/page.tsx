import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { BookOpen, Compass, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

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
    <div className="section-padding">
      <div className="container-site space-y-16">
        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="brand" size="md">
            Knowledge & Frameworks
          </Badge>
          <h1 className="text-display font-bold tracking-tight text-[var(--color-text-primary)]">
            Career Intelligence & Open Frameworks.
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            In-depth guides, occupational research, skill taxonomies, and governance standards developed by Career OS researchers and partner institutions.
          </p>
        </div>

        {/* Resources Grid */}
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
  );
}
