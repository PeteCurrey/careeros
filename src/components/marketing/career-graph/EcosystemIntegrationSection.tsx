'use client';

import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Network, UserCheck, ShieldCheck, MessageSquare, Sparkles, ArrowRight, Layers, Compass, Target } from 'lucide-react';

export function EcosystemIntegrationSection() {
  return (
    <div className="w-full space-y-12">
      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Pillar 1: Career Twin */}
        <div className="p-6 sm:p-7 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-all flex flex-col justify-between space-y-6 shadow-md">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <UserCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400">
                Personal Context
              </span>
              <h4 className="text-lg font-bold text-[var(--color-text-primary)]">
                Career Twin
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                The Graph maps thousands of theoretical possibilities. Your Career Twin injects real personal context—salary requirements, geographical boundaries, family commitments, and lived preferences—so only genuinely viable routes surface.
              </p>
            </div>
          </div>
          <Link
            href={ROUTES.PRODUCT_CAREER_TWIN}
            className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 pt-4 border-t border-[var(--color-border-default)] transition-colors"
          >
            <span>See how Career Twin adds context</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Pillar 2: Career Passport */}
        <div className="p-6 sm:p-7 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-all flex flex-col justify-between space-y-6 shadow-md">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                Evidence Grounding
              </span>
              <h4 className="text-lg font-bold text-[var(--color-text-primary)]">
                Career Passport
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Possibility becomes achievable when backed by evidence. The Career Passport holds confirmed credentials, verified project artifacts, and endorsements that validate your readiness to bridge into an adjacent discipline.
              </p>
            </div>
          </div>
          <Link
            href={ROUTES.PRODUCT_CAREER_PASSPORT}
            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 pt-4 border-t border-[var(--color-border-default)] transition-colors"
          >
            <span>Explore Career Passport evidence</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Pillar 3: AI Career Mentor */}
        <div className="p-6 sm:p-7 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-all flex flex-col justify-between space-y-6 shadow-md">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400">
                Decision Support
              </span>
              <h4 className="text-lg font-bold text-[var(--color-text-primary)]">
                AI Career Mentor
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Seeing a pathway is one thing; deciding whether to take it is another. The AI Career Mentor acts as a thinking partner—stress-testing your motivations, analyzing bridge difficulty, and guiding next steps without forcing algorithmic choices.
              </p>
            </div>
          </div>
          <Link
            href={ROUTES.PRODUCT_AI_CAREER_MENTOR}
            className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1.5 pt-4 border-t border-[var(--color-border-default)] transition-colors"
          >
            <span>Meet your AI Career Mentor</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Pillar 4: Opportunity Agent */}
        <div className="p-6 sm:p-7 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-all flex flex-col justify-between space-y-6 shadow-md">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Target className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400">
                Future Discovery
              </span>
              <h4 className="text-lg font-bold text-[var(--color-text-primary)]">
                Opportunity Agent
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                In future releases, Opportunity Agent will use Graph topology to match your transferable capabilities to employer openings that standard keyword searches would overlook due to differing job title conventions.
              </p>
            </div>
          </div>
          <Link
            href={ROUTES.PRODUCT_OPPORTUNITY_AGENT}
            className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 pt-4 border-t border-[var(--color-border-default)] transition-colors"
          >
            <span>Explore Opportunity Agent concept</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
