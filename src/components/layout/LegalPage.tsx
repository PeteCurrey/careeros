import React from 'react';
import { Badge } from '@/components/ui/Badge';

interface LegalPageProps {
  title: string;
  subtitle: string;
  effectiveDate: string;
  children: React.ReactNode;
}

export function LegalPage({ title, subtitle, effectiveDate, children }: LegalPageProps) {
  return (
    <div className="section-padding">
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 space-y-3">
            <Badge variant="default" size="sm">Legal Document</Badge>
            <h1 className="text-headline font-bold tracking-tight text-[var(--color-text-primary)]">{title}</h1>
            <p className="text-body text-[var(--color-text-secondary)]">{subtitle}</p>
            <p className="text-small text-[var(--color-text-tertiary)]">
              Effective Date: {effectiveDate}
            </p>
          </div>
          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-[var(--color-text-secondary)] leading-relaxed [&_h2]:text-[var(--color-text-primary)] [&_h2]:font-bold [&_h2]:text-lg [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-[var(--color-text-primary)] [&_h3]:font-semibold [&_h3]:text-base [&_h3]:mt-5 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:space-y-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
