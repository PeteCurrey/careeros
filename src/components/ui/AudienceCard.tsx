import React from 'react';
import Link from 'next/link';
import { Card } from './Card';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface AudienceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  cta: string;
  audience: 'high-schools' | 'students' | 'professionals' | 'employers';
}

export function AudienceCard({
  title,
  description,
  href,
  icon: Icon,
  cta,
}: AudienceCardProps) {
  return (
    <Link href={href} className="group block focus-visible:outline-none">
      <Card className="h-full flex flex-col justify-between p-7 card-interactive group-hover:border-[var(--color-brand-400)] transition-all">
        <div>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] border border-[var(--color-brand-200)] dark:border-[var(--color-brand-800)] mb-5 group-hover:scale-105 transition-transform">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2.5 tracking-tight group-hover:text-[var(--color-brand-600)] dark:group-hover:text-[var(--color-brand-400)] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
            {description}
          </p>
        </div>
        <div className="flex items-center text-sm font-semibold text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] pt-2 border-t border-[var(--color-border-default)]">
          <span>{cta}</span>
          <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </Card>
    </Link>
  );
}
