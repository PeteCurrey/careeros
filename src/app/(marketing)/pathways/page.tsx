import React from 'react';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function Page() {
  return (
    <div className="section-padding">
      <div className="container-site max-w-3xl space-y-6">
        <Badge variant="brand" size="md">Career Pathways</Badge>
        <h1 className="text-headline font-bold tracking-tight text-[var(--color-text-primary)]">
          Pathway Detail
        </h1>
        <p className="text-body text-[var(--color-text-secondary)]">
          Detailed pathway content coming soon.
        </p>
        <Button href={ROUTES.PATHWAYS} variant="secondary" size="md">
          Back to Pathways
        </Button>
      </div>
    </div>
  );
}
