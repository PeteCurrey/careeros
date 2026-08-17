import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Standards | Career OS",
  description: "Career OS Standards. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/standards",
  },
};

export default function Page() {
  return (
    <div className="section-padding">
      <div className="container-site space-y-12">
        <div className="max-w-3xl space-y-4">
          <Badge variant="brand" size="md">Standards Centre</Badge>
          <h1 className="text-headline font-bold tracking-tight text-[var(--color-text-primary)]">
            Standard Document
          </h1>
          <p className="text-body text-[var(--color-text-secondary)]">
            This standards document is being prepared. Contact us at standards@career-os.com.
          </p>
          <Button href={ROUTES.STANDARDS} variant="secondary" size="md">
            Back to Standards Centre
          </Button>
        </div>
      </div>
    </div>
  );
}
