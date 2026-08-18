'use client';

import React from 'react';
import Link from 'next/link';
import { ComplianceFramework } from '@/types/compliance';
import { ComplianceStatusBadge } from './ComplianceStatusBadge';
import { Shield, ShieldAlert, Cpu, Eye, RefreshCw, Lock, Terminal } from 'lucide-react';
import { ROUTES } from '@/lib/routes';

interface CybersecurityResilienceSectionProps {
  framework?: ComplianceFramework;
}

const NIST_FUNCTIONS = [
  {
    code: 'GV',
    name: 'Govern',
    description: 'Organizational context, cybersecurity risk management strategy, roles and responsibilities, and supply-chain risk governance.',
    controls: ['Executive ISMS oversight', 'Vendor risk assessment matrix', 'Annual external policy reviews'],
  },
  {
    code: 'ID',
    name: 'Identify',
    description: 'Comprehensive discovery and management of technical assets, cloud resources, data classifications, and vulnerability vectors.',
    controls: ['Automated cloud asset inventory', 'Data flow mapping', 'Threat modeling of AI components'],
  },
  {
    code: 'PR',
    name: 'Protect',
    description: 'Safeguards to prevent or reduce cybersecurity risk, including access control, data encryption, and resilient engineering.',
    controls: ['TLS 1.3 & AES-256 KMS encryption', 'PostgreSQL Row Level Security', 'Admin WebAuthn MFA enforcement'],
  },
  {
    code: 'DE',
    name: 'Detect',
    description: 'Continuous observability, telemetry ingestion, and threat detection to identify anomalous activity and unauthorized access.',
    controls: ['Centralized security logging', 'Edge DDoS and rate-limit triggers', 'Automated dependency CVE alerting'],
  },
  {
    code: 'RS',
    name: 'Respond',
    description: 'Structured, tested incident response plans, triage protocols, containment runbooks, and regulatory breach notification workflows.',
    controls: ['Documented 72-hour breach SLA', 'Isolated containment runbooks', 'Forensic audit trail preservation'],
  },
  {
    code: 'RC',
    name: 'Recover',
    description: 'Restoration of systems and data, automated point-in-time database backups, failover redundancy, and lessons learned reviews.',
    controls: ['Continuous point-in-time recovery', 'Multi-AZ cloud redundancy', 'Blameless post-incident reviews'],
  },
];

export function CybersecurityResilienceSection({ framework }: CybersecurityResilienceSectionProps) {
  return (
    <section id="cybersecurity" className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#6BB8FF]">
            <Shield className="w-3.5 h-3.5" />
            <span>OPERATIONAL RESILIENCE & CYBER DEFENSE</span>
          </div>
          {framework && <ComplianceStatusBadge framework={framework} />}
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
          Cybersecurity & operational resilience
        </h2>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
          Our security engineering architecture is aligned with the <span className="text-white font-semibold">NIST Cybersecurity Framework 2.0</span>, providing a systematic approach to risk reduction, continuous detection, and rapid incident recovery.
        </p>
      </div>

      {/* 6 NIST CSF 2.0 Function Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {NIST_FUNCTIONS.map((func) => (
          <div
            key={func.name}
            className="p-5 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-colors space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-[#6BB8FF]">
                {func.code}
              </span>
              <span className="font-mono text-[10px] uppercase text-[var(--color-text-tertiary)]">
                NIST CSF 2.0
              </span>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                {func.name}
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                {func.description}
              </p>
            </div>

            <div className="pt-2 border-t border-[var(--color-border-subtle)] space-y-1">
              <span className="text-[10px] font-mono uppercase text-[var(--color-text-tertiary)]">
                Platform Controls:
              </span>
              <ul className="space-y-1">
                {func.controls.map((ctrl) => (
                  <li key={ctrl} className="text-[11px] text-[var(--color-text-secondary)] flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#34D399]" />
                    <span>{ctrl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs pt-1">
        <span className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
          Inspect deeper infrastructure and database protection controls:
        </span>
        <Link href={ROUTES.TRUST_SECURITY} className="text-[#6BB8FF] hover:underline font-medium">
          CareerOS Security Controls &rarr;
        </Link>
      </div>
    </section>
  );
}
