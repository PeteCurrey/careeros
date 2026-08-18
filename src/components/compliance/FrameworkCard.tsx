'use client';

import React from 'react';
import Link from 'next/link';
import { ComplianceFramework } from '@/types/compliance';
import { ComplianceStatusBadge } from './ComplianceStatusBadge';
import { ExternalLink, Lock, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FrameworkCardProps {
  framework: ComplianceFramework;
  onRequestAccess?: (framework: ComplianceFramework) => void;
  className?: string;
}

export function FrameworkCard({
  framework,
  onRequestAccess,
  className,
}: FrameworkCardProps) {
  const isRestrictedReport = Boolean(framework.privateEvidenceReference);

  return (
    <div
      id={`framework-${framework.id}`}
      className={cn(
        'p-6 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-all flex flex-col justify-between space-y-5',
        className
      )}
    >
      {/* Header Row */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[var(--color-text-tertiary)] bg-white/5 px-2 py-0.5 rounded-xs border border-white/5">
              {framework.category.replace('_', ' ')}
            </span>
            {framework.standardVersion && (
              <span className="font-mono text-[10px] text-[var(--color-text-tertiary)]">
                v{framework.standardVersion}
              </span>
            )}
          </div>
          <ComplianceStatusBadge framework={framework} />
        </div>

        <div>
          <h3 className="text-base font-bold text-[var(--color-text-primary)]">
            {framework.name}
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)] mt-1.5 leading-relaxed">
            {framework.description}
          </p>
        </div>
      </div>

      {/* Scope and Attributes */}
      <div className="space-y-3 pt-3 border-t border-[var(--color-border-subtle)]">
        {framework.scope && framework.scope.length > 0 && (
          <div className="space-y-1.5">
            <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider">
              Assurance Scope:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {framework.scope.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xs bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] font-mono text-[10px] text-[var(--color-text-secondary)]"
                >
                  <span className="w-1 h-1 rounded-full bg-[#6BB8FF]" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {framework.auditorOrCertificationBody && (
          <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-tertiary)] pt-1">
            <span>Independent Body:</span>
            <span className="text-[var(--color-text-secondary)] font-medium">
              {framework.auditorOrCertificationBody}
            </span>
          </div>
        )}

        {framework.effectiveDate && (
          <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-tertiary)]">
            <span>Effective / Verified:</span>
            <span className="text-[var(--color-text-secondary)]">
              {new Date(framework.effectiveDate).toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric',
              })}
            </span>
          </div>
        )}
      </div>

      {/* Action / Evidence Footer */}
      <div className="pt-2 flex items-center justify-between text-xs">
        {framework.publicEvidenceUrl ? (
          <Link
            href={framework.publicEvidenceUrl}
            className="inline-flex items-center gap-1 text-[#6BB8FF] hover:underline font-medium"
          >
            <span>Public documentation</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        ) : isRestrictedReport ? (
          <button
            type="button"
            onClick={() => onRequestAccess?.(framework)}
            className="inline-flex items-center gap-1.5 text-xs text-[#2F8FFF] hover:text-[#6BB8FF] font-medium transition-colors"
          >
            <Lock className="w-3 h-3" />
            <span>Request Auditor Report (NDA)</span>
          </button>
        ) : (
          <span className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
            Continuous internal monitoring
          </span>
        )}
      </div>
    </div>
  );
}
