'use client';

import React from 'react';
import { AdaptiveSplitLayout } from '../../shared/AdaptiveSplitLayout';
import { Button } from '@/components/ui/Button';
import { CareerStage } from '@/types/platform/onboarding';
import { ArrowRight, ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react';

interface Step05StageTransitionProps {
  careerStage: CareerStage;
  onNext: () => void;
  onBack: () => void;
}

export function Step05StageTransition({
  careerStage,
  onNext,
  onBack,
}: Step05StageTransitionProps) {
  const getStageNarrative = (stage: CareerStage) => {
    switch (stage) {
      case 'CAREER_CHANGER':
        return {
          headline: "You're not starting again.",
          primaryCopy:
            "Your experience comes with you. We'll help work out which skills can transfer into something new.",
          highlight: 'Your existing skills count toward your next move.',
          image: '/media/product/career_graph_hero.jpg',
        };
      case 'SCHOOL_STUDENT':
      case 'COLLEGE_UNIVERSITY':
      case 'EXPLORING':
        return {
          headline: "You don't need to have everything figured out.",
          primaryCopy:
            "We'll help you explore options, compare different routes, and find paths that match what you enjoy doing.",
          highlight: 'Your first decision does not have to lock in your entire career.',
          image: '/media/students/student_hero_futures.jpg',
        };
      case 'APPRENTICE_TRADE':
        return {
          headline: "Hands-on skills are in high demand.",
          primaryCopy:
            "Practical mastery and technical trade skills are valuable everywhere. We'll help you build proof of what you can do.",
          highlight: 'Real practical skills compound over time.',
          image: '/media/schools/audience_schools.jpg',
        };
      case 'ENTREPRENEUR':
        return {
          headline: "Building your own business takes real skill.",
          primaryCopy:
            "Running a business develops deep strengths in problem-solving, leadership, and getting things done. We treat that experience with the credit it deserves.",
          highlight: 'Founder experience builds broad, versatile capability.',
          image: '/media/employers/employer_hero_capability.jpg',
        };
      case 'LEADER_EXECUTIVE':
        return {
          headline: "Leading teams and strategy.",
          primaryCopy:
            "We'll help you structure the proof of your leadership impact, strategic decisions, and team outcomes.",
          highlight: 'Clear evidence for senior and executive roles.',
          image: '/media/professionals/professional_pathways_collective.jpg',
        };
      default:
        return {
          headline: "Let's focus on what you want to achieve.",
          primaryCopy:
            "We'll help identify your strongest skills and show what opportunities and steps make sense next.",
          highlight: 'Focus on what you can do and where you want to grow.',
          image: '/media/professionals/professional_hero_intersection.jpg',
        };
    }
  };

  const narrative = getStageNarrative(careerStage);

  return (
    <AdaptiveSplitLayout
      chapter="02_UNDERSTAND"
      stepNumber="2"
      stepTotal="5"
      sectionLabel="Your direction"
      headline={narrative.headline}
      description={narrative.primaryCopy}
      imageSrc={narrative.image}
      imageAlt="Career OS Focus"
      bottomVisualQuote={{
        text: narrative.highlight,
        author: 'Career OS',
      }}
    >
      <div className="space-y-6">
        <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4 shadow-lg">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#2F8FFF]" />
            <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Ready for the next step
            </span>
          </div>

          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            Next, we'll ask what you'd most like help with and check for any existing experience or skills you'd like to include.
          </p>

          <div className="p-3 rounded-lg bg-[var(--color-surface-base)] border border-[var(--color-border-default)] flex items-center gap-2.5 text-xs text-white">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Questions tailored for you</span>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-xs font-mono text-[var(--color-taupe-300)]"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>Back</span>
          </Button>

          <Button
            type="button"
            variant="primary"
            size="md"
            onClick={onNext}
            className="text-xs font-mono"
          >
            <span>Next</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </AdaptiveSplitLayout>
  );
}
