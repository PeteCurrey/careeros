/**
 * AI Provider Abstraction
 * 
 * Application business logic depends on these interfaces — NOT directly
 * on any vendor SDK. This allows switching providers or routing tasks
 * to different models without rewriting application logic.
 */

export type ModelCapability =
  | 'conversation'
  | 'structured_extraction'
  | 'matching'
  | 'analysis'
  | 'voice'
  | 'vision'
  | 'document_understanding'
  | 'agent_execution'
  | 'assessment'
  | 'research'
  | 'embedding';

export interface AIProvider {
  id: string;
  name: string; // e.g. 'google', 'anthropic', 'openai'
  capabilities: ModelCapability[];
  active: boolean;
}

export interface AIModel {
  id: string;
  provider_id: string;
  model_id: string; // vendor model identifier
  model_version: string;
  capabilities: ModelCapability[];
  context_window: number;
  active: boolean;
}

export interface ModelPolicy {
  id: string;
  model_id: string;
  safety_level: 'STANDARD' | 'ELEVATED' | 'STRICT'; // youth content filtering etc.
  max_tokens: number | null;
  temperature: number | null;
  applicable_workspace_types: string[];
}

export interface SafetyPolicy {
  id: string;
  name: string;
  blocks_categories: string[];
  applicable_to: string[]; // workspace types or audience types
  version: string;
}

export interface PromptTemplate {
  id: string;
  name: string;
  capability: ModelCapability;
  template: string;
  version: string;
  model_constraints: string[]; // which model IDs this is compatible with
}

export interface ToolDefinition {
  name: string;
  description: string;
  parameters: Record<string, unknown>; // JSON Schema
}
