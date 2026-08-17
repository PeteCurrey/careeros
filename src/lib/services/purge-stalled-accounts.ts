import { Profile } from "@/types/platform/identity";

export interface PurgeEvaluationResult {
  scheduledForPurge: string[];
  purgedAndDeleted: string[];
}

export interface StalledAccountRecord {
  id: string;
  status: string;
  created_at: string;
  purge_scheduled_at?: string | null;
}

/**
 * Purge Stalled Accounts Service (Phase 0)
 * 
 * Spec 3.1 Requirements:
 * - If PENDING_GUARDIAN_CONSENT account age > 30 days and no purge scheduled:
 *   Transition status to PURGE_SCHEDULED with grace period (purge_scheduled_at = now + 7 days).
 * - If status is PURGE_SCHEDULED and purge_scheduled_at <= now:
 *   Hard delete profile and associated records.
 */
export function evaluateStalledAccounts(
  records: StalledAccountRecord[],
  referenceTime: Date = new Date()
): PurgeEvaluationResult {
  const scheduledForPurge: string[] = [];
  const purgedAndDeleted: string[] = [];

  const thirtyDaysMs = 30 * 24 * 60 * 60 * 1000;
  const nowMs = referenceTime.getTime();

  for (const record of records) {
    const createdAtMs = new Date(record.created_at).getTime();
    const ageMs = nowMs - createdAtMs;

    // Hard deletion check
    if (record.status === "PURGE_SCHEDULED" && record.purge_scheduled_at) {
      const purgeAtMs = new Date(record.purge_scheduled_at).getTime();
      if (purgeAtMs <= nowMs) {
        purgedAndDeleted.push(record.id);
        continue;
      }
    }

    // Scheduling check
    if (
      record.status === "PENDING_GUARDIAN_CONSENT" &&
      ageMs >= thirtyDaysMs &&
      !record.purge_scheduled_at
    ) {
      scheduledForPurge.push(record.id);
    }
  }

  return {
    scheduledForPurge,
    purgedAndDeleted,
  };
}
