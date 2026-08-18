'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/lib/routes';
import {
  CalendarDays,
  Bot,
  Compass,
  Award,
  User,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function AppBottomNav() {
  const pathname = usePathname();

  const tabs = [
    {
      label: 'Today',
      href: ROUTES.APP_DASHBOARD,
      icon: CalendarDays,
      exact: true,
    },
    {
      label: 'Mentor',
      href: '/app/mentor',
      icon: Bot,
      exact: false,
    },
    {
      label: 'Explore',
      href: '/app/explore',
      icon: Compass,
      exact: false,
    },
    {
      label: 'Passport',
      href: '/app/passport',
      icon: Award,
      exact: false,
    },
    {
      label: 'You',
      href: '/app/you',
      icon: User,
      exact: false,
    },
  ];

  const isActive = (href: string, exact = false) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[var(--color-surface-raised)]/95 backdrop-blur-lg border-t border-[var(--color-border-default)] px-2 py-1.5 flex items-center justify-around shadow-2xl safe-area-bottom"
      aria-label="Mobile application navigation"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const active = isActive(tab.href, tab.exact);

        return (
          <Link
            key={tab.label}
            href={tab.href}
            className={cn(
              'flex flex-col items-center justify-center py-1 px-3 rounded-lg text-[10px] font-mono transition-all min-w-[56px]',
              active
                ? 'text-[#2F8FFF] font-bold'
                : 'text-[var(--color-text-secondary)] hover:text-white'
            )}
          >
            <div className="relative">
              <Icon className={cn('w-5 h-5 mb-0.5 transition-transform', active && 'scale-110')} />
              {active && (
                <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#2F8FFF]" />
              )}
            </div>
            <span>{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
