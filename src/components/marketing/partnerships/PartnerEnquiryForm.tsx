'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Mail, 
  User, 
  Globe, 
  Users, 
  Calendar,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Wrench,
  Award,
  HeartHandshake
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function PartnerEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orgType, setOrgType] = useState('Employer / Enterprise');
  const [formData, setFormData] = useState({
    organisationName: '',
    website: '',
    orgType: 'Employer / Enterprise',
    country: 'United Kingdom',
    stateRegion: '',
    orgSize: '250–1,000 employees',
    contactName: '',
    roleTitle: '',
    professionalEmail: '',
    contributionType: 'Apprenticeships & Early Careers',
    targetAudience: 'Secondary Students (Ages 14–18)',
    worksWithMinors: 'Yes, with established youth safeguarding policies',
    primaryObjective: 'Expand early career discovery and technical apprenticeship recruitment',
    geographicCoverage: 'Regional & National',
    timeframe: 'Next Academic Term',
    specificProgramme: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate brief processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div
      id="partner-enquiry-form"
      className="w-full bg-[var(--background-dark-deep)]/75 backdrop-blur-md border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-2xl p-6 sm:p-10 space-y-8"
      role="region"
      aria-label="Career OS Partner Application Form"
    >
      {/* Top Banner */}
      <div className="border-b border-[var(--color-border-default)] pb-6 space-y-2 text-left">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#6BB8FF] flex items-center gap-1.5 font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#2F8FFF]" />
          Partnership Application &bull; Collaborative Ecosystem
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal">
          Become a Career OS Partner
        </h3>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
          Submit your organisation&apos;s credentials and proposed contribution. Our partnerships and safeguarding team will review your application and coordinate a tailored pilot framework.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-center space-y-4 animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xl font-serif text-white font-normal">
              Partnership Application Received
            </h4>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] max-w-md mx-auto">
              Thank you for applying to partner with Career OS. A member of our institutional partnerships and safeguarding review team will contact you at <strong className="text-white">{formData.professionalEmail || 'your email'}</strong> within two working days.
            </p>
          </div>
          <div className="pt-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setSubmitted(false)}
            >
              Submit another partnership enquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          
          {/* STEP 1: ORGANISATION TYPE SELECTOR */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-[var(--color-taupe-300)] font-semibold block">
              1. What Type of Organisation Are You? *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-xs">
              {[
                'School / District',
                'Employer / Enterprise',
                'College / University',
                'Apprenticeship Provider',
                'Training Provider',
                'Professional Body',
                'Credential Issuer',
                'Public / Workforce Body',
                'Nonprofit / Charity',
                'Event Organiser',
                'Other Organisation',
              ].map((type) => {
                const isSelected = orgType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => {
                      setOrgType(type);
                      setFormData({ ...formData, orgType: type });
                    }}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      isSelected
                        ? 'bg-white/15 border-white/50 text-white font-semibold ring-1 ring-white/30'
                        : 'bg-[var(--color-surface-base)]/60 border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-border-strong)]'
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2: CORE ORGANISATION DETAILS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1.5">
              <label className="text-white font-medium block">Organisation Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Apex Precision Engineering Ltd / Oakridge Academy Trust"
                value={formData.organisationName}
                onChange={(e) => setFormData({ ...formData, organisationName: e.target.value })}
                className="w-full p-2.5 rounded-lg bg-[var(--color-surface-base)]/80 border border-[var(--color-border-default)] text-white placeholder-[var(--color-text-tertiary)] focus:outline-none focus:border-[#2F8FFF]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-white font-medium block">Organisation Website *</label>
              <input
                type="url"
                required
                placeholder="https://example.com"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full p-2.5 rounded-lg bg-[var(--color-surface-base)]/80 border border-[var(--color-border-default)] text-white placeholder-[var(--color-text-tertiary)] focus:outline-none focus:border-[#2F8FFF]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-white font-medium block">Country *</label>
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full p-2.5 rounded-lg bg-[var(--color-surface-base)]/80 border border-[var(--color-border-default)] text-white focus:outline-none focus:border-[#2F8FFF]"
              >
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Australia</option>
                <option>Canada</option>
                <option>European Union</option>
                <option>International / Other</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-white font-medium block">State / Region / County *</label>
              <input
                type="text"
                required
                placeholder="e.g. Greater Manchester / California / New South Wales"
                value={formData.stateRegion}
                onChange={(e) => setFormData({ ...formData, stateRegion: e.target.value })}
                className="w-full p-2.5 rounded-lg bg-[var(--color-surface-base)]/80 border border-[var(--color-border-default)] text-white placeholder-[var(--color-text-tertiary)] focus:outline-none focus:border-[#2F8FFF]"
              />
            </div>
          </div>

          {/* STEP 3: PRIMARY CONTACT */}
          <div className="pt-2 border-t border-[var(--color-border-subtle)] space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-taupe-300)] font-semibold block">
              2. Primary Contact &amp; Professional Credentials
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="space-y-1.5">
                <label className="text-white font-medium block">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Eleanor Vance"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full p-2.5 rounded-lg bg-[var(--color-surface-base)]/80 border border-[var(--color-border-default)] text-white placeholder-[var(--color-text-tertiary)] focus:outline-none focus:border-[#2F8FFF]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-white font-medium block">Job Title / Role *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Head of Early Careers / Principal"
                  value={formData.roleTitle}
                  onChange={(e) => setFormData({ ...formData, roleTitle: e.target.value })}
                  className="w-full p-2.5 rounded-lg bg-[var(--color-surface-base)]/80 border border-[var(--color-border-default)] text-white placeholder-[var(--color-text-tertiary)] focus:outline-none focus:border-[#2F8FFF]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-white font-medium block">Professional Email *</label>
                <input
                  type="email"
                  required
                  placeholder="name@organisation.com"
                  value={formData.professionalEmail}
                  onChange={(e) => setFormData({ ...formData, professionalEmail: e.target.value })}
                  className="w-full p-2.5 rounded-lg bg-[var(--color-surface-base)]/80 border border-[var(--color-border-default)] text-white placeholder-[var(--color-text-tertiary)] focus:outline-none focus:border-[#2F8FFF]"
                />
              </div>
            </div>
          </div>

          {/* STEP 4: PROPOSED CONTRIBUTION & SAFEGUARDING */}
          <div className="pt-2 border-t border-[var(--color-border-subtle)] space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-taupe-300)] font-semibold block">
              3. Proposed Contribution &amp; Youth Safeguards
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1.5">
                <label className="text-white font-medium block">Primary Contribution Area *</label>
                <select
                  value={formData.contributionType}
                  onChange={(e) => setFormData({ ...formData, contributionType: e.target.value })}
                  className="w-full p-2.5 rounded-lg bg-[var(--color-surface-base)]/80 border border-[var(--color-border-default)] text-white focus:outline-none focus:border-[#2F8FFF]"
                >
                  <option>Apprenticeships &amp; Early Careers</option>
                  <option>School Careers Programme &amp; Student Guidance</option>
                  <option>Higher &amp; Further Education Pathways</option>
                  <option>Vocational &amp; Technical Skills Training</option>
                  <option>Career Fairs &amp; Employer Insight Events</option>
                  <option>Credential Verification &amp; Standards</option>
                  <option>Widening Access &amp; Social Mobility Mentoring</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-white font-medium block">Do you work with users under 18? *</label>
                <select
                  value={formData.worksWithMinors}
                  onChange={(e) => setFormData({ ...formData, worksWithMinors: e.target.value })}
                  className="w-full p-2.5 rounded-lg bg-[var(--color-surface-base)]/80 border border-[var(--color-border-default)] text-white focus:outline-none focus:border-[#2F8FFF]"
                >
                  <option>Yes, with established youth safeguarding policies</option>
                  <option>Yes, seeking institutional school facilitation</option>
                  <option>No, 18+ post-secondary &amp; adult learners only</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <label className="text-white font-medium block">
                Overview of Proposed Contribution / Programme Details
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe the specific opportunities, courses, apprenticeships, or career events you intend to contribute to Career OS..."
                value={formData.specificProgramme}
                onChange={(e) => setFormData({ ...formData, specificProgramme: e.target.value })}
                className="w-full p-2.5 rounded-lg bg-[var(--color-surface-base)]/80 border border-[var(--color-border-default)] text-white placeholder-[var(--color-text-tertiary)] focus:outline-none focus:border-[#2F8FFF]"
              />
            </div>
          </div>

          {/* SUBMIT BUTTON & PRIVACY PLEDGE */}
          <div className="pt-4 border-t border-[var(--color-border-default)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-[11px] text-[var(--color-text-tertiary)] max-w-lg">
              <strong className="text-white">Privacy Guarantee:</strong> We collect only organizational credentials to verify prospective partners. We never sell contact information or share application data with third parties.
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={loading}
              className="w-full sm:w-auto shrink-0"
            >
              {loading ? 'Submitting Application...' : 'Submit Partnership Application →'}
            </Button>
          </div>

        </form>
      )}
    </div>
  );
}
