'use client';

import React, { useState } from 'react';
import { CareerEvent } from '@/types/events/platform';
import { getOrCreatePreparationPlan, togglePreparationTask } from '@/lib/events/store';
import { X, CheckCircle2, Circle, Sparkles, Users, MessageSquare, FileText, ArrowRight, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EventPreparationModalProps {
  event: CareerEvent;
  isOpen: boolean;
  onClose: () => void;
}

export function EventPreparationModal({ event, isOpen, onClose }: EventPreparationModalProps) {
  const [plan, setPlan] = useState(() => getOrCreatePreparationPlan(event));
  const [activeTab, setActiveTab] = useState<'checklist' | 'pitch' | 'questions' | 'networking'>('checklist');

  if (!isOpen) return null;

  const handleToggleTask = (taskId: string) => {
    togglePreparationTask(event.id, taskId);
    setPlan(getOrCreatePreparationPlan(event));
  };

  const completedCount = plan.checklist.filter((t) => t.completed).length;
  const completionPct = Math.round((completedCount / plan.checklist.length) * 100);

  const tabs = [
    { id: 'checklist', label: 'Preparation Checklist', icon: CheckCircle2 },
    { id: 'pitch', label: 'Elevator Pitch', icon: MessageSquare },
    { id: 'questions', label: 'Questions to Ask', icon: Lightbulb },
    { id: 'networking', label: 'Networking Goals', icon: Users },
  ] as const;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full sm:max-w-xl max-h-[90dvh] bg-[var(--color-surface-base)] border border-[var(--color-border-strong)] rounded-t-xl sm:rounded-[var(--radius-card)] shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-[var(--color-border-default)] space-y-2 shrink-0">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[var(--accent-blue)]">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Event Preparation — AI Assisted</span>
              </div>
              <h3 className="text-base font-bold text-[var(--color-text-primary)] leading-snug line-clamp-2">
                {event.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white shrink-0"
              aria-label="Close preparation panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[var(--accent-blue)] to-emerald-400 transition-all duration-500"
                style={{ width: `${completionPct}%` }}
              />
            </div>
            <span className="text-[11px] text-[var(--color-text-tertiary)] whitespace-nowrap">
              {completedCount}/{plan.checklist.length} tasks complete
            </span>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="flex border-b border-[var(--color-border-default)] shrink-0 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium whitespace-nowrap border-b-2 transition-colors',
                  activeTab === tab.id
                    ? 'border-[var(--accent-blue)] text-[var(--color-text-primary)]'
                    : 'border-transparent text-[var(--color-text-secondary)] hover:text-white'
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">

          {activeTab === 'checklist' && (
            <div className="space-y-3">
              <p className="text-xs text-[var(--color-text-secondary)]">
                Complete these steps before the event to maximize your preparation and make a strong impression.
              </p>
              {['research', 'cv', 'questions', 'follow-up'].map((cat) => {
                const catTasks = plan.checklist.filter((t) => t.category === cat);
                if (catTasks.length === 0) return null;
                const catLabels: Record<string, string> = {
                  research: 'Employer Research',
                  cv: 'Resume & Profile Preparation',
                  questions: 'Prepare Your Questions',
                  'follow-up': 'Post-Event Follow-Up',
                };
                return (
                  <div key={cat} className="space-y-2">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-300)]">
                      {catLabels[cat]}
                    </div>
                    {catTasks.map((task) => (
                      <button
                        key={task.id}
                        type="button"
                        onClick={() => handleToggleTask(task.id)}
                        className={cn(
                          'w-full p-3 rounded-[var(--radius-sm)] border text-left flex items-start gap-3 transition-all',
                          task.completed
                            ? 'bg-[rgba(52,211,153,0.06)] border-[rgba(52,211,153,0.25)] opacity-70'
                            : 'bg-[var(--color-surface-raised)] border-[var(--color-border-default)] hover:border-zinc-500'
                        )}
                      >
                        {task.completed
                          ? <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          : <Circle className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                        }
                        <span className={cn('text-xs', task.completed ? 'line-through text-[var(--color-text-tertiary)]' : 'text-[var(--color-text-secondary)]')}>
                          {task.task}
                        </span>
                      </button>
                    ))}
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'pitch' && (
            <div className="space-y-4">
              <p className="text-xs text-[var(--color-text-secondary)]">
                Use this structured 30-second elevator pitch as a confident opening for any employer conversation at this event.
              </p>
              <div className="p-4 bg-[var(--color-surface-raised)] border border-[rgba(47,143,255,0.2)] rounded-[var(--radius-sm)] space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent-blue)]">
                  Your Personalized Opening
                </div>
                <p className="text-sm text-[var(--color-text-primary)] leading-relaxed font-medium italic">
                  &ldquo;{plan.elevatorPitch}&rdquo;
                </p>
              </div>
              <div className="p-3 bg-amber-950/30 border border-amber-600/20 rounded-[var(--radius-sm)]">
                <p className="text-[11px] text-amber-300">
                  <strong>Tip:</strong> Practice this out loud 3 times before the event. Adjust the specifics based on which employer you are speaking with.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'questions' && (
            <div className="space-y-4">
              <p className="text-xs text-[var(--color-text-secondary)]">
                Thoughtful questions signal genuine interest. Here are tailored questions for each participating organization.
              </p>
              {plan.questionsForEmployers.map((q, i) => (
                <div key={i} className="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-taupe-300)]">
                    {q.employerName}
                  </div>
                  <p className="text-sm text-[var(--color-text-primary)] font-medium leading-snug">
                    &ldquo;{q.question}&rdquo;
                  </p>
                  <p className="text-[11px] text-[var(--color-text-tertiary)]">
                    {q.context}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'networking' && (
            <div className="space-y-4">
              <p className="text-xs text-[var(--color-text-secondary)]">
                Set concrete networking goals before the event to ensure purposeful use of your time.
              </p>
              {plan.networkingGoals.map((goal, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)]">
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-blue)] shrink-0 mt-0.5" />
                  <span className="text-xs text-[var(--color-text-secondary)]">{goal}</span>
                </div>
              ))}
              <div className="p-3 bg-[rgba(47,143,255,0.06)] border border-[rgba(47,143,255,0.18)] rounded-[var(--radius-sm)]">
                <p className="text-[11px] text-[var(--color-text-secondary)]">
                  <strong className="text-[var(--color-text-primary)]">After the event:</strong> Log your conversations and contacts within 24 hours and send follow-up notes.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[var(--color-border-default)] flex items-center justify-between gap-3 shrink-0 bg-[var(--color-surface-sunken)]">
          <p className="text-[10px] text-[var(--color-text-tertiary)]">
            AI preparation generated by CareerOS. Personalized content unlocks when connected to your Career Twin.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-xs font-semibold text-[var(--color-text-primary)] rounded-[var(--radius-button)] hover:bg-zinc-700"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
