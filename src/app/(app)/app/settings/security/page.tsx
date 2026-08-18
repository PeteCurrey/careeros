'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ChevronLeft, Fingerprint, Lock, ShieldCheck, Smartphone, Laptop, Trash2, Plus, Clock, AlertTriangle } from 'lucide-react';

interface PasskeyItem {
  id: string;
  name: string;
  created: string;
  lastUsed: string;
}

interface SessionItem {
  id: string;
  device: string;
  browser: string;
  location: string;
  lastActive: string;
  isCurrent: boolean;
}

export default function UserSecurityCentrePage() {
  const [passkeys, setPasskeys] = useState<PasskeyItem[]>([
    { id: '1', name: 'MacBook Pro (Touch ID)', created: '18 Aug 2026', lastUsed: 'Just now' },
  ]);
  const [sessions, setSessions] = useState<SessionItem[]>([
    { id: 's1', device: 'Desktop', browser: 'Chrome on macOS', location: 'London, UK (Approximate)', lastActive: 'Active now', isCurrent: true },
  ]);
  const [isAddingPasskey, setIsAddingPasskey] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleAddPasskey = async () => {
    setIsAddingPasskey(true);
    try {
      const newKey: PasskeyItem = {
        id: 'pk_' + Date.now(),
        name: 'New Device Passkey',
        created: 'Just now',
        lastUsed: 'Just now',
      };
      setPasskeys((prev) => [...prev, newKey]);
      setFeedbackMessage('Passkey added successfully.');
      setTimeout(() => setFeedbackMessage(''), 3000);
    } catch {
      //
    } finally {
      setIsAddingPasskey(false);
    }
  };

  const handleRemovePasskey = (id: string) => {
    if (passkeys.length <= 1) {
      alert('You must keep at least one authentication method configured.');
      return;
    }
    setPasskeys((prev) => prev.filter((p) => p.id !== id));
    setFeedbackMessage('Passkey removed.');
    setTimeout(() => setFeedbackMessage(''), 3000);
  };

  const handleRevokeOtherSessions = async () => {
    setSessions((prev) => prev.filter((s) => s.isCurrent));
    setFeedbackMessage('All other active sessions have been logged out.');
    setTimeout(() => setFeedbackMessage(''), 3000);
  };

  return (
    <div className="section-padding">
      <div className="container-site max-w-2xl space-y-8">
        
        {/* Navigation & Header */}
        <div className="space-y-3">
          <Link
            href={ROUTES.APP_SETTINGS_ACCOUNT}
            className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] flex items-center gap-1 transition-colors font-mono"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Account Settings
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-headline font-bold tracking-tight text-[var(--color-text-primary)]">
                Security &amp; Devices
              </h1>
              <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                Manage your sovereign passkeys, passwords, active sessions, and security activity.
              </p>
            </div>
            <Badge variant="verified" size="sm" className="font-mono">
              ACCOUNT SECURED
            </Badge>
          </div>
        </div>

        {feedbackMessage && (
          <div className="p-3 bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.25)] rounded text-xs text-[#34D399] font-mono flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>{feedbackMessage}</span>
          </div>
        )}

        <div className="space-y-6">
          
          {/* 1. PASSKEYS MANAGEMENT */}
          <Card className="p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-[var(--color-border-default)] pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Fingerprint className="w-4 h-4 text-[#2F8FFF]" />
                  <h2 className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wide font-mono">
                    Enrolled Passkeys
                  </h2>
                </div>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  Fast, phishing-resistant authentication backed by your device biometrics.
                </p>
              </div>
              <Button
                type="button"
                onClick={handleAddPasskey}
                variant="secondary"
                size="sm"
                className="font-mono text-xs"
                disabled={isAddingPasskey}
              >
                <Plus className="w-3.5 h-3.5 mr-1" />
                <span>{isAddingPasskey ? 'Adding…' : 'Add Passkey'}</span>
              </Button>
            </div>

            <div className="space-y-3">
              {passkeys.map((pk) => (
                <div
                  key={pk.id}
                  className="p-4 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-lg flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Laptop className="w-4 h-4 text-[var(--color-text-secondary)]" />
                      <span className="text-xs font-semibold text-[var(--color-text-primary)]">
                        {pk.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--color-text-tertiary)] font-mono">
                      Added: {pk.created} &bull; Last used: {pk.lastUsed}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemovePasskey(pk.id)}
                    aria-label="Remove passkey"
                    className="p-1.5 text-[var(--color-text-tertiary)] hover:text-[#F87171] transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </Card>

          {/* 2. PASSWORD & FALLBACK */}
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-[var(--color-border-default)] pb-4">
              <Lock className="w-4 h-4 text-[var(--color-text-secondary)]" />
              <h2 className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wide font-mono">
                Password &amp; Fallback
              </h2>
            </div>
            <div className="flex items-center justify-between p-3 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-lg">
              <div className="space-y-0.5">
                <span className="text-xs font-semibold text-[var(--color-text-primary)]">
                  Account Password
                </span>
                <p className="text-[11px] text-[var(--color-text-tertiary)]">
                  Used as fallback when passkey devices are unavailable.
                </p>
              </div>
              <Button href={ROUTES.APP_SECURITY_SETUP} variant="secondary" size="sm" className="text-xs font-mono">
                Update Password
              </Button>
            </div>
          </Card>

          {/* 3. ACTIVE SESSIONS */}
          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--color-border-default)] pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[var(--color-text-secondary)]" />
                  <h2 className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wide font-mono">
                    Active Sessions &amp; Devices
                  </h2>
                </div>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  Devices currently signed in to your CareerOS account.
                </p>
              </div>
              <Button
                type="button"
                onClick={handleRevokeOtherSessions}
                variant="destructive"
                size="sm"
                className="font-mono text-xs"
              >
                Log out other devices
              </Button>
            </div>

            <div className="space-y-3">
              {sessions.map((sess) => (
                <div
                  key={sess.id}
                  className="p-4 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-lg flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-[var(--color-text-primary)]">
                        {sess.browser}
                      </span>
                      {sess.isCurrent && (
                        <Badge variant="success" size="sm">Current device</Badge>
                      )}
                    </div>
                    <p className="text-[11px] text-[var(--color-text-tertiary)] font-mono">
                      {sess.location} &bull; {sess.lastActive}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* 4. SECURITY AUDIT ACTIVITY */}
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-[var(--color-border-default)] pb-4">
              <Clock className="w-4 h-4 text-[var(--color-text-secondary)]" />
              <h2 className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wide font-mono">
                Recent Security Activity
              </h2>
            </div>
            <div className="space-y-2 text-xs font-mono text-[var(--color-text-secondary)]">
              <div className="flex items-center justify-between py-2 border-b border-[var(--color-border-subtle)]">
                <span>Passkey authenticated</span>
                <span className="text-[var(--color-text-tertiary)]">Today, 11:28 AM</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[var(--color-border-subtle)]">
                <span>Email OTP verified</span>
                <span className="text-[var(--color-text-tertiary)]">Today, 11:26 AM</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>CareerOS account created</span>
                <span className="text-[var(--color-text-tertiary)]">Today, 11:26 AM</span>
              </div>
            </div>
          </Card>

        </div>

      </div>
    </div>
  );
}
