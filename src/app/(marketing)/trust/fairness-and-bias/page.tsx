import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function FairnessAndBiasPage() {
  const meta = GOVERNANCE_MANIFEST["fairness-and-bias"]!;
  const toc = [
    { id: "parity", title: "1. Pathway Parity (University, Trades & Apprenticeships)" },
    { id: "protected-characteristics", title: "2. Protected Characteristics & Proxy Variable Controls" },
    { id: "bias-testing", title: "3. Continuous Bias Testing & Mitigation" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Algorithmic fairness testing, pathway parity across trades and universities, and bias mitigation protocols." toc={toc}>
      <section id="parity" className="space-y-4">
        <h2>1. Pathway Parity (University, Trades &amp; Apprenticeships)</h2>
        <p>
          Career OS algorithms enforce equal dignity across all legitimate career pathways. Recommendations do not systematically steer students toward traditional four-year universities while undervaluing skilled trades, vocational academies, or registered apprenticeships.
        </p>
      </section>

      <section id="protected-characteristics" className="space-y-4">
        <h2>2. Protected Characteristics &amp; Proxy Variable Controls</h2>
        <p>
          Career OS matching algorithms do not evaluate race, gender, ethnicity, religion, age, or sexual orientation. We actively audit matching models to prevent proxy variables (e.g. zip code, school prestige) from introducing unlawful bias.
        </p>
      </section>

      <section id="bias-testing" className="space-y-4">
        <h2>3. Continuous Bias Testing &amp; Mitigation</h2>
        <p>
          We conduct continuous statistical fairness audits (evaluating adverse impact ratios) to ensure talent discovery algorithms operate equitably across diverse candidate populations. We do not claim Career OS is categorically &quot;bias-free&quot;—we commit to ongoing testing and mitigation.
        </p>
      </section>
    </GovernancePageLayout>
  );
}