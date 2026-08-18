'use client';

import React from 'react';
import Link from 'next/link';
import { CareerBriefItem } from '@/types/platform/career-brief';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  ArrowRight,
  HelpCircle,
  MessageSquare,
  Clock,
  Award,
  Layers,
  Compass,
  CheckCircle2,
} from 'lucide-react';

interface CareerBriefSectionProps {
  items: CareerBriefItem[];
  mentorFirstName?: string;
  onOpenWhyThis: (item: CareerBriefItem) => void;
  onOpenAskMentor: (item: CareerBriefItem) => void;
}

export function CareerBriefSection({
  items,
  mentorFirstName = 'Marcus',
  onOpenWhyThis,
  onOpenAskMentor,
}: CareerBriefSectionProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="space-y-4" aria-label="Career Brief: What Matters Right Now">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Career Brief
            </h2>
            <span className="text-[10px] font-mono text-[var(--color-taupe-300)]">
              &bull; What matters right now ({items.length} items)
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <Card
            key={item.id}
            className="p-5 flex flex-col justify-between space-y-4 bg-[var(--color-surface-raised)] border-[var(--color-border-default)] hover:border-[var(--color-border-subtle)] transition-colors h-full"
          >
            <div className="space-y-2.5">
              {/* Category tag */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[var(--accent-blue)] font-bold">
                  {item.category.replace(/_/g, ' ')}
                </span>
                {item.suggestedDuration && (
                  <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" />
                    {item.suggestedDuration}
                  </span>
                )}
              </div>

              {/* Title & Brief */}
              <h3 className="text-sm font-semibold text-white leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed line-clamp-3">
                {item.whyItMatters}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-[var(--color-border-default)] space-y-2">
              <div className="flex items-center justify-between gap-2">
                <Button
                  href={item.primaryCTA.href}
                  variant="primary"
                  size="sm"
                  className="text-xs font-mono w-full justify-center"
                >
                  {item.primaryCTA.label}
                </Button>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono pt-1 text-[var(--color-taupe-300)]">
                <button
                  onClick={() => onOpenAskMentor(item)}
                  className="hover:text-white flex items-center gap-1 transition-colors"
                >
                  <MessageSquare className="w-3 h-3 text-[var(--accent-blue)]" />
                  <span>Ask {mentorFirstName}</span>
                </button>

                <button
                  onClick={() => onOpenWhyThis(item)}
                  className="hover:text-white flex items-center gap-1 transition-colors"
                >
                  <HelpCircle className="w-3 h-3 text-[#2F8FFF]" />
                  <span>Why this?</span>
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
