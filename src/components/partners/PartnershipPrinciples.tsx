import React from 'react';
import { PARTNERSHIP_PRINCIPLES } from '@/lib/partners/registry';

export function PartnershipPrinciplesSection() {
  return (
    <section id="partnership-principles" className="py-28 bg-[var(--color-background)] border-b border-[var(--color-border-default)]">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: header */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-1">
              <p className="section-label text-[var(--color-accent-primary)]">SELECTION STANDARDS</p>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Who we partner with matters.
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              CareerOS does not accept partnerships simply because an organisation will pay. Relationships must pass five governing principles.
            </p>
            <div className="pt-4 p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-sm">
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                <strong className="text-[var(--color-text-primary)]">The last principle is particularly important.</strong>{' '}
                Commercial relationships must never silently manipulate CareerOS recommendations. Where a commercial relationship influences placement or presentation, we disclose it appropriately.
              </p>
            </div>
          </div>

          {/* Right: principles */}
          <div className="lg:col-span-8">
            <div className="space-y-0 divide-y divide-[var(--color-border-subtle)]">
              {PARTNERSHIP_PRINCIPLES.map((principle) => (
                <div key={principle.id} className="py-7 grid grid-cols-12 gap-6 group">
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-2xl font-mono font-bold text-[var(--color-border-default)] group-hover:text-[var(--color-accent-primary)] transition-colors">
                      {principle.number}
                    </span>
                  </div>
                  <div className="col-span-10 sm:col-span-11 space-y-2">
                    <h3 className="text-base font-bold text-[var(--color-text-primary)]">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] font-medium leading-relaxed italic">
                      "{principle.statement}"
                    </p>
                    <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
