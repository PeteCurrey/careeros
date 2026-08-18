'use client';

import React from 'react';
import Link from 'next/link';
import { CareerSignal } from '@/types/platform/career-brief';
import { Card } from '@/components/ui/Card';
import {
  Activity,
  Award,
  UserCheck,
  Compass,
  Target,
  ArrowRight,
  Bot,
} from 'lucide-react';

interface CareerSignalsCardProps {
  signals: CareerSignal[];
}

export function CareerSignalsCard({ signals }: CareerSignalsCardProps) {
  if (!signals || signals.length === 0) return null;

  const getSignalIcon = (type: CareerSignal['type']) => {
    switch (type) {
      case 'TWIN_EVOLVED':
        return UserCheck;
      case 'EVIDENCE_VERIFIED':
        return Award;
      case 'GRAPH_UPDATED':
        return Compass;
      case 'MILESTONE_DUE':
        return Target;
      case 'MENTOR_NOTE':
        return Bot;
      default:
        return Activity;
    }
  };

  return (
    <Card className="p-6 space-y-4 bg-[var(--color-surface-raised)] border-[var(--color-border-default)]">
      <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border-default)]">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#2F8FFF]" />
          <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
            Career Signals
          </h3>
        </div>
        <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">
          Model &amp; Ledger Events
        </span>
      </div>

      <div className="space-y-3">
        {signals.map((sig) => {
          const Icon = getSignalIcon(sig.type);

          return (
            <div
              key={sig.id}
              className="p-3 rounded-lg bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1.5 text-xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <Icon className="w-3.5 h-3.5 text-[#2F8FFF] shrink-0" />
                  <span>{sig.title}</span>
                </div>
                {sig.badge && (
                  <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)]">
                    {sig.badge}
                  </span>
                )}
              </div>

              <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                {sig.description}
              </p>

              {sig.actionHref && (
                <div className="pt-1">
                  <Link
                    href={sig.actionHref}
                    className="text-[11px] font-mono text-[var(--accent-blue)] hover:underline inline-flex items-center gap-1"
                  >
                    <span>{sig.actionLabel || 'Inspect'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
