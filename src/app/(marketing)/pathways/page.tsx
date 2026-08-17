import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

interface PathwayItem {
  name: string;
  category: string;
  description: string;
  href: string;
}

const PATHWAYS: PathwayItem[] = [
  {
    name: 'Skilled Vocational Trades',
    category: 'Hands-On Mastery',
    description: 'Electrical, mechanical, precision tooling, plumbing, and modern infrastructure systems with direct commercial progression.',
    href: ROUTES.PATHWAYS_TRADES,
  },
  {
    name: 'Technical Apprenticeships',
    category: 'Earn & Learn',
    description: 'Degree apprenticeships, corporate apprenticeships, and government-accredited workforce programs across technology and operations.',
    href: ROUTES.PATHWAYS_APPRENTICESHIPS,
  },
  {
    name: 'University & Higher Education',
    category: 'Academic & Research',
    description: 'Undergraduate and postgraduate degrees, research programs, and professional university credentials.',
    href: ROUTES.PATHWAYS_UNIVERSITY,
  },
  {
    name: 'Community & Technical College',
    category: 'Applied Degrees',
    description: 'Associate degrees, technical diplomas, and targeted certification sequences that bridge directly to employment or transfer.',
    href: ROUTES.PATHWAYS_COLLEGE,
  },
  {
    name: 'First Employment & Early Career',
    category: 'Workforce Launch',
    description: 'Entry-level roles, graduate schemes, internships, and rapid foundational experience building.',
    href: ROUTES.PATHWAYS_FIRST_JOB,
  },
  {
    name: 'Lateral Industry Pivots',
    category: 'Mid-Career Evolution',
    description: 'Transferable capability mapping, reskilling sprints, and strategic cross-sector career transitions.',
    href: ROUTES.PATHWAYS_CAREER_CHANGE,
  },
  {
    name: 'Executive Leadership & Management',
    category: 'Organizational Direction',
    description: 'People leadership, strategy execution, executive benchmarking, and organizational stewardship.',
    href: ROUTES.PATHWAYS_LEADERSHIP,
  },
  {
    name: 'Venture & Entrepreneurship',
    category: 'Founders & Builders',
    description: 'Founding companies, trade contracting businesses, advisory practices, and independent commercial ventures.',
    href: ROUTES.PATHWAYS_ENTREPRENEURSHIP,
  },
];

export default function PathwaysPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-ivory-base)]">
      {/* Header */}
      <section className="section-editorial bg-[var(--color-ivory-base)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-6 max-w-4xl">
          <span className="section-label">
            Universal Career Pathways
          </span>
          <h1 className="text-display-section text-[var(--color-charcoal-deep)]">
            Every career route supported with equal prestige and depth.
          </h1>
          <p className="text-lead text-[var(--color-text-secondary)]">
            Career OS does not steer people toward a single predetermined path. Whether you are pursuing a licensed trade, an engineering degree, a corporate apprenticeship, or an independent business, our operating system provides continuous, high-fidelity guidance.
          </p>
        </div>
      </section>

      {/* Pathways Directory Grid */}
      <section className="section-editorial bg-[var(--color-ivory-warm)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PATHWAYS.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group flex flex-col justify-between p-7 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] hover:border-[var(--color-charcoal-base)] transition-all shadow-subtle min-h-[220px]"
              >
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-semibold text-[var(--color-taupe-600)] tracking-wider">
                    {p.category}
                  </span>
                  <h3 className="text-base font-semibold text-[var(--color-charcoal-deep)] group-hover:text-black transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed pt-1">
                    {p.description}
                  </p>
                </div>
                <div className="flex items-center text-xs font-semibold text-[var(--color-charcoal-deep)] pt-4 border-t border-[var(--color-border-subtle)]">
                  <span>Explore pathway</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-editorial bg-[var(--color-charcoal-base)] text-[var(--color-ivory-base)] border-t border-[var(--color-charcoal-border)]">
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-normal text-white tracking-tight">
              Begin exploring your pathway on Career OS
            </h3>
            <p className="text-sm text-[var(--color-text-inverse-muted)] leading-relaxed">
              100% free forever for individuals. Start discovering and building verified evidence today.
            </p>
          </div>
          <Button href={ROUTES.SIGNUP} variant="dark" size="lg" className="shrink-0">
            Start Free <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

