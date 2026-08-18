import { createClient } from '@/lib/supabase/client';
import {
  Partner,
  PartnerContact,
  PartnerOpportunity,
  PartnerActivity,
  PartnerTask,
  PartnerDocument,
  PartnerIntegration,
  PartnerCompliance,
  PartnerMetrics,
  PartnerSuggestedTarget,
  PartnerPipelineStage,
  PartnerStrategicScoreFactors,
  STRATEGIC_SCORE_WEIGHTS,
} from '@/types/admin/partnerships';

/**
 * Calculates a 0-100 weighted strategic score across the 8 standard dimensions.
 */
export function calculateStrategicScore(factors: PartnerStrategicScoreFactors): number {
  let totalScore = 0;
  totalScore += (factors.userValue || 0) * STRATEGIC_SCORE_WEIGHTS.userValue;
  totalScore += (factors.distributionPotential || 0) * STRATEGIC_SCORE_WEIGHTS.distributionPotential;
  totalScore += (factors.strategicCredibility || 0) * STRATEGIC_SCORE_WEIGHTS.strategicCredibility;
  totalScore += (factors.productCapability || 0) * STRATEGIC_SCORE_WEIGHTS.productCapability;
  totalScore += (factors.commercialPotential || 0) * STRATEGIC_SCORE_WEIGHTS.commercialPotential;
  totalScore += (factors.dataIntelligenceValue || 0) * STRATEGIC_SCORE_WEIGHTS.dataIntelligenceValue;
  totalScore += (factors.integrationFeasibility || 0) * STRATEGIC_SCORE_WEIGHTS.integrationFeasibility;
  totalScore += (factors.relationshipAttainability || 0) * STRATEGIC_SCORE_WEIGHTS.relationshipAttainability;

  return Math.min(100, Math.max(0, Math.round(totalScore)));
}

/**
 * Evaluates mandatory launch gate criteria before a partner can move to 'LIVE'.
 */
export function evaluateLaunchGate(compliance?: PartnerCompliance | null): {
  canLaunch: boolean;
  blockers: string[];
} {
  if (!compliance) {
    return { canLaunch: false, blockers: ['Compliance record missing'] };
  }

  // If authorized override exists, allow launch
  if (compliance.override_reason && compliance.override_by) {
    return { canLaunch: true, blockers: [] };
  }

  const blockers: string[] = [];

  if (compliance.contract_status === 'blocked' || compliance.contract_status === 'pending') {
    blockers.push('Commercial agreement / MOU not executed');
  }
  if (compliance.dpa_status === 'blocked' || compliance.dpa_status === 'pending') {
    blockers.push('Data Processing Agreement (DPA) pending');
  }
  if (compliance.security_review_status === 'blocked' || compliance.security_review_status === 'pending') {
    blockers.push('Security architecture review pending');
  }
  if (compliance.privacy_review_status === 'blocked' || compliance.privacy_review_status === 'pending') {
    blockers.push('Privacy compliance review pending');
  }
  if (compliance.minors_review_status === 'blocked' || compliance.minors_review_status === 'pending') {
    blockers.push('Youth / Minor safeguarding review pending');
  }
  if (!compliance.data_flows_documented) {
    blockers.push('Data flow mapping not documented');
  }
  if (compliance.technical_qa_status === 'blocked' || compliance.technical_qa_status === 'pending') {
    blockers.push('Technical integration QA incomplete');
  }

  return {
    canLaunch: blockers.length === 0,
    blockers,
  };
}

/**
 * Fetches all partners with optional filtering.
 */
export async function getPartners(filters?: {
  stage?: PartnerPipelineStage;
  priority?: string;
  category?: string;
  search?: string;
}): Promise<Partner[]> {
  const adminDb = createClient();
  let query = adminDb
    .from('partners')
    .select('*')
    .eq('active', true)
    .order('strategic_score', { ascending: false });

  if (filters?.stage) {
    query = query.eq('relationship_status', filters.stage);
  }
  if (filters?.priority) {
    query = query.eq('priority', filters.priority);
  }
  if (filters?.category) {
    query = query.eq('primary_category', filters.category);
  }
  if (filters?.search) {
    query = query.or(`name.ilike.%${filters.search}%,description.ilike.%${filters.search}%`);
  }

  const { data, error } = await query;
  if (error || !data) {
    console.error('Error fetching partners:', error);
    return [];
  }

  return data as Partner[];
}

/**
 * Fetches a single partner by slug with all related entities.
 */
export async function getPartnerBySlug(slug: string): Promise<{
  partner: Partner | null;
  contacts: PartnerContact[];
  opportunities: PartnerOpportunity[];
  activities: PartnerActivity[];
  tasks: PartnerTask[];
  documents: PartnerDocument[];
  integrations: PartnerIntegration[];
  compliance: PartnerCompliance | null;
  metrics: PartnerMetrics[];
}> {
  const adminDb = createClient();

  const { data: partner, error: partnerError } = await adminDb
    .from('partners')
    .select('*')
    .eq('slug', slug)
    .single();

  if (partnerError || !partner) {
    return {
      partner: null,
      contacts: [],
      opportunities: [],
      activities: [],
      tasks: [],
      documents: [],
      integrations: [],
      compliance: null,
      metrics: [],
    };
  }

  const partnerId = partner.id;

  const [
    { data: contacts },
    { data: opportunities },
    { data: activities },
    { data: tasks },
    { data: documents },
    { data: integrations },
    { data: compliance },
    { data: metrics },
  ] = await Promise.all([
    adminDb.from('partner_contacts').select('*').eq('partner_id', partnerId).order('created_at', { ascending: false }),
    adminDb.from('partner_opportunities').select('*').eq('partner_id', partnerId).order('created_at', { ascending: false }),
    adminDb.from('partner_activities').select('*').eq('partner_id', partnerId).order('activity_date', { ascending: false }),
    adminDb.from('partner_tasks').select('*').eq('partner_id', partnerId).order('due_date', { ascending: true }),
    adminDb.from('partner_documents').select('*').eq('partner_id', partnerId).order('created_at', { ascending: false }),
    adminDb.from('partner_integrations').select('*').eq('partner_id', partnerId).order('created_at', { ascending: false }),
    adminDb.from('partner_compliance').select('*').eq('partner_id', partnerId).single(),
    adminDb.from('partner_metrics').select('*').eq('partner_id', partnerId).order('reporting_period', { ascending: false }),
  ]);

  return {
    partner: partner as Partner,
    contacts: (contacts || []) as PartnerContact[],
    opportunities: (opportunities || []) as PartnerOpportunity[],
    activities: (activities || []) as PartnerActivity[],
    tasks: (tasks || []) as PartnerTask[],
    documents: (documents || []) as PartnerDocument[],
    integrations: (integrations || []) as PartnerIntegration[],
    compliance: (compliance || null) as PartnerCompliance | null,
    metrics: (metrics || []) as PartnerMetrics[],
  };
}

/**
 * Updates a partner's pipeline stage and logs an immutable activity audit event.
 */
export async function updatePartnerStage(
  partnerId: string,
  newStage: PartnerPipelineStage,
  note?: string,
  actorUserId?: string
): Promise<{ success: boolean; error?: string }> {
  const adminDb = createClient();

  const { data: currentPartner, error: fetchError } = await adminDb
    .from('partners')
    .select('name, relationship_status')
    .eq('id', partnerId)
    .single();

  if (fetchError || !currentPartner) {
    return { success: false, error: 'Partner not found.' };
  }

  // If attempting to move to LIVE, check compliance launch gate
  if (newStage === 'LIVE') {
    const { data: compliance } = await adminDb
      .from('partner_compliance')
      .select('*')
      .eq('partner_id', partnerId)
      .single();

    const gate = evaluateLaunchGate(compliance);
    if (!gate.canLaunch) {
      return {
        success: false,
        error: `Cannot launch partner: ${gate.blockers.join('; ')}`,
      };
    }
  }

  const { error: updateError } = await adminDb
    .from('partners')
    .update({
      relationship_status: newStage,
      updated_at: new Date().toISOString(),
      last_activity_at: new Date().toISOString(),
    })
    .eq('id', partnerId);

  if (updateError) {
    return { success: false, error: updateError.message };
  }

  // Record activity
  await adminDb.from('partner_activities').insert({
    partner_id: partnerId,
    activity_type: 'note',
    activity_date: new Date().toISOString(),
    summary: `Stage updated from ${currentPartner.relationship_status} to ${newStage}`,
    details: note || null,
    created_by: actorUserId || null,
  });

  // Record audit log
  await adminDb.from('partner_audit_events').insert({
    partner_id: partnerId,
    action: 'stage_changed',
    actor_user_id: actorUserId || null,
    previous_state: { stage: currentPartner.relationship_status },
    new_state: { stage: newStage },
    notes: note || null,
  });

  return { success: true };
}
