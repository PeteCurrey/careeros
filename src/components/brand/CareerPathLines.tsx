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
 * career trajectories — curving, splitting, and illuminating subtle network nodes.
 *
 * Line progresses -> Node illuminates -> Settles gracefully.
 */
export function CareerPathLines({
  className = '',
  density = 'all',
  animate = true,
}: CareerPathLinesProps) {
  const [revealed, setRevealed] = useState(false);
  const [nodesIlluminated, setNodesIlluminated] = useState(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!prefersReducedMotion.current && animate) {
      const t1 = setTimeout(() => setRevealed(true), 150);
      const t2 = setTimeout(() => setNodesIlluminated(true), 1800);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      setRevealed(true);
      setNodesIlluminated(true);
    }
  }, [animate]);

  // Stroke colours — restrained, editorial on dark graphite
  const BLUE   = 'rgba(47, 143, 255, 0.35)';
  const GOLD   = 'rgba(221, 211, 109, 0.25)';
  const MAUVE  = 'rgba(205, 187, 210, 0.22)';
  const TAUPE  = 'rgba(194, 187, 179, 0.16)';
  const STONE  = 'rgba(232, 223, 233, 0.14)';

  const paths = [
    {
      d: 'M -80 680 C 120 580, 280 420, 480 340 C 640 270, 760 310, 920 280 C 1080 250, 1200 190, 1400 160 C 1560 135, 1700 148, 1920 120',
      stroke: BLUE,
      strokeWidth: 0.9,
      length: 2200,
      show: true,
    },
    {
      d: 'M 420 390 C 560 430, 680 480, 820 460 C 960 440, 1060 380, 1200 360 C 1360 338, 1540 290, 1760 240',
      stroke: MAUVE,
      strokeWidth: 0.8,
      length: 1600,
      show: true,
    },
    {
      d: 'M -40 80 C 200 120, 380 200, 560 260 C 720 318, 860 320, 1040 340 C 1200 358, 1360 400, 1560 440 C 1720 472, 1860 480, 2000 490',
      stroke: TAUPE,
      strokeWidth: 0.75,
      length: 2100,
      show: density === 'all',
    },
    {
      d: 'M 0 820 C 180 760, 340 720, 520 680 C 680 645, 800 640, 980 620 C 1140 602, 1300 570, 1480 540',
      stroke: GOLD,
      strokeWidth: 0.7,
      length: 1600,
      show: density === 'all',
    },
  ];

  // Subtle illuminated network nodes at key trajectory junctions
  const nodes = [
    { cx: 480, cy: 340, color: '#2F8FFF', label: 'EVIDENCE' },
    { cx: 920, cy: 280, color: '#DDD36D', label: 'MILESTONE' },
    { cx: 820, cy: 460, color: '#CDBBD2', label: 'ADVISORY' },
    { cx: 1200, cy: 360, color: '#2F8FFF', label: 'PROGRESSION' },
    { cx: 560, cy: 260, color: '#CDBBD2', label: 'CAPABILITY' },
  ];

  const animStyle = (length: number, delay: number) => {
    if (prefersReducedMotion.current) return {};
    return {
      strokeDasharray: length,
      strokeDashoffset: revealed ? 0 : length,
      transition: `stroke-dashoffset 2.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
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
                  ? animStyle(p.length, i * 0.25)
                  : staticStyle(p.length)
              }
            />
          ))}

        {/* Illuminated Junction Nodes */}
        {density === 'all' &&
          nodes.map((node, i) => (
            <g
              key={i}
              style={{
                opacity: nodesIlluminated ? 1 : 0,
                transform: nodesIlluminated ? 'scale(1)' : 'scale(0.5)',
                transformOrigin: `${node.cx}px ${node.cy}px`,
                transition: `opacity 0.8s ease-out ${0.1 * i}s, transform 0.8s ease-out ${0.1 * i}s`,
              }}
            >
              {/* Outer halo */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r="7"
                fill={node.color}
                fillOpacity="0.12"
              />
              {/* Core point */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r="2.5"
                fill={node.color}
                fillOpacity="0.85"
              />
            </g>
          ))}
      </svg>
    </div>
  );
}
