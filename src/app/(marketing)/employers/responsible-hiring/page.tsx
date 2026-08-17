import React from "react";
import { EditorialSubpage } from "@/components/layout/EditorialSubpage";
import { ROUTES } from "@/lib/routes";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsible Hiring — Employers | Career OS",
  description: "Career OS Employers responsible Hiring. Designed to align with NYC Local Law 144, EU AI Act, and EEOC guidelines.",
  alternates: {
    canonical: "https://career-os.com/employers/responsible-hiring",
  },
};

export default function EmployersResponsibleHiringPage() {
  return (
    <EditorialSubpage
      badge="EMPLOYERS &bull; COMPLIANCE & AI ETHICS"
      title="Responsible AI Hiring & Regulatory Alignment"
      description="Designed to align with NYC Local Law 144, EU AI Act High-Risk Employment AI requirements, and EEOC disparate impact guidelines."
      breadcrumbs={[
        { label: "Home", href: ROUTES.HOME },
        { label: "Employers", href: ROUTES.EMPLOYERS },
        { label: "Responsible Hiring", href: ROUTES.EMPLOYERS_RESPONSIBLE_HIRING },
      ]}
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Auditable Decision Support Framework</h2>
        <p>
          Automated employment decision tools (AEDTs) require rigorous bias monitoring, transparent disclosures, and human oversight. Career OS&apos;s Employer Agent architecture is designed to support emerging global hiring regulations.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Regulatory Alignment Pillars</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>NYC LL 144 Bias Audit Readiness:</strong> System architecture engineered to log outcome data required for independent adverse impact ratio evaluations.</li>
          <li><strong>EU AI Act Transparency:</strong> Candidates are notified when AI matching support is utilized and provided clear explanation of key factors.</li>
          <li><strong>EEOC Uniform Guidelines:</strong> Focus exclusively on validated job-related skills, verified project artifacts, and demonstrable evidence.</li>
          <li><strong>Human Agency Enforcement:</strong> Automated candidate rejection and autonomous hiring decisions are strictly prohibited.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
