'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/lib/routes';
import { OnboardingChapter, CareerStage, ExtractedResumeData } from '@/types/platform/onboarding';
import { CareerTwin, CareerPassport, CareerGraphSeed } from '@/types/platform/intelligence';
import { MentorAssignment, CareerObjective } from '@/types/platform/mentors';
import { startRegistration } from '@simplewebauthn/browser';

// Shell & Navigation
import { OnboardingHeader } from '@/components/onboarding/shell/OnboardingHeader';

// Chapter 01: Protect Steps
import { Step01Name } from '@/components/onboarding/chapters/Chapter01Protect/Step01Name';
import { Step02Location } from '@/components/onboarding/chapters/Chapter01Protect/Step02Location';
import { Step03Security } from '@/components/onboarding/chapters/Chapter01Protect/Step03Security';

// Chapter 02: Understand Steps
import { Step04StageSelect } from '@/components/onboarding/chapters/Chapter02Understand/Step04StageSelect';
import { Step05StageTransition } from '@/components/onboarding/chapters/Chapter02Understand/Step05StageTransition';
import { Step06PrimaryGoal } from '@/components/onboarding/chapters/Chapter02Understand/Step06PrimaryGoal';
import { Step07ResumeIntake } from '@/components/onboarding/chapters/Chapter02Understand/Step07ResumeIntake';
import { Step08Capabilities } from '@/components/onboarding/chapters/Chapter02Understand/Step08Capabilities';

// Chapter 03: Activate Steps
import { Step09TwinSynthesis } from '@/components/onboarding/chapters/Chapter03Activate/Step09TwinSynthesis';
import { Step10TwinReveal } from '@/components/onboarding/chapters/Chapter03Activate/Step10TwinReveal';
import { Step11MapPreview } from '@/components/onboarding/chapters/Chapter03Activate/Step11MapPreview';
import { Step12MentorReveal } from '@/components/onboarding/chapters/Chapter03Activate/Step12MentorReveal';
import { Step13MentorDialog } from '@/components/onboarding/chapters/Chapter03Activate/Step13MentorDialog';
import { Step14PrivacyVisual } from '@/components/onboarding/chapters/Chapter03Activate/Step14PrivacyVisual';
import { Step15SystemLaunch } from '@/components/onboarding/chapters/Chapter03Activate/Step15SystemLaunch';

export default function RedesignedOnboardingMaster() {
  const router = useRouter();

  // Navigation & Step Sequence
  const [currentChapter, setCurrentChapter] = useState<OnboardingChapter>('01_PROTECT');
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // Chapter 01 State
  const [displayName, setDisplayName] = useState('');
  const [city, setCity] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [securitySecured, setSecuritySecured] = useState(false);
  const [securityMethod, setSecurityMethod] = useState<'passkey' | 'password'>('passkey');
  const [password, setPassword] = useState('');
  const [isSecuring, setIsSecuring] = useState(false);
  const [securityError, setSecurityError] = useState('');

  // Chapter 02 State
  const [careerStage, setCareerStage] = useState<CareerStage>('EARLY_CAREER');
  const [primaryGoal, setPrimaryGoal] = useState('Find a better job');
  const [extractedResume, setExtractedResume] = useState<ExtractedResumeData | null>(null);
  const [isUploadingResume, setIsUploadingResume] = useState(false);
  const [skills, setSkills] = useState<string[]>([
    'Problem Solving',
    'Communication',
    'Strategic Thinking',
  ]);

  // Chapter 03 State
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [synthesisError, setSynthesisError] = useState<string | null>(null);
  const [careerTwin, setCareerTwin] = useState<CareerTwin | null>(null);
  const [passport, setPassport] = useState<CareerPassport | null>(null);
  const [graphSeed, setGraphSeed] = useState<CareerGraphSeed | null>(null);
  const [mentorAssignment, setMentorAssignment] = useState<MentorAssignment | null>(null);
  const [mentorQuestion, setMentorQuestion] = useState('');
  const [mentorAnswer, setMentorAnswer] = useState('');
  const [careerObjective, setCareerObjective] = useState<CareerObjective | null>(null);
  const [objectiveError, setObjectiveError] = useState<string | null>(null);

  // Privacy State
  const [employerDiscovery, setEmployerDiscovery] = useState<'OFF' | 'ANONYMOUS'>('OFF');
  const [opportunityRecs, setOpportunityRecs] = useState(true);
  const [marketingUpdates, setMarketingUpdates] = useState(false);
  const [isSavingPrivacy, setIsSavingPrivacy] = useState(false);
  const [privacySaveError, setPrivacySaveError] = useState<string | null>(null);

  // Activation State
  const [initialActions, setInitialActions] = useState<
    Array<{ title: string; description: string; type: string }>
  >([]);
  const [isActivating, setIsActivating] = useState(false);
  const [activationError, setActivationError] = useState<string | null>(null);

  // Feedback indicator helper
  const triggerSaveNotification = (msg: string = 'Saved') => {
    setSaveStatus(msg);
    setTimeout(() => setSaveStatus(null), 2500);
  };

  // Auto-persist step progress to backend
  const persistSessionProgress = async (chapter: OnboardingChapter, section: string) => {
    try {
      await fetch('/api/app/onboarding/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chapter,
          section,
          careerStage,
          payload: {
            displayName,
            city,
            state: stateCode,
            zipCode,
            careerStage,
            primaryGoal,
            secondaryGoals: [],
            branchData: {},
          },
        }),
      });
      triggerSaveNotification('Saved');
    } catch {
      // Non-fatal background save failure
    }
  };

  // 1. Passkey Registration
  const handleRegisterPasskey = async () => {
    setIsSecuring(true);
    setSecurityError('');

    try {
      const challengeRes = await fetch('/api/auth/passkey/register/challenge', { method: 'POST' });
      const challengeData = await challengeRes.json();

      if (!challengeRes.ok) {
        throw new Error(challengeData.error || 'Failed to initialize passkey.');
      }

      const attResp = await startRegistration({ optionsJSON: challengeData.options });

      const verifyRes = await fetch('/api/auth/passkey/register/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(attResp),
      });

      const verifyData = await verifyRes.json();
      if (!verifyRes.ok) {
        throw new Error(verifyData.error || 'Passkey verification failed cryptographically.');
      }

      setSecuritySecured(true);
      triggerSaveNotification('Passkey secured');
    } catch (err: unknown) {
      setSecurityError((err as Error).message || 'Passkey registration was cancelled or not supported.');
    } finally {
      setIsSecuring(false);
    }
  };

  // 2. Password Registration
  const handleRegisterPassword = async () => {
    if (password.length < 8) {
      setSecurityError('Password must be at least 8 characters long.');
      return;
    }
    setIsSecuring(true);
    setSecurityError('');

    try {
      const res = await fetch('/api/auth/password/setup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to configure password.');
      }
      setSecuritySecured(true);
      triggerSaveNotification('Password secured');
    } catch (err: unknown) {
      setSecurityError((err as Error).message || 'Password setup failed.');
    } finally {
      setIsSecuring(false);
    }
  };

  // 3. Resume Upload
  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingResume(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/app/onboarding/resume', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.extracted) {
        setExtractedResume(data.extracted);
        if (data.extracted.extractedSkills?.length > 0) {
          setSkills((prev) => Array.from(new Set([...prev, ...data.extracted.extractedSkills])));
        }
        triggerSaveNotification('Resume extracted');
      }
    } catch (err) {
      console.error('Resume extraction failed:', err);
    } finally {
      setIsUploadingResume(false);
    }
  };

  // 4. Synthesize Intelligence & Career Twin
  const synthesizeIntelligence = async () => {
    setIsSynthesizing(true);
    setSynthesisError(null);

    try {
      const res = await fetch('/api/app/intelligence/twin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          context: {
            displayName: displayName || 'Pete Currey',
            city: city || 'San Francisco',
            state: stateCode || 'CA',
            zipCode,
            careerStage,
            primaryGoal,
            secondaryGoals: [],
            branchData: {},
          },
          skills: skills.map((s) => ({
            skillName: s,
            category: 'TECHNICAL',
            provenance: {
              provenance: extractedResume?.extractedSkills?.includes(s)
                ? 'RESUME_EXTRACTED'
                : 'USER_DECLARED',
              confidence: 1.0,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
          })),
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.careerTwin) {
        setSynthesisError(data.error || 'Career Twin synthesis incomplete. Please retry.');
        return;
      }

      setCareerTwin(data.careerTwin);
      setPassport(data.passport);
      setGraphSeed(data.graphSeed);

      // Generate initial priorities
      const twin = data.careerTwin;
      const actions: Array<{ title: string; description: string; type: string }> = [];
      if (twin.capabilities?.length > 0) {
        actions.push({
          title: `Review your ${twin.capabilities[0]?.name || 'key'} capabilities`,
          description: 'Confirm and expand on the capabilities identified from your career context.',
          type: 'REVIEW',
        });
      }
      if (twin.experienceThemes?.length > 0) {
        actions.push({
          title: `Add evidence for: ${twin.experienceThemes[0]}`,
          description: 'Strengthen your Career Passport by adding concrete examples and outcomes.',
          type: 'EVIDENCE',
        });
      }
      if (data.graphSeed?.nodes?.length > 0) {
        actions.push({
          title: `Explore: ${data.graphSeed.nodes[0]?.roleTitle || 'adjacent pathway'}`,
          description: data.graphSeed.nodes[0]?.evidenceBasis || 'Review adjacent career possibilities.',
          type: 'EXPLORE',
        });
      }
      setInitialActions(actions);

      // Assign Mentor
      const mentorRes = await fetch('/api/app/mentors/assign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          careerTwin: data.careerTwin,
          careerGraph: data.graphSeed,
          primaryGoal,
        }),
      });

      const mentorData = await mentorRes.json();
      if (mentorData.assignment) {
        setMentorAssignment(mentorData.assignment);
        setMentorQuestion(mentorData.contextualQuestion);
      }

      // Progress to Twin Reveal (Step 10)
      setCurrentStep(10);
    } catch (err) {
      console.error('Failed to synthesize intelligence:', err);
      setSynthesisError('Network issue during Career Twin synthesis. Please check your connection and retry.');
    } finally {
      setIsSynthesizing(false);
    }
  };

  // 5. Submit Reflection & Formulate Objective
  const handleFormulateObjective = async () => {
    if (!careerTwin) return;
    setObjectiveError(null);

    try {
      const res = await fetch('/api/app/mentors/objective', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          careerTwin,
          primaryGoal,
          mentorResponse: mentorAnswer,
        }),
      });

      const data = await res.json();
      if (res.ok && data.objective) {
        setCareerObjective(data.objective);
        triggerSaveNotification('Objective created');
      } else {
        setObjectiveError(data.error || 'Objective generation failed. Please try again.');
      }
    } catch (err) {
      console.error('Error creating objective:', err);
      setObjectiveError('Network issue creating objective. Please retry.');
    }
  };

  // 6. Save Privacy Preferences
  const handleSavePrivacy = async () => {
    setIsSavingPrivacy(true);
    setPrivacySaveError(null);

    try {
      const res = await fetch('/api/app/privacy/preferences', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          careerTwinVisibility: 'PRIVATE',
          passportVisibility: 'PRIVATE',
          employerDiscovery,
          opportunityRecommendationsEnabled: opportunityRecs,
          institutionalSharingState: 'OFF',
          mentorAnalyticsSharing: false,
          marketing: {
            productUpdates: marketingUpdates,
            careerInsightsDigest: false,
            eventNotifications: false,
            partnerOffers: false,
          },
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setPrivacySaveError(data.error || 'Failed to save privacy preferences. Please try again.');
        return;
      }

      triggerSaveNotification('Privacy confirmed');
      setCurrentStep(15);
    } catch (err) {
      console.error('Privacy save error:', err);
      setPrivacySaveError('Network issue. Please try again.');
    } finally {
      setIsSavingPrivacy(false);
    }
  };

  // 7. Final Activation
  const handleFinalActivation = async () => {
    setIsActivating(true);
    setActivationError(null);

    try {
      const res = await fetch('/api/app/onboarding/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ initialActions }),
      });

      const data = await res.json();
      if (res.ok) {
        router.push(ROUTES.APP_DASHBOARD);
      } else {
        setActivationError(
          data.missing?.length
            ? `Cannot activate — incomplete: ${data.missing.join(', ')}. Please complete each stage.`
            : data.error || 'Activation failed. Please try again.'
        );
      }
    } catch (err) {
      console.error('Activation failed:', err);
      setActivationError('Network issue during activation. Please check your connection and retry.');
    } finally {
      setIsActivating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface-base)] text-[var(--color-text-primary)] flex flex-col">
      {/* Dedicated Minimal Onboarding Header */}
      <OnboardingHeader
        currentChapter={currentChapter}
        saveStatus={saveStatus}
        onSaveAndExit={() => {
          persistSessionProgress(currentChapter, `step_${currentStep}`);
          router.push(ROUTES.HOME);
        }}
      />

      {/* Main Step Interaction Surface */}
      <main className="flex-1 flex flex-col justify-center">
        {/* ── CHAPTER 01: PROTECT ── */}
        {currentStep === 1 && (
          <Step01Name
            displayName={displayName}
            onChangeDisplayName={(name) => setDisplayName(name)}
            onNext={() => {
              setCurrentStep(2);
              persistSessionProgress('01_PROTECT', 'location');
            }}
          />
        )}

        {currentStep === 2 && (
          <Step02Location
            city={city}
            stateCode={stateCode}
            zipCode={zipCode}
            onChangeCity={(c) => setCity(c)}
            onChangeState={(s) => setStateCode(s)}
            onChangeZip={(z) => setZipCode(z)}
            onNext={() => {
              setCurrentStep(3);
              persistSessionProgress('01_PROTECT', 'security');
            }}
            onBack={() => setCurrentStep(1)}
          />
        )}

        {currentStep === 3 && (
          <Step03Security
            securitySecured={securitySecured}
            securityMethod={securityMethod}
            passwordValue={password}
            isSecuring={isSecuring}
            securityError={securityError}
            onChangeSecurityMethod={(m) => setSecurityMethod(m)}
            onChangePassword={(p) => setPassword(p)}
            onRegisterPasskey={handleRegisterPasskey}
            onRegisterPassword={handleRegisterPassword}
            onNext={() => {
              setCurrentChapter('02_UNDERSTAND');
              setCurrentStep(4);
              persistSessionProgress('02_UNDERSTAND', 'stage');
            }}
            onBack={() => setCurrentStep(2)}
          />
        )}

        {/* ── CHAPTER 02: UNDERSTAND ── */}
        {currentStep === 4 && (
          <Step04StageSelect
            careerStage={careerStage}
            onSelectStage={(stage) => setCareerStage(stage)}
            onNext={() => {
              setCurrentStep(5);
              persistSessionProgress('02_UNDERSTAND', 'calibration');
            }}
            onBack={() => {
              setCurrentChapter('01_PROTECT');
              setCurrentStep(3);
            }}
          />
        )}

        {currentStep === 5 && (
          <Step05StageTransition
            careerStage={careerStage}
            onNext={() => {
              setCurrentStep(6);
              persistSessionProgress('02_UNDERSTAND', 'goal');
            }}
            onBack={() => setCurrentStep(4)}
          />
        )}

        {currentStep === 6 && (
          <Step06PrimaryGoal
            careerStage={careerStage}
            primaryGoal={primaryGoal}
            onSelectPrimaryGoal={(goal) => setPrimaryGoal(goal)}
            onNext={() => {
              setCurrentStep(7);
              persistSessionProgress('02_UNDERSTAND', 'resume');
            }}
            onBack={() => setCurrentStep(5)}
          />
        )}

        {currentStep === 7 && (
          <Step07ResumeIntake
            extractedResume={extractedResume}
            isUploadingResume={isUploadingResume}
            onUploadResume={handleResumeUpload}
            onNext={() => {
              setCurrentStep(8);
              persistSessionProgress('02_UNDERSTAND', 'capabilities');
            }}
            onBack={() => setCurrentStep(6)}
          />
        )}

        {currentStep === 8 && (
          <Step08Capabilities
            careerStage={careerStage}
            skills={skills}
            onAddSkill={(s) => setSkills((prev) => Array.from(new Set([...prev, s])))}
            onRemoveSkill={(s) => setSkills((prev) => prev.filter((sk) => sk !== s))}
            onNext={() => {
              setCurrentChapter('03_ACTIVATE');
              setCurrentStep(9);
              synthesizeIntelligence();
            }}
            onBack={() => setCurrentStep(7)}
          />
        )}

        {/* ── CHAPTER 03: ACTIVATE ── */}
        {currentStep === 9 && (
          <Step09TwinSynthesis
            isSynthesizing={isSynthesizing}
            synthesisError={synthesisError}
            onRetry={synthesizeIntelligence}
          />
        )}

        {currentStep === 10 && careerTwin && (
          <Step10TwinReveal
            careerTwin={careerTwin}
            onConfirm={() => setCurrentStep(11)}
            onCorrect={() => {
              setCurrentChapter('02_UNDERSTAND');
              setCurrentStep(8);
            }}
            onBack={() => {
              setCurrentChapter('02_UNDERSTAND');
              setCurrentStep(8);
            }}
          />
        )}

        {currentStep === 11 && (
          <Step11MapPreview
            graphSeed={graphSeed}
            onNext={() => setCurrentStep(12)}
            onBack={() => setCurrentStep(10)}
          />
        )}

        {currentStep === 12 && mentorAssignment && (
          <Step12MentorReveal
            mentorAssignment={mentorAssignment}
            onNext={() => setCurrentStep(13)}
            onBack={() => setCurrentStep(11)}
          />
        )}

        {currentStep === 13 && mentorAssignment && (
          <Step13MentorDialog
            mentorAssignment={mentorAssignment}
            mentorQuestion={mentorQuestion}
            mentorAnswer={mentorAnswer}
            careerObjective={careerObjective}
            objectiveError={objectiveError}
            onChangeAnswer={(a) => setMentorAnswer(a)}
            onFormulateObjective={handleFormulateObjective}
            onNext={() => setCurrentStep(14)}
            onBack={() => setCurrentStep(12)}
          />
        )}

        {currentStep === 14 && (
          <Step14PrivacyVisual
            employerDiscovery={employerDiscovery}
            opportunityRecs={opportunityRecs}
            marketingUpdates={marketingUpdates}
            isSavingPrivacy={isSavingPrivacy}
            privacySaveError={privacySaveError}
            onToggleEmployerDiscovery={() =>
              setEmployerDiscovery(employerDiscovery === 'OFF' ? 'ANONYMOUS' : 'OFF')
            }
            onToggleOpportunityRecs={() => setOpportunityRecs(!opportunityRecs)}
            onToggleMarketing={() => setMarketingUpdates(!marketingUpdates)}
            onSaveAndNext={handleSavePrivacy}
            onBack={() => setCurrentStep(13)}
          />
        )}

        {currentStep === 15 && (
          <Step15SystemLaunch
            careerTwin={careerTwin}
            passport={passport}
            graphSeed={graphSeed}
            mentorAssignment={mentorAssignment}
            careerObjective={careerObjective}
            initialActions={initialActions}
            isActivating={isActivating}
            activationError={activationError}
            onActivate={handleFinalActivation}
          />
        )}
      </main>
    </div>
  );
}
