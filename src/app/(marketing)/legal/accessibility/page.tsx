import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function AccessibilityStatementPage() {
  const meta = GOVERNANCE_MANIFEST["accessibility"]!;
  const toc = [
    { id: "commitment", title: "1. Commitment to Accessibility" },
    { id: "wcag-target", title: "2. Target Standard: WCAG 2.2 Level AA" },
    { id: "features", title: "3. Accessible Design & Engineering Features" },
    { id: "reporting", title: "4. Reporting Accessibility Barriers & Remediation" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Commitment to Web Content Accessibility Guidelines (WCAG 2.2 Level AA) conformance across all platform surfaces." toc={toc}>
      <section id="commitment" className="space-y-4">
        <h2>1. Commitment to Accessibility</h2>
        <p>
          Career OS is committed to ensuring digital accessibility for people with disabilities, including students, job candidates, educators, and mentors.
        </p>
      </section>

      <section id="wcag-target" className="space-y-4">
        <h2>2. Target Standard: WCAG 2.2 Level AA</h2>
        <p>
          We target full conformance with the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA across public marketing pages, authenticated student dashboards, and employer workspaces.
        </p>
      </section>

      <section id="features" className="space-y-4">
        <h2>3. Accessible Design &amp; Engineering Features</h2>
        <ul>
          <li><strong>Keyboard Navigation:</strong> Fully operable keyboard navigation with high-visibility focus indicators.</li>
          <li><strong>Screen Reader Compatibility:</strong> Semantic HTML5 markup, ARIA roles, and landmark regions.</li>
          <li><strong>Color Contrast &amp; Typography:</strong> High-contrast editorial palette meeting minimum 4.5:1 contrast ratios.</li>
          <li><strong>Reduced Motion Support:</strong> Respects system <code className="font-mono text-xs">prefers-reduced-motion</code> settings.</li>
        </ul>
      </section>

      <section id="reporting" className="space-y-4">
        <h2>4. Reporting Accessibility Barriers &amp; Remediation</h2>
        <p>
          If you encounter accessibility barriers, please contact our Accessibility Lead at <a href={`mailto:${LEGAL_CONFIG.legalEmail}`}>{LEGAL_CONFIG.legalEmail}</a>. We respond to accessibility reports within 2 business days.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
