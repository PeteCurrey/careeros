import { describe, it, expect } from 'vitest';
import { parseUSDateToISO, convertISOToUSDisplay } from '@/components/ui/DateOfBirthInput';
import { validateAndFormatDOB, evaluateAgeBracket, calculateAge } from '@/lib/auth/age-gating';
import { isAssuranceSufficientForDataClass, DATA_CLASSIFICATIONS } from '@/lib/auth/data-classification';
import { isStepUpActive, STEP_UP_MAX_AGE_MS } from '@/lib/auth/step-up';
import { logAuthEvent, hashEmailForLog } from '@/lib/auth/auth-logger';
import { Profile } from '@/types/platform/identity';

describe('Signup & Progressive Security Layer Tests', () => {
  describe('US Date of Birth Component & Strict Validation', () => {
    it('correctly converts MM/DD/YYYY presentation to ISO YYYY-MM-DD', () => {
      const res = parseUSDateToISO('04/21/1989');
      expect(res.isValid).toBe(true);
      expect(res.isoDate).toBe('1989-04-21');
    });

    it('correctly converts ISO YYYY-MM-DD back to MM/DD/YYYY display text', () => {
      const display = convertISOToUSDisplay('1989-04-21');
      expect(display).toBe('04/21/1989');
    });

    it('rejects impossible dates like February 30th', () => {
      const res = validateAndFormatDOB('02/30/2000');
      expect(res.isValid).toBe(false);
      expect(res.error).toBeDefined();
    });

    it('rejects invalid month numbers like month 13', () => {
      const res = validateAndFormatDOB('13/10/2000');
      expect(res.isValid).toBe(false);
      expect(res.error).toBeDefined();
    });

    it('validates leap year February 29th on leap year 2024', () => {
      const res = validateAndFormatDOB('02/29/2024');
      expect(res.isValid).toBe(true);
      expect(res.isoDate).toBe('2024-02-29');
    });

    it('rejects leap year February 29th on non-leap year 2023', () => {
      const res = validateAndFormatDOB('02/29/2023');
      expect(res.isValid).toBe(false);
      expect(res.error).toBeDefined();
    });

    it('rejects future dates of birth', () => {
      const future = new Date();
      future.setFullYear(future.getFullYear() + 2);
      const mm = (future.getMonth() + 1).toString().padStart(2, '0');
      const dd = future.getDate().toString().padStart(2, '0');
      const yyyy = future.getFullYear();

      const res = validateAndFormatDOB(`${mm}/${dd}/${yyyy}`);
      expect(res.isValid).toBe(false);
      expect(res.error).toContain('future');
    });
  });

  describe('Age Policy & Minor Safeguarding Engine', () => {
    const fixedRefDate = new Date('2026-08-18T12:00:00Z');

    it('evaluates adult (18+) as ADULT_18_PLUS with direct account eligibility', () => {
      const res = evaluateAgeBracket('04/21/1989', fixedRefDate);
      expect(res.age).toBe(37);
      expect(res.ageBracket).toBe('ADULT_18_PLUS');
      expect(res.hasDirectAccountEligibility).toBe(true);
      expect(res.isMinor).toBe(false);
      expect(res.requiresGuardianConsent).toBe(false);
      expect(res.isHardBlocked).toBe(false);
    });

    it('evaluates age 16-17 as direct-eligible youth with minor safeguarding controls', () => {
      // Born 2009-08-18 -> exactly 17 years old on 2026-08-18
      const res = evaluateAgeBracket('08/18/2009', fixedRefDate);
      expect(res.age).toBe(17);
      expect(res.ageBracket).toBe('MINOR_13_17');
      expect(res.hasDirectAccountEligibility).toBe(true);
      expect(res.isMinor).toBe(true);
      expect(res.requiresGuardianConsent).toBe(false);
      expect(res.isHardBlocked).toBe(false);
    });

    it('evaluates age 13-15 as requiring guardian consent', () => {
      // Born 2012-08-18 -> exactly 14 years old on 2026-08-18
      const res = evaluateAgeBracket('08/18/2012', fixedRefDate);
      expect(res.age).toBe(14);
      expect(res.ageBracket).toBe('MINOR_13_17');
      expect(res.hasDirectAccountEligibility).toBe(false);
      expect(res.isMinor).toBe(true);
      expect(res.requiresGuardianConsent).toBe(true);
      expect(res.defaultAccountStatus).toBe('PENDING_GUARDIAN_CONSENT');
    });

    it('hard-blocks under-13 direct consumer registration under COPPA', () => {
      // Born 2016-08-18 -> exactly 10 years old on 2026-08-18
      const res = evaluateAgeBracket('08/18/2016', fixedRefDate);
      expect(res.age).toBe(10);
      expect(res.ageBracket).toBe('UNDER_13');
      expect(res.isHardBlocked).toBe(true);
      expect(res.requiresInstitutionalEnrollment).toBe(true);
      expect(res.defaultAccountStatus).toBe('DEACTIVATED');
    });
  });

  describe('Data Classification & Progressive Authentication Assurance', () => {
    it('permits Class 0 (Public) and Class 1 (Basic) data with EMAIL_VERIFIED assurance', () => {
      expect(isAssuranceSufficientForDataClass('EMAIL_VERIFIED', 'CLASS_0_PUBLIC')).toBe(true);
      expect(isAssuranceSufficientForDataClass('EMAIL_VERIFIED', 'CLASS_1_BASIC')).toBe(true);
    });

    it('blocks Class 2 (Personal Career) and Class 3 (Sensitive CareerOS) with EMAIL_VERIFIED assurance', () => {
      expect(isAssuranceSufficientForDataClass('EMAIL_VERIFIED', 'CLASS_2_PERSONAL_CAREER')).toBe(false);
      expect(isAssuranceSufficientForDataClass('EMAIL_VERIFIED', 'CLASS_3_SENSITIVE_CAREEROS')).toBe(false);
      expect(isAssuranceSufficientForDataClass('EMAIL_VERIFIED', 'CLASS_4_HIGH_SENSITIVITY_MEDIA')).toBe(false);
    });

    it('authorizes Class 2, 3, and 4 data with SECURED assurance', () => {
      expect(isAssuranceSufficientForDataClass('SECURED', 'CLASS_2_PERSONAL_CAREER')).toBe(true);
      expect(isAssuranceSufficientForDataClass('SECURED', 'CLASS_3_SENSITIVE_CAREEROS')).toBe(true);
      expect(isAssuranceSufficientForDataClass('SECURED', 'CLASS_4_HIGH_SENSITIVITY_MEDIA')).toBe(true);
    });

    it('authorizes Class 2, 3, and 4 data with STEPPED_UP assurance', () => {
      expect(isAssuranceSufficientForDataClass('STEPPED_UP', 'CLASS_2_PERSONAL_CAREER')).toBe(true);
      expect(isAssuranceSufficientForDataClass('STEPPED_UP', 'CLASS_3_SENSITIVE_CAREEROS')).toBe(true);
      expect(isAssuranceSufficientForDataClass('STEPPED_UP', 'CLASS_4_HIGH_SENSITIVITY_MEDIA')).toBe(true);
    });
  });

  describe('Step-Up Authentication Validity Window', () => {
    it('recognizes active step-up within 15 minutes', () => {
      const mockProfile: Partial<Profile> = {
        id: 'p1',
        last_stepped_up_at: new Date(Date.now() - 5 * 60 * 1000).toISOString(), // 5 mins ago
      };
      expect(isStepUpActive(mockProfile as Profile)).toBe(true);
    });

    it('expires step-up after 15 minutes', () => {
      const mockProfile: Partial<Profile> = {
        id: 'p1',
        last_stepped_up_at: new Date(Date.now() - 20 * 60 * 1000).toISOString(), // 20 mins ago
      };
      expect(isStepUpActive(mockProfile as Profile)).toBe(false);
    });

    it('returns false when profile has never stepped up', () => {
      const mockProfile: Partial<Profile> = {
        id: 'p1',
        last_stepped_up_at: null,
      };
      expect(isStepUpActive(mockProfile as Profile)).toBe(false);
    });
  });

  describe('Structured Logging & Privacy Sanitization', () => {
    it('hashes email addresses consistently for audit correlation without PII leakage', () => {
      const hash1 = hashEmailForLog('pete@example.com');
      const hash2 = hashEmailForLog('PETE@EXAMPLE.COM');
      expect(hash1).toBe(hash2);
      expect(hash1).not.toContain('pete');
      expect(hash1).not.toContain('@');
      expect(hash1?.length).toBe(12);
    });
  });
});
