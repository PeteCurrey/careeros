'use client';

import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface QuestionItem {
  id: string;
  category: string;
  question: string;
  mentorAnswer: string;
  rationale: string;
  actionableStep: string;
  linkedEvidence: string;
}

export function QuestionSelectorInteractive() {
  const questions: QuestionItem[] = [
    {
      id: 'q1',
      category: 'Discovery',
      question: '“I have no idea what career I want. Where do I start?”',
      mentorAnswer: 'We analyze your academic strengths, hands-on project preferences, and intrinsic work interests to surface 3 distinct career pathways (such as Systems Engineering, Skilled Trades Leadership, or Clinical Healthcare) aligned with high market demand.',
      rationale: 'Initial interest assessment cross-referenced against regional labor market growth data in Career Graph.',
      actionableStep: 'Complete 3 micro-project explorations in software, logistics, and renewable energy trades.',
      linkedEvidence: 'Career Interest Diagnostic Completed',
    },
    {
      id: 'q2',
      category: 'Discovery',
      question: '“Should I go to university or take an apprenticeship?”',
      mentorAnswer: 'We model the financial and career trajectory outcomes for both options. A degree provides broad theoretical breadth, while a degree apprenticeship offers 4 years of debt-free experience plus a full salary. We map which option better accelerates your target career goal.',
      rationale: 'Comparative multi-year trajectory simulation comparing net debt vs 4-year earnings and evidence accumulation.',
      actionableStep: 'Compare entry requirements for 2 degree apprenticeships vs 3 university engineering programs.',
      linkedEvidence: 'Pathway Trajectory Comparison Report',
    },
    {
      id: 'q3',
      category: 'Skills & Progression',
      question: '“What careers could use the skills I already have?”',
      mentorAnswer: 'Your Mentor audits your verified Passport evidence to identify non-obvious adjacent industries where your core competencies (e.g. data analysis, project logistics, team coordination) carry high value without requiring entry-level retrain.',
      rationale: 'Skill distance matrix calculation identifying target roles with >75% competency overlap.',
      actionableStep: 'Review 3 adjacent industries (e.g., healthcare operations, renewable energy project management).',
      linkedEvidence: 'Transferable Skill Parity Matrix',
    },
    {
      id: 'q4',
      category: 'Skills & Progression',
      question: '“Why am I not getting promoted?”',
      mentorAnswer: 'Promotions require evidence of operating at the next level before receiving the title. Your Mentor identifies the exact capability gap between your current work outputs and senior role expectations, suggesting high-visibility initiatives to close that gap.',
      rationale: 'Benchmark comparison between user Passport evidence and senior role job architecture standards.',
      actionableStep: 'Sponsor a cross-functional process optimization initiative to demonstrate strategic ownership.',
      linkedEvidence: 'Senior Role Competency Gap Analysis',
    },
    {
      id: 'q5',
      category: 'Skills & Progression',
      question: '“What am I missing for the next role?”',
      mentorAnswer: 'We break down target role descriptions into required vs optional skills. For example, if senior roles require system architecture design, we map out a 60-day capstone project to generate that exact evidence.',
      rationale: 'Real-time requirement extraction from employer job specs in Career Graph.',
      actionableStep: 'Complete AWS Cloud Solutions Architecture capstone project.',
      linkedEvidence: 'Target Role Requirement Breakdown',
    },
    {
      id: 'q6',
      category: 'Compensation',
      question: '“Could I earn more somewhere else?”',
      mentorAnswer: 'We analyze anonymized labor market compensation benchmarks for your exact skill stack and experience tier across your region, identifying whether you are currently under-compensated relative to market standards.',
      rationale: 'Regional compensation distribution data matched against verified skill profile tier.',
      actionableStep: 'Prepare an evidence-backed compensation review request or explore external market opportunities.',
      linkedEvidence: 'Market Compensation Benchmark Report',
    },
    {
      id: 'q7',
      category: 'Career Change',
      question: '“How could I move out of my current industry?”',
      mentorAnswer: 'Career changes fail when candidates try to jump across both industry and function simultaneously. Your Mentor identifies pivot strategies: either changing industry while keeping your function, or changing function within your current industry.',
      rationale: 'Two-stage pivot strategy minimizing compensation reduction and friction.',
      actionableStep: 'Identify 5 target companies in target sector seeking your existing functional skillset.',
      linkedEvidence: 'Industry Pivot Strategy Map',
    },
    {
      id: 'q8',
      category: 'Skills & Progression',
      question: '“What should I learn next?”',
      mentorAnswer: 'Rather than recommending generic popular courses, your Mentor identifies the single skill with the highest marginal return for your specific target pathway over the next 6 months.',
      rationale: 'Marginal return on skill acquisition calculated against target role vacancy requirements.',
      actionableStep: 'Enroll in advanced TypeScript & micro-frontend architecture module.',
      linkedEvidence: 'Skill Priority Matrix',
    },
    {
      id: 'q9',
      category: 'Leadership',
      question: '“How do I prove I’m ready to manage people?”',
      mentorAnswer: 'Managing people starts with mentoring, project coordination, and technical leadership. Your Mentor suggests micro-leadership opportunities—such as onboarding junior colleagues or leading sprint planning—to log evidence in your Passport.',
      rationale: 'Progressive leadership evidence milestone tracking.',
      actionableStep: 'Formalize mentorship of 2 junior team members over the next quarter.',
      linkedEvidence: 'Leadership Capability Record',
    },
    {
      id: 'q10',
      category: 'Career Resilience',
      question: '“I’ve been made redundant. What now?”',
      mentorAnswer: 'We immediately activate an emergency career transition plan: updating your Career Passport, identifying immediate bridge opportunities aligned with your core skills, and tailoring outreach to target employers.',
      rationale: 'Rapid redundancy transition framework prioritizing immediate cashflow and long-term trajectory stability.',
      actionableStep: 'Export verified Career Passport resume package and target 10 active hiring teams.',
      linkedEvidence: 'Redundancy Rapid Action Plan',
    },
    {
      id: 'q11',
      category: 'Career Resilience',
      question: '“How do I return after a career break?”',
      mentorAnswer: 'We frame your break around updated learning, modern project evidence, and lifetime skill continuity, ensuring your prior accomplishments remain front and center.',
      rationale: 'Break reintegration mapping emphasizing persistent historical evidence and recent refresher capstones.',
      actionableStep: 'Complete 30-day modern industry refresher project.',
      linkedEvidence: 'Career Reintegration Blueprint',
    },
    {
      id: 'q12',
      category: 'Entrepreneurship',
      question: '“Could my experience translate into self-employment?”',
      mentorAnswer: 'We evaluate whether your verified skill stack supports freelance consulting, agency services, or technical contracting, detailing pricing models and client acquisition requirements.',
      rationale: 'Self-employment feasibility audit matching functional skills against B2B demand.',
      actionableStep: 'Draft 3 core service offerings based on past enterprise project evidence.',
      linkedEvidence: 'Self-Employment Feasibility Audit',
    },
    {
      id: 'q13',
      category: 'Entrepreneurship',
      question: '“What would I need before starting my own business?”',
      mentorAnswer: 'We identify founder capability gaps—such as financial modeling, sales, or product design—and suggest co-founder profiles or targeted learning modules before you launch.',
      rationale: 'Founder skill matrix gap analysis.',
      actionableStep: 'Complete unit economics and financial modeling masterclass.',
      linkedEvidence: 'Venture Readiness Audit',
    },
    {
      id: 'q14',
      category: 'Discovery',
      question: '“What roles exist that I haven’t even considered?”',
      mentorAnswer: 'We scan emerging sectors (such as clean energy grid engineering, AI compliance auditing, or digital health logistics) to surface high-growth roles matching your core aptitudes.',
      rationale: 'Emerging occupation mapping in Career Graph.',
      actionableStep: 'Explore 3 emerging role profiles and their 5-year demand projections.',
      linkedEvidence: 'Emerging Roles Discovery Report',
    },
  ];

  const [selectedId, setSelectedId] = useState('q1');
  const activeQ = (questions.find((q) => q.id === selectedId) || questions[0])!;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Question List */}
        <div className="lg:col-span-6 space-y-3 max-h-[580px] overflow-y-auto pr-2 scrollbar-thin">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-taupe-700)] block mb-2">
            Select a Question to See Illustrative Mentor Response:
          </span>
          {questions.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`w-full text-left p-4 rounded-[var(--radius-card)] border text-xs transition-all flex items-start justify-between gap-3 ${
                  isSelected
                    ? 'bg-[var(--color-charcoal-deep)] text-[var(--color-ivory-base)] border-[var(--color-charcoal-deep)] shadow-subtle'
                    : 'bg-[var(--color-surface-raised)] text-[var(--color-charcoal-deep)] border-[var(--color-border-default)] hover:border-[var(--color-charcoal-base)]'
                }`}
              >
                <div className="space-y-1">
                  <span className={`text-[10px] font-mono font-semibold uppercase tracking-wider block ${isSelected ? 'text-[var(--color-taupe-300)]' : 'text-[var(--color-taupe-700)]'}`}>
                    {item.category}
                  </span>
                  <p className="font-semibold leading-snug">{item.question}</p>
                </div>
                <ArrowRight className={`w-4 h-4 shrink-0 mt-1 transition-transform ${isSelected ? 'translate-x-1 text-[var(--color-ivory-base)]' : 'text-[var(--color-taupe-400)]'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Column: Illustrative Response Box */}
        <div className="lg:col-span-6 sticky top-24">
          <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-5 shadow-subtle">
            <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--color-taupe-600)]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-charcoal-deep)]">
                  Illustrative Mentor Guidance Output
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-taupe-100)] text-[var(--color-charcoal-deep)] font-semibold border border-[var(--color-border-default)]">
                CATEGORY: {activeQ.category.toUpperCase()}
              </span>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <span className="font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider text-[10px] block mb-1">
                  User Prompt
                </span>
                <p className="font-serif font-bold text-base text-[var(--color-charcoal-deep)]">
                  {activeQ.question}
                </p>
              </div>

              <div className="p-4 bg-[var(--color-ivory-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
                <span className="font-bold text-[var(--color-charcoal-deep)] text-xs block flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Mentor Recommendation:
                </span>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {activeQ.mentorAnswer}
                </p>
              </div>

              <div className="space-y-2 pt-1 border-t border-[var(--color-border-subtle)]">
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-[var(--color-text-tertiary)] shrink-0 w-24">Decision Rationale:</span>
                  <span className="text-[var(--color-text-secondary)]">{activeQ.rationale}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-[var(--color-text-tertiary)] shrink-0 w-24">Action Step:</span>
                  <span className="text-[var(--color-charcoal-deep)] font-semibold">{activeQ.actionableStep}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-[var(--color-text-tertiary)] shrink-0 w-24">Passport Link:</span>
                  <span className="font-mono text-emerald-700 font-semibold">{activeQ.linkedEvidence}</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded text-[11px] text-[var(--color-text-secondary)] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[var(--color-taupe-600)] shrink-0" />
              <span>Recommendations surface uncertainty factors and allow full user modification or correction.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
