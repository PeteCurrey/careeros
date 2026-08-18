import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import { Compass, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { CareerPathwayConnector } from "@/components/brand/CareerPathwayConnector";
import { CareerAtmosphere } from "@/components/brand/CareerAtmosphere";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Job & Early Career Pathways | Career OS",
  description: "Overcome the experience paradox. Land your first professional opportunity through verified project evidence, capstone portfolios, and capability matching.",
  alternates: {
    canonical: "https://career-os.com/pathways/first-job",
  },
};

export default function FirstJobPathwayPage() {
  const steps = [
    {
      title: "1. Build Demonstrable Evidence",
      desc: "Transform capstone projects, academic lab work, code repositories, or vocational certifications into verifiable portfolio artifacts in your Career Passport.",
    },
    {
      title: "2. Calibrate Natural Strengths",
      desc: "Let your system-assigned AI Career Mentor analyze your Career Twin to identify high-probability entry-level roles where your capability vector matches employer demand.",
    },
    {
      title: "3. Direct Capability-First Matching",
      desc: "Connect directly with verified employers committed to hiring for demonstrated capability and growth potential rather than arbitrary tenure requirements.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <section className="relative min-h-[calc(100vh-4.5rem)] lg:min-h-screen flex flex-col justify-center border-b border-[var(--color-border-default)] overflow-hidden bg-[var(--background-dark-deep)] py-20 lg:py-0">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <CareerAtmosphere className="absolute inset-0" intensity={0.4} animate={false} />
        </div>
        <CareerPathwayConnector variant="branching" className="opacity-15" />

        <div className="container-editorial space-y-6 max-w-4xl relative z-10">
          <div className="flex items-center gap-3">
            <span className="section-label flex items-center gap-2">
              <span className="accent-blue-dot accent-blue-dot-pulse" />
              Workforce Launch & Early Career
            </span>
            <TechnicalBadge variant="blue">EVIDENCE OVER TENURE</TechnicalBadge>
          </div>

          <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
            Overcoming the{" "}
            <CareerGradientText variant="blue">
              experience paradox.
            </CareerGradientText>
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
            New graduates and career starters often face the frustrating paradox of needing experience to get a job, but needing a job to get experience. Career OS breaks this cycle by transforming demonstrated project outputs into verified proof of readiness.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
              Launch Your First Opportunity
            </Button>
            <Button href={ROUTES.FOR_STUDENTS} variant="secondary" size="lg">
              Explore Student Features
            </Button>
          </div>
        </div>
      </section>

      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-5xl">
          <div className="space-y-4">
            <span className="section-label text-[#2F8FFF]">Early Career Playbook</span>
            <h2 className="text-display-section font-normal text-white">The Career OS launch blueprint</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.title} className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
                <h3 className="text-base font-bold text-white">{s.title}</h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-editorial bg-[var(--background-dark-deep)] text-center">
        <div className="container-editorial max-w-4xl space-y-6 mx-auto">
          <h2 className="text-display-section font-normal text-white">
            Start building your career record today.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Free forever for candidates. Build your private Career Twin and start compounding verified evidence.
          </p>
          <div className="pt-2">
            <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
              Start Free on Career OS
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
