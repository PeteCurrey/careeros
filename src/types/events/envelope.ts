/**
 * Career OS Event Envelope
 * 
 * All domain events follow this contract.
 * An outbox/event bus architecture can be introduced cleanly later
 * because all events share this stable envelope.
 */

export interface CareerOSEvent<TPayload = unknown> {
  /** UUID */
  event_id: string;
  
  /** Namespaced event type — e.g. 'consent.granted', 'workspace.member_added' */
  event_type: string;
  
  /** Semantic version of this event's payload schema */
  schema_version: string;
  
  /** When this event occurred (ISO 8601) */
  occurred_at: string;
  
  /** Who or what caused this event */
  actor_type: 'USER' | 'SYSTEM' | 'AI_AGENT' | 'ADMIN' | 'EMPLOYER' | 'SCHOOL' | 'API';
  actor_id: string;
  
  /** What was acted upon */
  subject_type: string;
  subject_id: string;
  
  /** Context */
  workspace_id: string | null;
  organisation_id: string | null;
  
  /** Links related / causal events */
  correlation_id: string | null;
  causation_id: string | null;
  
  /** Jurisdiction at time of event */
  jurisdiction: string | null;
  
  /** Event-specific data */
  payload: TPayload;
}

/** Known platform event types */
export const PLATFORM_EVENT_TYPES = {
  // Consent
  CONSENT_GRANTED: 'consent.granted',
  CONSENT_UPDATED: 'consent.updated',
  CONSENT_WITHDRAWN: 'consent.withdrawn',
  CONSENT_EXPIRED: 'consent.expired',
  
  // Workspace
  WORKSPACE_MEMBER_ADDED: 'workspace.member_added',
  WORKSPACE_MEMBER_REMOVED: 'workspace.member_removed',
  WORKSPACE_CREATED: 'workspace.created',
  
  // Data access
  ACCESS_GRANT_CREATED: 'access_grant.created',
  ACCESS_GRANT_REVOKED: 'access_grant.revoked',
  ACCESS_GRANT_EXPIRED: 'access_grant.expired',
  
  // Auth
  PROFILE_CREATED: 'profile.created',
  IDENTITY_ADDED: 'identity.added',
  SESSION_STARTED: 'session.started',
  SESSION_ENDED: 'session.ended',
  
  // Policy
  POLICY_ACCEPTED: 'policy.accepted',
  
  // Future Career OS domain events (placeholder references)
  CAREER_PROFILE_UPDATED: 'career_profile.updated',
  SKILL_VERIFIED: 'skill.verified',
  GOAL_CREATED: 'goal.created',
  EVIDENCE_ADDED: 'evidence.added',
  QUALIFICATION_COMPLETED: 'qualification.completed',
  OPPORTUNITY_DISCOVERED: 'opportunity.discovered',
  OPPORTUNITY_MATCHED: 'opportunity.matched',
  EMPLOYER_INTEREST: 'employer.interest',
  MENTOR_INTERVENTION: 'mentor.intervention',
  CAREER_TRANSITION: 'career.transition',
  PASSPORT_UPDATED: 'passport.updated',
} as const;

export type PlatformEventType = (typeof PLATFORM_EVENT_TYPES)[keyof typeof PLATFORM_EVENT_TYPES];
