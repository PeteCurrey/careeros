import React from 'react';
import { Compass, ShieldCheck } from 'lucide-react';

export function MissionSection() {
  return (
    <section className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
      <div className="container-narrow text-center space-y-8">
        
        <p className="text-xs font-mono font-bold tracking-widest text-[var(--color-brand-600)] uppercase">
          Our Foundational Purpose
        </p>

        <h2 className="text-display-section text-[var(--color-text-primary)] leading-tight">
          Human capability is humanity&apos;s greatest asset. It deserves an enduring operating system.
        </h2>

        <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
          For generations, careers have been navigated with fragmented advice, transactional job boards, and fragile paper résumés. Career OS exists to provide every human being with an intelligent, trustworthy companion that compounds value throughout their working life.
        </p>

        <div className="pt-6 flex items-center justify-center gap-8 text-xs font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider">
          <span>&bull; Universal Access</span>
          <span>&bull; Uncompromised Privacy</span>
          <span>&bull; Verified Evidence</span>
        </div>

      </div>
    </section>
  );
}
