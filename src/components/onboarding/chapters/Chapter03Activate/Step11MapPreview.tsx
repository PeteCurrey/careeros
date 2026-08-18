'use client';

import React from 'react';
import { AdaptiveSplitLayout } from '../../shared/AdaptiveSplitLayout';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CareerGraphSeed } from '@/types/platform/intelligence';
import { Compass, ArrowRight, ArrowLeft, GitBranch } from 'lucide-react';

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
      roleTitle: 'A possible next step',
      trajectoryType: 'ANOTHER DIRECTION',
      evidenceBasis: 'Where your current skills give you a head start.',
      domain: 'Engineering & Technology',
    },
    {
      id: 'node_2',
      roleTitle: 'Longer-term option',
      trajectoryType: 'GROWTH DIRECTION',
      evidenceBasis: 'Roles you can work towards over the next few years.',
      domain: 'Leadership',
    },
  ];

  return (
    <AdaptiveSplitLayout
      chapter="03_ACTIVATE"
      stepNumber="2"
      stepTotal="5"
      sectionLabel="Your Career OS"
      headline="Here are a few directions Career OS can already see."
      description="Based on your skills and goals, here are possible routes ahead — from your current direction to new possibilities."
      imageSrc="/media/product/career_graph_hero.jpg"
      imageAlt="Career Map Overview"
      bottomVisualQuote={{
        text: 'Careers rarely move in a straight line. Career OS maps different ways forward.',
        author: 'Career OS',
      }}
    >
      <div className="space-y-6">
        {/* Visual Graph Preview Card */}
        <Card className="p-6 sm:p-7 space-y-5 bg-[var(--color-surface-raised)] border border-[var(--accent-blue-border)] shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border-default)]">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#2F8FFF]" />
              <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                Your Career Map
              </h3>
            </div>
            <span className="text-[10px] font-mono text-emerald-400">
              {nodes.length} Directions Mapped
            </span>
          </div>

          {/* Central Anchor Node */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[var(--accent-blue-subtle)] to-[var(--color-surface-base)] border border-[var(--accent-blue-border)] space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase text-[var(--accent-blue)] font-bold">
                Where you are today
              </span>
              <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#2F8FFF] text-white font-bold">
                CURRENT
              </span>
            </div>
            <p className="text-sm font-bold text-white">
              Starting Profile
            </p>
          </div>

          {/* Connected Branches */}
          <div className="space-y-2.5 pt-1">
            <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] font-semibold block">
              Possible directions:
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
            <span>Meet my Mentor</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </AdaptiveSplitLayout>
  );
}
