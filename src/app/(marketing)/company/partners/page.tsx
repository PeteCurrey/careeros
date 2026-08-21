import React from 'react';
import { Metadata } from 'next';
import { ROUTES } from '@/lib/routes';
import {
  STRATEGIC_PARTNERS_REGISTRY,
  SPECIALIST_PATHWAYS,
  getEcosystemPartners,
} from '@/lib/partners/registry';
import { PartnersHero } from '@/components/partners/PartnersHero';
import { EcosystemJourney } from '@/components/partners/EcosystemJourney';
import { PartnershipPrinciplesSection } from '@/components/partners/PartnershipPrinciples';
import { PublicResourcesSection } from '@/components/partners/PublicResourcesSection';
import { PartnerWithUsSection } from '@/components/partners/PartnerWithUsSection';
import { FeaturedPartnerCard, PartnerCard } from '@/components/partners/PartnerCard';
import { ScrollReveal } from '@/components/brand/ScrollReveal';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';
import { CareerGradientText } from '@/components/brand/CareerGradientText';
import { ImageHoverRevealCard } from '@/components/brand/ImageHoverRevealCard';
import Link from 'next/link';
import { ExternalLink, ArrowRight, ShieldCheck, Database, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Partnerships & Ecosystem | CareerOS',
  description: 'CareerOS connects people with the organizations, opportunities, learning and human support needed to move careers forward. No single platform can build a career alone.',
  openGraph: {
    title: 'Partnerships & Ecosystem | CareerOS',
    description: 'CareerOS acts as the intelligent connective layer between the individual and the organizations already excellent at particular parts of the career journey.',
    url: 'https://careeros.com/company/partners',
    type: 'website',
  },
};

const ECOSYSTEM_CATEGORIES = [
  { label: 'Workforce Boards', description: '550+ American Job Centers & regional boards', imageSrc: '/media/professionals/professional_pathways_collective.jpg' },
  { label: 'Education & Learning', description: 'Accredited university & trade skill paths', imageSrc: '/media/product/how_it_works_hero.jpg' },
  { label: 'Credentialing Vaults', description: 'Tamper-proof W3C passport evidence', imageSrc: '/media/product/career_passport_hero.jpg' },
  { label: 'Employer Coalitions', description: 'Verified capability discovery & hiring', imageSrc: '/media/employers/audience_employers.jpg' },
  { label: 'Wellbeing Support', description: 'Licensed clinical tele-health care', imageSrc: '/media/schools/school_privacy_architecture_hero.jpg' },
  { label: 'Public Infrastructure', description: 'O*NET® and federal open data systems', imageSrc: '/media/product/opportunity_agent_hero.jpg' },
  { label: 'Specialist Pathways', description: 'Veterans, youth, and career transitioners', imageSrc: '/media/professionals/professional_hero_intersection.jpg' },
  { label: 'Labor Intelligence', description: 'Real-time regional wage & demand metrics', imageSrc: '/media/product/career_graph_hero.jpg' },
  { label: 'Whole-Person Care', description: '211 hyper-local family and life services', imageSrc: '/media/schools/audience_schools.jpg' },
];

export default async function PartnersPage() {
  // Fetch ecosystem partners — in dev shows all intended, in production only approved
  const isProduction = process.env.NODE_ENV === 'production';
  const partners = await getEcosystemPartners({ preview: !isProduction });
  const featuredPartners = partners.filter((p) => p.featured);
  const standardPartners = partners.filter((p) => !p.featured);

  const hasUnapprovedPartners = partners.some((p) => !p.publicDisplayApproved);

  return (
    <main id="main-content" className="bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      {/* 01. Hero — Interactive Constellation & Connected Topology */}
      <PartnersHero />

      {/* Intent notice — dev/staging preview banner */}
      {hasUnapprovedPartners && (
        <div className="bg-amber-500/10 border-b border-amber-500/25 py-3">
          <div className="container-editorial">
            <p className="text-xs text-amber-400 font-mono leading-relaxed flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
              <span>
                <strong>Editor Preview:</strong> Partnership organizations shown below represent intended ecosystem relationships under active dialogue. None have approved logo use or public marketing. Pre-launch intent only.
              </span>
            </p>
          </div>
        </div>
      )}

      {/* 02. Philosophy: Why we partner */}
      <section id="why-we-partner" className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)] relative overflow-hidden">
        <div className="ambient-glow-blue absolute inset-0 pointer-events-none" />

        <div className="container-editorial space-y-16 relative z-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="section-label flex items-center gap-2">
                    <span className="accent-blue-dot" />
                    Philosophy
                  </span>
                  <TechnicalBadge variant="blue">SYSTEM HYPOTHESIS</TechnicalBadge>
                </div>

                <h2 className="text-display-section text-[var(--color-text-primary)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  No single platform <br />
                  <CareerGradientText variant="blue">
                    can build a career alone.
                  </CareerGradientText>
                </h2>

                <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed font-normal">
                  CareerOS is not trying to replace the career ecosystem. It is building the intelligent connective layer that finally makes the ecosystem work for the individual.
                </p>

                <div className="space-y-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  <p>
                    Workforce boards, learning providers, credentialing networks, employer ecosystems, wellbeing services, and public federal infrastructure — each excels at a specific part of the journey. CareerOS connects individuals to the right node at the right moment, with their evidence-backed story already assembled.
                  </p>
                  <p className="text-xs font-mono text-[var(--color-text-tertiary)] pt-2 border-t border-[var(--color-border-subtle)]">
                    This is not a logo page. These are the organizations that will make CareerOS meaningful in practice — governed by strict verification standards.
                  </p>
                </div>
              </div>

              {/* 9 Category Tiles with Image Hover Reveal */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {ECOSYSTEM_CATEGORIES.map((cat) => (
                    <ImageHoverRevealCard
                      key={cat.label}
                      imageSrc={cat.imageSrc}
                      imageAlt={cat.label}
                      pattern="background"
                      className="p-4 flex flex-col justify-between min-h-[140px] hover-lift"
                    >
                      <div>
                        <p className="text-xs font-bold text-[var(--color-text-primary)] mb-1">
                          {cat.label}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-[var(--color-border-subtle)]">
                        <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] leading-tight">
                          {cat.description}
                        </p>
                      </div>
                    </ImageHoverRevealCard>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 03. Featured Strategic Ecosystem Partners */}
      <section id="strategic-partners" className="section-editorial bg-[var(--color-surface-warm)] border-b border-[var(--color-border-default)] relative overflow-hidden">
        <div className="ambient-glow-lilac absolute inset-0 pointer-events-none opacity-40" />

        <div className="container-editorial space-y-16 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[var(--color-border-default)]">
              <div className="max-w-3xl space-y-4">
                <div className="flex items-center gap-3">
                  <span className="section-label flex items-center gap-2">
                    <span className="accent-blue-dot" />
                    Ecosystem Partnerships
                  </span>
                  <TechnicalBadge variant="lavender">DOMAIN COALITIONS</TechnicalBadge>
                </div>
                <h2 className="text-display-section text-[var(--color-text-primary)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Strategic <CareerGradientText variant="lilac">ecosystem relationships.</CareerGradientText>
                </h2>
                <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed font-normal">
                  CareerOS is building formal partnerships with organizations that lead their respective sectors. Each relationship is governed by our five partnership principles and subject to ongoing compliance review.
                </p>
              </div>

              <div className="text-xs font-mono text-[var(--color-text-tertiary)] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#34D399]" />
                <span>12-Point Compliance Launch Gate</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Featured partners — large cards with Image Hover Reveal */}
          {featuredPartners.length > 0 && (
            <ScrollReveal delayMs={100}>
              <div className="space-y-6">
                {featuredPartners.slice(0, 3).map((partner) => (
                  <FeaturedPartnerCard
                    key={partner.id}
                    partner={partner}
                    isPreview={!partner.publicDisplayApproved}
                  />
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* Standard partners — 3-column grid */}
          {standardPartners.length > 0 && (
            <ScrollReveal delayMs={150}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {standardPartners.map((partner) => (
                  <PartnerCard
                    key={partner.id}
                    partner={partner}
                    isPreview={!partner.publicDisplayApproved}
                  />
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* 04. Specialist Pathways */}
      <section id="specialist-pathways" className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)] relative overflow-hidden">
        <div className="ambient-glow-champagne absolute inset-0 pointer-events-none opacity-40" />

        <div className="container-editorial space-y-16 relative z-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="section-label flex items-center gap-2">
                    <span className="accent-blue-dot" />
                    Specialist Pathways
                  </span>
                  <TechnicalBadge variant="champagne">AUDIENCE FOCUS</TechnicalBadge>
                </div>

                <h2 className="text-display-section text-[var(--color-text-primary)] text-3xl sm:text-4xl font-bold leading-tight">
                  Career support is <br />
                  <CareerGradientText variant="gold">
                    not one-size-fits-all.
                  </CareerGradientText>
                </h2>

                <p className="text-body-editorial text-[var(--color-text-secondary)] leading-relaxed">
                  CareerOS builds bespoke partnership pathways for audiences with distinct career infrastructure requirements — from veterans translating military command to individuals navigating life barriers.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="space-y-4">
                  {SPECIALIST_PATHWAYS.map((pathway) => (
                    <div
                      key={pathway.id}
                      className="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] hover-lift space-y-4 transition-all duration-300"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--color-border-subtle)] pb-3">
                        <div className="flex items-center gap-2">
                          <TechnicalBadge variant="champagne">
                            {pathway.category}
                          </TechnicalBadge>
                          <span className="text-xs font-mono text-[var(--color-text-tertiary)] font-medium">
                            {pathway.subtitle}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-[#2F8FFF] font-semibold">
                          {pathway.partnerName}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div className="space-y-1 p-3 bg-[var(--color-surface-base)] rounded border border-[var(--color-border-subtle)]">
                          <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] font-bold">
                            Structural Challenge
                          </p>
                          <p className="text-[var(--color-text-secondary)] leading-relaxed">
                            {pathway.challenge}
                          </p>
                        </div>
                        <div className="space-y-1 p-3 bg-[var(--color-surface-base)] rounded border border-[var(--color-border-subtle)]">
                          <p className="text-[10px] font-mono uppercase tracking-wider text-[#34D399] font-bold">
                            Ecosystem Solution
                          </p>
                          <p className="text-[var(--color-text-primary)] leading-relaxed">
                            {pathway.solution}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {pathway.keyCapabilities.map((cap) => (
                          <span
                            key={cap}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-surface-warm)] text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)]"
                          >
                            &bull; {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 05. Ecosystem Journey: Learn, Verify, Connect */}
      <EcosystemJourney />

      {/* 06. Public Infrastructure */}
      <PublicResourcesSection />

      {/* 07. Selection Principles */}
      <PartnershipPrinciplesSection />

      {/* 08. Work With Us */}
      <PartnerWithUsSection />

      {/* 09. Transparency & Registers */}
      <section className="py-20 bg-[var(--color-surface-sunken)] border-t border-[var(--color-border-default)] relative overflow-hidden">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#2F8FFF]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#2F8FFF] font-bold">
                    Authoritative Register
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                  Transparency about <CareerGradientText variant="blue">data &amp; integrations.</CareerGradientText>
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
                  Partnerships and data integrations are strictly distinct. Our public Data Sources &amp; Integrations Register documents every external system CareerOS connects to, what data is exchanged, its provenance, and whether personal data is involved.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                <Link
                  href={ROUTES.LEGAL_DATA_SOURCES}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[#2F8FFF] hover:shadow-[0_0_16px_rgba(47,143,255,0.2)] transition-all rounded-[var(--radius-sm)] cursor-pointer group"
                >
                  <span>Data Sources Register</span>
                  <ExternalLink className="w-4 h-4 transform transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href={ROUTES.TRUST_COMPLIANCE}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-white bg-[var(--color-surface-warm)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border-strong)] transition-all rounded-[var(--radius-sm)] cursor-pointer"
                >
                  <span>Compliance &amp; Assurance</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
