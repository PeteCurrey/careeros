'use client';

import React from "react";

export function TheProblemSection() {
  return (
    <section className="section-editorial bg-[var(--color-ivory-warm)] border-b border-[var(--color-border-default)]">
      <div className="container-editorial space-y-12">
        <div className="space-y-3">
          <span className="section-label">
            The Structural Challenge
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-display-section text-[var(--color-charcoal-deep)] max-w-3xl leading-[1.08]">
              Careers aren't linear anymore. <br />
              <span className="text-[var(--color-taupe-600)] font-normal">
                Career support shouldn't be either.
              </span>
            </h2>

            <div className="editorial-rule max-w-xl" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2 max-w-3xl text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                The traditional playbook — pick a major at 18, polish a two-page paper résumé, and climb a single company ladder — has collapsed under the weight of technological and economic change.
              </p>
              <p>
                Today, people transition between sectors, combine technical trades with leadership, reskill mid-career, and navigate AI disruption. They need persistent, verifiable infrastructure that travels with them.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6">
            <div className="text-xs uppercase tracking-widest text-[var(--color-taupe-600)] font-semibold">
              The Reality Gap
            </div>
            <div className="space-y-4 text-xs text-[var(--color-text-secondary)]">
              <div className="pb-3 border-b border-[var(--color-border-subtle)]">
                <span className="font-semibold text-[var(--color-charcoal-deep)] block text-sm mb-0.5">5.7 Career Changes</span>
                Average career pivots an individual will make over their working lifetime.
              </div>
              <div className="pb-3 border-b border-[var(--color-border-subtle)]">
                <span className="font-semibold text-[var(--color-charcoal-deep)] block text-sm mb-0.5">85% Unverified Résumés</span>
                Self-reported claims on job boards that lack verifiable evidence provenance.
              </div>
              <div>
                <span className="font-semibold text-[var(--color-charcoal-deep)] block text-sm mb-0.5">1 Platform</span>
                Career OS unites discovery, mentoring, evidence, and progression in one sovereign home.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
