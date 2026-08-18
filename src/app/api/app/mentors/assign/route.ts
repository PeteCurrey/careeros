import { NextResponse, type NextRequest } from "next/server";
import { MentorAssignmentService } from "@/lib/mentors/assignment-service";
import { CareerObjectiveService } from "@/lib/mentors/objective-service";
import { getAuthUser } from "@/lib/auth/get-auth-user";

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const body = await request.json();
    const { careerTwin, careerGraph, primaryGoal } = body;

    if (!careerTwin) {
      return NextResponse.json({ error: "Career twin is required for mentor assignment." }, { status: 400 });
    }

    const assignment = MentorAssignmentService.assignCareerMentor({
      userId: user.id,
      careerTwin,
      careerGraph,
      primaryGoal,
    });

    const contextualQuestion = CareerObjectiveService.getContextualMentorQuestion(careerTwin.careerStage);

    return NextResponse.json({
      success: true,
      assignment,
      contextualQuestion,
    });
  } catch (error) {
    console.error("Error in mentor assign API:", error);
    return NextResponse.json({ error: "Failed to assign Career Mentor." }, { status: 500 });
  }
}
