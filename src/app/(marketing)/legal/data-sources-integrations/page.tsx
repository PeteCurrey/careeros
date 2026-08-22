import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { getPublicIntegrationRegistry } from '@/lib/integrations/registry';
import { IntegrationCard } from '@/components/integrations/IntegrationCard';
import { IntegrationRegistryGroup } from '@/types/integrations';
import { Shield, Database, ArrowUpDown, AlertTriangle, ExternalLink, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Data Sources & Integrations | Legal | CareerOS',
  description: 'A public transparency register of every external data source, system integration, and third-party service used within CareerOS — including data provenance, personal data classification, and attribution requirements.',
  openGraph: {
    title: 'Data Sources & Integrations | CareerOS',
    description: 'Complete transparency about where CareerOS gets external information from, which external systems it connects to, and whether personal data is involved.',
    url: 'https://careeros.com/legal/data-sources-integrations',
    type: 'website',
  },
};

function SectionHeader({ group }: { group: IntegrationRegistryGroup }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-6 border-b border-[var(--color-border-default)]">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] tracking-tight">
            {group.groupLabel}
          </h2>
          {group.personalDataInvolved && (
            <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[var(--color-warning-light)] text-[var(--color-warning)] border border-[var(--color-warning)]/25">
              <Shield className="w-2.5 h-2.5" />
              Involves personal data
            </span>
          )}
        </div>
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
          {group.groupDescription}
        </p>
      </div>
      <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] shrink-0">
        {group.integrations.length} {group.integrations.length === 1 ? 'integration' : 'integrations'}
      </span>
    </div>
  );
}

export default async function DataSourcesIntegrationsPage() {
  const groups = await getPublicIntegrationRegistry();
  const totalIntegrations = groups.reduce((sum, g) => sum + g.integrations.length, 0);
  const personalDataGroups = groups.filter(g => g.personalDataInvolved).length;

  return (
    <main id="main-content" className="register-document">
      {/* Hero */}
      <section className="py-20 border-b border-[var(--color-border-default)] bg-[var(--color-background)]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <p className="section-label text-[var(--color-accent-primary)]">TRANSPARENCY · LEGAL</p>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.05]">
                  Data Sources &<br />
                  <span className="text-[var(--color-text-secondary)]">Integrations</span>
                </h1>
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-xl font-normal">
                  A complete public register of every external data source, system integration and third-party service CareerOS connects to — what data is involved, where it comes from, and how it is used.
                </p>
              </div>

              <div className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-sm space-y-2">
                <p className="text-xs font-semibold text-[var(--color-text-primary)]">Why this register exists</p>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  If external information influences a CareerOS recommendation, you should be able to understand where that information came from. No material externally-sourced fact should lose its provenance simply because an AI model has processed it. This register is a binding public commitment to that standard.
                </p>
              </div>

              {/* Key definitions */}
              <div className="space-y-3 pt-2">
                <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)]">Definitions used in this register</p>
                <div className="space-y-2">
                  {[
                    { term: 'Data source', definition: 'An external system that CareerOS pulls information from — occupational data, labor market signals, or public records.' },
                    { term: 'Integration', definition: 'A technical connection between CareerOS and a third-party service. May involve data flowing in, out, or both directions.' },
                    { term: 'Partnership', definition: 'A formal commercial or strategic relationship. Partnerships may involve integrations, but are governed separately. See the Partnerships page.' },
                    { term: 'Planned / Intended', definition: 'Integrations marked "Planned" or "Intended" are disclosed proactively. They are not live in production and do not yet exchange data.' },
                  ].map(({ term, definition }) => (
                    <div key={term} className="flex gap-3">
                      <span className="text-[10px] font-mono font-semibold text-[var(--color-accent-primary)] min-w-[110px] pt-px shrink-0">
                        {term}
                      </span>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                        {definition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats sidebar */}
            <div className="lg:col-span-5 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Database, label: 'Total integrations in register', value: String(totalIntegrations), sub: 'across all categories' },
                  { icon: Shield, label: 'Categories involving personal data', value: String(personalDataGroups), sub: 'of ' + groups.length + ' categories' },
                  { icon: ArrowUpDown, label: 'Bidirectional data flows', value: String(groups.flatMap(g => g.integrations).filter(i => i.dataDirection === 'bidirectional').length), sub: 'data flows both ways' },
                  { icon: AlertTriangle, label: 'Planned (not yet live)', value: String(groups.flatMap(g => g.integrations).filter(i => i.lifecycleStatus !== 'production').length), sub: 'disclosed proactively' },
                ].map(({ icon: Icon, label, value, sub }) => (
                  <div key={label} className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-sm space-y-2">
                    <Icon className="w-4 h-4 text-[var(--color-accent-primary)]" />
                    <div>
                      <p className="text-xl font-bold text-[var(--color-text-primary)] font-mono">{value}</p>
                      <p className="text-[9px] font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider leading-tight">{sub}</p>
                    </div>
                    <p className="text-[10px] text-[var(--color-text-tertiary)] leading-snug">{label}</p>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-sm">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] mb-3">Jump to section</p>
                <ul className="space-y-1.5">
                  {groups.map((group) => (
                    <li key={group.groupId}>
                      <a
                        href={`#${group.groupId}`}
                        className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors flex items-center gap-1.5"
                      >
                        {group.personalDataInvolved && <Shield className="w-2.5 h-2.5 text-[var(--color-warning)]" />}
                        {group.groupLabel}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Report a data issue */}
              <div className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-sm space-y-2">
                <p className="text-xs font-semibold text-[var(--color-text-primary)]">Report a data issue</p>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  If you believe information displayed on CareerOS is inaccurate, outdated, incorrectly attributed, or drawn from an undisclosed source — report it.
                </p>
                <Link
                  href={ROUTES.SUPPORT_REPORT_DATA}
                  className="inline-flex items-center gap-1.5 text-xs text-[var(--color-accent-primary)] hover:underline font-medium"
                >
                  Report a data inaccuracy →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Register sections */}
      <div className="bg-[var(--color-background)]">
        {groups.map((group, gIndex) => (
          <section
            key={group.groupId}
            id={group.groupId}
            className={`py-16 border-b border-[var(--color-border-default)] ${gIndex % 2 === 1 ? 'bg-[var(--color-surface-sunken)]' : 'bg-[var(--color-background)]'}`}
          >
            <div className="container-editorial space-y-6">
              <SectionHeader group={group} />
              <div className="space-y-3">
                {group.integrations.map((integration) => (
                  <IntegrationCard key={integration.id} integration={integration} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Provenance commitment */}
      <section className="py-20 bg-[var(--color-surface-sunken)] border-b border-[var(--color-border-default)]">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="space-y-4">
              <p className="section-label text-[var(--color-accent-primary)]">PROVENANCE COMMITMENTS</p>
              <h2 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
                How CareerOS handles information provenance.
              </h2>
            </div>

            <div className="space-y-0 divide-y divide-[var(--color-border-subtle)]">
              {[
                {
                  title: 'External data is always attributed',
                  detail: 'Where CareerOS displays information from an external source — occupational data, salary ranges, training programs, employer information — the source is disclosed at the point of display or in this register.',
                },
                {
                  title: 'AI does not erase provenance',
                  detail: 'When an AI model uses externally-sourced information to generate a recommendation, that provenance is preserved and accessible. We do not allow AI processing to launder the origin of material facts.',
                },
                {
                  title: 'Planned integrations are disclosed proactively',
                  detail: 'Integrations marked "Intended" or "Planned" are disclosed here before they become active. This allows users, regulators and institutional partners to review third-party relationships ahead of implementation.',
                },
                {
                  title: 'Personal data transfers are explicit',
                  detail: 'Every integration that involves personal data is classified and marked in this register. Personal data is transmitted only for the stated purpose, under appropriate contractual controls, and with required user consent.',
                },
                {
                  title: 'Integrations differ from partnerships',
                  detail: 'Not every data source is a commercial partner, and not every partner is an active integration. This register covers technical data flows. See the Partnerships & Ecosystem page for commercial and strategic relationships.',
                },
                {
                  title: 'This register is updated on change',
                  detail: 'When a new integration is added, modified, or retired, this register is updated. Major changes are noted in the Privacy Policy version history.',
                },
              ].map((item, i) => (
                <div key={i} className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-1">
                    <span className="text-sm font-mono font-bold text-[var(--color-text-tertiary)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="sm:col-span-11 space-y-1.5">
                    <h3 className="text-sm font-bold text-[var(--color-text-primary)]">{item.title}</h3>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: 'Privacy Policy',
                description: 'How CareerOS collects, uses and stores personal data.',
                href: ROUTES.LEGAL_PRIVACY,
                icon: FileText,
              },
              {
                label: 'Partnerships & Ecosystem',
                description: 'Strategic and commercial relationships.',
                href: ROUTES.COMPANY_PARTNERS,
                icon: ArrowUpDown,
              },
              {
                label: 'Sub-processors',
                description: 'Third-party processors handling personal data on our behalf.',
                href: ROUTES.LEGAL_SUBPROCESSORS,
                icon: Database,
              },
              {
                label: 'Compliance & Assurance',
                description: 'Security, privacy and regulatory certifications.',
                href: ROUTES.TRUST_COMPLIANCE,
                icon: Shield,
              },
            ].map(({ label, description, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="p-5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-sm hover:border-[var(--color-border-interactive)] transition-colors group"
              >
                <Icon className="w-4 h-4 text-[var(--color-accent-primary)] mb-3" />
                <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--color-accent-primary)] transition-colors">
                  {label}
                </p>
                <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">
                  {description}
                </p>
              </Link>
            ))}
          </div>

          {/* Bottom attribution */}
          <div className="mt-10 pt-8 border-t border-[var(--color-border-subtle)] space-y-3">
            <p className="text-[11px] text-[var(--color-text-tertiary)] leading-relaxed max-w-3xl">
              <strong className="text-[var(--color-text-secondary)]">O*NET® Attribution:</strong>{' '}
              This platform uses occupational information from O*NET® OnLine, sponsored by the U.S. Department of Labor, Employment and Training Administration. O*NET® is a trademark of USDOL/ETA. Use of O*NET information does not imply U.S. Department of Labor endorsement of CareerOS products or services.
            </p>
            <p className="text-[11px] text-[var(--color-text-tertiary)] leading-relaxed max-w-3xl">
              <strong className="text-[var(--color-text-secondary)]">CareerOneStop Attribution:</strong>{' '}
              CareerOS references CareerOneStop, sponsored by the U.S. Department of Labor, Employment and Training Administration. Reference to CareerOneStop does not imply endorsement by the U.S. Department of Labor.
            </p>
            <p className="text-[11px] text-[var(--color-text-tertiary)] leading-relaxed max-w-3xl">
              Questions about this register? <a href="mailto:privacy@careeros.com" className="text-[var(--color-accent-primary)] hover:underline">privacy@careeros.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
