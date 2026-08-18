'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/lib/routes';
import { cn } from '@/lib/utils';
import { 
  ShieldCheck, 
  Bot, 
  Eye, 
  Users, 
  Scale, 
  Lock, 
  ArrowRight,
  Sparkles,
  FileCheck
} from 'lucide-react';

const TRUST_NAV_ITEMS = [
  { label: 'Trust Overview', href: ROUTES.TRUST, icon: ShieldCheck },
  { label: 'Compliance & Assurance', href: ROUTES.TRUST_COMPLIANCE, icon: FileCheck },
  { label: 'Responsible AI', href: ROUTES.TRUST_RESPONSIBLE_AI, icon: Bot },
  { label: 'AI Transparency', href: ROUTES.TRUST_AI_TRANSPARENCY, icon: Eye },
  { label: 'Human Oversight', href: ROUTES.TRUST_HUMAN_OVERSIGHT, icon: Users },
  { label: 'Fairness & Bias', href: ROUTES.TRUST_FAIRNESS_BIAS, icon: Scale },
];

export function TrustSubnav() {
  const pathname = usePathname();

  return (
    <div className="w-full bg-[var(--color-surface-base)]/90 backdrop-blur-md border-b border-[var(--color-border-default)] sticky top-16 z-30 shadow-xs">
      <div className="container-editorial flex items-center justify-between py-2 overflow-x-auto no-scrollbar gap-4">
        {/* Local Navigation Tabs */}
        <nav className="flex items-center space-x-1 shrink-0" aria-label="Trust Center Navigation">
          {TRUST_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-button)] text-xs font-medium transition-colors shrink-0',
                  isActive
                    ? 'bg-white/10 text-white font-semibold shadow-xs ring-1 ring-white/20'
                    : 'text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className={cn('w-3.5 h-3.5', isActive ? 'text-[#6BB8FF]' : 'text-[var(--color-text-tertiary)]')} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Quick Links to Related Legal & Privacy Resources */}
        <div className="hidden lg:flex items-center gap-3 text-[11px] font-mono text-[var(--color-text-tertiary)] shrink-0">
          <span className="text-[var(--color-border-subtle)]">|</span>
          <Link href={ROUTES.LEGAL_PRIVACY} className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href={ROUTES.TRUST_SECURITY} className="hover:text-white transition-colors">
            Security Controls
          </Link>
          <Link href={ROUTES.TRUST_SAFEGUARDING} className="hover:text-white transition-colors">
            Safeguarding
          </Link>
          <Link href={ROUTES.LEGAL_AI_TERMS} className="hover:text-white transition-colors">
            AI Terms
          </Link>
        </div>
      </div>
    </div>
  );
}
