import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/lib/routes';
import { Compass, Briefcase, ArrowRight, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Explore | Career OS',
  description: 'Explore career maps, topological pathways, and matching bilateral opportunities.',
};

export default function ExplorePage() {
  return (
    <div className="py-8 px-4 sm:px-6 max-w-4xl mx-auto space-y-8">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-[var(--accent-blue-subtle)] text-[var(--accent-blue)] border border-[var(--accent-blue-border)] font-bold">
            Discovery Hub
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif text-white font-normal">
          Explore Pathways &amp; Opportunities
        </h1>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
          Navigate topological career connections and discover privacy-preserving opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Career Map Card */}
        <Link href="/app/map" className="block group">
          <Card className="p-6 space-y-4 bg-[var(--color-surface-raised)] border-[var(--color-border-default)] group-hover:border-[#2F8FFF]/40 transition-colors h-full">
            <div className="w-10 h-10 rounded-lg bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] flex items-center justify-center text-[var(--accent-blue)]">
              <Compass className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h2 className="text-base font-bold text-white group-hover:text-[#6BB8FF] transition-colors">
                Career Map
              </h2>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Inspect adjacent industry bridges, transferable capability overlaps, and requirement checklists.
              </p>
            </div>
            <div className="pt-2 text-xs font-mono text-[#2F8FFF] flex items-center gap-1">
              <span>Explore Graph</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Card>
        </Link>

        {/* Opportunity Agent Card */}
        <Link href="/app/opportunities" className="block group">
          <Card className="p-6 space-y-4 bg-[var(--color-surface-raised)] border-[var(--color-border-default)] group-hover:border-emerald-500/40 transition-colors h-full">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h2 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                Opportunity Agent
              </h2>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Passive bilateral discovery matching verified organizational briefs with zero public broadcasts.
              </p>
            </div>
            <div className="pt-2 text-xs font-mono text-emerald-400 flex items-center gap-1">
              <span>View Posture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Card>
        </Link>
      </div>

      <div className="pt-4 border-t border-[var(--color-border-default)]">
        <Link
          href={ROUTES.APP_DASHBOARD}
          className="text-xs font-mono text-[var(--color-taupe-300)] hover:text-white inline-flex items-center gap-1.5"
        >
          &larr; Return to Today
        </Link>
      </div>
    </div>
  );
}
