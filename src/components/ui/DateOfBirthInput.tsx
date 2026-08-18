'use client';

import React, { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from 'react';

export interface DateOfBirthInputProps {
  id?: string;
  value?: string; // Expects ISO YYYY-MM-DD or MM/DD/YYYY
  onChange: (isoDate: string, formattedDisplay: string, isValid: boolean) => void;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  autoFocus?: boolean;
}

/**
 * Parses MM/DD/YYYY display text into ISO YYYY-MM-DD string with strict validation.
 */
export function parseUSDateToISO(displayValue: string): { isoDate: string; isValid: boolean } {
  const cleaned = displayValue.replace(/\D/g, '');
  if (cleaned.length !== 8) {
    return { isoDate: '', isValid: false };
  }

  const mm = parseInt(cleaned.substring(0, 2), 10);
  const dd = parseInt(cleaned.substring(2, 4), 10);
  const yyyy = parseInt(cleaned.substring(4, 8), 10);

  if (mm < 1 || mm > 12) return { isoDate: '', isValid: false };
  if (dd < 1 || dd > 31) return { isoDate: '', isValid: false };
  if (yyyy < 1900 || yyyy > new Date().getFullYear()) return { isoDate: '', isValid: false };

  // Month-day boundary check (including leap year)
  const daysInMonth = new Date(yyyy, mm, 0).getDate();
  if (dd > daysInMonth) return { isoDate: '', isValid: false };

  // Future date check
  const dateObj = new Date(yyyy, mm - 1, dd);
  if (dateObj > new Date()) return { isoDate: '', isValid: false };

  const mmStr = mm.toString().padStart(2, '0');
  const ddStr = dd.toString().padStart(2, '0');
  const isoDate = `${yyyy}-${mmStr}-${ddStr}`;

  return { isoDate, isValid: true };
}

/**
 * Converts ISO YYYY-MM-DD into MM/DD/YYYY display text.
 */
export function convertISOToUSDisplay(isoDate: string): string {
  if (!isoDate || !/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) return '';
  const [yyyy, mm, dd] = isoDate.split('-');
  return `${mm}/${dd}/${yyyy}`;
}

export const DateOfBirthInput: React.FC<DateOfBirthInputProps> = ({
  id = 'date-of-birth-input',
  value = '',
  onChange,
  required = false,
  disabled = false,
  error,
  className = '',
  autoFocus = false,
}) => {
  const [displayValue, setDisplayValue] = useState<string>(() => {
    if (value.includes('-')) {
      return convertISOToUSDisplay(value);
    }
    return value;
  });

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value && value.includes('-')) {
      const converted = convertISOToUSDisplay(value);
      if (converted !== displayValue) {
        setDisplayValue(converted);
      }
    }
  }, [value]);

  const formatRawDigits = (digits: string): string => {
    const limited = digits.substring(0, 8);
    if (limited.length <= 2) {
      return limited;
    }
    if (limited.length <= 4) {
      return `${limited.substring(0, 2)}/${limited.substring(2)}`;
    }
    return `${limited.substring(0, 2)}/${limited.substring(2, 4)}/${limited.substring(4, 8)}`;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const digitsOnly = raw.replace(/\D/g, '');
    const formatted = formatRawDigits(digitsOnly);

    setDisplayValue(formatted);

    const { isoDate, isValid } = parseUSDateToISO(formatted);
    onChange(isoDate, formatted, isValid);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // If pressing Backspace when cursor is right after a slash, handle cleanly
    if (e.key === 'Backspace' && inputRef.current) {
      const selStart = inputRef.current.selectionStart;
      if (selStart === 3 || selStart === 6) {
        e.preventDefault();
        const digits = displayValue.replace(/\D/g, '');
        const newDigits = digits.slice(0, -1);
        const formatted = formatRawDigits(newDigits);
        setDisplayValue(formatted);
        const { isoDate, isValid } = parseUSDateToISO(formatted);
        onChange(isoDate, formatted, isValid);
      }
    }
  };

  return (
    <div className="w-full space-y-1">
      <div className="relative">
        <input
          ref={inputRef}
          id={id}
          type="text"
          inputMode="numeric"
          pattern="[0-9/]*"
          maxLength={10}
          placeholder="MM/DD/YYYY"
          value={displayValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          required={required}
          disabled={disabled}
          autoFocus={autoFocus}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : `${id}-hint`}
          className={`w-full px-3 py-2.5 text-sm rounded-lg border font-mono tracking-wider ${
            error
              ? 'border-[var(--color-danger)] focus:ring-[var(--color-danger)]'
              : 'border-[var(--color-border-default)] focus:ring-[var(--color-focus)]'
          } bg-[var(--color-surface-base)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)] placeholder:font-sans placeholder:tracking-normal focus:outline-none focus:ring-2 transition-shadow ${className}`}
        />
      </div>
      <p id={`${id}-hint`} className="text-[11px] text-[var(--color-text-tertiary)] font-sans">
        US format: Month / Day / Year (e.g. 04/21/1989)
      </p>
      {error && (
        <p id={`${id}-error`} className="text-xs text-[var(--color-danger)]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
