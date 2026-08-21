'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/lib/routes';
import { AdminRole } from '@/types/admin';
import { CommandPalette } from '@/components/admin/CommandPalette';
import {
  Search,
  Bell,
  Activity,
  Shield,
  LogOut,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface AdminTopBarProps {
  userRole?: AdminRole;
  userEmail?: string;
  userName?: string;
  urgentItemsCount?: number;
}

export function AdminTopBar({
  userRole = 'read_only',
  userEmail,
  userName,
  urgentItemsCount = 0,
}: AdminTopBarProps) {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Format breadcrumbs from pathname
  const segments = pathname
    .replace('/admin', '')
    .split('/')
    .filter(Boolean);

  return (
    <>
      <header className="h-14 bg-[var(--color-surface-raised)] border-b border-[var(--color-border-default)] px-4 flex items-center justify-between sticky top-0 z-20">
        {/* Breadcrumb path */}
        <nav aria-label="Admin Breadcrumb" className="flex items-center gap-1.5 text-xs text-[var(--color-text-tertiary)] min-w-0">
          <Link
            href={ROUTES.ADMIN}
            className="hover:text-[var(--color-text-primary)] font-medium transition-colors"
          >
            Admin
          </Link>
          {segments.map((segment, idx) => {
            const href = `/admin/${segments.slice(0, idx + 1).join('/')}`;
            const isLast = idx === segments.length - 1;
            const label = segment
              .replace(/-/g, ' ')
              .replace(/\b\w/g, (c) => c.toUpperCase());

            return (
              <React.Fragment key={href}>
                <ChevronRight className="w-3 h-3 text-[var(--color-text-tertiary)] shrink-0" />
                {isLast ? (
                  <span className="font-semibold text-[var(--color-text-primary)] truncate">
                    {label}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="hover:text-[var(--color-text-primary)] transition-colors truncate"
                  >
                    {label}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Universal Search (Cmd+K) Trigger */}
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 text-xs rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)] transition-colors shadow-xs"
          >
            <Search className="w-3.5 h-3.5 text-[#2F8FFF]" />
            <span className="hidden sm:inline">Search control plane...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded text-[var(--color-text-secondary)]">
              ⌘K
            </kbd>
          </button>

          {/* Action Center Attention Badge */}
          <Link
            href={ROUTES.ADMIN_ACTION_CENTER}
            title={urgentItemsCount > 0 ? `${urgentItemsCount} items need attention` : 'Action Center'}
            className="relative p-2 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-interactive)] rounded transition-colors"
          >
            <Bell className="w-4 h-4" />
            {urgentItemsCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#DDD36D] ring-2 ring-[var(--color-surface-raised)]" />
            )}
          </Link>

          {/* System Health Quick Indicator */}
          <Link
            href={ROUTES.ADMIN_SYSTEM_ENVIRONMENT}
            title="System Environment Status"
            className="p-2 text-[var(--color-text-tertiary)] hover:text-[#34D399] hover:bg-[var(--color-surface-interactive)] rounded transition-colors hidden sm:block"
          >
            <Activity className="w-4 h-4" />
          </Link>

          {/* User Role & Account Security Tag */}
          <div className="hidden md:flex items-center gap-2 pl-2 border-l border-[var(--color-border-default)]">
            <Link
              href={ROUTES.ADMIN_ACCOUNT_SECURITY}
              title="Account Security & MFA"
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)] border border-[var(--color-border-default)] transition-colors"
            >
              {userRole.toUpperCase()}
            </Link>
            <button
              type="button"
              title="Sign Out of Administration"
              onClick={async () => {
                await fetch('/api/admin/auth/logout', { method: 'POST' });
                window.location.href = ROUTES.ADMIN_LOGIN;
              }}
              className="p-1.5 text-[var(--color-text-tertiary)] hover:text-[#F87171] hover:bg-[var(--color-surface-interactive)] rounded transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Cmd+K Search Modal */}
      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
