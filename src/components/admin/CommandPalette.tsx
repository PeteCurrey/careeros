'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/lib/routes';
import {
  Search,
  LayoutDashboard,
  Calendar,
  Users,
  Building2,
  FileText,
  Cpu,
  Mail,
  Settings,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

interface SearchOption {
  title: string;
  category: string;
  href: string;
  icon: React.ElementType;
}

const SEARCH_OPTIONS: SearchOption[] = [
  { title: 'Command Center', category: 'Overview', href: ROUTES.ADMIN, icon: LayoutDashboard },
  { title: 'Action Center', category: 'Overview', href: ROUTES.ADMIN_ACTION_CENTER, icon: LayoutDashboard },
  { title: 'Compliance & Assurance', category: 'Compliance', href: ROUTES.ADMIN_COMPLIANCE, icon: ShieldCheck },
  { title: 'AI Decision Governance', category: 'Compliance', href: ROUTES.ADMIN_COMPLIANCE_AI_GOVERNANCE, icon: ShieldCheck },
  { title: 'Evidence Vault', category: 'Compliance', href: ROUTES.ADMIN_COMPLIANCE_EVIDENCE, icon: ShieldCheck },
  { title: 'Compliance Document Requests', category: 'Compliance', href: ROUTES.ADMIN_COMPLIANCE_REQUESTS, icon: ShieldCheck },
  { title: 'CMS Pages', category: 'Content', href: ROUTES.ADMIN_CONTENT_PAGES, icon: FileText },
  { title: 'Media Library', category: 'Content', href: ROUTES.ADMIN_CONTENT_MEDIA, icon: FileText },
  { title: 'SEO Control Center', category: 'Growth', href: ROUTES.ADMIN_GROWTH_SEO, icon: FileText },
  { title: 'Redirects Manager', category: 'Content', href: ROUTES.ADMIN_CONTENT_REDIRECTS, icon: FileText },
  { title: 'Published Events', category: 'Events', href: ROUTES.ADMIN_EVENTS_PUBLISHED, icon: Calendar },
  { title: 'Event Submission Queue', category: 'Events', href: ROUTES.ADMIN_EVENTS_SUBMISSIONS, icon: Calendar },
  { title: 'Autonomous Discovery Queue', category: 'Events', href: ROUTES.ADMIN_EVENTS_DISCOVERY, icon: Calendar },
  { title: 'Event Source Registry', category: 'Events', href: ROUTES.ADMIN_EVENTS_SOURCES, icon: Calendar },
  { title: 'Event Discovery Runs', category: 'Events', href: ROUTES.ADMIN_EVENTS_DISCOVERY_RUNS, icon: Calendar },
  { title: 'Event Categories', category: 'Events', href: ROUTES.ADMIN_EVENTS_CATEGORIES, icon: Calendar },
  { title: 'Event Organizers', category: 'Events', href: ROUTES.ADMIN_EVENTS_ORGANIZERS, icon: Calendar },
  { title: 'User Management', category: 'Users', href: ROUTES.ADMIN_USERS, icon: Users },
  { title: 'Trust & Safety', category: 'Users', href: ROUTES.ADMIN_USERS_TRUST_SAFETY, icon: Users },
  { title: 'Organizations Directory', category: 'Organizations', href: ROUTES.ADMIN_ORGANIZATIONS, icon: Building2 },
  { title: 'AI Providers & Models', category: 'AI Control', href: ROUTES.ADMIN_AI_PROVIDERS, icon: Cpu },
  { title: 'AI Use-Case Routing', category: 'AI Control', href: ROUTES.ADMIN_AI_ROUTING, icon: Cpu },
  { title: 'AI Prompts Registry', category: 'AI Control', href: ROUTES.ADMIN_AI_PROMPTS, icon: Cpu },
  { title: 'AI Usage & Costs', category: 'AI Control', href: ROUTES.ADMIN_AI_USAGE, icon: Cpu },
  { title: 'Email Templates', category: 'Communications', href: ROUTES.ADMIN_COMMS_TEMPLATES, icon: Mail },
  { title: 'Campaigns', category: 'Communications', href: ROUTES.ADMIN_COMMS_CAMPAIGNS, icon: Mail },
  { title: 'Traffic Analytics', category: 'Growth', href: ROUTES.ADMIN_GROWTH_TRAFFIC, icon: LayoutDashboard },
  { title: 'Search Console', category: 'Growth', href: ROUTES.ADMIN_GROWTH_SEARCH_CONSOLE, icon: LayoutDashboard },
  { title: 'Revenue Center', category: 'Revenue', href: ROUTES.ADMIN_REVENUE, icon: LayoutDashboard },
  { title: 'System Integrations', category: 'System', href: ROUTES.ADMIN_SYSTEM_INTEGRATIONS, icon: Settings },
  { title: 'Scheduled Jobs', category: 'System', href: ROUTES.ADMIN_SYSTEM_JOBS, icon: Settings },
  { title: 'Feature Flags', category: 'System', href: ROUTES.ADMIN_SYSTEM_FEATURE_FLAGS, icon: Settings },
  { title: 'System Audit Trail', category: 'System', href: ROUTES.ADMIN_SYSTEM_AUDIT, icon: Settings },
];

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filtered = query.trim() === ''
    ? SEARCH_OPTIONS.slice(0, 10)
    : SEARCH_OPTIONS.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          router.push(filtered[selectedIndex].href);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, router, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/60 backdrop-blur-xs p-4">
      <div
        className="w-full max-w-2xl bg-[var(--color-surface-raised)] border border-[var(--color-border-strong)] rounded-md shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--color-border-default)]">
          <Search className="w-4 h-4 text-[#2F8FFF] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command, search modules, events, users, or settings..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] outline-none"
          />
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-mono text-[var(--color-text-tertiary)] bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs text-[var(--color-text-tertiary)]">
              No matching admin command or view found.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.href + item.title}
                  type="button"
                  onClick={() => {
                    router.push(item.href);
                    onClose();
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-left text-xs transition-colors ${
                    isSelected
                      ? 'bg-[#2F8FFF] text-white'
                      : 'text-[var(--color-text-primary)] hover:bg-[var(--color-surface-interactive)]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-[#2F8FFF]'}`} />
                    <span className="font-medium truncate">{item.title}</span>
                    <span
                      className={`text-[10px] font-mono uppercase px-1.5 py-0.2 rounded ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)]'
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-[var(--color-surface-sunken)] border-t border-[var(--color-border-default)] flex items-center justify-between text-[11px] text-[var(--color-text-tertiary)] font-mono">
          <span>Use ↑ ↓ to navigate</span>
          <span>↵ Select</span>
        </div>
      </div>
    </div>
  );
}
