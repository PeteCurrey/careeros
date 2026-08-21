'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: '1. What is Employer Agent?',
    a: 'Employer Agent is a Career OS decision-support product direction designed to help organizations translate roles into functional capabilities and evidence requirements, and discover relevant candidates whose verified competencies match—including candidates whose existing job title might otherwise cause them to be overlooked.',
  },
  {
    q: '2. Is Employer Agent live today?',
    a: 'Employer Agent is an approved product direction currently in early architecture and prototype development with select design partners. It is not currently deployed as an open self-service commercial recruitment platform.',
  },
  {
    q: '3. Is Employer Agent an Applicant Tracking System (ATS)?',
    a: 'No. Employer Agent is not an ATS or workflow management database. It is designed as an upstream capability-definition and evidence-discovery layer that can complement an organization’s existing hiring infrastructure.',
  },
  {
    q: '4. Will Employer Agent replace human recruiters or hiring managers?',
    a: 'No. The system is architecturally designed around human decision support. Its role is restricted to discovery, matching, and recommendation. Final evaluation, candidate dialogue, and hiring authority remain entirely with authorized human hiring teams.',
  },
  {
    q: '5. Does Employer Agent make automated hiring or rejection decisions?',
    a: 'No. Career OS strictly rejects autonomous algorithmic hiring or automated rejection engines. The system provides explainable factors and evidence provenance so human teams can make well-informed decisions.',
  },
  {
    q: '6. How does Employer Agent understand what a role requires?',
    a: 'Instead of indexing generic keyword-laden job descriptions, Employer Agent guides employers through a structured capability brief—defining core operational outcomes, essential functional capabilities, high-signal evidence artifacts, and non-negotiable statutory requirements.',
  },
  {
    q: '7. How does it find candidates outside an exact job title?',
    a: 'By decomposing roles into fundamental competencies (e.g. diagnostics, telemetry analysis, safety governance) and mapping those competencies across disciplines using the Career Graph. This surfaces qualified candidates from adjacent sectors like defense, trades, and field engineering.',
  },
  {
    q: '8. Does Employer Agent use the Career Graph?',
    a: 'Yes. Career Graph provides the underlying topological map of skills, bridge requirements, and cross-sector transitions that enables Employer Agent to identify adjacent candidate pools beneath disparate job titles.',
  },
  {
    q: '9. How does it connect with the Career Passport?',
    a: 'Career Passport provides the candidate evidence layer—including issuer-verified qualifications, work product artifacts, and verified apprenticeship logs. This allows employers to evaluate demonstrable evidence rather than self-reported resume bullet points.',
  },
  {
    q: '10. Can employers see a candidate’s private Career Twin?',
    a: 'No. A candidate’s Career Twin (containing personal reflections, internal goals, and private coaching context) is strictly isolated. Employers only receive role-relevant, candidate-permitted capability briefs.',
  },
  {
    q: '11. Can employers see private AI Career Mentor conversations?',
    a: 'Never. AI Career Mentor conversations are private guidance interactions protected by strict database row-level security. They are completely inaccessible to employers, recruiters, or hiring software.',
  },
  {
    q: '12. How does candidate permission and privacy work during discovery?',
    a: 'Discovery operates under a three-stage privacy architecture: 1) Initial discovery is anonymised; 2) If an employer expresses interest, the candidate reviews the role and decides whether to engage; 3) Full identity and contact details are only disclosed upon mutual consent.',
  },
  {
    q: '13. Does Career OS rank candidates in a leaderboard?',
    a: 'No. We do not generate numerical rankings (#1, #2, #3) or leaderboard tables. Candidates are presented qualitatively as "potentially relevant profiles" with transparent explanations of their specific strengths and bridge requirements.',
  },
  {
    q: '14. Does Employer Agent use automated match percentages (e.g. 96% match)?',
    a: 'No. Career OS avoids manufactured mathematical precision. We provide structured qualitative indicators (e.g., strong supporting evidence, relevant transferable capability, additional evidence required, mandatory condition not confirmed).',
  },
  {
    q: '15. How are mandatory professional licenses handled?',
    a: 'Statutory qualifications (such as medical board registrations, bar admissions, electrical licenses, or gas safety tickets) are treated as non-negotiable gates. Soft capability overlap is never converted into statutory eligibility.',
  },
  {
    q: '16. Can Employer Agent help find career changers and non-traditional talent?',
    a: 'Yes. Surfacing high-aptitude career changers, vocational trade specialists, and cross-industry professionals who possess the required capabilities is a primary design objective of Employer Agent.',
  },
  {
    q: '17. How does it support military veterans and service leavers?',
    a: 'Veterans frequently possess outstanding diagnostic, technical, and high-pressure leadership capabilities described in military terminology that legacy ATS software overlooks. Career Graph translates these competencies into commercial manufacturing and technology equivalencies.',
  },
  {
    q: '18. How does Employer Agent protect students and early-career minors?',
    a: 'Under-18 candidates are protected by strict safeguarding architecture. Cold commercial recruiter solicitation of minor profiles is prohibited. Early-career discovery operates exclusively through verified educational institution and guardian consent frameworks.',
  },
  {
    q: '19. Can Employer Agent support internal mobility and succession planning?',
    a: 'Yes. As a future capability, organizations will be able to apply Employer Agent internally to discover existing employees who possess transferable capabilities for new projects, stretch assignments, and leadership promotions.',
  },
  {
    q: '20. How does Employer Agent coordinate with Opportunity Agent?',
    a: 'They operate as counterpart intelligence layers: Opportunity Agent advocates for the individual candidate, while Employer Agent supports the hiring team. Both share explainable alignment factors while keeping human beings in control of final decisions.',
  },
  {
    q: '21. How does Career OS approach employment AI regulation (e.g. NYC Local Law 144, EU AI Act)?',
    a: 'Career OS follows a compliance-readiness architecture—emphasizing algorithmic explainability, rigorous audit logging, absence of black-box ranking, and human decision oversight. Specific regulatory obligations depend on deployment and jurisdiction.',
  },
  {
    q: '22. Can an employer integrate Employer Agent with their existing ATS?',
    a: 'Planned future releases include secure API integration points to export candidate-approved introductions and capability brief records into enterprise ATS platforms.',
  },
];

export function EmployerAgentFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="w-full space-y-4">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] overflow-hidden transition-colors"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-white hover:text-[#6BB8FF] transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-sm sm:text-base font-serif">
                {faq.q}
              </span>
              <ChevronDown
                className={`w-4 h-4 shrink-0 transition-transform duration-200 text-[var(--color-taupe-300)] ${
                  isOpen ? 'rotate-180 text-[#2F8FFF]' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed border-t border-[var(--color-border-subtle)] pt-4">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
