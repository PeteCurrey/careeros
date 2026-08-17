'use client';

import React from 'react';
import Image from 'next/image';
import { MEDIA_ASSETS } from '@/lib/media';
import { Sparkles, ShieldCheck, Layers, CheckCircle2, Info } from 'lucide-react';

export function HeroMentorInterface() {
  return (
    <div className="w-full bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-subtle text-[var(--color-charcoal-deep)] font-sans">
      {/* Interface Bar */}
      <div className="px-4 py-3 bg-[var(--color-surface-sunken)] border-b border-[var(--color-border-default)] flex items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--color-text-secondary)]">
          <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
          <span>CAREER OS MENTOR ENGINE v2.4</span>
        </div>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[var(--radius-sm)] bg-[var(--color-taupe-100)] text-[var(--color-charcoal-deep)] text-[10px] uppercase font-bold tracking-wider border border-[var(--color-border-default)]">
          <Info className="w-3 h-3 text-[var(--color-taupe-600)]" />
          Illustrative Career OS Interface
        </span>
      </div>

      {/* Main Mentor Context Panel */}
      <div className="p-6 space-y-6">
        {/* System Mentor Header */}
        <div className="flex items-start gap-4 pb-5 border-b border-[var(--color-border-subtle)]">
          <div className="relative w-14 h-14 rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border-default)] shrink-0">
            <Image
              src={MEDIA_ASSETS.mentors.marcus.src}
              alt="System-assigned AI Mentor representation"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-[var(--color-charcoal-deep)] font-serif">
                System-Assigned AI Mentor
              </span>
              <span className="px-1.5 py-0.5 rounded bg-[var(--color-taupe-100)] text-[var(--color-taupe-700)] text-[10px] font-mono font-semibold">
                SYSTEM AI
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Domain Intelligence: Technology, Engineering &amp; Operations
            </p>
            <div className="flex items-center gap-3 pt-0.5 text-[11px] text-[var(--color-text-tertiary)] font-mono">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Grounded in Passport Evidence
              </span>
              <span>&bull;</span>
              <span>Zero Model Training on PII</span>
            </div>
          </div>
        </div>

        {/* Live Recommendation Card */}
        <div className="p-5 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[var(--color-taupe-600)]" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-charcoal-deep)]">
                Recommendation Rationale
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
              94% EVIDENCE OVERLAP
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider text-[10px] block mb-1">
                Current Gap Diagnosis
              </span>
              <p className="text-[var(--color-charcoal-deep)] leading-relaxed">
                &quot;You&apos;ve built strong technical evidence across distributed systems, but team leadership experience is currently the primary gap between your profile and the Senior Engineering Lead roles you&apos;re targeting.&quot;
              </p>
            </div>

            <div className="p-3 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded space-y-1.5">
              <span className="font-bold text-[var(--color-charcoal-deep)] text-xs block">
                Suggested Next Action:
              </span>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Lead a small cross-functional technical project over the next 90 days to capture leadership evidence without requiring a title change first.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px] text-[var(--color-text-secondary)]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>3 Capstone Evidence items linked</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[var(--color-taupe-600)] shrink-0" />
                <span>Linked to Career Graph Pathway</span>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="pt-2 flex items-center justify-between text-xs border-t border-[var(--color-border-subtle)]">
            <span className="text-[var(--color-text-tertiary)] italic">
              User control: Accept, Challenge, or Correct context
            </span>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded bg-[var(--color-charcoal-deep)] text-[var(--color-ivory-base)] font-semibold text-xs hover:opacity-90 transition-opacity">
                Add to Goal Action Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
