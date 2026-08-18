import { ExtractionStatus, ExtractedResumeData } from "@/types/platform/onboarding";

export function extractStructuredResumeText(rawText: string): ExtractedResumeData {
  if (!rawText || rawText.trim().length === 0) {
    return {
      extractedSkills: [],
      extractedCertifications: [],
      extractedAchievements: [],
      extractionStatus: "UNCERTAIN",
      confidence: 0.1,
    };
  }

  const lines = rawText.split("\n").map((l) => l.trim()).filter(Boolean);

  const knownSkills = [
    "TypeScript", "JavaScript", "Python", "React", "Next.js", "Node.js",
    "PostgreSQL", "SQL", "Docker", "Kubernetes", "AWS", "GCP", "CI/CD",
    "Electrical Wiring", "HVAC", "CNC Machining", "PLC Programming", "Hydraulics",
    "Clinical Triage", "EHR Systems", "Patient Care", "GCP Compliance",
    "Financial Modeling", "M&A", "Capital Allocation", "P&L Management", "Forecasting",
    "Team Leadership", "Product Management", "Strategic Planning", "Negotiation"
  ];

  const extractedSkills = knownSkills.filter((skill) =>
    new RegExp(`\\b${skill.replace(/\+/g, "\\+").replace(/\./g, "\\.")}\\b`, "i").test(rawText)
  );

  const certKeywords = ["OSHA", "PMP", "AWS Certified", "CompTIA", "CPA", "RN License", "EPA 608", "Six Sigma", "CFA"];
  const extractedCertifications = certKeywords.filter((cert) =>
    new RegExp(`\\b${cert.replace(/\+/g, "\\+").replace(/\./g, "\\.")}\\b`, "i").test(rawText)
  );

  let roleTitle: string | undefined = undefined;
  let organization: string | undefined = undefined;

  for (let i = 0; i < Math.min(lines.length, 10); i++) {
    const line = lines[i];
    if (line && /engineer|developer|technician|manager|director|nurse|specialist|electrician|analyst|associate/i.test(line)) {
      roleTitle = line.substring(0, 60);
      break;
    }
  }

  return {
    roleTitle,
    organization,
    extractedSkills,
    extractedCertifications,
    extractedAchievements: [],
    extractionStatus: extractedSkills.length > 0 ? "EXTRACTED" : "UNCERTAIN",
    confidence: extractedSkills.length > 0 ? 0.85 : 0.4,
  };
}
