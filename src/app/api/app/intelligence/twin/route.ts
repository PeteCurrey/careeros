import { NextResponse, type NextRequest } from "next/server";
import { createClient, createAdminClient } from "@/lib/supabase/server";
import { CareerIntelligenceService } from "@/lib/intelligence/career-intelligence-service";
import { CareerContext } from "@/types/platform/onboarding";

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const body = await request.json();
    const { context, skills = [], experiences = [], education = [] } = body;

    if (!context || !context.careerStage) {
      return NextResponse.json({ error: "Career context is required to synthesize twin." }, { status: 400 });
    }

    const fullContext: CareerContext = {
      id: `ctx_${user.id.substring(0, 8)}`,
      userId: user.id,
      displayName: context.displayName || "User",
      city: context.city || "United States",
      state: context.state || "US",
      zipCode: context.zipCode,
      careerStage: context.careerStage,
      primaryGoal: context.primaryGoal || "Career Progression",
      secondaryGoals: context.secondaryGoals || [],
      branchData: context.branchData || {},
      provenance: {
        provenance: "USER_DECLARED",
        confidence: 1.0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    };

    const careerTwin = CareerIntelligenceService.generateInitialCareerTwin({
      userId: user.id,
      context: fullContext,
      skills,
      experiences,
      education,
    });

    const passport = CareerIntelligenceService.generatePassportSeed({
      userId: user.id,
      skills,
      experiences,
      education,
    });

    const graphSeed = CareerIntelligenceService.generateCareerGraphSeed(careerTwin);

    return NextResponse.json({
      success: true,
      careerTwin,
      passport,
      graphSeed,
    });
  } catch (error) {
    console.error("Error generating career twin intelligence:", error);
    return NextResponse.json({ error: "Failed to generate Career Twin." }, { status: 500 });
  }
}
