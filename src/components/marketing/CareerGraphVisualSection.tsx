'use client';

import React, { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { ArrowRight, GitFork } from "lucide-react";
import { ScrollReveal } from "@/components/brand/ScrollReveal";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";

interface CareerBranchTopology {
  id: string;
  originTitle: string;
  originDomain: string;
  originSub: string;
  branches: {
    title: string;
    domain: string;
    match: string;
    bridge: string;
  }[];
}

const TOPOLOGIES: CareerBranchTopology[] = [
  {
    id: "software-engineer",
    originTitle: "Software Engineer",
    originDomain: "Technology & Computing",
    originSub: "5 Years Demonstrated Production Experience",
    branches: [
      {
        title: "Engineering Manager",
        domain: "People & Org Leadership",
        match: "88% Bridge",
        bridge: "Transferable: Systems delivery & technical mentorship",
      },
      {
        title: "Solutions Architect",
        domain: "Enterprise Infrastructure",
        match: "94% Bridge",
        bridge: "Transferable: Distributed systems & client-facing design",
      },
      {
        title: "Product Lead",
        domain: "Strategy & Commercial",
        match: "82% Bridge",
        bridge: "Transferable: User requirement translation & roadmap execution",
      },
      {
        title: "AI Systems Specialist",
        domain: "Applied Intelligence",
        match: "91% Bridge",
        bridge: "Transferable: Backend telemetry & pipeline optimization",
      },
      {
        title: "Technical Co-Founder",
        domain: "Venture & Entrepreneurship",
        match: "79% Bridge",
        bridge: "Transferable: Rapid execution & sovereign code architecture",
      },
    ],
  },
  {
    id: "electrician",
    originTitle: "Licensed Electrician",
    originDomain: "Skilled Trades & Infrastructure",
    originSub: "Master Trade Certification & Field Experience",
    branches: [
      {
        title: "Electrical Engineer",
        domain: "Higher Applied Engineering",
        match: "89% Bridge",
        bridge: "Transferable: Schematic analysis & power distribution systems",
      },
      {
        title: "Site Project Supervisor",
        domain: "Operations & Safety Leadership",
        match: "93% Bridge",
        bridge: "Transferable: Code compliance, crew direction & delivery timing",
      },
      {
        title: "Renewable Energy Specialist",
        domain: "Clean Power Infrastructure",
        match: "95% Bridge",
        bridge: "Transferable: High-voltage wiring, solar microgrids & battery storage",
      },
      {
        title: "Independent Business Owner",
        domain: "Contracting & Entrepreneurship",
        match: "86% Bridge",
        bridge: "Transferable: Client bidding, trade licensing & operational mastery",
      },
      {
        title: "Industrial Automation Tech",
        domain: "Advanced Manufacturing",
        match: "90% Bridge",
        bridge: "Transferable: PLC programming & electro-mechanical diagnostics",
      },
    ],
  },
];

export function CareerGraphVisualSection() {
  const [activeTopologyId, setActiveTopologyId] = useState("software-engineer");
  const topology = TOPOLOGIES.find((t) => t.id === activeTopologyId) || TOPOLOGIES[0]!;

  return (
    <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)] relative overflow-hidden">
      
      {/* Ambient background wash */}
      <div className="ambient-glow-blue absolute inset-0 pointer-events-none" />

      <div className="container-editorial space-y-16 relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[var(--color-border-default)]">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="section-label flex items-center gap-2">
                  <span className="accent-blue-dot" />
                  Dynamic Labor Economy Topology
                </span>
                <TechnicalBadge variant="blue">14,000+ BRIDGES</TechnicalBadge>
              </div>
              <h2 className="text-display-section text-[var(--color-text-primary)]">
                Careers are dynamic graphs, not straight ladders.
              </h2>
              <p className="text-lead text-[var(--color-text-secondary)]">
                Career OS maps transferable capability bridges across industries, demonstrating that university and skilled-vocational paths have equal strategic compounding power.
              </p>
            </div>

            {/* Switcher */}
            <div className="flex flex-wrap gap-2 font-mono">
              {TOPOLOGIES.map((t) => {
                const isSelected = activeTopologyId === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveTopologyId(t.id)}
                    className={"px-4 py-2 text-xs font-semibold rounded-[var(--radius-sm)] border transition-all cursor-pointer " + (isSelected ? "bg-[#F4F3EF] text-[#202020] border-[#F4F3EF] shadow-sm" : "bg-[var(--color-surface-warm)] text-[var(--color-text-secondary)] border-[var(--color-border-default)] hover:bg-white/10")}
                  >
                    {t.originTitle}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Branching Pathway Topology Canvas */}
        <ScrollReveal delayMs={100}>
          <div className="p-8 sm:p-12 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-10 hover-lift">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Origin Node on Left */}
              <div className="lg:col-span-4 p-6 bg-[var(--background-dark-deep)] text-[var(--color-text-primary)] rounded-[var(--radius-sm)] border border-[var(--color-border-default)] space-y-3">
                <span className="section-label-light text-[10px] font-mono">
                  ORIGIN NODE &bull; {topology.originDomain.toUpperCase()}
                </span>
                <h3 className="text-2xl font-normal text-white">
                  {topology.originTitle}
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  {topology.originSub}
                </p>
                <div className="pt-2 border-t border-[var(--color-border-default)] text-[11px] text-[var(--color-gold-light)] font-mono flex items-center gap-1.5">
                  <GitFork className="w-3.5 h-3.5" />
                  <span>5 High-Probability Adjacent Bridges</span>
                </div>
              </div>

              {/* Connecting Indicator */}
              <div className="lg:col-span-1 hidden lg:flex items-center justify-center text-[var(--color-taupe-300)]">
                <div className="h-[1px] w-full bg-[var(--color-border-default)] relative">
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-[#2F8FFF]">→</span>
                </div>
              </div>

              {/* Branching Nodes on Right */}
              <div className="lg:col-span-7 space-y-3">
                {topology.branches.map((b) => (
                  <div
                    key={b.title}
                    className="p-4 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] hover:border-[rgba(47,143,255,0.3)] hover:shadow-[0_0_16px_rgba(47,143,255,0.06)] transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-mono font-semibold text-[var(--color-taupe-300)]">
                          {b.domain}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">
                        {b.title}
                      </h4>
                      <p className="text-xs text-[var(--color-text-secondary)]">
                        {b.bridge}
                      </p>
                    </div>

                    <span className="shrink-0 text-xs font-mono font-semibold px-2.5 py-1 bg-[var(--color-surface-raised)] text-[#2F8FFF] border border-[rgba(47,143,255,0.22)] rounded-[var(--radius-sm)]">
                      {b.match}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            <div className="pt-6 border-t border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[var(--color-text-secondary)] font-mono">
              <span>
                Career Graph encompasses over 14,000 global competencies and verified transfer pathways.
              </span>
              <Link
                href={ROUTES.PRODUCT_CAREER_GRAPH}
                className="font-semibold text-[var(--color-text-primary)] hover:text-white inline-flex items-center gap-1 underline underline-offset-4 group"
              >
                <span>Explore Career Graph</span>
                <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
