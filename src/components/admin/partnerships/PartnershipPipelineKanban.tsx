'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Partner, PartnerPipelineStage, PartnerPriorityLevel } from '@/types/admin/partnerships';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Sparkles, Clock, ArrowRight, ChevronRight, Building2, User, AlertCircle } from 'lucide-react';

interface Props {
  partners: Partner[];
  onStageChange?: (partnerId: string, newStage: PartnerPipelineStage, note?: string) => Promise<void>;
}

const STAGES: { id: PartnerPipelineStage; label: string; group: string }[] = [
  { id: 'IDENTIFIED', label: '1. Identified', group: 'Research & Qualification' },
  { id: 'RESEARCHING', label: '2. Researching', group: 'Research & Qualification' },
  { id: 'QUALIFIED', label: '3. Qualified', group: 'Research & Qualification' },
  { id: 'INTRO_NEEDED', label: '4. Intro Needed', group: 'Outreach & Access' },
  { id: 'OUTREACH_READY', label: '5. Outreach Ready', group: 'Outreach & Access' },
  { id: 'CONTACTED', label: '6. Contacted', group: 'Outreach & Access' },
  { id: 'ENGAGED', label: '7. Engaged', group: 'Discovery & Proposal' },
  { id: 'DISCOVERY', label: '8. Discovery', group: 'Discovery & Proposal' },
  { id: 'PROPOSAL', label: '9. Proposal', group: 'Discovery & Proposal' },
  { id: 'NEGOTIATION', label: '10. Negotiation', group: 'Legal & Agreement' },
  { id: 'LEGAL_PROCUREMENT', label: '11. Legal / Procurement', group: 'Legal & Agreement' },
  { id: 'AGREED', label: '12. Agreed', group: 'Legal & Agreement' },
  { id: 'INTEGRATION', label: '13. Integration', group: 'Technical & Launch' },
  { id: 'LAUNCH_READY', label: '14. Launch Ready', group: 'Technical & Launch' },
  { id: 'LIVE', label: '15. Live', group: 'Live & Expansion' },
  { id: 'EXPANSION', label: '16. Expansion', group: 'Live & Expansion' },
  { id: 'PAUSED', label: '17. Paused', group: 'Inactive / Closed' },
  { id: 'DECLINED', label: '18. Declined', group: 'Inactive / Closed' },
  { id: 'CLOSED', label: '19. Closed', group: 'Inactive / Closed' },
];

export function PartnershipPipelineKanban({ partners, onStageChange }: Props) {
  const [selectedPartnerId, setSelectedPartnerId] = useState<string | null>(null);
  const [targetStage, setTargetStage] = useState<PartnerPipelineStage>('RESEARCHING');
  const [stageNote, setStageNote] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [filterPriority, setFilterPriority] = useState<string>('ALL');

  const filteredPartners = partners.filter((p) => {
    if (filterPriority === 'ALL') return true;
    return p.priority === filterPriority;
  });

  const getPriorityBadge = (p: PartnerPriorityLevel) => {
    switch (p) {
      case 'P0':
        return <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[rgba(248,113,113,0.15)] text-[#F87171] border border-[rgba(248,113,113,0.3)]">P0 STRATEGIC</span>;
      case 'P1':
        return <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[rgba(251,191,36,0.15)] text-[#FBBF24] border border-[rgba(251,191,36,0.3)]">P1 HIGH</span>;
      case 'P2':
        return <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[rgba(47,143,255,0.15)] text-[#2F8FFF] border border-[rgba(47,143,255,0.3)]">P2 VALUABLE</span>;
      case 'INFRASTRUCTURE':
        return <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[rgba(167,139,250,0.15)] text-[#A78BFA] border border-[rgba(167,139,250,0.3)]">INFRASTRUCTURE</span>;
      default:
        return <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-[var(--color-text-tertiary)] border border-[var(--color-border-default)]">{p}</span>;
    }
  };

  const handleStageMove = async () => {
    if (!selectedPartnerId || !onStageChange) return;
    setIsUpdating(true);
    try {
      await onStageChange(selectedPartnerId, targetStage, stageNote);
      setSelectedPartnerId(null);
      setStageNote('');
    } catch {
      //
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Priority Filter Bar */}
      <div className="flex items-center justify-between bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-lg p-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[var(--color-text-primary)] font-mono">PRIORITY FILTER:</span>
          {['ALL', 'P0', 'P1', 'P2', 'INFRASTRUCTURE'].map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setFilterPriority(p)}
              className={`px-2.5 py-1 rounded text-xs font-mono font-semibold transition-colors ${
                filterPriority === p
                  ? 'bg-[#2F8FFF] text-white'
                  : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
        <span className="text-xs font-mono text-[var(--color-text-tertiary)]">
          {filteredPartners.length} Organizations in Pipeline
        </span>
      </div>

      {/* Kanban Column Container */}
      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin">
        {STAGES.map((stage) => {
          const stagePartners = filteredPartners.filter((p) => p.relationship_status === stage.id);

          return (
            <div
              key={stage.id}
              className="w-72 shrink-0 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-xl flex flex-col max-h-[75vh]"
            >
              {/* Stage Header */}
              <div className="p-3 border-b border-[var(--color-border-default)] bg-[var(--color-surface-raised)] rounded-t-xl flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-[var(--color-text-primary)] font-mono">
                    {stage.label}
                  </span>
                  <p className="text-[10px] text-[var(--color-text-tertiary)]">{stage.group}</p>
                </div>
                <span className="w-5 h-5 rounded-full bg-[var(--color-surface-sunken)] text-[10px] font-mono font-bold flex items-center justify-center text-[var(--color-text-secondary)]">
                  {stagePartners.length}
                </span>
              </div>

              {/* Stage Cards */}
              <div className="p-2 space-y-2 overflow-y-auto flex-1">
                {stagePartners.length === 0 ? (
                  <div className="py-8 text-center text-[11px] text-[var(--color-text-tertiary)] font-mono">
                    No partners in this stage
                  </div>
                ) : (
                  stagePartners.map((partner) => (
                    <div
                      key={partner.id}
                      className="p-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[#2F8FFF] rounded-lg shadow-sm space-y-2 transition-all group"
                    >
                      <div className="flex items-start justify-between gap-1">
                        <Link
                          href={`/admin/partnerships/${partner.slug}`}
                          className="font-bold text-xs text-[var(--color-text-primary)] group-hover:text-[#2F8FFF] transition-colors leading-snug"
                        >
                          {partner.name}
                        </Link>
                        {getPriorityBadge(partner.priority)}
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-[var(--color-text-tertiary)]">
                        <span className="px-1.5 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[var(--color-text-secondary)]">
                          {partner.primary_category}
                        </span>
                        <span className="text-[#34D399] font-bold">
                          {partner.strategic_score}/100
                        </span>
                      </div>

                      {partner.next_best_action && (
                        <div className="p-2 bg-[var(--color-surface-sunken)] rounded border border-[var(--color-border-subtle)] text-[10px] space-y-0.5">
                          <span className="font-semibold text-[var(--color-text-primary)] block font-mono">NEXT ACTION:</span>
                          <p className="text-[var(--color-text-secondary)] line-clamp-2">{partner.next_best_action}</p>
                        </div>
                      )}

                      {partner.waiting_on && (
                        <div className="flex items-center gap-1 text-[10px] text-[#FBBF24] font-mono">
                          <Clock className="w-3 h-3 shrink-0" />
                          <span className="truncate">Waiting on: {partner.waiting_on}</span>
                        </div>
                      )}

                      <div className="pt-1 flex items-center justify-between border-t border-[var(--color-border-subtle)] text-[10px]">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedPartnerId(partner.id);
                            setTargetStage(partner.relationship_status);
                          }}
                          className="text-[#2F8FFF] hover:underline font-mono"
                        >
                          Move stage &rarr;
                        </button>
                        <Link
                          href={`/admin/partnerships/${partner.slug}`}
                          className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]"
                        >
                          Workspace
                        </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Stage Move Modal Prompt */}
      {selectedPartnerId && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-xl p-6 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-[var(--color-text-primary)] font-mono uppercase">
              Update Relationship Stage
            </h3>
            
            <div className="space-y-1">
              <label htmlFor="select-new-stage" className="text-xs font-semibold text-[var(--color-text-primary)]">
                Target Pipeline Stage
              </label>
              <select
                id="select-new-stage"
                value={targetStage}
                onChange={(e) => setTargetStage(e.target.value as PartnerPipelineStage)}
                className="w-full px-3 py-2 text-xs rounded border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)]"
              >
                {STAGES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label} ({s.group})
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="stage-change-note" className="text-xs font-semibold text-[var(--color-text-primary)]">
                Reason / Activity Note (Recorded in Audit Trail)
              </label>
              <textarea
                id="stage-change-note"
                rows={2}
                value={stageNote}
                onChange={(e) => setStageNote(e.target.value)}
                placeholder="Details on what occurred to advance or change this stage…"
                className="w-full px-3 py-2 text-xs rounded border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)]"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setSelectedPartnerId(null)}
                className="px-3 py-1.5 text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleStageMove}
                disabled={isUpdating}
                className="px-4 py-1.5 rounded bg-[#2F8FFF] text-white text-xs font-semibold hover:bg-[#2577d6]"
              >
                {isUpdating ? 'Saving…' : 'Update Stage'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
