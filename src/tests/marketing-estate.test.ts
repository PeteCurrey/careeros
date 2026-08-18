import { describe, it, expect } from "vitest";
import { MENTOR_REGISTRY, MENTOR_LIST } from "@/content/mentors/mentorRegistry";
import { SUBPROCESSORS_REGISTRY } from "@/lib/subprocessors/registry";
import { DATA_RETENTION_SCHEDULE } from "@/lib/retention/schedule";
import { PUBLIC_INDEXABLE_ROUTES } from "@/lib/seo/sitemap-manifest";

describe("Public Marketing Estate Registries", () => {
  it("has exactly 8 domain AI mentor personas in registry", () => {
    expect(MENTOR_LIST).toHaveLength(8);
    expect(Object.keys(MENTOR_REGISTRY)).toContain("marcus-thorne");
    expect(Object.keys(MENTOR_REGISTRY)).toContain("amara-osei");
    expect(Object.keys(MENTOR_REGISTRY)).toContain("callum-reid");
    expect(Object.keys(MENTOR_REGISTRY)).toContain("priya-chakraborty");
    expect(Object.keys(MENTOR_REGISTRY)).toContain("isabelle-fontaine");
    expect(Object.keys(MENTOR_REGISTRY)).toContain("jordan-park");
    expect(Object.keys(MENTOR_REGISTRY)).toContain("darnell-hayes");
    expect(Object.keys(MENTOR_REGISTRY)).toContain("rosa-mbeki");
  });

  it("every mentor is strictly disclosed as an AI Persona", () => {
    MENTOR_LIST.forEach((m) => {
      expect(m.aiDisclosure).toBe("AI Career Mentor Persona");
      expect(m.boundaries.length).toBeGreaterThanOrEqual(3);
      expect(m.specialistAreas.length).toBeGreaterThanOrEqual(3);
    });
  });

  it("subprocessors registry contains all 5 verified cloud providers", () => {
    expect(SUBPROCESSORS_REGISTRY).toHaveLength(5);
    const names = SUBPROCESSORS_REGISTRY.map((s) => s.name);
    expect(names).toContain("Supabase Inc.");
    expect(names).toContain("Vercel Inc.");
    expect(names).toContain("Google Cloud Platform (Alphabet Inc.)");
    expect(names).toContain("OpenAI OpCo LLC");
    expect(names).toContain("Anthropic PBC");
  });

  it("retention schedule contains all 7 core data categories", () => {
    expect(DATA_RETENTION_SCHEDULE).toHaveLength(7);
  });

  it("sitemap manifest has comprehensive public route coverage", () => {
    expect(PUBLIC_INDEXABLE_ROUTES.length).toBeGreaterThan(60);
    const paths = PUBLIC_INDEXABLE_ROUTES.map((r) => r.path);
    expect(paths).toContain("/mentors");
    expect(paths).toContain("/mentors/marcus-thorne");
    expect(paths).toContain("/company");
    expect(paths).toContain("/company/mission");
    expect(paths).toContain("/company/press");
    expect(paths).toContain("/company/careers");
    expect(paths).toContain("/contact/partnerships");
    expect(paths).toContain("/support/report-data");
    expect(paths).toContain("/legal/subprocessors");
    expect(paths).toContain("/legal/data-retention");
    expect(paths).toContain("/legal/version-history");
    expect(paths).toContain("/regulatory/student-assessments");
    expect(paths).toContain("/regulatory/fcra-and-employment-reports");
    expect(paths).toContain("/regulatory/state-privacy");
  });
});
