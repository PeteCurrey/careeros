import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function AiTransparencyPage() {
  const meta = GOVERNANCE_MANIFEST["ai-transparency"]!;
  const toc = [
    { id: "when-ai-used", title: "1. When AI Is Being Used" },
    { id: "decision-factors", title: "2. Surfacing Recommendation Rationale & Key Factors" },
    { id: "source-provenance", title: "3. Source & Model Provenance" },
    { id: "user-corrections", title: "4. User Corrections & Feedback Channels" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Disclosures explaining how AI recommendations are generated, what data influences outputs, and how users control recommendations." toc={toc}>
      <section id="when-ai-used" className="space-y-4">
        <h2>1. When AI Is Being Used</h2>
        <p>
          Career OS visually labels every AI interface with clear indicators. You will always know when you are interacting with an automated AI system versus a human advisor or static resource.
        </p>
      </section>

      <section id="decision-factors" className="space-y-4">
        <h2>2. Surfacing Recommendation Rationale &amp; Key Factors</h2>
        <p>
          When the AI Mentor suggests a skill development goal, learning pathway, or potential opportunity, it surfaces the explicit decision factors behind the recommendation (e.g. <em>&quot;Suggested because your Career Twin shows Python proficiency and an expressed interest in Data Engineering&quot;</em>).
        </p>
      </section>

      <section id="source-provenance" className="space-y-4">
        <h2>3. Source &amp; Model Provenance</h2>
        <p>
          Career OS distinguishes factual source material (O*NET labor market data, verified university curricula, official trade apprenticeship standards) from AI-generated synthesis. We do not claim to disclose raw internal model chain-of-thought traces.
        </p>
      </section>

      <section id="user-corrections" className="space-y-4">
        <h2>4. User Corrections &amp; Feedback Channels</h2>
        <p>
          If an AI recommendation is inaccurate or based on stale preferences, you can edit your Career Twin profile or submit direct feedback to recalibrate the model.
        </p>
      </section>
    </GovernancePageLayout>
  );
}