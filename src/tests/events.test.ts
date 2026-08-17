import { describe, it, expect } from 'vitest';
import {
  SEED_EVENTS,
  EVENT_CATEGORIES,
  EVENT_SECTORS,
  filterEvents,
  getCategoryBySlug,
  getEventBySlug,
  formatEventDate,
  formatEventTime,
} from '@/lib/events/data';
import { EventFilterState } from '@/types/events/platform';

describe('Events Platform Data & Logic', () => {
  it('should have verified seed events with required fields', () => {
    expect(SEED_EVENTS.length).toBeGreaterThan(0);

    SEED_EVENTS.forEach((evt) => {
      expect(evt.id).toBeDefined();
      expect(evt.title.length).toBeGreaterThan(5);
      expect(evt.slug.length).toBeGreaterThan(3);
      expect(evt.categorySlug).toBeDefined();
      expect(evt.format).toMatch(/^(in-person|online|hybrid)$/);
      expect(evt.costType).toMatch(/^(free|paid|scholarship-available|deposit-refundable)$/);
      expect(evt.startDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(evt.endDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(evt.organiser.name).toBeDefined();
      expect(evt.moderation.status).toBe('live');
      expect(evt.moderation.editorialApproved).toBe(true);
    });
  });

  it('should have a rich category taxonomy across all 4 pillars', () => {
    expect(EVENT_CATEGORIES.length).toBeGreaterThanOrEqual(15);

    const pillars = new Set(EVENT_CATEGORIES.map((c) => c.group));
    expect(pillars.has('careers')).toBe(true);
    expect(pillars.has('learning')).toBe(true);
    expect(pillars.has('education')).toBe(true);
    expect(pillars.has('entrepreneurship')).toBe(true);
  });

  it('should filter events correctly by keyword search', () => {
    const results = filterEvents(SEED_EVENTS, { searchQuery: 'Clean Energy' });
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((e) => e.title.includes('Clean Energy'))).toBe(true);
  });

  it('should filter events by category slug', () => {
    const results = filterEvents(SEED_EVENTS, { categorySlug: 'apprenticeships' });
    expect(results.length).toBeGreaterThan(0);
    results.forEach((e) => {
      expect(e.categorySlug).toBe('apprenticeships');
    });
  });

  it('should filter events by format (online only)', () => {
    const results = filterEvents(SEED_EVENTS, { where: 'online' });
    expect(results.length).toBeGreaterThan(0);
    results.forEach((e) => {
      expect(e.format === 'online' || e.format === 'hybrid').toBe(true);
    });
  });

  it('should filter events by sector', () => {
    const results = filterEvents(SEED_EVENTS, { sectors: ['Technology & Software'] });
    expect(results.length).toBeGreaterThan(0);
    results.forEach((e) => {
      expect(e.sectors).toContain('Technology & Software');
    });
  });

  it('should filter under-18 friendly events', () => {
    const results = filterEvents(SEED_EVENTS, { under18FriendlyOnly: true });
    expect(results.length).toBeGreaterThan(0);
    results.forEach((e) => {
      expect(e.ageSuitability === 'suitable-for-under-18s' || e.ageSuitability === 'parent-guardian-permitted').toBe(true);
    });
  });

  it('should format date and time strings accurately', () => {
    const formattedDate = formatEventDate('2026-09-24');
    expect(formattedDate).toContain('2026');
    expect(formattedDate).toContain('Sep');

    const formattedTime = formatEventTime('10:00', '16:00', 'Europe/London');
    expect(formattedTime).toContain('10:00 – 16:00');
    expect(formattedTime).toContain('London');
  });

  it('should retrieve category and event by slug', () => {
    const cat = getCategoryBySlug('career-fairs');
    expect(cat).toBeDefined();
    expect(cat?.name).toBe('Career Fairs');

    const evt = getEventBySlug('national-green-energy-apprenticeship-fair-2026');
    expect(evt).toBeDefined();
    expect(evt?.id).toBe('evt-green-energy-apprenticeship-fair-2026');
  });
});
