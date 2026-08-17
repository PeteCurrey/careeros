'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { ArrowRight } from 'lucide-react';

interface MindsetOption {
  id: string;
  label: string;
  shortLabel: string;
  response: string;
  relevant: { label: string; href: string }[];
}

const OPTIONS: MindsetOption[] = [
  {
    id: 'dont-know',
    label: "I don't know what career I want",
    shortLabel: "DON'T KNOW WHAT I WANT",
    response:
      "That's not a problem to fix right now — it's a starting point. Career OS helps you explore career environments, understand what you enjoy and what you're capable of, and gradually narrow possibilities over time. You don't need a destination to begin.",
    relevant: [
      { label: 'Career Mentor', href: ROUTES.PRODUCT_AI_CAREER_MENTOR },
      { label: 'Career Graph', href: ROUTES.PRODUCT_CAREER_GRAPH },
      { label: 'How Career OS Works', href: ROUTES.PRODUCT_HOW_IT_WORKS },
    ],
  },
  {
    id: 'know-area',
    label: "I know the area, not the specific job",
    shortLabel: 'KNOW THE AREA, NOT THE JOB',
    response:
      "Many careers sit inside a broader field and connect to others you haven't considered. Career Graph can help you explore the range of roles inside a career family — including some you might not have encountered from a standard careers list.",
    relevant: [
      { label: 'Career Graph', href: ROUTES.PRODUCT_CAREER_GRAPH },
      { label: 'Career Mentor', href: ROUTES.PRODUCT_AI_CAREER_MENTOR },
      { label: 'Pathways', href: ROUTES.PATHWAYS },
    ],
  },
  {
    id: 'route-choice',
    label: "I'm choosing between university and another route",
    shortLabel: 'UNIVERSITY VS. ANOTHER ROUTE',
    response:
      "University is a route — not the only one. Career OS can help you compare what different pathways lead to, what they require, and what they might look like in practice. The right route depends on where you want to go, not on which option carries more status.",
    relevant: [
      { label: 'Pathways Overview', href: ROUTES.PATHWAYS },
      { label: 'Apprenticeships', href: ROUTES.PATHWAYS_APPRENTICESHIPS },
      { label: 'University', href: ROUTES.PATHWAYS_UNIVERSITY },
      { label: 'Trades', href: ROUTES.PATHWAYS_TRADES },
    ],
  },
  {
    id: 'need-experience',
    label: "I need experience but don't know where to start",
    shortLabel: 'NEED EXPERIENCE',
    response:
      "You don't need to wait for your first full-time job to start building professional evidence. School projects, volunteering, part-time work, competitions and personal initiatives can all become meaningful evidence — if recorded properly. Career Passport can help you keep that record from the beginning.",
    relevant: [
      { label: 'Career Passport', href: ROUTES.PRODUCT_CAREER_PASSPORT },
      { label: 'Career Twin', href: ROUTES.PRODUCT_CAREER_TWIN },
      { label: 'Career Mentor', href: ROUTES.PRODUCT_AI_CAREER_MENTOR },
    ],
  },
  {
    id: 'have-plan',
    label: "I know what I want — I need a plan",
    shortLabel: 'KNOW WHAT I WANT — NEED A PLAN',
    response:
      "Knowing your direction is a strong position to be in. Career OS can help you understand what qualifications and evidence that route typically requires, identify what you already have, and map the gaps you need to close — including realistic preparation for applications and interviews.",
    relevant: [
      { label: 'Career Mentor', href: ROUTES.PRODUCT_AI_CAREER_MENTOR },
      { label: 'Career Twin', href: ROUTES.PRODUCT_CAREER_TWIN },
      { label: 'Career Passport', href: ROUTES.PRODUCT_CAREER_PASSPORT },
      { label: 'Opportunity Agent', href: ROUTES.PRODUCT_OPPORTUNITY_AGENT },
    ],
  },
  {
    id: 'worried-wrong',
    label: "I'm worried I'll choose wrong",
    shortLabel: "WORRIED I'LL CHOOSE WRONG",
    response:
      "That's one of the most common feelings. Career OS is designed around the idea that career direction changes over time — it's expected, not a failure. The Career Twin and Passport grow with you. The Mentor can help you think through decisions without pressure. Changing direction later is a normal part of most careers.",
    relevant: [
      { label: 'Career Mentor', href: ROUTES.PRODUCT_AI_CAREER_MENTOR },
      { label: 'Career Twin', href: ROUTES.PRODUCT_CAREER_TWIN },
      { label: 'How Career OS Works', href: ROUTES.PRODUCT_HOW_IT_WORKS },
    ],
  },
];

export function StudentMindsetInteractive() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = OPTIONS.find((o) => o.id === selectedId);

  return (
    <div className="w-full" id="student-mindset-interactive">
      {/* Option Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {OPTIONS.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setSelectedId(opt.id === selectedId ? null : opt.id)}
            className={`p-5 rounded-[var(--radius-card)] text-left transition-all duration-200 border focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] ${
              selectedId === opt.id
                ? 'bg-[var(--accent-blue-subtle)] border-[var(--accent-blue)] text-[var(--color-text-primary)]'
                : 'bg-[var(--color-surface-raised)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-[var(--accent-blue-border)] hover:text-[var(--color-text-primary)]'
            }`}
            aria-pressed={selectedId === opt.id}
          >
            <span className={`text-[10px] font-mono font-bold tracking-widest uppercase block mb-2 ${selectedId === opt.id ? 'text-[var(--accent-blue)]' : 'text-[var(--color-taupe-300)]'}`}>
              {opt.shortLabel}
            </span>
            <p className="text-xs sm:text-sm font-medium leading-snug">
              {opt.label}
            </p>
          </button>
        ))}
      </div>

      {/* Response Panel */}
      {selected && (
        <div className="mt-6 p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--accent-blue-border)] animate-in fade-in duration-300">
          <div className="space-y-5">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-blue)]">
                Career OS Response
              </span>
              <p className="text-sm sm:text-base text-[var(--color-text-primary)] leading-relaxed">
                {selected.response}
              </p>
            </div>

            {selected.relevant.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)]">
                  Relevant to you
                </span>
                <div className="flex flex-wrap gap-2">
                  {selected.relevant.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-default)] transition-colors"
                    >
                      {r.label} <ArrowRight className="w-3 h-3" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <p className="text-[10px] text-[var(--color-text-tertiary)] font-mono border-t border-[var(--color-border-subtle)] pt-3">
              Illustrative Career OS experience — not personalised without account context.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
