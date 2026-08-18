'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

const FAQS: FAQ[] = [
  {
    q: 'What information does Career OS process for students?',
    a: "Depending on the deployment mode and features used, Career OS processes identity context (name, age tier, school affiliation), career exploration records (pathways viewed, interests), Career Passport credentials (qualifications, coursework artifacts), and conversational context with the AI Career Mentor. We do not collect unnecessary sensitive data such as political beliefs, religious views, medical history, or precise geolocation.",
  },
  {
    q: 'Does Career OS collect the exact same information from every student?',
    a: "No. Data processing is strictly minimized based on age, account type, and active features. For instance, a 14-year-old in a school classroom module uses a restricted profile with guardian/institutional authorization, whereas an 18-year-old direct user manages their own Career Passport.",
  },
  {
    q: 'Can school staff see everything inside a student’s Career OS account?',
    a: "No. School staff access is purpose-limited and role-based. Career counsellors can view agreed pathway goals, coursework evidence, and guidance requests, but they cannot routinely browse private AI Career Mentor chat transcripts or private personal salary reflections.",
  },
  {
    q: 'Can classroom teachers read a student’s AI Career Mentor conversations?',
    a: "No. Classroom teachers have no access to private AI Career Mentor dialogue. The Mentor is designed as a safe, confidential space for unhurried student inquiry.",
  },
  {
    q: 'Can school career counsellors read Career Mentor conversations?',
    a: "No. Routine exploratory conversations with the AI Mentor remain sealed in the student's personal account context. Counsellors receive high-level interest summaries and student-booked appointment requests.",
  },
  {
    q: 'Can safeguarding staff access private conversations during a safety concern?',
    a: "Yes, but strictly under documented, purpose-limited safeguarding procedures. If the AI safety filters detect an imminent risk of severe harm, abuse, or violence, the system initiates a justified, audited human escalation to the school's designated safeguarding lead (DSL). Safeguarding creates an emergency escalation path, not permanent universal surveillance.",
  },
  {
    q: 'Can parents see everything their child does on Career OS?',
    a: "Guardian visibility depends on age and legal relationship. For students aged 13–15, linked parent accounts can review career clusters explored, verified qualifications, and approve external opportunity sharing. Routine chat exploration remains confidential to encourage authentic inquiry.",
  },
  {
    q: 'Can prospective employers browse student profiles or Career Twins?',
    a: "Never. Career OS does not operate an open, searchable student directory for recruiters. Employers only receive candidate dossiers when an eligible student explicitly selects, approves, and submits their evidence for a specific opportunity.",
  },
  {
    q: 'Can employers see student conversations with the AI Career Mentor?',
    a: "Strictly no. Employers have zero access to candidate AI coaching sessions, career doubts, or private exploration history.",
  },
  {
    q: 'Can a student make their Career OS profile completely public on the internet?',
    a: "No. For minor students, public web profiles are disabled by default. Students may generate private, read-only verification links for specific verified credentials (such as an awarded certificate) if desired.",
  },
  {
    q: 'Is Career OS based on real identity, and does that make profiles public?',
    a: "Career OS uses authentic identity to ensure credential provenance and eliminate fake reviews. However, real identity does NOT mean public visibility. Personal identity is protected behind strict authentication and permissioned boundaries.",
  },
  {
    q: 'What is Career Passport, and how does it differ from a school education record?',
    a: "Career Passport is a portable, student-custodied evidence ledger containing qualifications, coursework deliverables, and certificates. Official school institutional records (e.g. attendance, disciplinary files, official transcripts) remain under the school district's legal custody.",
  },
  {
    q: 'Who controls official school education records?',
    a: "The educational institution or school district remains the data controller for official education records under applicable law (such as FERPA or UK GDPR). Career OS acts as a data processor for school-managed tenancy data.",
  },
  {
    q: 'What happens to a student’s Career OS account upon high school graduation?',
    a: "Graduation terminates the high school's institutional management, while the student retains their personal Career Twin and Career Passport. Institutional school records remain archived in the school's workspace according to statutory retention schedules.",
  },
  {
    q: 'What privacy changes occur when a student turns 16?',
    a: "Under Career OS product policy, turning 16 permits the creation of a direct individual account. However, turning 16 does NOT create legal majority, nor does it automatically transfer high school FERPA rights (which transfer at 18).",
  },
  {
    q: 'What privacy changes occur when a student turns 18?',
    a: "At age 18, the student reaches legal majority in most jurisdictions. All educational privacy rights under FERPA transfer completely from parent to student, and the student holds exclusive control over all account permissions.",
  },
  {
    q: 'How does postsecondary attendance affect privacy rights under FERPA?',
    a: "Under U.S. federal law, when a student attends a postsecondary institution (college/university) at ANY age, all FERPA rights transfer to the student immediately. Career OS models postsecondary status independently of chronological age.",
  },
  {
    q: 'How does Career OS comply with FERPA (Family Educational Rights and Privacy Act)?',
    a: "Career OS operates as an authorized 'school official' under FERPA when deployed by educational institutions, processing student data under direct district control for legitimate educational interests with strict redisclosure prohibitions.",
  },
  {
    q: 'How does Career OS comply with COPPA (Children’s Online Privacy Protection Act)?',
    a: "Career OS permits no open consumer registration for children under 13. Institutional school deployments for under-13s operate under school-mediated consent for educational purposes only, with zero commercial monetization.",
  },
  {
    q: 'How does parent/guardian consent work, and can it be withdrawn?',
    a: "Consent is recorded as an immutable, time-stamped audit event tied to specific policy versions and purposes. Parents or guardians may modify or withdraw consent at any time via their account portal or school coordinator.",
  },
  {
    q: 'Does Career OS use student personal data to train public AI models?',
    a: "No. Student personal data, Career Twin records, and Career Mentor prompts are not used to train public foundation AI models. AI provider agreements enforce strict zero-training and data isolation terms.",
  },
  {
    q: 'Which AI providers receive student prompt context?',
    a: "Prompt context is routed through secure enterprise AI endpoints (such as Google Cloud Vertex AI) governed by strict business associate and data processing agreements. Review our Subprocessor Register for current providers.",
  },
  {
    q: 'Can students or parents request account deletion?',
    a: "Yes. Students (or parents of minors) can request account deletion. Personal Career Twin and Mentor data is expunged in accordance with our retention schedule, while statutory institutional school records remain archived by the district as legally required.",
  },
  {
    q: 'Can students challenge or correct inaccurate career data?',
    a: "Yes. Students can edit self-declared profile information, dispute inaccurate credential records, or request correction of erroneous school-issued data through their school coordinator.",
  },
  {
    q: 'How long does Career OS retain student data?',
    a: "Active personal accounts remain accessible throughout the individual's career. Stalled or unactivated accounts are purged after designated inactivity thresholds, and institutional school workspace data is retained in accordance with district contracts.",
  },
  {
    q: 'Does Career OS sell student data to third-party advertisers or brokers?',
    a: "Never. Career OS does not sell, rent, or monetize student personal data, career exploration history, or Mentor conversations to commercial advertisers or data brokers.",
  },
  {
    q: 'Can schools export student cohort data for district reporting?',
    a: "Yes. Authorized administrators can export anonymized cohort analytics and Gatsby Benchmark / destination reporting metrics in standard CSV/JSON formats without compromising individual student confidentiality.",
  },
  {
    q: 'How can a school Data Protection Officer conduct a formal privacy review?',
    a: "DPOs and privacy leads can access our comprehensive compliance pack, including Data Processing Addenda (DPA), Subprocessor lists, DPIA templates, and security architecture whitepapers via our Trust Centre.",
  },
];

export function SchoolPrivacyFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="w-full divide-y divide-[var(--color-border-subtle)]" id="school-privacy-faq">
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
