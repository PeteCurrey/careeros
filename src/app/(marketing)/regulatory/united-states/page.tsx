import React from "react";
import { GovernancePageLayout } from "@/components/layout/GovernancePageLayout";

export default function RegulatoryUnitedStatesPage() {
  const meta = {
    id: "gov-reg-us-001",
    title: "United States Regulatory Alignment & Compliance Overview",
    slug: "united-states",
    category: "REGULATORY" as const,
    documentType: "REGULATORY_OVERVIEW",
    version: "2026.08.1",
    status: "ACTIVE" as const,
    effectiveDate: "2026-08-17",
    publishedDate: "2026-08-17",
    lastReviewedDate: "2026-08-17",
    nextReviewDate: "2027-08-17",
    jurisdiction: "United States (Federal & State)",
    owner: "Regulatory Affairs Counsel",
    requiresLegalReview: true,
    bindingStatus: "INFORMATIONAL" as const,
    relatedDocuments: [
      { title: "Student Privacy Framework", href: "/regulatory/student-privacy" },
      { title: "AEDT Automated Hiring Readiness", href: "/regulatory/automated-hiring" },
    ],
    sources: [],
    changeSummary: "Updated regulatory overview to reflect canonical age model and readiness framing.",
  };

  const toc = [
    { id: "overview", title: "1. Federal & State Compliance Overview" },
    { id: "statutes", title: "2. Key Federal & State Statutes" },
  ];

  return (
    <GovernancePageLayout meta={meta} subtitle="Regulatory alignment overview covering FERPA, COPPA, EEOC guidelines, and state-level digital privacy acts." toc={toc}>
      <section id="overview" className="space-y-4">
        <h2>1. Federal &amp; State Compliance Overview</h2>
        <p>
          Career OS operates a structured compliance program designed to satisfy US federal statutory requirements and state-level student and employment privacy laws prior to regional deployments.
        </p>
      </section>

      <section id="statutes" className="space-y-4">
        <h2>2. Key Federal &amp; State Statutes</h2>
        <ul>
          <li><strong>FERPA (20 U.S.C. § 1232g):</strong> Governs education records and eligible student rights transfer.</li>
          <li><strong>COPPA (15 U.S.C. §§ 6501–6506):</strong> Regulates online privacy for children under 13 (under-13 consumer registration hard-blocked).</li>
          <li><strong>EEOC Uniform Guidelines:</strong> Governs equal employment opportunity and non-discriminatory candidate evaluation.</li>
          <li><strong>State Student Data Privacy Laws:</strong> CA SOPIPA, NY Ed Law § 2-d, IL SOPPA, TX SCOPE Act.</li>
        </ul>
      </section>
    </GovernancePageLayout>
  );
}
