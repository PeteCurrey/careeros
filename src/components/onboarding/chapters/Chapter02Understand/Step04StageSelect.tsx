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
      title: "I'm still at school",
      description: "Looking at what to do next and comparing possible routes.",
      icon: GraduationCap,
      image: '/media/students/student_hero_futures.jpg',
    },
    {
      id: 'COLLEGE_UNIVERSITY',
      title: "I'm at college or university",
      description: "Preparing for my first step after studying.",
      icon: GraduationCap,
      image: '/media/students/audience_students.jpg',
    },
    {
      id: 'APPRENTICE_TRADE',
      title: "I'm doing an apprenticeship or trade",
      description: "Hands-on technical craft, mechanical, electrical, or trade work.",
      icon: Wrench,
      image: '/media/schools/audience_schools.jpg',
    },
    {
      id: 'EARLY_CAREER',
      title: "I'm starting my career",
      description: "In my first 1–3 years in work and learning the ropes.",
      icon: Briefcase,
      image: '/media/professionals/audience_professionals.jpg',
    },
    {
      id: 'EXPERIENCED_PROFESSIONAL',
      title: "I'm working and want to progress",
      description: "Established in my field and ready for the next level.",
      icon: TrendingUp,
      image: '/media/professionals/professional_hero_intersection.jpg',
    },
    {
      id: 'LEADER_EXECUTIVE',
      title: "I lead a team or organisation",
      description: "Managing people, departments, or high-level direction.",
      icon: Users,
      image: '/media/professionals/professional_pathways_collective.jpg',
    },
    {
      id: 'CAREER_CHANGER',
      title: "I'm thinking about changing career",
      description: "I want to take my skills and move into something different.",
      icon: RotateCcw,
      image: '/media/product/career_graph_hero.jpg',
    },
    {
      id: 'RETURNER',
      title: "I'm returning to work",
      description: "Coming back after time away, caregiving, travel, or a break.",
      icon: Sparkles,
      image: '/media/hero/city_horizon_hero.jpg',
    },
    {
      id: 'ENTREPRENEUR',
      title: "I'm building a business",
      description: "Founder, freelancer, or consultant working on my own venture.",
      icon: Rocket,
      image: '/media/employers/employer_hero_capability.jpg',
    },
    {
      id: 'EXPLORING',
      title: "I'm not sure yet",
      description: "Open to discovering different possibilities and advice.",
      icon: Compass,
      image: '/media/product/career_twin_horizon.jpg',
    },
  ];

  const currentOption = stageOptions.find((o) => o.id === careerStage) || stageOptions[3]!;

  return (
    <AdaptiveSplitLayout
      chapter="02_UNDERSTAND"
      stepNumber="1"
      stepTotal="5"
      sectionLabel="About you"
      headline="Where are you right now?"
      description="Select the option that best describes where you are today. We'll tailor everything to your situation."
      imageSrc={currentOption.image}
      imageAlt={currentOption.title}
      bottomVisualQuote={{
        text: 'Career OS is designed for every stage — from school and apprenticeships to executive leadership and career changes.',
        author: 'Career OS',
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
