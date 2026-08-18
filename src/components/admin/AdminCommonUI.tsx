import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface AdminSectionHeaderProps {
  category: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
}

export function AdminSectionHeader({
  category,
  title,
  description,
  actions,
}: AdminSectionHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-[var(--color-border-default)]">
      <div>
        <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] mb-1">
          {category}
        </p>
        <h1 className="text-xl lg:text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
          {title}
        </h1>
        <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-2xl">
          {description}
        </p>
      </div>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  );
}

interface AdminEmptyStateProps {
  icon: React.ElementType;
  title: string;
  description: string;
  actionHref?: string;
  actionLabel?: string;
  badge?: string;
}

export function AdminEmptyState({
  icon: Icon,
  title,
  description,
  actionHref,
  actionLabel,
  badge,
}: AdminEmptyStateProps) {
  return (
    <div className="p-10 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-center space-y-4 max-w-xl mx-auto my-6">
      <div className="w-10 h-10 rounded-sm bg-[var(--color-surface-interactive)] border border-[var(--color-border-strong)] flex items-center justify-center mx-auto text-[var(--color-text-tertiary)]">
        <Icon className="w-5 h-5" />
      </div>

      {badge && (
        <span className="inline-block text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] border border-[var(--color-border-subtle)]">
          {badge}
        </span>
      )}

      <div className="space-y-1">
        <h3 className="text-sm font-bold text-[var(--color-text-primary)]">{title}</h3>
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
          {description}
        </p>
      </div>

      {actionHref && actionLabel && (
        <div className="pt-2">
          <Link
            href={actionHref}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#2F8FFF] text-white hover:bg-[#2F8FFF]/90 transition-colors shadow-xs"
          >
            <span>{actionLabel}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
