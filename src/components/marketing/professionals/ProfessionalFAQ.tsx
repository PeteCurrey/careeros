'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

const FAQS: FAQ[] = [
  {
    q: 'What is Career OS for working professionals?',
    a: "Career OS is a personal career operating system designed to help you actively manage your career while you are employed. Rather than a transactional job board you only visit during a crisis, Career OS helps you record demonstrable evidence, identify promotion requirements, explore lateral transitions, evaluate compensation, and continuously plan your next strategic move.",
  },
  {
    q: 'Do I need to be looking for a new job to use Career OS?',
    a: "No. In fact, Career OS is most effective when you are settled in your current role. It helps you capture project outcomes while they are fresh, prepare for annual reviews and promotion conversations, develop leadership capabilities, and maintain career clarity without having to reconstruct your history under pressure later.",
  },
  {
    q: 'Can Career OS help me get promoted?',
    a: "Yes. Career OS helps you deconstruct what the target role actually requires in practice versus what you currently do. It helps distinguish between needing another qualification and needing concrete leadership or commercial evidence — giving you a structured action plan to build the missing proof points.",
  },
  {
    q: 'Can it help identify specific capability gaps?',
    a: "Yes. By comparing your Career Twin context against comprehensive Career Graph role models, Career OS highlights specific missing dimensions — such as direct budget accountability, cross-functional stakeholder management, or regulatory certifications.",
  },
  {
    q: 'Does Career OS tell me whether I am ready for management?',
    a: "Career OS helps you explore the reality of people leadership versus technical authority. It does not output a simplistic '74% ready' score; instead, it evaluates whether you have demonstrable evidence of delegation, coaching, conflict resolution, and performance management.",
  },
  {
    q: 'Can it help me stay on a specialist or individual contributor path?',
    a: "Absolutely. Progression does not have to mean managing people. Career OS treats technical authority, principal engineering, consulting mastery, and deep subject-matter expertise as high-status, viable pathways equivalent to people management.",
  },
  {
    q: 'Can Career OS help with salary and compensation negotiation?',
    a: "Career OS helps you prepare for compensation reviews by structuring the demonstrable value, expanded scope, and measurable business outcomes you have delivered. We do not generate unverified salary promises, but provide a structured framework to anchor your conversations in facts.",
  },
  {
    q: 'Does Career OS have live real-time salary data?',
    a: "Career OS connects to reliable external benchmark sources where available and transparently indicates when market ranges are illustrative. We never fabricate compensation figures or promise specific monetary increases.",
  },
  {
    q: 'Can Career OS help me change industries or functional areas?',
    a: "Yes. Career Graph is specifically built to uncover transferable underlying capabilities — such as diagnostic fault-finding, incident risk management, or client negotiation — and map how they transfer into adjacent sectors without forcing you to start from zero.",
  },
  {
    q: 'How does Career Graph identify transferable skills?',
    a: "Career Graph evaluates the core functional capabilities behind your work rather than matching surface job titles. For instance, it recognizes that ICU triage, emergency incident command, and industrial plant breakdown management share deep underlying crisis-coordination mechanics.",
  },
  {
    q: 'Can Career OS help after redundancy or sudden career shock?',
    a: "Yes. If your role is eliminated or your industry declines, having your Career Twin and Passport context already assembled means you don't have to rebuild your professional story from scratch under stress. It immediately surfaces lateral roles and bridges needed.",
  },
  {
    q: 'Can it help me return after a career break?',
    a: "Yes. Whether stepping away for parenting, caregiving, health recovery, sabbatical, or military transition, Career OS values your accumulated capability and helps identify modern refresher bridges rather than treating time away as a defect.",
  },
  {
    q: 'Can it support leadership and executive development?',
    a: "Yes. Career Mentor acts as a private sounding board to rehearse high-stakes leadership moments: delivering critical performance feedback, navigating corporate politics, managing restructuring, and presenting to executive boards.",
  },
  {
    q: 'Can it help me explore international career opportunities?',
    a: "Career OS is expanding global mobility intelligence to help evaluate qualification cross-recognition, visa sponsorship criteria, and international licensing requirements across jurisdictions.",
  },
  {
    q: 'Can it help me transition into entrepreneurship or independent consulting?',
    a: "Yes. Leaving employment to build an independent practice, consultancy, or startup is a natural career transition. Career OS helps assess domain readiness, commercial positioning, and the operational skills needed to launch.",
  },
  {
    q: 'What is Career Passport for an experienced professional?',
    a: "Career Passport is your portable, self-custodied professional record. It houses project case studies, client recommendations, licenses, audit certificates, and leadership milestones across all your employers over a 20+ year career.",
  },
  {
    q: 'Can my current employer see my Career Twin or Mentor conversations?',
    a: "No. Your private Career Twin, Mentor conversations, career dissatisfaction, and exit timelines are strictly confidential within your personal account. Your employer only sees what you explicitly choose to share in a public or employer-permissioned Passport view.",
  },
  {
    q: 'Can I use Career OS if my company does not use it?',
    a: "Yes. Career OS is built for the individual professional. It is completely independent of your company's HR systems, LMS, or corporate intranet.",
  },
  {
    q: 'What happens to my Career OS when I change employers?',
    a: "Your Career OS is registered to your personal identity, not your work email. When you change jobs, your entire history, evidence record, and Mentor context move with you seamlessly.",
  },
  {
    q: 'Is Career OS free for individual professionals?',
    a: "Yes. Career OS is free for individuals. Core career intelligence, Career Twin, Career Passport, and AI Career Mentor access are provided with no mandatory subscription for baseline personal use.",
  },
];

export function ProfessionalFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="w-full divide-y divide-[var(--color-border-subtle)]" id="professional-faq">
      {FAQS.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={idx}>
            <button
              className="w-full flex items-start justify-between gap-4 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span className="text-sm font-medium text-[var(--color-text-primary)] leading-relaxed pr-4">
                {faq.q}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-[var(--color-text-tertiary)] shrink-0 mt-0.5 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div className="pb-6 pr-8">
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
