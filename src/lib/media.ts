/**
 * Central Media and Photography Asset Registry
 * Provides structured slots for all art-directed campaign photography,
 * illustrative models, and brand visuals.
 */

export interface MediaAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
  caption?: string;
  credit?: string;
}

export const MEDIA_ASSETS = {
  hero: {
    mentorTeam: {
      src: '/media/hero/hero_visionary_pathways.jpg',
      alt: 'Visionary illuminated metropolitan skyline with topological career pathway light streams and modern multidisciplinary leaders overlooking the horizon',
      width: 1920,
      height: 1080,
      caption: 'Career OS — Navigating modern career trajectories across interconnected industries.',
    },
    cityHorizon: {
      src: '/media/hero/city_horizon_hero.jpg',
      alt: 'Breathtaking panoramic metropolitan skyline overlooking the glowing sunset ocean horizon',
      width: 1920,
      height: 1080,
      caption: 'Career OS — Global career intelligence with expansive horizons.',
    },
    careerTwinHorizon: {
      src: '/media/hero/career_twin_horizon.jpg',
      alt: 'Expansive illuminated architectural sky bridges and transit pathways reaching toward an inspiring golden sunrise horizon, symbolizing forward career trajectories and future possibilities',
      width: 1920,
      height: 1080,
      caption: 'Career Twin — Revealing where your career could go.',
    },
  },
  product: {
    overview: {
      src: '/media/product/product_overview_hero.jpg',
      alt: 'Futuristic architectural civic engineering complex and digital command gallery overlooking interconnected global industry pavilions',
      width: 1920,
      height: 1080,
    },
    aiMentorCity: {
      src: '/media/product/ai_mentor_hero_city.jpg',
      alt: 'Expansive panoramic city skyline looking toward the sunset horizon',
      width: 1920,
      height: 1080,
    },
    careerTwinHorizon: {
      src: '/media/product/career_twin_horizon.jpg',
      alt: 'Expansive illuminated architectural sky bridges and transit pathways reaching toward an inspiring golden sunrise horizon',
      width: 1920,
      height: 1080,
    },
    careerPassport: {
      src: '/media/product/career_passport_hero.jpg',
      alt: 'Secure credential archive and physical-digital evidence vault with engineering portfolios and microchip certifications',
      width: 1920,
      height: 1080,
    },
    careerGraph: {
      src: '/media/product/career_graph_hero.jpg',
      alt: 'Multidimensional topological city grid and cross-industry transit networks illuminating interconnected career trajectories',
      width: 1920,
      height: 1080,
    },
    opportunityAgent: {
      src: '/media/product/opportunity_agent_hero.jpg',
      alt: 'Modern architectural observatory overlooking an illuminated metropolitan skyline with emerging career horizon beacons',
      width: 1920,
      height: 1080,
    },
    employerAgent: {
      src: '/media/product/employer_agent_hero.jpg',
      alt: 'Corporate talent strategy boardroom overlooking twilight city skyline with capability-based talent discovery displays',
      width: 1920,
      height: 1080,
    },
    howItWorks: {
      src: '/media/product/how_it_works_hero.jpg',
      alt: 'Multi-level civic innovation atrium with interlocking bridges, collaborative studios, and data galleries',
      width: 1920,
      height: 1080,
    },
  },
  mentors: {
    marcus: {
      src: '/media/mentors/mentor_marcus.jpg',
      alt: 'Marcus Thorne — AI Career Mentor in Technology & Engineering Leadership',
      width: 1200,
      height: 900,
      caption: 'Marcus Thorne — Technology & Engineering Leadership Specialization',
    },
  },
  aiAdvisor: {
    // Abstract AI advisor interface visual — not a human photograph
    src: '/media/ai/advisor_interface.png',
    alt: 'Career OS AI Mentor — abstract intelligence interface visualization',
    width: 1200,
    height: 900,
    caption: 'Career OS AI Mentor — evidence-grounded, always transparent',
  },
  audiences: {
    students: {
      src: '/media/students/audience_students.jpg',
      alt: 'Students collaborating on technical design prototype in a modern learning lab',
      width: 1920,
      height: 1080,
      caption: 'Discovery, verified capability, and first opportunities for students.',
    },
    professionals: {
      src: '/media/professionals/audience_professionals.jpg',
      alt: 'Professional leader contemplating strategic career trajectory in a contemporary workspace',
      width: 1920,
      height: 1080,
      caption: 'Progression, lateral pivots, and lifelong career compounding.',
    },
    schools: {
      src: '/media/schools/audience_schools.jpg',
      alt: 'Educator mentoring high school students exploring diverse technical and academic pathways',
      width: 1920,
      height: 1080,
      caption: 'Equal pathway discovery and student safeguarding for schools and districts.',
    },
    schoolPrivacy: {
      src: '/media/schools/school_privacy_architecture_hero.jpg',
      alt: 'Architectural interior with structured light patterns representing institutional privacy and safeguarding',
      width: 1920,
      height: 1080,
      caption: 'Built around student privacy and institutional safeguarding from the ground up.',
    },
    employers: {
      src: '/media/employers/audience_employers.jpg',
      alt: 'Modern hiring team reviewing candidate project evidence and talent fit in an architectural boardroom',
      width: 1920,
      height: 1080,
      caption: 'Responsible talent discovery based on demonstrated evidence, not keyword filtering.',
    },
  },
} as const;
