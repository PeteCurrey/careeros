'use client';

import { CareerEvent, EventReportSubmission, EventPreparationPlan, ModerationStatus } from '@/types/events/platform';
import { SEED_EVENTS } from './data';

const SAVED_EVENTS_KEY = 'career_os_saved_events';
const ATTENDANCE_INTENTS_KEY = 'career_os_attendance_intents';
const USER_SUBMISSIONS_KEY = 'career_os_user_event_submissions';
const EVENT_REPORTS_KEY = 'career_os_event_reports';
const PREPARATION_PLANS_KEY = 'career_os_event_prep_plans';
const ADMIN_MODERATION_OVERRIDES_KEY = 'career_os_moderation_overrides';

export type AttendanceIntent = 'interested' | 'attending' | null;

export interface ModerationOverride {
  eventId: string;
  status: ModerationStatus;
  reviewedBy: string;
  reviewedAt: string;
  notes: string;
  commercialApproved: boolean;
  editorialApproved: boolean;
}

/**
 * Get list of saved event IDs
 */
export function getSavedEventIds(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(SAVED_EVENTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Toggle saved status for an event ID
 */
export function toggleSaveEvent(eventId: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const current = getSavedEventIds();
    const exists = current.includes(eventId);
    const updated = exists ? current.filter((id) => id !== eventId) : [...current, eventId];
    localStorage.setItem(SAVED_EVENTS_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('career_os_events_saved_change', { detail: { eventId, isSaved: !exists } }));
    trackEventAction('event_saved', { eventId, saved: !exists });
    return !exists;
  } catch {
    return false;
  }
}

/**
 * Check if an event is saved
 */
export function isEventSaved(eventId: string): boolean {
  return getSavedEventIds().includes(eventId);
}

/**
 * Get user attendance intent for an event
 */
export function getAttendanceIntent(eventId: string): AttendanceIntent {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(ATTENDANCE_INTENTS_KEY);
    const map = raw ? JSON.parse(raw) : {};
    return map[eventId] || null;
  } catch {
    return null;
  }
}

/**
 * Set user attendance intent
 */
export function setAttendanceIntent(eventId: string, intent: AttendanceIntent): void {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(ATTENDANCE_INTENTS_KEY);
    const map = raw ? JSON.parse(raw) : {};
    if (intent === null) {
      delete map[eventId];
    } else {
      map[eventId] = intent;
    }
    localStorage.setItem(ATTENDANCE_INTENTS_KEY, JSON.stringify(map));
    window.dispatchEvent(new CustomEvent('career_os_attendance_change', { detail: { eventId, intent } }));
    trackEventAction('attendance_intent_updated', { eventId, intent });
  } catch {}
}

/**
 * Get all events (combining Seed Events + Local Submissions + Moderation Overrides)
 */
export function getAllEvents(): CareerEvent[] {
  if (typeof window === 'undefined') return SEED_EVENTS;
  try {
    // 1. Get user submissions
    const rawSubmissions = localStorage.getItem(USER_SUBMISSIONS_KEY);
    const submissions: CareerEvent[] = rawSubmissions ? JSON.parse(rawSubmissions) : [];

    // 2. Get moderation overrides
    const rawOverrides = localStorage.getItem(ADMIN_MODERATION_OVERRIDES_KEY);
    const overrides: Record<string, ModerationOverride> = rawOverrides ? JSON.parse(rawOverrides) : {};

    const all = [...SEED_EVENTS, ...submissions];

    return all.map((evt) => {
      const override = overrides[evt.id];
      if (override) {
        return {
          ...evt,
          moderation: {
            ...evt.moderation,
            status: override.status,
            reviewedAt: override.reviewedAt,
            reviewedBy: override.reviewedBy,
            reviewerNotes: override.notes,
            editorialApproved: override.editorialApproved,
            commercialApproved: override.commercialApproved,
          },
        };
      }
      return evt;
    });
  } catch {
    return SEED_EVENTS;
  }
}

/**
 * Submit an event into the organizer moderation queue
 */
export function submitEventToQueue(event: CareerEvent): void {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(USER_SUBMISSIONS_KEY);
    const current: CareerEvent[] = raw ? JSON.parse(raw) : [];
    const updated = [event, ...current.filter((e) => e.id !== event.id)];
    localStorage.setItem(USER_SUBMISSIONS_KEY, JSON.stringify(updated));
    trackEventAction('organiser_submitted_event', { eventId: event.id, title: event.title, tier: event.commercialTier });
  } catch {}
}

/**
 * Admin: Update moderation status of an event
 */
export function updateEventModerationStatus(
  eventId: string,
  status: ModerationStatus,
  reviewerNotes: string,
  reviewerName: string = 'Editorial Admin',
  editorialApproved: boolean = true,
  commercialApproved: boolean = true
): void {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(ADMIN_MODERATION_OVERRIDES_KEY);
    const map: Record<string, ModerationOverride> = raw ? JSON.parse(raw) : {};
    map[eventId] = {
      eventId,
      status,
      reviewedBy: reviewerName,
      reviewedAt: new Date().toISOString(),
      notes: reviewerNotes,
      editorialApproved,
      commercialApproved,
    };
    localStorage.setItem(ADMIN_MODERATION_OVERRIDES_KEY, JSON.stringify(map));
    window.dispatchEvent(new CustomEvent('career_os_moderation_updated', { detail: { eventId, status } }));
  } catch {}
}

/**
 * Report an event listing
 */
export function submitEventReport(report: Omit<EventReportSubmission, 'id' | 'reportedAt' | 'status'>): EventReportSubmission {
  const newReport: EventReportSubmission = {
    ...report,
    id: `rep-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    reportedAt: new Date().toISOString(),
    status: 'pending',
  };

  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(EVENT_REPORTS_KEY);
      const reports: EventReportSubmission[] = raw ? JSON.parse(raw) : [];
      reports.unshift(newReport);
      localStorage.setItem(EVENT_REPORTS_KEY, JSON.stringify(reports));
      trackEventAction('event_reported', { eventId: report.eventId, reason: report.reason });
    } catch {}
  }

  return newReport;
}

/**
 * Get all submitted event reports
 */
export function getEventReports(): EventReportSubmission[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(EVENT_REPORTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Get or create an AI Event Preparation plan
 */
export function getOrCreatePreparationPlan(event: CareerEvent): EventPreparationPlan {
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(PREPARATION_PLANS_KEY);
      const map: Record<string, EventPreparationPlan> = raw ? JSON.parse(raw) : {};
      const existingPlan = map[event.id];
      if (existingPlan) {
        return existingPlan as EventPreparationPlan;
      }
    } catch {}
  }

  // Generate structured preparation plan for this event
  const topEmployers = event.participatingOrganizations.slice(0, 3).map((p) => p.name);
  const primarySector = event.sectors[0] || 'your chosen sector';

  const defaultPlan: EventPreparationPlan = {
    eventId: event.id,
    eventTitle: event.title,
    generatedAt: new Date().toISOString(),
    elevatorPitch: `Hi, I'm developing my career in ${primarySector}. I've recently focused on building verified evidence in ${event.mockIntelligence?.targetedSkills.join(', ') || 'modern engineering and problem solving'}, and I'm interested in how your team structures early progression.`,
    questionsForEmployers: topEmployers.map((emp) => ({
      employerName: emp,
      question: `How does ${emp} evaluate early career potential beyond standard degrees, and what are the rotational options during the first 18 months?`,
      context: `Signals genuine curiosity about career progression and workplace culture at ${emp}.`,
    })),
    checklist: [
      { id: 'chk-1', task: 'Review participating employer open roles and rotational tracks', category: 'research', completed: false },
      { id: 'chk-2', task: 'Ensure Career Twin skills and portfolio evidence are up to date', category: 'cv', completed: false },
      { id: 'chk-3', task: 'Practice 30-second elevator pitch for recruiter introductions', category: 'cv', completed: false },
      { id: 'chk-4', task: 'Prepare 3 thoughtful questions for each target organization', category: 'questions', completed: false },
      { id: 'chk-5', task: 'Plan follow-up notes and connect on CareerOS within 24h of the event', category: 'follow-up', completed: false },
    ],
    networkingGoals: [
      `Introduce myself to at least 3 representatives from ${topEmployers.join(', ') || 'exhibiting teams'}`,
      'Obtain direct hiring contact email or fast-track referral link from 1 employer',
      'Take notes on key assessment center interview themes for post-event mentor review',
    ],
  };

  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(PREPARATION_PLANS_KEY);
      const map: Record<string, EventPreparationPlan> = raw ? JSON.parse(raw) : {};
      map[event.id] = defaultPlan;
      localStorage.setItem(PREPARATION_PLANS_KEY, JSON.stringify(map));
    } catch {}
  }

  return defaultPlan;
}

/**
 * Update a checklist item in an AI Preparation plan
 */
export function togglePreparationTask(eventId: string, taskId: string): void {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(PREPARATION_PLANS_KEY);
    const map: Record<string, EventPreparationPlan> = raw ? JSON.parse(raw) : {};
    const plan = map[eventId];
    if (plan) {
      plan.checklist = plan.checklist.map((item) => (item.id === taskId ? { ...item, completed: !item.completed } : item));
      localStorage.setItem(PREPARATION_PLANS_KEY, JSON.stringify(map));
      window.dispatchEvent(new CustomEvent('career_os_prep_plan_updated', { detail: { eventId } }));
    }
  } catch {}
}

/**
 * Telemetry and Event Tracking Hook
 */
export function trackEventAction(actionName: string, metadata: Record<string, unknown> = {}): void {
  // In production, this dispatches to CareerOS domain envelope
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    // console.info(`[CareerOS Telemetry] ${actionName}`, metadata);
  }
}
