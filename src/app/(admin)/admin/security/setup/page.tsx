'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Smartphone, KeyRound, CheckCircle2, Download, Copy, AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function AdminSecuritySetupPage() {
  const router = useRouter();

  const [step, setStep] = useState<'factor' | 'recovery_codes'>('factor');
  const [factorType, setFactorType] = useState<'totp' | 'passkey'>('totp');
  const [totpCode, setTotpCode] = useState('');
  const [recoveryCodes, setRecoveryCodes] = useState<string[]>([]);
  const [hasCopied, setHasCopied] = useState(false);
  const [hasConfirmedSaved, setHasConfirmedSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleEnrollFactor = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/admin/auth/mfa/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          factorType,
          factorLabel: factorType === 'totp' ? 'Primary Authenticator' : 'Platform Security Key',
          verificationCode: totpCode,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.error || 'Failed to verify and enroll MFA factor.');
        setIsLoading(false);
        return;
      }

      setRecoveryCodes(data.recoveryCodes || []);
      setStep('recovery_codes');
    } catch {
      setErrorMessage('Connection error during MFA enrollment.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFinishSetup = () => {
    if (!hasConfirmedSaved) return;
    router.push('/admin');
  };

  const handleCopyCodes = () => {
    navigator.clipboard.writeText(recoveryCodes.join('\n'));
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface-sunken)] flex flex-col justify-center py-12 sm:px-6 lg:px-8 antialiased">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-strong)] flex items-center justify-center shadow-sm">
            <Shield className="w-6 h-6 text-[#2F8FFF]" />
          </div>
        </div>

        <h1 className="text-center text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
          Administrative Security Setup
        </h1>
        <p className="mt-1 text-center text-xs font-mono uppercase tracking-wider text-[var(--color-text-tertiary)]">
          Mandatory MFA Enrollment
        </p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-[var(--color-surface-raised)] py-8 px-6 shadow-sm border border-[var(--color-border-default)] rounded-xl sm:px-10">
          {errorMessage && (
            <div className="mb-6 p-3 rounded-md bg-[#F87171]/10 border border-[#F87171]/30 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-[#F87171] shrink-0 mt-0.5" />
              <span className="text-xs text-[#F87171] font-medium">{errorMessage}</span>
            </div>
          )}

          {step === 'factor' ? (
            /* Step 1: Enroll Primary Factor */
            <form onSubmit={handleEnrollFactor} className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
                  Select Administrative Multi-Factor Method
                </h3>
                <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">
                  CareerOS administration requires hardware-backed Passkeys or standard RFC 6238 TOTP authenticator apps.
                </p>
              </div>

              {/* Selector */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFactorType('totp')}
                  className={`p-4 rounded-lg border text-left transition-all ${
                    factorType === 'totp'
                      ? 'border-[#2F8FFF] bg-[#2F8FFF]/5'
                      : 'border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]'
                  }`}
                >
                  <Smartphone className="w-5 h-5 text-[#2F8FFF] mb-2" />
                  <div className="text-xs font-bold text-[var(--color-text-primary)]">Authenticator App</div>
                  <div className="text-[11px] text-[var(--color-text-tertiary)] mt-0.5">Google Auth, 1Password, etc.</div>
                </button>

                <button
                  type="button"
                  onClick={() => setFactorType('passkey')}
                  className={`p-4 rounded-lg border text-left transition-all ${
                    factorType === 'passkey'
                      ? 'border-[#2F8FFF] bg-[#2F8FFF]/5'
                      : 'border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]'
                  }`}
                >
                  <KeyRound className="w-5 h-5 text-[#2F8FFF] mb-2" />
                  <div className="text-xs font-bold text-[var(--color-text-primary)]">Passkey / FIDO2</div>
                  <div className="text-[11px] text-[var(--color-text-tertiary)] mt-0.5">YubiKey, Touch ID, Windows Hello</div>
                </button>
              </div>

              {factorType === 'totp' && (
                <div className="p-4 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] space-y-4">
                  <div className="space-y-1">
                    <div className="text-xs font-semibold text-[var(--color-text-primary)]">
                      1. Scan QR Code or enter manual secret
                    </div>
                    <div className="text-xs font-mono text-[var(--color-text-secondary)] bg-[var(--color-surface-base)] p-2 rounded border border-[var(--color-border-subtle)] select-all break-all">
                      JBSWY3DPEHPK3PXP
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[var(--color-text-primary)]">
                      2. Enter generated 6-digit code
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      pattern="[0-9]{6}"
                      value={totpCode}
                      onChange={(e) => setTotpCode(e.target.value.replace(/\D/g, ''))}
                      placeholder="000000"
                      className="w-full tracking-widest text-center font-mono text-lg px-3 py-2 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)]"
                    />
                  </div>
                </div>
              )}

              {factorType === 'passkey' && (
                <div className="p-4 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-center space-y-2">
                  <KeyRound className="w-6 h-6 text-[#2F8FFF] mx-auto" />
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    Click continue to register your device biometric or hardware security key via WebAuthn.
                  </p>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Enrolling...' : 'Verify & Continue'}
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </form>
          ) : (
            /* Step 2: Single-View Recovery Codes */
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#34D399]" />
                  <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
                    Save Your Single-Use Recovery Codes
                  </h3>
                </div>
                <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">
                  These 10 recovery codes are your emergency access method if you lose your authenticator device.
                  <strong> They will never be shown again.</strong> Store them in a secure password manager or offline vault.
                </p>
              </div>

              {/* Codes Grid */}
              <div className="grid grid-cols-2 gap-2 bg-[var(--color-surface-sunken)] p-4 rounded-lg border border-[var(--color-border-default)] font-mono text-xs">
                {recoveryCodes.map((code, idx) => (
                  <div key={idx} className="p-1.5 bg-[var(--color-surface-base)] rounded border border-[var(--color-border-subtle)] text-center font-bold">
                    {code}
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={handleCopyCodes}
                  className="flex-1"
                >
                  <Copy className="w-3.5 h-3.5 mr-1.5" />
                  {hasCopied ? 'Copied to Clipboard' : 'Copy All Codes'}
                </Button>
              </div>

              <div className="pt-2 border-t border-[var(--color-border-subtle)]">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasConfirmedSaved}
                    onChange={(e) => setHasConfirmedSaved(e.target.checked)}
                    className="mt-0.5 rounded border-[var(--color-border-default)]"
                  />
                  <span className="text-xs text-[var(--color-text-secondary)]">
                    I have safely stored these single-use recovery codes offline and understand they cannot be retrieved later.
                  </span>
                </label>
              </div>

              <Button
                type="button"
                variant="primary"
                size="md"
                className="w-full"
                disabled={!hasConfirmedSaved}
                onClick={handleFinishSetup}
              >
                Access Administration Console
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
