import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { ScrollReveal } from "@/components/brand/ScrollReveal";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import { Compass, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission & Operating Principles | Career OS",
  description: "Career OS is founded on a long-term conviction: that career progression should be governed by verified capability rather than pedigree, privilege, or algorithm opacity.",
  alternates: {
    canonical: "https://career-os.com/company/mission",
  },
};

export default function CompanyMissionPage() {
  const principles = [
    {
      num: "01",
      title: "Multi-Decade Infrastructure Over Vanity Feeds",
      desc: "Careers span 40+ years. We build tools that compound evidence and relationships across entire working lives, rejecting ephemeral social engagement loops and ad-driven vanity metrics.",
    },
    {
      num: "02",
      title: "Parity Across All Vocational & Academic Pathways",
      desc: "University degrees, technical apprenticeships, skilled trades, and self-directed portfolios receive equal prestige and rigorous evidence modeling across our Career Graph.",
    },
    {
      num: "03",
      title: "Data Sovereignty & Absolute Candidate Privacy",
      desc: "Your Career Twin belongs to you. We never sell candidate dossiers to advertising brokers or credit agencies, and employer access is granted only with explicit candidate authorization.",
    },
    {
      num: "04",
      title: "Responsible AI with Non-Negotiable Human Authority",
      desc: "AI mentors provide decision support, not autonomous decisions. Consequential hiring, promotion, and education decisions must always remain accountable to human leaders.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <section className="relative pt-16 pb-20 border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <Compass className="w-5 h-5 text-[#2F8FFF]" />
            <span className="section-label text-white">Mission & Conviction</span>
          </div>

          <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
            Democratizing the infrastructure of{" "}
            <CareerGradientText variant="blue">
              professional destiny.
            </CareerGradientText>
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
            For decades, elite career guidance, insider networks, and credential tracking were accessible only to a privileged few. Career OS was engineered to make world-class career intelligence universal.
          </p>
        </div>
      </section>

      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-4xl">
          <div className="space-y-3">
            <span className="section-label text-[#2F8FFF]">Founding Principles</span>
            <h2 className="text-display-section font-normal text-white">
              How we build and operate.
            </h2>
          </div>

          <div className="space-y-6">
            {principles.map((p) => (
              <div
                key={p.num}
                className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-start gap-4"
              >
                <span className="text-sm font-mono font-bold text-[#2F8FFF] shrink-0">
                  {p.num}
                </span>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[var(--color-border-default)] flex items-center justify-between">
            <Link href={ROUTES.COMPANY_ABOUT} className="text-xs font-semibold text-[#6BB8FF] hover:underline inline-flex items-center gap-1">
              <span>Read About Career OS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Button href={ROUTES.COMPANY_CONTACT} variant="primary" size="md">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
