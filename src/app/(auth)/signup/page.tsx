"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertTriangle, ShieldAlert, Clock } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { evaluateAgeBracket, AgeCalculationResult } from "@/lib/auth/age-gating";

// TODO(legal): The minimum-age gate here has been upgraded to a real Date-of-Birth
// calculation branching flow (Phase 0). Before CareerOS accepts signups from users
// under 18 in the United States, outside counsel MUST answer the Section 5.2 questions
// in LEGAL_HANDOFF_MEMORANDUM_MINORS_CONSENT.md regarding:
//   1. COPPA Third-Party Disclosure determination for Opportunity Agent employer introductions.
//   2. Texas SCOPE Act (HB 18) and California CCPA minor opt-in consent verification strength requirements.
//   3. California AADC age-estimation compliance obligations for self-reported DOB.
//   4. FERPA "School Official" Model DPA terms across CA, TX, NY, FL, and IL.
//   5. AI Mentor Chat log inspection rights for school-linked accounts under FERPA.
// This is a PRE-LAUNCH BLOCKER for Phase 1 live minor account activation.

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
      setErrorMessage("Parent or guardian email is required for users ages 13–17.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      if (SUPABASE_URL && SUPABASE_ANON_KEY) {
        const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

        if (ageEvaluation.ageBracket === "MINOR_13_17") {
          // Phase 0: 13–17 accounts land in PENDING_GUARDIAN_CONSENT state
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
          // 18+ adult account
          const { error } = await supabase.from("waitlist").insert({
            email,
            date_of_birth: dateOfBirth,
            age_bracket: "ADULT_18_PLUS",
            status: "ACTIVE",
            consent_state: "NOT_REQUIRED",
          });
          if (error && error.code !== "23505") throw error;
        }
      }

      if (ageEvaluation.ageBracket === "MINOR_13_17") {
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
            Free for individuals. Persistent, sovereign career operating system.
          </p>
        </div>

        {/* SCREEN 1: UNDER-13 HARD BLOCK */}
        {ageEvaluation?.isHardBlocked ? (
          <div className="text-center space-y-4 py-4 border border-[var(--color-danger)]/20 bg-[var(--color-danger-light)]/30 rounded-lg p-5">
            <ShieldAlert className="w-10 h-10 text-[var(--color-danger)] mx-auto" />
            <div className="space-y-1">
              <h2 className="text-sm font-bold text-[var(--color-text-primary)]">
                Under-13 Signups Restricted
              </h2>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Career OS requires a <strong>school or district-issued account</strong> for students under 13 under federal COPPA guidelines.
              </p>
            </div>
            <div className="text-[11px] text-[var(--color-text-tertiary)] bg-[var(--color-surface-base)] p-3 rounded border border-[var(--color-border-default)] text-left space-y-1">
              <p className="font-semibold text-[var(--color-text-primary)]">What to do next:</p>
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
          /* SCREEN 2: 13-17 PENDING GUARDIAN CONSENT STATE */
          <div className="text-center space-y-4 py-4">
            <Clock className="w-12 h-12 text-[var(--color-brand-600)] mx-auto animate-pulse" />
            <div className="space-y-1">
              <h2 className="text-base font-bold text-[var(--color-text-primary)]">
                Guardian Approval Pending
              </h2>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Your account for <strong>{email}</strong> has been created in <strong>Pending Mode</strong>.
              </p>
            </div>

            <div className="p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-lg text-left text-xs space-y-2">
              <div className="flex items-center gap-1.5 font-semibold text-[var(--color-text-primary)]">
                <AlertTriangle className="w-4 h-4 text-[var(--color-gold-base)]" />
                <span>Restricted Feature Access</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[11px] text-[var(--color-text-tertiary)]">
                <li>Opportunity Agent employer matching is disabled</li>
                <li>Public Passport sharing is disabled</li>
                <li>Account will purge if unverified within 30 days</li>
              </ul>
            </div>

            <p className="text-xs text-[var(--color-text-tertiary)]">
              Guardian contact recorded: <strong>{guardianEmail}</strong>.<br />
              (Phase 1 verification dispatch will occur upon legal sign-off).
            </p>
          </div>
        ) : status === "success" ? (
          /* SCREEN 3: ADULT SUCCESS SCREEN */
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
          /* SCREEN 4: SIGNUP FORM WITH REAL DOB AGE-GATE */
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
                <p className="text-[11px] text-[var(--color-text-tertiary)] pt-0.5">
                  Age: {ageEvaluation.age} &bull; Classification: {ageEvaluation.ageBracket}
                </p>
              )}
            </div>

            {/* GUARDIAN EMAIL FIELD FOR 13-17 MINORS */}
            {ageEvaluation?.requiresGuardianConsent && (
              <div className="space-y-1 p-3 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-lg">
                <label htmlFor="signup-guardian-email" className="text-xs font-semibold text-[var(--color-text-primary)] flex items-center gap-1">
                  <span>Parent / Guardian Email</span>
                  <span className="text-[10px] text-[var(--color-brand-600)] uppercase font-bold">(Required for Ages 13–17)</span>
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
                  Account activates upon guardian verification per minor privacy guidelines.
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
