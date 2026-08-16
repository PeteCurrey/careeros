'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { Eye, EyeOff, CheckCircle2 } from 'lucide-react';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) return;
    setStatus('loading');
    // Auth integration placeholder — will connect to Supabase auth middleware
    await new Promise((r) => setTimeout(r, 1000));
    setStatus('success');
  };

  return (
    <div className="w-full max-w-sm">
      <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-xl p-8 shadow-sm space-y-6">
        {/* Heading */}
        <div className="space-y-1 text-center">
          <h1 className="text-xl font-bold text-[var(--color-text-primary)] tracking-tight">
            Start your Career OS
          </h1>
          <p className="text-xs text-[var(--color-text-tertiary)]">
            Free for individuals. No credit card required.
          </p>
        </div>

        {status === 'success' ? (
          <div className="text-center space-y-3 py-4">
            <CheckCircle2 className="w-12 h-12 text-[var(--color-success)] mx-auto" />
            <p className="text-sm font-semibold text-[var(--color-text-primary)]">
              Account created!
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">
              Check your inbox at <strong>{email}</strong> for a confirmation link to activate your account.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="signup-email" className="text-xs font-semibold text-[var(--color-text-primary)]">
                Email address
              </label>
              <input
                id="signup-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)] transition-shadow"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="signup-password" className="text-xs font-semibold text-[var(--color-text-primary)]">
                Password
              </label>
              <div className="relative">
                <input
                  id="signup-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 8 characters"
                  className="w-full px-3 py-2.5 pr-10 text-sm rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)] transition-shadow"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="terms-checkbox"
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-[var(--color-border-strong)] text-[var(--color-brand-600)] focus:ring-[var(--color-focus)]"
                required
              />
              <label htmlFor="terms-checkbox" className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                I agree to Career OS{' '}
                <Link href={ROUTES.LEGAL_TERMS} className="text-[var(--color-brand-600)] hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href={ROUTES.LEGAL_PRIVACY} className="text-[var(--color-brand-600)] hover:underline">
                  Privacy Policy
                </Link>
                . I am 16 years of age or older.
              </label>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full"
              disabled={status === 'loading' || !agreedToTerms}
            >
              {status === 'loading' ? 'Creating account…' : 'Create Free Account'}
            </Button>
          </form>
        )}

        {status !== 'success' && (
          <div className="text-center text-xs text-[var(--color-text-tertiary)]">
            Already have an account?{' '}
            <Link href={ROUTES.LOGIN} className="text-[var(--color-brand-600)] font-semibold hover:underline">
              Log in
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
