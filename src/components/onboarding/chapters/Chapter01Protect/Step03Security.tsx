'use client';

import React from 'react';
import { AdaptiveSplitLayout } from '../../shared/AdaptiveSplitLayout';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
  ShieldCheck,
  Fingerprint,
  Lock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Shield,
  KeyRound,
} from 'lucide-react';

interface Step03SecurityProps {
  securitySecured: boolean;
  securityMethod: 'passkey' | 'password';
  passwordValue: string;
  isSecuring: boolean;
  securityError: string;
  onChangeSecurityMethod: (method: 'passkey' | 'password') => void;
  onChangePassword: (password: string) => void;
  onRegisterPasskey: () => void;
  onRegisterPassword: () => void;
  onNext: () => void;
  onBack: () => void;
}

export function Step03Security({
  securitySecured,
  securityMethod,
  passwordValue,
  isSecuring,
  securityError,
  onChangeSecurityMethod,
  onChangePassword,
  onRegisterPasskey,
  onRegisterPassword,
  onNext,
  onBack,
}: Step03SecurityProps) {
  // Visual side panel representation for protection
  const protectionVisual = (
    <div className="p-7 rounded-2xl bg-gradient-to-br from-[#0A0E17] via-[#101726] to-[#151F33] border border-blue-950/40 shadow-2xl space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-[#2F8FFF]" />
          <span className="text-xs font-mono uppercase tracking-widest text-white font-bold">
            Career OS Security Vault
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
          AIR-GAPPED
        </span>
      </div>

      <div className="space-y-3 text-xs">
        <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 flex items-center justify-between">
          <span className="text-[var(--color-taupe-300)]">Career Twin &amp; History</span>
          <span className="font-semibold text-white">Private</span>
        </div>
        <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 flex items-center justify-between">
          <span className="text-[var(--color-taupe-300)]">Mentor Sounding Board</span>
          <span className="font-semibold text-white">Protected</span>
        </div>
        <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 flex items-center justify-between">
          <span className="text-[var(--color-taupe-300)]">Career Passport Proof</span>
          <span className="font-semibold text-white">Yours</span>
        </div>
      </div>

      <div className="p-4 rounded-lg bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] space-y-1">
        <p className="text-xs font-semibold text-white">
          Why secure your account now?
        </p>
        <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
          Your Career OS will hold years of private career context, goals, capability data, and mentor dialogues.
        </p>
      </div>
    </div>
  );

  return (
    <AdaptiveSplitLayout
      chapter="01_PROTECT"
      stepNumber="3"
      stepTotal="3"
      sectionLabel="Security &bull; Sovereign Vault"
      headline="Before we build your Career Twin, let's protect it."
      description="Your Career OS may eventually contain years of private career history, evidence, and conversations. Secure it now."
      visualContent={protectionVisual}
    >
      <div className="space-y-6">
        {securitySecured ? (
          <div className="p-6 rounded-[var(--radius-card)] bg-emerald-950/20 border border-emerald-500/30 space-y-3">
            <div className="flex items-center gap-2.5 text-emerald-300 font-semibold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Career OS vault secured</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Your device authentication credentials have been verified. Your career data remains protected.
            </p>
          </div>
        ) : (
          <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-5">
            {/* Method Toggle Buttons */}
            <div className="flex rounded-lg border border-[var(--color-border-default)] p-1 bg-[var(--color-surface-base)] gap-1">
              <button
                type="button"
                onClick={() => onChangeSecurityMethod('passkey')}
                className={`flex-1 py-2 px-3 text-xs font-semibold rounded-md flex items-center justify-center gap-1.5 transition-all ${
                  securityMethod === 'passkey'
                    ? 'bg-white/10 text-white shadow-sm border border-white/10 font-bold'
                    : 'text-[var(--color-taupe-300)] hover:text-white'
                }`}
              >
                <Fingerprint className="w-4 h-4 text-[#2F8FFF]" />
                <span>Passkey (Biometric)</span>
              </button>

              <button
                type="button"
                onClick={() => onChangeSecurityMethod('password')}
                className={`flex-1 py-2 px-3 text-xs font-semibold rounded-md flex items-center justify-center gap-1.5 transition-all ${
                  securityMethod === 'password'
                    ? 'bg-white/10 text-white shadow-sm border border-white/10 font-bold'
                    : 'text-[var(--color-taupe-300)] hover:text-white'
                }`}
              >
                <Lock className="w-4 h-4" />
                <span>Password</span>
              </button>
            </div>

            {securityError && (
              <div className="p-3 rounded-lg bg-red-950/30 border border-red-700/40 flex items-start gap-2 text-xs text-red-300">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{securityError}</span>
              </div>
            )}

            {securityMethod === 'passkey' ? (
              <div className="space-y-3">
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Use Face ID, Touch ID, Windows Hello, or your device security key. Fast, phishing-resistant, and private.
                </p>
                <Button
                  type="button"
                  onClick={onRegisterPasskey}
                  variant="primary"
                  size="md"
                  className="w-full justify-center text-xs font-mono"
                  disabled={isSecuring}
                >
                  <Fingerprint className="w-4 h-4 mr-2 text-[#6BB8FF]" />
                  <span>{isSecuring ? 'Verifying with device…' : 'Set up a passkey'}</span>
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                <label className="text-xs font-semibold text-white block">
                  Create Account Password
                </label>
                <input
                  type="password"
                  value={passwordValue}
                  onChange={(e) => onChangePassword(e.target.value)}
                  placeholder="Minimum 8 characters"
                  className="w-full px-3.5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#2F8FFF]"
                />
                <Button
                  type="button"
                  onClick={onRegisterPassword}
                  variant="primary"
                  size="md"
                  className="w-full justify-center text-xs font-mono"
                  disabled={isSecuring || passwordValue.length < 8}
                >
                  <KeyRound className="w-4 h-4 mr-2" />
                  <span>{isSecuring ? 'Securing password…' : 'Save password & protect account'}</span>
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Bottom Actions */}
        <div className="pt-2 flex items-center justify-between">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-xs font-mono text-[var(--color-taupe-300)]"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>Back</span>
          </Button>

          <Button
            type="button"
            variant="primary"
            size="md"
            onClick={onNext}
            disabled={!securitySecured}
            className="text-xs font-mono"
          >
            <span>Tell Career OS about me</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </AdaptiveSplitLayout>
  );
}
