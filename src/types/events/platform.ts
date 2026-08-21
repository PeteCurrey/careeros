/**
 * CareerOS Events Platform — Domain Types & Data Contracts
 * 
 * Scalable entity models supporting:
 * - Public discovery & multi-dimensional filtering
 * - Organizer profiles & institutional verification
 * - Moderation lifecycle & child safeguarding
 * - Commercial tiers (Standard, Featured, Sponsored)
 * - CareerOS ecosystem integrations (Career Twin, AI Mentor, Preparation)
 */

export type EventFormat = 'in-person' | 'online' | 'hybrid';

export type EventCostType = 'free' | 'paid' | 'scholarship-available' | 'deposit-refundable';

export type EventTimezone = 
  | 'GMT' 
  | 'BST' 
  | 'UTC' 
  | 'America/New_York' 
  | 'America/Chicago' 
  | 'America/Denver' 
  | 'America/Los_Angeles' 
  | 'Europe/London' 
  | 'Europe/Paris' 
  | 'Asia/Singapore' 
  | 'Australia/Sydney';

export type CareerStage =
  | 'high-school'
  | 'college'
  | 'university'
  | 'graduate'
  | 'early-career'
  | 'mid-career'
  | 'senior-executive'
  | 'career-changer'
  | 'entrepreneur-founder'
  | 'all-stages';

export type ExperienceLevel =
  | 'entry'
  | 'mid'
  | 'senior'
  | 'executive'
  | 'no-experience-required'
  | 'student';

export type OrganizerType =
  | 'employer'
  | 'recruiter'
  | 'university'
  | 'college'
  | 'school'
  | 'training-provider'
  | 'professional-body'
  | 'government-public'
  | 'startup-incubator'
  | 'community-organization';

export type OrganizerVerificationStatus = 
  | 'unverified'
  | 'verified-employer'
  | 'accredited-institution'
  | 'chartered-body'
  | 'government-partner';

export type ModerationStatus =
  | 'draft'
  | 'submitted'
  | 'under-review'
  | 'changes-requested'
  | 'approved'
  | 'scheduled'
  | 'live'
  | 'rejected'
  | 'canceled'
  | 'expired'
  | 'suspended';

export type CommercialTier =
  | 'standard'
  | 'featured'
  | 'sponsored'
  | 'targeted-campaign'
  | 'employer-enterprise-package';

export type AgeSuitability =
  | 'suitable-for-under-18s'
  | '16-plus'
  | '18-plus'
  | 'parent-guardian-permitted'
  | 'school-group-only';

export interface EventCategory {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  group: 'careers' | 'learning' | 'education' | 'entrepreneurship' | 'explore';
  iconName?: string;
  badgeText?: string;
}

export interface EventSpeaker {
  id: string;
  name: string;
  role: string;
  organization: string;
  bio?: string;
  avatarUrl?: string;
  linkedinUrl?: string;
}

export interface ParticipatingOrganization {
  id: string;
  name: string;
  type: OrganizerType;
  logoUrl?: string;
  hiringRoles?: string[];
  standLocation?: string;
  verified: boolean;
}

export interface EventAgendaItem {
  id: string;
  time: string;
  title: string;
  description?: string;
  speakerIds?: string[];
  track?: string;
}

export interface EventVenue {
  name: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  regionState: string;
  postalCode: string;
  country: string;
  transitInstructions?: string;
  parkingInfo?: string;
  mapCoordinates?: {
    latitude: number;
    longitude: number;
  };
}

export interface VirtualAccessInfo {
  platformName: string; // e.g. 'Zoom', 'Microsoft Teams', 'Hopin', 'CareerOS Virtual Stage'
  joinUrl?: string;
  instructions: string;
  requiresRegistrationFirst: boolean;
}

export interface AccessibilityFeature {
  id: string;
  label: string;
  details?: string;
}

export interface EventOrganizer {
  id: string;
  name: string;
  slug: string;
  type: OrganizerType;
  verificationStatus: OrganizerVerificationStatus;
  verifiedAt?: string;
  logoUrl?: string;
  website: string;
  contactEmail: string;
  about: string;
  headquartersCity?: string;
  headquartersCountry?: string;
  totalEventsHosted?: number;
}

export interface CareerMatchIntelligence {
  matchScore: number; // e.g. 92
  headline: string; // e.g. "92% match for your career plan"
  rationale: string; // e.g. "You've been exploring mechanical engineering apprenticeships. This event includes engineering employers recruiting apprentices and is 18 miles from you."
  alignedGoals: string[];
  targetedSkills: string[];
  mentorAdviceSnippet?: string;
}

export interface EventModerationRecord {
  status: ModerationStatus;
  submittedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
  reviewerNotes?: string;
  editorialApproved: boolean;
  commercialApproved: boolean;
  safeguardingPassed: boolean;
  accessibilityDisclosed: boolean;
  changeRequestHistory?: {
    date: string;
    requestedBy: string;
    reason: string;
    resolved: boolean;
  }[];
}

export interface CareerEvent {
  id: string;
  slug: string;
  title: string;
  shortSummary: string;
  fullDescription: string;
  categorySlug: string;
  subcategory?: string;
  format: EventFormat;
  costType: EventCostType;
  priceDisplay?: string; // e.g. "Free", "$15 General / Free for Students", "$25"
  
  // Dates and Schedule
  startDate: string; // ISO format e.g. "2026-09-15"
  endDate: string; // ISO format e.g. "2026-09-15"
  startTime: string; // e.g. "10:00"
  endTime: string; // e.g. "16:30"
  timezone: EventTimezone;
  isRecurring?: boolean;
  recurringCadence?: string;

  // Media
  heroImageUrl: string;
  coverImageAlt: string;

  // Organizer
  organizer: EventOrganizer;
  coOrganizers?: EventOrganizer[];

  // Location / Access
  venue?: EventVenue;
  virtualAccess?: VirtualAccessInfo;

  // Taxonomies & Audience
  sectors: string[]; // e.g. ['Engineering', 'Green Energy', 'Technology']
  careerStages: CareerStage[];
  experienceLevels: ExperienceLevel[];
  ageSuitability: AgeSuitability;
  safeguardingNotes?: string;

  // What you'll get & eligibility
  keyOutcomes: string[];
  prerequisites: string[];
  entryRequirements?: string[]; // e.g. ['Valid Student ID', 'Pre-registration required', 'Updated resume recommended']
  dressCode?: string;

  // Details
  agenda: EventAgendaItem[];
  speakers: EventSpeaker[];
  participatingOrganizations: ParticipatingOrganization[];
  accessibilityFeatures: AccessibilityFeature[];
  capacity?: number;
  remainingSpots?: number;
  registrationDeadline?: string;
  registrationUrl: string;

  // Commercial & Governance
  commercialTier: CommercialTier;
  sponsoredDisclaimer?: string;
  moderation: EventModerationRecord;

  // Personalization Mock data (used when user connects Career Twin)
  mockIntelligence?: CareerMatchIntelligence;

  // Metadata
  createdAt: string;
  updatedAt: string;
  isExpired?: boolean;
}

export interface EventFilterState {
  searchQuery: string;
  when: 'any' | 'today' | 'tomorrow' | 'this-week' | 'this-weekend' | 'next-week' | 'this-month' | 'custom';
  customDateStart?: string;
  customDateEnd?: string;
  where: 'all' | 'near-me' | 'online' | 'hybrid' | 'city' | 'nationwide';
  locationQuery: string;
  categorySlug?: string;
  sectors: string[];
  careerStages: CareerStage[];
  experienceLevels: ExperienceLevel[];
  costTypes: EventCostType[];
  organizerTypes: OrganizerType[];
  onlyFeatured: boolean;
  under18FriendlyOnly: boolean;
  sortBy: 'date-asc' | 'date-desc' | 'recommended' | 'recently-added';
}

export interface EventReportSubmission {
  id: string;
  eventId: string;
  eventTitle: string;
  reportedAt: string;
  reason: 
    | 'misleading-recruitment-claim' 
    | 'pyramid-scheme-financial-scam' 
    | 'discriminatory-unsafe' 
    | 'inaccurate-employer-representation' 
    | 'inappropriate-for-minors' 
    | 'spam-or-duplicate' 
    | 'broken-link-or-expired' 
    | 'other';
  details: string;
  reporterEmail?: string;
  status: 'pending' | 'reviewed' | 'resolved' | 'dismissed';
}

export interface EventPreparationPlan {
  eventId: string;
  eventTitle: string;
  generatedAt: string;
  elevatorPitch: string;
  questionsForEmployers: {
    employerName: string;
    question: string;
    context: string;
  }[];
  checklist: {
    id: string;
    task: string;
    category: 'cv' | 'research' | 'questions' | 'follow-up';
    completed: boolean;
  }[];
  networkingGoals: string[];
}

export interface EventAnalyticsSummary {
  eventId: string;
  pageViews: number;
  saves: number;
  calendarExports: number;
  registrationClicks: number;
  preparationLaunches: number;
  shares: number;
}
