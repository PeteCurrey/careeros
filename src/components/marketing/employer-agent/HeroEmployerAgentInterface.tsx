'use client';

import React from 'react';
import {
  Wrench,
  ShieldCheck,
  Layers,
  ArrowRight,
  Sparkles,
  Cpu,
  Compass,
  CheckCircle2,
  AlertCircle,
  Building2,
  FileCheck,
  GitBranch,
} from 'lucide-react';

export function HeroEmployerAgentInterface() {
  const candidatePathways = [
    {
      title: 'Industrial Maintenance Technician',
      origin: 'Manufacturing Plants',
      overlap: 'High electromechanical & PLC diagnostic overlap',
      status: 'Potentially relevant profile',
      bridge: 'Team leadership scale',
      tag: 'Direct Sector Adjacent',
    },
    {
      title: 'Automotive Diagnostic Technician',
      origin: 'Fleet & High-Voltage Workshops',
      overlap: 'Advanced electrical fault-finding & sensory diagnostics',
      status: 'Potentially relevant profile',
      bridge: 'Industrial safety standard (e.g. ISO 14120)',
      tag: 'Transferable Discipline',
    },
    {
      title: 'Field Service Engineer',
      origin: 'Specialist Machinery Vendors',
      overlap: 'Rapid root-cause triage & autonomous site operations',
      status: 'Potentially relevant profile',
      bridge: 'Fixed facility continuous planning',
      tag: 'Operational Adjacent',
    },
    {
      title: 'Military Technical Engineer',
      origin: 'Defense Logistics & Air Corps',
      overlap: 'Mission-critical maintenance, safety culture & team oversight',
      status: 'Potentially relevant profile',
      bridge: 'Commercial plant regulatory context',
      tag: 'High-Accountability Transfer',
    },
  ];

  return (
    <div className="w-full bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-subtle text-[var(--color-text-primary)] font-sans border-beam-container border-beam-reverse">
      {/* Interface Window Bar */}
      <div className="px-4 py-3 bg-[var(--color-surface-sunken)]/60 backdrop-blur-sm border-b border-[var(--color-border-default)] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--color-text-secondary)]">
          <span className="w-2 h-2 rounded-full bg-[#2F8FFF] shadow-[0_0_6px_rgba(47,143,255,0.7)]" />
          <span className="font-semibold text-white">CAREER OS &bull; EMPLOYER AGENT</span>
          <span className="text-[var(--color-text-tertiary)] hidden sm:inline">| Capability Decomposition Engine</span>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 text-[var(--color-taupe-300)] text-[10px] font-mono border border-white/10">
          <Sparkles className="w-3 h-3 text-[#2F8FFF]" />
          Illustrative Employer Agent Concept
        </span>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* Role Brief Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-6 border-b border-[var(--color-border-default)]">
          <div className="lg:col-span-7 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[rgba(47,143,255,0.07)] text-[#6BB8FF] border border-[rgba(47,143,255,0.18)] text-[10px] font-mono uppercase tracking-wider font-semibold">
                Target Role Definition
              </span>
              <span className="text-xs font-mono text-[var(--color-text-tertiary)]">
                REQ-2026-ENG-084
              </span>
            </div>
            <h3 className="text-2xl font-serif font-normal text-white">
              Senior Maintenance Engineer
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
              <strong className="text-white">Role Outcome:</strong> Ensure 99.4% plant uptime, lead precision fault diagnostics across electro-mechanical lines, and maintain compliance with statutory machinery safety standards.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-1">
              <span className="text-[10px] font-mono uppercase text-[var(--color-text-tertiary)] block">
                Non-Negotiable Criteria
              </span>
              <span className="font-semibold text-white block text-xs">
                NVQ Level 3 / City &amp; Guilds or Equivalent
              </span>
              <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
                <CheckCircle2 className="w-3 h-3" /> Mandatory License
              </span>
            </div>
            <div className="p-3 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-1">
              <span className="text-[10px] font-mono uppercase text-[var(--color-text-tertiary)] block">
                Work Arrangement
              </span>
              <span className="font-semibold text-white block text-xs">
                On-site &bull; Continental Shift
              </span>
              <span className="text-[11px] text-[var(--color-taupe-300)] font-mono">
                Advanced Safety Protocol
              </span>
            </div>
          </div>
        </div>

        {/* Structured Capability & Evidence Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#6BB8FF] font-semibold flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" /> Required Capabilities
            </span>
            <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
              <li className="flex items-center gap-1.5 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F8FFF]" />
                Root-cause electromechanical diagnostics
              </li>
              <li className="flex items-center gap-1.5 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F8FFF]" />
                PLC / Automation fault isolation
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                Preventative maintenance scheduling
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                Shift handoff &amp; technical logging
              </li>
            </ul>
          </div>

          <div className="p-4 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-semibold flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5" /> High-Signal Evidence
            </span>
            <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
              <li className="flex items-center gap-1.5 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Verified equipment maintenance logs
              </li>
              <li className="flex items-center gap-1.5 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Statutory electrical sign-off history
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                Downtime reduction project artifacts
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                Apprenticeship capstone portfolio
              </li>
            </ul>
          </div>

          <div className="p-4 bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-semibold flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" /> Career Graph Discovery
            </span>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Evaluating cross-industry candidate clusters with transferable diagnostic competence beneath differing legacy job titles.
            </p>
            <div className="text-[11px] font-mono text-[var(--color-taupe-300)] pt-1">
              4 distinct pathways identified
            </div>
          </div>
        </div>

        {/* Converging Career Graph Pathways (No Ranking / Scores) */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] flex items-center gap-2">
              <GitBranch className="w-3.5 h-3.5 text-[#2F8FFF]" />
              Surfaced Professional Clusters &bull; Qualitative Discovery
            </span>
            <span className="text-[11px] font-mono text-[var(--color-taupe-300)]">
              No Automated Ranking
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {candidatePathways.map((p, idx) => (
              <div
                key={p.title}
                className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] hover:border-white/20 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1.5">
                  <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/5 text-[var(--color-taupe-300)] border border-white/10 inline-block">
                    {p.tag}
                  </span>
                  <h4 className="font-bold text-sm text-white leading-snug">
                    {p.title}
                  </h4>
                  <p className="text-[11px] text-[var(--color-text-tertiary)]">
                    Origin: {p.origin}
                  </p>
                  <p className="text-xs text-[var(--color-text-secondary)] pt-1 leading-relaxed">
                    {p.overlap}
                  </p>
                </div>

                <div className="pt-2 border-t border-[var(--color-border-subtle)] space-y-1 text-[11px] font-mono">
                  <div className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 shrink-0" />
                    <span>{p.status}</span>
                  </div>
                  <div className="text-[var(--color-taupe-400)] flex items-center gap-1">
                    <span className="text-amber-400">&bull;</span> Bridge: {p.bridge}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-3 border-t border-[var(--color-border-default)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[var(--color-text-tertiary)]">
          <span className="italic">
            Employer Agent illuminates transferable evidence and clarifies bridge requirements. Human hiring teams retain all evaluation authority.
          </span>
          <span className="font-mono text-[11px] text-[var(--color-taupe-300)] shrink-0">
            Explainable &bull; Non-Deterministic &bull; Privacy-Preserved
          </span>
        </div>
      </div>
    </div>
  );
}
