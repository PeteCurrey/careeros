import React from 'react';
import { PUBLIC_WORKFORCE_RESOURCES } from '@/lib/partners/registry';
import { ExternalLink } from 'lucide-react';

export function PublicResourcesSection() {
  return (
    <section id="public-resources" className="py-28 bg-[var(--color-surface-sunken)] border-b border-[var(--color-border-default)]">
      <div className="container-editorial space-y-14">
        <div className="max-w-3xl space-y-4">
          <p className="section-label text-[var(--color-accent-primary)]">PUBLIC WORKFORCE INFRASTRUCTURE</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Built on authoritative public infrastructure.
          </h2>
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
            CareerOS draws on the public workforce infrastructure built by the US federal government, state agencies, and academic research bodies. These are not commercial data vendors — they are authoritative national systems that CareerOS connects individuals to more effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PUBLIC_WORKFORCE_RESOURCES.map((resource) => (
            <article
              key={resource.id}
              className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-sm hover:border-[var(--color-border-interactive)] transition-colors group flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Authority badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-sm bg-[var(--color-accent-primary)]/5 text-[var(--color-accent-primary)] border border-[var(--color-accent-primary)]/15">
                    {resource.officialSponsor.split(',')[0]}
                  </span>
                  <span className="text-[9px] font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider">
                    {resource.isFederalResource ? 'Federal Standard' : 'Public System'}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[var(--color-text-primary)] leading-tight">
                  {resource.name}
                </h3>

                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {resource.description}
                </p>

                {/* Purpose Tags */}
                {resource.purpose && resource.purpose.length > 0 && (
                  <div className="pt-2 flex flex-wrap gap-1">
                    {resource.purpose.map((p) => (
                      <span key={p} className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono">
                        {p}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
                {/* Attribution notice */}
                <p className="text-[10px] text-[var(--color-text-tertiary)] leading-tight max-w-[200px]">
                  {resource.attributionText}
                </p>

                <a
                  href={resource.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[var(--color-accent-primary)] hover:underline font-mono"
                >
                  <span>Visit</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-sm max-w-3xl">
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            <strong className="text-[var(--color-text-primary)]">Attribution &amp; Endorsement.</strong>{' '}
            CareerOS uses public workforce data under open-data licensing and applicable federal data access terms. Where attribution is required — including for O*NET® and CareerOneStop — it is displayed alongside relevant content. Reference to federal agencies and programmes does not imply US government endorsement of CareerOS. See our{' '}
            <a href="/legal/data-sources-integrations" className="text-[var(--color-accent-primary)] hover:underline">
              Data Sources &amp; Integrations Register
            </a>{' '}
            for full provenance detail.
          </p>
        </div>
      </div>
    </section>
  );
}
