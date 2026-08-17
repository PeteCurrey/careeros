'use client';

import React from "react";

/**
 * Signature Career OS Mark: Multiple possible futures converging around one person.
 * Fine overlapping translucent paths and orbital curves in Lavender, Taupe, Gold, and Charcoal.
 */
export function CareerOSSignatureMark({ className = "w-16 h-16", opacity = 1 }: { className?: string; opacity?: number }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Outer orbital rings */}
      <circle cx="60" cy="60" r="54" stroke="var(--color-taupe-300)" strokeWidth="0.75" strokeDasharray="3 3" />
      <circle cx="60" cy="60" r="42" stroke="var(--color-lavender-base)" strokeWidth="1" />
      
      {/* Intersecting decision arcs */}
      <ellipse cx="60" cy="60" rx="36" ry="18" stroke="var(--color-taupe-400)" strokeWidth="0.8" transform="rotate(-30 60 60)" />
      <ellipse cx="60" cy="60" rx="36" ry="18" stroke="var(--color-gold-base)" strokeWidth="0.8" transform="rotate(45 60 60)" />
      
      {/* Translucent converging fields */}
      <circle cx="48" cy="54" r="16" fill="var(--color-lavender-light)" fillOpacity="0.45" />
      <circle cx="70" cy="62" r="18" fill="var(--color-gold-light)" fillOpacity="0.4" />
      <circle cx="56" cy="68" r="14" fill="var(--color-taupe-100)" fillOpacity="0.5" />
      
      {/* Central human focus node */}
      <circle cx="60" cy="60" r="3.5" fill="var(--color-charcoal-base)" />
      <circle cx="60" cy="60" r="7" stroke="var(--color-charcoal-base)" strokeWidth="0.75" />
    </svg>
  );
}

/**
 * Editorial abstract background field for major editorial transitions
 */
export function EditorialOrganicBackdrop({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M-50 200 C 150 120, 250 320, 500 180 C 680 80, 780 260, 900 200"
        stroke="var(--color-taupe-300)"
        strokeWidth="1"
        strokeDasharray="4 4"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M-50 150 C 200 300, 400 50, 650 240 C 750 310, 850 180, 900 150"
        stroke="var(--color-lavender-base)"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
      <circle cx="280" cy="180" r="90" fill="var(--color-lavender-subtle)" opacity="0.6" />
      <circle cx="580" cy="220" r="110" fill="var(--color-gold-subtle)" opacity="0.5" />
      <circle cx="440" cy="130" r="70" fill="var(--color-taupe-50)" opacity="0.7" />
    </svg>
  );
}
