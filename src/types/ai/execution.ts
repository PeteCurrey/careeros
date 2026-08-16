import type { ModelCapability } from './provider';

/**
 * The role AI played in an employment-related workflow.
 * 
 * Career OS Employer Agent is scoped to:
 * DISCOVERY | MATCHING | RECOMMENDATION | DECISION_SUPPORT
 * 
 * SCREENING and DECISION require explicit human-in-the-loop design
 * and additional governance review before enablement.
 */
export type AIEmploymentRole =
  | 'DISCOVERY'
  | 'RECOMMENDATION'
  | 'MATCHING'
  | 'RANKING'
  | 'SCREENING'
  | 'DECISION_SUPPORT'
  | 'DECISION';

export interface AIExecution {
  id: string; // UUID (ai_execution_id)
  
  // Provider & model provenance
  provider: string;
  model: string;
  model_version: string;
  capability: ModelCapability;
  
  // Policy context
  policy_version: string | null;
  prompt_template_id: string | null;
  prompt_template_version: string | null;
  
  // Input provenance
  input_sources: InputSource[];
  retrieval_sources: RetrievalSource[];
  
  // Output
  recommendation: string | null; // structured or freeform recommendation
  user_facing_rationale: string | null; // what the user sees — NOT internal reasoning
  key_factors: string[]; // decision factors surfaced to user
  confidence_or_uncertainty: ConfidenceIndicator | null;
  limitations: string[]; // known limitations flagged to user
  
  // Employment role (when applicable)
  employment_role: AIEmploymentRole | null;
  
  // Human accountability
  human_action: HumanAction | null;
  human_override: boolean;
  user_feedback: UserFeedback | null;
  
  // Metadata
  workspace_id: string | null;
  created_at: string;
  correlation_id: string | null; // links related executions
}

export interface InputSource {
  source_type: string; // e.g. 'career_twin_field', 'job_description', 'user_query'
  source_id: string | null;
  description: string | null;
}

export interface RetrievalSource {
  source_type: string; // e.g. 'vector_store', 'knowledge_base', 'external_api'
  source_id: string | null;
  retrieved_at: string;
}

export interface ConfidenceIndicator {
  level: 'HIGH' | 'MEDIUM' | 'LOW' | 'UNCERTAIN';
  explanation: string | null;
}

export interface HumanAction {
  action_type: 'ACCEPTED' | 'MODIFIED' | 'REJECTED' | 'DEFERRED';
  actor_id: string;
  acted_at: string;
  notes: string | null;
}

export interface UserFeedback {
  rating: 'HELPFUL' | 'NOT_HELPFUL' | 'INCORRECT' | 'INAPPROPRIATE' | null;
  comment: string | null;
  submitted_at: string;
}
