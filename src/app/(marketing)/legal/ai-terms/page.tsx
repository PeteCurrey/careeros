import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function AITermsPage() {
  const meta = GOVERNANCE_MANIFEST["ai-terms"]!;
  const toc = [
    { id: "non-human", title: "1. Non-Human System Disclosure" },
    { id: "personas", title: "2. System-Assigned Mentor Personas" },
    { id: "limitations", title: "3. Technical Limitations & Hallucinations" },
    { id: "provenance", title: "4. Recommendation Provenance & Rationale" },
    { id: "provider-isolation", title: "5. Model Provider Architecture & Data Isolation" },
    { id: "prohibited-ai", title: "6. Prohibited AI Uses & Evidence Integrity" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Terms governing AI mentor features, large language model interactions, recommendation provenance, and data isolation." toc={toc}>
      <section id="non-human" className="space-y-4">
        <h2>1. Non-Human System Disclosure</h2>
        <p>
          The AI Career Mentor is an artificial intelligence software system powered by large language models (LLMs). It is not a human being. Every AI mentor interface is explicitly disclosed as an AI system at the point of visual contact.
        </p>
      </section>

      <section id="personas" className="space-y-4">
        <h2>2. System-Assigned Mentor Personas</h2>
        <p>
          Mentor personas (e.g., domain specialists in software, trades, healthcare, business) represent stylized domain-intelligence models. We do not fabricate celebrity companion avatars or pretend mentor models are real individuals.
        </p>
      </section>

      <section id="limitations" className="space-y-4">
        <h2>3. Technical Limitations &amp; Hallucinations</h2>
        <p>
          AI models generate responses based on statistical pattern recognition. AI output may contain errors, outdated facts, or unverified claims (&quot;hallucinations&quot;). AI recommendations do not constitute licensed legal, medical, or financial advice.
        </p>
      </section>

      <section id="provenance" className="space-y-4">
        <h2>4. Recommendation Provenance &amp; Rationale</h2>
        <p>
          Career OS surfaces user-facing decision factors and provenance metadata for AI recommendations, illuminating why specific skills, courses, or pathways were suggested.
        </p>
      </section>

      <section id="provider-isolation" className="space-y-4">
        <h2>5. Model Provider Architecture &amp; Data Isolation</h2>
        <p>
          Career OS routes prompts to enterprise LLM providers (e.g., Google Cloud Gemini, OpenAI Enterprise, Anthropic). Our commercial API contracts prohibit LLM providers from using user prompts or candidate data to train public foundation models.
        </p>
      </section>

      <section id="prohibited-ai" className="space-y-4">
        <h2>6. Prohibited AI Uses &amp; Evidence Integrity</h2>
        <p>
          Users agree NOT to use AI tools on Career OS to fabricate fake credentials, generate plagiarized project evidence, conduct automated harassment, or attempt prompt-injection attacks.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
