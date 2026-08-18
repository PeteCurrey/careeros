import React from 'react';

export function MentorFAQ() {
  const faqs = [
    {
      q: 'Do I get to choose which mentor I chat with?',
      a: 'No. Career OS does not operate like a chatbot marketplace or character app. Mentors are system-assigned based upon your Career Twin context, expressed industry direction, and career stage.',
    },
    {
      q: 'Is my mentor a real living person?',
      a: 'No. Every mentor is an AI Career Mentor Persona with deep domain training and explicit governance boundaries. They are always clearly disclosed as artificial intelligence.',
    },
    {
      q: 'Can my assigned mentor change over time?',
      a: 'Yes. If you pivot from software engineering to launching a business, or transition from military service to hospital management, Career OS will automatically calibrate mentor domain intelligence to match your evolving trajectory.',
    },
    {
      q: 'Can my employer see my mentor conversations?',
      a: 'No. Mentor consultations are strictly confidential to your private Career Twin. Employers only see information you explicitly attach to a verified application grant.',
    },
    {
      q: 'Can students use AI Career Mentors?',
      a: 'Yes. Students aged 16+ access mentors independently, while students aged 13–15 access mentors under approved school or guardian arrangements with active youth safety guardrails.',
    },
    {
      q: 'Can the mentor make hiring or promotion decisions?',
      a: 'No. Career OS mentors provide developmental decision support and evidence recommendations. Consequential hiring decisions always remain the exclusive responsibility of human employers.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {faqs.map((f) => (
        <div key={f.q} className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
          <h3 className="text-sm font-bold text-white">{f.q}</h3>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{f.a}</p>
        </div>
      ))}
    </div>
  );
}
