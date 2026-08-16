import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function AccessibilityPage() {
  return (
    <div className="section-padding">
      <div className="container-site space-y-16">
        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="brand" size="md">
            Inclusive Design
          </Badge>
          <h1 className="text-display font-bold tracking-tight text-[var(--color-text-primary)]">
            Accessibility: WCAG 2.2 AA by design.
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            Career infrastructure must be genuinely accessible to everyone. We build accessibility into our core component design tokens, semantic markup, and keyboard interaction models from day one.
          </p>
        </div>

        {/* Core Accessibility Standards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 space-y-4">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Implemented Technical Foundations
            </h3>
            <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] mt-0.5" />
                <span><strong>Semantic HTML Structure:</strong> Strictly ordered heading hierarchy and landmark regions across all pages.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] mt-0.5" />
                <span><strong>Full Keyboard Navigation:</strong> Accessible skip links, roving focus, and trap-safe modal dialogs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] mt-0.5" />
                <span><strong>Visible Focus Rings:</strong> Distinct 3px focus indicators respecting user-driven focus-visible states.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] mt-0.5" />
                <span><strong>Contrast Compliance:</strong> Design tokens calibrated to exceed WCAG 2.2 AA 4.5:1 text contrast ratios.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] mt-0.5" />
                <span><strong>Reduced Motion Support:</strong> Global respect for user prefers-reduced-motion operating system preferences.</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 space-y-4">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Ongoing Testing & Feedback
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              We continually validate our interfaces using automated accessibility sweep engines (Axe-core), screen reader testing (NVDA, VoiceOver), and assistive technology feedback.
            </p>
            <div className="pt-2">
              <Button href={ROUTES.COMPANY_CONTACT} variant="secondary" size="md">
                Submit Accessibility Feedback
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
