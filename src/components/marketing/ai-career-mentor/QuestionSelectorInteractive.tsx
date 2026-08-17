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
      mentorAnswer: 'A fuller Career OS session could explore several contrasting pathways using your stated interests, practical strengths, and relevant market context where available (such as Systems Engineering, Technical Trades, or Clinical Operations).',
      rationale: 'Interest profile cross-referenced against exploratory career pathways in Career Graph.',
      actionableStep: 'Complete 3 exploratory project investigations across technical systems, logistics, and applied trades.',
      linkedEvidence: 'Exploratory Pathway Notes',
    },
    {
      id: 'q2',
      category: 'Discovery',
      question: '“Should I go to university or take an apprenticeship?”',
      mentorAnswer: 'We model the structural differences and trajectory options for both pathways. A degree provides broad theoretical breadth, while an apprenticeship offers direct workplace experience and training. We map which option better fits your target horizon.',
      rationale: 'Comparative pathway analysis evaluating debt, training structure, and early experience accumulation.',
      actionableStep: 'Compare entry criteria for 2 apprenticeships vs 3 higher education programs.',
      linkedEvidence: 'Pathway Comparison Worksheet',
    },
    {
      id: 'q3',
      category: 'Skills & Progression',
      question: '“What careers could use the skills I already have?”',
      mentorAnswer: 'Your Mentor reviews your Career Twin context and available Passport evidence to identify adjacent industries where your core capabilities (e.g. data analysis, operations logistics, team coordination) carry transferable value.',
      rationale: 'Capability relationship mapping identifying target roles with substantial skill overlap.',
      actionableStep: 'Review 3 adjacent industries (e.g., healthcare operations, renewable energy project coordination).',
      linkedEvidence: 'Transferable Capability Mapping',
    },
    {
      id: 'q4',
      category: 'Skills & Progression',
      question: '“Why am I not getting promoted?”',
      mentorAnswer: 'Progression often requires demonstrating responsibility at the next tier before receiving the title. Your Mentor helps identify capability gaps between your current deliverables and senior role expectations, suggesting high-visibility initiatives.',
      rationale: 'Comparison between current evidence and typical senior role responsibility models.',
      actionableStep: 'Take ownership of a cross-functional process improvement initiative to demonstrate leadership.',
      linkedEvidence: 'Capability Gap Review',
    },
    {
      id: 'q5',
      category: 'Skills & Progression',
      question: '“What am I missing for the next role?”',
      mentorAnswer: 'We break down target role profiles into core competencies. For example, if target roles emphasize system architecture design, we suggest a focused project milestone to create and document that proof.',
      rationale: 'Requirement mapping based on occupational models in Career Graph.',
      actionableStep: 'Complete an architectural design project milestone for your portfolio.',
      linkedEvidence: 'Target Role Requirement Breakdown',
    },
    {
      id: 'q6',
      category: 'Compensation',
      question: '“Could I earn more somewhere else?”',
      mentorAnswer: 'Career Graph is being designed to connect role profiles with relevant regional compensation distributions where data is available, helping you evaluate whether your skills align with higher-margin industries.',
      rationale: 'Regional compensation data matched against skill profile attributes.',
      actionableStep: 'Prepare an evidence-backed compensation review request or explore external market pathways.',
      linkedEvidence: 'Market Compensation Context',
    },
    {
      id: 'q7',
      category: 'Career Change',
      question: '“How could I move out of my current industry?”',
      mentorAnswer: 'Career changes succeed when candidates preserve valuable domain strengths. Your Mentor helps plan pivot strategies: either changing industry while keeping your function, or developing bridge skills within your current sector.',
      rationale: 'Staged pivot strategy minimizing compensation friction and experience loss.',
      actionableStep: 'Identify 5 target organizations in adjacent sectors seeking your existing functional skillset.',
      linkedEvidence: 'Industry Transition Plan',
    },
    {
      id: 'q8',
      category: 'Skills & Progression',
      question: '“What should I learn next?”',
      mentorAnswer: 'Rather than recommending generic popular courses, your Mentor is designed to identify high-leverage capabilities that directly support your chosen pathway over the next 6 months.',
      rationale: 'Focused capability prioritization aligned with target role milestones.',
      actionableStep: 'Complete a focused technical module in system design or cloud architecture.',
      linkedEvidence: 'Skill Priority Outline',
    },
    {
      id: 'q9',
      category: 'Leadership',
      question: '“How do I prove I’m ready to manage people?”',
      mentorAnswer: 'Leadership evidence starts with mentoring, project coordination, and technical ownership. Your Mentor suggests micro-leadership milestones—such as onboarding junior colleagues or facilitating planning—to document evidence.',
      rationale: 'Progressive leadership responsibility milestone tracking.',
      actionableStep: 'Formalize mentorship of 2 junior colleagues over the next quarter.',
      linkedEvidence: 'Leadership Milestone Record',
    },
    {
      id: 'q10',
      category: 'Career Resilience',
      question: '“I’ve been made redundant. What now?”',
      mentorAnswer: 'We help organize a structured career transition: updating your Career Passport, identifying immediate bridge opportunities aligned with your core capabilities, and packaging evidence for outreach.',
      rationale: 'Structured transition approach prioritizing immediate continuity and long-term trajectory.',
      actionableStep: 'Export targeted Career Passport evidence package and engage active hiring networks.',
      linkedEvidence: 'Career Transition Action Plan',
    },
    {
      id: 'q11',
      category: 'Career Resilience',
      question: '“How do I return after a career break?”',
      mentorAnswer: 'We frame your break around updated learning, recent project evidence, and lifetime capability continuity, ensuring prior accomplishments remain clearly represented.',
      rationale: 'Reintegration mapping emphasizing persistent historical background and recent project proof.',
      actionableStep: 'Complete a focused modern industry refresher capstone project.',
      linkedEvidence: 'Career Reintegration Blueprint',
    },
    {
      id: 'q12',
      category: 'Entrepreneurship',
      question: '“Could my experience translate into self-employment?”',
      mentorAnswer: 'We evaluate whether your experience and skills support independent advisory, technical contracting, or agency services, reviewing commercial models and client requirements.',
      rationale: 'Self-employment feasibility mapping matching capabilities against commercial demand.',
      actionableStep: 'Draft 3 core service offerings based on past enterprise project deliverables.',
      linkedEvidence: 'Advisory Feasibility Outline',
    },
    {
      id: 'q13',
      category: 'Entrepreneurship',
      question: '“What would I need before starting my own business?”',
      mentorAnswer: 'We help identify founder capability considerations—such as financial modeling, commercial sales, or product design—and suggest complementary partner profiles or targeted learning steps.',
      rationale: 'Venture readiness evaluation and capability assessment.',
      actionableStep: 'Review business model assumptions and financial runway requirements.',
      linkedEvidence: 'Venture Readiness Notes',
    },
    {
      id: 'q14',
      category: 'Discovery',
      question: '“What roles exist that I haven’t even considered?”',
      mentorAnswer: 'We examine emerging sectors (such as clean energy infrastructure, regulatory compliance, or technical logistics) to surface roles matching your underlying aptitudes.',
      rationale: 'Emerging occupation mapping in Career Graph.',
      actionableStep: 'Explore 3 emerging role profiles and their skill requirements.',
      linkedEvidence: 'Emerging Roles Exploration',
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
