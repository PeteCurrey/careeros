import React from 'react';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Company | Career OS",
  description: "Career OS Company. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/company",
  },
};

export default function Page() {
  return (
    <div className="section-padding">
      <div className="container-site max-w-3xl space-y-6">
        <Badge variant="brand" size="md">Company</Badge>
        <h1 className="text-headline font-bold tracking-tight text-[var(--color-text-primary)]">
          Company Page
        </h1>
        <p className="text-body text-[var(--color-text-secondary)]">
          Content coming soon. Contact us at hello@career-os.com.
        </p>
        <Button href={ROUTES.COMPANY_ABOUT} variant="secondary" size="md">
          About Career OS
        </Button>
      </div>
    </div>
  );
}
