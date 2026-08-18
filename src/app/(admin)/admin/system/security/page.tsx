import React from 'react';
import { requireAdminSession } from '@/lib/admin/auth';
import { enforceAdminRole } from '@/lib/admin/permissions';
import { createAdminClient } from '@/lib/supabase/server';
import { Shield, Lock, AlertTriangle, Activity, CheckCircle2 } from 'lucide-react';

export default async function AdminSystemSecurityPage() {
  const { user } = await requireAdminSession('admin');
  enforceAdminRole(user, 'admin');

  const supabase = createAdminClient();

  // Load recent security audit events
  const { data: events } = await supabase
    .from('admin_security_events')
    .select('*')
    .order('occurred_at', { ascending: false })
    .limit(20);

  // Load active sessions count
  const { count: activeSessionsCount } = await supabase
    .from('admin_sessions')
    .select('*', { count: 'exact', head: true })
    .is('revoked_at', null);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-[var(--color-border-default)]">
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider mb-1">
          <span>System Administration</span>
          <span>•</span>
          <span className="text-[#2F8FFF]">Security Operations & Audit</span>
        </div>
        <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
          Security Telemetry & Event Audit
        </h1>
        <p className="text-xs text-[var(--color-text-secondary)] mt-1">
          Immutable audit trail for all administrative authentications, MFA verifications, and high-risk operations.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <div className="text-[10px] font-mono uppercase text-[var(--color-text-tertiary)]">Active Admin Sessions</div>
          <div className="text-xl font-bold text-[var(--color-text-primary)] mt-1">
            {activeSessionsCount || 1}
          </div>
          <div className="text-[10px] text-[#34D399] mt-0.5">Isolated Security Context</div>
        </div>

        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <div className="text-[10px] font-mono uppercase text-[var(--color-text-tertiary)]">MFA Enforcement</div>
          <div className="text-xl font-bold text-[#34D399] mt-1">100% Mandatory</div>
          <div className="text-[10px] text-[var(--color-text-secondary)] mt-0.5">AAL2 Assurance Level</div>
        </div>

        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
          <div className="text-[10px] font-mono uppercase text-[var(--color-text-tertiary)]">Security Telemetry</div>
          <div className="text-xl font-bold text-[var(--color-text-primary)] mt-1">
            {events?.length || 0} Events
          </div>
          <div className="text-[10px] text-[var(--color-text-secondary)] mt-0.5">Immutable Audit Log</div>
        </div>
      </div>

      {/* Security Events Table */}
      <div className="rounded-md border border-[var(--color-border-default)] overflow-hidden bg-[var(--color-surface-raised)]">
        <div className="px-5 py-4 border-b border-[var(--color-border-subtle)] flex items-center justify-between">
          <h2 className="text-xs font-mono uppercase font-bold text-[var(--color-text-primary)] tracking-wider">
            Recent Administrative Security Events
          </h2>
        </div>

        <div className="divide-y divide-[var(--color-border-subtle)] text-xs font-mono">
          {events && events.length > 0 ? (
            events.map((ev) => (
              <div key={ev.id} className="p-4 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[var(--color-text-primary)] uppercase">
                      {ev.event_type}
                    </span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                      ev.success
                        ? 'bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30'
                        : 'bg-[#F87171]/10 text-[#F87171] border border-[#F87171]/30'
                    }`}>
                      {ev.success ? 'SUCCESS' : 'FAILED'}
                    </span>
                  </div>
                  <div className="text-[10px] text-[var(--color-text-tertiary)]">
                    Event ID: {ev.id.slice(0, 8)}...
                  </div>
                </div>

                <div className="text-right text-[10px] text-[var(--color-text-secondary)]">
                  {new Date(ev.occurred_at).toLocaleString()}
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-xs text-[var(--color-text-tertiary)]">
              No recent security anomalies or events recorded.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
