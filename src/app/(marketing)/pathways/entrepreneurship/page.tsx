import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import { Sparkles, Building2, Users, ArrowRight } from "lucide-react";
import { CareerPathwayConnector } from "@/components/brand/CareerPathwayConnector";
import { CareerAtmosphere } from "@/components/brand/CareerAtmosphere";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrepreneurship & Venture Creation Pathways | Career OS",
  description: "Launch your own venture. Map co-founder capability matrices, validate early customer demand with LOIs, and build sustainable enterprise equity.",
  alternates: {
    canonical: "https://career-os.com/pathways/entrepreneurship",
  },
};

export default function EntrepreneurshipPathwayPage() {
  const ventureTracks = [
    {
      title: "Initial Career Venture Path (Early Founders)",
      desc: "Launch innovative startups right out of education or technical apprenticeships, leveraging rapid prototyping and ethical accelerator ecosystems.",
    },
    {
      title: "Mid-Career Executive Venture Pivot",
      desc: "Translate 10+ years of deep domain expertise into high-margin B2B SaaS, specialized consultancy, or independent commercial contracting.",
    },
    {
      title: "Co-Founder Capability Matching",
      desc: "Identify complementary co-founders (technical, commercial, operational) based upon verified Career Twin capability profiles.",
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
              Venture Creation & Builders
            </span>
            <TechnicalBadge variant="champagne">INDEPENDENT ENTERPRISE</TechnicalBadge>
          </div>

          <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
            Building enterprises on{" "}
            <CareerGradientText variant="blue">
              demonstrated capability.
            </CareerGradientText>
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
            Founding a business demands multidisciplinary versatility. Career OS helps entrepreneurs audit their own skill profile, find complementary co-founders through verified evidence, and track early validation milestones before risking capital.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href={ROUTES.SIGNUP} variant="primary" size="lg">
              Explore Founder Pathways Free
            </Button>
            <Button href={ROUTES.PATHWAYS} variant="secondary" size="lg">
              Explore All Pathways
            </Button>
          </div>
        </div>
      </section>

      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12 max-w-5xl">
          <div className="space-y-4">
            <span className="section-label text-[#DDD36D]">Venture Architecture</span>
            <h2 className="text-display-section font-normal text-white">Dual pathways to entrepreneurship</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ventureTracks.map((v) => (
              <div key={v.title} className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
                <h3 className="text-base font-bold text-white">{v.title}</h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-editorial bg-[var(--background-dark-deep)] text-center">
        <div className="container-editorial max-w-4xl space-y-6 mx-auto">
          <h2 className="text-display-section font-normal text-white">
            Anchor your prototypes and IP.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Store customer LOIs, unit economic models, and patents in your Career Passport.
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
