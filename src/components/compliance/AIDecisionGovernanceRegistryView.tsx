'use client';

import React, { useState } from 'react';
import { AIDecisionSystem } from '@/types/compliance';
import { 
  Bot, 
  Briefcase, 
  Eye, 
  Scale, 
  ShieldAlert, 
  CheckCircle2, 
  FileText, 
  ExternalLink, 
  UserCheck, 
  AlertTriangle,
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Link from 'next/link';

interface AIDecisionGovernanceRegistryViewProps {
  systems: AIDecisionSystem[];
}

export function AIDecisionGovernanceRegistryView({ systems }: AIDecisionGovernanceRegistryViewProps) {
  const [selectedSystemId, setSelectedSystemId] = useState<string | null>(systems[0]?.id || null);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const selectedSystem = systems.find((s) => s.id === selectedSystemId) || systems[0];

  return (
    <section id="employment-ai" className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#6BB8FF]">
          <Briefcase className="w-3.5 h-3.5" />
          <span>STATUTORY AI REGULATION & CONSEQUENTIAL DECISIONS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
          AI in employment and consequential decisions
        </h2>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
          CareerOS is engineered from the ground up for jurisdiction-specific regulation of AI and automated decision-making. We maintain a public <span className="text-white font-semibold">AI Decision Governance Registry</span> ensuring full compliance with NYC Local Law 144, Illinois AIVA, and Colorado SB 24-205 consequential decision-making regimes.
        </p>
      </div>

      {/* Statutory Framework Badges Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-[#6BB8FF]">NYC Local Law 144</span>
            <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30">
              AEDT Audited
            </span>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            Annual independent bias audit, public audit summary publication, 10-day candidate notice, and mandatory human recruiter review prior to any hiring decision.
          </p>
        </div>

        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-[#6BB8FF]">Illinois AIVA (820 ILCS 42/)</span>
            <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30">
              Compliant
            </span>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            Pre-analysis disclosure, affirmative candidate consent, demographic reporting, zero facial recognition analysis, and 30-day candidate data deletion.
          </p>
        </div>

        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-[#6BB8FF]">Colorado SB 24-205</span>
            <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30">
              ADM Ready
            </span>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            Consequential decision governance in employment/education, risk management policy, adverse outcome explanation, data correction, and human appeal.
          </p>
        </div>
      </div>

      {/* Interactive AI Decision Governance Registry */}
      <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden space-y-0">
        <div className="p-4 border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[var(--color-surface-sunken)]">
          <div>
            <h3 className="text-sm font-bold text-[var(--color-text-primary)] font-mono uppercase tracking-wide">
              Live AI Decision Governance Registry ({systems.length} Systems Enrolled)
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Inspect technical provenance, model providers, decision types, bias audits, and human oversight boundaries.
            </p>
          </div>

          <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase px-2 py-1 rounded bg-white/5 border border-white/5">
            ISO/IEC 42001 &bull; AIMS Registry
          </span>
        </div>

        {/* Systems Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
              <tr>
                <th className="p-3">System ID & Name</th>
                <th className="p-3">Model & Provider</th>
                <th className="p-3">Decision Classification</th>
                <th className="p-3">Role</th>
                <th className="p-3">Human Review</th>
                <th className="p-3">Bias Audit</th>
                <th className="p-3 text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-subtle)]">
              {systems.map((system) => {
                const isSelected = selectedSystemId === system.id;
                const isConsequential = system.decisionType === 'consequential';

                return (
                  <React.Fragment key={system.id}>
                    <tr
                      onClick={() => setSelectedSystemId(system.id)}
                      className={`cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-white/5 border-l-2 border-l-[#2F8FFF]'
                          : 'hover:bg-[var(--color-surface-interactive)]'
                      }`}
                    >
                      <td className="p-3">
                        <div className="font-mono text-[11px] text-[#6BB8FF] font-bold">
                          {system.systemId}
                        </div>
                        <div className="font-semibold text-white mt-0.5">
                          {system.systemName}
                        </div>
                      </td>

                      <td className="p-3">
                        <div className="text-[var(--color-text-primary)]">
                          {system.modelName}
                        </div>
                        <div className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
                          {system.modelProvider}
                        </div>
                      </td>

                      <td className="p-3">
                        <span
                          className={`font-mono text-[10px] uppercase px-1.5 py-0.5 rounded border ${
                            isConsequential
                              ? 'bg-[#FBBF24]/10 text-[#FBBF24] border-[#FBBF24]/30'
                              : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-secondary)] border-[var(--color-border-subtle)]'
                          }`}
                        >
                          {system.decisionType}
                        </span>
                      </td>

                      <td className="p-3 font-mono text-[10px] uppercase text-[var(--color-text-secondary)]">
                        {system.developerOrDeployerRole}
                      </td>

                      <td className="p-3">
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] text-[#34D399]">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{system.humanReviewRequired ? 'Mandatory' : 'Optional'}</span>
                        </span>
                      </td>

                      <td className="p-3">
                        {system.biasAuditRequired ? (
                          <span className="font-mono text-[10px] text-[#34D399] uppercase bg-[#34D399]/10 px-1.5 py-0.5 rounded border border-[#34D399]/30">
                            Audited ({system.biasAuditDate ? new Date(system.biasAuditDate).getFullYear() : 'Annual'})
                          </span>
                        ) : (
                          <span className="font-mono text-[10px] text-[var(--color-text-tertiary)]">
                            Not Required
                          </span>
                        )}
                      </td>

                      <td className="p-3 text-right">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedSystemId(system.id);
                            setExpandedRow(expandedRow === system.id ? null : system.id);
                          }}
                          className="text-[#6BB8FF] hover:underline font-mono text-[11px]"
                        >
                          {expandedRow === system.id ? 'Hide' : 'Inspect'}
                        </button>
                      </td>
                    </tr>

                    {/* Expandable Deep Technical Drawer */}
                    {expandedRow === system.id && (
                      <tr className="bg-[var(--color-surface-sunken)]">
                        <td colSpan={7} className="p-5 border-t border-[var(--color-border-subtle)] space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                            <div className="space-y-1.5">
                              <span className="font-mono text-[10px] uppercase text-[var(--color-text-tertiary)]">
                                Purpose & System Objective:
                              </span>
                              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                {system.purpose}
                              </p>
                            </div>

                            <div className="space-y-1.5">
                              <span className="font-mono text-[10px] uppercase text-[var(--color-text-tertiary)]">
                                Statutory Jurisdictions:
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {system.jurisdictions.map((j) => (
                                  <span
                                    key={j}
                                    className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-white"
                                  >
                                    {j}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-1.5">
                              <span className="font-mono text-[10px] uppercase text-[var(--color-text-tertiary)]">
                                Data Retention Rule:
                              </span>
                              <p className="text-[var(--color-text-secondary)] font-mono text-[11px]">
                                {system.dataRetentionRule}
                              </p>
                            </div>
                          </div>

                          {system.knownLimitations && system.knownLimitations.length > 0 && (
                            <div className="space-y-1 pt-2 border-t border-[var(--color-border-subtle)]">
                              <span className="font-mono text-[10px] uppercase text-[var(--color-text-tertiary)] flex items-center gap-1">
                                <AlertTriangle className="w-3 h-3 text-[#FBBF24]" />
                                <span>Known Technical Boundaries & Limitations:</span>
                              </span>
                              <ul className="space-y-1 pl-4 list-disc text-xs text-[var(--color-text-secondary)]">
                                {system.knownLimitations.map((lim, idx) => (
                                  <li key={idx}>{lim}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {system.noticeTemplate && (
                            <div className="p-3 rounded-md bg-black/30 border border-[var(--color-border-subtle)] font-mono text-[11px] text-[var(--color-text-secondary)] space-y-1">
                              <span className="text-[10px] uppercase text-[#6BB8FF] block">
                                Consumer & Candidate Notice Disclosure Template:
                              </span>
                              <p className="italic">"{system.noticeTemplate}"</p>
                            </div>
                          )}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
