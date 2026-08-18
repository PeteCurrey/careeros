'use client';

import React from 'react';
import { PUBLIC_WORKFORCE_RESOURCES } from '@/lib/partners/registry';
import { ExternalLink, ShieldCheck, Database, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';
import { CareerGradientText } from '@/components/brand/CareerGradientText';
import { ImageHoverRevealCard } from '@/components/brand/ImageHoverRevealCard';

export function PublicResourcesSection() {
  const getResourceImage = (id: string) => {
    switch (id) {
      case 'careeronestop':
        return {
          src: '/media/professionals/professional_pathways_collective.jpg',
          alt: 'US Department of Labor CareerOneStop national workforce infrastructure',
        };
      case 'onet':
        return {
          src: '/media/product/opportunity_agent_hero.jpg',
          alt: 'ONET Occupational Information Network standardized taxonomy data repository',
        };
      case 'apprenticeship-gov':
        return {
          src: '/media/students/audience_students.jpg',
          alt: 'Apprenticeship.gov Registered Apprenticeship sponsors and work-based learning pathways',
        };
      default:
        return {
          src: '/media/product/product_overview_hero.jpg',
          alt: 'Public workforce infrastructure',
        };
    }
  };

  return (
    <section id="public-resources" className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)] relative overflow-hidden">
      
      {/* Subtle ambient lighting */}
      <div className="ambient-glow-champagne absolute inset-0 pointer-events-none" />

      <div className="container-editorial space-y-16 relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="section-label flex items-center gap-2">
                <span className="accent-blue-dot" />
                Public Workforce Infrastructure
              </span>
              <TechnicalBadge variant="champagne">FEDERAL OPEN DATA</TechnicalBadge>
            </div>

            <h2 className="text-display-section text-[var(--color-text-primary)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Built on authoritative <br />
              <CareerGradientText variant="gold">
                national systems.
              </CareerGradientText>
            </h2>

            <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl font-normal">
              CareerOS connects to the public workforce infrastructure established by the US federal government, state agencies, and academic bodies. These are not commercial data vendors — they are authoritative public systems that CareerOS makes accessible and actionable.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Federal Resources Cards with Image Hover Reveal */}
        <ScrollReveal delayMs={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PUBLIC_WORKFORCE_RESOURCES.map((resource) => {
              const media = getResourceImage(resource.id);

              return (
                <ImageHoverRevealCard
                  key={resource.id}
                  imageSrc={media.src}
                  imageAlt={media.alt}
                  pattern="background"
                  className="p-7 flex flex-col justify-between hover-lift min-h-[360px]"
                >
                  <div className="space-y-4">
                    {/* Authority badge */}
                    <div className="flex items-center justify-between">
                      <TechnicalBadge variant="champagne">
                        {resource.officialSponsor.split(',')[0]}
                      </TechnicalBadge>
                      <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider font-semibold">
                        {resource.isFederalResource ? 'Federal Standard' : 'Public System'}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] leading-tight pt-1">
                      {resource.name}
                    </h3>

                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {resource.description}
                    </p>

                    {/* Purpose Tags */}
                    {resource.purpose && resource.purpose.length > 0 && (
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {resource.purpose.slice(0, 3).map((p) => (
                          <span
                            key={p}
                            className="text-[10px] px-2 py-0.5 rounded bg-[var(--color-surface-base)] text-[var(--color-text-tertiary)] font-mono border border-[var(--color-border-subtle)]"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-5 mt-6 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
                    <p className="text-[10px] text-[var(--color-text-tertiary)] leading-tight max-w-[190px]">
                      {resource.attributionText}
                    </p>

                    <a
                      href={resource.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#2F8FFF] hover:underline font-mono font-semibold"
                    >
                      <span>Visit</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </ImageHoverRevealCard>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Legal & Attribution Notice */}
        <ScrollReveal delayMs={150}>
          <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] max-w-4xl flex items-start gap-4">
            <ShieldCheck className="w-5 h-5 text-[#34D399] shrink-0 mt-0.5" />
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              <strong className="text-[var(--color-text-primary)]">Attribution &amp; Endorsement Standards.</strong>{' '}
              CareerOS uses public workforce data under open-data licensing and applicable federal data access terms. Where attribution is required — including for O*NET® and CareerOneStop — it is displayed alongside relevant content. Reference to federal agencies and programmes does not imply US government endorsement of CareerOS. See our{' '}
              <a href="/legal/data-sources-integrations" className="text-[#2F8FFF] underline underline-offset-2 hover:text-white font-medium">
                Data Sources &amp; Integrations Register
              </a>{' '}
              for complete provenance detail.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
