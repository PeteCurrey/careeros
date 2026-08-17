'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { ROUTES } from '@/lib/routes';
import { cn } from '@/lib/utils';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  links?: { label: string; href: string }[];
}

const SCHOOL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Core Proposition & Scope',
    question: 'What is Career OS for High Schools?',
    answer: 'Career OS for High Schools is an institutional guidance platform designed to give every student an individual AI Career Mentor, multi-pathway exploration tools, and a compounding Career Passport evidence record, while providing school counselling teams with structured context, preparatory briefs, and aggregate cohort insights without increasing administrative burden.',
  },
  {
    id: 'faq-2',
    category: 'Core Proposition & Scope',
    question: 'Does Career OS replace school career counsellors or advisors?',
    answer: 'No. Career OS is explicitly built to augment human educators, not replace them. Career guidance involves nuanced empathy, local knowledge, emotional reassurance, family alignment, and pastoral care that algorithms cannot provide. Career OS helps students explore continuously between appointments so human counselling conversations are deeper, better prepared, and higher leverage.',
  },
  {
    id: 'faq-3',
    category: 'AI & Educational Guardrails',
    question: 'What does the AI Career Mentor do in a school context?',
    answer: 'The AI Career Mentor serves as a 24/7 exploratory dialogue partner. It helps students clarify their curiosities, deconstruct unfamiliar careers into required capabilities, compare academic and vocational routes with equal parity, and identify questions to bring to their human counsellor. It does not issue psychological diagnoses, make definitive career fate predictions, or assign numerical employability scores.',
  },
  {
    id: 'faq-4',
    category: 'Student Privacy & Boundaries',
    question: 'Can educators or school administrators read student Mentor conversations?',
    answer: 'No. To ensure students have a psychologically safe environment to express uncertainties, raw Mentor transcripts and exploratory self-reflections are segregated and private to the student. Educators receive structured pre-conversation briefs containing student-permissioned advising questions, explored industries, and milestone goals—not an unredacted log of private thoughts.',
  },
  {
    id: 'faq-5',
    category: 'Student Privacy & Boundaries',
    question: 'What information can school counsellors and administrators access?',
    answer: 'School personnel have role-based access to permissioned educational context: cohort onboarding status, aggregate pathway interest distributions, student-submitted advising requests, scheduled counselling sessions, and student Career Passport evidence linked to school programmes. Surveillance-style behavioural tracking or secret student profiling is strictly prohibited.',
  },
  {
    id: 'faq-6',
    category: 'Parent & Guardian Oversight',
    question: 'Can parents and guardians see student career exploration information?',
    answer: 'Parent and guardian visibility is structured according to student age thresholds, institutional configuration, and applicable jurisdictional laws. For students aged 13–15 in school deployments, parents can view high-level pathway summaries, logged qualifications, and institutional consent settings while preserving student exploratory space.',
    links: [
      { label: 'Parent & Guardian Notice', href: ROUTES.LEGAL_PARENT_GUARDIAN },
    ],
  },
  {
    id: 'faq-7',
    category: 'Youth Safeguarding & Age Tiers',
    question: 'How does Career OS work for students under 16?',
    answer: 'Under Career OS canonical youth policy, students aged 13–15 access the platform through an approved school partnership or verified guardian arrangement. Heightened content moderation guardrails apply, commercial employer access is completely blocked, and student exploration is conducted in a protected educational environment.',
    links: [
      { label: 'Safeguarding Framework', href: ROUTES.TRUST_SAFEGUARDING },
    ],
  },
  {
    id: 'faq-8',
    category: 'Youth Safeguarding & Age Tiers',
    question: 'Can children under 13 use Career OS?',
    answer: 'There is zero open consumer registration for children under 13. Access is supported strictly through permitted institutional school arrangements where authorized under applicable educational privacy laws (such as COPPA in the US), with strict data minimisation and direct school administrative control.',
  },
  {
    id: 'faq-9',
    category: 'Youth Safeguarding & Age Tiers',
    question: 'What happens when a student turns 16?',
    answer: 'Turning 16 is an account eligibility threshold under Career OS product policy permitting direct individual account ownership. It is not the statutory legal age of majority. 16-year-old students retain sovereign ownership of their credentials while commercial recruiter safeguards remain in force.',
  },
  {
    id: 'faq-10',
    category: 'Youth Safeguarding & Age Tiers',
    question: 'What happens when a student turns 18?',
    answer: 'Turning 18 grants full legal contractual capacity in many jurisdictions. However, Career OS carefully distinguishes legal age from institutional student status: school-controlled education records remain subject to institutional governance, while the individual gains full sovereign control over their independent adult Career OS profile.',
  },
  {
    id: 'faq-11',
    category: 'Equal Pathway Parity',
    question: 'Does Career OS support apprenticeships and skilled trades alongside university?',
    answer: 'Yes. A fundamental founding principle of Career OS is equal editorial parity across all legitimate post-school routes: 4-year universities, community/technical colleges, degree and higher apprenticeships, skilled vocational trades, direct employment, public service, and military technical careers. No pathway is quietly demoted or elevated.',
    links: [
      { label: 'Apprenticeship Pathways', href: ROUTES.PATHWAYS_APPRENTICESHIPS },
      { label: 'Skilled Trades', href: ROUTES.PATHWAYS_TRADES },
      { label: 'University Directory', href: ROUTES.PATHWAYS_UNIVERSITY },
    ],
  },
  {
    id: 'faq-12',
    category: 'Commercial Protection & Minors',
    question: 'Can commercial employers or corporate recruiters contact high school students directly?',
    answer: 'No. Career OS is not a resume database or recruiter sourcing pool for minors. Commercial employers cannot browse student directories or cold-message students. Verified opportunities (such as school-sanctioned apprenticeship schemes) require institutional or guardian gating, student-initiated applications, and supervised communication.',
  },
  {
    id: 'faq-13',
    category: 'Career Passport & Evidence',
    question: 'How does Career Passport work for high school students?',
    answer: 'Career Passport enables students to capture and structure evidence of capability before their first full-time job. This includes STEM projects, coding repositories, vocational workshop tasks, extracurricular leadership, community volunteering, and academic module credentials, creating an evidence-based narrative far richer than a flat resume.',
    links: [
      { label: 'Career Passport Architecture', href: ROUTES.PRODUCT_CAREER_PASSPORT },
    ],
  },
  {
    id: 'faq-14',
    category: 'Career Passport & Evidence',
    question: 'Is every credential in a student Career Passport cryptographically verified?',
    answer: 'No. Career OS uses a transparent 9-state evidence provenance model. Credentials clearly state their verification status: Issuer-Verified (official school registrar sign-off), Third-Party Confirmed (employer placement supervisor), Evidenced (artifact/code attached), or Self-Declared. We never pretend unverified student claims are certified.',
  },
  {
    id: 'faq-15',
    category: 'Post-Graduation Continuity',
    question: 'What happens to a student’s Career OS account after graduation?',
    answer: 'The student relationship with the school concludes, but their working life is just beginning. The student retains their individual Career Passport and Career Twin model as sovereign infrastructure that compounds into higher education, apprenticeships, first employment, lateral career transitions, and leadership over decades.',
  },
  {
    id: 'faq-16',
    category: 'Data Privacy & Compliance',
    question: 'How does Career OS approach FERPA, COPPA, and student data privacy laws?',
    answer: 'Career OS institutional deployments are structured to support applicable student privacy obligations. Institutional agreements designate appropriate data roles, enforce data minimisation, prohibit third-party commercial profiling, and ensure school-controlled records remain governed by educational authority.',
    links: [
      { label: 'Student Privacy Statement', href: ROUTES.REGULATORY_STUDENT_PRIVACY },
      { label: 'School Terms', href: ROUTES.LEGAL_SCHOOL_TERMS },
    ],
  },
  {
    id: 'faq-17',
    category: 'Technical & System Integration',
    question: 'Does Career OS integrate with school Student Information Systems (SIS / MIS)?',
    answer: 'Career OS is designed to deploy rapidly as a standalone cloud platform or integrate with institutional Single Sign-On (SAML 2.0 / OIDC) and roster directories. We do not require schools to rebuild their existing technology stack or replace their administrative infrastructure.',
  },
  {
    id: 'faq-18',
    category: 'Accessibility & Inclusion',
    question: 'Is Career OS accessible for students with disabilities and diverse needs?',
    answer: 'Yes. Career OS is designed to meet WCAG 2.2 Level AA accessibility targets. It features full keyboard navigation, screen reader compatibility, high-contrast typography, reduced-motion preferences, and plain-language guidance to ensure equitable career exploration for all students.',
    links: [
      { label: 'Accessibility Standards', href: ROUTES.TRUST_ACCESSIBILITY },
    ],
  },
  {
    id: 'faq-19',
    category: 'Launch School Programme',
    question: 'What is the Career OS Launch School Programme?',
    answer: 'The Launch School Programme is an early-adopter initiative for forward-thinking high schools, academy trusts, and school districts. Launch Schools receive dedicated onboarding support, priority counsellor training, and direct input into upcoming institutional capabilities.',
  },
  {
    id: 'faq-20',
    category: 'Launch School Programme',
    question: 'How does a school or district apply to become a Launch School?',
    answer: 'School leaders, career directors, or district administrators can submit the institutional application form on this page. Our education partnerships team will review your cohort size, current setup, and goals, and schedule a tailored institutional demonstration within 1–2 business days.',
  },
];

export function HighSchoolsFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Core Proposition & Scope', 'Student Privacy & Boundaries', 'Youth Safeguarding & Age Tiers', 'Equal Pathway Parity', 'Career Passport & Evidence', 'Launch School Programme'];

  const filteredFaqs = selectedCategory === 'All' 
    ? SCHOOL_FAQS 
    : SCHOOL_FAQS.filter((f) => f.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full space-y-8" id="school-faq">
      
      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              'px-3.5 py-1.5 rounded-[var(--radius-sm)] text-xs font-semibold border transition-all cursor-pointer',
              selectedCategory === cat
                ? 'bg-[#F4F3EF] text-[#202020] border-[#F4F3EF]'
                : 'bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] border-[var(--color-border-default)] hover:bg-white/10'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={isOpen}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
              >
                <div className="space-y-1 pr-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6BB8FF] font-semibold block">
                    {faq.category}
                  </span>
                  <h4 className="text-sm sm:text-base font-serif font-medium text-white">
                    {faq.question}
                  </h4>
                </div>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 text-[var(--color-taupe-300)] shrink-0 transition-transform duration-200',
                    isOpen && 'transform rotate-180 text-[#2F8FFF]'
                  )}
                />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs text-[var(--color-text-secondary)] leading-relaxed border-t border-[var(--color-border-subtle)] space-y-3">
                  <p>{faq.answer}</p>
                  {faq.links && faq.links.length > 0 && (
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      {faq.links.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.href}
                          className="text-[#6BB8FF] hover:text-white font-semibold underline underline-offset-4 inline-flex items-center gap-1"
                        >
                          {link.label} <ArrowRight className="w-3 h-3" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
