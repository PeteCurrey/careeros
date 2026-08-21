'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/lib/routes';
import {
  Compass,
  Cpu,
  UserCheck,
  Award,
  Layers,
  Sparkles,
  ShieldCheck,
  Settings,
  LogOut,
  Bell,
  Search,
  ChevronDown,
  ExternalLink,
  User,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface AppHeaderProps {
  userDisplayName?: string;
  mentorName?: string;
  mentorPortraitSrc?: string;
  mentorDomain?: string;
}

export function AppHeader({
  userDisplayName = '',
  mentorName = 'Marcus Thorne',
  mentorPortraitSrc = '/media/mentors/mentor_marcus.jpg',
  mentorDomain = 'Technology & Systems Architecture',
}: AppHeaderProps) {
  const pathname = usePathname();
  const [profileOpen, setProfileOpen] = useState(false);

  const navLinks = [
    { label: 'Today', href: ROUTES.APP_DASHBOARD, exact: true },
    { label: 'Mentor', href: '/app/mentor' },
    { label: 'Career Twin', href: '/app/twin' },
    { label: 'Career Map', href: '/app/map' },
    { label: 'Opportunities', href: '/app/opportunities' },
    { label: 'Passport', href: '/app/passport' },
    { label: 'Progress', href: '/app/progress' },
  ];

  const isActive = (href: string, exact = false) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const firstName = userDisplayName.trim().split(' ')[0] || '';

  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--color-surface-raised)]/90 backdrop-blur-md border-b border-[var(--color-border-default)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
        {/* Brand & Primary Wordmark */}
        <div className="flex items-center gap-6">
          <Link
            href={ROUTES.APP_DASHBOARD}
            className="flex items-center gap-2 font-bold text-sm tracking-tight text-[var(--color-text-primary)] hover:opacity-90 transition-opacity shrink-0"
          >
            <div className="w-6 h-6 rounded bg-[#2F8FFF] flex items-center justify-center text-white text-[10px] font-mono font-bold shadow-sm">
              OS
            </div>
            <span className="font-serif tracking-normal text-base font-normal text-white">Career OS</span>
          </Link>

          {/* Desktop Primary Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main application">
            {navLinks.map((link) => {
              const active = isActive(link.href, link.exact);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'px-3 py-1.5 rounded-md text-xs font-mono transition-all relative',
                    active
                      ? 'text-white font-semibold bg-white/10 shadow-sm'
                      : 'text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 inset-x-2 h-[2px] bg-[#2F8FFF] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Utility Bar */}
        <div className="flex items-center gap-3">
          {/* Active Mentor Mini Presence */}
          <Link
            href="/app/mentor"
            className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 hover:border-[#2F8FFF]/40 transition-colors group text-left"
            title={`Assigned AI Career Mentor: ${mentorName}`}
          >
            <div className="relative w-5 h-5 rounded-full overflow-hidden border border-white/20 shrink-0">
              <Image
                src={mentorPortraitSrc}
                alt={mentorName}
                fill
                sizes="20px"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono">
              <span className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors">
                {mentorName.split(' ')[0]}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </Link>

          {/* Privacy & Governance Link */}
          <Link
            href={ROUTES.APP_SETTINGS_PRIVACY}
            className="hidden md:flex items-center gap-1 text-xs font-mono text-[var(--color-text-tertiary)] hover:text-white px-2 py-1 rounded transition-colors"
            title="Sovereign Data Privacy & Access Grants"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Private</span>
          </Link>

          {/* Profile & Account Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 p-1 pl-2 pr-1.5 rounded-full bg-white/5 border border-[var(--color-border-default)] hover:border-white/20 transition-colors text-xs"
              aria-expanded={profileOpen}
              aria-label="User menu"
            >
              <span className="font-mono text-[11px] text-white font-medium">
                {firstName || 'Account'}
              </span>
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#2F8FFF] to-purple-500 flex items-center justify-center text-white text-[10px] font-bold">
                {firstName ? firstName.charAt(0) : <User className="w-3 h-3" />}
              </div>
              <ChevronDown className="w-3 h-3 text-[var(--color-text-tertiary)]" />
            </button>

            {profileOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setProfileOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-56 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-2xl z-50 p-2 text-xs space-y-1">
                  <div className="px-3 py-2 border-b border-[var(--color-border-default)]">
                    <p className="font-semibold text-white truncate">
                      {userDisplayName || 'Your Career OS account'}
                    </p>
                    <p className="text-[10px] font-mono text-[var(--color-taupe-300)]">Career OS Account</p>
                  </div>

                  <Link
                    href={ROUTES.APP_SETTINGS_ACCOUNT}
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <Settings className="w-3.5 h-3.5" />
                    <span>Account Settings</span>
                  </Link>

                  <Link
                    href={ROUTES.APP_SETTINGS_PRIVACY}
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Privacy &amp; Data Grants</span>
                  </Link>

                  <div className="pt-1 border-t border-[var(--color-border-default)]">
                    <Link
                      href={ROUTES.LOGIN}
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded text-red-400 hover:bg-red-500/10 transition-colors"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Log Out</span>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
