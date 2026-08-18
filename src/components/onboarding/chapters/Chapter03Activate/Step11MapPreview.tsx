'use client';

import React from 'react';
import { AdaptiveSplitLayout } from '../../shared/AdaptiveSplitLayout';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CareerGraphSeed } from '@/types/platform/intelligence';
import { Compass, ArrowRight, ArrowLeft, GitBranch, ShieldCheck } from 'lucide-react';

interface Step11MapPreviewProps {
  graphSeed: CareerGraphSeed | null;
  onNext: () => void;
  onBack: () => void;
}

export function Step11MapPreview({
  graphSeed,
  onNext,
  onBack,
}: Step11MapPreviewProps) {
  const nodes = graphSeed?.nodes || [
    {
      id: 'node_1',
      roleTitle: 'Adjacent Specialisation',
      trajectoryType: 'ADJACENT_POSSIBILITY' as const,
      evidenceBasis: 'Transferable capability overlap with your starting profile.',
      confidence: 'SOME_EVIDENCE' as const,
      domain: 'Systems & Engineering',
      overlappingCapabilities: ['Technical Design', 'Analysis'],
      keyBridgeRequirements: ['Domain Certification'],
    },
    {
      id: 'node_2',
      roleTitle: 'Senior Leadership Direction',
      trajectoryType: 'DEVELOPMENT_DIRECTION' as const,
      evidenceBasis: 'Progression vector requiring demonstrated evidence compounding.',
      confidence: 'EARLY_HYPOTHESIS' as const,
      domain: 'Executive Stewardship',
      overlappingCapabilities: ['Strategic Planning'],
      keyBridgeRequirements: ['P&L Management'],
    },
  ];

  return (
    <AdaptiveSplitLayout
      chapter="03_ACTIVATE"
      stepNumber="2"
      stepTotal="5"
      sectionLabel="Navigation &bull; Career Graph"
      headline="Explore your starting Career Map."
      description="Career OS maps topological pathways between roles. These are lateral bridges and progression vectors grounded in your transferable capabilities."
      imageSrc="/media/product/career_graph_hero.jpg"
      imageAlt="Career Map Topological Graph"
      bottomVisualQuote={{
        text: 'Career progression is non-linear. The Career Graph maps adjacent possibilities and bridge requirements across disciplines.',
        author: 'Topological Career Mapping',
      }}
    >
      <div className="space-y-6">
        {/* Visual Graph Preview Card */}
        <Card className="p-6 sm:p-7 space-y-5 bg-[var(--color-surface-raised)] border border-[var(--accent-blue-border)] shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border-default)]">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#2F8FFF]" />
              <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                Initial Graph Topology
              </h3>
            </div>
            <span className="text-[10px] font-mono text-emerald-400">
              {nodes.length} Adjacent Vectors Mapped
            </span>
          </div>

          {/* Central Anchor Node */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[var(--accent-blue-subtle)] to-[var(--color-surface-base)] border border-[var(--accent-blue-border)] space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase text-[var(--accent-blue)] font-bold">
                Anchor Point &bull; You Are Here
              </span>
              <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#2F8FFF] text-white font-bold">
                CURRENT
              </span>
            </div>
            <p className="text-sm font-bold text-white">
              Starting Career Profile Context
            </p>
          </div>

          {/* Connected Branches */}
          <div className="space-y-2.5 pt-1">
            <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] font-semibold block">
              Emerging Topological Vectors:
            </span>

            <div className="grid grid-cols-1 gap-2.5">
              {nodes.map((node) => (
                <div
                  key={node.id}
                  className="p-3.5 rounded-lg bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover:border-zinc-500 transition-colors space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <GitBranch className="w-3.5 h-3.5 text-[#2F8FFF]" />
                      <span className="text-xs font-bold text-white">
                        {node.roleTitle}
                      </span>
                    </div>
                    <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)]">
                      {node.trajectoryType.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                    {node.evidenceBasis}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Bottom Actions */}
        <div className="pt-2 flex items-center justify-between">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-xs font-mono text-[var(--color-taupe-300)]"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>Back</span>
          </Button>

          <Button
            type="button"
            variant="primary"
            size="md"
            onClick={onNext}
            className="text-xs font-mono"
          >
            <span>Meet your Career Mentor</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </AdaptiveSplitLayout>
  );
}
