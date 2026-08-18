'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CareerBrief, CareerBriefItem, MentorHandoffContext, WhyThisExplanation } from '@/types/platform/career-brief';
import { CareerObjective } from '@/types/platform/mentors';
import { TodayGreeting } from './TodayGreeting';
import { NextBestMoveCard } from './NextBestMoveCard';
import { CareerBriefSection } from './CareerBriefSection';
import { CurrentObjectiveCard } from './CurrentObjectiveCard';
import { CareerSignalsCard } from './CareerSignalsCard';
import { TrajectoryCard } from './TrajectoryCard';
import { MentorPresenceBar } from './MentorPresenceBar';
import { WhyThisDrawer } from './WhyThisDrawer';
import { MentorHandoffModal } from './MentorHandoffModal';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ROUTES } from '@/lib/routes';
import { ArrowRight, RotateCcw, ShieldCheck } from 'lucide-react';

interface TodayExperienceProps {
  brief: CareerBrief;
  objective: CareerObjective | null;
  mentorName: string;
  mentorDomain: string;
  portraitSrc: string;
}

export function TodayExperience({
  brief,
  objective,
  mentorName,
  mentorDomain,
  portraitSrc,
}: TodayExperienceProps) {
  // State for Explainability Drawer
  const [selectedWhyThis, setSelectedWhyThis] = useState<{
    explanation: WhyThisExplanation;
    title: string;
  } | null>(null);

  // State for Mentor Handoff Modal
  const [selectedMentorContext, setSelectedMentorContext] = useState<MentorHandoffContext | null>(null);

  const mentorFirstName = mentorName.split(' ')[0] || 'Marcus';

  const handleOpenWhyThis = (item: CareerBriefItem) => {
    setSelectedWhyThis({
      explanation: item.whyThis,
      title: item.title,
    });
  };

  const handleOpenAskMentor = (item: CareerBriefItem) => {
    setSelectedMentorContext(item.mentorContext);
  };

  const handleOpenGeneralMentor = () => {
    setSelectedMentorContext({
      sourceScreen: 'TODAY_GENERAL',
      recommendationId: 'general_consultation',
      recommendationTitle: 'General Career Strategy Consultation',
      mentorId: brief.nextBestMove.mentorContext.mentorId,
      mentorName,
      mentorDomain,
      portraitSrc,
      objectiveTitle: objective?.title,
      relevantTwinAttributes: brief.nextBestMove.mentorContext.relevantTwinAttributes,
      relevantEvidence: [],
      suggestedQuestions: [
        'How should I prioritize my focus this week?',
        'What is the highest-leverage skill I should build next?',
        'How can I convert recent achievements into verified Career Passport evidence?',
      ],
    });
  };

  return (
    <div className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10">
      {/* ── 1. GREETING & CONTEXT ── */}
      <TodayGreeting
        period={brief.greeting.period}
        firstName={brief.greeting.firstName}
        contextStatement={brief.greeting.contextStatement}
        generatedAt={brief.generatedAt}
      />

      {/* ── 2. CONTINUITY: RESUME UNFINISHED ACTION (IF ANY) ── */}
      {brief.continuity?.hasUnfinishedAction && brief.continuity.lastMeaningfulAction && (
        <div className="p-4 rounded-lg bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2.5">
            <RotateCcw className="w-4 h-4 text-[var(--accent-blue)] shrink-0" />
            <div>
              <span className="font-mono text-[10px] uppercase text-[var(--accent-blue)] font-bold block">
                Continue Where You Left Off
              </span>
              <p className="text-white font-medium">{brief.continuity.lastMeaningfulAction}</p>
            </div>
          </div>
          {brief.continuity.resumeHref && (
            <Button href={brief.continuity.resumeHref} variant="primary" size="sm" className="shrink-0 text-xs font-mono">
              Resume <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          )}
        </div>
      )}

      {/* ── 3. PERSISTENT MENTOR FOCUS STRIP ── */}
      <MentorPresenceBar
        mentorName={mentorName}
        mentorDomain={mentorDomain}
        portraitSrc={portraitSrc}
        onAskMentor={handleOpenGeneralMentor}
      />

      {/* ── 4. THE FIRST UI ELEMENT: YOUR NEXT MOVE ── */}
      <NextBestMoveCard
        item={brief.nextBestMove}
        mentorFirstName={mentorFirstName}
        onOpenWhyThis={handleOpenWhyThis}
        onOpenAskMentor={handleOpenAskMentor}
      />

      {/* ── 5. CAREER BRIEF: WHAT MATTERS RIGHT NOW (MAX 3 ITEMS) ── */}
      <CareerBriefSection
        items={brief.briefItems}
        mentorFirstName={mentorFirstName}
        onOpenWhyThis={handleOpenWhyThis}
        onOpenAskMentor={handleOpenAskMentor}
      />

      {/* ── 6. CURRENT ACTIVE OBJECTIVE & PROGRESS ── */}
      <CurrentObjectiveCard
        objective={objective}
        mentorFirstName={mentorFirstName}
      />

      {/* ── 7. TWO-COLUMN: TRAJECTORY & SIGNALS ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          <TrajectoryCard trajectory={brief.trajectory} />
        </div>
        <div className="lg:col-span-5">
          <CareerSignalsCard signals={brief.signals} />
        </div>
      </div>

      {/* ── 8. FOOTER GOVERNANCE & PRIVACY STAMP ── */}
      <div className="pt-6 border-t border-[var(--color-border-default)] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[var(--color-text-tertiary)]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Private Career OS &bull; Self-Sovereign Architecture</span>
        </div>
        <div>
          <span>Brief ID: {brief.id.substring(0, 14)} &bull; v{brief.version}</span>
        </div>
      </div>

      {/* ── EXPLAINABILITY DRAWER ── */}
      <WhyThisDrawer
        explanation={selectedWhyThis?.explanation || null}
        actionTitle={selectedWhyThis?.title || ''}
        isOpen={!!selectedWhyThis}
        onClose={() => setSelectedWhyThis(null)}
        onAskMentor={() => {
          if (selectedWhyThis) {
            handleOpenGeneralMentor();
          }
        }}
        mentorFirstName={mentorFirstName}
      />

      {/* ── MENTOR HANDOFF MODAL ── */}
      <MentorHandoffModal
        context={selectedMentorContext}
        isOpen={!!selectedMentorContext}
        onClose={() => setSelectedMentorContext(null)}
      />
    </div>
  );
}
