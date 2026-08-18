'use client';

import React from 'react';
import { 
  Users, 
  Building2, 
  GraduationCap, 
  Briefcase, 
  Wrench, 
  Award, 
  ShieldCheck, 
  Compass, 
  Bot, 
  Calendar, 
  Lock, 
  CheckCircle2,
  Sparkles,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function HeroEcosystemVisual() {
  const outerPartners = [
    { title: 'Schools & Districts', icon: GraduationCap, color: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-950/40', role: 'Human Guidance & Care' },
    { title: 'Employers & Enterprise', icon: Building2, color: 'text-[#6BB8FF]', border: 'border-blue-500/30', bg: 'bg-blue-950/40', role: 'Real Roles & Insight' },
    { title: 'Apprenticeship Providers', icon: Wrench, color: 'text-amber-400', border: 'border-amber-500/30', bg: 'bg-amber-950/40', role: 'Work-Based Learning' },
    { title: 'Colleges & Universities', icon: GraduationCap, color: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-950/40', role: 'Degree & Technical Paths' },
    { title: 'Credential Issuers', icon: Award, color: 'text-rose-400', border: 'border-rose-500/30', bg: 'bg-rose-950/40', role: 'Verified Provenance' },
    { title: 'Event Organisers', icon: Calendar, color: 'text-sky-400', border: 'border-sky-500/30', bg: 'bg-sky-950/40', role: 'Fairs & Workshops' },
  ];

  return (
    <div className="w-full space-y-4">
      {/* Visual Subtitle Tag */}
      <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-tertiary)] px-1">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#2F8FFF] shadow-[0_0_6px_rgba(47,143,255,0.7)]" />
          <span>CAREER OS &bull; CONNECTED CAREER ECOSYSTEM</span>
        </span>
        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] uppercase font-bold tracking-wider hidden sm:inline-block">
          Illustrative Career OS Ecosystem
        </span>
      </div>

      {/* Main Ecosystem Container with gentle glassmorphism */}
      <div className="w-full bg-[var(--color-surface-raised)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl border-beam-container border-beam-slow">
        
        {/* Top Window Bar */}
        <div className="px-5 py-3.5 bg-[var(--color-surface-sunken)]/60 backdrop-blur-sm border-b border-[var(--color-border-default)] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2.5 text-[var(--color-text-secondary)]">
            <span className="w-2 h-2 rounded-full bg-[#2F8FFF]" />
            <span className="font-semibold text-white">ONE STUDENT &bull; MANY CONTRIBUTORS</span>
            <span className="text-[var(--color-text-tertiary)] hidden md:inline">| Sovereign Learner at the Centre</span>
          </div>
          <span className="text-[11px] text-emerald-400 flex items-center gap-1.5 font-sans font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Strict Privacy Segregation</span>
          </span>
        </div>

        {/* Ecosystem Stage: Centre Student Core + Surrounding Partner Satellites */}
        <div className="p-6 sm:p-10 space-y-8 bg-[var(--color-surface-base)]/40">
          
          {/* Top Banner Rule */}
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h3 className="text-base sm:text-lg font-serif text-white font-normal">
              &ldquo;One student. Many contributors. One career journey.&rdquo;
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Organisations contribute authentic pathways, opportunities, and verified credentials into the ecosystem without taking ownership of the student&apos;s private career context.
            </p>
          </div>

          {/* Central Architectural Hub */}
          <div className="relative p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-base)]/80 backdrop-blur-md border border-[rgba(47,143,255,0.3)] shadow-inner max-w-3xl mx-auto space-y-6">
            
            {/* Core Student Identity Pill */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 border-2 border-[#2F8FFF] flex items-center justify-center text-white shadow-[0_0_12px_rgba(47,143,255,0.3)] shrink-0">
                  <Users className="w-6 h-6 text-[#2F8FFF]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-blue-500/10 text-[#6BB8FF] border border-blue-500/20 font-bold">
                      CENTRAL LEARNER
                    </span>
                    <span className="text-xs font-mono text-[var(--color-text-tertiary)]">Student Sovereign Account</span>
                  </div>
                  <h4 className="text-lg font-serif text-white font-medium mt-0.5">
                    Individual Career Relationship
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/30 px-3 py-1.5 rounded border border-emerald-500/20">
                <Lock className="w-3.5 h-3.5" />
                <span>Zero Recruiter Sourcing of Minors</span>
              </div>
            </div>

            {/* Career OS Connecting Concepts Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-[var(--color-surface-raised)]/60 backdrop-blur-sm rounded border border-[var(--color-border-default)] space-y-1 text-center sm:text-left">
                <div className="flex items-center gap-1.5 text-purple-300 font-semibold text-[11px]">
                  <Bot className="w-3.5 h-3.5 text-purple-400" />
                  <span>AI Career Mentor</span>
                </div>
                <p className="text-[10px] text-[var(--color-text-tertiary)] leading-tight">
                  Patient exploration, private 24/7 coaching
                </p>
              </div>

              <div className="p-3 bg-[var(--color-surface-raised)]/60 backdrop-blur-sm rounded border border-[var(--color-border-default)] space-y-1 text-center sm:text-left">
                <div className="flex items-center gap-1.5 text-emerald-300 font-semibold text-[11px]">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Career Passport</span>
                </div>
                <p className="text-[10px] text-[var(--color-text-tertiary)] leading-tight">
                  Portable, verified evidence &amp; artifacts
                </p>
              </div>

              <div className="p-3 bg-[var(--color-surface-raised)]/60 backdrop-blur-sm rounded border border-[var(--color-border-default)] space-y-1 text-center sm:text-left">
                <div className="flex items-center gap-1.5 text-[#6BB8FF] font-semibold text-[11px]">
                  <Compass className="w-3.5 h-3.5 text-[#2F8FFF]" />
                  <span>Career Graph</span>
                </div>
                <p className="text-[10px] text-[var(--color-text-tertiary)] leading-tight">
                  Topological cross-industry pathway map
                </p>
              </div>

              <div className="p-3 bg-[var(--color-surface-raised)]/60 backdrop-blur-sm rounded border border-[var(--color-border-default)] space-y-1 text-center sm:text-left">
                <div className="flex items-center gap-1.5 text-amber-300 font-semibold text-[11px]">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Opportunities</span>
                </div>
                <p className="text-[10px] text-[var(--color-text-tertiary)] leading-tight">
                  Apprenticeships, open days &amp; events
                </p>
              </div>
            </div>

          </div>

          {/* Surrounding Contributing Partner Nodes */}
          <div className="space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] text-center">
              Trusted Contributing Partner Nodes (Controlled Perimeter)
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {outerPartners.map((partner) => {
                const Icon = partner.icon;
                return (
                  <div
                    key={partner.title}
                    className="p-3.5 rounded-lg bg-[var(--color-surface-base)]/60 backdrop-blur-sm border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-all flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border', partner.bg, partner.border, partner.color)}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{partner.title}</div>
                        <div className="text-[11px] text-[var(--color-text-tertiary)] font-mono">{partner.role}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                      Active Node
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="p-4 bg-black/30 backdrop-blur-sm border-t border-[var(--color-border-default)] text-xs text-[var(--color-text-tertiary)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="italic">
            &ldquo;Career OS is the connective layer — not a pay-to-access data broker.&rdquo;
          </span>
          <span className="font-mono text-[11px] text-[var(--color-taupe-300)]">
            Purpose-Bound Participation &bull; Zero Data Sale
          </span>
        </div>

      </div>
    </div>
  );
}
