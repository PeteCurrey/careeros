'use client';

import React, { useState } from 'react';
import { PartnerEcosystemItem } from '@/types/partners';
import { ExternalLink, ChevronDown, ChevronUp, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { ImageHoverRevealCard } from '@/components/brand/ImageHoverRevealCard';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';

interface PartnerCardProps {
  partner: PartnerEcosystemItem;
  variant?: 'featured' | 'standard' | 'compact';
  isPreview?: boolean;
}

export function getPartnerImage(partner: { category?: string; slug?: string }): { src: string; alt: string } {
  switch (partner.slug) {
    case 'nawb':
      return {
        src: '/media/professionals/professional_pathways_collective.jpg',
        alt: 'American Job Center and regional workforce board ecosystem in action',
      };
    case 'betterhelp':
    case 'talkspace':
      return {
        src: '/media/schools/school_privacy_architecture_hero.jpg',
        alt: 'Calm, private clinical environment supporting human mental wellbeing',
      };
    case 'handshake':
      return {
        src: '/media/students/student_hero_futures.jpg',
        alt: 'University students and early-career job seekers collaborating on campus',
      };
    case 'coursera':
      return {
        src: '/media/product/how_it_works_hero.jpg',
        alt: 'Accredited university online learning modules and digital skill labs',
      };
    case 'lightcast':
      return {
        src: '/media/product/opportunity_agent_hero.jpg',
        alt: 'Metropolitan workforce data observatory analyzing real-time labor market demand',
      };
    case 'credly':
      return {
        src: '/media/product/career_passport_hero.jpg',
        alt: 'Tamper-proof verifiable digital credentials and Open Badges evidence vault',
      };
    case 'britebound':
      return {
        src: '/media/students/audience_students.jpg',
        alt: 'Secondary school students exploring technical project pathways',
      };
    case 'hiring-our-heroes':
      return {
        src: '/media/professionals/professional_hero_intersection.jpg',
        alt: 'Military service members translating leadership experience to civilian industry',
      };
    case 'united-way-211':
      return {
        src: '/media/schools/audience_schools.jpg',
        alt: 'Community care support network providing whole-person assistance',
      };
    case 'jff':
      return {
        src: '/media/product/product_overview_hero.jpg',
        alt: 'National workforce policy innovators building skills-first career pathways',
      };
    default:
      return {
        src: '/media/hero/city_horizon_hero.jpg',
        alt: 'Global career intelligence with expansive horizons',
      };
  }
}

function getCategoryBadgeVariant(category: string): 'blue' | 'lavender' | 'champagne' | 'neutral' {
  switch (category) {
    case 'Workforce & Opportunity':
    case 'Early Careers & Opportunity':
      return 'blue';
    case 'Wellbeing & Human Support':
    case 'Specialist Career Pathways':
      return 'lavender';
    case 'Learning & Skills':
    case 'Credentials & Evidence':
      return 'champagne';
    default:
      return 'neutral';
  }
}

function PreviewBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-sm bg-amber-500/10 text-amber-400 border border-amber-500/25 shadow-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse inline-block" />
      Intended &bull; Pre-Launch
    </span>
  );
}

export function FeaturedPartnerCard({ partner, isPreview }: { partner: PartnerEcosystemItem; isPreview?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const media = getPartnerImage(partner);
  const badgeVariant = getCategoryBadgeVariant(partner.category);

  return (
    <ImageHoverRevealCard
      imageSrc={media.src}
      imageAlt={media.alt}
      pattern="background"
      className="p-8 lg:p-10 hover-lift"
    >
      {/* Category eyebrow */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <TechnicalBadge variant={badgeVariant}>
            {partner.category}
          </TechnicalBadge>
          <span className="text-[11px] font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider hidden sm:inline">
            STRATEGIC ALLIANCE
          </span>
        </div>
        {isPreview && <PreviewBadge />}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-5">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] tracking-tight mb-2">
              {partner.name}
            </h3>
            <p className="text-base text-[var(--color-text-secondary)] font-normal leading-relaxed italic">
              &ldquo;{partner.positioning}&rdquo;
            </p>
          </div>

          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            {partner.shortDescription}
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 p-3.5 bg-[var(--color-surface-base)]/80 rounded-md border border-[var(--color-border-subtle)]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#2F8FFF] min-w-[120px] pt-0.5 font-semibold">
                Why this matters
              </span>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {partner.partnershipReason}
              </p>
            </div>
          </div>

          {/* Expandable capabilities */}
          <div className="pt-4 border-t border-[var(--color-border-subtle)]">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-xs text-[var(--color-text-primary)] hover:text-white font-medium transition-colors group/btn cursor-pointer"
              aria-expanded={expanded}
            >
              <span className="font-mono uppercase tracking-wider">
                {expanded ? 'Show less' : 'Capability detail & Integration'}
              </span>
              {expanded ? (
                <ChevronUp className="w-3.5 h-3.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 group-hover/btn:translate-y-0.5 transition-transform" />
              )}
            </button>

            {expanded && (
              <div className="mt-4 space-y-4 p-4 bg-[var(--color-surface-base)] rounded-md border border-[var(--color-border-subtle)] animate-in fade-in zoom-in-95 duration-200">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] mb-1.5">
                    Capability Provided
                  </p>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {partner.capabilityProvided}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] mb-2">
                    Supported Audiences
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {partner.audienceSupported.map((a) => (
                      <span
                        key={a}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-surface-warm)] text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)]"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-between gap-6 p-6 bg-[var(--color-surface-base)]/90 border border-[var(--color-border-subtle)] rounded-lg">
          {/* Logo badge */}
          <div className="w-full h-20 bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] rounded flex items-center justify-center">
            <span className="text-sm font-mono font-bold text-[var(--color-text-primary)] tracking-wider">
              {partner.name.split(' ').map((w) => w[0]).join('').slice(0, 4)}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${partner.publicDisplayApproved ? 'bg-[#34D399]' : 'bg-amber-400'}`} />
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)]">
                {partner.publicDisplayApproved ? 'Partnership Active' : 'Partnership Intended'}
              </span>
            </div>
            <a
              href={partner.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#2F8FFF] hover:text-white hover:underline font-medium transition-colors"
            >
              <span>Visit {partner.name}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </ImageHoverRevealCard>
  );
}

export function PartnerCard({ partner, isPreview }: PartnerCardProps) {
  const [expanded, setExpanded] = useState(false);
  const media = getPartnerImage(partner);
  const badgeVariant = getCategoryBadgeVariant(partner.category);

  return (
    <ImageHoverRevealCard
      imageSrc={media.src}
      imageAlt={media.alt}
      pattern="background"
      className="p-6 flex flex-col justify-between hover-lift min-h-[300px]"
    >
      <div>
        <div className="flex items-start justify-between mb-3">
          <TechnicalBadge variant={badgeVariant}>
            {partner.category}
          </TechnicalBadge>
          {isPreview && <PreviewBadge />}
        </div>

        <div className="flex items-center gap-3 mb-4 mt-2">
          <div className="w-10 h-10 bg-[var(--color-surface-base)] border border-[var(--color-border-subtle)] rounded flex items-center justify-center shrink-0">
            <span className="text-xs font-mono font-bold text-[var(--color-text-secondary)]">
              {partner.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
            </span>
          </div>
          <h3 className="text-base font-bold text-[var(--color-text-primary)] leading-tight">
            {partner.name}
          </h3>
        </div>

        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
          {partner.shortDescription}
        </p>
      </div>

      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-[11px] text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer"
          aria-expanded={expanded}
        >
          <span className="font-mono uppercase tracking-wider">
            {expanded ? 'Hide detail' : 'Why this matters'}
          </span>
          {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>

        {expanded && (
          <div className="mt-4 pt-4 border-t border-[var(--color-border-subtle)] space-y-3 animate-in fade-in zoom-in-95 duration-200">
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {partner.partnershipReason}
            </p>
            <a
              href={partner.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-[#2F8FFF] hover:underline font-medium"
            >
              <span>{partner.name}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        )}
      </div>
    </ImageHoverRevealCard>
  );
}
