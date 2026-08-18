export type MentorWelcomeAnalyticsEvent =
  | "mentor_welcome_started"
  | "mentor_welcome_completed"
  | "mentor_welcome_skipped"
  | "mentor_welcome_audio_enabled"
  | "mentor_welcome_disabled";

export interface MentorWelcomeEventMetadata {
  mentorId?: string;
  isFirstEver?: boolean;
  durationSeconds?: number;
  mode?: "CINEMATIC" | "SUBTLE" | "OFF";
  generationSource?: string;
}

/**
 * Dispatches non-sensitive behavioral analytics for the Mentor Opening Sequence.
 * Explicitly forbids logging private user names, daily mentor lines, or career twin data.
 */
export function trackMentorWelcomeEvent(
  eventName: MentorWelcomeAnalyticsEvent,
  metadata: MentorWelcomeEventMetadata = {}
): void {
  const sanitizedPayload = {
    event: eventName,
    mentorId: metadata.mentorId,
    isFirstEver: metadata.isFirstEver,
    durationSeconds: metadata.durationSeconds,
    mode: metadata.mode,
    generationSource: metadata.generationSource,
    timestamp: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    try {
      // Dispatch browser custom event for internal telemetry listeners
      const customEvent = new CustomEvent("career_os_telemetry", {
        detail: sanitizedPayload,
      });
      window.dispatchEvent(customEvent);

      // In development, log to console for debugging
      if (process.env.NODE_ENV === "development") {
        // eslint-disable-next-line no-console
        console.debug(`[Telemetry] ${eventName}`, sanitizedPayload);
      }
    } catch {
      // Silently prevent tracking exceptions from impacting UI
    }
  }
}
