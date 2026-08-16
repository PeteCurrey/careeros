/**
 * Audit & Data Lifecycle Types
 * 
 * The audit log is append-only.
 * All sensitive operations must create an audit event.
 */

export type AuditActorType =
  | 'USER'
  | 'SYSTEM'
  | 'AI_AGENT'
  | 'ADMIN'
  | 'EMPLOYER'
  | 'SCHOOL'
  | 'API';

export interface AuditEvent {
  id: string; // UUID
  event_type: string; // namespaced event type e.g. 'data_access_grant.created'
  actor_type: AuditActorType;
  actor_id: string | null; // profile_id or system identifier
  subject_type: string | null; // what was acted on
  subject_id: string | null;
  workspace_id: string | null;
  organisation_id: string | null;
  payload: Record<string, unknown>;
  occurred_at: string;
  ip_address_hash: string | null; // hashed, not raw IP
  user_agent_hash: string | null;
  jurisdiction: string | null;
}
