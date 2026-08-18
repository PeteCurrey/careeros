/**
 * Privacy-Preserving Product Telemetry Events
 * 
 * Tracks operational usage without transmitting private career contents or sensitive PII.
 */

export type ProductEventType =
  | "today_viewed"
  | "career_brief_viewed"
  | "next_action_started"
  | "next_action_completed"
  | "recommendation_explanation_opened"
  | "mentor_context_handoff"
  | "signal_opened"
  | "recommendation_dismissed";

export interface ProductTelemetryEvent {
  eventType: ProductEventType;
  userId: string;
  timestamp: string;
  metadata?: {
    recommendationId?: string;
    category?: string;
    mentorId?: string;
    sourceScreen?: string;
    actionType?: string;
    hasWhyThisOpened?: boolean;
    itemCount?: number;
  };
}
