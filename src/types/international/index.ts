/**
 * Internationalisation Foundation Types
 * 
 * The platform launches in the United States but the architecture must
 * not hardcode American assumptions. These types allow the platform to
 * be configured per market without restructuring.
 */

/** ISO 4217 currency codes */
export type CurrencyCode = 'USD' | 'GBP' | 'EUR' | 'CAD' | 'AUD' | string;

/** Education system identifiers */
export type EducationSystem =
  | 'US_K12'
  | 'US_HIGHER_ED'
  | 'UK_GCSE_ALEVELS'
  | 'UK_BTEC'
  | 'EU_BACHELOR'
  | string;

/** Qualification framework identifiers */
export type QualificationFramework =
  | 'US_NQFL' // US National Qualifications
  | 'RQF' // UK Regulated Qualifications Framework
  | 'AQF' // Australian Qualifications Framework
  | 'EQF' // European Qualifications Framework
  | string;

/** Occupation taxonomy systems */
export type OccupationTaxonomy =
  | 'SOC_2018' // US Standard Occupational Classification 2018
  | 'ISCO_08' // International Standard Classification of Occupations
  | 'NOC_2021' // Canadian National Occupational Classification
  | 'SOC_2020_UK' // UK SOC
  | string;

/** Employment regime identifiers */
export type EmploymentRegime =
  | 'US_AT_WILL'
  | 'EU_FIXED_TERM_CONTRACT'
  | 'UK_EMPLOYMENT_CONTRACT'
  | string;

/** Salary market identifiers */
export type SalaryMarket =
  | 'US_NATIONAL'
  | 'US_NYC'
  | 'US_SF'
  | 'UK_NATIONAL'
  | 'EU_NATIONAL'
  | string;

/** Internationalisation configuration for a market */
export interface MarketConfig {
  country_code: string;
  locale: string;
  currency_code: CurrencyCode;
  timezone: string;
  education_system: EducationSystem | null;
  qualification_framework: QualificationFramework | null;
  occupation_taxonomy: OccupationTaxonomy | null;
  employment_regime: EmploymentRegime | null;
  salary_market: SalaryMarket | null;
  regulatory_references: string[];
}

/** US launch market configuration */
export const US_MARKET_CONFIG: MarketConfig = {
  country_code: 'US',
  locale: 'en-US',
  currency_code: 'USD',
  timezone: 'America/New_York',
  education_system: 'US_K12',
  qualification_framework: 'US_NQFL',
  occupation_taxonomy: 'SOC_2018',
  employment_regime: 'US_AT_WILL',
  salary_market: 'US_NATIONAL',
  regulatory_references: ['FERPA', 'COPPA', 'EEOC', 'ADA', 'ADEA', 'NYC_Local_Law_144'],
};
