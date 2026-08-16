import { describe, it, expect } from 'vitest';
import { ROUTES } from '@/lib/routes';
import { primaryNav, megaMenuContent, footerNav } from '@/lib/navigation';

describe('Route Registry and Navigation Integrity', () => {
  it('should define all routes as absolute paths starting with /', () => {
    Object.entries(ROUTES).forEach(([key, path]) => {
      expect(path.startsWith('/')).toBe(true);
      expect(path.length).toBeGreaterThan(0);
    });
  });

  it('should not contain duplicate route paths in the registry except intentional aliases', () => {
    const paths = Object.values(ROUTES);
    const uniquePaths = new Set(paths);
    expect(paths.length - uniquePaths.size).toBeLessThanOrEqual(1); // Only APP / APP_DASHBOARD alias allowed
  });

  it('should ensure all primary navigation links exist in the route registry', () => {
    const validPaths = new Set(Object.values(ROUTES) as string[]);
    primaryNav.forEach((item) => {
      expect(validPaths.has(item.href)).toBe(true);
    });
  });

  it('should ensure all mega menu items have valid routes', () => {
    const validPaths = new Set(Object.values(ROUTES) as string[]);
    Object.values(megaMenuContent).forEach((section) => {
      section.groups.forEach((group) => {
        group.items.forEach((item) => {
          expect(validPaths.has(item.href)).toBe(true);
        });
      });
      if (section.cta) {
        expect(validPaths.has(section.cta.href)).toBe(true);
      }
    });
  });

  it('should ensure all footer items have valid routes or external links', () => {
    const validPaths = new Set(Object.values(ROUTES) as string[]);
    footerNav.forEach((group) => {
      group.items.forEach((item) => {
        const isInternal = item.href.startsWith('/');
        if (isInternal) {
          expect(validPaths.has(item.href)).toBe(true);
        }
      });
    });
  });
});
