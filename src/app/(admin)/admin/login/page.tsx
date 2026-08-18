'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, KeyRound, Smartphone, Lock, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function AdminLoginPage() {
  const router = useRouter();

  // Stage 1: Identifier & Password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Stage 2: Second Factor (MFA)
  const [stage, setStage] = useState<'primary' | 'mfa'>('primary');
  const [challengeToken, setChallengeToken] = useState<string | null>(null);
  const [mfaMethod, setMfaMethod] = useState<'passkey' | 'totp' | 'recovery'>('totp');
  const [totpCode, setTotpCode] = useState('');
  const [recoveryCode, setRecoveryCode] = useState('');
  const [hasMfaEnrolled, setHasMfaEnrolled] = useState(true);

  const handlePrimarySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.error || 'Unable to authenticate with those credentials.');
        setIsLoading(false);
        return;
      }

      setChallengeToken(data.challengeToken);
      setHasMfaEnrolled(data.hasMfaEnrolled);

      if (data.hasPasskey) {
        setMfaMethod('passkey');
      } else {
        setMfaMethod('totp');
      }

      setStage('mfa');
    } catch {
      setErrorMessage('A network or server error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleMfaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!challengeToken) return;

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const payload: {
        challengeToken: string;
        factorType: string;
        code?: string;
      } = {
        challengeToken,
        factorType: mfaMethod === 'recovery' ? 'recovery_code' : mfaMethod,
        code: mfaMethod === 'recovery' ? recoveryCode : totpCode,
      };

      const res = await fetch('/api/admin/auth/mfa/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.error || 'Invalid verification code. Please try again.');
        setIsLoading(false);
        return;
      }

      // If no MFA was enrolled on first login, redirect to setup
      if (!hasMfaEnrolled) {
        router.push('/admin/security/setup');
      } else {
        router.push('/admin');
      }
    } catch {
      setErrorMessage('Verification failed due to a connection error.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface-sunken)] flex flex-col justify-center py-12 sm:px-6 lg:px-8 antialiased">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Header Branding */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-strong)] flex items-center justify-center shadow-sm">
            <Shield className="w-6 h-6 text-[#2F8FFF]" />
          </div>
        </div>

        <h1 className="text-center text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
          CareerOS Administration
        </h1>
        <p className="mt-1 text-center text-xs font-mono uppercase tracking-wider text-[var(--color-text-tertiary)]">
          Authorised Personnel Only
        </p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-[var(--color-surface-raised)] py-8 px-6 shadow-sm border border-[var(--color-border-default)] rounded-xl sm:px-10">
          {/* Security Banner */}
          <div className="mb-6 p-3 rounded-md bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] flex items-center gap-2.5">
            <Lock className="w-4 h-4 text-[var(--color-text-secondary)] shrink-0" />
            <span className="text-[11px] text-[var(--color-text-secondary)] leading-tight">
              Admin access is protected by multi-factor authentication and continuous security telemetry.
            </span>
          </div>

          {errorMessage && (
            <div className="mb-6 p-3 rounded-md bg-[#F87171]/10 border border-[#F87171]/30 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#F87171] shrink-0 mt-0.5" />
              <span className="text-xs text-[#F87171] font-medium leading-relaxed">{errorMessage}</span>
            </div>
          )}

          {stage === 'primary' ? (
            /* Stage 1: Email & Password */
            <form onSubmit={handlePrimarySubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[var(--color-text-primary)]">
                  Administrative Identifier
                </label>
                <input
                  type="email"
                  required
                  autoComplete="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@careeros.com"
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[var(--color-text-primary)]">
                  Primary Password
                </label>
                <input
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••••••"
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)]"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full mt-2"
                disabled={isLoading}
              >
                {isLoading ? 'Verifying...' : 'Continue to Verification'}
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </form>
          ) : (
            /* Stage 2: Mandatory MFA */
            <form onSubmit={handleMfaSubmit} className="space-y-5">
              <div className="text-center space-y-1">
                <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
                  Security Verification Required
                </h3>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  Verify your identity using your configured administrative second factor.
                </p>
              </div>

              {/* MFA Method Switcher */}
              <div className="flex rounded-md border border-[var(--color-border-default)] p-0.5 bg-[var(--color-surface-sunken)] text-xs">
                <button
                  type="button"
                  onClick={() => setMfaMethod('totp')}
                  className={`flex-1 py-1.5 rounded font-medium transition-colors flex items-center justify-center gap-1 ${
                    mfaMethod === 'totp'
                      ? 'bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] shadow-sm'
                      : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Authenticator</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMfaMethod('passkey')}
                  className={`flex-1 py-1.5 rounded font-medium transition-colors flex items-center justify-center gap-1 ${
                    mfaMethod === 'passkey'
                      ? 'bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] shadow-sm'
                      : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>Passkey</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMfaMethod('recovery')}
                  className={`flex-1 py-1.5 rounded font-medium transition-colors flex items-center justify-center gap-1 ${
                    mfaMethod === 'recovery'
                      ? 'bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] shadow-sm'
                      : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>Recovery</span>
                </button>
              </div>

              {mfaMethod === 'totp' && (
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[var(--color-text-primary)]">
                    6-Digit Authenticator Code
                  </label>
                  <input
                    type="text"
                    required
                    autoFocus
                    maxLength={6}
                    pattern="[0-9]{6}"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    value={totpCode}
                    onChange={(e) => setTotpCode(e.target.value.replace(/\D/g, ''))}
                    placeholder="000000"
                    className="w-full tracking-widest text-center font-mono text-lg px-3 py-2 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)]"
                  />
                </div>
              )}

              {mfaMethod === 'passkey' && (
                <div className="p-4 rounded-md border border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-center space-y-2">
                  <KeyRound className="w-6 h-6 text-[#2F8FFF] mx-auto" />
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    Use your security key, Touch ID, or device passkey to complete verification.
                  </p>
                </div>
              )}

              {mfaMethod === 'recovery' && (
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[var(--color-text-primary)]">
                    Single-Use Recovery Code
                  </label>
                  <input
                    type="text"
                    required
                    autoFocus
                    value={recoveryCode}
                    onChange={(e) => setRecoveryCode(e.target.value.toUpperCase())}
                    placeholder="XXXX-XXXX"
                    className="w-full tracking-widest text-center font-mono text-sm px-3 py-2.5 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)]"
                  />
                  <p className="text-[10px] text-[var(--color-text-tertiary)]">
                    Recovery codes are single-use. This code will be permanently invalidated once consumed.
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
                {isLoading ? 'Authenticating...' : 'Complete Authentication'}
              </Button>

              <button
                type="button"
                onClick={() => setStage('primary')}
                className="w-full text-center text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                ← Back to Identifier
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
