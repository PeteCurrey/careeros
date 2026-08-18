import React from 'react';
import { requireAdminRole } from '@/lib/admin/auth';
import { createAdminClient } from '@/lib/supabase/server';
import { AdminSectionHeader, AdminEmptyState } from '@/components/admin/AdminCommonUI';
import { Image, Upload, Search, Filter } from 'lucide-react';

export default async function AdminMediaLibraryPage() {
  await requireAdminRole('content_editor');
  const supabase = createAdminClient();

  const { data: media } = await supabase
    .from('media_assets')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        category="Content Management"
        title="Media Asset Library"
        description="Central repository for hero graphics, photography, PDF specifications, logos, and accessibility alt text."
        actions={
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#2F8FFF] text-white hover:bg-[#2F8FFF]/90 transition-colors shadow-xs"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload Media</span>
          </button>
        }
      />

      {!media || media.length === 0 ? (
        <AdminEmptyState
          icon={Image}
          title="0 Media Assets Uploaded"
          description="Public UI icons and graphics are currently referenced from the static /public bundle. Upload CDN assets here for CMS page binding and social card distribution."
          actionLabel="Upload First Asset"
        />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {media.map((asset) => (
            <div
              key={asset.id}
              className="p-3 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-2"
            >
              <div className="aspect-video bg-[var(--color-surface-sunken)] rounded-sm flex items-center justify-center text-[var(--color-text-tertiary)] overflow-hidden">
                <Image className="w-6 h-6" />
              </div>
              <p className="text-xs font-medium text-[var(--color-text-primary)] truncate">
                {asset.filename}
              </p>
              <p className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
                {(asset.file_size_bytes / 1024).toFixed(1)} KB • {asset.usage_count} uses
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
