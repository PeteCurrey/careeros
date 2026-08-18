'use client';

import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Lock,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface FeaturePlaceholderProps {
  moduleName: string;
  moduleCategory: string;
  subtitle: string;
  description: string;
  connectedDataSummary: {
    label: string;
    value: string;
    description: string;
  }[];
  plannedPass: string;
  mentorPrompt?: string;
}

export function FeaturePlaceholder({
  moduleName,
  moduleCategory,
  subtitle,
  description,
  connectedDataSummary,
  plannedPass,
  mentorPrompt,
}: FeaturePlaceholderProps) {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col justify-center space-y-8">
      {/* Back to Today breadcrumb */}
      <div>
        <Link
          href={ROUTES.APP_DASHBOARD}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-blue)] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Return to Today
        </Link>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[var(--accent-blue-subtle)] text-[var(--accent-blue)] border border-[var(--accent-blue-border)] font-bold">
            {moduleCategory}
          </span>
          <Badge variant="verified" size="sm">
            {plannedPass}
          </Badge>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif text-white font-normal">
          {moduleName}
        </h1>
        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      </div>

      {/* Connected Data Points Box */}
      <Card className="p-6 sm:p-8 space-y-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-xl">
        <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-default)]">
          <span className="text-xs font-mono uppercase text-white font-semibold flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Active Grounded State
          </span>
          <span className="text-[11px] font-mono text-[var(--color-taupe-300)]">
            Zero Mock Data
          </span>
        </div>

        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
          {description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {connectedDataSummary.map((item) => (
            <div
              key={item.label}
              className="p-4 rounded-lg bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1.5"
            >
              <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] block font-semibold">
                {item.label}
              </span>
              <p className="text-sm font-bold text-white">{item.value}</p>
              <p className="text-[11px] text-[var(--color-text-secondary)] leading-snug">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-[var(--color-border-default)]">
        <Button href={ROUTES.APP_DASHBOARD} variant="primary" size="md" className="justify-center">
          Go to Today Operating View <ArrowRight className="w-4 h-4 ml-1.5" />
        </Button>

        {mentorPrompt && (
          <Button href={ROUTES.PRODUCT_AI_CAREER_MENTOR} variant="secondary" size="md" className="justify-center">
            Ask Mentor About This &rarr;
          </Button>
        )}
      </div>
    </div>
  );
}
