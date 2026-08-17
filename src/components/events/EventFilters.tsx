'use client';

import React, { useState } from 'react';
import {
  EventFilterState,
  CareerStage,
  ExperienceLevel,
  EventCostType,
  OrganiserType,
} from '@/types/events/platform';
import { EVENT_CATEGORIES, EVENT_SECTORS } from '@/lib/events/data';
import {
  Search,
  Calendar,
  MapPin,
  Filter,
  X,
  SlidersHorizontal,
  Navigation,
  Globe,
  ChevronDown,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface EventFiltersProps {
  filters: EventFilterState;
  onFilterChange: (updated: Partial<EventFilterState>) => void;
  onResetFilters: () => void;
  activeResultCount?: number;
}

export function EventFilters({
  filters,
  onFilterChange,
  onResetFilters,
  activeResultCount,
}: EventFiltersProps) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  // Dominant WHEN options
  const whenOptions = [
    { value: 'any', label: 'Any Date' },
    { value: 'today', label: 'Today' },
    { value: 'tomorrow', label: 'Tomorrow' },
    { value: 'this-week', label: 'This Week' },
    { value: 'this-weekend', label: 'This Weekend' },
    { value: 'next-week', label: 'Next Week' },
    { value: 'this-month', label: 'This Month' },
  ] as const;

  // Dominant WHERE options
  const whereOptions = [
    { value: 'all', label: 'Everywhere' },
    { value: 'near-me', label: 'Near Me' },
    { value: 'online', label: 'Online Only' },
    { value: 'hybrid', label: 'Hybrid' },
    { value: 'nationwide', label: 'Nationwide' },
  ] as const;

  // Career stages list
  const careerStageOptions: { value: CareerStage; label: string }[] = [
    { value: 'high-school', label: 'High School (14-18)' },
    { value: 'college', label: 'College & Sixth Form' },
    { value: 'university', label: 'Undergraduate' },
    { value: 'graduate', label: 'New Graduate' },
    { value: 'early-career', label: 'Early Career (1-3 yrs)' },
    { value: 'mid-career', label: 'Mid-Career (4-8 yrs)' },
    { value: 'senior-executive', label: 'Senior & Executive' },
    { value: 'career-changer', label: 'Career Changers' },
    { value: 'entrepreneur-founder', label: 'Entrepreneurs & Founders' },
  ];

  // Organiser types
  const organiserTypeOptions: { value: OrganiserType; label: string }[] = [
    { value: 'employer', label: 'Direct Employers' },
    { value: 'university', label: 'Universities' },
    { value: 'college', label: 'Colleges & Institutes' },
    { value: 'training-provider', label: 'Training Providers' },
    { value: 'professional-body', label: 'Professional & Chartered Bodies' },
    { value: 'government-public', label: 'Public & Government Bodies' },
    { value: 'startup-incubator', label: 'Startup Accelerators & VCs' },
    { value: 'recruiter', label: 'Specialist Recruiters' },
  ];

  const handleGeolocation = () => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser.');
      return;
    }

    setLocating(true);
    setLocationError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocating(false);
        onFilterChange({
          where: 'near-me',
          locationQuery: 'Current Location',
        });
      },
      (err) => {
        setLocating(false);
        setLocationError('Location permission denied. Please enter your city or postal code below.');
        onFilterChange({ where: 'all' });
      },
      { timeout: 8000 }
    );
  };

  // Count active non-default filters
  const activeFilterCount =
    (filters.searchQuery ? 1 : 0) +
    (filters.when !== 'any' ? 1 : 0) +
    (filters.where !== 'all' ? 1 : 0) +
    (filters.locationQuery ? 1 : 0) +
    (filters.categorySlug && filters.categorySlug !== 'all' ? 1 : 0) +
    filters.sectors.length +
    filters.careerStages.length +
    filters.costTypes.length +
    filters.organiserTypes.length +
    (filters.onlyFeatured ? 1 : 0) +
    (filters.under18FriendlyOnly ? 1 : 0);

  return (
    <div className="space-y-4">
      {/* Primary Discovery Bar (WHEN & WHERE Engine) */}
      <div className="p-3 sm:p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] shadow-md space-y-3">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-3">
          
          {/* Keyword Search */}
          <div className="md:col-span-4 relative">
            <Search className="w-4 h-4 text-[var(--color-taupe-300)] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={filters.searchQuery}
              onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
              placeholder="Search events, employers, skills..."
              aria-label="Search events"
              className="w-full pl-9 pr-3 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:border-[var(--accent-blue)] focus:outline-none"
            />
            {filters.searchQuery && (
              <button
                type="button"
                onClick={() => onFilterChange({ searchQuery: '' })}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-zinc-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Dominant WHEN Selector */}
          <div className="md:col-span-4 relative">
            <Calendar className="w-4 h-4 text-[var(--accent-blue)] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={filters.when}
              onChange={(e) => onFilterChange({ when: e.target.value as any })}
              aria-label="Filter by time"
              className="w-full pl-9 pr-8 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] focus:border-[var(--accent-blue)] focus:outline-none appearance-none cursor-pointer"
            >
              {whenOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-zinc-900 text-white">
                  WHEN: {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Dominant WHERE Selector */}
          <div className="md:col-span-4 relative">
            <MapPin className="w-4 h-4 text-[var(--accent-blue)] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={filters.where}
              onChange={(e) => {
                const val = e.target.value as any;
                if (val === 'near-me') {
                  handleGeolocation();
                } else {
                  onFilterChange({ where: val });
                }
              }}
              aria-label="Filter by location"
              className="w-full pl-9 pr-8 py-2.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] focus:border-[var(--accent-blue)] focus:outline-none appearance-none cursor-pointer"
            >
              {whereOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-zinc-900 text-white">
                  WHERE: {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

        </div>

        {/* Location Fallback Input / Region search */}
        {(filters.where === 'near-me' || filters.locationQuery) && (
          <div className="pt-2 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <div className="relative flex-1 w-full">
              <Navigation className="w-3.5 h-3.5 text-[var(--accent-blue)] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={filters.locationQuery}
                onChange={(e) => onFilterChange({ locationQuery: e.target.value })}
                placeholder="Enter city, region, or postal code (e.g. London, Chicago, NY, Manchester)..."
                className="w-full pl-8 pr-3 py-1.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] placeholder-zinc-500 focus:border-[var(--accent-blue)] focus:outline-none"
              />
            </div>
            <button
              type="button"
              onClick={handleGeolocation}
              disabled={locating}
              className="px-3 py-1.5 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover:border-zinc-500 text-[11px] font-medium text-[var(--color-text-secondary)] rounded-[var(--radius-sm)] whitespace-nowrap flex items-center gap-1.5 self-stretch sm:self-auto justify-center"
            >
              <Navigation className={cn('w-3 h-3 text-[var(--accent-blue)]', locating && 'animate-spin')} />
              <span>{locating ? 'Locating...' : 'Use Precise GPS'}</span>
            </button>
          </div>
        )}

        {locationError && (
          <div className="text-[11px] text-amber-400 bg-amber-950/40 border border-amber-500/20 p-2 rounded-[var(--radius-sm)]">
            {locationError}
          </div>
        )}

        {/* Secondary Filter Chips Row */}
        <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          
          <div className="flex items-center gap-1.5 flex-wrap">
            
            {/* Category Select */}
            <select
              value={filters.categorySlug || 'all'}
              onChange={(e) => onFilterChange({ categorySlug: e.target.value === 'all' ? undefined : e.target.value })}
              className="px-2.5 py-1 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-[11px] text-[var(--color-text-secondary)] rounded-[var(--radius-sm)] focus:outline-none focus:border-zinc-400 cursor-pointer"
            >
              <option value="all">All Categories</option>
              {EVENT_CATEGORIES.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>

            {/* Sector Select */}
            <select
              value={filters.sectors[0] || 'all'}
              onChange={(e) => onFilterChange({ sectors: e.target.value === 'all' ? [] : [e.target.value] })}
              className="px-2.5 py-1 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-[11px] text-[var(--color-text-secondary)] rounded-[var(--radius-sm)] focus:outline-none focus:border-zinc-400 cursor-pointer"
            >
              <option value="all">All Sectors</option>
              {EVENT_SECTORS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            {/* Cost Toggle */}
            <button
              type="button"
              onClick={() => {
                const hasFree = filters.costTypes.includes('free');
                onFilterChange({ costTypes: hasFree ? [] : ['free'] });
              }}
              className={cn(
                'px-2.5 py-1 text-[11px] font-medium rounded-[var(--radius-sm)] border transition-colors cursor-pointer',
                filters.costTypes.includes('free')
                  ? 'bg-[var(--accent-blue)] border-[var(--accent-blue)] text-white'
                  : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white'
              )}
            >
              Free Events Only
            </button>

            {/* Under 18 Safeguarding Filter */}
            <button
              type="button"
              onClick={() => onFilterChange({ under18FriendlyOnly: !filters.under18FriendlyOnly })}
              className={cn(
                'px-2.5 py-1 text-[11px] font-medium rounded-[var(--radius-sm)] border transition-colors cursor-pointer flex items-center gap-1',
                filters.under18FriendlyOnly
                  ? 'bg-emerald-800 border-emerald-600 text-white'
                  : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white'
              )}
            >
              <ShieldCheck className="w-3 h-3" />
              <span>Under 18s</span>
            </button>

            {/* Featured Only */}
            <button
              type="button"
              onClick={() => onFilterChange({ onlyFeatured: !filters.onlyFeatured })}
              className={cn(
                'px-2.5 py-1 text-[11px] font-medium rounded-[var(--radius-sm)] border transition-colors cursor-pointer flex items-center gap-1',
                filters.onlyFeatured
                  ? 'bg-white text-zinc-900 border-white font-semibold'
                  : 'bg-[var(--color-surface-base)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white'
              )}
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Featured</span>
            </button>
          </div>

          {/* More Filters & Mobile Drawer Button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setMobileDrawerOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--color-surface-base)] border border-[var(--color-border-default)] hover:border-zinc-500 rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)] font-medium"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[var(--accent-blue)] text-white text-[10px] flex items-center justify-center font-bold">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {activeFilterCount > 0 && (
              <button
                type="button"
                onClick={onResetFilters}
                className="text-[11px] text-[var(--color-taupe-300)] hover:text-white underline decoration-zinc-600"
              >
                Reset
              </button>
            )}
          </div>

        </div>

      </div>

      {/* Active Filter Pills Bar */}
      {activeFilterCount > 0 && (
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <span className="text-[11px] text-[var(--color-taupe-300)] uppercase tracking-wider font-semibold">
            Active Filters:
          </span>

          {filters.searchQuery && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-[var(--radius-tag)] text-[11px]">
              Keyword: &ldquo;{filters.searchQuery}&rdquo;
              <button type="button" onClick={() => onFilterChange({ searchQuery: '' })}>
                <X className="w-3 h-3 hover:text-white" />
              </button>
            </span>
          )}

          {filters.when !== 'any' && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-[var(--radius-tag)] text-[11px]">
              When: {filters.when.replace('-', ' ')}
              <button type="button" onClick={() => onFilterChange({ when: 'any' })}>
                <X className="w-3 h-3 hover:text-white" />
              </button>
            </span>
          )}

          {filters.where !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-[var(--radius-tag)] text-[11px]">
              Where: {filters.where.replace('-', ' ')}
              <button type="button" onClick={() => onFilterChange({ where: 'all', locationQuery: '' })}>
                <X className="w-3 h-3 hover:text-white" />
              </button>
            </span>
          )}

          {filters.locationQuery && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-[var(--radius-tag)] text-[11px]">
              Location: {filters.locationQuery}
              <button type="button" onClick={() => onFilterChange({ locationQuery: '' })}>
                <X className="w-3 h-3 hover:text-white" />
              </button>
            </span>
          )}

          {filters.categorySlug && filters.categorySlug !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-[var(--radius-tag)] text-[11px]">
              Category: {filters.categorySlug.replace('-', ' ')}
              <button type="button" onClick={() => onFilterChange({ categorySlug: undefined })}>
                <X className="w-3 h-3 hover:text-white" />
              </button>
            </span>
          )}

          {filters.sectors.map((sec) => (
            <span key={sec} className="inline-flex items-center gap-1 px-2 py-0.5 bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-[var(--radius-tag)] text-[11px]">
              {sec}
              <button
                type="button"
                onClick={() => onFilterChange({ sectors: filters.sectors.filter((s) => s !== sec) })}
              >
                <X className="w-3 h-3 hover:text-white" />
              </button>
            </span>
          ))}

          {filters.costTypes.map((c) => (
            <span key={c} className="inline-flex items-center gap-1 px-2 py-0.5 bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-[var(--radius-tag)] text-[11px]">
              Cost: {c}
              <button
                type="button"
                onClick={() => onFilterChange({ costTypes: filters.costTypes.filter((ct) => ct !== c) })}
              >
                <X className="w-3 h-3 hover:text-white" />
              </button>
            </span>
          ))}

          {filters.under18FriendlyOnly && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-950 text-emerald-300 border border-emerald-700 rounded-[var(--radius-tag)] text-[11px]">
              Under 18 Friendly
              <button type="button" onClick={() => onFilterChange({ under18FriendlyOnly: false })}>
                <X className="w-3 h-3 hover:text-white" />
              </button>
            </span>
          )}

          {filters.onlyFeatured && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-zinc-100 text-zinc-900 border border-white rounded-[var(--radius-tag)] text-[11px] font-semibold">
              Featured / Sponsored
              <button type="button" onClick={() => onFilterChange({ onlyFeatured: false })}>
                <X className="w-3 h-3 hover:text-zinc-700" />
              </button>
            </span>
          )}

          <button
            type="button"
            onClick={onResetFilters}
            className="text-[11px] text-[var(--accent-blue)] hover:underline ml-1"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Slide-over Filter Drawer (Desktop Deep Filtering & Mobile Drawer) */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-[var(--color-surface-base)] h-full p-6 overflow-y-auto border-l border-[var(--color-border-default)] shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-default)]">
                <div>
                  <h3 className="text-base font-bold text-[var(--color-text-primary)]">
                    Refine Opportunity Filters
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    Discover career events tailored to your timeline and goals.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-1.5 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Career Stage Filter Section */}
              <div className="space-y-2">
                <label className="section-label">Target Career Stage</label>
                <div className="grid grid-cols-1 gap-1.5">
                  {careerStageOptions.map((st) => {
                    const isSelected = filters.careerStages.includes(st.value);
                    return (
                      <button
                        key={st.value}
                        type="button"
                        onClick={() => {
                          const updated = isSelected
                            ? filters.careerStages.filter((s) => s !== st.value)
                            : [...filters.careerStages, st.value];
                          onFilterChange({ careerStages: updated });
                        }}
                        className={cn(
                          'p-2.5 rounded-[var(--radius-sm)] text-xs text-left border flex items-center justify-between transition-colors',
                          isSelected
                            ? 'bg-[var(--accent-blue)]/15 border-[var(--accent-blue)] text-white font-semibold'
                            : 'bg-[var(--color-surface-raised)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white'
                        )}
                      >
                        <span>{st.label}</span>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Organiser Types */}
              <div className="space-y-2">
                <label className="section-label">Organiser Type</label>
                <div className="grid grid-cols-1 gap-1.5">
                  {organiserTypeOptions.map((org) => {
                    const isSelected = filters.organiserTypes.includes(org.value);
                    return (
                      <button
                        key={org.value}
                        type="button"
                        onClick={() => {
                          const updated = isSelected
                            ? filters.organiserTypes.filter((o) => o !== org.value)
                            : [...filters.organiserTypes, org.value];
                          onFilterChange({ organiserTypes: updated });
                        }}
                        className={cn(
                          'p-2.5 rounded-[var(--radius-sm)] text-xs text-left border flex items-center justify-between transition-colors',
                          isSelected
                            ? 'bg-[var(--accent-blue)]/15 border-[var(--accent-blue)] text-white font-semibold'
                            : 'bg-[var(--color-surface-raised)] border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-white'
                        )}
                      >
                        <span>{org.label}</span>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sort By */}
              <div className="space-y-2">
                <label className="section-label">Sort Order</label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => onFilterChange({ sortBy: e.target.value as any })}
                  className="w-full p-2.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] text-xs text-[var(--color-text-primary)]"
                >
                  <option value="date-asc">Date (Earliest First)</option>
                  <option value="date-desc">Date (Latest First)</option>
                  <option value="recommended">CareerOS Recommended</option>
                  <option value="recently-added">Recently Published</option>
                </select>
              </div>

            </div>

            {/* Drawer Actions */}
            <div className="pt-4 border-t border-[var(--color-border-default)] flex items-center gap-3">
              <button
                type="button"
                onClick={onResetFilters}
                className="w-1/2 py-2.5 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] hover:bg-zinc-800 text-xs font-semibold text-zinc-300 rounded-[var(--radius-button)]"
              >
                Reset All
              </button>
              <button
                type="button"
                onClick={() => setMobileDrawerOpen(false)}
                className="w-1/2 py-2.5 bg-white text-zinc-900 text-xs font-bold rounded-[var(--radius-button)] hover:bg-zinc-100"
              >
                Show Results
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
