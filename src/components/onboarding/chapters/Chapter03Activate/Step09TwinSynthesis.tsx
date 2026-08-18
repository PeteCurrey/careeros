'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Sparkles, RefreshCw, AlertCircle, ShieldCheck } from 'lucide-react';

interface Step09TwinSynthesisProps {
  isSynthesizing: boolean;
  synthesisError: string | null;
  onRetry: () => void;
}

export function Step09TwinSynthesis({
  isSynthesizing,
  synthesisError,
  onRetry,
}: Step09TwinSynthesisProps) {
  const assemblyNodes = [
    { from: 'Experience & background', to: 'Skills profile' },
    { from: 'Your goals', to: 'Career directions' },
    { from: 'Your industry focus', to: 'AI Career Mentor' },
    { from: 'Strengths & achievements', to: 'Career Passport' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 space-y-8 animate-in fade-in duration-300">
      {synthesisError ? (
        <Card className="p-8 sm:p-10 text-center space-y-5 bg-[var(--color-surface-raised)] border-red-500/40 shadow-2xl max-w-xl mx-auto">
          <AlertCircle className="w-12 h-12 text-red-400 mx-auto" />
          <div className="space-y-1.5">
            <h2 className="text-xl font-bold text-white">We couldn't finish building this yet</h2>
            <p className="text-xs text-red-300 leading-relaxed max-w-md mx-auto">
              Your information is safe. Please try again.
            </p>
          </div>
          <div className="pt-2">
            <Button type="button" onClick={onRetry} variant="primary" size="md" className="text-xs font-mono">
              <RefreshCw className="w-4 h-4 mr-2" />
              <span>Try again</span>
            </Button>
          </div>
        </Card>
      ) : (
        <div className="space-y-8 text-center">
          {/* Header Animation */}
          <div className="space-y-3 max-w-xl mx-auto">
            <div className="w-14 h-14 rounded-full bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] flex items-center justify-center text-[var(--accent-blue)] mx-auto">
              <Sparkles className="w-7 h-7 animate-pulse text-[#6BB8FF]" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white font-normal">
              Setting up your Career Twin…
            </h1>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Bringing together your experience, skills and goals into your private career profile.
            </p>
          </div>

          {/* Node Convergence Visual */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            {assemblyNodes.map((node) => (
              <div
                key={node.from}
                className="p-4 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-center justify-between gap-3 shadow-md"
              >
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] block">
                    {node.from}
                  </span>
                  <p className="text-xs font-bold text-white">&rarr; {node.to}</p>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#2F8FFF] animate-ping" />
              </div>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-mono text-[var(--color-text-tertiary)]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Private &bull; Stored securely &bull; Never shared without your choice</span>
          </div>
        </div>
      )}
    </div>
  );
}
