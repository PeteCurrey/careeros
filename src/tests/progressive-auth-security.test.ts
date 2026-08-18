import { describe, it, expect } from 'vitest';
import { isAssuranceSufficientForDataClass, DATA_CLASSIFICATIONS } from '@/lib/auth/data-classification';
import { evaluateAgeBracket } from '@/lib/auth/age-gating';
import { generateWebAuthnChallenge, createPasskeyRegistrationOptions } from '@/lib/auth/passkeys';
import { isStepUpActive, STEP_UP_MAX_AGE_MS } from '@/lib/auth/step-up';
import { Profile } from '@/types/platform/identity';

describe('Progressive Authentication & Security Architecture', () => {
  describe('Data Classification & Security Assurance Gate', () => {
    it('allows EMAIL_VERIFIED users to access Class 0 (Public) and Class 1 (Basic)', () => {
      expect(isAssuranceSufficientForDataClass('EMAIL_VERIFIED', 'CLASS_0_PUBLIC')).toBe(true);
      expect(isAssuranceSufficientForDataClass('EMAIL_VERIFIED', 'CLASS_1_BASIC')).toBe(true);
    });

    it('blocks EMAIL_VERIFIED users from accessing Class 2 (Career Data), Class 3 (Sensitive), and Class 4 (Media)', () => {
      expect(isAssuranceSufficientForDataClass('EMAIL_VERIFIED', 'CLASS_2_PERSONAL_CAREER')).toBe(false);
      expect(isAssuranceSufficientForDataClass('EMAIL_VERIFIED', 'CLASS_3_SENSITIVE_CAREEROS')).toBe(false);
      expect(isAssuranceSufficientForDataClass('EMAIL_VERIFIED', 'CLASS_4_HIGH_SENSITIVITY_MEDIA')).toBe(false);
    });

    it('allows SECURED users (Passkey or Password+MFA) to access Class 2, 3, and 4 data', () => {
      expect(isAssuranceSufficientForDataClass('SECURED', 'CLASS_2_PERSONAL_CAREER')).toBe(true);
      expect(isAssuranceSufficientForDataClass('SECURED', 'CLASS_3_SENSITIVE_CAREEROS')).toBe(true);
      expect(isAssuranceSufficientForDataClass('SECURED', 'CLASS_4_HIGH_SENSITIVITY_MEDIA')).toBe(true);
    });

    it('allows STEPPED_UP users full access across all data classifications', () => {
      expect(isAssuranceSufficientForDataClass('STEPPED_UP', 'CLASS_2_PERSONAL_CAREER')).toBe(true);
      expect(isAssuranceSufficientForDataClass('STEPPED_UP', 'CLASS_3_SENSITIVE_CAREEROS')).toBe(true);
      expect(isAssuranceSufficientForDataClass('STEPPED_UP', 'CLASS_4_HIGH_SENSITIVITY_MEDIA')).toBe(true);
    });
  });

  describe('Youth Policy & Age Gating Enforcement', () => {
    it('hard-blocks direct consumer registration for under-13 users', () => {
      const result = evaluateAgeBracket('2015-05-10', new Date('2026-08-18'));
      expect(result.isHardBlocked).toBe(true);
      expect(result.hasDirectAccountEligibility).toBe(false);
      expect(result.ageBracket).toBe('UNDER_13');
    });

    it('requires parent/guardian consent for users aged 13–15', () => {
      const result = evaluateAgeBracket('2012-05-10', new Date('2026-08-18')); // 14 years old
      expect(result.isHardBlocked).toBe(false);
      expect(result.requiresGuardianConsent).toBe(true);
      expect(result.ageBracket).toBe('MINOR_13_17');
    });

    it('allows direct account eligibility for users aged 16–17 under minor safeguarding', () => {
      const result = evaluateAgeBracket('2009-08-01', new Date('2026-08-18')); // 17 years old
      expect(result.isHardBlocked).toBe(false);
      expect(result.hasDirectAccountEligibility).toBe(true);
      expect(result.isMinor).toBe(true);
      expect(result.requiresGuardianConsent).toBe(false);
    });

    it('permits standard adult registration for users aged 18+', () => {
      const result = evaluateAgeBracket('2000-01-01', new Date('2026-08-18')); // 26 years old
      expect(result.isHardBlocked).toBe(false);
      expect(result.hasDirectAccountEligibility).toBe(true);
      expect(result.isMinor).toBe(false);
      expect(result.ageBracket).toBe('ADULT_18_PLUS');
    });
  });

  describe('Passkey & WebAuthn Challenge Generation', () => {
    it('generates high-entropy base64url challenge string', () => {
      const challenge = generateWebAuthnChallenge();
      expect(typeof challenge).toBe('string');
      expect(challenge.length).toBeGreaterThanOrEqual(40);
    });

    it('creates compliant WebAuthn PublicKeyCredentialCreationOptions', () => {
      const challenge = generateWebAuthnChallenge();
      const options = createPasskeyRegistrationOptions(
        { id: 'user_123', email: 'test@careeros.com', displayName: 'Alex Chen' },
        challenge
      );
      expect(options.challenge).toBe(challenge);
      expect(options.user.name).toBe('test@careeros.com');
      expect(options.authenticatorSelection.userVerification).toBe('required');
    });
  });

  describe('Step-Up Authentication Validity Window', () => {
    it('returns true when profile was stepped up within the 15-minute window', () => {
      const mockProfile: Partial<Profile> = {
        id: 'prof_1',
        last_stepped_up_at: new Date(Date.now() - 5 * 60 * 1000).toISOString(), // 5 min ago
      };
      expect(isStepUpActive(mockProfile as Profile)).toBe(true);
    });

    it('returns false when step-up authentication has expired (> 15 minutes)', () => {
      const mockProfile: Partial<Profile> = {
        id: 'prof_1',
        last_stepped_up_at: new Date(Date.now() - 20 * 60 * 1000).toISOString(), // 20 min ago
      };
      expect(isStepUpActive(mockProfile as Profile)).toBe(false);
    });

    it('returns false when profile has never completed step-up authentication', () => {
      const mockProfile: Partial<Profile> = {
        id: 'prof_1',
        last_stepped_up_at: null,
      };
      expect(isStepUpActive(mockProfile as Profile)).toBe(false);
    });
  });
});
