import React from 'react';

export function MissionSection() {
  return (
    <section className="section-editorial bg-[var(--color-ivory-warm)] border-b border-[var(--color-border-default)]">
      <div className="container-narrow text-center space-y-10">
        
        <span className="section-label">
          Foundational Manifesto
        </span>

        <h2 className="text-display-section text-[var(--color-charcoal-deep)] leading-[1.08] max-w-2xl mx-auto">
          Human capability is humanity&apos;s greatest asset. <br />
          <span className="font-serif italic font-normal text-[var(--color-taupe-600)] block mt-2">
            It deserves an enduring operating system.
          </span>
        </h2>

        <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto">
          For generations, careers have been navigated with fragmented advice, transactional recruiters, and fragile paper résumés. Career OS provides every human being with an intelligent, trustworthy companion that compounds value throughout their working life.
        </p>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[var(--color-taupe-600)] uppercase tracking-widest font-semibold border-t border-[var(--color-border-default)] max-w-xl mx-auto">
          <span>Universal Access</span>
          <span className="text-[var(--color-border-strong)]">&bull;</span>
          <span>Uncompromised Privacy</span>
          <span className="text-[var(--color-border-strong)]">&bull;</span>
          <span>Verified Evidence</span>
        </div>

      </div>
    </section>
  );
}

