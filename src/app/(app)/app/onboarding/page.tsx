"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CareerGradientText } from "@/components/brand/CareerGradientText";
import { TechnicalBadge } from "@/components/brand/TechnicalBadge";
import {
  CareerStage,
  OnboardingChapter,
  ExtractedResumeData,
  CareerSkill,
} from "@/types/platform/onboarding";
import { CareerTwin, CareerPassport, CareerGraphSeed } from "@/types/platform/intelligence";
import { MentorAssignment, CareerObjective } from "@/types/platform/mentors";
import {
  ShieldCheck,
  Fingerprint,
  Lock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  FileText,
  Upload,
  Sparkles,
  Bot,
  Compass,
  Award,
  Users,
  Briefcase,
  GraduationCap,
  Wrench,
  TrendingUp,
  RefreshCw,
  Eye,
  EyeOff,
  Shield,
  ToggleLeft,
  ToggleRight,
  Zap,
  Target,
} from "lucide-react";
import { startRegistration } from "@simplewebauthn/browser";

export default function ComprehensiveOnboardingEngine() {
  const router = useRouter();

  // Navigation & Chapter State
  const [currentChapter, setCurrentChapter] = useState<OnboardingChapter>("01_PROTECT");
  const [stepIndex, setStepIndex] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [saveIndicator, setSaveIndicator] = useState<string | null>(null);

  // Chapter 01: Protect State
  const [displayName, setDisplayName] = useState("");
  const [city, setCity] = useState("");
  const [stateCode, setStateCode] = useState("CA");
  const [zipCode, setZipCode] = useState("");
  const [securitySecured, setSecuritySecured] = useState(false);
  const [securityMethod, setSecurityMethod] = useState<"passkey" | "password">("passkey");
  const [password, setPassword] = useState("");
  const [isSecuring, setIsSecuring] = useState(false);
  const [securityError, setSecurityError] = useState("");

  // Chapter 02: Understand (Adaptive Intake) State
  const [careerStage, setCareerStage] = useState<CareerStage>("EARLY_CAREER");
  const [primaryGoal, setPrimaryGoal] = useState("Find a better job");
  const [secondaryGoals, setSecondaryGoals] = useState<string[]>([]);
  const [branchAnswers, setBranchAnswers] = useState<Record<string, any>>({});
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkillInput, setNewSkillInput] = useState("");
  const [extractedResume, setExtractedResume] = useState<any | null>(null);
  const [isUploadingResume, setIsUploadingResume] = useState(false);

  // Chapter 03: Activate (Intelligence & Mentorship) State
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [careerTwin, setCareerTwin] = useState<CareerTwin | null>(null);
  const [passport, setPassport] = useState<CareerPassport | null>(null);
  const [graphSeed, setGraphSeed] = useState<CareerGraphSeed | null>(null);
  const [mentorAssignment, setMentorAssignment] = useState<MentorAssignment | null>(null);
  const [mentorQuestion, setMentorQuestion] = useState("");
  const [mentorAnswer, setMentorAnswer] = useState("");
  const [careerObjective, setCareerObjective] = useState<CareerObjective | null>(null);
  const [isActivating, setIsActivating] = useState(false);
  const [synthesisError, setSynthesisError] = useState<string | null>(null);
  const [mentorError, setMentorError] = useState<string | null>(null);
  const [objectiveError, setObjectiveError] = useState<string | null>(null);
  const [activationError, setActivationError] = useState<string | null>(null);

  // Pass 06 — Privacy & Activation
  const [activationPhase, setActivationPhase] = useState<"INTELLIGENCE" | "PRIVACY" | "ACTIVATION">("INTELLIGENCE");
  const [privacyConfirmed, setPrivacyConfirmed] = useState(false);
  const [isSavingPrivacy, setIsSavingPrivacy] = useState(false);
  const [privacySaveError, setPrivacySaveError] = useState<string | null>(null);

  // Privacy toggles (privacy-first defaults)
  const [careerTwinVisibility, setCareerTwinVisibility] = useState<"PRIVATE" | "INSTITUTION_ONLY" | "NETWORK_ONLY">("PRIVATE");
  const [passportVisibility, setPassportVisibility] = useState<"PRIVATE" | "INSTITUTION_ONLY" | "NETWORK_ONLY">("PRIVATE");
  const [employerDiscovery, setEmployerDiscovery] = useState<"OFF" | "ANONYMOUS">("OFF");
  const [opportunityRecs, setOpportunityRecs] = useState(true);
  const [marketingUpdates, setMarketingUpdates] = useState(false);

  // Initial actions derived from twin (generated at activation, not hardcoded)
  const [initialActions, setInitialActions] = useState<Array<{ title: string; description: string; type: string }>>([]);


  // Auto-save feedback helper
  const triggerSaveNotification = (msg: string = "Progress saved") => {
    setSaveIndicator(msg);
    setTimeout(() => setSaveIndicator(null), 2000);
  };

  // 1. Passkey Registration using @simplewebauthn/browser
  const handleRegisterPasskey = async () => {
    setIsSecuring(true);
    setSecurityError("");

    try {
      const challengeRes = await fetch("/api/auth/passkey/register/challenge", { method: "POST" });
      const challengeData = await challengeRes.json();

      if (!challengeRes.ok) {
        throw new Error(challengeData.error || "Failed to initialize passkey.");
      }

      const attResp = await startRegistration({ optionsJSON: challengeData.options });

      const verifyRes = await fetch("/api/auth/passkey/register/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(attResp),
      });

      const verifyData = await verifyRes.json();
      if (!verifyRes.ok) {
        throw new Error(verifyData.error || "Passkey verification failed cryptographically.");
      }

      setSecuritySecured(true);
      triggerSaveNotification("Passkey registered");
    } catch (err: unknown) {
      setSecurityError((err as Error).message || "Passkey registration was cancelled or not supported.");
    } finally {
      setIsSecuring(false);
    }
  };

  // 2. Password Registration
  const handleRegisterPassword = async () => {
    if (password.length < 8) {
      setSecurityError("Password must be at least 8 characters long.");
      return;
    }
    setIsSecuring(true);
    setSecurityError("");

    try {
      const res = await fetch("/api/auth/password/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to configure password.");
      }
      setSecuritySecured(true);
      triggerSaveNotification("Password secured");
    } catch (err: unknown) {
      setSecurityError((err as Error).message || "Password setup failed.");
    } finally {
      setIsSecuring(false);
    }
  };

  // 3. Resume Ingestion
  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingResume(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/app/onboarding/resume", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.extracted) {
        setExtractedResume(data.extracted);
        if (data.extracted.extractedSkills?.length > 0) {
          setSkills((prev) => Array.from(new Set([...prev, ...data.extracted.extractedSkills])));
        }
        triggerSaveNotification("Resume extracted (RESUME_EXTRACTED)");
      }
    } catch (err) {
      console.error("Resume extraction failed:", err);
    } finally {
      setIsUploadingResume(false);
    }
  };

  // 4. Synthesize Career Twin & Intelligence
  const synthesizeIntelligence = async () => {
    setIsSynthesizing(true);
    setSynthesisError(null);
    setMentorError(null);
    try {
      const res = await fetch("/api/app/intelligence/twin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          context: {
            displayName: displayName || "Professional",
            city: city || "San Francisco",
            state: stateCode || "CA",
            zipCode,
            careerStage,
            primaryGoal,
            secondaryGoals,
            branchData: branchAnswers,
          },
          skills: skills.map((s) => ({
            skillName: s,
            category: "TECHNICAL",
            provenance: {
              provenance: extractedResume?.extractedSkills?.includes(s) ? "RESUME_EXTRACTED" : "USER_DECLARED",
              confidence: 1.0,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
          })),
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setSynthesisError(data.error || "Career Twin generation failed. Please try again.");
        return;
      }

      if (data.careerTwin) {
        setCareerTwin(data.careerTwin);
        setPassport(data.passport);
        setGraphSeed(data.graphSeed);

        // Generate personalised initial actions from the twin
        const twin = data.careerTwin;
        const generatedActions: Array<{ title: string; description: string; type: string }> = [];
        if (twin.capabilities?.length > 0) {
          generatedActions.push({
            title: `Review your ${twin.capabilities[0]?.name || "key"} capabilities`,
            description: "Confirm and expand on the capabilities identified from your career context.",
            type: "REVIEW",
          });
        }
        if (twin.experienceThemes?.length > 0) {
          generatedActions.push({
            title: `Add evidence for: ${twin.experienceThemes[0]}`,
            description: "Strengthen your Career Passport by adding concrete examples and outcomes.",
            type: "EVIDENCE",
          });
        }
        if (data.graphSeed?.nodes?.length > 0) {
          generatedActions.push({
            title: `Explore: ${data.graphSeed.nodes[0]?.roleTitle || "adjacent pathway"}`,
            description: data.graphSeed.nodes[0]?.evidenceBasis || "Review your adjacent career possibilities.",
            type: "EXPLORE",
          });
        }
        if (generatedActions.length < 2) {
          generatedActions.push({
            title: "Set your first Career Objective milestone",
            description: "Break your primary goal into an achievable 90-day horizon with your mentor.",
            type: "OBJECTIVE",
          });
        }
        setInitialActions(generatedActions);

        // Assign Mentor
        const mentorRes = await fetch("/api/app/mentors/assign", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            careerTwin: data.careerTwin,
            careerGraph: data.graphSeed,
            primaryGoal,
          }),
        });
        const mentorData = await mentorRes.json();
        if (!mentorRes.ok) {
          setMentorError(mentorData.error || "Mentor assignment unavailable. You can retry.");
        } else if (mentorData.assignment) {
          setMentorAssignment(mentorData.assignment);
          setMentorQuestion(mentorData.contextualQuestion);
        }
      } else {
        setSynthesisError("We received your information but couldn't complete Career Twin analysis yet. Please try again.");
      }
    } catch (err) {
      console.error("Failed to synthesize intelligence:", err);
      setSynthesisError("Network issue during Career Twin synthesis. Please check your connection and retry.");
    } finally {
      setIsSynthesizing(false);
    }
  };

  // 5. Submit Reflection & Formulate Objective
  const handleFormulateObjective = async () => {
    if (!careerTwin) return;
    setObjectiveError(null);
    try {
      const res = await fetch("/api/app/mentors/objective", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          careerTwin,
          primaryGoal,
          mentorResponse: mentorAnswer,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setObjectiveError(data.error || "Objective generation failed. Please try again.");
      } else if (data.objective) {
        setCareerObjective(data.objective);
        triggerSaveNotification("Objective created");
      }
    } catch (err) {
      console.error("Error creating objective:", err);
      setObjectiveError("Network issue creating objective. Please retry.");
    }
  };

  // 6. Save Privacy Preferences
  const handleSavePrivacy = async () => {
    setIsSavingPrivacy(true);
    setPrivacySaveError(null);
    try {
      const res = await fetch("/api/app/privacy/preferences", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          careerTwinVisibility,
          passportVisibility,
          employerDiscovery,
          opportunityRecommendationsEnabled: opportunityRecs,
          institutionalSharingState: "OFF",
          mentorAnalyticsSharing: false,
          marketing: {
            productUpdates: marketingUpdates,
            careerInsightsDigest: false,
            eventNotifications: false,
            partnerOffers: false,
          },
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setPrivacySaveError(data.error || "Failed to save privacy preferences. Please try again.");
        return;
      }
      setPrivacyConfirmed(true);
      setActivationPhase("ACTIVATION");
      triggerSaveNotification("Privacy confirmed");
    } catch (err) {
      console.error("Privacy save error:", err);
      setPrivacySaveError("Network issue. Please try again.");
    } finally {
      setIsSavingPrivacy(false);
    }
  };

  // 7. Final Activation — validate all requirements & grant dashboard access
  const handleFinalActivation = async () => {
    setIsActivating(true);
    setActivationError(null);
    try {
      const res = await fetch("/api/app/onboarding/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ initialActions }),
      });
      const data = await res.json();
      if (res.ok) {
        router.push(ROUTES.APP_DASHBOARD);
      } else {
        setActivationError(
          data.missing?.length
            ? `Cannot activate — incomplete: ${data.missing.join(", ")}. Please complete each stage.`
            : data.error || "Activation failed. Please try again."
        );
      }
    } catch (err) {
      console.error("Activation failed:", err);
      setActivationError("Network issue during activation. Please check your connection and retry.");
    } finally {
      setIsActivating(false);
    }
  };


  const careerStageOptions = [
    { id: "SCHOOL_STUDENT", label: "Still in school", desc: "High school / secondary education" },
    { id: "COLLEGE_UNIVERSITY", label: "College or university", desc: "Undergraduate / Postgraduate degrees" },
    { id: "APPRENTICE_TRADE", label: "Apprentice or skilled trade", desc: "Electrical, HVAC, mechanical craft" },
    { id: "EARLY_CAREER", label: "Starting my career", desc: "First 1–3 years in workforce" },
    { id: "EXPERIENCED_PROFESSIONAL", label: "Building my career", desc: "Established domain experience" },
    { id: "LEADER_EXECUTIVE", label: "Leading people / orgs", desc: "Director, VP, Executive management" },
    { id: "CAREER_CHANGER", label: "Changing careers", desc: "Transitioning to a new discipline" },
    { id: "RETURNER", label: "Returning after time away", desc: "Re-entering after a career break" },
    { id: "ENTREPRENEUR", label: "Building a business", desc: "Founder, operator, consultancy" },
    { id: "EXPLORING", label: "Not sure yet", desc: "Exploring options openly" },
  ];

  const primaryGoalOptions = [
    "Find a better job",
    "Figure out what career suits me",
    "Decide what to study",
    "Find my first job",
    "Find an apprenticeship",
    "Progress where I am",
    "Increase my earning potential",
    "Change career",
    "Develop new skills",
    "Move into leadership",
    "Return to work",
    "Start a business",
    "I'm not sure yet",
  ];

  return (
    <div className="min-h-screen bg-[var(--color-surface-base)] text-[var(--color-text-primary)] py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* ── Top Bar: Chapter Indicators & Auto-Save ── */}
        <div className="flex items-center justify-between border-b border-[var(--color-border-default)] pb-4">
          <div className="flex items-center gap-6 text-xs font-mono">
            <div className={`flex items-center gap-2 ${currentChapter === "01_PROTECT" ? "text-white font-bold" : "text-[var(--color-text-tertiary)]"}`}>
              <span className={`w-2 h-2 rounded-full ${currentChapter === "01_PROTECT" ? "bg-[#2F8FFF]" : "bg-zinc-600"}`} />
              <span>01 PROTECT</span>
            </div>
            <div className={`flex items-center gap-2 ${currentChapter === "02_UNDERSTAND" ? "text-white font-bold" : "text-[var(--color-text-tertiary)]"}`}>
              <span className={`w-2 h-2 rounded-full ${currentChapter === "02_UNDERSTAND" ? "bg-[#2F8FFF]" : "bg-zinc-600"}`} />
              <span>02 UNDERSTAND</span>
            </div>
            <div className={`flex items-center gap-2 ${currentChapter === "03_ACTIVATE" ? "text-white font-bold" : "text-[var(--color-text-tertiary)]"}`}>
              <span className={`w-2 h-2 rounded-full ${currentChapter === "03_ACTIVATE" ? "bg-[#2F8FFF]" : "bg-zinc-600"}`} />
              <span>03 ACTIVATE</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {saveIndicator ? (
              <span className="text-[11px] font-mono text-[#34D399] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{saveIndicator}</span>
              </span>
            ) : (
              <span className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
                Authoritative State Active
              </span>
            )}
          </div>
        </div>

        {/* ── CHAPTER 01: PROTECT ── */}
        {currentChapter === "01_PROTECT" && (
          <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] p-8 space-y-8 animate-in fade-in duration-300">
            <div className="space-y-2">
              <span className="section-label text-[#2F8FFF]">Chapter 01 &bull; Identity & Protection</span>
              <h1 className="text-2xl sm:text-3xl font-serif font-normal text-white">
                What should your Career Mentor call you?
              </h1>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                We establish your private sovereignty and security before collecting any sensitive career context.
              </p>
            </div>

            {/* Name & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-white">Your Name / Preferred Name</label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="e.g. Alex, Jordan"
                  className="w-full px-3 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded text-sm text-white focus:outline-none focus:border-[#2F8FFF]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-white">City & State (US Regional Context)</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    className="flex-1 px-3 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded text-sm text-white focus:outline-none focus:border-[#2F8FFF]"
                  />
                  <input
                    type="text"
                    value={stateCode}
                    onChange={(e) => setStateCode(e.target.value.toUpperCase())}
                    maxLength={2}
                    placeholder="State"
                    className="w-16 px-3 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded text-sm text-white text-center uppercase focus:outline-none focus:border-[#2F8FFF]"
                  />
                </div>
              </div>
            </div>

            {/* Security Setup Gate */}
            <div className="p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#2F8FFF]" />
                  <h3 className="text-sm font-bold text-white">Protect your Career OS</h3>
                </div>
                {securitySecured && <TechnicalBadge variant="success">SECURED</TechnicalBadge>}
              </div>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Passkeys provide phishing-resistant biometric access. Passwords are also supported.
              </p>

              {securitySecured ? (
                <div className="p-4 bg-emerald-950/30 border border-emerald-700/50 rounded flex items-center gap-2 text-xs text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strong authentication verified. Your sovereign data is safe.</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex rounded border border-[var(--color-border-default)] p-0.5 bg-[var(--background-dark-deep)]">
                    <button
                      type="button"
                      onClick={() => setSecurityMethod("passkey")}
                      className={`flex-1 py-1.5 text-xs font-semibold rounded flex items-center justify-center gap-1 ${securityMethod === "passkey" ? "bg-white/10 text-white" : "text-zinc-400"}`}
                    >
                      <Fingerprint className="w-3.5 h-3.5 text-[#2F8FFF]" /> Passkey (Biometric)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSecurityMethod("password")}
                      className={`flex-1 py-1.5 text-xs font-semibold rounded flex items-center justify-center gap-1 ${securityMethod === "password" ? "bg-white/10 text-white" : "text-zinc-400"}`}
                    >
                      <Lock className="w-3.5 h-3.5" /> Password
                    </button>
                  </div>

                  {securityError && (
                    <p className="text-xs text-red-400 bg-red-950/20 p-2 rounded border border-red-700/30">
                      {securityError}
                    </p>
                  )}

                  {securityMethod === "passkey" ? (
                    <Button
                      type="button"
                      onClick={handleRegisterPasskey}
                      variant="primary"
                      size="md"
                      className="w-full"
                      disabled={isSecuring}
                    >
                      {isSecuring ? "Performing WebAuthn ceremony…" : "Register Biometric Passkey"}
                    </Button>
                  ) : (
                    <div className="space-y-2">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create strong password (min 8 chars)"
                        className="w-full px-3 py-2 bg-[var(--background-dark-deep)] border border-[var(--color-border-default)] rounded text-xs text-white"
                      />
                      <Button
                        type="button"
                        onClick={handleRegisterPassword}
                        variant="primary"
                        size="md"
                        className="w-full"
                        disabled={isSecuring || password.length < 8}
                      >
                        {isSecuring ? "Saving…" : "Save Password & Secure Account"}
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="flex justify-end pt-4 border-t border-[var(--color-border-default)]">
              <Button
                type="button"
                onClick={() => setCurrentChapter("02_UNDERSTAND")}
                variant="primary"
                size="md"
                disabled={!displayName || !city || !securitySecured}
              >
                <span>Continue to Chapter 02: Understand</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        )}

        {/* ── CHAPTER 02: UNDERSTAND (ADAPTIVE INTAKE & RESUME) ── */}
        {currentChapter === "02_UNDERSTAND" && (
          <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] p-8 space-y-8 animate-in fade-in duration-300">
            <div className="space-y-2">
              <span className="section-label text-[#2F8FFF]">Chapter 02 &bull; Career Context & Direction</span>
              <h1 className="text-2xl sm:text-3xl font-serif font-normal text-white">
                Where are you in your career journey today?
              </h1>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Select your starting point so Career OS calibrates the right questions and intelligence frameworks for you.
              </p>
            </div>

            {/* 10 Career Stages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {careerStageOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setCareerStage(opt.id as CareerStage);
                    triggerSaveNotification("Stage updated");
                  }}
                  className={`p-4 rounded text-left border transition-all ${
                    careerStage === opt.id
                      ? "bg-white/10 border-[#2F8FFF] shadow-sm"
                      : "bg-[var(--color-surface-base)] border-[var(--color-border-default)] hover:border-zinc-500"
                  }`}
                >
                  <div className="text-xs font-bold text-white">{opt.label}</div>
                  <div className="text-[11px] text-[var(--color-text-secondary)] mt-0.5">{opt.desc}</div>
                </button>
              ))}
            </div>

            {/* Primary Goal Selector */}
            <div className="space-y-2 pt-4 border-t border-[var(--color-border-default)]">
              <label className="text-xs font-semibold text-white">What do you want Career OS to help you do?</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {primaryGoalOptions.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => {
                      setPrimaryGoal(g);
                      triggerSaveNotification("Goal updated");
                    }}
                    className={`p-2.5 text-xs rounded border text-left transition-colors ${
                      primaryGoal === g
                        ? "bg-[#2F8FFF]/20 border-[#2F8FFF] text-white font-bold"
                        : "bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-zinc-300"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Resume Acceleration Block */}
            <div className="p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#2F8FFF]" />
                  <h3 className="text-sm font-bold text-white">Have a resume? Accelerate your intake</h3>
                </div>
                <TechnicalBadge variant="neutral">OPTIONAL &bull; PRIVATE</TechnicalBadge>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Upload a PDF or DOCX to extract verified work history and skills automatically (tagged as RESUME_EXTRACTED).
              </p>

              <div className="flex items-center gap-4">
                <label className="px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/20 rounded text-xs font-semibold text-white cursor-pointer inline-flex items-center gap-2 transition-colors">
                  <Upload className="w-3.5 h-3.5" />
                  <span>{isUploadingResume ? "Extracting…" : "Upload Resume (PDF/DOCX)"}</span>
                  <input type="file" accept=".pdf,.docx,.txt" onChange={handleResumeUpload} className="hidden" />
                </label>

                {extractedResume && (
                  <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{extractedResume.extractedSkills.length} skills extracted</span>
                  </span>
                )}
              </div>
            </div>

            {/* Skills & Strengths Review */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-semibold text-white">Key Capabilities & Practical Skills</label>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-white flex items-center gap-1.5">
                    <span>{s}</span>
                    <button
                      type="button"
                      onClick={() => setSkills(skills.filter((sk) => sk !== s))}
                      className="text-zinc-400 hover:text-white"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSkillInput}
                  onChange={(e) => setNewSkillInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && newSkillInput.trim()) {
                      e.preventDefault();
                      setSkills([...skills, newSkillInput.trim()]);
                      setNewSkillInput("");
                    }
                  }}
                  placeholder="Type a skill and press Enter..."
                  className="px-3 py-1.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded text-xs text-white flex-1"
                />
                <Button
                  type="button"
                  onClick={() => {
                    if (newSkillInput.trim()) {
                      setSkills([...skills, newSkillInput.trim()]);
                      setNewSkillInput("");
                    }
                  }}
                  variant="secondary"
                  size="sm"
                >
                  Add Skill
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border-default)]">
              <button
                type="button"
                onClick={() => setCurrentChapter("01_PROTECT")}
                className="text-xs text-zinc-400 hover:text-white inline-flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>

              <Button
                type="button"
                onClick={() => {
                  synthesizeIntelligence();
                  setCurrentChapter("03_ACTIVATE");
                }}
                variant="primary"
                size="md"
              >
                <span>Synthesize Career Twin &bull; Chapter 03</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        )}

        {/* ── CHAPTER 03: ACTIVATE (INTELLIGENCE -> PRIVACY -> ACTIVATION) ── */}
        {currentChapter === "03_ACTIVATE" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Loading / Synthesizing State */}
            {isSynthesizing && (
              <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] p-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#2F8FFF] border-t-transparent animate-spin mx-auto" />
                <h2 className="text-xl font-serif text-white">Synthesizing your starting Career Twin…</h2>
                <p className="text-xs text-[var(--color-text-secondary)] max-w-md mx-auto">
                  Grounding your demonstrated capabilities, career trajectory hypothesis, and system-assigned mentor persona in the evidence you provided.
                </p>
              </div>
            )}

            {/* Synthesis Error State */}
            {synthesisError && !isSynthesizing && (
              <div className="bg-[var(--color-surface-raised)] border border-red-500/40 rounded-[var(--radius-card)] p-8 space-y-4 text-center">
                <AlertCircle className="w-10 h-10 text-red-400 mx-auto" />
                <h2 className="text-lg font-bold text-white">Career Twin Analysis Incomplete</h2>
                <p className="text-xs text-red-300 max-w-md mx-auto">{synthesisError}</p>
                <div className="pt-2">
                  <Button type="button" onClick={synthesizeIntelligence} variant="primary" size="md">
                    <RefreshCw className="w-4 h-4 mr-2" /> Retry Career Twin Synthesis
                  </Button>
                </div>
              </div>
            )}

            {/* Phase 1: INTELLIGENCE REVEAL */}
            {activationPhase === "INTELLIGENCE" && !isSynthesizing && !synthesisError && (
              <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] p-8 space-y-8">
                <div className="space-y-2">
                  <span className="section-label text-[#2F8FFF]">Chapter 03 &bull; Intelligence & Mentorship</span>
                  <h1 className="text-2xl sm:text-3xl font-serif font-normal text-white">
                    Your starting Career Twin is ready.
                  </h1>
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    Everything below is grounded in the evidence and goals you provided. No fabricated stats.
                  </p>
                </div>

                {/* 1. Career Twin Diagnostic Summary */}
                {careerTwin && (
                  <div className="p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#DDD36D]" />
                        <h3 className="text-xs font-bold uppercase tracking-wider text-white">Career Twin Summary</h3>
                      </div>
                      <TechnicalBadge variant="champagne">VERSION 1 &bull; GROUNDED</TechnicalBadge>
                    </div>
                    <p className="text-sm text-[var(--color-text-primary)] leading-relaxed">
                      &ldquo;{careerTwin.summary}&rdquo;
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[var(--color-border-subtle)]">
                      <span className="text-[10px] font-mono text-[var(--color-taupe-300)] uppercase tracking-wider">
                        Demonstrated Capabilities Recognized ({careerTwin.capabilities.length}):
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {careerTwin.capabilities.map((c) => (
                          <span key={c.name} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-xs text-white">
                            {c.name} &bull; <span className="text-zinc-400 font-mono">{c.evidenceSource}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Career Graph Seed (Adjacent Possibilities) */}
                {graphSeed && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                        <Compass className="w-4 h-4 text-[#2F8FFF]" />
                        <span>Career Graph Seed &bull; Adjacent Possibilities</span>
                      </h3>
                      <span className="text-[10px] font-mono text-zinc-400">Hypothesis Only &bull; Non-Guaranteed</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {graphSeed.nodes.map((node) => (
                        <div key={node.id} className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-white">{node.roleTitle}</span>
                            <TechnicalBadge variant="blue">{node.confidence.replace(/_/g, " ")}</TechnicalBadge>
                          </div>
                          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                            {node.evidenceBasis}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. System-Assigned Mentor Reveal */}
                {mentorAssignment && (
                  <div className="p-6 bg-[var(--background-dark-deep)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bot className="w-4 h-4 text-[#CDBBD2]" />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          System-Assigned AI Career Mentor
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#CDBBD2] border border-[#CDBBD2]/30 px-2 py-0.5 rounded">
                        AI Mentor Persona
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/20 shrink-0">
                        <Image src={mentorAssignment.portraitSrc} alt={mentorAssignment.mentorName} fill className="object-cover" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-white">{mentorAssignment.mentorName}</h4>
                        <p className="text-xs text-[#2F8FFF]">{mentorAssignment.mentorDomain}</p>
                        <p className="text-xs text-[var(--color-text-secondary)]">{mentorAssignment.assignmentReason}</p>
                      </div>
                    </div>

                    {/* Mentor Question & First Objective */}
                    <div className="p-4 bg-white/5 border border-white/10 rounded space-y-3">
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#DDD36D]" />
                        <span>{mentorAssignment.mentorName}&apos;s First Question:</span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 italic">
                        &ldquo;{mentorQuestion}&rdquo;
                      </p>

                      <div className="flex gap-2 pt-1">
                        <input
                          type="text"
                          value={mentorAnswer}
                          onChange={(e) => setMentorAnswer(e.target.value)}
                          placeholder="Your reflection (e.g. want greater autonomy, salary clarity, debt-free path)..."
                          className="flex-1 px-3 py-2 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded text-xs text-white"
                        />
                        <Button type="button" onClick={handleFormulateObjective} variant="primary" size="sm" disabled={!mentorAnswer}>
                          Shape 1st Objective
                        </Button>
                      </div>
                      {objectiveError && (
                        <p className="text-xs text-red-400">{objectiveError}</p>
                      )}
                    </div>

                    {/* Formulated Objective */}
                    {careerObjective && (
                      <div className="p-4 bg-[var(--color-surface-base)] border border-[rgba(47,143,255,0.4)] rounded space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-[#2F8FFF] uppercase tracking-wider font-bold">
                            First Grounded Objective ({careerObjective.horizonDays} Days)
                          </span>
                          <TechnicalBadge variant="champagne">ACTIVE</TechnicalBadge>
                        </div>
                        <h5 className="text-sm font-bold text-white">{careerObjective.title}</h5>
                        <p className="text-xs text-[var(--color-text-secondary)]">{careerObjective.description}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Transition to Privacy Phase */}
                <div className="pt-6 border-t border-[var(--color-border-default)] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentChapter("02_UNDERSTAND")}
                    className="text-xs text-zinc-400 hover:text-white inline-flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to Context
                  </button>

                  <Button
                    type="button"
                    onClick={() => setActivationPhase("PRIVACY")}
                    variant="primary"
                    size="lg"
                    disabled={!careerObjective}
                  >
                    <span>Review Privacy &amp; Visibility</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Phase 2: PRIVACY & VISIBILITY CONTROLS */}
            {activationPhase === "PRIVACY" && (
              <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] p-8 space-y-8">
                <div className="space-y-2">
                  <span className="section-label text-[#34D399]">Privacy &amp; Sovereignty First</span>
                  <h1 className="text-2xl sm:text-3xl font-serif font-normal text-white">
                    Confirm how your data is protected.
                  </h1>
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    Career OS is private by default. Your Career Twin, mentor chats, and passport are never visible to employers or institutions without your explicit authorization.
                  </p>
                </div>

                {/* Plain English Privacy Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      <Shield className="w-4 h-4 text-[#34D399]" />
                      <span>What is private?</span>
                    </div>
                    <ul className="text-xs text-[var(--color-text-secondary)] space-y-1 list-disc list-inside">
                      <li>Your Career Twin is visible only to you</li>
                      <li>Mentor conversations are strictly private</li>
                      <li>Your Career Passport remains confidential</li>
                      <li>Your personal contact info is never exposed</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      <EyeOff className="w-4 h-4 text-[#2F8FFF]" />
                      <span>Can employers see my profile?</span>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      No. Employer discovery is off by default. You control when and whether you become discoverable for opportunities.
                    </p>
                  </div>
                </div>

                {/* Granular Privacy Toggles */}
                <div className="p-6 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">Granular Visibility Toggles</h3>

                  {/* Career Twin Visibility */}
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border-subtle)]">
                    <div>
                      <div className="text-xs font-semibold text-white">Career Twin Visibility</div>
                      <div className="text-[11px] text-[var(--color-text-secondary)]">Who can access your synthesized intelligence profile</div>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/10 text-[#34D399] border border-[#34D399]/30">
                      PRIVATE (DEFAULT)
                    </span>
                  </div>

                  {/* Employer Discovery */}
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border-subtle)]">
                    <div>
                      <div className="text-xs font-semibold text-white">Employer Discovery</div>
                      <div className="text-[11px] text-[var(--color-text-secondary)]">Allow verified employers to discover your capability profile</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setEmployerDiscovery(employerDiscovery === "OFF" ? "ANONYMOUS" : "OFF")}
                      className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded border transition-colors bg-white/5 border-white/20 text-zinc-300 hover:text-white"
                    >
                      {employerDiscovery === "OFF" ? (
                        <>
                          <ToggleLeft className="w-4 h-4 text-zinc-500" />
                          <span>OFF (RECOMMENDED)</span>
                        </>
                      ) : (
                        <>
                          <ToggleRight className="w-4 h-4 text-[#2F8FFF]" />
                          <span>ANONYMOUS SIGNAL</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Opportunity Recommendations */}
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border-subtle)]">
                    <div>
                      <div className="text-xs font-semibold text-white">Opportunity Recommendations</div>
                      <div className="text-[11px] text-[var(--color-text-secondary)]">Match adjacent pathways and roles to your Career Twin</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setOpportunityRecs(!opportunityRecs)}
                      className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded border transition-colors bg-white/5 border-white/20 text-zinc-300 hover:text-white"
                    >
                      {opportunityRecs ? (
                        <>
                          <ToggleRight className="w-4 h-4 text-[#34D399]" />
                          <span>ENABLED</span>
                        </>
                      ) : (
                        <>
                          <ToggleLeft className="w-4 h-4 text-zinc-500" />
                          <span>DISABLED</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Marketing / Product Updates */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-white">Product &amp; Intelligence Updates</div>
                      <div className="text-[11px] text-[var(--color-text-secondary)]">Receive product releases and relevant career insight digests</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setMarketingUpdates(!marketingUpdates)}
                      className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded border transition-colors bg-white/5 border-white/20 text-zinc-300 hover:text-white"
                    >
                      {marketingUpdates ? (
                        <>
                          <ToggleRight className="w-4 h-4 text-[#2F8FFF]" />
                          <span>OPTED IN</span>
                        </>
                      ) : (
                        <>
                          <ToggleLeft className="w-4 h-4 text-zinc-500" />
                          <span>OPTED OUT (DEFAULT)</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {privacySaveError && (
                  <p className="text-xs text-red-400 bg-red-950/20 p-3 rounded border border-red-700/30">
                    {privacySaveError}
                  </p>
                )}

                {/* Privacy Confirmation Actions */}
                <div className="pt-6 border-t border-[var(--color-border-default)] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActivationPhase("INTELLIGENCE")}
                    className="text-xs text-zinc-400 hover:text-white inline-flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to Intelligence
                  </button>

                  <Button
                    type="button"
                    onClick={handleSavePrivacy}
                    variant="primary"
                    size="lg"
                    disabled={isSavingPrivacy}
                  >
                    {isSavingPrivacy ? (
                      "Saving Preferences…"
                    ) : (
                      <>
                        <span>Confirm Privacy &amp; Activate</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}

            {/* Phase 3: FINAL ACTIVATION & SYSTEM ILLUMINATION */}
            {activationPhase === "ACTIVATION" && (
              <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] p-8 space-y-8">
                <div className="space-y-2 text-center max-w-xl mx-auto">
                  <span className="section-label text-[#2F8FFF]">Activation Gate</span>
                  <h1 className="text-3xl sm:text-4xl font-serif font-normal text-white">
                    Your Career OS is ready.
                  </h1>
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    All foundational systems have been configured and verified. Your sovereign operating system is initialized.
                  </p>
                </div>

                {/* System Illumination Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="p-4 bg-[var(--color-surface-base)] border border-emerald-500/30 rounded space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#34D399]" /> Career Twin
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">INITIALIZED</span>
                    </div>
                    <p className="text-[11px] text-[var(--color-text-secondary)]">Grounded v1 synthesis active</p>
                  </div>

                  <div className="p-4 bg-[var(--color-surface-base)] border border-emerald-500/30 rounded space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#34D399]" /> Career Passport
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">CREATED</span>
                    </div>
                    <p className="text-[11px] text-[var(--color-text-secondary)]">Verified credentials vault</p>
                  </div>

                  <div className="p-4 bg-[var(--color-surface-base)] border border-emerald-500/30 rounded space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Compass className="w-4 h-4 text-[#34D399]" /> Career Graph
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">MAP SEEDED</span>
                    </div>
                    <p className="text-[11px] text-[var(--color-text-secondary)]">{graphSeed?.nodes?.length || 2} adjacent vectors mapped</p>
                  </div>

                  <div className="p-4 bg-[var(--color-surface-base)] border border-emerald-500/30 rounded space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Bot className="w-4 h-4 text-[#34D399]" /> AI Mentor
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">ASSIGNED</span>
                    </div>
                    <p className="text-[11px] text-[var(--color-text-secondary)]">{mentorAssignment?.mentorName || "Mentor Assigned"}</p>
                  </div>

                  <div className="p-4 bg-[var(--color-surface-base)] border border-emerald-500/30 rounded space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Target className="w-4 h-4 text-[#34D399]" /> Objective
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">1 ACTIVE</span>
                    </div>
                    <p className="text-[11px] text-[var(--color-text-secondary)]">{careerObjective?.horizonDays || 90}-day milestone horizon</p>
                  </div>

                  <div className="p-4 bg-[var(--color-surface-base)] border border-white/10 rounded space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-zinc-400" /> Opportunity Agent
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">READY TO CONFIGURE</span>
                    </div>
                    <p className="text-[11px] text-[var(--color-text-secondary)]">Configure in dashboard</p>
                  </div>
                </div>

                {/* First Personalised Actions Derived from Twin */}
                {initialActions.length > 0 && (
                  <div className="p-6 bg-[var(--background-dark-deep)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white">Your First 3 Strategic Actions</h3>
                    <div className="space-y-2">
                      {initialActions.map((action, idx) => (
                        <div key={idx} className="p-3 bg-[var(--color-surface-base)] border border-white/10 rounded flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-[#2F8FFF]/20 border border-[#2F8FFF]/40 text-[#2F8FFF] text-[11px] font-mono flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <div>
                            <div className="text-xs font-bold text-white">{action.title}</div>
                            <div className="text-[11px] text-[var(--color-text-secondary)]">{action.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activationError && (
                  <p className="text-xs text-red-400 bg-red-950/20 p-3 rounded border border-red-700/30 text-center">
                    {activationError}
                  </p>
                )}

                {/* Final Launch Button */}
                <div className="pt-6 border-t border-[var(--color-border-default)] text-center">
                  <Button
                    type="button"
                    onClick={handleFinalActivation}
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto px-8"
                    disabled={isActivating}
                  >
                    {isActivating ? "Unlocking Career OS…" : "Enter my Career OS"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
