'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { ArrowRight, Compass } from 'lucide-react';

interface ProfessionalMindsetOption {
  id: string;
  title: string;
  tagline: string;
  exploration: string;
  products: { label: string; href: string }[];
  nextQuestion: string;
}

const OPTIONS: ProfessionalMindsetOption[] = [
  {
    id: 'progress',
    title: 'I WANT TO PROGRESS',
    tagline: "I think I'm ready for more responsibility.",
    exploration:
      "Career OS analyzes the gap between what you currently do and what higher-level roles actually require. Rather than assuming you need another generic qualification, we focus on identifying missing leadership, commercial, or operational evidence.",
    products: [
      { label: 'Career Twin', href: ROUTES.PRODUCT_CAREER_TWIN },
      { label: 'Career Mentor', href: ROUTES.PRODUCT_AI_CAREER_MENTOR },
      { label: 'Career Passport', href: ROUTES.PRODUCT_CAREER_PASSPORT },
    ],
    nextQuestion: 'What concrete evidence of delegation and project delivery do you currently lack?',
  },
  {
    id: 'earn-more',
    title: 'I WANT TO EARN MORE',
    tagline: 'I need to understand my position before negotiating or moving.',
    exploration:
      'We help you prepare a structured, evidence-backed case based on expanded responsibilities, delivered outcomes, and realistic market dynamics — moving beyond feelings to demonstrable business value.',
    products: [
      { label: 'Career Mentor', href: ROUTES.PRODUCT_AI_CAREER_MENTOR },
      { label: 'Career Passport', href: ROUTES.PRODUCT_CAREER_PASSPORT },
      { label: 'Career Graph', href: ROUTES.PRODUCT_CAREER_GRAPH },
    ],
    nextQuestion: 'How has your operational impact and scope broadened since your compensation was last reviewed?',
  },
  {
    id: 'change-direction',
    title: 'I WANT TO CHANGE DIRECTION',
    tagline: "I don't want another version of the same job.",
    exploration:
      'Career Graph maps your underlying capabilities — risk assessment, client negotiation, diagnostic reasoning — across adjacent industries, revealing lateral transitions where your experience provides unfair advantage.',
    products: [
      { label: 'Career Graph', href: ROUTES.PRODUCT_CAREER_GRAPH },
      { label: 'Pathways: Career Change', href: ROUTES.PATHWAYS_CAREER_CHANGE },
      { label: 'Career Twin', href: ROUTES.PRODUCT_CAREER_TWIN },
    ],
    nextQuestion: 'Which 3 core technical capabilities do you want to keep, and which industry constraints do you want to leave behind?',
  },
  {
    id: 'better-leader',
    title: 'I WANT TO BECOME A BETTER LEADER',
    tagline: 'The next stage is more about people than technical work.',
    exploration:
      'The skills that made you an exceptional individual contributor are rarely the ones needed to lead. Career Mentor provides a confidential space to rehearse difficult feedback, delegation frameworks, and stakeholder management.',
    products: [
      { label: 'Career Mentor', href: ROUTES.PRODUCT_AI_CAREER_MENTOR },
      { label: 'Pathways: Leadership', href: ROUTES.PATHWAYS_LEADERSHIP },
      { label: 'Career Passport', href: ROUTES.PRODUCT_CAREER_PASSPORT },
    ],
    nextQuestion: 'How are you transitioning from executing tasks directly to enabling and evaluating team execution?',
  },
  {
    id: 'hit-a-wall',
    title: "I'VE HIT A WALL",
    tagline: "I'm capable, but my career feels stuck.",
    exploration:
      'Career drift happens quietly when you become indispensable in your current function. We help deconstruct your routine into structured achievements, unearthing overlooked progression routes and internal mobility angles.',
    products: [
      { label: 'Career Twin', href: ROUTES.PRODUCT_CAREER_TWIN },
      { label: 'Career Mentor', href: ROUTES.PRODUCT_AI_CAREER_MENTOR },
      { label: 'How Career OS Works', href: ROUTES.PRODUCT_HOW_IT_WORKS },
    ],
    nextQuestion: 'Are you stuck due to organisational ceiling, lack of visible evidence, or an overly narrow specialisation?',
  },
  {
    id: 'longer-term',
    title: "I'M THINKING LONGER TERM",
    tagline: 'I may eventually want to work for myself or build a venture.',
    exploration:
      'Entrepreneurship and consultancy are logical extensions of deep domain expertise. Career OS helps you evaluate whether your commercial knowledge, industry network, and problem domain are ready for independent practice.',
    products: [
      { label: 'Pathways: Entrepreneurship', href: ROUTES.PATHWAYS_ENTREPRENEURSHIP },
      { label: 'Career Mentor', href: ROUTES.PRODUCT_AI_CAREER_MENTOR },
      { label: 'Career Passport', href: ROUTES.PRODUCT_CAREER_PASSPORT },
    ],
    nextQuestion: 'What specific high-value operational problem do you solve better than a generalised agency or consultancy?',
  },
];

export function ProfessionalMindsetInteractive() {
  const [selectedId, setSelectedId] = useState<string>('progress');

  const selected = OPTIONS.find((o) => o.id === selectedId) ?? OPTIONS[0]!;

  return (
    <div className="w-full space-y-6" id="professional-mindset-interactive">
      {/* Selection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {OPTIONS.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setSelectedId(opt.id)}
            className={`p-5 rounded-[var(--radius-card)] text-left transition-all duration-200 border focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] ${
              selectedId === opt.id
                ? 'bg-[var(--color-surface-raised)] border-[var(--accent-blue)] text-[var(--color-text-primary)] shadow-md'
                : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-default)] hover:text-[var(--color-text-primary)]'
            }`}
            aria-pressed={selectedId === opt.id}
          >
            <span
              className={`text-[10px] font-mono font-bold tracking-widest uppercase block mb-1.5 ${
                selectedId === opt.id ? 'text-[var(--accent-blue)]' : 'text-[var(--color-taupe-300)]'
              }`}
            >
              {opt.title}
            </span>
            <p className="text-xs sm:text-sm font-medium leading-snug">
              {opt.tagline}
            </p>
          </button>
        ))}
      </div>

      {/* Response Display Panel */}
      <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-6 animate-in fade-in duration-300">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[var(--accent-blue)]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-blue)] font-semibold">
              How Career OS Approaches This
            </span>
          </div>
          <p className="text-sm sm:text-base text-[var(--color-text-primary)] leading-relaxed max-w-3xl">
            {selected.exploration}
          </p>
        </div>

        <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
            Illustrative Sounding Board Question
          </span>
          <p className="text-xs sm:text-sm text-[var(--color-text-primary)] font-serif italic">
            &ldquo;{selected.nextQuestion}&rdquo;
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[var(--color-border-subtle)]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)]">
              Relevant Platform Layers:
            </span>
            {selected.products.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-xs text-[var(--color-text-secondary)] hover:text-white transition-colors"
              >
                {p.label} <ArrowRight className="w-3 h-3 text-[var(--accent-blue)]" />
              </Link>
            ))}
          </div>

          <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
            Illustrative Career OS experience &bull; Zero match scores
          </span>
        </div>
      </div>
    </div>
  );
}
