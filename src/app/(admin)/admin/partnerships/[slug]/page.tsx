'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
  Partner,
  PartnerContact,
  PartnerOpportunity,
  PartnerActivity,
  PartnerTask,
  PartnerDocument,
  PartnerIntegration,
  PartnerCompliance,
  PartnerMetrics,
  PartnerPipelineStage,
  PartnerPriorityLevel,
} from '@/types/admin/partnerships';
import { getPartnerBySlug, updatePartnerStage } from '@/lib/admin/partnerships';
import { PartnershipStrategicScoreCard } from '@/components/admin/partnerships/PartnershipStrategicScoreCard';
import { PartnershipLaunchGateCard } from '@/components/admin/partnerships/PartnershipLaunchGateCard';
import { PartnershipPublicPreviewModal } from '@/components/admin/partnerships/PartnershipPublicPreviewModal';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  ChevronLeft,
  Handshake,
  ExternalLink,
  Target,
  Sparkles,
  Users,
  Briefcase,
  Mail,
  CheckSquare,
  FileText,
  ShieldCheck,
  Cpu,
  TrendingUp,
  Eye,
  Plus,
  Clock,
  AlertTriangle,
  Copy,
  Check,
} from 'lucide-react';

export default function PartnerDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const router = useRouter();

  const [partner, setPartner] = useState<Partner | null>(null);
  const [contacts, setContacts] = useState<PartnerContact[]>([]);
  const [opportunities, setOpportunities] = useState<PartnerOpportunity[]>([]);
  const [activities, setActivities] = useState<PartnerActivity[]>([]);
  const [tasks, setTasks] = useState<PartnerTask[]>([]);
  const [documents, setDocuments] = useState<PartnerDocument[]>([]);
  const [integrations, setIntegrations] = useState<PartnerIntegration[]>([]);
  const [compliance, setCompliance] = useState<PartnerCompliance | null>(null);
  const [metrics, setMetrics] = useState<PartnerMetrics[]>([]);

  const [activeTab, setActiveTab] = useState<
    'overview' | 'score' | 'contacts' | 'opportunities' | 'outreach' | 'tasks' | 'documents' | 'launch_gate' | 'integration' | 'metrics'
  >('overview');

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [copiedOutreach, setCopiedOutreach] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      if (!slug) return;
      try {
        const res = await getPartnerBySlug(slug);
        if (!res.partner) {
          router.push('/admin/partnerships');
          return;
        }
        setPartner(res.partner);
        setContacts(res.contacts);
        setOpportunities(res.opportunities);
        setActivities(res.activities);
        setTasks(res.tasks);
        setDocuments(res.documents);
        setIntegrations(res.integrations);
        setCompliance(res.compliance);
        setMetrics(res.metrics);
      } catch (err) {
        console.error('Error loading partner detail:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, [slug, router]);

  if (isLoading || !partner) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center font-mono text-xs text-[var(--color-text-tertiary)]">
        Loading partner workspace…
      </div>
    );
  }

  const hypothesis = partner.partnership_hypothesis || {};

  const handleCopyOutreachDraft = () => {
    const text = `Subject: CareerOS <> ${partner.name} — Strategic Readiness & Capability Integration\n\nHi [Partner Lead],\n\nCareerOS is building a sovereign career operating system for individuals. We have identified ${partner.name} as a vital strategic counterpart.\n\nOur Proposal:\n${partner.partner_value_proposition || partner.strategic_rationale}\n\nWould you have 15 minutes next week for an introductory conversation?`;
    navigator.clipboard.writeText(text);
    setCopiedOutreach(true);
    setTimeout(() => setCopiedOutreach(false), 2500);
  };

  const getPriorityBadge = (p: PartnerPriorityLevel) => {
    switch (p) {
      case 'P0':
        return <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-[rgba(248,113,113,0.15)] text-[#F87171] border border-[rgba(248,113,113,0.3)]">P0 STRATEGIC</span>;
      case 'P1':
        return <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-[rgba(251,191,36,0.15)] text-[#FBBF24] border border-[rgba(251,191,36,0.3)]">P1 HIGH</span>;
      case 'P2':
        return <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-[rgba(47,143,255,0.15)] text-[#2F8FFF] border border-[rgba(47,143,255,0.3)]">P2 VALUABLE</span>;
      case 'INFRASTRUCTURE':
        return <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-[rgba(167,139,250,0.15)] text-[#A78BFA] border border-[rgba(167,139,250,0.3)]">INFRASTRUCTURE</span>;
      default:
        return <span className="px-2 py-0.5 rounded text-xs font-mono text-[var(--color-text-tertiary)] border border-[var(--color-border-default)]">{p}</span>;
    }
  };

  return (
    <div className="section-padding space-y-8">
      <div className="container-site space-y-8 max-w-7xl">
        
        {/* Navigation Breadcrumb */}
        <div className="space-y-4">
          <Link
            href="/admin/partnerships"
            className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] flex items-center gap-1 transition-colors font-mono"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Back to Partnerships CRM
          </Link>

          {/* Workspace Hero Header */}
          <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-xl p-6 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] flex items-center justify-center font-bold text-lg text-[var(--color-text-primary)] font-mono">
                  {partner.name.substring(0, 2).toUpperCase()}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h1 className="text-xl font-bold text-[var(--color-text-primary)] tracking-tight">
                      {partner.name}
                    </h1>
                    {getPriorityBadge(partner.priority)}
                    <span className="px-2 py-0.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] font-mono text-xs font-semibold text-[var(--color-text-primary)]">
                      {partner.relationship_status}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--color-text-tertiary)] font-mono">
                    {partner.primary_category} &bull; {partner.geographic_reach} &bull; Strategic Score: <span className="text-[#34D399] font-bold">{partner.strategic_score} / 100</span>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 font-mono text-xs">
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={() => setIsPreviewOpen(true)}
                >
                  <Eye className="w-3.5 h-3.5 mr-1.5" />
                  <span>Preview Public Card</span>
                </Button>
                {partner.website_url && (
                  <a
                    href={partner.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Next Best Action Banner */}
            <div className="p-3 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-lg flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#2F8FFF] font-mono uppercase">NEXT BEST ACTION:</span>
                <span className="text-[var(--color-text-primary)]">{partner.next_best_action || 'Prepare executive proposition brief'}</span>
              </div>
              {partner.waiting_on && (
                <div className="flex items-center gap-1.5 text-[#FBBF24] font-mono text-[11px]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Waiting on: {partner.waiting_on}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 border-b border-[var(--color-border-default)] overflow-x-auto pb-1">
          {[
            { id: 'overview', label: 'Overview & Strategic Rationale', icon: Target },
            { id: 'score', label: 'Strategic Score', icon: Sparkles },
            { id: 'contacts', label: `Contacts (${contacts.length})`, icon: Users },
            { id: 'opportunities', label: `Opportunities (${opportunities.length})`, icon: Briefcase },
            { id: 'outreach', label: 'Outreach & Comms', icon: Mail },
            { id: 'tasks', label: `Tasks (${tasks.length})`, icon: CheckSquare },
            { id: 'documents', label: `Documents (${documents.length})`, icon: FileText },
            { id: 'launch_gate', label: 'Launch Gate', icon: ShieldCheck },
            { id: 'integration', label: 'Tech Integration', icon: Cpu },
            { id: 'metrics', label: 'Live Metrics', icon: TrendingUp },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3 py-2.5 rounded-lg text-xs font-mono font-semibold transition-colors flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? 'bg-[#2F8FFF] text-white shadow-sm'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-sunken)]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: OVERVIEW & STRATEGIC RATIONALE */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            
            {/* Why CareerOS wants them vs Why they want CareerOS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 space-y-3">
                <div className="space-y-1 border-b border-[var(--color-border-default)] pb-3">
                  <h3 className="text-xs font-bold text-[#2F8FFF] font-mono uppercase">
                    1. Why CareerOS Wants This Relationship
                  </h3>
                  <p className="text-[11px] text-[var(--color-text-tertiary)]">
                    Strategic necessity and user capability enhancement.
                  </p>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {partner.strategic_rationale || 'Strategic rationale pending documentation.'}
                </p>
              </Card>

              <Card className="p-6 space-y-3">
                <div className="space-y-1 border-b border-[var(--color-border-default)] pb-3">
                  <h3 className="text-xs font-bold text-[#34D399] font-mono uppercase">
                    2. Why They Should Want CareerOS
                  </h3>
                  <p className="text-[11px] text-[var(--color-text-tertiary)]">
                    Counterpart value proposition and partner incentives.
                  </p>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {partner.partner_value_proposition || 'Counterpart value proposition pending documentation.'}
                </p>
              </Card>
            </div>

            {/* 7-Part Partnership Hypothesis */}
            <Card className="p-6 space-y-5">
              <div className="space-y-1 border-b border-[var(--color-border-default)] pb-3">
                <h3 className="text-sm font-bold text-[var(--color-text-primary)] font-mono uppercase">
                  Partnership Hypothesis Framework
                </h3>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  7-dimension strategic validation before advancing to formal commercial agreements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-[var(--color-surface-sunken)] rounded-lg border border-[var(--color-border-default)] space-y-1">
                  <span className="font-bold text-[var(--color-text-primary)] font-mono">1. The Problem We Solve Together:</span>
                  <p className="text-[var(--color-text-secondary)]">{hypothesis.problem || 'Not specified'}</p>
                </div>

                <div className="p-3 bg-[var(--color-surface-sunken)] rounded-lg border border-[var(--color-border-default)] space-y-1">
                  <span className="font-bold text-[var(--color-text-primary)] font-mono">2. Who Benefits (User):</span>
                  <p className="text-[var(--color-text-secondary)]">{hypothesis.user || 'Not specified'}</p>
                </div>

                <div className="p-3 bg-[var(--color-surface-sunken)] rounded-lg border border-[var(--color-border-default)] space-y-1">
                  <span className="font-bold text-[var(--color-text-primary)] font-mono">3. CareerOS Contribution:</span>
                  <p className="text-[var(--color-text-secondary)]">{hypothesis.careerOSContribution || 'Not specified'}</p>
                </div>

                <div className="p-3 bg-[var(--color-surface-sunken)] rounded-lg border border-[var(--color-border-default)] space-y-1">
                  <span className="font-bold text-[var(--color-text-primary)] font-mono">4. Partner Contribution:</span>
                  <p className="text-[var(--color-text-secondary)]">{hypothesis.partnerContribution || 'Not specified'}</p>
                </div>

                <div className="p-3 bg-[var(--color-surface-sunken)] rounded-lg border border-[var(--color-border-default)] space-y-1">
                  <span className="font-bold text-[var(--color-text-primary)] font-mono">5. Joint Outcome:</span>
                  <p className="text-[var(--color-text-secondary)]">{hypothesis.jointOutcome || 'Not specified'}</p>
                </div>

                <div className="p-3 bg-[var(--color-surface-sunken)] rounded-lg border border-[var(--color-border-default)] space-y-1">
                  <span className="font-bold text-[var(--color-text-primary)] font-mono">6. Commercial Exchange Model:</span>
                  <p className="text-[var(--color-text-secondary)]">{hypothesis.commercialModel || 'Not specified'}</p>
                </div>

                <div className="p-3 bg-[var(--color-surface-sunken)] rounded-lg border border-[var(--color-border-default)] space-y-1 md:col-span-2">
                  <span className="font-bold text-[var(--color-text-primary)] font-mono">7. Concrete Proof Point:</span>
                  <p className="text-[var(--color-text-secondary)]">{hypothesis.proofPoint || 'Not specified'}</p>
                </div>
              </div>
            </Card>

          </div>
        )}

        {/* TAB 2: STRATEGIC SCORE */}
        {activeTab === 'score' && (
          <PartnershipStrategicScoreCard factors={partner.strategic_score_factors} />
        )}

        {/* TAB 3: CONTACTS */}
        {activeTab === 'contacts' && (
          <Card className="p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-[var(--color-border-default)] pb-4">
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[var(--color-text-primary)] font-mono uppercase">
                  Contact Intelligence &amp; Stakeholder Map
                </h3>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  Identified key decision makers, sponsors, and technical counterparts.
                </p>
              </div>
              <Button type="button" variant="secondary" size="sm" className="font-mono text-xs">
                <Plus className="w-3.5 h-3.5 mr-1" />
                <span>Add Contact</span>
              </Button>
            </div>

            {contacts.length === 0 ? (
              <div className="py-8 text-center text-xs font-mono text-[var(--color-text-tertiary)] space-y-2">
                <p>No verified contacts added yet for {partner.name}.</p>
                <p className="text-[11px] text-[var(--color-text-secondary)]">
                  Contact details are never manufactured. Identify authentic stakeholders via LinkedIn or warm introductions.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contacts.map((c) => (
                  <div key={c.id} className="p-4 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-[var(--color-text-primary)]">{c.first_name} {c.last_name}</span>
                      {c.is_primary_owner && <Badge variant="verified" size="sm">Primary Owner</Badge>}
                      {c.is_executive_sponsor && <Badge variant="brand" size="sm">Exec Sponsor</Badge>}
                    </div>
                    <p className="text-[11px] text-[var(--color-text-secondary)]">{c.job_title} &bull; {c.department}</p>
                    {c.email && <p className="text-[11px] text-[var(--color-text-tertiary)] font-mono">{c.email}</p>}
                  </div>
                ))}
              </div>
            )}
          </Card>
        )}

        {/* TAB 4: OPPORTUNITIES */}
        {activeTab === 'opportunities' && (
          <Card className="p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-[var(--color-border-default)] pb-4">
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[var(--color-text-primary)] font-mono uppercase">
                  Partnership Opportunities &amp; Models
                </h3>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  Distinct commercial, distribution, and API collaboration tracks.
                </p>
              </div>
              <Button type="button" variant="secondary" size="sm" className="font-mono text-xs">
                <Plus className="w-3.5 h-3.5 mr-1" />
                <span>Add Opportunity</span>
              </Button>
            </div>

            {opportunities.length === 0 ? (
              <div className="py-8 text-center text-xs font-mono text-[var(--color-text-tertiary)]">
                No active sub-opportunities recorded. Opportunities will track individual collaboration initiatives.
              </div>
            ) : (
              <div className="space-y-3">
                {opportunities.map((opp) => (
                  <div key={opp.id} className="p-4 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-lg space-y-1">
                    <div className="flex items-center justify-between font-bold text-xs text-[var(--color-text-primary)]">
                      <span>{opp.title}</span>
                      <span className="text-[#2F8FFF]">{opp.stage}</span>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)]">{opp.description}</p>
                  </div>
                ))}
              </div>
            )}
          </Card>
        )}

        {/* TAB 5: OUTREACH & COMMS */}
        {activeTab === 'outreach' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[var(--color-border-default)] pb-3">
                <h3 className="text-xs font-bold text-[var(--color-text-primary)] font-mono uppercase">
                  Executive Outreach Proposition Draft
                </h3>
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={handleCopyOutreachDraft}
                  className="font-mono text-xs"
                >
                  {copiedOutreach ? <Check className="w-3.5 h-3.5 mr-1 text-[#34D399]" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                  <span>{copiedOutreach ? 'Copied' : 'Copy Pitch'}</span>
                </Button>
              </div>

              <div className="p-3 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-lg font-mono text-[11px] space-y-2 text-[var(--color-text-secondary)]">
                <p><strong>Subject:</strong> CareerOS &lt;&gt; {partner.name} — Strategic Readiness &amp; Capability Integration</p>
                <p>Hi [Partner Lead],</p>
                <p>CareerOS is building a sovereign career operating system for individuals. We have identified {partner.name} as a vital strategic counterpart.</p>
                <p><strong>Our Proposition:</strong> {partner.partner_value_proposition || partner.strategic_rationale}</p>
                <p>Would you have 15 minutes next week for an introductory conversation?</p>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-xs font-bold text-[var(--color-text-primary)] font-mono uppercase border-b border-[var(--color-border-default)] pb-3">
                Communication History
              </h3>
              {activities.length === 0 ? (
                <div className="py-8 text-center text-xs font-mono text-[var(--color-text-tertiary)]">
                  No communications logged yet. Interactions are recorded as actual outreach occurs.
                </div>
              ) : (
                <div className="space-y-2">
                  {activities.map((act) => (
                    <div key={act.id} className="p-3 bg-[var(--color-surface-sunken)] rounded text-xs space-y-1">
                      <div className="flex items-center justify-between font-bold">
                        <span>{act.summary}</span>
                        <span className="text-[10px] text-[var(--color-text-tertiary)]">{act.activity_date}</span>
                      </div>
                      <p className="text-[11px] text-[var(--color-text-secondary)]">{act.details}</p>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>
        )}

        {/* TAB 6: TASKS */}
        {activeTab === 'tasks' && (
          <Card className="p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-[var(--color-border-default)] pb-4">
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[var(--color-text-primary)] font-mono uppercase">
                  Tasks &amp; Action Items
                </h3>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  Actionable workflow checklist with explicit external dependency tracking.
                </p>
              </div>
              <Button type="button" variant="secondary" size="sm" className="font-mono text-xs">
                <Plus className="w-3.5 h-3.5 mr-1" />
                <span>Add Task</span>
              </Button>
            </div>

            {tasks.length === 0 ? (
              <div className="py-8 text-center text-xs font-mono text-[var(--color-text-tertiary)]">
                No active tasks recorded for {partner.name}.
              </div>
            ) : (
              <div className="space-y-2">
                {tasks.map((t) => (
                  <div key={t.id} className="p-3 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-lg flex items-center justify-between text-xs">
                    <div className="space-y-0.5">
                      <span className="font-semibold text-[var(--color-text-primary)]">{t.title}</span>
                      {t.waiting_on_entity && (
                        <p className="text-[11px] text-[#FBBF24] font-mono">
                          Waiting on: {t.waiting_on_entity}
                        </p>
                      )}
                    </div>
                    <Badge variant={t.status === 'complete' ? 'success' : 'default'} size="sm" className="font-mono">
                      {t.status}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </Card>
        )}

        {/* TAB 7: DOCUMENTS */}
        {activeTab === 'documents' && (
          <Card className="p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-[var(--color-border-default)] pb-4">
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[var(--color-text-primary)] font-mono uppercase">
                  Contracts &amp; Legal Vault
                </h3>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  Secure storage for executed NDAs, DPAs, technical specifications, and MOUs.
                </p>
              </div>
              <Button type="button" variant="secondary" size="sm" className="font-mono text-xs">
                <Plus className="w-3.5 h-3.5 mr-1" />
                <span>Upload Document</span>
              </Button>
            </div>

            {documents.length === 0 ? (
              <div className="py-8 text-center text-xs font-mono text-[var(--color-text-tertiary)]">
                No legal documents stored yet for {partner.name}.
              </div>
            ) : (
              <div className="space-y-2">
                {documents.map((doc) => (
                  <div key={doc.id} className="p-3 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-lg flex items-center justify-between text-xs">
                    <span className="font-semibold text-[var(--color-text-primary)]">{doc.title}</span>
                    <span className="text-[11px] font-mono text-[var(--color-text-tertiary)]">v{doc.version} &bull; {doc.status}</span>
                  </div>
                ))}
              </div>
            )}
          </Card>
        )}

        {/* TAB 8: LAUNCH GATE */}
        {activeTab === 'launch_gate' && (
          <PartnershipLaunchGateCard
            compliance={compliance}
            partnerName={partner.name}
            onApplyOverride={(reason) => alert(`Executive override recorded: ${reason}`)}
          />
        )}

        {/* TAB 9: TECHNICAL INTEGRATION */}
        {activeTab === 'integration' && (
          <Card className="p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-[var(--color-border-default)] pb-4">
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[var(--color-text-primary)] font-mono uppercase">
                  Technical Architecture &amp; API Integration
                </h3>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  API endpoints, data direction, authentication credentials, and webhook health.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-lg font-mono text-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[var(--color-text-secondary)]">ARCHITECTURE PATTERN:</span>
                <span className="text-[#2F8FFF] font-bold">CAREEROS &lt;---&gt; {partner.name.toUpperCase()} API</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--color-text-secondary)]">AUTHENTICATION METHOD:</span>
                <span>OAuth 2.0 / Bearer Token</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--color-text-secondary)]">DATA PRIVACY BOUNDARY:</span>
                <span className="text-[#34D399]">Zero unredacted PII shared without user consent</span>
              </div>
            </div>
          </Card>
        )}

        {/* TAB 10: LIVE METRICS */}
        {activeTab === 'metrics' && (
          <Card className="p-6 space-y-4">
            <h3 className="text-sm font-bold text-[var(--color-text-primary)] font-mono uppercase border-b border-[var(--color-border-default)] pb-3">
              Live Performance &amp; Value Attribution
            </h3>
            {metrics.length === 0 ? (
              <div className="py-8 text-center text-xs font-mono text-[var(--color-text-tertiary)] space-y-1">
                <p>No reporting data available.</p>
                <p className="text-[11px] text-[var(--color-text-secondary)]">
                  Metrics populate automatically once technical integration is live and producing data.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {metrics.map((m) => (
                  <div key={m.id} className="p-3 bg-[var(--color-surface-sunken)] rounded text-xs flex justify-between">
                    <span>{m.reporting_period}</span>
                    <span className="font-bold">{m.users_supported} users supported</span>
                  </div>
                ))}
              </div>
            )}
          </Card>
        )}

      </div>

      {/* Public Preview Modal */}
      <PartnershipPublicPreviewModal
        partner={partner}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        onTogglePublish={async (approved) => {
          setPartner((prev) => (prev ? { ...prev, public_display_approved: approved } : null));
          setIsPreviewOpen(false);
        }}
      />
    </div>
  );
}
