import React from 'react';
import { requireAdminSession } from '@/lib/admin/auth';
import { getAdminMfaFactors } from '@/lib/admin/mfa';
import { Shield, KeyRound, Smartphone, Laptop, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default async function AdminAccountSecurityPage() {
  const { user, session } = await requireAdminSession('read_only');
  const mfaStatus = await getAdminMfaFactors(user.id);

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider mb-1">
          <span>Administrator Profile</span>
          <span>•</span>
          <span className="text-[#2F8FFF]">Security & Assurance</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
          Account Security & Sessions
        </h1>
        <p className="text-xs text-[var(--color-text-secondary)] mt-1">
          Manage your enrolled authentication factors, single-use recovery codes, and active administrative sessions.
        </p>
      </div>

      {/* Security Overview Card */}
      <div className="p-5 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#34D399]/10 border border-[#34D399]/30 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-[#34D399]" />
          </div>
          <div>
            <div className="text-sm font-semibold text-[var(--color-text-primary)]">
              Multi-Factor Authentication Active
            </div>
            <div className="text-xs text-[var(--color-text-tertiary)]">
              Role: <span className="font-mono text-[var(--color-text-secondary)] uppercase font-bold">{user.role}</span>
              {' • '}
              Assurance Level: <span className="text-[#34D399] font-mono font-bold">AAL2 (Hardware / TOTP)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enrolled Factors */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold text-[var(--color-text-primary)] flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#2F8FFF]" />
          <span>Configured Multi-Factor Credentials</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-start justify-between">
            <div className="flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-[#2F8FFF] mt-0.5" />
              <div>
                <div className="text-xs font-bold text-[var(--color-text-primary)]">Authenticator Application</div>
                <div className="text-[11px] text-[var(--color-text-tertiary)] mt-0.5">
                  RFC 6238 Time-based One-Time Password (TOTP)
                </div>
                <div className="text-[10px] text-[#34D399] font-medium mt-2">Active Factor</div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-start justify-between">
            <div className="flex items-start gap-3">
              <KeyRound className="w-5 h-5 text-[#2F8FFF] mt-0.5" />
              <div>
                <div className="text-xs font-bold text-[var(--color-text-primary)]">Emergency Recovery Codes</div>
                <div className="text-[11px] text-[var(--color-text-tertiary)] mt-0.5">
                  {mfaStatus.remainingRecoveryCodes} unconsumed single-use codes remaining
                </div>
                <div className="text-[10px] text-[var(--color-text-secondary)] font-medium mt-2">
                  Hashed with SHA-256 at rest
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Sessions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-[var(--color-text-primary)] flex items-center gap-2">
            <Laptop className="w-4 h-4 text-[#2F8FFF]" />
            <span>Current Administrative Session</span>
          </h2>
        </div>

        <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#34D399]" />
              <span className="text-xs font-bold text-[var(--color-text-primary)]">
                {session.device_label || 'Current Active Browser'}
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30">
                This Device
              </span>
            </div>
            <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
              Session ID: {session.id.slice(0, 8)}...
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-2 border-t border-[var(--color-border-subtle)] font-mono">
            <div>
              <span className="text-[10px] text-[var(--color-text-tertiary)] uppercase block">Idle Timeout</span>
              <span className="text-[var(--color-text-secondary)] text-[11px]">30 min rolling</span>
            </div>
            <div>
              <span className="text-[10px] text-[var(--color-text-tertiary)] uppercase block">Absolute Expiry</span>
              <span className="text-[var(--color-text-secondary)] text-[11px]">
                {new Date(session.expires_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-[var(--color-text-tertiary)] uppercase block">Step-Up State</span>
              <span className="text-[#34D399] text-[11px]">Recent strong auth verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
