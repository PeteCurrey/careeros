'use client';

import React, { useState } from 'react';
import { Partner } from '@/types/admin/partnerships';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Eye, Globe, Lock, CheckCircle2, AlertTriangle, X, ShieldCheck } from 'lucide-react';

interface Props {
  partner: Partner;
  isOpen: boolean;
  onClose: () => void;
  onTogglePublish?: (approved: boolean) => Promise<void>;
}

export function PartnershipPublicPreviewModal({ partner, isOpen, onClose, onTogglePublish }: Props) {
  const [isUpdating, setIsUpdating] = useState(false);

  if (!isOpen) return null;

  const handleToggle = async () => {
    if (!onTogglePublish) return;
    setIsUpdating(true);
    try {
      await onTogglePublish(!partner.public_display_approved);
    } catch {
      //
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-xl shadow-2xl overflow-hidden space-y-6">
        
        {/* Header */}
        <div className="p-5 border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#2F8FFF]" />
            <h2 className="text-sm font-bold text-[var(--color-text-primary)] font-mono uppercase">
              Public Website Preview (/company/partners)
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Public Card Mockup Preview */}
        <div className="px-6 space-y-4">
          <div className="text-xs font-mono text-[var(--color-text-tertiary)]">
            PREVIEW AS IT APPEARS TO THE PUBLIC:
          </div>

          <div className="p-6 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-center justify-center font-bold text-sm text-[var(--color-text-primary)] font-mono">
                  {partner.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                    {partner.public_name || partner.name}
                  </h3>
                  <span className="text-[11px] text-[var(--color-text-tertiary)] font-mono">
                    {partner.public_category || partner.primary_category} &bull; {partner.geographic_reach}
                  </span>
                </div>
              </div>
              <Badge variant="verified" size="sm">Partner</Badge>
            </div>

            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {partner.public_description || partner.description || partner.strategic_rationale}
            </p>
          </div>

          {/* Visibility Controls */}
          <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-lg space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[var(--color-text-primary)] font-mono">
                PUBLIC DISPLAY STATUS:
              </span>
              {partner.public_display_approved ? (
                <span className="px-2 py-0.5 rounded bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.3)] text-[#34D399] font-mono text-xs font-bold">
                  PUBLISHED TO /company/partners
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded bg-[rgba(248,113,113,0.1)] border border-[rgba(248,113,113,0.3)] text-[#F87171] font-mono text-xs font-bold">
                  INTERNAL ONLY (HIDDEN)
                </span>
              )}
            </div>

            <p className="text-[11px] text-[var(--color-text-tertiary)] leading-relaxed">
              Target and negotiating partners are hidden by default. Public publishing requires confirmed logo permission and written announcement rights.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[var(--color-border-default)] bg-[var(--color-surface-base)] flex items-center justify-between">
          <Button type="button" variant="secondary" size="sm" onClick={onClose} className="font-mono text-xs">
            Close
          </Button>
          <Button
            type="button"
            variant={partner.public_display_approved ? 'destructive' : 'primary'}
            size="sm"
            onClick={handleToggle}
            disabled={isUpdating}
            className="font-mono text-xs"
          >
            {isUpdating
              ? 'Updating…'
              : partner.public_display_approved
              ? 'Unpublish from Public Page'
              : 'Approve & Publish to Public Page'}
          </Button>
        </div>

      </div>
    </div>
  );
}
