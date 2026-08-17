import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function TrustAccessibilityPage() {
  const meta = GOVERNANCE_MANIFEST["trust-accessibility"]!;
  const toc = [
    { id: "philosophy", title: "1. Inclusive Design Philosophy" },
    { id: "wcag-target", title: "2. WCAG 2.2 AA Engineering Features" },
    { id: "ai-a11y", title: "3. Accessible AI Interfaces & Support" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Product design approach, screen reader support, keyboard navigation, and WCAG 2.2 AA engineering standards." toc={toc}>
      <section id="philosophy" className="space-y-4">
        <h2>1. Inclusive Design Philosophy</h2>
        <p>
          Career OS is engineered to ensure every individual—regardless of visual, auditory, motor, or cognitive ability—can access career guidance and build a portable professional record.
        </p>
      </section>

      <section id="wcag-target" className="space-y-4">
        <h2>2. WCAG 2.2 AA Engineering Features</h2>
        <ul>
          <li><strong>Keyboard Operability:</strong> Complete focus control with visible 2px outlines.</li>
          <li><strong>Screen Reader Optimization:</strong> ARIA live regions for dynamic AI mentor streaming.</li>
          <li><strong>Contrast &amp; Text:</strong> High-contrast editorial palette meeting 4.5:1 ratio targets.</li>
          <li><strong>Reduced Motion:</strong> Respects user system preference settings for animations.</li>
        </ul>
      </section>

      <section id="ai-a11y" className="space-y-4">
        <h2>3. Accessible AI Interfaces &amp; Support</h2>
        <p>
          AI mentor outputs are formatted in accessible, screen-reader friendly typography with semantic headings and plain text options.
        </p>
      </section>
    </GovernancePageLayout>
  );
}