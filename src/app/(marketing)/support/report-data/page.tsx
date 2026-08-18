import React from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import { AlertCircle, ShieldAlert, CheckCircle2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Report Data or Provenance Issues | Career OS Support",
  description: "Submit reports for incorrect career taxonomy data, outdated labor market information, credential errors, or problematic event listings.",
  alternates: {
    canonical: "https://career-os.com/support/report-data",
  },
};

export default function SupportReportDataPage() {
  const issueTypes = [
    {
      title: "Inaccurate Occupational or Career Graph Data",
      desc: "Report outdated job requirements, erroneous salary benchmark ranges, or incorrect prerequisite skills in our taxonomy.",
    },
    {
      title: "Credential or Data Source Verification Errors",
      desc: "Flag discrepancies in third-party accreditation links, state licensing requirements, or institutional registry metadata.",
    },
    {
      title: "Problematic Event or Opportunity Postings",
      desc: "Report misleading recruiter listings, fee-charging scams, or non-compliant youth employment opportunities.",
    },
    {
      title: "AI Mentor Guidance or Bias Concerns",
      desc: "Submit feedback on inappropriate AI mentor recommendations, hallucinated requirements, or potential algorithmic bias.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <section className="relative pt-16 pb-20 border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-[#DDD36D]" />
            <span className="section-label text-white">Trust & Quality Assurance</span>
          </div>

          <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
            Report data or{" "}
            <CareerGradientText variant="blue">
              provenance issues.
            </CareerGradientText>
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
            Help us maintain the highest integrity across our Career Graph, public event directories, and credential registries.
          </p>
        </div>
      </section>

      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-4xl">
          <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#DDD36D]" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Verification & Review Notice
              </h3>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Submitting a data report initiates a review by our Data Governance and Trust & Safety team. Reporting an issue does not automatically alter an individual user profile or private Career Twin record without documented verification.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white">Categories of Reportable Data</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {issueTypes.map((i) => (
                <div key={i.title} className="p-5 rounded bg-white/5 border border-white/5 space-y-1.5">
                  <h3 className="text-sm font-bold text-white">{i.title}</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{i.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-[var(--radius-card)] bg-[var(--background-dark-deep)] border border-[var(--color-border-default)] space-y-4">
            <h3 className="text-base font-bold text-white">How to Submit a Report</h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Please email <a href="mailto:data-integrity@career-os.com" className="text-[#6BB8FF] font-semibold underline">data-integrity@career-os.com</a> with:
            </p>
            <ul className="space-y-1 text-xs text-[var(--color-text-secondary)] list-disc pl-5">
              <li>URL of the affected Career OS page or resource</li>
              <li>Specific data point, statistic, or recommendation in question</li>
              <li>Authoritative reference source or documentation (if available)</li>
              <li>Your contact information for follow-up review</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
