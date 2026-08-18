'use client';

import React from 'react';
import Link from 'next/link';
import { CareerBriefItem } from '@/types/platform/career-brief';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  HelpCircle,
  MessageSquare,
  Sparkles,
  Award,
  Compass,
  CheckCircle2,
} from 'lucide-react';

interface NextBestMoveCardProps {
  item: CareerBriefItem;
  mentorFirstName?: string;
  onOpenWhyThis: (item: CareerBriefItem) => void;
  onOpenAskMentor: (item: CareerBriefItem) => void;
}

export function NextBestMoveCard({
  item,
  mentorFirstName = 'Marcus',
  onOpenWhyThis,
  onOpenAskMentor,
}: NextBestMoveCardProps) {
  return (
    <section className="space-y-3" aria-label="Your Next Best Move">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="accent-blue-dot accent-blue-dot-pulse" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
            Your Next Move
          </h2>
        </div>
        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-semibold">
          Top Priority
        </span>
      </div>

      <Card className="p-6 sm:p-8 bg-gradient-to-br from-[var(--color-surface-raised)] to-[var(--color-surface-base)] border border-[var(--accent-blue-border)] shadow-xl relative overflow-hidden">
        <div className="space-y-5 max-w-3xl">
          {/* Category & Source Header */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-[var(--accent-blue-subtle)] text-[var(--accent-blue)] border border-[var(--accent-blue-border)] font-bold">
              {item.category.replace(/_/g, ' ')}
            </span>
            <span className="text-xs font-mono text-[var(--color-taupe-300)]">
              &bull; {item.sourceReason}
            </span>
            {item.suggestedDuration && (
              <span className="text-xs font-mono text-[var(--color-text-tertiary)] flex items-center gap-1">
                <Clock className="w-3 h-3 text-[var(--color-taupe-300)]" />
                {item.suggestedDuration}
              </span>
            )}
          </div>

          {/* Action Headline & Narrative */}
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-white font-normal leading-tight">
              {item.title}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {item.whyItMatters}
            </p>
          </div>

          {/* Primary & Secondary Action Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Button
              href={item.primaryCTA.href}
              variant="primary"
              size="md"
              className="text-xs font-mono"
            >
              {item.primaryCTA.label} <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>

            <Button
              variant="secondary"
              size="md"
              onClick={() => onOpenAskMentor(item)}
              className="text-xs font-mono flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
              <span>Ask {mentorFirstName}</span>
            </Button>

            <button
              onClick={() => onOpenWhyThis(item)}
              className="text-xs font-mono text-[var(--color-taupe-300)] hover:text-white flex items-center gap-1 px-2.5 py-2 rounded transition-colors hover:bg-white/5"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#2F8FFF]" />
              <span>Why this?</span>
            </button>
          </div>
        </div>
      </Card>
    </section>
  );
}
