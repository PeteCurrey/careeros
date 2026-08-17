'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Shield, Lock, Send, Building2 } from 'lucide-react';

interface FormData {
  organizationName: string;
  website: string;
  country: string;
  industry: string;
  employeeCount: string;
  annualHiringVolume: string;
  primaryUseCase: string[];
  hardToFillRoles: string;
  currentAts: string;
  hasApprenticeshipEarlyCareers: string;
  currentAiRecruitmentUse: string;
  primaryChallenge: string;
  implementationTimeframe: string;
  contactName: string;
  jobTitle: string;
  workEmail: string;
  notes: string;
}

const USE_CASES = [
  'Hard-to-fill technical roles',
  'Skills-based hiring pilots',
  'Early careers & graduate hiring',
  'Apprenticeships & trade programmes',
  'Career changers & non-linear talent',
  'Internal mobility & succession planning',
  'Workforce development & upskilling',
  'Other custom pilot',
];

export function FoundingEmployerForm() {
  const [formData, setFormData] = useState<FormData>({
    organizationName: '',
    website: '',
    country: '',
    industry: '',
    employeeCount: '',
    annualHiringVolume: '',
    primaryUseCase: [],
    hardToFillRoles: '',
    currentAts: '',
    hasApprenticeshipEarlyCareers: '',
    currentAiRecruitmentUse: '',
    primaryChallenge: '',
    implementationTimeframe: '',
    contactName: '',
    jobTitle: '',
    workEmail: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUseCaseToggle = (uc: string) => {
    setFormData((prev) => ({
      ...prev,
      primaryUseCase: prev.primaryUseCase.includes(uc)
        ? prev.primaryUseCase.filter((x) => x !== uc)
        : [...prev.primaryUseCase, uc],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-12 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-emerald-500/30 text-center space-y-4 max-w-2xl mx-auto">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-serif text-white">Application Received</h3>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          Thank you for applying to the Career OS Founding Employer programme. Our commercial partnerships and governance team will review your organization&apos;s use case and be in touch within two business days.
        </p>
        <div className="p-4 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-xs text-[var(--color-text-tertiary)] font-mono">
          Organization: {formData.organizationName || 'Submitted'} &bull; Contact: {formData.workEmail || 'Recorded'}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-10 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-8" id="founding-employer-form">
      <div className="space-y-1 pb-4 border-b border-[var(--color-border-default)]">
        <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-blue)] font-semibold flex items-center gap-1.5">
          <Building2 className="w-4 h-4" /> Founding Employer Programme Application
        </span>
        <h3 className="text-xl sm:text-2xl font-serif text-white">
          Partner with Career OS on skills-based talent discovery
        </h3>
        <p className="text-xs text-[var(--color-text-secondary)]">
          Join leading employers piloting capability briefs, adjacent talent discovery, and evidence-based early careers hiring.
        </p>
      </div>

      {/* Organization Details */}
      <div className="space-y-4">
        <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--color-taupe-300)] font-bold">
          01. Organization Details
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="space-y-1.5">
            <label className="text-[var(--color-text-secondary)] font-medium block">Organization Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Apex Engineering Ltd"
              value={formData.organizationName}
              onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
              className="w-full p-2.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-white focus:outline-none focus:border-[var(--accent-blue)]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[var(--color-text-secondary)] font-medium block">Organization Website *</label>
            <input
              type="url"
              required
              placeholder="https://example.com"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full p-2.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-white focus:outline-none focus:border-[var(--accent-blue)]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[var(--color-text-secondary)] font-medium block">Country / Primary Region *</label>
            <input
              type="text"
              required
              placeholder="e.g. United Kingdom, United States"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full p-2.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-white focus:outline-none focus:border-[var(--accent-blue)]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[var(--color-text-secondary)] font-medium block">Industry Sector *</label>
            <input
              type="text"
              required
              placeholder="e.g. Advanced Manufacturing, Healthcare, Defence"
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="w-full p-2.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-white focus:outline-none focus:border-[var(--accent-blue)]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[var(--color-text-secondary)] font-medium block">Approximate Employee Count</label>
            <select
              value={formData.employeeCount}
              onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
              className="w-full p-2.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-white focus:outline-none focus:border-[var(--accent-blue)]"
            >
              <option value="">Select size bracket</option>
              <option value="50-250">50 – 250 employees</option>
              <option value="251-1000">251 – 1,000 employees</option>
              <option value="1001-5000">1,001 – 5,000 employees</option>
              <option value="5000+">5,000+ enterprise</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-[var(--color-text-secondary)] font-medium block">Approximate Annual Hiring Volume</label>
            <select
              value={formData.annualHiringVolume}
              onChange={(e) => setFormData({ ...formData, annualHiringVolume: e.target.value })}
              className="w-full p-2.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-white focus:outline-none focus:border-[var(--accent-blue)]"
            >
              <option value="">Select hiring volume</option>
              <option value="1-25">1 – 25 hires/year</option>
              <option value="26-100">26 – 100 hires/year</option>
              <option value="101-500">101 – 500 hires/year</option>
              <option value="500+">500+ hires/year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Primary Use Case */}
      <div className="space-y-3">
        <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--color-taupe-300)] font-bold">
          02. Primary Pilot Use Cases
        </h4>
        <p className="text-xs text-[var(--color-text-secondary)]">Select all areas of interest for an initial pilot:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {USE_CASES.map((uc) => (
            <label
              key={uc}
              className={`p-3 rounded border flex items-center gap-2.5 cursor-pointer transition-all ${
                formData.primaryUseCase.includes(uc)
                  ? 'bg-[var(--accent-blue-subtle)] border-[var(--accent-blue)] text-white'
                  : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white'
              }`}
            >
              <input
                type="checkbox"
                checked={formData.primaryUseCase.includes(uc)}
                onChange={() => handleUseCaseToggle(uc)}
                className="rounded border-[var(--color-border-default)] text-[var(--accent-blue)] focus:ring-0"
              />
              <span>{uc}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Recruitment Context */}
      <div className="space-y-4">
        <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--color-taupe-300)] font-bold">
          03. Current Hiring Environment
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="space-y-1.5">
            <label className="text-[var(--color-text-secondary)] font-medium block">Roles / Capabilities Hardest to Fill</label>
            <input
              type="text"
              placeholder="e.g. Field Reliability Engineers, Plant Supervisors"
              value={formData.hardToFillRoles}
              onChange={(e) => setFormData({ ...formData, hardToFillRoles: e.target.value })}
              className="w-full p-2.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-white focus:outline-none focus:border-[var(--accent-blue)]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[var(--color-text-secondary)] font-medium block">Current ATS / HR Platform</label>
            <input
              type="text"
              placeholder="e.g. Workday, Greenhouse, Lever, SmartRecruiters"
              value={formData.currentAts}
              onChange={(e) => setFormData({ ...formData, currentAts: e.target.value })}
              className="w-full p-2.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-white focus:outline-none focus:border-[var(--accent-blue)]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[var(--color-text-secondary)] font-medium block">Active Apprenticeship / Early-Careers Programme?</label>
            <select
              value={formData.hasApprenticeshipEarlyCareers}
              onChange={(e) => setFormData({ ...formData, hasApprenticeshipEarlyCareers: e.target.value })}
              className="w-full p-2.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-white focus:outline-none focus:border-[var(--accent-blue)]"
            >
              <option value="">Select option</option>
              <option value="yes-established">Yes — established programmes</option>
              <option value="yes-growing">Yes — currently expanding</option>
              <option value="planning">Currently planning / launching soon</option>
              <option value="no">No active programme</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-[var(--color-text-secondary)] font-medium block">Preferred Pilot Timeframe</label>
            <select
              value={formData.implementationTimeframe}
              onChange={(e) => setFormData({ ...formData, implementationTimeframe: e.target.value })}
              className="w-full p-2.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-white focus:outline-none focus:border-[var(--accent-blue)]"
            >
              <option value="">Select timeframe</option>
              <option value="immediate">Immediate / Next 30 days</option>
              <option value="q1-q2">Next 1–3 months</option>
              <option value="q3-q4">Next 3–6 months</option>
              <option value="exploratory">Exploratory / Strategic roadmap</option>
            </select>
          </div>
        </div>
      </div>

      {/* Contact Details */}
      <div className="space-y-4">
        <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--color-taupe-300)] font-bold">
          04. Lead Contact Information
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="space-y-1.5">
            <label className="text-[var(--color-text-secondary)] font-medium block">Contact Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Sarah Jenkins"
              value={formData.contactName}
              onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
              className="w-full p-2.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-white focus:outline-none focus:border-[var(--accent-blue)]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[var(--color-text-secondary)] font-medium block">Job Title *</label>
            <input
              type="text"
              required
              placeholder="e.g. Head of Talent Acquisition / VP People"
              value={formData.jobTitle}
              onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
              className="w-full p-2.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-white focus:outline-none focus:border-[var(--accent-blue)]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[var(--color-text-secondary)] font-medium block">Work Email Address *</label>
            <input
              type="email"
              required
              placeholder="name@company.com"
              value={formData.workEmail}
              onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
              className="w-full p-2.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-white focus:outline-none focus:border-[var(--accent-blue)]"
            />
          </div>
        </div>

        <div className="space-y-1.5 text-xs">
          <label className="text-[var(--color-text-secondary)] font-medium block">Optional Notes / Specific Objectives</label>
          <textarea
            rows={3}
            placeholder="Describe any particular roles, governance questions, or pilot objectives you would like to discuss..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full p-2.5 rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-white focus:outline-none focus:border-[var(--accent-blue)]"
          />
        </div>
      </div>

      {/* Submission & Privacy Notice */}
      <div className="space-y-4 pt-2 border-t border-[var(--color-border-subtle)]">
        <div className="flex items-start gap-2 text-xs text-[var(--color-text-tertiary)]">
          <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
          <span>
            Career OS does not collect candidate personal data via this form. Commercial details submitted here are processed strictly to evaluate Founding Employer partnership eligibility in accordance with our Corporate Privacy Policy.
          </span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3.5 rounded font-mono text-xs uppercase tracking-wider font-bold bg-white text-black hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting Application...' : 'Submit Founding Employer Application'} <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </form>
  );
}
