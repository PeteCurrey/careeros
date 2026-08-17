'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { Eye, EyeOff } from 'lucide-react';

// NOTE(pre-launch): This login page is scaffolding only. The handleSubmit below
// simulates a 1-second delay and then shows a "check your email" message, but NO
// actual magic link or session is created. Wire this to supabase.auth.signInWithOtp
// (magic link) and supabase.auth.signInWithPassword (password) before launch.
// The UI copy must not change until real auth is wired — do not promise users
// something that doesn't happen.

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [authMethod, setAuthMethod] = useState<'password' | 'magic_link'>('magic_link');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'magic_sent'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // TODO(pre-launch): Replace this fake delay with real Supabase auth calls:
    // Magic link: await supabase.auth.signInWithOtp({ email })
    // Password:   await supabase.auth.signInWithPassword({ email, password })
    // The success screen shown below implies an email was sent — it was NOT.
    await new Promise((r) => setTimeout(r, 1000));
    if (authMethod === 'magic_link') {
      setStatus('magic_sent');
    } else {
      setStatus('idle');
    }
  };

  return (
    <div className="w-full max-w-sm">
      <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-xl p-8 shadow-sm space-y-6">
        {/* Heading */}
        <div className="space-y-1 text-center">
          <h1 className="text-xl font-bold text-[var(--color-text-primary)] tracking-tight">
            Log in to Career OS
          </h1>
          <p className="text-sm text-[var(--color-text-tertiary)]">
            Your career operating system
          </p>
        </div>

        {/* Auth Method Toggle */}
        <div className="flex rounded-lg border border-[var(--color-border-default)] overflow-hidden p-0.5 gap-0.5 bg-[var(--color-surface-sunken)]">
          <button
            type="button"
            onClick={() => setAuthMethod('magic_link')}
            className={`flex-1 py-2 text-xs font-semibold rounded-md transition-colors ${
              authMethod === 'magic_link'
                ? 'bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] shadow-sm'
                : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]'
            }`}
          >
            Magic Link
          </button>
          <button
            type="button"
            onClick={() => setAuthMethod('password')}
            className={`flex-1 py-2 text-xs font-semibold rounded-md transition-colors ${
              authMethod === 'password'
                ? 'bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] shadow-sm'
                : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]'
            }`}
          >
            Password
          </button>
        </div>

        {status === 'magic_sent' ? (
          <div className="text-center space-y-3 py-4">
            <div className="w-12 h-12 rounded-full bg-[var(--color-success-light)] flex items-center justify-center mx-auto text-2xl">
              ✉️
            </div>
            <p className="text-sm font-semibold text-[var(--color-text-primary)]">
              Check your email
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">
              We sent a secure sign-in link to <strong>{email}</strong>. The link expires in 10 minutes.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="text-xs text-[var(--color-brand-600)] hover:underline"
            >
              Try a different email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-semibold text-[var(--color-text-primary)]">
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)] transition-shadow"
              />
            </div>

            {authMethod === 'password' && (
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-xs font-semibold text-[var(--color-text-primary)]">
                    Password
                  </label>
                  <Link href="#" className="text-xs text-[var(--color-brand-600)] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
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
            )}

            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full"
              disabled={status === 'loading'}
            >
              {status === 'loading'
                ? 'Processing…'
                : authMethod === 'magic_link'
                ? 'Send Magic Link'
                : 'Log In'}
            </Button>
          </form>
        )}

        <div className="text-center text-xs text-[var(--color-text-tertiary)]">
          Don&apos;t have an account?{' '}
          <Link href={ROUTES.SIGNUP} className="text-[var(--color-brand-600)] font-semibold hover:underline">
            Create free account
          </Link>
        </div>
      </div>
    </div>
  );
}
