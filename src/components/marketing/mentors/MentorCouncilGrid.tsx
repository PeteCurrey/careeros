'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MENTOR_LIST } from '@/content/mentors/mentorRegistry';
import { TechnicalBadge } from '@/components/brand/TechnicalBadge';
import { Bot, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function MentorCouncilGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {MENTOR_LIST.map((mentor) => (
        <Link
          key={mentor.id}
          href={`/mentors/${mentor.slug}`}
          className="group relative bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[#2F8FFF]/40 rounded-[var(--radius-card)] overflow-hidden transition-all duration-300 flex flex-col justify-between hover-lift shadow-subtle"
        >
          {/* Portrait Container */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-surface-base)] border-b border-[var(--color-border-default)]">
            <Image
              src={mentor.portraitSrc}
              alt={mentor.portraitAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-raised)] via-transparent to-transparent opacity-80" />

            {/* AI Disclosure Badge */}
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[9px] font-mono font-semibold uppercase tracking-wider text-[var(--color-lavender-light)] bg-black/60 backdrop-blur-md rounded-[var(--radius-sm)] border border-[var(--color-lavender-base)]/30">
                <Bot className="w-3 h-3 text-[var(--color-lavender-base)]" />
                <span>AI Persona</span>
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-medium text-[var(--color-taupe-300)] uppercase tracking-wider line-clamp-1">
                  {mentor.domainShort}
                </span>
                <TechnicalBadge variant={mentor.colorVariant === 'lilac' ? 'lavender' : mentor.colorVariant === 'gold' ? 'champagne' : 'blue'}>
                  System-Assigned
                </TechnicalBadge>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-[#6BB8FF] transition-colors">
                {mentor.name}
              </h3>

              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed line-clamp-3">
                {mentor.cardDescription}
              </p>
            </div>

            {/* Specialist Tags */}
            <div className="space-y-3 pt-2 border-t border-[var(--color-border-subtle)]">
              <div className="flex flex-wrap gap-1.5">
                {mentor.specialistAreas.slice(0, 2).map((area) => (
                  <span
                    key={area}
                    className="text-[10px] font-mono text-[var(--color-text-tertiary)] bg-white/5 px-2 py-0.5 rounded-[var(--radius-sm)] border border-white/5 line-clamp-1"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-[#6BB8FF] group-hover:text-white transition-colors pt-1">
                <span>View mentor profile</span>
                <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
