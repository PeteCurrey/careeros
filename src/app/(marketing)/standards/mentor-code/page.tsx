import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function MentorCodePage() {
  const meta = GOVERNANCE_MANIFEST["mentor-code"]!;
  const toc = [
    { id: "ai-boundaries", title: "1. AI Mentor Disclosure & Non-Impersonation" },
    { id: "ethical-limits", title: "2. Dependency Engineering & Romantic Prohibitions" },
    { id: "human-specialists", title: "3. Future Human Specialist Mentorship Rules" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Ethical standards for AI mentor personas and future human guidance specialists." toc={toc}>
      <section id="ai-boundaries" className="space-y-4">
        <h2>1. AI Mentor Disclosure &amp; Non-Impersonation</h2>
        <p>
          The AI Career Mentor is an automated software tool. AI personas surface system identity disclosures and never impersonate real living individuals or fabricate human relationships.
        </p>
      </section>

      <section id="ethical-limits" className="space-y-4">
        <h2>2. Dependency Engineering &amp; Romantic Prohibitions</h2>
        <p>
          AI mentor personas strictly avoid emotional manipulation, companion framing, romantic language, or dependency engineering. Mentor conversations focus exclusively on professional development, skill acquisition, and educational guidance.
        </p>
      </section>

      <section id="human-specialists" className="space-y-4">
        <h2>3. Future Human Specialist Mentorship Rules</h2>
        <p>
          Where human specialists participate in mentorship programs, they are bound by strict professional boundaries, confidentiality rules, and conflict-of-interest disclosures.
        </p>
      </section>
    </GovernancePageLayout>
  );
}