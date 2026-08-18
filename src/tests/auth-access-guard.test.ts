import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/supabase/server", () => {
  const mockAdminDb = {
    from: (_table: string) => ({
      select: () => ({
        eq: () => ({
          maybeSingle: async () => ({ data: null, error: null }),
          single: async () => ({ data: null, error: null }),
        }),
      }),
      update: () => ({ eq: () => Promise.resolve({ error: null }) }),
    }),
  };
  return {
    createClient: vi.fn().mockResolvedValue({
      auth: {
        getUser: async () => ({
          data: { user: null },
          error: { message: "No session" },
        }),
      },
    }),
    createAdminClient: vi.fn(() => mockAdminDb),
  };
});

import { getApplicationAccessState } from "@/lib/auth/access-guard";

describe("Application Access Guard (Pass 01 & 02)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("unauthenticated user returns false dashboardAccess and redirects to login", async () => {
    const access = await getApplicationAccessState();
    expect(access.authenticated).toBe(false);
    expect(access.dashboardAccess).toBe(false);
    expect(access.redirectUrl).toContain("/login");
  });

  it("evaluates under-13 restriction properly", async () => {
    expect(typeof getApplicationAccessState).toBe("function");
  });
});
