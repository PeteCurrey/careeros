'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';
import { CareerGradientText } from '@/components/brand/CareerGradientText';
import { ArrowRight, Sparkles, Network, ArrowDown } from 'lucide-react';

interface EcosystemNode {
  id: string;
  label: string;
  sub: string;
  angle: number;
  radius: number;
  color: string;
  detail: string;
}

const ECOSYSTEM_NODES: EcosystemNode[] = [
  { id: 'workforce', label: 'WORKFORCE BOARDS', sub: 'Regional Hubs', angle: 0, radius: 185, color: '#2F8FFF', detail: '550+ American Job Centers & regional workforce investment boards' },
  { id: 'education', label: 'HIGHER ED & VET', sub: 'Accredited Learning', angle: 45, radius: 190, color: '#CDBBD2', detail: 'Universities, community colleges & technical apprenticeships' },
  { id: 'employers', label: 'EMPLOYER COALITIONS', sub: 'Hiring Networks', angle: 90, radius: 185, color: '#DDD36D', detail: 'Demonstrated capability hiring without keyword resume screening' },
  { id: 'wellbeing', label: 'HUMAN WELLBEING', sub: 'Clinical Care', angle: 135, radius: 190, color: '#F87171', detail: 'Licensed clinical tele-health when career pressure becomes personal' },
  { id: 'skills', label: 'SKILLS & CREDS', sub: 'W3C Passport', angle: 180, radius: 185, color: '#2F8FFF', detail: 'Tamper-proof verifiable digital credentials & competency proof' },
  { id: 'opportunity', label: 'LABOUR INTELLIGENCE', sub: 'Real-time Demand', angle: 225, radius: 190, color: '#34D399', detail: 'Real-time employer demand, wage benchmarks & occupational data' },
  { id: 'community', label: 'COMMUNITY CARE', sub: 'Life Support', angle: 270, radius: 185, color: '#DDD36D', detail: '211 hyper-local childcare, transit, and social care assistance' },
  { id: 'public_infra', label: 'PUBLIC DATA', sub: 'Federal Standards', angle: 315, radius: 190, color: '#CDBBD2', detail: 'O*NET®, CareerOneStop & US Department of Labor infrastructure' },
];

export function PartnersHero() {
  const [activeNode, setActiveNode] = useState<EcosystemNode | null>(null);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
      
      {/* Ambient background glows */}
      <div className="ambient-glow-blue absolute inset-0 pointer-events-none" />
      <div className="ambient-glow-lilac absolute bottom-0 right-0 pointer-events-none opacity-40" />

      {/* Subtle fine grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(var(--color-border-default) 1px, transparent 1px), linear-gradient(to right, var(--color-border-default) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />

      <div className="container-editorial relative z-10 w-full py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Text narrative column */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="section-label flex items-center gap-2">
                    <span className="accent-blue-dot" />
                    Ecosystem Architecture
                  </span>
                  <TechnicalBadge variant="blue">CONNECTIVE OPERATING SYSTEM</TechnicalBadge>
                </div>

                <h1 className="text-display-section text-[var(--color-text-primary)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.04] tracking-tight">
                  Careers aren&apos;t <br />
                  <CareerGradientText variant="blue">
                    built alone.
                  </CareerGradientText>
                </h1>

                <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-xl font-normal">
                  CareerOS connects people with the organisations, learning, opportunities, and human support that move careers forward — uniting a fragmented landscape around one sovereign individual.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={ROUTES.CONTACT_PARTNERSHIPS}
                  className="px-6 py-3.5 bg-[#2F8FFF] hover:bg-[#2575d4] text-white text-sm font-semibold rounded-[var(--radius-sm)] shadow-[0_0_20px_rgba(47,143,255,0.35)] transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Partner with CareerOS</span>
                  <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#strategic-partners"
                  className="px-6 py-3.5 bg-[var(--color-surface-warm)] hover:bg-white/10 text-[var(--color-text-primary)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] text-sm font-medium rounded-[var(--radius-sm)] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Partners</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[var(--color-text-tertiary)]" />
                </a>
              </div>
            </ScrollReveal>

            {/* Micro-statement */}
            <ScrollReveal delayMs={150}>
              <div className="pt-6 border-t border-[var(--color-border-subtle)] flex items-start gap-3">
                <Network className="w-4 h-4 text-[#2F8FFF] shrink-0 mt-0.5" />
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed max-w-lg">
                  <strong className="text-[var(--color-text-primary)]">The Intelligent Connective Layer.</strong> No single app can replace workforce boards, accredited universities, clinical therapists, or employers. CareerOS connects people to the right node at the right moment with verified evidence already assembled.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Interactive Constellation Orbital Visual */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            <ScrollReveal delayMs={100}>
              <div className="relative w-full max-w-[500px] aspect-square select-none">
                
                {/* SVG Constellation Canvas */}
                <svg
                  viewBox="0 0 500 500"
                  className="w-full h-full filter drop-shadow-[0_0_30px_rgba(47,143,255,0.08)]"
                  aria-label="CareerOS Interactive Ecosystem Constellation"
                >
                  <defs>
                    <radialGradient id="centerCoreGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#2F8FFF" stopOpacity="0.25" />
                      <stop offset="70%" stopColor="#2F8FFF" stopOpacity="0.03" />
                      <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="nodeActiveGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#2F8FFF" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Ambient center radial wash */}
                  <circle cx="250" cy="250" r="210" fill="url(#centerCoreGlow)" />

                  {/* Orbit rings */}
                  <circle
                    cx="250"
                    cy="250"
                    r="188"
                    fill="none"
                    stroke="var(--color-border-default)"
                    strokeWidth="0.8"
                    strokeDasharray="4 6"
                    className="opacity-40 animate-[spin_120s_linear_infinite]"
                    style={{ transformOrigin: 'center' }}
                  />
                  <circle
                    cx="250"
                    cy="250"
                    r="125"
                    fill="none"
                    stroke="#2F8FFF"
                    strokeWidth="0.5"
                    strokeDasharray="2 4"
                    className="opacity-20"
                  />

                  {/* Connecting lines from center to each node */}
                  {ECOSYSTEM_NODES.map((node) => {
                    const rad = (node.angle * Math.PI) / 180;
                    const nx = 250 + node.radius * Math.cos(rad);
                    const ny = 250 + node.radius * Math.sin(rad);
                    const isActive = activeNode?.id === node.id;

                    return (
                      <line
                        key={node.id}
                        x1="250"
                        y1="250"
                        x2={nx}
                        y2={ny}
                        stroke={isActive ? node.color : '#2F8FFF'}
                        strokeWidth={isActive ? '1.5' : '0.75'}
                        opacity={isActive ? '0.8' : '0.22'}
                        strokeDasharray={isActive ? 'none' : '4 6'}
                        className="transition-all duration-300"
                      />
                    );
                  })}

                  {/* Outer Orbital Nodes */}
                  {ECOSYSTEM_NODES.map((node) => {
                    const rad = (node.angle * Math.PI) / 180;
                    const nx = 250 + node.radius * Math.cos(rad);
                    const ny = 250 + node.radius * Math.sin(rad);
                    const isActive = activeNode?.id === node.id;

                    return (
                      <g
                        key={node.id}
                        onMouseEnter={() => setActiveNode(node)}
                        onMouseLeave={() => setActiveNode(null)}
                        onClick={() => setActiveNode(activeNode?.id === node.id ? null : node)}
                        className="cursor-pointer group"
                      >
                        {/* Glowing Aura on Hover */}
                        <circle
                          cx={nx}
                          cy={ny}
                          r={isActive ? 28 : 16}
                          fill={node.color}
                          opacity={isActive ? 0.25 : 0}
                          className="transition-all duration-300"
                        />

                        {/* Node Outer Ring */}
                        <circle
                          cx={nx}
                          cy={ny}
                          r="14"
                          fill="var(--color-surface-raised)"
                          stroke={isActive ? node.color : 'var(--color-border-strong)'}
                          strokeWidth={isActive ? 2 : 1}
                          className="transition-all duration-300"
                        />

                        {/* Center Dot */}
                        <circle
                          cx={nx}
                          cy={ny}
                          r={isActive ? 5 : 3.5}
                          fill={node.color}
                          className="transition-all duration-300"
                        />

                        {/* Node Label */}
                        <text
                          x={nx}
                          y={ny > 250 ? ny + 22 : ny - 18}
                          textAnchor="middle"
                          fontSize="8.5"
                          fontFamily="var(--font-mono, monospace)"
                          fill={isActive ? '#FFFFFF' : 'var(--color-text-tertiary)'}
                          fontWeight={isActive ? '700' : '500'}
                          letterSpacing="0.06em"
                          className="transition-colors duration-200"
                        >
                          {node.label}
                        </text>
                      </g>
                    );
                  })}

                  {/* Central CareerOS Core Node */}
                  <g className="cursor-pointer">
                    <circle
                      cx="250"
                      cy="250"
                      r="52"
                      fill="var(--background-dark-deep)"
                      stroke="#2F8FFF"
                      strokeWidth="1.5"
                      className="shadow-[0_0_24px_rgba(47,143,255,0.4)]"
                    />
                    <circle
                      cx="250"
                      cy="250"
                      r="44"
                      fill="var(--color-surface-base)"
                      stroke="rgba(47,143,255,0.3)"
                      strokeWidth="1"
                    />
                    <text
                      x="250"
                      y="244"
                      textAnchor="middle"
                      fontSize="9"
                      fontFamily="var(--font-mono, monospace)"
                      fill="var(--color-text-secondary)"
                      letterSpacing="0.14em"
                      fontWeight="600"
                    >
                      CAREER
                    </text>
                    <text
                      x="250"
                      y="258"
                      textAnchor="middle"
                      fontSize="10"
                      fontFamily="var(--font-mono, monospace)"
                      fill="#2F8FFF"
                      letterSpacing="0.16em"
                      fontWeight="800"
                    >
                      OS
                    </text>
                    <text
                      x="250"
                      y="270"
                      textAnchor="middle"
                      fontSize="6.5"
                      fontFamily="var(--font-mono, monospace)"
                      fill="var(--color-text-tertiary)"
                      letterSpacing="0.1em"
                    >
                      CORE NODE
                    </text>
                  </g>
                </svg>

                {/* Floating Interactive Detail Tooltip */}
                {activeNode && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 p-3.5 rounded-lg bg-[var(--background-dark-deep)]/95 backdrop-blur-md border border-[#2F8FFF]/50 text-xs shadow-2xl text-center space-y-1 max-w-xs animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-center gap-1.5 font-mono text-[10px] text-[#2F8FFF] uppercase font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      <span>{activeNode.label}</span>
                    </div>
                    <div className="text-[11px] font-semibold text-white">
                      {activeNode.sub}
                    </div>
                    <p className="text-[10px] text-[var(--color-text-secondary)] leading-relaxed">
                      {activeNode.detail}
                    </p>
                  </div>
                )}

              </div>
            </ScrollReveal>
            <p className="text-[11px] font-mono text-[var(--color-text-tertiary)] text-center pt-2">
              Hover over orbital nodes to inspect ecosystem integration roles &rarr;
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
