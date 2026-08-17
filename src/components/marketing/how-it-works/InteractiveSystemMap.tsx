'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SYSTEM_MAP_NODES, SystemNodeInfo } from './howItWorksData';
import { cn } from '@/lib/utils';
import {
  User,
  Bot,
  UserCheck,
  Award,
  Compass,
  Sparkles,
  Building,
  ArrowRight,
  Shield,
  Layers,
  ChevronRight,
} from 'lucide-react';

const NODE_ICONS: Record<string, React.ElementType> = {
  twin: UserCheck,
  mentor: Bot,
  passport: Award,
  graph: Compass,
  opportunity: Sparkles,
  employer: Building,
};

export function InteractiveSystemMap() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('twin');
  const activeNode: SystemNodeInfo =
    SYSTEM_MAP_NODES.find((n) => n.id === selectedNodeId) ?? SYSTEM_MAP_NODES[0]!;

  return (
    <div
      id="system-map"
      className="w-full bg-[var(--background-dark-deep)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl space-y-0"
      role="region"
      aria-label="Interactive Career OS System Map"
    >
      {/* Header bar */}
      <div className="p-6 sm:p-8 bg-black/40 border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)] flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            Connected Career Architecture
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
            You at the centre. One evolving system.
          </h3>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]/60 text-[var(--color-text-tertiary)] self-start sm:self-auto">
          Interactive System Explorer
        </span>
      </div>

      {/* Main Grid: Visual Topology Canvas (Left) + Detail Inspector (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] border-b border-[var(--color-border-default)]">
        {/* Left: Human-Centric System Canvas */}
        <div className="p-6 sm:p-10 relative flex flex-col items-center justify-center bg-[var(--color-surface-base)] border-b lg:border-b-0 lg:border-r border-[var(--color-border-default)] min-h-[460px]">
          {/* Subtle background coordinate grid */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, var(--color-text-primary) 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Privacy boundary line behind employer node */}
          <div className="absolute right-4 sm:right-8 top-6 bottom-6 w-px border-r border-dashed border-purple-500/30 hidden sm:block pointer-events-none">
            <span className="absolute -top-3 -right-2 text-[9px] font-mono uppercase tracking-wider text-purple-400 bg-[var(--background-dark-deep)] px-1">
              Permission Boundary
            </span>
          </div>

          {/* System Diagram Nodes Layout */}
          <div className="relative w-full max-w-md my-auto space-y-6">
            
            {/* Top Node: Career Graph */}
            <div className="flex justify-center">
              <button
                onClick={() => setSelectedNodeId('graph')}
                aria-pressed={selectedNodeId === 'graph'}
                className={cn(
                  'px-4 py-2.5 rounded-lg border text-xs font-medium flex items-center gap-2 transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400',
                  selectedNodeId === 'graph'
                    ? 'border-purple-500 bg-purple-500/15 text-white ring-1 ring-purple-500 shadow-purple-500/20'
                    : 'border-[var(--color-border-default)] bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-border-strong)]'
                )}
              >
                <Compass className="w-4 h-4 text-purple-400" />
                <span>Career Graph</span>
                <span className="text-[9px] font-mono text-purple-300/70 uppercase">Possibilities</span>
              </button>
            </div>

            {/* Connecting line Top -> Center */}
            <div className="w-px h-6 bg-gradient-to-b from-purple-500/40 to-white/20 mx-auto" />

            {/* Middle Row: Passport <-> YOU <-> Mentor <-> (Employer outside) */}
            <div className="flex items-center justify-between gap-2 sm:gap-4">
              {/* Left: Career Passport */}
              <button
                onClick={() => setSelectedNodeId('passport')}
                aria-pressed={selectedNodeId === 'passport'}
                className={cn(
                  'px-3 sm:px-4 py-2.5 rounded-lg border text-xs font-medium flex items-center gap-2 transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400',
                  selectedNodeId === 'passport'
                    ? 'border-blue-500 bg-blue-500/15 text-white ring-1 ring-blue-500 shadow-blue-500/20'
                    : 'border-[var(--color-border-default)] bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-border-strong)]'
                )}
              >
                <Award className="w-4 h-4 text-blue-400" />
                <div className="text-left">
                  <div className="leading-tight">Passport</div>
                  <div className="text-[9px] font-mono text-blue-300/70 uppercase">Evidence</div>
                </div>
              </button>

              {/* Connecting line */}
              <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 via-white/40 to-emerald-500/30" />

              {/* Center: YOU */}
              <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border-2 border-white/80 bg-white/10 flex items-center justify-center shadow-lg shadow-white/10">
                  <User className="w-6 h-6 text-white" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white font-bold mt-1.5">
                  YOU
                </span>
              </div>

              {/* Connecting line */}
              <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/30 via-white/40 to-amber-500/30" />

              {/* Right: AI Career Mentor */}
              <button
                onClick={() => setSelectedNodeId('mentor')}
                aria-pressed={selectedNodeId === 'mentor'}
                className={cn(
                  'px-3 sm:px-4 py-2.5 rounded-lg border text-xs font-medium flex items-center gap-2 transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400',
                  selectedNodeId === 'mentor'
                    ? 'border-emerald-500 bg-emerald-500/15 text-white ring-1 ring-emerald-500 shadow-emerald-500/20'
                    : 'border-[var(--color-border-default)] bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-border-strong)]'
                )}
              >
                <Bot className="w-4 h-4 text-emerald-400" />
                <div className="text-left">
                  <div className="leading-tight">Mentor</div>
                  <div className="text-[9px] font-mono text-emerald-300/70 uppercase">Guidance</div>
                </div>
              </button>
            </div>

            {/* Connecting line Center -> Bottom */}
            <div className="w-px h-6 bg-gradient-to-b from-white/20 to-[var(--color-brand-500)]/40 mx-auto" />

            {/* Bottom Row 1: Career Twin */}
            <div className="flex justify-center">
              <button
                onClick={() => setSelectedNodeId('twin')}
                aria-pressed={selectedNodeId === 'twin'}
                className={cn(
                  'px-4 py-2.5 rounded-lg border text-xs font-medium flex items-center gap-2 transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-400)]',
                  selectedNodeId === 'twin'
                    ? 'border-[var(--color-brand-500)] bg-[var(--color-brand-950)]/60 text-white ring-1 ring-[var(--color-brand-500)] shadow-[var(--color-brand-500)]/20'
                    : 'border-[var(--color-border-default)] bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-border-strong)]'
                )}
              >
                <UserCheck className="w-4 h-4 text-[var(--color-brand-400)]" />
                <span>Career Twin</span>
                <span className="text-[9px] font-mono text-[var(--color-brand-300)] uppercase">Context Layer</span>
              </button>
            </div>

            {/* Connecting line Twin -> Opportunity & Employer */}
            <div className="w-px h-6 bg-gradient-to-b from-[var(--color-brand-500)]/40 to-amber-500/40 mx-auto" />

            {/* Bottom Row 2: Opportunity Agent & Employer Agent */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setSelectedNodeId('opportunity')}
                aria-pressed={selectedNodeId === 'opportunity'}
                className={cn(
                  'px-3 py-2 rounded-lg border text-xs font-medium flex items-center justify-center gap-1.5 transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400',
                  selectedNodeId === 'opportunity'
                    ? 'border-amber-500 bg-amber-500/15 text-white ring-1 ring-amber-500 shadow-amber-500/20'
                    : 'border-[var(--color-border-default)] bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-border-strong)]'
                )}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Opportunity Agent</span>
              </button>

              <button
                onClick={() => setSelectedNodeId('employer')}
                aria-pressed={selectedNodeId === 'employer'}
                className={cn(
                  'px-3 py-2 rounded-lg border text-xs font-medium flex items-center justify-center gap-1.5 transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400',
                  selectedNodeId === 'employer'
                    ? 'border-purple-500 bg-purple-500/15 text-white ring-1 ring-purple-500 shadow-purple-500/20'
                    : 'border-purple-500/30 bg-purple-950/20 text-purple-200 hover:text-white hover:border-purple-500/60'
                )}
              >
                <Building className="w-3.5 h-3.5 text-purple-400" />
                <span>Employer Agent</span>
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
              Click any component to inspect how it connects with your career
            </span>
          </div>
        </div>

        {/* Right: Detailed Node Inspector */}
        <div className="p-6 sm:p-8 bg-[var(--color-surface-raised)] flex flex-col justify-between space-y-6" aria-live="polite">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-brand-400)] px-2.5 py-0.5 rounded border border-[var(--color-brand-500)]/30 bg-[var(--color-brand-950)]/40">
                {activeNode.badge}
              </span>
              <span className="text-[10px] text-[var(--color-text-tertiary)] font-mono">
                Component {SYSTEM_MAP_NODES.findIndex((n) => n.id === activeNode.id) + 1} of {SYSTEM_MAP_NODES.length}
              </span>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-xl sm:text-2xl font-serif text-white font-normal">
                {activeNode.name}
              </h4>
              <p className="text-sm text-purple-300 font-medium leading-snug">
                {activeNode.headline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {activeNode.description}
            </p>

            <div className="p-4 rounded-lg bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Role in the Connected Operating System</span>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {activeNode.roleInSystem}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[var(--color-border-default)] flex items-center justify-between gap-4">
            <Link
              href={activeNode.href}
              className="text-xs font-semibold text-white hover:text-purple-300 inline-flex items-center gap-1.5 transition-colors group"
            >
              <span>Explore {activeNode.name}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <div className="flex gap-1.5">
              {SYSTEM_MAP_NODES.map((node) => (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  aria-label={`View ${node.name}`}
                  className={cn(
                    'w-2.5 h-2.5 rounded-full transition-all',
                    node.id === selectedNodeId ? 'bg-purple-400 w-6' : 'bg-white/20 hover:bg-white/40'
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav Tabs for direct switching */}
      <div className="p-4 bg-black/40 flex items-center justify-center gap-2 flex-wrap text-xs">
        <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase mr-2">
          Explore System:
        </span>
        {SYSTEM_MAP_NODES.map((node) => {
          const Icon = NODE_ICONS[node.id] || Sparkles;
          const isSelected = node.id === selectedNodeId;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNodeId(node.id)}
              className={cn(
                'px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all',
                isSelected
                  ? 'bg-white/15 text-white border border-white/30'
                  : 'text-[var(--color-text-tertiary)] hover:text-white hover:bg-white/5'
              )}
            >
              <Icon className="w-3 h-3" />
              {node.shortLabel}
            </button>
          );
        })}
      </div>
    </div>
  );
}
