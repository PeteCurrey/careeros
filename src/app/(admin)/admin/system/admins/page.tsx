import React from 'react';
import { requireAdminSession } from '@/lib/admin/auth';
import { enforceSuperAdmin } from '@/lib/admin/permissions';
import { createAdminClient } from '@/lib/supabase/server';
import { Users, UserPlus, Shield, KeyRound, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default async function AdminSystemAdminsPage() {
  const { user } = await requireAdminSession('super_admin');
  enforceSuperAdmin(user);

  const supabase = createAdminClient();

  // Load all admin workspace members
  const { data: members } = await supabase
    .from('workspace_memberships')
    .select(`
      id,
      status,
      created_at,
      profiles!inner (
        id,
        display_name,
        created_at
      ),
      roles!inner (
        name
      )
    `)
    .eq('workspaces.type', 'ADMIN');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-[var(--color-border-default)]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider mb-1">
            <span>Control Plane Administration</span>
            <span>•</span>
            <span className="text-[#F87171] font-semibold">Super Admin Only</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Admin Account Provisioning & Roles
          </h1>
          <p className="text-xs text-[var(--color-text-secondary)] mt-1">
            Explicit administrative identity management. No public registration or consumer account escalation allowed.
          </p>
        </div>

        <Button variant="primary" size="sm" className="shrink-0">
          <UserPlus className="w-4 h-4 mr-1.5" />
          <span>Provision New Admin</span>
        </Button>
      </div>

      {/* Safety Warning */}
      <div className="p-4 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-strong)] flex items-start gap-3">
        <Shield className="w-5 h-5 text-[#2F8FFF] shrink-0 mt-0.5" />
        <div className="text-xs space-y-1">
          <div className="font-bold text-[var(--color-text-primary)]">Principle of Least Privilege Enforced</div>
          <div className="text-[var(--color-text-tertiary)] leading-relaxed">
            All administrative privileges require explicit server-side role assignment and mandatory multi-factor authentication.
            High-risk operations (invitations, role modifications, and session revocations) require recent step-up authentication.
          </div>
        </div>
      </div>

      {/* Admins Table */}
      <div className="rounded-md border border-[var(--color-border-default)] overflow-hidden bg-[var(--color-surface-raised)]">
        <div className="px-5 py-4 border-b border-[var(--color-border-subtle)] flex items-center justify-between">
          <h2 className="text-xs font-mono uppercase font-bold text-[var(--color-text-primary)] tracking-wider">
            Active Administrative Identities
          </h2>
          <span className="text-xs font-mono text-[var(--color-text-tertiary)]">
            {members?.length || 1} Registered
          </span>
        </div>

        <div className="divide-y divide-[var(--color-border-subtle)] text-xs">
          {members && members.length > 0 ? (
            members.map((member) => {
              const profile = member.profiles as unknown as { display_name: string; id: string };
              const role = member.roles as unknown as { name: string };
              return (
                <div key={member.id} className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] flex items-center justify-center font-bold text-xs">
                      {profile.display_name?.charAt(0) || 'A'}
                    </div>
                    <div>
                      <div className="font-bold text-[var(--color-text-primary)]">
                        {profile.display_name || 'Administrator'}
                      </div>
                      <div className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
                        ID: {profile.id.slice(0, 8)}...
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[11px] uppercase font-bold px-2 py-0.5 rounded bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)]">
                      {role.name}
                    </span>
                    <span className="text-[11px] font-mono text-[#34D399] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{member.status}</span>
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-6 text-center text-xs text-[var(--color-text-tertiary)]">
              No additional administrator accounts provisioned.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
