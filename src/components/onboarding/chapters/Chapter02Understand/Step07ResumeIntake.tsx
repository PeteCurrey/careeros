'use client';

import React from 'react';
import { AdaptiveSplitLayout } from '../../shared/AdaptiveSplitLayout';
import { ResumeExtractionVisual } from '../../shared/ResumeExtractionVisual';
import { Button } from '@/components/ui/Button';
import { ExtractedResumeData } from '@/types/platform/onboarding';
import {
  FileText,
  Upload,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

interface Step07ResumeIntakeProps {
  extractedResume: ExtractedResumeData | null;
  isUploadingResume: boolean;
  onUploadResume: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function Step07ResumeIntake({
  extractedResume,
  isUploadingResume,
  onUploadResume,
  onNext,
  onBack,
}: Step07ResumeIntakeProps) {
  return (
    <AdaptiveSplitLayout
      chapter="02_UNDERSTAND"
      stepNumber="4"
      stepTotal="4"
      sectionLabel="Experience &bull; Head Start"
      headline="Already have a resume? Give Career OS a head start."
      description="Uploading a resume is completely optional. If you have one, Career OS will extract your work history, verified skills, and education into your Career Passport vault."
      imageSrc="/media/product/how_it_works_hero.jpg"
      imageAlt="Resume Intake & Passport Vault"
      bottomVisualQuote={{
        text: 'Extracted history is tagged with verifiable provenance (RESUME_EXTRACTED) and remains 100% editable.',
        author: 'Career Passport Vault',
      }}
    >
      <div className="space-y-6">
        {/* If resume extracted, show results */}
        {extractedResume ? (
          <div className="space-y-4">
            <ResumeExtractionVisual extracted={extractedResume} />
            <div className="flex items-center justify-between text-xs font-mono text-emerald-400 p-3 rounded bg-emerald-500/10 border border-emerald-500/20">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Ready to review capabilities
              </span>
              <label className="text-xs text-[var(--accent-blue)] hover:underline cursor-pointer">
                Upload different file
                <input
                  type="file"
                  accept=".pdf,.docx,.txt"
                  onChange={onUploadResume}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        ) : (
          /* Upload Card */
          <div className="p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-dashed border-[var(--color-border-default)] hover:border-[#2F8FFF]/50 transition-colors text-center space-y-5">
            <div className="w-12 h-12 rounded-full bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] flex items-center justify-center text-[var(--accent-blue)] mx-auto">
              <Upload className="w-5 h-5" />
            </div>

            <div className="space-y-1.5 max-w-md mx-auto">
              <h3 className="text-base font-bold text-white">
                Upload your resume (PDF or DOCX)
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Career OS will read your experience, identify your strongest skills, and build your starting Career Passport.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <label className="px-6 py-3 bg-[var(--accent-blue)] hover:bg-[#2575D4] text-white rounded-lg text-xs font-mono font-semibold cursor-pointer inline-flex items-center gap-2 shadow-md transition-all">
                <FileText className="w-4 h-4" />
                <span>{isUploadingResume ? 'Extracting experience…' : 'Select Resume File'}</span>
                <input
                  type="file"
                  accept=".pdf,.docx,.txt"
                  disabled={isUploadingResume}
                  onChange={onUploadResume}
                  className="hidden"
                />
              </label>
            </div>

            <div className="pt-3 border-t border-[var(--color-border-default)] flex items-center justify-center gap-2 text-[11px] text-[var(--color-text-tertiary)] font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Private &bull; Encrypted in transit &bull; Never shared with employers</span>
            </div>
          </div>
        )}

        {/* Bottom Actions */}
        <div className="pt-2 flex items-center justify-between">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-xs font-mono text-[var(--color-taupe-300)]"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>Back</span>
          </Button>

          <Button
            type="button"
            variant="primary"
            size="md"
            onClick={onNext}
            className="text-xs font-mono"
          >
            <span>{extractedResume ? 'Review capabilities' : 'Continue without resume'}</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </AdaptiveSplitLayout>
  );
}
