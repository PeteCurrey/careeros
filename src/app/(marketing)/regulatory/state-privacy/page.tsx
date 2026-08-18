import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";

export default function StatePrivacyPage() {
  const meta = GOVERNANCE_MANIFEST["state-privacy"]!;
  const toc = [
    { id: "state-landscape", title: "1. US State Comprehensive Privacy Landscape" },
    { id: "ccpa-cpra", title: "2. California Consumer Privacy Act (CCPA/CPRA)" },
    { id: "multi-state", title: "3. Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA) Alignment" },
    { id: "youth-optin", title: "4. State Minor Privacy & Opt-In Safeguards" },
    { id: "exercise-rights", title: "5. How to Exercise State Privacy Rights" },
  ];

  return (
    <GovernancePageLayout
      meta={meta}
      subtitle="Comprehensive multi-state consumer privacy analysis covering California, Virginia, Colorado, Connecticut, Utah, and emerging state statutes."
      toc={toc}
    >
      <section id="state-landscape" className="space-y-4">
        <h2>1. US State Comprehensive Privacy Landscape</h2>
        <p>
          As a United States-first platform, Career OS is architected to exceed the requirements of comprehensive state consumer privacy laws. Because our core business model is software infrastructure rather than behavioral advertising or data brokering, we fundamentally avoid the data exploitation practices regulated by state privacy statutes.
        </p>
      </section>

      <section id="ccpa-cpra" className="space-y-4">
        <h2>2. California Consumer Privacy Act (CCPA/CPRA)</h2>
        <p>
          For California residents, Career OS fully complies with the California Consumer Privacy Act as amended by the California Privacy Rights Act (Cal. Civ. Code § 1798.100 et seq.):
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>No Sale or Sharing of Personal Data:</strong> Career OS does not &ldquo;sell&rdquo; personal data or &ldquo;share&rdquo; personal data for cross-context behavioral advertising.</li>
          <li><strong>Right to Know &amp; Access:</strong> Full data portability exports provided in structured JSON and PDF formats.</li>
          <li><strong>Right to Delete:</strong> Complete cryptographic erasure across active PostgreSQL databases and encrypted backups.</li>
          <li><strong>Right to Correct:</strong> Real-time user interface editing for all Career Twin and portfolio records.</li>
          <li><strong>Limit Use of Sensitive Personal Information:</strong> Career OS uses sensitive data solely to deliver authenticated career services requested by the user.</li>
        </ul>
      </section>

      <section id="multi-state" className="space-y-4">
        <h2>3. Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA) Alignment</h2>
        <p>
          We extend uniform privacy protections to residents of all 50 US states, incorporating statutory definitions from the Virginia Consumer Data Protection Act, Colorado Privacy Act, Connecticut Data Privacy Act, and Utah Consumer Privacy Act.
        </p>
      </section>

      <section id="youth-optin" className="space-y-4">
        <h2>4. State Minor Privacy &amp; Opt-In Safeguards</h2>
        <p>
          Career OS enforces strict age-banded consent rules. For users known to be under 16 years of age, Career OS applies default-private profiles and strictly prohibits profiling, commercial outreach, or algorithmic scoring without explicit affirmative authorization and school/guardian safeguards.
        </p>
      </section>

      <section id="exercise-rights" className="space-y-4">
        <h2>5. How to Exercise State Privacy Rights</h2>
        <p>
          You may exercise your rights directly inside your Career OS Account Privacy Settings or by emailing <a href="mailto:privacy@career-os.com" className="text-[#6BB8FF] font-semibold underline">privacy@career-os.com</a>. We respond to all verified consumer requests within 45 days without discriminatory pricing or service degradation.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
