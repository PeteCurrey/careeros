'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CareerTwin, CareerPassport, CareerGraphSeed } from '@/types/platform/intelligence';
import { MentorAssignment, CareerObjective } from '@/types/platform/mentors';
import {
  Sparkles,
  Award,
  Compass,
  Bot,
  Target,
  ArrowRight,
} from 'lucide-react';

interface Step15SystemLaunchProps {
  careerTwin: CareerTwin | null;
  passport: CareerPassport | null;
  graphSeed: CareerGraphSeed | null;
  mentorAssignment: MentorAssignment | null;
  careerObjective: CareerObjective | null;
  initialActions: Array<{ title: string; description: string; type: string }>;
  isActivating: boolean;
  activationError: string | null;
  onActivate: () => void;
}

export function Step15SystemLaunch({
  careerTwin,
  passport,
  graphSeed,
  mentorAssignment,
  careerObjective,
  initialActions,
  isActivating,
  activationError,
  onActivate,
}: Step15SystemLaunchProps) {
  /**
   * Every row reports what was actually built.
   *
   * This summary previously hardcoded a fallback for each count and a fixed
   * 'READY' / 'CONNECTED' / 'ACTIVE' status, so a user whose synthesis had
   * returned nothing was still shown "3 skills and strengths", "1 verified
   * record", "2 possible directions" and a mentor by name. The screen that
   * tells someone their Career OS is assembled has to be the one screen that
   * cannot overstate it.
   */
  const plural = (n: number, one: string, many: string) =>
    `${n} ${n === 1 ? one : many}`;

  const capabilityCount = careerTwin?.capabilities?.length ?? 0;
  const passportCount = passport?.entries?.length ?? 0;
  const pathwayCount = graphSeed?.nodes?.length ?? 0;

  const systems = [
    {
      name: 'Career Twin',
      ready: capabilityCount > 0,
      detail: capabilityCount
        ? plural(capabilityCount, 'skill and strength', 'skills and strengths')
        : 'Nothing added yet',
      icon: Sparkles,
    },
    {
      name: 'Career Passport',
      ready: passportCount > 0,
      detail: passportCount
        ? plural(passportCount, 'record', 'records')
        : 'No records yet',
      icon: Award,
    },
    {
      name: 'Career Map',
      ready: pathwayCount > 0,
      detail: pathwayCount
        ? plural(pathwayCount, 'possible direction', 'possible directions')
        : 'Not mapped yet',
      icon: Compass,
    },
    {
      name: 'AI Career Mentor',
      ready: Boolean(mentorAssignment?.mentorName),
      detail: mentorAssignment
        ? `${mentorAssignment.mentorName} \u00b7 AI mentor`
        : 'Not assigned yet',
      icon: Bot,
    },
    {
      name: 'Your Plan',
      ready: Boolean(careerObjective?.horizonDays),
      detail: careerObjective?.horizonDays
        ? `${careerObjective.horizonDays}-day next steps`
        : 'No plan yet',
      icon: Target,
    },
  ].map((system) => ({
    ...system,
    status: system.ready ? 'READY' : 'PENDING',
  }));

  const readyCount = systems.filter((s) => s.ready).length;
  const allReady = readyCount === systems.length;

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 space-y-10 animate-in fade-in duration-500">
      {/* Header Signpost */}
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-2">
          <span
            className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded font-bold ${
              allReady
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-[var(--accent-blue-subtle)] text-[var(--accent-blue)] border border-[var(--accent-blue-border)]'
            }`}
          >
            {allReady ? 'All ready' : `${readyCount} of ${systems.length} ready`}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal leading-tight">
          {allReady ? 'Your Career OS is ready.' : 'Your Career OS is set up.'}
        </h1>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {allReady
            ? "We've created your Career Twin, prepared your map, and connected your Mentor."
            : 'You can start now and fill in the rest as you go \u2014 nothing here is fixed.'}
        </p>
      </div>

      {/* System Illumination Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {systems.map((sys) => {
          const Icon = sys.icon;

          return (
            <Card
              key={sys.name}
              className={`p-4 sm:p-5 bg-gradient-to-br from-[var(--color-surface-raised)] to-[var(--color-surface-base)] space-y-2 shadow-md transition-colors ${
                sys.ready
                  ? 'border border-emerald-500/30 hover:border-emerald-500/50'
                  : 'border border-[var(--color-border-default)]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-white text-xs">
                  <Icon
                    className={`w-4 h-4 ${
                      sys.ready ? 'text-emerald-400' : 'text-[var(--color-text-tertiary)]'
                    }`}
                  />
                  <span>{sys.name}</span>
                </div>
                <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                  {sys.status}
                </span>
              </div>
              <p className="text-[11px] text-[var(--color-text-secondary)] leading-tight">
                {sys.detail}
              </p>
            </Card>
          );
        })}
      </div>

      {/* Initial Actions Preview */}
      {initialActions.length > 0 && (
        <Card className="p-6 sm:p-7 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border-default)]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Suggested first steps
            </h3>
          </div>

          <div className="space-y-2">
            {initialActions.map((action, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-[var(--color-surface-base)] border border-[var(--color-border-default)] flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-[var(--accent-blue-subtle)] border border-[var(--accent-blue-border)] text-[var(--accent-blue)] text-[11px] font-mono flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  {idx + 1}
                </div>
                <div className="space-y-0.5 min-w-0 flex-1">
                  <p className="text-xs font-bold text-white">{action.title}</p>
                  <p className="text-[11px] text-[var(--color-text-secondary)] leading-snug">
                    {action.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {activationError && (
        <div className="p-4 rounded-lg bg-red-950/30 border border-red-700/40 text-xs text-red-300 text-center max-w-lg mx-auto">
          {activationError}
        </div>
      )}

      {/* Final Launch Action */}
      <div className="text-center pt-2 space-y-3">
        <Button
          type="button"
          onClick={onActivate}
          variant="primary"
          size="lg"
          disabled={isActivating}
          className="w-full sm:w-auto px-10 py-3.5 text-sm font-mono shadow-xl"
        >
          <span>{isActivating ? 'Opening Career OS…' : 'Enter Career OS'}</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>

        <p className="text-[11px] font-mono text-[var(--color-taupe-300)]">
          Private &bull; Secure &bull; Built for your career
        </p>
      </div>
    </div>
  );
}
