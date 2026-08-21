'use client';

import React from 'react';
import { AdaptiveSplitLayout } from '../../shared/AdaptiveSplitLayout';
import { OnboardingCardSelect } from '../../shared/OnboardingCardSelect';
import { Button } from '@/components/ui/Button';
import { CareerStage } from '@/types/platform/onboarding';
import { Target, ArrowRight, ArrowLeft } from 'lucide-react';

interface Step06PrimaryGoalProps {
  careerStage: CareerStage;
  primaryGoal: string;
  onSelectPrimaryGoal: (goal: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function Step06PrimaryGoal({
  careerStage,
  primaryGoal,
  onSelectPrimaryGoal,
  onNext,
  onBack,
}: Step06PrimaryGoalProps) {
  const getGoalOptions = (stage: CareerStage) => {
    if (stage === 'SCHOOL_STUDENT' || stage === 'COLLEGE_UNIVERSITY' || stage === 'EXPLORING') {
      return [
        { id: 'Choosing a career', desc: 'Find career directions that match what I enjoy and do well.' },
        { id: 'Choosing what to study', desc: 'Compare university courses, colleges, and apprenticeships.' },
        { id: 'Finding my first job', desc: 'Get ready to apply for my first job or internship.' },
        { id: 'Finding an apprenticeship', desc: 'Earn while learning a skilled trade or profession.' },
        { id: "I'm not sure yet", desc: 'Explore options openly.' },
      ];
    }

    if (stage === 'CAREER_CHANGER') {
      return [
        { id: 'Changing career', desc: 'Move into a new field where my existing skills transfer.' },
        { id: 'Learning new skills', desc: 'Learn the skills needed for new roles.' },
        { id: 'Earning more', desc: 'Find roles that pay more for what I can do.' },
        { id: 'Exploring new possibilities', desc: 'See what else is out there for someone with my experience.' },
      ];
    }

    if (stage === 'LEADER_EXECUTIVE') {
      return [
        { id: 'Moving into leadership', desc: 'Target senior leadership or board opportunities.' },
        { id: 'Building my track record', desc: 'Document my leadership results and achievements.' },
        { id: 'Progressing where I am', desc: 'Grow my scope and responsibility in my current organization.' },
        { id: 'Starting or advising a business', desc: 'Use my experience in a new venture.' },
      ];
    }

    if (stage === 'ENTREPRENEUR') {
      return [
        { id: 'Growing my business', desc: 'Build customer traction and grow my team.' },
        { id: 'Learning new skills', desc: 'Pick up skills I need to run things effectively.' },
        { id: 'Moving to full-time founder', desc: 'Transition from employed work to running my own business.' },
      ];
    }

    // Default for EARLY_CAREER, EXPERIENCED_PROFESSIONAL, APPRENTICE_TRADE, RETURNER
    return [
      { id: 'Finding a better job', desc: 'Find a higher quality role with verified employers.' },
      { id: 'Getting promoted', desc: 'Take the next step in my current workplace.' },
      { id: 'Earning more', desc: 'Understand fair pay and increase what I earn.' },
      { id: 'Changing career', desc: 'Move into a different type of work.' },
      { id: 'Learning new skills', desc: 'Build new capabilities to unlock more options.' },
    ];
  };

  const options = getGoalOptions(careerStage);

  return (
    <AdaptiveSplitLayout
      chapter="02_UNDERSTAND"
      stepNumber="3"
      stepTotal="5"
      sectionLabel="Your direction"
      headline="What would you most like help with?"
      description="Pick your main goal right now. You can always change or add to this later."
      imageSrc="/media/product/career_passport_hero.jpg"
      imageAlt="Career Goal Focus"
      bottomVisualQuote={{
        text: 'A clear goal helps your Mentor suggest the most useful next steps.',
        author: 'Career OS',
      }}
    >
      <div className="space-y-6">
        <div className="space-y-3" role="radiogroup" aria-label="Primary career goal selection">
          {options.map((opt) => (
            <OnboardingCardSelect
              key={opt.id}
              id={opt.id}
              title={opt.id}
              description={opt.desc}
              icon={Target}
              isSelected={primaryGoal === opt.id}
              onSelect={(id) => onSelectPrimaryGoal(id)}
            />
          ))}
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
            disabled={!primaryGoal}
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
