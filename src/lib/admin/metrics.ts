import { createAdminClient } from '@/lib/supabase/server';
import { CommandCentreStats, ActionCenterItem } from '@/types/admin';

/**
 * Fetches real production metrics from the database without any fabricated or mock data.
 */
export async function getCommandCentreMetrics(): Promise<CommandCentreStats> {
  try {
    const supabase = createAdminClient();

    // 1. User metrics
    const { count: totalUsers } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true });

    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

    const { count: newUsers7d } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', sevenDaysAgo);

    const { count: activeUsers30d } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true })
      .gte('updated_at', thirtyDaysAgo);

    // 2. Events metrics
    const { count: publishedEvents } = await supabase
      .from('events')
      .select('*', { count: 'exact', head: true })
      .in('moderation_status', ['approved', 'live']);

    const { count: pendingEventReviews } = await supabase
      .from('event_submissions')
      .select('*', { count: 'exact', head: true })
      .in('status', ['submitted', 'under_review']);

    const { count: discoveredCandidates } = await supabase
      .from('event_candidates')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'pending');

    // 3. Organisations metrics
    const { count: totalOrganisations } = await supabase
      .from('organisations')
      .select('*', { count: 'exact', head: true });

    const { count: totalSchools } = await supabase
      .from('organisations')
      .select('*', { count: 'exact', head: true })
      .eq('type', 'SCHOOL');

    const { count: totalEmployers } = await supabase
      .from('organisations')
      .select('*', { count: 'exact', head: true })
      .eq('type', 'EMPLOYER');

    // 4. AI usage & cost metrics
    const todayMidnight = new Date();
    todayMidnight.setHours(0, 0, 0, 0);

    const { data: aiLogsToday } = await supabase
      .from('ai_usage_logs')
      .select('cost_cents, status')
      .gte('occurred_at', todayMidnight.toISOString());

    const aiRequestsToday = aiLogsToday?.length || 0;
    const aiCostTodayUsd = (aiLogsToday?.reduce((acc, log) => acc + (Number(log.cost_cents) || 0), 0) || 0) / 100;
    const aiErrorsToday = aiLogsToday?.filter((l) => l.status === 'error').length || 0;
    const aiErrorRate = aiRequestsToday > 0 ? (aiErrorsToday / aiRequestsToday) * 100 : 0;

    // 5. System & operational health
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const { count: failedJobs24h } = await supabase
      .from('job_runs')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'failed')
      .gte('started_at', oneDayAgo);

    const { count: failingSourcesCount } = await supabase
      .from('event_sources')
      .select('*', { count: 'exact', head: true })
      .eq('health_status', 'failing');

    const { count: disconnectedIntegrationsCount } = await supabase
      .from('integrations')
      .select('*', { count: 'exact', head: true })
      .neq('status', 'connected');

    return {
      totalUsers: totalUsers || 0,
      activeUsers30d: activeUsers30d || 0,
      newUsers7d: newUsers7d || 0,
      publishedEvents: publishedEvents || 0,
      pendingEventReviews: pendingEventReviews || 0,
      discoveredCandidates: discoveredCandidates || 0,
      totalOrganisations: totalOrganisations || 0,
      totalSchools: totalSchools || 0,
      totalEmployers: totalEmployers || 0,
      aiRequestsToday,
      aiCostTodayUsd,
      aiErrorRate,
      failedJobs24h: failedJobs24h || 0,
      failingSourcesCount: failingSourcesCount || 0,
      disconnectedIntegrationsCount: disconnectedIntegrationsCount || 0,
    };
  } catch (error) {
    console.error('Error fetching command centre metrics from DB:', error);
    // Return genuine zero-state on connection failure (never fake data)
    return {
      totalUsers: 0,
      activeUsers30d: 0,
      newUsers7d: 0,
      publishedEvents: 0,
      pendingEventReviews: 0,
      discoveredCandidates: 0,
      totalOrganisations: 0,
      totalSchools: 0,
      totalEmployers: 0,
      aiRequestsToday: 0,
      aiCostTodayUsd: 0,
      aiErrorRate: 0,
      failedJobs24h: 0,
      failingSourcesCount: 0,
      disconnectedIntegrationsCount: 0,
    };
  }
}

/**
 * Builds the real Action Centre operational queue based on genuine database state.
 */
export async function getActionCenterItems(): Promise<ActionCenterItem[]> {
  const items: ActionCenterItem[] = [];

  try {
    const supabase = createAdminClient();

    // 1. Pending event submissions
    const { count: pendingSubmissions } = await supabase
      .from('event_submissions')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'submitted');

    if (pendingSubmissions && pendingSubmissions > 0) {
      items.push({
        id: 'act-event-submissions',
        category: 'needs_review',
        title: 'Event Submissions Awaiting Moderation',
        description: `${pendingSubmissions} new organiser event ${pendingSubmissions === 1 ? 'submission requires' : 'submissions require'} verification and editorial approval.`,
        count: pendingSubmissions,
        urgency: 'high',
        actionHref: '/admin/events/submissions',
        actionLabel: 'Review Submissions',
        sourceSystem: 'Events Moderation Queue',
        timestamp: new Date().toISOString(),
      });
    }

    // 2. Discovered event candidates
    const { count: pendingCandidates } = await supabase
      .from('event_candidates')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'pending');

    if (pendingCandidates && pendingCandidates > 0) {
      items.push({
        id: 'act-event-candidates',
        category: 'needs_review',
        title: 'Autonomous Discovery Candidates',
        description: `${pendingCandidates} event ${pendingCandidates === 1 ? 'candidate was' : 'candidates were'} extracted from configured sources and ready for classification review.`,
        count: pendingCandidates,
        urgency: 'medium',
        actionHref: '/admin/events/discovery',
        actionLabel: 'Open Discovery Queue',
        sourceSystem: 'Event Discovery Engine',
        timestamp: new Date().toISOString(),
      });
    }

    // 3. Failing event sources
    const { data: failingSources } = await supabase
      .from('event_sources')
      .select('id, name, domain, consecutive_failures')
      .eq('health_status', 'failing')
      .limit(3);

    if (failingSources && failingSources.length > 0) {
      items.push({
        id: 'act-failing-sources',
        category: 'needs_attention',
        title: 'Event Sources Experiencing Crawl Failures',
        description: `${failingSources.length} source ${failingSources.length === 1 ? 'domain is' : 'domains are'} currently failing consecutive discovery sweeps (${failingSources.map((s) => s.domain).join(', ')}).`,
        count: failingSources.length,
        urgency: 'high',
        actionHref: '/admin/events/sources',
        actionLabel: 'Inspect Sources',
        sourceSystem: 'Crawler Monitor',
        timestamp: new Date().toISOString(),
      });
    }

    // 4. Failed scheduled jobs
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const { data: failedJobRuns } = await supabase
      .from('job_runs')
      .select('id, job_id, error_message, started_at')
      .eq('status', 'failed')
      .gte('started_at', oneDayAgo)
      .limit(3);

    if (failedJobRuns && failedJobRuns.length > 0) {
      items.push({
        id: 'act-failed-jobs',
        category: 'needs_attention',
        title: 'Background Job Failures in Last 24 Hours',
        description: `${failedJobRuns.length} scheduled background task ${failedJobRuns.length === 1 ? 'execution failed' : 'executions failed'}.`,
        count: failedJobRuns.length,
        urgency: 'high',
        actionHref: '/admin/system/jobs',
        actionLabel: 'View Job Logs',
        sourceSystem: 'System Scheduler',
        timestamp: new Date().toISOString(),
      });
    }
  } catch (error) {
    console.error('Error fetching action centre items:', error);
  }

  return items;
}
