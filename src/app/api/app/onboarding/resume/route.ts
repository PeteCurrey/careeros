import { NextResponse, type NextRequest } from "next/server";
import { extractStructuredResumeText } from "@/lib/onboarding/resume-parser";
import { getAuthUser } from "@/lib/auth/get-auth-user";

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No resume file provided." }, { status: 400 });
    }

    // Limit to 5MB and check file type
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "File exceeds 5MB size limit." }, { status: 400 });
    }

    const allowedTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain"];
    if (!allowedTypes.includes(file.type) && !file.name.match(/\.(pdf|docx|txt)$/i)) {
      return NextResponse.json({ error: "Only PDF, DOCX, or text files are accepted." }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const textBuffer = Buffer.from(arrayBuffer).toString("utf-8"); // Basic text representation

    const extracted = extractStructuredResumeText(textBuffer);

    return NextResponse.json({
      success: true,
      extracted,
      message: "Resume extracted with provenance RESUME_EXTRACTED.",
    });
  } catch (error) {
    console.error("Error in resume extraction endpoint:", error);
    return NextResponse.json({ error: "Failed to process resume file." }, { status: 500 });
  }
}
