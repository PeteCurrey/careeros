'use client';

import React, { useState } from 'react';
import { X, Lock, ShieldCheck, CheckCircle2, AlertCircle, Loader2, Building, Mail, User, FileText } from 'lucide-react';
import { ComplianceFramework, EvidenceDocument } from '@/types/compliance';

interface DocumentAccessRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFramework?: ComplianceFramework | null;
  selectedDocument?: EvidenceDocument | null;
}

export function DocumentAccessRequestModal({
  isOpen,
  onClose,
  selectedFramework,
  selectedDocument,
}: DocumentAccessRequestModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [role, setRole] = useState('');
  const [orgType, setOrgType] = useState<'school_district' | 'university' | 'enterprise_employer' | 'government' | 'auditor' | 'other'>('school_district');
  const [reason, setReason] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const documentName = selectedDocument?.title || (selectedFramework ? `${selectedFramework.name} Examination Report` : 'Restricted Compliance Dossier');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/compliance/request-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          requesterName: name,
          requesterEmail: email,
          requesterOrganisation: organisation,
          requesterRole: role,
          organisationType: orgType,
          requestedDocuments: [documentName],
          useCaseReason: reason,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit document access request.');
      }

      setSuccess(true);
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'An error occurred submitting your request.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-lg bg-[var(--background-dark-deep)] border border-[var(--color-border-default)] shadow-2xl p-6 sm:p-8 space-y-6 text-[var(--color-text-primary)]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--color-text-tertiary)] hover:text-white transition-colors p-1"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="space-y-4 text-center py-4">
            <div className="w-12 h-12 rounded-full bg-[#34D399]/10 border border-[#34D399]/30 text-[#34D399] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Document Access Request Submitted
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed max-w-md mx-auto">
              Thank you, {name}. Your request for <span className="font-semibold text-white">{documentName}</span> has been routed to the CareerOS Trust & Assurance Office. Our team will verify your institutional credentials and send a mutual NDA link to <span className="font-mono text-white">{email}</span> within 1 business day.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 text-xs font-semibold rounded-[var(--radius-button)] bg-white text-neutral-900 hover:bg-neutral-100 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Header */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#6BB8FF]">
                <Lock className="w-3 h-3" />
                <span>RESTRICTED ASSURANCE DOCUMENTATION</span>
              </div>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]">
                Request Auditor & Evidence Report
              </h2>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Access to third-party audit reports (SOC 2 Type II, Penetration Test summaries) requires institutional verification and a mutual Non-Disclosure Agreement (NDA).
              </p>
            </div>

            {/* Document Target Callout */}
            <div className="p-3 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-subtle)] space-y-1">
              <span className="text-[10px] font-mono uppercase text-[var(--color-text-tertiary)]">Target Document:</span>
              <p className="text-xs font-bold text-white">{documentName}</p>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-md bg-[#F87171]/10 border border-[#F87171]/30 text-[#F87171] text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase text-[var(--color-text-secondary)]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dr. Eleanor Vance"
                    className="w-full px-3 py-2 rounded-sm bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] focus:border-[#2F8FFF] focus:outline-hidden text-xs text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase text-[var(--color-text-secondary)]">
                    Work / Institutional Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. evance@district101.k12.us"
                    className="w-full px-3 py-2 rounded-sm bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] focus:border-[#2F8FFF] focus:outline-hidden text-xs text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase text-[var(--color-text-secondary)]">
                    Organisation / District Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                    placeholder="e.g. Chicago Public Schools"
                    className="w-full px-3 py-2 rounded-sm bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] focus:border-[#2F8FFF] focus:outline-hidden text-xs text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase text-[var(--color-text-secondary)]">
                    Organisation Type *
                  </label>
                  <select
                    value={orgType}
                    onChange={(e) => setOrgType(e.target.value as typeof orgType)}
                    className="w-full px-3 py-2 rounded-sm bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] focus:border-[#2F8FFF] focus:outline-hidden text-xs text-white"
                  >
                    <option value="school_district">K-12 School / District</option>
                    <option value="university">College / University</option>
                    <option value="enterprise_employer">Enterprise Employer</option>
                    <option value="government">Government / Public Agency</option>
                    <option value="auditor">Third-Party Auditor / Counsel</option>
                    <option value="other">Other Commercial Partner</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[10px] uppercase text-[var(--color-text-secondary)]">
                  Evaluation Purpose / Reason for Request *
                </label>
                <textarea
                  required
                  rows={2}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="e.g. Evaluating CareerOS for district-wide high school rollout during FY26 procurement review."
                  className="w-full px-3 py-2 rounded-sm bg-[var(--color-surface-sunken)] border border-[var(--color-border-default)] focus:border-[#2F8FFF] focus:outline-hidden text-xs text-white resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
                  <span>Encrypted submission</span>
                </span>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-button)] bg-[#2F8FFF] hover:bg-[#2F8FFF]/90 text-white font-semibold text-xs transition-colors disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Submit NDA Request</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
