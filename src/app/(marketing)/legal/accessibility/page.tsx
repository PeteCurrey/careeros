import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function LegalAccessibilityPage() {
  return (
    <EditorialSubpage
      badge="LEGAL &bull; ACCESSIBILITY"
      title="Accessibility Statement"
      description="Career OS commitment to WCAG 2.2 AA conformance, keyboard navigation, screen reader support, and inclusive design across all platform surfaces."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Legal', href: ROUTES.LEGAL },
        { label: 'Accessibility', href: ROUTES.LEGAL_ACCESSIBILITY },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Accessibility Commitment</h2>
        <p>
          Career OS is committed to ensuring its platform is accessible to all users, including those using assistive technologies. We target WCAG 2.2 Level AA conformance across all public-facing pages and authenticated application surfaces.
        </p>
        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Current Standards</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Keyboard Navigation:</strong> Full platform functionality operable without a mouse.</li>
          <li><strong>Screen Reader Support:</strong> Semantic HTML, ARIA labels, and logical focus management throughout.</li>
          <li><strong>Colour Contrast:</strong> Minimum 4.5:1 ratio for all body text; 3:1 for large text and UI components.</li>
          <li><strong>Reduced Motion:</strong> All animations respect the <code>prefers-reduced-motion</code> media query.</li>
        </ul>
        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Reporting Accessibility Issues</h3>
        <p>
          If you encounter an accessibility barrier, please contact us. We aim to resolve confirmed issues within 14 business days.
        </p>
      </div>
    </EditorialSubpage>
  );
}
