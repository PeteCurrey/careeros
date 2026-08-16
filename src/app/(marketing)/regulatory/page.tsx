import React from 'react';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function Page() {
  return (
    <div className="section-padding">
      <div className="container-site max-w-3xl space-y-6">
        <Badge variant="brand" size="md">Regulatory Alignment</Badge>
        <h1 className="text-headline font-bold tracking-tight text-[var(--color-text-primary)]">
          Regulatory Document
        </h1>
        <p className="text-body text-[var(--color-text-secondary)]">
          This regulatory alignment document is being prepared. Contact legal@career-os.com.
        </p>
        <Button href={ROUTES.REGULATORY} variant="secondary" size="md">
          Back to Regulatory Centre
        </Button>
      </div>
    </div>
  );
}
