'use client';

import React, { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { ArrowRight, GitFork, Sparkles, CheckCircle2 } from "lucide-react";
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
    accent: 'blue' | 'lavender' | 'champagne';
    evidencePreview: string;
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
        accent: "lavender",
        evidencePreview: "Demonstrated sprint velocity management and 3 junior engineer promotions",
      },
      {
        title: "Solutions Architect",
        domain: "Enterprise Infrastructure",
        match: "94% Bridge",
        bridge: "Transferable: Distributed systems & client-facing design",
        accent: "blue",
        evidencePreview: "Architectural RFCs for multi-region high availability deployments",
      },
      {
        title: "Product Lead",
        domain: "Strategy & Commercial",
        match: "82% Bridge",
        bridge: "Transferable: User requirement translation & roadmap execution",
        accent: "champagne",
        evidencePreview: "Core feature prioritization and customer telemetry analysis",
      },
      {
        title: "AI Systems Specialist",
        domain: "Applied Intelligence",
        match: "91% Bridge",
        bridge: "Transferable: Backend telemetry & pipeline optimization",
        accent: "blue",
        evidencePreview: "Production LLM eval pipelines and low-latency inference endpoints",
      },
      {
        title: "Technical Co-Founder",
        domain: "Venture & Entrepreneurship",
        match: "79% Bridge",
        bridge: "Transferable: Rapid execution & sovereign code architecture",
        accent: "champagne",
        evidencePreview: "Zero-to-one MVP delivery and full-stack product release history",
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
        accent: "blue",
        evidencePreview: "Substation load calculations and three-phase industrial circuit blueprints",
      },
      {
        title: "Site Project Supervisor",
        domain: "Operations & Safety Leadership",
        match: "93% Bridge",
        bridge: "Transferable: Code compliance, crew direction & delivery timing",
        accent: "lavender",
        evidencePreview: "OSHA site compliance records and multi-contractor timeline management",
      },
      {
        title: "Renewable Energy Specialist",
        domain: "Clean Power Infrastructure",
        match: "95% Bridge",
        bridge: "Transferable: High-voltage wiring, solar microgrids & battery storage",
        accent: "blue",
        evidencePreview: "Commercial solar inverter installations and grid-tie storage certifications",
      },
      {
        title: "Independent Business Owner",
        domain: "Contracting & Entrepreneurship",
        match: "86% Bridge",
        bridge: "Transferable: Client bidding, trade licensing & operational mastery",
        accent: "champagne",
        evidencePreview: "Commercial project bidding and state master contractor licensure",
      },
      {
        title: "Industrial Automation Tech",
        domain: "Advanced Manufacturing",
        match: "90% Bridge",
        bridge: "Transferable: PLC programming & electro-mechanical diagnostics",
        accent: "blue",
        evidencePreview: "Robotic assembly PLC diagnostics and SCADA telemetry configuration",
      },
    ],
  },
];

export function CareerGraphVisualSection() {
  const [activeTopologyId, setActiveTopologyId] = useState("software-engineer");
  const [hoveredBranchIndex, setHoveredBranchIndex] = useState<number | null>(null);

  const topology = TOPOLOGIES.find((t) => t.id === activeTopologyId) || TOPOLOGIES[0]!;

  const getAccentBadge = (accent: 'blue' | 'lavender' | 'champagne', match: string) => {
    switch (accent) {
      case 'blue':
        return (
          <span className="shrink-0 text-xs font-mono font-semibold px-2.5 py-1 bg-[rgba(47,143,255,0.1)] text-[#2F8FFF] border border-[rgba(47,143,255,0.3)] rounded-[var(--radius-sm)] shadow-[0_0_8px_rgba(47,143,255,0.15)]">
            {match}
          </span>
        );
      case 'lavender':
        return (
          <span className="shrink-0 text-xs font-mono font-semibold px-2.5 py-1 bg-[rgba(205,187,210,0.1)] text-[#CDBBD2] border border-[rgba(205,187,210,0.3)] rounded-[var(--radius-sm)]">
            {match}
          </span>
        );
      case 'champagne':
        return (
          <span className="shrink-0 text-xs font-mono font-semibold px-2.5 py-1 bg-[rgba(221,211,109,0.1)] text-[#DDD36D] border border-[rgba(221,211,109,0.3)] rounded-[var(--radius-sm)]">
            {match}
          </span>
        );
    }
  };

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
                Careers are <span className="text-[#2F8FFF]">dynamic graphs</span>, not straight ladders.
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
                    className={"px-4 py-2 text-xs font-semibold rounded-[var(--radius-sm)] border transition-all cursor-pointer " + (isSelected ? "bg-[#2F8FFF] text-white border-[#2F8FFF] shadow-[0_0_12px_rgba(47,143,255,0.4)]" : "bg-[var(--color-surface-warm)] text-[var(--color-text-secondary)] border-[var(--color-border-default)] hover:bg-white/10")}
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
              <div className="lg:col-span-4 p-6 bg-[var(--background-dark-deep)] text-[var(--color-text-primary)] rounded-[var(--radius-sm)] border border-[#2F8FFF]/30 space-y-3 relative overflow-hidden shadow-[0_0_20px_rgba(47,143,255,0.1)]">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2F8FFF] to-transparent" />
                <span className="section-label-light text-[10px] font-mono text-[#2F8FFF]">
                  ORIGIN NODE &bull; {topology.originDomain.toUpperCase()}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {topology.originTitle}
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  {topology.originSub}
                </p>
                <div className="pt-3 border-t border-[var(--color-border-default)] text-[11px] text-[#DDD36D] font-mono flex items-center gap-1.5">
                  <GitFork className="w-3.5 h-3.5" />
                  <span>5 High-Probability Transferable Bridges</span>
                </div>
              </div>

              {/* Connecting Indicator */}
              <div className="lg:col-span-1 hidden lg:flex items-center justify-center text-[var(--color-taupe-300)]">
                <div className="h-[1px] w-full bg-gradient-to-r from-[#2F8FFF]/60 via-[#CDBBD2]/40 to-[var(--color-border-default)] relative">
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-[#2F8FFF]">→</span>
                </div>
              </div>

              {/* Branching Nodes on Right */}
              <div className="lg:col-span-7 space-y-3">
                {topology.branches.map((b, idx) => {
                  const isHovered = hoveredBranchIndex === idx;

                  return (
                    <div
                      key={b.title}
                      onMouseEnter={() => setHoveredBranchIndex(idx)}
                      onMouseLeave={() => setHoveredBranchIndex(null)}
                      className={`p-4 bg-[var(--color-surface-warm)] border rounded-[var(--radius-sm)] transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer ${
                        isHovered
                          ? 'border-[#2F8FFF]/60 bg-[var(--color-surface-sunken)] shadow-[0_0_16px_rgba(47,143,255,0.12)] translate-x-1'
                          : 'border-[var(--color-border-default)] hover:border-[var(--color-border-strong)]'
                      }`}
                    >
                      <div className="space-y-1">
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
                        {isHovered && (
                          <div className="pt-1 text-[11px] font-mono text-[#34D399] flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Evidence: {b.evidencePreview}</span>
                          </div>
                        )}
                      </div>

                      {getAccentBadge(b.accent, b.match)}
                    </div>
                  );
                })}
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
