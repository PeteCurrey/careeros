'use client';

import React from 'react';
import { ShieldCheck, Sparkles, Clock } from 'lucide-react';

interface TodayGreetingProps {
  period: 'morning' | 'afternoon' | 'evening';
  firstName: string;
  contextStatement: string;
  generatedAt: string;
}

export function TodayGreeting({
  period,
  firstName,
  contextStatement,
  generatedAt,
}: TodayGreetingProps) {
  const formattedTime = new Date(generatedAt).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-3xl sm:text-4xl font-serif font-normal tracking-tight text-white">
          {/* A name we don't have is left out, never substituted. */}
          Good {period}{firstName ? `, ${firstName}` : ''}.
        </h1>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-[var(--color-taupe-300)]">
          <Clock className="w-3.5 h-3.5 text-[#2F8FFF]" />
          <span>Updated today at {formattedTime}</span>
        </div>
      </div>
      <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
        {contextStatement}
      </p>
    </div>
  );
}
