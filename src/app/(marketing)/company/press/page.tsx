import React from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import { Newspaper, Download, Mail, CheckCircle2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press & Media Centre | Career OS",
  description: "Official media resources, company boilerplate, approved brand asset specifications, and media inquiry contacts for Career OS.",
  alternates: {
    canonical: "https://career-os.com/company/press",
  },
};

export default function CompanyPressPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <section className="relative pt-16 pb-20 border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <Newspaper className="w-5 h-5 text-[#2F8FFF]" />
            <span className="section-label text-white">Press & Media Centre</span>
          </div>

          <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
            News, boilerplate &{" "}
            <CareerGradientText variant="blue">
              media resources.
            </CareerGradientText>
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
            Direct access to official announcements, leadership briefings, brand assets, and press inquiry channels.
          </p>
        </div>
      </section>

      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-4xl">
          {/* Boilerplate Section */}
          <div className="p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-white">Official Company Boilerplate</h2>
              <TechnicalBadge variant="neutral">STANDARD USAGE</TechnicalBadge>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Career OS (Career OS Inc.) is universal career infrastructure engineered to compound individual human equity across lifelong working journeys. By synthesizing private Career Twin models, verified Career Passport evidence vaults, multi-dimensional Career Graph ontologies, and system-assigned domain AI mentorship, Career OS bridges individuals directly with institutional opportunities, accredited training, and responsible employers. Headquartered for initial launch in the United States, Career OS operates under strict student data safeguarding (FERPA/COPPA) and responsible AI governance (ISO/IEC 42001).
            </p>
          </div>

          {/* Media Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--background-dark-deep)] border border-[var(--color-border-default)] space-y-3">
              <Mail className="w-5 h-5 text-[#2F8FFF]" />
              <h3 className="text-sm font-bold text-white">Press Enquiries</h3>
              <p className="text-xs text-[var(--color-text-secondary)]">
                For journalist interviews, data reports, and background briefings:
              </p>
              <a href="mailto:press@career-os.com" className="text-xs font-semibold text-[#6BB8FF] hover:underline block pt-1">
                press@career-os.com
              </a>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--background-dark-deep)] border border-[var(--color-border-default)] space-y-3">
              <Download className="w-5 h-5 text-[#DDD36D]" />
              <h3 className="text-sm font-bold text-white">Approved Brand Kit</h3>
              <p className="text-xs text-[var(--color-text-secondary)]">
                High-resolution wordmarks, typography standards, and interface media:
              </p>
              <span className="text-xs text-[var(--color-text-tertiary)] font-mono block pt-1">
                Available via press@career-os.com
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
