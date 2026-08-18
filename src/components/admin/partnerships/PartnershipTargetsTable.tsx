'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Partner, PartnerPriorityLevel } from '@/types/admin/partnerships';
import { Badge } from '@/components/ui/Badge';
import { Search, Filter, ArrowUpDown, ChevronRight, ExternalLink, Clock, Sparkles } from 'lucide-react';

interface Props {
  partners: Partner[];
}

export function PartnershipTargetsTable({ partners }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [priorityFilter, setPriorityFilter] = useState('ALL');
  const [stageFilter, setStageFilter] = useState('ALL');

  const categories = Array.from(new Set(partners.map((p) => p.primary_category))).sort();

  const filteredPartners = partners.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.description && p.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (p.strategic_rationale && p.strategic_rationale.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = categoryFilter === 'ALL' || p.primary_category === categoryFilter;
    const matchesPriority = priorityFilter === 'ALL' || p.priority === priorityFilter;
    const matchesStage = stageFilter === 'ALL' || p.relationship_status === stageFilter;

    return matchesSearch && matchesCategory && matchesPriority && matchesStage;
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

  const getScoreBadge = (score: number) => {
    if (score >= 85) return <span className="text-[#34D399] font-mono font-bold">{score} / 100</span>;
    if (score >= 70) return <span className="text-[#2F8FFF] font-mono font-bold">{score} / 100</span>;
    if (score >= 50) return <span className="text-[#FBBF24] font-mono font-bold">{score} / 100</span>;
    return <span className="text-[#F87171] font-mono font-bold">{score} / 100</span>;
  };

  return (
    <div className="space-y-4">
      {/* Search & Filter Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-xl p-4">
        {/* Search */}
        <div className="relative">
          <label htmlFor="search-targets" className="sr-only">Search Targets</label>
          <Search className="w-4 h-4 text-[var(--color-text-tertiary)] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            id="search-targets"
            type="text"
            placeholder="Search targets or rationale…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)] font-mono"
          />
        </div>

        {/* Priority Filter */}
        <div>
          <label htmlFor="filter-priority" className="sr-only">Filter by Priority</label>
          <select
            id="filter-priority"
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)] font-mono"
          >
            <option value="ALL">All Priorities</option>
            <option value="P0">P0 Strategic</option>
            <option value="P1">P1 High Priority</option>
            <option value="P2">P2 Valuable</option>
            <option value="INFRASTRUCTURE">Infrastructure Resources</option>
          </select>
        </div>

        {/* Category Filter */}
        <div>
          <label htmlFor="filter-category" className="sr-only">Filter by Category</label>
          <select
            id="filter-category"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)] font-mono"
          >
            <option value="ALL">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Stage Filter */}
        <div>
          <label htmlFor="filter-stage" className="sr-only">Filter by Stage</label>
          <select
            id="filter-stage"
            value={stageFilter}
            onChange={(e) => setStageFilter(e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)] font-mono"
          >
            <option value="ALL">All Stages</option>
            <option value="IDENTIFIED">Identified</option>
            <option value="RESEARCHING">Researching</option>
            <option value="QUALIFIED">Qualified</option>
            <option value="DISCOVERY">Discovery</option>
            <option value="PROPOSAL">Proposal</option>
            <option value="LEGAL_PROCUREMENT">Legal / Procurement</option>
            <option value="INTEGRATION">Integration</option>
            <option value="LIVE">Live</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[var(--color-surface-sunken)] border-b border-[var(--color-border-default)] font-mono uppercase text-[10px] text-[var(--color-text-secondary)]">
              <tr>
                <th className="py-3 px-4">Organization / Scope</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Priority</th>
                <th className="py-3 px-4">Pipeline Stage</th>
                <th className="py-3 px-4 text-right">Strategic Score</th>
                <th className="py-3 px-4">Next Best Action</th>
                <th className="py-3 px-4">Waiting On</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-subtle)]">
              {filteredPartners.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-xs font-mono text-[var(--color-text-tertiary)]">
                    No partnership targets match the selected criteria.
                  </td>
                </tr>
              ) : (
                filteredPartners.map((p) => (
                  <tr key={p.id} className="hover:bg-[var(--color-surface-sunken)] transition-colors group">
                    {/* Name & Scope */}
                    <td className="py-3 px-4">
                      <div className="space-y-0.5">
                        <Link
                          href={`/admin/partnerships/${p.slug}`}
                          className="font-bold text-[var(--color-text-primary)] hover:text-[#2F8FFF] transition-colors"
                        >
                          {p.name}
                        </Link>
                        <p className="text-[11px] text-[var(--color-text-tertiary)] line-clamp-1 max-w-xs">
                          {p.strategic_rationale || p.description}
                        </p>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] text-[11px] font-mono text-[var(--color-text-secondary)]">
                        {p.primary_category}
                      </span>
                    </td>

                    {/* Priority */}
                    <td className="py-3 px-4">
                      {getPriorityBadge(p.priority)}
                    </td>

                    {/* Stage */}
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] font-mono text-[11px] text-[var(--color-text-primary)] font-semibold">
                        {p.relationship_status}
                      </span>
                    </td>

                    {/* Score */}
                    <td className="py-3 px-4 text-right">
                      {getScoreBadge(p.strategic_score)}
                    </td>

                    {/* Next Action */}
                    <td className="py-3 px-4">
                      <span className="text-[11px] text-[var(--color-text-secondary)] line-clamp-2 max-w-xs">
                        {p.next_best_action || 'Define initial outreach pathway'}
                      </span>
                    </td>

                    {/* Waiting On */}
                    <td className="py-3 px-4">
                      {p.waiting_on ? (
                        <div className="flex items-center gap-1 text-[11px] text-[#FBBF24] font-mono">
                          <Clock className="w-3 h-3 shrink-0" />
                          <span className="truncate max-w-[120px]">{p.waiting_on}</span>
                        </div>
                      ) : (
                        <span className="text-[11px] text-[var(--color-text-tertiary)] font-mono">—</span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-4 text-right">
                      <Link
                        href={`/admin/partnerships/${p.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#2F8FFF] hover:underline font-mono"
                      >
                        <span>Workspace</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
