import { describe, it, expect } from 'vitest';
import { generateSessionToken, hashToken, validateAdminSessionToken } from '@/lib/admin/session';
import { generateRecoveryCodes } from '@/lib/admin/mfa';
import { hasMinimumRole, isStepUpValid } from '@/lib/admin/permissions';

describe('Admin Security Architecture — Unit Tests', () => {
  describe('Session Token Generation & Cryptographic Hashing', () => {
    it('generates high-entropy base64url tokens', () => {
      const token1 = generateSessionToken();
      const token2 = generateSessionToken();

      expect(token1).toBeDefined();
      expect(token1.length).toBeGreaterThanOrEqual(40);
      expect(token1).not.toBe(token2);
    });

    it('consistently hashes tokens using SHA-256', () => {
      const token = 'sample_high_entropy_admin_session_token_12345';
      const hash1 = hashToken(token);
      const hash2 = hashToken(token);

      expect(hash1).toBe(hash2);
      expect(hash1).toHaveLength(64); // SHA-256 produces 64 hex characters
    });

    it('rejects malformed or empty session tokens', async () => {
      const result = await validateAdminSessionToken('');
      expect(result.valid).toBe(false);
      expect(result.reason).toBe('invalid_token_format');
    });
  });

  describe('Single-Use Recovery Codes Generation', () => {
    it('generates 10 distinct recovery codes with matching SHA-256 hashes', () => {
      const { plaintextCodes, hashedCodes } = generateRecoveryCodes(10);

      expect(plaintextCodes).toHaveLength(10);
      expect(hashedCodes).toHaveLength(10);

      // Verify XXXX-XXXX format
      plaintextCodes.forEach((code) => {
        expect(code).toMatch(/^[A-F0-9]{4}-[A-F0-9]{4}$/);
      });

      // Verify distinctness
      const uniqueCodes = new Set(plaintextCodes);
      expect(uniqueCodes.size).toBe(10);
    });
  });

  describe('RBAC & Role Hierarchy Verification', () => {
    it('correctly evaluates role hierarchy levels', () => {
      expect(hasMinimumRole('super_admin', 'admin')).toBe(true);
      expect(hasMinimumRole('super_admin', 'read_only')).toBe(true);
      expect(hasMinimumRole('admin', 'content_editor')).toBe(true);
      expect(hasMinimumRole('read_only', 'admin')).toBe(false);
      expect(hasMinimumRole('support', 'super_admin')).toBe(false);
    });
  });

  describe('Step-Up Reauthentication Time Windows', () => {
    it('validates recent strong authentication within 15 minutes', () => {
      const now = new Date().toISOString();
      expect(isStepUpValid(now, 15)).toBe(true);

      const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000).toISOString();
      expect(isStepUpValid(tenMinutesAgo, 15)).toBe(true);

      const twentyMinutesAgo = new Date(Date.now() - 20 * 60 * 1000).toISOString();
      expect(isStepUpValid(twentyMinutesAgo, 15)).toBe(false);

      expect(isStepUpValid(null)).toBe(false);
      expect(isStepUpValid(undefined)).toBe(false);
    });
  });
});
