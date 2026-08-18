import React from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";
import { GOVERNANCE_MANIFEST } from "@/content/governance/manifest";
import { Eye, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";

export default function TrustTransparencyPage() {
  const meta = GOVERNANCE_MANIFEST["transparency"]!;
  const toc = [
    { id: "corporate-governance", title: "1. Corporate Structure & Capital Alignment" },
    { id: "business-model", title: "2. Business Model & Zero Data Monetization Guarantee" },
    { id: "security-audits", title: "3. Independent Audits & Public Security Commitments" },
    { id: "roadmap-disclosure", title: "4. Feature Status Taxonomy: Live vs Illustrative vs Planned" },
  ];

  return (
    <GovernancePageLayout
      meta={meta}
      subtitle="Corporate governance disclosures, business model transparency, and our public commitment to zero candidate data monetization."
      toc={toc}
    >
      <section id="corporate-governance" className="space-y-4">
        <h2>1. Corporate Structure &amp; Capital Alignment</h2>
        <p>
          Career OS Inc. is a Delaware corporation founded with a multi-decade institutional mission: to build universal, persistent career infrastructure. We reject short-term growth tactics that compromise candidate sovereignty, student safety, or data privacy.
        </p>
      </section>

      <section id="business-model" className="space-y-4">
        <h2>2. Business Model &amp; Zero Data Monetization Guarantee</h2>
        <p>
          Our revenue model is transparent and aligned with our users:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Free for Candidates:</strong> Core career guidance, portfolio building, and Career Twin access are free for individual students and job seekers.</li>
          <li><strong>Enterprise &amp; Institutional Subscriptions:</strong> Revenue is generated through enterprise software subscriptions from employers (Employer Agent workspace) and school district administrative consoles.</li>
          <li><strong>Zero Data Brokerage:</strong> We do not sell candidate contact information, resume databases, or browsing telemetry to third-party ad networks or credit scoring agencies.</li>
        </ul>
      </section>

      <section id="security-audits" className="space-y-4">
        <h2>3. Independent Audits &amp; Public Security Commitments</h2>
        <p>
          We publish our subprocessor inventory, data retention schedules, and compliance control matrices openly. We welcome independent security assessments and maintain responsible disclosure reporting channels at <a href="mailto:security@career-os.com" className="text-[#6BB8FF] font-semibold underline">security@career-os.com</a>.
        </p>
      </section>

      <section id="roadmap-disclosure" className="space-y-4">
        <h2>4. Feature Status Taxonomy: Live vs Illustrative vs Planned</h2>
        <p>
          To maintain absolute public integrity, we explicitly demarcate between:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Verified Live Capabilities:</strong> Systems currently running in production environments.</li>
          <li><strong>Illustrative Demonstrations:</strong> Representative mockups clearly labeled to demonstrate product UX and workflow design prior to general availability.</li>
          <li><strong>Planned / Target Posture:</strong> Governance frameworks and certifications scheduled for third-party auditing during rollout.</li>
        </ul>
      </section>
    </GovernancePageLayout>
  );
}
