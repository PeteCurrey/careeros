'use client';

import React, { useState } from 'react';
import { Partner } from '@/types/admin/partnerships';
import { Button } from '@/components/ui/Button';
import { FileText, Copy, Check, X, Sparkles, AlertTriangle } from 'lucide-react';

interface Props {
  partners: Partner[];
  isOpen: boolean;
  onClose: () => void;
}

export function PartnershipWeeklyBriefModal({ partners, isOpen, onClose }: Props) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const p0Partners = partners.filter((p) => p.priority === 'P0');
  const activePartners = partners.filter((p) => !['IDENTIFIED', 'DECLINED', 'CLOSED'].includes(p.relationship_status));
  const waitingPartners = partners.filter((p) => p.waiting_on);

  const briefDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  const handleCopy = () => {
    const text = document.getElementById('weekly-brief-content')?.innerText || '';
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-5 border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[rgba(47,143,255,0.1)] border border-[rgba(47,143,255,0.25)] flex items-center justify-center text-[#2F8FFF]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-[var(--color-text-primary)] font-mono uppercase tracking-tight">
                Partnership Weekly Executive Brief
              </h2>
              <p className="text-xs text-[var(--color-text-tertiary)] font-mono">
                Derived from active database targets &bull; Week of {briefDate}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={handleCopy}
              className="font-mono text-xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 mr-1 text-[#34D399]" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 mr-1" />
                  <span>Copy Brief</span>
                </>
              )}
            </Button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div id="weekly-brief-content" className="p-6 overflow-y-auto space-y-6 text-xs leading-relaxed font-mono">
          
          {/* 1. Executive Summary */}
          <div className="space-y-2 border-b border-[var(--color-border-subtle)] pb-4">
            <h3 className="text-xs font-bold text-[#2F8FFF] uppercase tracking-wider">
              1. Executive Overview
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              CareerOS is currently tracking <strong>{partners.length} total targets</strong> ({p0Partners.length} P0 Strategic, {activePartners.length} actively advancing, {waitingPartners.length} waiting on external input).
            </p>
          </div>

          {/* 2. P0 Strategic Targets Status */}
          <div className="space-y-3 border-b border-[var(--color-border-subtle)] pb-4">
            <h3 className="text-xs font-bold text-[#2F8FFF] uppercase tracking-wider">
              2. P0 Strategic Targets Status
            </h3>
            <div className="space-y-2">
              {p0Partners.map((p) => (
                <div key={p.id} className="p-3 bg-[var(--color-surface-sunken)] rounded border border-[var(--color-border-default)] space-y-1">
                  <div className="flex items-center justify-between font-bold text-[var(--color-text-primary)]">
                    <span>{p.name} ({p.primary_category})</span>
                    <span className="text-[#34D399]">{p.relationship_status}</span>
                  </div>
                  <p className="text-[11px] text-[var(--color-text-secondary)]">
                    {p.strategic_rationale}
                  </p>
                  <p className="text-[10px] text-[var(--color-text-tertiary)]">
                    Next Action: {p.next_best_action || 'Introductory outreach'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Items Waiting on Partner Response */}
          <div className="space-y-3 border-b border-[var(--color-border-subtle)] pb-4">
            <h3 className="text-xs font-bold text-[#FBBF24] uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>3. External Dependencies &amp; Blockers</span>
            </h3>
            {waitingPartners.length === 0 ? (
              <p className="text-[var(--color-text-tertiary)]">
                No active targets are currently stalled on external dependencies.
              </p>
            ) : (
              <div className="space-y-1.5">
                {waitingPartners.map((p) => (
                  <div key={p.id} className="flex items-center justify-between text-[11px] py-1 border-b border-[var(--color-border-subtle)]">
                    <span className="text-[var(--color-text-primary)]">{p.name}</span>
                    <span className="text-[#FBBF24]">Waiting on: {p.waiting_on}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 4. Priority Actions Next Week */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-[#2F8FFF] uppercase tracking-wider">
              4. Strategic Actions Next Week
            </h3>
            <ul className="list-disc list-inside space-y-1 text-[var(--color-text-secondary)]">
              <li>Conduct introductory partner outreach for NAWB &amp; Handshake readiness propositions.</li>
              <li>Evaluate Lightcast Developer API schema for Career Twin skill integration.</li>
              <li>Finalize minor safeguarding guardrails for youth tele-health exploration (Talkspace).</li>
              <li>Draft Open Badges 2.0/3.0 technical verification spec for Credly integration.</li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[var(--color-border-default)] bg-[var(--color-surface-base)] flex justify-end">
          <Button type="button" variant="primary" size="sm" onClick={onClose} className="font-mono text-xs">
            Close Brief
          </Button>
        </div>
      </div>
    </div>
  );
}
