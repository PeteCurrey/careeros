'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MentorHandoffContext } from '@/types/platform/career-brief';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/lib/routes';
import {
  X,
  Bot,
  Send,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  MessageSquare,
} from 'lucide-react';

interface MentorHandoffModalProps {
  context: MentorHandoffContext | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MentorHandoffModal({
  context,
  isOpen,
  onClose,
}: MentorHandoffModalProps) {
  const router = useRouter();
  const [customQuestion, setCustomQuestion] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  if (!isOpen || !context) return null;

  const mentorFirstName = context.mentorName.split(' ')[0] || 'Mentor';

  const handleLaunchSession = () => {
    // Package context parameters cleanly
    const query = selectedQuestion || customQuestion || context.suggestedQuestions[0] || '';
    
    // Future pass will read these params in the full Mentor workspace.
    // For now we navigate with clean query state.
    const searchParams = new URLSearchParams({
      source: context.sourceScreen,
      recommendation: context.recommendationId,
      q: query,
    });

    onClose();
    router.push(`${ROUTES.PRODUCT_AI_CAREER_MENTOR}?${searchParams.toString()}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <Card className="relative z-10 w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] shadow-2xl p-6 sm:p-7 space-y-6">
        {/* Header with Mentor Portrait */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[var(--color-border-default)]">
          <div className="flex items-center gap-3.5">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 shrink-0">
              <Image
                src={context.portraitSrc}
                alt={context.mentorName}
                fill
                sizes="48px"
                className="object-cover object-top"
              />
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">
                  Consult with {context.mentorName}
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-xs font-mono text-[var(--accent-blue)]">
                {context.mentorDomain}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[var(--color-text-secondary)] hover:text-white transition-colors"
            aria-label="Close mentor handoff"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Structured Context Badge */}
        <div className="p-3.5 rounded-lg bg-[var(--color-surface-base)] border border-[var(--color-border-default)] space-y-2 text-xs">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[var(--color-taupe-300)] font-semibold">
            <span>Context Packet Being Handed Off</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Sealed &bull; Private
            </span>
          </div>
          <p className="font-semibold text-white">
            Topic: {context.recommendationTitle}
          </p>
          {context.objectiveTitle && (
            <p className="text-[11px] text-[var(--color-text-secondary)]">
              Grounded in Objective: <span className="text-white">{context.objectiveTitle}</span>
            </p>
          )}
        </div>

        {/* Suggested Intent Questions */}
        <div className="space-y-2.5">
          <label className="text-xs font-mono uppercase text-[var(--color-taupe-300)] font-semibold block">
            Select a tailored question or write your own:
          </label>
          <div className="space-y-2">
            {context.suggestedQuestions.map((question, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSelectedQuestion(question);
                  setCustomQuestion('');
                }}
                className={`w-full text-left p-3 rounded text-xs transition-all border ${
                  selectedQuestion === question
                    ? 'bg-[var(--accent-blue-subtle)] border-[var(--accent-blue-border)] text-white font-medium shadow-sm'
                    : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white hover:border-white/20'
                }`}
              >
                &ldquo;{question}&rdquo;
              </button>
            ))}
          </div>
        </div>

        {/* Custom Input */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-mono text-[var(--color-text-tertiary)] block">
            Or type a specific question for {mentorFirstName}:
          </label>
          <div className="relative">
            <textarea
              value={customQuestion}
              onChange={(e) => {
                setCustomQuestion(e.target.value);
                setSelectedQuestion(null);
              }}
              rows={2}
              placeholder={`Ask ${mentorFirstName} about trade-offs, next steps, or specific obstacles...`}
              className="w-full rounded bg-[var(--color-surface-base)] border border-[var(--color-border-default)] p-3 text-xs text-white placeholder-[var(--color-text-tertiary)] focus:outline-none focus:border-[#2F8FFF] transition-colors resize-none"
            />
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-[var(--color-border-default)]">
          <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
            Full Mentor workspace builds in next pass
          </span>

          <div className="flex items-center gap-2 justify-end">
            <Button variant="outline" size="sm" onClick={onClose} className="text-xs font-mono">
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleLaunchSession}
              className="text-xs font-mono"
            >
              Start Session with {mentorFirstName} <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
