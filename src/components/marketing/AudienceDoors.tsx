import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

/**
 * The routing moment.
 *
 * Career OS serves four audiences whose questions barely overlap, and the
 * homepage previously tried to answer all four in sequence. This routes
 * instead: four equal doors, high on the page, each one a situation a visitor
 * recognises rather than a segment they have to identify with. Nobody thinks
 * of themselves as "Students & Early Careers" — they think "I'm working out
 * what comes next."
 *
 * At rest all four sit at the same weight, so the choice reads as a real one.
 * Nothing dims until the visitor moves onto a door.
 */

interface Door {
  id: string;
  /** First person, present tense — the sentence a visitor recognises. */
  situation: string;
  body: string;
  label: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

const DOORS: Door[] = [
  {
    id: 'students',
    situation: "I'm working out what comes next.",
    body: 'College, trades, apprenticeships, work. See where each one actually leads — and start building proof before anyone asks for it.',
    label: 'Students & school',
    href: ROUTES.FOR_STUDENTS,
    imageSrc: '/media/students/audience_students.jpg',
    imageAlt: 'Students working together on a technical prototype in a school workshop',
  },
  {
    id: 'professionals',
    situation: 'I want to move, not just stay.',
    body: "See the roles your capability already reaches, and exactly what would close the gap to the ones it doesn't.",
    label: 'Working professionals',
    href: ROUTES.FOR_PROFESSIONALS,
    imageSrc: '/media/professionals/audience_professionals.jpg',
    imageAlt: 'A professional reviewing work at a desk in a modern workplace',
  },
  {
    id: 'schools',
    situation: "I'm accountable for outcomes.",
    body: "Give every counselor the context they'd have if they had time for all 400 students.",
    label: 'Schools & districts',
    href: ROUTES.FOR_HIGH_SCHOOLS,
    imageSrc: '/media/schools/audience_schools.jpg',
    imageAlt: 'An educator working with students in a high school classroom',
  },
  {
    id: 'employers',
    situation: 'I need people who can do the work.',
    body: 'Hire on demonstrated capability, not on whether someone already held the title.',
    label: 'Employers',
    href: ROUTES.FOR_EMPLOYERS,
    imageSrc: '/media/employers/audience_employers.jpg',
    imageAlt: 'A team at work in an industrial engineering environment',
  },
];

export function AudienceDoors() {
  return (
    <section
      aria-labelledby="audience-doors-heading"
      className="w-full bg-[var(--color-surface-base)] pb-px"
    >
      <div className="container-editorial pt-[clamp(4rem,7vw,7rem)] pb-[clamp(2rem,3.5vw,3rem)]">
        <div className="max-w-3xl flex flex-col gap-4">
          <span className="section-label">Four ways in</span>
          <h2
            id="audience-doors-heading"
            className="text-display-section"
          >
            One system underneath.
          </h2>
          <p className="text-lead max-w-2xl">
            Career OS works the same way whoever you are. Where you start is the
            only thing that changes.
          </p>
        </div>
      </div>

      {/*
        A one-column stack on phones where every door is fully readable, four
        columns from lg up where they read as a single choice.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border-default)]">
        {DOORS.map((door) => (
          <Link
            key={door.id}
            href={door.href}
            aria-label={`${door.label} — ${door.situation}`}
            className="group relative isolate flex min-h-[22rem] lg:min-h-[38rem] flex-col justify-end overflow-hidden bg-[var(--color-surface-sunken)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--accent-blue)]"
          >
            <Image
              src={door.imageSrc}
              alt={door.imageAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="
                object-cover object-center -z-10
                brightness-[0.62] contrast-[1.04] saturate-[0.92]
                transition-[filter,transform] duration-[var(--duration-deliberate)] ease-[var(--ease-career)]
                will-change-transform
                group-hover:brightness-[0.84] group-hover:saturate-100 group-hover:scale-[1.04]
                group-focus:brightness-[0.84] group-focus:scale-[1.04]
              "
            />

            {/* Grounds the type without flattening the photograph. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-gradient-to-b from-[color-mix(in_srgb,var(--color-surface-sunken)_6%,transparent)] via-[color-mix(in_srgb,var(--color-surface-sunken)_42%,transparent)] to-[color-mix(in_srgb,var(--color-surface-sunken)_93%,transparent)]"
            />

            <div className="relative flex flex-col gap-3.5 p-7 sm:p-8">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-white/45 transition-[width,background-color] duration-[var(--duration-settled)] ease-[var(--ease-career)] group-hover:w-[4.25rem] group-hover:bg-[var(--accent-blue)] group-focus:w-[4.25rem] group-focus:bg-[var(--accent-blue)]"
              />

              <p className="text-[1.4rem] sm:text-[1.5rem] font-light leading-[1.22] tracking-[-0.02em] text-balance text-[var(--color-text-primary)]">
                {door.situation}
              </p>

              {/*
                Always readable on touch, where there is no hover to reveal it.
                From lg up it opens on hover or keyboard focus.
              */}
              <p
                className="
                  text-sm leading-relaxed text-[var(--color-text-secondary)]
                  lg:max-h-0 lg:opacity-0 lg:overflow-hidden
                  lg:transition-[max-height,opacity] lg:duration-[var(--duration-settled)] lg:ease-[var(--ease-career)]
                  lg:group-hover:max-h-32 lg:group-hover:opacity-100
                  lg:group-focus:max-h-32 lg:group-focus:opacity-100
                "
              >
                {door.body}
              </p>

              <span className="flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.07em] text-[var(--color-taupe-300)]">
                {door.label}
                <svg
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent-blue)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-[var(--duration-settled)] ease-[var(--ease-career)] group-hover:translate-x-1 group-focus:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
