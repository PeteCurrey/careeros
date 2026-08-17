'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { ArrowRight } from 'lucide-react';

interface InterestOption {
  id: string;
  label: string;
  shortLabel: string;
  careers: {
    title: string;
    environments: string[];
  }[];
  routes: string[];
}

const INTERESTS: InterestOption[] = [
  {
    id: 'fixing',
    label: 'I like fixing and building things',
    shortLabel: 'FIXING & BUILDING',
    careers: [
      {
        title: 'Automotive Technology',
        environments: ['Garage & workshop', 'Dealership service', 'Fleet maintenance'],
      },
      {
        title: 'Electrical Trades',
        environments: ['Residential & commercial installation', 'Industrial electrical', 'Renewable energy systems'],
      },
      {
        title: 'Field Engineering',
        environments: ['Telecoms infrastructure', 'Industrial plant', 'Technical support'],
      },
      {
        title: 'Aircraft Maintenance',
        environments: ['Commercial aviation', 'Military aviation', 'Private aviation'],
      },
      {
        title: 'Renewable Energy Engineering',
        environments: ['Wind & solar installation', 'Energy storage', 'Grid technology'],
      },
      {
        title: 'Technical Emergency Services',
        environments: ['Fire & rescue technical rescue', 'Specialist response teams', 'Search and rescue'],
      },
    ],
    routes: ['Apprenticeship', 'Technical college', 'Employer training scheme', 'Military technical route', 'University engineering (where applicable)'],
  },
  {
    id: 'helping',
    label: 'I like helping people',
    shortLabel: 'HELPING PEOPLE',
    careers: [
      {
        title: 'Nursing & Allied Health',
        environments: ['Hospital', 'Community care', 'Specialist clinical settings'],
      },
      {
        title: 'Paramedicine & Emergency Response',
        environments: ['Ambulance service', 'Critical care transport', 'Event medicine'],
      },
      {
        title: 'Social Work & Counselling',
        environments: ['Children & families', 'Adult social care', 'Mental health services'],
      },
      {
        title: 'Teaching & Education',
        environments: ['Schools', 'Further education', 'Specialist support'],
      },
      {
        title: 'Physiotherapy & Occupational Therapy',
        environments: ['Hospital', 'Private practice', 'Sports & rehabilitation'],
      },
      {
        title: 'Public Health & Policy',
        environments: ['Government agencies', 'NHS/healthcare systems', 'Charitable sector'],
      },
    ],
    routes: ['University degree', 'Degree apprenticeship', 'NHS apprenticeship routes', 'Foundation programmes', 'Vocational qualifications'],
  },
  {
    id: 'solving',
    label: 'I like solving complex problems',
    shortLabel: 'COMPLEX PROBLEM-SOLVING',
    careers: [
      {
        title: 'Engineering (Civil, Structural, Mechanical)',
        environments: ['Construction', 'Infrastructure', 'Consultancy'],
      },
      {
        title: 'Software & Technology',
        environments: ['Software engineering', 'Cybersecurity', 'Data science & AI'],
      },
      {
        title: 'Finance & Economics',
        environments: ['Banking & investment', 'Corporate finance', 'Economic analysis'],
      },
      {
        title: 'Law',
        environments: ['Commercial law', 'Criminal law', 'In-house corporate legal'],
      },
      {
        title: 'Architecture & Urban Design',
        environments: ['Architectural practice', 'Urban planning', 'Infrastructure design'],
      },
      {
        title: 'Science & Research',
        environments: ['Biomedical science', 'Environmental science', 'Materials science'],
      },
    ],
    routes: ['University degree', 'Degree apprenticeship', 'Professional qualification route', 'Direct employer training', 'Graduate scheme'],
  },
  {
    id: 'making',
    label: 'I like making and creating',
    shortLabel: 'MAKING & CREATING',
    careers: [
      {
        title: 'Design (Graphic, Product, UX)',
        environments: ['Agency', 'In-house studio', 'Freelance'],
      },
      {
        title: 'Architecture & Construction Design',
        environments: ['Architectural practice', 'Interior design', 'Structural design'],
      },
      {
        title: 'Digital Media & Film',
        environments: ['Broadcasting', 'Digital content', 'Games & animation'],
      },
      {
        title: 'Engineering & Prototyping',
        environments: ['Product development', 'Advanced manufacturing', 'Robotics'],
      },
      {
        title: 'Fashion & Textiles',
        environments: ['Fashion industry', 'Technical textiles', 'Costume & theatre'],
      },
      {
        title: 'Marketing & Creative Strategy',
        environments: ['Agency', 'In-house brand', 'Startups'],
      },
    ],
    routes: ['University degree', 'Art & design college', 'Apprenticeship', 'Portfolio route', 'Freelance & self-directed'],
  },
  {
    id: 'leading',
    label: 'I like leading and organising',
    shortLabel: 'LEADING & ORGANISING',
    careers: [
      {
        title: 'Operations & Management',
        environments: ['Manufacturing', 'Logistics', 'Retail management'],
      },
      {
        title: 'Project Management',
        environments: ['Construction', 'Technology delivery', 'Professional services'],
      },
      {
        title: 'Military & Public Service',
        environments: ['Armed forces', 'Police service', 'Emergency services leadership'],
      },
      {
        title: 'Business & Entrepreneurship',
        environments: ['Small business', 'Corporate management', 'Startups'],
      },
      {
        title: 'Healthcare Management',
        environments: ['NHS management', 'Private health administration', 'Public health leadership'],
      },
      {
        title: 'Government & Policy',
        environments: ['Civil service', 'Local government', 'Policy & regulation'],
      },
    ],
    routes: ['University degree', 'Management apprenticeship', 'Military officer programme', 'Graduate leadership scheme', 'Direct route + development'],
  },
];

export function StudentCareerExplorer() {
  const [selectedId, setSelectedId] = useState<string>('fixing');

  const selected = INTERESTS.find((i) => i.id === selectedId) ?? INTERESTS[0]!;

  return (
    <div className="w-full space-y-6" id="student-career-explorer">
      {/* Interest Selector */}
      <div className="flex flex-wrap gap-2">
        {INTERESTS.map((interest) => (
          <button
            key={interest.id}
            onClick={() => setSelectedId(interest.id)}
            className={`px-4 py-2 rounded text-xs font-mono font-semibold uppercase tracking-widest transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] ${
              selectedId === interest.id
                ? 'bg-[var(--color-text-primary)] text-[var(--color-surface-base)] border-transparent'
                : 'bg-transparent text-[var(--color-text-secondary)] border-[var(--color-border-default)] hover:border-[var(--color-border-default)] hover:text-[var(--color-text-primary)]'
            }`}
            aria-pressed={selectedId === interest.id}
          >
            {interest.shortLabel}
          </button>
        ))}
      </div>

      {/* Career Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {selected.careers.map((career) => (
          <div
            key={career.title}
            className="p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-3"
          >
            <h4 className="font-semibold text-sm text-[var(--color-text-primary)]">
              {career.title}
            </h4>
            <ul className="space-y-1">
              {career.environments.map((env) => (
                <li key={env} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-1.5">
                  <span className="text-[var(--color-taupe-300)] mt-0.5 shrink-0">—</span>
                  <span>{env}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Routes */}
      <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)]">
        <div className="space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-taupe-300)]">
            Potential routes to explore
          </span>
          <div className="flex flex-wrap gap-2">
            {selected.routes.map((route) => (
              <span
                key={route}
                className="px-3 py-1.5 rounded text-xs font-medium bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-[var(--color-text-secondary)]"
              >
                {route}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-[10px] text-[var(--color-text-tertiary)] font-mono">
          Exploration examples — not personalised career recommendations.
        </p>
        <Link
          href={ROUTES.PRODUCT_CAREER_GRAPH}
          className="text-xs font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] flex items-center gap-1 transition-colors"
        >
          Explore Career Graph <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
