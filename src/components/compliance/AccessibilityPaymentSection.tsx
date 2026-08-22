'use client';

import React from 'react';
import Link from 'next/link';
import { ComplianceFramework } from '@/types/compliance';
import { ComplianceStatusBadge } from './ComplianceStatusBadge';
import { Eye, CreditCard, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { ROUTES } from '@/lib/routes';

interface AccessibilityPaymentSectionProps {
  wcagFramework?: ComplianceFramework;
  pciFramework?: ComplianceFramework;
}

export function AccessibilityPaymentSection({
  wcagFramework,
  pciFramework,
}: AccessibilityPaymentSectionProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* WCAG 2.2 Level AA Accessibility */}
      <div id="accessibility" className="p-6 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[var(--color-brand-300)]">
              <Eye className="w-3.5 h-3.5" />
              <span>UNIVERSAL ACCESS</span>
            </div>
            {wcagFramework && <ComplianceStatusBadge framework={wcagFramework} />}
          </div>

          <div>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Digital Accessibility (WCAG 2.2 AA)
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-2 leading-relaxed">
              Career exploration must be accessible to all students and job seekers regardless of ability. CareerOS is engineered to conform with <span className="text-[var(--color-text-primary)] font-medium">WCAG 2.2 Level AA</span> and Section 508 standards.
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-success)] shrink-0" />
              <span>Full keyboard operability & visible focus rings</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-success)] shrink-0" />
              <span>Screen reader semantic tree & ARIA landmarks</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-success)] shrink-0" />
              <span>High contrast typography (minimum 4.5:1 ratio)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-success)] shrink-0" />
              <span>Reduced motion preference support across UI animations</span>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-[var(--color-border-subtle)]">
          <Link href={ROUTES.TRUST_ACCESSIBILITY} className="inline-flex items-center gap-1.5 text-xs text-[var(--color-brand-300)] hover:underline font-medium">
            <span>Read Accessibility Statement</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Payment Security / PCI DSS */}
      <div id="payment-security" className="p-6 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[var(--color-brand-300)]">
              <CreditCard className="w-3.5 h-3.5" />
              <span>PAYMENT SECURITY</span>
            </div>
            {pciFramework && <ComplianceStatusBadge framework={pciFramework} />}
          </div>

          <div>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Payment Security (PCI DSS Infrastructure)
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-2 leading-relaxed">
              Commercial subscriptions, promoted event checkouts, and employer billing are processed through certified Level 1 PCI DSS compliant infrastructure (Stripe).
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-success)] shrink-0" />
              <span>Zero raw cardholder data stored on CareerOS servers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-success)] shrink-0" />
              <span>Direct client-side tokenisation via Stripe Elements</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-success)] shrink-0" />
              <span>Encrypted webhooks with HMAC-SHA256 signature verification</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-success)] shrink-0" />
              <span>PCI Self-Assessment Questionnaire (SAQ-A) validated</span>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-[var(--color-border-subtle)] text-[11px] font-mono text-[var(--color-text-tertiary)]">
          Payment processing is powered by certified Tier-1 financial infrastructure.
        </div>
      </div>
    </section>
  );
}
