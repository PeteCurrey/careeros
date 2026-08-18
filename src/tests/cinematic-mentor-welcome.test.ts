import { describe, it, expect, beforeEach } from 'vitest';
import { DailyMentorWelcomeService } from '@/lib/mentors/daily-welcome-service';
import { getMentorCanonicalEnvironment, MENTOR_ENVIRONMENTS } from '@/lib/mentors/environments';
import { DailyMentorWelcomeSchema } from '@/types/platform/mentor-welcome';
import { CareerTwin, CareerPassport } from '@/types/platform/intelligence';
import { CareerObjective } from '@/types/platform/mentors';

describe('Cinematic Mentor Opening Sequence & Daily Welcome Service', () => {
  const userId = 'usr_test_welcome_001';
  const todayStr = '2026-08-18';

  beforeEach(() => {
    // Reset state for deterministic tests
  });

  describe('Time of Day Greetings', () => {
    it('generates morning greeting for 08:00', () => {
      const { greeting, period } = DailyMentorWelcomeService.getTimeOfDayGreeting('Pete', 8);
      expect(greeting).toBe('Good morning, Pete.');
      expect(period).toBe('morning');
    });

    it('generates afternoon greeting for 14:00', () => {
      const { greeting, period } = DailyMentorWelcomeService.getTimeOfDayGreeting('Pete', 14);
      expect(greeting).toBe('Good afternoon, Pete.');
      expect(period).toBe('afternoon');
    });

    it('generates evening greeting for 20:00', () => {
      const { greeting, period } = DailyMentorWelcomeService.getTimeOfDayGreeting('Pete', 20);
      expect(greeting).toBe('Good evening, Pete.');
      expect(period).toBe('evening');
    });

    it('handles empty or blank first names cleanly without crashing', () => {
      const { greeting } = DailyMentorWelcomeService.getTimeOfDayGreeting('', 10);
      expect(greeting).toBe('Good morning, there.');
    });
  });

  describe('Canonical Mentor Environments', () => {
    it('returns approved environments for all 8 canonical mentors', () => {
      const mentorIds = [
        'marcus-thorne',
        'amara-osei',
        'callum-reid',
        'priya-chakraborty',
        'isabelle-fontaine',
        'jordan-park',
        'darnell-hayes',
        'rosa-mbeki',
      ];

      mentorIds.forEach((id) => {
        const env = getMentorCanonicalEnvironment(id);
        expect(env).toBeDefined();
        expect(env.name).toBeTruthy();
        expect(env.backgroundSrc).toBeTruthy();
        expect(env.ambientDescription).toBeTruthy();
        expect(env.lightingTone).toBeTruthy();
      });
    });

    it('falls back gracefully to technology studio for unknown mentor IDs', () => {
      const env = getMentorCanonicalEnvironment('unknown-persona');
      expect(env.mentorId).toBe('marcus-thorne');
    });
  });

  describe('Daily Mentor Line Generation & Grounding', () => {
    it('generates signature first-ever activation line post-onboarding', () => {
      const twin: CareerTwin = {
        id: 'twin_01',
        userId,
        version: 1,
        status: 'ACTIVE',
        summary: 'Software engineer aiming for Staff Architect',
        careerStage: 'EXPERIENCED_PROFESSIONAL',
        experienceThemes: ['Backend Systems'],
        capabilities: [{ name: 'Distributed Systems', level: 'Demonstrated', evidenceSource: 'Resume' }],
        insights: [
          {
            category: 'STRENGTH',
            title: 'Goal',
            description: 'Primary focus established on "Staff Engineering Transition".',
            sourceReferences: ['Goals'],
            confidence: 'STRONG_EVIDENCE',
          },
        ],
        generatedAt: new Date().toISOString(),
        inputHash: 'hash123',
      };

      const welcome = DailyMentorWelcomeService.buildDailyMentorWelcome({
        userId: 'usr_first_ever_01',
        userFirstName: 'Pete',
        mentorId: 'marcus-thorne',
        localDate: todayStr,
        careerTwin: twin,
        isFirstEver: true,
      });

      expect(welcome.isFirstEver).toBe(true);
      expect(welcome.dailyLine).toContain("Let's make your capability compound.");
      expect(welcome.nextMoveTitle).toBe('Explore Your Grounded Career Twin');
      expect(DailyMentorWelcomeSchema.safeParse(welcome).success).toBe(true);
    });

    it('grounds line in active uncompleted milestone when Career Objective exists', () => {
      const objective: CareerObjective = {
        id: 'obj_01',
        userId: 'usr_objective_user',
        title: 'Staff Engineer Promotion',
        description: 'Prepare cross-team architecture RFC',
        horizonDays: 180,
        status: 'ACTIVE',
        milestones: [
          {
            id: 'm1',
            title: 'Lead Multi-Pod Architecture RFC',
            description: 'Publish distributed queuing RFC and document metrics',
            isCompleted: false,
            order: 1,
          },
        ],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const welcome = DailyMentorWelcomeService.buildDailyMentorWelcome({
        userId: 'usr_objective_user',
        userFirstName: 'Elena',
        mentorId: 'marcus-thorne',
        localDate: todayStr,
        careerObjective: objective,
        isFirstEver: false,
      });

      expect(welcome.generationSource).toBe('OBJECTIVE_GROUNDED');
      expect(welcome.dailyLine).toContain('Lead Multi-Pod Architecture RFC');
      expect(welcome.nextMoveTitle).toBe('Lead Multi-Pod Architecture RFC');
      expect(welcome.nextMoveType).toBe('OBJECTIVE');
      expect(DailyMentorWelcomeSchema.safeParse(welcome).success).toBe(true);
    });

    it('grounds line in unverified Career Passport entries when available', () => {
      const passport: CareerPassport = {
        id: 'pass_01',
        userId: 'usr_passport_user',
        lastUpdated: new Date().toISOString(),
        entries: [
          {
            id: 'pe_01',
            userId: 'usr_passport_user',
            category: 'PROJECT',
            title: 'SCADA Telemetry Migration',
            status: 'DECLARED',
            provenance: {
              provenance: 'USER_DECLARED',
              confidence: 0.8,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
          },
        ],
      };

      const welcome = DailyMentorWelcomeService.buildDailyMentorWelcome({
        userId: 'usr_passport_user',
        userFirstName: 'David',
        mentorId: 'callum-reid',
        localDate: todayStr,
        careerPassport: passport,
        isFirstEver: false,
      });

      expect(welcome.generationSource).toBe('PASSPORT_EVIDENCE');
      expect(welcome.dailyLine).toContain('SCADA Telemetry Migration');
      expect(welcome.nextMoveTitle).toContain('Document Evidence: SCADA Telemetry Migration');
      expect(welcome.nextMoveType).toBe('PASSPORT');
    });

    it('uses curated domain fallback with strict restraint when user context is minimal', () => {
      const welcome = DailyMentorWelcomeService.buildDailyMentorWelcome({
        userId: 'usr_fallback_user',
        userFirstName: 'Marcus',
        mentorId: 'priya-chakraborty',
        localDate: todayStr,
        isFirstEver: false,
      });

      expect(welcome.generationSource).toBe('EDITORIAL_CURATED_FALLBACK');
      expect(welcome.dailyLine.length).toBeGreaterThan(15);
      // Ensure language adheres to strict restraint rules:
      expect(welcome.dailyLine).not.toContain('!');
      expect(welcome.dailyLine).not.toContain('smash');
      expect(welcome.dailyLine).not.toContain('crush');
      expect(welcome.dailyLine).not.toContain('dream');
      expect(welcome.dailyLine.split(' ').length).toBeLessThanOrEqual(22);
    });
  });

  describe('Caching & Daily State Management', () => {
    it('caches and returns identical welcome for subsequent requests on the same local date', () => {
      const firstCall = DailyMentorWelcomeService.buildDailyMentorWelcome({
        userId: 'usr_cached_user',
        userFirstName: 'Pete',
        mentorId: 'marcus-thorne',
        localDate: '2026-08-19',
      });

      const secondCall = DailyMentorWelcomeService.buildDailyMentorWelcome({
        userId: 'usr_cached_user',
        userFirstName: 'Pete',
        mentorId: 'marcus-thorne',
        localDate: '2026-08-19',
      });

      expect(firstCall.id).toBe(secondCall.id);
      expect(firstCall.contextHash).toBe(secondCall.contextHash);
      expect(firstCall.generatedAt).toBe(secondCall.generatedAt);
    });

    it('tracks played and skipped actions correctly', () => {
      const uId = 'usr_play_test';
      const dStr = '2026-08-20';

      DailyMentorWelcomeService.buildDailyMentorWelcome({
        userId: uId,
        localDate: dStr,
      });

      expect(DailyMentorWelcomeService.hasPlayedToday(uId, dStr)).toBe(false);

      DailyMentorWelcomeService.markPlayed(uId, dStr);
      expect(DailyMentorWelcomeService.hasPlayedToday(uId, dStr)).toBe(true);
    });

    it('tracks skipped action correctly', () => {
      const uId = 'usr_skip_test';
      const dStr = '2026-08-21';

      DailyMentorWelcomeService.buildDailyMentorWelcome({
        userId: uId,
        localDate: dStr,
      });

      expect(DailyMentorWelcomeService.hasPlayedToday(uId, dStr)).toBe(false);

      DailyMentorWelcomeService.markSkipped(uId, dStr);
      expect(DailyMentorWelcomeService.hasPlayedToday(uId, dStr)).toBe(true);
    });
  });
});
