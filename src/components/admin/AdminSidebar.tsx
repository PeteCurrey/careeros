'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/lib/routes';
import { AdminRole } from '@/types/admin';
import {
  LayoutDashboard,
  AlertCircle,
  FileText,
  Calendar,
  Briefcase,
  Users,
  Building2,
  Cpu,
  TrendingUp,
  Mail,
  DollarSign,
  Settings,
  ChevronDown,
  ChevronRight,
  Shield,
  ShieldCheck,
  FileCheck,
  Search,
  Sparkles,
  ExternalLink,
  Handshake,
  Database,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface AdminSidebarProps {
  userRole?: AdminRole;
  userEmail?: string;
  counts?: {
    pendingReviews?: number;
    discoveryCandidates?: number;
    failedJobs?: number;
  };
}

interface NavSection {
  title: string;
  items: {
    title: string;
    href: string;
    icon: React.ElementType;
    badge?: number | string;
    badgeVariant?: 'brand' | 'warning' | 'danger';
    subItems?: {
      title: string;
      href: string;
      badge?: number | string;
    }[];
  }[];
}

export function AdminSidebar({ userRole = 'read_only', userEmail, counts }: AdminSidebarProps) {
  const pathname = usePathname();
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setCollapsedSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const navSections: NavSection[] = [
    {
      title: 'OVERVIEW',
      items: [
        {
          title: 'Command Center',
          href: ROUTES.ADMIN,
          icon: LayoutDashboard,
        },
        {
          title: 'Action Center',
          href: ROUTES.ADMIN_ACTION_CENTER,
          icon: AlertCircle,
          badge: (counts?.pendingReviews || 0) + (counts?.discoveryCandidates || 0) > 0 
            ? (counts?.pendingReviews || 0) + (counts?.discoveryCandidates || 0) 
            : undefined,
          badgeVariant: 'warning',
        },
      ],
    },
    {
      title: 'CONTENT',
      items: [
        {
          title: 'CMS Pages',
          href: ROUTES.ADMIN_CONTENT_PAGES,
          icon: FileText,
          subItems: [
            { title: 'All Pages', href: ROUTES.ADMIN_CONTENT_PAGES },
            { title: 'Articles / Resources', href: ROUTES.ADMIN_CONTENT_ARTICLES },
            { title: 'Media Library', href: ROUTES.ADMIN_CONTENT_MEDIA },
            { title: 'Navigation', href: ROUTES.ADMIN_CONTENT_NAVIGATION },
            { title: 'CTAs', href: ROUTES.ADMIN_CONTENT_CTAS },
            { title: 'Redirects', href: ROUTES.ADMIN_CONTENT_REDIRECTS },
          ],
        },
      ],
    },
    {
      title: 'EVENTS',
      items: [
        {
          title: 'Events Platform',
          href: ROUTES.ADMIN_EVENTS,
          icon: Calendar,
          subItems: [
            { title: 'Overview', href: ROUTES.ADMIN_EVENTS },
            { title: 'Published Events', href: ROUTES.ADMIN_EVENTS_PUBLISHED },
            { 
              title: 'Submitted Queue', 
              href: ROUTES.ADMIN_EVENTS_SUBMISSIONS,
              badge: counts?.pendingReviews || undefined,
            },
            { 
              title: 'Discovery Queue', 
              href: ROUTES.ADMIN_EVENTS_DISCOVERY,
              badge: counts?.discoveryCandidates || undefined,
            },
            { title: 'Source Registry', href: ROUTES.ADMIN_EVENTS_SOURCES },
            { title: 'Discovery Runs', href: ROUTES.ADMIN_EVENTS_DISCOVERY_RUNS },
            { title: 'Categories', href: ROUTES.ADMIN_EVENTS_CATEGORIES },
            { title: 'Organizers', href: ROUTES.ADMIN_EVENTS_ORGANIZERS },
            { title: 'Promotions', href: ROUTES.ADMIN_EVENTS_PROMOTIONS },
          ],
        },
      ],
    },
    {
      title: 'OPPORTUNITIES',
      items: [
        {
          title: 'Jobs & Careers',
          href: ROUTES.ADMIN_OPPORTUNITIES_JOBS,
          icon: Briefcase,
          subItems: [
            { title: 'All Jobs', href: ROUTES.ADMIN_OPPORTUNITIES_JOBS },
            { title: 'Employer Submissions', href: ROUTES.ADMIN_OPPORTUNITIES_SUBMISSIONS },
            { title: 'Employers', href: ROUTES.ADMIN_OPPORTUNITIES_EMPLOYERS },
            { title: 'Job Sources', href: ROUTES.ADMIN_OPPORTUNITIES_SOURCES },
            { title: 'Stale Listings', href: ROUTES.ADMIN_OPPORTUNITIES_STALE },
          ],
        },
      ],
    },
    {
      title: 'USERS & COMMUNITY',
      items: [
        {
          title: 'Users',
          href: ROUTES.ADMIN_USERS,
          icon: Users,
          subItems: [
            { title: 'All Users', href: ROUTES.ADMIN_USERS },
            { title: 'User Segments', href: ROUTES.ADMIN_USERS_SEGMENTS },
            { title: 'Activity', href: ROUTES.ADMIN_USERS_ACTIVITY },
            { title: 'Support Tools', href: ROUTES.ADMIN_USERS_SUPPORT },
            { title: 'Trust & Safety', href: ROUTES.ADMIN_USERS_TRUST_SAFETY },
            { title: 'Data Requests', href: ROUTES.ADMIN_USERS_DATA_REQUESTS },
          ],
        },
        {
          title: 'Organizations',
          href: ROUTES.ADMIN_ORGANIZATIONS,
          icon: Building2,
          subItems: [
            { title: 'All Organizations', href: ROUTES.ADMIN_ORGANIZATIONS },
            { title: 'Employers', href: ROUTES.ADMIN_ORGANIZATIONS_EMPLOYERS },
            { title: 'Schools & Colleges', href: ROUTES.ADMIN_ORGANIZATIONS_SCHOOLS },
            { title: 'Event Organizers', href: ROUTES.ADMIN_ORGANIZATIONS_ORGANIZERS },
            { title: 'Partners', href: ROUTES.ADMIN_ORGANIZATIONS_PARTNERS },
          ],
        },
      ],
    },
    {
      title: 'PARTNERSHIPS',
      items: [
        {
          title: 'Partnerships CRM',
          href: ROUTES.ADMIN_PARTNERSHIPS,
          icon: Handshake,
          subItems: [
            { title: 'Command Hub', href: ROUTES.ADMIN_PARTNERSHIPS },
            { title: 'Pipeline Kanban', href: ROUTES.ADMIN_PARTNERSHIPS_PIPELINE },
            { title: 'Target Directory', href: ROUTES.ADMIN_PARTNERSHIPS_TARGETS },
            { title: 'Opportunities', href: ROUTES.ADMIN_PARTNERSHIPS_OPPORTUNITIES },
            { title: 'Contacts & Leads', href: ROUTES.ADMIN_PARTNERSHIPS_CONTACTS },
            { title: 'Tasks & Waiting On', href: ROUTES.ADMIN_PARTNERSHIPS_TASKS },
            { title: 'Integrations', href: ROUTES.ADMIN_PARTNERSHIPS_INTEGRATIONS },
            { title: 'Documents & Vault', href: ROUTES.ADMIN_PARTNERSHIPS_DOCUMENTS },
            { title: 'Strategic Analytics', href: ROUTES.ADMIN_PARTNERSHIPS_ANALYTICS },
          ],
        },
      ],
    },
    {
      title: 'DATA & INTEGRATIONS',
      items: [
        {
          title: 'Integration Registry',
          href: ROUTES.ADMIN_INTEGRATIONS,
          icon: Database,
          subItems: [
            { title: 'All Integrations', href: ROUTES.ADMIN_INTEGRATIONS },
            { title: 'Data Issues', href: ROUTES.ADMIN_DATA_ISSUES },
          ],
        },
      ],
    },
    {

      title: 'AI CONTROL CENTER',
      items: [
        {
          title: 'AI Operations',
          href: ROUTES.ADMIN_AI,
          icon: Cpu,
          subItems: [
            { title: 'Overview & Status', href: ROUTES.ADMIN_AI },
            { title: 'Providers', href: ROUTES.ADMIN_AI_PROVIDERS },
            { title: 'Model Registry', href: ROUTES.ADMIN_AI_MODELS },
            { title: 'Use-Case Routing', href: ROUTES.ADMIN_AI_ROUTING },
            { title: 'Prompt Management', href: ROUTES.ADMIN_AI_PROMPTS },
            { title: 'Guardrails & Safety', href: ROUTES.ADMIN_AI_GUARDRAILS },
            { title: 'Evaluations', href: ROUTES.ADMIN_AI_EVALUATIONS },
            { title: 'Usage & Costs', href: ROUTES.ADMIN_AI_USAGE },
            { title: 'Error Monitoring', href: ROUTES.ADMIN_AI_ERRORS },
          ],
        },
      ],
    },
    {
      title: 'GROWTH & SEO',
      items: [
        {
          title: 'Growth Engine',
          href: ROUTES.ADMIN_GROWTH_TRAFFIC,
          icon: TrendingUp,
          subItems: [
            { title: 'Traffic Analytics', href: ROUTES.ADMIN_GROWTH_TRAFFIC },
            { title: 'SEO Control Center', href: ROUTES.ADMIN_GROWTH_SEO },
            { title: 'Search Console', href: ROUTES.ADMIN_GROWTH_SEARCH_CONSOLE },
            { title: 'Landing Pages', href: ROUTES.ADMIN_GROWTH_LANDING_PAGES },
            { title: 'Conversion Funnels', href: ROUTES.ADMIN_GROWTH_FUNNELS },
            { title: 'Campaigns', href: ROUTES.ADMIN_GROWTH_CAMPAIGNS },
            { title: 'Attribution', href: ROUTES.ADMIN_GROWTH_ATTRIBUTION },
          ],
        },
      ],
    },
    {
      title: 'COMMUNICATIONS',
      items: [
        {
          title: 'Communications',
          href: ROUTES.ADMIN_COMMS,
          icon: Mail,
          subItems: [
            { title: 'Overview', href: ROUTES.ADMIN_COMMS },
            { title: 'Email Templates', href: ROUTES.ADMIN_COMMS_TEMPLATES },
            { title: 'Newsletters', href: ROUTES.ADMIN_COMMS_NEWSLETTERS },
            { title: 'Campaigns', href: ROUTES.ADMIN_COMMS_CAMPAIGNS },
            { title: 'Audiences & Segments', href: ROUTES.ADMIN_COMMS_AUDIENCES },
            { title: 'Automations', href: ROUTES.ADMIN_COMMS_AUTOMATIONS },
            { title: 'Delivery Logs', href: ROUTES.ADMIN_COMMS_DELIVERY },
          ],
        },
      ],
    },
    {
      title: 'COMMERCIAL',
      items: [
        {
          title: 'Revenue Center',
          href: ROUTES.ADMIN_REVENUE,
          icon: DollarSign,
          subItems: [
            { title: 'Overview', href: ROUTES.ADMIN_REVENUE },
            { title: 'Employers', href: ROUTES.ADMIN_REVENUE_EMPLOYERS },
            { title: 'Promoted Events', href: ROUTES.ADMIN_REVENUE_PROMOTED_EVENTS },
            { title: 'Sponsorships', href: ROUTES.ADMIN_REVENUE_SPONSORSHIP },
            { title: 'Transactions', href: ROUTES.ADMIN_REVENUE_TRANSACTIONS },
            { title: 'Products & Tiers', href: ROUTES.ADMIN_REVENUE_PRODUCTS },
          ],
        },
      ],
    },
    {
      title: 'COMPLIANCE & ASSURANCE',
      items: [
        {
          title: 'Trust & Compliance',
          href: ROUTES.ADMIN_COMPLIANCE,
          icon: ShieldCheck,
          subItems: [
            { title: 'Overview', href: ROUTES.ADMIN_COMPLIANCE },
            { title: 'Framework Registry', href: ROUTES.ADMIN_COMPLIANCE_REGISTRY },
            { title: 'AI Decision Governance', href: ROUTES.ADMIN_COMPLIANCE_AI_GOVERNANCE },
            { title: 'Evidence Vault', href: ROUTES.ADMIN_COMPLIANCE_EVIDENCE },
            { title: 'Renewal Calendar', href: ROUTES.ADMIN_COMPLIANCE_RENEWALS },
            { title: 'Regulatory Register', href: ROUTES.ADMIN_COMPLIANCE_REGULATIONS },
            { title: 'Document Requests', href: ROUTES.ADMIN_COMPLIANCE_REQUESTS },
          ],
        },
      ],
    },
    {
      title: 'SYSTEM & OBSERVABILITY',
      items: [
        {
          title: 'System Health',
          href: ROUTES.ADMIN_SYSTEM_ENVIRONMENT,
          icon: Settings,
          subItems: [
            { title: 'Integrations', href: ROUTES.ADMIN_SYSTEM_INTEGRATIONS },
            { 
              title: 'Scheduled Jobs', 
              href: ROUTES.ADMIN_SYSTEM_JOBS,
              badge: counts?.failedJobs || undefined,
            },
            { title: 'Feature Flags', href: ROUTES.ADMIN_SYSTEM_FEATURE_FLAGS },
            { title: 'Admin Accounts', href: ROUTES.ADMIN_SYSTEM_ADMINS },
            { title: 'Security & Telemetry', href: ROUTES.ADMIN_SYSTEM_SECURITY },
            { title: 'Environment Status', href: ROUTES.ADMIN_SYSTEM_ENVIRONMENT },
            { title: 'Error Logs', href: ROUTES.ADMIN_SYSTEM_ERRORS },
            { title: 'Settings', href: ROUTES.ADMIN_SYSTEM_SETTINGS },
            { title: 'Audit Trail', href: ROUTES.ADMIN_SYSTEM_AUDIT },
          ],
        },
      ],
    },
  ];

  return (
    <aside className="w-64 shrink-0 bg-[var(--color-surface-sunken)] border-r border-[var(--color-border-default)] flex flex-col h-screen sticky top-0 select-none overflow-hidden z-30">
      {/* Brand Header */}
      <div className="h-14 px-4 flex items-center justify-between border-b border-[var(--color-border-default)] bg-[var(--color-surface-raised)]">
        <Link href={ROUTES.ADMIN} className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-sm bg-[#2F8FFF] flex items-center justify-center text-white font-mono font-bold text-xs shadow-sm">
            OS
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xs tracking-tight text-[var(--color-text-primary)]">
                CAREEROS
              </span>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[var(--color-surface-interactive)] text-[#2F8FFF] font-semibold border border-[var(--color-border-subtle)]">
                ADMIN
              </span>
            </div>
            <p className="text-[10px] text-[var(--color-text-tertiary)] font-mono">Control Plane</p>
          </div>
        </Link>
        <Link
          href={ROUTES.HOME}
          target="_blank"
          rel="noopener noreferrer"
          title="Open Public Website in new tab"
          className="p-1.5 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] rounded hover:bg-[var(--color-surface-interactive)] transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-2 py-3 space-y-4 text-xs scrollbar-thin">
        {navSections.map((section) => {
          const isCollapsed = collapsedSections[section.title];
          return (
            <div key={section.title} className="space-y-1">
              <button
                type="button"
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between px-2 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors"
              >
                <span>{section.title}</span>
                {isCollapsed ? (
                  <ChevronRight className="w-3 h-3" />
                ) : (
                  <ChevronDown className="w-3 h-3" />
                )}
              </button>

              {!isCollapsed && (
                <div className="space-y-0.5">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isParentActive =
                      pathname === item.href ||
                      (item.subItems && item.subItems.some((sub) => pathname === sub.href));

                    return (
                      <div key={item.title} className="space-y-0.5">
                        <Link
                          href={item.href}
                          className={cn(
                            'flex items-center justify-between px-2.5 py-1.5 rounded-sm font-medium transition-colors',
                            isParentActive && !item.subItems
                              ? 'bg-[var(--color-surface-interactive)] text-[#2F8FFF] font-semibold border-l-2 border-[#2F8FFF]'
                              : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-raised)]'
                          )}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <Icon className="w-3.5 h-3.5 shrink-0" />
                            <span className="truncate">{item.title}</span>
                          </div>
                          {item.badge !== undefined && (
                            <span
                              className={cn(
                                'text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-full',
                                item.badgeVariant === 'warning'
                                  ? 'bg-[#DDD36D]/20 text-[#DDD36D]'
                                  : 'bg-[#2F8FFF]/20 text-[#2F8FFF]'
                              )}
                            >
                              {item.badge}
                            </span>
                          )}
                        </Link>

                        {/* Sub-items */}
                        {item.subItems && (
                          <div className="pl-6 pr-1 space-y-0.5 border-l border-[var(--color-border-subtle)] ml-3 my-0.5">
                            {item.subItems.map((sub) => {
                              const isSubActive = pathname === sub.href;
                              return (
                                <Link
                                  key={sub.title}
                                  href={sub.href}
                                  className={cn(
                                    'flex items-center justify-between px-2 py-1 rounded-sm text-[11px] transition-colors',
                                    isSubActive
                                      ? 'text-[#2F8FFF] font-semibold bg-[var(--color-surface-interactive)]'
                                      : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-raised)]'
                                  )}
                                >
                                  <span className="truncate">{sub.title}</span>
                                  {sub.badge !== undefined && (
                                    <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] border border-[var(--color-border-default)]">
                                      {sub.badge}
                                    </span>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* User Status Footer */}
      <div className="p-3 border-t border-[var(--color-border-default)] bg-[var(--color-surface-raised)] flex items-center justify-between">
        <div className="min-w-0 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[var(--color-surface-interactive)] border border-[var(--color-border-strong)] flex items-center justify-center text-[10px] font-mono text-[var(--color-text-primary)]">
            <Shield className="w-3 h-3 text-[#2F8FFF]" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold text-[var(--color-text-primary)] truncate">
              {userEmail || 'admin@careeros.com'}
            </p>
            <p className="text-[9px] font-mono uppercase text-[#2F8FFF] font-bold">
              {userRole.replace('_', ' ')}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
