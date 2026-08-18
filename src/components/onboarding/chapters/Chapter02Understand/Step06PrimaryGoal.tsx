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
  // Curate goal options smartly based on stage
  const getGoalOptions = (stage: CareerStage) => {
    if (stage === 'SCHOOL_STUDENT' || stage === 'COLLEGE_UNIVERSITY' || stage === 'EXPLORING') {
      return [
        { id: 'Figure out what career suits me', desc: 'Discover career directions matching my strengths and interests.' },
        { id: 'Decide what to study or train in', desc: 'Compare degrees, vocational diplomas, and apprenticeship routes.' },
        { id: 'Find my first professional job or internship', desc: 'Build an evidence-backed portfolio for entry applications.' },
        { id: 'Find a degree apprenticeship', desc: 'Earn while training in technical and professional fields.' },
        { id: "I'm not sure yet", desc: 'Explore possibilities openly without premature commitments.' },
      ];
    }

    if (stage === 'CAREER_CHANGER') {
      return [
        { id: 'Change career into a new discipline', desc: 'Pivot to an adjacent industry where my core skills transfer.' },
        { id: 'Develop new in-demand skills', desc: 'Bridge critical capability gaps for target roles.' },
        { id: 'Increase my earning potential', desc: 'Position for higher leverage commercial opportunities.' },
        { id: 'Evaluate adjacent industry pathways', desc: 'Inspect topological bridges from my current role.' },
      ];
    }

    if (stage === 'LEADER_EXECUTIVE') {
      return [
        { id: 'Move into higher executive leadership', desc: 'Target VP, C-suite, or board advisory opportunities.' },
        { id: 'Structure strategic evidence & proof', desc: 'Document multi-million budget and organizational outcomes.' },
        { id: 'Progress where I am', desc: 'Secure internal sponsorship and strategic mandate.' },
        { id: 'Start or advise a business', desc: 'Leverage domain expertise in venture creation.' },
      ];
    }

    if (stage === 'ENTREPRENEUR') {
      return [
        { id: 'Build and scale my venture', desc: 'Accelerate product-market execution and commercial traction.' },
        { id: 'Identify capability & team gaps', desc: 'Map technical and operational capabilities needed.' },
        { id: 'Transition from employment to full-time founder', desc: 'Structure the bridge from salaried role to venture.' },
      ];
    }

    // Default for EARLY_CAREER, EXPERIENCED_PROFESSIONAL, APPRENTICE_TRADE, RETURNER
    return [
      { id: 'Find a better job', desc: 'Target higher-quality roles with verified employers.' },
      { id: 'Progress where I am', desc: 'Gain promotion and expanding responsibilities.' },
      { id: 'Increase my earning potential', desc: 'Benchmark my compensation against genuine market rates.' },
      { id: 'Change career', desc: 'Transition into a new domain or technical specialization.' },
      { id: 'Develop new capabilities', desc: 'Build structured proof of emerging strengths.' },
    ];
  };

  const options = getGoalOptions(careerStage);

  return (
    <AdaptiveSplitLayout
      chapter="02_UNDERSTAND"
      stepNumber="3"
      stepTotal="4"
      sectionLabel="Objective &bull; Primary Direction"
      headline="What do you want Career OS to help you change?"
      description="Setting a clear primary focus gives your AI Career Mentor and Career Twin a grounded target to work toward."
      imageSrc="/media/product/career_passport_hero.jpg"
      imageAlt="Career Objective Focus"
      bottomVisualQuote={{
        text: 'A clear focus turns vague aspirations into sequenced milestones and verified evidence.',
        author: 'Career OS Mentor Protocol',
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
            <span>Resume &amp; experience</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </AdaptiveSplitLayout>
  );
}
