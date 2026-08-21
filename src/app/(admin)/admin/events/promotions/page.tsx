import React from 'react';
import Link from 'next/link';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { DollarSign, Plus, Sparkles } from 'lucide-react';

export default async function AdminEventPromotionsPage() {
  await requireAdminRole('marketing');
  const supabase = createAdminClient();

  const { data: promotions } = await supabase
    .from('event_promotions')
    .select(`
      *,
      events (
        title,
        slug
      )
    `)
    .order('start_date', { ascending: false });

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Commercial"
        title="Promoted Events Inventory"
        description="Sponsored event placements, hero features, newsletter inclusions, impression tracking, and campaign dates."
        actions={
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#2F8FFF] text-white hover:bg-[#2F8FFF]/90 transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Create Promotion</span>
          </button>
        }
      />

      {!promotions || promotions.length === 0 ? (
        <AdminEmptyState
          icon={DollarSign}
          title="0 Active Promoted Placements"
          description="Commercial event placements booked by employers and conference organizers will appear here with real impression and click metrics."
          badge="Commercial Inventory"
        />
      ) : (
        <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
                <tr>
                  <th className="p-3">Event / Advertiser</th>
                  <th className="p-3">Placement</th>
                  <th className="p-3">Campaign Window</th>
                  <th className="p-3">Impressions</th>
                  <th className="p-3">Clicks</th>
                  <th className="p-3">Payment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)]">
                {promotions.map((promo) => {
                  const event = promo.events as unknown as { title: string; slug: string } | null;
                  return (
                    <tr key={promo.id} className="hover:bg-[var(--color-surface-interactive)]">
                      <td className="p-3">
                        <div className="font-semibold text-[var(--color-text-primary)]">
                          {event?.title || 'Unknown Event'}
                        </div>
                        <div className="text-[11px] text-[var(--color-text-tertiary)]">
                          {promo.advertiser_name}
                        </div>
                      </td>
                      <td className="p-3 font-mono text-[10px] uppercase text-[var(--color-text-secondary)]">
                        {promo.placement.replace('_', ' ')}
                      </td>
                      <td className="p-3 font-mono text-[var(--color-text-tertiary)]">
                        {promo.start_date} to {promo.end_date}
                      </td>
                      <td className="p-3 font-mono text-[var(--color-text-primary)]">
                        {promo.impressions_count.toLocaleString()}
                      </td>
                      <td className="p-3 font-mono text-[var(--color-text-primary)]">
                        {promo.clicks_count.toLocaleString()}
                      </td>
                      <td className="p-3">
                        <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-[var(--color-surface-sunken)] text-[#34D399] border border-[var(--color-border-subtle)]">
                          {promo.payment_status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
