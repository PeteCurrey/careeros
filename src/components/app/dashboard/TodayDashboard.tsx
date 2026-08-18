'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/lib/routes';
import { DailyMentorWelcome } from '@/types/platform/mentor-welcome';
import { CinematicMentorOpening } from '@/components/app/welcome/CinematicMentorOpening';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  ArrowRight,
  Bot,
  Compass,
  Cpu,
  UserCheck,
  Award,
  Network,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  Settings,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface TodayDashboardProps {
  initialWelcome: DailyMentorWelcome;
  initialShouldPlayCinematic: boolean;
}

export function TodayDashboard({
  initialWelcome,
  initialShouldPlayCinematic,
}: TodayDashboardProps) {
  const [showCinematic, setShowCinematic] = useState(initialShouldPlayCinematic);
  const [welcome] = useState<DailyMentorWelcome>(initialWelcome);
  const [isRevealed, setIsRevealed] = useState(!initialShouldPlayCinematic);

  const recordWelcomeAction = async (action: 'played' | 'skipped') => {
    try {
      await fetch('/api/app/mentor-welcome/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          welcomeId: welcome.id,
          action,
          localDate: welcome.localDate,
        }),
      });
    } catch {
      // Non-fatal
    }
  };

  const handleOpeningComplete = () => {
    setShowCinematic(false);
    setIsRevealed(true);
    recordWelcomeAction('played');
  };

  const handleOpeningSkip = () => {
    setShowCinematic(false);
    setIsRevealed(true);
    recordWelcomeAction('skipped');
  };

  return (
    <>
      {/* ── CINEMATIC FULLSCREEN OVERLAY ── */}
      {showCinematic && (
        <CinematicMentorOpening
          welcome={welcome}
          onComplete={handleOpeningComplete}
          onSkip={handleOpeningSkip}
        />
      )}

      {/* ── TODAY MAIN DASHBOARD ── */}
      <div
        className={cn(
          'section-padding transition-all duration-1000 ease-out',
          isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        )}
      >
        <div className="container-site space-y-10 max-w-5xl">
          {/* ── 1. PERSISTENT MENTOR FOCUS STRIP ── */}
          <div className="p-4 sm:p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-subtle">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 shrink-0">
                <Image
                  src={welcome.portraitSrc}
                  alt={welcome.mentorName}
                  fill
                  sizes="48px"
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold text-[var(--color-text-primary)]">
                    {welcome.mentorName}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent-blue-subtle)] text-[var(--accent-blue)] border border-[var(--accent-blue-border)]">
                    {welcome.mentorDomain}
                  </span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] italic line-clamp-1">
                  &ldquo;{welcome.dailyLine}&rdquo;
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-center">
              <Button
                href={ROUTES.PRODUCT_AI_CAREER_MENTOR}
                variant="secondary"
                size="sm"
                className="text-xs font-mono"
              >
                Consult Mentor <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </div>
          </div>

          {/* ── 2. THE FIRST UI ELEMENT: YOUR NEXT MOVE ── */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="accent-blue-dot accent-blue-dot-pulse" />
                <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--color-taupe-300)] font-bold">
                  Your Next Move
                </h2>
              </div>
              <span className="text-[10px] font-mono text-[#34D399] uppercase">
                Active Priority &bull; Stage 1
              </span>
            </div>

            <Card className="p-6 sm:p-7 bg-gradient-to-br from-[var(--color-surface-raised)] to-[var(--color-surface-base)] border border-[var(--accent-blue-border)] shadow-xl relative overflow-hidden">
              <div className="space-y-4 max-w-3xl">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-[var(--accent-blue)] font-bold">
                    Recommended by {welcome.mentorName}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
                    {welcome.nextMoveTitle}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {welcome.nextMoveAction}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {welcome.nextMoveType === 'PASSPORT' && (
                    <Button href={ROUTES.PRODUCT_CAREER_PASSPORT} variant="primary" size="md">
                      Open Career Passport <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  )}
                  {welcome.nextMoveType === 'OBJECTIVE' && (
                    <Button href={ROUTES.PRODUCT_AI_CAREER_MENTOR} variant="primary" size="md">
                      Review Objective Milestones <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  )}
                  {welcome.nextMoveType === 'GRAPH' && (
                    <Button href={ROUTES.PRODUCT_CAREER_GRAPH} variant="primary" size="md">
                      Explore Career Graph <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  )}
                  {welcome.nextMoveType === 'SKILLS' && (
                    <Button href={ROUTES.PRODUCT_CAREER_TWIN} variant="primary" size="md">
                      View Capability Matrix <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  )}
                  {welcome.nextMoveType === 'EXPLORE' && (
                    <Button href={ROUTES.PRODUCT_CAREER_TWIN} variant="primary" size="md">
                      Inspect Career Twin <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  )}

                  <span className="text-xs font-mono text-[var(--color-text-tertiary)] flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Grounded in {welcome.contextReason}
                  </span>
                </div>
              </div>
            </Card>
          </section>

          {/* ── 3. CAREER TWIN & PASSPORT INTELLIGENCE SNAPSHOT ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Career Brief */}
            <Card className="p-6 space-y-4 border-[var(--color-border-default)]">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border-default)]">
                <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#2F8FFF]" /> Career Twin Intelligence
                </span>
                <Badge variant="verified" size="sm">ACTIVE</Badge>
              </div>

              <div className="space-y-2 text-xs">
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Your Career Twin synthesizes verified capabilities, experience themes, and milestone evidence into a private grounded model.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono text-[10px] text-white">
                    Assigned: {welcome.mentorName}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono text-[10px] text-white">
                    Domain: {welcome.mentorDomain}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={ROUTES.PRODUCT_CAREER_TWIN}
                  className="text-xs font-mono text-[#2F8FFF] hover:underline inline-flex items-center gap-1"
                >
                  Explore Career Twin &rarr;
                </Link>
              </div>
            </Card>

            {/* Career Passport Evidence Vault */}
            <Card className="p-6 space-y-4 border-[var(--color-border-default)]">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border-default)]">
                <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" /> Career Passport
                </span>
                <Badge variant="verified" size="sm">VAULT SECURED</Badge>
              </div>

              <div className="space-y-2 text-xs">
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Granular provenance records attached to each credential, project deliverable, and skill claim. Zero synthetic scores.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 font-mono text-[10px] text-emerald-300">
                    Provenance Tracking
                  </span>
                  <span className="px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/20 font-mono text-[10px] text-purple-300">
                    Self-Sovereign Storage
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={ROUTES.PRODUCT_CAREER_PASSPORT}
                  className="text-xs font-mono text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  Manage Passport Evidence &rarr;
                </Link>
              </div>
            </Card>
          </div>

          {/* ── 4. CORE PLATFORM ENGINES GRID ── */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wide font-mono">
              Platform Engines
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Career Twin', icon: UserCheck, status: 'INITIALIZED', href: ROUTES.PRODUCT_CAREER_TWIN },
                { title: 'AI Career Mentor', icon: Cpu, status: 'ASSIGNED', href: ROUTES.PRODUCT_AI_CAREER_MENTOR },
                { title: 'Career Passport', icon: Award, status: 'VAULT ACTIVE', href: ROUTES.PRODUCT_CAREER_PASSPORT },
                { title: 'Career Graph', icon: Compass, status: 'SEED MAPPED', href: ROUTES.PRODUCT_CAREER_GRAPH },
                { title: 'Opportunity Agent', icon: Compass, status: 'MONITORING', href: ROUTES.PRODUCT_OPPORTUNITY_AGENT },
                { title: 'Career Network', icon: Network, status: 'PRIVATE', href: ROUTES.PRODUCT_CAREER_NETWORK },
              ].map((engine) => {
                const Icon = engine.icon;
                return (
                  <Link key={engine.title} href={engine.href} className="block group">
                    <Card className="p-5 flex items-center gap-4 border-[var(--color-border-default)] group-hover:border-[#2F8FFF]/40 transition-colors h-full">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-surface-interactive)] text-[#2F8FFF] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[var(--color-text-primary)] truncate group-hover:text-[#6BB8FF] transition-colors">
                          {engine.title}
                        </p>
                        <p className="text-xs font-mono text-[#34D399]">{engine.status}</p>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ── 5. QUICK CONTROLS ── */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[var(--color-border-default)] text-xs text-[var(--color-text-secondary)]">
            <div className="flex items-center gap-4">
              <Link
                href={ROUTES.APP_SETTINGS_ACCOUNT}
                className="hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <Settings className="w-3.5 h-3.5" /> Account
              </Link>
              <Link
                href={ROUTES.APP_SETTINGS_PRIVACY}
                className="hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Privacy &amp; Data
              </Link>
            </div>

            <p className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
              Local Day: {welcome.localDate} &bull; Mentor: {welcome.mentorName}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
