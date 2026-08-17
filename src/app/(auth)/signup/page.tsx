"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertTriangle, ShieldAlert, Clock, ShieldCheck } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { evaluateAgeBracket, AgeCalculationResult } from "@/lib/auth/age-gating";
import { DIRECT_ACCOUNT_MIN_AGE } from "@/lib/config/age-policy";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [guardianEmail, setGuardianEmail] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "pending_guardian" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const ageEvaluation: AgeCalculationResult | null = dateOfBirth ? evaluateAgeBracket(dateOfBirth) : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms || !ageEvaluation) return;

    if (ageEvaluation.isHardBlocked) {
      return;
    }

    if (ageEvaluation.requiresGuardianConsent && !guardianEmail) {
      setErrorMessage("Parent or guardian email is required for users ages 13–15.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      if (SUPABASE_URL && SUPABASE_ANON_KEY) {
        const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

        if (ageEvaluation.requiresGuardianConsent) {
          // 13–15 accounts land in PENDING_GUARDIAN_CONSENT state
          const { error } = await supabase.from("profiles").insert({
            email,
            date_of_birth: dateOfBirth,
            age_bracket: "MINOR_13_17",
            guardian_email: guardianEmail,
            status: "PENDING_GUARDIAN_CONSENT",
            consent_state: "PENDING",
          });
          if (error && error.code !== "23505") throw error;
        } else {
          // 16+ direct account (including 16–17 minor direct and 18+ adult)
          const { error } = await supabase.from("profiles").insert({
            email,
            date_of_birth: dateOfBirth,
            age_bracket: ageEvaluation.ageBracket,
            status: "ACTIVE",
            consent_state: "NOT_REQUIRED",
          });
          if (error && error.code !== "23505") throw error;
        }
      }

      if (ageEvaluation.requiresGuardianConsent) {
        setStatus("pending_guardian");
      } else {
        setStatus("success");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or contact support.");
    }
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
            Free for individuals. Persistent, private career operating system.
          </p>
        </div>

        {/* SCREEN 1: UNDER-13 HARD BLOCK */}
        {ageEvaluation?.isHardBlocked ? (
          <div className="text-center space-y-4 py-4 border border-[var(--color-danger)]/20 bg-[var(--color-danger-light)]/30 rounded-lg p-5">
            <ShieldAlert className="w-10 h-10 text-[var(--color-danger)] mx-auto" />
            <div className="space-y-1">
              <h2 className="text-sm font-bold text-[var(--color-text-primary)]">
                Under-13 Direct Registration Restricted
              </h2>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Career OS does not provide open consumer registration for children under 13 under COPPA guidelines. Access is limited to <strong>verified school arrangements</strong>.
              </p>
            </div>
            <div className="text-[11px] text-[var(--color-text-tertiary)] bg-[var(--color-surface-base)] p-3 rounded border border-[var(--color-border-default)] text-left space-y-1">
              <p className="font-semibold text-[var(--color-text-primary)]">School Enrollment Required:</p>
              <p>Please contact your school administrator or teacher to request an institutional Career OS account invitation.</p>
            </div>
            <Link
              href={ROUTES.FOR_HIGH_SCHOOLS}
              className="inline-block text-xs font-semibold text-[var(--color-brand-600)] hover:underline pt-1"
            >
              Learn about Career OS for Schools &rarr;
            </Link>
          </div>
        ) : status === "pending_guardian" ? (
          /* SCREEN 2: 13-15 PENDING GUARDIAN CONSENT STATE */
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
              Guardian contact recorded: <strong>{guardianEmail}</strong>.
            </p>
          </div>
        ) : status === "success" ? (
          /* SCREEN 3: SUCCESS SCREEN */
          <div className="text-center space-y-3 py-4">
            <CheckCircle2 className="w-12 h-12 text-[var(--color-success)] mx-auto" />
            <p className="text-sm font-semibold text-[var(--color-text-primary)]">
              Account registered!
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">
              We&apos;ve reserved your spot for <strong>{email}</strong>. Welcome to Career OS.
            </p>
          </div>
        ) : (
          /* SCREEN 4: SIGNUP FORM */
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

            {/* REAL DOB AGE GATE */}
            <div className="space-y-1">
              <label htmlFor="signup-dob" className="text-xs font-semibold text-[var(--color-text-primary)]">
                Date of Birth
              </label>
              <input
                id="signup-dob"
                type="date"
                required
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)] transition-shadow"
              />
              {ageEvaluation && (
                <div className="text-[11px] text-[var(--color-text-tertiary)] pt-1 space-y-1">
                  <p>Age: {ageEvaluation.age} &bull; Policy State: <span className="font-mono text-[var(--color-text-primary)]">{ageEvaluation.agePolicyState}</span></p>
                  {ageEvaluation.isMinor && ageEvaluation.hasDirectAccountEligibility && (
                    <div className="p-2 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded text-[10px] text-[var(--color-text-secondary)] flex items-start gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-success)] shrink-0 mt-0.5" />
                      <span>Direct account eligible ({DIRECT_ACCOUNT_MIN_AGE}+ policy). Minor safeguarding controls active (profile default-private, restricted employer contact).</span>
                    </div>
                  )}
                </div>
              )}
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

            <div className="flex items-start gap-3 pt-1">
              <input
                id="terms-checkbox"
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-[var(--color-border-strong)] text-[var(--color-brand-600)] focus:ring-[var(--color-focus)]"
                required
              />
              <label htmlFor="terms-checkbox" className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                I agree to the Career OS{" "}
                <Link href={ROUTES.LEGAL_TERMS} className="text-[var(--color-brand-600)] hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href={ROUTES.LEGAL_PRIVACY} className="text-[var(--color-brand-600)] hover:underline">
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            {status === "error" && (
              <p className="text-xs text-[var(--color-danger)]">{errorMessage}</p>
            )}

            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full"
              disabled={status === "loading" || !agreedToTerms || !dateOfBirth || ageEvaluation?.isHardBlocked}
            >
              {status === "loading"
                ? "Processing registration…"
                : ageEvaluation?.requiresGuardianConsent
                ? "Submit for Guardian Verification"
                : "Create Free Account"}
            </Button>
          </form>
        )}

        {status !== "success" && status !== "pending_guardian" && (
          <div className="text-center text-xs text-[var(--color-text-tertiary)]">
            Already have an account?{" "}
            <Link href={ROUTES.LOGIN} className="text-[var(--color-brand-600)] font-semibold hover:underline">
              Log in
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
