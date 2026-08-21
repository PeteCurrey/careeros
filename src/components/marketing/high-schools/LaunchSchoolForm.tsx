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
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function LaunchSchoolForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    institutionName: '',
    website: '',
    country: 'United States',
    stateRegion: '',
    schoolType: 'Public / State High School',
    studentPopulation: '1,000–2,500 students',
    yearGroups: 'Whole High School (Grades 9–12 / Ages 14–18)',
    teamSize: '3–5 counseling & careers team',
    currentPlatform: '',
    primaryChallenge: 'Expanding apprenticeships & equal-parity technical pathways',
    keyPathways: 'All pathways with equal editorial parity',
    pilotCohort: 'Grade 11 / Year 11 Cohort',
    timeframe: 'Next Academic Term',
    contactName: '',
    roleTitle: '',
    professionalEmail: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 bg-[var(--color-surface-raised)] border border-emerald-500/30 rounded-[var(--radius-card)] space-y-6 text-center max-w-2xl mx-auto shadow-editorial" id="launch-school-form">
        <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold">
            Launch School Application Received
          </span>
          <h3 className="text-2xl font-serif font-normal text-white">
            Thank you for your institutional enquiry.
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed max-w-lg mx-auto">
            Our education partnerships team will review <strong className="text-white">{formData.institutionName || 'your school'}</strong>&apos;s details and respond directly to <strong className="text-white">{formData.professionalEmail}</strong> within 1–2 business days with an institutional briefing pack and pilot setup guide.
          </p>
        </div>
        <div className="p-4 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded text-xs text-[var(--color-text-tertiary)] flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>No student personal data was collected during this enquiry.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-editorial space-y-6 max-w-4xl mx-auto" id="launch-school-form">
      
      {/* Header Bar */}
      <div className="bg-[var(--background-dark-deep)] p-6 sm:p-8 border-b border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="accent-blue-dot" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#2F8FFF] font-bold">
              Career OS Launch School Program
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-normal text-white">
            Become a Launch School or District
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Explore an early institutional deployment tailored to your counseling capacity and student cohorts.
          </p>
        </div>

        <span className="text-[11px] font-mono px-3 py-1 rounded bg-white/5 border border-white/10 text-[var(--color-taupe-300)] shrink-0">
          Institutional Partnership Application
        </span>
      </div>

      {/* Form Body */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
        
        {/* Section 1: Institution Details */}
        <div className="space-y-4">
          <span className="section-label block pb-1 border-b border-[var(--color-border-subtle)]">
            01 &bull; Institution &amp; School Information
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white block">
                School or District Name <span className="text-[#2F8FFF]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.institutionName}
                onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                placeholder="e.g. Westfield High School / District 401"
                className="w-full px-3.5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-white placeholder-[var(--color-text-disabled)] focus:border-[#2F8FFF] focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white block">
                School Website / Portal
              </label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                placeholder="https://www.westfieldhs.edu"
                className="w-full px-3.5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-white placeholder-[var(--color-text-disabled)] focus:border-[#2F8FFF] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white block">
                Country <span className="text-[#2F8FFF]">*</span>
              </label>
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-white focus:border-[#2F8FFF] focus:outline-none transition-colors"
              >
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="International / Other">International / Other</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white block">
                State / Region / Local Authority <span className="text-[#2F8FFF]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.stateRegion}
                onChange={(e) => setFormData({ ...formData, stateRegion: e.target.value })}
                placeholder="e.g. Ohio / Greater Manchester"
                className="w-full px-3.5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-white placeholder-[var(--color-text-disabled)] focus:border-[#2F8FFF] focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white block">
                School Type
              </label>
              <select
                value={formData.schoolType}
                onChange={(e) => setFormData({ ...formData, schoolType: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-white focus:border-[#2F8FFF] focus:outline-none transition-colors"
              >
                <option value="Public / State High School">Public / State High School</option>
                <option value="Independent / Private High School">Independent / Private High School</option>
                <option value="Academy Trust / Multi-School Group">Academy Trust / Multi-School Group</option>
                <option value="Vocational / Technical High School">Vocational / Technical High School</option>
                <option value="Public School District Authority">Public School District Authority</option>
                <option value="Charter / Specialized Academy">Charter / Specialized Academy</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white block">
                Approximate Student Population
              </label>
              <select
                value={formData.studentPopulation}
                onChange={(e) => setFormData({ ...formData, studentPopulation: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-white focus:border-[#2F8FFF] focus:outline-none transition-colors"
              >
                <option value="Under 500 students">Under 500 students</option>
                <option value="500–1,000 students">500–1,000 students</option>
                <option value="1,000–2,500 students">1,000–2,500 students</option>
                <option value="2,500–5,000 students">2,500–5,000 students</option>
                <option value="5,000+ students (District)">5,000+ students (District)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white block">
                Target Year / Age Cohort
              </label>
              <select
                value={formData.yearGroups}
                onChange={(e) => setFormData({ ...formData, yearGroups: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-white focus:border-[#2F8FFF] focus:outline-none transition-colors"
              >
                <option value="Whole High School (Grades 9–12 / Ages 14–18)">Whole High School (Grades 9–12 / Ages 14–18)</option>
                <option value="Senior Students (Grades 11–12 / Ages 16–18)">Senior Students (Grades 11–12 / Ages 16–18)</option>
                <option value="Early Secondary (Grades 9–10 / Ages 14–16)">Early Secondary (Grades 9–10 / Ages 14–16)</option>
                <option value="District-Wide Comprehensive">District-Wide Comprehensive</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white block">
                Careers / Counseling Team Size
              </label>
              <select
                value={formData.teamSize}
                onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-white focus:border-[#2F8FFF] focus:outline-none transition-colors"
              >
                <option value="1–2 counselors">1–2 counselors</option>
                <option value="3–5 counseling & careers team">3–5 counseling & careers team</option>
                <option value="6+ full department">6+ full department</option>
                <option value="Solo careers lead + teachers">Solo careers lead + teachers</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 2: Guidance Objectives */}
        <div className="space-y-4 pt-2">
          <span className="section-label block pb-1 border-b border-[var(--color-border-subtle)]">
            02 &bull; Career Guidance Context &amp; Objectives
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white block">
                Current Careers Platform / System (if any)
              </label>
              <input
                type="text"
                value={formData.currentPlatform}
                onChange={(e) => setFormData({ ...formData, currentPlatform: e.target.value })}
                placeholder="e.g. Naviance, Unifrog, Xello, MaiaLearning, None"
                className="w-full px-3.5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-white placeholder-[var(--color-text-disabled)] focus:border-[#2F8FFF] focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white block">
                Primary Career Guidance Challenge
              </label>
              <select
                value={formData.primaryChallenge}
                onChange={(e) => setFormData({ ...formData, primaryChallenge: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-white focus:border-[#2F8FFF] focus:outline-none transition-colors"
              >
                <option value="Expanding apprenticeships & equal-parity technical pathways">Expanding apprenticeships & equal-parity technical pathways</option>
                <option value="Counselor workload & finite 1:1 advising time">Counselor workload & finite 1:1 advising time</option>
                <option value="Student engagement between annual appointments">Student engagement between annual appointments</option>
                <option value="Building tangible student capability evidence">Building tangible student capability evidence</option>
                <option value="Post-graduation destination tracking">Post-graduation destination tracking</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white block">
                Planned Pilot Cohort
              </label>
              <input
                type="text"
                value={formData.pilotCohort}
                onChange={(e) => setFormData({ ...formData, pilotCohort: e.target.value })}
                placeholder="e.g. Grade 11 / Year 11 (Approx 150 students)"
                className="w-full px-3.5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-white placeholder-[var(--color-text-disabled)] focus:border-[#2F8FFF] focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white block">
                Desired Implementation Timeframe
              </label>
              <select
                value={formData.timeframe}
                onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-white focus:border-[#2F8FFF] focus:outline-none transition-colors"
              >
                <option value="Next Academic Term">Next Academic Term</option>
                <option value="Upcoming Academic Year">Upcoming Academic Year</option>
                <option value="Immediate Pilot (Current Semester)">Immediate Pilot (Current Semester)</option>
                <option value="Exploratory Evaluation / RFP">Exploratory Evaluation / RFP</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 3: Professional Contact */}
        <div className="space-y-4 pt-2">
          <span className="section-label block pb-1 border-b border-[var(--color-border-subtle)]">
            03 &bull; Lead Educator / Contact Details
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white block">
                Contact Full Name <span className="text-[#2F8FFF]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                placeholder="e.g. Dr. Eleanor Vance"
                className="w-full px-3.5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-white placeholder-[var(--color-text-disabled)] focus:border-[#2F8FFF] focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white block">
                Professional Role / Title <span className="text-[#2F8FFF]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.roleTitle}
                onChange={(e) => setFormData({ ...formData, roleTitle: e.target.value })}
                placeholder="e.g. Director of College & Career Readiness"
                className="w-full px-3.5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-white placeholder-[var(--color-text-disabled)] focus:border-[#2F8FFF] focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white block">
                Institutional Email Address <span className="text-[#2F8FFF]">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.professionalEmail}
                onChange={(e) => setFormData({ ...formData, professionalEmail: e.target.value })}
                placeholder="e.vance@westfieldhs.edu"
                className="w-full px-3.5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-white placeholder-[var(--color-text-disabled)] focus:border-[#2F8FFF] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-white block">
              Additional Context or Questions (Optional)
            </label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Tell us about your school priorities, existing initiatives, or specific student privacy questions..."
              className="w-full px-3.5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-white placeholder-[var(--color-text-disabled)] focus:border-[#2F8FFF] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Submit Bar & Privacy Reassurance */}
        <div className="pt-4 border-t border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-tertiary)]">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Institutional enquiry only. Zero student personal data collected.</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center px-8 py-3 bg-[#F4F3EF] text-[#202020] font-semibold text-sm rounded-[var(--radius-button)] hover:bg-white hover:shadow-[0_0_16px_rgba(244,243,239,0.15)] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
          >
            {loading ? 'Submitting Application...' : 'Apply for Launch School Program'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

      </form>

    </div>
  );
}
