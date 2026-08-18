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
          ? 'bg-[#34D399]/10 text-[#34D399] border-[#34D399]/30'
          : 'bg-[#6BB8FF]/10 text-[#6BB8FF] border-[#6BB8FF]/30';
      case 'compliant':
      case 'verified':
        return 'bg-[#34D399]/10 text-[#34D399] border-[#34D399]/30';
      case 'aligned':
        return 'bg-[#2F8FFF]/10 text-[#2F8FFF] border-[#2F8FFF]/30';
      case 'in_progress':
        return 'bg-[#FBBF24]/10 text-[#FBBF24] border-[#FBBF24]/30';
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
