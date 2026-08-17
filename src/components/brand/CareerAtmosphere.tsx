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
      {/* Warm ivory base — full fill */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: '#F7F5EC' }}
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
          background: `radial-gradient(ellipse at 60% 30%, rgba(205, 187, 210, ${o(0.22)}) 0%, transparent 68%)`,
        }}
      />

      {/* Pale stone / taupe — mid-lower right, behind mentor feet */}
      <div
        className={animate ? 'atmosphere-field atmosphere-field--taupe' : ''}
        style={{
          position: 'absolute',
          bottom: '-15%',
          right: '5%',
          width: '60%',
          height: '70%',
          background: `radial-gradient(ellipse at 50% 70%, rgba(200, 192, 178, ${o(0.16)}) 0%, transparent 65%)`,
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
          background: `radial-gradient(ellipse at 80% 80%, rgba(210, 197, 152, ${o(0.13)}) 0%, transparent 60%)`,
        }}
      />

      {/* Return to ivory — strong center-left, anchors the copy area */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '-10%',
          width: '58%',
          height: '90%',
          background: `radial-gradient(ellipse at 25% 40%, rgba(247, 245, 236, ${o(0.85)}) 0%, transparent 72%)`,
        }}
      />

      {/* Very faint warm blush — upper-left above headline */}
      <div
        className={animate ? 'atmosphere-field atmosphere-field--blush' : ''}
        style={{
          position: 'absolute',
          top: '-20%',
          left: '5%',
          width: '40%',
          height: '50%',
          background: `radial-gradient(ellipse at 30% 20%, rgba(234, 229, 219, ${o(0.2)}) 0%, transparent 60%)`,
        }}
      />
    </div>
  );
}
