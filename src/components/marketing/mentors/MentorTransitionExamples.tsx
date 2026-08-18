import React from 'react';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { ArrowRight, Sparkles } from 'lucide-react';

export function MentorTransitionExamples() {
  const transitions = [
    {
      from: 'High School / College Student',
      to: 'Electrical Apprentice',
      primaryMentor: 'Callum Reid (Trades & Craft)',
      supporting: 'Foundational safety, apprenticeship logbooks, state licensing benchmarks.',
    },
    {
      from: 'Bedside Registered Nurse',
      to: 'Clinical Informatics Lead',
      primaryMentor: 'Dr. Amara Osei (Healthcare)',
      supporting: 'EHR data pipelines, hospital QI projects, health data ethics.',
    },
    {
      from: 'Military Logistics NCO',
      to: 'Civil Supply Chain Operations',
      primaryMentor: 'Darnell Hayes (Military Transition)',
      supporting: 'MOS translation, clearance leverage, operational scope mapping.',
    },
    {
      from: 'Senior Software Engineer',
      to: 'B2B SaaS Founder',
      primaryMentor: 'Rosa Mbeki (Venture & Enterprise)',
      supporting: 'Customer validation LOIs, unit economics, technical co-founder matrices.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {transitions.map((t, idx) => (
        <ScrollReveal key={t.from} delayMs={idx * 80}>
          <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4 hover-lift">
            <div className="flex items-center justify-between gap-3 text-xs font-semibold text-white">
              <span className="p-2 bg-white/5 rounded border border-white/10 flex-1 text-center truncate">
                {t.from}
              </span>
              <ArrowRight className="w-4 h-4 text-[#2F8FFF] shrink-0" />
              <span className="p-2 bg-[#2F8FFF]/10 text-[#6BB8FF] rounded border border-[#2F8FFF]/30 flex-1 text-center truncate">
                {t.to}
              </span>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-[var(--color-border-subtle)]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#DDD36D]" />
                <span className="text-xs font-bold text-white">
                  Assigned Mentor: {t.primaryMentor}
                </span>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {t.supporting}
              </p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
