import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { Mail, Globe, MessageSquare, Building2, ArrowRight } from 'lucide-react';
import { CareerPathwayConnector } from '@/components/brand/CareerPathwayConnector';
import { CareerAtmosphere } from '@/components/brand/CareerAtmosphere';
import { CareerGradientText } from '@/components/brand/CareerGradientText';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';
import { ScrollReveal } from '@/components/brand/ScrollReveal';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact & Institutional Access | Career OS",
  description: "Reach the Career OS team for school district partnerships, employer agent access, press inquiries, or general support.",
  alternates: {
    canonical: "https://career-os.com/company/contact",
  },
};

export default function ContactPage() {
  const contactChannels = [
    {
      icon: Building2,
      badge: "EDUCATION",
      badgeVariant: "blue" as const,
      title: "School & District Enquiries",
      description: "Explore district partnerships, data protection agreements, and institutional guidance counsellor deployments.",
      email: "schools@career-os.com",
    },
    {
      icon: Globe,
      badge: "ENTERPRISE",
      badgeVariant: "champagne" as const,
      title: "Enterprise & Employer Enquiries",
      description: "Employer Agent access, verified credential pipelines, and capability-first talent matching arrangements.",
      email: "enterprise@career-os.com",
    },
    {
      icon: MessageSquare,
      badge: "EDITORIAL",
      badgeVariant: "lavender" as const,
      title: "Press & Media",
      description: "Press releases, technical briefing requests, embargoed announcements, and leadership interviews.",
      email: "press@career-os.com",
    },
    {
      icon: Mail,
      badge: "GENERAL",
      badgeVariant: "neutral" as const,
      title: "General & Individual Support",
      description: "Account assistance, data sovereignty inquiries, accessibility feedback, and general questions.",
      email: "hello@career-os.com",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--color-surface-base)] text-[var(--color-text-primary)]">
      {/* ── 01. Hero Header ── */}
      <section className="relative overflow-hidden pt-20 pb-20 border-b border-[var(--color-border-default)] bg-[var(--background-dark-deep)]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <CareerAtmosphere className="absolute inset-0" intensity={0.4} animate={false} />
        </div>
        <CareerPathwayConnector variant="cross-section" className="opacity-15" />

        <div className="container-editorial relative z-10 space-y-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="section-label flex items-center gap-2">
              <span className="accent-blue-dot accent-blue-dot-pulse" />
              Company &bull; Communication Channels
            </span>
            <TechnicalBadge variant="blue">DIRECT ACCESS</TechnicalBadge>
          </div>

          <h1 className="text-display-hero font-serif font-normal tracking-tight text-white leading-[1.08]">
            Get in touch with the{' '}
            <CareerGradientText variant="blue">
              Career OS team.
            </CareerGradientText>
          </h1>

          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
            Whether you are a school district exploring student career readiness, an employer seeking capability-first discovery, or an individual user with questions — reach the right team directly.
          </p>
        </div>
      </section>

      {/* ── 02. Channels Grid ── */}
      <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-editorial space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {contactChannels.map((channel, idx) => {
              const Icon = channel.icon;
              return (
                <ScrollReveal key={channel.title} delayMs={idx * 80}>
                  <div className="p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[#2F8FFF]/40 transition-all duration-300 space-y-5 hover-lift card-interactive flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-[var(--radius-card)] flex items-center justify-center bg-white/5 border border-white/10 text-[#2F8FFF]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <TechnicalBadge variant={channel.badgeVariant}>
                          {channel.badge}
                        </TechnicalBadge>
                      </div>

                      <h3 className="text-lg font-bold text-white">
                        {channel.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {channel.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[var(--color-border-subtle)]">
                      <a
                        href={`mailto:${channel.email}`}
                        className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#6BB8FF] hover:underline"
                      >
                        <span>{channel.email}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 03. Institutional Links ── */}
      <section className="py-16 bg-[var(--background-dark-deep)] text-[var(--color-text-primary)] border-t border-[var(--color-border-default)]">
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="space-y-1">
            <h4 className="text-lg font-normal text-white">
              Institutional Governance &amp; Security
            </h4>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Review our compliance standards, data protection agreements, and safeguards.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={ROUTES.LEGAL} variant="secondary" size="sm">
              Legal Centre &rarr;
            </Button>
            <Button href={ROUTES.TRUST_SECURITY} variant="secondary" size="sm">
              Security Architecture &rarr;
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
