'use client';

import React from 'react';
import { AdaptiveSplitLayout } from '../../shared/AdaptiveSplitLayout';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ArrowLeft, MapPin } from 'lucide-react';

interface Step02LocationProps {
  city: string;
  stateCode: string;
  zipCode: string;
  onChangeCity: (city: string) => void;
  onChangeState: (state: string) => void;
  onChangeZip: (zip: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function Step02Location({
  city,
  stateCode,
  zipCode,
  onChangeCity,
  onChangeState,
  onChangeZip,
  onNext,
  onBack,
}: Step02LocationProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onNext();
    }
  };

  return (
    <AdaptiveSplitLayout
      chapter="01_PROTECT"
      stepNumber="2"
      stepTotal="3"
      sectionLabel="Location &bull; Regional Context"
      headline="Where are you building your career?"
      description="Location helps Career OS understand nearby opportunities, education routes, and labour-market context."
      imageSrc="/media/hero/city_horizon_hero.jpg"
      imageAlt="Regional Market & Career Horizon"
      bottomVisualQuote={{
        text: 'Regional market context informs local apprenticeship parity, compensation baselines, and industry density.',
        author: 'Labour Market Intelligence',
      }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[var(--color-border-default)]">
            <MapPin className="w-4 h-4 text-[#2F8FFF]" />
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Regional Market Hub
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            {/* City */}
            <div className="sm:col-span-6 space-y-1.5">
              <label htmlFor="city-input" className="text-xs font-semibold text-white">
                City / Metro Area
              </label>
              <input
                id="city-input"
                type="text"
                required
                autoFocus
                value={city}
                onChange={(e) => onChangeCity(e.target.value)}
                placeholder="e.g. Austin, London, Chicago"
                className="w-full px-3.5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded text-sm text-white focus:outline-none focus:border-[#2F8FFF]"
              />
            </div>

            {/* State / Region */}
            <div className="sm:col-span-3 space-y-1.5">
              <label htmlFor="state-input" className="text-xs font-semibold text-white">
                State / Region
              </label>
              <input
                id="state-input"
                type="text"
                value={stateCode}
                onChange={(e) => onChangeState(e.target.value.toUpperCase())}
                maxLength={4}
                placeholder="e.g. TX, NY"
                className="w-full px-3.5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded text-sm text-white uppercase text-center focus:outline-none focus:border-[#2F8FFF]"
              />
            </div>

            {/* ZIP / Postcode */}
            <div className="sm:col-span-3 space-y-1.5">
              <label htmlFor="zip-input" className="text-xs font-semibold text-white">
                Postal Code (Optional)
              </label>
              <input
                id="zip-input"
                type="text"
                value={zipCode}
                onChange={(e) => onChangeZip(e.target.value)}
                placeholder="e.g. 78701"
                className="w-full px-3.5 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded text-sm text-white focus:outline-none focus:border-[#2F8FFF]"
              />
            </div>
          </div>

          <p className="text-[11px] text-[var(--color-text-secondary)]">
            We do not ask for or store your street address. We only calibrate regional opportunity models.
          </p>
        </div>

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
            type="submit"
            variant="primary"
            size="md"
            disabled={!city.trim()}
            className="text-xs font-mono"
          >
            <span>Continue to Security</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </form>
    </AdaptiveSplitLayout>
  );
}
