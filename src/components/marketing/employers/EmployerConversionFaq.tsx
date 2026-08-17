'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

const FAQS: FAQ[] = [
  {
    q: 'What is Career OS for employers?',
    a: "Career OS is a career intelligence platform designed to help employers define roles around real capability and evidence, discover qualified talent from adjacent backgrounds and career changes, verify credentials with clear provenance, and support workforce mobility and long-term development.",
  },
  {
    q: 'Is Career OS an Applicant Tracking System (ATS)?',
    a: "No. Career OS is not an ATS, and it is not designed to replace your existing recruitment workflow. It functions as an intelligence and discovery layer that operates alongside your ATS, enriching candidate discovery with capability mapping, evidence verification, and structured role briefs.",
  },
  {
    q: 'Does Career OS replace recruiters or hiring managers?',
    a: "No. Career OS provides decision support, capability translation, and evidence structuring. Final evaluation, candidate engagement, interviews, and hiring decisions remain strictly with authorized human professionals.",
  },
  {
    q: 'What is Employer Agent?',
    a: "Employer Agent is an AI-assisted interface that helps hiring teams convert conventional job descriptions into structured capability briefs, evaluate adjacent talent pathways in Career Graph, and coordinate discovery with candidates' Opportunity Agents.",
  },
  {
    q: 'Is Employer Agent live in production today?',
    a: "Employer Agent is currently in active development and early-access deployment with Founding Employers. Production rollout is being staged deliberately under rigorous governance and fairness review.",
  },
  {
    q: 'Does Career OS make autonomous hiring or rejection decisions?',
    a: "No. Career OS does not perform autonomous screening, automated candidate rejection, or automated selection. All employment decisions require meaningful human review and decision-making.",
  },
  {
    q: 'Does Career OS rank candidates from highest to lowest?',
    a: "No. Career OS deliberately avoids opaque linear candidate ranking. We believe linear ranking obscures multidimensional capability and creates arbitrary score cutoffs. We present explainable evidence and capability bridges instead.",
  },
  {
    q: 'Does Career OS use candidate match percentage scores?',
    a: "No. Career OS does not generate synthetic '87% match' scores. Instead, we show explainable dimensional breakdowns: what capabilities transfer, what evidence is verified, what bridges are needed, and what questions human interviewers should explore.",
  },
  {
    q: 'How does Career OS define a role differently from a standard job description?',
    a: "We deconstruct roles into five explicit layers: (1) measurable operational outcomes, (2) functional capabilities, (3) supporting project and credential evidence, (4) genuinely mandatory legal/safety criteria, and (5) developable requirements that can be learned on the job.",
  },
  {
    q: 'How does Career OS discover candidates outside exact-title searches?',
    a: "Career Graph analyzes the underlying functional mechanics of work — such as electro-mechanical fault diagnosis, dynamic risk management, or regulatory compliance — and maps how those capabilities transfer into target roles from adjacent industries.",
  },
  {
    q: 'How does Career OS support career changers?',
    a: "Rather than screening out candidates who lack the exact target title on their CV, Career OS highlights transferable competencies and explicitly identifies the specific bridges needed to facilitate a successful industry transition.",
  },
  {
    q: 'Can Career OS help recruit military veterans and service leavers?',
    a: "Yes. Career OS translates complex military operational, logistical, and technical engineering backgrounds into clear civilian capability equivalents, preserving service evidence without trivializing qualification differences.",
  },
  {
    q: 'How does Career OS support apprenticeship recruitment and development?',
    a: "Career OS treats apprenticeships as a lifelong capability-building journey. It helps candidates document project evidence and vocational milestones in their Career Passport, which remains active and portable throughout their subsequent career.",
  },
  {
    q: 'How does Career OS support early-career talent without long CV histories?',
    a: "Career OS evaluates school coursework projects, technical competitions, volunteering, extracurricular leadership, and part-time work as legitimate early evidence of applied technical and interpersonal capability.",
  },
  {
    q: 'Can Career OS be used for internal mobility and workforce planning?',
    a: "Yes. Career Graph can help organizations map existing employees' underlying capabilities to internal vacancies, project squads, and succession pathways — unlocking latent talent already inside the business.",
  },
  {
    q: 'What can employers see from a candidate’s Career Twin?',
    a: "Employers only see candidate context that has been explicitly authorized and shared by the individual for a specific role application. Employers cannot browse private Career Twins or view candidate exploration history.",
  },
  {
    q: 'Can employers see candidates’ private conversations with their AI Career Mentor?',
    a: "Never. Mentor conversations, career uncertainty, private salary ambitions, and dissatisfaction with current employers are strictly private and sealed within the individual's personal account.",
  },
  {
    q: 'How does Career Passport evidence verification work?',
    a: "Career Passport distinguishes between self-declared achievements, attached project artifacts, third-party verified credentials, issuer-verified certificates, and employer-confirmed employment records with transparent provenance badges.",
  },
  {
    q: 'Is every item in a candidate’s Career Passport verified?',
    a: "No. Career Passport transparently displays the verification status of each individual item (e.g., Self-Declared vs. Issuer-Verified). We never label an entire person as 'verified.'",
  },
  {
    q: 'How are regulated professions and mandatory licensing handled?',
    a: "Career OS strictly separates transferable capability from statutory licensing. In regulated fields (medicine, law, gas fitting, aviation), mandatory regulatory credentials are treated as non-negotiable prerequisites.",
  },
  {
    q: 'How does Career OS approach responsible AI and algorithmic bias?',
    a: "Our architecture is built on explainability, evidence provenance, human oversight, data minimization, and continuous bias auditing. We never use black-box neural ranking for employment decision-making.",
  },
  {
    q: 'How does Career OS align with employment AI regulations (e.g., EU AI Act, NYC Local Law 144)?',
    a: "Career OS is engineered around transparency, auditability, data minimization, and mandatory human agency. Deployment-specific compliance documentation is provided to Founding Employers to support enterprise governance.",
  },
  {
    q: 'Does Career OS integrate with our existing ATS or HRIS?',
    a: "Career OS is designed to integrate via open APIs and structured data exports alongside major enterprise platforms, with direct pilot connectors being rolled out to Founding Employers.",
  },
  {
    q: 'Can multinational employers use Career OS across different jurisdictions?',
    a: "Yes. Career OS supports localized capability mapping, cross-border qualification translation, and region-specific regulatory configurations.",
  },
  {
    q: 'What is the Founding Employer programme?',
    a: "The Founding Employer programme is an exclusive early-adopter partnership giving forward-thinking employers priority access to Employer Agent pilots, role-definition workshops, adjacent talent discovery, and direct influence over our product roadmap.",
  },
  {
    q: 'How does an organization begin a Founding Employer pilot?',
    a: "Submit the qualification application above. Our partnerships team will review your organization's specific hiring use cases, schedule a discovery workshop, and establish pilot governance.",
  },
];

export function EmployerConversionFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="w-full divide-y divide-[var(--color-border-subtle)]" id="employer-faq">
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
