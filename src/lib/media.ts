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
      src: '/media/hero/mentor_team_hero.jpg',
      alt: 'Career OS Multidisciplinary Mentor Team representing engineering, executive leadership, skilled trades, healthcare, and technology',
      width: 1920,
      height: 1080,
      caption: 'The Career OS multidisciplinary mentor ecosystem.',
    },
  },
  mentors: {
    marcus: {
      src: '/media/mentors/mentor_marcus.jpg',
      alt: 'Marcus Thorne — Senior Technology & Engineering Leadership Mentor',
      width: 1200,
      height: 900,
      caption: 'Marcus Thorne — System-assigned Technology Leadership Mentor',
    },
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
    employers: {
      src: '/media/employers/audience_employers.jpg',
      alt: 'Modern hiring team reviewing candidate project evidence and talent fit in an architectural boardroom',
      width: 1920,
      height: 1080,
      caption: 'Responsible talent discovery based on demonstrated evidence, not keyword filtering.',
    },
  },
} as const;
