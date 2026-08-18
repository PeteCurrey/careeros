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
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Partnerships & Ecosystem | CareerOS',
  description: 'CareerOS connects people with the organisations, opportunities, learning and human support needed to move careers forward. No single platform can build a career alone.',
  openGraph: {
    title: 'Partnerships & Ecosystem | CareerOS',
    description: 'CareerOS acts as the intelligent connective layer between the individual and the organisations already excellent at particular parts of the career journey.',
    url: 'https://careeros.com/company/partners',
    type: 'website',
  },
};

export default async function PartnersPage() {
  // Fetch ecosystem partners — in dev shows all intended, in production only approved
  const isProduction = process.env.NODE_ENV === 'production';
  const partners = await getEcosystemPartners({ preview: !isProduction });
  const featuredPartners = partners.filter((p) => p.featured);
  const standardPartners = partners.filter((p) => !p.featured);

  const hasUnapprovedPartners = partners.some((p) => !p.publicDisplayApproved);

  return (
    <main id="main-content">
      <PartnersHero />

      {/* Intent notice — dev/staging only */}
      {hasUnapprovedPartners && (
        <div className="bg-amber-500/8 border-b border-amber-500/20 py-3">
          <div className="container-editorial">
            <p className="text-xs text-amber-600 font-mono leading-relaxed">
              <strong>Editor preview:</strong> Partnership organisations shown below represent intended ecosystem relationships that are not yet formally agreed. None of these organisations have approved public display or logo use. All partner content below is pre-launch editorial intent only and will not render in production until explicitly approved.
            </p>
          </div>
        </div>
      )}

      {/* Section 1: Why we partner */}
      <section id="why-we-partner" className="py-28 bg-[var(--color-background)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <p className="section-label text-[var(--color-accent-primary)]">PHILOSOPHY</p>
              <h2 className="text-4xl font-bold tracking-tight text-[var(--color-text-primary)] leading-tight">
                No single platform<br /> can build a career alone.
              </h2>
              <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                CareerOS is not trying to replace the career ecosystem. It is building the intelligent connective layer that finally makes the ecosystem work.
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Workforce boards, learning providers, credentialing networks, employer ecosystems, wellbeing services, and public federal infrastructure — each excels at a specific part of the career journey. CareerOS connects individuals to the right node at the right moment, with their evidence-backed story already built.
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                This is not a logo page. These are the organisations that will make CareerOS meaningful in practice — and the standards by which every relationship is governed.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {/* Ecosystem categories grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { label: 'Workforce Boards', description: 'Regional opportunity access' },
                  { label: 'Education & Learning', description: 'Accredited skill development' },
                  { label: 'Credentialing', description: 'Tamper-proof verification' },
                  { label: 'Employer Networks', description: 'Aligned hiring ecosystems' },
                  { label: 'Wellbeing Support', description: 'Clinical human pathways' },
                  { label: 'Public Infrastructure', description: 'Federal & state data systems' },
                  { label: 'Specialist Pathways', description: 'Veterans, youth, transitions' },
                  { label: 'Labour Market Data', description: 'Real-time demand intelligence' },
                  { label: 'Career Support', description: 'Whole-person services' },
                ].map((cat) => (
                  <div
                    key={cat.label}
                    className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-sm"
                  >
                    <p className="text-xs font-semibold text-[var(--color-text-primary)] mb-1">
                      {cat.label}
                    </p>
                    <p className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
                      {cat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Featured strategic partners */}
      <section id="strategic-partners" className="py-28 bg-[var(--color-surface-sunken)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="space-y-4">
            <p className="section-label text-[var(--color-accent-primary)]">ECOSYSTEM PARTNERSHIPS</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Strategic ecosystem relationships.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              CareerOS is building formal partnerships with organisations that lead their respective sectors. Each relationship is governed by our five partnership principles and subject to ongoing compliance review.
            </p>
          </div>

          {/* Featured partners — large cards */}
          {featuredPartners.length > 0 && (
            <div className="space-y-4">
              {featuredPartners.slice(0, 3).map((partner) => (
                <FeaturedPartnerCard
                  key={partner.id}
                  partner={partner}
                  isPreview={!partner.publicDisplayApproved}
                />
              ))}
            </div>
          )}

          {/* Standard partners — grid */}
          {standardPartners.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              {standardPartners.map((partner) => (
                <PartnerCard
                  key={partner.id}
                  partner={partner}
                  isPreview={!partner.publicDisplayApproved}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Section 3: Specialist pathways */}
      <section id="specialist-pathways" className="py-28 bg-[var(--color-background)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-5">
              <p className="section-label text-[var(--color-accent-primary)]">SPECIALIST PATHWAYS</p>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
                Career support is not one-size-fits-all.
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                CareerOS builds specialist partnership pathways for audiences with distinct career infrastructure requirements — from veterans navigating civilian translation to individuals facing structural barriers to opportunity.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-0 divide-y divide-[var(--color-border-subtle)]">
                {SPECIALIST_PATHWAYS.map((pathway) => (
                  <div key={pathway.id} className="py-7 grid grid-cols-1 sm:grid-cols-12 gap-6">
                    <div className="sm:col-span-3 space-y-1">
                      <p className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-accent-primary)] mb-1">
                        {pathway.category}
                      </p>
                      <p className="text-xs font-bold text-[var(--color-text-primary)]">
                        {pathway.audience}
                      </p>
                      <p className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
                        {pathway.subtitle}
                      </p>
                    </div>
                    <div className="sm:col-span-9 space-y-3">
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] mb-1">Challenge</p>
                        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                          {pathway.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] mb-1">Solution</p>
                        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                          {pathway.solution}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {pathway.keyCapabilities.map((cap) => (
                          <span
                            key={cap}
                            className="text-[9px] font-mono px-1.5 py-0.5 rounded-sm bg-[var(--color-surface-raised)] text-[var(--color-text-tertiary)] border border-[var(--color-border-subtle)]"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                      <p className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
                        Ecosystem partner: <span className="text-[var(--color-text-secondary)]">{pathway.partnerName}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Ecosystem journey */}
      <EcosystemJourney />

      {/* Section 5: Public infrastructure */}
      <PublicResourcesSection />

      {/* Section 6: Partnership principles */}
      <PartnershipPrinciplesSection />

      {/* Section 7: Partner with us */}
      <PartnerWithUsSection />

      {/* Section 8: Transparency links */}
      <section className="py-16 bg-[var(--color-surface-sunken)] border-t border-[var(--color-border-default)]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                Transparency about data and integrations.
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Partnerships and data integrations are distinct. Our public Data Sources & Integrations Register documents every external system CareerOS connects to, what data is exchanged, its provenance, and whether personal data is involved.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <Link
                href={ROUTES.LEGAL_DATA_SOURCES}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[var(--color-text-primary)] border border-[var(--color-border-default)] hover:border-[var(--color-border-interactive)] transition-colors rounded-sm"
              >
                Data Sources & Integrations Register
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <Link
                href={ROUTES.TRUST_COMPLIANCE}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border-default)] transition-colors rounded-sm"
              >
                Compliance & Assurance
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
