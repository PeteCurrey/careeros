'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, TrendingUp, Shield, Truck, Wrench } from 'lucide-react';

export function CareerChangeStories() {
  const stories = [
    {
      id: 'fire-to-safety',
      icon: Shield,
      from: 'Fire Station Incident Commander',
      to: 'Director of Health, Safety & Environment (HSE)',
      sector: 'Infrastructure & Construction',
      summary: 'Transitioned 12 years of emergency incident response and high-risk team leadership into executive corporate safety leadership.',
      existing: [
        'Dynamic risk assessment under volatile conditions',
        'Incident command and root-cause post-mortem analysis',
        'Regulatory safety auditing and building code enforcement',
        'Crisis team leadership and psychological resilience',
      ],
      bridge: [
        'NEBOSH National Diploma in Occupational Health & Safety',
        'Corporate environmental reporting and ESG statutory compliance exposure',
        'Commercial contractor procurement and insurance underwriting language',
      ],
      outcome: 'Secured Director-level role at a national infrastructure project. The employer explicitly favored frontline emergency command credibility over pure academic compliance backgrounds.',
    },
    {
      id: 'military-to-ops',
      icon: Truck,
      from: 'Military Logistics Officer (Armed Forces)',
      to: 'Head of Global Fulfillment Operations',
      sector: 'E-Commerce & Supply Chain',
      summary: 'Repurposed austere multimodal transport and high-accountability asset management into global e-commerce supply chain leadership.',
      existing: [
        'Multimodal transport coordination across contested zones',
        'Zero-loss asset governance covering $40M+ in mission gear',
        'High-pressure personnel leadership and welfare accountability',
        'Contingency fallback routing during catastrophic supply disruption',
      ],
      bridge: [
        'Enterprise Resource Planning (ERP) systems (SAP S/4HANA Supply Chain)',
        'Commercial procurement contracting and carrier SLA negotiations',
        'Conversion of military operational language into corporate EBITDA and unit economics metrics',
      ],
      outcome: 'Leads 3 automated regional fulfillment centers. The organization cited unshakeable crisis composure and rigorous accountability culture as decisive hiring factors.',
    },
    {
      id: 'mechanic-to-robotics',
      icon: Wrench,
      from: 'Master Automotive Diagnostic Technician',
      to: 'Senior Industrial Automation Engineer',
      sector: 'Advanced Robotics & Smart Factories',
      summary: 'Upgraded mechanical systems troubleshooting and electronic sensor diagnostics into automated robotics plant engineering.',
      existing: [
        'Systematic electromechanical fault-tree isolation',
        'Hydraulic, pneumatic, and actuator precision calibration',
        'Wiring schematics, CAN-bus networks, and oscilloscope telemetry',
        'Practical customer problem solving and service documentation',
      ],
      bridge: [
        'PLC ladder-logic programming (Siemens TIA Portal & Allen-Bradley)',
        'Industrial robotics safety fencing and optical sensor standards',
        'Portfolio of documented automation retrofits logged in Career Passport',
      ],
      outcome: 'Transferred into high-growth robotics engineering, moving off physically grueling workshop hours into clean-tech facility systems with a 45% compensation enhancement.',
    },
  ];

  return (
    <div className="w-full space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {stories.map((story) => {
          const Icon = story.icon;
          return (
            <div
              key={story.id}
              className="p-6 sm:p-7 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-all flex flex-col justify-between space-y-6 shadow-md"
            >
              <div className="space-y-4">
                {/* Header Trajectory */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-text-primary)]">
                      <Icon className="w-4 h-4 text-purple-400" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-taupe-300)]">
                      {story.sector}
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[var(--color-text-tertiary)]">
                      From: {story.from}
                    </div>
                    <div className="text-sm font-bold text-[var(--color-text-primary)] flex items-center gap-1.5 mt-0.5">
                      <span>To: {story.to}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {story.summary}
                </p>

                {/* Transferable Skills */}
                <div className="space-y-1.5 pt-2 border-t border-[var(--color-border-default)]">
                  <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Existing Transferable Advantage</span>
                  </span>
                  <ul className="text-[11px] text-[var(--color-text-secondary)] space-y-1 leading-relaxed">
                    {story.existing.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-400/80 font-mono text-[10px] shrink-0 mt-0.5">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* The Real Bridge */}
                <div className="space-y-1.5 pt-2 border-t border-[var(--color-border-default)]">
                  <span className="text-[11px] font-semibold text-amber-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>The Bridge Undertaken</span>
                  </span>
                  <ul className="text-[11px] text-[var(--color-text-secondary)] space-y-1 leading-relaxed">
                    {story.bridge.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-amber-400/80 font-mono text-[10px] shrink-0 mt-0.5">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Outcome Rationale */}
              <div className="p-3 rounded bg-black/20 border border-white/5 text-[11px] text-[var(--color-text-tertiary)] leading-relaxed">
                <strong className="text-[var(--color-text-primary)] font-mono text-[10px] uppercase block mb-0.5">
                  Strategic Rationale:
                </strong>
                {story.outcome}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
