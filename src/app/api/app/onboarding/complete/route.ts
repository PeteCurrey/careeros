import { NextResponse, type NextRequest } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { getAuthUser } from "@/lib/auth/get-auth-user";

const ONBOARDING_VERSION = "1.0.0";

/**
 * POST /api/app/onboarding/complete
 *
 * Final onboarding completion gate.
 * Validates all required stages are genuinely complete before granting dashboard access.
 * Sets ONBOARDING_COMPLETE and stamps completed_at + onboarding_version.
 */
export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const body = await request.json().catch(() => ({}));
    const { initialActions } = body;

    const adminDb = createAdminClient();

    // Read the current session state
    const { data: session } = await adminDb
      .from("onboarding_sessions")
      .select("*")
      .eq("user_id", user.id)
      .maybeSingle();

    if (!session) {
      return NextResponse.json(
        { error: "No onboarding session found. Cannot complete onboarding." },
        { status: 400 }
      );
    }

    // Validate required completion checklist
    const checks = {
      hasCareerContext: false,
      hasTwin: false,
      hasMentorAssignment: false,
      hasObjective: false,
      hasPrivacyConfirmed: false,
    };

    // Check career context
    const { data: careerCtx } = await adminDb
      .from("career_contexts")
      .select("user_id")
      .eq("user_id", user.id)
      .maybeSingle();
    checks.hasCareerContext = !!careerCtx;

    // Check career twin
    const { data: twin } = await adminDb
      .from("career_twins")
      .select("id")
      .eq("user_id", user.id)
      .maybeSingle();
    checks.hasTwin = !!twin;

    // Check mentor assignment (stored in career twin or separate table)
    const { data: mentor } = await adminDb
      .from("mentor_assignments")
      .select("id")
      .eq("user_id", user.id)
      .maybeSingle();
    checks.hasMentorAssignment = !!mentor;

    // Check objective
    const { data: objective } = await adminDb
      .from("career_objectives")
      .select("id")
      .eq("user_id", user.id)
      .maybeSingle();
    checks.hasObjective = !!objective;

    // Check privacy preferences confirmed
    let hasPrivacy = false;
    const { data: profileRecord } = await adminDb
      .from("profiles")
      .select("id")
      .eq("auth_user_id", user.id)
      .maybeSingle();

    if (profileRecord?.id) {
      const { data: privacy } = await adminDb
        .from("privacy_preferences")
        .select("profile_id")
        .eq("profile_id", profileRecord.id)
        .maybeSingle();
      hasPrivacy = !!privacy;
    }
    
    // Also accept session state if already progressed through privacy step
    if (!hasPrivacy && (session.state === "PRIVACY_CONFIRMED" || session.state === "ONBOARDING_COMPLETE")) {
      hasPrivacy = true;
    }
    checks.hasPrivacyConfirmed = hasPrivacy;

    const allComplete = Object.values(checks).every(Boolean);

    if (!allComplete) {
      const missing = Object.entries(checks)
        .filter(([, v]) => !v)
        .map(([k]) => k);
      return NextResponse.json(
        {
          error: "Onboarding is not complete. Missing required stages.",
          missing,
          checks,
        },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();

    // Mark onboarding complete
    await adminDb
      .from("onboarding_sessions")
      .update({
        state: "ONBOARDING_COMPLETE",
        completed_at: now,
        updated_at: now,
        last_activity_at: now,
        onboarding_version: ONBOARDING_VERSION,
      })
      .eq("user_id", user.id);

    // Mark profile as ACTIVE
    await adminDb
      .from("profiles")
      .update({
        status: "ACTIVE",
        onboarding_completed_at: now,
        updated_at: now,
      })
      .eq("auth_user_id", user.id);

    // Store initial recommended actions if provided
    if (initialActions && Array.isArray(initialActions) && initialActions.length > 0) {
      try {
        const actionRows = initialActions.map((action: { title: string; description: string; type: string }, idx: number) => ({
          user_id: user.id,
          title: action.title,
          description: action.description,
          action_type: action.type || "EXPLORE",
          priority: idx + 1,
          source: "ONBOARDING_ACTIVATION",
          created_at: now,
          updated_at: now,
        }));
        await adminDb.from("user_recommended_actions").insert(actionRows);
      } catch (actionsErr) {
        // Non-fatal — actions can be regenerated later
        console.warn("Failed to store initial recommended actions:", actionsErr);
      }
    }

    // Audit log
    try {
      await adminDb.from("user_security_events").insert({
        profile_id: (await adminDb.from("profiles").select("id").eq("auth_user_id", user.id).maybeSingle()).data?.id,
        event_type: "onboarding_access_granted",
        success: true,
        metadata: {
          onboarding_version: ONBOARDING_VERSION,
          completed_at: now,
          checks,
        },
      });
    } catch (auditErr) {
      console.warn("Audit log warning:", auditErr);
    }

    return NextResponse.json({
      success: true,
      message: "Onboarding complete. Career OS access granted.",
      completedAt: now,
      checks,
    });
  } catch (error) {
    console.error("Onboarding completion error:", error);
    return NextResponse.json(
      { error: "Failed to complete onboarding." },
      { status: 500 }
    );
  }
}
