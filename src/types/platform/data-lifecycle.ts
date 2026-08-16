import type { RetentionClass } from './identity';

/**
 * Data Lifecycle Types
 * 
 * Standard audit and lifecycle fields for domain records.
 */

export interface DataLifecycle {
  created_at: string;
  updated_at: string;
  data_source: string | null; // how the data was created
  purpose: string | null; // lawful basis / purpose
  retention_class: RetentionClass | null;
  retention_until: string | null;
  archived_at: string | null;
  deleted_at: string | null;
}
