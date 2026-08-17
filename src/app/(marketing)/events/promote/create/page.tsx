'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { submitEventToQueue } from '@/lib/events/store';
import { EVENT_CATEGORIES, EVENT_SECTORS } from '@/lib/events/data';
import {
  CareerEvent,
  OrganiserType,
  CareerStage,
  ExperienceLevel,
  EventFormat,
  EventCostType,
  EventTimezone,
  CommercialTier,
  AgeSuitability,
} from '@/types/events/platform';
import { EventCard } from '@/components/events/EventCard';
import { ROUTES } from '@/lib/routes';
import {
  Building2,
  Calendar,
  MapPin,
  Users,
  FileText,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Globe,
  AlertCircle,
  Eye,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function EventCreateWizardPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submittedEvent, setSubmittedEvent] = useState<CareerEvent | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    // 1. Organiser
    orgName: 'Octopus Energy Green Academy',
    orgType: 'employer' as OrganiserType,
    orgWebsite: 'https://octopus.energy/careers',
    orgContactEmail: 'earlycareers@octopus.energy',
    orgAbout: 'Pioneering renewable energy technology, smart grid infrastructure, and inclusive apprenticeships.',
    orgCity: 'London',
    orgCountry: 'United Kingdom',

    // 2. Event Basics
    title: 'Clean Energy & Smart Grid Degree Apprenticeship Open Day',
    categorySlug: 'apprenticeships',
    shortSummary: 'Meet the engineering and software teams driving the net-zero energy transition. Explore paid degree apprenticeships with starting salaries of £28k.',
    fullDescription: 'Join Octopus Energy at our flagship London technical hub to discover our 2026/2027 Apprenticeship Schemes. You will meet hiring managers across Smart Grid Engineering, Heat Pump Technology, and Cloud Energy Platforms.\n\nLearn how our apprentices study for fully funded degrees while working on production systems that power over 7 million homes.\n\nParents, guardians, and careers advisors are warmly invited to attend with prospective candidates.',
    heroImageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1400&q=80',
    coverImageAlt: 'Solar panels and clean technology engineer on a modern industrial site',

    // 3. Date & Time
    startDate: '2026-10-14',
    endDate: '2026-10-14',
    startTime: '10:00',
    endTime: '15:30',
    timezone: 'Europe/London' as EventTimezone,
    isRecurring: false,

    // 4. Location
    format: 'in-person' as EventFormat,
    venueName: 'Octopus Energy Technology Lab',
    addressLine1: '33 Holborn',
    city: 'London',
    regionState: 'Greater London',
    postalCode: 'EC1N 2HT',
    country: 'United Kingdom',
    virtualPlatform: 'CareerOS Virtual Stage',
    virtualInstructions: 'Link emailed upon RSVP.',

    // 5. Audience & Eligibility
    ageSuitability: 'suitable-for-under-18s' as AgeSuitability,
    careerStages: ['high-school', 'college', 'career-changer'] as CareerStage[],
    experienceLevels: ['no-experience-required', 'entry'] as ExperienceLevel[],
    sectors: ['Green Economy & Clean Energy', 'Technology & Software'],

    // 6. Details
    costType: 'free' as EventCostType,
    priceDisplay: 'Free Entry (Registration Required)',
    capacity: 250,
    registrationUrl: 'https://octopus.energy/careers/events/open-day-2026',
    dressCode: 'Smart Casual',
    accessibilityWheelchair: true,
    accessibilityCaptions: true,
    accessibilityQuietRoom: true,
    keyOutcomes: [
      'Understand Level 6 Degree Apprenticeship requirements and application deadlines',
      'Meet current 2nd and 3rd year apprentices working on live grid projects',
      'Receive direct feedback on your CV and technical portfolio from recruiters',
    ],
    prerequisites: ['Passionate about clean tech and engineering problem solving'],
    entryRequirements: ['Advance registration ticket', 'Parent/guardian welcome for attendees aged 14-17'],

    // 7. Commercial Promotion Tier
    commercialTier: 'featured' as CommercialTier,
  });

  const totalSteps = 8;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((s) => s - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const constructEventObject = (): CareerEvent => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    const eventId = `evt-user-${Date.now()}`;

    return {
      id: eventId,
      slug: slug || `event-${Date.now()}`,
      title: formData.title,
      shortSummary: formData.shortSummary,
      fullDescription: formData.fullDescription,
      categorySlug: formData.categorySlug,
      format: formData.format,
      costType: formData.costType,
      priceDisplay: formData.priceDisplay,
      startDate: formData.startDate,
      endDate: formData.endDate,
      startTime: formData.startTime,
      endTime: formData.endTime,
      timezone: formData.timezone,
      heroImageUrl: formData.heroImageUrl,
      coverImageAlt: formData.coverImageAlt,
      organiser: {
        id: `org-${Date.now()}`,
        name: formData.orgName,
        slug: formData.orgName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        type: formData.orgType,
        verificationStatus: 'unverified',
        website: formData.orgWebsite,
        contactEmail: formData.orgContactEmail,
        about: formData.orgAbout,
        headquartersCity: formData.orgCity,
        headquartersCountry: formData.orgCountry,
        totalEventsHosted: 1,
      },
      venue:
        formData.format !== 'online'
          ? {
              name: formData.venueName,
              addressLine1: formData.addressLine1,
              city: formData.city,
              regionState: formData.regionState,
              postalCode: formData.postalCode,
              country: formData.country,
            }
          : undefined,
      virtualAccess:
        formData.format !== 'in-person'
          ? {
              platformName: formData.virtualPlatform,
              instructions: formData.virtualInstructions,
              requiresRegistrationFirst: true,
            }
          : undefined,
      sectors: formData.sectors,
      careerStages: formData.careerStages,
      experienceLevels: formData.experienceLevels,
      ageSuitability: formData.ageSuitability,
      keyOutcomes: formData.keyOutcomes,
      prerequisites: formData.prerequisites,
      entryRequirements: formData.entryRequirements,
      dressCode: formData.dressCode,
      agenda: [
        { id: 'ag-1', time: formData.startTime, title: 'Welcome & Introduction to Clean Tech Careers' },
        { id: 'ag-2', time: '11:30', title: 'Rotational Team Demonstrations & Q&A' },
        { id: 'ag-3', time: '13:30', title: 'Application Process & Assessment Clinic' },
      ],
      speakers: [],
      participatingOrganisations: [
        {
          id: `p-org-${Date.now()}`,
          name: formData.orgName,
          type: formData.orgType,
          verified: false,
          hiringRoles: ['Degree Apprentice', 'Junior Field Technician'],
        },
      ],
      accessibilityFeatures: [
        ...(formData.accessibilityWheelchair ? [{ id: 'acc-1', label: 'Step-Free Wheelchair Access' }] : []),
        ...(formData.accessibilityCaptions ? [{ id: 'acc-2', label: 'Live Subtitles & Captions' }] : []),
        ...(formData.accessibilityQuietRoom ? [{ id: 'acc-3', label: 'Quiet Room Available for Sensory Needs' }] : []),
      ],
      capacity: formData.capacity,
      registrationUrl: formData.registrationUrl,
      commercialTier: formData.commercialTier,
      moderation: {
        status: 'under-review',
        submittedAt: new Date().toISOString(),
        editorialApproved: false,
        commercialApproved: formData.commercialTier === 'standard',
        safeguardingPassed: false,
        accessibilityDisclosed: true,
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const eventObj = constructEventObject();
    submitEventToQueue(eventObj);
    setSubmittedEvent(eventObj);
    setStep(9); // Success state
  };

  const previewEvent = constructEventObject();

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-surface-base)]">
      
      {/* ── TOP BREADCRUMB & HEADER ──────────────────────────────── */}
      <div className="border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] py-4">
        <div className="container-editorial flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-tertiary)]">
            <Link href={ROUTES.EVENTS_PROMOTE} className="hover:text-white flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Promote Hub</span>
            </Link>
            <span>/</span>
            <span className="text-[var(--color-text-primary)] font-semibold">Event Submission Wizard</span>
          </div>

          <div className="text-xs text-[var(--color-taupe-300)] font-mono">
            Step {step} of {totalSteps}
          </div>
        </div>
      </div>

      <div className="container-editorial py-8 sm:py-12 max-w-4xl">
        
        {/* Step Indicator Bar */}
        {step <= totalSteps && (
          <div className="mb-8 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[var(--color-text-primary)]">
                {step === 1 && '1. Organiser Information'}
                {step === 2 && '2. Event Basics & Media'}
                {step === 3 && '3. Schedule, Date & Timezone'}
                {step === 4 && '4. Location & Virtual Access'}
                {step === 5 && '5. Audience & Eligibility'}
                {step === 6 && '6. Event Details & Accessibility'}
                {step === 7 && '7. Commercial Promotion Level'}
                {step === 8 && '8. Review & Live Preview'}
              </span>
              <span className="text-[var(--color-text-tertiary)]">
                {Math.round((step / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--accent-blue)] transition-all duration-300"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* ── FORM CONTAINER ───────────────────────────────────────── */}
        <div className="p-6 sm:p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] shadow-lg space-y-6">

          {/* STEP 1: ORGANISER */}
          {step === 1 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="space-y-1">
                <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Organiser Profile</h2>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Provide details about your organisation. We verify all organisations prior to granting Verified badges.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 sm:col-span-2">
                  <label className="section-label">Organisation Name</label>
                  <input
                    type="text"
                    value={formData.orgName}
                    onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                    className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] focus:border-[var(--accent-blue)] focus:outline-none"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="section-label">Organiser Type</label>
                  <select
                    value={formData.orgType}
                    onChange={(e) => setFormData({ ...formData, orgType: e.target.value as any })}
                    className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] focus:border-[var(--accent-blue)] focus:outline-none cursor-pointer"
                  >
                    <option value="employer">Employer</option>
                    <option value="university">University</option>
                    <option value="college">College</option>
                    <option value="training-provider">Training Provider</option>
                    <option value="professional-body">Professional / Chartered Body</option>
                    <option value="startup-incubator">Startup Accelerator / VC</option>
                    <option value="government-public">Public / Government Body</option>
                    <option value="recruiter">Recruitment Agency</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="section-label">Official Website</label>
                  <input
                    type="url"
                    value={formData.orgWebsite}
                    onChange={(e) => setFormData({ ...formData, orgWebsite: e.target.value })}
                    className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] focus:border-[var(--accent-blue)] focus:outline-none"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="section-label">Contact / Organiser Email</label>
                  <input
                    type="email"
                    value={formData.orgContactEmail}
                    onChange={(e) => setFormData({ ...formData, orgContactEmail: e.target.value })}
                    className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] focus:border-[var(--accent-blue)] focus:outline-none"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="section-label">Headquarters City</label>
                  <input
                    type="text"
                    value={formData.orgCity}
                    onChange={(e) => setFormData({ ...formData, orgCity: e.target.value })}
                    className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] focus:border-[var(--accent-blue)] focus:outline-none"
                  />
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="section-label">About the Organisation</label>
                  <textarea
                    value={formData.orgAbout}
                    onChange={(e) => setFormData({ ...formData, orgAbout: e.target.value })}
                    rows={3}
                    className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] focus:border-[var(--accent-blue)] focus:outline-none resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: EVENT BASICS */}
          {step === 2 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="space-y-1">
                <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Event Basics &amp; Description</h2>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Provide clear, truthful information about what attendees will experience.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="section-label">Event Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] font-semibold focus:border-[var(--accent-blue)] focus:outline-none"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="section-label">Category</label>
                  <select
                    value={formData.categorySlug}
                    onChange={(e) => setFormData({ ...formData, categorySlug: e.target.value })}
                    className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] focus:border-[var(--accent-blue)] focus:outline-none cursor-pointer"
                  >
                    {EVENT_CATEGORIES.map((c) => (
                      <option key={c.slug} value={c.slug}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="section-label">Short Summary (1-2 sentences)</label>
                  <input
                    type="text"
                    value={formData.shortSummary}
                    onChange={(e) => setFormData({ ...formData, shortSummary: e.target.value })}
                    className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] focus:border-[var(--accent-blue)] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="section-label">Full Event Description</label>
                  <textarea
                    value={formData.fullDescription}
                    onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                    rows={6}
                    className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] focus:border-[var(--accent-blue)] focus:outline-none resize-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="section-label">Featured Image URL</label>
                  <input
                    type="url"
                    value={formData.heroImageUrl}
                    onChange={(e) => setFormData({ ...formData, heroImageUrl: e.target.value })}
                    className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] focus:border-[var(--accent-blue)] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: DATE & TIME */}
          {step === 3 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="space-y-1">
                <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Schedule &amp; Dates</h2>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Specify start and finish dates and timezones clearly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="section-label">Start Date</label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value, endDate: e.target.value })}
                    className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] focus:border-[var(--accent-blue)] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="section-label">End Date</label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] focus:border-[var(--accent-blue)] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="section-label">Start Time</label>
                  <input
                    type="text"
                    placeholder="10:00"
                    value={formData.startTime}
                    onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                    className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] focus:border-[var(--accent-blue)] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="section-label">Finish Time</label>
                  <input
                    type="text"
                    placeholder="16:00"
                    value={formData.endTime}
                    onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                    className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] focus:border-[var(--accent-blue)] focus:outline-none"
                  />
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="section-label">Timezone</label>
                  <select
                    value={formData.timezone}
                    onChange={(e) => setFormData({ ...formData, timezone: e.target.value as any })}
                    className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] focus:border-[var(--accent-blue)] focus:outline-none cursor-pointer"
                  >
                    <option value="Europe/London">London / GMT / BST</option>
                    <option value="America/New_York">New York / Eastern Time (ET)</option>
                    <option value="America/Chicago">Chicago / Central Time (CT)</option>
                    <option value="America/Los_Angeles">San Francisco / Pacific Time (PT)</option>
                    <option value="Europe/Paris">Central European Time (CET)</option>
                    <option value="Asia/Singapore">Singapore / SGT</option>
                    <option value="Australia/Sydney">Sydney / AEST</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: LOCATION */}
          {step === 4 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="space-y-1">
                <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Location &amp; Delivery Format</h2>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Where will attendees participate?
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="section-label">Event Format</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['in-person', 'online', 'hybrid'] as EventFormat[]).map((fmt) => (
                      <button
                        key={fmt}
                        type="button"
                        onClick={() => setFormData({ ...formData, format: fmt })}
                        className={cn(
                          'p-3 rounded-[var(--radius-sm)] border text-xs font-semibold capitalize transition-all',
                          formData.format === fmt
                            ? 'bg-[var(--accent-blue)] border-[var(--accent-blue)] text-white shadow-sm'
                            : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white'
                        )}
                      >
                        {fmt.replace('-', ' ')}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.format !== 'online' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="sm:col-span-2 space-y-1">
                      <label className="section-label">Venue Name</label>
                      <input
                        type="text"
                        value={formData.venueName}
                        onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                        className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)]"
                      />
                    </div>
                    <div className="sm:col-span-2 space-y-1">
                      <label className="section-label">Address Line 1</label>
                      <input
                        type="text"
                        value={formData.addressLine1}
                        onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                        className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="section-label">City</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="section-label">Postal / ZIP Code</label>
                      <input
                        type="text"
                        value={formData.postalCode}
                        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                        className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)]"
                      />
                    </div>
                  </div>
                )}

                {formData.format !== 'in-person' && (
                  <div className="space-y-3 pt-2">
                    <div className="space-y-1">
                      <label className="section-label">Virtual Platform Name</label>
                      <input
                        type="text"
                        placeholder="Zoom, Teams, CareerOS Stage..."
                        value={formData.virtualPlatform}
                        onChange={(e) => setFormData({ ...formData, virtualPlatform: e.target.value })}
                        className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)]"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 5: AUDIENCE & SECTORS */}
          {step === 5 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="space-y-1">
                <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Audience, Safeguarding &amp; Sectors</h2>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Help the right candidates discover your event.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="section-label">Age Suitability &amp; Safeguarding</label>
                  <select
                    value={formData.ageSuitability}
                    onChange={(e) => setFormData({ ...formData, ageSuitability: e.target.value as any })}
                    className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] cursor-pointer"
                  >
                    <option value="suitable-for-under-18s">Suitable for Under 18s (Safeguarding verified)</option>
                    <option value="16-plus">16+ (Sixth form / college / early school leavers)</option>
                    <option value="18-plus">18+ (University, graduates, adults)</option>
                    <option value="parent-guardian-permitted">Parent / Guardian Attendance Permitted</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="section-label">Primary Sectors (Select relevant)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {EVENT_SECTORS.map((sec) => {
                      const isSelected = formData.sectors.includes(sec);
                      return (
                        <button
                          key={sec}
                          type="button"
                          onClick={() => {
                            const updated = isSelected
                              ? formData.sectors.filter((s) => s !== sec)
                              : [...formData.sectors, sec];
                            setFormData({ ...formData, sectors: updated });
                          }}
                          className={cn(
                            'p-2.5 rounded-[var(--radius-sm)] text-xs text-left border flex items-center justify-between transition-colors',
                            isSelected
                              ? 'bg-[var(--accent-blue)]/15 border-[var(--accent-blue)] text-white font-semibold'
                              : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white'
                          )}
                        >
                          <span>{sec}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-blue)]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: DETAILS & ACCESSIBILITY */}
          {step === 6 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="space-y-1">
                <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Registration, Cost &amp; Accessibility</h2>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Set registration requirements and confirm accessibility provisions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="section-label">Registration Link (External RSVP)</label>
                  <input
                    type="url"
                    value={formData.registrationUrl}
                    onChange={(e) => setFormData({ ...formData, registrationUrl: e.target.value })}
                    className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] focus:border-[var(--accent-blue)] focus:outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="section-label">Cost Structure</label>
                    <select
                      value={formData.costType}
                      onChange={(e) => setFormData({ ...formData, costType: e.target.value as any })}
                      className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)]"
                    >
                      <option value="free">Free Event</option>
                      <option value="paid">Paid Ticketed</option>
                      <option value="scholarship-available">Scholarships Available</option>
                      <option value="deposit-refundable">Refundable Deposit</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="section-label">Price Display String</label>
                    <input
                      type="text"
                      value={formData.priceDisplay}
                      onChange={(e) => setFormData({ ...formData, priceDisplay: e.target.value })}
                      className="w-full p-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)]"
                    />
                  </div>
                </div>

                {/* Accessibility Checklist */}
                <div className="space-y-2 pt-2 border-t border-[var(--color-border-subtle)]">
                  <label className="section-label">Accessibility Accommodations</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.accessibilityWheelchair}
                        onChange={(e) => setFormData({ ...formData, accessibilityWheelchair: e.target.checked })}
                        className="rounded"
                      />
                      <span>Step-Free Wheelchair Access at venue</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.accessibilityCaptions}
                        onChange={(e) => setFormData({ ...formData, accessibilityCaptions: e.target.checked })}
                        className="rounded"
                      />
                      <span>Live Captioning / Subtitles / BSL Interpreter</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.accessibilityQuietRoom}
                        onChange={(e) => setFormData({ ...formData, accessibilityQuietRoom: e.target.checked })}
                        className="rounded"
                      />
                      <span>Quiet room or sensory decompression space available</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 7: PROMOTION LEVEL */}
          {step === 7 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="space-y-1">
                <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Select Promotion Level</h2>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Choose how prominently your event appears across discovery hubs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    tier: 'standard' as CommercialTier,
                    title: 'Standard Listing',
                    desc: 'Organic placement across category searches and location filters.',
                  },
                  {
                    tier: 'featured' as CommercialTier,
                    title: 'Featured Placement',
                    desc: 'Highlighted in Featured discovery rail with priority ranking.',
                  },
                  {
                    tier: 'sponsored' as CommercialTier,
                    title: 'Sponsored Event',
                    desc: 'Top-tier branded promotion with AI Career Mentor integration.',
                  },
                ].map((opt) => (
                  <button
                    key={opt.tier}
                    type="button"
                    onClick={() => setFormData({ ...formData, commercialTier: opt.tier })}
                    className={cn(
                      'p-5 rounded-[var(--radius-card)] border text-left flex flex-col justify-between space-y-3 transition-all cursor-pointer',
                      formData.commercialTier === opt.tier
                        ? 'bg-[var(--accent-blue)]/15 border-[var(--accent-blue)] shadow-md'
                        : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] hover:border-zinc-500'
                    )}
                  >
                    <div>
                      <div className="text-xs font-bold text-[var(--color-text-primary)]">{opt.title}</div>
                      <div className="text-[11px] text-[var(--color-text-secondary)] mt-1">{opt.desc}</div>
                    </div>
                    {formData.commercialTier === opt.tier && (
                      <span className="text-[10px] font-bold text-[var(--accent-blue)] uppercase tracking-wider">
                        Selected
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="p-3 bg-[var(--color-surface-sunken)] border border-[var(--color-border-subtle)] rounded-[var(--radius-sm)] flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-[var(--color-text-secondary)]">
                  <strong>Notice:</strong> Payment or promotion tier does not guarantee editorial approval. All events are reviewed against CareerOS quality and anti-exploitation standards.
                </p>
              </div>
            </div>
          )}

          {/* STEP 8: REVIEW & LIVE PREVIEW */}
          {step === 8 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Review &amp; Preview Listing</h2>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Inspect how your listing will appear to candidates across CareerOS.
                </p>
              </div>

              {/* Live Preview Card */}
              <div className="space-y-2">
                <span className="section-label">Live Discovery Card Preview</span>
                <div className="max-w-md mx-auto">
                  <EventCard event={previewEvent} priority />
                </div>
              </div>

              {/* Moderation Warning */}
              <div className="p-4 bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-2">
                <div className="text-xs font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[var(--accent-blue)]" />
                  <span>Submission goes into Editorial Moderation Queue</span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Upon submission, CareerOS moderators will verify organiser legitimacy, safety disclosures, and accurate representation. Listings typically go live within 24 hours.
                </p>
              </div>
            </div>
          )}

          {/* STEP 9: SUBMISSION SUCCESS */}
          {step === 9 && submittedEvent && (
            <div className="py-12 px-4 text-center space-y-6 animate-in fade-in duration-200">
              <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h2 className="text-xl font-bold text-[var(--color-text-primary)]">
                  Event Submitted for Moderation
                </h2>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Thank you for submitting &ldquo;{submittedEvent.title}&rdquo;. Your listing has entered our review queue with status <span className="text-amber-400 font-bold uppercase">Under Review</span>.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link
                  href={ROUTES.EVENTS_ORGANISERS_DASHBOARD}
                  className="px-5 py-2.5 bg-white text-zinc-900 text-xs font-bold rounded-[var(--radius-button)] hover:bg-zinc-100 transition-colors"
                >
                  Go to Organiser Portal
                </Link>
                <Link
                  href={ROUTES.EVENTS}
                  className="px-5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-xs font-semibold text-[var(--color-text-secondary)] hover:text-white rounded-[var(--radius-button)]"
                >
                  Back to Events Discovery
                </Link>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          {step <= totalSteps && (
            <div className="pt-6 border-t border-[var(--color-border-default)] flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover:border-zinc-500 text-xs font-semibold text-[var(--color-text-secondary)] hover:text-white rounded-[var(--radius-button)]"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2.5 bg-white text-zinc-900 text-xs font-bold rounded-[var(--radius-button)] hover:bg-zinc-100 transition-colors inline-flex items-center gap-2"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-[var(--radius-button)] transition-colors inline-flex items-center gap-2 shadow-md"
                >
                  <span>Submit Event to Moderation</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
