'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

const FAQS: FAQ[] = [
  {
    q: 'What is Career OS for students?',
    a: "Career OS is a career platform designed for your whole working life — starting from school or college. It gives you an AI Career Mentor to ask career questions, a Career Twin that builds a picture of your capabilities, a Career Passport to keep evidence of what you've done, and tools to explore careers, pathways and first opportunities.",
  },
  {
    q: "What if I have no idea what career I want?",
    a: "That's a perfectly reasonable place to start. Career OS is designed for exploration, not just confirmation. You can use it to investigate career families you haven't considered, understand what different jobs actually involve, and gradually narrow your direction — without being forced to make a permanent decision early.",
  },
  {
    q: "Does Career OS tell me which career I should choose?",
    a: "No. Career OS helps you understand yourself better and explore possibilities — it doesn't tell you what career to choose or claim to have found your 'perfect match'. Career direction is a personal decision that develops over time and usually involves changing your mind at least once.",
  },
  {
    q: "Is university the main route Career OS recommends?",
    a: "No. Career OS treats university, apprenticeships, skilled trades, direct employment and military routes as equally valid pathways. The right route depends on where you want to go — not on which option is considered most prestigious.",
  },
  {
    q: "Can Career OS help with apprenticeships?",
    a: "Yes. Career OS can help you understand which apprenticeships exist in your areas of interest, what they typically require, how they compare to other routes, and how to prepare your evidence and approach. Future versions of the platform are being designed to help surface relevant opportunities.",
  },
  {
    q: "Can Career OS help me explore skilled trades?",
    a: "Yes. Skilled trades — electrical, plumbing, automotive, construction, HVAC and others — are treated as serious career families in Career OS, not as second-choice options. Career Graph can help you explore the range of roles and routes in any trade.",
  },
  {
    q: "What is the AI Career Mentor?",
    a: "The AI Career Mentor is a conversational AI that answers career questions, helps you think through decisions and supports exploration. It works within your Career OS context and is designed to be more useful than generic internet advice. It is not a human careers adviser, therapist or guarantee engine.",
  },
  {
    q: "Is the Career Mentor a real person?",
    a: "No. The Career Mentor is AI. This is always made clear. Career OS does not pretend AI is human. For significant personal decisions — including health, legal or financial matters — qualified human professionals remain the appropriate source of advice.",
  },
  {
    q: "What is Career Twin?",
    a: "Career Twin is a structured digital model of your capabilities, experiences, qualifications, evidence and goals. It starts from wherever you are now — even if you're still at school — and develops over time as your experience and evidence grows. It helps Career OS understand your context and give more relevant responses.",
  },
  {
    q: "What can I put in Career Passport if I've never had a full-time job?",
    a: "More than you might think. Career Passport can hold qualifications, school projects, awards, certificates, volunteering, work experience, part-time jobs, extracurricular activities, personal projects, training and competition participation. The point is to start building an evidence record early — not wait until you have years of employment to document.",
  },
  {
    q: "Can school projects count as evidence?",
    a: "Yes. A well-documented school engineering project can demonstrate design thinking, technical reasoning, teamwork and problem-solving. A school business project can demonstrate commercial awareness, planning and presentation. Evidence isn't only about paid employment — it's about what you can demonstrate.",
  },
  {
    q: "Can Career OS help me write a resume or resume?",
    a: "Career Mentor can support resume thinking and preparation. Career OS is being designed to help you organize and present your experience clearly. Current resume automation capabilities are in development — the platform currently focuses on helping you understand and record your experience first.",
  },
  {
    q: "Can it help me prepare for interviews?",
    a: "Career Mentor can help you think through how to explain your experience, what interviewers in particular roles typically ask about, and how to prepare. Structured interview practice tools are part of the product direction.",
  },
  {
    q: "Does Career OS find internships or apprenticeships?",
    a: "Opportunity discovery is part of the Career OS product direction — the Opportunity Agent is being designed to help surface relevant opportunities based on your Career Twin and Passport. This is not yet fully live. Career OS does not currently operate as a job board.",
  },
  {
    q: "Can an employer see my private career questions?",
    a: "No. Your Mentor conversations are private career context. Employer access is limited to what you choose to share — typically selected Career Passport evidence you explicitly make available. Your exploration and uncertainty is not employer-visible.",
  },
  {
    q: "Can my school see everything I do on Career OS?",
    a: "No. If you access Career OS through a school arrangement, the school may have visibility of certain platform-level information depending on the arrangement. Your private Mentor conversations and exploration are not exposed to school administrators as a default. Review the Student Privacy and School Terms pages for the specific access model.",
  },
  {
    q: "Can my parents see my account?",
    a: "For users aged 13–15 accessing Career OS through a verified parent/guardian arrangement, the guardian relationship involves appropriate oversight. For users aged 16 and over with their own individual accounts, standard account privacy applies. Review the Parent & Guardian Notice for the full model.",
  },
  {
    q: "What happens to Career OS when I leave school?",
    a: "Your Career OS account is yours — not your school's. Career OS is designed to continue with you through university, apprenticeship, employment and beyond. Career Twin, Passport and Mentor remain available. Note: institution-controlled records (such as school-held data) are separate from your Career OS evidence record.",
  },
  {
    q: "Can Career OS help me change direction later?",
    a: "Yes — that's a core part of the design. Most people change career direction at least once. Career Twin is built to evolve as your capabilities and goals change. The Mentor can help you think through transitions. Career change is expected, not treated as failure.",
  },
  {
    q: "Is Career OS free for individuals?",
    a: "Career OS is free for individual users. Access to all core features is included. Some advanced or premium features may be introduced in future. Free individual access is not subject to a limited trial period at launch.",
  },
];

export function StudentFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="w-full divide-y divide-[var(--color-border-subtle)]" id="student-faq">
      {FAQS.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={idx}>
            <button
              className="w-full flex items-start justify-between gap-4 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2"
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span className="text-sm font-medium text-[var(--color-text-primary)] leading-relaxed pr-4">
                {faq.q}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-[var(--color-text-tertiary)] shrink-0 mt-0.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
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
