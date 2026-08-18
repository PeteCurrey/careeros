'use client';

import React, { useState } from 'react';
import { Shield, KeyRound, Smartphone, AlertTriangle, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface StepUpModalProps {
  isOpen: boolean;
  actionContext: string;
  onSuccess: () => void;
  onCancel: () => void;
}

export function StepUpModal({ isOpen, actionContext, onSuccess, onCancel }: StepUpModalProps) {
  const [factorType, setFactorType] = useState<'totp' | 'passkey' | 'recovery'>('totp');
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/admin/auth/step-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          actionContext,
          factorType: factorType === 'recovery' ? 'recovery_code' : factorType,
          code,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.error || 'Verification failed.');
        setIsLoading(false);
        return;
      }

      onSuccess();
    } catch {
      setErrorMessage('Connection error during step-up reauthentication.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-strong)] rounded-xl max-w-md w-full p-6 shadow-xl space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#2F8FFF]/10 border border-[#2F8FFF]/30 flex items-center justify-center">
              <Shield className="w-4 h-4 text-[#2F8FFF]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                Confirm It&apos;s You
              </h3>
              <p className="text-[11px] text-[var(--color-text-tertiary)]">
                Recent strong authentication required
              </p>
            </div>
          </div>
          <button
            onClick={onCancel}
            className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-3 bg-[var(--color-surface-sunken)] rounded-md border border-[var(--color-border-subtle)]">
          <span className="text-[11px] text-[var(--color-text-secondary)]">
            High-risk operation: <strong className="text-[var(--color-text-primary)] font-mono">{actionContext}</strong>
          </span>
        </div>

        {errorMessage && (
          <div className="p-3 bg-[#F87171]/10 border border-[#F87171]/30 rounded-md flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-[#F87171] shrink-0 mt-0.5" />
            <span className="text-xs text-[#F87171]">{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex rounded-md border border-[var(--color-border-default)] p-0.5 bg-[var(--color-surface-sunken)] text-xs">
            <button
              type="button"
              onClick={() => setFactorType('totp')}
              className={`flex-1 py-1.5 rounded font-medium transition-colors flex items-center justify-center gap-1 ${
                factorType === 'totp'
                  ? 'bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] shadow-sm'
                  : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Authenticator</span>
            </button>
            <button
              type="button"
              onClick={() => setFactorType('passkey')}
              className={`flex-1 py-1.5 rounded font-medium transition-colors flex items-center justify-center gap-1 ${
                factorType === 'passkey'
                  ? 'bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] shadow-sm'
                  : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Passkey</span>
            </button>
          </div>

          {factorType === 'totp' ? (
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[var(--color-text-primary)]">
                Authenticator Code
              </label>
              <input
                type="text"
                required
                autoFocus
                maxLength={6}
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                placeholder="000000"
                className="w-full tracking-widest text-center font-mono text-base px-3 py-2 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)]"
              />
            </div>
          ) : (
            <div className="p-3 bg-[var(--color-surface-sunken)] rounded text-center text-xs text-[var(--color-text-secondary)]">
              Authenticate with your registered security key or device biometric.
            </div>
          )}

          <div className="flex gap-2 pt-2">
            <Button
              type="button"
              variant="secondary"
              size="md"
              className="flex-1"
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="flex-1"
              disabled={isLoading}
            >
              {isLoading ? 'Verifying...' : 'Authorize Action'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
