'use client';

import React from 'react';
import {
  Compass,
  Layers,
  ArrowRight,
  GitBranch,
  CheckCircle2,
  Wrench,
  Cpu,
  Shield,
  Briefcase,
} from 'lucide-react';

export function TalentGraphVisual() {
  const adjacentRoles = [
    {
      title: 'Field Service Technician',
      overlap: 'Rapid fault diagnosis & customer-site autonomy',
      bridge: 'Fixed facility continuous planning',
    },
    {
      title: 'Industrial Maintenance Tech',
      overlap: 'Direct PLC, hydraulic, and machinery upkeep',
      bridge: 'Departmental leadership breadth',
    },
    {
      title: 'Automotive Diagnostics',
      overlap: 'High-voltage circuitry & systematic telemetry triage',
      bridge: 'Industrial factory safety standards (PUWER)',
    },
    {
      title: 'Military Technical Engineer',
      overlap: 'Mission-critical maintenance & procedural discipline',
      bridge: 'Commercial P&L and supplier context',
    },
  ];

  return (
    <div className="w-full p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-8">
      <div className="space-y-2 max-w-2xl">
        <span className="text-xs font-mono uppercase tracking-wider text-[#2F8FFF] font-semibold flex items-center gap-1.5">
          <GitBranch className="w-3.5 h-3.5" />
          Career Graph Topology
        </span>
        <h3 className="text-xl sm:text-2xl font-serif font-normal text-white">
          Mapping Transferable Competence Across Disciplines
        </h3>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
          When an employer seeks a specific capability set, Career Graph traverses functional relationships across hundreds of occupational nodes, identifying candidates whose working evidence connects to the role.
        </p>
      </div>

      {/* Structural Visual Topology Diagram */}
      <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-6">
        {/* Step 1: Role Brief */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 rounded bg-[var(--color-surface-raised)] border border-[rgba(47,143,255,0.18)]">
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono text-[#2F8FFF] uppercase">Target Brief</span>
            <h4 className="font-bold text-sm text-white">Senior Maintenance Engineer</h4>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] font-mono text-[var(--color-taupe-300)]">
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Diagnostics</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Electromechanical</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Safety</span>
          </div>
        </div>

        {/* Arrow Divider */}
        <div className="flex items-center justify-center">
          <div className="px-3 py-1 rounded-full bg-[rgba(47,143,255,0.07)] border border-[rgba(47,143,255,0.18)] text-[10px] font-mono text-[#6BB8FF]">
            &darr; Traversed via Career Graph Functional Ontology
          </div>
        </div>

        {/* Adjacent Backgrounds Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {adjacentRoles.map((role) => (
            <div
              key={role.title}
              className="p-4 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[var(--color-taupe-400)] uppercase block">
                  Surfaced Node
                </span>
                <h5 className="font-bold text-xs sm:text-sm text-white">{role.title}</h5>
                <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed pt-1">
                  {role.overlap}
                </p>
              </div>
              <div className="pt-2 border-t border-[var(--color-border-subtle)] text-[10px] font-mono text-amber-400">
                Bridge: {role.bridge}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-xs text-[var(--color-text-tertiary)] flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-[#2F8FFF] shrink-0" />
        <span>
          Career Graph clarifies connections. It does not imply that every candidate with a transferable skill is automatically qualified.
        </span>
      </div>
    </div>
  );
}
