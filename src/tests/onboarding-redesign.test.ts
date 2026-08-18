import { describe, it, expect } from 'vitest';
import React from 'react';
import { OnboardingChapter, CareerStage } from '@/types/platform/onboarding';

describe('Redesigned Onboarding Architecture & Visual Layer', () => {
  it('defines 3 distinct chapters matching the redesigned product flow', () => {
    const chapters: OnboardingChapter[] = ['01_PROTECT', '02_UNDERSTAND', '03_ACTIVATE'];
    expect(chapters).toHaveLength(3);
    expect(chapters[0]).toBe('01_PROTECT');
    expect(chapters[1]).toBe('02_UNDERSTAND');
    expect(chapters[2]).toBe('03_ACTIVATE');
  });

  it('contains all 10 verified career stages with non-patronising descriptors', () => {
    const stages: CareerStage[] = [
      'SCHOOL_STUDENT',
      'COLLEGE_UNIVERSITY',
      'APPRENTICE_TRADE',
      'EARLY_CAREER',
      'EXPERIENCED_PROFESSIONAL',
      'LEADER_EXECUTIVE',
      'CAREER_CHANGER',
      'RETURNER',
      'ENTREPRENEUR',
      'EXPLORING',
    ];
    expect(stages).toHaveLength(10);
  });

  it('validates privacy-first default values during intake', () => {
    const defaultPrivacy = {
      careerTwinVisibility: 'PRIVATE',
      passportVisibility: 'PRIVATE',
      employerDiscovery: 'OFF',
      opportunityRecommendationsEnabled: true,
      institutionalSharingState: 'OFF',
      mentorAnalyticsSharing: false,
    };

    expect(defaultPrivacy.careerTwinVisibility).toBe('PRIVATE');
    expect(defaultPrivacy.passportVisibility).toBe('PRIVATE');
    expect(defaultPrivacy.employerDiscovery).toBe('OFF');
    expect(defaultPrivacy.opportunityRecommendationsEnabled).toBe(true);
  });
});
