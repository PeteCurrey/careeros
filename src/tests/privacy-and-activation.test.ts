import { describe, it, expect } from 'vitest';
import {
  getDefaultPrivacyPreferences,
  getPrivacyAnswers,
  PrivacyPreferences,
} from '@/types/platform/privacy';

describe('Pass 06 — Privacy & Activation Hardening', () => {
  describe('Default Privacy Stance (Privacy-by-Default)', () => {
    it('sets Career Twin and Passport visibility to PRIVATE by default', () => {
      const defaults = getDefaultPrivacyPreferences('user_123', false);
      expect(defaults.careerTwinVisibility).toBe('PRIVATE');
      expect(defaults.passportVisibility).toBe('PRIVATE');
    });

    it('sets employer discovery to OFF by default (never on by default)', () => {
      const defaults = getDefaultPrivacyPreferences('user_123', false);
      expect(defaults.employerDiscovery).toBe('OFF');
    });

    it('enables opportunity recommendations by default (core service)', () => {
      const defaults = getDefaultPrivacyPreferences('user_123', false);
      expect(defaults.opportunityRecommendationsEnabled).toBe(true);
    });

    it('keeps institutional sharing OFF until explicit authorization', () => {
      const defaults = getDefaultPrivacyPreferences('user_123', false);
      expect(defaults.institutionalSharingState).toBe('OFF');
    });

    it('opts out of marketing and partner offers by default', () => {
      const defaults = getDefaultPrivacyPreferences('user_123', false);
      expect(defaults.marketing.partnerOffers).toBe(false);
      expect(defaults.marketing.productUpdates).toBe(false);
    });

    it('enforces youth safeguards automatically for minors', () => {
      const minorDefaults = getDefaultPrivacyPreferences('minor_user', true);
      expect(minorDefaults.youthRestrictionsApplied).toBe(true);
      expect(minorDefaults.publicProfileEnabled).toBe(false);
      expect(minorDefaults.employerDiscovery).toBe('OFF');
      expect(minorDefaults.mentorAnalyticsSharing).toBe(false);
    });
  });

  describe('Plain-English Privacy Explanations', () => {
    it('generates clear plain-English answers for user review', () => {
      const answers = getPrivacyAnswers({ employerDiscovery: 'OFF' }, false);
      expect(answers.whatIsPrivate.length).toBeGreaterThanOrEqual(3);
      expect(answers.canEmployersSeeProfile).toContain('No. Employer discovery is off.');
      expect(answers.canSchoolSeeMentorConversations).toContain('Mentor conversations are always private');
      expect(answers.canChangeSettingsLater).toContain('Settings');
    });
  });
});
