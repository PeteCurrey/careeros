'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CareerPathwayConnectorProps {
  variant?: 'branching' | 'horizontal-s' | 'vertical-spine' | 'cross-section';
  color?: string;
  className?: string;
  animate?: boolean;
}

export function CareerPathwayConnector({
  variant = 'branching',
  color = 'rgba(47, 143, 255, 0.35)',
  className,
}: CareerPathwayConnectorProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'career-pathway-connector pointer-events-none select-none overflow-hidden absolute inset-0 z-0',
        className
      )}
    >
      {variant === 'branching' && (
        <svg
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main trajectory path */}
          <path
            d="M 0 320 C 250 320, 380 180, 600 180 C 820 180, 950 260, 1200 120"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
            strokeDasharray="4 6"
          />
          {/* Secondary branching trajectory */}
          <path
            d="M 600 180 C 720 180, 840 90, 1050 90 L 1200 90"
            stroke="rgba(205, 187, 210, 0.25)"
            strokeWidth="0.8"
            fill="none"
          />
          {/* Active Career Node at decision point */}
          <circle cx="600" cy="180" r="3.5" fill="#2F8FFF" />
          <circle cx="600" cy="180" r="8" stroke="#2F8FFF" strokeWidth="0.8" fill="none" opacity="0.5" />
        </svg>
      )}

      {variant === 'horizontal-s' && (
        <svg
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M -50 120 C 360 40, 720 200, 1080 80 C 1260 20, 1400 160, 1500 120"
            stroke={color}
            strokeWidth="1"
            fill="none"
          />
          <circle cx="720" cy="140" r="3" fill="#2F8FFF" />
        </svg>
      )}

      {variant === 'cross-section' && (
        <svg
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 100 0 C 100 200, 450 250, 450 450 C 450 550, 850 500, 900 600"
            stroke={color}
            strokeWidth="1"
            fill="none"
            strokeDasharray="5 7"
          />
          <circle cx="450" cy="350" r="4" fill="#6BB8FF" />
          <circle cx="450" cy="350" r="10" stroke="#6BB8FF" strokeWidth="0.5" fill="none" opacity="0.4" />
        </svg>
      )}
    </div>
  );
}
