'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { MentorAssignment } from '@/types/platform/mentors';
import { ArrowRight, ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';

interface Step12MentorRevealProps {
  mentorAssignment: MentorAssignment;
  onNext: () => void;
  onBack: () => void;
}

export function Step12MentorReveal({
  mentorAssignment,
  onNext,
  onBack,
}: Step12MentorRevealProps) {
  const firstName = mentorAssignment.mentorName.split(' ')[0] || 'Mentor';

  return (
    <div className="w-full max-w-5xl mx-auto py-8 sm:py-12 px-4 sm:px-6 space-y-8 animate-in fade-in duration-500">
      {/* Header Signpost */}
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-2">
          <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-[var(--accent-blue-subtle)] text-[var(--accent-blue)] border border-[var(--accent-blue-border)] font-bold">
            Your Mentor
          </span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-serif text-white font-normal">
          We've found the Mentor that best fits where you are right now.
        </h1>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
          {mentorAssignment.mentorName} is your dedicated AI Career Mentor, specialising in {mentorAssignment.mentorDomain.toLowerCase()}.
        </p>
      </div>

      {/* Cinematic Reveal Card */}
      <Card className="p-8 sm:p-10 bg-gradient-to-br from-[#0F1420] via-[var(--color-surface-raised)] to-[#0A0D14] border border-[var(--accent-blue-border)] shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Portrait Column */}
          <div className="md:col-span-5 flex flex-col items-center text-center space-y-3">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
              <Image
                src={mentorAssignment.portraitSrc}
                alt={mentorAssignment.mentorName}
                fill
                priority
                sizes="(max-width: 768px) 144px, 176px"
                className="object-cover object-top"
              />
            </div>
            <div className="space-y-0.5">
              <h2 className="text-xl sm:text-2xl font-serif text-white font-normal">
                {mentorAssignment.mentorName}
              </h2>
              <span className="text-xs font-mono text-[var(--accent-blue)]">
                AI Career Mentor &bull; {mentorAssignment.mentorDomain}
              </span>
            </div>
          </div>

          {/* Assignment Reasoning Column */}
          <div className="md:col-span-7 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-white font-semibold">
                <Sparkles className="w-4 h-4 text-[#DDD36D]" />
                <span>Why {firstName}?</span>
              </div>
              <p className="text-sm text-zinc-200 leading-relaxed bg-[var(--color-surface-base)]/80 p-4 rounded-xl border border-white/10">
                &ldquo;{mentorAssignment.assignmentReason}&rdquo;
              </p>
            </div>

            <div className="space-y-2 text-xs text-[var(--color-text-secondary)]">
              <p className="leading-relaxed">
                {firstName} will act as your sounding board, give honest advice, and help you work out the best next steps for your career.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] flex items-center gap-2.5 text-xs text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Mentor conversations are always completely private to you</span>
            </div>
          </div>
        </div>
      </Card>

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
          size="lg"
          onClick={onNext}
          className="text-xs font-mono"
        >
          <span>Talk with {firstName}</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </Button>
      </div>
    </div>
  );
}
