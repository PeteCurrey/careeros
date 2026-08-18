import { NextResponse, type NextRequest } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { getDefaultPrivacyPreferences } from "@/types/platform/privacy";
import { getAuthUser } from "@/lib/auth/get-auth-user";

export async function GET() {
  try {
    const user = await getAuthUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const adminDb = createAdminClient();
    
    // Resolve profile linked to the authenticated user
    let { data: profile } = await adminDb
      .from("profiles")
      .select("id, age_bracket, status, auth_user_id")
      .eq("auth_user_id", user.id)
      .maybeSingle();

    // Auto-provision profile if missing
    if (!profile) {
      const { data: newProfile } = await adminDb
        .from("profiles")
        .insert({
          auth_user_id: user.id,
          display_name: user.displayName || "Career OS User",
          status: "PENDING_VERIFICATION",
          age_bracket: "ADULT_18_PLUS",
          security_assurance: "EMAIL_VERIFIED",
        })
        .select("id, age_bracket, status, auth_user_id")
        .single();
      profile = newProfile;
    }

    const profileId = profile?.id;
    const isMinor =
      profile?.age_bracket === "MINOR_13_17" ||
      profile?.age_bracket === "UNDER_13" ||
      profile?.status === "PENDING_GUARDIAN_CONSENT";

    if (!profileId) {
      const defaults = getDefaultPrivacyPreferences(user.id, isMinor);
      return NextResponse.json({ preferences: defaults, isMinor, isDefault: true });
    }

    // Fetch canonical privacy_preferences row
    const { data: existing, error: fetchError } = await adminDb
      .from("privacy_preferences")
      .select("*")
      .eq("profile_id", profileId)
      .maybeSingle();

    // Check for optional marketing communication consent
    const { data: marketingConsent } = await adminDb
      .from("consents")
      .select("id, withdrawn_at")
      .eq("subject_user_id", profileId)
      .eq("consent_type", "MARKETING_COMMUNICATIONS")
      .is("withdrawn_at", null)
      .maybeSingle();

    if (existing) {
      return NextResponse.json({
        preferences: {
          profile_id: existing.profile_id,
          defaultVisibility: existing.default_visibility || "PRIVATE",
          careerTwinVisibility: existing.career_twin_visibility || "PRIVATE",
          passportVisibility: existing.passport_visibility || "PRIVATE",
          allowMentorAccess: existing.allow_mentor_access ?? true,
          allowEmployerDiscovery: existing.allow_employer_discovery ?? false,
          employerDiscovery: existing.allow_employer_discovery ? "ANONYMOUS" : "OFF",
          opportunityRecommendationsEnabled: existing.opportunity_recommendations_enabled ?? true,
          institutionalSharingState: existing.institutional_sharing_state || "OFF",
          mentorAnalyticsSharing: existing.mentor_analytics_sharing ?? false,
          marketing: {
            productUpdates: !!marketingConsent,
            careerInsightsDigest: false,
            eventNotifications: false,
            partnerOffers: false,
          },
          updatedAt: existing.updated_at,
        },
        isMinor,
      });
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
    const user = await getAuthUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const body = await request.json().catch(() => ({}));
    const adminDb = createAdminClient();

    // Resolve profile linked to the authenticated user
    let { data: profile } = await adminDb
      .from("profiles")
      .select("id, age_bracket, status, auth_user_id")
      .eq("auth_user_id", user.id)
      .maybeSingle();

    // Idempotently auto-provision profile if missing
    if (!profile) {
      const { data: newProfile, error: profileCreateError } = await adminDb
        .from("profiles")
        .insert({
          auth_user_id: user.id,
          display_name: user.displayName || "Career OS User",
          status: "PENDING_VERIFICATION",
          age_bracket: "ADULT_18_PLUS",
          security_assurance: "EMAIL_VERIFIED",
        })
        .select("id, age_bracket, status, auth_user_id")
        .single();

      if (profileCreateError) {
        console.error("Failed to provision profile during privacy save:", profileCreateError);
        return NextResponse.json(
          { error: "Could not link user profile. Please try again." },
          { status: 500 }
        );
      }
      profile = newProfile;
    }

    const profileId = profile?.id;
    if (!profileId) {
      return NextResponse.json(
        { error: "Invalid profile identity. Please try again." },
        { status: 500 }
      );
    }

    const isMinor =
      profile?.age_bracket === "MINOR_13_17" ||
      profile?.age_bracket === "UNDER_13" ||
      profile?.status === "PENDING_GUARDIAN_CONSENT";

    // Format canonical privacy_preferences row
    const allowEmployer = isMinor ? false : (body.employerDiscovery === "ANONYMOUS" || body.allowEmployerDiscovery === true);
    const opportunityRecs = isMinor ? true : (body.opportunityRecommendationsEnabled !== false);

    const preferencesRecord = {
      profile_id: profileId,
      default_visibility: isMinor ? "PRIVATE" : (body.defaultVisibility || "PRIVATE"),
      career_twin_visibility: isMinor ? "PRIVATE" : (body.careerTwinVisibility || "PRIVATE"),
      passport_visibility: isMinor ? "PRIVATE" : (body.passportVisibility || "PRIVATE"),
      allow_mentor_access: isMinor ? true : (body.allowMentorAccess ?? true),
      allow_employer_discovery: allowEmployer,
      allow_network_visibility: isMinor ? false : (body.allowNetworkVisibility ?? false),
      opportunity_recommendations_enabled: opportunityRecs,
      institutional_sharing_state: body.institutionalSharingState || "OFF",
      mentor_analytics_sharing: isMinor ? false : (body.mentorAnalyticsSharing ?? false),
      updated_at: new Date().toISOString(),
    };

    // 1. Idempotent upsert into canonical public.privacy_preferences
    const { error: upsertError } = await adminDb
      .from("privacy_preferences")
      .upsert(preferencesRecord, { onConflict: "profile_id" });

    if (upsertError) {
      console.error("Privacy preferences canonical upsert error:", upsertError);
      return NextResponse.json(
        { error: "We couldn't save these settings. Your choices haven't been changed." },
        { status: 500 }
      );
    }

    // 2. Handle optional marketing communication consent separately in consents ledger
    const marketingOptIn = !isMinor && body.marketing?.productUpdates === true;
    try {
      if (marketingOptIn) {
        await adminDb.from("consents").upsert(
          {
            consent_type: "MARKETING_COMMUNICATIONS",
            subject_user_id: profileId,
            granted_by_user_id: profileId,
            relationship_type: "SELF",
            purpose: "Optional Career OS product and intelligence update emails",
            legal_or_policy_basis: "Explicit opt-in consent during onboarding",
            granted_at: new Date().toISOString(),
            withdrawn_at: null,
          },
          { onConflict: "subject_user_id,consent_type,organisation_id" }
        );
      } else {
        await adminDb
          .from("consents")
          .update({
            withdrawn_at: new Date().toISOString(),
            withdrawal_reason: "User opted out during privacy configuration",
          })
          .eq("subject_user_id", profileId)
          .eq("consent_type", "MARKETING_COMMUNICATIONS")
          .is("withdrawn_at", null);
      }
    } catch (consentErr) {
      // Non-fatal warning for marketing ledger
      console.warn("Marketing consent ledger notice:", consentErr);
    }

    // 3. Transition onboarding session state to PRIVACY_CONFIRMED
    try {
      await adminDb
        .from("onboarding_sessions")
        .update({
          state: "PRIVACY_CONFIRMED",
          updated_at: new Date().toISOString(),
          last_activity_at: new Date().toISOString(),
        })
        .eq("user_id", user.id);
    } catch (sessionErr) {
      console.warn("Onboarding session update notice:", sessionErr);
    }

    return NextResponse.json({
      success: true,
      preferences: preferencesRecord,
      marketingOptIn,
    });
  } catch (error) {
    console.error("Privacy preferences POST error:", error);
    return NextResponse.json(
      { error: "We couldn't save these settings. Your choices haven't been changed." },
      { status: 500 }
    );
  }
}
