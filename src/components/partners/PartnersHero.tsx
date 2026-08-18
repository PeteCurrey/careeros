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

const CENTER_X = 320;
const CENTER_Y = 320;
const ORBIT_RADIUS = 230;

const ECOSYSTEM_NODES: EcosystemNode[] = [
  { id: 'workforce', label: 'WORKFORCE BOARDS', sub: 'Regional Hubs', angle: 0, radius: ORBIT_RADIUS, color: '#2F8FFF', detail: '550+ American Job Centers & regional workforce investment boards' },
  { id: 'education', label: 'HIGHER ED & VET', sub: 'Accredited Learning', angle: 45, radius: ORBIT_RADIUS, color: '#CDBBD2', detail: 'Universities, community colleges & technical apprenticeships' },
  { id: 'employers', label: 'EMPLOYER COALITIONS', sub: 'Hiring Networks', angle: 90, radius: ORBIT_RADIUS, color: '#DDD36D', detail: 'Demonstrated capability hiring without keyword resume screening' },
  { id: 'wellbeing', label: 'HUMAN WELLBEING', sub: 'Clinical Care', angle: 135, radius: ORBIT_RADIUS, color: '#F87171', detail: 'Licensed clinical tele-health when career pressure becomes personal' },
  { id: 'skills', label: 'SKILLS & CREDS', sub: 'W3C Passport', angle: 180, radius: ORBIT_RADIUS, color: '#2F8FFF', detail: 'Tamper-proof verifiable digital credentials & competency proof' },
  { id: 'opportunity', label: 'LABOUR INTELLIGENCE', sub: 'Real-time Demand', angle: 225, radius: ORBIT_RADIUS, color: '#34D399', detail: 'Real-time employer demand, wage benchmarks & occupational data' },
  { id: 'community', label: 'COMMUNITY CARE', sub: 'Life Support', angle: 270, radius: ORBIT_RADIUS, color: '#DDD36D', detail: '211 hyper-local childcare, transit, and social care assistance' },
  { id: 'public_infra', label: 'PUBLIC DATA', sub: 'Federal Standards', angle: 315, radius: ORBIT_RADIUS, color: '#CDBBD2', detail: 'O*NET®, CareerOneStop & US Department of Labor infrastructure' },
];

export function PartnersHero() {
  const [activeNode, setActiveNode] = useState<EcosystemNode | null>(null);

  return (
    <section className="relative min-h-[94vh] flex items-center overflow-hidden bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
      
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

      <div className="container-editorial relative z-10 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Text narrative column (5 cols on large desktop for balanced hero hierarchy) */}
          <div className="lg:col-span-5 space-y-8">
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

          {/* Interactive Constellation Orbital Visual (Expanded 7 cols on large desktop) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
            <ScrollReveal delayMs={100}>
              <div className="relative w-full max-w-[620px] xl:max-w-[680px] aspect-square select-none">
                
                {/* SVG Constellation Canvas */}
                <svg
                  viewBox="0 0 640 640"
                  className="w-full h-full filter drop-shadow-[0_0_35px_rgba(47,143,255,0.12)]"
                  aria-label="CareerOS Interactive Ecosystem Constellation"
                >
                  <defs>
                    <radialGradient id="centerCoreGlowLarge" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#2F8FFF" stopOpacity="0.28" />
                      <stop offset="60%" stopColor="#2F8FFF" stopOpacity="0.04" />
                      <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="nodeActiveGlowLarge" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#2F8FFF" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Ambient center radial wash */}
                  <circle cx={CENTER_X} cy={CENTER_Y} r="270" fill="url(#centerCoreGlowLarge)" />

                  {/* Outer Orbit rings */}
                  <circle
                    cx={CENTER_X}
                    cy={CENTER_Y}
                    r={ORBIT_RADIUS}
                    fill="none"
                    stroke="var(--color-border-default)"
                    strokeWidth="1"
                    strokeDasharray="5 7"
                    className="opacity-45 animate-[spin_140s_linear_infinite]"
                    style={{ transformOrigin: `${CENTER_X}px ${CENTER_Y}px` }}
                  />
                  <circle
                    cx={CENTER_X}
                    cy={CENTER_Y}
                    r="155"
                    fill="none"
                    stroke="#2F8FFF"
                    strokeWidth="0.6"
                    strokeDasharray="3 5"
                    className="opacity-25"
                  />
                  <circle
                    cx={CENTER_X}
                    cy={CENTER_Y}
                    r="85"
                    fill="none"
                    stroke="var(--color-border-default)"
                    strokeWidth="0.5"
                    className="opacity-20"
                  />

                  {/* Connecting lines from center to each node */}
                  {ECOSYSTEM_NODES.map((node) => {
                    const rad = (node.angle * Math.PI) / 180;
                    const nx = CENTER_X + node.radius * Math.cos(rad);
                    const ny = CENTER_Y + node.radius * Math.sin(rad);
                    const isActive = activeNode?.id === node.id;

                    return (
                      <line
                        key={node.id}
                        x1={CENTER_X}
                        y1={CENTER_Y}
                        x2={nx}
                        y2={ny}
                        stroke={isActive ? node.color : '#2F8FFF'}
                        strokeWidth={isActive ? '2' : '0.9'}
                        opacity={isActive ? '0.85' : '0.24'}
                        strokeDasharray={isActive ? 'none' : '4 6'}
                        className="transition-all duration-300"
                      />
                    );
                  })}

                  {/* Outer Orbital Nodes */}
                  {ECOSYSTEM_NODES.map((node) => {
                    const rad = (node.angle * Math.PI) / 180;
                    const nx = CENTER_X + node.radius * Math.cos(rad);
                    const ny = CENTER_Y + node.radius * Math.sin(rad);
                    const isActive = activeNode?.id === node.id;

                    // Compute clean label offset avoiding collision
                    const isUpper = ny < CENTER_Y - 20;
                    const labelY = isUpper ? ny - 22 : ny + 26;

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
                          r={isActive ? 34 : 18}
                          fill={node.color}
                          opacity={isActive ? 0.28 : 0}
                          className="transition-all duration-300"
                        />

                        {/* Node Outer Ring */}
                        <circle
                          cx={nx}
                          cy={ny}
                          r="16"
                          fill="var(--color-surface-raised)"
                          stroke={isActive ? node.color : 'var(--color-border-strong)'}
                          strokeWidth={isActive ? 2.5 : 1.2}
                          className="transition-all duration-300"
                        />

                        {/* Center Dot */}
                        <circle
                          cx={nx}
                          cy={ny}
                          r={isActive ? 6 : 4}
                          fill={node.color}
                          className="transition-all duration-300"
                        />

                        {/* Node Label */}
                        <text
                          x={nx}
                          y={labelY}
                          textAnchor="middle"
                          fontSize="9.5"
                          fontFamily="var(--font-mono, monospace)"
                          fill={isActive ? '#FFFFFF' : 'var(--color-text-tertiary)'}
                          fontWeight={isActive ? '700' : '600'}
                          letterSpacing="0.07em"
                          className="transition-colors duration-200 pointer-events-none"
                        >
                          {node.label}
                        </text>
                      </g>
                    );
                  })}

                  {/* Central CareerOS Core Node */}
                  <g className="cursor-pointer">
                    <circle
                      cx={CENTER_X}
                      cy={CENTER_Y}
                      r="64"
                      fill="var(--background-dark-deep)"
                      stroke="#2F8FFF"
                      strokeWidth="2"
                      className="shadow-[0_0_30px_rgba(47,143,255,0.45)]"
                    />
                    <circle
                      cx={CENTER_X}
                      cy={CENTER_Y}
                      r="54"
                      fill="var(--color-surface-base)"
                      stroke="rgba(47,143,255,0.35)"
                      strokeWidth="1.2"
                    />
                    <text
                      x={CENTER_X}
                      y={CENTER_Y - 8}
                      textAnchor="middle"
                      fontSize="10.5"
                      fontFamily="var(--font-mono, monospace)"
                      fill="var(--color-text-secondary)"
                      letterSpacing="0.14em"
                      fontWeight="600"
                    >
                      CAREER
                    </text>
                    <text
                      x={CENTER_X}
                      y={CENTER_Y + 10}
                      textAnchor="middle"
                      fontSize="12.5"
                      fontFamily="var(--font-mono, monospace)"
                      fill="#2F8FFF"
                      letterSpacing="0.18em"
                      fontWeight="800"
                    >
                      OS
                    </text>
                    <text
                      x={CENTER_X}
                      y={CENTER_Y + 24}
                      textAnchor="middle"
                      fontSize="7.5"
                      fontFamily="var(--font-mono, monospace)"
                      fill="var(--color-text-tertiary)"
                      letterSpacing="0.12em"
                      fontWeight="500"
                    >
                      CORE HUB
                    </text>
                  </g>
                </svg>

                {/* Floating Interactive Detail Tooltip */}
                {activeNode && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 p-4 rounded-xl bg-[var(--background-dark-deep)]/95 backdrop-blur-md border border-[#2F8FFF]/60 text-xs shadow-2xl text-center space-y-1.5 max-w-xs animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-center gap-1.5 font-mono text-[10px] text-[#2F8FFF] uppercase font-bold">
                      <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                      <span>{activeNode.label}</span>
                    </div>
                    <div className="text-xs font-semibold text-white">
                      {activeNode.sub}
                    </div>
                    <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                      {activeNode.detail}
                    </p>
                  </div>
                )}

              </div>
            </ScrollReveal>
            <p className="text-xs font-mono text-[var(--color-text-tertiary)] text-center pt-3">
              Hover over orbital nodes to inspect ecosystem integration roles &rarr;
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
