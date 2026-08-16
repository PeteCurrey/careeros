'use client';

import React, { useState } from 'react';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ChevronRight, Check } from 'lucide-react';

const STEPS = [
  { id: 'profile', label: 'Basic Profile', description: 'Your name and location preferences' },
  { id: 'pathway', label: 'Career Stage', description: 'Where you are in your working life right now' },
  { id: 'goals', label: 'Initial Goals', description: 'What you want to achieve in the next 12 months' },
  { id: 'privacy', label: 'Privacy Setup', description: 'Configure who can see your professional profile' },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayName, setDisplayName] = useState('');
  const [careerStage, setCareerStage] = useState('');
  const [completed, setCompleted] = useState(false);

  const careerStages = [
    'Exploring (Still in education)',
    'Starting Out (First role, internship, apprenticeship)',
    'Developing (Early–mid career, 1–5 years)',
    'Established (5–10 years experience)',
    'Senior / Leadership (10+ years)',
    'Pivoting (Changing industry or career direction)',
    'Re-entering (Returning to work after a break)',
  ];

  const isStepValid = () => {
    if (currentStep === 0) return displayName.trim().length >= 2;
    if (currentStep === 1) return careerStage !== '';
    return true;
  };

  if (completed) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-4 max-w-sm">
          <div className="w-16 h-16 rounded-full bg-[var(--color-success-light)] flex items-center justify-center mx-auto">
            <Check className="w-8 h-8 text-[var(--color-success)]" />
          </div>
          <h2 className="text-xl font-bold text-[var(--color-text-primary)]">
            Welcome to Career OS, {displayName}!
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Your foundation profile is set up. Platform features will become available progressively.
          </p>
          <Button href={ROUTES.APP_DASHBOARD} variant="primary" size="md">
            Go to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container-site max-w-xl space-y-8">
        {/* Progress */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="brand" size="sm">Onboarding</Badge>
            <span className="text-xs text-[var(--color-text-tertiary)]">Step {currentStep + 1} of {STEPS.length}</span>
          </div>
          <div className="flex gap-1.5">
            {STEPS.map((step, i) => (
              <div
                key={step.id}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i <= currentStep ? 'bg-[var(--color-brand-600)]' : 'bg-[var(--color-border-default)]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-xl p-8 space-y-6">
          <div className="space-y-1">
            <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
              {STEPS[currentStep]?.label}
            </h1>
            <p className="text-sm text-[var(--color-text-secondary)]">
              {STEPS[currentStep]?.description}
            </p>
          </div>

          {currentStep === 0 && (
            <div className="space-y-1">
              <label htmlFor="display-name" className="text-xs font-semibold text-[var(--color-text-primary)]">
                How should we address you?
              </label>
              <input
                id="display-name"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Your first name or display name"
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)] transition-shadow"
              />
              <p className="text-xs text-[var(--color-text-tertiary)] mt-2">
                You can update this at any time in account settings.
              </p>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[var(--color-text-primary)]">
                Which best describes where you are right now?
              </p>
              <div className="space-y-2">
                {careerStages.map((stage) => (
                  <button
                    key={stage}
                    type="button"
                    onClick={() => setCareerStage(stage)}
                    className={`w-full text-left p-3 rounded-lg border text-sm transition-all ${
                      careerStage === stage
                        ? 'border-[var(--color-brand-600)] bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-700)] dark:text-[var(--color-brand-300)] font-semibold'
                        : 'border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] text-[var(--color-text-primary)]'
                    }`}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-3">
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Goal-setting in Career OS is supported through your AI Career Mentor once your foundation profile is complete. For now, note that your goals, development targets, and ambitions are private by default — never visible to employers without your explicit permission.
              </p>
              <div className="p-4 rounded-lg bg-[var(--color-surface-sunken)] text-xs text-[var(--color-text-tertiary)] font-mono">
                Goals visibility: PRIVATE (default)
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Your Career OS profile is set to <strong>Private</strong> by default. No employer, recruiter, or third party can access your career information without your explicit permission.
              </p>
              <div className="space-y-2">
                {[
                  { label: 'Allow employer discovery', value: 'OFF (you can enable later)', recommended: false },
                  { label: 'Allow mentor access', value: 'ON (can be revoked)', recommended: true },
                  { label: 'Public profile visibility', value: 'PRIVATE', recommended: true },
                ].map((setting) => (
                  <div key={setting.label} className="flex items-center justify-between p-3 rounded-lg bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)]">
                    <span className="text-xs font-medium text-[var(--color-text-primary)]">{setting.label}</span>
                    <Badge variant={setting.recommended ? 'verified' : 'default'} size="sm">{setting.value}</Badge>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--color-text-tertiary)]">
                You can change all privacy settings at any time from your account.
              </p>
            </div>
          )}

          <div className="flex justify-between pt-2">
            {currentStep > 0 ? (
              <button
                type="button"
                onClick={() => setCurrentStep((s) => s - 1)}
                className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                Back
              </button>
            ) : <div />}

            <Button
              onClick={() => {
                if (currentStep < STEPS.length - 1) {
                  setCurrentStep((s) => s + 1);
                } else {
                  setCompleted(true);
                }
              }}
              variant="primary"
              size="md"
              disabled={!isStepValid()}
            >
              {currentStep < STEPS.length - 1 ? (
                <>Continue <ChevronRight className="w-4 h-4 ml-1" /></>
              ) : (
                'Complete Setup'
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
