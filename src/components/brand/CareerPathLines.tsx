'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CareerPathLinesProps {
  className?: string;
  /** Which lines to show: 'all' | 'minimal' (1–2 for mobile) */
  density?: 'all' | 'minimal';
  /** Trigger stroke-reveal animation on mount */
  animate?: boolean;
}

/**
 * CareerPathLines
 *
 * Brand SVG signature: 4 thin editorial lines representing different
 * career directions — curving, splitting, reconnecting, disappearing
 * behind the mentor team and re-emerging.
 *
 * NOT: circuit boards / neural networks / wavy SaaS lines.
 * IS: elegant editorial line-art, subordinate to content.
 */
export function CareerPathLines({
  className = '',
  density = 'all',
  animate = true,
}: CareerPathLinesProps) {
  const [revealed, setRevealed] = useState(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (!prefersReducedMotion.current && animate) {
      // Small delay so entrance animation is noticeable after page paint
      const t = setTimeout(() => setRevealed(true), 200);
      return () => clearTimeout(t);
    } else {
      setRevealed(true);
    }
  }, [animate]);

  // Stroke colours — muted, editorial for dark charcoal canvas
  const GOLD   = 'rgba(221, 211, 109, 0.25)';
  const MAUVE  = 'rgba(205, 187, 210, 0.22)';
  const TAUPE  = 'rgba(194, 187, 179, 0.18)';
  const STONE  = 'rgba(232, 223, 233, 0.15)';

  // Each path has a total approximate length for dashoffset reveal
  const paths = [
    {
      // Path A: Main arc — enters bottom-left, sweeps up through copy area,
      // crosses center, dissolves behind mentors, re-emerges top-right
      d: 'M -80 680 C 120 580, 280 420, 480 340 C 640 270, 760 310, 920 280 C 1080 250, 1200 190, 1400 160 C 1560 135, 1700 148, 1920 120',
      stroke: GOLD,
      strokeWidth: 0.9,
      length: 2200,
      show: true,
    },
    {
      // Path B: Branches from A mid-journey, curves down slightly then re-ascends
      d: 'M 420 390 C 560 430, 680 480, 820 460 C 960 440, 1060 380, 1200 360 C 1360 338, 1540 290, 1760 240',
      stroke: MAUVE,
      strokeWidth: 0.8,
      length: 1600,
      show: true,
    },
    {
      // Path C: Enters from top-left, arcs broadly downward through mid-hero
      d: 'M -40 80 C 200 120, 380 200, 560 260 C 720 318, 860 320, 1040 340 C 1200 358, 1360 400, 1560 440 C 1720 472, 1860 480, 2000 490',
      stroke: TAUPE,
      strokeWidth: 0.75,
      length: 2100,
      show: density === 'all',
    },
    {
      // Path D: Short, elegant diagonal — lower third of hero, fades into image
      d: 'M 0 820 C 180 760, 340 720, 520 680 C 680 645, 800 640, 980 620 C 1140 602, 1300 570, 1480 540',
      stroke: STONE,
      strokeWidth: 0.7,
      length: 1600,
      show: density === 'all',
    },
  ];

  const animStyle = (length: number, delay: number) => {
    if (prefersReducedMotion.current) return {};
    return {
      strokeDasharray: length,
      strokeDashoffset: revealed ? 0 : length,
      transition: `stroke-dashoffset 2.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
    };
  };

  const staticStyle = (length: number) => ({
    strokeDasharray: length,
    strokeDashoffset: 0,
  });

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1920 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', display: 'block' }}
        role="presentation"
      >
        {paths
          .filter((p) => p.show)
          .map((p, i) => (
            <path
              key={i}
              d={p.d}
              stroke={p.stroke}
              strokeWidth={p.strokeWidth}
              fill="none"
              strokeLinecap="round"
              style={
                animate && !prefersReducedMotion.current
                  ? animStyle(p.length, i * 0.3)
                  : staticStyle(p.length)
              }
            />
          ))}
      </svg>
    </div>
  );
}
