'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Partner, PartnerPipelineStage, PartnerSuggestedTarget } from '@/types/admin/partnerships';
import { getPartners, updatePartnerStage } from '@/lib/admin/partnerships';
import { PartnershipPipelineKanban } from '@/components/admin/partnerships/PartnershipPipelineKanban';
import { PartnershipTargetsTable } from '@/components/admin/partnerships/PartnershipTargetsTable';
import { PartnershipWeeklyBriefModal } from '@/components/admin/partnerships/PartnershipWeeklyBriefModal';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Handshake,
  Target,
  Sparkles,
  Kanban,
  FileText,
  Clock,
  TrendingUp,
  AlertTriangle,
  Plus,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Lock,
  ArrowRight,
  Radar,
} from 'lucide-react';

export default function AdminPartnershipsPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [activeTab, setActiveTab] = useState<'targets' | 'pipeline' | 'radar' | 'analytics'>('targets');
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Suggested Targets (Radar)
  const [suggestedTargets, setSuggestedTargets] = useState<PartnerSuggestedTarget[]>([
    {
      id: 'sug_1',
      organisation_name: 'Year Up',
      website_url: 'https://yearup.org',
      reason_identified: 'Major national intensive training and internship placement organization for young adults.',
      source: 'Workforce Ecosystem Scan',
      potential_category: 'Workforce',
      initial_strategic_rationale: 'Direct alignment with CareerOS youth transition and enterprise employer internship pipelines.',
      review_status: 'pending',
      discovered_at: '2026-08-18',
    },
    {
      id: 'sug_2',
      organisation_name: 'Guild Education',
      website_url: 'https://guild.com',
      reason_identified: 'Enterprise education benefits platform managing tuition-free college for Fortune 500 workforces.',
      source: 'Corporate Reskilling Analysis',
      potential_category: 'Education',
      initial_strategic_rationale: 'Potential enterprise employer distribution and tuition assistance mapping for Career Twin skill pathways.',
      review_status: 'pending',
      discovered_at: '2026-08-17',
    },
  ]);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getPartners();
        setPartners(data);
      } catch (err) {
        console.error('Error loading partners:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  const handleStageChange = async (partnerId: string, newStage: PartnerPipelineStage, note?: string) => {
    const res = await updatePartnerStage(partnerId, newStage, note);
    if (res.success) {
      setPartners((prev) =>
        prev.map((p) => (p.id === partnerId ? { ...p, relationship_status: newStage } : p))
      );
    } else {
      alert(res.error || 'Failed to update stage.');
    }
  };

  // KPIs
  const totalTargets = partners.length;
  const p0Targets = partners.filter((p) => p.priority === 'P0').length;
  const activeConversations = partners.filter((p) => ['CONTACTED', 'ENGAGED', 'DISCOVERY', 'PROPOSAL'].includes(p.relationship_status)).length;
  const proposalsOutstanding = partners.filter((p) => p.relationship_status === 'PROPOSAL').length;
  const inLegalOrIntegration = partners.filter((p) => ['NEGOTIATION', 'LEGAL_PROCUREMENT', 'AGREED', 'INTEGRATION'].includes(p.relationship_status)).length;
  const livePartnerships = partners.filter((p) => p.relationship_status === 'LIVE' || p.relationship_status === 'EXPANSION').length;
  const waitingItems = partners.filter((p) => p.waiting_on).length;

  return (
    <div className="section-padding space-y-8">
      <div className="container-site space-y-8 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[var(--color-border-default)] pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[rgba(47,143,255,0.1)] border border-[rgba(47,143,255,0.25)] flex items-center justify-center text-[#2F8FFF]">
                <Handshake className="w-4 h-4" />
              </div>
              <h1 className="text-headline font-bold tracking-tight text-[var(--color-text-primary)]">
                Partnership Target &amp; Relationship Management
              </h1>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Executive operating system for identifying, pursuing, negotiating, integrating, and governing strategic partnerships.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => setIsBriefOpen(true)}
              className="font-mono text-xs"
            >
              <FileText className="w-3.5 h-3.5 mr-1.5" />
              <span>Weekly Executive Brief</span>
            </Button>
          </div>
        </div>

        {/* Top KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          <div className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-xl space-y-1">
            <span className="text-[10px] font-mono uppercase text-[var(--color-text-tertiary)]">Total Targets</span>
            <div className="text-xl font-bold font-mono text-[var(--color-text-primary)]">{totalTargets}</div>
            <p className="text-[10px] text-[var(--color-text-tertiary)]">15 Seeded Targets</p>
          </div>

          <div className="p-4 bg-[var(--color-surface-raised)] border border-[rgba(248,113,113,0.3)] bg-[rgba(248,113,113,0.02)] rounded-xl space-y-1">
            <span className="text-[10px] font-mono uppercase text-[#F87171]">P0 Strategic</span>
            <div className="text-xl font-bold font-mono text-[#F87171]">{p0Targets}</div>
            <p className="text-[10px] text-[var(--color-text-tertiary)]">Highest impact</p>
          </div>

          <div className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-xl space-y-1">
            <span className="text-[10px] font-mono uppercase text-[var(--color-text-tertiary)]">In Pipeline</span>
            <div className="text-xl font-bold font-mono text-[#2F8FFF]">{activeConversations}</div>
            <p className="text-[10px] text-[var(--color-text-tertiary)]">Active stages</p>
          </div>

          <div className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-xl space-y-1">
            <span className="text-[10px] font-mono uppercase text-[var(--color-text-tertiary)]">Proposals</span>
            <div className="text-xl font-bold font-mono text-[var(--color-text-primary)]">{proposalsOutstanding}</div>
            <p className="text-[10px] text-[var(--color-text-tertiary)]">Draft / Sent</p>
          </div>

          <div className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-xl space-y-1">
            <span className="text-[10px] font-mono uppercase text-[var(--color-text-tertiary)]">Legal / Tech</span>
            <div className="text-xl font-bold font-mono text-[var(--color-text-primary)]">{inLegalOrIntegration}</div>
            <p className="text-[10px] text-[var(--color-text-tertiary)]">In execution</p>
          </div>

          <div className="p-4 bg-[var(--color-surface-raised)] border border-[rgba(52,211,153,0.3)] bg-[rgba(52,211,153,0.02)] rounded-xl space-y-1">
            <span className="text-[10px] font-mono uppercase text-[#34D399]">Live Partners</span>
            <div className="text-xl font-bold font-mono text-[#34D399]">{livePartnerships}</div>
            <p className="text-[10px] text-[var(--color-text-tertiary)]">Producing value</p>
          </div>

          <div className="p-4 bg-[var(--color-surface-raised)] border border-[rgba(251,191,36,0.3)] bg-[rgba(251,191,36,0.02)] rounded-xl space-y-1">
            <span className="text-[10px] font-mono uppercase text-[#FBBF24]">Waiting On</span>
            <div className="text-xl font-bold font-mono text-[#FBBF24]">{waitingItems}</div>
            <p className="text-[10px] text-[var(--color-text-tertiary)]">External blockers</p>
          </div>
        </div>

        {/* CEO Attention / Needs Attention Panel */}
        <div className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-xl space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[var(--color-text-primary)] uppercase">
            <AlertTriangle className="w-4 h-4 text-[#FBBF24]" />
            <span>Needs Executive Attention</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] rounded-lg space-y-1">
              <span className="font-bold text-[#F87171] font-mono">P0 TARGETS READY FOR OUTREACH</span>
              <p className="text-[var(--color-text-secondary)] text-[11px]">
                NAWB, Handshake, Lightcast &amp; Coursera have finalized strategic rationales ready for executive outreach.
              </p>
            </div>

            <div className="p-3 bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] rounded-lg space-y-1">
              <span className="font-bold text-[#2F8FFF] font-mono">PUBLIC WORKFORCE INFRASTRUCTURE</span>
              <p className="text-[var(--color-text-secondary)] text-[11px]">
                CareerOneStop, O*NET, and Apprenticeship.gov are tagged as public resources ready for open API schema verification.
              </p>
            </div>

            <div className="p-3 bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] rounded-lg space-y-1">
              <span className="font-bold text-[#34D399] font-mono">LAUNCH GATE ENFORCEMENT</span>
              <p className="text-[var(--color-text-secondary)] text-[11px]">
                Zero partners are currently published publicly. Launch gates strictly prevent accidental public exposure.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-between border-b border-[var(--color-border-default)]">
          <div className="flex gap-2 font-mono text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('targets')}
              className={`pb-3 font-semibold transition-colors flex items-center gap-1.5 border-b-2 ${
                activeTab === 'targets'
                  ? 'border-[#2F8FFF] text-[#2F8FFF]'
                  : 'border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Target Directory ({partners.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('pipeline')}
              className={`pb-3 font-semibold transition-colors flex items-center gap-1.5 border-b-2 ${
                activeTab === 'pipeline'
                  ? 'border-[#2F8FFF] text-[#2F8FFF]'
                  : 'border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              <Kanban className="w-4 h-4" />
              <span>Pipeline Kanban</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('radar')}
              className={`pb-3 font-semibold transition-colors flex items-center gap-1.5 border-b-2 ${
                activeTab === 'radar'
                  ? 'border-[#2F8FFF] text-[#2F8FFF]'
                  : 'border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              <Radar className="w-4 h-4" />
              <span>Partnership Radar ({suggestedTargets.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('analytics')}
              className={`pb-3 font-semibold transition-colors flex items-center gap-1.5 border-b-2 ${
                activeTab === 'analytics'
                  ? 'border-[#2F8FFF] text-[#2F8FFF]'
                  : 'border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Analytics &amp; Conversion</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Targets Table */}
        {activeTab === 'targets' && (
          <PartnershipTargetsTable partners={partners} />
        )}

        {/* Tab 2: Pipeline Kanban */}
        {activeTab === 'pipeline' && (
          <PartnershipPipelineKanban partners={partners} onStageChange={handleStageChange} />
        )}

        {/* Tab 3: Partnership Radar (Suggested Targets) */}
        {activeTab === 'radar' && (
          <Card className="p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-[var(--color-border-default)] pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Radar className="w-4 h-4 text-[#2F8FFF]" />
                  <h2 className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wide font-mono">
                    Partnership Radar &amp; Target Suggestions
                  </h2>
                </div>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  Future discovery candidates surfaced for human review before entering the active strategic pipeline.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {suggestedTargets.map((sug) => (
                <div
                  key={sug.id}
                  className="p-4 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-xl space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[var(--color-text-primary)]">{sug.organisation_name}</span>
                      <span className="px-2 py-0.5 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] font-mono text-[10px] text-[var(--color-text-secondary)]">
                        {sug.potential_category}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
                      Source: {sug.source} &bull; {sug.discovered_at}
                    </span>
                  </div>

                  <p className="text-xs text-[var(--color-text-secondary)]">
                    {sug.reason_identified}
                  </p>
                  <p className="text-[11px] text-[var(--color-text-tertiary)] italic">
                    Rationale: {sug.initial_strategic_rationale}
                  </p>

                  <div className="pt-2 flex items-center justify-end gap-2 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => setSuggestedTargets((prev) => prev.filter((s) => s.id !== sug.id))}
                      className="px-3 py-1 text-[var(--color-text-tertiary)] hover:text-[#F87171]"
                    >
                      Dismiss
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        alert(`Approved ${sug.organisation_name} as active target.`);
                        setSuggestedTargets((prev) => prev.filter((s) => s.id !== sug.id));
                      }}
                      className="px-3 py-1 rounded bg-[#2F8FFF] text-white font-semibold hover:bg-[#2577d6]"
                    >
                      Approve as Target &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Tab 4: Strategic Analytics */}
        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 space-y-4">
              <h3 className="text-xs font-bold text-[var(--color-text-primary)] uppercase tracking-wide font-mono">
                Partnership Pipeline by Priority
              </h3>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between p-2 rounded bg-[var(--color-surface-sunken)]">
                  <span className="text-[#F87171] font-bold">P0 — Strategic / Transformational</span>
                  <span className="font-bold">{p0Targets} Organizations</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[var(--color-surface-sunken)]">
                  <span className="text-[#FBBF24] font-bold">P1 — High Priority</span>
                  <span className="font-bold">6 Organizations</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[var(--color-surface-sunken)]">
                  <span className="text-[#2F8FFF] font-bold">P2 — Valuable</span>
                  <span className="font-bold">2 Organizations</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[var(--color-surface-sunken)]">
                  <span className="text-[#A78BFA] font-bold">Infrastructure / Public Resource</span>
                  <span className="font-bold">3 Organizations</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-xs font-bold text-[var(--color-text-primary)] uppercase tracking-wide font-mono">
                Category Distribution
              </h3>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between p-2 rounded bg-[var(--color-surface-sunken)]">
                  <span>Workforce &amp; Government</span>
                  <span className="font-bold text-[#2F8FFF]">5</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[var(--color-surface-sunken)]">
                  <span>Skills, Training &amp; Education</span>
                  <span className="font-bold text-[#2F8FFF]">4</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[var(--color-surface-sunken)]">
                  <span>Wellbeing &amp; Youth</span>
                  <span className="font-bold text-[#2F8FFF]">3</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[var(--color-surface-sunken)]">
                  <span>Community Support &amp; Veterans</span>
                  <span className="font-bold text-[#2F8FFF]">3</span>
                </div>
              </div>
            </Card>
          </div>
        )}

      </div>

      {/* Weekly Brief Modal */}
      <PartnershipWeeklyBriefModal
        partners={partners}
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
      />
    </div>
  );
}
