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
          headline: "Good. We're not going to make you start again.",
          primaryCopy:
            "A career change doesn't reset your value. We will first map the deep capabilities, domain judgment, and problem-solving experience that transfer directly with you.",
          highlight: 'Experience translates into transferable capability vectors.',
          image: '/media/product/career_graph_hero.jpg',
        };
      case 'SCHOOL_STUDENT':
      case 'COLLEGE_UNIVERSITY':
      case 'EXPLORING':
        return {
          headline: "That's enough to start. You don't need all the answers yet.",
          primaryCopy:
            "You don't need a fixed job title in mind today. Career OS will help you compare routes — from degree apprenticeships to university paths — based on what you enjoy doing and where your strengths lie.",
          highlight: 'Your first decision does not have to define your whole career.',
          image: '/media/students/student_hero_futures.jpg',
        };
      case 'APPRENTICE_TRADE':
        return {
          headline: 'Practical craft and technical mastery carry immense leverage.',
          primaryCopy:
            'Hands-on expertise, diagnostic precision, and technical certifications represent high-value capability that compounds rapidly across modern engineering and infrastructure.',
          highlight: 'Equal dignity and rigorous proof for technical vocations.',
          image: '/media/schools/audience_schools.jpg',
        };
      case 'ENTREPRENEUR':
        return {
          headline: 'Entrepreneurship is a legitimate career progression vector.',
          primaryCopy:
            'Building and operating a company exercises multi-disciplinary capabilities — capital stewardship, product execution, and team leadership. We treat founder experience with equal structural rigor.',
          highlight: 'Modeling commercial advantages and operational gaps.',
          image: '/media/employers/employer_hero_capability.jpg',
        };
      case 'LEADER_EXECUTIVE':
        return {
          headline: 'Executive leadership goes far beyond titles.',
          primaryCopy:
            'At this level, the leverage is in architectural decisions, organizational culture, and capital efficiency. We will structure your verified evidence for high-impact board and executive moves.',
          highlight: 'Evidence-backed leadership stewardship.',
          image: '/media/professionals/professional_pathways_collective.jpg',
        };
      default: // EARLY_CAREER, EXPERIENCED_PROFESSIONAL, RETURNER
        return {
          headline: 'Where has your experience become most valuable?',
          primaryCopy:
            "What responsibility has grown beyond your job title? We will help identify the high-leverage capabilities that make your next professional move worthwhile.",
          highlight: 'Deconstructing what you can actually do beneath surface titles.',
          image: '/media/professionals/professional_hero_intersection.jpg',
        };
    }
  };

  const narrative = getStageNarrative(careerStage);

  return (
    <AdaptiveSplitLayout
      chapter="02_UNDERSTAND"
      stepNumber="2"
      stepTotal="4"
      sectionLabel="Calibration &bull; Adaptive Lens"
      headline={narrative.headline}
      description={narrative.primaryCopy}
      imageSrc={narrative.image}
      imageAlt="Career OS Calibration"
      bottomVisualQuote={{
        text: narrative.highlight,
        author: 'Career OS Operating Philosophy',
      }}
    >
      <div className="space-y-6">
        <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--accent-blue-border)] space-y-4 shadow-lg">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#2F8FFF]" />
            <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Calibrated Intake Active
            </span>
          </div>

          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            Career OS is now tuned to your specific career stage. In the next few steps, we will establish your primary goal, intake any existing resume, and identify your core capabilities.
          </p>

          <div className="p-3 rounded-lg bg-[var(--color-surface-base)] border border-[var(--color-border-default)] flex items-center gap-2.5 text-xs text-white">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Intake frameworks adapted for your background</span>
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
            <span>Set primary focus</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </AdaptiveSplitLayout>
  );
}
