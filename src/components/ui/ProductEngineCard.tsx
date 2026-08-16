import React from 'react';
import Link from 'next/link';
import { Card } from './Card';
import { Badge } from './Badge';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ProductEngineCardProps {
  title: string;
  description: string;
  href: string;
  status: 'available' | 'coming-soon' | 'future-vision';
  icon: LucideIcon;
}

export function ProductEngineCard({
  title,
  description,
  href,
  status,
  icon: Icon,
}: ProductEngineCardProps) {
  return (
    <Link href={href} className="group block focus-visible:outline-none">
      <Card className="h-full flex flex-col justify-between p-6 card-interactive group-hover:border-[var(--color-brand-400)] transition-all">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] border border-[var(--color-brand-200)] dark:border-[var(--color-brand-800)]">
              <Icon className="w-5 h-5" />
            </div>
            {status === 'coming-soon' && (
              <Badge variant="default" size="sm">
                Planned
              </Badge>
            )}
            {status === 'future-vision' && (
              <Badge variant="outline" size="sm">
                Future Vision
              </Badge>
            )}
            {status === 'available' && (
              <Badge variant="brand" size="sm">
                Core System
              </Badge>
            )}
          </div>
          <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 tracking-tight group-hover:text-[var(--color-brand-600)] dark:group-hover:text-[var(--color-brand-400)] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex items-center text-xs font-semibold text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] pt-4 mt-4 border-t border-[var(--color-border-default)]">
          <span>Explore architecture</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </Card>
    </Link>
  );
}
