'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { DateOfBirthInput } from '@/components/ui/DateOfBirthInput';
import { ShieldAlert, Clock, AlertTriangle, ArrowLeft, MailCheck } from 'lucide-react';
import { evaluateAgeBracket, validateAndFormatDOB } from '@/lib/auth/age-gating';

const RESEND_COOLDOWN_SECONDS = 60;

export default function SignupPage() {
  const router = useRouter();

  // Screen 1 State: Account Details
  const [email, setEmail] = useState('');
  const [displayDob, setDisplayDob] = useState('');
  const [canonicalDob, setCanonicalDob] = useState('');
  const [isDobValid, setIsDobValid] = useState(false);
  const [guardianEmail, setGuardianEmail] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Screen 2 State: 6-Digit OTP Verification
  const [otpCode, setOtpCode] = useState('');
  const [step, setStep] = useState<'details' | 'otp_verify' | 'pending_guardian'>('details');

  // Async States & Error Handling
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [cooldown, setCooldown] = useState(0);

  // Derive age evaluation safely on valid DOB without exposing internal enum debug UI
  const ageEvaluation = isDobValid && canonicalDob ? evaluateAgeBracket(canonicalDob) : null;

  // Resend cooldown timer countdown
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleDobChange = (isoDate: string, formattedDisplay: string, isValid: boolean) => {
    setDisplayDob(formattedDisplay);
    setCanonicalDob(isoDate);
    setIsDobValid(isValid);
    setErrorMessage('');
  };

  // Step 1 Submission: Request 6-digit OTP
  const handleSendOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    setErrorMessage('');

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage('Enter a valid email address.');
      return;
    }

    if (!isDobValid || !canonicalDob) {
      setErrorMessage('Enter your date of birth in MM/DD/YYYY format.');
      return;
    }

    if (!agreedToTerms) {
      setErrorMessage('Please agree to the Terms of Service and Privacy Policy to continue.');
      return;
    }

    if (ageEvaluation?.isHardBlocked) {
      return;
    }

    if (ageEvaluation?.requiresGuardianConsent && !guardianEmail) {
      setErrorMessage('Parent or guardian email is required for users ages 13–15.');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/auth/otp/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          dateOfBirth: canonicalDob,
          guardianEmail: guardianEmail ? guardianEmail.trim().toLowerCase() : undefined,
          agreedToTerms,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'We couldn’t create your account right now. Please try again.');
      }

      setCooldown(RESEND_COOLDOWN_SECONDS);

      if (data.requiresGuardianConsent) {
        setStep('pending_guardian');
      } else {
        setStep('otp_verify');
      }
    } catch (err: unknown) {
      setErrorMessage((err as Error).message || 'We couldn’t create your account right now. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Step 2 Submission: Verify 6-digit OTP
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otpCode.length < 6) return;

    setIsLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/auth/otp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          token: otpCode.trim(),
          dateOfBirth: canonicalDob,
          guardianEmail: guardianEmail ? guardianEmail.trim().toLowerCase() : undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'That code isn’t correct. Try again.');
      }

      // Success -> Redirect to onboarding
      router.push(data.redirectTo || ROUTES.APP_ONBOARDING);
    } catch (err: unknown) {
      setErrorMessage((err as Error).message || 'Verification failed. Please check your code and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm">
      <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-xl p-8 shadow-sm space-y-6">
        
        {/* Heading */}
        <div className="space-y-1 text-center">
          <h1 className="text-xl font-bold text-[var(--color-text-primary)] tracking-tight">
            {step === 'otp_verify'
              ? 'Check your email'
              : step === 'pending_guardian'
              ? 'Guardian Consent Required'
              : 'Start your Career OS'}
          </h1>
          <p className="text-xs text-[var(--color-text-tertiary)]">
            {step === 'otp_verify'
              ? `We've sent a 6-digit verification code to ${email}`
              : 'Free for individuals. Persistent, private career operating system.'}
          </p>
        </div>

        {/* SCREEN: UNDER-13 HARD BLOCK */}
        {ageEvaluation?.isHardBlocked ? (
          <div className="text-center space-y-4 py-4 border border-[var(--color-danger)]/20 bg-[var(--color-danger-light)]/30 rounded-lg p-5">
            <ShieldAlert className="w-10 h-10 text-[var(--color-danger)] mx-auto" />
            <div className="space-y-1">
              <h2 className="text-sm font-bold text-[var(--color-text-primary)]">
                School Enrollment Required
              </h2>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Career OS does not offer direct consumer registration for users under 13 under COPPA guidelines. Access is provided exclusively through verified school arrangements.
              </p>
            </div>
            <div className="text-[11px] text-[var(--color-text-tertiary)] bg-[var(--color-surface-base)] p-3 rounded border border-[var(--color-border-default)] text-left space-y-1">
              <p className="font-semibold text-[var(--color-text-primary)]">School Arrangement:</p>
              <p>Please ask your school teacher or administrator to invite you through the Career OS for Schools programme.</p>
            </div>
            <Link
              href={ROUTES.FOR_HIGH_SCHOOLS}
              className="inline-block text-xs font-semibold text-[var(--color-brand-600)] hover:underline pt-1"
            >
              Learn about Career OS for Schools &rarr;
            </Link>
          </div>
        ) : step === 'pending_guardian' ? (
          /* SCREEN: 13-15 PENDING GUARDIAN CONSENT STATE */
          <div className="text-center space-y-4 py-4">
            <Clock className="w-12 h-12 text-[var(--color-brand-600)] mx-auto animate-pulse" />
            <div className="space-y-1">
              <h2 className="text-base font-bold text-[var(--color-text-primary)]">
                Parent / Guardian Consent Required
              </h2>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Users ages 13–15 require a verified parent/guardian consent arrangement or school account.
              </p>
            </div>

            <div className="p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-lg text-left text-xs space-y-2">
              <div className="flex items-center gap-1.5 font-semibold text-[var(--color-text-primary)]">
                <AlertTriangle className="w-4 h-4 text-[var(--color-gold-base)]" />
                <span>Restricted Feature Access</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[11px] text-[var(--color-text-tertiary)]">
                <li>Employer matching disabled until consent verified</li>
                <li>Public Passport sharing disabled</li>
                <li>Account purges if unverified within 30 days</li>
              </ul>
            </div>

            <p className="text-xs text-[var(--color-text-tertiary)]">
              Verification link dispatched to guardian: <strong>{guardianEmail}</strong>.
            </p>

            <button
              type="button"
              onClick={() => setStep('details')}
              className="text-xs text-[var(--color-brand-600)] hover:underline block mx-auto pt-2"
            >
              &larr; Return to registration details
            </button>
          </div>
        ) : step === 'otp_verify' ? (
          /* SCREEN 2: 6-DIGIT EMAIL OTP VERIFICATION */
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="otp-input" className="text-xs font-semibold text-[var(--color-text-primary)] block">
                6-digit verification code
              </label>
              <input
                id="otp-input"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={6}
                autoComplete="one-time-code"
                autoFocus
                required
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                placeholder="123456"
                aria-label="6-digit verification code"
                className="w-full px-3 py-3 text-center text-xl tracking-[0.4em] font-mono rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)]"
              />
              <p className="text-[11px] text-[var(--color-text-tertiary)] text-center">
                Code expires in 10 minutes.
              </p>
            </div>

            {errorMessage && (
              <p className="text-xs text-[var(--color-danger)] text-center" role="alert">
                {errorMessage}
              </p>
            )}

            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full font-semibold"
              disabled={isLoading || otpCode.length < 6}
            >
              {isLoading ? 'Verifying…' : 'Verify Email'}
            </Button>

            <div className="flex items-center justify-between text-xs pt-2">
              <button
                type="button"
                onClick={() => { setStep('details'); setErrorMessage(''); }}
                className="text-[var(--color-text-tertiary)] hover:underline flex items-center gap-1"
              >
                <ArrowLeft className="w-3 h-3" /> Back
              </button>
              <button
                type="button"
                onClick={() => handleSendOtp()}
                disabled={isLoading || cooldown > 0}
                className="text-[var(--color-brand-600)] font-medium hover:underline disabled:text-[var(--color-text-disabled)] disabled:no-underline"
              >
                {cooldown > 0 ? `Resend code (${cooldown}s)` : 'Resend code'}
              </button>
            </div>
          </form>
        ) : (
          /* SCREEN 1: FRICTIONLESS SIGNUP (Email + DOB + Terms) */
          <form onSubmit={handleSendOtp} className="space-y-4">
            {/* EMAIL */}
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
                onChange={(e) => { setEmail(e.target.value); setErrorMessage(''); }}
                placeholder="you@example.com"
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)] transition-shadow"
              />
            </div>

            {/* DATE OF BIRTH (CONTROLLED US MM/DD/YYYY) */}
            <div className="space-y-1">
              <label htmlFor="signup-dob" className="text-xs font-semibold text-[var(--color-text-primary)]">
                Date of Birth
              </label>
              <DateOfBirthInput
                id="signup-dob"
                value={displayDob}
                onChange={handleDobChange}
                required
              />
            </div>

            {/* GUARDIAN EMAIL FIELD FOR AGES 13-15 */}
            {ageEvaluation?.requiresGuardianConsent && (
              <div className="space-y-1 p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-lg">
                <label htmlFor="signup-guardian-email" className="text-xs font-semibold text-[var(--color-text-primary)] flex items-center gap-1">
                  <span>Parent / Guardian Email</span>
                  <span className="text-[10px] text-[var(--color-brand-600)] uppercase font-bold">(Required for Ages 13–15)</span>
                </label>
                <input
                  id="signup-guardian-email"
                  type="email"
                  required
                  value={guardianEmail}
                  onChange={(e) => setGuardianEmail(e.target.value)}
                  placeholder="parent@example.com"
                  className="w-full px-3 py-2 text-sm rounded border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)]"
                />
                <p className="text-[10px] text-[var(--color-text-tertiary)]">
                  Users ages 13–15 require a verified parent/guardian consent arrangement or school account.
                </p>
              </div>
            )}

            {/* TERMS & PRIVACY CHECKBOX WITH NON-DESTRUCTIVE TARGET=_BLANK LINKS */}
            <div className="flex items-start gap-3 pt-1">
              <input
                id="terms-checkbox"
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => { setAgreedToTerms(e.target.checked); setErrorMessage(''); }}
                className="mt-0.5 h-4 w-4 rounded border-[var(--color-border-strong)] text-[var(--color-brand-600)] focus:ring-[var(--color-focus)]"
                required
              />
              <label htmlFor="terms-checkbox" className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                I agree to the Career OS{' '}
                <a
                  href={ROUTES.LEGAL_TERMS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-brand-600)] hover:underline font-medium"
                >
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  href={ROUTES.LEGAL_PRIVACY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-brand-600)] hover:underline font-medium"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            {errorMessage && (
              <p className="text-xs text-[var(--color-danger)]" role="alert">
                {errorMessage}
              </p>
            )}

            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full font-semibold"
              disabled={isLoading || !agreedToTerms || !isDobValid || !email || ageEvaluation?.isHardBlocked}
            >
              {isLoading
                ? 'Creating account…'
                : ageEvaluation?.requiresGuardianConsent
                ? 'Submit for Guardian Verification'
                : 'Create Free Account'}
            </Button>
          </form>
        )}

        {step === 'details' && (
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
