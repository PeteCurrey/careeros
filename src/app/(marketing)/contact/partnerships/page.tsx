import React from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import { HeartHandshake, Building2, GraduationCap, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner with Career OS | Ecosystem & Institutional Inquiries",
  description: "Connect your school district, employer organization, workforce board, or training ecosystem with Career OS.",
  alternates: {
    canonical: "https://career-os.com/contact/partnerships",
  },
};

export default function ContactPartnershipsPage() {
  const partnerTypes = [
    {
      title: "School Districts & High Schools",
      desc: "FERPA-compliant student career discovery, counsellor capacity scaling, and career readiness portfolios.",
      email: "schools@career-os.com",
    },
    {
      title: "Enterprise Employers & Hiring Networks",
      desc: "Capability-defined talent discovery, early career pipelines, and ethical candidate engagement without keyword bias.",
      email: "enterprise@career-os.com",
    },
    {
      title: "Workforce Development Boards & State Agencies",
      desc: "Regional skill gap analysis, apprenticeship tracking, and public workforce infrastructure integrations.",
      email: "workforce@career-os.com",
    },
    {
      title: "Accredited Training & Credential Providers",
      desc: "Tamper-proof credential issuance directly into candidate Career Passports with cryptographic verification.",
      email: "credentials@career-os.com",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <section className="relative pt-16 pb-20 border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <HeartHandshake className="w-5 h-5 text-[#2F8FFF]" />
            <span className="section-label text-white">Ecosystem Partnerships</span>
          </div>

          <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
            Partner with the{" "}
            <CareerGradientText variant="blue">
              Career OS ecosystem.
            </CareerGradientText>
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
            No single platform can build a career alone. We collaborate with schools, employers, state agencies, and learning providers to build unified career infrastructure.
          </p>
        </div>
      </section>

      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerTypes.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white">{p.title}</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-[var(--color-border-subtle)]">
                  <a
                    href={`mailto:${p.email}`}
                    className="text-xs font-semibold text-[#6BB8FF] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Contact: {p.email}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Standards & Philosophy Link */}
          <div className="p-6 rounded-[var(--radius-card)] bg-[var(--background-dark-deep)] border border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white">Review Our Partnership Principles</h4>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Learn how we govern ecosystem data boundaries, commercial alignment, and candidate sovereignty.
              </p>
            </div>
            <Button href={ROUTES.COMPANY_PARTNERS} variant="secondary" size="md">
              Ecosystem Overview
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
