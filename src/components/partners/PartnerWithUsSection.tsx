'use client';

import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { MessageSquare, Building2, GraduationCap, Briefcase, Globe, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';
import { CareerGradientText } from '@/components/brand/CareerGradientText';
import { ImageHoverRevealCard } from '@/components/brand/ImageHoverRevealCard';

const PARTNER_TRACKS = [
  {
    id: 'employer',
    icon: Building2,
    title: 'Employer Partnership',
    description: 'Connect your organization with motivated, career-ready candidates. Engage talent based on demonstrated evidence before it reaches traditional job boards.',
    audience: 'Private, public and social-sector employers',
    examples: 'Early careers programs, internship pipelines, verified talent discovery',
    link: ROUTES.FOR_EMPLOYERS,
    ctaText: 'Explore for Employers',
    imageSrc: '/media/employers/audience_employers.jpg',
    imageAlt: 'Modern hiring team reviewing candidate project evidence and talent fit',
  },
  {
    id: 'school',
    icon: GraduationCap,
    title: 'School & College Integration',
    description: 'Equip students with structured lifelong career navigation, supporting vocational trades and university pathways equally under FERPA-compliant privacy.',
    audience: 'US high schools, community colleges, universities',
    examples: 'Student accounts, counselor copilot tools, longitudinal outcome reporting',
    link: ROUTES.FOR_HIGH_SCHOOLS,
    ctaText: 'Explore for Schools',
    imageSrc: '/media/schools/audience_schools.jpg',
    imageAlt: 'Educator mentoring high school students exploring technical and academic pathways',
  },
  {
    id: 'workforce',
    icon: Briefcase,
    title: 'Workforce Development',
    description: 'Extend your regional services digitally. Connect job-seekers, training programs, and local employers through sovereign CareerOS infrastructure.',
    audience: 'Workforce development boards, nonprofits, government programs',
    examples: 'American Job Center tools, participant tracking, WIOA training referrals',
    link: ROUTES.SCHOOLS_PARTNERSHIPS,
    ctaText: 'Explore for Workforce',
    imageSrc: '/media/professionals/professional_pathways_collective.jpg',
    imageAlt: 'Workforce development team directing regional training initiatives',
  },
  {
    id: 'strategic',
    icon: Globe,
    title: 'Strategic Alliances',
    description: 'For organizations whose platforms are foundational to career progression and who want to build alongside CareerOS at the ecosystem level.',
    audience: 'Learning providers, credentialing bodies, data providers',
    examples: 'API integration, W3C credential exchange, co-developed pathway taxonomies',
    link: ROUTES.CONTACT_PARTNERSHIPS,
    ctaText: 'Start Alliance Dialogue',
    imageSrc: '/media/product/opportunity_agent_hero.jpg',
    imageAlt: 'Strategic technology and data alliance observatory',
  },
];

export function PartnerWithUsSection() {
  return (
    <section id="partner-with-us" className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)] relative overflow-hidden">
      
      {/* Ambient background wash */}
      <div className="ambient-glow-blue absolute inset-0 pointer-events-none" />

      <div className="container-editorial space-y-16 relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="section-label flex items-center gap-2">
                  <span className="accent-blue-dot" />
                  Work With Us
                </span>
                <TechnicalBadge variant="blue">FOUR INITIATIVE TRACKS</TechnicalBadge>
              </div>

              <h2 className="text-display-section text-[var(--color-text-primary)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Partner with <br />
                <CareerGradientText variant="blue">
                  CareerOS.
                </CareerGradientText>
              </h2>

              <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed font-normal">
                We work with employers, schools, colleges, workforce development boards, training providers, and ecosystem partners who share our commitment to building careers that are evidence-based, transparent, and human-centered.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  All partnerships are subject to our 5 governing principles and verified against our compliance launch gate. We are currently accepting enquiries for foundational launch partnerships.
                </p>
                <div className="pt-2">
                  <Link
                    href={ROUTES.CONTACT_PARTNERSHIPS}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#2F8FFF] hover:bg-[#2575d4] text-white text-sm font-semibold rounded-[var(--radius-sm)] shadow-[0_0_16px_rgba(47,143,255,0.3)] transition-all cursor-pointer group"
                  >
                    <span>Start a partnership conversation</span>
                    <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Tracks Grid with Image Hover Reveal */}
        <ScrollReveal delayMs={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PARTNER_TRACKS.map((track) => {
              const Icon = track.icon;

              return (
                <ImageHoverRevealCard
                  key={track.id}
                  imageSrc={track.imageSrc}
                  imageAlt={track.imageAlt}
                  pattern="background"
                  className="p-7 flex flex-col justify-between hover-lift min-h-[340px]"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded bg-[#2F8FFF]/10 border border-[#2F8FFF]/25 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#2F8FFF]" />
                    </div>

                    <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                      {track.title}
                    </h3>

                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {track.description}
                    </p>

                    <div className="pt-3 border-t border-[var(--color-border-subtle)] space-y-1 text-xs font-mono">
                      <p className="text-[10px] text-[var(--color-text-tertiary)]">
                        <strong className="text-[var(--color-text-secondary)] font-semibold">For: </strong>{track.audience}
                      </p>
                      <p className="text-[10px] text-[var(--color-text-tertiary)]">
                        <strong className="text-[var(--color-text-secondary)] font-semibold">Includes: </strong>{track.examples}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[var(--color-border-subtle)]">
                    <Link
                      href={track.link}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2F8FFF] hover:text-white underline underline-offset-4 group cursor-pointer"
                    >
                      <span>{track.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </ImageHoverRevealCard>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Pre-launch Note */}
        <ScrollReveal delayMs={150}>
          <div className="flex items-start gap-4 p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] max-w-3xl">
            <MessageSquare className="w-5 h-5 text-[#2F8FFF] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-xs font-bold text-[var(--color-text-primary)]">
                Pre-Launch Strategic Partner Onboarding
              </p>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                CareerOS is in pre-launch development. Strategic alliances, educational pilot districts, and employer launch coalitions are being established now ahead of national release.
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
