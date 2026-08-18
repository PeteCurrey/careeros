'use client';

import React from 'react';
import Link from 'next/link';
import { TrajectorySummary } from '@/types/platform/career-brief';
import { Card } from '@/components/ui/Card';
import { ROUTES } from '@/lib/routes';
import {
  Compass,
  ArrowRight,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface TrajectoryCardProps {
  trajectory: TrajectorySummary;
}

export function TrajectoryCard({ trajectory }: TrajectoryCardProps) {
  return (
    <Card className="p-6 sm:p-7 space-y-5 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
      <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border-default)]">
        <div className="flex items-center gap-2">
          <GitBranch className="w-4 h-4 text-[#2F8FFF]" />
          <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
            Trajectory Vector
          </h3>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5" /> Grounded &bull; Non-Predictive
        </span>
      </div>

      {/* Trajectory 3-Stage Map */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        {/* Where I Am */}
        <div className="p-4 rounded-lg bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1.5">
          <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] font-semibold block">
            01. Where I Am
          </span>
          <p className="font-semibold text-white capitalize">
            {trajectory.currentStage.toLowerCase()}
          </p>
          <p className="text-[11px] text-[var(--color-text-tertiary)]">
            {trajectory.supportingCapabilityCount} capability vectors mapped
          </p>
        </div>

        {/* What I'm Working Toward */}
        <div className="p-4 rounded-lg bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] space-y-1.5 shadow-sm">
          <span className="text-[10px] font-mono uppercase text-[var(--accent-blue)] font-semibold block">
            02. Working Toward
          </span>
          <p className="font-semibold text-white">
            {trajectory.workingToward}
          </p>
          <p className="text-[11px] text-[var(--color-text-secondary)]">
            Active milestone focus
          </p>
        </div>

        {/* Possible Next Direction */}
        <div className="p-4 rounded-lg bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1.5">
          <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold block">
            03. Possible Next Direction
          </span>
          <p className="font-semibold text-white">
            {trajectory.possibleNextDirection}
          </p>
          <p className="text-[11px] text-[var(--color-text-tertiary)]">
            Emerging topological vector
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs font-mono text-[var(--color-taupe-300)]">
        <p className="text-[11px]">
          {trajectory.evidenceBasis}
        </p>

        <Link
          href={ROUTES.PRODUCT_CAREER_GRAPH}
          className="text-[#2F8FFF] hover:underline inline-flex items-center gap-1 shrink-0"
        >
          <span>Explore Career Graph</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </Card>
  );
}
