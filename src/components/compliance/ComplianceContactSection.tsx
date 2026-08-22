'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Lock, 
  GraduationCap, 
  Briefcase, 
  Bot, 
  AlertTriangle, 
  Mail, 
  ArrowRight 
} from 'lucide-react';
import { ROUTES } from '@/lib/routes';

const CONTACT_CHANNELS = [
  {
    title: 'Security & Infrastructure Enquiries',
    description: 'Architecture reviews, SOC 2 requests, cloud security questionnaires, and infrastructure audits.',
    email: 'security@career-os.com',
    icon: ShieldCheck,
  },
  {
    title: 'Privacy & Data Protection Officer',
    description: 'FERPA data agreements, state privacy rights, DPA execution, and subprocessor inquiries.',
    email: 'privacy@career-os.com',
    icon: Lock,
  },
  {
    title: 'School & District Procurement',
    description: 'Institutional onboarding, student safeguarding reviews, and district-wide deployment terms.',
    email: 'schools@career-os.com',
    icon: GraduationCap,
  },
  {
    title: 'Enterprise & Employer Procurement',
    description: 'Enterprise master service agreements, vendor security assessments, and custom SLA contracting.',
    email: 'enterprise@career-os.com',
    icon: Briefcase,
  },
  {
    title: 'Responsible AI & Algorithmic Governance',
    description: 'ISO/IEC 42001 inquiries, algorithmic impact assessments, bias audit summaries, and model disclosures.',
    email: 'ai-governance@career-os.com',
    icon: Bot,
  },
  {
    title: 'Report a Security Vulnerability',
    description: 'Coordinated vulnerability disclosure channel for security researchers and ethical hackers (PGP available).',
    email: 'security-reports@career-os.com',
    icon: AlertTriangle,
  },
];

export function ComplianceContactSection() {
  return (
    <section id="compliance-contact" className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[var(--color-brand-300)]">
          <Mail className="w-3.5 h-3.5" />
          <span>DIRECT ASSURANCE & COMPLIANCE CHANNELS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
          Questions about security, privacy or compliance?
        </h2>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
          Our dedicated legal, security, and algorithmic governance teams are available to support district reviews, enterprise security questionnaires, and formal compliance inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CONTACT_CHANNELS.map((channel) => {
          const Icon = channel.icon;
          return (
            <div
              key={channel.title}
              className="p-5 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-sm bg-[var(--overlay-lift)] border border-[var(--color-border-default)] flex items-center justify-center text-[var(--color-brand-300)]">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                  {channel.title}
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {channel.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--color-border-subtle)]">
                <a
                  href={`mailto:${channel.email}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--accent-blue)] hover:text-[var(--color-brand-300)] font-medium transition-colors"
                >
                  <Mail className="w-3 h-3" />
                  <span>{channel.email}</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
