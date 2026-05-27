import { NextResponse } from "next/server";
import { analyzeTranscript } from "@/lib/openai";
import type { AnalyzeApiResponse } from "@/types/analysis";
import { validateTranscript } from "@/utils/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = validateTranscript(body?.transcript);

    if (!validation.valid || !validation.value) {
      return NextResponse.json<AnalyzeApiResponse>(
        {
          success: false,
          error: validation.error ?? "Invalid transcript.",
        },
        { status: 400 }
      );
    }

    const data = await analyzeTranscript(validation.value);

    return NextResponse.json<AnalyzeApiResponse>({
      success: true,
      data,
    });
  } catch (error) {
    console.error("[POST /api/analyze]", error);

    const message =
      error instanceof Error ? error.message : "Failed to analyze transcript.";

    return NextResponse.json<AnalyzeApiResponse>(
      {
        success: false,
        error: message,
      },
      { status: 500 }
    );
  }
}
