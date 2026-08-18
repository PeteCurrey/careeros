import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { DailyMentorWelcomeService } from "@/lib/mentors/daily-welcome-service";

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
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
