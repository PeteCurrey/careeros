/**
 * CareerOS Partnership Target & Relationship Management System — Type Definitions
 */

export type PartnerRelationshipType =
  | 'commercial_partner'
  | 'strategic_alliance'
  | 'education_partner'
  | 'workforce_partner'
  | 'public_workforce_resource'
  | 'nonprofit_partner'
  | 'vendor';

export type PartnerPipelineStage =
  | 'IDENTIFIED'
  | 'RESEARCHING'
  | 'QUALIFIED'
  | 'INTRO_NEEDED'
  | 'OUTREACH_READY'
  | 'CONTACTED'
  | 'ENGAGED'
  | 'DISCOVERY'
  | 'PROPOSAL'
  | 'NEGOTIATION'
  | 'LEGAL_PROCUREMENT'
  | 'AGREED'
  | 'INTEGRATION'
  | 'LAUNCH_READY'
  | 'LIVE'
  | 'EXPANSION'
  | 'PAUSED'
  | 'DECLINED'
  | 'CLOSED';

export type PartnerPriorityLevel =
  | 'P0'
  | 'P1'
  | 'P2'
  | 'P3'
  | 'P4'
  | 'INFRASTRUCTURE';

export type PartnerComplianceStatus =
  | 'not_required'
  | 'pending'
  | 'passed'
  | 'blocked';

export type LogoPermissionStatus =
  | 'not_requested'
  | 'requested'
  | 'approved'
  | 'restricted'
  | 'denied'
  | 'expired';

export interface PartnerStrategicScoreFactors {
  userValue: number;              // Weight: 20%
  distributionPotential: number;  // Weight: 20%
  strategicCredibility: number;   // Weight: 15%
  productCapability: number;      // Weight: 15%
  commercialPotential: number;    // Weight: 10%
  dataIntelligenceValue: number;  // Weight: 10%
  integrationFeasibility: number; // Weight: 5%
  relationshipAttainability: number; // Weight: 5%
}

export const STRATEGIC_SCORE_WEIGHTS: Record<keyof PartnerStrategicScoreFactors, number> = {
  userValue: 0.20,
  distributionPotential: 0.20,
  strategicCredibility: 0.15,
  productCapability: 0.15,
  commercialPotential: 0.10,
  dataIntelligenceValue: 0.10,
  integrationFeasibility: 0.05,
  relationshipAttainability: 0.05,
};

export interface PartnerHypothesis {
  problem?: string;
  user?: string;
  careerOSContribution?: string;
  partnerContribution?: string;
  jointOutcome?: string;
  commercialModel?: string;
  proofPoint?: string;
}

export interface Partner {
  id: string;
  name: string;
  slug: string;
  legal_name?: string | null;
  website_url?: string | null;
  logo_url?: string | null;
  organization_type?: string;
  primary_category: string;
  secondary_categories: string[];
  description?: string | null;
  headquarters_country?: string | null;
  headquarters_region?: string | null;
  geographic_reach?: string;
  target_audiences: string[];
  relationship_type: PartnerRelationshipType;
  relationship_status: PartnerPipelineStage;
  priority: PartnerPriorityLevel;
  strategic_score: number;
  strategic_score_factors: PartnerStrategicScoreFactors;
  strategic_rationale?: string | null;
  partner_value_proposition?: string | null;
  partnership_hypothesis?: PartnerHypothesis | null;
  best_route_in?: string | null;
  potential_introducer?: string | null;
  next_best_action?: string | null;
  next_action_at?: string | null;
  waiting_on?: string | null;
  waiting_since?: string | null;
  estimated_value?: string | null;
  potential_revenue_model?: string | null;
  potential_cost_model?: string | null;
  public_display_approved: boolean;
  public_name?: string | null;
  public_description?: string | null;
  public_logo?: string | null;
  public_category?: string | null;
  featured_publicly: boolean;
  public_sort_order: number;
  logo_permission_status: LogoPermissionStatus;
  active: boolean;
  owner_user_id?: string | null;
  created_at: string;
  updated_at: string;
  last_activity_at?: string | null;
}

export interface PartnerContact {
  id: string;
  partner_id: string;
  first_name: string;
  last_name: string;
  job_title?: string | null;
  department?: string | null;
  seniority?: string | null;
  email?: string | null;
  phone?: string | null;
  linkedin_url?: string | null;
  relationship_strength: 'none' | 'cold' | 'warm' | 'strong';
  is_primary_owner: boolean;
  is_executive_sponsor: boolean;
  decision_maker: boolean;
  influencer: boolean;
  technical_contact: boolean;
  legal_contact: boolean;
  marketing_contact: boolean;
  notes?: string | null;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface PartnerOpportunity {
  id: string;
  partner_id: string;
  title: string;
  opportunity_type: string;
  description?: string | null;
  careeros_value_proposition?: string | null;
  partner_value_proposition?: string | null;
  target_audience?: string | null;
  proposed_model?: string | null;
  revenue_opportunity?: string | null;
  cost_estimate?: string | null;
  probability: number;
  strategic_value: number;
  stage: PartnerPipelineStage;
  expected_close_date?: string | null;
  owner_user_id?: string | null;
  created_at: string;
  updated_at: string;
}

export interface PartnerActivity {
  id: string;
  partner_id: string;
  opportunity_id?: string | null;
  contact_id?: string | null;
  activity_type:
    | 'research'
    | 'email'
    | 'call'
    | 'meeting'
    | 'intro'
    | 'demo'
    | 'proposal'
    | 'follow_up'
    | 'negotiation'
    | 'legal'
    | 'technical'
    | 'contract'
    | 'integration'
    | 'launch'
    | 'review'
    | 'note';
  activity_date: string;
  summary: string;
  details?: string | null;
  outcome?: string | null;
  created_by?: string | null;
  created_at: string;
}

export interface PartnerTask {
  id: string;
  partner_id: string;
  opportunity_id?: string | null;
  contact_id?: string | null;
  title: string;
  description?: string | null;
  owner_user_id?: string | null;
  due_date?: string | null;
  priority: PartnerPriorityLevel;
  status: 'open' | 'in_progress' | 'waiting' | 'blocked' | 'complete' | 'canceled';
  waiting_on_entity?: string | null;
  waiting_since?: string | null;
  completed_at?: string | null;
  created_at: string;
  updated_at: string;
}

export interface PartnerDocument {
  id: string;
  partner_id: string;
  opportunity_id?: string | null;
  document_type:
    | 'research'
    | 'outreach'
    | 'deck'
    | 'proposal'
    | 'business_case'
    | 'nda'
    | 'mou'
    | 'contract'
    | 'dpa'
    | 'security_review'
    | 'technical_spec'
    | 'integration_plan'
    | 'marketing_approval'
    | 'logo_permission'
    | 'other';
  title: string;
  storage_url?: string | null;
  version: string;
  status: 'draft' | 'in_review' | 'approved' | 'executed' | 'expired';
  confidential: boolean;
  uploaded_by?: string | null;
  created_at: string;
  updated_at: string;
}

export interface PartnerIntegration {
  id: string;
  partner_id: string;
  integration_name: string;
  integration_type: string;
  api_available: boolean;
  api_docs_url?: string | null;
  authentication_method?: string | null;
  data_direction: 'inbound' | 'outbound' | 'bi_directional';
  data_categories: string[];
  pii_involved: boolean;
  minor_data_involved: boolean;
  dpa_required: boolean;
  security_review_required: boolean;
  implementation_status:
    | 'not_assessed'
    | 'researching'
    | 'technically_feasible'
    | 'blocked'
    | 'planned'
    | 'development'
    | 'testing'
    | 'awaiting_partner'
    | 'production_ready'
    | 'live'
    | 'paused'
    | 'retired';
  sandbox_available: boolean;
  sandbox_status?: string | null;
  production_status?: string | null;
  technical_owner?: string | null;
  last_health_check?: string | null;
  notes?: string | null;
  created_at: string;
  updated_at: string;
}

export interface PartnerCompliance {
  id: string;
  partner_id: string;
  nda_status: PartnerComplianceStatus;
  contract_status: PartnerComplianceStatus;
  dpa_status: PartnerComplianceStatus;
  security_review_status: PartnerComplianceStatus;
  privacy_review_status: PartnerComplianceStatus;
  minors_review_status: PartnerComplianceStatus;
  ai_governance_status: PartnerComplianceStatus;
  data_flows_documented: boolean;
  trademark_permission_status: PartnerComplianceStatus;
  logo_permission_status: PartnerComplianceStatus;
  public_reference_permission: PartnerComplianceStatus;
  technical_qa_status: PartnerComplianceStatus;
  support_escalation_agreed: boolean;
  renewal_date?: string | null;
  termination_date?: string | null;
  legal_owner?: string | null;
  override_reason?: string | null;
  override_by?: string | null;
  updated_at: string;
}

export interface PartnerMetrics {
  id: string;
  partner_id: string;
  reporting_period: string;
  referrals_sent: number;
  referrals_received: number;
  registrations: number;
  conversions: number;
  users_supported: number;
  opportunities_created: number;
  placements: number;
  course_enrolments: number;
  credential_completions: number;
  attributed_revenue: number;
  attributed_cost: number;
  net_value: number;
  custom_metrics?: Record<string, unknown>;
  created_at: string;
}

export interface PartnerSuggestedTarget {
  id: string;
  organisation_name: string;
  website_url?: string | null;
  reason_identified: string;
  source: string;
  potential_category: string;
  initial_strategic_rationale?: string | null;
  review_status: 'pending' | 'approved' | 'dismissed' | 'watching';
  discovered_at: string;
}

export interface PartnerAuditEvent {
  id: string;
  partner_id?: string | null;
  action: string;
  actor_user_id?: string | null;
  previous_state?: Record<string, unknown>;
  new_state?: Record<string, unknown>;
  notes?: string | null;
  created_at: string;
}
