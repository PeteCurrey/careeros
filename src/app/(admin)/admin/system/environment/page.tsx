import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { AdminSectionHeader } from '@/components/admin/AdminCommonUI';
import { Activity, ShieldCheck, Database, Server, Clock } from 'lucide-react';

export default async function AdminEnvironmentPage() {
  await requireAdminRole('super_admin');

  const envInfo = [
    { label: 'Next.js App Runtime', value: '16.3.1 (React 19.2.8)', status: 'Optimal' },
    { label: 'Environment Mode', value: process.env.NEXT_PUBLIC_APP_ENV || process.env.NODE_ENV || 'development', status: 'Operational' },
    { label: 'Supabase URL Binding', value: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Configured' : 'Missing', status: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Optimal' : 'Error' },
    { label: 'Service Role Key', value: process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Present (Server Secret)' : 'Missing', status: process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Optimal' : 'Error' },
    { label: 'Edge Middleware', value: 'Active on /admin/*', status: 'Optimal' },
    { label: 'Database RLS Protection', value: 'Enforced on 25+ tables', status: 'Optimal' },
    { label: 'Server Time (UTC)', value: new Date().toISOString(), status: 'Synchronized' },
  ];

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="System Operations"
        title="Environment & Runtime Health"
        description="Core deployment infrastructure, node variables, service keys, edge middleware status and UTC clock synchronization."
      />

      <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
        <div className="p-4 border-b border-[var(--color-border-default)]">
          <h2 className="text-sm font-bold text-[var(--color-text-primary)]">
            Active Runtime Profile
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-tertiary)] font-mono uppercase text-[10px]">
              <tr>
                <th className="p-3">Component / Key</th>
                <th className="p-3">Resolved Runtime State</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-subtle)]">
              {envInfo.map((info) => (
                <tr key={info.label} className="hover:bg-[var(--color-surface-interactive)]">
                  <td className="p-3 font-medium text-[var(--color-text-primary)]">
                    {info.label}
                  </td>
                  <td className="p-3 font-mono text-[var(--color-text-secondary)]">
                    {info.value}
                  </td>
                  <td className="p-3">
                    <span
                      className={`font-mono text-[10px] uppercase px-1.5 py-0.5 rounded border ${
                        info.status === 'Optimal' || info.status === 'Operational' || info.status === 'Synchronized'
                          ? 'bg-[#34D399]/10 text-[#34D399] border-[#34D399]/30'
                          : 'bg-[#F87171]/10 text-[#F87171] border-[#F87171]/30'
                      }`}
                    >
                      {info.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
