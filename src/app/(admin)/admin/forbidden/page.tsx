import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { ShieldAlert, ArrowLeft, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function AdminForbiddenPage() {
  return (
    <div className="min-h-screen bg-[var(--color-surface-base)] flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full p-8 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-xl space-y-6">
        <div className="w-12 h-12 rounded-full bg-[#F87171]/15 border border-[#F87171]/30 flex items-center justify-center mx-auto text-[#F87171]">
          <Lock className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <p className="text-xs font-mono uppercase text-[#F87171] font-semibold tracking-wider">
            403 — Unauthorized Access
          </p>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
            CareerOS Control Plane Protected
          </h1>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            Your current account does not have active administrative permissions for the CareerOS operating control plane.
          </p>
        </div>

        <div className="p-3 bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] rounded text-[11px] text-[var(--color-text-tertiary)] text-left font-mono">
          <p>Enforced: Server-side RBAC validation</p>
          <p>Required: Membership in workspace type ADMIN</p>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <Button href={ROUTES.APP_DASHBOARD} variant="primary" size="md">
            Return to User Dashboard
          </Button>
          <Button href={ROUTES.LOGIN} variant="outline" size="md">
            Sign In with Admin Account
          </Button>
        </div>
      </div>
    </div>
  );
}
