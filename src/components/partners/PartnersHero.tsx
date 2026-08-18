'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

const ECOSYSTEM_NODES = [
  { id: 'workforce', label: 'WORKFORCE', angle: 0, radius: 180 },
  { id: 'education', label: 'EDUCATION', angle: 45, radius: 185 },
  { id: 'employers', label: 'EMPLOYERS', angle: 90, radius: 180 },
  { id: 'wellbeing', label: 'WELLBEING', angle: 135, radius: 185 },
  { id: 'skills', label: 'SKILLS', angle: 180, radius: 180 },
  { id: 'opportunity', label: 'OPPORTUNITY', angle: 225, radius: 185 },
  { id: 'community', label: 'COMMUNITY', angle: 270, radius: 180 },
  { id: 'credentials', label: 'CREDENTIALS', angle: 315, radius: 185 },
];

export function PartnersHero() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const animatePulse = () => {
      const circles = svg.querySelectorAll('.pulse-ring');
      circles.forEach((circle, i) => {
        circle.animate(
          [
            { opacity: 0.4, transform: 'scale(1)' },
            { opacity: 0, transform: 'scale(1.4)' },
          ],
          {
            duration: 2800,
            delay: i * 350,
            iterations: Infinity,
            easing: 'ease-out',
          }
        );
      });
    };

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      animatePulse();
    }
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[var(--color-background)] border-b border-[var(--color-border-default)]">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `linear-gradient(var(--color-border-default) 1px, transparent 1px), linear-gradient(to right, var(--color-border-default) 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
        }}
        aria-hidden="true"
      />

      <div className="container-editorial relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center min-h-[80vh] py-24">

          {/* Text column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-1">
              <p className="section-label text-[var(--color-accent-primary)]">PARTNERSHIPS</p>
            </div>

            <div className="space-y-5">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.03]">
                Careers aren't<br />
                <span className="text-[var(--color-text-secondary)]">built alone.</span>
              </h1>

              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-lg font-normal">
                CareerOS connects people with the organisations, opportunities, learning and human support that help them move forward — bringing a fragmented career ecosystem together around one individual.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href={ROUTES.CONTACT_PARTNERSHIPS}
                className="btn-primary px-6 py-3 text-sm font-semibold rounded-sm"
              >
                Partner with CareerOS
              </Link>
              <a
                href="#ecosystem"
                className="btn-secondary px-6 py-3 text-sm font-medium rounded-sm"
              >
                Explore the ecosystem
              </a>
            </div>

            <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed max-w-sm pt-2 border-t border-[var(--color-border-subtle)] pt-6">
              No single platform can build a career alone. CareerOS acts as the intelligent connective layer between the individual and the organisations already excellent at particular parts of the journey.
            </p>
          </div>

          {/* Ecosystem diagram */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="relative w-full max-w-[540px] aspect-square" aria-label="CareerOS ecosystem diagram showing connections between workforce, education, employers, wellbeing, skills, opportunity, community, and credentials">
              <svg
                ref={svgRef}
                viewBox="0 0 500 500"
                className="w-full h-full"
                aria-hidden="true"
              >
                <defs>
                  <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="var(--color-accent-primary)" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="var(--color-accent-primary)" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Background glow */}
                <circle cx="250" cy="250" r="220" fill="url(#centerGlow)" />

                {/* Outer orbit ring */}
                <circle cx="250" cy="250" r="185" fill="none" stroke="var(--color-border-subtle)" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.4" />
                <circle cx="250" cy="250" r="130" fill="none" stroke="var(--color-border-subtle)" strokeWidth="0.5" opacity="0.25" />

                {/* Connection lines from center to each node */}
                {ECOSYSTEM_NODES.map((node) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const nx = 250 + node.radius * Math.cos(rad);
                  const ny = 250 + node.radius * Math.sin(rad);
                  return (
                    <line
                      key={node.id}
                      x1="250" y1="250"
                      x2={nx} y2={ny}
                      stroke="var(--color-accent-primary)"
                      strokeWidth="0.6"
                      opacity="0.2"
                      strokeDasharray="4 8"
                    />
                  );
                })}

                {/* Outer nodes */}
                {ECOSYSTEM_NODES.map((node) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const nx = 250 + node.radius * Math.cos(rad);
                  const ny = 250 + node.radius * Math.sin(rad);
                  return (
                    <g key={node.id}>
                      <circle
                        className="pulse-ring"
                        cx={nx} cy={ny}
                        r="18"
                        fill="var(--color-accent-primary)"
                        opacity="0"
                      />
                      <circle
                        cx={nx} cy={ny}
                        r="12"
                        fill="var(--color-surface-raised)"
                        stroke="var(--color-accent-primary)"
                        strokeWidth="0.8"
                        opacity="0.7"
                      />
                      <circle
                        cx={nx} cy={ny}
                        r="3"
                        fill="var(--color-accent-primary)"
                        opacity="0.6"
                      />
                      <text
                        x={nx}
                        y={ny + 26}
                        textAnchor="middle"
                        fontSize="7"
                        fontFamily="var(--font-mono, monospace)"
                        fill="var(--color-text-tertiary)"
                        letterSpacing="0.08em"
                        fontWeight="500"
                      >
                        {node.label}
                      </text>
                    </g>
                  );
                })}

                {/* Center node: CareerOS */}
                <circle cx="250" cy="250" r="48" fill="var(--color-surface-raised)" stroke="var(--color-border-default)" strokeWidth="1" />
                <circle cx="250" cy="250" r="42" fill="var(--color-surface-sunken)" stroke="var(--color-accent-primary)" strokeWidth="0.6" opacity="0.4" />
                <text
                  x="250" y="245"
                  textAnchor="middle"
                  fontSize="8"
                  fontFamily="var(--font-mono, monospace)"
                  fill="var(--color-text-secondary)"
                  letterSpacing="0.12em"
                  fontWeight="600"
                >
                  CAREER
                </text>
                <text
                  x="250" y="257"
                  textAnchor="middle"
                  fontSize="8"
                  fontFamily="var(--font-mono, monospace)"
                  fill="var(--color-accent-primary)"
                  letterSpacing="0.12em"
                  fontWeight="700"
                >
                  OS
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
