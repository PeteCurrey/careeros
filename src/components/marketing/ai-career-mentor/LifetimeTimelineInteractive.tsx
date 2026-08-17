'use client';

import React, { useState } from 'react';
import { GraduationCap, Rocket, TrendingUp, Award, Users, RefreshCw, Lightbulb, CheckCircle2 } from 'lucide-react';

export function LifetimeTimelineInteractive() {
  const stages = [
    {
      id: 'student',
      title: 'Student (16+ / Higher Ed)',
      icon: GraduationCap,
      question: '“What careers might actually suit my strengths?”',
      mentorResponse: 'Focuses on early skill discovery, trade vs college pathway comparison, and building your initial Career Passport evidence with school projects.',
      actions: ['Explore university vs apprenticeship routes', 'Build first project evidence', 'Map subject choices to future industries'],
    },
    {
      id: 'first-move',
      title: 'First Move',
      icon: Rocket,
      question: '“Which route gives me the best start?”',
      mentorResponse: 'Evaluates entry-level job offers, graduate schemes, or trade apprenticeships against your 5-year growth trajectory.',
      actions: ['Compare compensation vs learning speed', 'Prepare portfolio evidence', 'Evaluate employer training reputation'],
    },
    {
      id: 'early-career',
      title: 'Early Career',
      icon: TrendingUp,
      question: '“How do I stop being stuck at entry level?”',
      mentorResponse: 'Identifies high-leverage skill gaps, targets stretch assignments, and helps you log concrete achievements in your Passport.',
      actions: ['Identify core competency bottlenecks', 'Request high-visibility projects', 'Establish cross-functional relationships'],
    },
    {
      id: 'progression',
      title: 'Progression',
      icon: Award,
      question: '“What am I missing for the next promotion?”',
      mentorResponse: 'Analyzes target role requirements across the market, benchmarked against your current evidence, to build a concrete promotion case.',
      actions: ['Conduct objective gap diagnosis', 'Document quantifiable impact metrics', 'Build business case for title advancement'],
    },
    {
      id: 'leadership',
      title: 'Leadership',
      icon: Users,
      question: '“Am I ready to manage people & strategy?”',
      mentorResponse: 'Guides transition from individual contributor to team lead, focusing on delegation, strategic alignment, and team mentorship.',
      actions: ['Take on project management responsibility', 'Develop budget & headcount planning skills', 'Mentor junior team members'],
    },
    {
      id: 'career-change',
      title: 'Career Change',
      icon: RefreshCw,
      question: '“What can I move into without starting from zero?”',
      mentorResponse: 'Maps transferable skills and evidence to adjacent industries, preventing unnecessary salary drops during career pivots.',
      actions: ['Map domain-agnostic competencies', 'Identify bridge projects in target industry', 'Build targeted transition portfolio'],
    },
    {
      id: 'entrepreneurship',
      title: 'Reinvention / Founder',
      icon: Lightbulb,
      question: '“Could I turn my experience into my own business?”',
      mentorResponse: 'Assesses technical and operational readiness to launch a business or consultancy, evaluating market gaps and founding team needs.',
      actions: ['Evaluate business model viability', 'Identify missing co-founder/partner skills', 'Plan staged transition from employment'],
    },
  ];

  const [activeStageId, setActiveStageId] = useState('student');
  const activeStage = (stages.find((s) => s.id === activeStageId) || stages[0])!;

  return (
    <div className="space-y-8">
      {/* Horizontal Stage Selector Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 border-b border-[var(--color-border-default)] scrollbar-none">
        {stages.map((stage) => {
          const Icon = stage.icon;
          const isActive = stage.id === activeStageId;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-[var(--radius-card)] text-xs font-semibold whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-white/15 text-[var(--color-text-primary)] border-white/15 shadow-sm'
                  : 'bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] border-[var(--color-border-default)] hover:border-white/20 hover:text-[var(--color-text-primary)]'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-taupe-600)]'}`} />
              <span>{stage.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Display Panel */}
      <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-5">
          <div className="space-y-1">
            <span className="section-label">LIFETIME CONTINUITY &bull; STAGE {stages.findIndex(s => s.id === activeStageId) + 1} OF 7</span>
            <h3 className="text-2xl font-serif font-bold text-[var(--color-text-primary)]">
              {activeStage.question}
            </h3>
          </div>
          <span className="font-mono text-xs px-3 py-1 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded text-[var(--color-text-primary)] shrink-0">
            Illustrative Lifetime Model
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h4 className="font-serif font-bold text-base text-[var(--color-text-primary)]">
              How Your Mentor Is Designed to Adapt:
            </h4>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {activeStage.mentorResponse}
            </p>

            <div className="pt-2 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-taupe-700)] block">
                Typical Actionable Guidance Output:
              </span>
              <ul className="space-y-2 text-xs text-[var(--color-text-primary)]">
                {activeStage.actions.map((act, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Side Graphic / Visual Note */}
          <div className="lg:col-span-5 p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-700)]">
              CAREER OS PRINCIPLE
            </span>
            <h5 className="font-serif font-bold text-sm text-[var(--color-text-primary)]">
              One Operating System Through Many Careers
            </h5>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Career OS is being built around continuity across education, employment, advancement, career change and entrepreneurship so your professional context stays with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
