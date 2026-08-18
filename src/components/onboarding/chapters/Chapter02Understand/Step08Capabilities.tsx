'use client';

import React, { useState } from 'react';
import { AdaptiveSplitLayout } from '../../shared/AdaptiveSplitLayout';
import { Button } from '@/components/ui/Button';
import { CareerStage } from '@/types/platform/onboarding';
import { Sparkles, Plus, X, ArrowRight, ArrowLeft } from 'lucide-react';

interface Step08CapabilitiesProps {
  careerStage: CareerStage;
  skills: string[];
  onAddSkill: (skill: string) => void;
  onRemoveSkill: (skill: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function Step08Capabilities({
  careerStage,
  skills,
  onAddSkill,
  onRemoveSkill,
  onNext,
  onBack,
}: Step08CapabilitiesProps) {
  const [inputVal, setInputVal] = useState('');

  const getSuggestions = (stage: CareerStage) => {
    switch (stage) {
      case 'SCHOOL_STUDENT':
      case 'COLLEGE_UNIVERSITY':
        return ['Problem Solving', 'Teamwork', 'Communication', 'Presentations', 'Data Analysis', 'Research', 'Time Management'];
      case 'APPRENTICE_TRADE':
        return ['Diagnostics & Troubleshooting', 'Safety Compliance', 'Blueprint Reading', 'Equipment Maintenance', 'Electrical Work', 'Tool Handling'];
      case 'LEADER_EXECUTIVE':
        return ['Strategic Planning', 'Team Leadership', 'Budget Management', 'Hiring & Mentoring', 'Executive Reporting', 'Operations'];
      case 'ENTREPRENEUR':
        return ['Product Strategy', 'Sales & Marketing', 'Customer Research', 'Financial Planning', 'Team Building', 'Negotiation'];
      case 'CAREER_CHANGER':
        return ['Project Management', 'Clear Communication', 'Problem Solving', 'Process Improvement', 'Client Management', 'Adaptability'];
      default:
        return ['Project Management', 'Communication', 'Problem Solving', 'Data Analysis', 'Strategic Planning', 'Client Relations'];
    }
  };

  const suggestions = getSuggestions(careerStage).filter((s) => !skills.includes(s));

  const handleAdd = () => {
    if (inputVal.trim() && !skills.includes(inputVal.trim())) {
      onAddSkill(inputVal.trim());
      setInputVal('');
    }
  };

  return (
    <AdaptiveSplitLayout
      chapter="02_UNDERSTAND"
      stepNumber="5"
      stepTotal="5"
      sectionLabel="Your skills"
      headline="What are you good at?"
      description="What kinds of things do people rely on you to do? Tell us about your main skills and strengths."
      imageSrc="/media/product/career_twin_horizon.jpg"
      imageAlt="Skills and Strengths"
      bottomVisualQuote={{
        text: 'Your Career Twin is built around what you can actually do.',
        author: 'Career OS',
      }}
    >
      <div className="space-y-6">
        <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-5">
          {/* Active Skills List */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-white">
                Your selected skills ({skills.length}):
              </label>
            </div>

            {skills.length > 0 ? (
              <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-[var(--color-surface-base)] border border-[var(--color-border-default)] min-h-[60px]">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent-blue-subtle)] text-white border border-[var(--accent-blue-border)] text-xs font-medium"
                  >
                    <span>{s}</span>
                    <button
                      type="button"
                      onClick={() => onRemoveSkill(s)}
                      className="text-[var(--color-taupe-300)] hover:text-white transition-colors"
                      title={`Remove ${s}`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-xs text-[var(--color-text-tertiary)] italic p-3 rounded bg-[var(--color-surface-base)]">
                No skills added yet. Type below or choose from suggestions.
              </p>
            )}
          </div>

          {/* Add custom skill input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAdd();
                }
              }}
              placeholder="Type a skill or strength..."
              className="flex-1 px-3.5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#2F8FFF]"
            />
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={handleAdd}
              disabled={!inputVal.trim()}
              className="text-xs font-mono"
            >
              <Plus className="w-3.5 h-3.5 mr-1" />
              <span>Add</span>
            </Button>
          </div>

          {/* Suggested Skills */}
          {suggestions.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-[var(--color-border-default)]">
              <span className="text-[10px] font-mono uppercase text-[var(--color-taupe-300)] font-semibold block">
                Suggestions:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {suggestions.slice(0, 6).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => onAddSkill(s)}
                    className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs text-zinc-300 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <Plus className="w-2.5 h-2.5 text-[var(--accent-blue)]" />
                    <span>{s}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

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
            <Sparkles className="w-4 h-4 mr-1.5 text-[#6BB8FF]" />
            <span>Build my Career Twin</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </AdaptiveSplitLayout>
  );
}
