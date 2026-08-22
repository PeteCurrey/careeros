'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { EvidenceDocument } from '@/types/compliance';
import { DocumentAccessRequestModal } from './DocumentAccessRequestModal';
import { FileText, Lock, Download, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';

interface EvidenceDocumentsVaultViewProps {
  documents: EvidenceDocument[];
}

export function EvidenceDocumentsVaultView({ documents }: EvidenceDocumentsVaultViewProps) {
  const [selectedDoc, setSelectedDoc] = useState<EvidenceDocument | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleRequestDoc = (doc: EvidenceDocument) => {
    setSelectedDoc(doc);
    setModalOpen(true);
  };

  return (
    <section id="compliance-documents" className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[var(--color-brand-300)]">
          <FileText className="w-3.5 h-3.5" />
          <span>EVIDENCE VAULT & INSTITUTIONAL DOSSIERS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
          Compliance documents & audit reports
        </h2>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
          We maintain transparent documentation for procurement officers, security architects, district counsel, and privacy leads. Public documents are accessible instantly; confidential third-party examination reports are available under mutual NDA.
        </p>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {documents.map((doc) => {
          const isRestricted = doc.requiresNda;

          return (
            <div
              key={doc.id}
              className="p-5 rounded-md bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase font-bold text-[var(--color-text-tertiary)] bg-[var(--overlay-lift)] px-2 py-0.5 rounded-xs border border-[var(--color-border-subtle)]">
                    {doc.documentType.replace('_', ' ')}
                  </span>

                  <span
                    className={`font-mono text-[10px] uppercase px-2 py-0.5 rounded-xs border ${
                      isRestricted
                        ? 'bg-[var(--color-warning)]/10 text-[var(--color-warning)] border-[var(--color-warning)]/30'
                        : 'bg-[var(--color-success)]/10 text-[var(--color-success)] border-[var(--color-success)]/30'
                    }`}
                  >
                    {isRestricted ? 'NDA Required' : 'Public Document'}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                    {doc.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs">
                <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
                  Version {doc.version}
                </span>

                {isRestricted ? (
                  <button
                    type="button"
                    onClick={() => handleRequestDoc(doc)}
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--accent-blue)] hover:text-[var(--color-brand-300)] font-semibold transition-colors"
                  >
                    <Lock className="w-3 h-3" />
                    <span>Request Access (NDA)</span>
                  </button>
                ) : doc.fileUrl ? (
                  <Link
                    href={doc.fileUrl}
                    className="inline-flex items-center gap-1 text-xs text-[var(--color-brand-300)] hover:underline font-semibold"
                  >
                    <span>View Document</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                ) : (
                  <span className="text-[11px] text-[var(--color-text-tertiary)]">
                    Available upon request
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <DocumentAccessRequestModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedDocument={selectedDoc}
      />
    </section>
  );
}
