import { NextResponse, type NextRequest } from "next/server";
import { CareerObjectiveService } from "@/lib/mentors/objective-service";
import { getAuthUser } from "@/lib/auth/get-auth-user";

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const body = await request.json();
    const { careerTwin, primaryGoal, mentorResponse } = body;

    if (!careerTwin) {
      return NextResponse.json({ error: "Career twin is required." }, { status: 400 });
    }

    const objective = CareerObjectiveService.generateInitialObjective({
      userId: user.id,
      careerTwin,
      primaryGoal,
      mentorResponse,
    });

    return NextResponse.json({
      success: true,
      objective,
    });
  } catch (error) {
    console.error("Error in objective generation API:", error);
    return NextResponse.json({ error: "Failed to formulate career objective." }, { status: 500 });
  }
}
