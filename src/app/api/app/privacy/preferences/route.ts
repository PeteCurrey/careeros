import { NextResponse, type NextRequest } from "next/server";
import { createClient, createAdminClient } from "@/lib/supabase/server";
import { getDefaultPrivacyPreferences } from "@/types/platform/privacy";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }
    const adminDb = createAdminClient();
    const { data: profile } = await adminDb
      .from("profiles").select("id, age_bracket, status")
      .eq("auth_user_id", user.id).maybeSingle();
    const isMinor =
      profile?.age_bracket === "MINOR_13_17" ||
      profile?.age_bracket === "UNDER_13" ||
      profile?.status === "PENDING_GUARDIAN_CONSENT";
    const { data: existing } = await adminDb
      .from("user_privacy_preferences").select("*")
      .eq("user_id", user.id).maybeSingle();
    if (existing) {
      return NextResponse.json({ preferences: existing, isMinor });
    }
    const defaults = getDefaultPrivacyPreferences(user.id, isMinor);
    return NextResponse.json({ preferences: defaults, isMinor, isDefault: true });
  } catch (error) {
    console.error("Privacy preferences GET error:", error);
    return NextResponse.json({ error: "Failed to fetch privacy preferences." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }
    const body = await request.json();
    const adminDb = createAdminClient();
    const { data: profile } = await adminDb
      .from("profiles").select("id, age_bracket, status")
      .eq("auth_user_id", user.id).maybeSingle();
    const isMinor =
      profile?.age_bracket === "MINOR_13_17" ||
      profile?.age_bracket === "UNDER_13" ||
      profile?.status === "PENDING_GUARDIAN_CONSENT";

    const preferences = {
      user_id: user.id,
      career_twin_visibility: isMinor ? "PRIVATE" : (body.careerTwinVisibility ?? "PRIVATE"),
      passport_visibility: isMinor ? "PRIVATE" : (body.passportVisibility ?? "PRIVATE"),
      employer_discovery: isMinor ? "OFF" : (body.employerDiscovery ?? "OFF"),
      opportunity_recommendations_enabled: body.opportunityRecommendationsEnabled ?? true,
      institutional_sharing_state: body.institutionalSharingState ?? "OFF",
      mentor_analytics_sharing: isMinor ? false : (body.mentorAnalyticsSharing ?? false),
      marketing_product_updates: body.marketing?.productUpdates ?? false,
      marketing_insights_digest: body.marketing?.careerInsightsDigest ?? false,
      marketing_event_notifications: body.marketing?.eventNotifications ?? false,
      marketing_partner_offers: body.marketing?.partnerOffers ?? false,
      youth_restrictions_applied: isMinor,
      public_profile_enabled: false,
      updated_at: new Date().toISOString(),
    };

    const { error: upsertError } = await adminDb
      .from("user_privacy_preferences")
      .upsert(preferences, { onConflict: "user_id" });

    if (upsertError) {
      return NextResponse.json({ error: "Failed to save preferences." }, { status: 500 });
    }

    try {
      await adminDb.from("onboarding_sessions").update({
        state: "PRIVACY_CONFIRMED",
        updated_at: new Date().toISOString(),
        last_activity_at: new Date().toISOString(),
      }).eq("user_id", user.id);
    } catch (sessionErr) {
      console.warn("Session state update warning:", sessionErr);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Privacy preferences POST error:", error);
    return NextResponse.json({ error: "Failed to save privacy preferences." }, { status: 500 });
  }
}
