'use client';

import React from 'react';
import { ComplianceFramework, getSafeStatusDisplay } from '@/types/compliance';
import { cn } from '@/lib/utils';
import { CheckCircle2, Clock, ShieldCheck, AlertCircle, Ban, Sparkles } from 'lucide-react';

interface ComplianceStatusBadgeProps {
  framework: ComplianceFramework;
  showIcon?: boolean;
  className?: string;
}

export function ComplianceStatusBadge({
  framework,
  showIcon = true,
  className,
}: ComplianceStatusBadgeProps) {
  const { badgeLabel, isVerifiedClaim, tooltipText } = getSafeStatusDisplay(framework);

  const getStyle = () => {
    switch (framework.status) {
      case 'certified':
      case 'attested':
        return isVerifiedClaim
          ? 'bg-[var(--color-success)]/10 text-[var(--color-success)] border-[var(--color-success)]/30'
          : 'bg-[var(--color-brand-300)]/10 text-[var(--color-brand-300)] border-[var(--color-brand-300)]/30';
      case 'compliant':
      case 'verified':
        return 'bg-[var(--color-success)]/10 text-[var(--color-success)] border-[var(--color-success)]/30';
      case 'aligned':
        return 'bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] border-[var(--accent-blue)]/30';
      case 'in_progress':
        return 'bg-[var(--color-warning)]/10 text-[var(--color-warning)] border-[var(--color-warning)]/30';
      case 'not_applicable':
        return 'bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] border-[var(--color-border-subtle)]';
      default:
        return 'bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] border-[var(--color-border-default)]';
    }
  };

  const getIcon = () => {
    switch (framework.status) {
      case 'certified':
      case 'attested':
        return <ShieldCheck className="w-3 h-3 shrink-0" />;
      case 'compliant':
      case 'verified':
        return <CheckCircle2 className="w-3 h-3 shrink-0" />;
      case 'aligned':
        return <Sparkles className="w-3 h-3 shrink-0" />;
      case 'in_progress':
        return <Clock className="w-3 h-3 shrink-0" />;
      case 'not_applicable':
        return <Ban className="w-3 h-3 shrink-0" />;
      default:
        return <ShieldCheck className="w-3 h-3 shrink-0" />;
    }
  };

  return (
    <span
      title={tooltipText}
      className={cn(
        'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm font-mono text-[10px] uppercase font-semibold border tracking-wider transition-colors',
        getStyle(),
        className
      )}
    >
      {showIcon && getIcon()}
      <span>{badgeLabel}</span>
    </span>
  );
}
