import React from 'react';
import { LegalPage } from '@/components/layout/LegalPage';

export default function AITermsPage() {
  return (
    <LegalPage
      title="AI Terms of Use"
      subtitle="Specific terms governing your use of AI-powered features including the AI Career Mentor, Opportunity Agent, and Employer Agent."
      effectiveDate="1 September 2026"
    >
      <section>
        <h2>1. AI Features Covered</h2>
        <p>These terms apply to: AI Career Mentor, Opportunity Agent, Employer Agent discovery and matching, and any other AI-assisted recommendation, analysis, or generation features on the Platform.</p>
      </section>
      <section>
        <h2>2. Nature of AI Recommendations</h2>
        <p>
          AI features on Career OS provide decision support, not definitive professional advice. AI-generated content may contain errors, limitations, or outdated information. All significant career, educational, financial, or professional decisions should be made with appropriate human judgment and, where relevant, qualified professional advice.
        </p>
      </section>
      <section>
        <h2>3. No Human Simulation</h2>
        <p>
          Career OS AI systems are not human. They do not have feelings, lived experience, or professional credentials. We will never deceive users into believing they are interacting with a human professional, a real mentor, or a specific named person.
        </p>
      </section>
      <section>
        <h2>4. AI in Employment Workflows</h2>
        <p>
          Employer Agent is scoped to discovery, matching, recommendation, and decision support. Autonomous hiring decisions, automated rejection, and AI-only screening without human review are explicitly prohibited under our platform governance and these Terms.
        </p>
      </section>
      <section>
        <h2>5. Prohibited AI Misuse</h2>
        <p>You may not use AI features to:</p>
        <ul>
          <li>Generate fraudulent credentials or fabricated professional histories</li>
          <li>Automate discrimination based on protected characteristics</li>
          <li>Attempt to extract underlying model weights or training data</li>
          <li>Circumvent safety policies or generate harmful content</li>
        </ul>
      </section>
      <section>
        <h2>6. Feedback and Correction</h2>
        <p>
          You may correct, override, or report AI recommendations at any time. We use anonymised feedback to improve recommendation quality while preserving your privacy.
        </p>
      </section>
    </LegalPage>
  );
}
