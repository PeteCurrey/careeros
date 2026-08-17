import { describe, it, expect } from "vitest";
import { evaluateStalledAccounts, StalledAccountRecord } from "@/lib/services/purge-stalled-accounts";

describe("Phase 0 Purge Cron for Stalled Pending Accounts", () => {
  const now = new Date("2026-08-17T00:00:00Z");

  it("does not schedule accounts for purge if pending for less than 30 days", () => {
    const records: StalledAccountRecord[] = [
      {
        id: "acc-10-days-old",
        status: "PENDING_GUARDIAN_CONSENT",
        created_at: "2026-08-07T00:00:00Z", // 10 days old
      },
    ];

    const result = evaluateStalledAccounts(records, now);
    expect(result.scheduledForPurge).toHaveLength(0);
    expect(result.purgedAndDeleted).toHaveLength(0);
  });

  it("schedules pending accounts for purge if stalled for >30 days", () => {
    const records: StalledAccountRecord[] = [
      {
        id: "acc-35-days-old",
        status: "PENDING_GUARDIAN_CONSENT",
        created_at: "2026-07-10T00:00:00Z", // 38 days old
      },
    ];

    const result = evaluateStalledAccounts(records, now);
    expect(result.scheduledForPurge).toContain("acc-35-days-old");
    expect(result.purgedAndDeleted).toHaveLength(0);
  });

  it("hard deletes accounts with PURGE_SCHEDULED whose grace period has expired", () => {
    const records: StalledAccountRecord[] = [
      {
        id: "acc-expired-grace",
        status: "PURGE_SCHEDULED",
        created_at: "2026-06-01T00:00:00Z",
        purge_scheduled_at: "2026-08-15T00:00:00Z", // Expired 2 days ago
      },
      {
        id: "acc-active-grace",
        status: "PURGE_SCHEDULED",
        created_at: "2026-07-01T00:00:00Z",
        purge_scheduled_at: "2026-08-20T00:00:00Z", // Grace ends in 3 days
      },
    ];

    const result = evaluateStalledAccounts(records, now);
    expect(result.purgedAndDeleted).toContain("acc-expired-grace");
    expect(result.purgedAndDeleted).not.toContain("acc-active-grace");
  });
});
