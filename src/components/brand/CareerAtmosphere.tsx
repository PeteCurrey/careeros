'use client';

import React from 'react';

interface CareerAtmosphereProps {
  /** Overall opacity multiplier 0–1, default 1 */
  intensity?: number;
  className?: string;
  /** Animate the atmosphere fields subtly */
  animate?: boolean;
}

/**
 * CareerAtmosphere
 *
 * Reusable brand background layer. Renders large, low-opacity
 * radial ellipses positioned asymmetrically to create a sense of
 * depth and warmth — light passing across premium paper, not a
 * CSS gradient band.
 *
 * Usage: place as first child of a `position: relative` container,
 * then set `position: absolute; inset: 0` via className.
 */
export function CareerAtmosphere({
  intensity = 1,
  className = '',
  animate = true,
}: CareerAtmosphereProps) {
  const o = (base: number) => base * intensity;

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Dark charcoal base — full fill */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: '#222222' }}
      />

      {/* Soft lavender atmosphere — upper-right, behind where image sits */}
      <div
        className={animate ? 'atmosphere-field atmosphere-field--lavender' : ''}
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '70%',
          height: '85%',
          background: `radial-gradient(ellipse at 60% 30%, rgba(205, 187, 210, ${o(0.12)}) 0%, transparent 68%)`,
        }}
      />

      {/* Deep charcoal depth — mid-lower right */}
      <div
        className={animate ? 'atmosphere-field atmosphere-field--taupe' : ''}
        style={{
          position: 'absolute',
          bottom: '-15%',
          right: '5%',
          width: '60%',
          height: '70%',
          background: `radial-gradient(ellipse at 50% 70%, rgba(24, 24, 24, ${o(0.65)}) 0%, transparent 65%)`,
        }}
      />

      {/* Muted gold — low-right edge, very restrained */}
      <div
        className={animate ? 'atmosphere-field atmosphere-field--gold' : ''}
        style={{
          position: 'absolute',
          bottom: '0%',
          right: '-8%',
          width: '45%',
          height: '55%',
          background: `radial-gradient(ellipse at 80% 80%, rgba(221, 211, 109, ${o(0.08)}) 0%, transparent 60%)`,
        }}
      />

      {/* Precision architectural cool blue — mid-right ambient depth */}
      <div
        className={animate ? 'atmosphere-field atmosphere-field--blue' : ''}
        style={{
          position: 'absolute',
          top: '35%',
          right: '12%',
          width: '50%',
          height: '50%',
          background: `radial-gradient(ellipse at 50% 50%, rgba(47, 143, 255, ${o(0.035)}) 0%, transparent 65%)`,
        }}
      />

      {/* Return to solid charcoal — strong center-left, anchors the copy area */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '-10%',
          width: '58%',
          height: '90%',
          background: `radial-gradient(ellipse at 25% 40%, rgba(34, 34, 34, ${o(0.96)}) 0%, transparent 72%)`,
        }}
      />

      {/* Soft elevated charcoal ambient — upper-left above headline */}
      <div
        className={animate ? 'atmosphere-field atmosphere-field--blush' : ''}
        style={{
          position: 'absolute',
          top: '-20%',
          left: '5%',
          width: '40%',
          height: '50%',
          background: `radial-gradient(ellipse at 30% 20%, rgba(42, 42, 42, ${o(0.40)}) 0%, transparent 60%)`,
        }}
      />
    </div>
  );
}
