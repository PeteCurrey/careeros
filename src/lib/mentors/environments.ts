import { MentorCanonicalEnvironment } from "@/types/platform/mentor-welcome";

export const MENTOR_ENVIRONMENTS: Record<string, MentorCanonicalEnvironment> = {
  "marcus-thorne": {
    id: "env-tech-studio",
    mentorId: "marcus-thorne",
    name: "Systems Engineering & Design Studio",
    domain: "Technology & Engineering",
    backgroundSrc: "/media/hero/career_twin_horizon.jpg",
    ambientDescription: "Modern engineering atelier with glass architectural schematics, ambient slate daylight, and subtle telemetry monitors in soft focus.",
    lightingTone: "Cool Slate & Crisp Daylight",
    accentColor: "#2F8FFF",
  },
  "amara-osei": {
    id: "env-clinical-research",
    mentorId: "amara-osei",
    name: "Clinical Informatics & Research Laboratory",
    domain: "Healthcare & Life Sciences",
    backgroundSrc: "/media/professionals/audience_professionals.jpg",
    ambientDescription: "Calm, precision-lit clinical operations suite with contemporary medical glass panels, clean lines, and soft natural courtyard light.",
    lightingTone: "Clean Clinical White & Soft Lilac",
    accentColor: "#CDBBD2",
  },
  "callum-reid": {
    id: "env-trades-workshop",
    mentorId: "callum-reid",
    name: "Precision Systems & Advanced Manufacturing Workshop",
    domain: "Skilled Trades & Manufacturing",
    backgroundSrc: "/media/professionals/professional_pathways_collective.jpg",
    ambientDescription: "High-spec modern prototyping workshop with CNC tooling equipment, organized technical schematics, and warm directional workspace lighting.",
    lightingTone: "Warm Amber & Dark Graphite",
    accentColor: "#DDD36D",
  },
  "priya-chakraborty": {
    id: "env-finance-strategy",
    mentorId: "priya-chakraborty",
    name: "Executive Strategy & Capital Atelier",
    domain: "Finance & Strategy",
    backgroundSrc: "/media/professionals/professional_hero_intersection.jpg",
    ambientDescription: "Contemporary executive advisory suite with minimalist timber surfaces, panoramic architectural city framing, and restrained executive lighting.",
    lightingTone: "Rich Platinum & Warm Architectural Dusk",
    accentColor: "#DDD36D",
  },
  "elena-rostova": {
    id: "env-creative-studio",
    mentorId: "elena-rostova",
    name: "Product Design & Brand Architecture Studio",
    domain: "Creative & Brand Strategy",
    backgroundSrc: "/media/product/how_it_works_hero.jpg",
    ambientDescription: "Spacious architectural design pavilion with design system modular walls, physical material swatches, and diffused north-facing daylight.",
    lightingTone: "Soft Lilac & Studio White",
    accentColor: "#CDBBD2",
  },
  "sam-okoye": {
    id: "env-education-hub",
    mentorId: "sam-okoye",
    name: "Educational Innovation & Student Commons",
    domain: "Education & Public Sector",
    backgroundSrc: "/media/schools/audience_schools.jpg",
    ambientDescription: "Warm collaborative educational library with contemporary oak tables, pathway mapping displays, and bright inviting morning light.",
    lightingTone: "Warm Golden Sunlight & Forest Slate",
    accentColor: "#DDD36D",
  },
  "david-vance": {
    id: "env-command-suite",
    mentorId: "david-vance",
    name: "Mission Operations & Logistics Command Suite",
    domain: "Military & Emergency Leadership",
    backgroundSrc: "/media/product/product_overview_hero.jpg",
    ambientDescription: "Focused operational advisory suite overlooking calm horizon logistics infrastructure, disciplined clean workstations, and steady ambient illumination.",
    lightingTone: "Tactical Slate & Horizon Steel",
    accentColor: "#2F8FFF",
  },
  "rosa-mbeki": {
    id: "env-venture-studio",
    mentorId: "rosa-mbeki",
    name: "Venture Building & Enterprise Studio",
    domain: "Venture & Small Business",
    backgroundSrc: "/media/students/student_pathway_avatars.jpg",
    ambientDescription: "Dynamic commercialization workshop with product prototypes, customer journey canvas walls, and warm natural morning light.",
    lightingTone: "Warm Bronze & Focused Solar Amber",
    accentColor: "#DDD36D",
  },
};

export function getMentorCanonicalEnvironment(mentorId: string): MentorCanonicalEnvironment {
  const normalizedId = mentorId.replace(/^mentor-/, "");
  const fallback = MENTOR_ENVIRONMENTS["marcus-thorne"]!;
  return MENTOR_ENVIRONMENTS[normalizedId] || fallback;
}
