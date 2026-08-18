'use client';

import React from 'react';
import { AdaptiveSplitLayout } from '../../shared/AdaptiveSplitLayout';
import { OnboardingCardSelect } from '../../shared/OnboardingCardSelect';
import { Button } from '@/components/ui/Button';
import { CareerStage } from '@/types/platform/onboarding';
import {
  GraduationCap,
  Briefcase,
  Wrench,
  Compass,
  TrendingUp,
  RotateCcw,
  Rocket,
  Users,
  Sparkles,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

interface Step04StageSelectProps {
  careerStage: CareerStage;
  onSelectStage: (stage: CareerStage) => void;
  onNext: () => void;
  onBack: () => void;
}

export function Step04StageSelect({
  careerStage,
  onSelectStage,
  onNext,
  onBack,
}: Step04StageSelectProps) {
  const stageOptions: {
    id: CareerStage;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    image: string;
  }[] = [
    {
      id: 'SCHOOL_STUDENT',
      title: 'Still in school',
      description: "I'm exploring what comes next and comparing future routes.",
      icon: GraduationCap,
      image: '/media/students/student_hero_futures.jpg',
    },
    {
      id: 'COLLEGE_UNIVERSITY',
      title: 'College or university',
      description: "I'm building toward my first professional move.",
      icon: GraduationCap,
      image: '/media/students/audience_students.jpg',
    },
    {
      id: 'APPRENTICE_TRADE',
      title: 'Apprentice or skilled trade',
      description: 'Hands-on technical craft, mechanical, electrical, or engineering craft.',
      icon: Wrench,
      image: '/media/schools/audience_schools.jpg',
    },
    {
      id: 'EARLY_CAREER',
      title: 'Starting my career',
      description: "I'm establishing myself in my first 1–3 years in the workforce.",
      icon: Briefcase,
      image: '/media/professionals/audience_professionals.jpg',
    },
    {
      id: 'EXPERIENCED_PROFESSIONAL',
      title: 'Building my career',
      description: "I'm established and ready for the next level in my field.",
      icon: TrendingUp,
      image: '/media/professionals/professional_hero_intersection.jpg',
    },
    {
      id: 'LEADER_EXECUTIVE',
      title: 'Leading people or organisations',
      description: 'Director, VP, or executive management thinking about long-term stewardship.',
      icon: Users,
      image: '/media/professionals/professional_pathways_collective.jpg',
    },
    {
      id: 'CAREER_CHANGER',
      title: 'Changing careers',
      description: 'I want to take my experience and capability somewhere different.',
      icon: RotateCcw,
      image: '/media/product/career_graph_hero.jpg',
    },
    {
      id: 'RETURNER',
      title: 'Returning after time away',
      description: 'Re-entering the workforce after caregiving, travel, or a career break.',
      icon: Sparkles,
      image: '/media/hero/city_horizon_hero.jpg',
    },
    {
      id: 'ENTREPRENEUR',
      title: 'Building something of my own',
      description: 'Founder, operator, or consultant building a new venture.',
      icon: Rocket,
      image: '/media/employers/employer_hero_capability.jpg',
    },
    {
      id: 'EXPLORING',
      title: 'Not sure yet',
      description: "That's what I need help figuring out — open to discovering possibilities.",
      icon: Compass,
      image: '/media/product/career_twin_horizon.jpg',
    },
  ];

  const currentOption = stageOptions.find((o) => o.id === careerStage) || stageOptions[3]!;

  return (
    <AdaptiveSplitLayout
      chapter="02_UNDERSTAND"
      stepNumber="1"
      stepTotal="4"
      sectionLabel="Context &bull; Career Starting Point"
      headline="Where are you in your career today?"
      description="Select your starting point so Career OS calibrates the right questions, mentors, and intelligence models for you."
      imageSrc={currentOption.image}
      imageAlt={currentOption.title}
      bottomVisualQuote={{
        text: 'Every career stage has equal dignity in Career OS — from trades and university routes to career transitions and executive stewardship.',
        author: 'Pathway Dignity Principle',
      }}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup" aria-label="Career stage selection">
          {stageOptions.map((opt) => (
            <OnboardingCardSelect
              key={opt.id}
              id={opt.id}
              title={opt.title}
              description={opt.description}
              icon={opt.icon}
              isSelected={careerStage === opt.id}
              onSelect={(id) => onSelectStage(id as CareerStage)}
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
            className="text-xs font-mono"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </AdaptiveSplitLayout>
  );
}
