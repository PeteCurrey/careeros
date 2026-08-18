import { NextResponse, type NextRequest } from "next/server";
import { DailyMentorWelcomeService } from "@/lib/mentors/daily-welcome-service";
import { getAuthUser } from "@/lib/auth/get-auth-user";

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const body = await request.json().catch(() => ({}));
    const { action, localDate } = body;

    const todayStr = localDate || new Date().toISOString().split("T")[0];

    if (action === "played") {
      DailyMentorWelcomeService.markPlayed(user.id, todayStr);
    } else if (action === "skipped") {
      DailyMentorWelcomeService.markSkipped(user.id, todayStr);
    }

    return NextResponse.json({
      success: true,
      actionRecorded: action,
      localDate: todayStr,
    });
  } catch (error) {
    console.error("Error updating mentor welcome action:", error);
    return NextResponse.json(
      { error: "Failed to record mentor welcome action." },
      { status: 500 }
    );
  }
}
