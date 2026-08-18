import React from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import { Briefcase, ShieldCheck, Heart, Sparkles, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Career OS | Join Our Team",
  description: "Join the team building lifelong career infrastructure. Transparent hiring, remote-first engineering, and mission-driven colleagues.",
  alternates: {
    canonical: "https://career-os.com/company/careers",
  },
};

export default function CompanyCareersPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      <section className="relative pt-16 pb-20 border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div className="container-editorial space-y-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-[#2F8FFF]" />
            <span className="section-label text-white">Careers at Career OS</span>
          </div>

          <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
            Building the operating system for{" "}
            <CareerGradientText variant="blue">
              human potential.
            </CareerGradientText>
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
            We practice what we preach: evidence-grounded hiring, asynchronous autonomy, high craftsmanship, and deep respect for candidate sovereignty.
          </p>
        </div>
      </section>

      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-4xl">
          {/* Current Hiring Posture */}
          <div className="p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-white">Current Operational Hiring Status</h2>
              <TechnicalBadge variant="blue">PRE-LAUNCH TALENT NETWORK</TechnicalBadge>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
              We are currently focused on core platform hardening with our foundational engineering and compliance team. While there are no open public job listings at this exact moment, we maintain an active talent pool for senior systems engineers, AI evaluation specialists, and institutional education partnership directors.
            </p>
            <div className="pt-2">
              <a
                href="mailto:careers@career-os.com"
                className="text-xs font-semibold text-[#6BB8FF] hover:underline inline-flex items-center gap-1"
              >
                <span>Submit your Career Passport or introduction to careers@career-os.com</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Engineering & Cultural Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--background-dark-deep)] border border-[var(--color-border-default)] space-y-2">
              <Sparkles className="w-5 h-5 text-[#2F8FFF]" />
              <h3 className="text-sm font-bold text-white">High Agency & Craft</h3>
              <p className="text-xs text-[var(--color-text-secondary)]">
                We value clean architecture, typed precision, and thoughtful editorial design over frantic feature churn.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--background-dark-deep)] border border-[var(--color-border-default)] space-y-2">
              <ShieldCheck className="w-5 h-5 text-[#34D399]" />
              <h3 className="text-sm font-bold text-white">Ethics by Default</h3>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Zero data broker sales, no candidate tracking ads, and strict student safeguarding from day one.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--background-dark-deep)] border border-[var(--color-border-default)] space-y-2">
              <Heart className="w-5 h-5 text-[#CDBBD2]" />
              <h3 className="text-sm font-bold text-white">Asynchronous First</h3>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Deep work over constant meetings. Thoughtful written documentation over reactive chatter.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
