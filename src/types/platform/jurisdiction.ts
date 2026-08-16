/**
 * Jurisdiction & Internationalisation Types
 * 
 * The platform launches in the United States but must not assume
 * America is the only market. US-specific field names (ZIP, State, GPA)
 * must not be hardcoded into reusable platform components.
 */

export interface Jurisdiction {
  id: string;
  country_code: string; // ISO 3166-1 alpha-2
  region_code: string | null; // e.g. 'US-CA'
  name: string;
  jurisdiction_key: string; // unique platform identifier
  locale: string; // BCP 47
  language: string; // ISO 639-1
  currency_code: string; // ISO 4217
  timezone: string; // IANA
  education_system: string | null; // e.g. 'US_K12', 'UK_GCSE_ALEVELS'
  qualification_framework: string | null; // e.g. 'RQF', 'AQF', 'NQF'
  occupation_taxonomy: string | null; // e.g. 'SOC_2018', 'ISCO_08'
  employment_regime: string | null; // e.g. 'US_AT_WILL', 'EU_CONTRACT'
  work_authorisation_types: string[];
  salary_market: string | null;
  regulatory_profile: string | null;
  active: boolean;
}

export interface UserJurisdiction {
  id: string;
  profile_id: string;
  jurisdiction_id: string;
  is_primary: boolean;
  created_at: string;
}

/** Internationalisation context for rendering */
export interface I18nContext {
  locale: string;
  language: string;
  currency_code: string;
  timezone: string;
  country_code: string;
  jurisdiction_key: string;
}
