'use client';

import React from 'react';
import { PartnerStrategicScoreFactors, STRATEGIC_SCORE_WEIGHTS } from '@/types/admin/partnerships';
import { calculateStrategicScore } from '@/lib/admin/partnerships';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Sparkles, Info } from 'lucide-react';

interface Props {
  factors: PartnerStrategicScoreFactors;
  editable?: boolean;
  onChange?: (newFactors: PartnerStrategicScoreFactors) => void;
}

const FACTOR_LABELS: Record<keyof PartnerStrategicScoreFactors, { label: string; desc: string }> = {
  userValue: { label: 'User Value', desc: 'Improvement to CareerOS user capabilities (20%)' },
  distributionPotential: { label: 'Distribution Potential', desc: 'Material reach & user acquisition growth (20%)' },
  strategicCredibility: { label: 'Strategic Credibility', desc: 'Institutional trust & authority enhancement (15%)' },
  productCapability: { label: 'Product Capability', desc: 'Provides capability we should not build in-house (15%)' },
  commercialPotential: { label: 'Commercial Potential', desc: 'Direct/indirect revenue & transaction value (10%)' },
  dataIntelligenceValue: { label: 'Data / Intelligence Value', desc: 'Improves Career Twin recommendations (10%)' },
  integrationFeasibility: { label: 'Integration Feasibility', desc: 'Technical simplicity & API reliability (5%)' },
  relationshipAttainability: { label: 'Relationship Attainability', desc: 'Realism of securing the agreement (5%)' },
};

export function PartnershipStrategicScoreCard({ factors, editable = false, onChange }: Props) {
  const currentScore = calculateStrategicScore(factors);

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-[#34D399] bg-[rgba(52,211,153,0.1)] border-[rgba(52,211,153,0.3)]';
    if (score >= 70) return 'text-[#2F8FFF] bg-[rgba(47,143,255,0.1)] border-[rgba(47,143,255,0.3)]';
    if (score >= 50) return 'text-[#FBBF24] bg-[rgba(251,191,36,0.1)] border-[rgba(251,191,36,0.3)]';
    return 'text-[#F87171] bg-[rgba(248,113,113,0.1)] border-[rgba(248,113,113,0.3)]';
  };

  const handleSliderChange = (key: keyof PartnerStrategicScoreFactors, val: number) => {
    if (onChange) {
      onChange({
        ...factors,
        [key]: val,
      });
    }
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-[var(--color-border-default)] pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#2F8FFF]" />
            <h2 className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wide font-mono">
              Strategic Partner Scoring Framework
            </h2>
          </div>
          <p className="text-xs text-[var(--color-text-tertiary)]">
            8-factor weighted evaluation model for institutional prioritization.
          </p>
        </div>
        <div className={`px-3 py-1.5 rounded-lg border font-mono font-bold text-sm flex items-center gap-2 ${getScoreColor(currentScore)}`}>
          <span>Strategic Score:</span>
          <span className="text-base">{currentScore} / 100</span>
        </div>
      </div>

      <div className="space-y-4">
        {(Object.keys(FACTOR_LABELS) as (keyof PartnerStrategicScoreFactors)[]).map((key) => {
          const val = factors[key] || 0;
          const weightPercent = Math.round(STRATEGIC_SCORE_WEIGHTS[key] * 100);
          const meta = FACTOR_LABELS[key];

          return (
            <div key={key} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <div className="space-y-0.5">
                  <span className="font-semibold text-[var(--color-text-primary)]">{meta.label}</span>
                  <span className="text-[11px] text-[var(--color-text-tertiary)] ml-2">({weightPercent}% weight)</span>
                </div>
                <span className="font-mono font-bold text-[var(--color-text-primary)]">{val}/100</span>
              </div>

              {editable ? (
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={val}
                  onChange={(e) => handleSliderChange(key, parseInt(e.target.value, 10))}
                  className="w-full h-1.5 bg-[var(--color-surface-sunken)] rounded-lg appearance-none cursor-pointer accent-[#2F8FFF]"
                />
              ) : (
                <div className="w-full h-1.5 bg-[var(--color-surface-sunken)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#2F8FFF] transition-all duration-300 rounded-full"
                    style={{ width: `${val}%` }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
