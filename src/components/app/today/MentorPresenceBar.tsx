'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/lib/routes';
import { MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

interface MentorPresenceBarProps {
  mentorName: string;
  mentorDomain: string;
  portraitSrc: string;
  onAskMentor: () => void;
}

export function MentorPresenceBar({
  mentorName,
  mentorDomain,
  portraitSrc,
  onAskMentor,
}: MentorPresenceBarProps) {
  const firstName = mentorName.split(' ')[0] || 'Mentor';

  return (
    <div className="p-4 sm:p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-subtle">
      <div className="flex items-center gap-3.5">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 shrink-0">
          <Image
            src={portraitSrc}
            alt={mentorName}
            fill
            sizes="48px"
            className="object-cover object-top"
          />
        </div>
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold text-white">
              {mentorName}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent-blue-subtle)] text-[var(--accent-blue)] border border-[var(--accent-blue-border)]">
              {mentorDomain}
            </span>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] italic">
            &ldquo;I&apos;ve reviewed your Career Twin and active objective. Here are your priority vectors for today.&rdquo;
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 self-end sm:self-center">
        <Button
          variant="secondary"
          size="sm"
          onClick={onAskMentor}
          className="text-xs font-mono flex items-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
          <span>Ask {firstName} &rarr;</span>
        </Button>
      </div>
    </div>
  );
}
