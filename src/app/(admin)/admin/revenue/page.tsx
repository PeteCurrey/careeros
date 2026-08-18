import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { DollarSign, CreditCard, ShieldCheck } from 'lucide-react';

export default async function AdminRevenuePage() {
  await requireAdminRole('super_admin');

  const hasStripe = Boolean(process.env.STRIPE_SECRET_KEY);

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Commercial"
        title="Revenue & Commercial Operations"
        description="Accounting surfaces for promoted event placements, employer hiring subscriptions, institutional contracts and transaction histories."
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Net Revenue (MTD)</p>
          <p className="text-xl font-bold text-[var(--color-text-primary)] mt-1">
            $0.00
          </p>
        </div>
        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Promoted Events</p>
          <p className="text-xl font-bold text-[var(--color-text-primary)] mt-1">
            $0.00
          </p>
        </div>
        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Employer Subscriptions</p>
          <p className="text-xl font-bold text-[var(--color-text-primary)] mt-1">
            $0.00
          </p>
        </div>
        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase">Payment Gateway</p>
          <p className="text-sm font-bold text-[var(--color-text-primary)] mt-1">
            {hasStripe ? 'Stripe Active' : 'Not Connected'}
          </p>
        </div>
      </div>

      {!hasStripe && (
        <AdminEmptyState
          icon={CreditCard}
          title="Payment Gateway Not Configured"
          description="Connect Stripe credentials (STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET) to enable live self-service event promotion checkout and employer subscriptions."
          badge="Unconfigured Gateway"
        />
      )}
    </div>
  );
}
