import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function CopyrightPolicyPage() {
  const meta = GOVERNANCE_MANIFEST["copyright"]!;
  const toc = [
    { id: "ip-ownership", title: "1. Career OS IP & User Content Rights" },
    { id: "dmca-takedown", title: "2. DMCA Takedown Notice Procedure" },
    { id: "counter-notice", title: "3. Counter-Notice & Restoration Procedure" },
    { id: "repeat-infringers", title: "4. Repeat Infringer Policy" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Intellectual property ownership terms, DMCA copyright takedown notice procedure, and counter-notice rules." toc={toc}>
      <section id="ip-ownership" className="space-y-4">
        <h2>1. Career OS IP &amp; User Content Rights</h2>
        <p>
          {LEGAL_CONFIG.legalEntityName} respects intellectual property rights. Users retain copyright in their original project code, text, and portfolio evidence. By uploading content, you warrant that you hold all necessary rights.
        </p>
      </section>

      <section id="dmca-takedown" className="space-y-4">
        <h2>2. DMCA Takedown Notice Procedure</h2>
        <p>
          Under the Digital Millennium Copyright Act (17 U.S.C. § 512(c)), copyright owners may submit written takedown notices to our Designated Copyright Agent at <a href={`mailto:${LEGAL_CONFIG.legalEmail}`}>{LEGAL_CONFIG.legalEmail}</a> including:
        </p>
        <ul>
          <li>Identification of the copyrighted work claimed to be infringed;</li>
          <li>Identification of the material to be removed and URL location;</li>
          <li>Contact information of the complaining party;</li>
          <li>A statement of good-faith belief that use is unauthorized;</li>
          <li>A statement under penalty of perjury that information is accurate.</li>
        </ul>
      </section>

      <section id="counter-notice" className="space-y-4">
        <h2>3. Counter-Notice &amp; Restoration Procedure</h2>
        <p>
          If material you posted was removed in error, you may submit a written counter-notice to <a href={`mailto:${LEGAL_CONFIG.legalEmail}`}>{LEGAL_CONFIG.legalEmail}</a> pursuant to 17 U.S.C. § 512(g)(3).
        </p>
      </section>

      <section id="repeat-infringers" className="space-y-4">
        <h2>4. Repeat Infringer Policy</h2>
        <p>
          Career OS terminates user accounts determined to be repeat copyright infringers.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
