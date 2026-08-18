'use client';

import React from 'react';
import { ExtractedResumeData } from '@/types/platform/onboarding';
import { Card } from '@/components/ui/Card';
import { CheckCircle2, Briefcase, GraduationCap, Award, Sparkles } from 'lucide-react';

interface ResumeExtractionVisualProps {
  extracted: ExtractedResumeData | null;
  fileName?: string;
}

export function ResumeExtractionVisual({ extracted, fileName }: ResumeExtractionVisualProps) {
  if (!extracted) return null;

  return (
    <Card className="p-5 sm:p-6 bg-[var(--color-surface-raised)] border border-emerald-500/30 space-y-4 shadow-lg animate-in fade-in duration-300">
      <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border-default)]">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
            Resume Information Extracted
          </h3>
        </div>
        {fileName && (
          <span className="text-[10px] font-mono text-[var(--color-taupe-300)] truncate max-w-[180px]">
            {fileName}
          </span>
        )}
      </div>

      {/* Extracted Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
        <div className="p-3 rounded-lg bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1">
          <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] block">
            Skills Found
          </span>
          <p className="text-base font-bold text-white">
            {extracted.extractedSkills?.length || 0}
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1">
          <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] block">
            Certifications
          </span>
          <p className="text-base font-bold text-white">
            {extracted.extractedCertifications?.length || 0}
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1">
          <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] block">
            Experience
          </span>
          <p className="text-base font-bold text-white">
            {extracted.roleTitle ? 'Identified' : 'Reviewed'}
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-1">
          <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] block">
            Education
          </span>
          <p className="text-base font-bold text-white">
            {extracted.extractedEducation ? 'Mapped' : 'Reviewed'}
          </p>
        </div>
      </div>

      {/* Skills Pill List */}
      {extracted.extractedSkills?.length > 0 && (
        <div className="space-y-1.5 pt-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-taupe-300)] block">
            Extracted Capability Vectors:
          </span>
          <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-1">
            {extracted.extractedSkills.map((s) => (
              <span
                key={s}
                className="px-2 py-0.5 rounded bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] text-xs text-white"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}
