'use client';

import React, { useState } from 'react';
import { Bot, UserCheck, Award, Layers, Target, Compass, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SystemNode {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  headline: string;
  description: string;
  metric: string;
}

const SYSTEM_NODES: SystemNode[] = [
  {
    id: 'mentor',
    name: 'AI Career Mentor',
    category: 'Intelligent Guidance',
    icon: Bot,
    headline: 'Continuous, strategic advice calibrated to your career direction.',
    description: 'Understands your trajectory over years, remembers your development goals, and recommends next moves with explainable rationale.',
    metric: 'Strategic Advisory & Next Move Planning',
  },
  {
    id: 'twin',
    name: 'Career Twin',
    category: 'Self-Model',
    icon: UserCheck,
    headline: 'A structured model of your professional self — beyond a flat résumé.',
    description: 'Synthesizes demonstrated capability, working preferences, verified competencies, and latent strengths into a dynamic personal model.',
    metric: 'Multidimensional Capability Profile',
  },
  {
    id: 'passport',
    name: 'Career Passport',
    category: 'Verifiable Record',
    icon: Award,
    headline: 'A portable professional record you own independently of any employer.',
    description: 'Cryptographically verifiable evidence of qualifications, project deliverables, and institutional endorsements that travel with you.',
    metric: 'Tamper-Evident Evidence Vault',
  },
  {
    id: 'graph',
    name: 'Career Graph',
    category: 'Opportunity Map',
    icon: Compass,
    headline: 'Living map of skills, roles, and non-linear transitions across industries.',
    description: 'Illuminates high-probability capability bridges, emerging job roles, and transferable skill overlaps across the global labor economy.',
    metric: 'Global Pathway & Competency Topology',
  },
  {
    id: 'opportunities',
    name: 'Opportunity Agent',
    category: 'Proactive Discovery',
    icon: Sparkles,
    headline: 'Your career agent finds matched opportunities without public broadcasting.',
    description: 'Evaluates alignment against genuine capability and private user parameters, preserving privacy until you choose to engage.',
    metric: 'Autonomous & Private Match Engine',
  },
  {
    id: 'evidence',
    name: 'Skills & Evidence',
    category: 'Demonstrated Output',
    icon: Layers,
    headline: 'Anchoring every competency claim in demonstrable project work.',
    description: 'Replaces unverifiable self-reported bullet points with tangible deliverables, code repositories, clinical hours, or trade certifications.',
    metric: 'Multi-Format Evidence Endorsement',
  },
];

export function IntegratedSystemSection() {
  const [activeId, setActiveId] = useState<string>('mentor');
  const activeNode = SYSTEM_NODES.find((n) => n.id === activeId) ?? SYSTEM_NODES[0]!;
  const ActiveIcon = activeNode.icon;

  return (
    <section id="how-it-works" className="section-editorial bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
      <div className="container-wide space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-mono font-bold tracking-widest text-[var(--color-brand-600)] uppercase">
            Integrated Platform
          </p>
          <h2 className="text-display-section text-[var(--color-text-primary)]">
            Everything your career needs. Working together.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)]">
            Career OS is not an assortment of disconnected tools. It is an integrated operating system surrounding you throughout your working life.
          </p>
        </div>

        {/* Central Interconnected Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Node Selector */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SYSTEM_NODES.map((node) => {
              const Icon = node.icon;
              const isSelected = activeId === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveId(node.id)}
                  className={cn(
                    'p-5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between min-h-[130px]',
                    isSelected
                      ? 'bg-[var(--color-surface-raised)] border-[var(--color-brand-500)] shadow-card ring-1 ring-[var(--color-brand-500)]'
                      : 'bg-[var(--color-surface-warm)] border-[var(--color-border-default)] hover:border-[var(--color-border-strong)]'
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--color-text-tertiary)]">
                      {node.category}
                    </span>
                    <Icon className={cn('w-4 h-4', isSelected ? 'text-[var(--color-brand-600)]' : 'text-[var(--color-text-tertiary)]')} />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-bold text-sm text-[var(--color-text-primary)]">
                      {node.name}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Subsystem Deep Dive Panel */}
          <div className="lg:col-span-6 p-8 sm:p-12 rounded-3xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-editorial space-y-6">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] border border-[var(--color-brand-200)] dark:border-[var(--color-brand-800)] text-xs font-bold text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]">
                <ActiveIcon className="w-4 h-4" /> {activeNode.name}
              </div>
              <span className="text-xs font-mono text-[var(--color-text-tertiary)]">
                {activeNode.category}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-headline-editorial text-[var(--color-text-primary)]">
                {activeNode.headline}
              </h3>
              <p className="text-body-editorial text-[var(--color-text-secondary)] leading-relaxed">
                {activeNode.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
              <div className="text-xs font-medium text-[var(--color-text-tertiary)] flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[var(--color-verified)]" />
                <span>{activeNode.metric}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
