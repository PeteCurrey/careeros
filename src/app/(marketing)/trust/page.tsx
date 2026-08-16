import React from 'react';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function Page() {
  return (
    <div className="section-padding">
      <div className="container-site max-w-3xl space-y-6">
        <Badge variant="brand" size="md">Trust Centre</Badge>
        <h1 className="text-headline font-bold tracking-tight text-[var(--color-text-primary)]">
          Trust Document
        </h1>
        <p className="text-body text-[var(--color-text-secondary)]">
          This Trust Centre document is being prepared. Contact trust@career-os.com.
        </p>
        <Button href={ROUTES.TRUST} variant="secondary" size="md">
          Back to Trust Centre
        </Button>
      </div>
    </div>
  );
}
