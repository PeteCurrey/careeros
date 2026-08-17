import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { LEGAL_CONFIG } from "@/lib/config/legal-config";

export default function DpaGuidePage() {
  const meta = GOVERNANCE_MANIFEST["dpa"]!;
  const toc = [
    { id: "overview", title: "1. Institutional DPA Overview" },
    { id: "state-exhibits", title: "2. Supported State DPA Exhibits (CA, NY, IL, TX)" },
    { id: "execution-process", title: "3. Execution Process for School Districts" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Guide for school district administrators on executing standardized state Data Protection Agreements." toc={toc}>
      <section id="overview" className="space-y-4">
        <h2>1. Institutional DPA Overview</h2>
        <p>
          Career OS provides pre-signed, standardized Data Protection Agreements (DPAs) designed specifically for US public school districts and educational authorities.
        </p>
      </section>

      <section id="state-exhibits" className="space-y-4">
        <h2>2. Supported State DPA Exhibits (CA, NY, IL, TX)</h2>
        <ul>
          <li><strong>California CSPA DPA:</strong> California Student Privacy Alliance standardized exhibit.</li>
          <li><strong>New York Ed Law § 2-d:</strong> Includes mandatory Exhibit E Parents&apos; Bill of Rights.</li>
          <li><strong>Illinois SDPC DPA:</strong> Illinois Student Data Privacy Consortium agreement.</li>
          <li><strong>Texas SCOPE Act (HB 18):</strong> Digital service provider compliance agreement.</li>
        </ul>
      </section>

      <section id="execution-process" className="space-y-4">
        <h2>3. Execution Process for School Districts</h2>
        <p>
          To request an executed DPA for your school district, email <a href={`mailto:${LEGAL_CONFIG.legalEmail}`}>{LEGAL_CONFIG.legalEmail}</a> with your district name and state.
        </p>
      </section>
    </GovernancePageLayout>
  );
}
