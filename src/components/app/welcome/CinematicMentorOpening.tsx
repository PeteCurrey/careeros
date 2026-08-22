'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { DailyMentorWelcome } from '@/types/platform/mentor-welcome';
import { trackMentorWelcomeEvent } from '@/lib/analytics/mentor-welcome';
import { Volume2, VolumeX, ArrowRight, Bot, ShieldCheck, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CinematicMentorOpeningProps {
  welcome: DailyMentorWelcome;
  onComplete: () => void;
  onSkip: () => void;
}

type SequenceStage =
  | 'ESTABLISHING_ENVIRONMENT'
  | 'MENTOR_ENTRANCE'
  | 'GREETING'
  | 'DAILY_LINE'
  | 'FIRST_EVER_CLOSING'
  | 'TRANSITIONING_OUT';

export function CinematicMentorOpening({
  welcome,
  onComplete,
  onSkip,
}: CinematicMentorOpeningProps) {
  const [stage, setStage] = useState<SequenceStage>('ESTABLISHING_ENVIRONMENT');
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [hasReducedMotion, setHasReducedMotion] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const startTimeRef = useRef(Date.now());
  const hasFinishedRef = useRef(false);

  // Check user prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setHasReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => setHasReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Track start
  useEffect(() => {
    trackMentorWelcomeEvent('mentor_welcome_started', {
      mentorId: welcome.mentorId,
      isFirstEver: welcome.isFirstEver,
      generationSource: welcome.generationSource,
    });
  }, [welcome]);

  // Handle Skip
  const handleSkip = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;

    const duration = Math.round((Date.now() - startTimeRef.current) / 1000);
    trackMentorWelcomeEvent('mentor_welcome_skipped', {
      mentorId: welcome.mentorId,
      isFirstEver: welcome.isFirstEver,
      durationSeconds: duration,
    });

    onSkip();
  }, [onSkip, welcome]);

  // Handle Natural Complete
  const handleFinishSequence = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;

    const duration = Math.round((Date.now() - startTimeRef.current) / 1000);
    trackMentorWelcomeEvent('mentor_welcome_completed', {
      mentorId: welcome.mentorId,
      isFirstEver: welcome.isFirstEver,
      durationSeconds: duration,
    });

    onComplete();
  }, [onComplete, welcome]);

  // Keyboard navigation & Escape to skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSkip]);

  // Audio Speech Synthesis / Web Audio layer with silent fallback
  const playSpeech = useCallback((text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window && audioEnabled) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.95;
        utterance.pitch = 1.0;
        window.speechSynthesis.speak(utterance);
      } catch {
        // Silently continue if audio blocked by browser policy
      }
    }
  }, [audioEnabled]);

  // Toggle Audio
  const toggleAudio = () => {
    const nextState = !audioEnabled;
    setAudioEnabled(nextState);
    trackMentorWelcomeEvent(
      nextState ? 'mentor_welcome_audio_enabled' : 'mentor_welcome_disabled',
      { mentorId: welcome.mentorId }
    );
    if (nextState) {
      playSpeech(`${welcome.greeting} ${welcome.dailyLine}`);
    } else {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }
  };

  // Choreographed Sequence Timers
  useEffect(() => {
    if (hasReducedMotion) {
      // Reduced motion: show full text immediately and complete smoothly in 3.5s
      const timer = setTimeout(() => {
        setStage('TRANSITIONING_OUT');
        setTimeout(handleFinishSequence, 600);
      }, 3500);
      return () => clearTimeout(timer);
    }

    const interval = setInterval(() => {
      setElapsedSeconds((prev) => prev + 0.1);
    }, 100);

    // Timeline durations
    const tEntrance = 1400;
    const tGreeting = 2800;
    const tDailyLine = 4200;
    const tFirstEver = welcome.isFirstEver ? 8200 : 0;
    const tTransition = welcome.isFirstEver ? 11000 : 7500;
    const tComplete = welcome.isFirstEver ? 12200 : 8500;

    const timer1 = setTimeout(() => setStage('MENTOR_ENTRANCE'), tEntrance);
    const timer2 = setTimeout(() => {
      setStage('GREETING');
      if (audioEnabled) playSpeech(welcome.greeting);
    }, tGreeting);
    const timer3 = setTimeout(() => {
      setStage('DAILY_LINE');
      if (audioEnabled) playSpeech(welcome.dailyLine);
    }, tDailyLine);

    let timer4: NodeJS.Timeout | null = null;
    if (welcome.isFirstEver) {
      timer4 = setTimeout(() => {
        setStage('FIRST_EVER_CLOSING');
        if (audioEnabled) playSpeech("Let's get to work.");
      }, tFirstEver);
    }

    const timer5 = setTimeout(() => setStage('TRANSITIONING_OUT'), tTransition);
    const timer6 = setTimeout(() => handleFinishSequence(), tComplete);

    return () => {
      clearInterval(interval);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      if (timer4) clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [hasReducedMotion, welcome, audioEnabled, playSpeech, handleFinishSequence]);

  return (
    <div
      role="dialog"
      aria-label="Career OS Daily Mentor Welcome"
      aria-modal="true"
      className={cn(
        'fixed inset-0 z-[100] flex flex-col justify-between bg-[var(--color-surface-dark-deep)] text-white overflow-hidden select-none transition-opacity duration-1000 ease-out',
        stage === 'TRANSITIONING_OUT' ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      )}
    >
      {/* ── 1. CANONICAL ENVIRONMENT BACKGROUND ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src={welcome.environment.backgroundSrc}
          alt={welcome.environment.name}
          fill
          priority
          sizes="100vw"
          quality={95}
          className={cn(
            'object-cover object-center transition-transform duration-[12000ms] ease-out',
            hasReducedMotion ? 'scale-100' : 'scale-105 translate-y-[-1%]'
          )}
        />

        {/* Deep Charcoal Cinematic Scrim for High Contrast Legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 40%, rgba(24, 24, 27, 0.72) 0%, color-mix(in srgb, var(--color-surface-dark-deep) 94%, transparent) 70%, var(--color-surface-dark-deep) 100%)',
          }}
        />

        {/* Subtle Horizon Vignette */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-dark-deep)] via-transparent to-[var(--color-surface-dark-deep)]/80 opacity-90"
        />
      </div>

      {/* ── 2. TOP HUD: CAREER OS IDENTITY & SKIP CONTROL ── */}
      <header className="relative z-20 container-site py-6 sm:py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#2F8FFF] animate-pulse" />
          <span className="text-[11px] font-mono tracking-widest text-[var(--color-taupe-300)] uppercase">
            Career OS &bull; Daily Initialization
          </span>
        </div>

        <button
          onClick={handleSkip}
          type="button"
          aria-label="Skip opening sequence"
          className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono text-[var(--color-taupe-200)] hover:text-white transition-all backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#2F8FFF]"
        >
          <span>Skip</span>
          <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-0.5" />
          <span className="text-[10px] text-white/40 hidden sm:inline ml-1">[Esc]</span>
        </button>
      </header>

      {/* ── 3. MAIN CINEMATIC SCENE: MENTOR & GROUNDED DAILY LINE ── */}
      <main className="relative z-10 container-site max-w-4xl mx-auto flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <div className="w-full space-y-8">
          {/* Canonical Mentor Portrait Frame */}
          <div
            className={cn(
              'relative mx-auto transition-all duration-1000 ease-out',
              hasReducedMotion || stage !== 'ESTABLISHING_ENVIRONMENT'
                ? 'opacity-100 scale-100 translate-y-0'
                : 'opacity-0 scale-95 translate-y-4'
            )}
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto p-1 bg-gradient-to-b from-white/30 via-white/10 to-transparent border border-white/20 shadow-2xl overflow-hidden backdrop-blur-md">
              <Image
                src={welcome.portraitSrc}
                alt={welcome.mentorName}
                fill
                sizes="112px"
                priority
                className="object-cover object-top rounded-full"
              />
            </div>

            {/* Subtle Domain Badge */}
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-[11px] font-mono text-[var(--color-taupe-300)]">
              <Bot className="w-3 h-3 text-[#2F8FFF]" />
              <span>{welcome.mentorName}</span>
              <span className="text-white/30">&bull;</span>
              <span className="text-white/70">{welcome.mentorDomain}</span>
            </div>
          </div>

          {/* Personal Salutation Greeting */}
          <div
            aria-live="polite"
            className={cn(
              'transition-all duration-700 ease-out',
              hasReducedMotion ||
                ['GREETING', 'DAILY_LINE', 'FIRST_EVER_CLOSING', 'TRANSITIONING_OUT'].includes(stage)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-3'
            )}
          >
            <p className="text-sm sm:text-base font-mono uppercase tracking-wider text-[var(--color-taupe-300)]">
              {welcome.greeting}
            </p>
          </div>

          {/* Grounded Single Daily Line */}
          <div
            className={cn(
              'min-h-[5.5rem] flex items-center justify-center transition-all duration-1000 ease-out',
              hasReducedMotion ||
                ['DAILY_LINE', 'FIRST_EVER_CLOSING', 'TRANSITIONING_OUT'].includes(stage)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            )}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-white max-w-2xl leading-[1.3] tracking-tight">
              &ldquo;{welcome.dailyLine}&rdquo;
            </h1>
          </div>

          {/* First-Ever Closing Statement */}
          {welcome.isFirstEver && (
            <div
              className={cn(
                'transition-all duration-700 ease-out',
                hasReducedMotion || ['FIRST_EVER_CLOSING', 'TRANSITIONING_OUT'].includes(stage)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-2'
              )}
            >
              <p className="text-base sm:text-lg font-mono text-[#6BB8FF] font-medium tracking-wide">
                Let&apos;s get to work.
              </p>
            </div>
          )}

          {/* Context Reason Subtitle */}
          <div
            className={cn(
              'pt-2 transition-all duration-700 ease-out',
              hasReducedMotion || ['DAILY_LINE', 'FIRST_EVER_CLOSING', 'TRANSITIONING_OUT'].includes(stage)
                ? 'opacity-70'
                : 'opacity-0'
            )}
          >
            <p className="text-[11px] font-mono text-[var(--color-text-tertiary)] max-w-md mx-auto">
              Grounded in {welcome.contextReason}
            </p>
          </div>
        </div>
      </main>

      {/* ── 4. BOTTOM BAR: VOICE TOGGLE & CANONICAL ENVIRONMENT DISCLOSURE ── */}
      <footer className="relative z-20 container-site py-6 sm:py-8 flex items-center justify-between text-xs text-[var(--color-text-tertiary)] font-mono">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleAudio}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/10 hover:border-white/20 text-[var(--color-taupe-300)] hover:text-white transition-colors"
          >
            {audioEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#2F8FFF]" />
                <span>Voice Enabled</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span>Voice Muted</span>
              </>
            )}
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[10px] text-[var(--color-taupe-400)]">
          <span>Environment: {welcome.environment.name}</span>
        </div>
      </footer>
    </div>
  );
}
