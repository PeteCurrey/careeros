import { describe, it, expect } from 'vitest';
import { cn, formatDate, toId, truncate } from '@/lib/utils';

describe('Utility Functions', () => {
  describe('cn (classNames merger)', () => {
    it('should merge class names correctly', () => {
      expect(cn('px-4', 'py-2')).toBe('px-4 py-2');
    });

    it('should resolve tailwind conflicts', () => {
      expect(cn('px-4', 'px-6')).toBe('px-6');
    });

    it('should handle conditionals and falsy values', () => {
      expect(cn('btn', false && 'hidden', undefined, null, 'active')).toBe('btn active');
    });
  });

  describe('formatDate', () => {
    it('should format a date string correctly in en-US', () => {
      const formatted = formatDate('2026-08-16T00:00:00Z');
      expect(formatted).toContain('2026');
      expect(formatted).toContain('August');
    });
  });

  describe('toId', () => {
    it('should convert strings into URL-safe kebab-case IDs', () => {
      expect(toId('AI Career Mentor')).toBe('ai-career-mentor');
      expect(toId('  Special #@! Characters & More  ')).toBe('special-characters-more');
    });
  });

  describe('truncate', () => {
    it('should return the original string if within limit', () => {
      expect(truncate('Hello world', 20)).toBe('Hello world');
    });

    it('should truncate and append an ellipsis if exceeding limit', () => {
      expect(truncate('The operating system for your working life', 13)).toBe('The operating…');
    });
  });
});
